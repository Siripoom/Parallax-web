// src/hooks/useVideoSequence.js
"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useVideoSequence = (sectionRef, videoCount) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoRefs = useRef([]);
  // Ensure the refs array always has the correct length
  videoRefs.current = Array(videoCount)
    .fill()
    .map((_, i) => videoRefs.current[i] || null);

  useEffect(() => {
    if (!sectionRef.current || videoRefs.current.some((ref) => !ref)) {
      return; // Wait until all refs are populated
    }

    // --- Video Playback Logic ---
    const playVideoAtIndex = (index) => {
      videoRefs.current.forEach((video, i) => {
        if (!video) return;
        if (i === index) {
          video.currentTime = 0; // Always restart from the beginning
          video.play().catch((e) => console.error("Video play failed:", e));
        } else {
          video.pause();
        }
      });
    };

    // Play the video whenever the active index changes
    playVideoAtIndex(activeVideoIndex);

    // --- Event Listener Setup ---
    const handleVideoEnd = () => {
      setActiveVideoIndex((prevIndex) => (prevIndex + 1) % videoCount);
    };

    const currentActiveVideo = videoRefs.current[activeVideoIndex];
    if (currentActiveVideo) {
      currentActiveVideo.addEventListener("ended", handleVideoEnd);
      // Cleanup for this specific listener
      return () => {
        currentActiveVideo.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, [activeVideoIndex, videoCount, sectionRef]);

  // --- ScrollTrigger Initialization ---
  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      // onEnter: Re-initialize the sequence from the beginning
      onEnter: () => setActiveVideoIndex(0),
      // onLeaveBack: Pause all videos and reset state for the next time
      onLeaveBack: () => {
        setActiveVideoIndex(-1); // Use an invalid index to signal "off" state
        videoRefs.current.forEach((v) => v && v.pause());
      },
    });

    return () => trigger.kill();
  }, [sectionRef, videoCount]);

  const handleReplay = () => {
    setActiveVideoIndex(0); // Simply reset the state to start over
  };

  return { activeVideoIndex, videoRefs, handleReplay };
};
