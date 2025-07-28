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
- July 28, 2025. Major asset cleanup and performance optimization: removed 52 unused assets (screenshots, duplicate logos, videos, text files) reducing total assets from 55 to 3 essential files only (logo, FutureFirstFamilies thumbnail, resume PDF), improving website loading performance and reducing project size by ~95%
- July 28, 2025. Standardized all CTA buttons with consistent dark blue gradient: implemented uniform dark blue gradient (blue-900 via blue-800 to blue-900) with grain texture effect across all buttons website-wide, ensuring visual consistency and professional appearance with subtle hover effects (blue-700 via blue-600 to blue-700)
- July 28, 2025. Applied blue gradient CTA colors universally: updated all remaining CTA buttons across navigation, home page, project detail page, and case study page to use consistent blue-sky gradient scheme, replacing all purple/violet gradients
- July 28, 2025. Completed font cleanup: removed all old font references (Bebas Neue, Montserrat, Oswald, Barlow) from code, CSS classes, Tailwind config, and Google Fonts import, ensuring consistent typography system with only Modern Heritage Display and Jost fonts
- July 28, 2025. Implemented Jost as secondary font: added to Google Fonts import, applied to navigation, descriptions, form labels, body text throughout website while maintaining Modern Heritage Display for headings, creating clean typography hierarchy
- July 28, 2025. Updated stat numbers to use Modern Heritage Display font for stronger visual impact and consistency with heading typography
- July 28, 2025. Changed CTA colors from purple to blue gradient: updated navigation contact button, form submit button, project buttons, and related UI elements to use blue-sky gradient scheme
- July 28, 2025. Integrated Modern Heritage Display custom font: added @font-face declaration, created modern-heritage CSS class, and applied to all major headings (hero title, section headings) for distinctive typography branding
- July 28, 2025. Removed custom cursor functionality completely: deleted cursor component, removed all cursor-related CSS styles, and restored default browser cursor behavior
- July 28, 2025. Fixed hero section overlap with navbar: increased top padding to pt-32 and adjusted z-index layering
- July 28, 2025. Optimized project card layout: increased thumbnail size to h-80, removed dark overlay for cleaner image display, significantly reduced content sections (removed key outcomes and tech stack), streamlined to show only essential project information with single button
- July 28, 2025. Added FutureFirstFamilies project thumbnail image to replace abstract background in first project card, enhancing visual appeal with actual project screenshot
- July 28, 2025. Replaced Brain icon with actual logo image in About section profile header, applied cyan color filtering to match theme
- July 28, 2025. Major performance optimization: simplified animations, reduced particle complexity, removed pulse effects, added reduced motion support, and limited frame rates to 30fps
- July 28, 2025. Implemented professional typography system with Bebas Neue (bold condensed display font for headings), Montserrat (clean geometric sans-serif for body), Oswald (condensed sans-serif for accents), and Barlow (modern default font), creating a strong, impactful visual hierarchy
- July 28, 2025. Added FutureFirstFamilies project with comprehensive case study content
- June 24, 2025. Initial setup
```

# User Preferences

```
Preferred communication style: Simple, everyday language.
```