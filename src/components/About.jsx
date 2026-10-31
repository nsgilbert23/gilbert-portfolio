function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">About Me</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Curious about how technology works.</h2>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-400">
          <p>
            I'm a Bachelor of Science in Computer Engineering student at the
            University of Rwanda, expected to graduate in 2028. I am building
            a foundation across software development, networking and IT support.
          </p>
          <p>
            On the software side, I have worked with React, JavaScript, Python,
            Django, Spring Boot and relational databases through academic and
            personal projects. I also practise networking and system fundamentals
            through Packet Tracer and Linux labs.
          </p>
          <p>
            I enjoy troubleshooting, learning by building, and collaborating
            with others to create practical technology solutions. I am currently
            looking for an internship where I can contribute, learn from
            experienced professionals and strengthen my engineering skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
