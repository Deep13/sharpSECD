import React, { Component } from "react";
import convdisp1 from "../../assets/Sharp-Technology-R-IGZO-1.jpg";
import convdisp2 from "../../assets/Sharp-Technology-R-IGZO-2.jpeg";
import convdisp3 from "../../assets/Sharp-Technology-R-IGZO-3.png";
import Image from "react-bootstrap/Image";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
AOS.init();
// import { Button, Form, FormControl, Table } from "react-bootstrap";

class RIGZO extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = "#" + link;
  };
  render() {
    return (
      <div>
        <Helmet>
          <title>Technology | Reflective IGZO - Sharp</title>
          <meta
            name="description"
            content="Full-color reflective, outdoor readable, low-power displays built on Sharp’s signature IGZO-TFT technology."
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
              <h1>Reflective IGZO Technology</h1>
              <br />
              <p>
                Reflective IGZO technology yields full-color reflective, outdoor
                readable, low-power displays built on Sharp’s signature{" "}
                <a
                  href="/"
                  style={{ color: "#e61d24" }}
                  onClick={(event) => this.callFunct(event, "/igzo-technology")}
                >
                  {" "}
                  IGZO-TFT technology{" "}
                </a>
                . It’s the perfect solution when good outdoor readability and
                battery operation is required.
              </p>
              <div
                style={{ display: "flex", flexDirection: "row", padding: 20 }}
              >
                <div className="bullet">1</div>
                <div>
                  <span className="h5">Ultra-low Power Consumption</span>
                  <br /> IGZO driving low refresh rates + no backlight in
                  reflective mode
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", padding: 20 }}
              >
                <div className="bullet">2</div>
                <div>
                  <span className="h5">
                    High Outdoor Readability w/Full-color Moving Images @60Hz
                  </span>
                  <br />
                  Reflective electrode structure + high contrast
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", padding: 20 }}
              >
                <div className="bullet">3</div>
                <div>
                  <span className="h5">Thin and lightweight</span>
                  <br />
                  Slim, low-power backlight enables compact product designs.
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
              alt="Sharp-Technology-R-IGZO"
              style={{ maxHeight: 700 }}
              src={convdisp1}
              fluid
            />
            <p
              style={{
                fontStyle: "italic",
                fontSize: "small",
                textAlign: "center",
              }}
            >
              Actual photo of display in reflective mode.
            </p>
          </div>
        </div>
        <div className="row container-row">
          <div tabIndex={0} className="col-md-6" style={{ padding: 0 }}>
            <div
              tabIndex={-1}
              className="memory-bullet"
              style={{
                padding: "30px 100px",
                backgroundColor: "#e4e4e4",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "baseline",
                height: "100%",
              }}
            >
              <h1 style={{ paddingBottom: 50 }}>Full Color + Moving Images</h1>
              <span className="h4" style={{ paddingBottom: 50 }}>
                Sharp has combined MVA LC mode and silver alloy reflective MRS
                in order to achieve high reflectance, high contrast ratio, and
                high NTSC ratio.
              </span>
              <br />
              <span className="h4">
                Employing IGZO-TFT technology alongside a reflective electrode
                structure enables flicker-less drive at 1Hz.
              </span>
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#e4e4e4",
              padding: 40,
            }}
          >
            <img
              role="presentation"
              alt="Sharp Technology R IGZO"
              style={{ maxHeight: 500 }}
              src={convdisp2}
            />
          </div>
        </div>
        <div className="row container-row">
          <div tabIndex={0} className="col-md-6" style={{ padding: 0 }}>
            <div
              tabIndex={-1}
              className="memory-bullet"
              style={{
                padding: "30px 100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "baseline",
                height: "100%",
              }}
            >
              <h1 style={{ paddingBottom: 50 }}>
                Ultra-low Power Consumption{" "}
              </h1>
              <span className="h4" style={{ paddingBottom: 50 }}>
                IGZO has low off-leakage current for the I-V characteristic.
                This enables an industry-leading combination of low-frequency
                driving, and 8-bit RGB color in a reflective display.
              </span>
              <br />
              <span className="h4" style={{ paddingBottom: 50 }}>
                {`Driving frequency can switch from 60Hz when displaying moving images to <60Hz when displaying a static image.`}
              </span>
              <br />
              {/* <span className="h4">
                In Figure B, voltage is applied to the TFT elements of each
                pixel for one frame in 60 at 1Hz drive. In the remaining 59
                frames, the driver IC and the driving circuit of LC panel are
                almost off.
              </span> */}
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
            <img
              role="presentation"
              alt="Sharp Technology R IGZO"
              style={{ maxWidth: "100%", maxHeight: 500 }}
              src={convdisp3}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default RIGZO;
