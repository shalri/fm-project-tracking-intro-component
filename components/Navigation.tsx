"use client";

import { useSmallScreen } from "@/hooks/useSmallScreen";
import { pages } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

export default function Navigation() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  // const [isMobileNavActive, setIsMobileNavActive] = useState(true); // for
  // coding layout
  const isSmallScreen = useSmallScreen();
  const navRef = useRef<HTMLDivElement>(null);

  const hamburgerClick = useCallback(() => {
    setIsMobileNavActive((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleClickOutsideNav = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileNavActive(false);
      }
    };
    const updateBodyClass = () => {
      if (isMobileNavActive) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    };

    document.addEventListener("click", handleClickOutsideNav);
    updateBodyClass();

    return () => {
      document.removeEventListener("click", handleClickOutsideNav);
      document.body.classList.remove("no-scroll");
    };
  }, [isMobileNavActive]);

  const animateNavWrapper = useCallback(
    (children: React.ReactNode) => {
      return (
        <AnimatePresence>
          {isMobileNavActive && (
            <motion.div
              initial={{ opacity: 0, y: -100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-nav fixed left-6 right-6 top-6 z-20 mt-16"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      );
    },
    [isMobileNavActive],
  );

  const navContent = (
    <ul className="">
      {pages.map((page) => (
        <li className="" key={page.title}>
          <Link href={page.url}>{page.title}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="z-10">
      <button className="flex items-center" onClick={hamburgerClick}>
        <div
          className={cn(
            "block h-4 w-6 bg-[url(/images/icon-hamburger.svg)] bg-no-repeat",
            isMobileNavActive ? "h-6 bg-[url(/images/icon-close.svg)]" : "",
          )}
        />
      </button>
      <div className={cn("relative", isMobileNavActive ? "z-10" : "")}>
        {isSmallScreen ? animateNavWrapper(navContent) : navContent}
      </div>
    </nav>
  );
}
