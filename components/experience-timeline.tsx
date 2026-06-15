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
              Founder, Design Engineer & Architectural Photographer
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

          <motion.p
            className="text-neutral-400"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            Design Engineer with 15+ years of experience designing and building customer-facing
            products across frontend development, visual design, and digital experiences.
            I build customer facing products in React, Next.js, and TypeScript, with a focus on
            usability, performance, accessibility, and visual craftsmanship. As the founder of an
            independent product and creative business, I designed and developed a proprietary
            image licensing platform that supports search, ecommerce, licensing, and digital asset delivery.
          </motion.p>

          {/* Product Designer & UX Engineer */}
          <motion.div
            className="border-l border-neutral-400/50 m-4 px-4"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
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
              <li>Designed and developed digital products from concept through production using React, Next.js,
                TypeScript, and Tailwind CSS</li>
              <li>Built and operate a proprietary photography licensing platform supporting image discovery,
                ecommerce, licensing, and digital asset delivery</li>
              <li>Develop scalable frontend architectures, design systems, and reusable React component libraries</li>
              <li>Translate UX and product requirements into performant, accessible, production-ready interfaces</li>
              <li>Manage platform infrastructure, analytics, SEO, deployment, and product growth</li>
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
              <li>Serve leading NYC real estate agencies, developers, and property owners</li>
              <li>Built and manage a 200,000+ image architectural archive</li>
              <li>Produce architectural photography for marketing, branding, and publication</li>
              <li>Photographed landmark properties including the Empire State Building and The Woolworth Building</li>
              <li>Featured on Bravo's Million Dollar Listing New York and licensed by global brands including IKEA</li>
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
