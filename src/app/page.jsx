import Hero from "./components/section/Hero";
import ProductSection from "./components/section/ProductSection";
import MouthwashSection from "./components/section/MouthwashSection";
import ToothpasteSection from "./components/section/ToothpasteSection";
import ReviewSection from "./components/section/ReviewSection";
import AboutUsSection from "./components/section/AboutUsSection";
import SalesChannelsSection from "./components/section/SalesChannelsSection";
import ContactSection from "./components/section/ContactSection";
import Footer from "./components/section/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductSection />
      <MouthwashSection />
      <ToothpasteSection />
      <ReviewSection />
      <AboutUsSection />
      <SalesChannelsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
