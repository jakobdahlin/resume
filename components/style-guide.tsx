"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

type ColorScheme = "light" | "dark"
type BackgroundColor = "neutral" | "warm" | "cool" | "vibrant"

export default function StyleGuide() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark")
  const [bgColor, setBgColor] = useState<BackgroundColor>("neutral")

  const isDark = colorScheme === "dark"

  // Color palette based on color theory
  const colors = {
    light: {
      neutral: {
        bg: "bg-slate-50",
        primary: "bg-slate-900",
        secondary: "bg-slate-700",
        accent: "bg-indigo-500",
        muted: "bg-slate-200",
        border: "border-slate-200",
      },
      warm: {
        bg: "bg-amber-50",
        primary: "bg-amber-900",
        secondary: "bg-amber-700",
        accent: "bg-rose-500",
        muted: "bg-amber-200",
        border: "border-amber-200",
      },
      cool: {
        bg: "bg-cyan-50",
        primary: "bg-cyan-900",
        secondary: "bg-cyan-700",
        accent: "bg-emerald-500",
        muted: "bg-cyan-200",
        border: "border-cyan-200",
      },
      vibrant: {
        bg: "bg-fuchsia-50",
        primary: "bg-fuchsia-900",
        secondary: "bg-fuchsia-700",
        accent: "bg-violet-500",
        muted: "bg-fuchsia-200",
        border: "border-fuchsia-200",
      },
    },
    dark: {
      neutral: {
        bg: "bg-slate-900",
        primary: "bg-slate-50",
        secondary: "bg-slate-300",
        accent: "bg-indigo-400",
        muted: "bg-slate-800",
        border: "border-slate-700",
      },
      warm: {
        bg: "bg-amber-950",
        primary: "bg-amber-50",
        secondary: "bg-amber-300",
        accent: "bg-rose-400",
        muted: "bg-amber-900",
        border: "border-amber-800",
      },
      cool: {
        bg: "bg-cyan-950",
        primary: "bg-cyan-50",
        secondary: "bg-cyan-300",
        accent: "bg-emerald-400",
        muted: "bg-cyan-900",
        border: "border-cyan-800",
      },
      vibrant: {
        bg: "bg-fuchsia-950",
        primary: "bg-fuchsia-50",
        secondary: "bg-fuchsia-300",
        accent: "bg-violet-400",
        muted: "bg-fuchsia-900",
        border: "border-fuchsia-800",
      },
    },
  }

  const currentColors = colors[colorScheme][bgColor]

  const textColors = {
    primary: isDark ? "text-slate-50" : "text-slate-900",
    secondary: isDark ? "text-slate-300" : "text-slate-700",
    muted: isDark ? "text-slate-400" : "text-slate-500",
  }

  return (
    <Card
      className={cn(
        "w-full mx-auto rounded-2xl overflow-hidden transition-colors duration-300",
        currentColors.bg,
        currentColors.border,
      )}
    >
      <CardContent className="p-4">
        <div className="flex flex-col gap-8">
          {/* Header with theme toggle */}
          <div className="flex justify-between items-center">
            <h1 className={cn("text-2xl font-bold", textColors.primary)}>Design System</h1>
            <div className="flex items-center gap-2">
              <Sun className={cn("h-4 w-4", textColors.primary)} />
              <Switch
                checked={isDark}
                onCheckedChange={() => setColorScheme(isDark ? "light" : "dark")}
                aria-label="Toggle theme"
              />
              <Moon className={cn("h-4 w-4", textColors.primary)} />
            </div>
          </div>

          {/* Background selector */}
          <div className="grid gap-4">
            <h2 className={cn("text-xl font-semibold", textColors.primary)}>Background Theme</h2>
            <div className="flex flex-wrap gap-3">
              {(["neutral", "warm", "cool", "vibrant"] as BackgroundColor[]).map((color) => (
                <button
                  key={color}
                  onClick={() => setBgColor(color)}
                  className={cn(
                    "px-3 py-1 rounded-md capitalize transition-all",
                    colors[colorScheme][color].bg,
                    colors[colorScheme][color].border,
                    bgColor === color ? "ring-2 ring-offset-2" : "",
                    isDark ? "ring-offset-slate-900" : "ring-offset-white",
                    textColors.primary,
                  )}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Typography section */}
          <div className="grid gap-6">
            <h2 className={cn("text-xl font-semibold", textColors.primary)}>Typography</h2>

            <div className="grid gap-4">
              <div>
                <h1 className={cn("text-4xl font-bold tracking-tight", textColors.primary)}>Heading 1</h1>
                <p className={cn("text-sm mt-1", textColors.muted)}>
                  Font size: 2.25rem / 36px • Line height: 2.5rem / 40px • Font weight: 700
                </p>
              </div>

              <div>
                <h2 className={cn("text-3xl font-semibold tracking-tight", textColors.primary)}>Heading 2</h2>
                <p className={cn("text-sm mt-1", textColors.muted)}>
                  Font size: 1.875rem / 30px • Line height: 2.25rem / 36px • Font weight: 600
                </p>
              </div>

              <div>
                <h3 className={cn("text-2xl font-semibold tracking-tight", textColors.primary)}>Heading 3</h3>
                <p className={cn("text-sm mt-1", textColors.muted)}>
                  Font size: 1.5rem / 24px • Line height: 2rem / 32px • Font weight: 600
                </p>
              </div>

              <div>
                <h4 className={cn("text-xl font-semibold tracking-tight", textColors.primary)}>Heading 4</h4>
                <p className={cn("text-sm mt-1", textColors.muted)}>
                  Font size: 1.25rem / 20px • Line height: 1.75rem / 28px • Font weight: 600
                </p>
              </div>

              <div>
                <p className={cn("text-base leading-7", textColors.secondary)}>
                  Body text is used for most content. It should have a good contrast with the background and be easy to
                  read. The line height should be comfortable for extended reading.
                </p>
                <p className={cn("text-sm mt-1", textColors.muted)}>
                  Font size: 1rem / 16px • Line height: 1.75rem / 28px • Font weight: 400
                </p>
              </div>

              <div>
                <p className={cn("text-sm leading-6", textColors.secondary)}>
                  Small text is used for secondary information, captions, and other supporting content.
                </p>
                <p className={cn("text-sm mt-1", textColors.muted)}>
                  Font size: 0.875rem / 14px • Line height: 1.5rem / 24px • Font weight: 400
                </p>
              </div>
            </div>
          </div>

          {/* Color palette */}
          <div className="grid gap-6">
            <h2 className={cn("text-xl font-semibold", textColors.primary)}>Color Palette</h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <ColorSwatch
                name="Primary"
                className={currentColors.primary}
                textClass={isDark ? "text-slate-900" : "text-white"}
              />
              <ColorSwatch
                name="Secondary"
                className={currentColors.secondary}
                textClass={isDark ? "text-slate-900" : "text-white"}
              />
              <ColorSwatch name="Accent" className={currentColors.accent} textClass="text-white" />
              <ColorSwatch
                name="Muted"
                className={currentColors.muted}
                textClass={isDark ? "text-white" : "text-slate-900"}
              />
            </div>
          </div>

          {/* Text and background combinations */}
          <div className="grid gap-6">
            <h2 className={cn("text-xl font-semibold", textColors.primary)}>Text & Background Combinations</h2>

            <div className="grid gap-4">
              <div className={cn("p-4 rounded-md", currentColors.bg)}>
                <p className={cn("font-medium", textColors.primary)}>Primary text on background</p>
              </div>

              <div className={cn("p-4 rounded-md", currentColors.muted)}>
                <p className={cn("font-medium", textColors.primary)}>Primary text on muted</p>
              </div>

              <div className={cn("p-4 rounded-md", currentColors.primary)}>
                <p className={cn("font-medium text-white")}>White text on primary</p>
              </div>

              <div className={cn("p-4 rounded-md", currentColors.accent)}>
                <p className={cn("font-medium text-white")}>White text on accent</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ColorSwatch({ name, className, textClass }: { name: string; className: string; textClass: string }) {
  return (
    <div className="grid gap-2">
      <div className={cn("h-16 rounded-md flex items-center justify-center", className)}>
        <span className={cn("font-medium", textClass)}>{name}</span>
      </div>
    </div>
  )
}
