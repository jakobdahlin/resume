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
            Design Engineer, Architectural Photographer & Artist
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
            Design Engineer with 15+ years of experience in frontend development, 
            visual design, and digital products. Specializing in React, Next.js, 
            and TypeScript, with a focus on usability, performance, and visual 
            craftsmanship. Also work professionally across architectural 
            photography and original digital artwork.
          </motion.p>

                    {/* Product Designer & UX Engineer */}
                    <motion.div
            className="border-l border-neutral-400/50 m-4 px-4"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mt-6">
              Digital Artist
            </h4>
            <div className="flex items-center gap-1 mb-3">
              <CalendarDays className="h-4 w-4 text-white" />
              <span className="text-neutral-400">2026 - Present</span>
              <MapPin className="h-4 w-4 text-white ml-4" />
              <span className="text-neutral-400">New York, NY (Hybrid)</span>
            </div>

            <ul className="list-disc pl-6 space-y-1 marker:text-white text-neutral-400">
              <li>Launched a commercial digital art collection after nearly a decade of creative and technical development</li>
              <li>Create original abstract artworks and continuous animations through custom JavaScript, WebGL, and GLSL systems</li>
              <li>Develop digital artworks for architectural and commercial environments</li>
            </ul>

          {/* Product Designer & UX Engineer */}

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
              <li>Design and develop digital products using React, Next.js, TypeScript, and Tailwind CSS</li>
              <li>Built and maintain a proprietary photography licensing platform with search, ecommerce, and digital asset delivery</li>
              <li>Develop scalable frontend systems, reusable components, and accessible interfaces, with responsibility for performance, SEO, and deployment</li>
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
              <li>Provide architectural photography for NYC developers, property owners, and real estate agencies</li>
              <li>Built and maintain an architectural photography archive of over 200,000 images, with work that includes landmark properties such as the Empire State Building and Woolworth Building, as well as projects for RXR, Brookfield Properties, Douglas Elliman, Compass, Sotheby's International Realty, PR agencies, and creative studios</li>
              <li>Featured on Bravo's Million Dollar Listing New York, with photography licensed by international brands such as IKEA</li>
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
