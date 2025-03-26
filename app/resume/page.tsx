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

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:pt-10 sm:pt-10">
      {/* Hero Section */}
      <section className="mb-8 rounded-xl pt-8">
        <div className="mx-auto max-w-7xl mt-10">
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap gap-3">
  <Button asChild variant="outline" className="gap-2 text-md rounded-xl backdrop-blur-sm bg-black/0 
  border-neutral-700 hover:border-white hover:backdrop-blur-sm hover:bg-transparent hover:text-white">
  <Link href="mailto:jakob@jakobdahlin.com">
  <Mail size={18} />
  Contact
</Link>
  </Button>

  <Button asChild variant="outline" className="gap-2 text-md rounded-xl backdrop-blur-sm bg-black/0 
  border-neutral-700 hover:border-white hover:backdrop-blur-sm hover:bg-transparent hover:text-white">
    <Link href="https://github.com/jakobdahlin" target="_blank" rel="noopener noreferrer">
      <Github size={18} />
      GitHub
    </Link>
  </Button>

  <Button asChild variant="outline" className="gap-2 text-md rounded-xl backdrop-blur-sm bg-black/0 
  border-neutral-700 hover:border-white hover:backdrop-blur-sm hover:bg-transparent hover:text-white">
    <Link href="https://www.linkedin.com/in/jakobdahlin/" target="_blank" rel="noopener noreferrer">
      <Linkedin size={18} />
      LinkedIn
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
        <section className="col-span-5 lg:mb-0 md:mb-0 sm:mb-4 rounded-2xl border border-neutral-800 bg-black/0 
        backdrop-blur-md p-4 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Demo Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
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
        <section className="col-span-7 mb-4 rounded-2xl border border-neutral-800 bg-black/0 backdrop-blur-md p-4 shadow-sm md:mb-0">
          <h2 className="mb-4 text-2xl font-bold">Web Development Skills</h2>
          <SkillsSection />
        </section>

        {/* SEO Skills Section - Spans 6 columns on desktop */}
        <section className="col-span-7 mb-4 rounded-2xl border border-neutral-800 bg-black/0 backdrop-blur-md p-4 shadow-sm md:mb-0">
          <h2 className="mb-4 text-2xl font-bold">SEO Skills</h2>
          <SeoSkills />
        </section>

        {/* Graphic Design Section - Full width */}
        <section className="col-span-5 rounded-2xl border border-neutral-800 bg-black/0 backdrop-blur-md p-4 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Design Skills</h2>
          <GraphicDesignSection />
        </section>

      </div>
    </main>
  )
}

