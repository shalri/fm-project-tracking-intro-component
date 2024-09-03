// "use client";

import { useSmallScreen } from "@/hooks/useSmallScreen";
import { pages } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

interface NavigationProps {
  isMobileNavActive: boolean;
  setIsMobileNavActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navigation({
  isMobileNavActive,
  setIsMobileNavActive,
}: NavigationProps) {
  const isSmallScreen = useSmallScreen();
  const navRef = useRef<HTMLDivElement>(null);

  const hamburgerClick = useCallback(() => {
    setIsMobileNavActive((prev) => !prev);
  }, [setIsMobileNavActive]);

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
  }, [isMobileNavActive, setIsMobileNavActive]);

  const animateNavWrapper = useCallback(
    (children: React.ReactNode) => {
      return (
        <AnimatePresence>
          {isMobileNavActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-nav fixed left-8 right-8 top-9 z-20 mt-16"
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
    <ul
      className={cn(
        "font-barlow-condensed font-bold uppercase",
        isMobileNavActive &&
        "absolute z-20 flex w-full flex-col gap-y-4 rounded-md bg-white py-5 text-center text-[20px] shadow-xl shadow-black/30",
      )}
    >
      {pages.map((page) => (
        <li
          className="text-pt-very-dark-blue last:mx-6 last:mt-1 last:border-t last:border-pt-light-grayish-blue last:pt-5 last:text-pt-grayish-blue"
          key={page.title}
        >
          <Link href={page.url}>{page.title}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav ref={navRef} className="z-10">
      <button className="flex items-center" onClick={hamburgerClick}>
        <div
          className={cn(
            "block h-4 w-6 bg-[url(/images/icon-hamburger.svg)] bg-no-repeat sm:hidden",
            isMobileNavActive ? "h-6 bg-[url(/images/icon-close.svg)]" : "",
          )}
        />
      </button>
      <div className={cn("relative", isMobileNavActive ? "z-20" : "")}>
        {isSmallScreen ? animateNavWrapper(navContent) : navContent}
      </div>
    </nav>
  );
}
