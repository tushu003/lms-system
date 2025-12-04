import React from "react";

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
  mode: string[]; // Virtual / In-person
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
  // add more tutors as needed
];

export default function TutorList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-start gap-8">
          {/* Left Filters column */}
          <aside className="w-56 bg-white shadow-sm rounded-2xl p-6 top-8 h-[540px]">
            <h3 className="text-xl font-semibold mb-4">Filters</h3>

            {[
              "Subject",
              "Session Type",
              "Grade Level",
              "Price Range",
              "Minimum Rating",
            ].map((label) => (
              <div key={label} className="mb-4">
                <label className="block text-sm text-slate-600 mb-2">{label}</label>
                <button className="w-full text-left bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg text-sm">
                  All {label}s
                </button>
              </div>
            ))}

            <button className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-violet-500 text-white py-2 rounded-lg font-medium">
              Apply Filter
            </button>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Available Tutors</h2>
                <p className="text-sm text-slate-500 mt-1">Showing {tutors.length} of {tutors.length} tutors</p>
              </div>

              <div>
                <button className="text-sm bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm">Sort by Rating</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tutors.map((t) => (
                
               <div key={t.id} className="bg-white rounded-2xl shadow-md p-6 ">
                <div className="flex gap-6">
                  <div className="w-24 h-24 rounded-lg bg-slate-200 flex-shrink-0 flex items-center justify-center text-slate-500">
                    {/* avatar placeholder */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="4" fill="#E6E7EE" />
                    </svg>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">{t.name}</h3>
                        <p className="text-sm text-slate-500">{t.title}</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-amber-500">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/></svg>
                          <span className="font-semibold text-slate-800">{t.rating}</span>
                          <span className="text-slate-400">({t.reviews} reviews)</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{t.sessions} sessions <br /> completed</p>
                      </div>

                      <div className="text-right">
                        <div className="text-indigo-600 font-semibold">{t.price}</div>
                      </div>
                    </div>

                    
                  </div>
                </div>
                <div className="mt-3">
                    Subjects:
                      <div className="flex gap-2 flex-wrap mt-2">
                        
                        {t.subjects.map((s) => (
                          <span key={s} className="text-xs text-[#4338CA] border border-slate-100 px-2 py-1 rounded-full bg-[#EEF2FF]">{s}</span>
                        ))}
                      </div>

                      <p className="text-sm text-slate-500 mt-3">
                        {t.title} with experience and passion for teaching. Makes concepts simple and engaging.
                      </p>

                      <div className="my-3 mb-2 items-center gap-3 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <span className="">{t.location}</span>
                        </div>

                        <div className="flex items-center my-2 gap-2">
                          {t.mode.includes('Virtual') && <span className="text-xs px-2 py-1 bg-[#EFF6FF] rounded-lg text-[#1D4ED8]">Virtual</span>}
                          {t.mode.includes('In-person') && <span className="text-xs px-2 py-1 bg-[#F0FDF4] rounded-lg text-[#16A34A]">In-person</span>}
                        </div>

                        <div className="ml-auto text-sm">
                          <div className="text-[#16A34A]">Next availability: <span className="font-semibold text-slate-800">{t.availability}</span></div>
                        </div>
                      </div>

                      <div className="mt-5 flex gap-3">
                        <button className="w-full px-2 py-2 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white font-medium">Book Session</button>
                        <button className="w-full px-2 py-2 rounded-lg border border-slate-200 bg-white">View Profile</button>
                      </div>
                    </div>
               </div>
                
              ))}
            </div>
              <button className="btn bg-gradient-to-r from-[#4F46E5] to-[#9333EA] hover:bg-[#225bc6] px-4 py-2 rounded-[16px] text-white lg:ml-83 mt-8 mb-8">Load More Tutors →</button>
          </main>
        </div>
      </div>
    </div>
  );
}
