import ProductCard from "../ProductCard";

const ProductSection = () => {
  return (
    <section
      id="product"
      className="min-h-screen flex items-center justify-content py-24 text-center"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-brand-dark">Product</h2>
        <p className="mt-2 text-gray-600">"Lorem ipsum dolor sit amet"</p>

        {/* Responsive Grid: 1 column on small screens, 2 on medium screens and up */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
