"use client";

import React from "react";
import { Card, Button } from "react-bootstrap";

const Productitem = (props) => {
  return (
    <div tabIndex={0}>
      <div tabIndex={-1} style={{ padding: "0px 0px 5px 0px" }}>
        <Card>
          <Card.Body>
            <Card.Title>
              <Button
                className="titleLink"
                style={{ color: "#e61d24", fontSize: "1.8rem", padding: 0 }}
                onClick={props.showModal}
                variant="link"
              >
                {props.item["PN"]}
              </Button>
            </Card.Title>
            <div className="row">
              <div className="col-md-6">
                <div style={{ padding: "3px" }}>
                  <span className="h6">Diagonal Size: </span>
                  {props.item["DIAGONAL SIZE"]}
                </div>
                <div style={{ padding: "3px" }}>
                  <span className="h6">Number of Colors: </span>
                  {props.item["NUMBER OF COLORS"]}
                </div>
                <div style={{ padding: "3px" }}>
                  <span className="h6">Pixel Format: </span>
                  {props.item["PIXEL FORMAT"]}
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ padding: "3px" }}>
                  <span className="h6">Operating Temperature: </span>
                  {props.item["OPERATING TEMP"]}
                </div>
                <div style={{ padding: "3px" }}>
                  <span className="h6">Image Hold Power (Typ.): </span>
                  {props.item["Image Hold Power (Typ.)"]}
                </div>
                <div style={{ padding: "3px" }}>
                  <span className="h6">1Hz Update Power (Typ.): </span>
                  {props.item["1Hz Update Power (Typ.)"]}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Productitem;
