"use client"

import { useEffect, useRef } from "react"

interface GalaxyBackgroundProps {
  className?: string
}

export function GalaxyBackground({ className }: GalaxyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars: Star[] = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        speed: Math.random() * 0.05,
      })
    }

    // Create galaxy dust particles
    const dustParticles: DustParticle[] = []
    for (let i = 0; i < 1000; i++) {
      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * canvas.width * 0.4
      const type = Math.random() > 0.6 ? "core" : Math.random() > 0.5 ? "arm" : "dust"

      dustParticles.push({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        radius:
          type === "core" ? 2 + Math.random() * 2 : type === "arm" ? 1 + Math.random() * 1.5 : 0.5 + Math.random(),
        color: type === "core" ? "#fff" : type === "arm" ? "#ff9eb1" : Math.random() > 0.5 ? "#c792ea" : "#b0c4de",
        alpha:
          type === "core"
            ? 0.7 + Math.random() * 0.3
            : type === "arm"
              ? 0.5 + Math.random() * 0.3
              : 0.3 + Math.random() * 0.4,
        angle,
        distance,
        armWidth: type === "arm" ? 0.2 + Math.random() * 0.3 : 0.1 + Math.random() * 0.2,
        armOffset: Math.random() * Math.PI * 2,
      })
    }

    // Animation variables
    let rotation = 0
    const rotationSpeed = 0.0010 // Increased from 0.0001 for faster rotation

    // Draw function
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background
      ctx.fillStyle = "transparent"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
        ctx.fill()

        // Move stars slightly for twinkling effect
        star.alpha += Math.random() * 0.02 - 0.01
        if (star.alpha < 0.3) star.alpha = 0.3
        if (star.alpha > 1) star.alpha = 1
      })

      // Update rotation
      rotation += rotationSpeed

      // Draw galaxy with glow
      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)

      // Draw core glow
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, canvas.width * 0.3)
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.6)")
      gradient.addColorStop(0.1, "rgba(216, 191, 216, 0.5)")
      gradient.addColorStop(0.3, "rgba(147, 112, 219, 0.4)")
      gradient.addColorStop(1, "rgba(0, 0, 139, 0)")

      ctx.beginPath()
      ctx.arc(0, 0, canvas.width * 0.3, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw dust particles
      dustParticles.forEach((particle) => {
        // Calculate position with rotation
        const newAngle = particle.angle + rotation
        const x = Math.cos(newAngle) * particle.distance
        const y = Math.sin(newAngle) * particle.distance

        // Add spiral arm effect
        const spiralFactor = 0.3
        const spiralAngle = particle.angle + (spiralFactor * particle.distance) / 100
        const spiralX = Math.cos(spiralAngle + rotation) * particle.distance
        const spiralY = Math.sin(spiralAngle + rotation) * particle.distance

        // Draw particle with glow
        ctx.beginPath()
        ctx.arc(spiralX, spiralY, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}`
        ctx.globalAlpha = particle.alpha
        ctx.shadowColor = particle.color
        ctx.shadowBlur = particle.radius * 3
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.shadowBlur = 0
      })

      ctx.restore()

      requestAnimationFrame(draw)
    }

    // Start animation
    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className={`fixed rounded-4xl w-full h-full -z-10 ${className}`} />
}

interface Star {
  x: number
  y: number
  radius: number
  alpha: number
  speed: number
}

interface DustParticle {
  x: number
  y: number
  radius: number
  color: string
  alpha: number
  angle: number
  distance: number
  armWidth: number
  armOffset: number
}
