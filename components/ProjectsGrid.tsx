"use client";

import React from "react";
import { Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "Admin panel for managing products, orders, and analytics with real-time data synchronization.",
    tags: ["React", "Redux", "Tailwind"],
    github: "#",
    demo: "#",
    colSpan: "lg:col-span-2"
  },
  {
    title: "Task Management API",
    description: "RESTful API with robust validation and pagination.",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "#",
    demo: null,
    colSpan: "lg:col-span-1"
  },
  {
    title: "Portfolio Website v1",
    description: "My previous developer portfolio built with plain HTML/JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
    colSpan: "lg:col-span-1"
  },
  {
    title: "Real-time Chat App",
    description: "WebSocket-based chat application with private rooms and end-to-end encryption concepts.",
    tags: ["Socket.io", "React", "Node.js"],
    github: "#",
    demo: "#",
    colSpan: "lg:col-span-2"
  }
];

export function ProjectsGrid() {
  return (
    <section className="py-32 relative">
      <div className="max-w-[1040px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Project Gallery</h2>
            <p className="text-foreground/60 text-lg max-w-xl">
              A selection of my recent software engineering and development projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[380px]">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col rounded-[24px] glass overflow-hidden transition-all duration-500 hover:border-foreground/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_40px_rgba(255,255,255,0.03)] ${project.colSpan}`}
              >
                {/* Background Image / Placeholder */}
                <div className="absolute inset-0 bg-foreground/[0.02] dark:bg-white/[0.02] z-0 transition-transform duration-700 group-hover:scale-105" />
                
                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col h-full p-8 justify-end bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold tracking-tight mb-2 text-foreground">{project.title}</h3>
                    <p className="text-foreground/70 text-sm mb-6 max-w-md line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full glass text-xs font-medium text-foreground/80">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <a href={project.github} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                            <Code size={16} />
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
