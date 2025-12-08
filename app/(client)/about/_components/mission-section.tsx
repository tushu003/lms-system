"use client";

import React from "react";
import Image from "next/image";
import completeIcon from "@/public/assets/icons/complete.png";
import type { JSX } from "react";
import missionImage from "@/public/assets/hero/missonHero.png";

export default function MissionSection(): JSX.Element {
  return (
    <section className="py-10 sm:py-12 bg-gradient-to-r from-[#F8FAFC] to-[#EFF6FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <span className="inline-block bg-indigo-50 text-indigo-600 rounded-full px-3 py-1 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Our Mission
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug md:leading-tight">
              Unlocking Every
              <br />
              <span className="block bg-gradient-to-r from-[#4F46E5] to-[#9333EA] bg-clip-text text-transparent">
                Student&apos;s Potential
              </span>
            </h2>

            <p className="mt-4 sm:mt-6 text-slate-600 max-w-2xl text-sm sm:text-base">
              At Evolve, we believe every student has the potential to excel. Our
              mission is to unlock that potential through inspirational, innovative,
              and compassionate educational support.
            </p>

            <p className="mt-3 sm:mt-4 text-slate-600 max-w-2xl text-sm sm:text-base">
              We&apos;re not just about improving grades — we&apos;re about building
              confidence, fostering critical thinking, and preparing students for
              lifelong success.
            </p>

            <ul className="mt-6 sm:mt-8 space-y-3 max-w-md">
              {[
                "Personalized learning approach",
                "Qualified and passionate tutors",
                "Flexible and convenient scheduling",
                "Proven track record of success",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-emerald-500 shrink-0">
                    <Image src={completeIcon} alt="check icon" width={18} height={18} />
                  </span>
                  <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right image */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-64 xl:h-72">
              <Image
                src={missionImage}
                alt="Teacher with students"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
