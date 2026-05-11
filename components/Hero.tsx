"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative border-b border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 pt-36 pb-28">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[12px] tracking-[0.22em] uppercase text-white/35 mb-8">
              MERN Stack • Backend Engineering • Security
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.05em] leading-[0.96] text-white mb-8">
              Building secure
              <br />
              backend systems
              <br />
              for modern web apps.
            </h1>

            <p className="max-w-xl text-[17px] leading-8 text-white/50 mb-12">
              Computer Science Engineering student focused on scalable backend
              development, authentication workflows, API security, and
              production-ready MERN stack applications.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Selected Work
              </a>

              <a
                href="/resume.pdf"
                className="px-6 py-3 rounded-full border border-white/10 text-sm text-white/65 hover:border-white/20 transition-colors"
              >
                Resume
              </a>
            </div>
          </motion.div>

                {/* Right Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="rounded-[28px] border border-white/[0.06] bg-[#111111] overflow-hidden">
          
          {/* Top Bar */}
          <div className="px-5 py-4 border-b border-white/[0.05] flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />

            <span className="ml-3 text-xs text-white/30 font-mono">
              auth-system.ts
            </span>
          </div>

          {/* Code Block */}
          <div className="p-6 font-mono text-[13px] leading-7 overflow-hidden">
            
            <p className="text-white/35">
              <span className="text-white/20">01</span>
              <span className="ml-4 text-[#7DD3FC]">import</span>
              <span className="text-white/70"> jwt </span>
              <span className="text-[#7DD3FC]">from</span>
              <span className="text-[#A3E635]"> "jsonwebtoken"</span>
            </p>

            <p className="text-white/35">
              <span className="text-white/20">02</span>
              <span className="ml-4 text-[#7DD3FC]">import</span>
              <span className="text-white/70"> bcrypt </span>
              <span className="text-[#7DD3FC]">from</span>
              <span className="text-[#A3E635]"> "bcryptjs"</span>
            </p>

            <div className="h-4" />

            <p className="text-white/35">
              <span className="text-white/20">03</span>
              <span className="ml-4 text-[#C084FC]">export const</span>
              <span className="text-white/80"> loginUser </span>
              <span className="text-white/50">= async</span>
            </p>

            <p className="text-white/35">
              <span className="text-white/20">04</span>
              <span className="ml-10 text-white/60">
                validateCredentials()
              </span>
            </p>

            <p className="text-white/35">
              <span className="text-white/20">05</span>
              <span className="ml-10 text-white/60">
                generateAccessToken()
              </span>
            </p>

            <p className="text-white/35">
              <span className="text-white/20">06</span>
              <span className="ml-10 text-white/60">
                setSecureCookies()
              </span>
            </p>

            <div className="h-4" />

            <p className="text-white/35">
              <span className="text-white/20">07</span>
              <span className="ml-4 text-[#FCA5A5]">// RBAC Middleware</span>
            </p>

            <p className="text-white/35">
              <span className="text-white/20">08</span>
              <span className="ml-4 text-white/60">
                authorize(["admin", "user"])
              </span>
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express",
                "JWT",
                "MongoDB",
                "Security",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-white/[0.05] text-xs text-white/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

        </div>
      </div>
    </section>
  );
}