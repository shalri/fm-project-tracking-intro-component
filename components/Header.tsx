"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full pt-[38px]">
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
        <Navigation />
      </div>
    </header>
  );
}
