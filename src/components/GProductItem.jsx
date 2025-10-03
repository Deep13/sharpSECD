"use client";
import React from "react";
import { Card, Button } from "react-bootstrap";

const GPProductItem = ({ item, showModal }) => {
  return (
    <div tabIndex={0}>
      <div tabIndex={-1} style={{ padding: "0px 0px 5px 0px" }}>
        <Card>
          <Card.Body>
            <Card.Title>
              <Button
                className="titleLink"
                style={{ color: "#e61d24", fontSize: "1.8rem", padding: 0 }}
                onClick={showModal}
                variant="link"
              >
                {item["PN"]}
              </Button>
            </Card.Title>
            <div className="row">
              <div className="col-md-6">
                <div style={{ padding: "3px" }}>
                  <span className="h6">Diagonal Size: </span>
                  {item["DIAGONAL SIZE"]}
                </div>
                <div style={{ padding: "3px" }}>
                  <span className="h6">Number of Colors: </span>
                  {item["NUMBER OF COLORS"]}
                </div>
                <div style={{ padding: "3px" }}>
                  <span className="h6">Pixel Format: </span>
                  {item["PIXEL FORMAT"]}
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ padding: "3px" }}>
                  <span className="h6">Operating Temperature: </span>
                  {item["OPERATING TEMP"]}
                </div>
                <div style={{ padding: "3px" }}>
                  <span className="h6">Storage Temperature: </span>
                  {item["STORAGE TEMP"]}
                </div>
                <div style={{ padding: "3px" }}>
                  <span className="h6">Brightness: </span>
                  {item["BRIGHTNESS"]}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default GPProductItem;
