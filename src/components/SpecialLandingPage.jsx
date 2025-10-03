"use client";

import React, { Component, useEffect, useRef, useState } from "react";
import Restaurant from "@/assets/eposter_displays/ePosterRestaurant.jpg";
import Hotel from "@/assets/eposter_displays/ePosterHotel.jpg";
import Healthcare from "@/assets/eposter_displays/ePosterHealthcare.jpg";
import Cinema from "@/assets/eposter_displays/ePosterCinema.jpg";
import GRAND from "@/assets/eposter_displays/grand_1.jpg";
import Earth from "@/assets/eposter_displays/Earth.png";
import Low from "@/assets/eposter_displays/Low.png";
import Lobbies from "@/assets/eposter_displays/ePosterLobbies.jpg";
import Rental from "@/assets/eposter_displays/ePosterRental.jpg";
import Education from "@/assets/eposter_displays/Edutation_ePoster.jpg";
import sharp_logo from "@/assets/SHARP_Logo_red.png";
import ePosterSummerSale from "@/assets/eposter_displays/ePosterMallSquare.jpg";
import Retail from "@/assets/eposter_displays/Retail.jpg";
import ePosterElevatorDarker from "@/assets/eposter_displays/ePosterElevatorDarker.jpg";
import Zero from "@/assets/eposter_displays/Zero.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

import axios from "axios";
import techCoastSalesBanner from "../assets/partnerLogos/techCoastSales.png";
import techCoastSalesBanner2 from "../assets/partnerLogos/techCoastSales.jpg";
import controlSalesBanner from "../assets/partnerLogos/controlSales.png";
import controlSalesBanner2 from "../assets/partnerLogos/controlSales.jpg";
import thomLukeSalesBanner from "../assets/partnerLogos/thomLukeSales.png";
import thomLukeSalesBanner2 from "../assets/partnerLogos/thomLukeSales.jpg";
import quantumBanner from "../assets/partnerLogos/quantum2.png";
import quantumBanner2 from "../assets/partnerLogos/quantum.png";
import Head from "next/head";
import { Form, Row } from "react-bootstrap";
import Image from "next/image";
AOS.init();
// import { Button, Form, FormControl, Table } from "react-bootstrap";
const companyData = {
  techCoastSales: {
    bannerImg: techCoastSalesBanner,
    bannerImg2: techCoastSalesBanner2,
    bannerTitle: "Tech Coast Sales – ePoster Product Overview",
    meta: {
      canonical: "https://sharpsecd.com/#/eposters-displays",
      noindex: true,
      follow: true,
      contactFormClass: "tech-coast-sales-form",
      contactFormEmails: [
        "ashley@tc-sales.com",
        "beth.carrol@sharpusa.com",
        "karamy@xposureunlimited.com",
        "yeep@sharpusa.com",
      ],
      url: "https://sharpsecd.com/#/eposters-displays-tech-coast",
    },
  },

  thomLukeSales: {
    bannerImg: thomLukeSalesBanner,
    bannerImg2: thomLukeSalesBanner2,
    bannerTitle: "Thom Luke Sales – ePoster Product Overview",
    meta: {
      canonical: "https://sharpsecd.com/#/eposters-displays",
      noindex: true,
      follow: true,
      contactFormClass: "thom-luke-sales-form",
      contactFormEmails: [
        "rick@thomlukesales.com",
        "CarrollB@sharpsec.com",
        "karamy@xposureunlimited.com",
      ],
      url: "https://sharpsecd.com/#/eposters-displays-thom-luke",
    },
  },

  quantum: {
    bannerImg: quantumBanner,
    bannerImg2: quantumBanner2,
    bannerTitle: "Quantum – ePoster Product Overview",
    meta: {
      canonical: "https://sharpsecd.com/#/eposters-displays",
      noindex: true,
      follow: true,
      contactFormClass: "quantum-form",
      contactFormEmails: [
        "lori@quantumsales.ca",
        "CarrollB@sharpsec.com",
        "karamy@xposureunlimited.com",
      ],
      url: "https://sharpsecd.com/#/eposters-displays-quantum",
    },
  },

  controlSales: {
    bannerImg: controlSalesBanner,
    bannerImg2: controlSalesBanner2,
    bannerTitle: "Control Sales – ePoster Product Overview",
    meta: {
      canonical: "https://sharpsecd.com/#/eposters-displays",
      noindex: true,
      follow: true,
      contactFormClass: "control-sales-form",
      contactFormEmails: [
        "lisay@controlsales.com",
        "CarrollB@sharpsec.com",
        "karamy@xposureunlimited.com",
      ],
      url: "https://sharpsecd.com/#/eposters-displays-control-sales",
    },
  },
};

export default function SpecialLandingPage({ companyName }) {
  const [formData, setFormData] = useState({
    name: "",
    mobileCode: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [showLoader, setShowLoader] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const myRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const callFunct = (e, link) => {
    e.preventDefault();
    window.location.href = `#${link}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    setShowSuccess(false);
    setShowError(false);

    const data = {
      name: formData.name,
      mobile: `${formData.mobileCode}-${formData.mobile}`,
      email: formData.email,
      message: formData.message,
      subject: [companyData[companyName].meta.contactFormClass],
    };

    try {
      await axios.post("/api/form", data);
      setShowLoader(false);
      setShowSuccess(true);
      setSubmitted(true);
      setFormData({
        name: "",
        mobileCode: "",
        mobile: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setShowLoader(false);
      setShowError(true);
      setSubmitted(false);
    }
  };

  const selectedCompany = companyData[companyName];

  return (
    <div>
      <Head>
        <title>Sharp ePosters – Paperless Signage Modules | Sharp SECD</title>
        <meta
          name="description"
          content="Explore Sharp ePosters—zero-power, high-contrast E Ink displays that replace printed signage. Ideal for retail, healthcare, hospitality, and more."
        />

        <link
          rel="canonical"
          href="https://sharpsecd.com/#/eposters-displays"
        ></link>

        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="row" style={{ width: "100%", margin: 0 }}>
        <div
          aria-label="Concept image of Sharp ePoster used for museum exhibit signage"
          className="poster-section"
          tabIndex={0}
          style={{ position: "relative" }}
        >
          <div
            className="text-center-mb"
            style={{ marginBottom: 40, marginTop: 20 }}
          >
            <h3 style={{ fontSize: 60 }}>
              <strong>SAY GOODBYE</strong>
            </h3>
            <h3 style={{ fontSize: 60 }}>
              <strong>TO PRINTED SIGNAGE.</strong>
            </h3>
          </div>
          <h2
            className="text-center-mb"
            style={{ color: "white", maxWidth: 600 }}
          >
            <strong>
              Meet our no-hassle, paper replacement display module for signage
              applications. Uses zero-power in static image mode.
            </strong>
          </h2>
          <p
            style={{
              fontWeight: 300,
              marginTop: 20,
              fontSize: "1rem",
              textAlign: "center",
              position: "absolute",
              right: 50,
              bottom: 10,
              color: "white",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Screen images shown are simulated unless otherwise noted. Actual
            display will differ.{" "}
          </p>
        </div>
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
          }}
        >
          <div
            className="col-lg-6"
            style={{
              padding: 80,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={selectedCompany.bannerImg2}
              alt={selectedCompany.bannerTitle}
              style={{
                width: "100%",
                maxWidth: 650,
                height: "auto",
                marginBottom: 24,
                boxSizing: "border-box",
                objectFit: "contain",
              }}
            />
            <h2 style={{ color: "black", paddingBottom: 30 }}>
              <strong>INTRODUCING ePOSTER</strong>
            </h2>
            <span style={{ fontSize: 35 }}>
              Printing is expensive, inflexible, and time-consuming. Welcome to
              the future of low power paper replacement signage. Sharp and E Ink
              have come together to bring you one of the industry's leading
              electronic poster display modules.
            </span>
            <br />
            <Button
              size="lg"
              onClick={() => myRef.current.scrollIntoView()}
              style={{
                backgroundColor: "rgb(237, 12, 12)",
                borderColor: "rgb(237, 12, 12)",
                color: "white",
                marginTop: 40,
                borderRadius: 0,
                fontSize: 20,
                width: "100%",
                maxWidth: 320,
              }}
            >
              Contact Us
            </Button>
          </div>

          <div className="col-lg-6 hide-on-mobile" style={{ paddingRight: 0 }}>
            <Image
              src={ePosterSummerSale}
              style={{ width: "100%" }}
              role="presentation"
              alt="Stock image graphic with signage display showing how ePoster will look in a mall or retail environment "
            />
          </div>
        </div>
        <div
          aria-label="Visual mock-up showing potential elevator signage using Sharp ePoster"
          className="row hassle-block"
          tabIndex={0}
          style={{
            background: "#fff",
            width: "100%",
            textAlign: "left",
            backgroundPosition: "top",
            backgroundImage: `url(${ePosterElevatorDarker.src})`,
            marginLeft: 0,
            backgroundSize: "cover",
          }}
        >
          <div
            className="col-lg-6"
            style={{
              padding: 30,
              margin: 80,
              backgroundColor: "#00000024",
              color: "white",
            }}
          >
            <h2 style={{ paddingBottom: 30, fontSize: "3rem" }}>
              <strong>CREATE FLEXIBLE, EFFICIENT ePOSTER SOLUTIONS</strong>
            </h2>
            <span style={{ fontSize: 35 }}>
              The Sharp ePoster enables you to build signage products that:
            </span>
            <br />
            <ul
              style={{
                fontSize: 31,
                marginLeft: 0,
                paddingLeft: 20,
                marginTop: 30,
              }}
            >
              <li>Eliminate hassles of printing</li>
              <li>Allow simple updates from a laptop</li>
              <li>Save time</li>
              <li>Save labor</li>
              <li>Save money</li>
            </ul>
          </div>
        </div>
        <div
          className="row application-section"
          tabIndex={0}
          style={{
            padding: 0,
            background: "#2d2f40",
            width: "100%",
            textAlign: "left",
            backgroundPosition: "top",
            padding: "80px 250px",
            marginLeft: 0,
          }}
        >
          <h2
            style={{
              paddingBottom: 30,
              fontSize: "3rem",
              width: "100%",
              color: "white",
            }}
          >
            <strong>APPLICATIONS INCLUDE</strong>
          </h2>
          <div className="col-lg-4 col-md-6" style={{ padding: "20px 20px" }}>
            <Image
              src={Restaurant}
              style={{ width: "100%" }}
              role="presentation"
              alt="Rendering of Sharp ePoster displaying a restaurant menu"
            />
            <h2
              style={{
                paddingTop: 10,
                fontSize: "2rem",
                width: "100%",
                color: "white",
                textAlign: "center",
              }}
            >
              <strong>Restaurants & Cinema</strong>
            </h2>
          </div>
          <div className="col-lg-4 col-md-6" style={{ padding: "20px 20px" }}>
            <Image
              src={Education}
              style={{ width: "100%" }}
              role="presentation"
              alt="Example layout showing Sharp ePoster concept in a classroom environment"
            />
            <h2
              style={{
                paddingTop: 10,
                fontSize: "2rem",
                width: "100%",
                color: "white",
                textAlign: "center",
              }}
            >
              <strong>Education</strong>
            </h2>
          </div>
          <div className="col-lg-4 col-md-6" style={{ padding: "20px 20px" }}>
            <Image
              src={Healthcare}
              style={{ width: "100%" }}
              role="presentation"
              alt="Concept rendering of ePoster for medical office check-in or info display"
            />
            <h2
              style={{
                paddingTop: 10,
                fontSize: "2rem",
                width: "100%",
                color: "white",
                textAlign: "center",
              }}
            >
              <strong>Healthcare</strong>
            </h2>
          </div>
          <div
            className="hide-on-mobile"
            style={{ width: "100%", height: 70 }}
          ></div>
          <div className="col-lg-4 col-md-6" style={{ padding: "20px 20px" }}>
            <Image
              src={Rental}
              style={{ width: "100%" }}
              role="presentation"
              alt="Visualization of retail promotion signage using Sharp ePoster"
            />
            <h2
              style={{
                paddingTop: 10,
                fontSize: "2rem",
                width: "100%",
                color: "white",
                textAlign: "center",
              }}
            >
              <strong>Retail</strong>
            </h2>
          </div>
          <div className="col-lg-4 col-md-6" style={{ padding: "20px 20px" }}>
            <Image
              src={Lobbies}
              style={{ width: "100%" }}
              role="presentation"
              alt="Mock-up depicting ePoster module as advertising in a lobby."
            />
            <h2
              style={{
                paddingTop: 10,
                fontSize: "2rem",
                width: "100%",
                color: "white",
                textAlign: "center",
              }}
            >
              <strong>Lobbies</strong>
            </h2>
          </div>
          <div className="col-lg-4 col-md-6" style={{ padding: "20px 20px" }}>
            <Image
              src={Hotel}
              style={{ width: "100%" }}
              role="presentation"
              alt="Illustration of Sharp ePoster used for hotel room or hallway signage"
            />
            <h2
              style={{
                paddingTop: 10,
                fontSize: "2rem",
                width: "100%",
                color: "white",
                textAlign: "center",
              }}
            >
              <strong>Hotel & Hospitality</strong>
            </h2>
          </div>
        </div>
        <div
          className="row key-section"
          tabIndex={0}
          style={{
            background: "#FFF",
            width: "100%",
            textAlign: "left",
            backgroundPosition: "top",
            marginLeft: 0,
          }}
        >
          <div
            className="col-lg-6"
            style={{
              padding: "20px 50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              src={GRAND}
              style={{ maxHeight: 700 }}
              role="presentation"
              alt="Photograph of actual Sharp ePoster holding a static image in zero-power mode"
            />
            <p
              style={{
                fontWeight: 300,
                marginTop: 20,
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              Actual photograph of display in zero-power operation{" "}
            </p>
          </div>
          <div
            className="col-lg-6"
            style={{ padding: "20px 20px", paddingRight: 50 }}
          >
            <h2 style={{ color: "black" }}>
              <strong>KEY FEATURES</strong>
            </h2>
            <ul style={{ color: "black", marginBottom: 0 }}>
              <li>28.5-inch (diagonal)</li>
              <li>2160 x 3060 resolution</li>
              <li>Zero power with static image hold</li>
              <li>High contrast plus 30% reflectivity</li>
              <li>60k color gamut with E Ink's Spectra6</li>
              <li>Thin, lightweight, multi-panel capability</li>
              <li>Enables cloud-based management</li>
              <li>Enables battery, PoE, or PoWiFi installation</li>
            </ul>
            <br />
            <Button
              size="lg"
              onClick={() => myRef.current.scrollIntoView()}
              style={{
                backgroundColor: "rgb(237, 12, 12)",
                borderColor: "rgb(237, 12, 12)",
                color: "white",
                marginTop: 10,
                borderRadius: 0,
                fontSize: 20,
                width: "100%",
                maxWidth: 300,
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div
          className="green-section"
          tabIndex={0}
          style={{
            width: "100%",
            textAlign: "center",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#d9d9d9",
          }}
        >
          <h2>
            <strong>LOW POWER REQUIREMENT = LOW COST OF OWNERSHIP</strong>
          </h2>
          <div
            className="row"
            tabIndex={0}
            style={{
              width: "100%",
              textAlign: "left",
              marginTop: 30,
              paddingBottom: 20,
            }}
          >
            <div className="col-lg-4" style={{ textAlign: "center" }}>
              <Image
                src={Zero}
                style={{ width: 200 }}
                role="presentation"
                alt="Zero power"
              />
              <h3 style={{ fontWeight: "bold" }}>ZERO POWER</h3>
              <p style={{ fontWeight: 500 }}>
                ePoster technology enables zero-power operation while
                maintaining a static image hold
              </p>
            </div>
            <div className="col-lg-4" style={{ textAlign: "center" }}>
              <Image
                src={Earth}
                style={{ width: 200 }}
                role="presentation"
                alt="Earth friendly"
              />
              <h3 style={{ fontWeight: "bold" }}>EARTH FRIENDLY</h3>
              <p style={{ fontWeight: 500 }}>
                An electronic solution eliminates trips to the printer and
                reduces paper waste.{" "}
              </p>
            </div>
            <div className="col-lg-4" style={{ textAlign: "center" }}>
              <Image
                src={Low}
                style={{ width: 200 }}
                role="presentation"
                alt="Low cost operation"
              />
              <h3 style={{ fontWeight: "bold" }}>LOW-COST OPERATION</h3>
              <p style={{ fontWeight: 500 }}>
                Low power usage plus eliminating printing expenses equals
                low-cost operation.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className="row key-section retail-section "
          tabIndex={0}
          style={{
            background: "#fff",
            width: "100%",
            textAlign: "left",
            backgroundPosition: "top",
            marginLeft: 0,
            padding: 0,
          }}
        >
          <div className="col-lg-6" style={{ padding: 80 }}>
            <h2 style={{ color: "black", paddingBottom: 30 }}>
              <strong>SIMPLE. SMART. SIGNAGE.</strong>
            </h2>
            <span style={{ fontSize: 35 }}>
              Crisp, colorful visuals. Stylish, slim module. Simple operation.
              <br />
              <br />
              Enables market-leading paperless public information displays.
              <br />
              <br />
              Replace paper signage with Sharp's ePoster display module today.
            </span>
          </div>
          <div className="col-lg-6" style={{ paddingRight: 0 }}>
            <Image
              src={Retail}
              style={{ width: "100%" }}
              role="presentation"
              alt="Concept mock-up showing ePoster display in a shopping mall setting"
            />
          </div>
        </div>
        <div
          ref={myRef}
          style={{
            backgroundColor: "#a6a6a6",
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image
                  src={selectedCompany.bannerImg}
                  alt={selectedCompany.bannerTitle}
                  style={{
                    width: "100%",
                    maxWidth: 600,
                    height: "auto",
                    marginBottom: 24,
                    boxSizing: "border-box",
                    objectFit: "contain",
                  }}
                />
              </div>
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
                    LET'S TALK ABOUT ePOSTER FOR YOUR NEXT
                    <br />
                    SIGNAGE PRODUCT DESIGN
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
            <div style={{ width: "70%" }}>
              <Form
                noValidate
                className={`ePosterDisplays ${selectedCompany.meta.contactFormClass}`}
                onSubmit={onSubmit}
              >
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
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
                      type="text"
                      placeholder="First Name"
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
                      type="text"
                      placeholder="+1"
                      required
                      value={formData.mobileCode}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Country code cannot be empty
                    </Form.Control.Feedback>
                  </Col>
                  <Col xs={10}>
                    <Form.Control
                      name="mobile"
                      type="text"
                      placeholder="Contact number"
                      required
                      maxLength={10}
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Phone number cannot be empty
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      name="message"
                      as="textarea"
                      rows={3}
                      placeholder="Comments (optional)"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-100 mb-3"
                  disabled={submitted}
                >
                  {showLoader ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Form>

              <Toast
                show={showSuccess}
                onClose={() => setShowSuccess(false)}
                className="bg-success text-white mb-3"
                autohide
                delay={4000}
              >
                <Toast.Header>
                  <strong className="me-auto">Success</strong>
                </Toast.Header>
                <Toast.Body>
                  Thank you! Your query has been successfully submitted.
                </Toast.Body>
              </Toast>

              <Toast
                show={showError}
                onClose={() => setShowError(false)}
                className="bg-danger text-white mb-3"
                autohide
                delay={4000}
              >
                <Toast.Header>
                  <strong className="me-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>
                  We were unable to receive your query. Please try again.
                </Toast.Body>
              </Toast>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
