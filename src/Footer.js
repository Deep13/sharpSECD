import React, { Component } from "react";
import logo from "./assets/Sharp-Logo.png";
import { Link } from "react-router-dom";

// import Badge from '@material-ui/core/Badge';
// import MailIcon from '@material-ui/icons/Mail';
// import { Navbar, Nav } from "react-bootstrap";

class Footer extends Component {
  // componentDidMount() {
  //   console.log(window.location.hash + window.location.search);
  // }
  callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = link;
    // history.push(link);
    // alert(text);
  };
  render() {
    return (
      <div
        role="contentinfo"
        className="row"
        style={{
          backgroundColor: "black",
          padding: 50,
          margin: 0,
        }}
      >
        <div
          className="col-md-3"
          style={{
            display: "flex",
            fontSize: "0.8rem",
          }}
        >
          <div style={{ color: "white" }}>
            <img
              className="footer-logo"
              alt="SHARP Logo"
              src={logo}
              style={{ width: 200 }}
            />

            <div style={{ marginLeft: 10 }}>
              Sharp Electronics Corporation, Device Division
              <br />
              <span>100 Paragon Drive</span>
              <br />
              <span>Montvale, New Jersey 07645</span>
            </div>
          </div>
        </div>
        <div
          className="col-md-3"
          style={{
            fontSize: "0.8rem",
          }}
        >
          <span style={{ fontSize: "2em", color: "white" }}>Products</span>
          <br />
          <p
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "0.8rem",
              marginBottom: 0,
            }}
          >
            Memory in Pixel LCDs
          </p>
          <div
            style={{ marginLeft: 10, display: "flex", flexDirection: "column" }}
          >
            <Link
              to="/MemoryInPixel"
              style={{ color: "white" }}
              onClick={(event) => this.callFunct(event, "/MemoryInPixel")}
            >
              Overview
            </Link>
            <Link
              to="/memory-in-pixel-lcds-product"
              style={{ color: "white" }}
              onClick={(event) =>
                this.callFunct(event, "/memory-in-pixel-lcds-product")
              }
            >
              Find a Product
            </Link>
            <Link
              to="/memory-in-pixel-lcds-technology"
              style={{ color: "white" }}
              onClick={(event) =>
                this.callFunct(event, "/memory-in-pixel-lcds-technology")
              }
            >
              Technology
            </Link>
          </div>
          <p
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "0.8rem",
              marginBottom: 0,
            }}
          >
            ePoster Display Modules
          </p>
          <div
            style={{ marginLeft: 10, display: "flex", flexDirection: "column" }}
          >
            <Link
              to="/eposters-displays"
              style={{ color: "white" }}
              onClick={(event) => this.callFunct(event, "/eposters-displays")}
            >
              Overview
            </Link>
          </div>
          <p
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "0.8rem",
              marginBottom: 0,
            }}
          >
            General Purpose LCDs
          </p>
          <div
            style={{ marginLeft: 10, display: "flex", flexDirection: "column" }}
          >
            <Link
              to="/industrial-lcds-product"
              style={{ color: "white" }}
              onClick={(event) =>
                this.callFunct(event, "/industrial-lcds-product")
              }
            >
              Find a Product
            </Link>
          </div>
        </div>
        <div
          className="col-md-3"
          style={{
            fontSize: "0.8rem",
          }}
        >
          <span style={{ fontSize: "2em", color: "white" }}>About Sharp</span>
          <br />
          <Link
            to="/news"
            style={{ color: "white" }}
            onClick={(event) => this.callFunct(event, "/news")}
          >
            News
          </Link>
        </div>
        <div
          className="col-md-3"
          style={{
            fontSize: "0.8rem",
          }}
        >
          <Link
            to="/contact"
            style={{ color: "white", fontSize: "2em" }}
            onClick={(event) => this.callFunct(event, "/contact")}
          >
            Contact
          </Link>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            variant="link"
            href="http://www.sharpusa.com/TermsAndConditions.aspx"
            style={{ color: "white" }}
          >
            Terms & Condition
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            variant="link"
            href="https://policies.sharpusa.com/Privacy"
            style={{ color: "white" }}
          >
            Privacy Policy
          </a>
        </div>
      </div>
      // <div style={{ backgroundColor: "black" }}>
      //   <Navbar>
      //     <Nav className="mr-auto ">
      //       <div
      //         className="mr-auto"
      //         style={{
      //           backgroundColor: "black",
      //           padding: 6,
      //           display: "flex",
      //           fontSize: "0.8rem",
      //         }}
      //       >
      //         <div style={{ color: "white" }}>
      //           Sharp Electronics Corporation Device Division
      //           <br />
      //           <span>
      //             201 NE Park Plaza Drive Suite 167 Vancouver, WA 98684
      //           </span>
      //         </div>
      //       </div>
      //     </Nav>
      //     <div>
      //       <Button
      //         target="_blank"
      //         variant="link"
      //         style={{
      //           color: "white",
      //           width: 250,
      //           fontSize: "0.8rem",
      //           textAlign: "right",
      //           padding: 0,
      //         }}
      //         href="http://www.sharpusa.com/TermsAndConditions.aspx"
      //       >
      //         Terms & Condition
      //       </Button>
      //       <br />
      //       <Button
      //         target="_blank"
      //         variant="link"
      //         style={{
      //           color: "white",
      //           width: 250,
      //           fontSize: "0.8rem",
      //           textAlign: "right",
      //           padding: 0,
      //           paddingBottom: 10,
      //         }}
      //         href="https://policies.sharpusa.com/Privacy"
      //       >
      //         Privacy Policy
      //       </Button>
      //     </div>
      //   </Navbar>
      // </div>
    );
  }
}

export default Footer;
