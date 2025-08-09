"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import PropertiesGraph from "../productElement/PropertiesGraph";
import StoreButton from "../StoreButton";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// After (with bgSrc property)
const propertiesData = [
  {
    bgSrc: "/property/fresh.png", // Path to image in /public folder
    points: ["ลดกลิ่นปาก", "ลมหายใจสดชื่น"],
  },
  {
    bgSrc: "/property/protect.png", // Path to image in /public folder
    points: ["เสริมความแข็งแรงให้ผิวเคลือบฟัน", "ป้องกันฟันผุ"],
  },
  {
    bgSrc: "/property/bacteria.png", // Path to image in /public folder
    points: ["ปลอบประโลมเหงือก", "ลดการอักเสบ"],
  },
];

const onlineStores = [
  {
    href: "https://shopee.co.th/%E0%B8%A2%E0%B8%B2%E0%B8%AA%E0%B8%B5%E0%B8%9F%E0%B8%B1%E0%B8%99-AFTERDENT-Cranberry-Delight-%E0%B8%8A%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%99-%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%9C%E0%B8%A5%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%9B%E0%B8%B2%E0%B8%81-i.135011894.12024470629",
    src: "/channels/online/shoppee.png",
    alt: "Shopee",
  },
  {
    href: "https://www.lazada.co.th/products/pdp-i2837290592-s10359248965.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Aafterdent%253Bnid%253A2837290592%253Bsrc%253ALazadaMainSrp%253Brn%253A10efd815712cc394703ad6a2f3800a20%253Bregion%253Ath%253Bsku%253A2837290592_TH%253Bprice%253A195%253Bclient%253Adesktop%253Bsupplier_id%253A1000125213%253Bbiz_source%253Ah5_internal%253Bslot%253A1%253Butlog_bucket_id%253A470687%253Basc_category_id%253A4196%253Bitem_id%253A2837290592%253Bsku_id%253A10359248965%253Bshop_id%253A361907%253BtemplateInfo%253A107882_D_E%25231103_L%2523-1_A3_C%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3&price=195&priceCompare=skuId%3A10359248965%3Bsource%3Alazada-search-voucher%3Bsn%3A10efd815712cc394703ad6a2f3800a20%3BoriginPrice%3A19500%3BdisplayPrice%3A19500%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1751258572124&ratingscore=5.0&request_id=10efd815712cc394703ad6a2f3800a20&review=37&sale=97&search=1&source=search&spm=a2o4m.searchlist.list.1&stock=1",
    src: "/channels/online/lazada.png",
    alt: "Lazada",
  },
];

const ToothpasteSection = () => {
  const mainRef = useRef(null);
  const imageColumnRef = useRef(null);
  const textColumnRef = useRef(null);

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
      id="toothpaste"
      className="relative overflow-hidden bg-white"
    >
      {/* We reverse the column order on desktop using `md:grid-cols-[1fr_1fr]` and `md:order-last` */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* === SCROLLING LEFT COLUMN (Text Content) === */}
        <div
          ref={textColumnRef}
          className="flex flex-col order-2 md:order-1 items-center justify-center gap-8 py-24 px-4 text-center"
        >
          <div className="content-card-tp">
            <h1 className="text-3xl hidden md:block font-bold">
              Afterdent Cranberry Delight Toothpaste
            </h1>
          </div>

          <div className="infographic-section">
            <div>
              <h3 className="mb-8 text-2xl font-bold text-red-700">ส่วนผสม</h3>
              <div className="flex flex-col items-center gap-4">
                {/* Top Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col items-center  text-center">
                    <Image
                      src="/icon/mouthwash/extract/cranBerry.png"
                      alt="Q10"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-xl text-red-700 font-bold">Mix Berry</p>
                    <p className="text-lg my-2">
                      รวมสารสกัดจาก 5 เบอร์รี่ อุดมด้วยวิตามินซีและ
                      สารต้านอนุมูลอิสระ ช่วยลดเชื้อแบคทีเรียในช่อง
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/icon/mouthwash/extract/Aloe.png"
                      alt="ALOE VERA EXTRACT"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-xl text-red-700 font-bold">
                      Coenzyme Q10 & Aloe Vera
                    </p>
                    <p className="text-lg my-2">
                      ฟื้นฟูเซลล์ผิว ลดการอักเสบ เพิ่มความชุ่มชื้น
                      กระตุ้นคอลลาเจน และสมานแผลได้เร็วขึ้น
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/icon/toothPaste/extract/KNO.png"
                      alt="CRANBERRY EXTRACT"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-xl text-red-700 font-bold">
                      Potassium Nitrate
                    </p>
                    <p className="text-lg my-2">ลดอาการเสียวฟันทันที</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/icon/toothPaste/extract/Nacl.png"
                      alt="CRANBERRY EXTRACT"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-xl text-red-700 font-bold">
                      Sodium Chloride
                    </p>
                    <p className="text-lg my-2">ช่วยขจัดคราบอาหาร คราบพลัค</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/icon/mouthwash/extract/Fluorite.png"
                      alt="Fluorite"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-xl text-red-700 font-bold">
                      Fluoride 1,500 ppm
                    </p>
                    <p className="text-lg my-2">
                      ฟลูออไรด์สูงสุด ที่ช่วยซ่อมแซมผิวฟัน เสริมความ แข็งแรง
                      และป้องกันฟันผุ ปราศจากสารเคมีที่เป็นอันตรายต่อ ช่องปาก
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-card bg-white/50 shadow-sm flex w-full max-w-full flex-col items-center gap-4 rounded-2xl p-6">
            <h2 className="text-2xl font-bold rounded-full p-3 bg-red-700  text-white">
              ช่องทางการสั่งซื้อ
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
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

        {/* === PINNED RIGHT COLUMN (Visuals) === */}
        {/* We use `md:order-last` to ensure it's the second column on desktop */}
        <div
          ref={imageColumnRef}
          className="order-1 md:order-2 relative flex h-screen items-center justify-center md:order-last"
        >
          {/* Parallax Bubbles */}
          <Image
            src="/ingredients/Q10.png"
            alt="Q10"
            width={190}
            height={190}
            className="parallax-bubble absolute hidden lg:block top-1/4 right-20  z-0"
          />
          <Image
            src="/ingredients/Fluoride.png"
            alt="Fluoride"
            width={210}
            height={210}
            className="parallax-bubble absolute hidden lg:block bottom-1/4 mb-20 right-10  z-0"
          />
          <Image
            src="/ingredients/Potassium.png"
            alt="Potassium"
            width={190}
            height={190}
            className="parallax-bubble absolute hidden lg:block top-2/3 right-5 z-0"
          />

          <Image
            src="/ingredients/Alchoholfree.png"
            alt="Alcohol Free"
            width={210}
            height={210}
            className="parallax-bubble absolute hidden lg:block mt-20  left-1  z-0"
          />
          <Image
            src="/ingredients/Aloevera.png"
            alt="Alore Vera"
            width={190}
            height={190}
            className="parallax-bubble absolute hidden lg:block  top-2/3 left-5  z-0"
          />

          <Image
            src="/ingredients/Craneberry.png"
            alt="Craneberry"
            width={190}
            height={190}
            className="parallax-bubble absolute hidden lg:block  top-1/4   left-5  z-0"
          />

          <div className="absolute bottom-0 z-5 flex items-center">
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
          <div className="relative h-[300px] w-[300px] items-center justify-center">
            <div className="absolute inset-0 z-0 h-[300px] w-[300px] rounded-full bg-red-300/20"></div>
            <h1 className="text-xl text-center md:hidden font-bold">
              Afterdent Cranberry Delight Toothpaste
            </h1>
            <Image
              src="/products/toothpaste.png"
              alt="Toothpaste and box"
              width={250}
              height={450}
              className="relative z-10 drop-shadow-lg"
            />
            <div className="absolute bottom-[-80px] z-0 h-10 w-4/5  rounded-full bg-black/60 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToothpasteSection;
