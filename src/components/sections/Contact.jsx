import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setSending(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-700 p-6 rounded border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
      <h2 className="text-2xl mb-6 text-green-400 font-bold">Get in Touch</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-bold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 border-2 border-gray-600 text-white rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="block mb-2 font-bold">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 border-2 border-gray-600 text-white rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-bold">Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 border-2 border-gray-600 text-white rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:border-blue-500 focus:outline-none transition-all"
          />
        </div>

        <div>
          <label className="block mb-2 font-bold">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 bg-gray-800 border-2 border-gray-600 text-white rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:border-blue-500 focus:outline-none transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="bg-blue-600 px-8 py-3 rounded border-2 border-blue-700 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:bg-blue-700 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] active:translate-x-[2px] active:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};