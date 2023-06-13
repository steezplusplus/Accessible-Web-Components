import '../styles/globals.css';
import styles from '../styles/layout.module.css';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Steez++',
  description: 'Steezy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${styles.layout}`}>
        <nav className={styles.navbar}>
          <Navbar />
        </nav>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
