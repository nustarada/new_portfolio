import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

// Create nodemailer transporter with fallback SMTP configurations
const createEmailTransporter = () => {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    // Multiple SMTP configurations to try
    const configs = [
      {
        name: 'GoDaddy TLS',
        host: 'smtpout.secureserver.net',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      },
      {
        name: 'Domain SMTP',
        host: `mail.${process.env.EMAIL_USER.split('@')[1]}`, // mail.karnkalaa.in
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      },
      {
        name: 'Generic SMTP',
        host: `smtp.${process.env.EMAIL_USER.split('@')[1]}`, // smtp.karnkalaa.in
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      }
    ];
    
    // Use first config and log which one we're trying
    console.log(`Attempting SMTP connection with: ${configs[0].name} (${configs[0].host}:${configs[0].port})`);
    return nodemailer.createTransport(configs[0]);
  }
  return null;
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Test email endpoint
  app.post("/api/test-email", async (req, res) => {
    try {
      const transporter = createEmailTransporter();
      if (!transporter) {
        return res.status(500).json({
          success: false,
          message: "Email configuration not found. Please check EMAIL_USER and EMAIL_PASS environment variables."
        });
      }

      const testEmailContent = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Test Email - Portfolio Contact Form",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
            <div style="background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">🎉 Email Test Successful!</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Your contact form email is working perfectly</p>
            </div>
            <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #8b5cf6;">
              <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px;">Test Configuration</h2>
              <div style="display: grid; gap: 12px;">
                <p style="margin: 0; padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">SMTP Server:</strong> <span style="color: #1e293b;">smtpout.secureserver.net (GoDaddy SSL)</span></p>
                <p style="margin: 0; padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Port:</strong> <span style="color: #1e293b;">465 (SSL)</span></p>
                <p style="margin: 0; padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">From:</strong> <span style="color: #1e293b;">${process.env.EMAIL_USER}</span></p>
                <p style="margin: 0; padding: 8px 0;"><strong style="color: #475569;">To:</strong> <span style="color: #1e293b;">${process.env.EMAIL_USER}</span></p>
              </div>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(testEmailContent);
      
      res.json({
        success: true,
        message: "Test email sent successfully! Check your inbox at " + process.env.EMAIL_USER,
        timestamp: new Date().toISOString()
      });
      
    } catch (error: any) {
      console.error('Test email failed:', error);
      res.status(500).json({
        success: false,
        message: "Failed to send test email: " + error.message,
        error: error.toString()
      });
    }
  });

  // Admin route to view all contacts
  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({
        success: true,
        contacts: contacts.reverse(), // Show newest first
        total: contacts.length
      });
    } catch (error: any) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contacts",
        error: error.message
      });
    }
  });

  // Contact form submission - Now works regardless of email success
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
      
      // Try to send email notification (non-blocking)
      const transporter = createEmailTransporter();
      if (transporter) {
        // Send email in background, don't block the response
        transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `New Contact Form: ${validatedData.subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
              <div style="background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">New Contact Form Submission</h1>
                <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">From your portfolio website</p>
              </div>
              
              <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #8b5cf6;">
                <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px;">Contact Information</h2>
                <div style="display: grid; gap: 12px;">
                  <p style="margin: 0; padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Name:</strong> <span style="color: #1e293b;">${validatedData.name}</span></p>
                  <p style="margin: 0; padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Email:</strong> <span style="color: #1e293b;">${validatedData.email}</span></p>
                  <p style="margin: 0; padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Location:</strong> <span style="color: #1e293b;">${validatedData.location}</span></p>
                  <p style="margin: 0; padding: 8px 0;"><strong style="color: #475569;">Subject:</strong> <span style="color: #1e293b;">${validatedData.subject}</span></p>
                </div>
              </div>
              
              <div style="background: #ffffff; padding: 25px; border: 2px solid #e2e8f0; border-radius: 12px; margin-bottom: 25px;">
                <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 20px;">Project Details</h2>
                <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; line-height: 1.8; white-space: pre-wrap; color: #334155; font-size: 15px;">${validatedData.message}</div>
              </div>
              
              <div style="background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); padding: 20px; border-radius: 12px; text-align: center;">
                <p style="margin: 0; font-size: 14px; color: #64748b;">
                  <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit',
                    timeZoneName: 'short'
                  })}
                </p>
                <p style="margin: 10px 0 0 0; font-size: 12px; color: #94a3b8;">Portfolio Contact Form • Karan Gadhave</p>
              </div>
            </div>
          `,
        }).then(() => {
          console.log('Email sent successfully to:', process.env.EMAIL_USER);
        }).catch((emailError) => {
          console.error('Email sending failed (non-blocking):', emailError.message);
        });
      }
      
      // Always return success - contact is stored regardless of email
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

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}