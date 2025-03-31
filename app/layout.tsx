import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Head from "next/head";

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
        <body className={`${inter.className} text-white bg-black antialiased relative`}>
          {/* Background container */}
          <div
            className="fixed inset-0 h-screen w-screen bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: "url(/nocal.JPG)",
              backgroundPosition: "center",
            }}
          />
          {/* Overlay */}
          <div className="fixed inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black z-10" />
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
