// src/components/PropertiesGraph.jsx

const PropertiesGraph = ({ data }) => {
  return (
    <InfoGraphicSection title="คุณสมบัติ">
      <div className="grid grid-cols-3 gap-4 text-center">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-4 h-24 w-24 rounded-full bg-pink-300"></div>
            <ul className="list-disc list-inside text-left text-sm text-red-700 space-y-1">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </InfoGraphicSection>
  );
};
export default PropertiesGraph;
