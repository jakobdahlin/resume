"use client";

import React, { ReactNode } from 'react';
import Link from "next/link"
import { Github } from "lucide-react"


interface CardProps {
    className?: string;
    children?: ReactNode;
  }

  export default function ButtonDesign() {
    return (

<div className="flex justify-center">
    <div className="flex flex-wrap relative z-10">

    <section className="col-span-12 lg:col-span-12 backdrop-blur-md 
    shadow-sm md:mb-0 flex flex-col">

      <div className="flex mx-auto justify-center">

      <button className="relative cursor-pointer px-14 mb-8 font-bold py-3
      s bg-neutral-800 hover:text-neutral-300 active:text-white
      overflow-hidden group transition-transform rounded-xl
      duration-100 transform hover:scale-95
      shadow-[0px_10px_15px_rgba(0,0,0,0.3)]
      hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)]
      active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]">

        <div
          style={{
          background: `
              border-box linear-gradient(145deg,
                rgba(100, 100, 100, 1), 
                rgba(50, 50, 50, 1),
                rgba(38, 38, 38, 1),
                rgba(38, 38, 38, 1)
              )
            `,
          }}
          className="
          absolute inset-0 transition-all duration-100 rounded-xl
          bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] 
          group-hover:bg-[linear-gradient(145deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]
          "
        />

        <div 
        style={{ animation: 'pulse-slow 4s ease-in-out infinite',}} 
        className="absolute inset-[1px] bg-neutral-800 pointer-events-none 
        transition-shadow duration-100 z-10 rounded-xl" />

        <span className="relative z-10">Login</span>
      </button>
  
  
  </div>
  <div className="flex-wrap mb-4">
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
    </section>

    <div className="mt-auto w-full">
      <Link target="_blank" rel="noopener noreferrer" 
      href="https://github.com/jakobdahlin/resume/blob/main/components/buttondesign.tsx">
          <div
            className="flex items-center justify-center gap-2 py-2 rounded-xl 
            bg-transparent border
            border-neutral-400/60 hover:border-white transition ease-in-out
            hover:shadow-lg hover:shadow-white/50 transform duration-300
            hover:bg-white/20 hover:text-white text-center cursor-pointer">
  
              <div className="flex mx-auto gap-2 justify-center items-center">
                <Github size={18} />Code
              </div>
          </div>
      </Link>
    </div>
    
  
    </div>
</div>
)
}