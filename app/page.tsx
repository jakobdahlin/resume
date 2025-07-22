"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { File, GalleryVertical, ArrowDownToLine } from "lucide-react";
import Link from "next/link";
import DynamicBackground from "@/components/dynamicbackground";
import IntroCard from "@/components/introcard";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DynamicBackground /> {/* Your moving stars background */}

      <IntroCard />
    </div>
  );
}
