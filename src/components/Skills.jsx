const skillGroups = [
  {
    title: "IT Support & Operating Systems",
    skills: [
      "Windows operating-system fundamentals",
      "Linux command-line basics",
      "Linux file and directory permissions",
      "User and group permission concepts",
      "Basic operating-system troubleshooting",
      "Command-line navigation and file management",
    ],
  },
  {
    title: "Networking Fundamentals",
    skills: [
      "IPv4 addressing",
      "Subnetting fundamentals",
      "Basic LAN connectivity troubleshooting",
      "VLAN creation and port assignment practice",
      "Cisco Packet Tracer",
      "TCP/IP and OSI model fundamentals",
    ],
  },
  {
    title: "Software Development",
    skills: [
      "JavaScript", "React", "Python", "Java", "HTML5", "CSS3",
      "Tailwind CSS", "Django", "Spring Boot", "REST APIs",
    ],
  },
  {
    title: "Databases & Developer Tools",
    skills: ["PostgreSQL", "MySQL", "Git", "GitHub", "VS Code", "IntelliJ IDEA"],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Technical Skills</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Technical skills and tools</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Skills reflect my current coursework, practical labs and project experience.
          I am continuing to strengthen them through hands-on practice and independent learning.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
