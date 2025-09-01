import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Image } from "react-bootstrap";
import Screen3 from "../assets/smepdark.jpeg";
import logo from "../assets/sharp_logo.png";
import image1 from "../assets/Sharp-Memory-In-Pixel_700x1082.jpg";
import arrow from "../assets/arrow.png";
import bg1 from "../assets/bg1.jpeg";
import bg2 from "../assets/bg2.jpeg";
import image2 from "../assets/Bike_966x644.jpg";
import image3 from "../assets/MIR_3557_Trans_966x644.png";
import icon from "../assets/Icon 1.jpeg";
import icon2 from "../assets/Icon 2.jpeg";
import icon3 from "../assets/Icon 3.jpeg";
import icon4 from "../assets/Icon 4.jpeg";
import icon5 from "../assets/Icon 5.jpeg";
import icon6 from "../assets/Icon 6.jpeg";
import Button from "react-bootstrap/Button";
import Footer from "../Footer";
import Form1 from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Toast from "react-bootstrap/Toast";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default class MemoryInPixel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      mobileCode: "",
      mobile: null,
      email: null,
      message: null,
      show: false,
      showLoader: false,
      submit: false,
      showError: false,
    };
    this.myRef = React.createRef();
  }
  onSubmit = (event) => {
    // this.setState({ selectedAreaCode: val });
    event.preventDefault();
    this.setState({
      name: "",
      mobileCode: "",
      mobile: "",
      email: "",
      message: "",
      showLoader: true,
      show: false,
      submit: true,
    });
    let data = {
      name: this.state.name,
      mobile: this.state.mobileCode + "-" + this.state.mobile,
      email: this.state.email,
      message: this.state.message,
      subject: ["Memory-in-pixel Landing"],
    };
    // console.log(data);
    axios
      .post("/api/form", data)
      .then((res) => {
        this.setState({ showLoader: false, show: true });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          showLoader: false,
          show: false,
          showError: true,
          submit: false,
        });
      });
  };
  callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = "#" + link;
    // alert(text);
  };
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Ultra-Low Power Memory-in-Pixel LCDs | Sharp SECD</title>
          <meta
            name="description"
            content="Discover Sharp's ultra-low power Memory-in-Pixel LCDs with high ambient-light performance and 64-color options—ideal for wearables, meters & more."
          />
        </Helmet>

        <div
          aria-label="Person checking GPS smartwatch outdoors with mountains in background, illustrating high sunlight readability of Sharp Memory LCDs"
          style={{
            alignItems: "center",
            backgroundImage: `url(${Screen3})`,
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
                  fontSize: "5rem",
                  textAlign: "center",
                }}
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
                <img
                  style={{ width: "100%" }}
                  src={image1}
                  role="presentation"
                  alt="Sharp Memory-in-Pixel LCD demo with Epson controller"
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
                  <h1 style={{ fontSize: "3rem" }}>
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
                        borderBottomColor: "#a91e2c",
                        borderBottomStyle: "solid",
                      }}
                    ></div>
                  </div>
                  <p>
                    Get best-of-class performance with ultra-low power
                    consumption and high readability in almost any ambient
                    lighting environment... plus eye-catching 64-color or
                    high-contrast monochrome for designs ranging from wearables
                    to medical devices to smart meters and many, many more.
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
                      onClick={() => this.myRef.current.scrollIntoView()}
                      size="lg"
                      variant="outline-danger"
                      style={{ marginRight: 20 }}
                    >
                      Talk to an Expert
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
            }}
          >
            <div
              className="row"
              style={{
                maxWidth: "1140px",
                display: "flex",
                paddingTop: "30px",
                paddingBottom: "30px",
                alignItems: "center",
                paddingRight: 20,
                paddingLeft: 20,
                margin: 0,
              }}
            >
              <div>
                <h1 style={{ fontSize: "3rem" }}>
                  <strong>
                    THE PERFECT SOLUTION FOR SMALL-SCREEN APPLICATIONS THAT
                    REQUIRE A BATTERY.
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
              </div>
              <div className="col-md-6" style={{ padding: 30 }}>
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={image2}
                    role="presentation"
                    alt="A display on a bicycle suggesting high outdoor performance in bright light."
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
                          this.callFunct(
                            event,
                            "/memory-in-pixel-lcds-technology"
                          )
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
                      onClick={() => this.myRef.current.scrollIntoView()}
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
                {/* <div className="padding-top-50 d-none d-md-block"></div>
                <div className="padding-top-50 d-none d-md-block"></div>
                <div className="padding-top-50 d-none d-md-block"></div>
                <div className="padding-top-50 d-none d-md-block"></div> */}
                <div className="padding-top-50"></div>
                <h1 style={{ fontSize: "3rem" }}>
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
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <Button
                      className="redButton"
                      onClick={() => this.myRef.current.scrollIntoView()}
                      size="lg"
                      variant="outline-danger"
                      style={{
                        marginRight: 20,
                        width: "100%",
                      }}
                    >
                      Contact Sharp
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{ padding: 30 }}>
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={image3}
                    role="presentation"
                    alt="Sharp Memory-in-Pixel LCD in reflective mode without backlight"
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
                  <img
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
                  <img
                    style={{ width: 90 }}
                    src={icon2}
                    role="presentation"
                    alt="icon"
                  />
                  <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                    <strong>HIGH READABILITY</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    Viewable in any light, from edge-of-vision to bright
                    sunlight.
                  </p>
                </div>
              </div>
              <div tabIndex={0} className="col-md-4">
                <div>
                  <img
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
                  <img
                    style={{ width: 90 }}
                    src={icon4}
                    role="presentation"
                    alt="icon"
                  />
                  <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                    <strong>OPERATING TEMPS</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    Wide operating temperatures for the most extreme
                    environments.
                  </p>
                </div>
              </div>
              <div tabIndex={0} className="col-md-4">
                <div>
                  <img
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
                  <img
                    style={{ width: 90 }}
                    src={icon6}
                    role="presentation"
                    alt="icon"
                  />
                  <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                    <strong>SIMPLE INTERFACE</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    Design made easy with a 3-wire SPI serial interface (SI,
                    SCS, SCK).
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
                onClick={() => this.myRef.current.scrollIntoView()}
                size="lg"
                variant="outline-danger"
                style={{ marginRight: 20 }}
              >
                Talk to an Expert
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
        </div>
        <div className="padding-top-30"></div>
        <div
          ref={this.myRef}
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
                Please drop us a line. A member of the Sharp team will get in
                touch with you ASAP to talk about the Memory LCD as a perfect
                fit for your next design.
              </p>
            </div>
            <div className="col-md-6">
              <div className="padding-top-50 d-none d-md-block"></div>
              <div className="padding-top-50"></div>
              <Form1
                noValidate
                className="MIPContactForm"
                onSubmit={this.onSubmit}
              >
                <Form1.Row style={{ paddingBottom: 10 }}>
                  <Col>
                    <Form1.Control
                      aria-label="Email"
                      placeholder="Email"
                      aria-required={true}
                      required
                      type="email"
                      onChange={(event) =>
                        this.setState({ email: event.currentTarget.value })
                      }
                      value={this.state.email}
                    />
                    <Form1.Control.Feedback type="invalid">
                      Please provide a valid email id.
                    </Form1.Control.Feedback>
                  </Col>
                </Form1.Row>
                <Form1.Row style={{ paddingBottom: 10 }}>
                  <Col>
                    <Form1.Control
                      aria-required={true}
                      aria-label="Name"
                      required
                      placeholder="Name"
                      onChange={(event) =>
                        this.setState({ name: event.currentTarget.value })
                      }
                      value={this.state.name}
                    />
                    <Form1.Control.Feedback type="invalid">
                      Name field cannot be empty
                    </Form1.Control.Feedback>
                  </Col>
                </Form1.Row>

                <Form1.Row style={{ paddingBottom: 10 }}>
                  <Col>
                    <Form1.Control
                      aria-label="Country Code"
                      placeholder="+1"
                      aria-required={true}
                      required
                      onChange={(event) =>
                        this.setState({
                          mobileCode: event.currentTarget.value,
                        })
                      }
                      value={this.state.mobileCode}
                    />
                    <Form1.Control.Feedback type="invalid">
                      Country code field cannot be empty
                    </Form1.Control.Feedback>
                  </Col>
                  <Col xs={10}>
                    <Form1.Control
                      aria-label="Contact Number"
                      placeholder="Contact number"
                      aria-required={true}
                      required
                      onChange={(event) =>
                        this.setState({ mobile: event.currentTarget.value })
                      }
                      value={this.state.mobile}
                      maxLength={10}
                    />
                    <Form1.Control.Feedback type="invalid">
                      Phone number field cannot be empty
                    </Form1.Control.Feedback>
                  </Col>
                </Form1.Row>
                <Form1.Row style={{ paddingBottom: 10 }}>
                  <Col>
                    <Form1.Control
                      aria-label="Comment"
                      aria-required={true}
                      required
                      as="textarea"
                      rows="3"
                      placeholder="Comments(optional)"
                      onChange={(event) =>
                        this.setState({ message: event.currentTarget.value })
                      }
                      value={this.state.message}
                    />
                    <Form1.Control.Feedback type="invalid">
                      Message field cannot be empty
                    </Form1.Control.Feedback>
                  </Col>
                </Form1.Row>
                <Button
                  aria-label="Submit Form Button"
                  className="redButton"
                  style={{ marginTop: 10, width: "100%" }}
                  variant="primary"
                  type="submit"
                  disabled={this.state.submit}
                >
                  Submit
                </Button>
                {/* <div style={{ paddingBottom: 50 }}></div> */}
                <Loader
                  type="TailSpin"
                  color="#e26565"
                  height={50}
                  width={50}
                  timeout={0} //3 secs
                  visible={this.state.showLoader}
                  style={{ margin: "10px" }}
                />
                <Toast
                  onClose={() => this.setState({ show: false, submit: false })}
                  show={this.state.show}
                  className="toastSuccess"
                // transition="Fade"
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
                  onClose={() =>
                    this.setState({ showError: false, submit: false })
                  }
                  show={this.state.showError}
                  className="toastError"
                // transition="Fade"
                >
                  <Toast.Header>
                    <strong className="me-auto">Error</strong>
                  </Toast.Header>
                  <Toast.Body>
                    We were unable to recieve your query. Please try again.
                  </Toast.Body>
                </Toast>
                <div style={{ paddingBottom: 50 }}></div>
                <div style={{ paddingBottom: 50 }}></div>
              </Form1>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
