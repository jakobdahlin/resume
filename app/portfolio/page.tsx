"use client"

import { File, Play } from "lucide-react"
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
<div className="h-[200vh]">
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
    className="col-span-12 md:col-span-4 mb-4 rounded-2xl border border-neutral-400/60  
    bg-white/10 backdrop-blur-md p-4 shadow-sm md:mb-0"
  >
    <h2 className="mb-4 text-2xl font-bold">Education</h2>
    <div className="flex justify-center">
  <ButtonDesign />
</div>
  </motion.section>

  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className="col-span-12 md:col-span-8 mb-4 rounded-2xl border border-neutral-400/60  
    bg-black/0 backdrop-blur-md p-4 shadow-sm md:mb-0"
  >
    <h2 className="mb-4 text-2xl font-bold">Certifications</h2>
    <ButtonDesign />
  </motion.section>
</section>

{/* NEXT GRID --------------------------------------------------- */}

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
className="w-full text-center justify-center 
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

