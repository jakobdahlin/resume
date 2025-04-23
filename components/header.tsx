"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Play, GalleryVertical, File } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="mt-20">
      <section className="mb-4 rounded-xl pt-8">
        <div className="mx-auto max-w-7xl mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-wrap gap-4 items-end justify-end"
          >
            <Button asChild variant="outline" className="gap-2 px-2 py-2 rounded-xl 
              bg-transparent border border-neutral-400/60 hover:border-white 
              hover:shadow-lg hover:shadow-white/50
              transition-all ease-in-out duration-300  hover:bg-white/20 hover:text-white 
              hover:backdrop-blur-sm"
            >
              <Link href="/">
                <Play size={18} />
                Home
              </Link>
            </Button>

            {pathname !== "/portfolio" && (
              <Button asChild variant="outline" className="gap-2 px-2 py-2 rounded-xl 
                bg-transparent border border-neutral-400/60 hover:border-white 
                hover:shadow-lg hover:shadow-white/50
                transition-all ease-in-out duration-300  hover:bg-white/20 hover:text-white 
                hover:backdrop-blur-sm"
              >
                <Link href="/portfolio">
                  <GalleryVertical size={18} />
                  Design Portfolio
                </Link>
              </Button>
            )}

            {pathname !== "/resume" && (
              <Button asChild variant="outline" className="gap-2 px-2 py-2 rounded-xl 
                bg-transparent border border-neutral-400/60 hover:border-white 
                hover:shadow-lg hover:shadow-white/50 hover:bg-white/20
                transition-all ease-in-out duration-300 hover:text-white 
                hover:backdrop-blur-sm"
              >
                <Link href="/resume">
                  <File size={18} />
                  Resume
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </section>
    </header>
  )
}
