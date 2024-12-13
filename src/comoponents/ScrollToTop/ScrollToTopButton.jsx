"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-50 rounded-full p-2 bg-[#9333EA] hover:scale-125 transition-all duration-300"
        size="icon"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6 text-white" />
      </button>
    </>
  );
};
