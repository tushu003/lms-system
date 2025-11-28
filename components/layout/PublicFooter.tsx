import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo/logo.png";
import insta from "../../../public/assets/icons/Instagram (1).png";
import twitter from "../../../public/assets/icons/image 1.png";

export default function PublicFooter() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#1E293B] text-base-content p-10">
        <aside>
          <Image src={logo} alt="Evolve Tutoring" width={99} height={43} />
          <p className="text-[#D1D5DB]">
            Empowering students to reach their full potential <br /> through
            personalized tutoring and innovative <br /> learning solutions.
          </p>
          <div className="flex gap-4 mt-4">
            <Image src={insta} alt="insta" width={24} height={24} />
            <Image src={twitter} alt="twitter" width={24} height={24} />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-white">Our Commitment to you</h6>
          <a className="link link-hover text-[#D1D5DB]">
            We believe in a few things: you, us, and every<br /> product we make. If
            at any time within 30 days <br /> after your purchase, for any reason,
            you’re not <br /> happy—we’ll refund your money + 10% <br /> (minus shipping
            costs). See full details here. <br /> *Purchasing gift cards or digital
            items does not <br /> count toward the $100 for Free Shipping or other <br />
            promotions.
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Quick Links</h6>
          <a className="link link-hover text-[#D1D5DB]">About us</a>
          <a className="link link-hover text-[#D1D5DB]">Find Tutors</a>
          <a className="link link-hover text-[#D1D5DB]">Contact</a>
          <a className="link link-hover text-[#D1D5DB]">Book Session</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Help Center</h6>
          <a className="link link-hover text-[#D1D5DB] ">Terms of use</a>
          <a className="link link-hover text-[#D1D5DB]">Privacy policy</a>
          <a className="link link-hover text-[#D1D5DB]">FAQ</a>
        </nav>
      </footer>
    </div>
  );
}
