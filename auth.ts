import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // For simplicity in development
  },
  account: {
    accountLinksEnabled: true,
  },
  socialProviders: {
    // Add social providers if needed
  },
  session: {
    expiresIn: 7 * 24 * 60 * 60, // 7 days
  },
  // Add custom fields to user model
  user: {
    additionalFields: {
      role: {
        type: 'string',
        required: true,
        defaultValue: 'client',
      },
    },
  },
});