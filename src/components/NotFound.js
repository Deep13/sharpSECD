import React, { Component } from "react";
import Footer from "../Footer";
import { Button } from "react-bootstrap";
import logo from "../logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();
class NotFound extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            minHeight: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            color: "#e61e25",
            flexDirection: "column",
          }}
        >
          <img alt="SHARP Logo" style={{ width: "50%" }} src={logo} />
          <span>Page Not Found</span>
          <Button
            variant="link"
            as={Link}
            to="/"
            style={{
              textDecoration: "none",
              color: "#e61d24",
              cursor: "pointer",
            }}
          >
            <h6>Go to Home -&gt;</h6>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
