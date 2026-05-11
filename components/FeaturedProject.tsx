"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    command: "open learn-hub",

    title: "Learn Hub",

    description:
      "Semester-based academic learning platform with structured navigation and modern UI architecture.",

    image: "/learn-hub.png",

    github: "https://github.com/yourusername/learnhub",

    live: "https://your-live-demo.com",
  },

  {
    command: "open auth-gateway",

    title: "Authentication Gateway",

    description:
      "Secure JWT authentication system with RBAC, middleware security, and API protection.",

    image: "/auth-project.png",

    github: "https://github.com/yourusername/auth",

    live: "https://your-auth-demo.com",
  },

  {
    command: "open api-security",

    title: "API Security Layer",

    description:
      "Backend security infrastructure focused on request validation and secure API architecture.",

    image: "/security-project.png",

    github: "https://github.com/yourusername/security",

    live: "https://your-security-demo.com",
  },
];

export default function FeaturedProject() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="border-b border-white/[0.05]"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="text-[12px] tracking-[0.22em] uppercase text-white/35 mb-5">
            Project Launcher
          </p>

          <h2 className="text-4xl md:text-5xl tracking-[-0.05em] leading-[1.1] text-white max-w-3xl">
            Secure backend systems and modern web applications.
          </h2>
        </motion.div>

        {/* Terminal */}
        <div className="rounded-[32px] overflow-hidden border border-white/[0.06] bg-[#111111]">

          {/* Top */}
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.05]">

            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />

            <span className="ml-3 text-xs font-mono text-white/30">
              project-launcher
            </span>

          </div>

          <div className="grid lg:grid-cols-[420px_1fr]">

            {/* Left Terminal */}
            <div className="border-r border-white/[0.05] p-6 font-mono text-sm">

              <div className="space-y-3">

                {projects.map((project) => (
                  <button
                    key={project.command}
                    onClick={() => setActiveProject(project)}
                    className={`w-full text-left px-4 py-4 rounded-2xl transition-all duration-300 border ${
                      activeProject.title === project.title
                        ? "border-white/[0.12] bg-white/[0.04] text-white"
                        : "border-transparent text-white/45 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className="text-white/30 mr-2">$</span>

                    {project.command}
                  </button>
                ))}

              </div>
            </div>

            {/* Right Preview */}
            <div className="p-6">

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeProject.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >

                  {/* Image */}
                  <div className="relative h-[320px] rounded-[24px] overflow-hidden border border-white/[0.05]">

                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="pt-8">

                    <p className="text-sm text-white/35 mb-3">
                      Launch Successful
                    </p>

                    <h3 className="text-3xl tracking-[-0.04em] text-white mb-5">
                      {activeProject.title}
                    </h3>

                    <p className="text-white/50 leading-8 max-w-2xl">
                      {activeProject.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-4 mt-8">

                      <a
                        href={activeProject.live}
                        target="_blank"
                        className="px-5 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all"
                      >
                        Launch Project
                      </a>

                      <a
                        href={activeProject.github}
                        target="_blank"
                        className="px-5 py-3 rounded-full border border-white/[0.08] text-sm text-white/70 hover:border-white/20 hover:text-white transition-all"
                      >
                        Source Code
                      </a>

                    </div>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}