"use client";

import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-bold text-black">
            D
          </div>

          <span className="text-lg font-semibold tracking-tight">
            DataForge <span className="text-white/40">AI</span>
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>

          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#process" className="transition hover:text-white">
            Process
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm transition hover:bg-white hover:text-black"
        >
          Let's Talk

          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

      </div>
    </nav>
  );
}