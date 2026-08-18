import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Environment variable validation
function validateEnvironment() {
  const requiredEnvVars = ['NODE_ENV'];
  const productionEnvVars = ['DATABASE_URL']; // Add other production-specific vars here
  
  log('Validating environment variables...');
  
  // Check required environment variables
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      log(`⚠️  Warning: ${envVar} not set. Using default value.`);
    }
  }
  
  // Check production-specific environment variables
  if (process.env.NODE_ENV === 'production') {
    for (const envVar of productionEnvVars) {
      if (!process.env[envVar]) {
        log(`✗ Error: ${envVar} is required in production but not set.`);
        process.exit(1);
      }
    }
  }
  
  // Log important environment information
  log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`);
  if (process.env.DATABASE_URL) {
    log(`✓ Database URL configured`);
  }
  
  log('Environment validation completed.');
}

// Validate environment before starting the app
validateEnvironment();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Configure port from environment variable or default to 5000
  // In production, use PORT env var; in development, use 5000
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
  const host = process.env.HOST || "0.0.0.0";
  
  // Validate port number
  if (isNaN(port) || port < 1 || port > 65535) {
    log(`Invalid port number: ${process.env.PORT}. Using default port 5000`);
  }

  log(`Starting server in ${process.env.NODE_ENV || 'development'} mode...`);
  log(`Attempting to bind to ${host}:${port}`);

  server.listen({
    port,
    host,
    // reusePort is not supported on macOS (ENOTSUP); only enable on Linux
    ...(process.platform === "linux" ? { reusePort: true } : {}),
  }, () => {
    log(`✓ Server successfully started and listening on ${host}:${port}`);
    log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`);
    log(`✓ Process ID: ${process.pid}`);
  }).on('error', (err: Error) => {
    log(`✗ Failed to start server: ${err.message}`);
    if (err.message.includes('EADDRINUSE')) {
      log(`✗ Port ${port} is already in use. Please check if another process is running on this port.`);
    } else if (err.message.includes('EACCES')) {
      log(`✗ Permission denied to bind to port ${port}. Try using a port number greater than 1024.`);
    }
    process.exit(1);
  });

  // Handle graceful shutdown
  process.on('SIGTERM', () => {
    log('Received SIGTERM signal, shutting down gracefully...');
    server.close(() => {
      log('Server closed');
      process.exit(0);
    });
  });

  process.on('SIGINT', () => {
    log('Received SIGINT signal, shutting down gracefully...');
    server.close(() => {
      log('Server closed');
      process.exit(0);
    });
  });
})().catch((error) => {
  log(`✗ Unhandled error during server startup: ${error.message}`);
  log(`Stack trace: ${error.stack}`);
  process.exit(1);
});
