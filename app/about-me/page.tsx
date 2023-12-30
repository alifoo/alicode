import React from "react";
import Image from 'next/image'
import ali from "/public/images/ali.jpg";

const About = () => {
  
  
  return (
    <div className="py-12">
      <h1 className="font-bold text-zinc-600 truncate px-2 py-2">About me</h1>

      <div className="p-2 grid grid-cols-1 md:grid-cols-2 items-center bg-white rounded-md">
        <div className="rounded-md">
          <Image
           src={ali}
           alt="Picture of Alisson Ayres, the owner of the blog."
           className="rounded-md shadow-lg ring-offset-2 ring-zinc-300 ring-2"
          />
        </div>
        <div className="">
          <h1 className="font-bold text-zinc-600 px-4 pt-4">Alisson Ayres</h1>
          <p className=" text-zinc-600 pl-4 py-2 text-sm">My name is Alisson, but you can call me Ali. I'm a 21 years old Brazillian studying Software Engineering in university and currently working as an Infraestructure intern at a startup.</p>
          <p className=" text-zinc-600 pl-4 py-2 text-sm">My goal is to become a Fullstack Developer and create beautiful, creative and functional software. I have a web-designer background and love to create art as well.</p>
        </div>

      </div>
      
    
    </div>
  );
};

export default About;