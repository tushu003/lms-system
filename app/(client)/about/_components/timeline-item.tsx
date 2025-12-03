import React from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
}

const timelineData: TimelineItem[] = [
  {
    year: "2020",
    title: "Founded",
    description: "Started with a vision to make quality education accessible to everyone",
    side: "left",
  },
  {
    year: "2021",
    title: "First 1000 Students",
    description: "Reached our first milestone of helping 1000 students achieve their goals",
    side: "right",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded to serve students in over 50 countries worldwide",
    side: "left",
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Launched AI‑powered matching system for personalized learning",
    side: "right",
  },
  {
    year: "2024",
    title: "25K+ Success Stories",
    description: "Celebrated over 25,000 students who transformed their academic performance",
    side: "left",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
            Our Journey
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Key Milestones in
            <span className="block text-blue-600">Our Mission</span>
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-200 ml-6 md:ml-1">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-16 md:flex md:items-center md:gap-10 relative">
              {/* Dot */}
              <span className="absolute -left-[11px] md:left-[50%] md:-translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full"></span>

              {/* Left card */}
              {item.side === "left" && (
                <div className="md:w-1/2 md:pr-10">
                  <div className="bg-white shadow-sm border border-slate-100 p-6 rounded-xl">
                    <p className="text-sm font-semibold text-blue-600">{item.year}</p>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 mt-2">{item.description}</p>
                  </div>
                </div>
              )}

              {/* Empty space for alignment */}
              <div className="hidden md:block md:w-1/2"></div>

              {/* Right card */}
              {item.side === "right" && (
                <div className="md:w-1/2 md:pl-10 md:order-2 order-1">
                  <div className="bg-white shadow-sm border border-slate-100 p-6 rounded-xl">
                    <p className="text-sm font-semibold text-blue-600">{item.year}</p>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 mt-2">{item.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
