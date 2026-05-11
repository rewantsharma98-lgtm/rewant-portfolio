"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-white/[0.05]"
    >
      <div className="max-w-5xl mx-auto px-6 py-28">
        
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[12px] tracking-[0.22em] uppercase text-white/35">
              About
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h2 className="text-3xl md:text-4xl tracking-[-0.04em] leading-[1.3] text-white/90 mb-8">
              Focused on building scalable backend systems,
              secure APIs, and modern full stack applications.
            </h2>

            <div className="space-y-6 text-white/50 leading-8 text-[15px]">
              
              <p>
                I’m a Computer Science Engineering student with a strong
                interest in backend engineering, authentication systems,
                API security, and scalable application architecture.
              </p>

              <p>
                My development workflow mainly revolves around the MERN
                stack, where I enjoy building production-ready applications
                with clean structure, optimized performance, and secure
                backend infrastructure.
              </p>

              <p>
                Alongside full stack development, I actively explore
                cybersecurity concepts including OWASP practices,
                authentication workflows, access control systems,
                Linux environments, and web application security.
              </p>

              <p>
                I enjoy turning complex ideas into clean and functional
                digital products that balance usability, performance,
                and security.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}