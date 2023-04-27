import React, { Component } from "react";
import Screen3 from "./assets/HomepageNoBottomLayers.jpeg";
import "./scrollbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { Image } from "react-bootstrap";
AOS.init();
class Jumbo extends Component {
  render() {
    return (
      // <ParallaxProvider>
      //   <div className="vertical">
      //     <div style={{ overflow: "hidden" }}>
      //       <ParallaxBanner
      //         style={{
      //           backgroundSize: "contain",
      //         }}
      //         className="bannerBg  bg-img"
      //         layers={[
      //           {
      //             image: Screen3,
      //             amount: 0.2,
      //           },
      //         ]}
      //       />
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Image
          role="presentation"
          alt="SHARP Banner"
          src={Screen3}
          fluid
          // style={{ maxHeight: 650 }}
        />
      </div>
      // <div>
      /* <img alt="SHARP Banner" style={{ maxHeight: 680 }} src={Screen3} /> */
      // </div>
      // <div className="home-banner"></div>
      /* </div>
        </div>
      </ParallaxProvider> */
    );
  }
}

export default Jumbo;
