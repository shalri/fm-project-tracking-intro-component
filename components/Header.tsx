"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  return (
    <header className="mx-auto w-full overflow-hidden pt-[38px] sm:max-w-[1174px] sm:pt-16">
      <AnimatePresence>
        {isMobileNavActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 bg-black/10 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      <div className="mx-auto flex items-center justify-between px-8">
        <Link href="/">
          <div className="relative z-10 size-6 sm:size-8">
            <Image
              src="/fm-project-tracking-intro-component/logo.svg"
              alt="logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>
        <Navigation
          isMobileNavActive={isMobileNavActive}
          setIsMobileNavActive={setIsMobileNavActive}
        />
      </div>
    </header>
  );
}
