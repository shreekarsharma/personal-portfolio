import { useEffect, useState } from "react";
import api from "../services/api";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get("/projects");
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  if (loading) {
    return (
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <h2 className="mb-10 text-4xl font-bold">
          Projects
        </h2>

        <p>Loading projects...</p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <h2 className="mb-12 text-center text-4xl font-bold">
        Projects
      </h2>

      {featuredProjects.length > 0 && (
        <>
          <h3 className="mb-8 text-2xl font-semibold">
            Featured Projects
          </h3>

          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
              />
            ))}
          </div>
        </>
      )}

      {otherProjects.length > 0 && (
        <>
          <h3 className="mb-8 text-2xl font-semibold">
            Other Projects
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Projects;