"use client";

import React from "react";
import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

const securityProjects = [
  {
    title: "Hack The App Platform",
    description: "A gamified platform for learning penetration testing with simulated vulnerable environments.",
    tags: ["Docker", "Node.js", "Pentesting"],
    status: "active"
  },
  {
    title: "Security Monitoring Dashboard",
    description: "SOC Lite implementation for visualizing network traffic and identifying anomalous behavior in real-time.",
    tags: ["Python", "Elasticsearch", "Networking"],
    status: "active"
  },
  {
    title: "Vulnerable Web App Lab",
    description: "A purposely vulnerable application built to demonstrate exploiting XSS, SQLi, and CSRF.",
    tags: ["XSS", "SQL Injection", "CSRF"],
    status: "offline"
  },
  {
    title: "Secure File Upload System",
    description: "An implementation of a secure file upload service with malware scanning and encrypted storage.",
    tags: ["Encryption", "Validation", "AWS S3"],
    status: "active"
  }
];

export function SecurityMindset() {
  return (
    <section className="py-32 relative bg-[#0a0a0c] text-[#f5f5f7] border-y border-border/10 overflow-hidden">
      {/* Background terminal grid */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="max-w-[1040px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="text-accent" size={28} />
              <h2 className="text-3xl font-bold tracking-tight font-mono">
                cyber_ops.sh
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }} 
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-3 h-8 bg-accent align-middle ml-1"
                />
              </h2>
            </div>
            <p className="text-white/50 text-lg max-w-xl font-mono">
              $ cat system_defense.txt<br/>
              &gt; Focused on offensive security concepts to build resilient defensive architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityProjects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-[#111113] border border-[#222225] transition-all duration-300 hover:border-accent/30 hover:bg-[#151518]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-accent/50 font-mono text-sm">{">_"}</span>
                    <h3 className="text-lg font-bold font-mono tracking-tight text-white group-hover:text-accent transition-colors">
                      {project.title.replace(/\s+/g, '_').toLowerCase()}
                    </h3>
                  </div>
                  {/* System Status Indicator */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase text-white/30 tracking-wider hidden sm:block">Sys Status</span>
                    <span className={`w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${project.status === 'active' ? 'bg-emerald-500 text-emerald-500' : 'bg-red-500 text-red-500'}`} />
                  </div>
                </div>
                
                <p className="text-white/60 text-sm mb-6 leading-relaxed font-mono">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-[#1a1a1e] border border-[#2a2a2e] text-white/50 font-mono text-xs transition-colors group-hover:border-accent/20 group-hover:text-accent/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
