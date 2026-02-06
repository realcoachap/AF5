# AF5 - Client & Admin Portal

A Next.js application with secure authentication for clients and administrators, featuring role-based access control.

## Features

- **Secure Authentication**: Powered by Better Auth with email/password login
- **Role-Based Access Control**: Different experiences for clients and admins
- **Database Integration**: PostgreSQL with Prisma ORM
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Protected Routes**: Middleware to ensure proper access control

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Authentication**: Better Auth
- **Database**: PostgreSQL with Prisma
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Railway deployment

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/realcoachap/af5.git
cd af5
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your database connection string:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/af5"
AUTH_SECRET="your-super-secret-auth-key-here-make-it-long-and-random"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

5. Generate Prisma client and push schema to database:
```bash
npx prisma generate
npx prisma db push
```

6. Run the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `AUTH_SECRET`: Secret key for signing authentication tokens
- `NEXT_PUBLIC_BASE_URL`: Base URL for the application

## Usage

### For Clients
- Register for a new account using the registration form
- Login to access the client dashboard
- View and manage personal fitness information

### For Admins
- Login with an account that has the `admin` role
- Access the admin dashboard for client management
- Manage workout programs and business reports

## Creating an Admin Account

To create an admin account, you can either:
1. Register normally and then update the role in the database
2. Use Prisma Studio to update the user's role directly

```bash
npx prisma studio
```

Or run a direct database query:
```sql
UPDATE "User" SET role = 'admin' WHERE email = 'your-email@example.com';
```

## Deployment

This application is designed for deployment on Railway. When deploying:

1. Set the required environment variables in Railway
2. Connect to a PostgreSQL database service
3. The application will automatically run migrations on deploy

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── api/                # API routes
│   ├── auth/               # Authentication pages
│   ├── dashboard/          # Client dashboard
│   ├── admin/              # Admin dashboard
│   └── globals.css         # Global styles
├── prisma/                 # Database schema and migrations
├── auth.ts                 # Better Auth configuration
├── middleware.ts           # Route protection middleware
└── ...
```

## Roadmap

- [ ] Add social login options
- [ ] Implement password reset functionality
- [ ] Add more comprehensive admin features
- [ ] Add client onboarding flow
- [ ] Integrate with fitness tracking APIs

## License

MIT License - see LICENSE file for details.