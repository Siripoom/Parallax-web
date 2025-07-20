import Image from "next/image";
import InfoGraphicSection from "./InfoGraphicSection";
const IngredientsGraph = ({ data }) => {
  return (
    <InfoGraphicSection title="ส่วนผสม">
      <div className="flex flex-col items-center gap-4">
        {/* Top Row */}
        <div className="flex justify-center gap-4">
          {data.slice(0, 3).map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-2 h-24 w-24 rounded-full bg-gray-400"></div>
              <Image src={item.src} alt={item.name} width={60} height={60} />
              <p className="text-sm text-red-700">{item.name}</p>
            </div>
          ))}
        </div>
        {/* Bottom Row */}
        <div className="flex justify-center gap-4">
          {data.slice(3, 5).map((item, index) => (
            <div
              key={index + 3}
              className="flex flex-col items-center text-center"
            >
              <Image
                src="/icon/mouthwash/extract/Q10.png"
                alt={item.name}
                width={60}
                height={60}
              />
              <p className="text-sm text-red-700">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </InfoGraphicSection>
  );
};
export default IngredientsGraph;
