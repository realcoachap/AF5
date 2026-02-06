# Changelog

All notable changes to AF5 will be documented in this file.

## [1.1.0] - 2026-02-06

### Changed
- Replaced Better Auth with NextAuth.js for better Next.js 14 compatibility
- Updated authentication system to use NextAuth.js with Prisma adapter
- Migrated all authentication logic to work with NextAuth.js
- Updated middleware to use NextAuth.js token verification
- Converted client-side dashboard pages to server-side rendering for better security
- Updated API routes to work with NextAuth.js
- Updated environment variable requirements for NextAuth.js
- Fixed build compatibility issues for Railway deployment

### Fixed
- Resolved build errors related to Better Auth compatibility
- Fixed crypto module compatibility issues with Next.js
- Improved authentication flow for both client and admin users
- Enhanced security by using server-side session validation

## [1.0.0] - 2026-02-06

### Added
- Initial project setup with Next.js 14 and App Router
- Better Auth integration for secure authentication
- Prisma ORM with PostgreSQL adapter
- Role-based access control (client/admin)
- Client dashboard with fitness tracking features
- Admin dashboard with client management features
- Protected routes with middleware
- Responsive UI with Tailwind CSS
- Environment configuration for Railway deployment
- README with setup instructions

### Features
- Secure login and registration for clients
- Admin-specific dashboard with advanced features
- Automatic redirection based on user role
- Session management with Better Auth
- Database schema with user roles
- Middleware protection for admin/client routes