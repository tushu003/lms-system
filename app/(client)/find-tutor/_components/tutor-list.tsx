"use client";
import React, { useState, useEffect } from "react";

type Tutor = {
  id: number;
  name: string;
  title: string;
  price: string;
  rating: string;
  reviews: number;
  sessions: number;
  subjects: string[];
  location: string;
  availability: string;
  mode: string[];
};

const tutors: Tutor[] = [
  {
    id: 1,
    name: "Dr. Jessica Miller",
    title: "PhD in Mathematics",
    price: "$50-75/hr",
    rating: "4.9",
    reviews: 127,
    sessions: 350,
    subjects: ["Mathematics", "Algebra", "Calculus"],
    location: "New York, NY",
    availability: "Today",
    mode: ["Virtual", "In-person"],
  },

  {
    id: 2,
    name: "Prof. David Kim",
    title: "Former University Professor",
    price: "$45-65/hr",
    rating: "4.8",
    reviews: 98,
    sessions: 280,
    subjects: ["Physics", "Chemistry", "Biology"],
    location: "Virtual Only",
    availability: "Tomorrow",
    mode: ["Virtual"],
  },

  // Repeated entries removed (optional improvement)
];

export default function TutorList() {
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    subject: "",
    date: "",
    time: "",
  });

  // ESC closes modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedTutor(null);
    if (selectedTutor) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [selectedTutor]);

  function confirmBooking(t: Tutor) {
    console.log("Booking confirmed for:", t);
    setSelectedTutor(null);
    setBookingForm({ name: "", subject: "", date: "", time: "" });
  }

  function handleFormChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setBookingForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F8FAFC] to-[#EFF6FF] py-10">

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Layout → Mobile: stacked | Desktop: sidebar + content */}
        <div className="flex flex-col lg:flex-row items-start gap-6">

          {/* Sidebar — Responsive */}
          <aside className="w-full lg:w-64 bg-white rounded-2xl p-5 shadow-sm lg:sticky top-6">
            <h3 className="text-xl font-semibold mb-4">Filters</h3>

            {[
              "Subject",
              "Session Type",
              "Grade Level",
              "Price Range",
              "Minimum Rating",
            ].map((label) => (
              <div key={label} className="mb-4">
                <label className="block text-sm text-slate-600 mb-2">
                  {label}
                </label>
                <button className="w-full text-left border border-[#D1D5DB] px-3 py-2 rounded-lg text-sm bg-white">
                  All {label}s
                </button>
              </div>
            ))}

            <button className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-violet-500 text-white py-2 rounded-lg font-medium">
              Apply Filter
            </button>
          </aside>

          {/* Main Content */}
          <main className="flex-1 w-full">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Available Tutors</h2>
                <p className="text-sm text-slate-500">
                  Showing {tutors.length} tutors
                </p>
              </div>

              <button className="text-sm bg-white border px-4 py-2 rounded-lg">
                Sort by Rating
              </button>
            </div>

            {/* Tutor Cards — Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {tutors.map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  className="bg-white rounded-2xl p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-lg bg-slate-200 flex items-center justify-center">
                      <svg width="30" height="30">
                        <rect width="30" height="30" rx="4" fill="#E5E7EB" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{t.name}</h3>
                      <p className="text-sm text-slate-500">{t.title}</p>

                      <div className="flex items-center gap-2 text-sm text-amber-500 mt-2">
                        ★ {t.rating}
                        <span className="text-slate-400">
                          ({t.reviews} reviews)
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 mt-1">
                        {t.sessions} sessions completed
                      </p>
                    </div>

                    <div className="font-semibold text-indigo-600">{t.price}</div>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm text-slate-500">Subjects:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {t.subjects.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-1 text-xs bg-[#EEF2FF] text-[#4338CA] rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-slate-500 mt-3">
                      {t.title} with experience in simplifying concepts.
                    </p>

                    <div className="mt-4 text-sm text-slate-500 space-y-2">
                      <div className="flex items-center gap-2">
                        📍 {t.location}
                      </div>

                      <div className="flex items-center gap-2">
                        {t.mode.includes("Virtual") && (
                          <span className="text-xs px-2 py-1 bg-[#EFF6FF] text-[#1D4ED8] rounded-lg">
                            Virtual
                          </span>
                        )}
                        {t.mode.includes("In-person") && (
                          <span className="text-xs px-2 py-1 bg-[#F0FDF4] text-[#16A34A] rounded-lg">
                            In-person
                          </span>
                        )}
                      </div>

                      <div>
                        <span className="text-[#16A34A] font-medium">
                          Next availability:
                        </span>{" "}
                        <span className="font-semibold">{t.availability}</span>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-5">
                      <button
                        onClick={() => setSelectedTutor(t)}
                        className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white font-medium"
                      >
                        Book Session
                      </button>
                      <button className="flex-1 py-2 rounded-lg border bg-white">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button className="mt-8 bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white px-5 py-2 rounded-lg">
                Load More Tutors →
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* MODAL */}
      {selectedTutor && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-lg"
              onClick={() => setSelectedTutor(null)}
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">
              Book a session with{" "}
              <span className="text-indigo-600">{selectedTutor.name}</span>
            </h2>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium">Your Name</label>
                <input
                  name="name"
                  value={bookingForm.name}
                  onChange={handleFormChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-medium">Subject</label>
                <select
                  name="subject"
                  value={bookingForm.subject}
                  onChange={handleFormChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg"
                >
                  <option value="">Select Subject</option>
                  {selectedTutor.subjects.map((sub) => (
                    <option key={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={bookingForm.date}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={bookingForm.time}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => confirmBooking(selectedTutor)}
              className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white font-semibold"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
