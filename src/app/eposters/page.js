"use client";

import React, { Component, useEffect, useRef, useState } from "react";
import redback from "@/assets/eposters/SHARP_red.jpg";
import cycle from "@/assets/eposters/desktop_overlay.jpg";
import mountain_mobile from "@/assets/eposters/mountain_mobile.jpg";
import Escalator from "@/assets/eposters/Escalator.jpg";
import Travel from "@/assets/eposters/Travel.jpg";
import Earth from "@/assets/eposters/Earth.jpg";
import Low from "@/assets/eposters/Low.jpg";
import eposter from "@/assets/eposters/eposter.png";
import ePosterMobile from "@/assets/eposters/ePosterMobile.jpg";
import Zero from "@/assets/eposters/Zero.jpg";
import Airport from "@/assets/eposters/Airport.jpg";
import SHARPLogo from "@/assets/SHARP_logo_white.png";
import arrow from "@/assets/arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

import axios from "axios";
import Head from "next/head";
import { Form, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
AOS.init();
// import { Button, Form, FormControl, Table } from "react-bootstrap";

const Eposters = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileCode: "",
    mobile: "",
    email: "",
    message: "",
    demo: false,
  });

  const [showLoader, setShowLoader] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const myRef = useRef(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
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

    try {
      const data = {
        name: formData.name,
        mobile: formData.mobileCode + "-" + formData.mobile,
        email: formData.email,
        message: formData.message,
        subject: ["ePoster"],
      };

      await axios.post("/api/form", data);

      setShowLoader(false);
      setShowSuccess(true);
      setSubmit(true);
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
      setSubmit(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <div>
      <Head>
        <title>Sharp SECD Eposters - Sharp</title>
        <meta name="description" content="Visit the Sharp SECD Eposters page" />
      </Head>
      <div className="row" style={{ width: "100%", margin: 0 }}>
        <div
          id="main-content"
          role="main"
          tabIndex={0}
          style={{
            padding: 0,
            backgroundImage: `url(${redback.src})`,
            width: "100%",
            textAlign: "center",
            backgroundPosition: "center",
          }}
        >
          <Image
            className="mob-width-300"
            src={SHARPLogo}
            role="presentation"
            alt="Control Sales Logo"
          />
        </div>
        <Image
          className="hide-on-mobile"
          src={cycle}
          style={{ width: "100%" }}
          role="presentation"
          alt="Control Sales Logo"
        />

        <div
          className="signage-section"
          tabIndex={0}
          style={{
            backgroundImage: `url(${redback.src})`,
            width: "100%",
            textAlign: "center",
            backgroundPosition: "center",
          }}
        >
          <Image
            className="show-on-mobile"
            src={ePosterMobile}
            style={{ width: "100%" }}
            role="presentation"
            alt="Control Sales Logo"
          />
          <h1 style={{ color: "white", fontWeight: "bold" }}>
            Say Goodbye to Paper <br />
            Signage.{" "}
          </h1>
          <Image
            role="presentation"
            alt="arrow"
            src={arrow}
            style={{ maxWidth: "50px", paddingTop: 30 }}
          />
        </div>
        <div
          className="meet-section"
          tabIndex={0}
          style={{
            width: "100%",
            textAlign: "center",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>
            <strong>
              Meet your new, zero-power paperless
              <br />
              solution for A2 posters.
            </strong>
          </h2>
          <p style={{ maxWidth: 1120, marginTop: 20 }}>
            Paper A2 posters are now a thing of the past. The future of lowpower
            digital signage displays is here. Sharp and E-Ink bring you the
            world's first electronic A2 poster solution.
          </p>
        </div>
        <div
          className="biker-section"
          tabIndex={0}
          style={{
            width: "100%",
            textAlign: "left",
            backgroundPosition: "top",
          }}
        >
          <Image
            className="show-on-mobile"
            src={mountain_mobile}
            style={{ width: "100%" }}
            role="presentation"
            alt="Control Sales Logo"
          />
          <h2>
            <strong>Applications Include:</strong>
          </h2>
          <ul>
            <li>Transportation</li>
            <li>Cinema</li>
            <li>Retail Stores</li>
            <li>Public Buildings</li>
            <li>Wayfinding</li>
            <li>Lobbies</li>
            <li>Display Advertising</li>
            <li>And more </li>
          </ul>
        </div>
        <div
          className="row"
          tabIndex={0}
          style={{
            padding: 0,
            background: "#c6c7d4",
            width: "100%",
            textAlign: "left",
            backgroundPosition: "top",
            padding: "80px 50px",
            marginLeft: 0,
          }}
        >
          <div className="col-lg-4" style={{ padding: "20px 20px" }}>
            <Image
              src={Escalator}
              style={{ height: "100%", width: "100%" }}
              role="presentation"
              alt="Control Sales Logo"
            />
          </div>
          <div className="col-lg-4" style={{ padding: "20px 20px" }}>
            <Image
              src={Travel}
              style={{ height: "100%", width: "100%" }}
              role="presentation"
              alt="Control Sales Logo"
            />
          </div>
          <div className="col-lg-4" style={{ padding: "20px 20px" }}>
            <Image
              src={Airport}
              style={{ height: "100%", width: "100%" }}
              role="presentation"
              alt="Control Sales Logo"
            />
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
          }}
        >
          <h2>
            <strong>
              The first truly green A2 Poster solution on the
              <br />
              market
            </strong>
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
                alt="Control Sales Logo"
              />
              <h3 style={{ fontWeight: "bold" }}>ZERO POWER</h3>
              <p style={{ fontWeight: 500 }}>
                Spectra6 technology enables zero-power operation while
                maintaining an image.{" "}
              </p>
            </div>
            <div className="col-lg-4" style={{ textAlign: "center" }}>
              <Image
                src={Earth}
                style={{ width: 200 }}
                role="presentation"
                alt="Control Sales Logo"
              />
              <h3 style={{ fontWeight: "bold" }}>EARTH FRIENDLY</h3>
              <p style={{ fontWeight: 500 }}>
                The electronic solution eliminates trips to the printer and
                reduces paper waste.{" "}
              </p>
            </div>
            <div className="col-lg-4" style={{ textAlign: "center" }}>
              <Image
                src={Low}
                style={{ width: 200 }}
                role="presentation"
                alt="Control Sales Logo"
              />
              <h3 style={{ fontWeight: "bold" }}>LOW-COST OPERATION</h3>
              <p style={{ fontWeight: 500 }}>
                Low power and eliminating printing expenses equals low-cost
                operation.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className="row key-section"
          tabIndex={0}
          style={{
            background: "#c6c7d4",
            width: "100%",
            textAlign: "left",
            backgroundPosition: "top",
            marginLeft: 0,
          }}
        >
          <div
            className="col-lg-6"
            style={{ padding: "20px 20px", paddingRight: 50 }}
          >
            <h2 style={{ color: "black" }}>
              <strong>Key Features</strong>
            </h2>
            <ul style={{ color: "black" }}>
              <li>
                Sharp's IGZO technology enables a narrow panel frame and
                improved design for multi-panel display.{" "}
              </li>
              <li>
                E Ink's latest e-paper module, "Spectra6," offers an expanded
                color gamut for vivid display quality.{" "}
              </li>
              <li>
                A thin and lightweight product enables easy
                hanging/installation.{" "}
              </li>
            </ul>
          </div>
          <div className="col-lg-6" style={{ padding: "20px 20px" }}>
            <Image
              src={eposter}
              style={{ width: "100%" }}
              role="presentation"
              alt="Control Sales Logo"
            />
            <p style={{ fontWeight: 300, marginTop: 20 }}>
              *Screen images shown are simulated pictures. Actual display will
              differ.{" "}
            </p>
          </div>
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
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 20,
              margin: 0,
            }}
          >
            <div style={{ width: "70%" }}>
              <div className="padding-top-50 d-none d-md-block"></div>
              <div className="padding-top-50"></div>
              <div className="hide-on-mobile">
                <h1
                  className="mb-2-5"
                  style={{
                    fontSize: "3rem",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <strong>
                    LET'S TALK ABOUT ZERO-POWER DISPLAYS FOR YOUR NEXT SIGNAGE
                    PRODUCT DESIGN
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
              <div className="show-on-mobile">
                <h1
                  className="mb-2-5"
                  style={{
                    fontSize: "3rem",
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  <strong>Let's Talk.</strong>
                </h1>
                <p
                  style={{
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  Please drop us a line. A member of the Sharp team will get in
                  touch with you ASAP to talk about the ePoster as a perfect fit
                  for your next design.
                </p>
              </div>
            </div>
            <div style={{ width: "70%" }}>
              <Form noValidate className="ePoster" onSubmit={onSubmit}>
                {/* Email */}
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="email">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        aria-label="Email"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email id.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Name */}
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="name">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="First Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        aria-label="Name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Name field cannot be empty
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Mobile */}
                <Row className="mb-3">
                  <Col xs={2}>
                    <Form.Group controlId="mobileCode">
                      <Form.Control
                        type="text"
                        name="mobileCode"
                        placeholder="+1"
                        required
                        value={formData.mobileCode}
                        onChange={handleChange}
                        aria-label="Country Code"
                      />
                      <Form.Control.Feedback type="invalid">
                        Country code field cannot be empty
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col xs={10}>
                    <Form.Group controlId="mobile">
                      <Form.Control
                        type="text"
                        name="mobile"
                        placeholder="Contact number"
                        maxLength={10}
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        aria-label="Contact Number"
                      />
                      <Form.Control.Feedback type="invalid">
                        Phone number field cannot be empty
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Message */}
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="message">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        placeholder="Comments(optional)"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        aria-label="Comment"
                      />
                      <Form.Control.Feedback type="invalid">
                        Message field cannot be empty
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Submit Button */}
                <Button
                  className="blueButton"
                  aria-label="Submit Form Button"
                  style={{ marginTop: 10, width: "100%" }}
                  variant="primary"
                  type="submit"
                  disabled={submit}
                >
                  Submit
                </Button>

                {/* Loader */}
                <ClipLoader
                  type="TailSpin"
                  color="#e26565"
                  height={50}
                  width={50}
                  timeout={0}
                  visible={showLoader}
                  style={{ margin: "10px" }}
                />

                {/* Success Toast */}
                <Toast
                  onClose={() => {
                    setShowSuccess(false);
                    setSubmit(false);
                  }}
                  show={showSuccess}
                  className="toastSuccess"
                >
                  <Toast.Header>
                    <strong className="me-auto">Success</strong>
                  </Toast.Header>
                  <Toast.Body>
                    Thank You! <br /> Your query has been successfully
                    submitted.
                  </Toast.Body>
                </Toast>

                {/* Error Toast */}
                <Toast
                  onClose={() => {
                    setShowError(false);
                    setSubmit(false);
                  }}
                  show={showError}
                  className="toastError"
                >
                  <Toast.Header>
                    <strong className="me-auto">Error</strong>
                  </Toast.Header>
                  <Toast.Body>
                    We were unable to receive your query. Please try again.
                  </Toast.Body>
                </Toast>

                <div style={{ paddingBottom: 50 }}></div>
                <div style={{ paddingBottom: 50 }}></div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Eposters;
