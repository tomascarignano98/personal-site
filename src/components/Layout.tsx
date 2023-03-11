import React from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen animate-fadeIn flex-col justify-between">
        <main className="mx-auto mt-20 w-full max-w-screen-lg px-4 sm:mt-28">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
