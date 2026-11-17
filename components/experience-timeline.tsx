import { CalendarDays, Building, MapPin } from "lucide-react"
import { motion, Variants } from "framer-motion"
import Image from "next/image"

export function ExperienceTimeline() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  }

  return (
    <div className="space-y-12">
      {/* First Company */}
      <motion.div
        className="space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">
              Design Engineer | Frontend Developer | Artist
            </h3>
            <span className="inline-block rounded-full p-[1px] text-white animate-pulse-slow shadow-lg 
            border border-sky-200  bg-sky-400/30 shadow-blue-500/50">
              <span className="block rounded-full px-2.5 py-0.5 text-xs font-medium text-primary text-white">
                Current
              </span>
            </span>
          </div>

          <motion.div
            className="mt-1 text-white"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <img
                src="/jdlogo.png"
                alt="Jakob Dahlin logo"
                className="h-6 w-6 object-contain hover:scale-150 transition duration-200"
              />
              <h3 className="text-lg font-semibold">Jakob Dahlin</h3>
            </div>
          </motion.div>

          {/* Product Designer & UX Engineer */}          <motion.div
            className="border-l border-neutral-400/50 m-4 px-4"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >

            {/* Design Engineer */}

            <h4 className="text-lg font-semibold text-white mt-6">
              Design  Engineer
            </h4>
            <div className="flex items-center gap-1 mb-3">
              <CalendarDays className="h-4 w-4 text-white" />
              <span className="text-neutral-400">2012 - Present</span>
              <MapPin className="h-4 w-4 text-white ml-4" />
              <span className="text-neutral-400">New York, NY (Remote)</span>
            </div>

            <ul className="list-disc pl-6 space-y-1 marker:text-white text-neutral-400">
              <li>Design and develop websites and applications with React, Next.js, TypeScript, and Tailwind CSS, with a focus on UX, accessibility, performance, and responsive design.</li>
              <li>Built jakobdahlin.com, a custom photography and art platform with product galleries, e-commerce integrations, licensing functionality, and digital asset delivery.</li>
              <li>Created Cognosco, a real estate intelligence application that provides access to NYC property information through interactive interfaces, property reports, and public data integrations.</li>
            </ul>

            {/* Design Engineer */}

            <h4 className="text-lg font-semibold text-white mt-6">
              Artist & Creative Developer
            </h4>
            <div className="flex items-center gap-1 mb-3">
              <CalendarDays className="h-4 w-4 text-white" />
              <span className="text-neutral-400">2026 - Present</span>
              <MapPin className="h-4 w-4 text-white ml-4" />
              <span className="text-neutral-400">New York, NY (Hybrid)</span>
            </div>

            <ul className="list-disc pl-6 space-y-1 marker:text-white text-neutral-400">
              <li>Create original digital artwork and animations based on JavaScript, WebGL, and GLSL through a custom built application.</li>
              <li>Develop limited edition artwork for online sale and unique commissions for commercial property owners, hospitality spaces, corporate interiors, and private collectors.</li>
            </ul>

            {/* Photographer */}
            <h4 className="text-lg font-semibold text-white mt-6">Architectural Photographer</h4>
            <div className="flex items-center gap-1 mb-3">
              <CalendarDays className="h-4 w-4 text-white" />
              <span className="text-neutral-400">2016 - Present</span>
              <MapPin className="h-4 w-4 text-white ml-4" />
              <span className="text-neutral-400">New York, NY (Hybrid)</span>
            </div>
            <ul className="list-disc pl-6 space-y-1 marker:text-white text-neutral-400">
              <li>Provide architectural photography for real estate developers, property owners, architects, brokerages, and hospitality clients across New York City.</li>
              <li>Photograph commercial and residential properties, architecture, interiors, construction projects, and landmark buildings for marketing, editorial, and corporate use.</li>
              <li>Captured approximately 250,000 photographs across architectural and real estate assignments in New York City since 2016. Clients include RXR and Brookfield Properties, with separate work licensed to IKEA through UK art publisher Rosenstiel's.</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Other Experience */}
      <motion.div
        className="mt-1 text-white"
        variants={fadeUp}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-3">
          <img
            src="/okommun.png"
            alt="Örebro Municipality logo"
            className="h-6 w-6 object-contain hover:scale-150 transition duration-200"
          />
          <h3 className="text-lg font-semibold">Örebro Municipality</h3>
        </div>
        <div>

          <div className="border-l border-neutral-400/50 m-4 px-4">
            <h4 className="text-lg font-semibold text-white mt-6">Childcare Worker</h4>
            <div className="flex items-center gap-1 mb-3">
              <CalendarDays className="h-4 w-4 text-white" />
              <span className="text-neutral-400 text-md">2014 - 2016</span>
              <MapPin className="h-4 w-4 text-white ml-4" />
              <span className="text-neutral-400">Örebro, Sweden (On-Site)</span>
            </div>
            <ul className="list-disc pl-6 space-y-1 marker:text-white text-neutral-400">
              <li>Managed daily activities, digital documentation, communication materials, and social media content.</li>
            </ul>

            <h4 className="text-lg font-semibold text-white mt-6">System Administrator</h4>
            <div className="flex items-center gap-1 mb-3">
              <CalendarDays className="h-4 w-4 text-white" />
              <span className="text-neutral-400">2013 - 2014</span>
              <MapPin className="h-4 w-4 text-white ml-4" />
              <span className="text-neutral-400">Örebro, Sweden (On-Site)</span>
            </div>
            <ul className="list-disc pl-6 space-y-1 marker:text-white text-neutral-400">
              <li>Managed digital infrastructure, website content, marketing materials, and supported a recruitment platform that connected job seekers with employers.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
