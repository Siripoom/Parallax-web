"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Problem 1 Fix: Import the ScrollToPlugin
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";

// Problem 1 Fix: Register ALL the necessary plugins, including ScrollToPlugin
gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin);

const Hero = () => {
  const containerRef = useRef(null);
  const titleWrapperRef = useRef(null); // Ref for the wrapper div
  const textRef = useRef(null);

  const [isAnimating, setIsAnimating] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- Get all our elements ---
      const bubbles = gsap.utils.toArray(".hero-bubble");
      const mainContent = gsap.utils.toArray(".hero-main-content");

      // --- 1. ENTRY ANIMATION (remains mostly the same) ---
      gsap.set(mainContent, { opacity: 0, y: 50 });
      gsap.set(bubbles, { opacity: 0, scale: 0.5 });

      const entryTl = gsap.timeline({ delay: 0.5 });
      entryTl
        .to(bubbles, {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          stagger: { each: 0.1, from: "random" },
        })
        .to(
          mainContent,
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 },
          "-=1.2"
        );

      // --- 2. IMPROVED PARALLAX SCROLL ANIMATION ---
      // We loop through each bubble and give it a unique animation based on its data-speed
      bubbles.forEach((bubble) => {
        const speed = parseFloat(bubble.dataset.speed) || 1; // Default speed is 1
        gsap.to(bubble, {
          yPercent: -100 * speed, // Bubbles with higher speed move further
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5, // A slightly slower scrub feels more premium
          },
        });
      });

      // Add a SEPARATE, more subtle parallax for the main content
      gsap.to(mainContent, {
        yPercent: -30, // Moves up slowly
        opacity: 0, // Fades out
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "center top", // Fades out by the time the center of the hero hits the top
          scrub: 1,
        },
      });

      // --- 4. SCROLL JACKING LOGIC (remains the same) ---
      const goToSection = (section) => {
        if (isAnimating) return;
        setIsAnimating(true);
        gsap.to(window, {
          scrollTo: { y: section, autoKill: false },
          duration: 1.5, // Slightly longer duration for a smoother feel
          ease: "power3.inOut",
          onComplete: () => setIsAnimating(false),
        });
      };
      Observer.create({
        target: window,
        type: "wheel,touch",
        onDown: () => {
          const nextSection = document.querySelector("#product");
          if (window.scrollY < 10 && nextSection) {
            goToSection(nextSection);
          }
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, [isAnimating]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-20 text-center"
    >
      <Image
        src="/background/hero_background.JPG"
        alt="Afterdent product collage"
        layout="fill"
        objectFit="cover"
        priority // Good for performance on the first-view image
        className="-z-10"
      />
      <div className="absolute inset-0 bg-red-300/60 -z-10"></div>
      <div className="absolute inset-0">
        {/* Left Side Bubbles */}
        <Image
          src="/ingredients/Q10.png"
          alt="Q10"
          width={120}
          height={120}
          className="hero-bubble absolute top-[20%] left-[5%] md:left-[15%] w-20 md:w-50"
        />
        <Image
          src="/ingredients/Collagen.png"
          alt="Collagen"
          width={140}
          height={140}
          className="hero-bubble absolute top-[45%] left-[-2%] md:left-[5%] w-24 md:w-45"
          data-speed="1.2"
        />
        <Image
          src="/ingredients/Hydroxy.png"
          alt="Hydroxy"
          width={110}
          height={110}
          className="hero-bubble absolute top-[55%] left-[15%] md:left-[20%] w-16 md:w-45"
        />
        <Image
          src="/ingredients/Potassium.png"
          alt="Potassium Nitrate"
          width={130}
          height={130}
          className="hero-bubble absolute top-[75%] left-[15%] md:left-[10%] w-20 md:w-45"
          data-speed="0.8"
        />

        <Image
          src="/ingredients/Craneberry.png"
          alt="Cranberry"
          width={130}
          height={130}
          className="hero-bubble absolute top-[15%] right-[2%] md:right-[20%] w-20 md:w-50"
          data-speed="1.1"
        />
        <Image
          src="/ingredients/Alchoholfree.png"
          alt="Alcohol Free"
          width={110}
          height={110}
          className="hero-bubble absolute top-[40%] right-[8%] md:right-[10%] w-16 md:w-40"
        />
        <Image
          src="/ingredients/Aloevera.png"
          alt="Aloe Vera"
          width={120}
          height={120}
          className="hero-bubble absolute top-[55%] right-[10%] md:right-[20%] w-20 md:w-40"
          data-speed="1.3"
        />
        <Image
          src="/ingredients/Fluoride.png"
          alt="Fluoride"
          width={130}
          height={130}
          className="hero-bubble absolute top-[75%] right-[10%] md:right-[10%] w-24 md:w-40"
          data-speed="0.9"
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center">
          {/* Problem 2 Fix: Wrap the Image in a div and put the ref on the div */}
          <div ref={titleWrapperRef}>
            <Image
              src="/hero/hero_text.png"
              alt="Afterdent product collage"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
          </div>

          <p
            ref={textRef}
            sizes="100vw"
            className="mx-auto mt-4 text-lg md:text-4xl  font-semibold leading-relaxed text-white/90 [text-shadow:2px_2px_4px_rgba(0,0,0,0.1)]"
          >
            สูตรที่หมอใช้ในห้องฟัน !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
