"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  return (
    <header className="w-full overflow-hidden pt-[38px]">
      <AnimatePresence>
        {isMobileNavActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 bg-black/80"
          />
        )}
      </AnimatePresence>
      <div className="container mx-auto flex items-center justify-between px-8">
        <Link href="/">
          <div className="relative size-6">
            <Image
              src="/images/logo.svg"
              alt="logo"
              fill
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
