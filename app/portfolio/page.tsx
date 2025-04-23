"use client"

import { Code, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import Header from "@/components/header"

import Logotypes from "@/components/logotypes/logotypes"
import ButtonDesign from "@/components/buttondesign"
import Footer from "@/components/footer"

function customScrollToTop(speed: number) {
  const topEl = document.getElementById("top");
  if (!topEl) return;

  const targetPosition = topEl.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function scrollStep(currentTime: number) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / speed, 1); // speed controls scroll duration

    window.scrollTo(0, startPosition + distance * progress);

    if (timeElapsed < speed) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}

export default function Home() {
  return (
<div className="h-[200vh] bg-black z-[1]">
 <main className="mx-auto max-w-7xl min-h-screen p-4 md:pt-10 sm:pt-10">
      <div id="top" />
      <Header />

{/* LOGOTYPES --------------------------------------------------- */}
<div className="mb-4 grid-cols-12 gap-4 md:grid">
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="col-span-12 rounded-2xl border border-neutral-400/60
        bg-black/0 backdrop-blur-md p-4 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Logotypes</h2>
         <Logotypes />
        </motion.section>
</div>

{/* BUTTON DESIGNS --------------------------------------------------- */}
<section className="grid grid-cols-12 gap-4">
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className="col-span-12 md:col-span-3 mb-4 rounded-2xl border border-neutral-400/60  
    bg-white/10 backdrop-blur-md p-4 shadow-sm md:mb-0"
  >
    <h2 className="mb-4 text-2xl font-bold">Button Design</h2>
    <p className="mb-6">This button was designed for a dark-mode gaming login.</p>
    <div className="flex mx-auto justify-center">
  <ButtonDesign />

</div>
<div className="flex-wrap">
  <h2 className="font-bold text-md">Default</h2>
  <p className="text-sm mb-2 text-neutral-400">Raised with a soft shadow and subtle gradient.</p>

  <h2 className="font-bold text-md">Hover</h2>
  <p className="text-sm mb-2 text-neutral-400">Shadow shrinks slightly to create depth shift.</p>

  <h2 className="font-bold text-md">Active</h2>
  <p className="text-sm mb-2 text-neutral-400">Shadow disappears, making it feel pressed in.</p>
</div>
<Link target="_blank" rel="noopener noreferrer" href="https://github.com/jakobdahlin/resume/blob/main/components/buttondesign.tsx">
  <motion.div
    className="flex items-center justify-center gap-2 py-2 px-14 mt-4 rounded-xl bg-transparent border 
    border-neutral-400/60 hover:border-white transition ease-in-out
    hover:shadow-lg hover:shadow-white/50 transform duration-300
    hover:bg-white/20 hover:text-white text-center cursor-pointer"
    whileHover={{ scale: 1.0 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex mx-auto gap-2 justify-center items-center">
    <Github size={18} />Code
    </div>
  </motion.div>
</Link>
  </motion.section>

  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className="col-span-12 md:col-span-6 mb-4 rounded-2xl border border-neutral-400/60  
    bg-black/0 backdrop-blur-md p-4 shadow-sm md:mb-0"
  >
    <h2 className="mb-4 text-2xl font-bold">Title</h2>

  </motion.section>

  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className="col-span-12 md:col-span-3 mb-4 rounded-2xl border border-neutral-400/60  
    bg-black/0 backdrop-blur-md p-4 shadow-sm md:mb-0"
  >
    <h2 className="mb-4 text-2xl font-bold">Title</h2>

  </motion.section>
</section>

{/* NEXT GRID --------------------------------------------------- */}
<section className="grid grid-cols-12 gap-4 mt-4">
<motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className="col-span-12 md:col-span-8 mb-20 rounded-2xl border border-neutral-400/60  
    bg-black/0 p-4 shadow-sm md:mb-0"
  >
    <h2 className="mb-4 text-2xl font-bold">Title</h2>

  </motion.section>

  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className="col-span-12 md:col-span-4 mb-4 rounded-2xl border border-neutral-400/60  
    bg-black/0 backdrop-blur-md p-4 shadow-sm md:mb-0"
  >
    <h2 className="mb-4 text-2xl font-bold">Title</h2>

  </motion.section>
</section>

{/* NEXT GRID --------------------------------------------------- */}

<section className="grid grid-cols-12 gap-4 mt-4">
<motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className="col-span-12 md:col-span-12 mb-20 rounded-2xl border border-neutral-400/60  
    bg-black/0 p-4 shadow-sm md:mb-0"
  >
    <h2 className="mb-4 text-2xl font-bold">Title</h2>

  </motion.section>
</section>

{/* FOOTER */}
<section className="my-4">
    <Footer />
</section>

{/* BACK TO TOP BUTTON */}
<div className="col-span-12 w-full">
<motion.button
onClick={() => {
customScrollToTop(2000); 
}}
className="w-full text-center justify-center hover:bg-white/20
mb-20 border border-neutral-400/60 bg-black/0 backdrop-blur-md p-4 shadow-sm 
mx-auto flex items-center gap-2 px-4 py-4 text-white/80 
rounded-2xl hover:text-white hover:border-white transition"
>
<ArrowUp size={18} className="animate-bounce" />
Back to Top
</motion.button>



    </div>
  </main>
</div>
    
  )
}

