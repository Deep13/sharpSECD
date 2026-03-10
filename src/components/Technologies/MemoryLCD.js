import React, { Component } from "react";
import convdisp from "../../assets/product_memory_lcd_2.jpg";
import convdisp1 from "../../assets/Sharp-Technology-MIP-Power-Consumption-1.png";
import convdisp2 from "../../assets/Sharp-Technology-MIP-Data-Memory-2.png";
import convdisp3 from "../../assets/Sharp-Technology-MIP-Image-Refresh-3.png";
import convdisp4 from "../../assets/Sharp-Technology-MIP-Simple-Interface-4.png";
import Image from "react-bootstrap/Image";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Footer";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
AOS.init();
// import { Button, Form, FormControl, Table } from "react-bootstrap";

class MemoryLCD extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = link;
  };
  render() {
    return (
      <div>
        <Helmet>
          <title>Memory-in-Pixel LCD Technology Overview | Sharp SECD</title>
          <meta
            name="description"
            content="Understand how Sharp’s Memory-in-Pixel LCDs use embedded pixel memory to enable ultra-low power, high-resolution, sunlight-readable display designs."
          />
        </Helmet>
        <div
          className="row container-row-85 padding-top-50 padding-bottom-30"
          style={{ overflowX: "hidden" }}
        >
          <div
            id="main-content"
            role="main"
            tabIndex={0}
            className="col-md-6"
            style={{ padding: 0 }}
          >
            <div tabIndex={-1} style={{ height: "100%" }}>
              <h1>Memory-in-Pixel LCD Technology</h1>
              <br />
              <span className="h5">
                High Resolution. Long Battery Life. Thin, Lightweight Design.
              </span>
              <p>
                The{" "}
                <Link
                  to="/memory-in-pixel-lcds-product"
                  style={{ color: "#e61d24" }}
                >
                  Memory-in-Pixel LCD
                </Link>{" "}
                combines matrix technology with a one-bit memory circuit
                embedded into every pixel, so information is retained once it's
                written.
              </p>
              <p>
                This allows the design of products with ultra-low power
                consumption and long battery life. It also delivers higher
                resolution, shock, and temperature tolerance than E-Ink
                (electronic paper) displays.
              </p>
              <div>
                <Button
                  size="lg"
                  variant="outline-danger"
                  as={Link}
                  to="/contact"
                >
                  Find a Rep
                </Button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className="col-md-6"
            style={{ justifyContent: "center", display: "flex" }}
          >
            <Image
              role="presentation"
              alt="Photograph of a blank Sharp Memory in Pixel landscape mode low power reflective display "
              src={convdisp}
              fluid
            />
          </div>
        </div>
        <div style={{ backgroundColor: "#e4e4e4" }}>
          <div className="row container-row-85 padding-top-30 padding-bottom-30">
            <h2>Key Sharp Memory-in-Pixel Features </h2>
          </div>
          <div className="row container-row-85 padding-top-30 padding-bottom-30">
            <div tabIndex={0} className="col-md-6" style={{ padding: 0 }}>
              <div
                tabIndex={-1}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "100%",
                }}
              >
                <div className="bullet-60">1</div>
                <div>
                  <h3>Ultra Low Power Consumption</h3>
                  <p>Microwatt range (Typ.)</p>
                </div>
              </div>
            </div>
            <div tabIndex={0} className="col-md-6" style={{ padding: 0 }}>
              <div
                tabIndex={-1}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "100%",
                }}
              >
                <div className="bullet-60">2</div>
                <div>
                  <h3>High Readability</h3>
                  <p>
                    Viewable in any light, from edge-of-vision to brightest
                    sunlight
                  </p>
                  <p>Reflective, plus Transflective models</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row container-row-85 padding-top-30 padding-bottom-30">
            <div tabIndex={0} className="col-md-6" style={{ padding: 0 }}>
              <div
                tabIndex={-1}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "100%",
                }}
              >
                <div className="bullet-60">3</div>
                <div>
                  <h3>Simple Interface</h3>
                  <p>Single 5V or 3.3V supply</p>
                  <p>3-wire SPI interface</p>
                </div>
              </div>
            </div>
            <div tabIndex={0} className="col-md-6" style={{ padding: 0 }}>
              <div
                tabIndex={-1}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "100%",
                }}
              >
                <div className="bullet-60">4</div>
                <div>
                  <h3>Wide/Symmetrical Viewing Angle</h3>
                  <p>Typically 120° × 120°</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container-row padding-top-30">
          <div
            className="col-md-12"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: 40,
            }}
          >
            <h2 style={{ paddingBottom: 50 }}>Ultra-low Power Consumption</h2>
            <img
              className="mob-img-full"
              role="presentation"
              alt="Power consumption for 1.28” and 2.7” Memory LCDs "
              src={convdisp1}
            />
          </div>
          <div tabIndex={0} style={{ padding: 0 }}>
            <div
              tabIndex={-1}
              className="row memory-bullet"
              style={{
                // padding: "30px 100px",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              <div className="col-md-4">
                <p>
                  Requires just 1/40 ～ 1/80 of an STN LCD’s power consumption
                  and 1/1000 of an AM-TFT LCD’s power consumption.
                </p>
                <p>
                  Excellent reflective display performance without the need for
                  a backlight.
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  Embedded pixel memory stores graphic data, so continuous
                  refresh is not required for a still image.
                </p>
                <p>
                  Less power is needed during refresh than with traditional
                  graphic displays.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row container-row padding-top-30">
          <div
            className="col-md-12"
            style={{
              backgroundColor: "#e4e4e4",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: 40,
            }}
          >
            <h2 style={{ paddingTop: 30, paddingBottom: 50 }}>
              Data Memory in Each Pixel
            </h2>
            <img
              className="mob-img-full"
              role="presentation"
              alt="Diagram showing an example of data memory in each pixel for the Sharp Memory in Pixel LCD."
              src={convdisp2}
            />
          </div>
          <div className="col-md-12" tabIndex={0} style={{ padding: 0 }}>
            <div
              tabIndex={-1}
              className="row memory-bullet"
              style={{
                backgroundColor: "#e4e4e4",
                // padding: "30px 100px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="col-md-9">
                <p>
                  Embedded driver and peripheral circuits are monolithic on the
                  TFT glass.
                </p>
                <p>Each pixel contains 1-bit memory.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row container-row">
          <div tabIndex={0} className="col-md-6" style={{ padding: 0 }}>
            <div
              tabIndex={-1}
              className="memory-bullet"
              style={{
                // padding: "30px 100px",
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <p style={{ paddingBottom: 50, fontSize: "1.7rem" }}>
                Embedded driver and peripheral circuits are monolithic on the
                TFT glass.
              </p>
              <p style={{ fontSize: "1.7rem" }}>
                Each pixel contains 1-bit memory.
              </p>
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: 40,
            }}
          >
            <h2 style={{ paddingBottom: 50 }}>Data Memory in Each Pixel</h2>
            <img
            className="mob-img-full"
              role="presentation"
              alt="Sharp Technology MIP Data Memory"
              style={{ width: "100%" }}
              src={convdisp2}
            />
          </div>
        </div> */}
        {/* <div className="row container-row">
          <div
            className="col-md-6"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: 40,
            }}
          >
            <h2 style={{ paddingBottom: 50 }}>Fast Image Refresh Time </h2>
            <img
            className="mob-img-full"
              role="presentation"
              alt="Sharp Technology MIP Refresh"
              style={{ width: "100%" }}
              src={convdisp3}
            />
          </div>
          <div tabIndex={0} className="col-md-6" style={{ padding: 0 }}>
            <div
              tabIndex={-1}
              className="memory-bullet"
              style={{
                // padding: "30px 100px",
                height: "100%",
              }}
            >
              <ul>
                <li>
                  MIP LCDs have fast response times for scrolling text and
                  moving images.
                </li>
                <li>
                  Cholesteric, STN, and E-Ink displays require longer times to
                  update the display image (several hundred milliseconds).
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="row container-row padding-top-30">
          <div
            className="col-md-12"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: 40,
            }}
          >
            <h2 style={{ paddingBottom: 50 }}>Fast Image Refresh Time</h2>
            <img
              className="mob-img-full"
              role="presentation"
              alt="Table showing fast image refresh time for the Sharp Memory in Pixel LCD."
              src={convdisp3}
            />
          </div>
          <div tabIndex={0} style={{ padding: 0 }}>
            <div
              tabIndex={-1}
              className="row memory-bullet"
              style={{
                // padding: "30px 100px",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              <div className="col-md-4">
                <p>
                  MIP LCDs have fast response times for scrolling text and
                  moving images.
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  Cholesteric, STN, and E-Ink displays require longer times to
                  update the display image (several hundred milliseconds).
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row container-row">
          <div tabIndex={0} className="col-md-6" style={{ padding: 0 }}>
            <div
              tabIndex={-1}
              className="memory-bullet"
              style={{
                // padding: "30px 100px",
                height: "100%",
              }}
            >
              <ul>
                <li>Simple 3-wire Serial I/F connectivity (SI, SCS, SCLK)</li>
                <li>
                  Only a single 3 V (1.28” and smaller) or 5 V (1.8” and larger)
                  power supply is required
                </li>
                <li>Only 3 external capacitors are required</li>
                <li>Fewer peripheral components = simplified design process</li>
              </ul>
            </div>
          </div>

          <div
            className="col-md-6"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: 40,
            }}
          >
            <h2 style={{ paddingBottom: 50 }}>Simple 3-Wire Interface</h2>
            <img
            className="mob-img-full"
              role="presentation"
              alt="Sharp Technology MIP Simple Interface"
              style={{ maxWidth: "100%", maxHeight: 500 }}
              src={convdisp4}
            />
          </div>
        </div> */}
        <div className="row container-row padding-top-30">
          <div
            className="col-md-12"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#e4e4e4",
              padding: 40,
            }}
          >
            <h2 style={{ paddingTop: 30, paddingBottom: 50 }}>
              Simple 3-Wire Interface
            </h2>
            <img
              className="mob-img-full"
              role="presentation"
              alt="A diagram showing the simple 3-Wire Interface of a Sharp Memory in Pixel LCD."
              src={convdisp4}
            />
          </div>
          <div className="col-md-12" tabIndex={0} style={{ padding: 0 }}>
            <div
              tabIndex={-1}
              className="row memory-bullet"
              style={{
                // padding: "30px 100px",
                justifyContent: "center",
                alignItems: "start",
                backgroundColor: "#e4e4e4",
              }}
            >
              <div className="col-md-4">
                <p>Simple 3-wire Serial I/F connectivity (SI, SCS, SCLK)</p>
                <p>
                  Only a single 3 V (1.28” and smaller) or 5 V (1.8” and larger)
                  power supply is required
                </p>
              </div>
              <div className="col-md-4">
                <p>Only 3 external capacitors are required</p>
                <p>Fewer peripheral components = simplified design process</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default MemoryLCD;
