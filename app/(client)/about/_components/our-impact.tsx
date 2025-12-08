import React from "react";

export default function OurImpact() {
  return (
    <section className="w-full">
      <div className="relative py-10 sm:py-12 rounded-t-lg bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#DB2777]">
        
        {/* Heading */}
        <div className="text-center mt-2 sm:mt-4 mb-3">
          <span className="inline-block bg-white/10 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full">
            Our Impact
          </span>
        </div>

        <div className="text-center mb-6 px-4">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Transforming Lives <br /> Through Education
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto px-4 grid 
          lg:grid-cols-4 
          grid-cols-2 
          md:grid-cols-4 
          gap-4 sm:gap-5 md:gap-6">

          {/* Card 1 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-1">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              20+
            </div>
            <p className="text-xs sm:text-sm text-white/70">Students Helped</p>
          </article>

          {/* Card 2 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-1">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              1+
            </div>
            <p className="text-xs sm:text-sm text-white/70">Expert Tutors</p>
          </article>

          {/* Card 3 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-1">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              98+
            </div>
            <p className="text-xs sm:text-sm text-white/70">Success Rate</p>
          </article>

          {/* Card 4 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-1">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              5+
            </div>
            <p className="text-xs sm:text-sm text-white/70">Countries Served</p>
          </article>
        </div>
      </div>
    </section>
  );
}
