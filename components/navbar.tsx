"use client"

import { useState, useRef } from "react"
import { User, DollarSign, Box, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const navItems = [
  { label: "Dashboard", icon: <User size={20} /> },
  { label: "Products", icon: <Box size={20} /> },
  { label: "Pricing", icon: <DollarSign size={20} /> },
  { label: "Contact", icon: <Mail size={20} /> },
]

export default function Navbar() {
  const [active, setActive] = useState("Dashboard")

  return (
    <header className="flex justify-center py-6">
      <div className="relative flex items-center border border-sky-300/30 rounded-full p-2 bg-black/20 backdrop-blur-md">
        <div className="w-8 h-8 mx-4 hover:rotate-12 transition duration-200">
          <img src="/JD_ID.png" alt="Logo" className="w-full h-full object-contain" />
        </div>
        {navItems.map(({ label, icon }) => {
          const isHiddenOnMobile = label === "Pricing" || label === "Contact"
          return (
            <Button
              key={label}
              onClick={() => setActive(label)}
              className={`relative z-10 px-4 py-2 rounded-full bg-transparent hover:bg-transparent hover:text-white ${
                active === label ? "text-white" : "text-sky-300"
              } ${isHiddenOnMobile ? "hidden md:flex" : ""}`}
              variant="ghost"
            >
              <span className="flex items-center gap-2">
                {icon}
                {label}
              </span>
              {active === label && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 z-[-1] bg-sky-400/10 border border-sky-300/50 shadow-[0_0_20px_#9DDFFF70] rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </Button>
          )
        })}
      </div>
    </header>
  )
}
