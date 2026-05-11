"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 border-b border-white/[0.05] bg-[#090909]/90 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="/"
            className="text-[13px] uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors"
          >
            <div className="text-sm tracking-[0.25em] uppercase text-white/70">
              kai cosmic
            </div>
                      </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-white/40">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Resume */}
          <a
            href="/resume.pdf"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full border border-white/[0.08] text-sm text-white/70 hover:border-white/20 hover:text-white transition-all"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-11 h-11 rounded-full border border-white/[0.08] flex items-center justify-center text-white/70"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden"
          >
            <div className="rounded-[28px] border border-white/[0.06] bg-[#111111]/95 backdrop-blur-xl overflow-hidden shadow-2xl">
              
              <div className="p-4 flex flex-col">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-4 rounded-2xl text-white/65 hover:text-white hover:bg-white/[0.03] transition-all"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="/resume.pdf"
                  className="mt-4 px-4 py-4 rounded-2xl bg-white text-black text-center text-sm font-medium"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}