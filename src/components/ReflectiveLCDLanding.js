import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Image } from "react-bootstrap";
import Screen3 from "../assets/Crater_Lake.jpg";
import Screen1 from "../assets/Crater_Lake_Sky.jpg";
import logo from "../assets/sharp_logo.png";
import image1 from "../assets/mip.png";
import image2 from "../assets/rbaloon.png";
import arrow from "../assets/arrow.png";
import bg1 from "../assets/bg1.jpeg";
import bg2 from "../assets/bg2.jpeg";
import image3 from "../assets/MIR_3557_Trans_966x644.png";
import icon from "../assets/Icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";
import icon4 from "../assets/Icon4.png";
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
      demo: false,
    };
    this.myRef = React.createRef();
  }
  callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = "#" + link;
    // alert(text);
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showLoader: true,
      show: false,
    });
    let data = {
      name: this.state.name,
      mobile: this.state.mobileCode + "-" + this.state.mobile,
      email: this.state.email,
      message: this.state.demo
        ? "Yes, I’d like to request a demo. " + this.state.message
        : this.state.message,
      subject: ["Reflective LCD Landing Page"],
    };
    axios
      .post("/api/form", data)
      .then((res) => {
        this.setState({ showLoader: false, show: true });
        this.setState({
          name: "",
          mobileCode: "",
          mobile: "",
          email: "",
          message: "",
          submit: true,
          demo: false,
        });
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
  render() {
    return (
      <div>
        <Helmet>
          <title>Reflective LCD - Sharp</title>
          <meta name="description" content="Sharp-Reflective-LCD" />
        </Helmet>

        <div
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
              style={{ width: "35%", paddingTop: "100px", maxWidth: 300 }}
            />
            <div>
              <h1
                className="m-fs-2"
                style={{
                  color: "white",
                  textAlign: "center",
                  padding: "10px",
                  backgroundColor: "#0000003b",
                }}
              >
                LEADING THE WAY IN REFLECTIVE <br /> DISPLAY TECHNOLOGY
              </h1>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <div
            id="main-content"
            style={{
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
                display: "flex",
                paddingTop: "100px",
                paddingBottom: "100px",
                paddingRight: 20,
                paddingLeft: 20,
                margin: 0,
              }}
            >
              <div style={{ width: "100%" }}>
                <h1 style={{ fontSize: "3rem", textAlign: "center" }}>
                  <strong>
                    LOW-POWER <i>AND</i> SUNLIGHT-VIEWABLE? <br /> WELCOME TO A
                    BEAUTIFUL DAY.
                  </strong>
                </h1>
                <div className="padding-top-30"></div>
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
                    <p style={{ fontSize: 25 }}>
                      Typically, outdoor sunlight-readable displays require a
                      high-power backlight to provide 1200+ nits brightness in
                      order to overcome the sun. In applications that require a
                      true low-power display traditional transmissive LCDs were
                      not an option without major performance compromises.
                    </p>
                  </div>
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
                    <p style={{ fontSize: 25 }}>
                      Sharp's reflective display technologies provide the right
                      solution when low-power AND sunlight viewability are
                      required. The brighter the environment, the better they
                      look. Both backlight and frontlight options are available
                      to ensure the display is viewable under <i>all</i>{" "}
                      conditions -- even when ambient light is limited.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              backgroundImage: `url(${Screen1})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
              paddingTop: 100,
              paddingBottom: 100,
            }}
          >
            <div className="row" style={{}}>
              <div tabIndex={0} className="col-md-3">
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: 30,
                  }}
                >
                  <img
                    style={{ width: 90 }}
                    src={icon}
                    role="presentation"
                    alt="icon"
                  />
                  <h1
                    style={{
                      fontSize: "1.75rem",
                      padding: "1vw",
                      textAlign: "center",
                    }}
                  >
                    <strong>HIGH READABILITY</strong>
                  </h1>
                  <p style={{ padding: "1vw", textAlign: "center" }}>
                    From edge-of-vision to bright sunlight
                  </p>
                </div>
              </div>
              <div tabIndex={0} className="col-md-3">
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: 30,
                  }}
                >
                  <img
                    style={{ width: 90 }}
                    src={icon2}
                    role="presentation"
                    alt="icon"
                  />
                  <h1
                    style={{
                      fontSize: "1.75rem",
                      padding: "1vw",
                      textAlign: "center",
                    }}
                  >
                    <strong>LOW-POWER</strong>
                  </h1>
                  <p style={{ padding: "1vw", textAlign: "center" }}>
                    No backlight required in reflective mode
                  </p>
                </div>
              </div>
              <div tabIndex={0} className="col-md-3">
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: 30,
                  }}
                >
                  <img
                    style={{ width: 90 }}
                    src={icon3}
                    role="presentation"
                    alt="icon"
                  />
                  <h1
                    style={{
                      fontSize: "1.75rem",
                      padding: "1vw",
                      textAlign: "center",
                    }}
                  >
                    <strong>WIDE TEMPERATURES</strong>
                  </h1>
                  <p style={{ padding: "1vw", textAlign: "center" }}>
                    Operates in even the most extreme environments
                  </p>
                </div>
              </div>
              <div tabIndex={0} className="col-md-3">
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: 30,
                  }}
                >
                  <img
                    style={{ width: 90 }}
                    src={icon4}
                    role="presentation"
                    alt="icon"
                  />
                  <h1
                    style={{
                      fontSize: "1.75rem",
                      padding: "1vw",
                      textAlign: "center",
                    }}
                  >
                    <strong>THIN + LIGHTWEIGHT</strong>
                  </h1>
                  <p style={{ padding: "1vw", textAlign: "center" }}>
                    Slim profile enables compact product design
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
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
                <h1 style={{ fontSize: "3rem", paddingRight: 40 }}>
                  <strong>PRODUCTS</strong>
                </h1>
                <div className="row" style={{ margin: 0, width: "100%" }}>
                  <div
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
                <div className="padding-top-50"></div>
              </div>
              <div className="row">
                <div
                  tabIndex={0}
                  className="col-md-6"
                  style={{ marginBottom: 40 }}
                >
                  <div
                    tabIndex={-1}
                    style={{
                      height: "100%",
                      padding: 10,
                      border: "2px solid #b1b1b1",
                    }}
                  >
                    <div
                      className="centerAlignDiv"
                      style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <img
                          style={{ width: "100%" }}
                          src={image1}
                          role="presentation"
                          alt="icon"
                        />
                        <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                          <strong>MEMORY IN PIXEL LCDs</strong>
                        </h1>
                        <p style={{ padding: "1vw" }}>
                          <strong>
                            Choose from monochrome or 64-color for wearable and
                            remote applications
                          </strong>
                        </p>
                        <p style={{ padding: "1vw" }}>
                          Our Memory-In-pixel (MIP) technology provides high
                          performance solutions for wearable and portable
                          applications. Sizes range from 1.08-inch to 4.4-inch
                          (diagonal) with static-image operation at power levels
                          as low as 10's of microamps.
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
                          href="#/MemoryInPixel"
                          size="lg"
                          variant="outline-danger"
                          style={{ marginBottom: 20 }}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="col-md-6"
                  style={{ marginBottom: 40 }}
                >
                  <div
                    tabIndex={-1}
                    style={{
                      height: "100%",
                      padding: 10,
                      border: "2px solid #b1b1b1",
                    }}
                  >
                    <div
                      className="centerAlignDiv"
                      style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <img
                          style={{ width: "100%" }}
                          src={image2}
                          role="presentation"
                          alt="icon"
                        />
                        <h1 style={{ fontSize: "1.75rem", padding: "1vw" }}>
                          <strong>R-IGZO LCDs</strong>
                        </h1>
                        <p style={{ padding: "1vw" }}>
                          <strong>
                            Full-color and high-resolution for hand-held and
                            signage applications
                          </strong>
                        </p>
                        <p style={{ padding: "1vw" }}>
                          Our Reflective IGZO displays combine full-color and
                          high resolution in a low-power reflective LCD. Current
                          available sizes are 5.0-inch (diagonal) for hand-held,
                          portable applications and 32-inch (diagonal) targeted
                          at outdoor signage applications. Both sizes include
                          low-power backlighting for low-ambient viewing.
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
                          href="#/ReflectiveIGZO"
                          size="lg"
                          variant="outline-danger"
                          style={{ marginBottom: 20 }}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <h1
                  style={{
                    fontSize: "3rem",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <strong>
                    WANT TO KNOW MORE ABOUT SHARP REFLECTIVE DISPLAYS?
                  </strong>
                </h1>
                <div style={{ paddingBottom: 50 }}></div>
              </div>
              <div style={{ width: "70%" }}>
                <Form1 noValidate onSubmit={this.onSubmit}>
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
                  <Form1.Row>
                    <Col>
                      <Form1.Group>
                        <Form1.Check
                          className="customCheckbox"
                          type="checkbox"
                          label="Yes, I’d like to request a demo"
                          checked={this.state.demo}
                          onChange={(event) =>
                            this.setState({ demo: event.currentTarget.checked })
                          }
                        />
                      </Form1.Group>
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
                    className="redButton"
                    aria-label="Submit Form Button"
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
                    onClose={() =>
                      this.setState({ show: false, submit: false })
                    }
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
        </div>

        <Footer />
      </div>
    );
  }
}
