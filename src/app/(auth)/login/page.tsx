import { LoginForm } from '@/components/auth/login-form';
import { Car } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center">
      <div className="mb-8 flex items-center gap-2 text-2xl font-bold text-primary">
        <Car className="h-8 w-8" />
        <h1>AutoBook Manager</h1>
      </div>
      <LoginForm />
    </div>
  );
}
