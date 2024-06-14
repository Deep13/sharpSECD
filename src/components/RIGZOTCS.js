import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Screen3 from "../assets/Sunflower_Image.jpeg";
import controlsaleslogo from "../assets/control-sales-logo.png";
import handheldimage1 from "../assets/Handheld1.jpeg";
import handheldimage2 from "../assets/Handheld2.jpeg";
import handheldimage3 from "../assets/Handheld3.jpeg";
import SHARP_Logo_red from "../assets/SHARP_Logo_red.png";
import handshake from "../assets/handshake.png";
import image2 from "../assets/Sharp-Technology-IGZO-High-Resolution-4.jpeg";
import image3 from "../assets/PowerConsumption[1].png";
import image4 from "../assets/Sharp Hardhat (1).jpg";
import icon from "../assets/Battery Icon.jpeg";
import icon2 from "../assets/Readability Icon.jpeg";
import icon3 from "../assets/Feather icon.jpeg";
import icon4 from "../assets/Thermometer Icon.jpeg";
import icon5 from "../assets/Arrows Icon.jpeg";
import icon6 from "../assets/Eyeball Icon.jpeg";
import image1 from "../assets/IGZODisplay.png";
import Button from "react-bootstrap/Button";
import Footer from "../Footer";
import Form1 from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Toast from "react-bootstrap/Toast";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default class RIGZOTCS extends Component {
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
    // history.push(link);
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
      subject: ["Control Sales R-IGZO TCS"],
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
          <title>Tech Coast Sales R-IGZO - Sharp</title>
          <meta
            name="description"
            content="Our full-color, low-power Reflective IGZO displays are the perfect solution for battery-operated handheld and outdoor applications where fantastic readability is required."
          />
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
            <div
              className="row"
              style={{
                maxWidth: "1140px",
                display: "flex",
                paddingTop: 11,
                alignItems: "center",
              }}
            >
              <div tabIndex={0} className="col-md-6">
                <div tabIndex={-1} style={{ height: "100%", padding: 10 }}>
                  <div
                    className="centerAlignDiv"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <h1 className="mb-2-5" style={{ fontSize: "3.5rem" }}>
                      <strong>R-IGZO</strong>
                    </h1>
                    <h1 className="mb-2-5" style={{ fontSize: "3rem" }}>
                      <strong>A New Standard for Low-Power Displays</strong>
                    </h1>
                    <p
                      style={{ margin: 0, fontSize: "2rem", paddingBottom: 15 }}
                    >
                      Full Color <br />
                      High Resolution <br />
                      Sunlight Readable
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6" style={{ padding: "0px 100px" }}>
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={image1}
                    role="presentation"
                    alt="Sharp MIP"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgb(115 115 115)",
          padding: "20px 0"

        }}>
          <p
            style={{
              color: "white",
              fontSize: "1.8rem",
              textAlign: "center",
              marginBottom: 0,
              verticalAlign: 'center'
            }}
          >
            <strong>
              Creating top product solutions with {' '}
            </strong>
            <img
              style={{ marginLeft: 10 }}
              src={controlsaleslogo}
              role="presentation"
              alt="Control Sales Logo"
            />
          </p>

        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            width: "100%",
            marginTop: 20,
            marginBottom: 20
          }}
        >
          <Button
            className="redButton"
            onClick={() => window.open("mailto:jcoombs@controlsales.com", "_blank")}
            size="lg"
            variant="outline-danger"
            style={{ paddingRight: 50, paddingLeft: 50 }}
          >
            Contact us
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundColor: "#d9d9d9",
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
                paddingTop: "50px",
                paddingBottom: "100px",
                alignItems: "center",
                paddingRight: 20,
                paddingLeft: 20,
                margin: 0,
              }}
            >
              <div style={{ width: "100%" }}>
                <h1 className="mb-2-5" style={{ fontSize: "3rem" }}>
                  <strong>EXCEPTIONALLY HIGH RESOLUTION</strong>
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
              <div
                className="col-md-6"
                style={{ paddingTop: 30, paddingBottom: 30 }}
              >
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={image2}
                    role="presentation"
                    alt="Comparison with TFT"
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
                      <strong>
                        High Outdoor Readability w/Full-color Moving Images
                        @60Hz
                      </strong>
                    </p>
                    <p>
                      IGZO enables unprecedented transistor miniaturization and
                      circuit thinning, thanks to its high electron mobility
                      rate. By raising the light transmission of each pixel,
                      twice the resolution is achieved for the same
                      transmittance.
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
              <div style={{ width: "100%" }}>
                {/* <div className="padding-top-50 d-none d-md-block"></div> */}
                <div className="padding-top-50"></div>
                <h1 className="mb-2-5" style={{ fontSize: "3rem" }}>
                  <strong>ULTRA-LOW POWER CONSUMPTION</strong>
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
                      {`IGZO reduces power consumption to one-fifth to one-tenth that of conventional screens, which contributes to longer product battery life. IGZO’s Pause Driving Method capitalizes on High OFF Resistance for improved pixel performance.`}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6"
                style={{ paddingTop: 30, paddingBottom: 30 }}
              >
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={image3}
                    role="presentation"
                    alt="ULTRA-LOW POWER CONSUMPTION"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#d9d9d9",
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
              <div style={{ width: "100%" }}>
                {/* <div className="padding-top-50 d-none d-md-block"></div> */}
                <div className="padding-top-50"></div>
                <h1 className="mb-2-5" style={{ fontSize: "3rem" }}>
                  <strong>THIN AND LIGHTWEIGHT</strong>
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

              <div
                className="col-md-6"
                style={{ paddingTop: 30, paddingBottom: 30 }}
              >
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={image4}
                    role="presentation"
                    alt="THIN AND LIGHTWEIGHT"
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
                      {`Reflective IGZO technology meets the need for ever-thinner, lighter finished products. It is ideal for battery-powered, handheld products that require full-color and high-resolution performance in bright outdoor environments. And the elimination of the backlight opens up whole new worlds of design possibilities.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div
            style={{
              backgroundColor: "#fff",
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
                paddingTop: "50px",
                paddingBottom: "50px",
                alignItems: "center",
                paddingRight: 20,
                paddingLeft: 20,
                margin: 0,
              }}
            >
              <div style={{ width: "100%" }}>
                <div className="padding-top-50"></div>
                <h1
                  className="mb-2-5"
                  style={{ fontSize: "3rem", textAlign: "center" }}
                >
                  <strong>Perfect for Handheld Industrial Applications</strong>
                </h1>
              </div>
              <div className="padding-top-50"></div>
              <div className="padding-top-50"></div>
              <div
                className="col-md-4"
                style={{ padding: "30px 0px" }}
              >
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={handheldimage1}
                    role="presentation"
                    alt="THIN AND LIGHTWEIGHT"
                  />
                </div>
              </div>
              <div
                className="col-md-4"
                style={{ padding: "30px 0px" }}
              >
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={handheldimage2}
                    role="presentation"
                    alt="THIN AND LIGHTWEIGHT"
                  />
                </div>
              </div>
              <div
                className="col-md-4"
                style={{ padding: "30px 0px" }}
              >
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={handheldimage3}
                    role="presentation"
                    alt="THIN AND LIGHTWEIGHT"
                  />
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
              <div className="padding-top-50"></div>
              <h1
                className="mb-2-5"
                style={{ fontSize: "3rem", textAlign: "center" }}
              >
                <strong>BEST-IN-CLASS R-IGZO FROM SHARP</strong>
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
                    <strong>ULTRA-LOW POWER CONSUMPTION</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    No backlight required in reflective mode.
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
                    <strong>HIGH OUTDOOR READABILITY</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    High Outdoor Readability w/Full-color Moving Images @60Hz.
                    Reflective electrode structure + high contrast.
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
                    <strong>THIN AND LIGHTWEIGHT</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    Slim, low-power backlight enables compact product designs.
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
                    <strong>WIDE OPERATING TEMPS</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    Supporting operating temperatures from -20°C to +70°C... and
                    storage temps from -30°C to +80°C.
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
                    <strong>20-50x FASTER THAN a-SI</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    IGZO's electron mobility is far higher than Amorphous
                    Silicon (a-Si) displays.
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
                    <strong>HIGH RESOLUTION</strong>
                  </h1>
                  <p style={{ padding: "1vw" }}>
                    IGZO enables higher resolution at the same or lower power
                    than a-SI solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="padding-top-30"></div>

            <div className="padding-top-50"></div>
          </div>
          <div
            style={{
              backgroundColor: 'rgb(232 230 230)',
              width: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >

            <div
              className="row"
              style={{
                maxWidth: "1140px",
                display: "block",
                paddingTop: "30px",
                paddingBottom: "30px",
                alignItems: "center",
                paddingRight: 20,
                paddingLeft: 20,
                margin: 0,
              }}
            >

              <div
                className="row"
                style={{ margin: 0, width: "100%", alignItems: "flex-start", paddingTop: 30 }}
              >
                <div tabIndex={0} className="col-md-6">
                  <div tabIndex={-1} style={{ height: "100%", padding: 10 }}>
                    <div
                      className="centerAlignDiv"
                      style={{
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <h1 style={{ fontSize: "2rem", textAlign: 'center' }} className='mb-font-2'>
                        <strong>
                          STRONGER TOGETHER.
                        </strong>
                      </h1>
                      <p>
                        Bringing the top products
                        to market requires having
                        the best team.

                      </p>
                      <div>


                        <img
                          style={{ width: "80%", marginTop: 30 }}
                          src={controlsaleslogo}
                          role="presentation"
                          alt="Control Sales Logo"
                        />
                      </div>
                      <p>+</p>
                      <div>


                        <img
                          style={{ width: "80%" }}
                          src={SHARP_Logo_red}
                          role="presentation"
                          alt="SHARP_Logo_red"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" style={{ padding: 30 }}>
                  <div>


                    <img
                      style={{ width: "100%" }}
                      src={handshake}
                      role="presentation"
                      alt="THE PERFECT SOLUTION"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ paddingBottom: 50 }}></div>
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
                  className="mb-2-5"
                  style={{
                    fontSize: "3rem",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <strong>
                    LET'S TALK ABOUT R-IGZO FOR YOUR NEXT PRODUCT DESIGN{" "}
                  </strong>
                </h1>
                <p
                  style={{
                    color: "white",
                    textAlign: "center",
                    padding: "20px 40px",
                  }}
                >
                  Provide your contact info and we'll reach out ASAP. If you’d
                  like to view a demo of the R-IGZO 5” display, please click the
                  box below.{" "}
                </p>
              </div>
              <div style={{ width: "70%" }}>
                <Form1 noValidate className="TCS-R-IGZO" onSubmit={this.onSubmit}>
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
                  <p style={{ color: "white" }}>
                    Looking for a smaller size class reflective displays?
                    <a
                      href="/"
                      style={{ color: "#e61d24" }}
                      onClick={(event) =>
                        this.callFunct(event, "/memory-in-pixel-lcds-product")
                      }
                    >
                      {" "}
                      Visit our Memory in Pixel product page
                    </a>
                    .
                  </p>
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
