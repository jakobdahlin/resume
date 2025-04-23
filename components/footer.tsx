"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Footer() {
  const pathname = usePathname()

  // Skip rendering on home page
  if (pathname === "/") {
    return null
  }

  return (
    <footer className="col-span-12 my-4 sm:my-0">
      <div className="w-full mx-auto flex items-center gap-4">
        <Button asChild variant="outline" className="gap-2 w-full px-6 py-2 rounded-xl 
          bg-transparent border border-neutral-400/60 hover:border-white 
          hover:shadow-lg hover:shadow-white/50 backdrop-blur-sm
          transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white hover:backdrop-blur-sm">
          <Link href="https://github.com/jakobdahlin" target="_blank" rel="noopener noreferrer">
            <Github size={18} />
            GitHub
          </Link>
        </Button>

        <Button asChild variant="outline" className="gap-2 w-full px-6 py-2 rounded-xl 
          bg-transparent border border-neutral-400/60 hover:border-white
          hover:shadow-lg hover:shadow-white/50 backdrop-blur-sm
          transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white hover:backdrop-blur-sm">
          <Link href="https://www.linkedin.com/in/jakobdahlin/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </Link>
        </Button> 
      </div>

      <Button asChild variant="outline" className="gap-2 mt-4 w-full px-6 py-2 rounded-xl 
        bg-transparent border border-neutral-400/60 hover:border-white
        hover:shadow-lg hover:shadow-white/50 backdrop-blur-sm
        transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white hover:backdrop-blur-sm">
        <Link href="mailto:jakob@jakobdahlin.com">
          <Mail size={18} />
          Reach Out
        </Link>
      </Button>
    </footer>
  )
}
