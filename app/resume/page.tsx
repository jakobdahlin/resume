"use client"

import { ExperienceTimeline } from "@/components/experience-timeline"
import { ProjectCard } from "@/components/project-card"
import { SkillsSection } from "@/components/skills-section"
import { SeoSkills } from "@/components/seo-skills"
import { GraphicDesignSection } from "@/components/graphic-design-section"
import { Education } from "@/components/education"
import Link from "next/link"

import Header from "@/components/header"
import { motion } from "framer-motion"
import { ArrowUp, ShieldCheck, ArrowDownToLine  } from "lucide-react"
import Footer from "@/components/footer"

function customScrollToTop(speed: number) {
  const topEl = document.getElementById("top");
  if (!topEl) return;

  const targetPosition = topEl.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function scrollStep(currentTime: number) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / speed, 1); // speed controls scroll duration

    window.scrollTo(0, startPosition + distance * progress);

    if (timeElapsed < speed) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}

export default function Home() {
  return (
    <div className="bg-black z-[1]">
    <main className="min-h-screen p-4 md:pt-10 sm:pt-10">
      <div id="top" />
      <Header />

      {/* Bento Grid Layout with card animation */}
      <div className="mx-auto max-w-7xl flex flex-col gap-4 md:grid md:grid-cols-12">

        {/* Experience Section - Spans 8 columns on desktop */}
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="col-span-9 mb-4 rounded-2xl border border-neutral-400/60
        bg-black/0 backdrop-blur-md p-4 shadow-sm md:mb-0">
          <h2 className="mb-4 text-2xl font-bold">Experience</h2>
          <ExperienceTimeline />
        </motion.section>

        {/* Education Section - Spans 4 columns on desktop */}
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }} 
                className="col-span-3 mb-4 rounded-2xl border border-neutral-400/60  
                bg-black/0 backdrop-blur-md p-4 shadow-sm md:mb-0">
          <h2 className="mb-4 text-2xl font-bold">Education</h2>
          <Education />
        </motion.section>


        <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 3 }}
  className="col-span-4 rounded-2xl border 
  border-neutral-400/60 bg-black/0 
  backdrop-blur-md p-4 shadow-sm mb-4 lg:mb-0 md:mb-0"
>
  <h2 className="mb-4 text-2xl font-bold">Languages</h2>

  <div className="flex gap-16">
    {/* First language */}
    <div className="flex flex-col">
      <h3 className="text-xl font-semibold">English</h3>
      <p className="text-neutral-400">Fluent</p>
    </div>

    {/* Second language */}
    <div className="flex flex-col mr-16 ">
      <h3 className="text-xl font-semibold">Swedish</h3>
      <p className="text-neutral-400">Native</p>
    </div>
  </div>
</motion.section>
          
          <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }} className="col-span-4 mb-4 lg:mb-0 md:mb-0 sm:mb-4 rounded-2xl border 
        border-neutral-400/60  bg-black/0 
        backdrop-blur-md p-4 shadow-sm">
 <div className="flex gap-2 mb-4 items-center">
  <ShieldCheck className="h-5 w-5 text-white" />
  <h3 className="text-2xl font-bold">Licenses & Certifications</h3>
</div>

<div className="flex flex-col">
<h3 className="text-md font-semibold flex items-center">Next.js App Router Fundamentals</h3>
<div className="flex mt-4">
<Link
    href="/certificate"
    className="flex items-center gap-2 px-6 py-2 rounded-xl bg-transparent border 
    border-neutral-400/20 hover:border-white transition ease-in-out
    hover:shadow-lg hover:shadow-white/50 transform duration-300 
    hover:bg-white/20 hover:text-white text-center"
  >
    <div className="flex gap-2 items-center">
      <ArrowDownToLine size={18} />
      View Certificate
    </div>
  </Link>
</div>
</div>
</motion.section>

<motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }} className="col-span-4 row-span-2 mb-4 lg:mb-0 md:mb-0 sm:mb-4 rounded-2xl border border-neutral-400/60 bg-black/0 backdrop-blur-md p-4 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Web Development Skills</h2>
          <SkillsSection />
        </motion.section>

        {/* Projects Section - Full width */}
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }} className="col-span-8 mb-4 lg:mb-0 md:mb-0 sm:mb-4 rounded-2xl border 
        border-neutral-400/60  bg-black/0 
        backdrop-blur-md p-4 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Demo Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <ProjectCard
    className="grayscale hover:grayscale-0"
    title="Glöd Restaurant"
    tags={["TypeScript", "Next.js", "Next.js API Routes", "Tailwind CSS", "React"]}
    imageUrl="/glod.png"
    demoUrl="https://glod-liard.vercel.app"
    githubUrl="https://github.com/jakobdahlin/glodrestaurant"
  />
    <ProjectCard
    className="grayscale hover:grayscale-0"
    title="Örebrohus44"
    tags={["TypeScript", "Next.js", "Tailwind CSS", "React"]}
    imageUrl="/orebrohus44.png"
    demoUrl="https://www.orebrohus44.se"
    githubUrl="https://github.com/jakobdahlin/orebrohus44"
  />
</div>

        </motion.section>

        {/* Skills Section - Spans 6 columns on desktop */}


        {/* SEO Skills Section - Spans 6 columns on desktop */}
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }} className="col-span-6 mb-4 lg:mb-0 md:mb-0 sm:mb-4 rounded-2xl border border-neutral-400/60 bg-black/0 backdrop-blur-md p-4 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">SEO Skills</h2>
          <SeoSkills />
        </motion.section>

        {/* Graphic Design Section - Full width */}
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }} className="col-span-6 mb-2 lg:mb-0 md:mb-0 sm:mb-4 rounded-2xl border border-neutral-400/60 bg-black/0 backdrop-blur-md p-4 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Design Skills</h2>
          <GraphicDesignSection />
        </motion.section>
      </div>

{/* FOOTER */}
<section className="my-4 mx-auto max-w-7xl">
    <Footer />

{/* BACK TO TOP BUTTON */}
<div className="col-span-12 w-full">
<motion.button
onClick={() => {
customScrollToTop(2000); 
}}
className="w-full text-center justify-center mt-4 hover:bg-white/20
mb-20 border border-neutral-400/60 bg-black/0 backdrop-blur-md p-4 shadow-sm 
mx-auto flex items-center gap-2 px-4 py-4 text-white/80
rounded-2xl hover:text-white hover:border-white transition"
>
<ArrowUp size={18} className="animate-bounce" />
Back to Top
</motion.button>

      </div>
      </section>
    </main>
    </div>
  )
}

