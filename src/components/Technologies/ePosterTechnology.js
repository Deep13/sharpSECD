import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Form1 from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import axios from "axios";

import heroBg from "../../assets/eposter_technology/tech-hero.png";
import organicGrocery from "../../assets/eposter_technology/tech-features-organic-grocery.png";
import spectraBg from "../../assets/eposter_technology/tech-spectra-bg.jpg";
import spectraOverlay from "../../assets/eposter_technology/tech-spectra-overlay.png";
import colorChartLeft from "../../assets/eposter_technology/tech-color-chart-left.png";
import colorChartRight from "../../assets/eposter_technology/tech-color-chart-right.png";
import igzoBg from "../../assets/eposter_technology/tech-igzo-backplane-bg.jpg";
import sizeGuide from "../../assets/eposter_technology/tech-size-guide.png";
import whyBg from "../../assets/eposter_technology/tech-why-eposter-bg.jpg";
import whyOverlay from "../../assets/eposter_technology/tech-why-eposter-overlay.png";
import sayGoodbye from "../../assets/eposter_technology/tech-say-goodbye.png";
import technicalNoteThumb from "../../assets/eposter_technology/tech-technical-note-thumb.png";

AOS.init();

const technicalNotePDF = require("../../assets/Documents/Sharp-ePoster-Technical-Note-June-2026.pdf");

const sectionHeading = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: 24,
};

class ePosterTechnology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      mobileCode: "",
      mobile: null,
      email: null,
      message: null,
      show: false,
      showLoader: false,
      submit: false,
      showError: false,
    };
  }
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ showLoader: true, show: false });
    let data = {
      name: this.state.name,
      mobile: this.state.mobileCode + "-" + this.state.mobile,
      email: this.state.email,
      message: this.state.message,
      subject: ["ePoster Technology"],
    };
    axios
      .post("/api/form", data)
      .then((res) => {
        this.setState({
          showLoader: false,
          show: true,
          name: "",
          mobileCode: "",
          mobile: "",
          email: "",
          message: "",
          submit: true,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          showLoader: false,
          show: false,
          showError: true,
          submit: false,
        });
      });
  };
  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <Helmet>
          <title>ePoster Display Module Technology | Sharp SECD</title>
          <meta
            name="description"
            content="Discover the technology behind Sharp's ePoster display modules—combining Sharp's IGZO backplane with E Ink Spectra 6 full-color reflective ePaper for print-quality, near-zero-power digital paper replacement."
          />
        </Helmet>

        {/* ===== HERO ===== */}
        <div
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <div
            className="hero-overlay"
            style={{
              width: "100%",
              backgroundColor: "rgba(255,255,255,0.83)",
              padding: "36px 20px",
              maxWidth: 1000,
            }}
          >
            <div style={{ margin: "0 auto", textAlign: "center" }}>
              <h1 className="etp-hero-headline" style={{ fontSize: "43pt", fontWeight: "bold", margin: 0 }}>
                ePOSTER DISPLAY MODULE TECHNOLOGY
              </h1>
            </div>
          </div>
        </div>

        {/* ===== INTRO ===== */}
        <div style={{ backgroundColor: "#ffffff", minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="etp-container" style={{ textAlign: "center" }}>
            <h2 style={{ ...sectionHeading, maxWidth: 790, margin: "0 auto 24px", fontSize: "33pt" }}>ENABLING DIGITAL SOLUTIONS TO REPLACE POSTER PRINTING</h2>
            <p style={{ maxWidth: 1200, margin: "0 auto 30px", fontSize: "19pt" }}>
              Sharp is an industry leader in low-power display technology. Our solutions are now augmented with the near-zero-power{" "}
              <Link to="/eposters-displays" style={{ color: "inherit", textDecoration: "underline" }}>
                ePoster display module
              </Link>
              . ePoster combines Sharp's IGZO backplane with E Ink's latest full-color Spectra™ 6 reflective ePaper technology. This powerful combination brings unique product opportunities to the
              digital paper-replacement market.
            </p>
            <Button className="redNewButton" variant="primary" as={Link} to="/contact">
              Contact Sharp
            </Button>
          </div>
        </div>

        {/* ===== FEATURES INCLUDE ===== */}
        <div
          className="row key-section"
          tabIndex={0}
          style={{
            background: "#fff",
            width: "100%",
            textAlign: "left",
            backgroundPosition: "top",
            marginLeft: 0,
            padding: 0,
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <div className="col-lg-6" style={{ padding: 80, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ maxWidth: 600 }}>
              <h2 style={{ color: "black", paddingBottom: 30, fontSize: "33pt" }}>
                <strong>FEATURES INCLUDE:</strong>
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ul style={{ fontSize: "20pt", lineHeight: 2, paddingLeft: 50, marginTop: 20 }}>
                  <li>Resolution up to 200 PPI</li>
                  <li>60k color gamut</li>
                  <li>Reflectivity = 30%</li>
                  <li>Contrast Ratio = 20:1</li>
                  <li>Zero-power static image hold</li>
                  <li>Operating Temp = 0°C to +50°C</li>
                  <li>Image update time = 21s</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6" style={{ paddingRight: 0 }}>
            <img
              src={organicGrocery}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              role="presentation"
              alt="Stock image graphic with signage display showing how ePoster will look in a mall or retail environment "
            />
          </div>
        </div>

        {/* ===== E INK SPECTRA 6 ===== */}
        <div
          style={{
            backgroundImage: `url(${spectraBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="etp-container" style={{ padding: 0 }}>
            <div className="etp-split row">
              <div className="col-lg-6" style={{ minWidth: 280, textAlign: "center" }}>
                <img src={spectraOverlay} style={{ width: "100%", maxWidth: 640, height: "auto" }} role="presentation" alt="E Ink Spectra 6 full-color ePaper sample showing vivid colors" />
              </div>
              <div className="col-lg-6" style={{ minWidth: 280 }}>
                <div
                  className="EINKSPECTRA"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.93)",
                    borderRadius: 4,
                  }}
                >
                  <div className="tech-section" style={{ maxWidth: 500 }}>
                    <h2 style={sectionHeading}>E INK SPECTRA™ 6</h2>
                    <p style={{ fontSize: "1.5rem" }}>
                      E Ink's latest color technology moves well past the performance of the previous versions. It can produce vivid, full-color images, that are capable of print-quality rendering.
                      This is due to E Ink's patented multi-color, micro-cup technology coupled with their advanced color imaging algorithm. It utilizes the six primary colors of Red, Green, Blue,
                      Yellow, Black, and White.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ENHANCED COLOR GAMUT ===== */}
        <div style={{ backgroundColor: "#ffffff", padding: 80 }}>
          <div className="etp-container tech-section" style={{ textAlign: "center", padding: 0 }}>
            <h2 style={{ ...sectionHeading, maxWidth: 930, margin: "100px auto 8px" }}>ENHANCED COLOR GAMUT BY E INK'S ADVANCED COLOR IMAGING ALGORITHM</h2>
            <p
              style={{
                fontSize: "1.5rem",
                marginBottom: 30,
              }}
            >
              Four particle colors, six optical states
            </p>
            <div className="etp-two-col row" style={{ marginBottom: "100px" }}>
              <div className="etp-col col-lg-6" style={{ textAlign: "center" }}>
                <img src={colorChartLeft} style={{ width: "100%", maxWidth: 580, height: "auto" }} role="presentation" alt="Chart showing the four particle colors used by E Ink Spectra 6" />
              </div>
              <div className="etp-col col-lg-6" style={{ textAlign: "center" }}>
                <img src={colorChartRight} style={{ width: "100%", maxWidth: 580, height: "auto" }} role="presentation" alt="Chart showing the six optical states produced by E Ink Spectra 6" />
              </div>
            </div>
          </div>
        </div>

        {/* ===== SHARP'S IGZO BACKPLANE ===== */}
        <div
          style={{
            backgroundImage: `url(${igzoBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <div className="tech-section etp-container md:p-10" style={{ padding: 40, backgroundColor: "rgba(255,255,255,0.93)", marginTop: 80, marginBottom: 80 }}>
            <h2 style={sectionHeading}>SHARP'S IGZO BACKPLANE</h2>
            <div
              className="row"
              style={{
                gap: 40,
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <div className="w-373 w-lg-auto custom-width col-lg-4">
                <p style={{ fontWeight: "bold", fontSize: "1.8rem" }}>IGZO technology enables:</p>
                <ul style={{ fontSize: "1.5rem", lineHeight: 1.8, marginTop: 20 }}>
                  <li>Higher PPI resolutions</li>
                  <li>Faster array scanning</li>
                  <li>Very thin borders around the display matrix</li>
                </ul>
              </div>
              <div className="w-373 w-lg-auto custom-width col-lg-4">
                <p style={{ fontSize: "1.5rem" }}>
                  Indium-Gallium-Zinc-Oxide (IGZO) is a unique semi-conductor material that provides much improved TFT performance for active-matrix display arrays. It provides much higher electron
                  mobilities compared to traditional a-Si backplanes.
                </p>
              </div>
              <div className="w-373 w-lg-auto custom-width col-lg-4">
                <p style={{ fontSize: "1.5rem" }}>
                  Additionally, the IGZO backplane can run at higher voltages. This, along with running on Sharp's G8 fab, enables scalability up to 75"-plus diagonal size for large applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== COMPARISON TABLE ===== */}
        <div style={{ backgroundColor: "#ffffff", margin: "80px 0px", marginBottom: 40 }}>
          <div className="etp-container">
            <h2 style={{ ...sectionHeading, textAlign: "center" }}>COMPARISON OF ePOSTER TO AN a-Si MODULE</h2>
            <div className="etp-table-wrap">
              <table className="etp-table">
                <thead>
                  <tr>
                    <th className="etp-corner" style={{ width: 300 }}>
                      Features
                    </th>
                    <th style={{ width: 450 }}>31" Module</th>
                    <th style={{ width: 450 }}>Sharp A2 ePoster</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Backplane + EPD
                    </td>
                    <td>a-Si + Spectra™ 6</td>
                    <td>IGZO + Spectra™ 6</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Panel Size
                    </td>
                    <td>31.5" Landscape</td>
                    <td>28.5" Portrait</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Resolution
                    </td>
                    <td>2,560 × 1,440</td>
                    <td>2,160 × 3,060</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      PPI
                    </td>
                    <td>94 PPI</td>
                    <td>131 PPI</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Border Size
                    </td>
                    <td>L/R 3.6mm T 4.8</td>
                    <td>L/R/T 3.0mm</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Module
                    </td>
                    <td>EPD module + PMIC Bd.</td>
                    <td>EPD module + TCON Bd.</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Host I/F
                    </td>
                    <td>SPI</td>
                    <td>USB</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Image Update
                    </td>
                    <td>Flashing Update</td>
                    <td>Scrolling Update</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ===== ISO POSTER SIZING STANDARDS ===== */}
        <div style={{ backgroundColor: "#ffffff" }}>
          <div className="etp-container">
            <div className="etp-split row">
              <div className="col-lg-6">
                <h2 style={sectionHeading}>ISO POSTER SIZING STANDARDS</h2>
                <p style={{ fontSize: "1.5rem" }}>International ISO paper size is commonly used outside the U.S. and refers to standardized poster sizes.</p>
                <p style={{ fontSize: "1.5rem" }}>
                  ePoster display modules by Sharp are available currently in A1 and A2 poster sizes. An A3-sized module and an outdoor A1-sized Kaleido™ 3 display module are coming in Q2 2026.
                </p>
              </div>
              <div className="col-lg-6" style={{ textAlign: "center" }}>
                <img src={sizeGuide} style={{ width: "100%", maxWidth: 580, height: "auto" }} role="presentation" alt="ISO poster size guide diagram showing nested A0 through A4 paper sizes" />
              </div>
            </div>
          </div>
        </div>

        {/* ===== INDOOR ePOSTER MODULE SPECIFICATIONS ===== */}
        <div style={{ backgroundColor: "#ffffff" }}>
          <div className="etp-container">
            <h2 style={sectionHeading}>INDOOR ePOSTER MODULE SPECIFICATIONS</h2>
            <div className="etp-table-wrap">
              <table className="etp-table">
                <thead>
                  <tr>
                    <th className="etp-corner" style={{ width: 300 }}>
                      Specs
                    </th>
                    <th>A1 size - 40.5 inch</th>
                    <th>A2 size - 28.5 inch</th>
                    <th>A3 size - 20.2 inch</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Model No.
                    </td>
                    <td>LP405A6NW01</td>
                    <td>LP285A6NW01</td>
                    <td>LP202A6BW01</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Resolution (pixel)
                    </td>
                    <td>3,060 × 4,320</td>
                    <td>2,160 × 3,060</td>
                    <td>1,530 × 2,160</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Pixel Density
                    </td>
                    <td>131 ppi</td>
                    <td>131 ppi</td>
                    <td>131 ppi</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Active Area (mm)
                    </td>
                    <td>594.56 × 839.38</td>
                    <td>418.00 × 592.17</td>
                    <td>297.28 × 419.69</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Panel Border (mm)
                    </td>
                    <td>L/R: 3.0 Top: 5.0 Bottom: 9.9</td>
                    <td>L/R: 3.0 Top: 3.0 Bottom: 6.9</td>
                    <td>L/R: 3.0 Top: 3.0 Bottom: 7.7</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Reflectance (@ SCE*)
                    </td>
                    <td>34%</td>
                    <td>34%</td>
                    <td>34%</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Contrast Ratio (@ SCE*)
                    </td>
                    <td>22 : 1</td>
                    <td>22 : 1</td>
                    <td>22 : 1</td>
                  </tr>
                  <tr>
                    <td className="etp-feature" style={{ border: "1px solid #ffffff" }}>
                      Operating Temperature
                    </td>
                    <td>0 to 50°C</td>
                    <td>0 to 50°C</td>
                    <td>0 to 50°C</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "0.85rem", marginTop: 12, color: "#555" }}>*SCE = Diffuse reflectance. Measurements with specular reflection removed.</p>
          </div>
        </div>

        {/* ===== WHY ePOSTER? ===== */}
        <div
          style={{
            backgroundImage: `url(${whyBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="etp-container" style={{ padding: 0 }}>
            <div className="etp-split row">
              <div className="col-lg-6">
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.91)",
                    borderRadius: 4,
                    padding: 40,
                  }}
                >
                  <h2 style={sectionHeading}>WHY ePOSTER?</h2>
                  <ul style={{ fontSize: "1.5rem", lineHeight: 1.9, paddingLeft: 20 }}>
                    <li>A2 portrait mode is perfect for replacing paper posters.</li>
                    <li>Higher resolution/higher PPI enables print-quality images.</li>
                    <li>Small borders enable small mullions for tiling applications.</li>
                    <li>Scrolling update is less intrusive visually.</li>
                    <li>The USB I/F enables ease of use and fast data transfers.</li>
                  </ul>
                </div>
              </div>
              <div style={{ minWidth: 280, textAlign: "center" }} className="col-lg-6">
                <img src={whyOverlay} style={{ width: "100%", maxWidth: 600, height: "auto" }} role="presentation" alt="ePoster module displaying a vertical poster in portrait orientation" />
              </div>
            </div>
          </div>
        </div>

        {/* ===== SUPER LOW POWER ===== */}
        <div style={{ backgroundColor: "#ffffff", margin: "80px 0px" }}>
          <div className="etp-container">
            <h2 style={sectionHeading}>SUPER LOW POWER WITH NO BACKLIGHT REQUIRED</h2>
            <div className="etp-two-col" style={{ alignItems: "flex-start" }}>
              <div className="etp-col">
                <p style={{ fontSize: "1.5rem" }}>
                  Reflective performance negates the need for the high-power backlight required for traditional transmissive LCD displays. Also, the image update power is only 2.5W and then zero power
                  until the next update. This greatly simplifies thermal design considerations and enables installations that don't require line power, negating the time and expense of permits and
                  power installation.
                </p>
              </div>
              <div className="etp-col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p style={{ fontSize: "1.5rem" }}>
                  ePoster-enabled products can use solar, battery, PoE, or PoWiFi. The solution can be designed to utilize various connectivity options such as 4G, Wi-Fi, or LAN to take advantage of
                  existing cloud-based content management services.
                </p>
                <Button className="redNewButton" style={{ borderRadius: "5px" }} variant="primary" as={Link} to="/eposters-displays" style={{ marginTop: 20 }}>
                  See ePoster Overview
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* ===== SAY GOODBYE TO THE EXPENSE OF PRINTING ===== */}
        <div
          className="row key-section flex flex-column flex-md-row"
          tabIndex={0}
          style={{
            background: "#fff",
            width: "100%",
            textAlign: "left",
            backgroundPosition: "top",
            marginLeft: 0,
            alignItems: "stretch",
            padding: 0,
          }}
        >
          <div className="col-lg-6 p-0">
            <img
              src={sayGoodbye}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              role="presentation"
              alt="Stock image graphic with signage display showing how ePoster will look in a mall or retail environment "
            />
          </div>
          <div className="col-lg-6">
            <div style={{ padding: 80 }}>
              <h2 style={{ color: "black", paddingBottom: 30 }}>
                <strong>SAY GOODBYE TO THE EXPENSE OF PRINTING</strong>
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: 24 }}>
                  E Ink's Spectra™ 6 and Sharp's IGZO backplane combine to provide high-resolution, high color gamut, print-quality image rendering. Low-power display operation enables
                  paper-replacement products that require no line power and can take advantage of various wireless connectivity options for content management.
                </div>
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 24,
                  marginTop: 24,
                }}
              >
                <a href={technicalNotePDF} target="_blank" rel="noopener noreferrer" download>
                  <img
                    src={technicalNoteThumb}
                    style={{
                      width: 160,
                      height: "auto",
                      border: "1px solid #ccc",
                    }}
                    alt="Thumbnail of the Sharp ePoster Technical Note PDF"
                  />
                </a>
                <p style={{ fontSize: "1.2rem", maxWidth: 250 }}>Download the Sharp ePoster Technical Note PDF.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CONTACT FORM ===== */}
        <div
          style={{
            backgroundColor: "rgba(45,47,65,1)",
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
              justifyContent: "center",
              flexDirection: "column",
              padding: 20,
              margin: 0,
            }}
          >
            <div>
              <div className="padding-top-50"></div>
              <div>
                <h1
                  className="mb-2-5"
                  style={{
                    fontSize: "3rem",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <strong>
                    IS SHARP'S ePOSTER RIGHT FOR YOUR
                    <br />
                    PAPER REPLACEMENT PRODUCT?
                    <br />
                    LET'S TALK.
                  </strong>
                </h1>
                <p
                  style={{
                    color: "white",
                    textAlign: "center",
                    padding: "20px 40px",
                  }}
                >
                  Provide your contact info and we'll reach out ASAP.
                </p>
              </div>
            </div>
            <div className="contact-resp">
              <Form1 noValidate className="ePosterDisplaysTechnology" onSubmit={this.onSubmit}>
                <Form1.Row style={{ paddingBottom: 10 }}>
                  <Col>
                    <Form1.Control
                      aria-label="Email"
                      placeholder="Email"
                      aria-required={true}
                      required
                      type="email"
                      onChange={(event) => this.setState({ email: event.currentTarget.value })}
                      value={this.state.email}
                    />
                    <Form1.Control.Feedback type="invalid">Please provide a valid email id.</Form1.Control.Feedback>
                  </Col>
                </Form1.Row>
                <Form1.Row style={{ paddingBottom: 10 }}>
                  <Col>
                    <Form1.Control
                      aria-required={true}
                      aria-label="Name"
                      required
                      placeholder="First Name"
                      onChange={(event) => this.setState({ name: event.currentTarget.value })}
                      value={this.state.name}
                    />
                    <Form1.Control.Feedback type="invalid">Name field cannot be empty</Form1.Control.Feedback>
                  </Col>
                </Form1.Row>
                <Form1.Row style={{ paddingBottom: 10, display: "flex", gap: 10 }}>
                  <Col>
                    <Form1.Control
                      aria-label="Country Code"
                      placeholder="+1"
                      aria-required={true}
                      required
                      onChange={(event) => this.setState({ mobileCode: event.currentTarget.value })}
                      value={this.state.mobileCode}
                    />
                    <Form1.Control.Feedback type="invalid">Country code field cannot be empty</Form1.Control.Feedback>
                  </Col>
                  <Col xs={10}>
                    <Form1.Control
                      aria-label="Contact Number"
                      placeholder="Contact number"
                      aria-required={true}
                      required
                      onChange={(event) => this.setState({ mobile: event.currentTarget.value })}
                      value={this.state.mobile}
                      maxLength={10}
                    />
                    <Form1.Control.Feedback type="invalid">Phone number field cannot be empty</Form1.Control.Feedback>
                  </Col>
                </Form1.Row>
                <Form1.Row style={{ paddingBottom: 10 }}>
                  <Col>
                    <Form1.Control
                      aria-label="Comment"
                      as="textarea"
                      rows="3"
                      placeholder="Comments(optional)"
                      onChange={(event) => this.setState({ message: event.currentTarget.value })}
                      value={this.state.message}
                    />
                  </Col>
                </Form1.Row>
                <Button className="redButton" aria-label="Submit Form Button" style={{ marginTop: 10, width: "100%" }} variant="primary" type="submit" disabled={this.state.submit}>
                  Submit
                </Button>
                <Loader type="TailSpin" color="#e26565" height={50} width={50} timeout={0} visible={this.state.showLoader} style={{ margin: "10px" }} />
                <Toast onClose={() => this.setState({ show: false, submit: false })} show={this.state.show} className="toastSuccess">
                  <Toast.Header>
                    <strong className="me-auto">Success</strong>
                  </Toast.Header>
                  <Toast.Body>
                    Thank You! <br /> Your query has been successfully submitted.
                  </Toast.Body>
                </Toast>
                <Toast onClose={() => this.setState({ showError: false, submit: false })} show={this.state.showError} className="toastError">
                  <Toast.Header>
                    <strong className="me-auto">Error</strong>
                  </Toast.Header>
                  <Toast.Body>We were unable to recieve your query. Please try again.</Toast.Body>
                </Toast>
                <div style={{ paddingBottom: 50 }}></div>
                <div style={{ paddingBottom: 50 }}></div>
              </Form1>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default ePosterTechnology;
