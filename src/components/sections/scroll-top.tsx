"use client";

import React, { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * ScrollToTop Component
 * Clones the "back to top" floating button with a circular progress indicator.
 * Located at the bottom right of the screen.
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateProgress = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight > 0) {
      const scrollPercentage = (window.scrollY / scrollHeight) * 100;
      setProgress(scrollPercentage);
    }

    if (window.scrollY > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", calculateProgress);
    // Initial check
    calculateProgress();
    return () => window.removeEventListener("scroll", calculateProgress);
  }, [calculateProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG parameters
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={cn(
        "fixed bottom-[30px] right-[30px] z-[999] cursor-pointer transition-all duration-300 ease-in-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
      )}
      onClick={scrollToTop}
      role="button"
      aria-label="Back to top"
    >
      <div className="relative flex items-center justify-center w-[50px] h-[50px] bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.1)] group">
        {/* Progress Circle */}
        <svg
          className="absolute top-0 left-0 w-full h-full -rotate-90 pointer-events-none"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          {/* Background circle (track) */}
          <circle
            cx="25"
            cy="25"
            r={radius}
            fill="transparent"
            stroke="#f0f0f0"
            strokeWidth="2"
          />
          {/* Active progress path */}
          <circle
            cx="25"
            cy="25"
            r={radius}
            fill="transparent"
            stroke="#111111"
            strokeWidth="2"
            strokeDasharray={circumference}
            style={{ 
              strokeDashoffset: offset,
              transition: "stroke-dashoffset 0.1s linear"
            }}
            strokeLinecap="round"
          />
        </svg>

        {/* Arrow Icon */}
        <div className="relative z-10 text-[#111111] transition-transform duration-300 group-hover:-translate-y-1">
          <ArrowUp size={20} strokeWidth={2.5} />
        </div>
      </div>

    </div>
  );
};

export default ScrollToTop;