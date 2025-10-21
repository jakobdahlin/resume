import { CalendarDays, Building, MapPin } from "lucide-react"
import { motion, Variants } from "framer-motion"

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
              Founder, Photographer & Product Designer
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
            <div className="flex items-center gap-1">
              <Building className="h-4 w-4 text-white" />
              <h3 className="text-lg font-semibold pl-2">Jakob Dahlin</h3>
            </div>
          </motion.div>

          <motion.p
            className="text-neutral-400"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            I run a multidisciplinary business under my own name where I work
            end-to-end across every branch of both digital product development
            and photography. That includes everything from finance, marketing,
            and client management to UX, engineering, branding, and content.
            Whether I'm building software or photographing buildings, I handle
            every part of the process myself—from concept to execution.
          </motion.p>

          {/* Product Designer & UX Engineer */}
          <motion.div
            className="border-l m-4 px-4"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mt-6">
              Product Designer & UX Engineer
            </h4>
            <div className="flex items-center gap-1 mb-3">
              <CalendarDays className="h-4 w-4 text-white" />
              <span className="text-neutral-400">2012 - Present</span>
              <MapPin className="h-4 w-4 text-white ml-4" />
              <span className="text-neutral-400">New York, NY (Remote)</span>
            </div>

            <p className="text-neutral-400 pb-4">
              I design and build responsive, accessible websites and digital
              products that combine clean UX with strong visual design. My
              background in architectural photography sharpens my focus on
              structure, layout, and hierarchy. I work across all product
              functions—design, research, product management, engineering, and
              content design—to create functional and scalable experiences.
            </p>

            <ul className="list-disc pl-6 space-y-1 marker:text-white text-neutral-400">
              <li>Design web and mobile products end-to-end, from wireframe to ship</li>
              <li>Build responsive, mobile-first websites and apps with React, Next.js, and Tailwind CSS</li>
              <li>Design and build reusable UI components directly in React and Tailwind CSS</li>
              <li>Focus on accessibility, layout, typography, and visual hierarchy</li>
              <li>Develop interactive tools and websites with clean, scalable code</li>
              <li>Design directly in code, iterating live and refining with feedback</li>
              <li>Optimize websites for SEO with clean structure and performance</li>
              <li>Manage e-commerce tracking, affiliate tools, and analytics</li>
              <li>Create logos, branding, icons, motion graphics, and print assets</li>
            </ul>

            {/* Photographer */}
            <h4 className="text-lg font-semibold text-white mt-6">Principal Photographer</h4>
            <div className="flex items-center gap-1 mb-3">
              <CalendarDays className="h-4 w-4 text-white" />
              <span className="text-neutral-400">2016 - Present</span>
              <MapPin className="h-4 w-4 text-white ml-4" />
              <span className="text-neutral-400">New York, NY (Hybrid)</span>
            </div>
            <ul className="list-disc pl-6 space-y-1 marker:text-white text-neutral-400">
              <li>Document major architectural projects for real estate, design, and global brands</li>
              <li>Photographed Empire State Building, The Woolworth Building, The Refinery at Domino, and more</li>
              <li>Work featured on Bravo’s <i>Million Dollar Listing: New York</i> and published via IKEA</li>
              <li>Cover design and culture events across New York City</li>
              <li>Built an archive of 200,000+ images from U.S. cities and abroad</li>
              <li>Specialize in clean, editorial-style photography for architecture and interiors</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Other Experience */}
      <motion.div
        className="space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-semibold">Other Experience</h3>
          </div>

          <div className="mt-1 text-white">
            <h3 className="text-xl font-semibold">Örebro Municipality</h3>
          </div>

          <div className="border-l m-4 px-4">
            <h4 className="text-lg font-semibold text-white mt-6">Childcare Worker</h4>
            <div className="flex items-center gap-1 mb-3">
              <CalendarDays className="h-4 w-4 text-white" />
              <span className="text-neutral-400 text-md">2014 - 2016</span>
              <MapPin className="h-4 w-4 text-white ml-4" />
              <span className="text-neutral-400">Örebro, Sweden (On-Site)</span>
            </div>
            <p className="w-full text-neutral-400 text-md">
              Planned activities, managed documentation, communicated with parents,
              and handled digital tasks such as organizing lists and creating
              marketing and social media materials.
            </p>

            <h4 className="text-lg font-semibold text-white mt-6">System Administrator</h4>
            <div className="flex items-center gap-1 mb-3">
              <CalendarDays className="h-4 w-4 text-white" />
              <span className="text-neutral-400">2013 - 2014</span>
              <MapPin className="h-4 w-4 text-white ml-4" />
              <span className="text-neutral-400">Örebro, Sweden (On-Site)</span>
            </div>
            <p className="w-full text-neutral-400 text-md">
              Managed the website, social media, and marketing materials for a
              project that connected job seekers with companies through a
              custom-built platform. Interviewed candidates and supported
              recruitment to help match companies with the best possible
              applicants.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
