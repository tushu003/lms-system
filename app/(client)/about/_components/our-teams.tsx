import Image, { StaticImageData } from 'next/image';
import React from 'react';
import team1 from '@/public/assets/team/sara.png';
import team2 from '@/public/assets/team/niyon.png';
import team3 from '@/public/assets/team/ayra.png';

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
    image: team2,
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    title: 'Academic Director',
    subtitle: '',
    bio: 'PhD in Educational Psychology with expertise in personalized learning',
    image: team3,
  },
]

export default function OurTeams() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-5xl mx-auto px-6">
        {/* small badge */}
        <div className="text-center mb-4">
          <span className="inline-block bg-gradient-to-r from-[#DCFCE7] to-[#D1FAE5] text-[#166534] text-sm font-medium px-3 py-1 rounded-full">
            Our Team
          </span>
        </div>

        {/* heading with emphasized second line */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-extrabold text-slate-900 leading-tight">
            Meet the Passionate
            <span className="block text-3xl md:text-4xl bg-gradient-to-r from-[#16A34A] to-[#059669] bg-clip-text text-transparent ">Leaders Behind Our Mission</span>
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
                <h3 className="text-lg text-center font-semibold text-[#1E293B]">{member.name}</h3>
                <p className="text-sm text-center text-[#6366F1] mt-1 font-medium">{member.title}</p>
                <p className="text-sm text-center text-[#4B5563] mt-2">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


