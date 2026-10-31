function Education() {
  const education = [
    {
      period: "2024 — 2028 (expected)",
      qualification: "Bachelor of Science in Computer Engineering",
      institution: "University of Rwanda",
      detail: "Currently studying computer engineering, with learning across software development, computer systems, databases and networking.",
    },
    {
      period: "2020 — 2023",
      qualification: "Advanced Level — Mathematics, Physics and Computer Science (MPC)",
      institution: "Kayonza Modern Secondary School",
      detail: "",
    },
    {
      period: "2016 — 2019",
      qualification: "Ordinary Level",
      institution: "ES Bugarama",
      detail: "",
    },
    {
      period: "2010 — 2016",
      qualification: "Primary Education",
      institution: "Rugarama Primary School",
      detail: "",
    },
  ];

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Education</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">My academic journey</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.qualification} className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
              <p className="text-sm text-cyan-400">{item.period}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{item.qualification}</h3>
              <p className="mt-2 text-lg text-slate-300">{item.institution}</p>
              {item.detail && <p className="mt-4 leading-7 text-slate-400">{item.detail}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
