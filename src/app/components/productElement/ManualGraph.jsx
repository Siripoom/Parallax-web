import InfoGraphicSection from "./InfoGraphicSection";
import Image from "next/image";

const ManualGraph = ({ data }) => {
  return (
    <InfoGraphicSection title="วิธีใช้งาน">
      <div className="grid grid-cols-3  gap-4">
        {/* Top Row */}

        {data.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className=" flex flex-col items-center text-center {/* Stacks image above text card, centers horizontally */}
              w-full  "
          >
            <Image src={item.src} alt={item.name} width={60} height={60} />
            <p className="font-bold bg-white p-4 shadow-lg mt-3 rounded-2xl">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </InfoGraphicSection>
  );
};
export default ManualGraph;
