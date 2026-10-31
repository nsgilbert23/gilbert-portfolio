function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Contact</p>
        <h2 className="mt-2 text-4xl font-bold">Let's connect.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I'm interested in Computer Engineering internships and opportunities
          related to networking, IT support and software development. If you're
          looking for a curious student who enjoys learning through practical work,
          I'd be glad to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="mailto:nsengimanagilbert599@gmail.com" className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">Email Me</a>
          <a href="https://github.com/nsgilbert23" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400">GitHub</a>
          <a href="https://gilbert-portfolio-mzba.vercel.app" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400">Portfolio URL</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
