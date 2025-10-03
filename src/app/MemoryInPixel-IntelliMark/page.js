"use client";
import Head from "next/head";
import Image from "next/image"; // <-- Next.js Image
import { Button, Form, Col, Row, Toast } from "react-bootstrap";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { useRef, useState } from "react";

import Screen3 from "@/assets/smepdark.jpeg";
import logo from "@/assets/sharp_logo.png";
import arrow from "@/assets/arrow.png";

const MIPITM = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setShowLoader(true);
    setSubmit(true);

    const data = {
      ...formData,
      mobile: `${formData.mobileCode}-${formData.mobile}`,
      subject: ["IntelliMark"],
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
    } catch (error) {
      console.error(error);
      setShowLoader(false);
      setShow(false);
      setShowError(true);
      setSubmit(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Memory-in-Pixel-IntelliMark - Sharp</title>
        <meta name="description" content="Sharp-Memory-in-Pixel" />
      </Head>

      {/* Hero Section */}
      <div
        style={{
          alignItems: "center",
          backgroundImage: `url(${Screen3.src})`, // <-- fixed
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
            height={100}
            style={{ paddingTop: "50px" }}
          />
          <div style={{ paddingTop: 150 }}>
            <h1
              style={{ color: "white", fontSize: "5rem", textAlign: "center" }}
            >
              Memory in Pixel LCDs
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "2.5rem",
                textAlign: "center",
              }}
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
            height={32}
            style={{ paddingTop: 80 }}
          />
        </div>
      </div>

      {/* Contact Form Section */}
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
            <h1 style={{ fontSize: "3rem", textAlign: "left", color: "white" }}>
              <strong>Let’s Talk.</strong>
            </h1>
            <p
              style={{ color: "white", textAlign: "left", padding: "20px 0px" }}
            >
              A member of our team will get back to you ASAP. Let’s find out if
              a Memory in Pixel LCD is the perfect fit for your next product.
            </p>
          </div>

          <div className="col-md-6">
            <Form noValidate className="IntelliMark" onSubmit={onSubmit}>
              <Row className="mb-2">
                <Col>
                  <Form.Control
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                </Col>
              </Row>

              <Row className="mb-2">
                <Col>
                  <Form.Control
                    name="name"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                    value={formData.name}
                  />
                </Col>
              </Row>

              <Row className="mb-2">
                <Col xs={2}>
                  <Form.Control
                    name="mobileCode"
                    placeholder="+1"
                    required
                    onChange={handleChange}
                    value={formData.mobileCode}
                  />
                </Col>
                <Col xs={10}>
                  <Form.Control
                    name="mobile"
                    placeholder="Contact number"
                    required
                    onChange={handleChange}
                    value={formData.mobile}
                    maxLength={10}
                  />
                </Col>
              </Row>

              <Row className="mb-2">
                <Col>
                  <Form.Control
                    name="message"
                    as="textarea"
                    rows={3}
                    placeholder="Comments(optional)"
                    onChange={handleChange}
                    value={formData.message}
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

              {/* Loader */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: 10,
                }}
              >
                <ClipLoader color="#e26565" loading={showLoader} size={50} />
              </div>

              {/* Success Toast */}
              <Toast
                onClose={() => {
                  setShow(false);
                  setSubmit(false);
                }}
                show={show}
              >
                <Toast.Header>
                  <strong className="me-auto">Success</strong>
                </Toast.Header>
                <Toast.Body>
                  Thank You! <br /> Your query has been successfully submitted.
                </Toast.Body>
              </Toast>

              {/* Error Toast */}
              <Toast
                onClose={() => {
                  setShowError(false);
                  setSubmit(false);
                }}
                show={showError}
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
    </div>
  );
};

export default MIPITM;
