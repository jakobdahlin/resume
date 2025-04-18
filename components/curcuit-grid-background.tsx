"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  speed: number
  direction: number
  lineIndex: number
  progress: number
  color: string
  size: number
  isHorizontal: boolean
  opacity: number
  fadeState: "in" | "out" | "stable"
  fadeSpeed: number
}

// Define base colors
const blueColor = { r: 59, g: 130, b: 246 }; // Blue-500 (RGB)
const cyanColor = { r: 59, g: 130, b: 246 }; // Cyan-500 (RGB)
const orangeColor = { r: 230, g: 230, b: 230 }; // Orange-700 (RGB)


export default function CircuitGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Grid configuration
    const gridSpacingX = 50
    const gridSpacingY = 50
    const perspectiveStrength = 0.8
    const vanishingPointX = dimensions.width / 2
    const vanishingPointY = dimensions.height * 0.4

    // Particle configuration
    const maxParticles = 80
    const particles: Particle[] = []

    // Generate grid lines
    const horizontalLines: { start: { x: number; y: number }; end: { x: number; y: number } }[] = []
    const verticalLines: { start: { x: number; y: number }; end: { x: number; y: number } }[] = []

    // Generate horizontal grid lines
    for (let y = 0; y < dimensions.height * 1.5; y += gridSpacingY) {
      // Calculate perspective distortion
      const distanceFromVanishing = Math.abs(y - vanishingPointY)
      const perspectiveScale = 1 + (distanceFromVanishing / dimensions.height) * perspectiveStrength

      // Calculate start and end points with perspective
      const startX = vanishingPointX - (dimensions.width * perspectiveScale) / 2
      const endX = vanishingPointX + (dimensions.width * perspectiveScale) / 2

      horizontalLines.push({
        start: { x: startX, y },
        end: { x: endX, y },
      })
    }

    // Generate vertical grid lines
    for (let x = 0; x < dimensions.width * 1.5; x += gridSpacingX) {
      // Calculate perspective distortion
      const distanceFromVanishing = Math.abs(x - vanishingPointX)
      const perspectiveScale = 1 + (distanceFromVanishing / dimensions.width) * perspectiveStrength

      // Calculate start and end points with perspective
      const startY = vanishingPointY - (dimensions.height * perspectiveScale) / 2
      const endY = vanishingPointY + (dimensions.height * perspectiveScale) / 2

      verticalLines.push({
        start: { x, y: startY },
        end: { x, y: endY },
      })
    }

// Randomly adjust the color
const getRandomizedColor = () => {
    // Pick a color base (Blue, Cyan, or Orange)
    const colorBase = [blueColor, cyanColor, orangeColor][Math.floor(Math.random() * 3)];
  
    // Randomize the color within the given range
    const r = colorBase.r + Math.random() * 25; // Add slight randomization
    const g = colorBase.g + Math.random() * 25;
    const b = colorBase.b - Math.random() * 50; // Subtract to keep the color range in check
    const alpha = 0.6 + Math.random() * 0.4; // Random alpha between 0.6 and 1
  
    return `rgba(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)}, ${alpha})`;
  };
  
  const createParticle = (): Particle => {
    const isHorizontal = Math.random() > 0.5;
    const lines = isHorizontal ? horizontalLines : verticalLines;
    const lineIndex = Math.floor(Math.random() * lines.length);
    const line = lines[lineIndex];
  
    const progress = Math.random();
    const direction = Math.random() > 0.5 ? 1 : -1;
  
    let x, y;
    if (isHorizontal) {
      x = line.start.x + (line.end.x - line.start.x) * progress;
      y = line.start.y;
    } else {
      x = line.start.x;
      y = line.start.y + (line.end.y - line.start.y) * progress;
    }
  
    return {
      x,
      y,
      speed: 0.0005 + Math.random() * 0.0015, // Adjusted speed range
      direction,
      lineIndex,
      progress,
      color: getRandomizedColor(), // Get a randomized color from the predefined base colors
      size: 1 + Math.random() * 2,
      isHorizontal,
      opacity: Math.random() * 0.5, // Start with random opacity
      fadeState: Math.random() > 0.7 ? "in" : "stable", // 30% chance to start fading in
      fadeSpeed: 0.005 + Math.random() * 0.01, // Random fade speed
    };
  };

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle())
    }

    // Animation loop
    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Configuration for colors - you can adjust these values
      const backgroundColor = "#000000" // Dark blue background
      const gridLineColor = "rgba(0, 210, 255, 0.30)" // Cyan grid lines with low opacity

      // Draw background
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.lineWidth = 1
      ctx.strokeStyle = gridLineColor

      // Draw horizontal grid lines
      horizontalLines.forEach((line) => {
        ctx.beginPath()
        ctx.moveTo(line.start.x, line.start.y)
        ctx.lineTo(line.end.x, line.end.y)
        ctx.stroke()
      })

      // Draw vertical grid lines
      verticalLines.forEach((line) => {
        ctx.beginPath()
        ctx.moveTo(line.start.x, line.start.y)
        ctx.lineTo(line.end.x, line.end.y)
        ctx.stroke()
      })

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update particle position
        particle.progress += particle.speed * particle.direction

        // Update particle opacity based on fade state
        if (particle.fadeState === "in") {
          particle.opacity += particle.fadeSpeed
          if (particle.opacity >= 1) {
            particle.opacity = 1
            particle.fadeState = "stable"
          }
        } else if (particle.fadeState === "out") {
          particle.opacity -= particle.fadeSpeed
          if (particle.opacity <= 0.1) {
            // Instead of removing, reset the particle
            particles[index] = createParticle()
            return
          }
        } else if (Math.random() < 0.005) {
          // 0.5% chance to change state each frame
          // Randomly decide to start fading in or out
          particle.fadeState = particle.opacity < 0.5 ? "in" : "out"
        }

        // Calculate new position based on line
        const lines = particle.isHorizontal ? horizontalLines : verticalLines
        const line = lines[particle.lineIndex]

        if (particle.isHorizontal) {
          particle.x = line.start.x + (line.end.x - line.start.x) * particle.progress
          particle.y = line.start.y
        } else {
          particle.x = line.start.x
          particle.y = line.start.y + (line.end.y - line.start.y) * particle.progress
        }

        // Draw particle
        ctx.beginPath()
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/, `${particle.opacity})`)
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw particle trail
        ctx.beginPath()
        ctx.strokeStyle = particle.color.replace(/[\d.]+\)$/, `${particle.opacity})`)
        ctx.lineWidth = particle.size / 2

        if (particle.isHorizontal) {
          const trailLength = (line.end.x - line.start.x) * 0.05 * particle.direction
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(particle.x - trailLength, particle.y)
        } else {
          const trailLength = (line.end.y - line.start.y) * 0.05 * particle.direction
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(particle.x, particle.y - trailLength)
        }

        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [dimensions])

  return (
    <div className="fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
