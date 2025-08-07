import React from 'react'
import SectionHeading from './SectionHeading'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <div className="flex justify-center mt-6">
          <Image
            src="/images/monkey-coffee.gif" 
            alt="Monkey sipping coffee at laptop"
            width={200}
            height={200}
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            unoptimized
          />
      </div>
      <section className="mt-10" id="README.md">
        <SectionHeading>Behind The Code</SectionHeading>
        <div className="max-w-3xl mx-auto px-6">
          <p className="dark:text-slate-300 text-[#121721] text-lg leading-relaxed text-center space-y-6">
            <span>
              Hey! I&apos;m <span className="text-cyan-400 font-semibold">Edwin</span> —not just any dev, I&apos;m the Gojo in Tech with Main character energy and Full-stack sorcery. <br/>
              Full-stack developer on a mission to craft sleek, scalable digital experiences. I speak fluent JavaScript and Python, and I groove with React, Flask, and Django. From AI agents to fintech dashboards, I love turning wild ideas into clean, functional apps.
            </span>
            <br />
            <span>
              I&apos;m always learning, always leveling up — think of me as your friendly neighborhood dev... with main-character energy: solving problems, dodging bugs, and chasing the next power-up 💻⚔️👾.
            </span>
            <br />
            <span>
              <span className="italic dark:text-emerald-400 text-blue-900">Let&apos;s build something legendary.</span>
              <br />
              <span className="font-medium text-yellow-400">Twende kazi. 🚀✨</span>
            </span>
          </p>
        </div>
      </section>
      
    </div>
  )
}

export default About
