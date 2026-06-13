function Skills() {
  const skillGroups = {
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "Spring Boot",
    ],
    Database: [
      "MongoDB",
      "MySQL",
    ],
    Tools: [
      "Git",
      "GitHub",
      "Postman",
      "Redux Toolkit",
    ],
  };

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <h2 className="mb-10 text-4xl font-bold">
        Skills
      </h2>

      {Object.entries(skillGroups).map(
        ([category, skills]) => (
          <div
            key={category}
            className="mb-8"
          >
            <h3 className="mb-4 text-2xl font-semibold">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-4 py-2 dark:border-slate-600 dark:bg-slate-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )
      )}
    </section>
  );
}

export default Skills;