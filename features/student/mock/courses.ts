import type { StaticImageData } from "next/image";
import course1 from "@/public/assets/services/service1.png";
import course2 from "@/public/assets/services/service2.png";
import course3 from "@/public/assets/services/service3.png";
import course4 from "@/public/assets/services/service4.png";
import course5 from "@/public/assets/services/service5.png";
import course6 from "@/public/assets/services/service6.png";          

export type Course = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string | StaticImageData; 
  accent?: string; 
};

export const courses: Course[] = [
  {
    id: "ai-mathematics",
    title: "Mathematics",
    description:"From basic arithmetic to advanced calculus.",
    image: course1,
    accent: "from-purple-400 to-indigo-500",
  },
  {
    id: "ai-science",
    title: "Science",
    description:"Physics, Chemistry, Biology & mORE",
    image: course2 ,
    accent: "from-purple-400 to-indigo-500",
  },
  {
    id: "ai-english",
    title: "English",
    description:"Literature, Writing & Communication",
    image: course3,
    accent: "from-purple-400 to-indigo-500",
  },
  {
    id: "ai-languages",
    title: "Languages",
    description:"Spanish, French, German & more",
    image: course4,
    accent: "from-purple-400 to-indigo-500",
  },
  {
    id: "ai-SocialStudies",
    title: "Social Studies",
    description:"History, Geography & Government",
    image: course5,
    accent: "from-purple-400 to-indigo-500",
  },
  {
    id: "ai-testing",
    title: "Test Prep",
    description:"SAT, ACT, AP & College Prep",
    image: course6,
    accent: "from-purple-400 to-indigo-500",
  },

];
