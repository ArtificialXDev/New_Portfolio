import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});
let page
page = {
  name: "Muhammad Shahzain Khan",
  description: "I am a Passionate Software Developer",
  ogImage: "https://mdTaquiImam.vercel.app/og-image.png",
  url: "https://artificialxdev.vercel.app",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://artificialxdev.vercel.app"),
  title: {
    default: page.name,
    template: `%s - Software Engineer`,
  },
  description: page.description,

  // added new keywords for seo
  keywords: [
    "md",
    "taqui",
    "imam",
    "Md",
    "MD",
    "TAQUI",
    "Taqui",
    "Imam",
    "Imam",
    "Md Taqui Imam",
    "md taqui imam",
    "mdtaqui",
    "mdtaquiimam",
    "taqui imam",
    "Taqui Imam",
    "Taquiimam",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "MD TAQUI IMAM ",
    "website",
    "@Taquiimam",
    "Taquiimam",
    "taqui developer",
  ],
  authors: [
    {
      name: "Shahzain Khan",
      url: "https://github.com/artificialxdev",
    },
  ],
  creator: "Shahzain Khan",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: page.url,
    title: page.name,
    description: page.description,
    images: [`${page.url}/og-image.png`],
    siteName: page.name,
  },
  twitter: {
    card: "summary_large_image",
    title: page.name,
    description: page.description,
    images: [`${page.url}/og-image.png`],
    creator: "@Spandamcbe",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex  relative  break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" }
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
