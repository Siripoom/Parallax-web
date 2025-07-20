// src/components/StoreButton.jsx
import Link from "next/link";
import Image from "next/image";

const StoreButton = ({ href, src, name, alt }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center flex-col gap-3 w-50  justify-center rounded-2xl bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105">
        <Image src={src} alt={alt} width={60} height={60} />
        <p className="font-bold">{name}</p>
      </div>
    </Link>
  );
};

export default StoreButton;
