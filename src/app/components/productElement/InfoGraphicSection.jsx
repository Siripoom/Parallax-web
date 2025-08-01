// src/components/InfoGraphicSection.jsx
const InfoGraphicSection = ({ title, children }) => {
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-red-700">{title}</h3>
      {children}
    </div>
  );
};
export default InfoGraphicSection;
