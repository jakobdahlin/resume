import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Head from "next/head";
import BackgroundSlideshow from "@/components/BackgroundSlideshow";

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
        <title>Portfolio | Architectural Photography & Web Development</title>
        <meta name="description" content="Portfolio showcasing architectural photography and web development work" />
        <meta name="generator" content="v0.dev" />
      </Head>
      <html lang="en">
      <body
  className={`${inter.className} text-white bg-black antialiased relative`}
  style={{
    backgroundImage: "url('/ambient1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }}
>
    {/* <BackgroundSlideshow /> REMOVE COMMENTING FOR DYNAMIC BACKGROUND */}

  {/* Overlay */}
  <div className="fixed inset-0 backdrop-blur-xl bg-black/30 z-10" />

  {/* Content */}
  <div className="relative z-20">
    <Navigation />
    <main>{children}</main>
  </div>
</body>
      </html>
    </>
  );
}