import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Architectural Photography & Web Development",
  description: "Portfolio showcasing architectural photography and web development work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
      <Analytics/>
        <title>Portfolio | Architectural Photography & Web Development</title>
        <meta name="description" content="Portfolio showcasing architectural photography and web development work" />
        <meta name="generator" />
      </Head>
      <html lang="en">
      <body className={`${inter.className} relative text-white bg-black antialiased selection:bg-black/0 selection:text-cyan-300`}>

{/* Hero background image that stays fixed and only covers the top screen height */}
<div className="fixed top-0 left-0 w-full h-screen">
  <div className="w-full h-full bg-[url('/offgrid2.jpg')] bg-cover bg-top bg-no-repeat z-0" />
  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black z-10" />
</div>

{/* Your content scrolls on top of that one fullscreen image */}
<div className="relative z-10">
  <Navigation />
  <main className="min-h-screen">{children}</main>
</div>
</body>


      </html>
    </>
  );
}
