"use client";

import { motion } from "framer-motion";

const lines = [
  "$ npm run secure-auth",
  "✓ JWT Authentication Enabled",
  "✓ RBAC Middleware Active",
  "✓ Rate Limiting Applied",
  "✓ MongoDB Connected",
  "✓ API Security Headers Enabled",
  "✓ Input Validation Active",
];

export default function Terminal() {
  return (
    <section className="border-b border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          {/* Header */}
          <div className="mb-10">
            <p className="text-[12px] tracking-[0.22em] uppercase text-white/35 mb-5">
              Backend Infrastructure
            </p>

            <h2 className="text-3xl md:text-4xl tracking-[-0.04em] leading-[1.15] text-white max-w-2xl">
              Building secure backend systems with modern authentication and API security practices.
            </h2>
          </div>

          {/* Terminal */}
          <div className="rounded-[28px] border border-white/[0.06] bg-[#111111] overflow-hidden">

            {/* Top Bar */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.05]">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />

              <span className="ml-3 text-xs font-mono text-white/30">
                terminal
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-4">

              {lines.map((line, index) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08,
                  }}
                  className={`${
                    line.startsWith("$")
                      ? "text-white/80"
                      : "text-white/50"
                  }`}
                >
                  {line}
                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}