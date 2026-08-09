function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          About Me
        </p>

        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Building useful things with code.
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-400">
          <p>
            I'm a Software Engineering student at the University of Rwanda
            with a strong interest in frontend development and building
            practical software solutions.
          </p>

          <p>
            I work primarily with React, JavaScript, HTML, CSS, and Tailwind
            CSS, while also having experience with Python, Django,
            REST APIs, and PostgreSQL.
          </p>

          <p>
            I enjoy solving problems, learning new technologies, and turning
            requirements into responsive and user-friendly interfaces.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;