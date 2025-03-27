"use client" 

import Link from "next/link"
import Image from "next/image"
import { Instagram, Github, Linkedin } from "lucide-react"

export default function Footer() {
  // Don't show footer on home page
  if (typeof window !== "undefined" && window.location.pathname === "/") {
    return null
  }

  return (
<footer className="bg-black/70 backdrop-blur-sm border-t border-white/10 pt-10 pb-20 mt-10">
  <div className="mx-auto px-4 max-w-7xl w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column */}
      <div>
        <Link href="/" className="inline-block">
          <Image
            src="/JAKOBDW.png"
            alt="Jakob Dahlin Logo"
            width={150}
            height={30}
          />
        </Link>
        <p className="mt-4 text-white/70">
          © {new Date().getFullYear()} Jakob Dahlin. All rights reserved.
        </p>
      </div>

      {/* Right Column */}
      <div className="md:text-right">
        <h3 className="text-xl font-bold mb-4">Connect</h3>
        <div className="flex md:justify-end gap-4">
          <Link
            href="https://instagram.com/jakobdahlin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Instagram size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jakobdahlin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="https://github.com/jakobdahlin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Github size={24} />
          </Link>
        </div>
      </div>
    </div>
  </div>
</footer>


  )
}

