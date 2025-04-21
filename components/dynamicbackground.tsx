"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    // Initialize stars
    const initStars = () => {
      const stars: Star[] = []
      const starCount = 300 // Number of stars

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * 2 - 1, // -1 to 1
          y: Math.random() * 2 - 1, // -1 to 1
          z: Math.random() * 0.8 + 0.2, // 0.2 to 1
          size: Math.random() * 1.5 + 0.5, // 0.5 to 2
          opacity: Math.random() * 0.8 + 0.2, // 0.2 to 1
          twinkleSpeed: Math.random() * 0.03 + 0.01, // 0.01 to 0.04
          twinklePhase: Math.random() * Math.PI * 2, // 0 to 2π
        })
      }

      starsRef.current = stars
    }

    // Animation function
    const animate = () => {
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Update and draw stars
      starsRef.current.forEach((star, index) => {
        // Move star closer (decrease z)
        star.z -= 0.0006

        // If star is too close, reset it
        if (star.z <= 0) {
          star.z = 1
          star.x = Math.random() * 2 - 1
          star.y = Math.random() * 2 - 1
          star.size = Math.random() * 1.5 + 0.5
        }

        // Calculate screen position
        const screenX = centerX + (star.x / star.z) * centerX
        const screenY = centerY + (star.y / star.z) * centerY

        // Calculate size based on distance
        const size = star.size / star.z

        // Update twinkle phase
        star.twinklePhase += star.twinkleSpeed
        if (star.twinklePhase > Math.PI * 2) {
          star.twinklePhase -= Math.PI * 2
        }

        // Calculate opacity with twinkling effect
        const twinkleEffect = ((Math.sin(star.twinklePhase) + 1) / 2) * 0.5
        const finalOpacity = star.opacity * (0.5 + twinkleEffect)

        // Draw star
        ctx.beginPath()
        ctx.arc(screenX, screenY, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`
        ctx.fill()

        starsRef.current[index] = star
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Set up and start animation
    resizeCanvas()
    animate()

    // Handle window resize
    window.addEventListener("resize", resizeCanvas)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ backgroundColor: "#000000" }} />
  )
}
