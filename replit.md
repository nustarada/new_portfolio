# Overview
This is a high-performance full-stack portfolio website for Karan Gadhave featuring modern design and optimized animations. The application uses PostgreSQL database with Drizzle ORM and includes performance-optimized components with lazy loading, animation throttling, and GPU acceleration for smooth user experience.

# User Preferences
Preferred communication style: Simple, everyday language.

## Typography & Design Standards
**Established August 2025** - All section headings must follow consistent typography:

### Section Heading Standards
- **Main Section Headings (h1/h2)**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold albert-sans-medium text-white`
- **Subsection Headings (h3)**: `text-2xl font-semibold albert-sans-medium`
- **Small Headings (h4)**: `text-xl font-semibold albert-sans-medium`
- **Supporting Text**: Use `jost-secondary` font class for body text and descriptions

### Typography Update (October 21, 2025)
- **Latest Migration**: Successfully migrated from Druk Wide Medium to Albert Sans across entire portfolio
- **Primary Font**: All section headings now use Albert Sans (`albert-sans-medium` class) loaded from Google Fonts
- **Font Weight**: Using `font-semibold` (600) weight for optimal readability with the modern sans-serif font
- **Letter Spacing**: Consistent 0.02em letter spacing applied across all headings
- **Text Color**: Clean `text-white` styling maintained for all major section headings
- **Scope**: Typography migration completed across Home page, Case Studies page, Liffo case study page, and 2Hour Learning case study page
- **Statistics**: Achievement numbers in statistics section also updated to use Albert Sans font
- **Consistency**: All major headings now use `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold albert-sans-medium text-white`
- **Font Files**: Druk Wide font files deleted from assets, Albert Sans loaded via Google Fonts CDN

### Color Applications
- **Primary Color**: Use `text-primary` for accent elements and highlights
- **Section Headers**: Use `text-white` for all major section headings (no gradient backgrounds)
- **White Text**: Use `text-white` for main content, `text-white/80` or `text-white/85` for secondary content

### Consistency Requirements (Updated October 21, 2025)
- All major section headings across the portfolio MUST use `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold albert-sans-medium text-white`
- **Mobile-First Responsive**: All headings scale from `text-2xl` on mobile to `lg:text-5xl` on large screens
- Always use `font-semibold` for main section headings to match Albert Sans characteristics
- Always use `text-white` for section headings (no gradient backgrounds)
- Always include `albert-sans-medium` class for headings and `jost-secondary` for body text
- Maintain consistent spacing: `mb-6` for section headings, `mb-8` for larger gaps
- **CRITICAL**: Never use `font-normal` for any heading elements - all headings use `font-semibold`
- **CRITICAL**: Never use gradient text backgrounds - all headings use clean `text-white`
- **CRITICAL**: All headings must include full responsive breakpoints for optimal mobile experience
- **CRITICAL**: Never use `druk-wide` classes - migration to `albert-sans-medium` is complete

This ensures perfect visual consistency across Home, Case Studies, Admin, and any future pages.

## Case Study Page Architecture Standards
**Established August 2025** - All case study pages must follow these structural requirements:

### Container Class Naming
- Use unique descriptive class names for each case study page container
- Examples: `liffo-case-study`, `future-first-case-study`, `[project-name]-case-study`
- **NEVER use generic `case-study-page` class** - this has problematic CSS rules that break fixed positioning

### Component Structure Order
1. Case Study Navigation component (`<CaseStudyNavigation sections={navigationSections} />`)
2. Progress Bar with branded colors (`z-[9999]`)
3. Main Navigation bar (`z-50`)
4. Page content sections

### Z-Index Hierarchy
- Progress Bar: `z-[9999]` (highest priority)
- Case Study Navigation: `z-[9998]` (below progress bar)
- Navigation Backdrop: `z-[9997]` (below navigation elements)  
- Main Navigation: `z-50` (below case study elements)

### Fixed Positioning Requirements
- Avoid CSS rules that create new stacking contexts: `transform: translateZ(0)`, `contain: layout style paint`
- Use consistent positioning classes: `fixed right-4 bottom-6 sm:right-6`
- Ensure navigation components are positioned relative to viewport, not page content

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