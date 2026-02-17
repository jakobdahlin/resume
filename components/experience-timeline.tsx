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
            Product Designer & UX Engineer with 15+ years of experience across 
            digital design, frontend development, and visual systems. I run an 
            independent UX/UI and frontend practice, building products from 
            concept to launch in Next.js and React while iterating primarily in code. 
            In parallel, I operate a high-end architectural photography business 
            serving leading residential and commercial real estate clients in New York.
          </motion.p>

          {/* Product Designer & UX Engineer */}
          <motion.div
            className="border-l border-neutral-400/50 m-4 px-4"
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

            <ul className="list-disc pl-6 space-y-1 marker:text-white text-neutral-400">
              <li>Design and ship web products end-to-end, from concept to production</li>
              <li>Build responsive applications with Next.js, React, TypeScript, and Tailwind CSS</li>
              <li>Develop scalable component libraries and UI systems in code</li>
              <li>Translate product and UX decisions into maintainable frontend architecture</li>
              <li>Ensure accessibility, performance, and strong typographic hierarchy</li>
              <li>Structure applications for SEO, speed, and long-term scalability</li>
              <li>Launch, test, and iterate products independently</li>
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
              <li>Serve leading NYC real estate agencies, developers, and property owners</li>
              <li>Produce architectural photography for marketing, branding, and publication</li>
              <li>Photographed landmark properties including the Empire State Building and The Woolworth Building</li>
              <li>Featured on Bravo’s Million Dollar Listing New York and licensed by global brands including IKEA</li>
              <li>Built and manage a 200,000+ image architectural archive</li>
              <li>Recognized for clean, editorial architecture and interior photography</li>
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
            <div className="flex items-center gap-1">
              <Building className="h-4 w-4 text-white" />
              <h3 className="text-xl font-semibold">Örebro Municipality</h3>
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
              <li>Planned structured programs and managed daily operations</li>
              <li>Created digital documentation systems and organized internal workflows</li>
              <li>Designed communication materials and managed social media presence</li>
              <li>Developed visual and marketing assets for parents and community outreach</li>
            </ul>

            <h4 className="text-lg font-semibold text-white mt-6">System Administrator</h4>
            <div className="flex items-center gap-1 mb-3">
              <CalendarDays className="h-4 w-4 text-white" />
              <span className="text-neutral-400">2013 - 2014</span>
              <MapPin className="h-4 w-4 text-white ml-4" />
              <span className="text-neutral-400">Örebro, Sweden (On-Site)</span>
            </div>
            <ul className="list-disc pl-6 space-y-1 marker:text-white text-neutral-400">
              <li>Managed website, digital infrastructure, and social media presence</li>
              <li>Designed marketing materials and user-facing communication assets</li>
              <li>Supported a custom-built recruitment platform connecting job seekers and employers</li>
              <li>Conducted interviews and helped optimize candidate-company matching workflows</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
