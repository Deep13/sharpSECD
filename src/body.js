import React, { Component } from "react";
// import Headernav from "./headernav";
import { Card } from "react-bootstrap";

import Jumbo from "./jumbo";
import Footer from "./Footer";
import FullHeightDivWithImageRight from "./components/FullHeightDivImageRight";
// import FullHeightDivWithImageLeft from "./components/FullHeightDivImageLeft";
import HomeContent from "./json/HomeContent";
import picture1 from "./assets/Picture1.jpg";
import picture2 from "./assets/Picture2.jpg";
import picture3 from "./assets/Picture3.jpg";
import picture4 from "./assets/Picture4.jpg";
import logo from "./logo.png";
import { Link } from "react-router-dom";

class Body extends Component {
  callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = link;
    // history.push(link);
    // alert(text);
  };
  render() {
    return (
      <div>
        <Jumbo />
        <div
          className="mobile-padding-40"
          style={{
            textAlign: "center",
            justifyContent: "center",
            padding: 60,
          }}
        >
          <div tabIndex={0} role="main" id="main-content">
            <h1
              tabIndex={-1}
              className="main-header"
              style={{ fontSize: "2.5rem", textAlign: "left" }}
            >
              Make Your Product Shine with Our Reflective, Low-Power, Sunlight
              Viewable Displays
            </h1>
          </div>
          <div className="row">
            <div tabIndex={0} className="col-md-6">
              <div
                tabIndex={-1}
                className="mob-top-div"
                style={{
                  textAlign: "left",
                  fontSize: "1.2rem",
                  padding: "3rem 3rem 0rem 0px ",
                }}
              >
                <div style={{ marginBottom: 16 }}>
                  Sharp wrote the book when it comes to displays that perform in
                  the most challenging environments. Today, there are endless
                  applications for displays that can stand up to extreme
                  lighting conditions or the need to render mission-critical
                  detail.
                </div>
                <div style={{ marginBottom: 16 }}>
                  Our line-up includes the best in Sharp reflective technology,
                  from our Memory-in-Pixel LCDs to new Reflective IGZO display
                  modules that enable thin, lightweight products with ultra-low
                  power requirements. And we continue to offer some of the
                  toughest Industrial LCD specifications in the industry.
                </div>
              </div>
            </div>
            <div
              className="col-md-6 mobile-home-img mobile-padding-40"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                padding: 60,
              }}
            >
              <img
                role="presentation"
                alt="SHARP Logo"
                style={{ width: "70%" }}
                src={logo}
              />
            </div>
          </div>
        </div>
        <FullHeightDivWithImageRight
          bg="#e4e4e4"
          content={HomeContent.content[0]}
          image={picture1}
          alt="Memory in pixel LCD"
          link="/memory-in-pixel-lcds-product"
        >
          <Card.Text style={{ textAlign: "left", fontSize: "1.2rem" }}>
            Our
            <Link
              to="/memory-in-pixel-lcds-product"
              style={{ color: "#e61d24" }}
              onClick={(event) =>
                this.callFunct(event, "/memory-in-pixel-lcds-product")
              }
            >
              {" "}
              Memory-in-Pixel{" "}
            </Link>
            displays offer best-of-class performance with ultra-low power
            consumption and high readability in almost any ambient lighting
            environment.
          </Card.Text>
          <Card.Text style={{ textAlign: "left", fontSize: "1.2rem" }}>
            Choose from eye-catching 64-color or high-contrast monochrome for
            designs ranging from wearables to medical devices to smart meters
            and many more.
          </Card.Text>
        </FullHeightDivWithImageRight>
        <FullHeightDivWithImageRight
          bg="white"
          content={HomeContent.content[1]}
          image={picture2}
          alt="Reflect IGZO"
          link="/reflective-igzo-displays-product"
        >
          <Card.Text style={{ textAlign: "left", fontSize: "1.2rem" }}>
            Our full-color, low-power
            <Link
              to="/reflective-igzo-displays-product"
              style={{ color: "#e61d24" }}
              onClick={(event) =>
                this.callFunct(event, "/reflective-igzo-displays-product")
              }
            >
              {" "}
              Reflective IGZO{" "}
            </Link>
            displays are the latest advancement built on Sharp’s IGZO-TFT
            technology.
          </Card.Text>
          <Card.Text style={{ textAlign: "left", fontSize: "1.2rem" }}>
            They’re the perfect solution for battery-operated handheld and
            outdoor applications where fantastic readability is required.
          </Card.Text>
        </FullHeightDivWithImageRight>
        {/* <FullHeightDivWithImageRight
          bg="#e4e4e4"
          content={HomeContent.content[2]}
          image={picture3}
          link="/igzo-8k-displays-product"
          alt="8k Displays"
        >
          <Card.Text style={{ textAlign: "left", fontSize: "1.2rem" }}>
            Our ultra-high-definition
            <a
              href="/"
              style={{ color: "#e61d24" }}
              onClick={(event) =>
                this.callFunct(event, "/igzo-8k-displays-product")
              }
            >
              {" "}
              8K displays{" "}
            </a>
            deliver an unparalleled viewing experience with 3D-like feeling,
            depth, and high-resolution detail.
          </Card.Text>
          <Card.Text style={{ textAlign: "left", fontSize: "1.2rem" }}>
            See our 31.5-inch 8K display, which delivers some of the world’s
            highest quality with the combination of 8K + HDR + 120Hz drive
            options built on Sharp IGZO.
          </Card.Text>
        </FullHeightDivWithImageRight> */}
        <FullHeightDivWithImageRight
          bg="#e4e4e4"
          content={HomeContent.content[3]}
          image={picture4}
          link="/industrial-lcds-product"
          alt="Industrial LCD"
        >
          <Card.Text style={{ textAlign: "left", fontSize: "1.2rem" }}>
            Whether it’s all-Sharp out of the box or a high-performance solution
            by a Sharp value-add partner, we work with you and the industry’s
            best talent to find the perfect
            <Link
              to="/industrial-lcds-product"
              style={{ color: "#e61d24" }}
              onClick={(event) =>
                this.callFunct(event, "/industrial-lcds-product")
              }
            >
              {" "}
              General Purpose LCD{" "}
            </Link>
            module for your project.
          </Card.Text>
          <Card.Text style={{ textAlign: "left", fontSize: "1.2rem" }}>
            We deliver multi-touch PCAP, high-brightness, high-contrast, wide
            viewing angles, and wide operating temperatures for performance in
            the most challenging environments.
          </Card.Text>
        </FullHeightDivWithImageRight>
        <Footer />
      </div>
    );
  }
}

export default Body;
