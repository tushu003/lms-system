import React from "react";
import AboutBanner from "./_components/about-banner";
import MissionSection from "./_components/mission-section";
import OurValues from "./_components/our-values";
import OurTeams from "./_components/our-teams";
import TimeLineSection from "./_components/timeline-item";
import OurImpact from "./_components/our-impact";

export default function About() {
  return (
    <div>
      <AboutBanner />
      <MissionSection />
      <TimeLineSection />
      <OurValues />
      <OurTeams />
      <OurImpact />
    </div>
  );
}
