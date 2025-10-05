'use client';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function HomePage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Timeout to prevent flash of content, and to let auth context initialize
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        router.replace('/overview');
      } else {
        router.replace('/login');
      }
    }, 100);

    return () => clearTimeout(timer);

  }, [isAuthenticated, router]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
