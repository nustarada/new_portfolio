import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send email notification
      if (process.env.SENDGRID_API_KEY) {
        const emailContent = {
          to: 'contact@karnkalaa.in',
          from: 'noreply@karnkalaa.in', // This should be a verified sender
          subject: `New Contact Form Submission: ${validatedData.subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #334155;">Contact Details:</h3>
                <p><strong>Name:</strong> ${validatedData.name}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Location:</strong> ${validatedData.location}</p>
                <p><strong>Subject:</strong> ${validatedData.subject}</p>
              </div>
              
              <div style="background: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3 style="margin-top: 0; color: #334155;">Project Details:</h3>
                <p style="line-height: 1.6; white-space: pre-wrap;">${validatedData.message}</p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px; font-size: 12px; color: #64748b;">
                <p>This message was sent from the contact form on your portfolio website.</p>
                <p>Submitted at: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          `,
        };
        
        await sgMail.send(emailContent);
      }
      
      res.json({ success: true, contact });
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
        message: "Failed to submit contact form" 
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
