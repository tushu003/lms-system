import React from "react";

export default function TutorBanner() {
  return (
    <div className="bg-gradient-to-br from-[#312E81] via-[#581C87] to-[#831843] py-12">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm bg-white/10 text-white mb-4">
          Expert Tutors
        </span>

        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Find Your Perfect
          <br />
          <span className="block bg-gradient-to-r from-[#FACC15] via-[#F472B6] to-[#60A5FA] bg-clip-text text-transparent">
            Learning Partner
          </span>
        </h2>

        <p className="text-white/90 my-4">
          Browse our directory of qualified tutors and discover the perfect
          match for <br /> your learning style and goals.
        </p>
        <div>
            <input type="search" value="Search by name, subject, or keyword..." className="lg:w-80 mt-4 text-white/80 bg-white/20 text-[12px] py-2 rounded-[8px] px-4" />
        </div>
        
      </div>
    </div>
  );
}
