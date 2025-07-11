// import React from 'react'
// import SectionHeading from './SectionHeading'

// const Creations = () => {
//   return (
//     <div>
//         <section className='mt-6'>
//             <SectionHeading>The Debug <span className='bg-gradient-to-r 
//           dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 
//           from-blue-700 via-indigo-800 to-purple-800 
//           bg-clip-text 
//           text-transparent'>Diaries</span></SectionHeading>
//           <p className="text-muted-foreground max-w-lg mx-auto">
//             Each build. A new story. All powered by caffeine & curiosity.
//           </p>
//         </section>
//     </div>
//   )
// }

// export default Creations

"use client";
import { motion } from "framer-motion";
import projects from "@/app/data/projects";
import Image from "next/image";

const Creations = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-500 dark:text-cyan-400 mb-3">Creations & Builds</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            From solo builds to team collabs — peep the stack-powered projects I’ve brought to life.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -6, scale: 1.01 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-xl shadow-md border border-zinc-200 dark:border-zinc-700 overflow-hidden transition-all bg-white dark:bg-zinc-800 group hover:shadow-cyan-500/20`}
            >
              <Image
                src={`/images/${project.thumbnail}`}
                alt={project.title}
                width={500}
                height={280}
                className="w-full h-52 object-cover group-hover:opacity-90 transition"
              />

              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex gap-3 text-xs mt-2">
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      className="text-cyan-600 dark:text-cyan-400 underline hover:text-cyan-800"
                      target="_blank" rel="noopener noreferrer"
                    >
                      Code ↗
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-800"
                      target="_blank" rel="noopener noreferrer"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creations;
