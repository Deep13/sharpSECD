import React, { useState } from "react";
import "./NewBody.css";
// Replace these imports with your actual asset paths
import video1 from "./assets/new-home/vid1.mp4";
import video2 from "./assets/new-home/vid2.mp4";
import backup1 from "./assets/new-home/backup1.jpg";
import backup2 from "./assets/new-home/backup2.jpg";

import sharpLogo from "./assets/SHARP_Logo_red.png";
import memoryInPixel from "./assets/new-home/MIP.jpg";
import ePosterDisplay from "./assets/new-home/ePoster.jpg";
import generalPurposeLCD from "./assets/new-home/LCDs.jpg";

import eposterProduct from "./assets/new-home/ePosterProduct.png";
import Carousel64 from "./assets/new-home/64Carousel.jpg";
import CarouselColor from "./assets/new-home/64ColorsCarousel.png";
import epostersCarousel from "./assets/new-home/ePosterCarousel.jpg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NewBody = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const history = useHistory(); // 2. Initialize history
  const [video1Error, setVideo1Error] = useState(false);
  const [video2Error, setVideo2Error] = useState(false);

  // Helper function for navigation
  const navigateTo = (path) => {
    // If your app uses HashRouter, this will automatically handle the '#'
    // If it uses BrowserRouter, it will handle clean URLs.
    history.push(path);
    window.scrollTo(0, 0); // Good practice to scroll to top on change
  };

  const slideData = [
    {
      id: 0,
      title: "BOLD VISUALS. ULTRA LOW POWER. ZERO PAPER WASTE.",
      desc1:
        "Sharp's new ePoster display module eliminates the cost and waste of paper poster printing.",
      desc2:
        "Say goodbye to printed signage and hello to new product possibilities with ePoster.",
      btnText: "See the New ePoster Module",
      bg: epostersCarousel,
      productImg: eposterProduct, // Transparent PNG
      mobileBgPos: "centered",
      link: "/eposters-displays",
      alt: "Sharp ePoster display module showing a high-resolution static image for modern furniture advertisement.",
    },
    {
      id: 1,
      title: "64 EYE-CATCHING COLORS FOR SMALL SCREEN APPLICATIONS",
      desc1:
        "Our new 64-color, 3.5-inch Memory in Pixel LCD makes images pop—even in direct sun or high ambient light—with super low power consumption.",
      desc2: "",
      btnText: "Get the Details",
      bg: Carousel64,
      productImg: CarouselColor, // Transparent PNG
      mobileBgPos: "justified-right",
      link: "/MemoryInPixel",
      alt: "A stock image representing Sharp's Memory in Pixel LCD integrated into a IoT product sitting on a wooden countertop",
    },
  ];

  return (
    <div className="new-body">
      {/* 1. HERO SECTION */}
      <section className="hero">
        {!video1Error ? (
          <video
            autoPlay
            muted
            playsInline
            className="hero-video"
            onEnded={(e) => e.target.pause()}
            onError={() => setVideo1Error(true)} // Trigger backup on error
          >
            <source src={video1} type="video/mp4" />
          </video>
        ) : (
          <img
            src={backup1}
            className="hero-video"
            alt="Sharp SECD hero video with mountain landscape and text stating ‘The world leader in low-power, sunlight-viewable displays."
          />
        )}

        {/* No more full-screen .hero-overlay div needed if the box has its own background */}

        <div className="hero-content">
          <div className="logo-wrapper">
            <img src={sharpLogo} alt="Sharp Logo" className="sharp-logo" />
          </div>

          <div className="text-overlay-box">
            <p className="hero-sub">
              A WORLD LEADER IN LOW-POWER, SUNLIGHT-VIEWABLE DISPLAYS.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WELCOME SECTION */}
      <section className="welcome-container">
        <div className="welcome-card">
          <h2 className="welcome-title">WELCOME TO A BRAND NEW DAY.</h2>

          <p className="welcome-intro">
            Sharp's world-class reflective display modules are the right
            solution when you need low power and/or sunlight viewability for
            your next product design. Available backlight and frontlight
            solutions from our partners ensure our displays are viewable even
            when ambient light is limited.
          </p>

          <p className="welcome-bold-sub">
            <strong>
              Welcome to SECD, a division of Sharp Electronics Corporation.{" "}
              Sharp pioneered LCD technology in the 1970s. And for the next
              generation of displays, we continue to light the way.
            </strong>
          </p>
        </div>
      </section>

      {/* 3. STAKE YOUR FUTURE SECTION */}
      <section className="stake-future">
        {!video2Error ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="section-video"
            onError={() => setVideo2Error(true)} // Trigger backup on error
          >
            <source src={video2} type="video/mp4" />
          </video>
        ) : (
          <img
            src={backup2}
            className="section-video"
            alt="Abstract dark technology background behind Sharp SECD features: world-class technologies, built to last, and US-based support"
          />
        )}
        <div className="video-overlay"></div>

        <div className="stake-content">
          <h3 className="stake-title">
            DISPLAYS YOU CAN STAKE
            <br />
            YOUR PRODUCT'S FUTURE ON.
          </h3>

          <div className="icon-grid">
            <div className="icon-item">
              <div
                alt="Globe icon representing Sharp SECD’s world-class display technologies"
                className="icon-img world-tech"
              ></div>
              <p>
                World-Class
                <br />
                Technologies
              </p>
            </div>

            <div className="icon-item">
              <div
                alt="Built to Last icon representing Sharp SECD's durable display modules"
                className="icon-img built-last"
              ></div>
              <p>Built to Last</p>
            </div>

            <div className="icon-item">
              <div
                alt="USA badge icon representing Sharp SECD’s US-based technical support"
                className="icon-img us-support"
              ></div>
              <p>
                US-Based
                <br />
                Support
              </p>
            </div>
          </div>

          <button
            onClick={() => navigateTo("/about")}
            className="red-btn stake-btn"
          >
            About Sharp SECD
          </button>
        </div>
      </section>

      {/* 4. PRODUCT CARDS SECTION */}
      <section className="product-cards">
        <h2 className="product-headline">
          WITH SHARP, HIGH POWER REQUIREMENTS ARE A THING OF THE PAST.
        </h2>

        <div className="card-container">
          {/* Card 1 */}
          <div className="product-card">
            <div
              className="card-image"
              alt="Close-up of a wearable device using Sharp Memory-in-Pixel LCD technology."
              style={{ backgroundImage: `url('${memoryInPixel}')` }}
            >
              <div className="card-overlay">
                <h3 className="card-subheader">MEMORY IN PIXEL LCDs</h3>
                <div className="card-text-content">
                  <p>Monochrome or 64 Colors</p>
                  <p>1.08" to 4.4" Wearable</p>
                  <p>Hand-held</p>
                  <p>Operation power as low as 10's of microamps.</p>
                  <button
                    onClick={() => navigateTo("/MemoryInPixel")}
                    className="red-btn card-cta"
                  >
                    View Products
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="product-card">
            <div
              className="card-image"
              alt="Sharp ePoster display module showing a high-resolution static image for modern furniture advertisement."
              style={{ backgroundImage: `url('${ePosterDisplay}')` }}
            >
              <div className="card-overlay">
                <h3 className="card-subheader">ePOSTER DISPLAY MODULES</h3>
                <div className="card-text-content">
                  <p>2160 x 3840 resolution</p>
                  <p>Zero power in static image mode</p>
                  <p>60k Color Gamut</p>
                  <p>E Ink Spectra 6</p>
                  <p>High contrast</p>
                  <p>Thin, Lightweight</p>
                  <button
                    onClick={() => navigateTo("/eposters-displays")}
                    className="red-btn card-cta"
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="product-card">
            <div
              className="card-image"
              alt="Sharp ePoster display module showing a high-resolution static image for modern furniture advertisement."
              style={{ backgroundImage: `url('${generalPurposeLCD}')` }}
            >
              <div className="card-overlay">
                <h3 className="card-subheader">GENERAL PURPOSE LCDs</h3>
                <div className="card-text-content">
                  <p>Industrial Applications</p>
                  <p>High Brightness</p>
                  <p>High Contrast</p>
                  <p>Up to 16.7M colors</p>
                  <p>Wide viewing angles</p>
                  <p>Wide temp. ranges</p>
                  <p>Value-add solutions</p>
                  <button
                    onClick={() => navigateTo("/general-purpose-lcds")}
                    className="red-btn card-cta"
                  >
                    View Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEWS SLIDER SECTION */}
      <section className="display-news">
        <div className="news-header-bar">
          <h2 className="news-header-text">SHARP DISPLAY NEWS</h2>
        </div>

        <div className="slider-outer-wrapper">
          <div
            className="slider-container"
            style={{
              transform: `translateX(-${
                activeSlide * (window.innerWidth <= 480 ? 100 : 92.5)
              }%)`,
            }}
          >
            {slideData.map((slide, index) => (
              <div
                key={slide.id}
                className={`news-slide ${
                  index === activeSlide ? "active-slide" : ""
                } ${slide.mobileBgPos}`}
              >
                <div
                  className="slide-bg-main"
                  style={{ backgroundImage: `url('${slide.bg}')` }}
                >
                  <div className="slide-flex-overlay">
                    <div className="slide-left-text">
                      <h2>{slide.title}</h2>
                      <p>{slide.desc1}</p>
                      <p>{slide.desc2}</p>
                      <button
                        onClick={() => navigateTo(slide.link)}
                        className="red-btn slide-cta"
                      >
                        {slide.btnText}
                      </button>
                    </div>
                    <div className="slide-right-img">
                      <img
                        src={slide.productImg}
                        className="product-png-overlay"
                        alt={slide.alt}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="news-dots">
          {slideData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeSlide ? "active" : ""}`}
              onClick={() => setActiveSlide(index)}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewBody;
