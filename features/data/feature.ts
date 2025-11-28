import type { StaticImageData } from "next/image";
import team1 from "@/public/assets/feature/team1.png";
import team2 from "@/public/assets/feature/team2.png";
import team3 from "@/public/assets/feature/team3.png";
import team4 from "@/public/assets/feature/team4.png"; 
export type Feature = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string | StaticImageData;
  accent?: string;
};


export const features: Feature[] = [
  {
    id: "ai-matching",
    title: "AI-Powered Matching",
    subtitle: undefined,
    description:
      "Our intelligent system pairs you with the perfect tutor based on your learning style and goals.",
    image: team1,
    accent: "from-purple-400 to-indigo-500",
  },
  {
    id: "flexible-scheduling",
    title: "Flexible Scheduling",
    description:
      "Book sessions that fit your schedule and start learning instantly with our on-demand tutoring platform.",
    image: team2,
    accent: "from-cyan-400 to-blue-500",
  },
  {
    id: "verified-excellence",
    title: "Verified Excellence",
    description:
      "All tutors undergo rigorous screening and continuous performance monitoring to ensure quality.",
    image: team3,
    accent: "from-emerald-400 to-green-500",
  },
  {
    id: "unlimited-support",
    title: "Unlimited Support",
    description:
      "24/7 access to resources, practice materials, and academic support whenever you need it.",
    image: team4,
    accent: "from-orange-400 to-pink-400",
  },
];
