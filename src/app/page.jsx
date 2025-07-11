import Hero from "./components/section/Hero";
import ProductSection from "./components/section/ProductSection";
import MouthwashSection from "./components/section/MouthwashSection";
import ToothpasteSection from "./components/section/ToothpasteSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductSection />
      <MouthwashSection />
      <ToothpasteSection />
    </main>
  );
}
