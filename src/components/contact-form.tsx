"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
    setLoading(false);
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    // <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-2">
      <div className="w-full max-w-lg bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 backdrop-blur-md border border-indigo-100">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-indigo-600 rounded-full p-3 mb-3 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-4.5m-2.5-2.5l-6.5 4.5-6.5-4.5"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-indigo-700 mb-1 text-center">
            Contact Us
          </h2>
          <p className="text-gray-500 text-center text-base">
            We would love to hear from you! Fill out the form below.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-indigo-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition duration-200 bg-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-indigo-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              placeholder="you@email.com"
              className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition duration-200 bg-white"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-indigo-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
              placeholder="Your phone number"
              className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition duration-200 bg-white"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-indigo-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={4}
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition duration-200 bg-white resize-none"
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className={`w-full py-3 px-4 rounded-lg shadow-md text-base font-bold text-white bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-200 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Please wait...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
        {status && (
          <div
            className={`mt-6 text-center rounded-lg py-3 px-4 font-semibold shadow-sm ${
              status.includes("success")
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {status}
          </div>
        )}
      </div>
    // </div>
  );
}
