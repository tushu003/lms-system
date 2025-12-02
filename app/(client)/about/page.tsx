import React from "react";
import AboutBanner from "./_components/about-banner";
import MissionSection from "./_components/mission-section";
import OurValues from "./_components/our-values";
import OurTeams from "./_components/our-teams";

export default function About() {
  return (
    <div>
      <AboutBanner />
      <MissionSection />
      <OurValues />
      <OurTeams />
    </div>
  );
}
