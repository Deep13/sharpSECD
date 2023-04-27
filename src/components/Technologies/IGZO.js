import React, { Component } from "react";
import convdisp1 from "../../assets/Sharp-Technology-R-IGZO-1.jpg";
import convdisp2 from "../../assets/Sharp-Technology-IGZO-Mobility-1.png";
import convdisp3 from "../../assets/Sharp-Technology-IGZO-High-Resolution-2.png";
import convdisp4 from "../../assets/Sharp-Technology-IGZO-Power-Consumption-3.png";
import convdisp5 from "../../assets/Sharp-Technology-IGZO-Touch-performance-4.jpg";
import Image from "react-bootstrap/Image";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
AOS.init({
  disable: function () {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
});
// import { Button, Form, FormControl, Table } from "react-bootstrap";

class IGZO extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Technology | IGZO - Sharp</title>
          <meta
            name="description"
            content="IGZO displays deliver high-resolution, ultra-low power, slim product profiles, and with improved touch performance."
          />
        </Helmet>
        <div
          className="row container-row-85 padding-top-50"
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
              <h1>IGZO Technology</h1>
              <br />
              <h5>A Breakthrough in Display Performance</h5>
              <p>
                Revolutionary IGZO display technology delivers high-resolution,
                ultra-low power, slim product profiles, and exceptionally
                detailed touch panel capabilities.
              </p>
              <p>
                IGZO is a driving force behind new developments in a variety of
                fields, enabling reflective displays, as well as OLED, MEMS, and
                other display technologies with new levels of performance.
              </p>
              <div
                style={{ display: "flex", flexDirection: "row", padding: 20 }}
              >
                <div className="bullet">1</div>
                <div>
                  <span className="h5">Ultra-low Power Consumption</span> <br />{" "}
                  {"IGZO driving at <60Hz refresh"}
                  <br />
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", padding: 20 }}
              >
                <div className="bullet">2</div>
                <div>
                  <span className="h5">
                    Enables higher resolution using a-Si processes
                  </span>{" "}
                  <br />
                  Improved display light transmission or reflectivity
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", padding: 20 }}
              >
                <div className="bullet">3</div>
                <div>
                  <span className="h5">
                    Enables low-noise PCAP touchscreen implementations
                  </span>{" "}
                  <br />
                  Able to sync PCAP controller with the LCD drive.
                </div>
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
            style={{ justifyContent: "center" }}
          >
            <Image
              role="presentation"
              style={{ maxWidth: "100%", maxHeight: 700 }}
              src={convdisp1}
              alt="Sharp Technology R IGZO"
              fluid
            />
          </div>
        </div>
        <div className="row container-row">
          <div
            tabIndex={0}
            className="col-md-6 order-md-1"
            style={{ padding: 0 }}
          >
            <div
              tabIndex={-1}
              className="memory-bullet"
              style={{
                padding: "30px 100px",
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 style={{ paddingBottom: 50 }}>High Mobility Rates</h2>
              <h4>
                Composed of Indium, Gallium, Zinc, and Oxide, IGZO moves beyond
                traditional TFT LCD technology with electron mobility far higher
                than Amorphous Silicon (a-Si) displays.
              </h4>
            </div>
          </div>
          <div
            className="col-md-6 order-md-2"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: 40,
            }}
          >
            <img
              role="presentation"
              alt="Sharp Technology IGZO Mobility"
              style={{ maxWidth: "100%" }}
              src={convdisp2}
            />
          </div>
        </div>
        <div
          className="row container-row"
          style={{ backgroundColor: "#e4e4e4" }}
        >
          <div
            tabIndex={0}
            className="col-md-6 order-md-1"
            style={{ padding: 0 }}
          >
            <div
              tabIndex={-1}
              className="memory-bullet"
              style={{
                padding: "30px 100px",
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 style={{ paddingBottom: 50 }}>
                Exceptionally High Resolution
              </h2>
              <h4 style={{ paddingBottom: 50 }}>
                High electron mobility rate of IGZO successfully enables
                unprecedented transistor miniaturization and circuit thinning.
                By raising the light transmission of each pixel, twice the
                resolution is achieved for the same transmittance.
              </h4>
            </div>
          </div>
          <div
            className="col-md-6 order-md-2"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: 40,
            }}
          >
            {/* <h2 style={{ paddingBottom: 50 }}>Ultra-low Power Consumption </h2> */}
            <img
              role="presentation"
              alt="Sharp Technology IGZO High Resolution"
              style={{ maxWidth: "100%", maxHeight: 500 }}
              src={convdisp3}
            />
          </div>
        </div>
        <div className="row container-row">
          <div
            tabIndex={0}
            className="col-md-6 order-md-1"
            style={{ padding: 0 }}
          >
            <div
              tabIndex={-1}
              className="memory-bullet"
              style={{
                padding: "30px 100px",
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 style={{ paddingBottom: 50 }}>
                Ultra-low Power Consumption{" "}
              </h2>
              <h4 style={{ paddingBottom: 50 }}>
                IGZO’s Pause Driving Method capitalizes on High OFF Resistance.
                Utilizing this improved pixel performance, IGZO reduces power
                consumption to one-fifth or even one-tenth that of conventional
                screens, which contributes to longer product battery life.
              </h4>
            </div>
          </div>
          <div
            className="col-md-6 order-md-2"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: 40,
            }}
          >
            {/* <h2 style={{ paddingBottom: 50 }}>Ultra-low Power Consumption </h2> */}
            <img
              role="presentation"
              alt="Sharp Technology IGZO Power Consumption"
              style={{ maxWidth: "100%", maxHeight: 500 }}
              src={convdisp4}
            />
          </div>
        </div>
        <div
          className="row container-row"
          style={{ backgroundColor: "#e4e4e4" }}
        >
          <div
            tabIndex={0}
            className="col-md-6 order-md-1"
            style={{ padding: 0 }}
          >
            <div
              tabIndex={-1}
              className="memory-bullet"
              style={{
                padding: "30px 100px",
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 style={{ paddingBottom: 50 }}>
                Responsive Touch Panel Performance{" "}
              </h2>
              <h4 style={{ paddingBottom: 50 }}>
                IGZO can be an intermittently operated semiconductor, allowing
                the LCD drive to be OFF during the touch panel sensing cycle.
                This enables detecting even the faintest signals for highly
                accurate PCAP (Projected Capacitive) touch and pen input.
              </h4>
            </div>
          </div>
          <div
            className="col-md-6 order-md-2"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              paddingLeft: 0,
              padding: 40,
            }}
          >
            {/* <h2 style={{ paddingBottom: 50 }}>Ultra-low Power Consumption </h2> */}
            <img
              role="presentation"
              alt="Sharp Technology IGZO Touch performance"
              style={{ maxWidth: "100%", maxHeight: 500, width: "100%" }}
              src={convdisp5}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default IGZO;
