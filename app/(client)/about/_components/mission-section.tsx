"use client";

import React from "react";
import Image from "next/image";
import completeIcon from "@/public/assets/icons/complete.png";
import type { JSX } from "react";
import missionImage from '@/public/assets/hero/missonHero.png';

export default function MissionSection(): JSX.Element {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <span className="inline-block bg-indigo-50 text-indigo-600 rounded-full px-2 py-1 text-sm font-medium mb-6">
              Our Mission
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Unlocking Every
              <br />
              <span className="block bg-gradient-to-r from-[#4F46E5] to-[#9333EA] bg-clip-text text-transparent">
                Student's Potential
              </span>
            </h2>

            <p className="mt-6 text-slate-600 max-w-2xl">
              At Evolve, we believe every student has the potential to excel. Our
              mission is to unlock that potential through inspirational,
              innovative, and compassionate educational support.
            </p>

            <p className="mt-4 text-slate-600 max-w-2xl">
              We're not just about improving grades — we're about building
              confidence, fostering critical thinking, and preparing students for
              lifelong success.
            </p>

            <ul className="mt-8 space-y-3 max-w-md">
              {[
                "Personalized learning approach",
                "Qualified and passionate tutors",
                "Flexible and convenient scheduling",
                "Proven track record of success",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-emerald-500">
                  <Image src={completeIcon} alt="check icon" width={16} height={16} />
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right image */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72">
              <Image
                src={missionImage}
                alt="Teacher with students"
                width={576}
                height={385}
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
