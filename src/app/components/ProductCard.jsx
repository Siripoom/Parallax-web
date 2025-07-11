import Image from "next/image";

const ProductCard = () => {
  return (
    // rounded-2xl: A large border radius
    // shadow-lg: A nice, clean box shadow
    // p-8: Padding
    <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
      <Image
        src="/product-bottle.png"
        alt="AfterDent Mouthwash Product"
        width={200}
        height={200}
        className="h-auto w-full max-w-[150px]"
      />

      {/* Placeholder lines using simple divs */}
      <div className="my-6 flex w-4/5 flex-col gap-3">
        <div className="h-2.5 w-full rounded-full bg-gray-200"></div>
        <div className="h-2.5 w-full rounded-full bg-gray-200"></div>
        <div className="h-2.5 w-3/4 rounded-full bg-gray-200"></div>
      </div>

      <a
        href="#"
        className="rounded-full bg-brand-pink-light px-8 py-3 font-semibold text-brand-dark transition-transform hover:scale-105"
      >
        View more
      </a>
    </div>
  );
};

export default ProductCard;
