"use client"

import { ExperienceTimeline } from "@/components/experience-timeline"
import { ProjectCard } from "@/components/project-card"
import { SkillsSection } from "@/components/skills-section"
import { SeoSkills } from "@/components/seo-skills"
import { GraphicDesignSection } from "@/components/graphic-design-section"
import { Education } from "@/components/education"

import Header from "@/components/header"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
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
    <div className="h-[200vh]">
    <main className="min-h-screen p-4 md:pt-10 sm:pt-10">
      <div id="top" />
      <Header />

      {/* Bento Grid Layout with card animation */}
      <div className="mx-auto max-w-7xl grid-cols-12 gap-4 md:grid">
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

        {/* Projects Section - Full width */}
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }} className="col-span-5 mb-4 lg:mb-0 md:mb-0 sm:mb-4 rounded-2xl border 
        border-neutral-400/60  bg-black/0 
        backdrop-blur-md p-4 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Demo Projects</h2>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
  <ProjectCard
    className="grayscale hover:grayscale-0"
    title="Glöd Restaurant"
    tags={["TypeScript", "Next.js", "Next.js API Routes", "Tailwind CSS", "React"]}
    imageUrl="/glod.png"
    demoUrl="https://glod-liard.vercel.app"
    githubUrl="https://github.com/jakobdahlin/glodrestaurant"
  />
</div>

        </motion.section>

        {/* Skills Section - Spans 6 columns on desktop */}
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }} className="col-span-7 mb-4 lg:mb-0 md:mb-0 sm:mb-4 rounded-2xl border border-neutral-400/60 bg-black/0 backdrop-blur-md p-4 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Web Development Skills</h2>
          <SkillsSection />
        </motion.section>

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
<section className="my-4">
    <Footer />
</section>

{/* BACK TO TOP BUTTON */}
<div className="col-span-12 w-full">
<motion.button
onClick={() => {
customScrollToTop(2000); 
}}
className="w-full text-center justify-center 
mb-20 border border-neutral-400/60 bg-black/0 backdrop-blur-md p-4 shadow-sm 
mx-auto flex items-center gap-2 px-4 py-4 text-white/80 
rounded-2xl hover:text-white hover:border-white transition"
>
<ArrowUp size={18} className="animate-bounce" />
Back to Top
</motion.button>

      </div>
    </main>
    </div>
    
  )
}

