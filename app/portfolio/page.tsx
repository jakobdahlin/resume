"use client"

import { useState, useEffect, Suspense } from "react"
import Sphere from "@/components/sphere"
import { Image as ImageIcon } from "lucide-react"
import { Github, ChevronDown, ChevronUp, Figma, ArrowDownToLine } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Header from "@/components/header"
import LoginCard from "@/components/logincard"
import Navbar from "@/components/navbar"
import Logotypes from "@/components/logotypes/logotypes"
import ButtonDesign from "@/components/buttondesign"
import Calculator  from "@/components/calculator"
import Toggle  from "@/components/toggle"
import FinancialDashboard from "@/components/financialdasboard"
import { SeoAnalyticsDashboard } from "@/components/seo-analytics-dashboard"
import SkeletonCard from "@/components/skeletoncard"
import NewsBanner from "@/components/news-banner"



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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    handleResize() // run on mount
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const [showOverlay, setShowOverlay] = useState(true);
  const [bgIndex, setBgIndex] = useState(0);
    const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleSection = (sectionName: string) => {
    setActiveSection((prev) => (prev === sectionName ? null : sectionName))
  }


  const bgImages = [
    "video",
    "/BG10.jpg",
    "/SF.JPG",
    "/CP1.jpg",
    "/UES.jpg"
  ];

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const [imageUrl] = useState("/placeholder.svg?height=512&width=512")

  return (
<div className="bg-black z-[1]">
  
 <main className="mx-auto max-w-[1600px] min-h-screen p-4 md:pt-10 sm:pt-10">
<Header/>

{/* LOGOTYPES --------------------------------------------------- */}
<section className="w-full max-w-[1600px] mx-auto pb-4">
  <div className="grid grid-cols-1 gap-4">
    <div className="col-span-1 sm:col-span- md:col-span-4 lg:col-span-12 
       row-span-1 rounded-2xl overflow-hidden border border-neutral-400/20">
          <div className="h-full w-full p-4 flex items-center justify-center">
            <Logotypes/>
          </div>
    </div>
  </div>
</section>

{/* BUTTON --------------------------------------------------- */}
<section className="w-full max-w-[1600px] mx-auto pb-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4">
    <div className="bg-neutral-900 col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-3 
      row-span-1 rounded-2xl overflow-hidden border border-neutral-400/20">
             <h2 className="p-4 text-2xl font-bold">Button Design</h2>
          <div className="w-full p-4 flex items-center justify-center">
            
            <div className="animate-fade-in">
            <ButtonDesign/>
            </div>
          </div>
          
    </div>

{/* LOGIN --------------------------------------------------- */}
  <div 
      className="relative col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-6 row-span-1 rounded-2xl border border-neutral-400/20  
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
          className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-3 row-span-1 
          rounded-2xl overflow-hidden border border-neutral-400/20"
        ><div className="p-4 animate-fade-in">
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
        className="relative z-20 mt-4 w-full mx-auto text-white bg-white/10 border border-white/20 rounded-xl 
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
  className="mt-4 w-full"
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
<section className="w-full max-w-[1600px] mx-auto pb-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4">
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-12 row-span-1 
          rounded-2xl overflow-hidden border border-neutral-400/20 bg-cover bg-center 
          bg-[url('/Galaxy.png')]"
        >             <h2 className="p-4 text-2xl font-bold">Navbar</h2>
          <div className="mx-auto p-4 flex items-center justify-center animate-fade-in">
          <Navbar/>
          </div>
        </div>
  </div>
</section>

    {/* SECTION UNDER NAVBAR */}
<section className="w-full max-w-[1600px] mx-auto mb-4">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4">
    
    {/* Block 0 */}
    <div className="col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 rounded-2xl 
    overflow-hidden border border-neutral-400/20
    bg-cover bg-center bg-[url('/Nebula.png')] animate-fade-in">
  {/* Title */}
  <div className="flex">
  <h2 className="text-2xl font-bold text-left p-4">
    Custom Made Card
  </h2>
  <Figma size={32} color="#fff" className="mt-4" />
  </div>
  {/* Image with overlay text */}
  <div className="relative p-4">
    {/* Image */}
    <Image
      src="/card3.png"
      alt="card3"
      width={0}
      height={0}
      className="rounded-xl w-full h-auto object-cover backdrop-blur-md animate-pulse-slow"
    />

    {/* Text overlay (inside image) */}
    <div className="absolute inset-0 flex items-center justify-center">
      <h3 className="text-white text-xl font-semibold drop-shadow-lg">
        Frosted Glass UI
      </h3>
    </div>
  </div>

  {/* Explainer below image */}
  <p className="text-white text-sm px-6 pb-4 drop-shadow-[0_0_5px_white]">
    The card and spotlight effect was designed in Figma. The frosted glass effect
    is applied using the Tailwind's <code>backdrop-blur-md</code>. 
    I also used the React <code>&lt;Image&gt;</code> component, which makes it 
    easier to apply Tailwind classes and effects like overlays while keeping the 
    image responsive and optimized. 
  </p>
</div>

    {/* Block 1 */}
    <div className="col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-5 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20">
    <h2 className="mb-4 text-2xl font-bold text-left p-4">Toggles</h2>
          <div className="mx-auto flex justify-center animate-fade-in">
        <Toggle />
          </div>
    </div>


    {/* Block 3 */}
    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-400/20">
    <div className="h-full w-full p-4 flex">
    <div className="h-full w-full flex flex-col">
  <h2 className="mb-4 text-2xl font-bold text-left">Loading States</h2>
  <SkeletonCard />
</div>
    </div>
    </div>

    {/* Block 4 */}
  <div className="col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 rounded-2xl overflow-hidden border border-neutral-400/20">
  <div className="h-full w-full p-4 flex flex-col items-left">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-left">Microinteraction</h2>
        </div>
        <p className="pb-4 text-neutral-400 text-sm">I designed this microinteraction with a smooth hover and press animation to give users instant feedback and make the button feel more responsive. </p>
        <p className="pb-6 text-neutral-400 text-sm">By using Framer Motion, I created fluid transitions that feel modern and polished, showing my focus on details and creating small moments of delight in the experience.</p>
        <motion.button
          whileHover={{
            scale: 1.00,
            backgroundColor: "#ffffff20",
            color: "#ffffff",
            transition: { duration: 0.05, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.95,
            borderRadius: "30px",
          }}
          className="px-10 py-3 w-1/2 rounded-xl border border-white/20 hover:border-white/20 text-white 
          font-medium transition-colors"
        >
          Preview
        </motion.button>
        
      </div>
  </div>

  </div>
</section>

{/* NAVBAR --------------------------------------------------- */}
<section className="w-full max-w-[1600px] mx-auto pb-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4">
    <div 
          className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-12 row-span-1 
          rounded-2xl overflow-hidden border border-neutral-400/20 bg-cover bg-center 
          bg-[url('/Galaxy.png')]"
        >             <h2 className="p-4 text-2xl font-bold">Navbar</h2>
          <div className="mx-auto p-4 flex items-center justify-center animate-fade-in">
          <Navbar/>
          </div>
        </div>
  </div>
</section>

{/* COLOR PALETTESs --------------------------------------------------- */}
<section className="w-full max-w-[1600px] mx-auto mb-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4">
    
    {/* Block 1 */}
    <div className="col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 rounded-2xl
  overflow-hidden border border-neutral-400/20">
<h2 className="p-4 text-2xl font-bold">Ad Design Concept</h2>
<div className="animate-fade-in">
  <div className="relative aspect-[1/1] w-full flex items-center justify-center max-h-[600px]">
    <Image
      src="/orbitualAd.png"
      alt="Hero"
      fill
      className="object-contain p-4c"
      priority
    />
  </div>
  <div className="h-full w-full p-4 flex items-center justify-center">
      <p className="text-neutral-400 text-sm">The ad design above was created as a demo concept to showcase UI kit marketing visuals. The goal was to explore clean layouts, contrast, and conversion-focused design within a dark theme. The project focused on practicing pricing layouts, CTA hierarchy, and modern promotional components.</p>
      </div>
          </div>
</div>

    {/* Block 2 */}
    <div className="bg-neutral-900 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 md:row-span-1 rounded-2xl overflow-hidden border border-neutral-400/20">
    <h2 className="p-4 text-2xl font-bold">Calculator</h2>
    <div className="px-4 animate-fade-in">
      <p className="pb-4 text-neutral-400 text-sm">A calculator built with the button design showcased above, highlighting how the component integrates into a functional interface. When active, the AC button turns into a backspace button until result is given.</p>
    <Calculator/>
    </div>
    </div>

    {/* Block 3 */}
    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 md:row-span-1 rounded-2xl overflow-hidden border border-neutral-400/20">
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className="col-span-12 lg:col-span-6 rounded-2xl  
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

  </div>
</section>

  {/* NEWS BANNER */}
  <section className="w-full max-w-[1600px] mx-auto mb-4">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-12">

    {/* Block 2 */}
    <div
      className="
        relative
        aspect-[16/9]
        bg-neutral-900
        col-span-1
        sm:col-span-2
        lg:col-span-8
        rounded-2xl
        overflow-hidden
        border border-neutral-400/20
      "
    >
      {/* Top-left title */}
      <h2 className="p-4 text-2xl font-bold relative z-30">
        News Banner
      </h2>

      {/* Static image for mobile */}
      {isMobile && (
        <div className="absolute inset-0 z-0">
          <Image
            src="/newsbanner.jpg"
            alt="news banner"
            layout="fill"
            objectFit="cover"
            className="opacity-100"
            priority
          />
        </div>
      )}

      {/* Video background for larger screens */}
      {!isMobile && (
        <div className="absolute inset-0 z-0">
          <video
            className="h-full w-full object-cover opacity-70"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="marsorbit.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Optional overlay */}
      <div className="absolute inset-0 z-10 bg-cover bg-center opacity-100" />

      {/* NewsBanner pinned to bottom */}
      {!isMobile && (
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
          <NewsBanner />
        </div>
      )}
    </div>

    {/* Block 3 */}
    <div
  className="
    relative
    h-[500px]
    sm:h-[300px]
    md:h-full
    col-span-1
    sm:col-span-2
    lg:col-span-4 
    rounded-2xl
    overflow-hidden
    border border-neutral-400/20
    "
>
      <h2 className="p-4 text-2xl font-bold relative z-30">
        Rotating Sphere
      </h2>

      <div className="absolute inset-0 flex items-center justify-center z-10 mt-10">
      <Sphere imageUrl="/marstexture.jpg" rotationSpeed={0.2} />
  </div>
    </div>

  </div>
</section>





{/* FINANCIAL DASHBOARD DEMO --------------------------------------------------- */}
      <section className="pb-4">
        <div
          className="rounded-2xl overflow-hidden border border-neutral-800
          bg-cover bg-center bg-[url('/ambient.jpg')]"
        >
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Financial Dashboard</h1>
            <button
              onClick={() => toggleSection("financial")}
              className="text-white hover:text-gray-300 transition animate-bounce"
            >
              {activeSection === "financial" ? (
                <ChevronUp className="w-8 h-8" />
              ) : (
                <ChevronDown className="w-8 h-8" />
              )}
            </button>
          </div>

          {activeSection === "financial" && (
            <div className="mx-auto flex items-center justify-center">
              <FinancialDashboard />
            </div>
          )}
        </div>
      </section>

{/* SEO ANALYTICS DASHBOARD  --------------------------------------------------- */}
<section className="pb-4">
        <div
          className="rounded-2xl overflow-hidden border border-neutral-400/20"
        >
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">SEO Analytics Dashboard</h1>
            <button
              onClick={() => toggleSection("seo")}
              className="text-white hover:text-gray-300 transition animate-bounce"
            >
              {activeSection === "seo" ? (
                <ChevronUp className="w-8 h-8" />
              ) : (
                <ChevronDown className="w-8 h-8" />
              )}
            </button>
          </div>

          {activeSection === "seo" && (
            <div className="mx-auto flex items-center justify-center pb-4">
              <SeoAnalyticsDashboard />
            </div>
          )}
        </div>
   </section>

  </main>
</div>
    
  )
}