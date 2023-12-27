import "../styles/globals.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'alicode',
  description: 'notes of an aspiring computer scientist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="flex items-center bg-zinc-800 rounded-md shadow-md px-3 py-2 h-10 mt-2">
        <Link href="/">
          <h1 className="text-white font-bold inline-block text-left hover:underline">alicode</h1>
        </Link>
        <h1 className="text-white font-bold inline-block text-left mx-1">=</h1>
        <p className="text-zinc-300 text-xs flex-grow">
          notes of an aspiring computer scientist
        </p>
  
        <div className="ml-auto flex items-center">
          <Link href="https://github.com/alifoo">
            <FaGithub className="mr-2" size={12} color="white" />
          </Link>
          <Link href="https://www.linkedin.com/in/alisson-ayres/">
            <FaLinkedin size={12} color="white" />
          </Link>
        </div>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="text-sm border-none border-zinc-400 pt-12 text-center text-zinc-600">
        <Link href="/about-me"><p className="inline-block px-4 hover:underline">about me</p></Link>
        <Link href="/about-this-blog"><p className="inline-block px-4 hover:underline">about this blog</p></Link>
        <Link href="/contact"><p className="inline-block px-4 hover:underline">contact</p></Link>
      </div>
      
      <p className="text-sm border-none border-zinc-400 py-6 text-center text-zinc-300">developed by Ali</p>
    </footer>
  )


  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div className="mx-auto max-w-2xl bg-zinc-50 rounded px-2 py-1">
          {header}
          {children}
          {footer}
        </div>  
      </body>
    </html>
  );
}
