import "../styles/globals.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'alicode();',
  description: 'distilled learning notes of an aspiring engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="text-center bg-zinc-800 p-8 my-6 rounded-md shadow-md">
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">alicode();</h1>
        </Link>
        <p className="text-zinc-300">distilled learning notes of an aspiring engineer.</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-none border-zinc-400 mt-6 py-6 text-center text-zinc-600">
        <p>developed by ali</p>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div className="mx-auto max-w-2xl bg-zinc-50 rounded px-2">
          {header}
          {children}
          {footer}
        </div>  
      </body>
    </html>
  );
}
