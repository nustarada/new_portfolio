import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

// Create email transporter using GoDaddy SMTP settings
const createEmailTransporter = () => {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }
  return null;
};

// Send email notification
async function sendContactNotification(contactData: any) {
  const transporter = createEmailTransporter();
  if (!transporter) return false;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${contactData.subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">New Portfolio Contact</h1>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px;">
              <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px;">Contact Details</h2>
              <div style="line-height: 1.6;">
                <p style="margin: 10px 0;"><strong>Name:</strong> ${contactData.name}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${contactData.email}" style="color: #667eea;">${contactData.email}</a></p>
                <p style="margin: 10px 0;"><strong>Location:</strong> ${contactData.location}</p>
                <p style="margin: 10px 0;"><strong>Subject:</strong> ${contactData.subject}</p>
              </div>
            </div>
            
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 20px;">Message</h2>
              <div style="background: #f1f5f9; padding: 20px; border-radius: 6px; white-space: pre-wrap; line-height: 1.6; color: #374151;">${contactData.message}</div>
            </div>
          </div>
          
          <div style="padding: 20px; text-align: center; color: #6b7280; font-size: 14px;">
            <p style="margin: 0;">Received ${new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
        </div>
      `,
    });
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Test email endpoint
  app.post("/api/test-email", async (req, res) => {
    try {
      const transporter = createEmailTransporter();
      if (!transporter) {
        return res.status(400).json({
          success: false,
          message: "Email configuration missing. Please check EMAIL_USER and EMAIL_PASS environment variables."
        });
      }

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Email Configuration Test",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #059669;">✅ Email Test Successful!</h2>
            <p>Your GoDaddy email configuration is working correctly.</p>
            <div style="background: #f0f9ff; padding: 15px; border-radius: 5px; margin: 15px 0;">
              <strong>Configuration:</strong><br>
              • Server: smtpout.secureserver.net<br>
              • Port: 465 (SSL)<br>
              • Email: ${process.env.EMAIL_USER}
            </div>
            <p style="color: #6b7280; font-size: 14px;">
              Sent at ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      });

      res.json({
        success: true,
        message: "Test email sent successfully! Check your inbox.",
        email: process.env.EMAIL_USER
      });
    } catch (error: any) {
      console.error('Email test failed:', error);
      res.status(500).json({
        success: false,
        message: `Email test failed: ${error.message}`,
        details: error.code || 'Unknown error'
      });
    }
  });

  // Contact form submission with email notification
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      console.log('New contact form submission:', {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        timestamp: new Date().toISOString()
      });
      
      // Send email notification (non-blocking)
      sendContactNotification(validatedData).then(emailSent => {
        if (emailSent) {
          console.log(`✅ Email notification sent successfully to ${process.env.EMAIL_USER} for: ${validatedData.subject}`);
        } else {
          console.log(`❌ Email notification failed for: ${validatedData.subject} (contact still saved)`);
        }
      }).catch(err => {
        console.error('Email notification error:', err.message);
      });
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        contact 
      });
    } catch (error: any) {
      console.error('Contact form error:', error);
      
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Failed to submit contact form. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}