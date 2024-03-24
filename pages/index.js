import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useState } from 'react'; 
import  Typed  from 'react-typed';
import Link from 'next/link';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>HamzaCodes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
        <nav className="py-10 flex justify-between">
        <div>
          <h1> 
          <span className="text-7xl font-montserrat font-bold text-cyan-400">H</span>
          <span className="text-7xl font-montserrat font-bold mr-6 text-gray-800 dark:text-white">AMZA.</span>
          </h1>  
          </div>
        <ul className="flex items-center">
     
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl text-gray-800 dark:text-white"/>
            </li>
            <li>
            <Link className= "bg-cyan-400 text-white px-4 py-2 rounded-md ml-6 mr-6" href="Hamza_Berqia_CV.pdf" target="_blank">Resume</Link>
            </li>
          </ul>
      
          
        </nav>
        <div className="text-center p-10">
        <img class = "round-image" src="hb.jpg" ></img>
        <Typed className='text-5xl py-2 text-cyan-400 font-medium'
                    strings={["Hi I'm Hamza"]}
                    typeSpeed={150}
                    backSpeed={120}
                    loop
        />
          <h4 className='text-xl py-2 text-gray-800 dark:text-white font-bold'>About Me</h4>
          <p className='text-md py-1 leading-8 text-gray-800 dark:text-white'>Software Engineer<span className='text-cyan-400'>,</span> UX Designer<span className='text-cyan-400'> &</span> Crypto Investor</p>
            <p className='text-md py-1 leading-8 text-gray-800 dark:text-white'> BSc 
              <span className='text-cyan-400'> (Hons)</span> Computer Science Graduate 2022</p>
              <p className='text-md py-1 leading-8 dark:text-white dark:text-white'>Co-Founder and CEO of
              <span className='text-cyan-400'> <a href='https://www.linkedin.com/company/hsux-design/'>HSUX™</a></span></p>
          <h5 className='text-xl py-1 text-gray-800 dark:text-white font-bold'>Skills:</h5>
          <p className='text-md py-1 leading-8 text-gray-800 dark:text-white'> Java<span className='text-cyan-400'>,</span> C#<span className='text-cyan-400'>,</span> .NET<span className='text-cyan-400'>,</span> Python<span className='text-cyan-400'>,</span> JavaScript
          <span className=' text-cyan-400'>,</span> HTML<span className='text-cyan-400'>,</span> CSS<span className='text-cyan-400'>,</span> Tailwind
          <span className=' text-cyan-400'>,</span> NodeJS
          <span className=' text-cyan-400'>,</span> NextJs 
          <span className=' text-cyan-400'>,</span> React 
          <span className=' text-cyan-400'>,</span> Azure DevOps  
          <span className=' text-cyan-400'>,</span> SQL 
          <span className=' text-cyan-400'> &</span> React </p>
        </div>
        <div className='text-5xl flex justify-center gap-4  text-gray-800 dark:text-white'>
        <a href='https://www.linkedin.com/in/hamza-berqia/'><AiFillLinkedin /></a>
        <a href='https://github.com/HamzaCode5'><AiFillGithub /></a>
        
        </div>
        <div>
        <a href="mailto:hamzaberqia.com" className="text-md text-gray-800 dark:text-white flex justify-center gap-5 py-7">contact@hamzaberqia.com</a>
        </div>
        
        </section>
      </main>
    </div>
  );
}
