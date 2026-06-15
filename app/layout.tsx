import "./globals.css";
import Navigation from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react";
import { Kumbh_Sans } from "next/font/google";
import type { Metadata } from "next";
import RootClient from "./root-client";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jakob Dahlin | Design Engineer",
  description:
    "Jakob Dahlin resume. Modern web development, UI/UX design, and SEO.",
  icons: { icon: "/JD_ID.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${kumbhSans.className} relative min-h-screen text-white bg-black antialiased selection:bg-black/0 selection:text-cyan-300`}>

        {/* Fixed hero backdrop */}
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
          <div className="w-full h-full bg-black bg-cover bg-top bg-no-repeat" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black" />
        </div>

        {/* Header above everything */}
        <Navigation />   {/* header has z-[200] in its own component */}

        {/* Blur + page */}
        <RootClient>
          <main className="min-h-screen">{children}</main>
        </RootClient>

        <Analytics />
      </body>
    </html>
  );
}
