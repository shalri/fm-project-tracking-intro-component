"use client";

import { pages } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-6 w-full bg-zinc-200 py-3">
      <nav className="container mx-auto flex items-center justify-between p-3">
        <Link className="text-lg font-bold" href="/">
          <div className="relative size-16">
            <Image
              src="/images/logo.svg"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="">
          <ul className="">
            {pages.map((page) => (
              <li className="" key={page.title}>
                <Link href={page.url}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
