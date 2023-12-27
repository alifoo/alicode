import React from "react";
import Image from 'next/image'
import ali from "/public/images/ali.png";
import Link from "next/link";

const About = () => {
  
  return (
    <div className="grid py-12">
      <h1 className="font-bold text-zinc-600 truncate px-2 py-2">Contact me</h1>
      <div className="grid grid-cols-2 bg-white p-2">
        <Link href="mailto:alissonayres.trb@gmail.com"><p className=" text-zinc-600 pl-4 py-2 hover:underline">alissonayres.trb@gmail.com</p></Link>
        <Link href="https://www.linkedin.com/in/alisson-ayres/"><p className=" text-zinc-600 pl-4 py-2 hover:underline">Linkedin</p></Link>
        <Link href="https://github.com/alifoo"><p className=" text-zinc-600 pl-4 py-2 hover:underline">Github</p></Link>
      </div>
    </div>
  );
};

export default About;