"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-white/[0.05]"
    >
      <div className="max-w-5xl mx-auto px-6 py-28">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <p className="text-[12px] tracking-[0.22em] uppercase text-white/35 mb-6">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl tracking-[-0.06em] leading-[1.05] text-white max-w-4xl mx-auto mb-8">
            Interested in backend engineering,
            secure systems, or collaboration.
          </h2>

          <p className="text-white/50 text-[16px] leading-8 max-w-2xl mx-auto mb-12">
            Open to internships, freelance opportunities, and projects
            focused on backend development, cybersecurity, and scalable
            full stack applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">

            <a
              href="mailto:your@email.com"
              className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Email
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="px-6 py-3 rounded-full border border-white/[0.08] text-sm text-white/70 hover:border-white/20 hover:text-white transition-all"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="px-6 py-3 rounded-full border border-white/[0.08] text-sm text-white/70 hover:border-white/20 hover:text-white transition-all"
            >
              LinkedIn
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}