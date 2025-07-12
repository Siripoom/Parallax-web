// src/components/FooterSection.jsx
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  return (
    <section
      id="footer"
      className="bg-[#FFB2B3] flex justify-center items-center p-5"
    >
      <div className="text-center text-white max-w-2xl  border-t ">
        <p className="my-3">
          © {new Date().getFullYear()} AFTERDENT by LDC Dental. All Rights
          Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
