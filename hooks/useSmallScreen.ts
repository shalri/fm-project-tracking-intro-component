"use client";

import { useState, useEffect } from "react";

export function useSmallScreen(breakpoint: number = 768) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < breakpoint);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [breakpoint]);

  return isSmallScreen;
}
