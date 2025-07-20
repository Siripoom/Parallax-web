// src/components/ContactSection.jsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// SVG Icon Components for clarity
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 text-brand-orange"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 text-brand-orange"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
    />
  </svg>
);
const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 text-brand-orange"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

const ContactSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/p/AFTERDENT-100066512417920/",
      icon: "https://img.icons8.com/?size=100&id=8818&format=png&color=000000",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/afterdent.th/",
      icon: "https://img.icons8.com/?size=100&id=32309&format=png&color=000000",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@afterdent",
      icon: "https://img.icons8.com/?size=100&id=118638&format=png&color=000000",
    },
  ];

  return (
    <footer ref={sectionRef} id="contact" className="p-5   pt-24 pb-12">
      <div className="mx-auto w-full max-w-6xl ">
        {/* Title */}
        <div className="contact-anim text-center mb-16">
          <h2 className="text-4xl font-extrabold uppercase">
            <span className="text-brand-orange">ติดต่อ</span>เรา
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Details */}
          <div className="space-y-8">
            <div className="contact-anim">
              <a
                href="mailto:Afterdent@ldcdental.com"
                className="flex items-center text-lg transition-colors hover:text-brand-orange"
              >
                <MailIcon /> Afterdent@ldcdental.com
              </a>
            </div>
            <div className="contact-anim">
              <a
                href="tel:027893050"
                className="flex items-center text-lg transition-colors hover:text-brand-orange"
              >
                <PhoneIcon /> 02-789-3050
              </a>
            </div>
            <div className="contact-anim">
              <div className="flex items-start text-lg">
                <MapPinIcon />
                <div>
                  <h3 className="font-bold mb-2">ที่อยู่บริษัท:</h3>
                  <p className="">
                    บริษัท แอลดีซี เด็นทัล จำกัด (มหาชน) สำนักงานใหญ่
                    <br />
                    อาคารแอลดีซี ชั้น 2 เลขที่ 395-395/1 หมู่ 5<br />
                    ถนนศรีนครินทร์ ต.สำโรงเหนือ อ.เมือง
                    <br />
                    จ.สมุทรปราการ 10270
                  </p>
                  <a
                    href="https://www.google.com/maps/dir//395+395+%E0%B8%96.+%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C+%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5+%E0%B8%AA%E0%B8%B3%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B7%E0%B8%AD+%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3+10270/@13.6390839,100.5509468,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x311d603c30a0eb9b:0x3bf7d305b40507e!2m2!1d100.6333344!2d13.6391048?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-brand-orange font-semibold hover:underline"
                  >
                    (+ Google Maps)
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-anim">
              <h3 className="font-bold text-lg mb-4">Social Media:</h3>
              <div className="flex items-center space-x-4">
                {socialLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.name}
                    target="_blank"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={40}
                      height={40}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="contact-anim h-80 w-full rounded-lg shadow-lg overflow-hidden md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2305.4624290715033!2d100.63194538499778!3d13.638886069322467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x311d603c30a0eb9b%3A0x3bf7d305b40507e!2zMzk1IDM5NSDguJYuIOC4qOC4o-C4teC4meC4hOC4o-C4tOC4meC4l-C4o-C5jCDguJXguLPguJrguKUg4Liq4Liz4LmC4Lij4LiH4LmA4Lir4LiZ4Li34LitIOC4reC4s-C5gOC4oOC4reC5gOC4oeC4t-C4reC4hyDguKrguKHguLjguJfguKPguJvguKPguLLguIHguLLguKMgMTAyNzA!3m2!1d13.6391048!2d100.6333344!5e0!3m2!1sth!2sth!4v1752328581842!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
