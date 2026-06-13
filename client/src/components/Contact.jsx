import { useState } from "react";
import api from "../services/api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccess("");

      await api.post("/messages", formData);

      setSuccess("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setSuccess(
        "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <h2 className="mb-8 text-4xl font-bold">
        Contact
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl space-y-4"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full rounded-lg border p-3 bg-white text-black dark:border-slate-600 dark:bg-slate-800 dark:text-white"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full rounded-lg border p-3 bg-white text-black dark:border-slate-600 dark:bg-slate-800 dark:text-white"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Your Message"
          className="w-full rounded-lg border p-3 bg-white text-black dark:border-slate-600 dark:bg-slate-800 dark:text-white"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-black px-6 py-3 text-white"
        >
          {loading
            ? "Sending..."
            : "Send Message"}
        </button>

        {success && (
          <p className="mt-4">
            {success}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;