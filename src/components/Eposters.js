import React, { Component } from "react";
import redback from "../assets/eposters/SHARP_red.jpg";
import cycle from "../assets/eposters/desktop_overlay.jpg";
import Mountain_Biker from "../assets/eposters/Mountain_Biker.jpg";
import mountain_mobile from "../assets/eposters/mountain_mobile.jpg";
import Escalator from "../assets/eposters/Escalator.jpg";
import Travel from "../assets/eposters/Travel.jpg";
import Earth from "../assets/eposters/Earth.jpg";
import Low from "../assets/eposters/Low.jpg";
import eposter from "../assets/eposters/eposter.png";
import ePosterMobile from "../assets/eposters/ePosterMobile.jpg";
import Zero from "../assets/eposters/Zero.jpg";
import Airport from "../assets/eposters/Airport.jpg";
import SHARPLogo from "../assets/SHARP_logo_white.png";
import arrow from "../assets/arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import Form1 from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import axios from "axios";
AOS.init();
// import { Button, Form, FormControl, Table } from "react-bootstrap";

class Eposters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            mobileCode: "",
            mobile: null,
            email: null,
            message: null,
            show: false,
            showLoader: false,
            submit: false,
            showError: false,
            demo: false,
        };
        this.myRef = React.createRef();
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            showLoader: true,
            show: false,
        });
        let data = {
            name: this.state.name,
            mobile: this.state.mobileCode + "-" + this.state.mobile,
            email: this.state.email,
            message: this.state.message,
            subject: ["ePoster"],
        };
        axios
            .post("/api/form", data)
            .then((res) => {
                this.setState({ showLoader: false, show: true });
                this.setState({
                    name: "",
                    mobileCode: "",
                    mobile: "",
                    email: "",
                    message: "",
                    submit: true,
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    showLoader: false,
                    show: false,
                    showError: true,
                    submit: false,
                });
            });
    };
    componentDidMount() {
        window.scrollTo({ top: 0, behavior: "auto" });
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>Sharp SECD Eposters - Sharp</title>
                    <meta
                        name="description"
                        content="Visit the Sharp SECD Eposters page"
                    />
                </Helmet>
                <div
                    className="row"
                    style={{ width: "100%", margin: 0 }}
                >
                    <div
                        id="main-content"
                        role="main"
                        tabIndex={0}
                        style={{ padding: 0, backgroundImage: `url(${redback})`, width: "100%", textAlign: 'center', backgroundPosition: "center" }}
                    >
                        <img
                            className="mob-width-300"
                            src={SHARPLogo}
                            role="presentation"
                            alt="Control Sales Logo"
                        />
                    </div>
                    <img
                        className="hide-on-mobile"
                        src={cycle}
                        style={{ width: '100%' }}
                        role="presentation"
                        alt="Control Sales Logo"
                    />

                    <div
                        className="signage-section"
                        tabIndex={0}
                        style={{ backgroundImage: `url(${redback})`, width: "100%", textAlign: 'center', backgroundPosition: "center" }}
                    >
                        <img
                            className="show-on-mobile"
                            src={ePosterMobile}
                            style={{ width: '100%' }}
                            role="presentation"
                            alt="Control Sales Logo"
                        />
                        <h1 style={{ color: "white", fontWeight: 'bold' }}>Say Goodbye to Paper <br />
                            Signage. </h1>
                        <img
                            role="presentation"
                            alt="arrow"
                            src={arrow}
                            style={{ maxWidth: "50px", paddingTop: 30 }}
                        />
                    </div>
                    <div
                        className="meet-section"
                        tabIndex={0}
                        style={{ width: "100%", textAlign: 'center', backgroundPosition: "center", display: "flex", flexDirection: 'column', alignItems: "center" }}
                    >
                        <h2 >
                            <strong>Meet your new, zero-power paperless<br />
                                solution for A2 posters.</strong>
                        </h2>
                        <p style={{ maxWidth: 1120, marginTop: 20 }}>
                            Paper A2 posters are now a thing of the past. The future of lowpower digital signage displays is here. Sharp and E-Ink bring you
                            the world's first electronic A2 poster solution.
                        </p>
                    </div>
                    <div
                        className="biker-section"
                        tabIndex={0}
                        style={{ width: "100%", textAlign: 'left', backgroundPosition: "top" }}
                    >
                        <img
                            className="show-on-mobile"
                            src={mountain_mobile}
                            style={{ width: '100%' }}
                            role="presentation"
                            alt="Control Sales Logo"
                        />
                        <h2 >
                            <strong>Applications Include:</strong>
                        </h2>
                        <ul >
                            <li>Transportation</li>
                            <li>Cinema</li>
                            <li>Retail Stores</li>
                            <li>Public Buildings</li>
                            <li>Wayfinding</li>
                            <li>Lobbies</li>
                            <li>Display Advertising</li>
                            <li>And more </li>
                        </ul>
                    </div>
                    <div
                        className="row"
                        tabIndex={0}
                        style={{ padding: 0, background: "#c6c7d4", width: "100%", textAlign: 'left', backgroundPosition: "top", padding: "80px 50px", marginLeft: 0 }}
                    >
                        <div className="col-lg-4" style={{ padding: "20px 20px" }}>
                            <img
                                src={Escalator}
                                style={{ height: '100%', width: "100%" }}
                                role="presentation"
                                alt="Control Sales Logo"
                            />
                        </div>
                        <div className="col-lg-4" style={{ padding: "20px 20px" }}>
                            <img
                                src={Travel}
                                style={{ height: '100%', width: "100%" }}
                                role="presentation"
                                alt="Control Sales Logo"
                            />
                        </div>
                        <div className="col-lg-4" style={{ padding: "20px 20px" }}>
                            <img
                                src={Airport}
                                style={{ height: '100%', width: "100%" }}
                                role="presentation"
                                alt="Control Sales Logo"
                            />
                        </div>
                    </div>
                    <div
                        className="green-section"
                        tabIndex={0}
                        style={{ width: "100%", textAlign: 'center', backgroundPosition: "center", display: "flex", flexDirection: 'column', alignItems: "center" }}
                    >
                        <h2 >
                            <strong>The first truly green A2 Poster solution on the<br />
                                market</strong>
                        </h2>
                        <div
                            className="row"
                            tabIndex={0}
                            style={{ width: "100%", textAlign: 'left', marginTop: 30, paddingBottom: 20 }}
                        >
                            <div className="col-lg-4" style={{ textAlign: "center" }}>
                                <img
                                    src={Zero}
                                    style={{ width: 200 }}
                                    role="presentation"
                                    alt="Control Sales Logo"
                                />
                                <h3 style={{ fontWeight: "bold" }}>ZERO POWER</h3>
                                <p style={{ fontWeight: 500 }}>Spectra6 technology enables zero-power operation while maintaining an image. </p>
                            </div>
                            <div className="col-lg-4" style={{ textAlign: "center" }}>
                                <img
                                    src={Earth}
                                    style={{ width: 200 }}
                                    role="presentation"
                                    alt="Control Sales Logo"
                                />
                                <h3 style={{ fontWeight: "bold" }}>EARTH FRIENDLY</h3>
                                <p style={{ fontWeight: 500 }}>The electronic solution eliminates trips to the printer and reduces paper waste. </p>
                            </div>
                            <div className="col-lg-4" style={{ textAlign: "center" }}>
                                <img
                                    src={Low}
                                    style={{ width: 200 }}
                                    role="presentation"
                                    alt="Control Sales Logo"
                                />
                                <h3 style={{ fontWeight: "bold" }}>LOW-COST OPERATION</h3>
                                <p style={{ fontWeight: 500 }}>Low power and eliminating printing expenses equals low-cost operation. </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row key-section"
                        tabIndex={0}
                        style={{ background: "#c6c7d4", width: "100%", textAlign: 'left', backgroundPosition: "top", marginLeft: 0 }}
                    >
                        <div className="col-lg-6" style={{ padding: "20px 20px", paddingRight: 50 }}>
                            <h2 style={{ color: "black" }}>
                                <strong>Key Features</strong>
                            </h2>
                            <ul style={{ color: "black" }}>
                                <li>Sharp's IGZO technology enables a
                                    narrow panel frame and improved
                                    design for multi-panel display. </li>
                                <li>E Ink's latest e-paper module,
                                    "Spectra6," offers an expanded color gamut for vivid display quality. </li>
                                <li>A thin and lightweight product enables
                                    easy hanging/installation. </li>
                            </ul>
                        </div>
                        <div className="col-lg-6" style={{ padding: "20px 20px" }}>
                            <img
                                src={eposter}
                                style={{ width: "100%" }}
                                role="presentation"
                                alt="Control Sales Logo"
                            />
                            <p style={{ fontWeight: 300, marginTop: 20 }}>*Screen images shown are simulated pictures. Actual display will differ. </p>

                        </div>
                    </div>

                    <div
                        ref={this.myRef}
                        style={{
                            backgroundColor: "rgba(45,47,65,1)",
                            width: "100%",
                            justifyContent: "center",
                            display: "flex",
                        }}
                    >
                        <div
                            className="row"
                            style={{
                                maxWidth: "1140px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                padding: 20,
                                margin: 0,
                            }}
                        >
                            <div style={{ width: "70%" }}>
                                <div className="padding-top-50 d-none d-md-block"></div>
                                <div className="padding-top-50"></div>
                                <div className="hide-on-mobile">
                                    <h1
                                        className="mb-2-5"
                                        style={{
                                            fontSize: "3rem",
                                            textAlign: "center",
                                            color: "white",
                                        }}
                                    >
                                        <strong>
                                            LET'S TALK ABOUT ZERO-POWER DISPLAYS
                                            FOR YOUR NEXT SIGNAGE PRODUCT DESIGN
                                        </strong>
                                    </h1>
                                    <p
                                        style={{
                                            color: "white",
                                            textAlign: "center",
                                            padding: "20px 40px",
                                        }}
                                    >
                                        Provide your contact info and we'll reach out ASAP.
                                    </p>
                                </div>
                                <div className="show-on-mobile">
                                    <h1
                                        className="mb-2-5"
                                        style={{
                                            fontSize: "3rem",
                                            textAlign: "left",
                                            color: "white",
                                        }}
                                    >
                                        <strong>
                                            Let's Talk.
                                        </strong>
                                    </h1>
                                    <p
                                        style={{
                                            color: "white",
                                            textAlign: "left",
                                        }}
                                    >
                                        Please drop us a line. A member
                                        of the Sharp team will get in
                                        touch with you ASAP to talk
                                        about the ePoster as a perfect
                                        fit for your next design.
                                    </p>
                                </div>
                            </div>
                            <div style={{ width: "70%" }}>
                                <Form1 noValidate className="ePoster" onSubmit={this.onSubmit}>
                                    <Form1.Row style={{ paddingBottom: 10 }}>
                                        <Col>
                                            <Form1.Control
                                                aria-label="Email"
                                                placeholder="Email"
                                                aria-required={true}
                                                required
                                                type="email"
                                                onChange={(event) =>
                                                    this.setState({ email: event.currentTarget.value })
                                                }
                                                value={this.state.email}
                                            />
                                            <Form1.Control.Feedback type="invalid">
                                                Please provide a valid email id.
                                            </Form1.Control.Feedback>
                                        </Col>
                                    </Form1.Row>
                                    <Form1.Row style={{ paddingBottom: 10 }}>
                                        <Col>
                                            <Form1.Control
                                                aria-required={true}
                                                aria-label="Name"
                                                required
                                                placeholder="First Name"
                                                onChange={(event) =>
                                                    this.setState({ name: event.currentTarget.value })
                                                }
                                                value={this.state.name}
                                            />
                                            <Form1.Control.Feedback type="invalid">
                                                Name field cannot be empty
                                            </Form1.Control.Feedback>
                                        </Col>
                                    </Form1.Row>

                                    <Form1.Row style={{ paddingBottom: 10 }}>
                                        <Col>
                                            <Form1.Control
                                                aria-label="Country Code"
                                                placeholder="+1"
                                                aria-required={true}
                                                required
                                                onChange={(event) =>
                                                    this.setState({
                                                        mobileCode: event.currentTarget.value,
                                                    })
                                                }
                                                value={this.state.mobileCode}
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
                                                onChange={(event) =>
                                                    this.setState({ mobile: event.currentTarget.value })
                                                }
                                                value={this.state.mobile}
                                                maxLength={10}
                                            />
                                            <Form1.Control.Feedback type="invalid">
                                                Phone number field cannot be empty
                                            </Form1.Control.Feedback>
                                        </Col>
                                    </Form1.Row>
                                    <Form1.Row style={{ paddingBottom: 10 }}>
                                        <Col>
                                            <Form1.Control
                                                aria-label="Comment"
                                                aria-required={true}
                                                required
                                                as="textarea"
                                                rows="3"
                                                placeholder="Comments(optional)"
                                                onChange={(event) =>
                                                    this.setState({ message: event.currentTarget.value })
                                                }
                                                value={this.state.message}
                                            />
                                            <Form1.Control.Feedback type="invalid">
                                                Message field cannot be empty
                                            </Form1.Control.Feedback>
                                        </Col>
                                    </Form1.Row>
                                    <Button
                                        className="blueButton"
                                        aria-label="Submit Form Button"
                                        style={{ marginTop: 10, width: "100%" }}
                                        variant="primary"
                                        type="submit"
                                        disabled={this.state.submit}
                                    >
                                        Submit
                                    </Button>
                                    {/* <div style={{ paddingBottom: 50 }}></div> */}
                                    <Loader
                                        type="TailSpin"
                                        color="#e26565"
                                        height={50}
                                        width={50}
                                        timeout={0} //3 secs
                                        visible={this.state.showLoader}
                                        style={{ margin: "10px" }}
                                    />
                                    <Toast
                                        onClose={() =>
                                            this.setState({ show: false, submit: false })
                                        }
                                        show={this.state.show}
                                        className="toastSuccess"
                                    // transition="Fade"
                                    >
                                        <Toast.Header>
                                            <strong className="me-auto">Success</strong>
                                        </Toast.Header>
                                        <Toast.Body>
                                            Thank You! <br /> Your query has been successfully
                                            submitted.
                                        </Toast.Body>
                                    </Toast>
                                    <Toast
                                        onClose={() =>
                                            this.setState({ showError: false, submit: false })
                                        }
                                        show={this.state.showError}
                                        className="toastError"
                                    // transition="Fade"
                                    >
                                        <Toast.Header>
                                            <strong className="me-auto">Error</strong>
                                        </Toast.Header>
                                        <Toast.Body>
                                            We were unable to recieve your query. Please try again.
                                        </Toast.Body>
                                    </Toast>
                                    <div style={{ paddingBottom: 50 }}></div>
                                    <div style={{ paddingBottom: 50 }}></div>
                                </Form1>
                            </div>
                        </div>
                    </div>






                </div>
                <Footer />
            </div>
        );
    }
}
export default Eposters;
