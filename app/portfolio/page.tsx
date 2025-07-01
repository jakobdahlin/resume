"use client"

import { useState } from "react"
import { Image as ImageIcon } from "lucide-react"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Header from "@/components/header"
import LoginCard from "@/components/logincard"
import Navbar from "@/components/navbar"
import { AppSidebar } from "@/components/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import Logotypes from "@/components/logotypes/logotypes"
import ButtonDesign from "@/components/buttondesign"
import Calculator  from "@/components/calculator"


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
<Header/>

{/* LOGOTYPES --------------------------------------------------- */}
<section className="w-full max-w-7xl mx-auto pb-4">
  <div className="grid grid-cols-1 gap-4">
    <div className="col-span-1 sm:col-span- md:col-span-4 lg:col-span-12 
       row-span-1 rounded-xl overflow-hidden border border-neutral-400/20">
          <div className="h-full w-full p-4 flex items-center justify-center">
            <Logotypes/>
          </div>
    </div>
  </div>
</section>

{/* BUTTON --------------------------------------------------- */}
<section className="w-full max-w-7xl mx-auto pb-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4">
    <div className="bg-neutral-900 col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 
      row-span-1 rounded-xl overflow-hidden border border-neutral-400/20">
             <h2 className="p-4 text-2xl font-bold">Button Design</h2>
          <div className="w-full p-4 flex items-center justify-center">
            
            <div>
            <ButtonDesign/>
            </div>
          </div>
          
    </div>

{/* LOGIN --------------------------------------------------- */}
  <div 
      className="relative col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 row-span-1 rounded-2xl border border-neutral-400/20  
        bg-black/0 backdrop-blur-md p-4 shadow-sm md:mb-0 flex flex-col items-center justify-center"
    >

{showOverlay && (
  bgImages[bgIndex] === "video" ? (
<div className="absolute inset-0 z-0 rounded-2xl overflow-hidden will-change-transform isolation-isolate">
  <video
    className="h-full w-full object-cover opacity-70"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="https://res.cloudinary.com/dj10sb6gx/video/upload/v1739302067/lights_vlpply.mp4" type="video/mp4" />
  </video>
</div>
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

  </div>

{/* LOGIN INFO --------------------------------------------------- */}
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 row-span-1 
          rounded-xl overflow-hidden border border-neutral-400/20"
        ><div className="p-4">
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
<button
onClick={() => {
  setShowOverlay(true);
  setBgIndex((prev) => (prev + 1) % bgImages.length);
}}
        className="relative z-20 mt-4 w-full mx-auto max-w-md text-white bg-white/10 border border-white/20 rounded-xl 
        hover:border-white hover:bg-white/20 
        hover:shadow-lg hover:shadow-white/50 transition duration-300 py-2 flex items-center justify-center gap-2"
      >
        <ImageIcon size={18} />
        Change Background
      </button>
      <div className="relative w-full h-full flex flex-col items-center justify-center">

<Link
  target="_blank"
  rel="noopener noreferrer"
  href="https://github.com/jakobdahlin/resume/blob/3caf6cea255b524d466abd3d828ec35dfdba9bad/components/logincard.tsx"
  className="mt-4 w-full max-w-md"
>
  <motion.div
    className="flex items-center w-full justify-center gap-2 py-2 rounded-xl 
    bg-white/10 border
    border-white/20 hover:border-white transition ease-in-out z-800
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
</div>
        </div>
        </div>
  </div>
</section>

{/* NAVBAR --------------------------------------------------- */}
<section className="w-full max-w-7xl mx-auto pb-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4">
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-12 row-span-1 
          rounded-xl overflow-hidden border border-neutral-400/20 bg-cover bg-center 
          bg-[url('/Galaxy.png')]"
        >             <h2 className="p-4 text-2xl font-bold">Navbar</h2>
          <div className="mx-auto p-4 flex items-center justify-center">
          <Navbar/>
          </div>
        </div>
  </div>
</section>


{/* COLOR PALETTESs --------------------------------------------------- */}
<section className="w-full max-w-7xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4">
    
    {/* Block 1 */}
    <div className="col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-5 rounded-xl 
  overflow-hidden border border-neutral-400/20">
<h2 className="p-4 text-2xl font-bold">Ad Design Concept</h2>
  <div className="relative aspect-[1/1] w-full flex items-center justify-center">
    <Image
      src="/orbitualAd.png"
      alt="Hero"
      fill
      className="object-contain p-4"
      priority
    />
  </div>
</div>

    {/* Block 2 */}
    <div className="bg-neutral-900 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 md:row-span-2 rounded-xl overflow-hidden border border-neutral-400/20">
    <h2 className="p-4 text-2xl font-bold">Calculator</h2>
    <div className="px-4">
      <p className="pb-4 text-neutral-400 text-sm">A calculator built with the button design showcased above, highlighting how the component integrates into a functional interface. When active, the AC button turns into a backspace button until result is given.</p>
    <Calculator/>
    </div>
    </div>

    {/* Block 3 */}
    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 md:row-span-2 rounded-xl overflow-hidden border border-neutral-400/20">
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className="col-span-12 lg:col-span-6 rounded-2xl border border-white/40   
    backdrop-blur-md p-4 shadow-sm h-full"
  >

    <div className="mb-4">
    <h2 className="mb-4 text-2xl font-bold">Color Palettes</h2>
    <p className="text-sm text-neutral-400 mb-4 max-w-[700px]">
    Each palette was created from real-world photos to keep the mood grounded in natural, believable color.
Used with color theory, these swatches support contrast, accessibility, and consistency across layouts.
    </p>
    <h2 className="font-bold text-md mt-2">Visual Style</h2>
    <p className="text-sm text-neutral-400">
    Colors are extracted directly from imagery to create depth, warmth, and balance in UI themes.
    </p>
    <h2 className="font-bold text-md mt-2">Design System Use</h2>
    <p className="text-sm text-neutral-400">
    Each set is ready to drop into a Tailwind-based design system for components, backgrounds, text, and states.
    </p>
    <h2 className="font-bold text-md mt-2">Accessibility</h2>
    <p className="text-sm text-neutral-400">
    Palettes are tested for contrast clarity and can support light or dark interfaces with minimal adjustments.
    </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">

  {/* Column 2 */}
  <div>
    <Image
      src="/pal2.png"
      alt="palette2"
      width={0}
      height={0}
      className="rounded-lg w-full h-auto object-cover"
    />

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

  </div>


</div>
  </motion.section>
    </div>

    {/* Block 4 */}
    <div className="col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-5 rounded-xl overflow-hidden border border-neutral-400/20">
      <div className="h-full w-full p-4 flex items-center justify-center">
      <p className="text-neutral-400 text-sm">The ad design above was created as a demo concept to showcase UI kit marketing visuals. The goal was to explore clean layouts, contrast, and conversion-focused design within a dark theme. The project focused on practicing pricing layouts, CTA hierarchy, and modern promotional components.</p>
      </div>
    </div>

  </div>
</section>


  </main>
</div>
    
  )
}