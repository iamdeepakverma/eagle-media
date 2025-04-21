"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+918519022399"; // Replace with the actual phone number

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
       <div 
        onClick={scrollToTop}
        className='fixed bottom-4 right-16 z-50 rounded-full pl-1 pr-1 bg-[#25D366] hover:scale-125 transition-all duration-300'>
              <Link
              to="https://wa.me/+918519022399?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
            >
              <button className='p-2' >
                <i style={{ color: "white" }} className="fa-brands fa-whatsapp"></i>
              </button>
            </Link>
          </div>
       <div 
        onClick={scrollToTop}
        className='fixed bottom-4 right-28 z-50 rounded-full pl-1 pr-1 bg-[#F505A2] hover:scale-125 transition-all duration-300'>
              <Link
              to="https://www.instagram.com/ads.mini/"
              target="_blank"
            >
              <button className='p-2' >
              <i style={{ color: "white" }} class="fa-brands fa-instagram"></i>
              </button>
            </Link>
          </div>
       <div 
        onClick={scrollToTop}
        className='fixed bottom-4 right-40 z-50 rounded-full pl-1 pr-1 bg-[#0B57D0] hover:scale-125 transition-all duration-300'>
              <Link
               to={`tel:${phoneNumber}`}
              target="_blank"
            >
              <button className='p-2' >
              <i style={{ color: "white" }} class="fa-solid fa-phone"></i>
              </button>
            </Link>
          </div>
    </>
  );
};
