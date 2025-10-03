"use client";

import { useState } from "react";
import { Button, Form, Row, Col, Toast } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import ListSubheader from "@mui/material/ListSubheader";
import Chip from "@mui/material/Chip";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

import axios from "axios";
import { ClipLoader } from "react-spinners";

export default function QueryForm({ subject: initialSubject }) {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [showError, setErrorShow] = useState(false);
  const [showLoader, setLoaderShow] = useState(false);
  const [selectError, setSelectError] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [errorCaptchaText, setErrorCaptchaText] = useState(false);

  const [subject, setSubject] = useState([initialSubject]);
  const [human, setHuman] = useState(false);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mobileCode, setMobileCode] = useState("+1");
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setSelectError(false);
    setErrorText(false);
    setSubject(event.target.value);
  };

  const changeValue = (field, e) => {
    const value = e.currentTarget.value;
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "message") setMessage(value);
    if (field === "mobileCode") setMobileCode(value || "");
  };

  const mobileChange = (e) => {
    const value = e.currentTarget.value;
    if (/^\d*$/.test(value)) setMobile(value);
  };

  const onCaptchaChange = (value) => {
    setErrorCaptchaText(false);
    if (value) setHuman(true);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoaderShow(true);

    const form = event.currentTarget;

    if (subject.length === 0) {
      setSelectError(true);
      setErrorText(true);
      setLoaderShow(false);
      return;
    }

    if (form.checkValidity() === false) {
      setLoaderShow(false);
      event.stopPropagation();
      return;
    }

    if (!human) {
      setLoaderShow(false);
      setErrorCaptchaText(true);
      return;
    }

    try {
      const data = {
        name,
        mobile: `${mobileCode}-${mobile}`,
        email,
        message,
        subject,
      };

      await axios.post("/api/form", data);
      setShow(true);
      setName("");
      setEmail("");
      setMessage("");
      setMobile("");
      setSubject([initialSubject]);
    } catch {
      setErrorShow(true);
    } finally {
      setLoaderShow(false);
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={onSubmit}>
      {/* ✅ MUI v5 styling with sx */}
      <FormControl
        variant="outlined"
        sx={{ mt: 1, minWidth: 150, maxWidth: 550 }}
        error={selectError}
      >
        <InputLabel>Select subject</InputLabel>
        <Select
          multiple
          value={subject}
          onChange={handleChange}
          renderValue={(selected) => (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {selected.map((value) => (
                <Chip key={value} label={value} sx={{ m: 0.5 }} />
              ))}
            </div>
          )}
        >
          <MenuItem value="General query">
            <Checkbox checked={subject.includes("General query")} />
            <ListItemText primary="General query" />
          </MenuItem>
          <ListSubheader>Product</ListSubheader>
          <MenuItem value="Memory in Pixel Displays">
            <Checkbox checked={subject.includes("Memory in Pixel Displays")} />
            <ListItemText primary="Memory in Pixel Displays" />
          </MenuItem>
          <MenuItem value="ePoster Signage Display Modules">
            <Checkbox
              checked={subject.includes("ePoster Signage Display Modules")}
            />
            <ListItemText primary="ePoster Signage Display Modules" />
          </MenuItem>
          <MenuItem value="General Purpose Displays">
            <Checkbox checked={subject.includes("General Purpose Displays")} />
            <ListItemText primary="General Purpose Displays" />
          </MenuItem>
        </Select>
        {errorText && (
          <FormHelperText sx={{ color: "#a91e2c" }}>
            You need to select a subject
          </FormHelperText>
        )}
      </FormControl>

      {/* Name + Email */}
      <Row className="mt-3">
        <Col>
          <Form.Control
            required
            placeholder="Name"
            onChange={(e) => changeValue("name", e)}
            value={name}
          />
          <Form.Control.Feedback type="invalid">
            Name field cannot be empty
          </Form.Control.Feedback>
        </Col>
        <Col xs={7}>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            onChange={(e) => changeValue("email", e)}
            value={email}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email id.
          </Form.Control.Feedback>
        </Col>
      </Row>

      {/* Message */}
      <Row className="mt-3">
        <Col>
          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder="Message"
            onChange={(e) => changeValue("message", e)}
            value={message}
          />
          <Form.Control.Feedback type="invalid">
            Message field cannot be empty
          </Form.Control.Feedback>
        </Col>
      </Row>

      {/* Mobile Code + Number */}
      <Row className="mt-3">
        <Col xs={2}>
          <Form.Control
            required
            placeholder="+1"
            onChange={(e) => changeValue("mobileCode", e)}
            value={mobileCode}
          />
        </Col>
        <Col>
          <Form.Control
            required
            placeholder="Contact number"
            onChange={mobileChange}
            value={mobile}
            maxLength={10}
          />
        </Col>
      </Row>

      {/* Captcha + Submit */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <ReCAPTCHA
            sitekey="6Le5pDsaAAAAAPsR8d8cLNYBOPwLfnBE37KM4-5l"
            onChange={onCaptchaChange}
          />
          {errorCaptchaText && (
            <div style={{ color: "#a91e2c" }}>Verify you are a human</div>
          )}
          <Button type="submit" className="contact-button mt-2">
            Submit your query
          </Button>
        </div>

        <div className="d-flex align-items-center">
          {showLoader && <ClipLoader color="#e26565" size={40} />}
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Body>
              ✅ Thank You! <br /> Your query has been successfully submitted.
            </Toast.Body>
          </Toast>
          <Toast
            onClose={() => setErrorShow(false)}
            show={showError}
            delay={3000}
            autohide
          >
            <Toast.Body>❌ Unable to send your query. Try again.</Toast.Body>
          </Toast>
        </div>
      </div>
    </Form>
  );
}
