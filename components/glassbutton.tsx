"use client";

import React, { useState, useEffect } from "react";
import { Move } from "lucide-react";

const GlassButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Center pill on load
  useEffect(() => {
    const pillWidth = window.innerWidth <= 640 ? 240 : 320; // match Tailwind sizes
    const pillHeight = window.innerWidth <= 640 ? 64 : 80;
  
    const centerX = window.innerWidth / 2 - pillWidth / 2;
    const centerY = 500 / 2 - pillHeight / 2;
  
    setPosition({ x: centerX, y: centerY });
  }, []);

  // Animate up and down on mobile
  useEffect(() => {
    if (!isMobile) return;

    let direction = 1;
    const interval = setInterval(() => {
      setPosition((prev) => {
        let newY = prev.y + direction * 1.2;
        if (newY <= 20 || newY >= 300 - 80) {
          direction *= -1;
        }
        return { ...prev, y: newY };
      });
    }, 4); // ~60fps

    return () => clearInterval(interval);
  }, [isMobile]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMobile) return;
    setIsDragging(true);

    const parentRect = e.currentTarget.parentElement!.getBoundingClientRect();
    const pillRect = e.currentTarget.getBoundingClientRect();

    setOffset({
      x: e.clientX - pillRect.left,
      y: e.clientY - pillRect.top,
    });

    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging || isMobile) return;

    const parentRect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - parentRect.left - offset.x,
      y: e.clientY - parentRect.top - offset.y,
    });
  };

  const handleMouseUp = () => {
    if (isMobile) return;
    setIsDragging(false);
  };

  const [backgroundTransform, setBackgroundTransform] = useState({
    offsetX: -120,
    offsetY: 40,
    scale: 10,
  });
  

  return (
    <div
      className="relative w-full h-[400px]"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Draggable or animated pill */}
      <div
  className="absolute rounded-full overflow-hidden shadow-2xl shadow-black/50
  border-2 border-white/60 cursor-grab active:cursor-grabbing bg-black/20
  w-60 h-16 sm:w-80 sm:h-20" // mobile and desktop sizes
  style={{
    top: `${position.y}px`,
    left: `${position.x}px`,
  }}
  onMouseDown={handleMouseDown}
>
        {/* Use parent's background manually */}
        <div
  className="absolute inset-0"
  style={{
    backgroundImage: "url('/BG5.jpeg')",
    backgroundPosition: `-${position.x}px -${position.y}px`, // remove offset for perfect alignment
    backgroundSize: `${100 * backgroundTransform.scale}%`, // use exact scaling
    filter: "url(#glass-distortion)",
    opacity: 0.6, // soften the effect
    mixBlendMode: "normal",
  }}
/>

{/* Inner shadow layer */}
<div
  className="absolute inset-0 rounded-full pointer-events-none z-10"
  style={{
    boxShadow: "inset 0 0 18px rgba(255, 255, 255, 0.5)", // white glow inward
  }}
/>
        {/* Glass highlight */}
        <div className="absolute inset-0 rounded-full bg-black/0 blur-sm z-10 pointer-events-none" />

        {/* Move icon (hide on mobile) */}
        {!isMobile && (
          <div className="absolute inset-0 flex justify-center items-center z-20 pointer-events-none">
            <Move className="text-white w-10 h-10" />
          </div>
        )}
      </div>
    </div>
  );
};

export default GlassButton;
