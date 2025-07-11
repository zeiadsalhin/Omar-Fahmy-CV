import { useState, useEffect } from "react";
import { ChevronUp } from 'lucide-react';
import React from "react";

// This component renders a "Back to Top" button that appears when the user scrolls down the page.
const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-blue-500 hover:bg-[#07c7c4]/80 text-white px-2 py-1.5 text-3xl rounded-full shadow-lg transition z-50"
      >
        <ChevronUp className="text-white" size={32} />
      </button>
    )
  );
};

export default BackToTop;
