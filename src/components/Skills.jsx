const skills = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Responsive Design",
  "Python",
  "Django",
  "Django REST Framework",
  "PostgreSQL",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Skills
        </p>

        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Technologies I work with
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-950 px-5 py-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;