'use client';

import { useAuth } from '@/contexts/auth-context';
import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Car, LayoutDashboard, FilePlus2, Loader2 } from 'lucide-react';
import Link from 'next/link';
import AppHeader from '@/components/shared/app-header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    // A small delay to allow auth context to initialize from localStorage
    const timer = setTimeout(() => {
      if (isAuthenticated === false) {
        router.replace('/login');
      } else if (isAuthenticated === true) {
        setIsCheckingAuth(false);
      } else if (isAuthenticated === null) {
        // Still initializing, wait for the next render
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [isAuthenticated, router]);

  if (isCheckingAuth) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const getPageTitle = () => {
    if (pathname.startsWith('/overview')) return 'Overview';
    if (pathname.startsWith('/data-input')) return 'Data Input';
    return 'Dashboard';
  };

  return (
    <SidebarProvider>
      <Sidebar variant="sidebar" collapsible="icon">
        <SidebarHeader>
          <div className="flex h-8 items-center gap-2 p-2 text-lg font-bold">
            <Car />
            <span className="truncate">AutoBook</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/overview" passHref>
                <SidebarMenuButton
                  isActive={pathname.startsWith('/overview')}
                  tooltip="Overview"
                >
                  <LayoutDashboard />
                  <span>Overview</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/data-input" passHref>
                <SidebarMenuButton
                  isActive={pathname.startsWith('/data-input')}
                  tooltip="Data Input"
                >
                  <FilePlus2 />
                  <span>Data Input</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <AppHeader title={getPageTitle()} />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
