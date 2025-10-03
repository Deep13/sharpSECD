"use client";

import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Button, Form, Row, Col, Toast } from "react-bootstrap";
import axios from "axios";

// Assets
import Screen3 from "@/assets/smepdark.jpeg";
import logo from "@/assets/sharp_logo.png";
import image1 from "@/assets/Sharp-Memory-In-Pixel_700x1082.jpg";
import arrow from "@/assets/arrow.png";
import bg1 from "@/assets/bg1.jpeg";
import bg2 from "@/assets/bg2.jpeg";
import image2 from "@/assets/Bike_966x644.jpg";
import image3 from "@/assets/MIR_3557_Trans_966x644.png";
import icon from "@/assets/Icon 1.jpeg";
import icon2 from "@/assets/Icon 2.jpeg";
import icon3 from "@/assets/Icon 3.jpeg";
import icon4 from "@/assets/Icon 4.jpeg";
import icon5 from "@/assets/Icon 5.jpeg";
import icon6 from "@/assets/Icon 6.jpeg";
import { ClipLoader } from "react-spinners";

export default function MemoryInPixelLanding() {
  const [form, setForm] = useState({
    name: "",
    mobileCode: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [showLoader, setShowLoader] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const contactRef = useRef(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    setSubmitDisabled(true);

    const data = {
      name: form.name,
      mobile: `${form.mobileCode}-${form.mobile}`,
      email: form.email,
      message: form.message,
      subject: ["Memory-in-pixel Landing"],
    };

    try {
      await axios.post("/api/form", data);
      setShowLoader(false);
      setShowSuccess(true);
      setForm({ name: "", mobileCode: "", mobile: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setShowLoader(false);
      setShowError(true);
      setSubmitDisabled(false);
    }
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = "#" + link;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Head>
        <title>Memory-in-Pixel - Sharp</title>
        <meta name="description" content="Sharp-Memory-in-Pixel" />
      </Head>

      {/* Hero Section */}
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
            src={logo}
            alt="SHARP Logo"
            width={300}
            style={{ paddingTop: "50px" }}
          />
          <div style={{ paddingTop: 150, textAlign: "center" }}>
            <h1 style={{ color: "white", fontSize: "5rem" }}>
              Memory in Pixel LCDs
            </h1>
            <p style={{ color: "white", fontSize: "2.5rem" }}>
              <strong>
                High Ambient-Light Performance. Long Battery Life.
              </strong>
            </p>
          </div>
          <Image
            src={arrow}
            alt="arrow"
            width={32}
            style={{ paddingTop: 80 }}
          />
        </div>
      </div>

      {/* Intro Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            <Image src={image1} alt="Sharp MIP" style={{ width: "100%" }} />
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
          <div className="col-md-6">
            <div style={{ height: "100%", padding: 10 }}>
              <h1 style={{ fontSize: "3rem" }}>
                <strong>INTRODUCING SHARP MEMORY IN PIXEL LCDs</strong>
              </h1>
              <div
                style={{
                  height: 4,
                  width: 80,
                  backgroundColor: "#ed0c0c",
                  margin: "12px 0",
                }}
              />
              <p>
                Get best-of-class performance with ultra-low power consumption
                and high readability in almost any ambient lighting
                environment... plus eye-catching 64-color or high-contrast
                monochrome for designs ranging from wearables to medical devices
                to smart meters and many, many more.
              </p>
              <div style={{ display: "flex", width: "100%" }}>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  variant="outline-danger"
                  style={{ marginRight: 20, width: "100%" }}
                >
                  Contact Sharp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Section 1 */}
      <div
        style={{
          backgroundImage: `url(${bg1.src})`,
          width: "100%",
          justifyContent: "center",
          display: "flex",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div style={{ maxWidth: "1140px", padding: "100px 20px" }}>
          <h1 style={{ fontSize: "3rem" }}>
            <strong>
              THE PERFECT SOLUTION FOR SMALL-SCREEN APPLICATIONS THAT REQUIRE A
              BATTERY.
            </strong>
          </h1>
          <div
            style={{
              height: 4,
              width: 80,
              backgroundColor: "#ed0c0c",
              margin: "12px 0",
            }}
          />
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-md-6" style={{ padding: 30 }}>
              <Image
                src={image2}
                alt="THE PERFECT SOLUTION"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <p>
                Sharp's Memory-in-Pixel LCDs were designed for compact handheld,
                wearable, and other small-screen applications. Embedded, 1-bit
                memory in every pixel allows for an always-on display capable of
                delivering high-contrast, high-resolution content. Ultra-low
                power consumption means better heat management, too.{" "}
                <a
                  href="/"
                  onClick={(event) =>
                    callFunct(event, "/memory-in-pixel-lcds-technology")
                  }
                  style={{ color: "#e61d24" }}
                >
                  See more about Memory LCD technology here.
                </a>
              </p>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline-danger"
                style={{ marginTop: 20, width: "100%" }}
              >
                Contact Sharp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Section 2 */}
      <div
        style={{
          backgroundImage: `url(${bg2.src})`,
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            maxWidth: "1140px",
            display: "flex",
            alignItems: "center",
            padding: 20,
          }}
        >
          <div className="col-md-6">
            <h1 style={{ fontSize: "3rem" }}>
              <strong>PERFORMANCE IN HIGH AMBIENT LIGHT</strong>
            </h1>
            <div
              style={{
                height: 4,
                width: 80,
                backgroundColor: "#ed0c0c",
                margin: "12px 0",
              }}
            />
            <p>
              Reflective mode leverages ambient light to eliminate the need for
              a backlight. Choose from multiple sizes in 64-color, plus
              monochrome. Our lightweight design includes the display driver
              circuits integrated into the panel -{" "}
              <strong>
                <i>no silicon driver ICs required</i>
              </strong>{" "}
              - yielding an exceptionally thin display module.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline-danger"
              style={{ marginTop: 20, width: "100%" }}
            >
              Contact Sharp
            </Button>
          </div>
          <div className="col-md-6" style={{ padding: 30 }}>
            <Image
              src={image3}
              alt="display without a frontlight or backlight"
              style={{ width: "100%" }}
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

      {/* Features */}
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: 20 }}>
        <h1 style={{ fontSize: "3rem", textAlign: "center" }}>
          <strong>Memory in Pixel LCD Features</strong>
        </h1>
        <div className="row" style={{ paddingTop: 30 }}>
          {[
            {
              icon,
              title: "PRODUCT LINE-UP",
              desc: "Offered in diagonal sizes ranging from 1.08 to 4.40 inches.",
            },
            {
              icon: icon2,
              title: "HIGH READABILITY",
              desc: "Viewable in any light, from edge-of-vision to bright sunlight.",
            },
            {
              icon: icon3,
              title: "64-COLOR DISPLAYS",
              desc: "Choose from 64-color or Monochrome.",
            },
            {
              icon: icon4,
              title: "OPERATING TEMPS",
              desc: "Wide operating temperatures for the most extreme environments.",
            },
            {
              icon: icon5,
              title: "WIDE VIEWING ANGLE",
              desc: "Wide, symmetrical viewing angles, typically 120° ×120°.",
            },
            {
              icon: icon6,
              title: "SIMPLE INTERFACE",
              desc: "Design made easy with a 3-wire SPI serial interface (SI, SCS, SCK).",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="col-md-4"
              style={{ padding: 20, textAlign: "center" }}
            >
              <Image src={item.icon} alt="icon" width={90} />
              <h3 style={{ padding: "1vw" }}>{item.title}</h3>
              <p style={{ padding: "1vw" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div
        ref={contactRef}
        style={{
          backgroundColor: "rgba(45,47,65,1)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1140px",
            display: "flex",
            padding: 20,
            flexWrap: "wrap",
          }}
        >
          <div className="col-md-6">
            <h1 style={{ fontSize: "3rem", color: "white" }}>Let’s Talk.</h1>
            <p style={{ color: "white", padding: "20px 0" }}>
              Please drop us a line. A member of the Sharp team will get in
              touch with you ASAP to talk about the Memory LCD as a perfect fit
              for your next design.
            </p>
          </div>
          <div className="col-md-6">
            <Form noValidate onSubmit={handleSubmit}>
              <Row style={{ paddingBottom: 10 }}>
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Row style={{ paddingBottom: 10 }}>
                <Col>
                  <Form.Control
                    placeholder="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Row style={{ paddingBottom: 10 }}>
                <Col>
                  <Form.Control
                    placeholder="+1"
                    name="mobileCode"
                    value={form.mobileCode}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col xs={10}>
                  <Form.Control
                    placeholder="Contact number"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    maxLength={10}
                    required
                  />
                </Col>
              </Row>
              <Row style={{ paddingBottom: 10 }}>
                <Col>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Comments(optional)"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Button
                type="submit"
                disabled={submitDisabled}
                style={{ width: "100%", marginTop: 10 }}
              >
                Submit
              </Button>
              <ClipLoader
                type="TailSpin"
                color="#e26565"
                height={50}
                width={50}
                visible={showLoader}
                style={{ margin: "10px" }}
              />
              <Toast
                show={showSuccess}
                onClose={() => setShowSuccess(false)}
                className="toastSuccess"
              >
                <Toast.Header>
                  <strong className="me-auto">Success</strong>
                </Toast.Header>
                <Toast.Body>
                  Thank You! Your query has been successfully submitted.
                </Toast.Body>
              </Toast>
              <Toast
                show={showError}
                onClose={() => setShowError(false)}
                className="toastError"
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
    </>
  );
}
