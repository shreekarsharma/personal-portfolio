function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 text-4xl font-bold">
        Experience
      </h2>

      <div className="rounded-xl border p-6">
        <h3 className="text-2xl font-semibold">
          GeeksforGeeks
        </h3>

        <p className="mb-4 text-gray-500">
          MERN Full Stack Web Development
          Internship & Training Program
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Completed a 10-week MERN Full
            Stack Web Development program.
          </li>

          <li>
            Built applications using React,
            Node.js, Express.js and MongoDB.
          </li>

          <li>
            Worked with REST APIs,
            authentication and database
            operations.
          </li>

          <li>
            Used Git and GitHub for version
            control.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;