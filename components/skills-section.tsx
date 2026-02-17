"use client";

import React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillProps {
  name: string;
  category: string;
  hoverClasses: string;
  activeClasses: string;
}

const skills: SkillProps[] = [
  // Core Technologies
  {
    name: "HTML",
    category: "core",
    hoverClasses:
      "hover:bg-orange-400/20 hover:border-orange-400 hover:shadow-orange-700/70 shadow-lg",
    activeClasses:
      "bg-orange-400/20 border-orange-400 shadow-orange-700/70 shadow-lg",
  },
  {
    name: "CSS",
    category: "core",
    hoverClasses:
      "hover:bg-sky-400/20 hover:border-sky-400 hover:shadow-sky-700/70 shadow-lg",
    activeClasses:
      "bg-sky-400/20 border-sky-400 shadow-sky-700/70 shadow-lg",
  },
  {
    name: "JavaScript",
    category: "core",
    hoverClasses:
      "hover:bg-amber-400/20 hover:border-amber-400 hover:shadow-amber-700/70 shadow-lg",
    activeClasses:
      "bg-amber-400/20 border-amber-400 shadow-amber-700/70 shadow-lg",
  },
  {
    name: "TypeScript",
    category: "core",
    hoverClasses:
      "hover:bg-blue-500/20 hover:border-blue-500 hover:shadow-blue-700/70 shadow-lg",
    activeClasses:
      "bg-blue-500/20 border-blue-500 shadow-blue-700/70 shadow-lg",
  },
  {
    name: "React",
    category: "core",
    hoverClasses:
      "hover:bg-cyan-400/20 hover:border-cyan-400 hover:shadow-cyan-700/70 shadow-lg",
    activeClasses:
      "bg-cyan-400/20 border-cyan-400 shadow-cyan-700/70 shadow-lg",
  },
  {
    name: "Next.js",
    category: "core",
    hoverClasses:
      "hover:bg-white/20 hover:border-white hover:shadow-white/70 shadow-lg",
    activeClasses:
      "bg-white/20 border-white shadow-white/70 shadow-lg",
  },

  // Styling & Animation
  {
    name: "Tailwind CSS",
    category: "styling",
    hoverClasses:
      "hover:bg-sky-300/20 hover:border-sky-300 hover:shadow-teal-400/50 shadow-lg",
    activeClasses:
      "bg-sky-300/20 border-sky-300 shadow-teal-400/50 shadow-lg",
  },
  {
    name: "CSS Modules",
    category: "styling",
    hoverClasses:
      "hover:bg-sky-400/20 hover:border-sky-400 hover:shadow-sky-700/70 shadow-lg",
    activeClasses:
      "bg-sky-400/20 border-sky-400 shadow-sky-700/70 shadow-lg",
  },
  {
    name: "Framer Motion",
    category: "styling",
    hoverClasses:
      "hover:bg-blue-400/20 hover:border-blue-400 hover:shadow-purple-700/70 shadow-lg",
    activeClasses:
      "bg-blue-400/20 border-blue-400 shadow-purple-700/70 shadow-lg",
  },

  // Version Control & Deployment
  {
    name: "GitHub",
    category: "VC & deploy",
    hoverClasses:
      "hover:bg-white/20 hover:border-white hover:shadow-white/40 shadow-lg",
    activeClasses:
      "bg-white/20 border-white shadow-white/40 shadow-lg",
  },
  {
    name: "Vercel",
    category: "VC & deploy",
    hoverClasses:
      "hover:bg-white/20 hover:border-white hover:shadow-white/40 shadow-lg",
    activeClasses:
      "bg-white/20 border-white shadow-white/40 shadow-lg",
  },

  // Coding & Deployment Tools
  {
    name: "Visual Studio Code",
    category: "code",
    hoverClasses:
      "hover:bg-sky-300/20 hover:border-sky-300 hover:shadow-blue-600/70 shadow-lg",
    activeClasses:
      "bg-sky-300/20 border-sky-300 shadow-blue-600/70 shadow-lg",
  },
  {
    name: "Adobe Dreamweaver",
    category: "code",
    hoverClasses:
      "hover:bg-fuchsia-400/20 hover:border-fuchsia-400 hover:shadow-fuchsia-800/70 shadow-lg",
    activeClasses:
      "bg-fuchsia-400/20 border-fuchsia-400 shadow-fuchsia-800/70 shadow-lg",
  },
  {
    name: "Rapidweaver",
    category: "code",
    hoverClasses:
      "hover:bg-violet-300/20 hover:border-violet-300 hover:shadow-indigo-600/70 shadow-lg",
    activeClasses:
      "bg-violet-300/20 border-violet-300 shadow-indigo-600/70 shadow-lg",
  },
  {
    name: "CodePen",
    category: "code",
    hoverClasses:
      "hover:bg-white/20 hover:border-white hover:shadow-white/70 shadow-lg",
    activeClasses:
      "bg-white/20 border-white shadow-white/70 shadow-lg",
  },
  {
    name: "Wordpress",
    category: "code",
    hoverClasses:
      "hover:bg-cyan-100/20 hover:border-cyan-100/70 hover:shadow-cyan-700/70 shadow-lg",
    activeClasses:
      "bg-cyan-100/20 border-cyan-100/70 shadow-cyan-700/70 shadow-lg",
  },

  // AI-Assisted Design & Development
  {
    name: "v0",
    category: "aidesign",
    hoverClasses:
      "hover:bg-teal-400/20 hover:border-teal-500 hover:shadow-teal-400/40 shadow-lg",
    activeClasses:
      "bg-teal-400/20 border-teal-500 shadow-teal-400/40 shadow-lg",
  },
  {
    name: "ChatGPT",
    category: "aidesign",
    hoverClasses:
      "hover:bg-white/20 hover:border-white hover:shadow-white/40 shadow-lg",
    activeClasses:
      "bg-white/20 border-white shadow-white/40 shadow-lg",
  },
  {
    name: "Sora",
    category: "aidesign",
    hoverClasses:
      "hover:bg-sky-500/20 hover:border-sky-600 hover:shadow-sky-600/40 shadow-lg",
    activeClasses:
      "bg-sky-500/20 border-sky-600 shadow-sky-600/40 shadow-lg",
  },
];

export function SkillsSection() {
  const coreSkills = skills.filter((skill) => skill.category === "core");
  const stylingSkills = skills.filter((skill) => skill.category === "styling");
  const vcdepSkills = skills.filter((skill) => skill.category === "VC & deploy");
  const codingSkills = skills.filter((skill) => skill.category === "code");
  const aidesignSkills = skills.filter((skill) => skill.category === "aidesign");

  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  const [activeSkill, setActiveSkill] = React.useState<string | null>(null);

useEffect(() => {
  if (!inView) return;

  const allSkills = skills.map((s) => s.name);

  let previousIndex = -1;
  let timeout: ReturnType<typeof setTimeout>;

  const triggerFlash = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * allSkills.length);
    } while (randomIndex === previousIndex);

    previousIndex = randomIndex;

    setActiveSkill(allSkills[randomIndex]);

    setTimeout(() => {
      setActiveSkill(null);
    }, 1000); // glow duration

    timeout = setTimeout(triggerFlash, 1500); // delay between flashes
  };

  timeout = setTimeout(triggerFlash, 500);

  return () => clearTimeout(timeout);
}, [inView]);

  return (
    <div ref={ref} className="space-y-6">
      <div>
        <h3 className="mb-3 text-lg font-medium">Core Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {coreSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-[1px] rounded-xl border border-neutral-400/30 transform duration-500 ease-in-out
                ${skill.hoverClasses}
                ${activeSkill === skill.name ? skill.activeClasses : ""}
              `}
            >
              <div className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200">
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
              className={`p-[1px] rounded-xl border border-neutral-400/30 transform duration-500 ease-in-out
                ${skill.hoverClasses}
                ${activeSkill === skill.name ? skill.activeClasses : ""}
              `}
            >
              <div className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200">
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
              className={`p-[1px] rounded-xl border border-neutral-400/30 transform duration-500 ease-in-out
                ${skill.hoverClasses}
                ${activeSkill === skill.name ? skill.activeClasses : ""}
              `}
            >
              <div className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200">
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
              className={`p-[1px] rounded-xl border border-neutral-400/30 transform duration-500 ease-in-out
                ${skill.hoverClasses}
                ${activeSkill === skill.name ? skill.activeClasses : ""}
              `}
            >
              <div className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>


      <div>
        <h3 className="mb-3 text-lg font-medium">AI-Assisted Design & Development</h3>
        <div className="flex flex-wrap gap-3">
          {aidesignSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-[1px] rounded-xl border border-neutral-400/30 transform duration-500 ease-in-out
                ${skill.hoverClasses}
                ${activeSkill === skill.name ? skill.activeClasses : ""}
              `}
            >
              <div className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
