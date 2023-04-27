import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class FullHeightDivWithImageRight extends Component {
  render() {
    const color = "black";
    return (
      <div className="row" style={{ backgroundColor: this.props.bg }}>
        <div tabIndex={0} className="col-md-6" style={{ padding: 0 }}>
          <div
            tabIndex={-1}
            style={{ height: "100%" }}
            // data-aos="slide-right"
            // data-aos-offset="-100"
            // data-aos-delay="0"
            // data-aos-duration="1000"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="true"
            // data-aos-anchor-placement="top-center"
          >
            <div className="centerAlignDiv">
              <Card
                text={color}
                style={{
                  backgroundColor: this.props.bg,
                  border: "none",
                }}
              >
                <Card.Body style={{ padding: "60px", textAlign: "left" }}>
                  <Card.Title style={{ textAlign: "left", fontSize: "2.5rem" }}>
                    {this.props.content.title}
                  </Card.Title>
                  {this.props.children}
                  <Button
                    size="lg"
                    variant="outline-danger"
                    href={this.props.link}
                    aria-label={"learn-more-" + this.props.content.title}
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div
          className="col-md-6"
          // data-aos="slide-left"
          // data-aos-offset="-100"
          // data-aos-delay="0"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-out"
          // data-aos-mirror="true"
          // data-aos-once="true"
          // data-aos-anchor-placement="top-center"
          style={{ padding: 0 }}
        >
          <div className="centerAlignDiv">
            <img
              alt={this.props.alt}
              role="presentation"
              style={{ width: "100%", paddingBlock: 30 }}
              text={color}
              src={this.props.image}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FullHeightDivWithImageRight;
