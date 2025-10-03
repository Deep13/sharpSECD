"use client";

import React, { Component } from "react";

import Screen3 from "@/assets/smepdark.jpeg";
import logo from "@/assets/sharp_logo.png";
import image1 from "@/assets/Sharp-Memory-In-Pixel_700x1082.jpg";
import arrow from "@/assets/arrow.png";
import mobile from "@/assets/mobile.jpeg";

import SHARP_Logo_red from "@/assets/SHARP_Logo_red.png";
import controlsaleslogo from "@/assets/control-sales-logo.png";
import image2 from "@/assets/Bike_966x644.jpg";
import image3 from "@/assets/MIR_3557_Trans_966x644.png";
import icon from "@/assets/Icon 1.jpeg";
import icon2 from "@/assets/Icon 2.jpeg";
import icon3 from "@/assets/Icon 3.jpeg";
import icon4 from "@/assets/Icon 4.jpeg";
import icon5 from "@/assets/Icon 5.jpeg";
import icon6 from "@/assets/Icon 6.jpeg";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import axios from "axios";
import Toast from "react-bootstrap/Toast";
import Image from "next/image";
import Head from "next/head";

import { useState, useRef, useCallback } from "react";
import { Form, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

export default function ControlSales() {
  const [name, setName] = useState("");
  const [mobileCode, setMobileCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [showError, setShowError] = useState(false);

  const myRef = useRef(null);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      setShowLoader(true);
      setShow(false);
      setSubmit(true);

      const data = {
        name,
        mobile: `${mobileCode}-${mobile}`,
        email,
        message,
        subject: ["Control Sales"],
      };

      try {
        await axios.post("/api/form", data);
        setShowLoader(false);
        setShow(true);

        // reset form after success
        setName("");
        setMobileCode("");
        setMobile("");
        setEmail("");
        setMessage("");
      } catch (error) {
        console.error(error);
        setShowLoader(false);
        setShow(false);
        setShowError(true);
        setSubmit(false);
      }
    },
    [name, mobileCode, mobile, email, message]
  );

  const callFunct = useCallback((event, link) => {
    event.preventDefault();
    window.location.href = `#${link}`;
  }, []);
  return (
    <div>
      <Head>
        <title>Memory-in-Pixel-Control-Sales - Sharp</title>
        <meta name="description" content="Sharp-Memory-in-Pixel" />
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
          <div style={{ paddingTop: 150 }} className="mb-ptop-60">
            <h1
              style={{
                color: "white",
                fontSize: "5rem",
                textAlign: "center",
              }}
              className="mb-font-3"
            >
              Memory in Pixel LCDs
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "2.5rem",
                textAlign: "center",
              }}
              className="mb-font-2"
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
            verticalAlign: "center",
          }}
        >
          <strong>Creating top product solutions with </strong>
          <Image
            style={{ marginLeft: 10 }}
            src={controlsaleslogo}
            role="presentation"
            alt="Control Sales Logo"
          />
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
              <Image
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
                <h1 style={{ fontSize: "3rem" }} className="mb-font-2">
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
                      borderBottomColor: "rgb(237,12,12)",
                      borderBottomStyle: "solid",
                    }}
                  ></div>
                </div>
                <p>
                  Get best-of-class performance with ultra-low power consumption
                  and high readability in almost any ambient lighting
                  environment... plus eye-catching 64-color or high-contrast
                  monochrome for designs ranging from wearables to medical
                  devices to smart meters and many, many more.
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
                    onClick={() => myRef.current.scrollIntoView()}
                    size="lg"
                    variant="outline-danger"
                    style={{ marginRight: 20, width: "100%" }}
                  >
                    Talk to an Expert
                  </Button>
                  <Button
                    className="redButton"
                    href="#/memory-in-pixel-lcds-product"
                    size="lg"
                    variant="outline-danger"
                    style={{ marginRight: 20, width: "100%" }}
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
            // backgroundImage: `url(${bg1})`,
            width: "100%",
            justifyContent: "center",
            display: "flex",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            // minHeight: "100vh",
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
            <h1 style={{ fontSize: "3rem" }} className="mb-font-2">
              <strong>
                THE PERFECT SOLUTION FOR SMALL-SCREEN APPLICATIONS THAT REQUIRE
                A BATTERY.
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
            <div
              className="row"
              style={{ margin: 0, width: "100%", alignItems: "center" }}
            >
              <div className="col-md-6" style={{ padding: 30 }}>
                <div>
                  <Image
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
                      Embedded, 1-bit memory in every pixel allows for an
                      always-on display capable of delivering high-contrast,
                      high-resolution content. Ultra-low power consumption means
                      better heat management, too.
                      <a
                        href="/"
                        onClick={(event) =>
                          callFunct(event, "/memory-in-pixel-lcds-technology")
                        }
                        style={{ color: "#e61d24" }}
                      >
                        {" "}
                        See more about Memory LCD technology here.{" "}
                      </a>
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <Button
                      className="redButton"
                      onClick={() => myRef.current.scrollIntoView()}
                      size="lg"
                      variant="outline-danger"
                      style={{ marginRight: 20, width: "100%" }}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            // backgroundImage: `url(${bg2})`,
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
              <div className="padding-top-50"></div>
              <h1 style={{ fontSize: "3rem" }} className="mb-font-2">
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
                    the display driver circuits integrated into the panel -{" "}
                    <strong>
                      <i>no silicon driver ICs required</i>
                    </strong>{" "}
                    - yielding an exceptionally thin display module.
                  </p>
                </div>
              </div>
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  width: "100%",
                }}
              >
                <Button
                  className="redButton"
                  onClick={() => myRef.current.scrollIntoView()}
                  size="lg"
                  variant="outline-danger"
                  style={{
                    marginRight: 20,
                    width: "100%",
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="col-md-6" style={{ padding: 30 }}>
              <div>
                <Image
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
                <Image
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
                <Image
                  style={{ width: 90 }}
                  src={icon2}
                  role="presentation"
                  alt="icon"
                />
                <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                  <strong>HIGH READABILITY</strong>
                </h1>
                <p style={{ padding: "1vw" }}>
                  Viewable in any light, from edge-of-vision to bright sunlight.
                </p>
              </div>
            </div>
            <div tabIndex={0} className="col-md-4">
              <div>
                <Image
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
                <Image
                  style={{ width: 90 }}
                  src={icon4}
                  role="presentation"
                  alt="icon"
                />
                <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                  <strong>OPERATING TEMPS</strong>
                </h1>
                <p style={{ padding: "1vw" }}>
                  Wide operating temperatures for the most extreme environments.
                </p>
              </div>
            </div>
            <div tabIndex={0} className="col-md-4">
              <div>
                <Image
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
                <Image
                  style={{ width: 90 }}
                  src={icon6}
                  role="presentation"
                  alt="icon"
                />
                <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                  <strong>SIMPLE INTERFACE</strong>
                </h1>
                <p style={{ padding: "1vw" }}>
                  Design made easy with a 3-wire SPI serial interface (SI, SCS,
                  SCK).
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
              onClick={() => myRef.current.scrollIntoView()}
              size="lg"
              variant="outline-danger"
              style={{ marginRight: 20 }}
            >
              Contact Us
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
                        style={{ width: "80%", marginTop: 30 }}
                        src={controlsaleslogo}
                        role="presentation"
                        alt="Control Sales Logo"
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
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "row",
              padding: 20,
              margin: 0,
            }}
          >
            <div className="col-md-6">
              <div className="padding-top-50 d-none d-md-block"></div>
              <div className="padding-top-50"></div>
              <h1
                style={{
                  fontSize: "3rem",
                  textAlign: "left",
                  color: "white",
                }}
              >
                <strong>Let’s Talk.</strong>
              </h1>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  padding: "20px 0px",
                }}
              >
                A member of our team will get back to you ASAP. Let’s find out
                if a Memory in Pixel LCD is the perfect fit for your next
                product.
              </p>
            </div>
            <div className="col-md-6">
              <div className="padding-top-50 d-none d-md-block"></div>
              <div className="padding-top-50"></div>
              <Form noValidate className="Control_Sales" onSubmit={onSubmit}>
                {/* Email */}
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      aria-label="Email"
                      placeholder="Email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email id.
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                {/* Name */}
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      aria-label="Name"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Name field cannot be empty
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                {/* Phone */}
                <Row className="mb-3">
                  <Col xs={2}>
                    <Form.Control
                      aria-label="Country Code"
                      placeholder="+1"
                      required
                      value={mobileCode}
                      onChange={(e) => setMobileCode(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Country code field cannot be empty
                    </Form.Control.Feedback>
                  </Col>
                  <Col xs={10}>
                    <Form.Control
                      aria-label="Contact Number"
                      placeholder="Contact number"
                      required
                      maxLength={10}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Phone number field cannot be empty
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                {/* Message */}
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      aria-label="Comment"
                      placeholder="Comments (optional)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Col>
                </Row>

                {/* Submit */}
                <Button
                  aria-label="Submit Form Button"
                  className="redButton w-100"
                  variant="primary"
                  type="submit"
                >
                  {showLoader ? (
                    <ClipLoader animation="border" size="sm" />
                  ) : (
                    "Submit"
                  )}
                </Button>

                {/* Toasts */}
                <Toast
                  show={show}
                  onClose={() => setShow(false)}
                  bg="success"
                  className="mt-3"
                >
                  <Toast.Header>
                    <strong className="me-auto">Success</strong>
                  </Toast.Header>
                  <Toast.Body className="text-white">
                    Thank You! <br /> Your query has been successfully
                    submitted.
                  </Toast.Body>
                </Toast>

                <Toast
                  show={showError}
                  onClose={() => setShowError(false)}
                  bg="danger"
                  className="mt-3"
                >
                  <Toast.Header>
                    <strong className="me-auto">Error</strong>
                  </Toast.Header>
                  <Toast.Body className="text-white">
                    We were unable to receive your query. Please try again.
                  </Toast.Body>
                </Toast>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
