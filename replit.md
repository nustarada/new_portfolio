# Overview
This is a high-performance full-stack portfolio website for Karan Gadhave featuring modern design and optimized animations. The application uses PostgreSQL database with Drizzle ORM and includes performance-optimized components with lazy loading, animation throttling, and GPU acceleration for smooth user experience.

# User Preferences
Preferred communication style: Simple, everyday language.

## Typography & Design Standards
**Established August 2025** - All section headings must follow consistent typography:

### Section Heading Standards
- **Main Section Headings (h1/h2)**: `text-4xl md:text-5xl font-normal modern-heritage`
- **Subsection Headings (h3)**: `text-2xl font-bold modern-heritage`
- **Small Headings (h4)**: `text-xl font-bold modern-heritage`
- **Supporting Text**: Use `jost-secondary` font class for body text and descriptions

### Color Applications
- **Primary Color**: Use `text-primary` for accent elements and highlights
- **Gradient Headers**: Use background gradients with `bg-clip-text text-transparent` for major sections
- **White Text**: Use `text-white` for main content, `text-white/80` or `text-white/85` for secondary content

### Consistency Requirements
- All major section headings across the portfolio MUST use `text-4xl md:text-5xl font-normal modern-heritage`
- Never use `font-bold` for main section headings - always use `font-normal`
- Always include `modern-heritage` class for headings and `jost-secondary` for body text
- Maintain consistent spacing: `mb-6` for section headings, `mb-8` for larger gaps

This ensures perfect visual consistency across Home, Case Studies, Admin, and any future pages.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite
- **Routing**: Wouter
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables and animations
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Memory-based storage with fallback to database
- **Email Service**: Nodemailer
- **API**: RESTful endpoints for contact form and admin functionality

## Key Features
- **Interactive Portfolio**: Custom cursor, particle background, liquid grid effects.
- **Contact Form**: Multi-step form with location selection and email notifications.
- **Admin Panel**: Contact management dashboard.
- **Responsive Design**: Mobile-first approach with advanced CSS grid and flexbox.
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets.

## System Design Choices
- **Data Flow for Contact Form Submission**: User data is validated, sent to `/api/contact`, stored in the database, and triggers an email notification.
- **Data Flow for Admin Dashboard**: Admin accesses `/admin/contacts`, data is fetched from `/api/admin/contacts` via React Query, and displayed in a responsive card layout with real-time updates.
- **Deployment Strategy**: Replit environment for development, Vite and esbuild for production builds, autoscale deployment target, and static asset serving via Express.

# External Dependencies

## Core Technologies
- **Database**: PostgreSQL (configured for Neon/Replit)
- **Email Service**: Custom domain email via GoDaddy SMTP
- **Development Environment**: Replit

## Key Libraries
- **UI/UX**: Radix UI, Framer Motion, Tailwind CSS
- **Data Management**: Drizzle ORM, TanStack Query
- **Form Handling**: React Hook Form, Zod validation
- **Utilities**: class-variance-authority, clsx, date-fns