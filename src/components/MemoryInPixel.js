import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Image } from "react-bootstrap";
import Screen3 from "../assets/smepdark.jpeg";
import logo from "../assets/sharp_logo.png";
import image1 from "../assets/Sharp-Memory-In-Pixel_700x1082.jpg";
import arrow from "../assets/arrow.png";
import bg1 from "../assets/bg1.jpeg";
import bg2 from "../assets/bg2.jpeg";
import image2 from "../assets/Bike_966x644.jpg";
import image3 from "../assets/MIR_3557_Trans_966x644.png";
import icon from "../assets/Icon 1.jpeg";
import icon2 from "../assets/Icon 2.jpeg";
import icon3 from "../assets/Icon 3.jpeg";
import icon4 from "../assets/Icon 4.jpeg";
import icon5 from "../assets/Icon 5.jpeg";
import icon6 from "../assets/Icon 6.jpeg";
import Button from "react-bootstrap/Button";
import Footer from "../Footer";

export default class MemoryInPixel extends Component {
  callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = "#" + link;
    // alert(text);
  };
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Memory-in-Pixel - Sharp</title>
          <meta name="description" content="Sharp-Memory-in-Pixel" />
        </Helmet>

        <div
          style={{
            alignItems: "center",
            backgroundImage: `url(${Screen3})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            minHeight: "90vh",
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              padding: 20,
            }}
          >
            <Image
              role="presentation"
              alt="SHARP Logo"
              src={logo}
              style={{ width: "35%", paddingTop: "50px", maxWidth: 300 }}
            />
            <div style={{ paddingTop: 150 }}>
              <h1
                style={{
                  color: "white",
                  fontSize: "5rem",
                  textAlign: "center",
                }}
              >
                Memory in Pixel LCDs
              </h1>
              <p
                style={{
                  color: "white",
                  fontSize: "2.5rem",
                  textAlign: "center",
                }}
              >
                <strong>
                  High Ambient-Light Performance. Long Battery Life.
                </strong>
              </p>
            </div>
            <Image
              role="presentation"
              alt="arrow"
              src={arrow}
              style={{ maxWidth: "32px", paddingTop: 80 }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="row"
            style={{
              maxWidth: "1140px",
              display: "flex",
              paddingTop: 11,
              alignItems: "center",
            }}
          >
            <div className="col-md-6" style={{ padding: 100 }}>
              <div>
                <img
                  style={{ width: "100%" }}
                  src={image1}
                  role="presentation"
                  alt="Sharp MIP"
                />
                <p
                  style={{
                    fontStyle: "italic",
                    fontSize: "small",
                    textAlign: "center",
                  }}
                >
                  *Unedited photo of Sharp MIP demo powered by Epson S1D13C00
                  Display Controller
                </p>
              </div>
            </div>
            <div tabIndex={0} className="col-md-6">
              <div tabIndex={-1} style={{ height: "100%", padding: 10 }}>
                <div
                  className="centerAlignDiv"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <h1 style={{ fontSize: "3rem" }}>
                    <strong>INTRODUCING SHARP MEMORY IN PIXEL LCDs</strong>
                  </h1>
                  <div className="row" style={{ margin: 0, width: "100%" }}>
                    <div
                      className="col-sm-12 col-md-3"
                      style={{
                        height: 0,
                        width: "100%",
                        margin: "12px 0",
                        border: "none",
                        borderBottomWidth: "4px",
                        borderBottomColor: "#a91e2c",
                        borderBottomStyle: "solid",
                      }}
                    ></div>
                  </div>
                  <p>
                    Get best-of-class performance with ultra-low power
                    consumption and high readability in almost any ambient
                    lighting environment... plus eye-catching 64-color or
                    high-contrast monochrome for designs ranging from wearables
                    to medical devices to smart meters and many, many more.
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <Button
                      className="redButton"
                      href="#/contact"
                      size="lg"
                      variant="outline-danger"
                      style={{ marginRight: 20 }}
                    >
                      Find a Rep
                    </Button>
                    <Button
                      className="redButton"
                      size="lg"
                      variant="outline-danger"
                      href="#/memory-in-pixel-lcds-product"
                    >
                      View Products
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${bg1})`,
              width: "100%",
              justifyContent: "center",
              display: "flex",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
            }}
          >
            <div
              className="row"
              style={{
                maxWidth: "1140px",
                display: "flex",
                paddingTop: "100px",
                paddingBottom: "100px",
                alignItems: "center",
                paddingRight: 20,
                paddingLeft: 20,
                margin: 0,
              }}
            >
              <div>
                <h1 style={{ fontSize: "3rem" }}>
                  <strong>
                    THE PERFECT SOLUTION FOR SMALL-SCREEN APPLICATIONS THAT
                    REQUIRE A BATTERY.
                  </strong>
                </h1>
                <div className="row" style={{ margin: 0, width: "100%" }}>
                  <div
                    className="col-sm-12 col-md-3"
                    style={{
                      height: 0,
                      width: "100%",
                      margin: "12px 0",
                      border: "none",
                      borderBottomWidth: "4px",
                      borderBottomColor: "rgb(237,12,12)",
                      borderBottomStyle: "solid",
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-md-6" style={{ padding: 30 }}>
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={image2}
                    role="presentation"
                    alt="THE PERFECT SOLUTION"
                  />
                </div>
              </div>
              <div tabIndex={0} className="col-md-6">
                <div tabIndex={-1} style={{ height: "100%", padding: 10 }}>
                  <div
                    className="centerAlignDiv"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <p>
                      Sharp's Memory-in-Pixel LCDs were designed for compact
                      handheld, wearable, and other small-screen applications.
                      <a
                        href="/"
                        onClick={(event) =>
                          this.callFunct(
                            event,
                            "/memory-in-pixel-lcds-technology"
                          )
                        }
                        style={{ color: "#e61d24" }}
                      >
                        {" "}
                        Embedded, 1-bit memory in every pixel{" "}
                      </a>
                      allows for an always-on display capable of delivering
                      high-contrast, high-resolution content, and ultra-low
                      power consumption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${bg2})`,
              width: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              className="row"
              style={{
                maxWidth: "1140px",
                display: "flex",
                alignItems: "center",
                padding: 20,
                margin: 0,
              }}
            >
              <div>
                <div className="padding-top-50 d-none d-md-block"></div>
                <div className="padding-top-50 d-none d-md-block"></div>
                <div className="padding-top-50 d-none d-md-block"></div>
                <div className="padding-top-50 d-none d-md-block"></div>
                <div className="padding-top-50 d-none d-md-block"></div>
                <div className="padding-top-50"></div>
                <h1 style={{ fontSize: "3rem" }}>
                  <strong>PERFORMANCE IN HIGH AMBIENT LIGHT</strong>
                </h1>
                <div className="row" style={{ margin: 0, width: "100%" }}>
                  <div
                    className="col-sm-12 col-md-3"
                    style={{
                      height: 0,
                      width: "100%",
                      margin: "12px 0",
                      border: "none",
                      borderBottomWidth: "4px",
                      borderBottomColor: "rgb(237,12,12)",
                      borderBottomStyle: "solid",
                    }}
                  ></div>
                </div>
              </div>
              <div tabIndex={0} className="col-md-6">
                <div tabIndex={-1} style={{ height: "100%", padding: 10 }}>
                  <div
                    className="centerAlignDiv"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <p>
                      Reflective mode leverages ambient light to eliminate the
                      need for a backlight. Choose from multiple sizes in
                      64-color, plus monochrome. Our lightweight design includes
                      the display driver circuits integrated into the panel - no
                      silicon driver ICs required - yielding an exceptionally
                      thin display module.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{ padding: 30 }}>
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={image3}
                    role="presentation"
                    alt="display without a frontlight or backlight"
                  />
                  <p
                    style={{
                      fontStyle: "italic",
                      fontSize: "small",
                      textAlign: "center",
                    }}
                  >
                    *Unedited photo of display without a frontlight or backlight
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              maxWidth: "1140px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 20,
              margin: 0,
            }}
          >
            <div>
              <div className="padding-top-50 d-none d-md-block"></div>
              <div className="padding-top-50"></div>
              <h1 style={{ fontSize: "3rem", textAlign: "center" }}>
                <strong>Memory in Pixel LCD Features</strong>
              </h1>
            </div>
            <div className="padding-top-50"></div>
            <div className="padding-top-50"></div>

            <div className="row">
              <div tabIndex={0} className="col-md-4">
                <div>
                  <img
                    style={{ width: 90 }}
                    src={icon}
                    role="presentation"
                    alt="icon"
                  />
                  <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                    <strong>PRODUCT LINE-UP</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    Offered in diagonal sizes ranging from 1.08 to 4.40 inches.
                  </p>
                </div>
              </div>
              <div tabIndex={0} className="col-md-4">
                <div>
                  <img
                    style={{ width: 90 }}
                    src={icon2}
                    role="presentation"
                    alt="icon"
                  />
                  <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                    <strong>HIGH READABILITY</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    Viewable in any light, from edge-of-vision to bright
                    sunlight.
                  </p>
                </div>
              </div>
              <div tabIndex={0} className="col-md-4">
                <div>
                  <img
                    style={{ width: 90 }}
                    src={icon3}
                    role="presentation"
                    alt="icon"
                  />
                  <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                    <strong>64-COLOR DISPLAYS</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    Choose from 64-color or Monochrome.
                  </p>
                </div>
              </div>
            </div>
            <div className="padding-top-30"></div>

            <div className="row">
              <div tabIndex={0} className="col-md-4">
                <div>
                  <img
                    style={{ width: 90 }}
                    src={icon4}
                    role="presentation"
                    alt="icon"
                  />
                  <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                    <strong>OPERATING TEMPS</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    Wide operating temperatures for the most extreme
                    environments.
                  </p>
                </div>
              </div>
              <div tabIndex={0} className="col-md-4">
                <div>
                  <img
                    style={{ width: 90 }}
                    src={icon5}
                    role="presentation"
                    alt="icon"
                  />
                  <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                    <strong>WIDE VIEWING ANGLE</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    Wide, symmetrical viewing angles, typically 120° ×120°.
                  </p>
                </div>
              </div>
              <div tabIndex={0} className="col-md-4">
                <div>
                  <img
                    style={{ width: 90 }}
                    src={icon6}
                    role="presentation"
                    alt="icon"
                  />
                  <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                    <strong>SIMPLE INTERFACE</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    Design made easy with a 3-wire SPI serial interface (SI,
                    SCS, SCK).
                  </p>
                </div>
              </div>
            </div>
            <div className="padding-top-30"></div>

            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: "100%",
              }}
            >
              <Button
                className="redButton"
                href="#/contact"
                size="lg"
                variant="outline-danger"
                style={{ marginRight: 20 }}
              >
                Find a Rep
              </Button>
              <Button
                className="redButton"
                size="lg"
                variant="outline-danger"
                href="#/memory-in-pixel-lcds-product"
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
        <div className="padding-top-30"></div>

        <Footer />
      </div>
    );
  }
}
