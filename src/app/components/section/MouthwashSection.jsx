"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const MouthwashSection = () => {
  const mainRef = useRef(null);
  const imageColumnRef = useRef(null);
  const textColumnRef = useRef(null);

  // Refs for the parallax bubbles
  const q10BubbleRef = useRef(null);
  const collagenBubbleRef = useRef(null);
  const hapBubbleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- THE PINNING ANIMATION ---
      // This is the core of the effect.
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top", // Pin starts when the top of the section hits the top of the viewport
          end: "bottom+=100% bottom", // The pin lasts for the entire height of the text column
          pin: imageColumnRef.current, // This is what gets pinned!
          scrub: 1, // Smoothly link to scrollbar
        },
      });

      // --- BUBBLE PARALLAX ANIMATIONS ---
      // These animations are controlled by the same timeline/scrolltrigger.
      // They move at different speeds to create a depth effect.
      timeline
        .fromTo(
          q10BubbleRef.current,
          { yPercent: 80 },
          { yPercent: -40, ease: "none" },
          0
        )
        .fromTo(
          collagenBubbleRef.current,
          { yPercent: 100 },
          { yPercent: -30, ease: "none" },
          0
        )
        .fromTo(
          hapBubbleRef.current,
          { yPercent: 120 },
          { yPercent: 20, ease: "none" },
          0
        );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    // Add overflow-hidden to the section to hide the cards when they move outside its bounds
    <section
      ref={mainRef}
      id="mouthwash"
      className=" text-center flex flex-col justify-center  bg-[#EEE4E6]  relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl grid  grid-cols-1 md:grid-cols-2">
        <div
          ref={imageColumnRef}
          className="relative flex h-screen items-center justify-center"
        >
          {/* Parallax Bubbles */}
          <div ref={q10BubbleRef} className="absolute top-1/4 left-[-60px] z-0">
            <Image
              src="/ingredients/Q10.png"
              alt="Q10"
              width={190}
              height={190}
            />
          </div>
          <div
            ref={collagenBubbleRef}
            className="absolute  bottom-1/4 left-[-120px] z-0"
          >
            <Image
              src="/ingredients/Collagen.png"
              alt="Collagen"
              width={210}
              height={210}
            />
          </div>
          <div ref={hapBubbleRef} className="absolute top-2/3 left-12 z-0">
            <Image
              src="/ingredients/Hydroxy.png"
              alt="Hydroxyapatite"
              width={190}
              height={190}
            />
          </div>

          {/* Main Product Image */}
          <div className="relative mb-6 flex h-80 w-80 items-center justify-center">
            {/* The pink circle */}
            <div className="absolute inset-0 h-80 w-80 top-[60] z-0 rounded-full bg-red-300/30"></div>
            {/* The product image, using next/image for optimization */}
            <div className="relative z-10 ">
              <Image
                src="/products/mouthwash.png"
                alt="mouthwash"
                width={200}
                height={200}
              />
            </div>

            {/* ADD THE FAKE SHADOW DIV */}
            <div className="absolute bottom-[-100px] z-0 h-15 w-4/5  rounded-full bg-red-500/40 blur-md"></div>
          </div>
        </div>

        {/* === RIGHT COLUMN (Text Content) === */}
        {/* This column will scroll normally */}
        <div
          ref={textColumnRef}
          className="flex flex-col justify-center py-24 px-4 "
        >
          <h1 className="mb-12 text-4xl font-bold">
            Mouthwash AFTERDENT Cranberry
          </h1>

          <div className="mb-12 rounded-2xl bg-white/50 p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold uppercase">
              Active Ingredients
            </h2>
            <ul className="space-y-4 text-left">
              <li>
                <strong className="text-accent-red">COENZYME Q10</strong>
                <p className="text-sm">
                  เพิ่มความชุ่มชื้น เร่งสมานแผล และสร้าง คอลลาเจน
                </p>
              </li>
              <li>
                <strong className="text-accent-red">ALOE VERA EXTRACT</strong>
                <p className="text-sm">
                  ลดการอักเสบ ปลอบประโลมเนื้อเยื่อ ในช่องปาก
                </p>
              </li>
              <li>
                <strong className="text-accent-red">CRANBERRY EXTRACT</strong>
                <p className="text-sm">
                  Jans PROANTHOCYANIDINS (PACS)
                  ที่ช่วยยับยั้งการเกาะของแบคทีเรียบนผิวฟัน
                </p>
              </li>
              <li>
                <strong className="text-accent-red">HYDROXYAPATITE</strong>
                <p className="text-sm">
                  ลดเสียวฟัน และเสริมความแข็งแรงให้ ผิวเคลือบฟัน
                </p>
              </li>
              <li>
                <strong className="text-accent-red">VITAMIN C</strong>
                <p className="text-sm">ลดการอักเสบ ป้องกันเลือดออกตามไรฟัน</p>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">วิธีใช้งาน</h2>
            <p className="text-left text-sm leading-relaxed">
              ใช้บ้วนปากครั้งละ 10-15 มล. วันละ 2 ครั้ง (เช้า-เย็น)
              หรือหลังการแปรงฟัน กลั้วปากให้ทั่วประมาณ 30 วินาที แล้วบ้วนทิ้ง
              และหลีกเลี่ยงการกลืน
            </p>
          </div>

          <button className="rounded-full bg-brand-pink-light py-4 px-12 text-xl font-bold text-brand-dark transition-transform hover:scale-105">
            Order now
          </button>
        </div>
      </div>
    </section>
  );
};

export default MouthwashSection;
