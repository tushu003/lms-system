import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
// import { IoMdNotificationsOutline } from "react-icons/io";

export default function StudentBanner() {
  return (
    <div className="bg-gradient-to-br from-[#312E81] via-[#581C87] to-[#831843] py-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        <div className="max-w-3xl ">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm bg-white/10 text-white mb-4">
            Student Portal
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Welcome Back,
            <br />
            <span className="block bg-gradient-to-r from-[#FACC15] to-[#F472B6] bg-clip-text text-transparent">
              Sarah!
            </span>
          </h2>

          <p className="text-white/90 my-4">
            Here&apos;s your learning overview and upcoming sessions.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-white">
            <IoMdNotificationsOutline size={32}/>
          </div>
          <div>
            <p className="text-white">Next Session in</p>
            <p className="text-3xl font-bold block bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent ">2 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
