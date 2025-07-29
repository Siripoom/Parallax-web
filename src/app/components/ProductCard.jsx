// src/components/ProductCard.jsx
import Image from "next/image";

// We pass props to make this component reusable
const ProductCard = ({
  imageSrc,
  title,
  description,
  imageClassName,
  productUrl = "#",
}) => {
  return (
    <a
      href={productUrl}
      rel="noopener noreferrer" // Important for security when using target="_blank"
      className="group block cursor-pointer" // `group` is for potential hover effects on children
    >
      <div className="flex flex-col items-center text-center">
        {/* Image container with the circular background */}
        <div className="relative mb-6 flex h-80 w-80 items-center justify-center">
          {/* The pink circle */}
          <div className="absolute inset-0 z-0 rounded-full bg-red-300/60"></div>
          {/* The product image, using next/image for optimization */}
          <div className={`relative z-10 ${imageClassName}`}>
            <Image
              src={imageSrc}
              alt={title}
              width={400}
              height={400}
              className="h-auto w-full object-contain"
            />
          </div>

          {/* ADD THE FAKE SHADOW DIV */}
          <div className="absolute bottom-[-15px] z-0 h-10 w-3/5  rounded-full bg-red-500/40 blur-md"></div>
        </div>

        {/* Text Content */}
        <h3 className="mb-2 text-lg md:text-2xl font-bold text-[#B32B23]">
          {title}
        </h3>
        <p className="mb-6 max-w-xs text-sm  text-[#B32B23]">{description}</p>
      </div>
    </a>
  );
};

export default ProductCard;
