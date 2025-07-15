"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import IngredientCard from "../IngredientCard"; // Reusing the same components
import StoreButton from "../StoreButton";

gsap.registerPlugin(ScrollTrigger);

// --- Data for this specific component ---
const ingredients = [
  {
    name: "COENZYME Q10",
    description: "กระตุ้นการสร้างคอลลาเจน และบํารุงเหงือก ให้แข็งแรง",
  },
  {
    name: "ALOE VERA EXTRACT",
    description: "เพิ่มความชุ่มชื้นในช่องปาก ลด อาการปากแห้งและลดการอักเสบ",
  },
  {
    name: "POTASSIUM NITRATE",
    description: "สารสําคัญที่ช่วยลดอาการ เสียวฟัน ได้อย่างมีประสิทธิภาพ",
  }, // Example new ingredient
  {
    name: "SODIUM CHLORIDE",
    description: "ลดการอักเสบและช่วยกระชับเหงือก ",
  },
  { name: "VITAMIN C", description: "ลดการอักเสบ ป้องกันเลือดออกตามไรฟัน" },
  {
    name: "CRANBERRY EXTRACT",
    description:
      "มีสาร PROANTHOCYANIDINS (PACS) ที่ช่วยยับยั้งการเกาะของแบคทีเรียบนผิวฟัน",
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
      // --- THE PINNING & PARALLAX ANIMATION ---
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: `+=${textColumnRef.current.offsetHeight}`,
          pin: imageColumnRef.current,
          scrub: 1,
        },
      });

      // Animate bubbles - note the classes are the same for reusability
      timeline.fromTo(
        ".parallax-bubble-tp",
        { yPercent: (i) => 80 + i * 20 },
        { yPercent: (i) => -40 - i * 10, ease: "none", stagger: 0.1 },
        0
      );

      // --- CONTENT FADE-IN ANIMATION ---
      // We use the same animation logic as the mouthwash section
      const contentCards = gsap.utils.toArray(".content-card-tp");
    }, mainRef);
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
          className="flex flex-col items-center justify-center gap-8 py-24 px-4 text-center"
        >
          <div className="content-card-tp">
            <h1 className="text-3xl font-bold">Cranberry Delight Toothpaste</h1>
            <h2 className="mt-2 text-2xl font-bold">
              ยาสีฟัน สูตรแครนเบอร์รี่ ดีไลท์
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {ingredients.map((item, index) => (
              // Note the new class for unique targeting
              <IngredientCard
                key={index}
                name={item.name}
                description={item.description}
                className="content-card-tp bg-gray-50"
              />
            ))}
          </div>

          <div className="content-card-tp bg-gray-50 shadow-sm flex flex-col gap-3 rounded-2xl p-6 w-full">
            <h2 className="mb-4 text-2xl font-bold">วิธีใช้งาน</h2>
            <p className="text-left text-lg leading-relaxed">
              ใช้แปรงฟันอย่างน้อยวันละ 2 ครั้ง หรือหลังอาหารทุกมื้อ
              เพื่อสุขอนามัยที่ดีในช่องปาก
            </p>
          </div>

          <div className="content-card-tp bg-gray-50 shadow-sm flex w-full max-w-md flex-col items-center gap-4 rounded-2xl p-6">
            <h2 className="text-2xl font-bold">ช่องทางการสั่งซื้อ</h2>
            <div className="grid grid-cols-2 gap-4">
              {onlineStores.map((store) => (
                <StoreButton key={store.alt} {...store} />
              ))}
            </div>
          </div>
        </div>

        {/* === PINNED RIGHT COLUMN (Visuals) === */}
        {/* We use `md:order-last` to ensure it's the second column on desktop */}
        <div
          ref={imageColumnRef}
          className="relative flex h-screen items-center justify-center md:order-last"
        >
          {/* Parallax Bubbles */}
          <Image
            src="/ingredients/Q10.png"
            alt="Q10"
            width={190}
            height={190}
            className="parallax-bubble-tp absolute top-1/4 right-[-60px] z-0"
          />
          <Image
            src="/ingredients/Fluoride.png"
            alt="Fluoride"
            width={210}
            height={210}
            className="parallax-bubble-tp absolute bottom-1/4 right-[-120px] z-0"
          />
          <Image
            src="/ingredients/Potassium.png"
            alt="Potassium"
            width={190}
            height={190}
            className="parallax-bubble-tp absolute top-2/3 right-12 z-0"
          />

          <div className="absolute bottom-20 z-5 flex items-center">
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
            <div className="absolute inset-0 z-0 h-[300px] w-[300px] rounded-full bg-red-300/20"></div>
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
