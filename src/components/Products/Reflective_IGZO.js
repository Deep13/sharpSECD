import React, { Component } from "react";
import QueryForm from "../QueryForm";
import { Card, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import lcdImage from "../../assets/Sharp-Product-R-IGZO-Displays.jpg";
import Footer from "../../Footer";
import Productdetail from "./productdetail";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "../../json/RIGZOProduct";
import { Helmet } from "react-helmet";
AOS.init();
class Reflective_IGZO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      show: false,
      data: products,
      search: "",
      filter: [],
      showClear: false,
      items: null,
    };
  }
  callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = "#" + link;
  };
  onSubmit = (event) => {
    event.preventDefault();
  };
  scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
  handleClose = () => this.setState({ show: false });
  handleShow = (item) => {
    this.setState({ show: true, items: item });
  };
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Products | Reflective IGZO - Sharp</title>
          <meta
            name="description"
            content="Full-color reflective, outdoor readable, low-power displays built on Sharp’s signature IGZO-TFT technology."
          />
        </Helmet>
        <div
          className="row container-row-85 padding-top-50 padding-bottom-30"
          style={{ overflowX: "hidden" }}
        >
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
                <a
                  href="/"
                  style={{ color: "#e61d24" }}
                  onClick={(event) => this.callFunct(event, "/ReflectiveIGZO")}
                >
                  {" "}
                  R-IGZO product details{" "}
                </a>
                <br />
                Learn more about{" "}
                <a
                  href="/"
                  style={{ color: "#e61d24" }}
                  onClick={(event) =>
                    this.callFunct(event, "/reflective-igzo-technology")
                  }
                >
                  {" "}
                  R-IGZO technology{" "}
                </a>
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
                {this.state.data.length > 0 ? (
                  this.state.data.map((item, key) => {
                    return (
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
                                onClick={() => this.handleShow(item)}
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
                                  <span className="h6">
                                    Backlight Brightness:{" "}
                                  </span>
                                  {item["Backlight Brightness"]}
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  })
                ) : (
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "2rem",
                      fontWeight: "600",
                    }}
                  >
                    No records available
                  </div>
                )}
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
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Image
              role="presentation"
              alt="Sharp Product R IGZO Displays"
              style={{ maxHeight: 700 }}
              src={lcdImage}
              fluid
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
        <Productdetail
          show={this.state.show}
          handleClose={this.handleClose}
          items={this.state.items}
        />
        <Footer />
      </div>
    );
  }
}

export default Reflective_IGZO;
