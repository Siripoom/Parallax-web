// src/components/StatBubble.jsx
"use client";
import CountUp from "react-countup";

const StatBubble = ({ end, suffix = "", description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#A42A28] text-white shadow-lg">
        <span className="text-4xl font-bold">
          {/* The CountUp component handles the animation */}
          <CountUp
            end={end}
            duration={2.5}
            suffix={suffix}
            enableScrollSpy
            scrollSpyOnce
          />
        </span>
      </div>
      <p className="mt-4 max-w-xs text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default StatBubble;
