import React from "react";

export default function OurImpact() {
  return (
    <section className="w-full">
      <div className="relative py-10 rounded-t-lg bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#DB2777]">
        {/* Heading */}
        <div className="text-center mt-4 mb-3">
          <span className="inline-block bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-full">
            Our Impact
          </span>
        </div>
        <div className="text-center mb-6">
          <h2 className="text-white text-3xl font-bold">
            Transforming Lives <br /> Through Education
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {/* Card 1 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center gap-1">
            <div className="text-3xl font-bold text-white rounded-md  items-center justify-center">
              20+
            </div>
            <p className="text-xs text-white/70">Students Helped</p>
          </article>
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center gap-1">
            <div className="text-3xl font-bold text-white rounded-md  items-center justify-center">
              1+
            </div>
            <p className="text-xs text-white/70">Expert Tutors</p>
          </article>
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center gap-1">
            <div className="text-3xl font-bold text-white rounded-md  items-center justify-center">
              98+
            </div>
            <p className="text-xs text-white/70">Success Rate</p>
          </article>
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center gap-1">
            <div className="text-3xl font-bold text-white rounded-md  items-center justify-center">
              5+
            </div>
            <p className="text-xs text-white/70">Coutries Served</p>
          </article>
        </div>
      </div>
    </section>
  );
}
