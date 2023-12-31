import "../styles/globals.css";
import type { Metadata } from 'next'
import { Space_Mono, Chivo_Mono } from 'next/font/google'
import Link from "next/link";
import { FaGithub, FaLinkedin, FaLightbulb } from 'react-icons/fa';
import ThemeToggle from "../components/ThemeToggle";

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
      <div className="flex flex-col md:flex-row group items-center bg-zinc-800 dark:bg-zinc-900 rounded-md shadow-lg px-3 py-2 ring-offset-2 ring-zinc-600 ring-2 transition duration-500 delay-300 ease-in-out h-20 md:h-10 dark:ring-zinc-600 hover:dark:ring-violet-500 hover:ring-4 dark:ring-offset-neutral-800 mt-1 md:mt-2">
        <Link href="/">
          <h1 className="text-white font-bold inline-block text-left hover:underline items-center pb-0 dark:text-violet-500">alicode</h1>
        </Link>
        <h1 className="text-white items-center font-bold inline-block text-left ml-1 transition-width duration-200 delay-200 ease-in-out w-0 md:group-hover:w-4 truncate group-hover:whitespace-normal dark:text-zinc-200">=</h1>
        <p className="text-zinc-300 flex md:items-center text-sm transition-width max-h-4 duration-300 delay-300 ease-in-out w-fit md:w-0 md:group-hover:w-96 truncate group-hover:text-clip dark:text-zinc-200 pb-7 md:pb-0">
          notes of an aspiring computer scientist
        </p>
        
  
        <div className="md:ml-auto flex flex-row">
          <ThemeToggle />
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
    <footer className="">
      <div className="text-sm border-none border-zinc-400 pt-12 text-center text-zinc-600 bg-zinc-50 dark:bg-zinc-800 rounded-b-md">
        <Link href="/about-me"><p className="inline-block px-4 hover:underline dark:text-zinc-100">about me</p></Link>
        <Link href="/about-this-blog"><p className="inline-block px-4 hover:underline dark:text-zinc-100">about this blog</p></Link>
        <Link href="/contact"><p className="inline-block px-4 hover:underline dark:text-zinc-100">contact</p></Link>
        <p className="text-sm border-none border-zinc-400 py-6 text-center text-zinc-300 dark:text-zinc-500">developed by Ali</p>
      </div>
    </footer>
  )


  return (
    <html lang="en">
      <head />
      <body className={`${space_mono.className} dark:bg-neutral-900 p-2 md:p-0`}>
        <div className="mx-auto max-w-2xl bg-zinc-50 dark:bg-zinc-800 rounded-lg px-2 py-1">
          {header}
          {children}
          {footer}
        </div>  
      </body>
    </html>
  );
}
