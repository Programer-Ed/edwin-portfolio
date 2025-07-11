import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

import Creations from './Creations'

import About from './About'
import  TechStackSection  from './Skills/TechStackSection'
import Contact from './Contact'
import StickyNav from './chat/sticky-nav'
import { chat } from '@/components/chat2/chat'


const HomePage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <StickyNav />
      <Hero/>
      <About/>
      <TechStackSection/>
      <Creations/>
      <Contact/>
      <footer className="w-full text-center py-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex justify-center mb-2">
            <div className="h-px w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
          &copy; {new Date().getFullYear()} Edwin Ng’ang’a. All rights reserved.
        </footer>
      <chat />
    </div>
  )
}

export default HomePage
