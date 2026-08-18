import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Form1 from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import axios from "axios";

import heroBg from "../../assets/eposter_technology/tech-hero.png";
import organicGrocery from "../../assets/eposter_technology/tech-features-organic-grocery.png";
import spectraBg from "../../assets/eposter_technology/tech-spectra-bg.jpg";
import spectraOverlay from "../../assets/eposter_technology/tech-spectra-overlay.png";
import colorChartLeft from "../../assets/eposter_technology/tech-color-chart-left.png";
import colorChartRight from "../../assets/eposter_technology/tech-color-chart-right.png";
import igzoBg from "../../assets/eposter_technology/tech-igzo-backplane-bg.jpg";
import sizeGuide from "../../assets/eposter_technology/tech-size-guide.png";
import whyBg from "../../assets/eposter_technology/tech-why-eposter-bg.jpg";
import whyOverlay from "../../assets/eposter_technology/tech-why-eposter-overlay.png";
import sayGoodbye from "../../assets/eposter_technology/tech-say-goodbye.png";
import technicalNoteThumb from "../../assets/eposter_technology/tech-technical-note-thumb.png";

AOS.init();

const technicalNotePDF = require("../../assets/Documents/Sharp-ePoster-Technical-Note-June-2026.pdf");

// Shared Tailwind class strings. Typography uses the design-system classes
// (type-h1 / type-h2 / type-h3 / type-body1) defined in index.css.
const etpContainer = "max-w-[1280px] w-full mx-auto p-20 tablet:px-7";
const redNewBtn =
  "inline-flex items-center justify-center h-[50px] w-[260px] text-[1.25rem] text-white no-underline bg-[#e41e26] hover:bg-[#a11b20] border border-[#e41e26] hover:border-[#a11b20] rounded-none transition-colors";

// Table cell styles (replaces the .etp-table descendant selectors)
const cellBase = "border border-[#d0d0d0] px-4 py-3.5 text-center align-middle text-[1.5rem] tablet:px-3 tablet:py-2.5 tablet:text-[0.85rem]";
const headCell = `${cellBase} bg-[#e61e25] text-white font-bold`;
const cornerCell = `${cellBase} bg-[#6e6e6e] text-white font-bold !text-left`;
const featureCell = `${cellBase} bg-[#d9d9d9] text-black font-bold !text-left`;
const bodyCell = `${cellBase} bg-white text-[#222222]`;

class ePosterTechnology extends Component {
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
    };
    this.myRef = React.createRef();
  }
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ showLoader: true, show: false });
    let data = {
      name: this.state.name,
      mobile: this.state.mobileCode + "-" + this.state.mobile,
      email: this.state.email,
      message: this.state.message,
      subject: ["ePoster Technology"],
    };
    axios
      .post("/api/form", data)
      .then((res) => {
        this.setState({
          showLoader: false,
          show: true,
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
  render() {
    return (
      <div className="overflow-x-hidden">
        <Helmet>
          <title>ePoster Display Technology | Paper Replacement Displays | Sharp</title>
          <meta
            name="description"
            content="Discover Sharp's ePoster display technology featuring zero-power static image hold, paper-like readability, and low-power electronic paper modules for OEM applications."
          />
        </Helmet>

        {/* ===== HERO ===== */}
        <div
          aria-label="Sharp ePoster display module installed in a transportation environment."
          className="flex flex-col justify-end items-center min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="w-full max-w-[1000px] py-9 px-5 bg-[rgba(255,255,255,0.83)] mb-[28%] md:mb-[6%] ">
            <div className="mx-auto text-center">
              <h1 className="type-h1 m-0">
                ePOSTER <br className="hidden mobile:block" />
                DISPLAY MODULE TECHNOLOGY
              </h1>
            </div>
          </div>
        </div>

        {/* ===== INTRO ===== */}
        <div className="bg-white min-h-[80vh] flex justify-center items-center">
          <div className={`${etpContainer} text-center`}>
            <h2 className="type-h2 max-w-[790px] mx-auto mb-6">ENABLING DIGITAL SOLUTIONS TO REPLACE POSTER PRINTING</h2>
            <p className="type-body1 max-w-[1200px] mx-auto mb-[30px]">
              Sharp is an industry leader in low-power display technology. Our solutions are now augmented with the near-zero-power{" "}
              <Link to="/eposters-displays" className="text-inherit underline">
                ePoster display module
              </Link>
              . ePoster combines Sharp's IGZO backplane with E Ink's latest full-color Spectra™ 6 reflective ePaper technology. This powerful combination brings unique product opportunities to the
              digital paper-replacement market.
            </p>
            <button onClick={() => this.myRef.current.scrollIntoView()} className={redNewBtn}>
              Contact Sharp
            </button>
            {/* <Link to="/contact" className={redNewBtn}>
              Contact Sharp
            </Link> */}
          </div>
        </div>

        {/* ===== FEATURES INCLUDE ===== */}
        <div className="flex gap-[20px] lg:gap-[40px] items-stretch flex-col-reverse md:flex-row w-full bg-white text-left" tabIndex={0}>
          <div className="w-full md:w-1/2 flex items-center justify-center flex-col p-20 tablet:px-7">
            <h2 className="type-h2 text-black ">FEATURES INCLUDE:</h2>
            <ul className="type-body1 pl-[50px] mt-5 list-disc">
              <li>Resolution up to 200 PPI</li>
              <li>60k color gamut</li>
              <li>Reflectivity = 30%</li>
              <li>Contrast Ratio = 20:1</li>
              <li>Zero-power static image hold</li>
              <li>Operating Temp = 0°C to +50°C</li>
              <li>Image update time = 21s</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={organicGrocery}
              className="w-full h-full object-cover"
              alt="Grocery store promotion displayed on a Sharp ePoster."
            />
          </div>
        </div>

        {/* ===== E INK SPECTRA 6 ===== */}
        <div className="bg-cover bg-center flex justify-center" style={{ backgroundImage: `url(${spectraBg})` }}>
          <div className="max-w-[1280px] flex gap-[0px] md:gap-[20px] lg:gap-[40px] items-stretch flex-col md:flex-row w-full text-left">
            <div className="w-full md:w-1/2 flex items-center justify-center p-0 px-4 md:p-20 tablet:px-7">
              <img
                src={spectraOverlay}
                className="w-full max-w-[490px] h-auto"
                alt="A colorful promotion for a coffee shop shows the performance of ePoster's E Ink Spectra technology."
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start pt-[0px] md:pt-20 p-20  px-4 tablet:px-7">
              <div className="bg-[rgba(255,255,255,0.93)] rounded-[4px] p-[4rem] tablet:p-10">
                <div className="max-w-[500px]">
                  <h2 className="type-h2 mb-6">E INK SPECTRA™ 6</h2>
                  <p className="type-body1">
                    E Ink's latest color technology moves well past the performance of the previous versions. It can produce vivid, full-color images, that are capable of print-quality rendering. This
                    is due to E Ink's patented multi-color, micro-cup technology coupled with their advanced color imaging algorithm. It utilizes the six primary colors of Red, Green, Blue, Yellow,
                    Black, and White.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ENHANCED COLOR GAMUT ===== */}
        <div className="bg-white flex justify-center py-20 px-10 md:p-[100px]">
          <div className="text-center max-w-[1280px] flex items-center flex-col justify-center">
            <h2 className="type-h2 max-w-[930px] mb-2">ENHANCED COLOR GAMUT BY E INK'S ADVANCED COLOR IMAGING ALGORITHM</h2>
            <p className="type-body1 mb-[30px]">Four particle colors, six optical states</p>
            <div className="flex gap-10 justify-center items-center flex-col md:flex-row">
              <div className="text-center">
                <img src={colorChartLeft} className="w-full  h-auto" alt="Comparison of available color reproduction using E Ink Spectra technology: four particle colors." />
              </div>
              <div className="text-center">
                <img src={colorChartRight} className="w-full  h-auto" alt="Comparison of available color reproduction using E Ink Spectra technology: six optical states." />
              </div>
            </div>
          </div>
        </div>

        {/* ===== SHARP'S IGZO BACKPLANE ===== */}
        <div className="bg-cover bg-center flex justify-center p-[40px] md:p-[80px]" style={{ backgroundImage: `url(${igzoBg})` }}>
          <div className="max-w-[1280px] w-full mx-auto p-10 bg-[rgba(255,255,255,0.93)]">
            <h2 className="type-h2 mb-6">SHARP'S IGZO BACKPLANE</h2>
            <div className="flex gap-10 justify-center mt-[30px] flex-col md:flex-row">
              <div className="w-full md:w-1/3">
                <p className="type-h3">IGZO technology enables:</p>
                <ul className="type-body1 list-disc pl-5 md:pl-10">
                  <li>Higher PPI resolutions</li>
                  <li>Faster array scanning</li>
                  <li>Very thin borders around the display matrix</li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <p className="type-body1">
                  Indium-Gallium-Zinc-Oxide (IGZO) is a unique semi-conductor material that provides much improved TFT performance for active-matrix display arrays. It provides much higher electron
                  mobilities compared to traditional a-Si backplanes.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <p className="type-body1">
                  Additionally, the IGZO backplane can run at higher voltages. This, along with running on Sharp's G8 fab, enables scalability up to 75"-plus diagonal size for large applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== COMPARISON TABLE ===== */}
        <div className="bg-white">
          <div className={etpContainer}>
            <h2 className="type-h2 mb-6 text-center">COMPARISON OF ePOSTER TO AN a-Si MODULE</h2>
            <div className="w-full overflow-x-auto ">
              <table className="border-collapse w-full min-w-[700px] mx-auto" aria-label="A table comparing ePoster's specifications versus traditional display modules.">
                <thead>
                  <tr>
                    <th className={`${cornerCell} w-[300px]`}>Features</th>
                    <th className={`${headCell} w-[450px]`}>31" Module</th>
                    <th className={`${headCell} w-[450px]`}>Sharp A2 ePoster</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={featureCell}>Backplane + EPD</td>
                    <td className={bodyCell}>a-Si + Spectra™ 6</td>
                    <td className={bodyCell}>IGZO + Spectra™ 6</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>Panel Size</td>
                    <td className={bodyCell}>31.5" Landscape</td>
                    <td className={bodyCell}>28.5" Portrait</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>Resolution</td>
                    <td className={bodyCell}>2,560 × 1,440</td>
                    <td className={bodyCell}>2,160 × 3,060</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>PPI</td>
                    <td className={bodyCell}>94 PPI</td>
                    <td className={bodyCell}>131 PPI</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>Border Size</td>
                    <td className={bodyCell}>L/R 3.6mm T 4.8</td>
                    <td className={bodyCell}>L/R/T 3.0mm</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>Module</td>
                    <td className={bodyCell}>EPD module + PMIC Bd.</td>
                    <td className={bodyCell}>EPD module + TCON Bd.</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>Host I/F</td>
                    <td className={bodyCell}>SPI</td>
                    <td className={bodyCell}>USB</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>Image Update</td>
                    <td className={bodyCell}>Flashing Update</td>
                    <td className={bodyCell}>Scrolling Update</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ===== ISO POSTER SIZING STANDARDS ===== */}
        <div className="bg-white">
          <div className={etpContainer}>
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
              <div className="w-full md:w-1/2">
                <h2 className="type-h2 mb-6">ISO POSTER SIZING STANDARDS</h2>
                <p className="type-body1">International ISO paper size is commonly used outside the U.S. and refers to standardized poster sizes.</p>
                <p className="type-body1">
                  ePoster display modules by Sharp are available currently in A1 and A2 poster sizes. An A3-sized module and an outdoor A1-sized Kaleido™ 3 display module are coming in Q2 2026.
                </p>
              </div>
              <div className="w-full md:w-1/2 text-center">
                <img src={sizeGuide} className="w-full h-auto" alt="Dimensional comparison of ISO paper sizes A0 - A4." />
              </div>
            </div>
          </div>
        </div>

        {/* ===== INDOOR ePOSTER MODULE SPECIFICATIONS ===== */}
        <div className="bg-white pb-0 md:pb-[30px]">
          <div className={etpContainer}>
            <h2 className="type-h2 mb-6">INDOOR ePOSTER MODULE SPECIFICATIONS</h2>
            <div className="w-full overflow-x-auto">
              <table className="border-collapse w-full min-w-[700px] mx-auto" aria-label="A table comparing indoor ePoster module specifications - A1, A2, and A3 sizes.">
                <thead>
                  <tr>
                    <th className={`${cornerCell}`}>Specs</th>
                    <th className={headCell}>A1 size - 40.5 inch</th>
                    <th className={headCell}>A2 size - 28.5 inch</th>
                    <th className={headCell}>A3 size - 20.2 inch</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={featureCell}>Model No.</td>
                    <td className={bodyCell}>LP405A6NW01</td>
                    <td className={bodyCell}>LP285A6NW01</td>
                    <td className={bodyCell}>LP202A6BW01</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>Resolution (pixel)</td>
                    <td className={bodyCell}>3,060 × 4,320</td>
                    <td className={bodyCell}>2,160 × 3,060</td>
                    <td className={bodyCell}>1,530 × 2,160</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>Pixel Density</td>
                    <td className={bodyCell}>131 ppi</td>
                    <td className={bodyCell}>131 ppi</td>
                    <td className={bodyCell}>131 ppi</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>Active Area (mm)</td>
                    <td className={bodyCell}>594.56 × 839.38</td>
                    <td className={bodyCell}>418.00 × 592.17</td>
                    <td className={bodyCell}>297.28 × 419.69</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>Panel Border (mm)</td>
                    <td className={bodyCell}>L/R: 3.0 Top: 5.0 Bottom: 9.9</td>
                    <td className={bodyCell}>L/R: 3.0 Top: 3.0 Bottom: 6.9</td>
                    <td className={bodyCell}>L/R: 3.0 Top: 3.0 Bottom: 7.7</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>Reflectance (@ SCE*)</td>
                    <td className={bodyCell}>34%</td>
                    <td className={bodyCell}>34%</td>
                    <td className={bodyCell}>34%</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>Contrast Ratio (@ SCE*)</td>
                    <td className={bodyCell}>22 : 1</td>
                    <td className={bodyCell}>22 : 1</td>
                    <td className={bodyCell}>22 : 1</td>
                  </tr>
                  <tr>
                    <td className={featureCell}>Operating Temperature</td>
                    <td className={bodyCell}>0 to 50°C</td>
                    <td className={bodyCell}>0 to 50°C</td>
                    <td className={bodyCell}>0 to 50°C</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[0.85rem] mt-3 text-[#555555]">*SCE = Diffuse reflectance. Measurements with specular reflection removed.</p>
          </div>
        </div>

        {/* ===== WHY ePOSTER? ===== */}
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${whyBg})` }}>
          <div className={`${etpContainer} !p-0`}>
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap:0 md:gap-10">
              <div className="w-full md:w-1/2 pl-0 md:pl-10">
                <div className="bg-[rgba(255,255,255,0.91)] rounded-[4px] p-12 m-[20px] md:m-0 mb-[80px] md:mb-0">
                  <h2 className="type-h2 mb-6">WHY ePOSTER?</h2>
                  <ul className="type-body1 pl-5 list-disc">
                    <li>A2 portrait mode is perfect for replacing paper posters.</li>
                    <li>Higher resolution/higher PPI enables print-quality images.</li>
                    <li>Small borders enable small mullions for tiling applications.</li>
                    <li>Scrolling update is less intrusive visually.</li>
                    <li>The USB I/F enables ease of use and fast data transfers.</li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center">
                <img src={whyOverlay} className="w-full h-auto" alt="A Sharp ePoster in operation for promotions in a clothing store." />
              </div>
            </div>
          </div>
        </div>

        {/* ===== SUPER LOW POWER ===== */}
        <div className="bg-white">
          <div className={etpContainer}>
            <h2 className="type-h2 mb-6">SUPER LOW POWER WITH NO BACKLIGHT REQUIRED</h2>
            <div className="flex flex-col gap-10 justify-center items-start">
              <div className="">
                <p className="type-body1">
                  Reflective performance negates the need for the high-power backlight required for traditional transmissive LCD displays. Also, the image update power is only 2.5W and then zero power
                  until the next update. This greatly simplifies thermal design considerations and enables installations that don't require line power, negating the time and expense of permits and
                  power installation.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="type-body1">
                  ePoster-enabled products can use solar, battery, PoE, or PoWiFi. The solution can be designed to utilize various connectivity options such as 4G, Wi-Fi, or LAN to take advantage of
                  existing cloud-based content management services.
                </p>
                <Link to="/eposters-displays" className={`${redNewBtn} mt-5`}>
                  See ePoster Overview
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SAY GOODBYE TO THE EXPENSE OF PRINTING ===== */}
        <div className="flex flex-col md:flex-row w-full bg-white text-left gap-10" tabIndex={0}>
          <div className="w-full md:w-1/2 p-0">
            <img src={sayGoodbye} className="w-full h-full object-cover" alt="Three ePoster displays in operation on a wall next to an escalator." />
          </div>
          <div className="w-full md:w-1/2 mb-[80px] md:pb-0">
            <div className="p-10">
              <h2 className="type-h2 text-black pb-[30px]">SAY GOODBYE TO THE EXPENSE OF PRINTING</h2>
              <div className="flex flex-col">
                <div className="type-body1">
                  E Ink's Spectra™ 6 and Sharp's IGZO backplane combine to provide high-resolution, high color gamut, print-quality image rendering. Low-power display operation enables
                  paper-replacement products that require no line power and can take advantage of various wireless connectivity options for content management.
                </div>
              </div>
              <br />
              <div className="flex flex-row items-center gap-6 mt-6">
                <a href={technicalNotePDF} target="_blank" rel="noopener noreferrer" download>
                  <img src={technicalNoteThumb} className="w-[160px] h-auto border border-[#cccccc]" alt="Thumbnail of the Sharp ePoster Technical Note PDF" />
                </a>
                <p className="text-[1.2rem] max-w-[250px]">Download the Sharp ePoster Technical Note PDF.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CONTACT FORM ===== */}
        <div ref={this.myRef} className="bg-[rgba(45,47,65,1)] w-full flex justify-center">
          <div className="flex flex-col items-center justify-center max-w-[1280px] p-5 m-0">
            <div>
              <div className="pt-[50px]"></div>
              <div>
                <h1 className="type-h1 text-center text-white">
                  IS SHARP'S ePOSTER RIGHT FOR YOUR PAPER REPLACEMENT PRODUCT?
                  <br />
                  LET'S TALK.
                </h1>
                <p className="type-body1 text-white text-center py-1 px-10">Provide your contact info and we'll reach out ASAP.</p>
              </div>
            </div>
            <div className="w-[70%] mobile:w-[98%]">
              <Form1 noValidate onSubmit={this.onSubmit} className="EposterTechnology">
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

        <Footer />
      </div>
    );
  }
}
export default ePosterTechnology;
