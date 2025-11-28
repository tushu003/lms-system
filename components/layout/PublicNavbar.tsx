"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo/logo.png";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItems: NavItemProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Find Tutor",
    href: "/find-tutor",
  },
  {
    label: " A Student Portal",
    href: "/student-portal",
  },
  {
    label: "Tutor Portal",
    href: "/tutor-portal",
  },
];

// Place a logo at /public/logo.png or change the src below.
export default function PublicNavbar(): React.ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#12142D] via-[#24184A] to-[#331D67] text-white">
      <div className="w-11/12 mx-auto px-1 sm:px-3 lg:px-1">
        <div className="flex items-center justify-between h-20">
          {/* left: logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative sm:w-40 sm:h-10">
                {/* update the src to your logo file in /public */}
                <Image
                  src={logo}
                  alt="Evolve Tutoring"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Link>
          </div>

          {/* center / desktop nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {/* <Link href="#" className="hover:text-gray-200 transition">
              Home
            </Link>
            <Link href="#" className="hover:text-gray-200 transition">
              About
            </Link>
            <Link href="#" className="hover:text-gray-200 transition">
              Find Tutor
            </Link>
            <Link href="#" className="hover:text-gray-200 transition">
              Contact
            </Link>
            <Link href="#" className="hover:text-gray-200 transition">
              A Student Portal
            </Link>
            <Link href="#" className="hover:text-gray-200 transition">
              Tutor Portal
            </Link> */}
            {NavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="hover:text-gray-200 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* right: CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-1 rounded-full bg-[#F97316] hover:bg-orange-400 text-sm font-semibold shadow">
                Book Session
              </button>
            </div>

            {/* mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* mobile nav */}
        {open && (
          <div className="md:hidden mt-2 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-2 py-3">
              <Link href="#" className="px-2 py-2 rounded hover:bg-white/5">
                Home
              </Link>
              <Link href="#" className="px-2 py-2 rounded hover:bg-white/5">
                About
              </Link>
              <Link href="#" className="px-2 py-2 rounded hover:bg-white/5">
                Find Tutor
              </Link>
              <Link href="#" className="px-2 py-2 rounded hover:bg-white/5">
                Contact
              </Link>
              <Link href="#" className="px-2 py-2 rounded hover:bg-white/5">
                A Student Portal
              </Link>
              <Link href="#" className="px-2 py-2 rounded hover:bg-white/5">
                Tutor Portal
              </Link>
              <div className="px-2 pt-2">
                <button className="w-[8px] px-4 py-2 rounded-full bg-orange-500 text-sm font-semibold">
                  Book Session
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
