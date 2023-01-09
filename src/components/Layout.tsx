import React from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[calc(100vh-3.5rem)] flex-col justify-between">
        <main className="mx-auto mt-8 w-full max-w-screen-lg px-4">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
