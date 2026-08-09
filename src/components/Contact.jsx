function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Contact
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          Let's build something useful.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I'm open to frontend development opportunities, freelance projects,
          collaborations, and opportunities to grow as a software engineer.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:nsengimanagilbert599@gmail.com"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Email Me
          </a>

          <a
            href="https://github.com/nsgilbert23"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;