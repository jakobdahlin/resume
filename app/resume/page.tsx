"use client"

import { ExperienceTimeline } from "@/components/experience-timeline"
import { ProjectCard } from "@/components/project-card"
import { SkillsSection } from "@/components/skills-section"
import { SeoSkills } from "@/components/seo-skills"
import { GraphicDesignSection } from "@/components/graphic-design-section"
import { Education } from "@/components/education"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

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
    <main className="min-h-screen p-4 md:pt-10 sm:pt-10">
      <div id="top" />
      {/* Hero Section */}
      <section className="mb-4 rounded-xl pt-8">
        <div className="mx-auto max-w-7xl mt-10">
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-3 items-center justify-center">
  <Button asChild variant="outline" className="gap-2 text-md rounded-xl bg-black/60 
  border-black hover:border-white hover:text-white hover:bg-black/60">
    <Link href="https://github.com/jakobdahlin" target="_blank" rel="noopener noreferrer">
      <Github size={18} />
      GitHub
    </Link>
  </Button>

  <Button asChild variant="outline" className="gap-2 text-md rounded-xl bg-black/60 
  border-black hover:border-white hover:text-white hover:bg-black/60">
    <Link href="https://www.linkedin.com/in/jakobdahlin/" target="_blank" rel="noopener noreferrer">
      <Linkedin size={18} />
      LinkedIn
    </Link>
  </Button>

  <Button asChild variant="outline" className="gap-2 text-md rounded-xl bg-black/60 
    border-black hover:border-white hover:text-white hover:bg-black/60">
    <Link href="/Resume.pdf" download>
      <span className="text-md">Download Resume</span>
    </Link>
  </Button>
</motion.div>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <div className="mx-auto max-w-7xl grid-cols-12 gap-4 md:grid">
        {/* Experience Section - Spans 8 columns on desktop */}
        <section className="col-span-9 mb-4 rounded-2xl border border-neutral-800 bg-black/0 backdrop-blur-md p-4 shadow-sm md:mb-0">
          <h2 className="mb-4 text-2xl font-bold">Experience</h2>
          <ExperienceTimeline />
        </section>

        {/* Education Section - Spans 4 columns on desktop */}
        <section 
                className="col-span-3 mb-4 rounded-2xl border border-neutral-800 bg-black/0 backdrop-blur-md p-4 shadow-sm md:mb-0">
          <h2 className="mb-4 text-2xl font-bold">Education</h2>
          <Education />
        </section>

        {/* Projects Section - Full width */}
        <section className="col-span-5 mb-4 lg:mb-0 md:mb-0 sm:mb-4 rounded-2xl border border-neutral-800 bg-black/0 
        backdrop-blur-md p-4 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Demo Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
  <ProjectCard
    className="grayscale hover:grayscale-0"
    title="Winery"
    tags={["TypeScript", "Next.js", "Tailwind CSS", "React"]}
    imageUrl="/pennybridgecellars.png"
    demoUrl="https://pennybridgecellars.vercel.app/"
    githubUrl="https://github.com/jakobdahlin/pennybridgecellars"
  />
  <ProjectCard
    className="grayscale hover:grayscale-0"
    title="Real Estate Team"
    tags={["TypeScript", "Next.js", "Tailwind CSS", "React"]}
    imageUrl="/nycrealestateteam.png"
    demoUrl="https://nycrealestateteam.vercel.app/"
    githubUrl="https://github.com/jakobdahlin/brettmichaels"
  />
</div>

        </section>

        {/* Skills Section - Spans 6 columns on desktop */}
        <section className="col-span-7 mb-4 lg:mb-0 md:mb-0 sm:mb-4 rounded-2xl border border-neutral-800 bg-black/0 backdrop-blur-md p-4 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Web Development Skills</h2>
          <SkillsSection />
        </section>

        {/* SEO Skills Section - Spans 6 columns on desktop */}
        <section className="col-span-7 mb-4 lg:mb-0 md:mb-0 sm:mb-4 rounded-2xl border border-neutral-800 bg-black/0 backdrop-blur-md p-4 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">SEO Skills</h2>
          <SeoSkills />
        </section>

        {/* Graphic Design Section - Full width */}
        <section className="col-span-5 mb-4 lg:mb-0 md:mb-0 sm:mb-4 rounded-2xl border border-neutral-800 bg-black/0 backdrop-blur-md p-4 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Design Skills</h2>
          <GraphicDesignSection />
        </section>

        
        <motion.button
          onClick={() => {
            customScrollToTop(2000); // Adjust speed here (2000ms = 2 seconds)
          }}
          className="col-span-12 w-full text-center justify-center lg:mt-0 md:mt-0 mb-20 border border-neutral-800 bg-black/0 backdrop-blur-md p-4 shadow-sm mx-auto flex items-center gap-2 px-4 py-4 border-white/20 text-white/80 rounded-2xl hover:text-white hover:border-white transition"
        >
          <ArrowUp size={18} className="animate-bounce" />
          Back to Top
        </motion.button>
      </div>
    </main>
    
  )
}

