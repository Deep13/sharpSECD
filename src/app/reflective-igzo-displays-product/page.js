"use client";

import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "@/json/RIGZOProduct";
import ProductDetail from "@/components/ProductDetail";
import QueryForm from "@/components/QueryForm";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function ReflectiveIGZOPage() {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState(null);

  useEffect(() => {
    AOS.init();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleShow = (item) => {
    setItems(item);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      <Head>
        <title>Products | Reflective IGZO - Sharp</title>
        <meta
          name="description"
          content="Full-color reflective, outdoor readable, low-power displays built on Sharp’s signature IGZO-TFT technology."
        />
      </Head>

      <div
        className="row container-row-85 padding-top-50 padding-bottom-30"
        style={{ overflowX: "hidden" }}
      >
        {/* Left Column */}
        <div
          id="main-content"
          role="main"
          className="col-md-6"
          style={{ padding: 0 }}
          tabIndex={0}
        >
          <div tabIndex={-1} style={{ height: "100%" }}>
            <h1>Reflective IGZO Displays</h1>
            <br />
            <p>
              Sharp’s latest IGZO-based innovation brings unbeatable solutions
              for sunlight viewability in handheld technology, smart and
              battery-operated signage, and other applications.
            </p>
            <p>
              View{" "}
              <Link href="/ReflectiveIGZO" style={{ color: "#e61d24" }}>
                R-IGZO product details
              </Link>
              <br />
              Learn more about{" "}
              <Link
                href="/reflective-igzo-technology"
                style={{ color: "#e61d24" }}
              >
                R-IGZO technology
              </Link>
            </p>

            <div style={{ padding: "30px 0 20px 0" }}>
              <h4>Our current R-IGZO line-up includes:</h4>
              <ul>
                <li style={{ paddingTop: 20 }}>
                  5-inch module for handheld and small-screen products
                </li>
                <li style={{ paddingTop: 20 }}>
                  31.5-inch module for monitor and signage applications
                </li>
              </ul>
            </div>

            <div>
              {products.length > 0 ? (
                products.map((item, key) => (
                  <div key={key} tabIndex={0}>
                    <Card tabIndex={-1} style={{ marginBottom: 10 }}>
                      <Card.Body>
                        <Card.Title>
                          <Button
                            className="titleLink"
                            style={{
                              color: "#e61d24",
                              fontSize: "1.8rem",
                              padding: 0,
                            }}
                            onClick={() => handleShow(item)}
                            variant="link"
                          >
                            {item.PN}
                          </Button>
                        </Card.Title>
                        <div className="row">
                          <div className="col-md-6">
                            <div style={{ padding: "3px" }}>
                              <span className="h6">Display Mode: </span>
                              {item["Display Mode"]}
                            </div>
                            <div style={{ padding: "3px" }}>
                              <span className="h6">Display Size: </span>
                              {item["Display Size"]}
                            </div>
                            <div style={{ padding: "3px" }}>
                              <span className="h6">Dot Format: </span>
                              {item["Dot Format"]}
                            </div>
                            <div style={{ padding: "3px" }}>
                              <span className="h6">60Hz Panel Power: </span>
                              {item["60Hz Panel Power"]}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div style={{ padding: "3px" }}>
                              <span className="h6">Color Depth: </span>
                              {item["Color Depth"]}
                            </div>
                            <div style={{ padding: "3px" }}>
                              <span className="h6">I/F: </span>
                              {item["I/F"]}
                            </div>
                            <div style={{ padding: "3px" }}>
                              <span className="h6">
                                Operating Temperature:{" "}
                              </span>
                              {item["Operating Temperature"]}
                            </div>
                            <div style={{ padding: "3px" }}>
                              <span className="h6">Backlight Brightness: </span>
                              {item["Backlight Brightness"]}
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: 600,
                  }}
                >
                  No records available
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column */}
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
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image
            src="/assets/Sharp-Product-R-IGZO-Displays.jpg" // ✅ public/assets path
            alt="Sharp Product R IGZO Displays"
            width={700}
            height={500}
            style={{ maxHeight: 700, objectFit: "contain" }}
          />
          <p
            style={{
              fontStyle: "italic",
              fontSize: "small",
              textAlign: "center",
            }}
          >
            Actual photo of display in reflective mode.
          </p>
        </div>
      </div>

      {/* Query Form */}
      <div style={{ paddingTop: 50 }}>
        <div className="row container-row-85 padding-bottom-30 contact-block">
          <div className="col-md-10">
            <h5 style={{ paddingBottom: 20 }}>
              Want to talk about Sharp Reflective IGZO displays for your next
              design?
            </h5>
            <div className="h3">Let's get in touch</div>
            <QueryForm subject="R-IGZO Displays" />
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetail show={show} handleClose={handleClose} items={items} />
    </div>
  );
}
