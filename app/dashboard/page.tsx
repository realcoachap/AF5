'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function ClientDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  if (session.user?.role === 'admin') {
    // Admins should go to admin dashboard
    redirect('/admin/dashboard');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="bg-white shadow-sm rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Client Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {session.user?.name || session.user?.email}</span>
              <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
            <p className="text-gray-600">Manage your personal details and preferences.</p>
            <button className="mt-4 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200">
              Edit Profile
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Workout Plan</h2>
            <p className="text-gray-600">View and track your personalized workout routines.</p>
            <button className="mt-4 w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-200">
              View Plan
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Progress Tracking</h2>
            <p className="text-gray-600">Monitor your fitness journey and achievements.</p>
            <button className="mt-4 w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition duration-200">
              View Progress
            </button>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <p className="font-medium">Workout Completed</p>
              <p className="text-sm text-gray-600">Upper Body Strength - Today, 9:00 AM</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-1">
              <p className="font-medium">Nutrition Log Updated</p>
              <p className="text-sm text-gray-600">Breakfast logged - Yesterday, 8:30 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}