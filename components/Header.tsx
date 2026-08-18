"use client";

import { useState } from "react";
import Link from "next/link";
import { nav, site } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-orange-pale">
      <div className="wrap flex items-center justify-between py-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display font-extrabold text-lg tracking-tight whitespace-nowrap shrink-0"
        >
          {site.name.split(" ")[0]}{" "}
          <span className="text-orange-deep">{site.name.split(" ").slice(1).join(" ")}.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-display text-sm font-semibold">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-orange-deep transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={nav.ctaHref}
            className="hidden sm:inline-block font-display font-semibold text-sm bg-dark text-white px-5 py-2.5 rounded-md hover:-translate-y-0.5 hover:shadow-lg transition-transform"
          >
            {nav.ctaLabel} &rarr;
          </a>

          {/* Mobile hamburger — only shown below md breakpoint */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] shrink-0"
          >
            <span
              className={`block w-6 h-[2px] bg-dark transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-dark transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-dark transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-orange-pale ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="wrap flex flex-col py-2 font-display text-base font-semibold">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-orange-pale last:border-b-0 hover:text-orange-deep transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.ctaHref}
            onClick={() => setOpen(false)}
            className="sm:hidden mt-3 mb-2 text-center font-display font-semibold text-sm bg-dark text-white px-5 py-3 rounded-md"
          >
            {nav.ctaLabel} &rarr;
          </a>
        </nav>
      </div>
    </header>
  );
}
