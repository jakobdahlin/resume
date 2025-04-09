"use client"

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion"

interface SkillProps {
  name: string
  category: string
}

const skills: SkillProps[] = [
  // Core Technologies
  { name: "HTML", category: "core" },
  { name: "CSS", category: "core" },
  { name: "JavaScript", category: "core" },
  { name: "TypeScript", category: "core" },
  { name: "React", category: "core" },
  { name: "Next.js", category: "core" },

    // Styling & Animation
    { name: "Tailwind CSS", category: "styling" },
    { name: "CSS Modules", category: "styling" },
    { name: "Framer Motion", category: "styling" },

  // Version Control & Deployment
  { name: "GitHub", category: "VC & deploy" },
  { name: "Vercel", category: "VC & deploy" },

  // Coding & Deployment Tools
  { name: "Visual Studio Code", category: "code" },
  { name: "Adobe Dreamweaver", category: "code" },
  { name: "Rapidweaver", category: "code" },
  { name: "CodePen", category: "code" },
  { name: "Wordpress", category: "code" },
]

export function SkillsSection() {
  const coreSkills = skills.filter((skill) => skill.category === "core")
  const stylingSkills = skills.filter((skill) => skill.category === "styling")
  const vcdepSkills = skills.filter((skill) => skill.category === "VC & deploy")
  const codingSkills = skills.filter((skill) => skill.category === "code")


    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref} className="space-y-6">
      <div>
        <h3 className="mb-3 text-lg font-medium">Core Technologies</h3>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={inView? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap gap-3">
  {coreSkills.map((skill) => (
    <div
    key={skill.name}
    className="p-[1px] rounded-full border border-gray-400/50 hover:border-gray-400 transform duration-200 ease-in-out"
  >
    <div
      className="px-4 py-1 rounded-full text-gray-400/50 hover:text-white transition-colors duration-200"
    >
      {skill.name}
    </div>
  </div>
  ))}
</motion.div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-medium">Styling & Animation</h3>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap gap-3">
  {stylingSkills.map((skill) => (
    <div
    key={skill.name}
    className="p-[1px] rounded-full border border-gray-400/50 hover:border-gray-400 transform duration-200 ease-in-out"
  >
    <div
      className="px-4 py-1 rounded-full text-gray-400/50 hover:text-white transition-colors duration-200"
    >
      {skill.name}
    </div>
  </div>
  ))}
</motion.div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-medium">Version Control & Deployment</h3>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }} 
          className="flex flex-wrap gap-3">
  {vcdepSkills.map((skill) => (
    <div
    key={skill.name}
    className="p-[1px] rounded-full border border-gray-400/50 hover:border-gray-400 transform duration-200 ease-in-out"
  >
    <div
      className="px-4 py-1 rounded-full text-gray-400/50 hover:text-white transition-colors duration-200"
    >
      {skill.name}
    </div>
  </div>
  ))}
</motion.div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-medium">IDE & Development Tools</h3>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}  
          className="flex flex-wrap gap-3">
  {codingSkills.map((skill) => (
    <div
    key={skill.name}
    className="p-[1px] rounded-full border border-gray-400/50 hover:border-gray-400 transform duration-200 ease-in-out"
  >
    <div
      className="px-4 py-1 rounded-full text-gray-400/50 hover:text-white transition-colors duration-200"
    >
      {skill.name}
    </div>
  </div>
  ))}
</motion.div>
      </div>

</div>
  )
}

