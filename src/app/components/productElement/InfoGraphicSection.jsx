// src/components/InfoGraphicSection.jsx

const InfoGraphicSection = ({ title, children, titleExtra }) => {
  return (
    <div>
      {/* New title container with flexbox */}
      <div className="mb-8 flex items-center justify-center gap-4">
        <h3 className="text-2xl font-bold text-red-700">{title}</h3>
        {/* Render the extra element (our button) if it exists */}
        {titleExtra && <div>{titleExtra}</div>}
      </div>
      {children}
    </div>
  );
};
export default InfoGraphicSection;
