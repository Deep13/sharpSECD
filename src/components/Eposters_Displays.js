import React, { Component } from "react";
import Restaurant from "../assets/eposter_displays/ePosterRestaurant.jpg";
import Hotel from "../assets/eposter_displays/ePosterHotel.jpg";
import Healthcare from "../assets/eposter_displays/ePosterHealthcare.jpg";
import GRAND from "../assets/eposter_displays/grand_1.jpg";
import Earth from "../assets/eposter_displays/Earth.png";
import Low from "../assets/eposter_displays/Low.png";
import Lobbies from "../assets/eposter_displays/ePosterLobbies.jpg";
import Rental from "../assets/eposter_displays/ePosterRental.jpg";
import Education from "../assets/eposter_displays/Edutation_ePoster.jpg";
import sharp_logo from "../assets/SHARP_Logo_red.png";
import ePosterSummerSale from "../assets/eposter_displays/ePosterMallSquare.jpg";
import Retail from "../assets/eposter_displays/Retail.jpg";
import ePosterElevatorDarker from "../assets/eposter_displays/ePosterElevatorDarker.jpg";
import Zero from "../assets/eposter_displays/Zero.png";
import A1ePoster from "../assets/eposter_displays/ePoster-A1.png";
import A2ePoster from "../assets/eposter_displays/ePoster-A2.png";
import A3ePoster from "../assets/eposter_displays/ePoster-A3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import Form1 from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import axios from "axios";
import IntroVideo from "../assets/ePosterVideo.mp4";
import epostersCarousel from "../assets/new-home/ePosterCarousel.jpg";
import eposterProduct from "../assets/new-home/epProduct.png";
AOS.init();

// Shared red CTA button style (replaces inline-styled react-bootstrap Buttons).
const redBtn =
  "inline-flex items-center justify-center h-[50px] px-6 text-white text-[1.25rem] no-underline bg-[#e41e26] hover:bg-[#a11b20] border border-[#e41e26] hover:border-[#a11b20] rounded-none transition-colors cursor-pointer";

class Eposters_Displays extends Component {
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
  callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = link;
  };
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
      subject: ["ePoster Landing"],
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
          <title>Sharp ePosters – Paperless Signage Modules | Sharp SECD</title>
          <meta name="description" content="Explore Sharp ePosters—zero-power, high-contrast E Ink displays that replace printed signage. Ideal for retail, healthcare, hospitality, and more." />
        </Helmet>
        <div className="w-full">
          {/* ===== HERO ===== */}
          <div
            aria-label="Concept image of Sharp ePoster used for museum exhibit signage"
            tabIndex={0}
            className="w-full text-left bg-cover bg-no-repeat bg-[top_center] p-10 pt-[50px] md:pt-[120px]"
            style={{ backgroundImage: `url(${epostersCarousel})` }}
          >
            <div className="flex flex-col-reverse md:flex-row gap-10">
              <div className="flex-1 lg:pl-[90px]">
                <img className="w-[400px] max-w-full" src={sharp_logo} role="presentation" alt="Control Sales Logo" />
                <div className="my-10">
                  <h1 className="type-h1 text-white lg:text-[60px]">
                    SAY GOODBYE
                    <br />
                    TO PRINTING WASTE.
                  </h1>
                </div>
                <h2 className="type-h2 text-white max-w-[600px]">Our no-hassle ePoster display module enables paper replacement. Uses zero power in static image mode.</h2>
              </div>
              <div className="flex-1 flex items-center justify-center flex-col">
                <img
                  className="max-w-[550px] w-full"
                  src={eposterProduct}
                  role="presentation"
                  alt="Stock graphic with signage display showing how ePoster will look in a mall or retail environment "
                />
                <p className="font-light mt-2 text-[1rem] text-center text-white italic">Screen images shown are simulated unless otherwise noted. Actual display will differ. </p>
              </div>
            </div>
          </div>

          {/* ===== INTRODUCING ePOSTER ===== */}
          <div className="flex flex-col md:flex-row items-stretch w-full bg-white text-left" tabIndex={0}>
            <div className="w-full md:w-1/2 p-10 lg:p-20">
              <h2 className="type-h2 text-black pb-[30px]">INTRODUCING ePOSTER</h2>
              <div className="flex flex-col">
                <video src={IntroVideo} controls autoPlay muted loop playsInline className="w-full max-w-[600px] rounded-none mb-5">
                  Your browser does not support the video tag.
                </video>
                <div className="type-body1">
                  Printing is expensive, inflexible, and time-consuming. Welcome to the future of low power paper replacement signage. Sharp and E Ink have come together to bring you one of the
                  industry's leading electronic poster display modules.
                </div>
              </div>
              <br />
              <button onClick={() => this.myRef.current.scrollIntoView()} className={`${redBtn} w-full max-w-[270px] mt-[30px]`}>
                Contact Sharp
              </button>
            </div>
            <div className="w-full md:w-1/2 hidden md:block">
              <img
                src={ePosterSummerSale}
                className="w-full h-full object-cover"
                role="presentation"
                alt="Stock graphic with signage display showing how ePoster will look in a mall or retail environment "
              />
            </div>
          </div>

          {/* ===== CREATE FLEXIBLE SOLUTIONS ===== */}
          <div
            aria-label="Visual mock-up showing potential elevator signage using Sharp ePoster"
            tabIndex={0}
            className="flex w-full text-left bg-cover bg-[position:top]"
            style={{ backgroundImage: `url(${ePosterElevatorDarker})` }}
          >
            <div className="w-full md:w-1/2 p-[30px] m-[40px] md:m-20 bg-[#00000024] text-white">
              <h2 className="type-h2 pb-[30px]">CREATE FLEXIBLE, EFFICIENT ePOSTER SOLUTIONS</h2>
              <span className="type-h3">The Sharp ePoster enables you to build paper replacement displays that:</span>
              <br />
              <ul className="type-body1 ml-0 pl-5 mt-[30px] list-disc">
                <li>Eliminate hassles of printing</li>
                <li>Allow cloud-based content management</li>
                <li>Save time</li>
                <li>Save labor</li>
                <li>Save money</li>
              </ul>
            </div>
          </div>

          {/* ===== APPLICATIONS INCLUDE ===== */}
          <div className="flex flex-column justify-center items-center w-full text-left bg-[#2d2f40] p-20 gap-10" tabIndex={0}>
            <div className="flex flex-column justify-center items-center gap-10 max-w-[1280px]">
              <h2 className="type-h2 w-full text-white">APPLICATIONS INCLUDE</h2>
              <div className="flex flex-col md:flex-row w-full gap-10">
                <div className="w-full md:w-1/2 lg:w-1/3 ">
                  <img src={Restaurant} className="w-full" role="presentation" alt="Rendering of Sharp ePoster displaying a restaurant menu" />
                  <h3 className="type-h3 w-full text-white text-center pt-2.5">Restaurants &amp; Cinema</h3>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 ">
                  <img src={Education} className="w-full" role="presentation" alt="Example layout showing Sharp ePoster concept in a classroom environment" />
                  <h3 className="type-h3 w-full text-white text-center pt-2.5">Education</h3>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 ">
                  <img src={Healthcare} className="w-full" role="presentation" alt="Concept rendering of ePoster for medical office check-in or info display" />
                  <h3 className="type-h3 w-full text-white text-center pt-2.5">Healthcare</h3>
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-10">
                <div className="w-full md:w-1/2 lg:w-1/3 ">
                  <img src={Rental} className="w-full" role="presentation" alt="Visualization of retail promotion signage using Sharp ePoster" />
                  <h3 className="type-h3 w-full text-white text-center pt-2.5">Retail</h3>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 ">
                  <img src={Lobbies} className="w-full" role="presentation" alt="Mock-up depicting ePoster module as advertising in a lobby." />
                  <h3 className="type-h3 w-full text-white text-center pt-2.5">Lobbies</h3>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 ">
                  <img src={Hotel} className="w-full" role="presentation" alt="Illustration of Sharp ePoster used for hotel room or hallway signage" />
                  <h3 className="type-h3 w-full text-white text-center pt-2.5">Hotel &amp; Hospitality</h3>
                </div>
              </div>
            </div>
          </div>

          {/* ===== KEY FEATURES ===== */}
          <div className="flex flex-col md:flex-row items-stretch w-full bg-white text-left p-10 md:p-20 gap-10" tabIndex={0}>
            <div className="w-full md:w-1/2 flex flex-col justify-start items-center ">
              <img src={GRAND} className="w-full max-w-[490px]" role="presentation" alt="Photograph of actual Sharp ePoster holding a static image in zero-power mode" />
              <p className="font-light mt-5 text-[1rem] text-center">Actual photograph of display in zero-power operation </p>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="type-h2 text-black mb-6">KEY FEATURES</h2>
              <ul className="type-body1 text-black mb-0 list-disc pl-5 line-height-[40px]">
                <li className="mb-[10px]">Digital solution w/paper-like viewability</li>
                <li className="mb-[10px]">Zero power with static imagine hold</li>
                <li className="mb-[10px]">High contrast plus 30% reflectivity</li>
                <li className="mb-[10px]">60k color gamut with E Ink's Spectra™ 6</li>
                <li className="mb-[10px]">Thin, lightweight, multi-panel capability</li>
                <li className="mb-[10px]">Enables cloud-based management</li>
                <li className="mb-[10px]">Battery, PoE, or PoWiFi installation</li>
                <li className="mb-[10px]">Mount in virtually any location</li>
              </ul>
              <br />
              <button onClick={(event) => this.callFunct(event, "/eposter-display-modules-technology")} className={`${redBtn} w-full max-w-[300px] mt-2.5`}>
                See ePoster Technology
              </button>
            </div>
          </div>

          {/* ===== INDOOR SOLUTIONS IN THREE SIZES ===== */}
          <div className="bg-[#2d2f40] w-full py-20 px-5 flex flex-col items-center" tabIndex={0}>
            <h2 className="type-h2 w-full max-w-[1280px] text-white text-left pb-[30px]">INDOOR SOLUTIONS IN THREE SIZES</h2>
            <div className="flex flex-col md:flex-row justify-center gap-10 w-full max-w-[1280px]">
              <div className="w-full md:w-1/3">
                <img src={A1ePoster} className="w-full block" role="presentation" alt="Sharp A1 ePoster display module shown in an indoor signage setting" />
                <div className="bg-white px-[15px] py-5 text-center">
                  <h3 className="type-h3 mb-[5px]">A1 ePoster</h3>
                  <p className="type-body1 m-0">23.4 x 33.1 inches</p>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <img src={A2ePoster} className="w-full block" role="presentation" alt="Sharp A2 ePoster display module shown in an indoor signage setting" />
                <div className="bg-white px-[15px] py-5 text-center">
                  <h3 className="type-h3 mb-[5px]">A2 ePoster</h3>
                  <p className="type-body1 m-0">16.5 x 23.4 inches</p>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <img src={A3ePoster} className="w-full block" role="presentation" alt="Sharp A3 ePoster display module shown in an indoor signage setting" />
                <div className="bg-white px-[15px] py-5 text-center">
                  <h3 className="type-h3 mb-[5px]">A3 ePoster</h3>
                  <p className="type-body1 m-0">11.7 x 16.5 inches</p>
                </div>
              </div>
            </div>
            <button onClick={(event) => this.callFunct(event, "/Eposters_product")} className={`${redBtn} w-full max-w-[300px] mt-[50px]`}>
              Find a Product
            </button>
          </div>

          {/* ===== LOW POWER = LOW COST ===== */}
          <div className="bg-[#d9d9d9] w-full text-center flex flex-col items-center py-[100px] px-[50px]" tabIndex={0}>
            <h2 className="type-h2">LOW POWER REQUIREMENT = LOW COST OF OWNERSHIP</h2>
            <div className="flex flex-wrap w-full text-left mt-[30px] pb-5" tabIndex={0}>
              <div className="w-full md:w-1/3 text-center px-2 lg:px-5">
                <img src={Zero} className="w-[200px] mx-auto" role="presentation" alt="Zero power" />
                <h3 className="type-h3">ZERO POWER</h3>
                <p className="type-body1 font-medium">ePoster technology enables zero-power operation while maintaining a static image hold</p>
              </div>
              <div className="w-full md:w-1/3 text-center px-2 lg:px-5">
                <img src={Earth} className="w-[200px] mx-auto" role="presentation" alt="Earth friendly" />
                <h3 className="type-h3">EARTH FRIENDLY</h3>
                <p className="type-body1 font-medium">An electronic solution eliminates trips to the printer and reduces paper waste. </p>
              </div>
              <div className="w-full md:w-1/3 text-center px-2 lg:px-5">
                <img src={Low} className="w-[200px] mx-auto" role="presentation" alt="Low cost operation" />
                <h3 className="type-h3">LOW-COST OPERATION</h3>
                <p className="type-body1 font-medium">Low power usage plus eliminating printing expenses equals low-cost operation. </p>
              </div>
            </div>
          </div>

          {/* ===== A STYLISH SOLUTION ===== */}
          <div className="flex flex-col-reverse md:flex-row items-stretch w-full bg-white text-left" tabIndex={0}>
            <div className="w-full md:w-1/2 p-20">
              <h2 className="type-h2 text-black pb-[30px]">A STYLISH SOLUTION.</h2>
              <span className="type-body1">
                Crisp, colorful visuals.
                <br />
                <br />
                Slim, light module. Simple operation.
                <br />
                <br />
                Replace paper posters with Sharp's ePoster display module today.
              </span>
            </div>
            <div className="w-full md:w-1/2">
              <img src={Retail} className="w-full h-full object-cover" role="presentation" alt="Concept mock-up showing ePoster display in a shopping mall setting" />
            </div>
          </div>

          {/* ===== CONTACT FORM ===== */}
          <div ref={this.myRef} className="bg-[rgba(45,47,65,1)] w-full flex justify-center">
            <div className="flex flex-col items-center justify-center max-w-[1280px] p-5 m-0">
              <div>
                <div className="pt-[50px]"></div>
                <div>
                  <h1 className="type-h1 text-center text-white">IS SHARP'S ePOSTER RIGHT FOR YOUR PAPER REPLACEMENT PRODUCT?</h1>
                  <p className="type-body1 text-white text-center py-1 px-10">Provide your contact info and we'll reach out ASAP.</p>
                </div>
              </div>
              <div className="w-[70%] mobile:w-[98%]">
                <Form1 noValidate onSubmit={this.onSubmit} className="EposterDisplay">
                  <Form1.Row className="pb-2.5">
                    <Col>
                      <Form1.Control
                        aria-label="Email"
                        placeholder="Email"
                        aria-required={true}
                        required
                        type="email"
                        onChange={(event) => this.setState({ email: event.currentTarget.value })}
                        value={this.state.email}
                      />
                      <Form1.Control.Feedback type="invalid">Please provide a valid email id.</Form1.Control.Feedback>
                    </Col>
                  </Form1.Row>
                  <Form1.Row className="pb-2.5">
                    <Col>
                      <Form1.Control
                        aria-required={true}
                        aria-label="Name"
                        required
                        placeholder="First Name"
                        onChange={(event) => this.setState({ name: event.currentTarget.value })}
                        value={this.state.name}
                      />
                      <Form1.Control.Feedback type="invalid">Name field cannot be empty</Form1.Control.Feedback>
                    </Col>
                  </Form1.Row>
                  <Form1.Row className="pb-2.5 flex gap-2.5">
                    <Col>
                      <Form1.Control
                        aria-label="Country Code"
                        placeholder="+1"
                        aria-required={true}
                        required
                        onChange={(event) => this.setState({ mobileCode: event.currentTarget.value })}
                        value={this.state.mobileCode}
                      />
                      <Form1.Control.Feedback type="invalid">Country code field cannot be empty</Form1.Control.Feedback>
                    </Col>
                    <Col xs={10}>
                      <Form1.Control
                        aria-label="Contact Number"
                        placeholder="Contact number"
                        aria-required={true}
                        required
                        onChange={(event) => this.setState({ mobile: event.currentTarget.value })}
                        value={this.state.mobile}
                        maxLength={10}
                      />
                      <Form1.Control.Feedback type="invalid">Phone number field cannot be empty</Form1.Control.Feedback>
                    </Col>
                  </Form1.Row>
                  <Form1.Row className="pb-2.5">
                    <Col>
                      <Form1.Control
                        aria-label="Comment"
                        as="textarea"
                        rows="3"
                        placeholder="Comments(optional)"
                        onChange={(event) => this.setState({ message: event.currentTarget.value })}
                        value={this.state.message}
                      />
                    </Col>
                  </Form1.Row>
                  <button
                    type="submit"
                    aria-label="Submit Form Button"
                    disabled={this.state.submit}
                    className="w-full mt-2.5 px-4 py-1.5 text-white bg-[#a91e2c] hover:bg-[#ec0c0c] border border-[#a91e2c] hover:border-[#ec0c0c] rounded transition-colors disabled:opacity-65"
                  >
                    Submit
                  </button>
                  <Loader type="TailSpin" color="#e26565" height={50} width={50} timeout={0} visible={this.state.showLoader} style={{ margin: "10px" }} />
                  <Toast onClose={() => this.setState({ show: false, submit: false })} show={this.state.show} className="text-white !bg-[#0fab0f] !shadow-[0px_0px_7px_3px_rgba(0,0,0,0.1)] !mt-5">
                    <Toast.Header>
                      <strong className="mr-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>
                      Thank You! <br /> Your query has been successfully submitted.
                    </Toast.Body>
                  </Toast>
                  <Toast
                    onClose={() => this.setState({ showError: false, submit: false })}
                    show={this.state.showError}
                    className="text-white !bg-[#dd3444] !shadow-[0px_0px_7px_3px_rgba(0,0,0,0.1)] !mt-5"
                  >
                    <Toast.Header>
                      <strong className="mr-auto">Error</strong>
                    </Toast.Header>
                    <Toast.Body>We were unable to recieve your query. Please try again.</Toast.Body>
                  </Toast>
                  <div className="pb-[50px]"></div>
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
export default Eposters_Displays;
