import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Image } from "react-bootstrap";
import Screen3 from "../../assets/Low-Power-Displays-Main-Image--F.jpg";
import Screen4 from "../../assets/Low-Power-Displays-Image-2.jpeg";
import logo from "../../assets/sharp_logo.png";
import temperature from "../../assets/Wide Temperatures Icon.png";
import thinLightweight from "../../assets/Thin and Lightweight Icon.png";
import outdoor from "../../assets/Outdoor Readability Icon.png";
import lowPower from "../../assets/Low-Power Icon.png";
import Button from "react-bootstrap/Button";
import Footer from "../../Footer";
import axios from "axios";
import Toast from "react-bootstrap/Toast";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Form1 from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import image2 from "../../assets/Memory in Pixel LCD.png";
import image4 from "../../assets/R-IGZO LCD.png";
import image5 from "../../assets/Sharp 5 R-IGZO Low-Power Performance.png";
import image6 from "../../assets/Sharp 31.5 R-IGZO Low-Power Performance.png";
import image7 from "../../assets/Low-Power Performance.png";
import image8 from "../../assets/Sharp_thumb.png";
import doc from "../../assets/Documents/Sharp Low-Power Displays White Paper.pdf";
import { Link } from "react-router-dom";

export default class LowPowerDisplay extends Component {
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
    window.location.href = link;
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
      subject: ["Low Power Display"],
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
    window.location.href = link;
    // alert(text);
  };
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>LOW POWER DISPLAYS - Sharp</title>
          <meta name="description" content="Sharp-LOW-POWER-DISPLAYS" />
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
              style={{ width: "35%", paddingTop: "50px", maxWidth: 300 }}
            />
            <div style={{ paddingTop: 150 }}>
              <h1
                style={{
                  color: "white",
                  fontSize: "3.5rem",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {`YOUR SOURCE FOR GAME CHANGING`}
              </h1>
              <h1
                style={{
                  color: "white",
                  fontSize: "3.5rem",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {`LOW POWER DISPLAYS`}
              </h1>
            </div>
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
            style={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              className="row"
              style={{
                maxWidth: "100%",
                display: "flex",
                alignItems: "center",
                paddingBlock: 20,
                paddingInline: "10%",
                margin: 0,
              }}
            >
              <div>
                {/* <div className="padding-top-50 d-none d-md-block"></div> */}
                <div className="padding-top-50"></div>
                <h1
                  style={{
                    fontSize: "2.5rem",
                    textAlign: "center",
                    border: "none",
                    marginInline: "auto",
                    width: "80%",
                  }}
                >
                  <strong>
                    PUT THE MUSCLE OF SHARP LOW-POWER DISPLAYS TO WORK IN YOUR
                    NEXT DESIGN
                  </strong>
                </h1>
                <div className="padding-top-50"></div>
              </div>
              <p
                style={{
                  fontWeight: "light",
                  lineHeight: "2.5rem",
                  letterSpacing: "1px",
                }}
              >
                Power management is one of the core issues with providing peak
                display performance in high-ambient and outdoor lighting
                environments. But with Sharp's leading-edge technologies,
                compensating for high power requirements is a thing of the past.
                Our low-power, high-performance display solutions change the
                game, enabling a whole new world of designs. Choose from
                Monochrome and 64-color
                <span>
                  <Link
                    style={{ color: "black", textDecoration: "underline" }}
                    to="https://sharpsecd.com/MemoryInPixel"
                  >
                    {" "}
                    Memory-In-Pixel (MIP) LCDs{" "}
                  </Link>
                </span>
                or full-color, high-resolution{" "}
                <span>
                  <Link
                    style={{ color: "black", textDecoration: "underline" }}
                    to="https://sharpsecd.com/ReflectiveIGZO"
                  >
                    Reflective IGZO displays.
                  </Link>
                </span>
              </p>
              <div className="padding-top-50"></div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Button
                  className="redButton"
                  size="lg"
                  onClick={() => this.myRef.current.scrollIntoView()}
                  variant="outline-danger"
                  style={{ marginTop: 20, marginBottom: 50 }}
                >
                  Contact Sharp
                </Button>
              </div>
              {/* <div className="padding-top-50"></div> */}
            </div>
          </div>
          <div
            className="row"
            style={{
              maxWidth: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingInline: "5rem",
              paddingBlock: "2rem",
              backgroundImage: `url(${Screen4})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="padding-top-50"></div>
            <div className="padding-top-50"></div>

            <div className="row">
              <div tabIndex={0} className="col-md-3">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <img
                    style={{ width: 90 }}
                    src={outdoor}
                    role="presentation"
                    alt="icon"
                  />
                  <h1
                    style={{
                      fontSize: "1.3rem",
                      padding: "1vw",
                      textAlign: "center",
                    }}
                  >
                    <strong>OUTDOOR READABILITY</strong>
                  </h1>
                  <p style={{ padding: "1vw", textAlign: "center" }}>
                    From edge-of-vision to bright sunlight
                  </p>
                </div>
              </div>

              <div tabIndex={0} className="col-md-3">
                <div className="padding-top-50 d-block d-md-none"></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <img
                    style={{ width: 90 }}
                    src={lowPower}
                    role="presentation"
                    alt="icon"
                  />
                  <h1
                    style={{
                      fontSize: "1.3rem",
                      padding: "1vw",
                      textAlign: "center",
                    }}
                  >
                    <strong>LOW POWER</strong>
                  </h1>
                  <p style={{ padding: "1vw", textAlign: "center" }}>
                    No backlight required in reflective mode.
                  </p>
                </div>
              </div>

              <div tabIndex={0} className="col-md-3">
                <div className="padding-top-50 d-block d-md-none"></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <img
                    style={{ width: 90 }}
                    src={temperature}
                    role="presentation"
                    alt="icon"
                  />
                  <h1
                    style={{
                      fontSize: "1.3rem",
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
                <div className="padding-top-50 d-block d-md-none"></div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <img
                    style={{ width: 90 }}
                    src={thinLightweight}
                    role="presentation"
                    alt="icon"
                  />
                  <h1
                    style={{
                      fontSize: "1.3rem",
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
            {/* <div className="padding-top-30"></div> */}
            <div className="padding-top-50"></div>
            <div className="padding-top-50"></div>
          </div>

          <div
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              flexDirection: "column",
            }}
          >
            <div
              className="row"
              style={{
                maxWidth: "1140px",
                display: "flex",
                paddingTop: "50px",
                paddingBottom: "50px",
                alignItems: "flex-start",
                paddingRight: 20,
                paddingLeft: 20,
                margin: 0,
              }}
            >
              <div style={{ width: "100%" }}>
                <h1 style={{ fontSize: "3rem" }}>
                  <strong>MEMORY IN PIXEL LCDs</strong>
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
                style={{ paddingTop: 30, paddingBottom: 10 }}
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
                      paddingTop: 30,
                      borderBottom: 10,
                    }}
                  >
                    <p>
                      <strong>
                        Choose from monochrome or 64-color for wearable and
                        remote applications
                      </strong>
                    </p>
                    <p>
                      Our{" "}
                      <span>
                        <Link
                          style={{
                            color: "black",
                            textDecoration: "underline",
                          }}
                          to="https://sharpsecd.com/memory-in-pixel-lcds-technology"
                        >
                          Memory-In-Pixel (MIP) technology{" "}
                        </Link>
                      </span>{" "}
                      provides high-performance solutions for wearable and
                      portable applications - or any product with a battery.
                      Sizes range from 1.08-inch to 4.4-inch (diagonal) with
                      static-image operation at power levels as low as 10's of
                      microamps
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "3rem",
                      }}
                    >
                      <Button
                        className="redButton"
                        size="lg"
                        variant="outline-danger"
                        as={Link}
                        to="/MemoryInPixel"
                        style={{ marginTop: 20, marginBottom: 50 }}
                      >
                        Learn More
                      </Button>
                      <Button
                        className="greyButton"
                        size="lg"
                        onClick={() => this.myRef.current.scrollIntoView()}
                        variant="outline-danger"
                        as={Link}
                        to="/"
                        style={{ marginTop: 20, marginBottom: 50 }}
                      >
                        Request a Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              tabIndex={0}
              style={{
                padding: 0,
                maxWidth: "1140px",
                paddingRight: 20,
                paddingLeft: 20,
              }}
            >
              <div className="row" style={{ margin: 0, width: "100%" }}>
                <div
                  className="col-sm-12 col-md-12"
                  style={{
                    height: 0,
                    width: "100%",
                    margin: "12px 0",
                    border: "none",
                    borderBottomWidth: "2px",
                    borderBottomColor: "rgba(0,0,0,0.5)",
                    borderBottomStyle: "solid",
                  }}
                ></div>
              </div>
              <h1
                style={{
                  fontSize: "1.3rem",
                  paddingTop: "50px",
                  paddingBottom: "1vw",
                  textAlign: "left",
                }}
              >
                <strong>
                  Memory in Pixel Displays: High Resolution for Detailed
                  Graphics
                </strong>
              </h1>
              <div
                tabIndex={-1}
                className="row "
                style={{
                  // padding: "30px 100px",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <div className="col-md-6">
                  <p>
                    Traditionally, reflective Film-compensated STN reflective
                    displays for a variety of outdoor/hand­ (FSTN) has been the
                    workhorse of monochrome, held display applications. However,
                    these displays are limited in terms of performance and
                    low-power attributes.
                  </p>
                  <p>
                    FSTN displays typically require a SV VDD supply and
                    requirements. For example, a QVGA FSTN display an LCD VEE
                    supply, both of which increase power will require
                    approximately 82ml/V of power to
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    display low-resolution, low-contrast images. Sharp's
                    monochrome MIP WQVGA display requires display
                    low-resolution, low-contrast images. only 50uW in a static
                    image hold or 175uW in a 1Hz update mode
                  </p>
                  <p>
                    The FSTN display does not have a static image hold mode, so
                    it must be refreshed at 60Hz constantly.
                  </p>
                  <p>
                    <i>
                      The Sharp MIP is a mere 0.2% of che power in 1 Hz update
                      mode ond 0.06% of the power in static image hold.
                    </i>
                  </p>
                </div>
              </div>
            </div>

            <div
              tabIndex={0}
              style={{
                padding: 0,
                maxWidth: "1140px",
                marginTop: 50,
                paddingRight: 20,
                paddingLeft: 20,
              }}
            >
              <div className="row" style={{ margin: 0, width: "100%" }}>
                <div
                  className="col-sm-12 col-md-13"
                  style={{
                    height: 0,
                    width: "100%",
                    margin: "12px 0",
                    border: "none",
                    borderBottomWidth: "2px",
                    borderBottomColor: "rgba(0,0,0,0.5)",
                    borderBottomStyle: "solid",
                  }}
                ></div>
              </div>

              <div
                tabIndex={-1}
                className="row "
                style={{
                  // padding: "30px 100px",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <div className="col-md-6">
                  <h1
                    style={{
                      fontSize: "1.3rem",
                      paddingTop: "50px",
                      paddingBottom: "1vw",
                      textAlign: "left",
                    }}
                  >
                    <strong>Memory in Pixel Display Optical</strong>
                  </h1>
                  <h1
                    style={{
                      fontSize: "1.3rem",
                      paddingBottom: "1vw",
                      textAlign: "left",
                    }}
                  >
                    <strong>Performance is Superior</strong>
                  </h1>
                  <p>
                    Higher resolution enables detailed graphics and
                    multi-language support without any penalty in regard to
                    power dissipation. And fast response time allows smooth
                    animation and graphical content.
                  </p>
                </div>
                <div
                  className="col-md-6"
                  style={{ paddingTop: 50, paddingBottom: 30 }}
                >
                  <div>
                    <img
                      style={{ width: "100%" }}
                      src={image7}
                      role="presentation"
                      alt="Performance is Superior"
                    />
                  </div>
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
                alignItems: "flex-start",
                paddingRight: 20,
                paddingLeft: 20,
                margin: 0,
              }}
            >
              <div style={{ width: "100%" }}>
                <h1 style={{ fontSize: "3rem" }}>
                  <strong>R-IGZO LCDs</strong>
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
                    alt="Comparison with TFT"
                  />
                </div>
              </div>
              <div tabIndex={0} className="col-md-6">
                <div tabIndex={-1} style={{ height: "100%", padding: 10 }}>
                  <div className="padding-top-50"></div>

                  <div
                    className="centerAlignDiv"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <p>
                      <strong>
                        Full-color and high-resolution for hand held and signage
                        applications
                      </strong>
                    </p>
                    <p>
                      Our{" "}
                      <span>
                        <Link
                          style={{
                            color: "black",
                            textDecoration: "underline",
                          }}
                          to="https://sharpsecd.com/ReflectiveIGZO"
                        >
                          Reflective IGZO displays{" "}
                        </Link>
                      </span>{" "}
                      combine full-color and high resolution in a low-power
                      reflective LCD Current available{" "}
                      <span>
                        <Link
                          style={{
                            color: "black",
                            textDecoration: "underline",
                          }}
                          to="https://sharpsecd.com/reflective-igzo-displays-product"
                        >
                          sizes are 5.0-inch (diagonal)
                        </Link>
                      </span>{" "}
                      for hand-held, portable applications and{" "}
                      <span>
                        <Link
                          style={{
                            color: "black",
                            textDecoration: "underline",
                          }}
                          to="https://sharpsecd.com/reflective-igzo-displays-product"
                        >
                          31.5-inch (diagonal){" "}
                        </Link>
                      </span>
                      targeted at outdoor signage applications. Both sizes
                      include low-power backlighting for low-ambient viewing.
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "3rem",
                      }}
                    >
                      <Button
                        className="redButton"
                        size="lg"
                        variant="outline-danger"
                        as={Link}
                        to="/ReflectiveIGZO"
                        style={{ marginTop: 20, marginBottom: 50 }}
                      >
                        Learn More
                      </Button>
                      <Button
                        className="greyButton"
                        size="lg"
                        onClick={() => this.myRef.current.scrollIntoView()}
                        variant="outline-danger"
                        as={Link}
                        to="/"
                        style={{ marginTop: 20, marginBottom: 50 }}
                      >
                        Request a Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="row"
                style={{ margin: 0, width: "100%", marginTop: 50 }}
              >
                <div
                  className="col-sm-12 col-md-12"
                  style={{
                    height: 0,
                    width: "100%",
                    margin: "12px 0",
                    border: "none",
                    borderBottomWidth: "2px",
                    borderBottomColor: "rgba(0,0,0,0.5)",
                    borderBottomStyle: "solid",
                  }}
                ></div>
              </div>
            </div>
          </div>
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
                paddingBottom: "50px",
                alignItems: "flex-start",
                paddingRight: 20,
                paddingLeft: 20,
                margin: 0,
              }}
            >
              <div tabIndex={0} className="col-md-6">
                <div tabIndex={-1} style={{ height: "100%", padding: 10 }}>
                  {/* <div className="padding-top-50"></div> */}

                  <div
                    className="centerAlignDiv"
                    style={{
                      paddingTop: 20,
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <p>
                      <strong>
                        Reflective IGZO Displays Eliminate the Backlight
                      </strong>
                    </p>
                    <p>
                      For outdoor. bright sunlight environments. traditional
                      transmissive displays require a high-power, high-heat
                      generating backlight to compete with the sun. This poses
                      problems for thermal management and power dissipation at
                      the system level.
                      <span>
                        <Link
                          style={{
                            color: "black",
                            textDecoration: "underline",
                          }}
                          to="https://sharpsecd.com/reflective-igzo-displays-product"
                        >
                          {" "}
                          Sharp's 5" R-IGZO display{" "}
                        </Link>
                      </span>
                      negates the need for such a backlight, resulting in an
                      extremely low-power solution for handheld and portable
                      applications.
                    </p>
                    <p>
                      <strong>
                        Same Performance at just 3.6% of the power requirement
                      </strong>
                    </p>
                    <p>
                      With a typical high-bright (1000 nit) transmissive no
                      backlight, the R-IGZO display is 115mW at 60Hz. display,
                      the total power is 3.2W at 60Hz refresh. With which is
                      just 3.6% of the power requirement.
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
                    src={image5}
                    role="presentation"
                    alt="Comparison with TFT"
                  />
                  <p
                    style={{
                      fontStyle: "italic",
                      fontSize: "small",
                      textAlign: "left",
                      marginTop: 20,
                    }}
                  >
                    Backlight power is 0.33 W at 50 nits. Only needed at night.
                    <br />
                    • Power consumption comparison (5" HD720 basis)
                    <br />• Reflective IGZO is 3.6% of the power compared to a
                    high-bright transmissive display.
                  </p>
                </div>
              </div>
              <div className="row" style={{ margin: 0, width: "100%" }}>
                <div
                  className="col-sm-12 col-md-12"
                  style={{
                    height: 0,
                    width: "100%",
                    margin: "12px 0",
                    border: "none",
                    borderBottomWidth: "2px",
                    borderBottomColor: "rgba(0,0,0,0.5)",
                    borderBottomStyle: "solid",
                  }}
                ></div>
              </div>
            </div>
          </div>

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
                paddingBottom: "50px",
                alignItems: "flex-start",
                paddingRight: 20,
                paddingLeft: 20,
                margin: 0,
              }}
            >
              <div
                className="col-md-6"
                style={{ paddingTop: 30, paddingBottom: 30 }}
              >
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={image6}
                    role="presentation"
                    alt="Comparison with TFT"
                  />
                </div>
              </div>
              <div tabIndex={0} className="col-md-6">
                <div tabIndex={-1} style={{ height: "100%", padding: 10 }}>
                  {/* <div className="padding-top-50"></div> */}

                  <div
                    className="centerAlignDiv"
                    style={{
                      paddingTop: 20,
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <p>
                      <strong>
                        Lower power requirement saves time and money
                      </strong>
                    </p>
                    <p>
                      <span>
                        <Link
                          style={{
                            color: "black",
                            textDecoration: "underline",
                          }}
                          to="https://sharpsecd.com/reflective-igzo-displays-product"
                        >
                          Sharp's 31.5" R-IGZO display{" "}
                        </Link>
                      </span>
                      is targeted at outdoor signage enabling solar or
                      Power-Over-Ethernet (POE) installations. This negates the
                      need for permits and licensed electricians to drop a 120V
                      power line to the site.
                    </p>
                    <p>
                      <strong>
                        Less thermal management reduces maintenance
                      </strong>
                    </p>
                    <p>
                      Standard high-bright, transmissive displays also present
                      problems in terms of high intiernal heating and
                      eliminating IGZO display can eliminate these issues due to
                      the low and the need to replace filters on the fans. The
                      reflective cost for the thermal management design,
                      multiple fans, dust intrusion in outdoor signage
                      applications. This adds internal heat rise and elimination
                      of external fans, enabling a maintenance-free, sealed
                      housing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              paddingInline: "10%",
            }}
          >
            <div className="padding-top-50"></div>
            {/* <div className="padding-top-50"></div>
            <div className="padding-top-50"></div> */}
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
              }}
            >
              Sharp's low-power displays enable outstanding sunlight viewability
              at a fraction of the power and cost
            </h2>
            <div className="padding-top-50"></div>
            <p
              style={{
                fontSize: "1.6rem",
              }}
            >
              In conclusion, Sharp's low-power displays enable outstanding
              sunlight viewability at a fraction of the power of other standard
              technologies historically used in outdoor or mobile applications.
              This saves costs in terms of battery size and/or extensive thermal
              management techniques within the product.
            </p>
            <p
              style={{
                fontSize: "1.6rem",
              }}
            >
              Options range from high-contrast monochrome and
              <span>
                <Link
                  style={{ color: "black", textDecoration: "underline" }}
                  to="https://sharpsecd.com/MemoryInPixel"
                >
                  {" "}
                  64-color MIP displays
                </Link>
              </span>{" "}
              to full-color{" "}
              <span>
                <Link
                  style={{ color: "black", textDecoration: "underline" }}
                  to="https://sharpsecd.com/ReflectiveIGZO"
                >
                  {" "}
                  full-color, high-resolution R-IGZO displays
                </Link>
              </span>
              . These options address every type of content that might be needed
              in outdoor and mobile applications.
            </p>
          </div>
          <div className="padding-top-50"></div>
          <div
            style={{
              paddingInline: "10%",
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <img
              style={{ width: "100%", maxWidth: 150 }}
              src={image8}
              role="presentation"
              alt="Document Thumbnail"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 30,
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "1.8rem",
                }}
              >
                Get the Low Power LCD Whitepaper
              </h2>
              <Button
                className="redButton"
                size="lg"
                variant="outline-danger"
                href={doc}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 20, marginBottom: 50, maxWidth: 200 }}
              >
                Download Now
              </Button>
            </div>
          </div>
          <div className="padding-top-50"></div>
        </div>

        {/* <div className="padding-top-30"></div> */}

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
                  WANT TO KNOW MORE ABOUT SHARP LOW-POWER DISPLAYS?
                </strong>
              </h1>
            </div>
            <div style={{ width: "70%", marginTop: "5rem" }}>
              <Form1
                noValidate
                className="LPDContactForm"
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
