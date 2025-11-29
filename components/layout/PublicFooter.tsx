"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";
import logoWhite from "@/public/assets/logo/logo.png";
import instaIcon from "@/public/assets/icons/Instagram (1).png";
import twitterIcon from "@/public/assets/icons/image 1.png";

type LinkItem = { label: string; href: string };

export default function PublicFooter(): JSX.Element {
  const quickLinks: LinkItem[] = [
    { label: "About Us", href: "/about" },
    { label: "Find Tutors", href: "/tutors" },
    { label: "Contact", href: "/contact" },
    { label: "Book Session", href: "/book" },
  ];

  const supportLinks: LinkItem[] = [
    { label: "Help Center", href: "/help" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "FAQ", href: "/faq" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1724] text-slate-300">
      <div className="h-2" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-start gap-3">
              <div className="w-28 h-10 relative">
                <Image src={logoWhite} alt="Evolve Logo" width={96} height={65} />
              </div>
            </div>

            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-[300px]">
              Empowering students to reach their full potential through personalized tutoring and innovative learning solutions.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Image src={instaIcon} alt="insta" width={20} height={20} />
              <Image src={twitterIcon} alt="insta" width={20} height={20} />
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-white text-sm font-semibold mb-3">Our Commitment to you</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We believe in a few things: you, us, and every product we make. If at any time within 30
              days after your purchase, for any reason, you're not happy—we'll refund your money
              (minus shipping costs). See full details on the policy page.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              {supportLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
          © {year} Evolve Tutoring LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
