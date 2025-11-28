import React from "react";
import teach1 from "../../public/assets/icons/teach1.png";
import teach2 from "../../public/assets/icons/teach2.png";
import teach3 from "../../public/assets/icons/teach3.png";
import teach4 from "../../public/assets/icons/teach4.png";
import Image from "next/image";

export default function TeachEvolve() {
  return (
    <section className="w-full">
      <div className=" py-10 rounded-t-lg">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-[#1E293B] text-xl md:text-2xl font-semibold">
            Why Teach with Evolve?
          </h2>
          <p className="mt-1 text-sm text-[#4B5563] max-w-2xl mx-auto">
            We are committed to providing exceptional educational experiences
            that drive real <br /> results
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {/* Card 1 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white rounded-md flex items-center justify-center text-xl">
              <Image src={teach1} alt="icons" width={20} height={20} />
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
            <div className="w-12 h-12 bg-gradient-to-r from-[#22C55E] to-[#10B981] text-white rounded-md flex items-center justify-center text-xl">
              <Image src={teach2} alt="icons" width={20} height={20} />
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
            <div className="w-12 h-12 bg-gradient-to-r from-[#EC4899] to-[#F43F5E] text-white rounded-md flex items-center justify-center text-xl">
              <Image src={teach3} alt="icons" width={20} height={20} />
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
            <div className="w-12 h-12 bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] text-white rounded-md flex items-center justify-center text-xl">
              <Image src={teach4} alt="icons" width={20} height={20} />
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
