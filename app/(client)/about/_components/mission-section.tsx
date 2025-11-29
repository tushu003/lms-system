"use client";

import React from "react";
import Image from "next/image";
import completeIcon from "@/public/assets/icons/complete.png";
import type { JSX } from "react";
import missionImage from '@/public/assets/hero/missonHero.png';

export default function MissionSection(): JSX.Element {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <span className="inline-block bg-indigo-50 text-indigo-600 rounded-full px-3 py-1 text-sm font-medium mb-6">
              Our Mission
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Unlocking Every
              <br />
              <span className="block bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent">
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
              {/*
                Place your image at: /public/images/mission.jpg
                Or change the src to point to your image.
              */}
              <Image
                src={missionImage}
                alt="Teacher with students"
                fill
                className="object-cover rounded-2xl shadow-lg"
                sizes="(max-width: 1024px) 70vw, 33vw"
                priority
              />

              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-lg font-bold">20+</div>
                <div className="text-xs">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
