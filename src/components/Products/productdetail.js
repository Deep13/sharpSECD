import React from "react";
import { Table } from "react-bootstrap";
// import mechanicalImage from "../../assets/mechanical.jpg";
import placeholderImage from "../../assets/placeholder.png";
import { Button, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
const Productdetail = (props) => {
  // console.log(props.items);
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
      style={{ height: "100%" }}
    >
      {props.items && (
        <Modal.Header closeButton>
          <div tabIndex={0}>
            <div tabIndex={-1} className="h1">
              {props.items.PN}
            </div>
          </div>
        </Modal.Header>
      )}
      {props.items && (
        <Modal.Body>
          <div>
            <div className="row padding-top-30">
              <div className="col-lg-5" style={{ padding: 10 }}>
                <Image
                  alt="Product Image"
                  className="left-fixed"
                  src={props.items.img ? props.items.img : placeholderImage}
                  fluid
                />
              </div>
              <div className="col-lg-7">
                {props.items.desc && (
                  <div tabIndex={0}>
                    <div tabIndex={-1}>{props.items.desc}</div>
                    {props.items.note && (
                      <>
                        <br />
                        <div tabIndex={-1}>{props.items.note}</div>
                      </>
                    )}
                  </div>
                )}

                <div className="padding-top-30 padding-bottom-30">
                  <Button href="#/contact" variant="outline-danger">
                    Find a Rep
                  </Button>
                </div>
                {props.items["DOCUMENTS"].length > 0 && (
                  <div>
                    <div className="titleBar">
                      <h5>Documentation</h5>
                    </div>
                    <Table striped bordered>
                      <tbody>
                        {props.items.DOCUMENTS.map((key, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <a
                                  className="redLink"
                                  // href={Pdf}
                                  href={key.link}
                                  // onClick={() => openDoc(key)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {key.name}
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                )}
                <div className="titleBar">
                  <h5>Specifications</h5>
                </div>
                <div tabIndex={0}>
                  <Table tabIndex={-1} striped bordered>
                    <tbody>
                      {Object.keys(props.items).map((key, index) => {
                        if (
                          key !== "PN" &&
                          key !== "DOCUMENTS" &&
                          key !== "desc" &&
                          key !== "img" &&
                          key !== "Applications"
                        ) {
                          return (
                            <tr key={index}>
                              <td>{key}</td>
                              <td>{props.items[key]}</td>
                            </tr>
                          );
                        }
                        return true;
                      })}
                    </tbody>
                  </Table>
                </div>
                {props.items.Applications && (
                  <div className="row">
                    <div className="col-sm-3">Applications:</div>
                    <div tabIndex={0} className="col-sm-9">
                      <div tabIndex={-1}>
                        <div>{props.items.Applications}</div>
                      </div>
                    </div>
                  </div>
                )}
                {/* {props.parent && (
                  <div className="row">
                    <div className="col-sm-3">Applications:</div>
                    <div tabIndex={0} className="col-sm-9">
                      <div tabIndex={-1}>
                        {props.parent === "ML" ? (
                          <div>
                            Advertising, ATMs, Automotive , Climate Control, Factory Automation, Gaming/Lottery, Handheld Devices, Health/Fitness/Sports, Home Automation, In-flight Entertainment, Industrial Controls, Kiosks, MedicalDevices, Multimedia, Navigation/Transportation, POS Terminals, Test and Measurement, Wearable Technology, White Goods
                          </div>
                        ) : (
                          <div>
                            Wearable Technology,Mobile Phones,Remote Controls,Performance Tracking Devices,Parking Meters,Smart Utility Meters,Medical Monitoring Devices, Wristwatches,Fish Finders,White Goods,Retail Tags,Any product with a battery
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </Modal.Body>
      )}
    </Modal>
  );
};

export default Productdetail;
