"use client";

import React from "react";
import { Table, Button, Image, Modal } from "react-bootstrap";
import placeholderImage from "@/assets/placeholder.png";

const ProductDetail = ({ show, handleClose, items }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
      style={{ height: "100%" }}
    >
      {items && (
        <Modal.Header closeButton>
          <div tabIndex={0}>
            <div tabIndex={-1} className="h1">
              {items.PN}
            </div>
          </div>
        </Modal.Header>
      )}

      {items && (
        <Modal.Body>
          <div className="row padding-top-30">
            <div className="col-lg-5" style={{ padding: 10 }}>
              {items.img.map((val, index) => (
                <Image
                  key={index}
                  alt={`Product Image ${index + 1}`}
                  src={val ? val : placeholderImage}
                  fluid
                />
              ))}
            </div>

            <div className="col-lg-7">
              {items.desc && (
                <div tabIndex={0}>
                  <div tabIndex={-1}>{items.desc}</div>
                  {items.note && (
                    <>
                      <br />
                      <div tabIndex={-1}>{items.note}</div>
                    </>
                  )}
                </div>
              )}

              <div className="padding-top-30 padding-bottom-30">
                <Button href="#/contact" variant="outline-danger">
                  Find a Rep
                </Button>
              </div>

              {items.DOCUMENTS.length > 0 && (
                <div>
                  <div className="titleBar">
                    <h5>Documentation</h5>
                  </div>
                  <Table striped bordered>
                    <tbody>
                      {items.DOCUMENTS.map((doc, index) => (
                        <tr key={index}>
                          <td>
                            <a
                              className="redLink"
                              href={doc.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {doc.name}
                            </a>
                          </td>
                        </tr>
                      ))}
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
                    {Object.keys(items).map((key, index) => {
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
                            <td>{items[key]}</td>
                          </tr>
                        );
                      }
                      return null;
                    })}
                  </tbody>
                </Table>
              </div>

              {items.Applications && (
                <div className="row">
                  <div className="col-sm-3" style={{ paddingRight: 0 }}>
                    Applications:
                  </div>
                  <div tabIndex={0} className="col-sm-9">
                    <div tabIndex={-1}>{items.Applications}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
      )}
    </Modal>
  );
};

export default ProductDetail;
