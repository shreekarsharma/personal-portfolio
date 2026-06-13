function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <img
        src={project.image}
        alt={project.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="mb-3 text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="mb-4 text-gray-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border px-4 py-2"
          >
            GitHub
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;