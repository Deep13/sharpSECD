import React, { Component } from "react";
import logo from "./assets/Sharp-Logo.png";

// import Badge from '@material-ui/core/Badge';
// import MailIcon from '@material-ui/icons/Mail';
// import { Navbar, Nav } from "react-bootstrap";

class Footer extends Component {
  // componentDidMount() {
  //   console.log(window.location.hash + window.location.search);
  // }
  callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = "#" + link;
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
            <img alt="SHARP Logo" src={logo} style={{ width: 200 }} />
            <br />
            Sharp Electronics Corporation Device Division
            <br />
            <span>201 NE Park Plaza Drive Suite 167 Vancouver, WA 98684</span>
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
          <a
            href="/"
            style={{ color: "white" }}
            onClick={(event) =>
              this.callFunct(event, "/memory-in-pixel-lcds-product")
            }
          >
            Memory in Pixel LCDs
          </a>
          <br />
          <a
            href="/"
            style={{ color: "white" }}
            onClick={(event) =>
              this.callFunct(event, "/reflective-igzo-displays-product")
            }
          >
            Reflective IGZO Displays
          </a>
          <br />
          <a
            href="/"
            style={{ color: "white" }}
            onClick={(event) =>
              this.callFunct(event, "/industrial-lcds-product")
            }
          >
            General Purpose LCDs
          </a>
          <br />
          <a
            href="/"
            style={{ color: "white" }}
            onClick={(event) =>
              this.callFunct(event, "/custom-camera-modules-product")
            }
          >
            Custom Camera Modules
          </a>
          <br />
        </div>
        <div
          className="col-md-3"
          style={{
            fontSize: "0.8rem",
          }}
        >
          <span style={{ fontSize: "2em", color: "white" }}>Technologies</span>
          <br />
          <a
            href="/"
            style={{ color: "white" }}
            onClick={(event) =>
              this.callFunct(event, "/memory-in-pixel-lcds-technology")
            }
          >
            Memory in Pixel
          </a>
          <br />
          <a
            href="/"
            style={{ color: "white" }}
            onClick={(event) =>
              this.callFunct(event, "/reflective-igzo-technology")
            }
          >
            Reflective IGZO
          </a>
          <br />
          <a
            href="/"
            style={{ color: "white" }}
            onClick={(event) => this.callFunct(event, "/igzo-technology")}
          >
            IGZO
          </a>
        </div>
        <div
          className="col-md-3"
          style={{
            fontSize: "0.8rem",
          }}
        >
          <a
            href="/"
            style={{ color: "white", fontSize: "2em" }}
            onClick={(event) => this.callFunct(event, "/contact")}
          >
            Contact
          </a>
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
