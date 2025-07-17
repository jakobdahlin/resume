"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TextureControlsProps {
  onImageChange: (url: string) => void
  currentImage: string
}

export default function TextureControls({ onImageChange, currentImage }: TextureControlsProps) {
  const [inputUrl, setInputUrl] = useState(currentImage)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputUrl.trim()) {
      onImageChange(inputUrl.trim())
    }
  }

  const presetTextures = [
    { name: "Default", url: "/placeholder.svg?height=512&width=512" },
    { name: "Earth Texture", url: "/assets/3d/texture_earth.jpg" },
    { name: "Grid Pattern", url: "/placeholder.svg?height=512&width=512&text=Grid" },
  ]

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Texture Controls</CardTitle>
        <CardDescription>Change the sphere texture by entering an image URL or selecting a preset</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-2">
          <Input
            type="url"
            placeholder="Enter image URL..."
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />
          <Button type="submit" className="w-full">
            Apply Texture
          </Button>
        </form>

        <div className="space-y-2">
          <p className="text-sm font-medium">Presets:</p>
          <div className="grid grid-cols-1 gap-2">
            {presetTextures.map((preset) => (
              <Button
                key={preset.name}
                variant="outline"
                size="sm"
                onClick={() => {
                  setInputUrl(preset.url)
                  onImageChange(preset.url)
                }}
                className="justify-start"
              >
                {preset.name}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
