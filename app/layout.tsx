import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Architectural Photography & Web Development",
  description: "Portfolio showcasing architectural photography and web development work",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<html lang="en" suppressHydrationWarning>
  <body className={`${inter.className} text-white bg-black antialiased relative`}>
    {/* Background container */}
    <div
  className="fixed inset-0 h-screen w-screen bg-cover bg-center bg-no-repeat z-0"
  style={{
    backgroundImage: "url(/ESBV.jpg)",
    backgroundPosition: "center",
  }}
/>

    {/* Overlay */}s
    <div className="fixed inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black z-10" />

    {/* Content */}
    <div className="relative z-20">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  </body>
</html>
  )
}