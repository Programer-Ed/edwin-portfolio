'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaAws,
  FaGithub,
  FaDocker,
  FaLock,
  FaVuejs
} from "react-icons/fa";
import { SiMongodb, SiTypescript, SiTailwindcss, SiPrisma, SiSupabase, SiExpress, SiDjango, SiRedis, SiVercel } from "react-icons/si";
import { BiServer, BiBoltCircle, BiLogoFlask } from "react-icons/bi"; 
import type { FC } from "react";

type TechStackCardProp ={
  name: string;
  context: string;
  // status?: 'Expert' | 'Proficient' | 'Familiar' | 'Learning';
  status?: keyof typeof statusColors;
};

const iconMap: Record<string, FC<{className?: string}>> = {
  "React": FaReact,
  "Node.js": FaNodeJs,
  "MongoDB": SiMongodb,
  "PostgreSQL": FaDatabase,
  "Supabase": SiSupabase,
  "Prisma": SiPrisma,
  "Tailwind CSS": SiTailwindcss,
  "TypeScript": SiTypescript,
  "Python": FaPython,
  "Express": SiExpress,
  "Flask": BiLogoFlask,
  "Django": SiDjango,
  "Docker": FaDocker,
  "CI/CD": BiBoltCircle,
  "AWS": FaAws,
  "JWT": FaLock,
  "GitHub": FaGithub,
  "Vue.js": FaVuejs,
  "Redis": SiRedis,
  "Vercel AI SDK": SiVercel
}

const statusColors: Record<string, string> = {
  Expert: 'bg-green-600 text-white',
  Proficient: 'bg-blue-600 text-white',
  Familiar: 'bg-slate-600 text-white',
  Learning: 'bg-yellow-500 text-slate-900',
  'Daily Use': 'bg-purple-600 text-white',
  'Used in client projects': 'bg-indigo-600 text-white',
  'Styling weapon of choice': 'bg-cyan-600 text-white',
  'Used regularly': 'bg-emerald-600 text-white',
  'Solid': 'bg-lime-600 text-white',
  'Core backend tool': 'bg-amber-600 text-white',
  'Regular use': 'bg-teal-600 text-white',
  'Strong': 'bg-violet-600 text-white',
  'Confident': 'bg-fuchsia-600 text-white',
  'Used in team collaboration': 'bg-rose-600 text-white',
  'Used in deployed apps': 'bg-sky-600 text-white',
  'Used experimentally': 'bg-pink-600 text-white',
  'Intermediate': 'bg-orange-600 text-white',
  'Tool in AI projects': 'bg-cyan-700 text-white',
  'Deployment-ready': 'bg-green-700 text-white',
  'Familiar setup': 'bg-blue-700 text-white',
  'Used in frontend UI': 'bg-purple-700 text-white',
  'Implemented securely': 'bg-emerald-700 text-white',
  'Always': 'bg-red-600 text-white',
};

const TechStackCard = ({ name, context, status,}: TechStackCardProp) => {
  const Icon = iconMap[name] || BiServer;
  let badge = 'bg-gray-400 text-white';
  if (status && statusColors[status]) {
  badge = statusColors[status];
}

  return (
    <motion.div
      className="bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-xl p-4 flex flex-col gap-2 shadow-sm hover:shadow-md transition-all"
      whileHover={{ y: -5 }}
      // initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      >
      <div className='flex items-center gap-2 mb-2'>
        <Icon/>
        <h1>{name}</h1>
      </div>
      <p>Used in: {context}</p>
      {status &&(
          <span className={`w-fit text-xs font-semibold px-2 py-1 rounded ${badge}`}>
            {status}</span>
      )}
      
    </motion.div>
  )
}

export default TechStackCard
