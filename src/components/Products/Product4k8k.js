import React, { Component } from "react";
import QueryForm from "../QueryForm";

import { Image } from "react-bootstrap";
import lcdImage2 from "../../assets/Sharp-Product-8K-Reflective-IGZO-Displays.jpg";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
class Product4k8k extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      show: false,
      data: [],
      search: "",
      filter: [],
      showClear: false,
    };
  }
  callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = "#" + link;
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Products | Product 8k - Sharp</title>
          <meta
            name="description"
            content="Ultra-high-definition Sharp 8K displays deliver 3D-like feeling, depth, and high-resolution detail."
          />
        </Helmet>
        <div
          className="row container-row-85 padding-top-50 padding-bottom-30"
          style={{ overflowX: "hidden" }}
        >
          <div className="col-md-12">
            <div className="row">
              <div
                id="main-content"
                role="main"
                tabIndex={0}
                className="col-md-6"
                style={{ padding: 0 }}
              >
                <div tabIndex={-1}>
                  <h1>IGZO 8K Displays</h1>
                  <br />
                  <p>
                    High color reproduction and ultra-fine detail delivers a
                    display perfect for mission-critical viewability.
                  </p>
                  <p>
                    When your application relies on images that are crystal
                    clear down to the most minute detail, 8K resolution displays
                    built on{" "}
                    <a
                      href="/"
                      style={{ color: "#e61d24" }}
                      onClick={(event) =>
                        this.callFunct(event, "/igzo-technology")
                      }
                    >
                      {" "}
                      Sharp’s signature IGZO technology{" "}
                    </a>{" "}
                    deliver the goods. They’re perfect for application ranging
                    from 3D to medical to military to broadcast and more.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div tabIndex={0} className="col-sm-6">
                <div
                  tabIndex={-1}
                  style={{
                    height: "100%",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: 20,
                    }}
                  >
                    <div className="bullet">1</div>
                    <div>
                      <span className="h5">4K Quality</span>
                      <br />
                      140 ppi @ 31.5-inches
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: 20,
                    }}
                  >
                    <div className="bullet">2</div>
                    <div>
                      <span className="h5">Thin and lightweight</span>
                      <br />
                      Eliminates backlight for ease of design
                    </div>
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
                style={{ justifyContent: "center", display: "flex" }}
              >
                <Image
                  role="presentation"
                  alt="Sharp-Product-4K-Reflective-IGZO-Displays"
                  src={lcdImage1}
                  fluid
                />
              </div>
            </div> */}
            <div className="row">
              <div tabIndex={0} className="col-sm-6">
                <div
                  tabIndex={-1}
                  style={{
                    height: "100%",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: 20,
                    }}
                  >
                    <div className="bullet">1</div>
                    <div>
                      <span className="h5">8K Quality</span>
                      <br />
                      280 ppi @ 31.5-inches
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: 20,
                    }}
                  >
                    <div className="bullet">2</div>
                    <div>
                      <span className="h5">HDR Supported</span>
                      <br />
                      Direct 512 division / 100x contrast improvement
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: 20,
                    }}
                  >
                    <div className="bullet">3</div>
                    <div>
                      <span className="h5">Superb Color Reproduction</span>
                      <br />
                      Adobe RGB 100% / sRGB 100% / DCI-P3 98%
                    </div>
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
                style={{ justifyContent: "center", display: "flex" }}
              >
                <Image
                  role="presentation"
                  alt="Sharp-Product-8K-Reflective-IGZO-Displays"
                  src={lcdImage2}
                  fluid
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 50 }}>
          <div className="row container-row-85 padding-bottom-30 contact-block">
            <div className="col-md-10">
              <h5 style={{ paddingBottom: 20 }}>
                Want to talk about Sharp IGZO 8K displays for your next design?
              </h5>
              <div className="h3">Let's get in touch</div>
              <QueryForm subject="8K Display" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Product4k8k;
