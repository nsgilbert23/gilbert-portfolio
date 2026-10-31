const labs = [
  {
    title: "VLAN Configuration — Cisco Packet Tracer",
    description:
      "Practised creating VLANs and assigning end devices to separate VLAN networks, then checked connectivity as part of a networking lab.",
    tools: ["Cisco Packet Tracer", "Switching", "VLANs", "IPv4"],
  },
  {
    title: "Linux File Permissions Practice",
    description:
      "Worked through Linux command-line exercises involving file permissions and access control.",
    tools: ["Linux", "Terminal", "File permissions"],
  },
  {
    title: "Telco Customer Churn Analysis",
    description:
      "Completed a data analysis lab using a customer churn dataset, working through the dataset and documenting the analysis in a notebook.",
    tools: ["Python", "Jupyter Notebook", "Data analysis"],
  },
];

function Labs() {
  return (
    <section id="labs" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Practical Learning</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Labs and technical practice</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Alongside software projects, I use guided labs and coursework to build
          practical foundations in networking, operating systems and data.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {labs.map((lab) => (
            <article key={lab.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-lg font-semibold text-white">{lab.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{lab.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {lab.tools.map((tool) => (
                  <span key={tool} className="rounded-full bg-slate-800 px-3 py-1.5 text-xs text-cyan-300">{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Labs;
