'use client';

import { AuthProvider } from 'better-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider
      config={{
        baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
      }}
    >
      {children}
    </AuthProvider>
  );
}