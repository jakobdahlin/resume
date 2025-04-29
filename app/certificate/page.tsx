"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Header from "@/components/header"


export default function Certificate() {
    return (
    <div className="h-[200vh]">
    <main className="min-h-screen p-4 md:pt-10 sm:pt-10">
      <div id="top"/>
      <Header />

      {/* Bento Grid Layout with card animation */}
      <div className="mx-auto max-w-7xl flex flex-colgap-4 md:grid md:grid-cols-12">


      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="col-span-12 mb-4 border border-neutral-400/30
        bg-black/0 shadow-sm md:mb-0">
      <div className="flex items-center justify-center">
  <Image
    src="/api/remove-black"
    alt="Certificate"
    width={1500}
    height={600}
    className="object-cover transition-transform"
  />
</div>
        </motion.section>

      </div>
    </main>
    </div>
    
  )
}
