"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (url: string) => {
    setOpen(false);
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Hint */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full border border-white/[0.08] bg-[#111111]/80 backdrop-blur-md text-sm text-white/50 hover:text-white hover:border-white/20 transition-all"
      >
        Ctrl + K
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[12vh] px-4">
          
          <Command className="w-full max-w-xl rounded-[28px] overflow-hidden border border-white/[0.08] bg-[#111111] shadow-2xl">
            
            {/* Input */}
            <Command.Input
              placeholder="Search commands..."
              className="w-full bg-transparent border-none outline-none px-6 py-5 text-white placeholder:text-white/30 text-[15px]"
            />

            {/* List */}
            <Command.List className="max-h-[400px] overflow-auto p-3 border-t border-white/[0.05]">

              <Command.Empty className="py-10 text-center text-sm text-white/40">
                No results found.
              </Command.Empty>

              <Command.Group heading="Navigation">

                <Command.Item
                  onSelect={() => {
                    setOpen(false);
                    document
                      .querySelector("#projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-3 rounded-2xl text-white/70 hover:bg-white/[0.04] cursor-pointer"
                >
                  Open Projects
                </Command.Item>

                <Command.Item
                  onSelect={() => {
                    setOpen(false);
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-3 rounded-2xl text-white/70 hover:bg-white/[0.04] cursor-pointer"
                >
                  Contact
                </Command.Item>

              </Command.Group>

              <Command.Group heading="External Links">

                <Command.Item
                  onSelect={() =>
                    runCommand("https://github.com/")
                  }
                  className="px-4 py-3 rounded-2xl text-white/70 hover:bg-white/[0.04] cursor-pointer"
                >
                  GitHub
                </Command.Item>

                <Command.Item
                  onSelect={() =>
                    runCommand("https://linkedin.com/")
                  }
                  className="px-4 py-3 rounded-2xl text-white/70 hover:bg-white/[0.04] cursor-pointer"
                >
                  LinkedIn
                </Command.Item>

                <Command.Item
                  onSelect={() =>
                    runCommand("/resume.pdf")
                  }
                  className="px-4 py-3 rounded-2xl text-white/70 hover:bg-white/[0.04] cursor-pointer"
                >
                  Resume
                </Command.Item>

              </Command.Group>

            </Command.List>
          </Command>

          {/* Close Area */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 -z-10"
          />
        </div>
      )}
    </>
  );
}