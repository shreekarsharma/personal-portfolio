function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 border-b bg-white text-black dark:border-slate-700 dark:bg-slate-900 dark:text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">Shreekar</h1>

        <ul className="flex gap-6">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded border px-3 py-2"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
