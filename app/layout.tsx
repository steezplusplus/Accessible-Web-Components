import React from 'react';
import './_styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import styles from './_styles/layout.module.css';
import { Navbar } from '@/app/_components/root-layout/navbar/Navbar';
import { Footer } from '@/app/_components/root-layout/footer/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export const metadata = {
  title: 'Accessible Web Components',
  description: 'Supporting resources to make the web accessible',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <nav>
          <Navbar />
        </nav>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
