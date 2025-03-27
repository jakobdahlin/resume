"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
<header
  className={cn(
    "fixed top-0 left-0 w-full z-50 py-2 transition-all duration-500 ease-in-out",
    isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
  )}
>
  <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center">
    <div className="flex items-center justify-between w-full py-2">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="text-white"
      >
        <Link href="/" className="inline-block my-2">
          <Image
            src="/JAKOBDW.png"
            alt="Jakob Dahlin Logo"
            width={150}
            height={30}
          />
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {/* Nav links here if needed */}
      </nav>
    </div>
  </div>
</header>

  )
}

