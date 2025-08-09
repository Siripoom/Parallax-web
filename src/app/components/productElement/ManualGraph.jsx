"use client";

import { useRef } from "react";
import InfoGraphicSection from "./InfoGraphicSection";
import { RotateCcw } from "lucide-react";
// Import our new custom hook
import { useVideoSequence } from "./useVideoSequence";

const ManualGraph = ({ data }) => {
  const sectionRef = useRef(null);

  // --- Use the custom hook to manage all the state and logic ---
  const { activeVideoIndex, videoRefs, handleReplay } = useVideoSequence(
    sectionRef,
    data.length
  );

  return (
    <div ref={sectionRef}>
      <InfoGraphicSection
        title="วิธีใช้งาน"
        titleExtra={
          <button
            onClick={handleReplay}
            className="group flex items-center gap-2 rounded-full bg-red-700 cursor-pointer px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <RotateCcw className="h-4 w-4 transition-transform group-hover:rotate-[-180deg]" />
            เริ่มเล่นใหม่
          </button>
        }
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Video Container */}
              <div className="w-full overflow-hidden rounded-2xl shadow-lg">
                <video
                  // The ref callback populates the array for our hook
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.videoSrc}
                  muted
                  playsInline
                  className={`h-full w-full object-cover transition-all duration-500 ${
                    activeVideoIndex === index
                      ? "opacity-100 scale-105"
                      : "opacity-75 scale-100"
                  }`}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Text Card */}
              <div
                className={`w-full mt-4 rounded-2xl p-4 transition-colors duration-500 ${
                  activeVideoIndex === index
                    ? "bg-white shadow-xl"
                    : "bg-white/70 shadow-md"
                }`}
              >
                <p className="font-medium text-gray-800 text-left leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </InfoGraphicSection>
    </div>
  );
};

export default ManualGraph;
