import React from "react";
import Image from 'next/image'
import zettelkasten from "/public/images/zettelkasten.png";
import Link from "next/link";

const About = () => {
  
  
  return (
    <div className="grid py-6">
      <h1 className="font-bold text-zinc-600 truncate px-2 py-2">About this blog</h1>

      <div className=" bg-white p-2">
        <div className="">
          <h1 className="font-bold text-zinc-600 truncate px-4 py-2">Concept of a Zettelkasten</h1>
          <p className=" text-zinc-600 px-4 py-2">In order to explain what this blog is about, first is essential to explain the concept of a Zettelkasten. Zettelkasten translates to "slip box" in English. It's a note-taking and knowledge management system. The term is associated with the method developed by a German sociologist Niklas Luhmann. The Zettelkasten system is designed to help individuals organize, connect, and develop ideas.</p>
        </div>
        <div className=" hover:bg-zinc-100 rounded-md">
          <Link href="https://writingcooperative.com/zettelkasten-how-one-german-scholar-was-so-freakishly-productive-997e4e0ca125">
            <Image
            src={zettelkasten}
            alt="Picture of a slip box."
            className="rounded-md shadow-md"
            />
          </Link>
        </div>
      </div>
      <div className=" bg-white p-2">
        <p className=" text-zinc-600 px-4 py-2">The key principle of a Zettelkasten is that each note is intended to represent a single idea. The notes must, in most cases, be short and concise, so it's easier to <b>link</b> with other ideas.
        <br/><br/><b>Linking ideas</b> is the central principle of a Zettelkasten; They stablish connections between diffferent ideas and helps to see <b>unexpected relationships</b> between seemingly unrelated information.
        <br/><br/>The structure of the Zettelkasten is built overtime, and the notes constantly reviewed and improved when needed. Most importantly, not all notes have the same purpose.</p>

        <h2 className="font-bold text-zinc-600 truncate px-4 py-2">Types of notes</h2>
        <ul className="list-disc">
            <li className=" text-zinc-600 ml-12 py-2">Fleeting notes</li>
                <p className=" text-zinc-600 text-sm pl-16">Quick and temporary notes to capture thoughts and snippets of information.</p>
            <li className=" text-zinc-600 ml-12 py-2">Permanent notes</li>
                <p className=" text-zinc-600 text-sm pl-16">Considered developed versions of fleeting notes. Contain a single idea or concept.</p>
            <li className=" text-zinc-600 ml-12 py-2">Literature notes</li>
                <p className=" text-zinc-600 text-sm pl-16">Notes created to capture key insights and reflections of books and articles.</p>
            <li className=" text-zinc-600 ml-12 py-2">Reference notes</li>
                <p className=" text-zinc-600 text-sm pl-16">Notes that contain bibliographic details, citations and links to external sources.</p>
        </ul>
        <p className=" text-zinc-600 px-4 py-4">There are more types of notes in the original Zettelkasten System. However, those are the main ones relevant
        to explaining the origin of this blog.
        <br/><br/>I've been using the Zettelkasten system with the program <b>Obsidian</b> for almost a year, in order to develop my knowledge base and enhance the quality of my
        university notes. I want to be able to, in 3 years for now, have a distilled material for all the knowledge I acquired in my <b>Software Engineering</b> degree.
        <br/><br/>But I also always wanted to create a blog and help other students reach distilled, easily accessible resources for study, mainly computer science related.
        So I decided to code this blog, transforming my markdown notes into blogposts with useful content for everyone.</p>
        </div>
        <div className="flex flex-wrap justify-center text-sm border-none border-zinc-400 py-2 px-6 text-zinc-600 items-center">
            <div className="color-square rounded inline-block" style={{ backgroundColor: '#7dd3fc', width: '16px', height: '16px' }}></div>
            <p className="w-36 md:w-32 px-2 mb-2 md:mb-0 inline-block truncate">distilled note</p>

            <div className="color-square rounded inline-block" style={{ backgroundColor: '#bef264', width: '16px', height: '16px' }}></div>
            <p className="w-36 md:w-32 px-2 mb-2 md:mb-0 inline-block truncate">literature note</p>

            <div className="color-square rounded inline-block" style={{ backgroundColor: '#fb923c', width: '16px', height: '16px' }}></div>
            <p className="w-36 md:w-32 px-2 mb-2 md:mb-0 inline-block truncate">reference note</p>

            <div className="color-square rounded inline-block" style={{ backgroundColor: '#c4b5fd', width: '16px', height: '16px' }}></div>
            <p className="w-36 md:w-40 px-2 inline-block truncate">daily learning update</p>
        </div>
        <div className=" bg-white p-2">
        <p className=" text-zinc-600 px-4 py-2">However, instead of using Fleeting and Permanent Notes, I decided to create the <b>"Distilled notes"</b> category.
        The Distilled Note is concise like a fleeting one, but about only one topic and always permanent. Used to quickly remember a specific concept or related concepts.
        Also, I created a <b>"Daily Learning Update"</b>, to help keep me consistent throughout the years and document all my thoughts as I learn more and more about computer science.
        <br/><br/>The rest of the notes remain the same as the original Zettelkasten system. And this is how I plan to keep increasing my knowledge and, in the future, organizing all of
        this information into a more easily visualized way.</p>
        </div>
    
    </div>
  );
};

export default About;