"use client";

import React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillProps {
  name: string;
  category: string;
  className: string; // This now includes the border and shadow classes
}

const skills: SkillProps[] = [
  // Core Technologies
  { name: "HTML", category: "core", className: "border-neutral-400/60 hover:border-orange-400 hover:shadow-orange-700/70" },
  { name: "CSS", category: "core", className: "border-neutral-400/60 hover:border-sky-400 hover:shadow-sky-700/70" },
  { name: "JavaScript", category: "core", className: "border-neutral-400/60 hover:border-amber-400 hover:shadow-amber-700/70" },
  { name: "TypeScript", category: "core", className: "border-neutral-400/60 hover:border-blue-500 hover:shadow-blue-700/70" },
  { name: "React", category: "core", className: "border-neutral-400/60 hover:border-cyan-400 hover:shadow-cyan-700/70" },
  { name: "Next.js", category: "core", className: "border-neutral-400/60 hover:border-neutral-100 hover:shadow-neutral-400/70" },

  // Styling & Animation
  { name: "Tailwind CSS", category: "styling", className: "border-neutral-400/60 hover:border-teal-300 hover:shadow-teal-400/70" },
  { name: "CSS Modules", category: "styling", className: "border-neutral-400/60 hover:border-sky-400 hover:shadow-sky-700/70" },
  { name: "Framer Motion", category: "styling", className: "border-neutral-400/60 hover:border-blue-400 hover:shadow-purple-700/70" },

  // Version Control & Deployment
  { name: "GitHub", category: "VC & deploy", className: "border-neutral-400/60 hover:border-white hover:shadow-white/40" },
  { name: "Vercel", category: "VC & deploy", className: "border-neutral-400/60 hover:border-white hover:shadow-white/40" },

  // Coding & Deployment Tools
  { name: "Visual Studio Code", category: "code", className: "border-neutral-400/60 hover:border-sky-300 hover:shadow-blue-600/70" },
  { name: "Adobe Dreamweaver", category: "code", className: "border-neutral-400/60 hover:border-fuchsia-400 hover:shadow-fuchsia-800/70" },
  { name: "Rapidweaver", category: "code", className: "border-neutral-400/60 hover:border-violet-300 hover:shadow-indigo-600/70" },
  { name: "CodePen", category: "code", className: "border-neutral-400/60 hover:border-white hover:shadow-white/40" },
  { name: "Wordpress", category: "code", className: "border-neutral-400/60 hover:border-cyan-100/70 hover:shadow-cyan-700/70" },
];

export function SkillsSection() {
  const coreSkills = skills.filter((skill) => skill.category === "core");
  const stylingSkills = skills.filter((skill) => skill.category === "styling");
  const vcdepSkills = skills.filter((skill) => skill.category === "VC & deploy");
  const codingSkills = skills.filter((skill) => skill.category === "code");

  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref} className="space-y-6">
      <div>
        <h3 className="mb-3 text-lg font-medium">Core Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {coreSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-[1px] rounded-xl hover:shadow-lg border transform duration-300 ease-in-out ${skill.className}`} // Apply custom className
            >
              <div className="px-4 py-1 rounded-xl text-white transition-colors duration-300">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-medium">Styling & Animation</h3>
        <div className="flex flex-wrap gap-3">
          {stylingSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-[1px] rounded-xl border border-neutral-400/60 
                hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-600/70 
                transform duration-300 ease-in-out ${skill.className}`} // Apply custom className
            >
              <div className="px-4 py-1 rounded-xl text-white transition-colors duration-300">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-medium">Version Control & Deployment</h3>
        <div className="flex flex-wrap gap-3">
          {vcdepSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-[1px] rounded-xl border border-neutral-400/60 
                hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-600/70 
                transform duration-300 ease-in-out ${skill.className}`} // Apply custom className
            >
              <div className="px-4 py-1 rounded-xl text-white transition-colors duration-300">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-medium">IDE & Development Tools</h3>
        <div className="flex flex-wrap gap-3">
          {codingSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-[1px] rounded-xl border border-neutral-400/60 
                hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-600/70 
                transform duration-300 ease-in-out ${skill.className}`} // Apply custom className
            >
              <div className="px-4 py-1 rounded-xl text-white transition-colors duration-300">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
