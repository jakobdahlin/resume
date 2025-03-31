"use client"

import { motion } from "framer-motion"
import Link from "next/link";

export default function Home() {
    
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center border border-neutral-700 rounded-3xl px-4 p-8 backdrop-blur-sm"
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
            className="text-md md:text-md text-white/80 mb-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            15+ years in graphic design and 10 years in web design, creating marketing materials for both digital and print. Specialized in developing user-friendly websites and web applications with focus on single-page experiences and affiliate marketing blogs. Skilled in UI design optimization to enhance SEO and improve UX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/resume"
              className="gap-2 px-6 py-2 rounded-xl bg-transparent border border-neutral-800 hover:border-white hover:backdrop-blur-sm hover:bg-transparent hover:text-white"
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>

            <motion.a
  href="/Resume.pdf"
  target="_blank" // Open in a new tab/window
  className="gap-2 px-6 py-2 rounded-xl bg-transparent border border-neutral-800 hover:border-white hover:backdrop-blur-sm hover:bg-transparent hover:text-white"
  whileHover={{ scale: 1.0 }}
  whileTap={{ scale: 0.95 }}
>
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

