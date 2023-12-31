import React from "react";
import Image from 'next/image'
import ali from "/public/images/ali.png";
import Link from "next/link";

const About = () => {
  
  return (
    <div className="grid py-6">
      <h1 className="font-bold text-zinc-600 truncate p-4 dark:text-violet-600 text-4xl">Contact me</h1>
      <div className=" bg-white p-2 rounded-md dark:bg-neutral-900">
        <Link href="mailto:alissonayres.trb@gmail.com"><p className=" text-zinc-600 pl-6 hover:underline display: block dark:text-zinc-200">alissonayres.trb@gmail.com</p></Link>
        <Link href="https://www.linkedin.com/in/alisson-ayres/"><p className=" text-zinc-600 pl-6 hover:underline display: block dark:text-zinc-200">Linkedin</p></Link>
        <Link href="https://github.com/alifoo"><p className=" text-zinc-600 pl-6 hover:underline display: block dark:text-zinc-200">Github</p></Link>
      </div>
    </div>
  );
};

export default About;