import React from "react";

export default function AboutBanner() {
  return (
    <div className="bg-gradient-to-br from-[#312E81] via-[#581C87] to-[#831843] py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm bg-white/10 text-white mb-4">
          Our Story
        </span>

        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Transforming Education,
          <br />
          <span className="block bg-gradient-to-r from-[#FACC15] via-[#F472B6] to-[#60A5FA] bg-clip-text text-transparent">
            One Student at a Time
          </span>
        </h2>

        <p className="text-white/90 my-4">
          Since 2019, we've been on a mission to make quality education
          accessible, <br />
        </p>
      </div>
    </div>
  );
}
