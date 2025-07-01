"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { File, GalleryVertical, ArrowDownToLine } from "lucide-react"
import Link from "next/link";

export default function Home() {
    
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 z-10">
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
  className="max-w-3xl mx-auto text-center border border-neutral-400/20 
  rounded-3xl px-4 p-8 backdrop-blur-md
  bg-[radial-gradient(ellipse,_rgba(130,130,130,0.2)_10%,_transparent_100%)]
"
>
<motion.h1
            className="text-4xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 2 }}
          >
            <div className="flex items-center justify-center mx-auto mb-6">
          <Image
            src="/JAKOBDW.png"
            alt="Jakob Dahlin Logo"
            width={250}
            height={50}
          />
          </div>
</motion.h1>

<motion.p
  className="text-neutral-300/50 text-md mb-8 px-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 3, duration: 2 }}
>
I design and build responsive websites and digital products with a focus on UI/UX, SEO, performance, and accessibility. With 10+ years of web development experience and a background in visual design, I create functional, user-friendly interfaces that balance clean design with real-world usability.

</motion.p>







          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link href="/resume">
    <motion.div
      className="flex items-center gap-2 px-6 py-2 rounded-xl bg-transparent border 
      border-neutral-400/20 hover:border-white transition ease-in-out
      hover:shadow-lg hover:shadow-white/50 transform duration-300
      hover:bg-white/20 hover:text-white text-center cursor-pointer"
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 0.95 }}
    ><div className="flex mx-auto gap-2 justify-center items-center">
      <File size={18} />
      Resume
      </div>
    </motion.div>
  </Link>

  <Link href="/portfolio">
    <motion.div
      className="flex items-center gap-2 px-6 py-2 rounded-xl bg-transparent border 
      border-neutral-400/20 hover:border-white transition ease-in-out
      hover:shadow-lg hover:shadow-white/50 transform duration-300
      hover:bg-white/20 hover:text-white text-center cursor-pointer"
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 0.95 }}
    ><div className="flex mx-auto gap-2 justify-center items-center">
      <GalleryVertical size={18} />
      Design Portfolio
      </div>
    </motion.div>
  </Link>

  <motion.a
    href="/JakobDahlin_2025.pdf"
    target="_blank"
    className="flex items-center gap-2 px-6 py-2 rounded-xl bg-transparent border 
    border-neutral-400/20 hover:border-white transition ease-in-out
    hover:shadow-lg hover:shadow-white/50 transform duration-300 
   hover:bg-white/20 hover:text-white text-center"
    whileHover={{ scale: 1.0 }}
    whileTap={{ scale: 0.95 }}
  ><div className="flex mx-auto gap-2 justify-center items-center">
    <ArrowDownToLine size={18} />
    Resume PDF
    </div>
  </motion.a>
</div>

          </motion.div>
          
        </motion.div>
      </div>
    </div>
  )
}

