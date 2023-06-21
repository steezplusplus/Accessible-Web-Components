import React from 'react';
import './_styles/globals.css';
import styles from './_styles/layout.module.css';
import { Navbar } from '@/app/_components/navbar/Navbar';
import { Footer } from '@/app/_components/footer/Footer';

export const metadata = {
  title: 'Steez++',
  description: 'Steezy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <nav>
          <Navbar />
        </nav>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
