// src/components/SocialEmbed.jsx
"use client";
import { useEffect, useRef } from "react";

const SocialEmbed = ({ htmlContent }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const fragment = document
      .createRange()
      .createContextualFragment(htmlContent);
    const scriptNode = fragment.querySelector("script");
    containerRef.current.innerHTML = "";
    while (fragment.firstChild && fragment.firstChild !== scriptNode) {
      containerRef.current.appendChild(fragment.firstChild);
    }
    if (scriptNode) {
      const script = document.createElement("script");
      script.src = scriptNode.src;
      script.async = true;
      if (scriptNode.onerror) script.onerror = scriptNode.onerror;
      document.body.appendChild(script);
      return () => {
        const oldScript = document.querySelector(`script[src="${script.src}"]`);
        if (oldScript) document.body.removeChild(oldScript);
      };
    }
  }, [htmlContent]);
  return <div ref={containerRef} className="w-full h-full" />;
};
export default SocialEmbed;
