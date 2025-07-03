import React, { Component } from "react";
import Footer from "../Footer";
import QueryForm from "./QueryForm";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import LanguageIcon from "@material-ui/icons/Language";
import RoomIcon from "@material-ui/icons/Room";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import contact_data from "../json/buy";
import "react-svg-map/lib/index.css";
import $ from "jquery";
import Mapsvg from "./Mapsvg";
import { Helmet } from "react-helmet";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAreaCode: null,
      selectedAreaTitle: "",
      previous: null,
    };
  }
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
    const that = this;
    $(".mapsvg-region").click(function (e) {
      $(this).addClass("path-circle-active");
      if (that.state.previous) {
        that.state.previous.removeClass("path-circle-active");
      }
      that.setState({ previous: $(this) });
      that.setArea($(this).data("info"));
    });

    $(".mapsvg-region").hover(function (e) {
      that.setState({ selectedAreaTitle: $(this).data("title") });
    });

    $(".mapsvg-region").mouseout(function (e) {
      that.setState({ selectedAreaTitle: "" });
    });

    $(document).ready(function (e) {
      $("#CA_NU").addClass("path-circle-active");
    });
  }
  setArea = (val) => {
    // alert(val);
    this.setState({ selectedAreaCode: val });
    // $("#" + val).className += " path-circle-active";
  };
  showDetails = (event, title) => {
    event.preventDefault();
    this.setState({ selectedAreaCode: title });
  };
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact Us - Sharp</title>
          <meta
            name="description"
            content="Contact Sharp today about the perfect display module solution for your next product."
          />
        </Helmet>
        <div className="row container-row-85">
          <div
            className="col-sm-12"
            style={{ paddingTop: 40, paddingBottom: 40 }}
          >
            <div>
              <h1>Contact Us</h1>

              {/* <span className="h6">
                Need to find a Sharp Representative in YOUR region?
                <br /> Please visit our Where to Buy page to search by state.
              </span> */}
            </div>
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-lg-6" style={{ width: "100%" }}>
                <div style={{ fontSize: "2rem", minHeight: "50px" }}>
                  {this.state.selectedAreaTitle}
                </div>
                <Mapsvg />
                <div className="h3" style={{ textAlign: "center" }}>
                  Click on the Map to Find a Local Authorized Sales Representative
                  <br />
                  <span className="h5">
                    For inquiries from
                    <a
                      href="/"
                      style={{ color: "#a91e2c" }}
                      onClick={(event) => this.showDetails(event, "CA-CA")}
                    >
                      {" "}
                      Canada{" "}
                    </a>
                    ,
                    <a
                      href="/"
                      style={{ color: "#a91e2c" }}
                      onClick={(event) => this.showDetails(event, "MX-MX")}
                    >
                      {" "}
                      Mexico{" "}
                    </a>
                    or
                    <a
                      href="/"
                      style={{ color: "#a91e2c" }}
                      onClick={(event) => this.showDetails(event, "PR-PR")}
                    >
                      {" "}
                      Puerto Rico{" "}
                    </a>
                  </span>
                </div>
              </div>
              <div
                className="col-lg-6"
                style={{
                  padding: 10,
                  paddingTop: 50,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {this.state.selectedAreaCode === null ? (
                  <div style={{ fontSize: "3rem", textAlign: "center" }}></div>
                ) : this.state.selectedAreaCode in contact_data ? (
                  <div
                    style={{
                      padding: 20,
                      borderRadius: 10,
                      width: "100%",
                      boxShadow: "2px 2px 14px 0px #888888",
                    }}
                  >
                    {contact_data[this.state.selectedAreaCode].map(
                      (item, index) => {
                        return (
                          <div>
                            {index !== 0 && (
                              <div style={{ padding: "20px 0" }}>
                                <Divider
                                  style={{ height: 1 }}
                                  minHeight={1}
                                  orientation="horizontal"
                                  flexItem
                                />
                              </div>
                            )}
                            <div
                              className="h2 color-red"
                              style={{
                                display: "flex",
                                alignItems: "baseline",
                              }}
                            >
                              {item.title}
                            </div>
                            <div>
                              <div className="h4 color-red">{item.company}</div>
                              <div className="row" style={{ paddingTop: 30 }}>
                                <div className="col-sm-4">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "start",
                                    }}
                                  >
                                    <div>
                                      <LanguageIcon
                                        style={{
                                          fontSize: 40,
                                          paddingRight: 10,
                                        }}
                                        className="color-red no-hover"
                                      />
                                    </div>
                                    <div>
                                      <div className="sub-item">
                                        <div
                                          style={{
                                            fontWeight: "bold",
                                            color: "grey",
                                            fontSize: "1.2rem",
                                          }}
                                        >
                                          Visit Us
                                        </div>
                                        {item.website !== "" ? (
                                          <Link
                                            target="_blank"
                                            rel="noreferrer"
                                            className="sub-text"
                                            color="inherit"
                                            href={"https://" + item.website}
                                          >
                                            {item.website}
                                          </Link>
                                        ) : (
                                          "NA"
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Divider orientation="vertical" flexItem />
                                <div className="col-sm-3">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "start",
                                    }}
                                  >
                                    <div>
                                      <PhonelinkRingIcon
                                        style={{
                                          fontSize: 40,
                                          paddingRight: 10,
                                        }}
                                        className="color-red no-hover"
                                      />
                                    </div>
                                    <div>
                                      <div className="sub-item">
                                        <div
                                          style={{
                                            fontWeight: "bold",
                                            color: "grey",
                                            fontSize: "1.2rem",
                                          }}
                                        >
                                          Call Us
                                        </div>
                                        <Link
                                          target="_blank"
                                          rel="noreferrer"
                                          className="sub-text"
                                          color="inherit"
                                          href={"tel:" + item.phone}
                                        >
                                          {item.phone}
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Divider orientation="vertical" flexItem />
                                <div className="col-sm-4">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "start",
                                    }}
                                  >
                                    <div>
                                      <RoomIcon
                                        style={{
                                          fontSize: 40,
                                          paddingRight: 10,
                                        }}
                                        className="color-red no-hover"
                                      />
                                    </div>
                                    <div>
                                      <div className="sub-item">
                                        <div
                                          style={{
                                            fontWeight: "bold",
                                            color: "grey",
                                            fontSize: "1.2rem",
                                          }}
                                        >
                                          Contact Us
                                        </div>
                                        <Link
                                          target="_blank"
                                          rel="noreferrer"
                                          className="sub-text"
                                          color="inherit"
                                          href={"mailto:" + item.email}
                                        >
                                          {item.email}
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                ) : (
                  <div
                    style={{
                      fontSize: "3rem",
                      textAlign: "center",
                      color: "#e21d24",
                    }}
                  >
                    We don't have an office here currently.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row container-row-85 padding-bottom-30 contact-block">
          <div className="col-md-8">
            <div role="main" id="main-content" tabIndex={0} className="h3">
              Let's get in touch
            </div>
            <QueryForm subject="General query" />
          </div>
          <div tabIndex={0} className="col-md-4" style={{ padding: 0 }}>
            <div tabIndex={-1} style={{ height: "100%", padding: 10 }}>
              <div className="h3">Contact a SHARP Expert</div>
              <div>
                <p>
                  If you have questions about our products, solutions and
                  services, we’re happy to help. Please fill in the contact form
                  and we’ll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Contact;
