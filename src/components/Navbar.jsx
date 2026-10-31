import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-white transition hover:text-cyan-400"
        >
          Gilbert<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          <a
            href="#about"
            className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#labs"
            className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
          >
            Labs
          </a>

          <a
            href="#education"
            className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
          >
            Education
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
          >
            Contact
          </a>

          {/* CV */}
          <a
            href="/CV_Gilbert_Nsengimana.pdf"
            download="Gilbert_Nsengimana_CV.pdf"
            className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-400 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:text-slate-950"
          >
            CV
          </a>

          {/* Hire Me */}
          <a
            href="mailto:nsengimanagilbert599@gmail.com"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            Hire Me
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-slate-700 p-2 text-slate-300 transition duration-300 hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 px-6 transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[500px] py-5 opacity-100"
            : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5">

          <a
            href="#about"
            onClick={closeMenu}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#labs"
            onClick={closeMenu}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Labs
          </a>

          <a
            href="#education"
            onClick={closeMenu}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Education
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Contact
          </a>

          {/* Mobile CV */}
          <a
            href="/CV_Gilbert_Nsengimana.pdf"
            download="Gilbert_Nsengimana_CV.pdf"
            onClick={closeMenu}
            className="rounded-lg border border-cyan-400/40 px-4 py-3 text-center font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-950"
          >
            Download CV
          </a>

          {/* Mobile Hire Me */}
          <a
            href="mailto:nsengimanagilbert599@gmail.com"
            onClick={closeMenu}
            className="rounded-lg bg-cyan-500 px-4 py-3 text-center font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400"
          >
            Hire Me
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;