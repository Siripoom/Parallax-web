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

// --- Data for the component ---
// This makes the JSX much cleaner and easier to manage.
const extracts = [
  {
    name: "COENZYME Q10",
    description: "เพิ่มความชุ่มชื้น เร่งสมานแผลและสร้างคอลลาเจน",
    src: "/icon/mouthwash/extract/Aloe.png",
  },
  {
    name: "ALOE VERA EXTRACT",
    description: "ลดการอักเสบ ปลอบประโลมเนื้อเยื่อ ในช่องปาก",
    src: "/icon/mouthwash/extract/",
  },
  {
    name: "CRANBERRY EXTRACT",
    description:
      "Jans PROANTHOCYANIDINS (PACS) ที่ช่วยยับยั้งการเกาะของแบคทีเรียบนผิวฟัน",
    src: "",
  },
  {
    name: "HYDROXYAPATITE",
    description: "ลดเสียวฟัน และเสริมความแข็งแรงให้ ผิวเคลือบฟัน",
    src: "",
  },
  {
    name: "VITAMIN C",
    description: "ลดการอักเสบ ป้องกันเลือดออกตามไรฟัน",
    src: "",
  },
];

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

const manualTip = [
  {
    name: "1.บีบน้ำยาขึ้นมาอยู่ที่คอขวดแล้วปล่อยมือ น้ำยาบ้วนปากจะขึ้นมาประมาณ 10-15 มล. ซึ่งทำให้ประหยัดและเพียงพอต่อการบ้วนปากหนึ่งครั้ง",
    src: "/products/mouthwash.png",
  },
  {
    name: "2.กลั้วปากให้ทั่วประมาณ 30 วินาที แล้วบ้วนทิ้ง",
    src: "/products/mouthwash.png",
  },
  {
    name: "3.ปิดฝาให้สนิทลังใช้งานโดยใช้ วันละ 2 ครั้ง หลังการแปรงฟันหรือมื้ออาหาร",
    src: "/products/mouthwash.png",
  },
];

const MouthwashSection = () => {
  const mainRef = useRef(null);
  const imageColumnRef = useRef(null);
  const textColumnRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- THE PINNING & PARALLAX ANIMATION (remains the same) ---
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: `+=${textColumnRef.current.offsetHeight}`, // End after the text column has fully scrolled
          pin: imageColumnRef.current,
          scrub: 1,
        },
      });

      // Animate bubbles based on the main timeline
      timeline.fromTo(
        ".parallax-bubble",
        { yPercent: (i) => 80 + i * 20 },
        { yPercent: (i) => -40 - i * 10, ease: "none", stagger: 0.1 },
        0
      );
    }, mainRef);
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
            className="parallax-bubble absolute   top-1/4 left-[-30px] md:left-20  z-0"
          />
          <Image
            src="/ingredients/Craneberry.png"
            alt="Craneberry"
            width={190}
            height={190}
            className="parallax-bubble absolute  top-1/4 right-[-30px] md:right-20  z-0"
          />
          <Image
            src="/ingredients/Q10.png"
            alt="Q10"
            width={195}
            height={195}
            className="parallax-bubble absolute mt-10 bottom-1/4 left-[-120px] md:left-20  z-0"
          />

          <Image
            src="/ingredients/Alchoholfree.png"
            alt="Alcohol Free"
            width={210}
            height={210}
            className="parallax-bubble absolute  bottom-1/4 right-[-120px] md:right-20  z-0"
          />

          <Image
            src="/ingredients/Collagen.png"
            alt="Collagen"
            width={190}
            height={190}
            className="parallax-bubble absolute mt-10 top-2/3 left-12  z-0"
          />
          <Image
            src="/ingredients/Aloevera.png"
            alt="Alore Vera"
            width={190}
            height={190}
            className="parallax-bubble absolute mt-10 top-2/3 right-12  z-0"
          />

          <div className="absolute bottom-12 z-5 flex items-center justify-between">
            {/* Static Slogans */}
            <Image
              src="/slogan/slogan.png"
              alt="Slogan"
              width={130}
              height={130}
              className=" right-10 hidden md:block md:right-12 z-0"
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
          <div className="relative flex h-[300px] w-[300px] items-center justify-center">
            <div className="absolute inset-0 z-0 w-[300px] h-[300px]   rounded-full bg-red-300/20"></div>
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
            <h1 className="text-3xl font-bold">
              Mouthwash AFTERDENT Cranberry Flavour 500 ml.
            </h1>
            <h2 className="mt-2 text-2xl font-bold">
              น้ำยาบ้วนปากขนาด 500 มิลลิลิตร
            </h2>
          </div>

          <div className="infographic-section">
            <PropertiesGraph data={propertiesData} />
          </div>

          <div className="infographic-section">
            <div>
              <h3 className="mb-8 text-2xl font-bold text-red-700">ส่วนผสม</h3>
              <div className="flex flex-col items-center gap-4">
                {/* Top Row */}
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col items-center  text-center">
                    <Image
                      src="/ingredients/glucoside.png"
                      alt="glucoside"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-sm text-red-700 font-bold">Glucoside</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/ingredients/mineralWater.png"
                      alt="ALOE VERA EXTRACT"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-sm text-red-700 font-bold">
                      mineralWater
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/ingredients/paperMint.png"
                      alt="CRANBERRY EXTRACT"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-sm text-red-700 font-bold">PepperMint</p>
                  </div>
                </div>
                {/* Bottom Row */}
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/ingredients/eucalyptol.png"
                      alt="Q10"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-sm text-red-700 font-bold">
                      HYDROXYAPATITE
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/ingredients/spearMint.png"
                      alt="VITAMIN C"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-sm text-red-700 font-bold">VITAMIN C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="infographic-section">
            <div>
              <h3 className="mb-8 text-2xl font-bold text-red-700">สารสกัด</h3>
              <div className="flex flex-col items-center gap-4">
                {/* Top Row */}
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col items-center  text-center">
                    <Image
                      src="/icon/mouthwash/extract/Q10.png"
                      alt="Q10"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-sm text-red-700 font-bold">
                      Coenzyme Q10
                    </p>
                    <p>เพิ่มความชุ่มชื้น เร่งสมานแผลและสร้างคอลลาเจน</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/icon/mouthwash/extract/Aloe.png"
                      alt="ALOE VERA EXTRACT"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-sm text-red-700 font-bold">
                      ALOE VERA EXTRACT
                    </p>
                    <p>ลดการอักเสบ ปลอบประโลมเนื้อเยื่อ ในช่องปาก</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/icon/mouthwash/extract/cranBerry.png"
                      alt="CRANBERRY EXTRACT"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-sm text-red-700 font-bold">
                      CRANBERRY EXTRACT
                    </p>
                    <p>ช่วยยับยั้งการเกาะของแบคทีเรียบนผิวฟัน</p>
                  </div>
                </div>
                {/* Bottom Row */}
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/icon/mouthwash/extract/Hydro.png"
                      alt="Q10"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-sm text-red-700 font-bold">
                      HYDROXYAPATITE
                    </p>
                    <p>ลดเสียวฟัน และเสริมความแข็งแรงให้ ผิวเคลือบฟัน</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/icon/mouthwash/extract/vitC.png"
                      alt="VITAMIN C"
                      className="rounded-full opacity-75 my-3"
                      width={90}
                      height={90}
                    />
                    <p className="text-sm text-red-700 font-bold">VITAMIN C</p>
                    <p>ลดการอักเสบ ป้องกันเลือดออกตามไรฟัน</p>
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
            <div className="grid grid-cols-2 gap-4">
              {onlineStores.map((store) => (
                <StoreButton key={store.alt} {...store} />
              ))}
            </div>
            <Link href="#sales-channels" class="flex items-center my-6 w-full">
              <hr class="flex-grow border-t-2 border-gray-400" />
              <p class="mx-4 text-gray-700 whitespace-nowrap">ช่องทางอื่น ๆ</p>
              <hr class="flex-grow border-t-2 border-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MouthwashSection;
