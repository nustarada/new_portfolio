import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

// Create nodemailer transporter for custom domain email via GoDaddy
const createEmailTransporter = () => {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      host: 'smtpout.secureserver.net', // GoDaddy SMTP server
      port: 587, // TLS port
      secure: false, // Use STARTTLS
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER, // Your custom domain email: contact@karnkalaa.in
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });
  }
  return null;
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Test email endpoint
  app.post("/api/test-email", async (req, res) => {
    try {
      // First, verify transporter creation
      const transporter = createEmailTransporter();
      if (!transporter) {
        return res.status(500).json({
          success: false,
          message: "Email configuration not found. Please check EMAIL_USER and EMAIL_PASS environment variables."
        });
      }

      // Test the connection first
      try {
        await transporter.verify();
        console.log('SMTP connection verified successfully');
      } catch (verifyError: any) {
        console.error('SMTP verification failed:', verifyError.message);
        return res.status(500).json({
          success: false,
          message: `SMTP connection failed: ${verifyError.message}. Please check your email credentials.`,
          details: {
            error: verifyError.message,
            code: verifyError.code,
            suggestion: "This usually means wrong password or need for app-specific password. Check GoDaddy email settings."
          }
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
                <p style="margin: 0; padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">SMTP Server:</strong> <span style="color: #1e293b;">smtpout.secureserver.net (GoDaddy)</span></p>
                <p style="margin: 0; padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Port:</strong> <span style="color: #1e293b;">465 (SSL)</span></p>
                <p style="margin: 0; padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">From:</strong> <span style="color: #1e293b;">${process.env.EMAIL_USER}</span></p>
                <p style="margin: 0; padding: 8px 0;"><strong style="color: #475569;">To:</strong> <span style="color: #1e293b;">${process.env.EMAIL_USER}</span></p>
              </div>
            </div>
            
            <div style="background: #ffffff; padding: 25px; border: 2px solid #e2e8f0; border-radius: 12px; margin-bottom: 25px;">
              <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 20px;">Next Steps</h2>
              <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; line-height: 1.8; color: #334155; font-size: 15px;">
                ✅ Your email configuration is working correctly<br>
                ✅ Contact form submissions will now be sent to your email<br>
                ✅ You can start receiving real contact form messages
              </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); padding: 20px; border-radius: 12px; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #64748b;">
                <strong>Test sent:</strong> ${new Date().toLocaleString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </p>
              <p style="margin: 10px 0 0 0; font-size: 12px; color: #94a3b8;">Portfolio Email Test • Karan Gadhave</p>
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

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Try to send email notification using free Gmail SMTP
      const transporter = createEmailTransporter();
      if (transporter) {
        try {
          const emailContent = {
            from: process.env.EMAIL_USER, // This will be contact@karnkalaa.in
            to: process.env.EMAIL_USER, // Send to yourself
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
          };
          
          await transporter.sendMail(emailContent);
          console.log('Email sent successfully to contact@karnkalaa.in');
        } catch (emailError) {
          console.error('Email sending failed:', emailError);
          // Continue with success response even if email fails
        }
      }
      
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

  // Email test page
  app.get("/test-email", (req, res) => {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Test - Portfolio</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh; padding: 20px; display: flex; align-items: center; justify-content: center;
          }
          .container { 
            max-width: 500px; background: white; border-radius: 12px; padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          }
          h1 { color: #2d3748; font-size: 2rem; margin-bottom: 20px; text-align: center; }
          .test-btn { 
            width: 100%; background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
            color: white; border: none; padding: 15px; border-radius: 8px; font-size: 16px;
            cursor: pointer; margin-bottom: 20px; transition: transform 0.2s;
          }
          .test-btn:hover { transform: translateY(-2px); }
          .test-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
          .result { 
            padding: 15px; border-radius: 8px; margin-top: 15px; display: none;
          }
          .success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
          .error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
          .loading { text-align: center; margin-top: 10px; display: none; }
          .spinner { 
            width: 20px; height: 20px; border: 2px solid #f3f3f3; border-top: 2px solid #8b5cf6;
            border-radius: 50%; animation: spin 1s linear infinite; display: inline-block; margin-right: 10px;
          }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>📧 Email Test</h1>
          <p style="color: #718096; margin-bottom: 25px; text-align: center;">
            Test your contact form email configuration
          </p>
          
          <button id="testBtn" class="test-btn">Send Test Email</button>
          
          <div id="loading" class="loading">
            <span class="spinner"></span>
            Sending test email...
          </div>
          
          <div id="result" class="result"></div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f7fafc; border-radius: 8px; font-size: 14px; color: #4a5568;">
            <strong>What this test does:</strong><br>
            • Connects to GoDaddy SMTP servers<br>
            • Sends a test email to contact@karnkalaa.in<br>
            • Verifies your email configuration is working
          </div>
        </div>

        <script>
          document.getElementById('testBtn').addEventListener('click', async () => {
            const btn = document.getElementById('testBtn');
            const loading = document.getElementById('loading');
            const result = document.getElementById('result');
            
            btn.disabled = true;
            loading.style.display = 'block';
            result.style.display = 'none';
            
            try {
              const response = await fetch('/api/test-email', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({})
              });
              
              const data = await response.json();
              
              if (data.success) {
                result.className = 'result success';
                result.innerHTML = '✅ ' + data.message;
              } else {
                result.className = 'result error';
                result.innerHTML = '❌ ' + data.message;
              }
            } catch (error) {
              result.className = 'result error';
              result.innerHTML = '❌ Network error: ' + error.message;
            }
            
            loading.style.display = 'none';
            result.style.display = 'block';
            btn.disabled = false;
          });
        </script>
      </body>
      </html>
    `;
    res.send(html);
  });

  // Admin interface to view contact submissions
  app.get("/admin/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submissions - Admin</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              min-height: 100vh; padding: 20px;
            }
            .container { max-width: 1200px; margin: 0 auto; }
            .header { 
              background: white; border-radius: 12px; padding: 30px; margin-bottom: 30px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            .header h1 { color: #2d3748; font-size: 2rem; margin-bottom: 10px; }
            .header p { color: #718096; font-size: 1.1rem; }
            .stats { 
              display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
              gap: 20px; margin-bottom: 30px;
            }
            .stat-card { 
              background: white; border-radius: 12px; padding: 25px; text-align: center;
              box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            }
            .stat-number { font-size: 2.5rem; font-weight: bold; color: #8b5cf6; }
            .stat-label { color: #718096; margin-top: 8px; }
            .contact-card { 
              background: white; border-radius: 12px; padding: 25px; margin-bottom: 20px;
              box-shadow: 0 5px 15px rgba(0,0,0,0.08); border-left: 4px solid #8b5cf6;
            }
            .contact-header { 
              display: flex; justify-content: space-between; align-items: start; 
              margin-bottom: 20px; flex-wrap: wrap; gap: 10px;
            }
            .contact-name { font-size: 1.4rem; font-weight: bold; color: #2d3748; }
            .contact-date { color: #718096; font-size: 0.9rem; }
            .contact-info { 
              display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
              gap: 15px; margin-bottom: 20px;
            }
            .info-item { 
              background: #f7fafc; padding: 12px; border-radius: 8px;
              border-left: 3px solid #8b5cf6;
            }
            .info-label { font-weight: 600; color: #4a5568; font-size: 0.85rem; }
            .info-value { color: #2d3748; margin-top: 4px; }
            .message-section { 
              background: #f7fafc; border-radius: 8px; padding: 20px;
              border-left: 3px solid #10b981;
            }
            .message-label { 
              font-weight: 600; color: #4a5568; margin-bottom: 10px;
              font-size: 0.9rem;
            }
            .message-content { 
              color: #2d3748; line-height: 1.6; white-space: pre-wrap;
              background: white; padding: 15px; border-radius: 6px;
            }
            .no-contacts { 
              text-align: center; padding: 60px 20px; background: white;
              border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            }
            .no-contacts h2 { color: #4a5568; margin-bottom: 10px; }
            .no-contacts p { color: #718096; }
            @media (max-width: 768px) {
              .header h1 { font-size: 1.5rem; }
              .contact-header { flex-direction: column; }
              .contact-info { grid-template-columns: 1fr; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 Contact Form Submissions</h1>
              <p>Admin dashboard for viewing portfolio contact form submissions</p>
            </div>
            
            <div class="stats">
              <div class="stat-card">
                <div class="stat-number">${contacts.length}</div>
                <div class="stat-label">Total Submissions</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${contacts.filter(c => {
                  const today = new Date();
                  const contactDate = new Date(c.createdAt);
                  return contactDate.toDateString() === today.toDateString();
                }).length}</div>
                <div class="stat-label">Today</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${contacts.filter(c => {
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return new Date(c.createdAt) > weekAgo;
                }).length}</div>
                <div class="stat-label">This Week</div>
              </div>
            </div>

            ${contacts.length === 0 ? `
              <div class="no-contacts">
                <h2>No submissions yet</h2>
                <p>Contact form submissions will appear here when visitors fill out your contact form.</p>
              </div>
            ` : contacts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map(contact => `
              <div class="contact-card">
                <div class="contact-header">
                  <div class="contact-name">${contact.name}</div>
                  <div class="contact-date">${new Date(contact.createdAt).toLocaleString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric',
                    hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
                  })}</div>
                </div>
                
                <div class="contact-info">
                  <div class="info-item">
                    <div class="info-label">EMAIL</div>
                    <div class="info-value">${contact.email}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">LOCATION</div>
                    <div class="info-value">${contact.location}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">SUBJECT</div>
                    <div class="info-value">${contact.subject}</div>
                  </div>
                </div>
                
                <div class="message-section">
                  <div class="message-label">PROJECT DETAILS</div>
                  <div class="message-content">${contact.message}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </body>
        </html>
      `;
      res.send(html);
    } catch (error) {
      res.status(500).send('<h1>Error loading contacts</h1>');
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
