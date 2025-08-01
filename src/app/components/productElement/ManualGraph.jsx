"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InfoGraphicSection from "./InfoGraphicSection";

gsap.registerPlugin(ScrollTrigger);

const ManualGraph = ({ data }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // This effect sets up the event listeners for the video sequence
    const videos = videoRefs.current;

    const handleVideoEnd = (index) => {
      // Move to the next video, looping back to the start
      const nextIndex = (index + 1) % videos.length;
      setActiveVideoIndex(nextIndex);
    };

    videos.forEach((video, index) => {
      if (video) {
        // We bind the index to the handler
        const handler = () => handleVideoEnd(index);
        video.addEventListener("ended", handler);

        // Cleanup function to remove the listener
        return () => {
          video.removeEventListener("ended", handler);
        };
      }
    });
  }, [data.length]); // Rerun setup if the number of videos changes

  useEffect(() => {
    // This effect controls which video is playing
    const videos = videoRefs.current;
    videos.forEach((video, index) => {
      if (video) {
        if (index === activeVideoIndex) {
          // Play the active video
          video
            .play()
            .catch((error) => console.log("Autoplay was prevented:", error));
        } else {
          // Pause and reset all other videos
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [activeVideoIndex]); // Rerun whenever the active video index changes

  useEffect(() => {
    // This effect starts the sequence when the component scrolls into view
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      onEnter: () => setActiveVideoIndex(0), // Start the sequence by setting the first video as active
      onLeaveBack: () => {
        // Reset when scrolling up past it
        setActiveVideoIndex(0);
        videoRefs.current.forEach((v) => v && v.pause());
      },
    });
    return () => trigger.kill(); // Cleanup the trigger
  }, []);

  return (
    <div ref={sectionRef}>
      <InfoGraphicSection title="วิธีใช้งาน">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Video Container */}
              <div className="w-full overflow-hidden rounded-2xl shadow-lg">
                <video
                  // This callback populates our refs array
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.videoSrc}
                  muted
                  playsInline
                  className={`h-full  w-full object-cover transition-all duration-500 ${
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
