import "../styles/globals.css";
import type { Metadata } from 'next'
import { Space_Mono, Chivo_Mono } from 'next/font/google'
import Link from "next/link";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const space_mono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] })
const chivo = Chivo_Mono({ weight: ['400', '700'], subsets: ['latin'] })

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
      <div className="flex group items-center bg-zinc-800 rounded-md shadow-lg px-3 py-2 mt-2 ring-offset-2 ring-zinc-600 ring-2 transition-height duration-500 delay-300 ease-in-out h-20 md:h-10">
        <Link href="/">
          <h1 className="text-white font-bold inline-block text-left hover:underline items-center pb-0">alicode</h1>
        </Link>
        <h1 className="text-white items-center font-bold inline-block text-left ml-1 transition-width duration-200 delay-200 ease-in-out w-0 group-hover:w-4 truncate group-hover:whitespace-normal">=</h1>
        <p className="text-zinc-300 flex items-center text-sm transition-width max-h-4 duration-300 delay-300 ease-in-out w-0 group-hover:w-96 truncate group-hover:text-clip">
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
      <div className="text-sm border-none border-zinc-400 pt-12 text-center text-zinc-600 bg-zinc-50">
        <Link href="/about-me"><p className="inline-block px-4 hover:underline">about me</p></Link>
        <Link href="/about-this-blog"><p className="inline-block px-4 hover:underline">about this blog</p></Link>
        <Link href="/contact"><p className="inline-block px-4 hover:underline">contact</p></Link>
      </div>
      
      <p className="text-sm border-none border-zinc-400 py-6 text-center text-zinc-300 bg-zinc-50">developed by Ali</p>
    </footer>
  )


  return (
    <html lang="en">
      <head />
      <body className={space_mono.className}>
        <div className="mx-auto max-w-2xl bg-zinc-50 rounded px-2 py-1">
          {header}
          {children}
          {footer}
        </div>  
      </body>
    </html>
  );
}
