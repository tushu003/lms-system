import React from "react";
import Image from "next/image";
import { courses } from "../../features/student/mock/courses";

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-l from-[#CFFAFE] to-[#DBEAFE] text-[#1E40AF] text-xs font-medium">
    {children}
  </span>
);

const CoursesCard: React.FC<{ course: typeof courses[number] }> = ({ course }) => {
  return (
    <article className="bg-white max-w-5xl pb-6 mx-auto rounded-xl shadow-sm overflow-hidden ring-1 ring-gray-100">
      {/* Top image: fills the card width and has a fixed height */}
      <div className="relative w-full ">
        <Image
          src={course.image}
          alt={course.title}
          width={382}
          height={162}
        
          className="object-cover"
          
        />
      </div>

      {/* Text block below the image */}
      <div className="p-5">
        <h3 className="text-[20px] font-[700] text-[#1E293B]">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-[#4B5563]">{course.description}</p>
        <a
          className="inline-block mt-4 text-sm font-medium text-[#003466] hover:underline"
          href="#"
        >
          Explore Tutors →
        </a>
      </div>
    </article>
  );
};

export default function HeroFeatures() {
  return (
    <section className="max-w-6xl mx-auto lg:px-19">
      <div className="text-center max-w-3xl mx-auto">
        <Badge>Subject Mastery</Badge>
        <h1 className="mt-3 text-xl sm:text-4xl lg:text-3xl font-extrabold text-[#1E293B]">
          Masters Any Subject
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#159fc2]">
            {" "}
            With Expert Guidence
          </span>
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <CoursesCard key={c.id} course={c} />
        ))}
      </div>
      <button className="btn bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-4 py-2 rounded-[16px] text-white lg:ml-99 mt-8 mb-8">Explore All Subject →</button>
    </section>
  );
}
