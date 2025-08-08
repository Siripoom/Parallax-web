// src/components/AboutUsSection.jsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Beaker, ShieldCheck, HeartPulse } from "lucide-react";
import MaskedText from "../MaskedText"; // Import our new component

// ... inside your component's return statement ...

// --- Data-Driven Approach (Recommended for Cleanliness) ---
const proofPoints = [
  {
    // Replaced 'icon' with 'image' and 'alt'
    image: "/about/goodQuality.png", // <-- Place your Beaker icon/image here
    alt: "Dentist-developed formula icon",
    text: "สูตรเฉพาะที่คิดค้นโดยทันตแพทย์ผู้เชี่ยวชาญของ LDC Dental",
  },
  {
    image: "/about/shield.png", // <-- Place your ShieldCheck icon/image here
    alt: "Clinically proven results icon",
    text: "สูตรที่หมอใช้ในห้องฟัน และยืนยันจากคนไข้ว่าเห็นผลจริง!",
  },
  {
    image: "/about/noBackteria.png", // <-- Place your HeartPulse icon/image here
    alt: "Oral health benefits icon",
    text: "ช่วยลดแบคทีเรียในช่องปาก ลดการอักเสบ เหงือกและฟันแข็งแรง แผลในช่องปากหายเร็วขึ้น",
  },
];

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
    <section ref={sectionRef} id="about-us" className="p-5 py-24 bg-white">
      <div className="mx-auto w-full max-w-6xl mx-auto text-center">
        {/* --- Title --- */}
        <div className="about-us-anim">
          <h2 className="text-5xl font-extrabold uppercase text-brand-orange">
            Get To Know Us
          </h2>
        </div>

        {/* --- Stats Section --- */}
        <h2 className="text-3xl font-extrabold uppercase text-brand-orange my-15">
          ผ่านการพิสูจน์คุณภาพจาก LDC Dental
        </h2>
        <div className="proof-header-anim mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofPoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={point.image}
                alt={point.alt}
                className="mb-4 h-35 w-35 object-contain" // Adjust size as needed
              />
              <p className="text-gray-600 text-xl">{point.text}</p>
            </div>
          ))}
        </div>

        <MaskedText
          text="AFTERDENT"
          imageSrc="/about/aboutText.png" // The image you want inside the text
        />

        <div className="about-us-image grid gap-4 md:grid-cols-2 items-center justify-center">
          <div>
            <Image
              src="/about/presenter.jpg"
              alt="Dentist with patient"
              width={400}
              height={0}
              className="rounded-lg w-full h-full  shadow-lg ml-auto"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Image
              src="/about/Dentist.jpg"
              alt="Dentist with patient"
              width={400}
              height={400}
              className="rounded-lg w-full  shadow-lg ml-auto"
            />
            <Image
              src="/about/smile.jpg"
              alt="Dentist with patient"
              width={400}
              height={400}
              className="rounded-lg w-full  shadow-lg ml-auto"
            />
          </div>
        </div>

        {/* --- Value Proposition Text --- */}
        <div className="about-us-anim mt-20 text-left  mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold  mb-8">
                <span className="text-brand-green text-3xl">
                  AFTERDENT Cranberry Mouthwash
                </span>
              </h3>
              <p className="text-xl ">
                คิดค้นโดยทันตแพทย์ผู้เชี่ยวชาญจาก LDC Dental
                ใช้ก่อนและหลังการขูดหินปูน รวมถึงกระบวนการรักษาอื่นๆ
                เพื่อให้คนไข้ฟื้นฟูเหงือกและฟันมาสู่สุขภาพปกติเร็วขึ้น
              </p>
            </div>

            <Image
              src="/about/mouseWash.JPG"
              alt="Dentist with patient"
              width={400}
              height={400}
              className="rounded-lg shadow-lg "
            />
          </div>
        </div>
        <div className="about-us-anim mt-20 text-end  mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 text-gray-700">
            <Image
              src="/about/toothPaste.JPG"
              alt="Dentist with patient"
              width={400}
              height={400}
              className="rounded-lg shadow-lg ml-auto"
            />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold  mb-8">
                <span className="text-brand-green text-3xl">
                  AFTERDENT Cranberry Delight Toothpaste
                </span>
              </h3>
              <p className="text-xl text-start">
                ถูกพัฒนาต่อเนื่องจากผลการรักษาของน้ำยาบ้วนปากในคนไข้ของ LDC
                ได้ประสิทธิภาพที่ดีเยี่ยม จึงนำสูตรมาปรับเป็นยาสีฟัน AFTERDENT
                Cranberry Delight เพื่อการดูแลสูงสุดในช่องปาก เมื่อใช้คู่กัน
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
