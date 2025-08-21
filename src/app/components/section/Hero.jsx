"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- Simple Entry Animation ---
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out",
      });

      // --- Parallax on Main Content ---
      // This will make the text move up slightly as the user scrolls down
      gsap.to(contentRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* --- THE BACKGROUND VIDEO --- */}
      {/* FIX: Use `min-w-full min-h-full` to ensure it always covers the screen */}
      <video
        src="/background/hero_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 z-[-2] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      ></video>

      {/* --- THE PINK OVERLAY --- */}
      {/* FIX: Re-added the overlay to sit on top of the video */}
      <div className="absolute inset-0 z-[-1] bg-red-300/60 -z-10"></div>

      {/* --- MAIN CONTENT --- */}
      <div ref={contentRef} className="relative z-10 text-center text-white">
        {/* New Multi-Colored Logo Text */}
        <Image
          src="/logo/logo.PNG"
          alt="Afterdent product collage"
          width={30}
          height={30}
          sizes="80vw"
          className="w-100 lg:w-full rounded-xln"
        />
        <p className="mt-4 text-xl md:text-5xl font-semibold drop-shadow-md">
          สูตรที่หมอใช้ในห้องฟัน
        </p>
      </div>
    </section>
  );
};

export default Hero;
