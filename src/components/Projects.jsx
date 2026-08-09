import parkingDashboard from "../assets/parking-dashboard.png";
import parkingVehicles from "../assets/parking-vehicles.png";

const projects = [
  {
    title: "Smart Urban Parking Assistance System",
    description:
      "A full-stack web application designed to help users manage vehicles and interact with an urban parking system. The application includes authentication, a user dashboard, vehicle management, parking zones, and parking sessions.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
    ],
    images: [parkingDashboard, parkingVehicles],
    github: "https://github.com/nsgilbert23",
  },
  {
    title: "Smart Livestock Marketplace & Monitoring System",
    description:
      "A web application for livestock marketplace and monitoring functionality. I contributed to the frontend development using React and JavaScript, focusing on responsive and user-friendly interfaces.",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    images: [],
    github: "https://github.com/nsgilbert23",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="animate-fade-up mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Things I've built
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Here are some of the applications I've worked on while developing
            my software engineering and frontend development skills.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12">

          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`animate-fade-up group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                index === 1 ? "animation-delay-200" : ""
              }`}
            >

              {/* Project screenshots */}
              {project.images.length > 0 && (
                <div className="grid gap-4 p-4 md:grid-cols-2">

                  {project.images.map((image, imageIndex) => (
                    <div
                      key={image}
                      className="group/image overflow-hidden rounded-xl border border-slate-800 bg-slate-950"
                    >
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${imageIndex + 1}`}
                        className="h-64 w-full object-cover transition duration-700 ease-out group-hover/image:scale-105"
                      />
                    </div>
                  ))}

                </div>
              )}

              {/* Project information */}
              <div className="p-7">

                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                  <div>
                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-cyan-400">
                      {index === 0
                        ? "Featured Project"
                        : "Frontend Project"}
                    </p>

                    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-50">
                      {project.title}
                    </h3>
                  </div>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
                  >
                    View on GitHub
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                </div>

                {/* Description */}
                <p className="mt-5 max-w-4xl leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="cursor-default rounded-full bg-slate-800 px-3 py-1.5 text-sm text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/10 hover:text-cyan-200"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;