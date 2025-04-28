"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image";
import { Button } from "@/components/ui/button"


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


          <div className="gap-2 pl-2 py-2 font-light text-3xl">
          <Link href="/">
            <p>
              Jakob
            </p>
            </Link>
          </div>
          <div className="pl-2 py-4 font-extrabold text-3xl">
          <Link href="/">
            <p>
              Dahlin
            </p>
            </Link>
          </div>

      {/* Contact Button on the right */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="text-white ml-auto"
      >
        <Button asChild variant="outline" className="gap-2 px-4 py-2 rounded-xl 
        bg-transparent border border-neutral-400/30 hover:border-white
        hover:shadow-lg hover:shadow-white/50
        transition ease-in-out duration-300 hover:bg-white/20 hover:text-white 
        hover:backdrop-blur-sm">
          <Link href="mailto:jakob@jakobdahlin.com">
            <Mail size={18} />
            Reach Out
          </Link>
        </Button>
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

