import React from "react";
import Image from 'next/image'
import zettelkasten from "/public/images/zettelkasten.png";
import Link from "next/link";

const About = () => {
  
  
  return (
    <div className="grid py-6">
      <h1 className="font-bold text-zinc-600 truncate px-2 py-2 dark:text-violet-600 text-lg">About this blog</h1>

      <div className=" bg-white p-2 dark:bg-neutral-900">
        <div className="pb-2">
          <h1 className="font-bold text-zinc-600 truncate px-4 py-2 dark:text-violet-600 text-lg">Concept of a Zettelkasten</h1>
          <p className=" text-zinc-600 px-4 py-2 dark:text-zinc-200">In order to explain what this blog is about, first is essential to explain the concept of a Zettelkasten. Zettelkasten translates to "slip box" in English. It's a <b>note-taking</b> and <b>knowledge management</b> system. The term is associated with the method developed by a German sociologist Niklas Luhmann. The <b>Zettelkasten system</b> is designed to help individuals organize, connect, and develop ideas.</p>
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
      <div className=" bg-white p-2 rounded-md dark:bg-neutral-900">
        <p className=" text-zinc-600 px-4 py-2 dark:text-zinc-200">The key principle of a Zettelkasten is that each note is intended to represent a single idea. The notes must, in most cases, be short and concise, so it's easier to <b>link</b> with other ideas.
        <br/><br/><b>Linking ideas</b> is the central principle of a Zettelkasten; They stablish connections between diffferent ideas and helps to see <b>unexpected relationships</b> between seemingly unrelated information.
        <br/><br/>The structure of the Zettelkasten is built overtime, and the notes constantly reviewed and improved when needed. Most importantly, not all notes have the same <i>purpose.</i></p>

        <h2 className="font-bold text-zinc-600 truncate px-4 py-2 dark:text-violet-600 text-lg">Types of notes</h2>
        <ul className="list-disc">
            <li className=" text-zinc-600 ml-12 py-2 font-bold dark:text-violet-400">Fleeting notes</li>
                <p className=" text-zinc-600 text-sm pl-16 dark:text-zinc-200">Quick and temporary notes to capture thoughts and snippets of information.</p>
            <li className=" text-zinc-600 ml-12 py-2 font-bold dark:text-violet-400">Permanent notes</li>
                <p className=" text-zinc-600 text-sm pl-16 dark:text-zinc-200">Considered developed versions of fleeting notes. Contain a single idea or concept.</p>
            <li className=" text-zinc-600 ml-12 py-2 font-bold dark:text-violet-400">Literature notes</li>
                <p className=" text-zinc-600 text-sm pl-16 dark:text-zinc-200">Notes created to capture key insights and reflections of books and articles.</p>
            <li className=" text-zinc-600 ml-12 py-2 font-bold dark:text-violet-400">Reference notes</li>
                <p className=" text-zinc-600 text-sm pl-16 dark:text-zinc-200">Notes that contain bibliographic details, citations and links to external sources.</p>
        </ul>
        <p className=" text-zinc-600 px-4 py-4 dark:text-zinc-200">There are more types of notes in the original Zettelkasten System. However, those are the main ones relevant
        to explaining the origin of this blog.
        <br/><br/>I've been using the Zettelkasten system with the program <b>Obsidian</b> for almost a year, in order to develop my knowledge base and enhance the quality of my
        university notes. I want to be able to, in 3 years for now, have a distilled material for all the knowledge I acquired in my <b>Software Engineering</b> degree.
        <br/><br/>But I also always wanted to create a blog and help other students reach distilled, easily accessible resources for study, mainly <b>computer science related</b> (but not limited to it).
        So I decided to code this blog, transforming my markdown notes into blogposts with <b>useful content</b> for everyone.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center text-sm border-none border-zinc-400 py-6 px-6 text-zinc-600 items-center">
          <div className="color-square rounded inline-block ring-offset-2 ring-zinc-400 ring-1 dark:ring-violet-500 dark:ring-2 dark:ring-offset-zinc-700" style={{ backgroundColor: '#7dd3fc', width: '16px', height: '16px' }}></div>
          <p className="text-xs md:w-fit md:h-fit px-3 mb-2 md:mb-0 inline-block truncate py-2 md:py-0 dark:text-zinc-200 ">distilled note</p>
      
          <div className="color-square rounded inline-block ring-offset-2 ring-zinc-400 ring-1 dark:ring-violet-500 dark:ring-2 dark:ring-offset-zinc-700" style={{ backgroundColor: '#bef264', width: '16px', height: '16px' }}></div>
          <p className="text-xs md:w-fit md:h-fit px-3 mb-2 md:mb-0 inline-block truncate py-2 md:py-0 dark:text-zinc-200">literature note</p>
      
          <div className="color-square rounded inline-block ring-offset-2 ring-zinc-400 ring-1 dark:ring-violet-500 dark:ring-2 dark:ring-offset-zinc-700" style={{ backgroundColor: '#fb923c', width: '16px', height: '16px' }}></div>
          <p className="text-xs md:w-fit md:h-fit px-3 mb-2 md:mb-0 inline-block truncate py-2 md:py-0 dark:text-zinc-200">reference note</p>
      
          <div className="color-square rounded inline-block ring-offset-2 ring-zinc-400 ring-1 dark:ring-violet-500 dark:ring-2 dark:ring-offset-zinc-700" style={{ backgroundColor: '#c4b5fd', width: '16px', height: '16px' }}></div>
          <p className="text-xs md:w-fit md:h-fit px-3 mb-2 md:mb-0 inline-block truncate pt-2 md:py-0 dark:text-zinc-200">daily note</p>
        </div>
        <div className=" bg-white dark:bg-neutral-900 p-2 rounded-md">
        <p className=" text-zinc-600 px-4 py-2 dark:text-zinc-200">However, instead of using Fleeting and Permanent Notes, I decided to create the <b>"Distilled notes"</b> category.
        The Distilled Note is concise like a fleeting one, but about only one topic and always permanent. Used to quickly remember a specific concept or related concepts.
        Also, I created a <b>"Daily Learning Update"</b>, to help keep me consistent throughout the years and document all my thoughts as I learn more and more about computer science.
        <br/><br/>The rest of the notes remain the same as the original Zettelkasten system. And this is how I plan to keep increasing my knowledge and, in the future, organizing all of
        this information into a more <b>easily visualized</b> way.</p>
        </div>
    
    </div>
  );
};

export default About;