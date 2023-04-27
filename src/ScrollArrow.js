import React, { useState } from "react";
import { Button } from "react-bootstrap";
const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

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
      }}
      variant="outline-danger"
    ></Button>
  );
};

export default ScrollArrow;
