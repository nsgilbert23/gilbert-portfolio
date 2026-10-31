import nsg from "../assets/IMG-20241021-WA0002.jpg";

function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center px-6 pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="animate-fade-up mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Computer Engineering Student
          </p>

          <h1 className="animate-fade-up animation-delay-200 text-5xl font-bold leading-tight sm:text-6xl">
            Hi, I'm Gilbert
            <span className="block text-cyan-400">I build, connect & solve.</span>
          </h1>

          <p className="animate-fade-up animation-delay-400 mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I'm a Computer Engineering student at the University of Rwanda,
            interested in software development, computer networks and IT support.
            I enjoy turning what I learn into practical projects and hands-on labs.
          </p>

          <div className="animate-fade-up animation-delay-600 mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400">
              Explore My Work
            </a>
            <a href="https://github.com/nsgilbert23" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400">
              GitHub
            </a>
            <a href="/CV_Gilbert_Nsengimana.pdf" download="Gilbert_Nsengimana_CV.pdf" className="rounded-lg border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-400 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950">
              Download CV
            </a>
          </div>
          <p className="mt-7 text-sm text-slate-500">
            Open to Computer Engineering, IT Support and Networking internship opportunities.
          </p>
        </div>

        <div className="flex justify-center animate-fade-in">
          <div className="animate-float h-64 w-64 overflow-hidden rounded-full border-4 border-cyan-400/30 bg-cyan-400/5 shadow-2xl shadow-cyan-500/10 sm:h-80 sm:w-80">
            <img src={nsg} alt="Portrait of Gilbert Nsengimana" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
