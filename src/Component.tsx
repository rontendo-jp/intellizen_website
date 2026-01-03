import React, { ReactNode } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

// Default export for usage if needed directly
export default Layout;