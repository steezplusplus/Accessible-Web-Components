import './globals.css'
import { Open_Sans } from 'next/font/google'
import Link from 'next/link';

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
        <nav className="border border-black px-2">
          <ul className="flex items-center">
            <li>
              <Link className="text-lg" href="/">Steez++</Link>
            </li>
            <div className="ml-auto">
              <li>
                <Link className="text-blue-800 hover:text-blue-900 hover:underline" href="/about">About</Link>
              </li>
            </div>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
