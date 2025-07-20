"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "../ProductCard";

gsap.registerPlugin(ScrollTrigger);

const ProductSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  // --- Refs for each individual product card ---
  const mouthwashCardRef = useRef(null);
  const toothpasteCardRef = useRef(null);
  const retainerBoxCardRef = useRef(null);
  const retainerWashCardRef = useRef(null);
  const retainerWaterBoxCardRef = useRef(null);
  const mouthwashCranberryMintCardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- Title Fade-in Animation ---
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
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // --- Add all product card animations to the timeline ---
      parallaxTl
        .fromTo(mouthwashCardRef.current, { y: 200 }, { y: -200, ease: "none" })
        .fromTo(
          toothpasteCardRef.current,
          { y: 350 },
          { y: -350, ease: "none" },
          "<"
        )
        .fromTo(
          retainerBoxCardRef.current,
          { y: 250 },
          { y: -250, ease: "none" },
          "<"
        )
        .fromTo(
          retainerWashCardRef.current,
          { y: 400 },
          { y: -400, ease: "none" },
          "<"
        )
        .fromTo(
          retainerWaterBoxCardRef.current,
          { y: 300 },
          { y: -300, ease: "none" },
          "<"
        )
        .fromTo(
          mouthwashCranberryMintCardRef.current,
          { y: 450 },
          { y: -450, ease: "none" },
          "<"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="product"
      ref={sectionRef}
      className="text-center flex flex-col py-28 justify-center bg-white min-h-screen relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl h-full px-4">
        <div ref={titleRef}>
          <h2 className="mb-12 text-4xl font-extrabold uppercase md:text-5xl">
            <span className="text-[#009B72]">Product </span>
            <span className="text-[#F58220]">Collection</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-24 md:grid-cols-2 md:gap-x-16">
          {/* 
            TODO: Replace the placeholder URLs below with your actual Shopee product links.
          */}
          <div ref={mouthwashCardRef}>
            <ProductCard
              productUrl="#mouthwash"
              imageSrc="/products/mouthwash.png"
              title="น้ำยาบ้วนปาก AFTERDENT CRANBERRY"
              imageClassName="w-40"
            />
          </div>
          <div ref={toothpasteCardRef}>
            <ProductCard
              productUrl="#toothpaste"
              imageSrc="/products/toothpaste.png"
              title="ยาสีฟัน AFTERDENT CRANBERRY DELIGHT"
              imageClassName="w-50"
            />
          </div>
          <div ref={retainerBoxCardRef}>
            <ProductCard
              productUrl="https://shopee.co.th/%E0%B8%81%E0%B8%A5%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%AA%E0%B9%88%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%97%E0%B8%99%E0%B9%80%E0%B8%99%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89-AFTERDENT-i.135011894.9691428924"
              imageSrc="/products/retainerBox.png"
              title="กล่องใส่รีเทนเนอร์ Afterdent"
              imageClassName="w-50"
            />
          </div>
          <div ref={retainerWashCardRef}>
            <ProductCard
              productUrl="https://shopee.co.th/%E0%B8%81%E0%B8%A5%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%8A%E0%B9%88%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%97%E0%B8%99%E0%B9%80%E0%B8%99%E0%B8%AD%E0%B8%A3%E0%B9%8C-AFTERDENT-%E0%B8%9E%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%A1%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1-%E0%B8%AA%E0%B8%B5%E0%B8%94%E0%B8%B3-%E0%B8%9F%E0%B9%89%E0%B8%B2-%E0%B8%AA%E0%B9%89%E0%B8%A1--i.135011894.26624718928"
              imageSrc="/products/retainerWash.png"
              title="เม็ดฟู่ทำความสะอาดรีเทนเนอร์"
              imageClassName="w-70"
            />
          </div>
          <div ref={retainerWaterBoxCardRef}>
            <ProductCard
              productUrl="https://shopee.co.th/buyer/login?fu_tracking_id=808c8391e8e-8615-4e79-a4a6-661087777992&next=https%3A%2F%2Fshopee.co.th%2F%25E0%25B8%2581%25E0%25B8%25A5%25E0%25B9%2588%25E0%25B8%25AD%25E0%25B8%2587%25E0%25B9%2583%25E0%25B8%25AA%25E0%25B9%2588%25E0%25B8%25A3%25E0%25B8%25B5%25E0%25B9%2580%25E0%25B8%2597%25E0%25B8%2599%25E0%25B9%2580%25E0%25B8%2599%25E0%25B8%25AD%25E0%25B8%25A3%25E0%25B9%258C-%25E0%25B9%2581%25E0%25B8%25A5%25E0%25B8%25B0%25E0%25B8%25AD%25E0%25B8%25B8%25E0%25B8%259B%25E0%25B8%2581%25E0%25B8%25A3%25E0%25B8%2593%25E0%25B9%258C%25E0%25B8%2588%25E0%25B8%25B1%25E0%25B8%2594%25E0%25B8%259F%25E0%25B8%25B1%25E0%25B8%2599%25E0%25B9%2583%25E0%25B8%25AA-AFTERDENT-%25E0%25B8%259E%25E0%25B8%25A3%25E0%25B8%25B5%25E0%25B9%2580%25E0%25B8%25A1%25E0%25B8%25B5%25E0%25B8%25A2%25E0%25B8%25A1-i.135011894.24413737742"
              imageSrc="/products/retainerWaterBox.png"
              title="แก้วแช่รีเทนเนอร์"
              imageClassName="w-70"
            />
          </div>
          <div ref={mouthwashCranberryMintCardRef}>
            <ProductCard
              productUrl="https://shopee.co.th/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B9%89%E0%B8%A7%E0%B8%99%E0%B8%9B%E0%B8%B2%E0%B8%81-AFTERDENT-%E0%B8%AA%E0%B8%94%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%99-%E0%B8%A5%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B2%E0%B8%94%E0%B9%81%E0%B8%9C%E0%B8%A5%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%9B%E0%B8%B2%E0%B8%81-%E0%B8%81%E0%B8%A5%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B9%81%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88-%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B9%8C--i.135011894.2395811065"
              imageSrc="/products/mouthwashCranBerryandMint.png"
              title="น้ำยาบ้วนปาก CRANBERRY & MINT"
              imageClassName="w-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
