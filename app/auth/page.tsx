// This is just a redirect page
import { redirect } from 'next/navigation';

export default function AuthPage() {
  redirect('/auth/login');
}