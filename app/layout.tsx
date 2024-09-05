import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const barlow = Barlow({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Project Tracking Intro Component| FScode",
  description:
    "Solution for Project Tracking Intro Component challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} max-w-screen flex min-h-screen flex-col overflow-x-hidden scroll-smooth text-[18px] antialiased`}
      >
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
