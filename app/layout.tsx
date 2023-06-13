import '../styles/globals.css'
import { Navbar } from '@/components/navbar/Navbar'
import { Open_Sans } from 'next/font/google'

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
      <body className={openSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
