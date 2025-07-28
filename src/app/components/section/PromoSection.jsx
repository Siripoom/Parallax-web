"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import MaskedText from "../../components/MaskedText"; // Import our updated component

gsap.registerPlugin(ScrollTrigger);

const PromoSection = () => {
  const sectionRef = useRef(null);
  const maskedTextRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Add parallax effect to the masked text
      gsap.to(maskedTextRef.current, {
        yPercent: -20, // Move the text up as we scroll down
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-bleed background image */}
      <Image
        src="/background/promo-background.jpg" // The beautiful background with flowers/fabric
        alt="Product background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* The masked text component layered on top */}
      <div ref={maskedTextRef} className="relative z-10 w-full max-w-5xl px-4">
        <MaskedText
          text="AFTERDENT"
          imageSrc="/background/promo-text-fill.jpg" // The image you want INSIDE the text
        />
      </div>
    </section>
  );
};

export default PromoSection;
