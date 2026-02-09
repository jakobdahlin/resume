import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowDownToLine, GalleryVertical, File, Link2 } from "lucide-react"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import ShinyText from './ShinyText';
import LiquidGlassSurface from "@/components/liquidglass/liquidglasssurface";

export default function IntroCard() {

  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const month = now.toLocaleString("en-US", { month: "short" }); // Jul
      const day = now.getDate(); // 1-31
      const timePart = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true, // 12-hour format
      });
      setTime(`${month} ${day}, ${timePart}`);
    };
  
    updateTime(); // Run immediately
    const interval = setInterval(updateTime, 1000); // Update every second
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <LiquidGlassSurface
  radius={24}
  refraction={0.012}
  blur={1.6}
  className="w-full max-w-2xl h-auto rounded-3xl p-2 z-10 border border-neutral-500/50 mx-4"
>

<motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-2xl
        rounded-2xl flex flex-col justify-between
        px-2 z-10"
      >
        <div className="flex justify-between p-2 text-neutral-500 uppercase text-sm w-full">
          <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 2 }}
                  >{time}
          </motion.span>
          <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 2 }}
                  >New York, NY
          </motion.span>
        </div>

        <div className="flex justify-between p-2 text-neutral-500 uppercase text-sm w-full">
        <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2 }} 
                  className="flex flex-col w-full text-md text-center text-neutral-500 rounded-full">
            Product Designer
            -
            UX Engineer
        </motion.span>
        </div>



        <div className="text-center mt-2 py-2 mx-12">
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, delay: 1 }} 
        className="flex flex-col mx-auto justify-center gap-2">
          <Image
      src="/JAKOBDW.png"
      alt="card3"
      width={0}
      height={0}
      className="rounded-xl w-full max-w-xs mb-4 px-10 justify-center items-center flex mx-auto h-auto object-cover"
    />
          </motion.div>
          </div>
      
        <motion.p 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, delay: 1 }}
        className="text-neutral-400 text-center text-md px-2 pb-10 mx-4">
        <ShinyText 
        text="Designing and building digital products with 10+ years of web
          development experience and expertise in UX engineering. Creating
          responsive, accessible interfaces that balance clean design, usability,
          SEO optimization, and scalable code." 
          disabled={false} 
          speed={3} 
          className='custom-class' 
          />
        </motion.p>
        

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 2 }}
  className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mx-auto mb-4 px-2"
>
  <Link
    href="/portfolio"
    className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl 
    border border-neutral-500/50 hover:border-white hover:shadow-lg hover:shadow-white/50 
    transition duration-500 hover:bg-white/20 hover:text-white"
  >
    <GalleryVertical size={16} />
    Design Portfolio
  </Link>

  <Link
    href="/resume"
    className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl 
    border border-neutral-500/50 hover:border-white hover:shadow-lg hover:shadow-white/50 
    transition duration-500 hover:bg-white/20 hover:text-white"
  >
    <File size={16} />
    Resume
  </Link>

  <a
    href="/JDResume2025.pdf"
    target="_blank"
    className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl 
    border border-neutral-500/50 hover:border-white hover:shadow-lg hover:shadow-white/50 
    transition duration-500 hover:bg-white/20 hover:text-white"
  >
    <ArrowDownToLine size={16} />
    Resume PDF
  </a>

  <Button
    asChild
    variant="outline"
    className="gap-2 px-4 py-2 rounded-xl bg-transparent border border-neutral-400/30 hover:border-sky-200 
    hover:shadow-lg hover:shadow-blue-600/50 transition ease-in-out duration-300 
    hover:bg-sky-400/20 hover:text-white hover:backdrop-blur-sm"
  >
    <Link href="https://jakobdahlin.com">
      <Link2 size={18} />
      jakobdahlin.com
    </Link>
  </Button>
</motion.div>



        </motion.div> 
      </LiquidGlassSurface>
  )
}
