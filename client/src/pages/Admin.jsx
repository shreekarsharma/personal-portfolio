import { useEffect, useState } from "react";
import api from "../services/api";
import { FaTrash } from "react-icons/fa";
function Admin() {
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    githubUrl: "",
    liveUrl: "",
    image: "",
    featured: false,
  });

  const fetchProjects = async () => {
    try {
      const { data } = await api.get("/projects");
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/projects", {
        ...formData,
        technologies: formData.technologies
          .split(",")
          .map((tech) => tech.trim()),
      });

      setFormData({
        title: "",
        description: "",
        technologies: "",
        githubUrl: "",
        liveUrl: "",
        image: "",
        featured: false,
      });

      fetchProjects();
      setMessage("Project added successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Failed to add project.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/projects/${id}`);

      fetchProjects();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mb-8 text-4xl font-bold">Admin Dashboard</h1>
      {message && (
        <p className="mb-4 rounded bg-green-100 p-3 text-green-700">
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="mb-12 grid gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded border p-3"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded border p-3"
          required
        />

        <input
          type="text"
          name="technologies"
          placeholder="React, Node.js, MongoDB"
          value={formData.technologies}
          onChange={handleChange}
          className="w-full rounded border p-3"
        />

        <input
          type="url"
          name="githubUrl"
          placeholder="GitHub URL"
          value={formData.githubUrl}
          onChange={handleChange}
          className="w-full rounded border p-3"
        />

        <input
          type="url"
          name="liveUrl"
          placeholder="Live URL"
          value={formData.liveUrl}
          onChange={handleChange}
          className="w-full rounded border p-3"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full rounded border p-3"
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
          />
          Featured Project
        </label>

        <button type="submit" className="rounded bg-black px-6 py-3 text-white">
          Add Project
        </button>
      </form>

      <h2 className="mb-4 text-2xl font-semibold">Existing Projects</h2>

      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex items-center justify-between rounded border p-4"
          >
            <div>
              <h3 className="font-semibold">{project.title}</h3>

              <p className="text-sm text-gray-600">{project.description}</p>
            </div>

            <button
              onClick={() => handleDelete(project._id)}
              className="rounded-lg border border-red-200 p-2 text-red-500 transition hover:border-red-500 hover:bg-red-50"
              title="Delete Project"
            >
              <FaTrash size={16} />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Admin;
