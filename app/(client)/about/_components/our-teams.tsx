import Image, { StaticImageData } from 'next/image';
import React from 'react';
import team1 from '@/public/images/team1.jpg';
import team2 from '@/public/images/team2.jpg';
import team3 from '@/public/images/team3.jpg';

interface Member {
  id: number;
  name: string;
  title: string;
  subtitle?: string;
  bio: string ;
  image: string | StaticImageData;
}

const teamData: Member[] = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    title: 'Founder & CEO',
    subtitle: '',
    bio: 'Former Stanford professor with 20+ years in educational technology',
    image: team1, // put images in /public/images/
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Head of Technology',
    subtitle: '',
    bio: 'AI researcher and former Google engineer specializing in EdTech',
    image: '/images/team2.jpg',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    title: 'Academic Director',
    subtitle: '',
    bio: 'PhD in Educational Psychology with expertise in personalized learning',
    image: '/images/team3.jpg',
  },
]

export default function OurTeams() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* small badge */}
        <div className="text-center mb-6">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full">
            Our Team
          </span>
        </div>

        {/* heading with emphasized second line */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Meet the Passionate
            <span className="block text-3xl md:text-4xl text-emerald-600">Leaders Behind Our Mission</span>
          </h2>
        </div>

        {/* cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <article
              key={member.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100"
            >
              <div className="relative h-56 w-full">
                {/* Image: ensure these files exist at public/images/team1.jpg etc. */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-emerald-600 mt-1 font-medium">{member.title}</p>
                <p className="text-sm text-slate-500 mt-4">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/*
How to use
1. Save this file as components/TeamSection.tsx in your Next.js + TypeScript project.
2. Add three images to public/images/team1.jpg, team2.jpg, team3.jpg. You can use real photos or placeholders.
3. Make sure Tailwind is configured in your project (tailwind.config.js + global css include).
4. Import and render <TeamSection /> from any page, for example pages/index.tsx.

Tailwind notes
- The component uses utility classes compatible with Tailwind v2+.
- Tweak spacing, typography, colors as needed to match the screenshot exactly.
*/
