import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling
    });
  }, [pathname]); 

  return null; // Component does not render any UI
};

export default ScrollToTop;