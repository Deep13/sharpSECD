import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class FullHeightDivWithImageLeft extends Component {
  render() {
    const color = "black";
    return (
      <div className="row">
        <div
          className="col-md-6"
          data-aos="slide-right"
          data-aos-offset="-100"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          style={{ padding: 0 }}
        >
          <div className="centerAlignDiv">
            <img
              alt={this.props.alt}
              style={{ width: "100%" }}
              text={color}
              src={this.props.image}
              role="presentation"
            />
          </div>
        </div>
        <div tabIndex={0} className="col-md-6" style={{ padding: 0 }}>
          <div
            tabIndex={-1}
            style={{ height: "100%" }}
            data-aos="slide-left"
            data-aos-offset="-100"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <div className="centerAlignDiv">
              <Card
                text={color}
                style={{
                  backgroundColor: "white",
                  border: "none",
                }}
              >
                <Card.Body style={{ padding: "3rem", textAlign: "center" }}>
                  <Card.Title style={{ textAlign: "center", fontSize: "3rem" }}>
                    {this.props.content.title}
                  </Card.Title>
                  {this.props.children}
                  <Button
                    aria-label={"learn-more-" + this.props.content.title}
                    href={this.props.link}
                    size="lg"
                    variant="outline-danger"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullHeightDivWithImageLeft;
