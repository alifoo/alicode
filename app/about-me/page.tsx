import React from "react";
import Image from 'next/image'
import ali from "/public/images/ali.jpg";

const About = () => {
  
  
  return (
    <div className="py-6">
      <h1 className="font-bold text-zinc-600 truncate p-4 dark:text-violet-600 text-4xl">About me</h1>

      <div className="p-2 grid grid-cols-1 md:grid-cols-2 items-center bg-white dark:bg-neutral-900 rounded-lg">
        <div className="rounded-md p-1">
          <Image
           src={ali}
           alt="Picture of Alisson Ayres, the owner of the blog."
           className="rounded-full shadow-lg ring-offset-2 ring-2 ring-zinc-300 dark:ring-offset-zinc-800 dark:ring-zinc-700"
          />
        </div>
        <div className="">
          <h1 className="font-bold text-zinc-600 px-4 pt-4 text-lg dark:text-violet-600">Alisson Ayres</h1>
          <p className=" text-zinc-600 pl-4 py-2 text-sm dark:text-zinc-200">My name is Alisson, but you can call me Ali. I'm a 21 years old Brazillian studying Software Engineering in university and currently working as an Infraestructure intern at a startup.</p>
          <p className=" text-zinc-600 pl-4 py-2 text-sm dark:text-zinc-200">My goal is to become a Fullstack Developer and create beautiful, creative and functional software. I have a web-designer background and love to create art as well.</p>
        </div>

      </div>
      
    
    </div>
  );
};

export default About;