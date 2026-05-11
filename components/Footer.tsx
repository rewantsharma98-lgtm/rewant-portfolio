export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <div>
          <p className="text-sm text-white/30">
           kai is online
          </p>
        </div>

        {/* Center */}
        <div className="flex items-center gap-2 text-xs text-white/25">

          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          <span>
            Currently building secure backend systems.
          </span>

        </div>

        {/* Right */}
        <div className="flex items-center gap-5 text-sm text-white/35">

          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="mailto:your@email.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>

        </div>
      </div>
    </footer>
  );
}