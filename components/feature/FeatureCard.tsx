import React from "react";
import Image from "next/image";
import { features, Feature } from "../../features/data/feature";

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#F3E8FF] to-[#FCE7F3] text-[#6B21A8] text-xs font-medium">
    {children}
  </span>
);

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <article className="bg-white max-w-5xl mx-auto rounded-xl shadow-sm overflow-hidden ring-1 ring-gray-100">
      {/* Top image: fills the card width and has a fixed height */}
      <div className="relative w-full h-44 md:h-48 lg:h-56 bg-gray-100">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover"
          sizes="(max-width: 568px) 100vw, 33vw"
        />
      </div>

      {/* Text block below the image */}
      <div className="p-5">
        <h3 className="text-[24px] font-[700] text-[#1E293B]">
          {feature.title}
        </h3>
        <p className="mt-2 text-sm text-[#4B5563]">{feature.description}</p>
        <a
          className="inline-block mt-4 text-sm font-medium text-[#003466] hover:underline"
          href="#"
        >
          Learn more →
        </a>
      </div>
    </article>
  );
};

export default function HeroFeatures() {
  return (
    <section className="max-w-6xl mx-auto lg:px-19 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <Badge>Why Choose Evolve</Badge>
        <h1 className="mt-3 text-xl sm:text-4xl lg:text-3xl font-extrabold text-[#1E293B]">
          The Future of
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#DB2777]">
            {" "}
            Personalized Learning
          </span>
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          We’re not just another tutoring platform. We’re revolutionizing
          education with <br /> cutting-edge technology and human expertise.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f) => (
          <FeatureCard key={f.id} feature={f} />
        ))}
      </div>
    </section>
  );
}
