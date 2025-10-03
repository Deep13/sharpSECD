"use client";
import React, { Component, useEffect, useRef, useState } from "react";
import Screen3 from "@/assets/Low-Power-Displays-Main-Image--F.jpg";
import Screen4 from "@/assets/Low-Power-Displays-Image-2.jpeg";
import logo from "@/assets/sharp_logo.png";
import temperature from "@/assets/Wide Temperatures Icon.png";
import thinLightweight from "@/assets/Thin and Lightweight Icon.png";
import outdoor from "@/assets/Outdoor Readability Icon.png";
import lowPower from "@/assets/Low-Power Icon.png";
import Button from "react-bootstrap/Button";
import ODonnell from "@/assets/ODonnell.png";
import mobile from "@/assets/handshake.png";
import SHARP_Logo_red from "@/assets/SHARP_Logo_red.png";
import Footer from "@/components/Footer";
import axios from "axios";
import Toast from "react-bootstrap/Toast";
import Col from "react-bootstrap/Col";
import image2 from "@/assets/Memory in Pixel LCD.png";
import image4 from "@/assets/R-IGZO LCD.png";
import image5 from "@/assets/Sharp 5 R-IGZO Low-Power Performance.png";
import Head from "next/head";
import Image from "next/image";
import { Form, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

export default function LowPowerODonnel() {
  const [formData, setFormData] = useState({
    name: "",
    mobileCode: "",
    mobile: "",
    email: "",
    message: "",
    demo: false,
  });

  const [showLoader, setShowLoader] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const myRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setShowLoader(true);
    setShowSuccess(false);
    setShowError(false);

    const data = {
      name: formData.name,
      mobile: `${formData.mobileCode}-${formData.mobile}`,
      email: formData.email,
      message: formData.demo
        ? `Yes, I’d like to request a demo. ${formData.message}`
        : formData.message,
      subject: ["O'Donnell Low Power"],
    };

    try {
      await axios.post("/api/form", data);
      setShowLoader(false);
      setShowSuccess(true);
      setSubmitted(true);

      // ✅ Reset form fields
      setFormData({
        name: "",
        mobileCode: "",
        mobile: "",
        email: "",
        message: "",
        demo: false,
      });
    } catch (error) {
      console.error(error);
      setShowLoader(false);
      setShowError(true);
      setSubmitted(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div>
      <Head>
        <title>LOW POWER ODonnell - Sharp</title>
        <meta name="description" content="Sharp-LOW-POWER-DISPLAYS ODonnell" />
      </Head>

      <div
        style={{
          alignItems: "center",
          backgroundImage: `url(${Screen3.src})`,
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
                fontSize: "3.5rem",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {`YOUR SOURCE FOR GAME CHANGING`}
            </h1>
            <h1
              style={{
                color: "white",
                fontSize: "3.5rem",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {`LOW POWER DISPLAYS`}
            </h1>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgb(115 115 115)",
          padding: "20px 0",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "1.8rem",
            textAlign: "center",
            marginBottom: 0,
          }}
        >
          <strong>
            Creating top product solutions with O'Donnell Associates North
          </strong>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div
            className="row"
            style={{
              maxWidth: "100%",
              display: "flex",
              alignItems: "center",
              paddingBlock: 20,
              paddingInline: "10%",
              margin: 0,
            }}
          >
            <div>
              {/* <div className="padding-top-50 d-none d-md-block"></div> */}
              <div className="padding-top-50"></div>
              <h1
                style={{
                  fontSize: "2.5rem",
                  textAlign: "center",
                  border: "none",
                  marginInline: "auto",
                  width: "80%",
                }}
              >
                <strong>
                  PUT THE MUSCLE OF SHARP LOW-POWER DISPLAYS TO WORK IN YOUR
                  NEXT DESIGN
                </strong>
              </h1>
              <div className="padding-top-50"></div>
            </div>
            <p
              style={{
                fontWeight: "light",
                lineHeight: "2.5rem",
                letterSpacing: "1px",
              }}
            >
              Power management is one of the core issues with providing peak
              display performance in high-ambient and outdoor lighting
              environments. But with Sharp's leading-edge technologies,
              compensating for high power requirements is a thing of the past.
              Our low-power, high-performance display solutions change the game,
              enabling a whole new world of designs. Choose from Monochrome and
              64-color
              <span>
                <a
                  style={{ color: "black", textDecoration: "underline" }}
                  href="https://sharpsecd.com/#/MemoryInPixel"
                >
                  {" "}
                  Memory-In-Pixel (MIP) LCDs{" "}
                </a>
              </span>
              or full-color, high-resolution{" "}
              <span>
                <a
                  style={{ color: "black", textDecoration: "underline" }}
                  href="https://sharpsecd.com/#/ReflectiveIGZO"
                >
                  Reflective IGZO displays.
                </a>
              </span>
            </p>
            <div className="padding-top-50"></div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Button
                className="redButton"
                size="lg"
                onClick={() => myRef.current.scrollIntoView()}
                variant="outline-danger"
                style={{ marginTop: 20, marginBottom: 50 }}
              >
                Contact Us
              </Button>
            </div>
            {/* <div className="padding-top-50"></div> */}
          </div>
        </div>
        <div
          className="row"
          style={{
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingInline: "5rem",
            paddingBlock: "2rem",
            backgroundImage: `url(${Screen4.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="padding-top-50"></div>
          <div className="padding-top-50"></div>

          <div className="row">
            <div tabIndex={0} className="col-md-3">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <Image
                  style={{ width: 90 }}
                  src={outdoor}
                  role="presentation"
                  alt="icon"
                />
                <h1
                  style={{
                    fontSize: "1.3rem",
                    padding: "1vw",
                    textAlign: "center",
                  }}
                >
                  <strong>OUTDOOR READABILITY</strong>
                </h1>
                <p style={{ padding: "1vw", textAlign: "center" }}>
                  From edge-of-vision to bright sunlight
                </p>
              </div>
            </div>

            <div tabIndex={0} className="col-md-3">
              <div className="padding-top-50 d-block d-md-none"></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <Image
                  style={{ width: 90 }}
                  src={lowPower}
                  role="presentation"
                  alt="icon"
                />
                <h1
                  style={{
                    fontSize: "1.3rem",
                    padding: "1vw",
                    textAlign: "center",
                  }}
                >
                  <strong>LOW POWER</strong>
                </h1>
                <p style={{ padding: "1vw", textAlign: "center" }}>
                  No backlight required in reflective mode.
                </p>
              </div>
            </div>

            <div tabIndex={0} className="col-md-3">
              <div className="padding-top-50 d-block d-md-none"></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <Image
                  style={{ width: 90 }}
                  src={temperature}
                  role="presentation"
                  alt="icon"
                />
                <h1
                  style={{
                    fontSize: "1.3rem",
                    padding: "1vw",
                    textAlign: "center",
                  }}
                >
                  <strong>WIDE TEMPERATURES</strong>
                </h1>
                <p style={{ padding: "1vw", textAlign: "center" }}>
                  Operates in even the most extreme environments
                </p>
              </div>
            </div>

            <div tabIndex={0} className="col-md-3">
              <div className="padding-top-50 d-block d-md-none"></div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <Image
                  style={{ width: 90 }}
                  src={thinLightweight}
                  role="presentation"
                  alt="icon"
                />
                <h1
                  style={{
                    fontSize: "1.3rem",
                    padding: "1vw",
                    textAlign: "center",
                  }}
                >
                  <strong>THIN + LIGHTWEIGHT</strong>
                </h1>
                <p style={{ padding: "1vw", textAlign: "center" }}>
                  Slim profile enables compact product design
                </p>
              </div>
            </div>
          </div>
          {/* <div className="padding-top-30"></div> */}
          <div className="padding-top-50"></div>
          <div className="padding-top-50"></div>
        </div>
        <div
          style={{
            backgroundColor: "#d9d9d9",
            width: "100%",
            justifyContent: "center",
            display: "flex",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="row"
            style={{
              maxWidth: "1140px",
              display: "flex",
              paddingTop: "50px",
              paddingBottom: "50px",
              alignItems: "flex-start",
              paddingRight: 20,
              paddingLeft: 20,
              margin: 0,
            }}
          >
            <div style={{ width: "100%" }}>
              <h1 style={{ fontSize: "3rem" }}>
                <strong>R-IGZO LCDs</strong>
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
            <div
              className="col-md-6"
              style={{ paddingTop: 30, paddingBottom: 30 }}
            >
              <div>
                <Image
                  style={{ width: "100%" }}
                  src={image4}
                  role="presentation"
                  alt="Comparison with TFT"
                />
              </div>
            </div>
            <div tabIndex={0} className="col-md-6">
              <div tabIndex={-1} style={{ height: "100%", padding: 10 }}>
                <div className="padding-top-50"></div>

                <div
                  className="centerAlignDiv"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <p>
                    <strong>
                      Full-color and high-resolution for hand held and signage
                      applications
                    </strong>
                  </p>
                  <p>
                    Our{" "}
                    <span>
                      <a
                        style={{
                          color: "black",
                          textDecoration: "underline",
                        }}
                        href="https://sharpsecd.com/#/ReflectiveIGZO"
                      >
                        Reflective IGZO displays{" "}
                      </a>
                    </span>{" "}
                    combine full-color and high resolution in a low-power
                    reflective LCD Current available{" "}
                    <span>
                      <a
                        style={{
                          color: "black",
                          textDecoration: "underline",
                        }}
                        href="https://sharpsecd.com/#/reflective-igzo-displays-product"
                      >
                        sizes are 5.0-inch (diagonal)
                      </a>
                    </span>{" "}
                    for hand-held, portable applications and{" "}
                    <span>
                      <a
                        style={{
                          color: "black",
                          textDecoration: "underline",
                        }}
                        href="https://sharpsecd.com/#/reflective-igzo-displays-product"
                      >
                        31.5-inch (diagonal){" "}
                      </a>
                    </span>
                    targeted at outdoor signage applications. Both sizes include
                    low-power backlighting for low-ambient viewing.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row"
              style={{ margin: 0, width: "100%", marginTop: 50 }}
            >
              <div
                className="col-sm-12 col-md-12"
                style={{
                  height: 0,
                  width: "100%",
                  margin: "12px 0",
                  border: "none",
                  borderBottomWidth: "2px",
                  borderBottomColor: "rgba(0,0,0,0.5)",
                  borderBottomStyle: "solid",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#d9d9d9",
            width: "100%",
            justifyContent: "center",
            display: "flex",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="row"
            style={{
              maxWidth: "1140px",
              display: "flex",
              paddingBottom: "50px",
              alignItems: "flex-start",
              paddingRight: 20,
              paddingLeft: 20,
              margin: 0,
            }}
          >
            <div tabIndex={0} className="col-md-6">
              <div tabIndex={-1} style={{ height: "100%", padding: 10 }}>
                {/* <div className="padding-top-50"></div> */}

                <div
                  className="centerAlignDiv"
                  style={{
                    paddingTop: 20,
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <p>
                    <strong>
                      Reflective IGZO Displays Eliminate the Backlight
                    </strong>
                  </p>
                  <p>
                    For outdoor. bright sunlight environments. traditional
                    transmissive displays require a high-power, high-heat
                    generating backlight to compete with the sun. This poses
                    problems for thermal management and power dissipation at the
                    system level.
                    <span>
                      <a
                        style={{
                          color: "black",
                          textDecoration: "underline",
                        }}
                        href="https://sharpsecd.com/#/reflective-igzo-displays-product"
                      >
                        {" "}
                        Sharp's 5" R-IGZO display{" "}
                      </a>
                    </span>
                    negates the need for such a backlight, resulting in an
                    extremely low-power solution for handheld and portable
                    applications.
                  </p>
                  <p>
                    <strong>
                      Same Performance at just 3.6% of the power requirement
                    </strong>
                  </p>
                  <p>
                    With a typical high-bright (1000 nit) transmissive no
                    backlight, the R-IGZO display is 115mW at 60Hz. display, the
                    total power is 3.2W at 60Hz refresh. With which is just 3.6%
                    of the power requirement.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{ paddingTop: 30, paddingBottom: 30 }}
            >
              <div>
                <Image
                  style={{ width: "100%" }}
                  src={image5}
                  role="presentation"
                  alt="Comparison with TFT"
                />
                <p
                  style={{
                    fontStyle: "italic",
                    fontSize: "small",
                    textAlign: "left",
                    marginTop: 20,
                  }}
                >
                  Backlight power is 0.33 W at 50 nits. Only needed at night.
                  <br />
                  • Power consumption comparison (5" HD720 basis)
                  <br />• Reflective IGZO is 3.6% of the power compared to a
                  high-bright transmissive display.
                </p>
              </div>
            </div>
            <div className="row" style={{ margin: 0, width: "100%" }}>
              <div
                className="col-sm-12 col-md-12"
                style={{
                  height: 0,
                  width: "100%",
                  margin: "12px 0",
                  border: "none",
                  borderBottomWidth: "2px",
                  borderBottomColor: "rgba(0,0,0,0.5)",
                  borderBottomStyle: "solid",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            flexDirection: "column",
          }}
        >
          <div
            className="row"
            style={{
              maxWidth: "1140px",
              display: "flex",
              paddingTop: "50px",
              paddingBottom: "50px",
              alignItems: "flex-start",
              paddingRight: 20,
              paddingLeft: 20,
              margin: 0,
            }}
          >
            <div style={{ width: "100%" }}>
              <h1 style={{ fontSize: "3rem" }}>
                <strong>MEMORY IN PIXEL LCDs</strong>
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
            <div
              className="col-md-6"
              style={{ paddingTop: 30, paddingBottom: 10 }}
            >
              <div>
                <Image
                  style={{ width: "100%" }}
                  src={image2}
                  role="presentation"
                  alt="Comparison with TFT"
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
                    paddingTop: 30,
                    borderBottom: 10,
                  }}
                >
                  <p>
                    <strong>
                      Choose from monochrome or 64-color for wearable and remote
                      applications
                    </strong>
                  </p>
                  <p>
                    Our{" "}
                    <span>
                      <a
                        style={{
                          color: "black",
                          textDecoration: "underline",
                        }}
                        href="https://sharpsecd.com/#/memory-in-pixel-lcds-technology"
                      >
                        Memory-In-Pixel (MIP) technology{" "}
                      </a>
                    </span>{" "}
                    provides high-performance solutions for wearable and
                    portable applications - or any product with a battery. Sizes
                    range from 1.08-inch to 4.4-inch (diagonal) with
                    static-image operation at power levels as low as 10's of
                    microamps
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            tabIndex={0}
            style={{
              padding: 0,
              maxWidth: "1140px",
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            <div className="row" style={{ margin: 0, width: "100%" }}>
              <div
                className="col-sm-12 col-md-12"
                style={{
                  height: 0,
                  width: "100%",
                  margin: "12px 0",
                  border: "none",
                  borderBottomWidth: "2px",
                  borderBottomColor: "rgba(0,0,0,0.5)",
                  borderBottomStyle: "solid",
                }}
              ></div>
            </div>
            <h1
              style={{
                fontSize: "1.3rem",
                paddingTop: "50px",
                paddingBottom: "1vw",
                textAlign: "left",
              }}
            >
              <strong>
                Memory in Pixel Displays: High Resolution for Detailed Graphics
              </strong>
            </h1>
            <div
              tabIndex={-1}
              className="row "
              style={{
                // padding: "30px 100px",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              <div className="col-md-6">
                <p>
                  Traditionally, reflective Film-compensated STN reflective
                  displays for a variety of outdoor/hand­ (FSTN) has been the
                  workhorse of monochrome, held display applications. However,
                  these displays are limited in terms of performance and
                  low-power attributes.
                </p>
                <p>
                  FSTN displays typically require a SV VDD supply and
                  requirements. For example, a QVGA FSTN display an LCD VEE
                  supply, both of which increase power will require
                  approximately 82ml/V of power to
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  display low-resolution, low-contrast images. Sharp's
                  monochrome MIP WQVGA display requires display low-resolution,
                  low-contrast images. only 50uW in a static image hold or 175uW
                  in a 1Hz update mode
                </p>
                <p>
                  The FSTN display does not have a static image hold mode, so it
                  must be refreshed at 60Hz constantly.
                </p>
                <p>
                  <i>
                    The Sharp MIP is a mere 0.2% of che power in 1 Hz update
                    mode ond 0.06% of the power in static image hold.
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: 50 }}></div>
        <div
          style={{
            backgroundColor: "rgb(232 230 230)",
            width: "100%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div
            className="row"
            style={{
              maxWidth: "1140px",
              display: "block",
              paddingTop: "30px",
              paddingBottom: "30px",
              alignItems: "center",
              paddingRight: 20,
              paddingLeft: 20,
              margin: 0,
            }}
          >
            <div
              className="row"
              style={{ margin: 0, width: "100%", alignItems: "flex-start" }}
            >
              <div tabIndex={0} className="col-md-6">
                <div tabIndex={-1} style={{ height: "100%", padding: 10 }}>
                  <div
                    className="centerAlignDiv"
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <h1
                      style={{ fontSize: "2rem", textAlign: "center" }}
                      className="mb-font-2"
                    >
                      <strong>STRONGER TOGETHER.</strong>
                    </h1>
                    <p>
                      Bringing the top products to market requires having the
                      best team.
                    </p>
                    <div>
                      <Image
                        style={{ width: "80%" }}
                        src={ODonnell}
                        role="presentation"
                        alt="ODonnell"
                      />
                    </div>
                    <p>+</p>
                    <div>
                      <Image
                        style={{ width: "80%" }}
                        src={SHARP_Logo_red}
                        role="presentation"
                        alt="SHARP_Logo_red"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{ padding: 30 }}>
                <div>
                  <Image
                    style={{ width: "100%" }}
                    src={mobile}
                    role="presentation"
                    alt="THE PERFECT SOLUTION"
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingBottom: 50 }}></div>
        </div>
      </div>

      {/* <div className="padding-top-30"></div> */}

      <div
        ref={myRef}
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
            <div className="padding-top-50 d-none d-md-block"></div>
            <div className="padding-top-50"></div>
            <h1
              style={{
                fontSize: "3rem",
                textAlign: "center",
                color: "white",
              }}
            >
              <strong>WANT TO KNOW MORE ABOUT SHARP LOW-POWER DISPLAYS?</strong>
            </h1>
          </div>
          <div style={{ width: "70%", marginTop: "5rem" }}>
            <Form
              noValidate
              className="O-Donnell-Low-Power"
              onSubmit={onSubmit}
            >
              <Row className="mb-3">
                <Col>
                  <Form.Control
                    name="email"
                    aria-label="Email"
                    placeholder="Email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email id.
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Control
                    name="name"
                    aria-label="Name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Name field cannot be empty
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={2}>
                  <Form.Control
                    name="mobileCode"
                    aria-label="Country Code"
                    placeholder="+1"
                    required
                    value={formData.mobileCode}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Country code field cannot be empty
                  </Form.Control.Feedback>
                </Col>
                <Col xs={10}>
                  <Form.Control
                    name="mobile"
                    aria-label="Contact Number"
                    placeholder="Contact number"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    maxLength={10}
                  />
                  <Form.Control.Feedback type="invalid">
                    Phone number field cannot be empty
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Check
                    className="customCheckbox"
                    type="checkbox"
                    name="demo"
                    label="Yes, I’d like to request a demo"
                    checked={formData.demo}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Control
                    name="message"
                    as="textarea"
                    rows={3}
                    aria-label="Comment"
                    placeholder="Comments (optional)"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Button
                className="redButton"
                aria-label="Submit Form Button"
                style={{ width: "100%" }}
                variant="primary"
                type="submit"
                disabled={submitted && showLoader}
              >
                {showLoader ? <ClipLoader size={20} /> : "Submit"}
              </Button>

              {/* ✅ Toast Notifications */}
              <Toast
                className="mt-3 toastSuccess"
                onClose={() => setShowSuccess(false)}
                show={showSuccess}
                delay={3000}
                autohide
              >
                <Toast.Header>
                  <strong className="me-auto">Success</strong>
                </Toast.Header>
                <Toast.Body>
                  Thank You! <br /> Your query has been successfully submitted.
                </Toast.Body>
              </Toast>

              <Toast
                className="mt-3 toastError"
                onClose={() => setShowError(false)}
                show={showError}
                delay={3000}
                autohide
              >
                <Toast.Header>
                  <strong className="me-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>
                  We were unable to receive your query. Please try again.
                </Toast.Body>
              </Toast>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
