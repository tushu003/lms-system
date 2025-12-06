"use client";
import React, { useState } from "react";
import type { JSX } from "react";

type FormState = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactFormSection(): JSX.Element {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function validate() {
    if (!form.fullName.trim()) return "Full name is required.";
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
      return "Please enter a valid email.";
    if (!form.subject) return "Please select a subject.";
    if (!form.message.trim()) return "Message cannot be empty.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);

    // Simulate a network request. In a real app you would POST to an API route like `/api/contact`.
    try {
      await new Promise((res) => setTimeout(res, 900));

      // Optionally store the message in localStorage for demo purposes
      const saved = JSON.parse(localStorage.getItem("contactMessages") || "[]");
      saved.push({ ...form, createdAt: new Date().toISOString() });
      localStorage.setItem("contactMessages", JSON.stringify(saved));

      setSuccess(
        "Your message was sent successfully. We'll get back to you soon!"
      );
      setForm({ fullName: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-block px-2 py-1 rounded-full bg-pink-50 text-[#6B21A8] text-sm font-medium">
            Contact Us
          </div>
          <h2 className="mt-6 text-4xl md:text-4xl font-extrabold text-[#1E293B]">
            We are Here to <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#DB2777]">
              Help You Succeed
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Card */}
          <div className="bg-white max-w-xl rounded-2xl p-6 md:p-8">
            <h3 className="text-xl text-[#1E293B] font-semibold mb-4">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-600 mb-2">
                  Full Name *
                </label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full border-1 border-[#D1D5DB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-600 mb-2">
                  Email Address *
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border-1 border-[#D1D5DB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-600 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border-1 border-[#D1D5DB] rounded-lg px-3 py-2 text-sm bg-white focus:outline-none"
                >
                  <option value="">Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-600 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full border-1 border-[#D1D5DB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {error && <div className="text-sm text-red-600">{error}</div>}
              {success && (
                <div className="text-sm text-green-600">{success}</div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-medium disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 h-[439px]">
            <h3 className="text-xl text-[#1E293B] font-semibold mb-4">Contact Information</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg mb-3 flex items-center justify-center bg-gradient-to-r from-[#DB2777] to-[#A855F7] text-white">
                  {/* mail icon */}
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8.5l9 6 9-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">Email Us</div>
                  <div className="text-sm text-slate-500">
                    support@evolvetutoring.ai
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92V20a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 2.11 8.81 19.86 19.86 0 0 1-.96 0 2 2 0 0 1 1 2h3.09a2 2 0 0 1 2 1.72 12.34 12.34 0 0 0 .7 3.21 2 2 0 0 1-.45 2.12L5.7 10.7a16 16 0 0 0 6.6 6.6l2.66-1.65a2 2 0 0 1 2.12-.45 12.34 12.34 0 0 0 3.21.7A2 2 0 0 1 22 16.92z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">Call Us</div>
                  <div className="text-sm text-slate-500">
                    (707)200-8004
                    <br />
                    <span className="text-xs text-slate-400">
                      Mon - Fri, 8 AM - 8 PM
                    </span>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#10B981] to-[#22C55E]">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">Visit Us</div>
                  <div className="text-sm text-slate-500">
                    123 Education Street
                    <br />
                    Learning City, LC 12345
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#F97316] to-[#EF4444]">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 7V3h8v4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="3"
                      y="7"
                      width="18"
                      height="13"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">Office Hours</div>
                  <div className="text-sm text-slate-500">
                    Mon - Fri: 8 AM - 8 PM
                    <br />
                    Sat: 9 AM - 5 PM
                    <br />
                    Sun: Closed
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
