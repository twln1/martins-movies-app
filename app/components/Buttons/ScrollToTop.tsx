"use client";

import { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

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
    <>
      {showButton && (
        <div className="fixed bottom-5 z-50 right-5">
          <Fab onClick={scrollToTop} color="secondary" size="medium">
            <KeyboardArrowUpIcon style={{ fontSize: 28 }} />
          </Fab>
        </div>
      )}
    </>
  );
}
