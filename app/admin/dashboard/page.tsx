'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  if (session.user?.role !== 'admin') {
    // Non-admins should be redirected to client dashboard
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="bg-white shadow-sm rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {session.user?.name || session.user?.email}</span>
              <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Client Management</h2>
            <p className="text-gray-600">View and manage all client accounts.</p>
            <button className="mt-4 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200">
              Manage Clients
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Workout Programs</h2>
            <p className="text-gray-600">Create and update workout programs.</p>
            <button className="mt-4 w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-200">
              Manage Programs
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Reports</h2>
            <p className="text-gray-600">Generate and view business reports.</p>
            <button className="mt-4 w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition duration-200">
              View Reports
            </button>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-blue-600">124</p>
              <p className="text-gray-600">Active Clients</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-green-600">24</p>
              <p className="text-gray-600">Active Programs</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-purple-600">18</p>
              <p className="text-gray-600">Pending Requests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}