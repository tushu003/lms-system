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
    <section className="bg-white pt-14 pb-20 ">
      <div className="max-w-5xl mx-auto px-6">
        {/* Badge */}
        <div className="text-center mb-4">
          <span className="inline-block bg-gradient-to-r from-[#D1FAE5] to-[#CFFAFE] text-[#1E40AF] text-sm font-medium px-3 py-1 rounded-full">
            Our Journey
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] leading-tight">
            Key Milestones in
            <span className="block bg-gradient-to-r from-[#2563EB] to-[#0891B2] bg-clip-text text-transparent">Our Mission</span>
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative ml-6 md:ml-1">
          {timelineData.map((item, index) => (
            <div key={index} className=" md:flex md:items-center md:gap-8 relative">
              {/* Dot */}
              <span className="absolute -left-[11px] md:left-[50%] md:-translate-x-1/2 w-3 h-3 bg-gradient-to-r from-[#A855F7] to-[#6366F1] rounded-full"></span>
              <span className="absolute md:left-[50%] md:-translate-x-1/2 left-[-1px]  h-full w-0.5 bg-gradient-to-t from-[#C7D2FE] to-[#E9D5FF]"></span>

              {/* Left card */}
              {item.side === "left" && (
                <div className=" md:w-1/2 md:pr-10">
                  <div className="flex flex-col items-end border-1 border-[#F3F4F6] px-3 py-4 rounded-xl">
                    <p className="text-sm font-semibold text-[#6366F1]">{item.year}</p>
                    <h3 className="text-lg font-bold text-[#1E293B] mt-1">{item.title}</h3>
                    <p className="text-sm text-[#4B5563] mt-2">{item.description}</p>
                  </div>
                </div>
              )}

              {/* Empty space for alignment */}
              <div className="hidden md:block border border-white md:w-1/2"></div>

              {/* Right card */}
              {item.side === "right" && (
                <div className="md:w-1/2 md:pl-10 md:order-2 order-1">
                  <div className=" border-1 border-[#F3F4F6] px-3 py-4 rounded-xl">
                    <p className="text-sm font-semibold text-[#6366F1]">{item.year}</p>
                    <h3 className="text-lg font-bold text-[#1E293B] mt-1">{item.title}</h3>
                    <p className="text-sm text-[#4B5563] mt-2">{item.description}</p>
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
