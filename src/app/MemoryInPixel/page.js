"use client";

import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { Button, Form, Row, Col, Toast } from "react-bootstrap";
import Footer from "@/components/Footer";

// Import your assets
import Screen3 from "@/assets/smepdark.jpeg";
import logo from "@/assets/sharp_logo.png";
import image1 from "@/assets/Sharp-Memory-In-Pixel_700x1082.jpg";
import arrow from "@/assets/arrow.png";

export default function MemoryInPixel() {
  const [form, setForm] = useState({
    name: "",
    mobileCode: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [showLoader, setShowLoader] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Head>
        <title>Ultra-Low Power Memory-in-Pixel LCDs | Sharp SECD</title>
        <meta
          name="description"
          content="Discover Sharp's ultra-low power Memory-in-Pixel LCDs with high ambient-light performance and 64-color options—ideal for wearables, meters & more."
        />
      </Head>

      {/* Hero Section */}
      <div
        aria-label="Person checking GPS smartwatch outdoors with mountains in background"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${Screen3.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "90vh",
          padding: 20,
        }}
      >
        <Image src={logo} alt="SHARP Logo" width={300} />
        <div style={{ paddingTop: 150, textAlign: "center" }}>
          <h1 style={{ color: "white", fontSize: "5rem" }}>
            Memory in Pixel LCDs
          </h1>
          <p style={{ color: "white", fontSize: "2.5rem" }}>
            <strong>High Ambient-Light Performance. Long Battery Life.</strong>
          </p>
        </div>
        <Image src={arrow} alt="arrow" width={32} style={{ paddingTop: 80 }} />
      </div>

      {/* Intro Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="row" style={{ maxWidth: 1140, padding: 20, margin: 0 }}>
          <div className="col-md-6" style={{ padding: 100 }}>
            <Image
              src={image1}
              alt="Sharp Memory-in-Pixel LCD demo"
              style={{ width: "100%" }}
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

          <div className="col-md-6">
            <h1 style={{ fontSize: "3rem" }}>
              <strong>INTRODUCING SHARP MEMORY IN PIXEL LCDs</strong>
            </h1>
            <div
              style={{
                height: 4,
                width: 80,
                backgroundColor: "#a91e2c",
                margin: "12px 0",
              }}
            />
            <p>
              Get best-of-class performance with ultra-low power consumption and
              high readability in almost any ambient lighting environment...
              plus eye-catching 64-color or high-contrast monochrome for designs
              ranging from wearables to medical devices to smart meters and
              many, many more.
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              <Button
                variant="outline-danger"
                size="lg"
                onClick={scrollToContact}
              >
                Talk to an Expert
              </Button>
              <Button
                variant="outline-danger"
                size="lg"
                href="#/memory-in-pixel-lcds-product"
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div
        ref={contactRef}
        style={{ backgroundColor: "rgba(45,47,65,1)", padding: 20 }}
      >
        <div
          className="row"
          style={{ maxWidth: 1140, margin: "0 auto", display: "flex", gap: 20 }}
        >
          <div className="col-md-6">
            <h1 style={{ fontSize: "3rem", color: "white" }}>Let’s Talk.</h1>
            <p style={{ color: "white" }}>
              Please drop us a line. A member of the Sharp team will get in
              touch with you ASAP to talk about the Memory LCD as a perfect fit
              for your next design.
            </p>
          </div>

          <div className="col-md-6">
            <Form onSubmit={handleSubmit}>
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
                    placeholder="Comments (optional)"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Button
                variant="primary"
                type="submit"
                disabled={submitDisabled}
                style={{ width: "100%", marginTop: 10 }}
              >
                Submit
              </Button>

              {showLoader && (
                <ClipLoader color="#e26565" size={50} style={{ margin: 10 }} />
              )}

              <Toast onClose={() => setShowSuccess(false)} show={showSuccess}>
                <Toast.Header>
                  <strong className="me-auto">Success</strong>
                </Toast.Header>
                <Toast.Body>
                  Thank You! Your query has been successfully submitted.
                </Toast.Body>
              </Toast>

              <Toast onClose={() => setShowError(false)} show={showError}>
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
    </>
  );
}
