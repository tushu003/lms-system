import Banner from "@/app/(client)/_components/Banner";
import Image from "next/image";
import FeatureCard from "@/components/feature/FeatureCard";
import Courses from "./courses/page";
import CoursesCard from "@/components/courses/CoursesCard";
import LearnAnywhere from "@/components/LearnAnyWhere";
import TeachEvolve from "@/components/TeachEvolve";
import Testimonials from "@/components/Testimonials";
import SuccessStory from "@/components/SuccessStory";

export default function Home() {
  return (
  <div>
    <Banner />
    <FeatureCard />
    <CoursesCard />
    <LearnAnywhere />
    <TeachEvolve />
    <Testimonials />
    <SuccessStory />
  </div>
  );
}
