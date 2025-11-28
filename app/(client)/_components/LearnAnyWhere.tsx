import React from "react";

export default function LearnAnywhere() {
  return (
    <section className="w-full">
      <div className=" py-10 my-6 rounded-t-lg bg-gradient-to-r from-[#111827] to-[#1E293B]">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-white text-xl md:text-2xl font-semibold">
            Learn Anywhere, Anytime
          </h2>
          <p className="mt-1 text-sm text-[#D1D5DB] max-w-2xl mx-auto">
            Start lessons from any device and enjoy smooth, modern learning
            access.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {/* Card 1 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-r from-[#003466] to-[#1271CD] text-white rounded-md flex items-center justify-center text-xl">
              💻
            </div>
            <h3 className="text-sm font-semibold text-white">
              Desktop Learning
            </h3>
            <p className="text-xs text-white/70">
              Professional access on your laptop.
            </p>
          </article>

          {/* Card 2 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-r from-[#003466] to-[#1271CD] text-white rounded-md flex items-center justify-center text-xl">
              🎧
            </div>
            <h3 className="text-sm font-semibold text-white">Tablet Ready</h3>
            <p className="text-xs text-white/70">
              Learn effortlessly from your tablet.
            </p>
          </article>

          {/* Card 3 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-r from-[#003466] to-[#1271CD] text-white rounded-md flex items-center justify-center text-xl">
              📱
            </div>
            <h3 className="text-sm font-semibold text-white">Mobile First</h3>
            <p className="text-xs text-white/70">
              Lessons built for mobile on the go.
            </p>
          </article>

          {/* Card 4 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-r from-[#003466] to-[#1271CD] text-white rounded-md flex items-center justify-center text-xl">
              📶
            </div>
            <h3 className="text-sm font-semibold text-white">Mobile Pro</h3>
            <p className="text-xs text-[#D1D5DB]">
              Learn anywhere with full flexibility.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
