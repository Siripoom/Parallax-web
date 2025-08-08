"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import PropertiesGraph from "../productElement/PropertiesGraph";
import StoreButton from "../StoreButton";
import ManualGraph from "../productElement/ManualGraph";

gsap.registerPlugin(ScrollTrigger);

// After (with bgSrc property)
const propertiesData = [
  {
    bgSrc: "/property/fresh.png", // Path to image in /public folder
    points: [
      "ลดเสียวฟันทันทีและแก้ให้หายขาด",
      "ซ่อมแซมและเคลือบผิวฟันให้แข็งแรงป้องกันฟันผุ",
      "ขจัดคราบพลัค และช่วยให้ฟันขาวขึ้น",
    ],
  },
  {
    bgSrc: "/property/protect.png", // Path to image in /public folder
    points: ["ลดอักเสบ เร่งสมานแผล", "กระตุ้นคอลลาเจน"],
  },
  {
    bgSrc: "/property/bacteria.png", // Path to image in /public folder
    points: ["ดับกลิ่นปากได้ยาวนาน", "ยับยั้ง Bacteria"],
  },
  {
    bgSrc: "/property/bacteria.png", // Path to image in /public folder
    points: ["ใช้ง่าย ประหยัด #บีบแล้วบ้วน", "สูตรเจลอ่อนโยน"],
  },
];

const onlineStores = [
  {
    href: "https://shopee.co.th/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B9%89%E0%B8%A7%E0%B8%99%E0%B8%9B%E0%B8%B2%E0%B8%81-AFTERDENT-%E0%B8%81%E0%B8%A5%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B9%81%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88-%E0%B9%82%E0%B8%89%E0%B8%A1%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-i.135011894.29975611175",
    src: "/channels/online/shoppee.png",
    alt: "Shopee",
    name: "Shopee",
  },
  {
    href: "https://www.lazada.co.th/products/pdp-i5601479891-s23835100665.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Aafterdent%253Bnid%253A5601479891%253Bsrc%253ALazadaMainSrp%253Brn%253A8d2ddb5d3c2c5700480afe592d797593%253Bregion%253Ath%253Bsku%253A5601479891_TH%253Bprice%253A195%253Bclient%253Adesktop%253Bsupplier_id%253A1000125213%253Bbiz_source%253Ah5_hp%253Bslot%253A3%253Butlog_bucket_id%253A470687%253Basc_category_id%253A4197%253Bitem_id%253A5601479891%253Bsku_id%253A23835100665%253Bshop_id%253A361907%253BtemplateInfo%253A107882_D_E%2523-1_A3_C%25231103_L%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3&price=195&priceCompare=skuId%3A23835100665%3Bsource%3Alazada-search-voucher%3Bsn%3A8d2ddb5d3c2c5700480afe592d797593%3BoriginPrice%3A19500%3BdisplayPrice%3A19500%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1751258729455&ratingscore=5.0&request_id=8d2ddb5d3c2c5700480afe592d797593&review=3&sale=23&search=1&source=search&spm=a2o4m.searchlist.list.3&stock=1",
    src: "/channels/online/lazada.png",
    alt: "Lazada",
    name: "Lazada",
  },
];

// In MouthwashSection.jsx or wherever the data is defined

const manualTip = [
  {
    // Changed `src` to `videoSrc` for clarity
    videoSrc: "/step/step1.mp4",
    text: "1. บีบน้ำยาขึ้นมาอยู่ที่คอขวดแล้วปล่อยมือ น้ำยาบ้วนปากจะขึ้นมาประมาณ 10-15 มล. ซึ่งทำให้ประหยัดและเพียงพอต่อการบ้วนปากหนึ่งครั้ง",
  },
  {
    videoSrc: "/step/step2.mp4",
    text: "2. กลั้วปากให้ทั่วประมาณ 30 วินาที แล้วบ้วนทิ้ง",
  },
  {
    videoSrc: "/step/step4.mp4",
    text: "3. ปิดฝาให้สนิทลังใช้งานโดยใช้ วันละ 2 ครั้ง หลังการแปรงฟันหรือมื้ออาหาร",
  },
];

const MouthwashSection = () => {
  const mainRef = useRef(null);
  const imageColumnRef = useRef(null);
  const textColumnRef = useRef(null);

  // In src/components/MouthwashSection.jsx

  // In src/components/MouthwashSection.jsx

  // In your component file (e.g., MouthwashSection.jsx)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Use ScrollTrigger's matchMedia for responsive animations
      ScrollTrigger.matchMedia({
        // --- DESKTOP ANIMATIONS ---
        "(min-width: 768px)": () => {
          const bubbles = gsap.utils.toArray(".parallax-bubble");

          // 1. Bubble Entry/Exit Animation for Desktop
          const bubbleEntryTl = gsap.timeline({ paused: true });
          bubbleEntryTl.from(bubbles, {
            opacity: 0,
            scale: 0.8,
            y: 50,
            duration: 1.2,
            ease: "power3.out",
            stagger: { each: 0.1, from: "random" },
          });

          ScrollTrigger.create({
            trigger: mainRef.current,
            start: "top 80%",
            end: "bottom 20%",
            animation: bubbleEntryTl,
            toggleActions: "play reverse play reverse",
          });

          // 2. The Pinning & Parallax Timeline for Desktop
          const pinningTl = gsap.timeline({
            scrollTrigger: {
              trigger: mainRef.current,
              start: "top top",
              end: `+=${textColumnRef.current.offsetHeight}`,
              pin: imageColumnRef.current,
              scrub: 1.5, // A slightly slower scrub can feel more premium
            },
          });
        },

        // --- MOBILE ANIMATIONS ---
        "(max-width: 767px)": () => {
          // NO PINNING on mobile. The layout will stack naturally.

          // Simple fade-in animations for each major block
          const sectionsToAnimate = gsap.utils.toArray([
            imageColumnRef.current,
            textColumnRef.current,
          ]);

          sectionsToAnimate.forEach((section) => {
            gsap.from(section, {
              opacity: 0,
              y: 50,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "restart none none none",
              },
            });
          });
        },
      }); // End of matchMedia
    }, mainRef); // Main context for cleanup

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={mainRef}
      id="mouthwash"
      className="relative overflow-hidden bg-gradient-to-br from-[#ffe6f0] via-[#fdd6e5] to-[#fcbfd6]"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* === PINNED LEFT COLUMN (Visuals) === */}
        <div
          ref={imageColumnRef}
          className="relative flex h-screen items-center justify-center"
        >
          {/* Parallax Bubbles */}
          <Image
            src="/ingredients/Hydroxy.png"
            alt="Hydroxyapatite Collagen"
            width={190}
            height={190}
            // Mobile: Closer to the edge. Desktop: Further out.
            className="parallax-bubble hidden md:hidden lg:block absolute w-[25%] h-[25%]  md:w-[20%] md:h-[20%] lg:w-[25%] lg:h-[25%]  lg:w-50 top-1/4  z-0 left-20"
          />

          {/* Cranberry - Top Right */}
          <Image
            src="/ingredients/Craneberry.png"
            alt="Craneberry"
            width={190}
            height={190}
            // Mobile: Closer. Desktop: Further.
            className="parallax-bubble hidden  md:hidden lg:block absolute w-[25%] h-[25%]  md:w-[20%] md:h-[20%] lg:w-[25%] lg:h-[25%]   top-1/4  z-0 right-20"
          />

          {/* Q10 - Mid Left */}
          <Image
            src="/ingredients/Q10.png"
            alt="Q10"
            width={195}
            height={195}
            // Mobile: Hidden entirely to reduce clutter. Desktop: Visible.
            className="parallax-bubble hidden  md:hidden lg:block absolute w-[25%] h-[25%]  md:w-[20%] md:h-[20%] lg:w-[25%] lg:h-[25%]   bottom-1/4 z-0 hidden md:block left-20"
          />

          {/* Alcohol Free - Mid Right */}
          <Image
            src="/ingredients/Alchoholfree.png"
            alt="Alcohol Free"
            width={210}
            height={210}
            className="parallax-bubble hidden  md:hidden lg:block absolute w-[25%] h-[25%]  md:w-[20%] md:h-[20%] lg:w-[25%] lg:h-[25%]   bottom-1/4  z-0 hidden md:block right-20"
          />

          {/* Collagen - Bottom Left */}
          <Image
            src="/ingredients/Collagen.png"
            alt="Collagen"
            width={190}
            height={190}
            // Mobile: Tucked in. Desktop: Spread out.
            className="parallax-bubble hidden  md:hidden lg:block absolute w-[25%] h-[25%]  md:w-[20%] md:h-[20%] lg:w-[25%] lg:h-[25%]   top-2/3 z-0 mt-10 left-12"
          />

          {/* Aloe Vera - Bottom Right */}
          <Image
            src="/ingredients/Aloevera.png"
            alt="Aloe Vera"
            width={190}
            height={190}
            // Mobile: Tucked in. Desktop: Spread out.
            className="parallax-bubble hidden lg:block absolute w-[25%] h-[25%]  md:w-[20%] md:h-[20%] lg:w-[25%] lg:h-[25%]   top-2/3 z-0 mt-10 right-12"
          />

          <div className="absolute bottom-[-40px] md:bottom-[-20px] lg:bottom-1 z-5 flex items-center justify-between">
            {/* Static Slogans */}
            <Image
              src="/slogan/slogan.png"
              alt="Slogan"
              width={130}
              height={130}
              className=" right-10  md:right-12 z-0"
            />
            <Image
              src="/slogan/alcohol.png"
              alt="Alcohol Free"
              width={150}
              height={150}
            />
            <Image
              src="/slogan/sugarfree.png"
              alt="Sugar Free"
              width={100}
              height={100}
            />
          </div>

          {/* Main Product Image */}
          <div className="relative flex flex-col md:flex-row h-[300px] w-[300px] items-center justify-center">
            <div className="absolute inset-0 z-0 w-[300px] h-[300px]   rounded-full bg-red-300/20"></div>
            <h1 className="text-xl block md:hidden text-center  md:text-3xl font-bold">
              Cranberry Mouthwash
            </h1>
            <Image
              src="/products/mouthwash.png"
              alt="Mouthwash Bottle"
              width={200}
              height={450}
              className="relative z-10 drop-shadow-lg"
            />
            <div className="absolute bottom-[-80px] z-0 h-10 w-4/5 rounded-full bg-black/20 blur-xl"></div>
          </div>
        </div>

        {/* === SCROLLING RIGHT COLUMN (Text Content) === */}
        <div
          ref={textColumnRef}
          className="flex flex-col items-center justify-center gap-8 py-24 px-4 text-center"
        >
          <div className="content-card">
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold hidden md:block md:text-3xl font-bold">
              Cranberry Mouthwash
            </h1>
          </div>

          <div className="infographic-section">
            <PropertiesGraph data={propertiesData} />
          </div>

          <div className="infographic-section">
            <div>
              <h3 className="mb-8 text-2xl font-bold text-red-700">ส่วนผสม</h3>
              <div className="items-center gap-4">
                <div className="grid md:grid-cols-2 justify-center gap-4">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/icon/mouthwash/extract/cranBerry.png"
                      alt="Q10"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <div className="group-card bg-white rounded-2xl p-3 shadow-md ">
                      <p className="text-sm text-red-700 font-bold">
                        Mix Berry
                      </p>
                      <p>
                        รวมสารสกัดจาก 5 เบอร์รี่ อุดมด้วยวิตามินซีและ
                        สารต้านอนุมูลอิสระ ช่วยลดเชื้อแบคทีเรียในช่อง ปาก
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/icon/mouthwash/extract/Aloe.png"
                      alt="ALOE VERA EXTRACT"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <div className="group-card bg-white rounded-2xl p-3 shadow-md ">
                      <p className="text-sm text-red-700 font-bold">
                        Coenzyme Q10 & Aloe Vera
                      </p>
                      <p>
                        ฟื้นฟูเซลล์ผิว ลดอักเสบ เพิ่มความชุ่มชื้น
                        กระตุ้นคอลลาเจน และสมานแผลได้เร็วขึ้น
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/icon/mouthwash/extract/Hydro.png"
                      alt="CRANBERRY EXTRACT"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <div className="group-card bg-white rounded-2xl p-3 shadow-md ">
                      <p className="text-sm text-red-700 font-bold">
                        Kalident 100 (Hydroxyapatite)
                      </p>
                      <p>
                        ฟื้นฟูและเติมเต็มผิวฟันที่เสียหาย เสริมเกราะให้ แข็งแรง
                        ลดเสียวฟัน ป้องกันฟันผุ
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center ">
                    <Image
                      src="/icon/mouthwash/extract/Hydro.png"
                      alt="Q10"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <div className="group-card bg-white rounded-2xl p-3 shadow-md ">
                      <p className="text-sm text-red-700 font-bold">
                        Hydrosol Fresh Cool
                      </p>
                      <p>ให้ความเย็น สดชื่นยาวนานโดยไม่แสบปาก</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid  gap-4">
            <ManualGraph data={manualTip} />
          </div>

          <div className="content-card bg-white/50 shadow-sm flex w-full max-w-md flex-col items-center gap-4 rounded-2xl p-6">
            <h2 className="text-2xl font-bold rounded-full p-3 bg-red-700  text-white">
              ช่องทางการสั่งซื้อ
            </h2>
            <div className="grid lg:grid-cols-2 gap-4">
              {onlineStores.map((store) => (
                <StoreButton key={store.alt} {...store} />
              ))}
            </div>
            <Link
              href="#sales-channels"
              className="flex items-center my-6 w-full"
            >
              <hr className="flex-grow border-t-2 border-gray-400" />
              <p className="mx-4 text-gray-700 whitespace-nowrap">
                ช่องทางอื่น ๆ
              </p>
              <hr className="flex-grow border-t-2 border-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MouthwashSection;
