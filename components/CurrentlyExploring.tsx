"use client";

import { motion } from "framer-motion";

const topics = [
  "Docker & Containers",
  "Linux Hardening",
  "API Security",
  "System Design",
  "Redis Caching",
  "Authentication Architecture",
];

export default function CurrentlyExploring() {
  return (
    <section className="border-b border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          {/* Header */}
          <div className="mb-10">
            <p className="text-[12px] tracking-[0.22em] uppercase text-white/35 mb-5">
              Currently Exploring
            </p>

            <h2 className="text-3xl md:text-4xl tracking-[-0.04em] leading-[1.15] text-white max-w-2xl">
              Continuously learning backend engineering and modern security practices.
            </h2>
          </div>

          {/* Topics */}
          <div className="flex flex-wrap gap-3">

            {topics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                className="px-5 py-3 rounded-full border border-white/[0.06] bg-white/[0.02] text-sm text-white/60 hover:border-white/[0.14] hover:text-white transition-all"
              >
                {topic}
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}