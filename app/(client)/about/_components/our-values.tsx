import React from "react";
import teach1 from "@/public/assets/icons/teach1.png";
import teach2 from "@/public/assets/icons/teach2.png";
import accoutibility from "@/public/assets/icons/SVG (5).png";
import heart from "@/public/assets/icons/SVG (6).png";
import Image from "next/image";

export default function OurValues() {
  return (
    <section className="w-full">
      <div className=" py-10 rounded-t-lg">
        {/* Heading */}
        <div className="text-center mb-6">
            <span className="inline-block bg-indigo-50 text-indigo-600 rounded-full px-2 py-1 text-sm font-medium mb-2">
              Our Mission
            </span>
          <h2 className="text-[#1E293B] text-3xl md:text-4xl font-bold">
            The Principles That 
             <span className="block bg-gradient-to-r from-[#9333EA] to-[#DB2777] bg-clip-text text-transparent">
                 Guide Everything We Do
              </span>
          </h2>
          <p className="mt-1 text-sm text-[#4B5563] max-w-2xl mx-auto">
            Above all, we believe our actions show our true values.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {/* Card 1 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white rounded-md flex items-center justify-center text-xl">
              <Image src={accoutibility} alt="icons" width={20} height={20} />
            </div>
            <h3 className="text-sm font-semibold text-[#1E293B]">
              Expert Tutors
            </h3>
            <p className="text-xs text-[#4B5563] text-center">
              Qualified educators with proven track records in their subjects
            </p>
          </article>

          {/* Card 2 */}
          <article className=" backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-r from-[#EC4899] to-[#F43F5E] text-white rounded-md flex items-center justify-center text-xl">
              <Image src={heart} alt="icons" width={20} height={20} />
            </div>
            <h3 className="text-sm font-semibold text-[#1E293B]">
              Personalized Learning
            </h3>
            <p className="text-xs text-[#4B5563] text-center">
              Customized lesson plans tailored to each students unique needs
            </p>
          </article>

          {/* Card 3 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white rounded-md flex items-center justify-center text-xl">
              <Image src={teach1} alt="icons" width={20} height={20} />
            </div>
            <h3 className="text-sm font-semibold text-[#1E293B]">
              Flexible Scheduling
            </h3>
            <p className="text-xs text-[#4B5563] text-center">
              Book sessions that fit your schedule, online or in-person
            </p>
          </article>

          {/* Card 4 */}
          <article className=" backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-r from-[#22C55E] to-[#10B981] text-white rounded-md flex items-center justify-center text-xl">
              <Image src={teach2} alt="icons" width={20} height={20} />
            </div>
            <h3 className="text-sm font-semibold text-[#1E293B]">
              Proven Results
            </h3>
            <p className="text-xs text-[#4B5563] text-center">
              Track record of improved grades and student confidence
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
