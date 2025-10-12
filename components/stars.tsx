"use client"

import { useEffect, useRef } from "react"
import { Renderer, Program, Mesh, Triangle } from "ogl"

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uDensity;
uniform float uTwinkle;
out vec4 fragColor;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float star(vec2 uv, float brightness) {
  float d = length(uv - 0.5);
  float glow = smoothstep(0.02, 0.0, d);
  return glow * brightness;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec3 color = vec3(0.0);

  // Create grid of random stars
float gridCount = uDensity * 60.0;
  for (float x = 0.0; x < 1.0; x += 1.0 / gridCount) {
    for (float y = 0.0; y < 1.0; y += 1.0 / gridCount) {
      vec2 cell = vec2(x, y);
      float rnd = random(cell);
      if (rnd > 0.998) { // density control
        vec2 starPos = cell + vec2(random(cell * 2.0), random(cell * 3.0)) / gridCount;
        float twinkle = 0.5 + 0.5 * sin(uTime * 2.0 + rnd * 10.0);
        float s = star(fract((uv - starPos) * gridCount), twinkle);
        color += vec3(s * twinkle);
      }
    }
  }

  color = clamp(color, 0.0, 1.0);
  fragColor = vec4(color, max(color.r, max(color.g, color.b)));
}
`

interface StarsGLSLProps {
  density?: number // 0.5–1.5 looks good
  twinkleSpeed?: number
}

export default function StarsGLSL({ density = 1.0, twinkleSpeed = 1.0 }: StarsGLSLProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const renderer = new Renderer({ alpha: true, antialias: true })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    container.appendChild(gl.canvas)

    const geometry = new Triangle(gl)
    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [window.innerWidth, window.innerHeight] },
        uDensity: { value: density },
        uTwinkle: { value: twinkleSpeed },
      },
    })

    const mesh = new Mesh(gl, { geometry, program })

    const resize = () => {
      renderer.setSize(container.offsetWidth, container.offsetHeight)
      program.uniforms.uResolution.value = [container.offsetWidth, container.offsetHeight]
    }
    window.addEventListener("resize", resize)
    resize()

    const render = (t: number) => {
      program.uniforms.uTime.value = t * 0.001 * twinkleSpeed
      renderer.render({ scene: mesh })
      animationFrameRef.current = requestAnimationFrame(render)
    }
    animationFrameRef.current = requestAnimationFrame(render)

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      window.removeEventListener("resize", resize)
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  }, [density, twinkleSpeed])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
