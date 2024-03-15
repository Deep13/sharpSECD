import React, { Component } from "react";
import convdisp from "../assets/Sharp-Press-Landing-Page-Hero-2.jpg";
import convdisp1 from "../assets/news-1.jpeg";
import news2 from "../assets/news-9-aug.png";
import news3 from "../assets/news3.png";
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
          <title>Sharp SECD News - Sharp</title>
          <meta
            name="description"
            content="Visit the Sharp SECD News page for info on our latest TFT LCD display products and solutions."
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
              <div>
                {/* <Button size="lg" variant="outline-danger" href="#/contact">
                  Find a Rep
                </Button> */}
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
              alt="Memory LCD Banner"
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
                Sharp Memory in Pixel Display Combines Superb Visual Detail with Low-Power Operation
              </h2>
              <p>March 12, 2024</p>
              <p>
                Today, Sharp announced its new high-contrast, highly-reflective 2.16-inch (diagonal) monochrome Memory in Pixel display. The display (part number LS022B7DH03) provides excellent viewability in high-ambient environments and can be either front-lit or back-lit for dim/dark environments.
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
                alt="Memory LCD Banner"
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
                alt="Memory LCD Banner"
                src={convdisp1}
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
                Sharp’s New R-IGZO 5.0-inch Display Now Available with Backlight Option
              </h2>
              <p>August 9, 2022</p>
              <p>
                Today, Sharp Electronics Corporation Device Division (SECD) announced
                that its new Reflective IGZO (R-IGZO) 5.0-inch Class (diagonal) display for handheld applications is now available in a
                backlit option. This update provides added flexibility to achieve superb sunlight viewability with incredibly low power
                consumption. Samples are available now, with mass production starting in Q1 of 2023.
                <br />
                <a
                  className="redLink"
                  href={require("../assets/Documents/news-2.pdf")}
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
                alt="Memory LCD Banner"
                src={news2}
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
