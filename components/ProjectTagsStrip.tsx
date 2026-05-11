"use client";

import React from "react";
import { motion } from "framer-motion";

const tags = [
  "JWT", "MERN", "XSS", "SQL Injection", "REST API", "Security", "Authentication", "Encryption", "Node.js"
];

// Duplicate for seamless loop
const marqueeTags = [...tags, ...tags, ...tags, ...tags];

export function ProjectTagsStrip() {
  return (
    <div className="py-12 w-full overflow-hidden flex flex-col items-center bg-foreground/[0.01] border-y border-border">
      <div className="relative w-full flex overflow-hidden group">
        {/* Left/Right Fade Gradients */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex whitespace-nowrap"
        >
          {marqueeTags.map((tag, idx) => (
            <div 
              key={idx} 
              className="mx-4 px-6 py-2 rounded-full glass border border-border/50 text-foreground/60 text-sm font-mono flex items-center transition-colors group-hover:text-foreground/80"
            >
              <span className="text-accent mr-2">#</span>{tag}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
