'use client';

import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean | null;
  login: (data: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem('isAuthenticated');
      setIsAuthenticated(storedAuth === 'true');
    } catch (error) {
      setIsAuthenticated(false);
    }
  }, []);

  const login = () => {
    try {
      localStorage.setItem('isAuthenticated', 'true');
    } catch (error) {
      console.error("Could not save auth state to local storage.");
    }
    setIsAuthenticated(true);
  };

  const logout = () => {
    try {
      localStorage.removeItem('isAuthenticated');
    } catch (error) {
      console.error("Could not remove auth state from local storage.");
    }
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
