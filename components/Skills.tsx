"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Building responsive and modern interfaces with clean user experience.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    description:
      "Developing scalable APIs, authentication systems, and server architecture.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Redis"],
  },
  {
    title: "Security",
    description:
      "Implementing secure development practices and backend protection systems.",
    skills: ["JWT", "RBAC", "OWASP", "Rate Limiting", "Input Validation"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-white/[0.05]"
    >
      <div className="max-w-6xl mx-auto px-6 py-28">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-[12px] tracking-[0.22em] uppercase text-white/35 mb-6">
            Expertise
          </p>

          <h2 className="text-4xl md:text-5xl tracking-[-0.05em] leading-[1.1] text-white max-w-3xl">
            Full stack development with a strong backend and security focus.
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-[28px] border border-white/[0.05] bg-white/[0.02] p-8 hover:border-white/[0.12] transition-all"
            >
              {/* Title */}
              <div className="mb-8">
                <h3 className="text-2xl tracking-[-0.03em] text-white mb-4">
                  {group.title}
                </h3>

                <p className="text-white/45 text-[15px] leading-7">
                  {group.description}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-full border border-white/[0.05] bg-black/20 text-sm text-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}