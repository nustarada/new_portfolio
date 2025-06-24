# Overview

This is a full-stack web application built with React/TypeScript frontend and Express.js backend. It's a portfolio website for Karan Gadhave featuring a modern design with AI-powered design tools, advanced animations, and a contact form system. The application uses a PostgreSQL database with Drizzle ORM for data management and includes an admin panel for managing contact submissions.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite for development and production builds
- **Routing**: Wouter (lightweight React router)
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables and animations
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for complex animations and transitions

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Memory-based storage with fallback to database
- **Email Service**: Nodemailer with GoDaddy SMTP integration
- **API**: RESTful endpoints for contact form and admin functionality

## Key Features
- **Interactive Portfolio**: Custom cursor, particle background, liquid grid effects
- **Contact Form**: Multi-step form with location selection and email notifications
- **Admin Panel**: Contact management dashboard
- **Responsive Design**: Mobile-first approach with advanced CSS grid and flexbox
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets

# Key Components

## Frontend Components
- **CustomCursor**: Interactive cursor with hover effects
- **ParticleBackground**: Animated floating geometric shapes
- **LiquidGrid**: Mouse-responsive grid distortion effect
- **MovingRibbon**: Animated skill showcase ribbon
- **ScrollIndicator**: Progress indicator for page scroll
- **Navigation**: Responsive navigation with smooth scrolling

## Backend Services
- **Storage Layer**: Abstracted storage interface with memory and database implementations
- **Email Service**: Contact form email notifications via custom domain
- **Route Handlers**: API endpoints for contact submission and admin operations

## Database Schema
- **Users Table**: Admin authentication (username, password)
- **Contacts Table**: Contact form submissions (name, email, location, subject, message, timestamp)

# Data Flow

## Contact Form Submission
1. User fills out multi-step contact form
2. Form data validated using Zod schemas
3. Data sent to `/api/contact` endpoint
4. Server validates and stores in database
5. Email notification sent via Nodemailer
6. Success/error response returned to client

## Admin Dashboard
1. Admin accesses `/admin/contacts` route
2. React Query fetches data from `/api/admin/contacts`
3. Contacts displayed in responsive card layout
4. Real-time updates via query invalidation

# External Dependencies

## Core Technologies
- **Database**: PostgreSQL (configured for Neon/Replit)
- **Email Service**: Custom domain email via GoDaddy SMTP
- **Development**: Replit environment with hot reloading

## Key Libraries
- **UI/UX**: Radix UI, Framer Motion, Tailwind CSS
- **Data Management**: Drizzle ORM, TanStack Query
- **Form Handling**: React Hook Form, Zod validation
- **Utilities**: class-variance-authority, clsx, date-fns

# Deployment Strategy

## Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module
- **Build Process**: Vite development server with HMR
- **Port Configuration**: Internal port 5000, external port 80

## Production Build
- **Frontend**: Vite build to `dist/public`
- **Backend**: esbuild compilation to `dist/index.js`
- **Deployment**: Autoscale deployment target
- **Static Assets**: Served via Express static middleware

## Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `EMAIL_USER`: Custom domain email address
- `EMAIL_PASS`: Email authentication password

# Changelog

```
Changelog:
- June 24, 2025. Initial setup
```

# User Preferences

```
Preferred communication style: Simple, everyday language.
```