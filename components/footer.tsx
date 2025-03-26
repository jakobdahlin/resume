import Link from "next/link"
import Image from "next/image"
import { Instagram, Github, Linkedin } from "lucide-react"

export default function Footer() {
  // Don't show footer on home page
  if (typeof window !== "undefined" && window.location.pathname === "/") {
    return null
  }

  return (
    <footer className="bg-black/70 backdrop-blur-sm border-t border-white/10 py-8 mt-20">
      <div className="container mx-auto px-4 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
          <Link href="/" className="inline-block">
  <Image
    src="/JAKOBDW.png"
    alt="Jakob Dahlin Logo"
    width={150}
    height={30}
  />
</Link>
<p className="mt-4 text-white/70">© {new Date().getFullYear()} Jakob Dahlin. All rights reserved.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 mt-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/jakobdahlin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jakobdahlin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/jakobdahlin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

