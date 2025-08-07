import React from 'react'
import Hero from './Hero'
import Creations from './Creations'
import About from './About'
import  TechStackSection  from './Skills/TechStackSection'
import Contact from './Contact'
import App from '@/app/chat/App'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <TechStackSection/>
      <Creations/>
      <Contact/>
      <footer className="w-full text-center py-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex justify-center mb-2">
            <div className="h-px w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
          &copy; {new Date().getFullYear()} Edwin Ng’ang’a. All rights reserved. <a target="_blank" href="https://icons8.com/icon/Sx3z2Kp9PYWo/animation">Animation</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </footer>
        <App/>
    </div>
  )
}

export default HomePage
