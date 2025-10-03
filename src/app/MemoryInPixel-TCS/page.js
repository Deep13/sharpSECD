"use client";

import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { Button, Form, Row, Col, Toast } from "react-bootstrap";

import axios from "axios";

import Screen3 from "@/assets/smepdark.jpeg";
import logo from "@/assets/sharp_logo.png";
import image1 from "@/assets/Sharp-Memory-In-Pixel_700x1082.jpg";
import arrow from "@/assets/arrow.png";
import { ClipLoader } from "react-spinners";

const MPITCS = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileCode: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [show, setShow] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [showError, setShowError] = useState(false);

  const myRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setShowLoader(true);
    setSubmit(true);

    const data = {
      name: formData.name,
      mobile: `${formData.mobileCode}-${formData.mobile}`,
      email: formData.email,
      message: formData.message,
      subject: ["TCS"],
    };

    try {
      await axios.post("/api/form", data);
      setShowLoader(false);
      setShow(true);
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
      setSubmit(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Head>
        <title>Memory-in-Pixel-TCS - Sharp</title>
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
          <div style={{ paddingTop: 150 }} className="mb-ptop-60">
            <h1
              style={{ color: "white", fontSize: "5rem", textAlign: "center" }}
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
            src={arrow}
            alt="arrow"
            width={32}
            style={{ paddingTop: 80 }}
          />
        </div>
      </div>

      {/* Subhero */}
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
          <strong>Creating top product solutions with Tech Coast Sales</strong>
        </p>
      </div>

      {/* Content Sections */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Row
          style={{
            maxWidth: "1140px",
            display: "flex",
            paddingTop: 11,
            alignItems: "center",
          }}
        >
          <Col md={6} style={{ padding: 100 }}>
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
          </Col>
          <Col md={6} tabIndex={0}>
            <div style={{ height: "100%", padding: 10 }}>
              <div
                className="centerAlignDiv"
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <h1 style={{ fontSize: "3rem" }} className="mb-font-2">
                  <strong>INTRODUCING SHARP MEMORY IN PIXEL LCDs</strong>
                </h1>
                <div
                  style={{
                    height: 4,
                    width: "100%",
                    margin: "12px 0",
                    backgroundColor: "rgb(237,12,12)",
                  }}
                />
                <p>
                  Get best-of-class performance with ultra-low power consumption
                  and high readability in almost any ambient lighting
                  environment... plus eye-catching 64-color or high-contrast
                  monochrome for designs ranging from wearables to medical
                  devices to smart meters and many, many more.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
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
          </Col>
        </Row>

        {/* Contact Form */}
        <div
          ref={myRef}
          style={{
            backgroundColor: "rgba(45,47,65,1)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Row
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
            <Col md={6}>
              <h1
                style={{ fontSize: "3rem", textAlign: "left", color: "white" }}
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
            </Col>
            <Col md={6}>
              <Form noValidate className="TCS" onSubmit={onSubmit}>
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      name="name"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      name="mobileCode"
                      placeholder="+1"
                      required
                      value={formData.mobileCode}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col xs={10}>
                    <Form.Control
                      name="mobile"
                      placeholder="Contact number"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      maxLength={10}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      name="message"
                      placeholder="Comments(optional)"
                      as="textarea"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Button
                  className="redButton"
                  style={{ marginTop: 10, width: "100%" }}
                  variant="primary"
                  type="submit"
                  disabled={submit}
                >
                  Submit
                </Button>

                <div className="d-flex justify-content-center my-3">
                  <ClipLoader
                    type="TailSpin"
                    color="#e26565"
                    height={50}
                    width={50}
                    visible={showLoader}
                  />
                </div>

                <Toast
                  onClose={() => setShow(false) & setSubmit(false)}
                  show={show}
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

                <Toast
                  onClose={() => setShowError(false) & setSubmit(false)}
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
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MPITCS;
