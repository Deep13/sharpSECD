import React, { Component } from "react";
import Restaurant from "../assets/eposter_displays/ePosterRestaurant.jpg";
import Hotel from "../assets/eposter_displays/ePosterHotel.jpg";
import Healthcare from "../assets/eposter_displays/ePosterHealthcare.jpg";
import Cinema from "../assets/eposter_displays/ePosterCinema.jpg";
import GRAND from "../assets/eposter_displays/grand_1.jpg";
import Earth from "../assets/eposter_displays/Earth.png";
import Low from "../assets/eposter_displays/Low.png";
import Lobbies from "../assets/eposter_displays/ePosterLobbies.jpg";
import Rental from "../assets/eposter_displays/ePosterRental.jpg";
import Education from "../assets/eposter_displays/Edutation_ePoster.jpg";
import sharp_logo from "../assets/SHARP_Logo_red.png";
import ePosterSummerSale from "../assets/eposter_displays/ePosterMallSquare.jpg";
import Retail from "../assets/eposter_displays/Retail.jpg";
import ePosterElevatorDarker from "../assets/eposter_displays/ePosterElevatorDarker.jpg";
import Zero from "../assets/eposter_displays/Zero.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import Form1 from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import axios from "axios";
AOS.init();
// import { Button, Form, FormControl, Table } from "react-bootstrap";

class Eposters_Displays extends Component {
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
      message: this.state.message,
      subject: ["ePoster Landing"],
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
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Sharp ePosters – Paperless Signage Modules | Sharp SECD</title>
          <meta
            name="description"
            content="Explore Sharp ePosters—zero-power, high-contrast E Ink displays that replace printed signage. Ideal for retail, healthcare, hospitality, and more."
          />
        </Helmet>
        <div className="row" style={{ width: "100%", margin: 0 }}>
          <div
            className="poster-section"
            tabIndex={0}
            style={{ position: "relative" }}
          >
            <img
              className="poster-sharp-logo"
              src={sharp_logo}
              role="presentation"
              alt="Control Sales Logo"
            />
            <div
              className="text-center-mb"
              style={{ marginBottom: 40, marginTop: 40 }}
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
            <div className="col-lg-6" style={{ padding: 80 }}>
              <h2 style={{ color: "black", paddingBottom: 30 }}>
                <strong>INTRODUCING ePOSTER</strong>
              </h2>
              <span style={{ fontSize: 35 }}>
                Printing is expensive, inflexible, and time-consuming. Welcome
                to the future of low power paper replacement signage. Sharp and
                E Ink have come together to bring you one of the industry's
                leading electronic poster display modules.
              </span>
              <br />
              <Button
                size="lg"
                onClick={() => this.myRef.current.scrollIntoView()}
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
                Contact Sharp
              </Button>
            </div>
            <div
              className="col-lg-6 hide-on-mobile"
              style={{ paddingRight: 0 }}
            >
              <img
                src={ePosterSummerSale}
                style={{ width: "100%" }}
                role="presentation"
                alt="Stock image graphic with signage display showing how ePoster will look in a mall or retail environment "
              />
            </div>
          </div>
          <div
            className="row hassle-block"
            tabIndex={0}
            style={{
              background: "#fff",
              width: "100%",
              textAlign: "left",
              backgroundPosition: "top",
              backgroundImage: `url(${ePosterElevatorDarker})`,
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
                <li>Allow cloud-based content management</li>
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
              <img
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
              <img
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
              <img
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
              <img
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
              <img
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
              <img
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
              <img
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
                onClick={(event) => this.callFunct(event, "/Eposters_product")}
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
                Find a Product
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
                <img
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
                <img
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
                <img
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
              <img
                src={Retail}
                style={{ width: "100%" }}
                role="presentation"
                alt="Concept mock-up showing ePoster display in a shopping mall setting"
              />
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
                <Form1
                  noValidate
                  className="ePosterDisplays"
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
                        placeholder="First Name"
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
export default Eposters_Displays;
