// src/components/AboutUsSection.jsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import StatBubble from "../StatBubble"; // Import our new component

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const sectionRef = useRef(null);

  // Animate elements as they scroll into view
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Target all animatable elements with a common class
      gsap.from(".about-us-anim", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2, // Animate them one after another
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "restart none none none",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about-us" className="py-24 bg-white">
      <div className="container mx-auto text-center">
        {/* --- Title --- */}
        <div className="about-us-anim">
          <h2 className="text-4xl font-extrabold uppercase text-brand-orange">
            Get To Know Us
          </h2>
        </div>

        {/* --- Stats Section --- */}
        <div className="about-us-anim mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <StatBubble
            end={30}
            suffix="+"
            description="LDC brings more than three decades of expertise in dental care"
          />
          <StatBubble
            end={500}
            suffix="+"
            description="Our team consists of over 500 specialized dentists across various fields"
          />
          <StatBubble
            end={300}
            suffix="K"
            description="We have served and earned the trust of more than 300,000 patients nationwide"
          />
          <StatBubble
            end={22}
            description="Our services are accessible across Thailand with 22 branches nationwide"
          />
        </div>

        {/* --- Image Collage --- */}
        <div className="about-us-anim w-full flex items-center justify-center mx-auto">
          <Image
            src="/about/brand.png"
            alt="Dentist with patient"
            width={800}
            height={800}
            className="rounded-lg shadow-lg "
          />
        </div>

        {/* --- Value Proposition Text --- */}
        <div className="about-us-anim mt-20 text-left max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="text-brand-green">Trusted Oral Care</span> by{" "}
            <span className="text-brand-orange">Dental Experts</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>
                Afterdent is a premium oral care brand by LDC Dental, designed
                for use before and after dental treatments.
              </li>
              <li>
                It helps relieve mouth ulcers, reduce inflammation, and promote
                healing.
              </li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Clinically used by dentists, Afterdent comes in toothpaste and
                mouthwash—gentle, effective care for sensitive mouths.
              </li>
            </ul>
          </div>
        </div>

        {/* --- Interactive Map --- */}
        <div className="about-us-anim mt-20 w-full rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2305.4624290715033!2d100.63194538499778!3d13.638886069322467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x311d603c30a0eb9b%3A0x3bf7d305b40507e!2zMzk1IDM5NSDguJYuIOC4qOC4o-C4teC4meC4hOC4o-C4tOC4meC4l-C4o-C5jCDguJXguLPguJrguKUg4Liq4Liz4LmC4Lij4LiH4LmA4Lir4LiZ4Li34LitIOC4reC4s-C5gOC4oOC4reC5gOC4oeC4t-C4reC4hyDguKrguKHguLjguJfguKPguJvguKPguLLguIHguLLguKMgMTAyNzA!3m2!1d13.6391048!2d100.6333344!5e0!3m2!1sth!2sth!4v1752328581842!5m2!1sth!2sth"
            width="100%"
            height="520"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
