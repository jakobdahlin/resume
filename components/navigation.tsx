"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { Link2 } from "lucide-react"
import { cn } from "@/lib/utils"
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
    document.body.classList.toggle("overflow-hidden", isOpen)
  }, [isOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 flex justify-center items-center w-full mx-auto z-[1001] py-2 transition-all duration-500 ease-in-out",
        isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="container mx-auto max-w-[1600px] px-4 flex justify-between items-center">
        <div className="flex items-center justify-between w-full py-2">
          {/* Left side: name */}
          <div className="flex items-center gap-2">
            <Link href="/" className="font-light text-3xl">
              Jakob
            </Link>
            <Link href="/" className="font-extrabold text-3xl">
              Dahlin
            </Link>
          </div>

          {/* Right side: Reach Out buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex gap-3 ml-auto text-white"
          >
            <Button
              asChild
              variant="outline"
              className="gap-2 px-4 py-2 rounded-xl bg-transparent border border-neutral-400/30 hover:border-sky-200 
              hover:shadow-lg hover:shadow-blue-600/50 transition ease-in-out 
              duration-300 hover:bg-sky-400/20 hover:text-white hover:backdrop-blur-sm"
            >
              <Link href="https://jakobdahlin.com">
                <Link2 size={18} />
                jakobdahlin.com
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="gap-2 px-4 py-2 rounded-xl bg-transparent border border-neutral-400/30 hover:border-white 
              hover:shadow-lg hover:shadow-white/50 transition ease-in-out 
              duration-300 hover:bg-white/20 hover:text-white hover:backdrop-blur-sm"
            >
              <Link href="/contact">
                <Mail size={18} />
                Reach Out
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
