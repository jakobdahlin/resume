"use client"

import { useState } from "react"
import { Code, Github, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import Header from "@/components/header"
import LoginCard from "@/components/logincard"

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

  const [showOverlay, setShowOverlay] = useState(true);
  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = [
    "video",
    "/BG10.jpg",
    "/SF.JPG",
    "/CP1.jpg",
    "/UES.jpg"
  ];

  return (
<div className="bg-black z-[1]">
 <main className="mx-auto max-w-7xl min-h-screen p-4 md:pt-10 sm:pt-10">
      <div id="top" />
      <Header />

{/* LOGOTYPES --------------------------------------------------- */}
<div className="mb-4 grid-cols-12 gap-4 md:grid">
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="col-span-12 rounded-2xl border border-white/40 
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
    className="col-span-12 md:col-span-5 rounded-2xl border border-white/40  
    bg-white/10 backdrop-blur-md p-4 shadow-sm md:mb-0"
  >
    <h2 className="mb-4 text-2xl font-bold">Button Design</h2>
    <p className="mb-6">This button was designed for a dark-mode game.</p>
    <div className="flex mx-auto justify-center">
  <ButtonDesign />

</div>
<div className="flex-wrap">
  <h2 className="font-bold text-md">Visual Style</h2>
  <p className="text-sm mb-2 text-neutral-400">Soft shadow, subtle animated gradient, 
    and rounded edges give it a modern, elevated look.</p>

  <h2 className="font-bold text-md">Interaction</h2>
  <p className="text-sm mb-2 text-neutral-400">Hover shrinks the button slightly. On click, 
    the shadow disappears to create a pressed-in effect.</p>

  <h2 className="font-bold text-md">Content & Flow</h2>
  <p className="text-sm mb-2 text-neutral-400">Clear label, centered alignment, 
    and spacing that makes it easy to tap or click.</p>

  <h2 className="font-bold text-md">Adaptability</h2>
  <p className="text-sm mb-2 text-neutral-400">Designed to hold up across different 
    dark layouts and backgrounds without losing clarity.</p>
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

{/* Login Component --------------------------------------------------- */}

<motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="relative col-span-12 md:col-span-4 rounded-2xl border border-white/40  
        bg-black/0 backdrop-blur-md p-4 shadow-sm md:mb-0 flex flex-col items-center"
    >

{showOverlay && (
  bgImages[bgIndex] === "video" ? (
    <video
      className="absolute rounded-2xl inset-0 h-full w-full object-cover opacity-70 z-0"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="https://res.cloudinary.com/dj10sb6gx/video/upload/v1739302067/lights_vlpply.mp4" type="video/mp4" />
    </video>
  ) : (
    <div
      className="absolute inset-0 z-10 rounded-2xl bg-cover bg-center opacity-100"
      style={{
        backgroundImage: `url('${bgImages[bgIndex]}')`,
      }}
    />
  )
)}

      <div className="relative z-20 w-full">
        <LoginCard />
      </div>


      <button
onClick={() => {
  setShowOverlay(true);
  setBgIndex((prev) => (prev + 1) % bgImages.length);
}}
        className="relative z-20 mt-4 w-full max-w-md text-white bg-white/10 border border-white/20 rounded-xl 
        hover:border-white hover:bg-white/20 
        hover:shadow-lg hover:shadow-white/50 transition duration-300 py-2 flex items-center justify-center gap-2"
      >
        <ImageIcon size={18} />
        Change Background
      </button>
    </motion.section>

{/* Login Component INFO --------------------------------------------------- */}
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className="col-span-12 md:col-span-3 rounded-2xl border border-white/40   
    bg-black/0 backdrop-blur-md p-4 shadow-sm"
  >
    
    <h2 className="mb-4 text-2xl font-bold">Login Component</h2>
    <p className="text-sm text-neutral-400">A soft-glow login form made for dark interfaces, 
      placed over a looping aurora video background.</p>
    <div className="flex-wrap mt-4">
  <h2 className="font-bold text-md">Visual Style</h2>
  <p className="text-sm mb-2 text-neutral-400">Frosted glass effect using bg-white/5 and 
    text-white/80 keeps the content readable without blocking the background. Tailwind's 
    opacity classes let it blend cleanly over video, textures, or images.</p>

  <h2 className="font-bold text-md">Interaction</h2>
  <p className="text-sm mb-2 text-neutral-400">Hover and focus states give subtle feedback. 
    Button includes animated loading state when clicked.</p>

  <h2 className="font-bold text-md">Content & Flow</h2>
  <p className="text-sm mb-2 text-neutral-400">Clear spacing, strong CTA, and helpful links 
    like "Forgot password" and "Register" in expected spots.</p>

  <h2 className="font-bold text-md">Adaptability</h2>
  <p className="text-sm mb-2 text-neutral-400">Responsive layout. Background-aware color 
    choices keep it readable over textures, photos, and video.</p>
</div>
  </motion.section>
</section>

{/* NEXT GRID --------------------------------------------------- */}

<section className="grid grid-cols-12 gap-4 mt-4">
<motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className="col-span-12 md:col-span-12 rounded-2xl border border-white/40   
    bg-black/0 backdrop-blur-md p-4 shadow-sm "
  >
    <h2 className="mb-4 text-2xl font-bold">Color Palettes</h2>
    <p className="text-sm text-neutral-400 mb-4 max-w-[700px]">
    Each palette was created from real-world photos to keep the mood grounded in natural, believable color.
Used with color theory, these swatches support contrast, accessibility, and consistency across layouts.
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
  {/* Column 1 */}
  <div>
    <Image
      src="/pal1.png"
      alt="palette1"
      width={0}
      height={0}
      className="rounded-lg w-full h-auto object-cover"
    />
    <h2 className="font-bold text-md mt-2">Visual Style</h2>
    <p className="text-sm text-neutral-400">
    Colors are extracted directly from imagery to create depth, warmth, and balance in UI themes.
    </p>
  </div>

  {/* Column 2 */}
  <div>
    <Image
      src="/pal2.png"
      alt="palette2"
      width={0}
      height={0}
      className="rounded-lg w-full h-auto object-cover"
    />
    <h2 className="font-bold text-md mt-2">Design System Use</h2>
    <p className="text-sm text-neutral-400">
    Each set is ready to drop into a Tailwind-based design system for components, backgrounds, text, and states.
    </p>
  </div>

  {/* Column 3 */}
  <div>
    <Image
      src="/pal3.png"
      alt="palette3"
      width={0}
      height={0}
      className="rounded-lg w-full h-auto object-cover"
    />
    <h2 className="font-bold text-md mt-2">Accessibility</h2>
    <p className="text-sm text-neutral-400">
    Palettes are tested for contrast clarity and can support light or dark interfaces with minimal adjustments.
    </p>
  </div>

  {/* Column 4 */}
  <div>
    <Image
      src="/pal4.png"
      alt="palette4"
      width={0}
      height={0}
      className="rounded-lg w-full h-auto object-cover"
    />
  </div>

</div>
  </motion.section>
</section>


{/* NEXT GRID --------------------------------------------------- */}
{/*
<section className="grid grid-cols-12 gap-4 mt-4">
<motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className="col-span-12 md:col-span-8 rounded-2xl border border-white/40   
    bg-black/0 p-4 shadow-sm"
  >
    <h2 className="mb-4 text-2xl font-bold">Title</h2>

  </motion.section>

  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className="col-span-12 md:col-span-4 rounded-2xl border border-white/40   
    bg-black/0 backdrop-blur-md p-4 shadow-sm "
  >
    <h2 className="mb-4 text-2xl font-bold">Title</h2>

  </motion.section>
</section>
*/}

{/* FOOTER  --------------------------------------------------- */}

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
border border-white/40  bg-black/0 backdrop-blur-md p-4 shadow-sm 
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

