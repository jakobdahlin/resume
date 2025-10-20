"use client"

import { motion, AnimatePresence, Variants } from "framer-motion"
import {
  School,
  ShieldCheck,
  MapPin,
  CalendarDays,
  GraduationCap,
  BookCheck,
  Check,
  BookOpen,
  ArrowDownToLine,
} from "lucide-react"
import Link from "next/link"

export function Education() {
  // ✅ Typed variant for TypeScript
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
  }


  return (
    <div className="space-y-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-left"
      >
        <p className="text-white/60 max-w-2xl">
          My educational background combines creativity, structure, and discipline —
          from media and design to military service.
        </p>
      </motion.div>

      {/* --- Swedish Armed Forces --- */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: true }}
      >
        <motion.div
          className="backdrop-blur-sm space-y-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <School className="h-5 w-5 text-white" />
            <h3 className="text-xl font-semibold text-white">Swedish Armed Forces</h3>
          </div>

          <motion.div variants={fadeUp} custom={1} className="space-y-2">
            <div className="flex items-center gap-1 mb-1">
              <BookCheck className="h-4 w-4 text-white" />
              <span className="text-white font-bold">Major:</span>
            </div>
            <p className="text-neutral-400">Military Service</p>
            <span className="text-neutral-400">Field Operations & Culinary Training</span>
          </motion.div>

          <motion.div variants={fadeUp} custom={2} className="space-y-2">
            <div className="flex items-center gap-1 mb-1">
              <GraduationCap className="h-4 w-4 text-white" />
              <span className="text-white font-bold">Degree:</span>
            </div>
            <p className="text-neutral-400">Diploma & Service Medal</p>
          </motion.div>

          <motion.div variants={fadeUp} custom={3} className="space-y-2">
            <div className="flex items-center gap-1 mb-1">
              <MapPin className="h-4 w-4 text-white" />
              <span className="text-white font-bold">Location:</span>
            </div>
            <p className="text-neutral-400">Skövde & Karlskrona, Sweden</p>
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="space-y-2">
            <div className="flex items-center gap-1 mb-1">
              <Check className="h-4 w-4 text-white" />
              <span className="text-white font-bold">Description:</span>
            </div>
            <p className="text-neutral-400">
              Completed 11 months of military service at P4 Skaraborgs Regiment,
              including general basic training, national field exercises, and a one-month
              culinary training program at a naval base in southern Sweden.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={5} className="space-y-2">
            <div className="flex items-center gap-1 mb-1">
              <CalendarDays className="h-4 w-4 text-white" />
              <span className="text-white font-bold">Period:</span>
            </div>
            <p className="text-neutral-400">2009 - 2010</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* --- Virginska School --- */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={6}
        viewport={{ once: true }}
      >
        <motion.div
          className="backdrop-blur-sm space-y-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <School className="h-5 w-5 text-white" />
            <h3 className="text-xl font-semibold text-white">Virginska School</h3>
          </div>

          <motion.div variants={fadeUp} custom={7} className="space-y-2">
            <div className="flex items-center gap-1 mb-1">
              <BookCheck className="h-4 w-4 text-white" />
              <span className="text-white font-bold">Major:</span>
            </div>
            <p className="text-neutral-400">Media Communication</p>
          </motion.div>

          <motion.div variants={fadeUp} custom={8} className="space-y-2">
            <div className="flex items-center gap-1 mb-1">
              <GraduationCap className="h-4 w-4 text-white" />
              <span className="text-white font-bold">Degree:</span>
            </div>
            <p className="text-neutral-400">Upper Secondary Diploma</p>
          </motion.div>

          <motion.div variants={fadeUp} custom={9} className="space-y-2">
            <div className="flex items-center gap-1 mb-1">
              <MapPin className="h-4 w-4 text-white" />
              <span className="text-white font-bold">Location:</span>
            </div>
            <p className="text-neutral-400">Örebro, Sweden</p>
          </motion.div>

          <motion.div variants={fadeUp} custom={10} className="space-y-2">
            <div className="flex items-center gap-1 mb-1">
              <Check className="h-4 w-4 text-white" />
              <span className="text-white font-bold">Description:</span>
            </div>
            <p className="text-neutral-400">
              Studied Media Communication with a focus on Photography, Graphic Design,
              and Video Production. Over three years, gradually specialized in
              Graphic Design and Video Production.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={11} className="space-y-2">
            <div className="flex items-center gap-1 mb-1">
              <CalendarDays className="h-4 w-4 text-white" />
              <span className="text-white font-bold">Period:</span>
            </div>
            <p className="text-neutral-400">2006 - 2009</p>
          </motion.div>
        </motion.div>
      </motion.section>

    </div>
  )
}
