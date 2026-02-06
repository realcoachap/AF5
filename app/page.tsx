'use client';

import { useEffect } from 'react';
import { useAuth } from 'better-auth/react';
import Link from 'next/link';

export default function HomePage() {
  const { session, signIn, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ascending Fitness</h1>
          <p className="text-gray-600">Welcome to AF5 - Client & Admin Portal</p>
        </div>

        {session ? (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">Logged in as:</p>
              <p className="text-gray-700">{session.user.email}</p>
              <p className="text-sm text-gray-500">Role: {session.user.role || 'client'}</p>
            </div>
            
            {session.user.role === 'admin' ? (
              <Link href="/admin/dashboard" className="block w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-center transition duration-200">
                Go to Admin Dashboard
              </Link>
            ) : (
              <Link href="/dashboard" className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-center transition duration-200">
                Go to Client Dashboard
              </Link>
            )}
            
            <button 
              onClick={() => signOut()} 
              className="w-full py-3 px-4 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition duration-200"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <Link href="/auth/login" className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-center transition duration-200">
              Sign In
            </Link>
            <Link href="/auth/register" className="block w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-center transition duration-200">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}