import React from "react";

export default function SuccessStory() {
  return (
    <div className="bg-gradient-to-r from-[#F97316] via-[#EC4899] to-[#9333EA] py-12 px-auto">
      <span className="bg-white/20 text-white lg:ml-140 mb-2 inline-flex items-center justify-center px-2 py-1 rounded-full text-center text-sm">
        Ready to Transform?
      </span>
      <h2 className="text-4xl font-bold text-white text-center">
        Your Success Story <br/> Starts Today
      </h2>
      <p className="text-center text-white/90 my-1">
        Join thousands of students who have already transformed their academic <br />
        journey. Your perfect tutor is just one click away.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <button className="btn bg-white text-[#003466] px-3 py-2 rounded-lg">Find Your tutor Now →</button>
        <button className=" bg-white/20 text-[#003466] px-3 py-2 rounded-lg">Become A Tutor</button>
      </div>
    </div>
  );
}
