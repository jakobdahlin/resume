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
import Toggle from "@/components/toggle"


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
<div className="z-[1]">
<Header/>
<section className="w-full mx-auto pb-4 px-4 ">
  <div className="grid grid-cols-1 gap-4">
    <div className="col-span-1 sm:col-span- md:col-span-4 lg:col-span-12 
       row-span-1 rounded-2xl overflow-hidden border border-neutral-400/20">
          <div className="h-full w-full p-4 flex items-center justify-center ">
            <Logotypes/>
          </div>
    </div>
  </div>
</section>


<section className="w-full h-screen mx-auto ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 px-4" style={{}}>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center bg-neutral-900">
            <ButtonDesign />
          </div>
        </div>
        <div 
      className="relative col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-2 rounded-2xl border border-neutral-400/20  
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
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full flex items-center justify-center">
          <div className="p-4">
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
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >

        </div>
        </div>

        <section className="w-full px-4 pt-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4">
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-12 row-span-1 
          rounded-2xl overflow-hidden border border-neutral-400/20 bg-cover bg-center 
          bg-[url('/Galaxy.png')]"
        >             <h2 className="p-4 text-2xl font-bold">Navbar</h2>
          <div className="mx-auto p-4 flex items-center justify-center">
          <Navbar/>
          </div>
        </div>
  </div>
</section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4 pt-4 px-4" style={{}}>
    <div 
          className="col-span-1 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 7
          </div>
        </div>
    <div 
          className="col-span-1 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 8
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-4 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center">
            <div>
          <h2 className="mb-4 text-2xl font-bold text-left">Toggles</h2>
        <Toggle />
          </div>
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-4 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 10
          </div>
        </div>
    <div 
          className="bg-neutral-900 col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
            <div className="mx-auto justify-center">
            <h2 className="p-4 text-2xl font-bold">Calculator</h2>
            <p className="text-sm mb-2 text-neutral-400 mx-4 max-w-md justify-center">
            A calculator built with the button design showcased above, highlighting how the component integrates into a functional interface. When active, the AC button turns into a backspace button until result is given.
            </p>
<Calculator />
        </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 12
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 13
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-6 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
        
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 14
          </div>
        </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4 py-4 px-4" style={{}}>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >

        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="">
          <h2 className="p-4 text-2xl font-bold">Ad Design Concept</h2>
  <div className="relative aspect-[1/1] w-full flex items-center justify-center max-h-[600px]">
    <Image
      src="/orbitualAd.png"
      alt="Hero"
      fill
      className="object-contain p-4"
      priority
    />
  </div>
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 17
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 18
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 19
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 20
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-4 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 21
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 22
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 23
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 24
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 25
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 26
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 27
          </div>
        </div>
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="h-full w-full p-4 flex items-center justify-center">
            Block 28
          </div>
        </div>
  </div>
</section>

</div>  
  )
}