"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2024 — Present",
    title: "MERN Stack Development",
    description:
      "Building full stack applications with focus on backend architecture, API development, authentication systems, and scalable web application workflows.",
  },
  {
    period: "2024 — Present",
    title: "Cybersecurity Learning",
    description:
      "Exploring web application security, OWASP principles, authentication security, Linux systems, access control, and secure backend infrastructure.",
  },
  {
    period: "2023 — Present",
    title: "Computer Science Engineering",
    description:
      "Studying core computer science concepts including data structures, networking, operating systems, database systems, and software engineering.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-white/[0.05]"
    >
      <div className="max-w-5xl mx-auto px-6 py-28">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-[12px] tracking-[0.22em] uppercase text-white/35 mb-6">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl tracking-[-0.05em] leading-[1.1] text-white max-w-3xl">
            Learning, building, and continuously improving through real-world development.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/[0.06] ml-2 space-y-14">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-white/70" />

              {/* Period */}
              <p className="text-sm text-white/35 mb-3">
                {item.period}
              </p>

              {/* Title */}
              <h3 className="text-2xl tracking-[-0.03em] text-white mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 leading-8 text-[15px] max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}