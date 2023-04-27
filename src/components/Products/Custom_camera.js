import React, { Component } from "react";
import { Image } from "react-bootstrap";
import lcdImage from "../../assets/Sharp-Product-Custom-Camera-Modules.jpg";
import logo from "../../logo.png";
import QueryForm from "../QueryForm";

import Footer from "../../Footer";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
class Custom_camera extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Products | Custom Camera - Sharp</title>
          <meta
            name="description"
            content="Sharp partners with the world’s top brands to raise the bar on imaging technology across the hottest consumer product categories."
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
            <div tabIndex={-1}>
              <h1>Custom Camera Modules</h1>
              <br />
              <p>
                The world’s eyes are on Sharp’s custom camera solutions. As a
                leading global producer of camera modules, we partner with the
                world’s top brands to continually raise the bar on imaging
                technology across the hottest consumer product categories.
              </p>
              <p>
                Consider us as your expert go-to provider for these high-volume
                applications:
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 20,
                  alignItems: "center",
                }}
              >
                <div className="bullet">1</div>
                <div>
                  <span className="h5">Smartphones</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 20,
                  alignItems: "center",
                }}
              >
                <div className="bullet">2</div>
                <div>
                  <span className="h5">Wearable Devices/HMD</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 20,
                  alignItems: "center",
                }}
              >
                <div className="bullet">3</div>
                <div>
                  <span className="h5">PC/Tablets</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 20,
                  alignItems: "center",
                }}
              >
                <div className="bullet">4</div>
                <div>
                  <span className="h5">
                    Other cutting-edge consumer electronics
                  </span>
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
            style={{ justifyContent: "center", display: "flex" }}
          >
            <Image
              role="presentation"
              alt="Sharp-Product-Custom-Camera-Modules"
              src={lcdImage}
              fluid
            />
          </div>
        </div>
        <div className="row container-row padding-top-30">
          <div
            className="col-md-6"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              padding: 40,
            }}
          >
            <img
              role="presentation"
              alt="SHARP Logo"
              style={{ width: "50%" }}
              src={logo}
            />
          </div>
          <div tabIndex={0} className="col-md-6" style={{ padding: 0 }}>
            <div
              className="mobile-padding-40"
              tabIndex={-1}
              style={{
                // backgroundColor: "#e6e5e5",
                textAlign: "center",
                padding: "30px 100px",
              }}
            >
              <h3>The Sharp Advantage</h3>
              <div style={{ textAlign: "left" }}>
                <p>
                  Our engineering team offers fresh approaches to solve your
                  unique design challenges...helping you develop your industry’s
                  most groundbreaking products. Our compact, space-saving
                  modules further ease your design process.
                </p>
              </div>
              <div
                className="list-style"
                style={{ textAlign: "left", padding: "5px 0px" }}
              >
                <h5>Other advantages:</h5>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "10px 0px",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="bullet">1</div>
                  <div>
                    <p>
                      Advanced focus technology (OIS, multi-lens, folded lens)
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "10px 0px",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="bullet">2</div>
                  <div>
                    <p>
                      Market-leading package sizes (low z-height, mdall x/y
                      size)
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "10px 0px",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="bullet">3</div>
                  <div>
                    <p>
                      High-yield, high-precision manufacturing processes with
                      large-scale capacity
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "10px 0px",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="bullet">4</div>
                  <div>
                    <p>Global support capability</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "10px 0px",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="bullet">5</div>
                  <div>
                    <p>
                      Solutions developed for the world’s most innovative
                      product manufacturers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 50 }}>
          <div className="row container-row-85 padding-bottom-30 contact-block">
            <div className="col-md-10">
              <h5 style={{ paddingBottom: 20 }}>
                Want to talk about how a Sharp Custom Camera Module could
                elevate your next design?
              </h5>
              <div className="h3">Let's get in touch</div>
              <QueryForm subject="Custom Camera Module" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Custom_camera;
