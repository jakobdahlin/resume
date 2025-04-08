"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const images = [
  "/ambient1.jpg",
  "/ambient2.jpg",
  "/ambient3.jpg",
  "/ambient4.jpg",
];

type Slide = {
  id: number;
  src: string;
};

// Shuffle helper
function shuffle(array: string[]) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function BackgroundSlideshow() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const queueRef = useRef<string[]>(shuffle(images));

  useEffect(() => {
    const pickNextImage = () => {
      if (queueRef.current.length === 0) {
        queueRef.current = shuffle(images);
      }

      const next = queueRef.current.shift(); // get the next image from the queue
      if (!next) return;

      setSlides((prev) => [...prev, { id: Date.now(), src: next }]);
    };

    pickNextImage(); // start immediately

    const interval = setInterval(pickNextImage, 2000);
    return () => clearInterval(interval);
  }, []); // empty array = only run once on mount

  return (
    <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden">
      {slides.map((slide) => (
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="absolute inset-0 bg-coverbg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slide.src})` }}
        />
      ))}
    </div>
  );
}