import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jalees Amir',
  description: 'Portfolio for Jalees Amir',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"><Navbar />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
