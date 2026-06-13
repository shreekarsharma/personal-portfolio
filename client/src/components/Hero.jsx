function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-lg">Hi, I'm</p>

        <h1 className="text-5xl font-bold">Shreekar Sharma</h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-slate-300">
          MCA Student and Full-Stack Developer building modern web applications
          with React, Node.js, Express.js, and MongoDB.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-black px-5 py-3 text-white"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border px-5 py-3"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
