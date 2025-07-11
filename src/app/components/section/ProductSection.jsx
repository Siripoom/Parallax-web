"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "../ProductCard";

gsap.registerPlugin(ScrollTrigger);

const ProductSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const mouthwashCardRef = useRef(null);
  const toothpasteCardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- Title Fade-in Animation ---
      // This is a simple animation that triggers when the section comes into view.
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "restart none none none",
        },
      });

      // --- THE PARALLAX ANIMATION ---
      const parallaxTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // Animation starts when the top of the section hits the bottom of the viewport
          end: "bottom top", // Animation ends when the bottom of the section hits the top of the viewport
          scrub: 1, // This is the magic! Links the animation progress to the scrollbar. `1` adds a 1-second smoothing.
        },
      });

      // Add animations to the timeline.
      // We animate the cards from a starting position (y: 200) to an ending position (y: -200).
      parallaxTl
        .fromTo(
          mouthwashCardRef.current,
          { y: 200, opacity: 1 }, // Start from below and slightly transparent
          { y: -200, opacity: 1, ease: "none" } // End above and fully opaque
        )
        .fromTo(
          toothpasteCardRef.current,
          { y: 300, opacity: 1 }, // Start this one a bit lower for more depth
          { y: -300, opacity: 1, ease: "none" }, // End higher
          "<" // The "<" starts this animation at the same time as the previous one
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // Add overflow-hidden to the section to hide the cards when they move outside its bounds
    <section
      id="product"
      ref={sectionRef}
      className=" text-center flex flex-col py-25 justify-center  bg-white min-h-screen relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl h-full">
        <div ref={titleRef}>
          <h2 className="mb-4 text-4xl font-extrabold uppercase">
            <span className="text-[#009B72]">Product </span>
            <span className="text-[#F58220]">Collection</span>
          </h2>
          <p className="mb-16 font-semibold">
            Our product line includes two offerings
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-8">
          {/* Attach the refs to the individual product card containers */}
          <div ref={mouthwashCardRef}>
            <ProductCard
              imageSrc="/products/mouthwash.png"
              title="น้ำยาบ้วนปาก AFTERDENT คลื่นแครนเบอร์รี่"
              description="ปริมาณสุทธิ: 500 มล. สูตรที่หมอไว้ใจในห้องหมอฟัน มาพร้อมกับการใช้งาน #บีบพร้อมบ้วน"
              imageClassName="w-40"
            />
          </div>
          <div ref={toothpasteCardRef}>
            <ProductCard
              imageSrc="/products/toothpaste.png"
              title="ยาสีฟัน AFTERDENT CRANBERRY DELIGHT"
              description="คลื่นแครนเบอร์รี่ ปริมาณสุทธิ: 100 กรัม เป็นยาสีฟันชนิดเจลสูตรอ่อนโยน ป้องกันฟันผุ"
              imageClassName="w-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
