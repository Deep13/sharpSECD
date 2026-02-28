import React, { Component } from "react";
import convdisp from "../assets/Sharp-Press-Landing-Page-Hero-2.jpg";
import convdisp1 from "../assets/news2.png";
import news2 from "../assets/news-9-aug.png";
import news3 from "../assets/news3.png";
import news1 from "../assets/Sharp-ePoster-28.5-inch--Display.jpg";
import news4 from "../assets/Sharp-MIP-3-5-inch-LS035Q7DD01.png";
import Image from "react-bootstrap/Image";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
AOS.init();
// import { Button, Form, FormControl, Table } from "react-bootstrap";

class MemoryLCD extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>
            Sarp SECD News – Latest Display Technology Announcements
          </title>
          <meta
            name="description"
            content="Stay updated with the latest Sharp SECD product news, including ultra-low-power Memory in Pixel LCDs and sustainable ePoster display innovations."
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
              <h1>Sharp SECD News</h1>
              <br />
              <span className="h5">
                Visit this page for the latest product and technology news from
                Sharp SECD.
              </span>
              <br />
              <br />
              <p>For media inquiries, please contact:</p>
              <p>
                Karamy Muessig, Xposure Unlimited <br />
                <a
                  style={{ color: "#e61d24" }}
                  className="redLink"
                  href="mailto:karamy@xposureunlimited.com"
                >
                  Karamy [at] XposureUnlimited.com
                </a>
              </p>
              <div></div>
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
              alt="The outline of a Sharp display with a picture of flowers suggesting brightness and contrast"
              src={convdisp}
              fluid
            />
          </div>
        </div>
        <div
          className="padding-top-50 padding-bottom-30"
          style={{ backgroundColor: "#e4e4e4" }}
        >
          <div className="row container-row-85">
            <div className="col-md-6" style={{ padding: 0 }}>
              <h2 style={{ textDecoration: "underline" }}>
                Sharp’s New Memory in Pixel LCD Features 64-Colors, Super
                Low-Power, and High Reflectivity for Portable Applications
              </h2>
              <p>May 6, 2025</p>
              <p>
                Sharp has announced its new high-contrast, highly reflective
                3.5-inch (diagonal) 64-color Memory in Pixel display. It renders
                color at 18% NTSC and has a 9.0% reflectivity, which makes
                images pop even in direct sunlight or high-ambient lighting
                scenarios.
                <br />
                <a
                  className="redLink"
                  href={require("../assets/Documents/news-4.pdf")}
                  // onClick={() => openDoc(key)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e61d24" }}
                >
                  Read More..
                </a>
              </p>
            </div>
            <div
              className="col-md-6"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image
                role="presentation"
                alt="Sharp's new 3.5-inch Memory in Pixel LCD displaying a vivid sunset with palm trees, showcasing high contrast and 64-color capability in reflective mode."
                src={news4}
                style={{ maxHeight: 400 }}
                fluid
              />
            </div>
          </div>
        </div>
        <div
          className="padding-top-50 padding-bottom-30"
          style={{ backgroundColor: "#e4e4e4" }}
        >
          <div className="row container-row-85">
            <div className="col-md-6" style={{ padding: 0 }}>
              <h2 style={{ textDecoration: "underline" }}>
                Sharp’s ePoster Display Module Eliminates Paper Signage Expense
                and Waste
              </h2>
              <p>April 03, 2025</p>
              <p>
                Today, Sharp announced its new 28.5-inch ePoster display. The
                2160 x 3060 display module enables an ultra-low-power
                alternative to the expense and material waste of A2 (420 mm x
                594 mm) poster printing.
                <br />
                <a
                  className="redLink"
                  href={require("../assets/Documents/Sharp-ePoster-28.5-inch--PR-FINAL.pdf")}
                  // onClick={() => openDoc(key)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e61d24" }}
                >
                  Read More..
                </a>
              </p>
            </div>
            <div
              className="col-md-6"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image
                role="presentation"
                alt="Sharp ePoster digital display showing a Summer Sale advertisement in a bright retail environment, highlighting paperless signage."
                src={news1}
                style={{ maxHeight: 400 }}
                fluid
              />
            </div>
          </div>
        </div>
        <div
          className="padding-top-50 padding-bottom-30"
          style={{ backgroundColor: "#e4e4e4" }}
        >
          <div className="row container-row-85">
            <div className="col-md-6" style={{ padding: 0 }}>
              <h2 style={{ textDecoration: "underline" }}>
                Sharp Memory in Pixel Display Combines Superb Visual Detail with
                Low-Power Operation
              </h2>
              <p>March 12, 2024</p>
              <p>
                Today, Sharp announced its new high-contrast, highly-reflective
                2.16-inch (diagonal) monochrome Memory in Pixel display. The
                display (part number LS022B7DH03) provides excellent viewability
                in high-ambient environments and can be either front-lit or
                back-lit for dim/dark environments.
                <br />
                <a
                  className="redLink"
                  href={require("../assets/Documents/news-3.pdf")}
                  // onClick={() => openDoc(key)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e61d24" }}
                >
                  Read More..
                </a>
              </p>
            </div>
            <div
              className="col-md-6"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image
                role="presentation"
                alt="Sharp 2.16-inch monochrome Memory in Pixel display showing a high-contrast image of a lion, connected to a red evaluation board."
                src={news3}
                style={{ maxHeight: 400 }}
                fluid
              />
            </div>
          </div>
        </div>
        <div
          className="padding-top-50 padding-bottom-30"
          style={{ backgroundColor: "#e4e4e4" }}
        >
          <div className="row container-row-85">
            <div className="col-md-6" style={{ padding: 0 }}>
              <h2 style={{ textDecoration: "underline" }}>
                Sharp’s New 64-color Memory LCD is Perfect for Wearable Product
                Designs
              </h2>
              <p>October 11, 2022</p>
              <p>
                Today, Sharp Electronics Corporation, Device Division (SECD)
                unveiled its new 2.13-inch Class (diagonal) color Memory in
                Pixel (MIP) LCD module. The display (LS021B7DD02) delivers
                static or moving images in QVGA resolution and 64 colors, making
                it perfect for various wearable and handheld products.
                <br />
                <a
                  className="redLink"
                  href={require("../assets/Documents/news-1.pdf")}
                  // onClick={() => openDoc(key)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e61d24" }}
                >
                  Read More..
                </a>
              </p>
            </div>
            <div
              className="col-md-6"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image
                role="presentation"
                alt="Sharp 2.13-inch 64-color Memory in Pixel display module showing wearable speed and distance interface, mounted on a green evaluation board."
                src={convdisp1}
                style={{ maxHeight: 400 }}
                fluid
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default MemoryLCD;
