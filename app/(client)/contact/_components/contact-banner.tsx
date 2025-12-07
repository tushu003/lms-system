import { Button } from "@/components/ui/button";
import React from "react";

export default function ContactBanner() {
  return (
    <div className="bg-gradient-to-br from-[#312E81] via-[#581C87] to-[#831843] py-12">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm bg-white/10 text-white mb-4">
          Get in Touch
        </span>

        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Let&apos;s Start Your
          <br />
          <span className="block bg-gradient-to-r from-[#FACC15] via-[#F472B6] to-[#60A5FA] bg-clip-text text-transparent">
            Learning Journey
          </span>
        </h2>

        <p className="text-white/90 my-4">
          Browse our directory of qualified tutors and discover the perfect
          match for <br /> your learning style and goals.
        </p>
        <div className="flex justify-center items-center gap-4 mt-4">
          {/* <button className="btn bg-gradient-to-r from-[#6366F1] mt-2 to-[#A855F7] hover:bg-amber-100 text-white px-3 py-2 rounded-lg">Send Massage →</button> */}
          <Button variant="customPrimary">Send Message →</Button>
          <Button variant="customSecondary">View FAQ →</Button>
        </div>
      </div>
    </div>
  );
}
