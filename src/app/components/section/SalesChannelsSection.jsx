// src/components/SalesChannelsSection.jsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChannelCard from "../ChannelCard";

gsap.registerPlugin(ScrollTrigger);

const SalesChannelsSection = () => {
  const sectionRef = useRef(null);

  // Animate elements as they scroll in
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sales-channel-anim", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "restart none none none",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // --- Data for our channels ---
  const onsiteChannels = [
    {
      name: "Gourmet Market",
      logoSrc: "/channels/gourmet_market.jpg",
      link: "https://gourmetmarketthailand.com/store-location?srsltid=AfmBOookYrRqjkpbmhR8bSz-0et_-FGeaGg_UPfV7JnrLhH1cs0o3GHD",
    },
    {
      name: "ร้านยากรุงเทพ",
      logoSrc: "/channels/bangkokPhamacine.png",
      link: "https://www.bangkokdrugstore.co.th/branch-search.php",
    },
    {
      name: "Savedrug",
      logoSrc: "/channels/saveDrug.jpg",
      link: "https://www.savedrug.co.th/location",
    },
    {
      name: "LDC Dental ทุกสาขา",
      logoSrc: "/channels/LDC.jpg",
      link: "https://www.ldcdental.com/branch/",
    },
  ];

  const onlineChannels = [
    {
      name: "LDC Store Shopee",
      logoSrc: "/channels/online/shoppee.png",
      link: "https://shopee.co.th/ldconlinestore?categoryId=100001&entryPoint=ShopByPDP&itemId=12024470629",
    },
    {
      name: "LDC Store Lazada",
      logoSrc: "/channels/online/lazada.png",
      link: "https://www.lazada.co.th/shop/ldc-online-store/?spm=a2o4m.pdp_revamp.seller.1.27bd4a64kNsB0Y&itemId=5463603820&channelSource=pdp",
    },
    {
      name: "LDC Tiktok shop",
      logoSrc: "/channels/online/tiktok.jpg",
      link: "https://www.tiktok.com/@ldcdental?_t=ZS-8y9hGxx8suQ&_r=1",
    },
  ];

  return (
    <section ref={sectionRef} id="sales-channels" className="py-24 bg-gray-50">
      <div className="container mx-auto text-center">
        {/* Main Title */}
        <div className="sales-channel-anim">
          <h2 className="text-4xl font-extrabold uppercase">
            <span className="text-brand-green">ช่องทาง</span>
            <span className="text-brand-orange">จัดจำหน่าย</span>
          </h2>
        </div>

        {/* --- On-site Stores --- */}
        <div className="sales-channel-anim mt-16">
          <h3 className="mb-8 text-2xl font-bold text-brand-dark">
            หน้าร้าน (On-site)
          </h3>
          <div className="grid md:grid-cols-2 gap-4 md:grid-cols-4 lg:max-w-4xl mx-auto">
            {onsiteChannels.map((channel) => (
              <ChannelCard key={channel.name} {...channel} />
            ))}
          </div>
        </div>

        {/* --- Online Stores --- */}
        <div className="sales-channel-anim mt-16">
          <h3 className="mb-8 text-2xl font-bold text-brand-dark">
            ออนไลน์ (Online)
          </h3>
          <div className="grid md:grid-cols-2 gap-4 md:grid-cols-3 lg:max-w-3xl mx-auto">
            {onlineChannels.map((channel) => (
              <ChannelCard key={channel.name} {...channel} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesChannelsSection;
