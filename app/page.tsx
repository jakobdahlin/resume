"use client"

import { motion } from "framer-motion"
import Link from "next/link";
import { ArrowDownToLine } from "lucide-react"

export default function Home() {
    
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center border border-neutral-400/60 rounded-3xl px-4 p-8 
          backdrop-blur-sm shadow-2xl shadow-black/70"
        >
          <motion.h1
            className="text-4xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Jakob Dahlin
          </motion.h1>

          <motion.p
            className="text-md md:text-md text-neutral-400 mb-8 px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            15+ years in graphic design and 10 years in web design, creating marketing materials for both digital and print. Specialized in developing user-friendly websites and web applications with focus on single-page experiences and affiliate marketing blogs. Skilled in UI design optimization to enhance SEO and improve UX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  {/* View Resume Button (uses Link for internal navigation) */}
  <Link href="/resume" passHref>
    <motion.div
      className="px-6 py-2 rounded-xl bg-transparent backdrop-blur-lg border 
      border-neutral-400/60 hover:border-cyan-300 transition ease-in-out
      hover:shadow-lg hover:shadow-cyan-600/70 transform duration-300
      hover:bg-transparent hover:text-white text-center cursor-pointer"
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 0.95 }}
    >
      View Resume
    </motion.div>
  </Link>

  {/* Download Resume Button (external PDF) */}
  <motion.a
    href="/Resume.pdf"
    target="_blank"
    className="px-6 py-2 rounded-xl bg-transparent backdrop-blur-lg border 
    border-neutral-400/60 hover:border-orange-600 transition ease-in-out
    hover:shadow-lg hover:shadow-red-700/70 transform duration-300 
    hover:bg-transparent hover:text-white text-center"
    whileHover={{ scale: 1.0 }}
    whileTap={{ scale: 0.95 }}
  >
    Download Resume
  </motion.a>
</div>
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  )
}

