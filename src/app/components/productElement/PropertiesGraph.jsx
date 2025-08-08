// src/components/PropertiesGraph.jsx
import Image from "next/image";
import InfoGraphicSection from "./InfoGraphicSection";

const PropertiesGraph = ({ data }) => {
  return (
    <InfoGraphicSection title="คุณสมบัติ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-4 text-center">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative mb-4 h-32 w-32 rounded-full overflow-hidden shadow-lg">
              <Image
                src={item.bgSrc} // Use the new image source from your data
                alt={`Property: ${item.points[0]}`} // Good for SEO and accessibility
                layout="fill" // Makes the image fill the parent div
                objectFit="cover" // Ensures the image covers the circle without stretching
              />
            </div>

            {/* The bullet points remain the same */}
            <ul className="list-disc list-inside bg-white rounded-2xl p-3 shadow-md text-left text-gray-700 space-y-1 w-full px-4">
              {item.points.map((point, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-base md:text-lg leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </InfoGraphicSection>
  );
};

export default PropertiesGraph;
