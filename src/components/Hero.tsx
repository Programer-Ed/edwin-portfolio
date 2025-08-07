import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import SectionHeading from './SectionHeading'

const Hero = () => {
  return (
    <div className='pt-20'>
      <h1 className='text-6xl font-bold text-center'>Software 
        <span className="
          bg-gradient-to-r 
          dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 
          from-blue-700 via-indigo-800 to-purple-800 
          bg-clip-text 
          text-transparent
        ">
          {" "}Engineer
        </span>

      </h1>
      <section className='text-center pt-6 text-xl'>
        <p>Building intelligent systems that bridge the gap between</p> 
        <p className='bg-gradient-to-r dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500
         from-blue-700 via-indigo-800 to-purple-800 
         bg-clip-text text-transparent font-semibold'>
         human creativity and artificial intelligence
        </p>
      </section>
      <section className='flex gap-3 justify-center cursor-pointer pt-8'>
        <a 
          href="https://github.com/Programer-Ed" 
          className='p-3 rounded-full bg-gray-100 dark:bg-slate-800/50 
                    transition-all duration-300 ease-in-out 
                    hover:-translate-y-1 hover:bg-blue-100 dark:hover:bg-blue-400/20'>
          <Github className='w-6 h-6'/>
        </a>
        <a 
          href="https://www.linkedin.com/in/edwinnganga/" 
          className='p-3 rounded-full bg-gray-100 dark:bg-slate-800/50 
                    transition-all duration-300 ease-in-out 
                    hover:-translate-y-1 hover:bg-blue-100 dark:hover:bg-blue-400/20'>
          <Linkedin className='w-6 h-6'/>
        </a>
        <a 
          href="mailto:edwin.nganga.tech@gmail.com" 
          className='p-3 rounded-full bg-gray-100 dark:bg-slate-800/50 
                    transition-all duration-300 ease-in-out 
                    hover:-translate-y-1 hover:bg-blue-100 dark:hover:bg-blue-400/20'>
          <Mail className='w-6 h-6'/>
        </a>
      </section>
    </div>
  )
}

export default Hero
