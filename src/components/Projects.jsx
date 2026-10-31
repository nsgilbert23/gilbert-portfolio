import parkingDashboard from "../assets/parking-dashboard.png";
import parkingVehicles from "../assets/parking-vehicles.png";

const projects = [
  {
    title: "Smart Urban Parking Assistance System",
    category: "Academic full-stack project",
    description:
      "A web application designed to support vehicle and parking management. The project includes a React interface with dashboard and vehicle-management screens, backed by a Django REST API and PostgreSQL.",
    contribution:
      "Worked on the frontend experience and connected application features with backend API functionality as part of the academic project.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Django REST Framework", "PostgreSQL"],
    images: [parkingDashboard, parkingVehicles],
    link: "https://github.com/nsgilbert23/smart-urban-parking-assistance-system",
    linkLabel: "View project repository",
  },
  {
    title: "Smart Livestock Marketplace & Monitoring System",
    category: "Academic group project",
    description:
      "A web application concept combining livestock marketplace features with monitoring functionality.",
    contribution:
      "Contributed to frontend development using React and JavaScript, with attention to responsive layouts and a user-friendly interface.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    images: [],
    link: "https://github.com/hubertnshuti/livestock-marketplace",
    linkLabel: "View project repository",
  },
  {
    title: "SyncSphere",
    category: "Personal / collaborative project — in development",
    description:
      "A collaboration application with channel-based real-time chat, task management and invitation links.",
    contribution:
      "Working with a React frontend and Spring Boot backend, including JWT-based authentication and STOMP/SockJS messaging.",
    technologies: ["React", "Spring Boot", "Java", "JWT", "STOMP", "SockJS"],
    images: [],
    link: "https://github.com/BelyseU/SyncSphere",
    linkLabel: "View repository",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Selected Work</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Projects I've worked on</h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            A selection of academic and collaborative projects that show how
            I apply software development concepts to practical problems.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <article key={project.title} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
              {project.images.length > 0 && (
                <div className="grid gap-4 p-4 md:grid-cols-2">
                  {project.images.map((image, imageIndex) => (
                    <div key={image} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                      <img src={image} alt={`${project.title} interface screenshot ${imageIndex + 1}`} loading="lazy" className="h-64 w-full object-cover transition duration-700 group-hover:scale-[1.02]" />
                    </div>
                  ))}
                </div>
              )}

              <div className="p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-cyan-400">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400">
                    {project.linkLabel} <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <p className="mt-5 max-w-4xl leading-7 text-slate-400">{project.description}</p>
                <p className="mt-3 max-w-4xl leading-7 text-slate-400"><span className="font-semibold text-slate-200">My contribution: </span>{project.contribution}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full bg-slate-800 px-3 py-1.5 text-sm text-cyan-300">{technology}</span>
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
