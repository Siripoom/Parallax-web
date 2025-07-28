// src/components/MaskedText.jsx

const MaskedText = ({ text, imageSrc }) => {
  return (
    // The main container for our SVG effect
    <svg
      viewBox="0 0 900 300" // A wide aspect ratio for the text
      className="w-full h-auto"
    >
      {/* 
        Define the pattern that will fill our text.
        This pattern is simply our image.
      */}
      <defs>
        <pattern
          id="image-pattern"
          patternUnits="userSpaceOnUse"
          width="100%"
          height="100%"
        >
          <image
            href={imageSrc}
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
      </defs>

      {/* Group for the outlines. We place this first so it's in the back. */}
      <g className="font-extrabold uppercase text-8xl md:text-9xl tracking-wider">
        {/* Yellow Outline */}
        <text
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle"
          className="fill-none stroke-yellow-400"
          style={{ strokeWidth: 2, transform: "translate(4px, 4px)" }}
        >
          {text}
        </text>
        {/* Red Outline */}
        <text
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle"
          className="fill-none stroke-red-400"
          style={{ strokeWidth: 2, transform: "translate(-4px, -4px)" }}
        >
          {text}
        </text>
        {/* Cyan Outline */}
        <text
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle"
          className="fill-none stroke-cyan-400"
          style={{ strokeWidth: 2, transform: "translate(0px, 0px)" }}
        >
          {text}
        </text>
      </g>

      {/* The main text that will be filled with the image pattern */}
      <text
        x="50%"
        y="50%"
        dy=".35em"
        textAnchor="middle"
        className="font-extrabold uppercase text-8xl md:text-9xl tracking-wider"
        fill="url(#image-pattern)" // This is the magic!
      >
        {text}
      </text>
    </svg>
  );
};

export default MaskedText;
