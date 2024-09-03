import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

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
        className={`${barlow.className} flex min-h-screen flex-col scroll-smooth text-[18px] antialiased`}
      >
        <div className="hi-[64%] fixed right-0 h-[425px] w-[50%] rounded-bl-[60px] bg-pt-light-grayish-blue" />
        {children}
      </body>
    </html>
  );
}
