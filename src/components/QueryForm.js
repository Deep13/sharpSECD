import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form1 from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ReCAPTCHA from "react-google-recaptcha";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import Chip from "@material-ui/core/Chip";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import Toast from "react-bootstrap/Toast";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: 10,
    minWidth: 150,
    maxWidth: 550,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

export default function QueryForm(props) {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [showError, setErrorShow] = useState(false);
  const [showLoader, setLoaderShow] = useState(false);
  const [selectError, setselectError] = useState(false);
  const [errorText, seterrorText] = useState(false);
  const [errorCaptchaText, seterrorCaptchaText] = useState(false);
  const classes = useStyles();
  const [subject, setsubject] = React.useState([props.subject]);
  // console.log(props.subject);
  const handleChange = (event) => {
    setselectError(false);
    seterrorText(false);
    setsubject(event.target.value);
  };
  // const handleChangeMultiple = (event) => {
  //   const { options } = event.target;
  //   var value = [];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       value.push(options[i].value);
  //     }
  //   }
  //   if (value.length === 0) {
  //     value = ["General query"];
  //   }
  //   setsubject(value);
  // };
  const [human, setHuman] = useState(false);
  const [mobile, setmobile] = useState("");
  const [name, setname] = useState("");
  const [message, setmessage] = useState("");
  const [mobileCode, setmobileCode] = useState("+1");
  const [email, setemail] = useState("");
  const changeValue = (field, value) => {
    // console.log(field, value);
    switch (field) {
      case "name":
        setname(value.currentTarget.value);
        break;
      case "email":
        setemail(value.currentTarget.value);
        break;
      case "message":
        setmessage(value.currentTarget.value);
        break;
      case "mobileCode":
        var values = value.currentTarget.value;
        // var mobCode = /^\d+$/;
        if (values !== "") {
          // if (mobCode.test(values)) {
          setmobileCode(value.currentTarget.value);
          // }
        } else {
          setmobileCode("");
        }
        break;
    }
  };
  const mobileChange = (value) => {
    // debugger;
    // console.log(value);
    var values = value.currentTarget.value;
    var phoneno = /^\d+$/;
    if (values !== "") {
      if (phoneno.test(values)) {
        setmobile(value.currentTarget.value);
      }
    } else {
      setmobile("");
    }
  };
  const onChange = (value) => {
    //console.log("Captcha value:", value);
    seterrorCaptchaText(false);
    if (value) {
      setHuman(true);
      // seterrorCaptchaText(true);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setLoaderShow(true);
    //console.log(name, email, message, mobileCode, mobile, subject);
    const form = event.currentTarget;
    if (subject.length === 0) {
      setselectError(true);
      seterrorText(true);
      setLoaderShow(false);
    }
    if (form.checkValidity() === false) {
      // event.preventDefault();
      setLoaderShow(false);
      event.stopPropagation();
    } else {
      if (human) {
        let data = {
          name: name,
          mobile: mobileCode + "-" + mobile,
          email: email,
          message: message,
          subject: subject,
        };
        axios
          .post("/api/form", data)
          .then((res) => {
            setShow(true);
            setLoaderShow(false);
          })
          .catch(() => {
            setErrorShow(true);
            setLoaderShow(false);
          });
      } else {
        setLoaderShow(false);
        seterrorCaptchaText(true);
      }
    }

    setValidated(true);
  };
  return (
    <div>
      <Form1 noValidate validated={validated} onSubmit={onSubmit}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Select subject</InputLabel>
          <Select
            role="group"
            aria-label="Select subject"
            // menuPlacement="auto"
            MenuProps={{ variant: "menu" }}
            multiple
            // bluronselect
            error={selectError}
            value={subject}
            onChange={handleChange}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            label="Select subject"
          >
            <MenuItem key={"General query"} value={"General query"}>
              <Checkbox checked={subject.indexOf("General query") > -1} />
              <ListItemText primary={"General query"} />
            </MenuItem>
            <ListSubheader>Product</ListSubheader>
            <MenuItem key={"R-IGZO Displays"} value={"R-IGZO Displays"}>
              <Checkbox checked={subject.indexOf("R-IGZO Displays") > -1} />
              <ListItemText primary={"R-IGZO Displays"} />
            </MenuItem>
            {/* <MenuItem key={"8K Display"} value={"8K Display"}>
              <Checkbox checked={subject.indexOf("8K Display") > -1} />
              <ListItemText primary={"8K Display"} />
            </MenuItem> */}
            <MenuItem
              key={"Custom Camera Module"}
              value={"Custom Camera Module"}
            >
              <Checkbox
                checked={subject.indexOf("Custom Camera Module") > -1}
              />
              <ListItemText primary={"Custom Camera Module"} />
            </MenuItem>
            {/* <MenuItem value={"8K Display"}>8K Display</MenuItem>
            <MenuItem value={"Custom Camera Module"}>
              Custom Camera Module
            </MenuItem> */}
          </Select>
          {errorText && (
            <FormHelperText style={{ marginLeft: 0, color: "#a91e2c" }}>
              You need to select a subject
            </FormHelperText>
          )}
        </FormControl>
        <Form1.Row>
          <Col>
            <Form1.Control
              aria-required={true}
              aria-label="Name"
              required
              placeholder="Name"
              onChange={(event) => changeValue("name", event)}
              value={name}
            />
            <Form1.Control.Feedback type="invalid">
              Name field cannot be empty
            </Form1.Control.Feedback>
          </Col>
          <Col xs={7}>
            <Form1.Control
              aria-label="Email"
              placeholder="Email"
              aria-required={true}
              required
              type="email"
              onChange={(event) => changeValue("email", event)}
              value={email}
            />
            <Form1.Control.Feedback type="invalid">
              Please provide a valid email id.
            </Form1.Control.Feedback>
            {/* <Form1.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form1.Text> */}
          </Col>
        </Form1.Row>
        <Form1.Row>
          <Col>
            <Form1.Control
              aria-label="Message"
              aria-required={true}
              required
              as="textarea"
              rows="3"
              placeholder="Message"
              onChange={(event) => changeValue("message", event)}
              value={message}
            />
            <Form1.Control.Feedback type="invalid">
              Message field cannot be empty
            </Form1.Control.Feedback>
          </Col>
        </Form1.Row>
        <Form1.Row>
          <Col>
            <Form1.Control
              aria-label="Country Code"
              placeholder="+1"
              aria-required={true}
              required
              onChange={(event) => changeValue("mobileCode", event)}
              value={mobileCode}
            />
            <Form1.Control.Feedback type="invalid">
              Country code field cannot be empty
            </Form1.Control.Feedback>
          </Col>
          <Col xs={10}>
            <Form1.Control
              aria-label="Contact Number"
              placeholder="Contact number"
              aria-required={true}
              required
              onChange={mobileChange}
              // type="number"
              value={mobile}
              maxLength={10}
            />
            <Form1.Control.Feedback type="invalid">
              Phone number field cannot be empty
            </Form1.Control.Feedback>
          </Col>
        </Form1.Row>
        <div
          className="row"
          style={{ justifyContent: "space-between", padding: "0px 15px" }}
        >
          <div>
            <ReCAPTCHA
              sitekey="6Le5pDsaAAAAAPsR8d8cLNYBOPwLfnBE37KM4-5l"
              onChange={onChange}
            />
            {errorCaptchaText && (
              <div style={{ marginLeft: 0, color: "#a91e2c" }}>
                Verify you are a human
              </div>
            )}
            <Button
              aria-label="Submit Form Button"
              style={{ marginTop: 10 }}
              className="contact-button"
              variant="primary"
              type="submit"
            >
              Submit your query
            </Button>
          </div>
          <div>
            <Loader
              type="TailSpin"
              color="#e26565"
              height={50}
              width={50}
              timeout={0} //3 secs
              visible={showLoader}
              style={{ margin: "10px" }}
            />
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
              className="toastSuccess"
              // transition="Fade"
            >
              <Toast.Body>
                Thank You! <br /> Your query has been successfully submitted.
              </Toast.Body>
            </Toast>
            <Toast
              onClose={() => setErrorShow(false)}
              show={showError}
              delay={3000}
              autohide
              className="toastError"
              // transition="Fade"
            >
              {/* <Toast.Header>
              <strong className="mr-auto">Success</strong>
            </Toast.Header> */}
              <Toast.Body>
                Unable to send your query. <br /> Try again
              </Toast.Body>
            </Toast>
          </div>
        </div>
      </Form1>
    </div>
  );
}
