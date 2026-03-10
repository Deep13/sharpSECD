import React from "react";
import { Helmet } from "react-helmet";
import Screen3 from "../assets/About-banner.jpg";
import logo from "../assets/SHARP_Logo_red.png";
import image1 from "../assets/Sharp-Memory-In-Pixel_700x1082.jpg";
import { Image } from "react-bootstrap";
import Auto from "../assets/About-Auto.png";
import VR from "../assets/About-VR.png";
import Exercise from "../assets/About-Exercise.png";
import Healthcare from "../assets/About-Healthcare.png";
import overlay from "../assets/About-overlay.jpg";
import Button from "react-bootstrap/Button";
import GPS from "../assets/GPS.jpg";
import TechIcons from "../assets/tech-icons-tablet.png";
import Thermostat from "../assets/Thermostat.jpg";
import Calculator from "../assets/1973.png";
import Parrot from "../assets/1988-Parrot-icon.png";
import Phone from "../assets/1990s-Phone-Icon.png";
import Camera from "../assets/1997-Camera-icon.png";
import iphone from "../assets/2004-iphone-icon.png";
import Automotive from "../assets/2010s-Automotive-Icon.png";
import MIP from "../assets/2010s-MIP-devices-icon.png";
import ePoster from "../assets/2020s-ePoster-icon.png";
import Engineering from "../assets/Engineering-support.jpg";
import Footer from "../Footer";

export default function AboutUs() {
  const callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = link;
    // alert(text);
  };
  return (
    <div>
      {" "}
      <Helmet>
        <title>About Sharp SECD – 50+ Years of Display Innovation</title>
        <meta
          name="description"
          content="Sharp SECD has been a leader in display technology for over 50 years. Learn how our low-power, high-performance LCDs help developers bring products to market fast."
        />
      </Helmet>
      <div
        aria-label="Sharp logo with mountain landscape and vibrant red tundra, illustrating display clarity and color performance"
        style={{
          backgroundImage: `url(${Screen3})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "90vh",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            padding: 20,
            flex: 1,
            maxWidth: 1200,
          }}
        >
          <Image
            role="presentation"
            alt="SHARP Logo"
            src={logo}
            style={{ width: "90%", paddingTop: "50px", maxWidth: 300 }}
          />
          <div
            className="row banner-div"
            style={{ margin: 0, width: "100%", marginTop: 50 }}
          >
            <div
              className="col-sm-12 col-md-12 col-lg-6"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              <Image
                role="presentation"
                alt="About overlay"
                src={overlay}
                style={{ width: "100%" }}
              />
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-6"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <h1
                  style={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                  className="banner-text"
                >
                  PUSHING THE BOUNDARIES OF DISPLAY INNNOVATION
                </h1>
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
          <div tabIndex={-1} style={{ height: "100%", padding: 10 }}>
            <div
              className="centerAlignDiv"
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p style={{ lineHeight: 2 }}>
                Welcome to your home for Sharp's low-power, sunlight-viewable
                display component solutions in North America. We know what it
                takes to create a great product and bring it to market because
                we've been at the forefront of display technology since its
                earliest days. For more than 50 years, we've worked beside the
                developers of just about every type of product you can imagine
                that relies on a display. From the biggest brands to the biggest
                breakthroughs.
              </p>
              <p style={{ lineHeight: 2 }}>
                Your product might just be the next big thing.
                <strong>
                  <i>
                    {" "}
                    We bring world-class technology, knowledge, and support to
                    help you change the game.
                  </i>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row application-section"
        tabIndex={0}
        style={{
          background: "#737373",
          width: "100%",
          textAlign: "left",
          backgroundPosition: "top",
          padding: "80px 20px",
          marginLeft: 0,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          className="mb-center-align"
          style={{
            paddingBottom: 30,
            fontSize: "2rem",
            maxWidth: 1200,
            color: "white",
            width: "100%",
          }}
        >
          <strong>SHARP HELPS DRIVE TODAY'S TECH INNOVATIONS</strong>
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 1200,
            marginTop: 20,
            flex: 1,
            width: "100%",
          }}
          className="d-none d-lg-flex about-icons"
        >
          <div style={{ flex: 1, zIndex: 1 }}>
            <Image
              role="presentation"
              alt="Driver interacting with digital dashboard touchscreen in a smart vehicle"
              src={Auto}
              style={{ width: "100%" }}
            />
          </div>
          <div
            style={{
              background: "white",
              width: 60,
              height: 10,
              margin: "0px -10px",
            }}
          ></div>
          <div style={{ flex: 1, zIndex: 1 }}>
            <Image
              role="presentation"
              alt="Illustration of person using a virtual reality headset with digital interface overlay"
              src={VR}
              style={{ width: "100%" }}
            />
          </div>
          <div
            style={{
              background: "white",
              width: 60,
              height: 10,
              margin: "0px -10px",
            }}
          ></div>

          <div style={{ flex: 1, zIndex: 1 }}>
            <Image
              role="presentation"
              alt="Medical professional reviewing patient data on a digital tablet with a colleague"
              src={Healthcare}
              style={{ width: "100%" }}
            />
          </div>
          <div
            style={{
              background: "white",
              width: 60,
              height: 10,
              margin: "0px -10px",
            }}
          ></div>

          <div style={{ flex: 1, zIndex: 1 }}>
            <Image
              role="presentation"
              alt="Woman checking smartwatch after workout, wearing headphones"
              src={Exercise}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="d-lg-none">
          <Image
            role="presentation"
            alt="Tech Icons"
            src={TechIcons}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          padding: "50px 20px",
        }}
      >
        <div
          className="row"
          style={{
            maxWidth: "900px",
            display: "flex",
            alignItems: "center",

            margin: 0,
          }}
        >
          <div tabIndex={-1} style={{ height: "100%" }}>
            <div
              className="centerAlignDiv"
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h2
                style={{
                  paddingBottom: 30,
                  fontSize: "2rem",
                  color: "black",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <strong>
                  WE'LL GET YOU TO MARKET FAST, WITH А PRODUCT THAT'S BUILT TO
                  LAST
                </strong>
              </h2>
              <p style={{ lineHeight: 2 }}>
                Your business depends on quickly getting high-quality products
                to market. Choose Sharp displays for your next product, and
                enjoy:
              </p>
              <ul style={{ lineHeight: 2, fontSize: "1.3rem" }}>
                <li>Global sales and engineering support</li>
                <li>Global logistics support with hubs worldwide</li>
                <li>50+ years of display innovation</li>
              </ul>
              <p style={{ lineHeight: 2 }}>
                <strong>
                  <i>
                    We're ready to be part of your world-class development team.
                  </i>
                </strong>
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
          backgroundColor: "#E8E6E6",
          padding: "50px 0px",
        }}
      >
        <div
          className="row"
          style={{
            maxWidth: "1200px",
            display: "flex",
            alignItems: "center",
            padding: 20,
            margin: 0,
          }}
        >
          <div className="col-lg-5 col-md-12">
            <div style={{ textAlign: "center" }}>
              <img
                style={{ width: "80%" }}
                src={GPS}
                role="presentation"
                alt="Hand holding rugged GPS device with outdoor display showing compass and navigation data"
              />
            </div>
          </div>
          <div
            tabIndex={0}
            className="col-lg-7 col-md-12 mb-top"
            style={{ height: "100%" }}
          >
            <div tabIndex={-1}>
              <div
                className="centerAlignDiv"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  lineHeight: 2,
                }}
              >
                <p style={{ fontWeight: "bold" }}>BEST-IN-CLASS PERFORMANCE</p>
                <p>
                  We build our displays to last with the performance
                  characteristics and specs required for long life.
                </p>
                <p>
                  Our displays come with full documentation. And our products
                  are backed by one of the best warranties in the business.
                </p>
              </div>
            </div>
            <div
              className="mb-center"
              style={{
                justifyContent: "flex-start",
                display: "flex",
                width: "100%",
              }}
            >
              <Button
                className="lightRedButton"
                // onClick={() => this.myRef.current.scrollIntoView()}
                size="lg"
                variant="outline-danger"
                style={{
                  marginRight: 20,
                  backgroundColor: "#E61D24",
                  padding: "10px 50px",
                }}
                onClick={(event) => callFunct(event, "/contact")}
              >
                Contact Sharp
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          padding: "50px 0px",
        }}
      >
        <div
          className="row"
          style={{
            maxWidth: "1200px",
            display: "flex",
            alignItems: "center",
            padding: 20,
            margin: 0,
          }}
        >
          <div
            tabIndex={0}
            className="col-lg-7 col-md-12 order-2 order-lg-1 mb-top"
          >
            <div tabIndex={-1}>
              <div
                className="centerAlignDiv"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  lineHeight: 2,
                }}
              >
                <p style={{ fontWeight: "bold" }}>CUSTOMIZATION? NO PROBLEM.</p>
                <p>
                  Want to add a lighting solution, a touch-screen or extra
                  ruggedization to your product?
                </p>
                <p>
                  Modify our displays-without jeopardizing your warranty - by
                  working with our network of superb value-add partners. And
                  Sharp's U.S.-based engineers will be with you every step of
                  the way.
                </p>
              </div>
            </div>
            <div
              className="mb-center"
              style={{
                justifyContent: "flex-start",
                display: "flex",
                width: "100%",
              }}
            >
              <Button
                className="lightRedButton"
                // onClick={() => this.myRef.current.scrollIntoView()}
                size="lg"
                variant="outline-danger"
                style={{
                  marginRight: 20,
                  backgroundColor: "#E61D24",
                  padding: "10px 50px",
                }}
                onClick={(event) => callFunct(event, "/contact")}
              >
                Contact Sharp
              </Button>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 mb-top order-1 order-lg-2">
            <div className="mb-center-align" style={{ textAlign: "right" }}>
              <img
                style={{ width: "80%" }}
                src={Thermostat}
                role="presentation"
                alt="Finger adjusting temperature on touchscreen thermostat set to 23°C"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "#E8E6E6",
          padding: "50px 0px",
        }}
      >
        <div
          className="row"
          style={{
            maxWidth: "1200px",
            display: "flex",
            alignItems: "flex-start",
            padding: 20,
            margin: 0,
          }}
        >
          <div className="col-md-12 col-lg-5">
            <div>
              <img
                style={{ width: "100%" }}
                src={Engineering}
                role="presentation"
                alt="Two professionals reviewing data on a laptop in a modern office setting"
              />
            </div>
          </div>
          <div
            tabIndex={0}
            className="col-md-12 col-lg-7 mb-top"
            style={{ paddingLeft: 40 }}
          >
            <div tabIndex={-1}>
              <div
                className="centerAlignDiv"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  lineHeight: 2,
                }}
              >
                <p style={{ fontWeight: "bold" }}>
                  U.S.-BASED SALES & ENGINEERING SUPPORT
                </p>
                <p>
                  To move quickly, you need a partner you can depend on. Our
                  U.S.-based sales and engineering support team are at the
                  forefront of the latest display technology, and they're
                  helping create some of the latest and most innovative products
                  on the market. We're here to help you succeed.
                </p>
                <ul style={{ lineHeight: 2, fontSize: "1.3rem" }}>
                  <li>Prototyping support</li>
                  <li>Connection to value-add resources</li>
                  <li>Global logistics support with hubs worldwide</li>
                </ul>
              </div>
            </div>
            <div
              className="mb-center"
              style={{
                justifyContent: "flex-start",
                display: "flex",
                width: "100%",
              }}
            >
              <Button
                className="lightRedButton "
                // onClick={() => this.myRef.current.scrollIntoView()}
                size="lg"
                variant="outline-danger"
                style={{
                  marginRight: 20,
                  backgroundColor: "#E61D24",
                  padding: "10px 50px",
                }}
                onClick={(event) => callFunct(event, "/contact")}
              >
                Contact Sharp
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row application-section"
        tabIndex={0}
        style={{
          background: "#737373",
          width: "100%",
          textAlign: "left",
          backgroundPosition: "top",
          padding: "80px 20px",
          marginLeft: 0,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            paddingBottom: 30,
            fontSize: "2rem",
            maxWidth: 800,
            color: "white",
            width: "100%",
            textAlign: "center",
          }}
        >
          <strong>SHARP: 50+ YEARS OF LEADING THE LCD INDUSTRY</strong>
        </h2>
        <div
          className="icon-devices"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 1000,
            marginTop: 20,
            flex: 1,
            width: "100%",
          }}
        >
          <div
            style={{ display: "flex", width: "100%", alignItems: "flex-start" }}
          >
            <Image
              role="presentation"
              alt="Illustration of Sharp's original LCD calculator, the first consumer product with an LCD screen"
              src={Calculator}
              style={{
                width: 250,
                objectFit: "contain",
                height: "auto",
                zIndex: 1,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: 200,
                marginTop: 60,
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "2rem" }}>1993</p>
              <div
                style={{
                  background: "white",
                  width: "100%",
                  height: 5,
                  marginLeft: "-25px",
                }}
              ></div>
              <p style={{ padding: 10 }}>
                Sharp Introduces the first consumer product with an LCD screen.
                LCD watches soon follow.
              </p>
            </div>
          </div>
        </div>
        <div
          className="icon-devices icon-devices-right"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 1000,
            marginTop: "-40px",
            flex: 1,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: 200,
                marginTop: 60,
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "2rem" }}>1988</p>
              <div
                style={{
                  background: "white",
                  width: "100%",
                  height: 5,
                  marginRight: "-25px",
                }}
              ></div>
              <p style={{ padding: 10 }}>
                Sharp Introduces the first full-color, full-motion display,
                launching the LCD industry.
              </p>
            </div>
            <Image
              role="presentation"
              alt="Sharp's 1988 full-color LCD display showing a parrot image on screen, marking a breakthrough in display technology"
              src={Parrot}
              style={{
                width: 250,
                objectFit: "contain",
                height: "auto",
                zIndex: 1,
              }}
            />
          </div>
        </div>

        <div
          className="icon-devices "
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 1000,
            marginTop: "-40px",
            flex: 1,
            width: "100%",
          }}
        >
          <div
            style={{ display: "flex", width: "100%", alignItems: "flex-start" }}
          >
            <Image
              role="presentation"
              alt="1990s Sharp innovations including a wall-mounted LCD TV with a vivid display and an early backfacing camera phone."
              src={Phone}
              style={{
                width: 250,
                objectFit: "contain",
                height: "auto",
                zIndex: 1,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: 200,
                marginTop: 35,
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "2rem" }}>1990s</p>
              <div
                style={{
                  background: "white",
                  width: "100%",
                  height: 5,
                  marginLeft: "-25px",
                }}
              ></div>
              <p style={{ padding: 10 }}>
                Sharp Introduces the wall-mount LCD TV. the first backfacing
                camera phone, and first digital camera viewfinder.
              </p>
            </div>
          </div>
        </div>
        <div
          className="icon-devices icon-devices-right"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 1000,
            marginTop: "-40px",
            flex: 1,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: 200,
                marginTop: 60,
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "2rem" }}>1997</p>
              <div
                style={{
                  background: "white",
                  width: "100%",
                  height: 5,
                  marginRight: "-25px",
                }}
              ></div>
              <p style={{ padding: 10 }}>
                Sharp Super Mobile LCD for digital cameras and phones offers
                super high quality and 160-degree viewing angles.
              </p>
            </div>
            <Image
              role="presentation"
              alt="In 1997, Sharp introduced the Super Mobile LCD—an ultra-high-quality display for digital cameras and phones, featuring vibrant clarity and 160-degree wide-angle viewing."
              src={Camera}
              style={{
                width: 250,
                objectFit: "contain",
                height: "auto",
                zIndex: 1,
              }}
            />
          </div>
        </div>

        <div
          className="icon-devices"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 1000,
            marginTop: "-40px",
            flex: 1,
            width: "100%",
          }}
        >
          <div
            style={{ display: "flex", width: "100%", alignItems: "flex-start" }}
          >
            <Image
              role="presentation"
              alt="In 2004, Sharp advanced thin-film transistor (TFT) technology, setting a new standard for display performance in smartphones, tablets, and televisions throughout the 2000s."
              src={iphone}
              style={{
                width: 250,
                objectFit: "contain",
                height: "auto",
                zIndex: 1,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: 200,
                marginTop: 60,
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "2rem" }}>2004</p>
              <div
                style={{
                  background: "white",
                  width: "100%",
                  height: 5,
                  marginLeft: "-25px",
                }}
              ></div>
              <p style={{ padding: 10 }}>
                We developed highperformance, thinfilm transistors (TFT), which
                went on to dominate tablets, smart phones, and TVs in the 2000s.
              </p>
            </div>
          </div>
        </div>
        <div
          className="icon-devices icon-devices-right"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 1000,
            marginTop: "-40px",
            flex: 1,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: 200,
                marginTop: 60,
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "2rem" }}>2010s</p>
              <div
                style={{
                  background: "white",
                  width: "100%",
                  height: 5,
                  marginRight: "-25px",
                }}
              ></div>
              <p style={{ padding: 10 }}>
                Sharp Memory in Pixel is used in smart watches, fitness
                trackers. medical devices -- wherever long battery life is a
                must.
              </p>
            </div>
            <Image
              role="presentation"
              alt="Collage of a smartwatch, GPS handheld, and digital blood pressure monitor showing applications of Sharp’s low-power Memory in Pixel LCD technology in the 2010s."
              src={MIP}
              style={{
                width: 250,
                objectFit: "contain",
                height: "auto",
                zIndex: 1,
              }}
            />
          </div>
        </div>
        <div
          className="icon-devices"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 1000,
            marginTop: "-40px",
            flex: 1,
            width: "100%",
          }}
        >
          <div
            style={{ display: "flex", width: "100%", alignItems: "flex-start" }}
          >
            <Image
              role="presentation"
              alt="A mock up with a photogrpah of Sharp’s Free Form Display featuring circular speedometer-style gauges integrated into a non-rectangular dashboard layout."
              src={Automotive}
              style={{
                width: 250,
                objectFit: "contain",
                height: "auto",
                zIndex: 1,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: 200,
                marginTop: 60,
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "2rem" }}>2010s</p>
              <div
                style={{
                  background: "white",
                  width: "100%",
                  height: 5,
                  marginLeft: "-25px",
                }}
              ></div>
              <p style={{ padding: 10 }}>
                Free Form Displays make limitations a thing of the past,
                enabling display designs in almost any shapе.
              </p>
            </div>
          </div>
        </div>
        <div
          className="icon-devices "
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 1000,
            marginTop: "0px",
            flex: 1,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <Image
              role="presentation"
              alt="Digital ePoster display showing a colorful Grand Canyon tourism advertisement with the text “Grand Canyon Adventure.”"
              src={ePoster}
              style={{
                width: 250,
                objectFit: "contain",
                height: "auto",
                zIndex: 1,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: 200,
                marginTop: 60,
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "2rem" }}>2020s</p>
              <div
                style={{
                  background: "white",
                  width: "100%",
                  height: 5,
                  marginLeft: "-35px",
                }}
              ></div>
              <p style={{ padding: 10 }}>
                ePoster displays eliminate the hassle and expense of printing
                paper posters, with zero power draw in static mode.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
