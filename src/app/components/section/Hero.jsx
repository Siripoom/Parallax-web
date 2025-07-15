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
      // --- Entry Animation ---
      // Animate the wrapper div instead of the Image component directly
      gsap.from(titleWrapperRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      // --- Scroll Jacking Logic ---
      const goToSection = (section) => {
        if (isAnimating) return;
        setIsAnimating(true);

        // This animation will now work correctly
        gsap.to(window, {
          scrollTo: { y: section, autoKill: false },
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => setIsAnimating(false),
        });
      };

      Observer.create({
        target: window,
        type: "wheel,touch",
        onDown: () => {
          const productSection = document.querySelector("#product");
          if (window.scrollY < 10 && productSection) {
            goToSection(productSection);
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

      <div className="mx-auto w-full max-w-6xl">
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
