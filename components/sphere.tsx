"use client"

import { useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"
import * as THREE from "three"

interface PlanetSphereProps {
  imageUrl?: string
  rotationSpeed?: number
}

function Planet({ imageUrl, rotationSpeed = 0.5 }: PlanetSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  // Load the texture
  const texture = useLoader(TextureLoader, imageUrl || "/placeholder.svg?height=1024&width=1024")

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed
    }
  })

  return (
    <mesh ref={meshRef} key={imageUrl}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} side={THREE.FrontSide} />
    </mesh>
  )
}

export default function Sphere({
  imageUrl = "/placeholder.svg?height=1024&width=1024",
  rotationSpeed = 0.2,
}: PlanetSphereProps) {
  return (
    <div className="w-full h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Dim ambient light for night side */}
        <ambientLight intensity={0.1} />

        {/* Sunlight hitting one side */}
        <directionalLight position={[7, 2,3]} intensity={7} />

        {/* Tilt Mars' axis */}
        <group rotation={[THREE.MathUtils.degToRad(25.2), 0, 0]}>
          <Planet imageUrl={imageUrl} rotationSpeed={rotationSpeed} />
        </group>
      </Canvas>
    </div>
  )
}