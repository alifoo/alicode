import React from "react";
import Image from 'next/image'
import ali from "/public/images/ali.png";

const About = () => {
  
  
  return (
    <div className="grid py-12">
      <h1 className="font-bold text-zinc-600 truncate px-2 py-2">About me</h1>

      <div className="grid grid-cols-2 bg-white p-2">
        <div className=" hover:bg-zinc-100 rounded-md shadow-md">
          <Image
           src={ali}
           alt="Picture of Alisson Ayres, the owner of the blog."
           className="rounded-md"
          />
        </div>
        <div className="">
          <h1 className="font-bold text-zinc-600 truncate px-4 py-2">Alisson Ayres</h1>
          <p className=" text-zinc-600 pl-4 py-2">My name is Alisson, but you can call me Ali. I'm a 21 years old studying Software Engineering in university. I'm currently working as an Infraestructure intern at a Brazillian startup.</p>
          <p className=" text-zinc-600 pl-4 py-2">My goal is to become a Software Engineer and make the world a better place by developing products and solutions that help people around the globe.</p>
        </div>

      </div>
      
    
    </div>
  );
};

export default About;