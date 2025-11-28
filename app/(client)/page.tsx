import Banner from "@/app/(client)/_components/Banner";
import Image from "next/image";
import FeatureCard from "@/app/(client)/_components/FeatureCard";
import Courses from "./courses/page";
import CoursesCard from "@/app/(client)/_components/CoursesCard";
import LearnAnywhere from "@/app/(client)/_components/LearnAnyWhere";
import TeachEvolve from "@/app/(client)/_components/TeachEvolve";
import Testimonials from "@/app/(client)/_components/Testimonials";
import SuccessStory from "@/app/(client)/_components/SuccessStory";

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
