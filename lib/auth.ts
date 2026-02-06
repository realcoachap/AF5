import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function registerUser({ name, email, password }: { name: string; email: string; password: string }) {
  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create the user with default role 'client'
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: 'client', // Default role for new users
    },
  });

  return user;
}