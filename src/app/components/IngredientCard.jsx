// src/components/IngredientCard.jsx
import Image from "next/image";
const IngredientCard = ({ name, description, src, className }) => {
  return (
    <div
      className={`bg-white/50 shadow-sm flex flex-col gap-3 rounded-2xl p-6 ${className}`}
    >
      <strong className="text-red-700 text-2xl">{name}</strong>
      <Image src={src} alt={name} width={60} height={60} />
      <p className="text-lg text-left">{description}</p>
    </div>
  );
};

export default IngredientCard;
