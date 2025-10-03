"use client";

import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      className="scrollTop"
      onClick={scrollTop}
      aria-label="Scroll to top"
      style={{
        height: 40,
        width: 40,
        backgroundColor: "#a91e2c",
        display: showScroll ? "flex" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
      }}
      variant="outline-danger"
    >
      ↑
    </Button>
  );
};

export default ScrollArrow;
