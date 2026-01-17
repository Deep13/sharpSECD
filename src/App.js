import React, { Component } from "react";
import Body from "./body";
import { ParallaxProvider } from "react-scroll-parallax";
import "./scrollbar.css";
import Screen3 from "./assets/home_header.jpg";
import { Helmet } from "react-helmet";
import NewBody from "./NewBody";

class App extends Component {
  render() {
    return (
      <ParallaxProvider
        init={{
          smoothScrollingDuration: 100,
          smoothScrolling: true,
          forceHeight: false,
        }}
      >
        <div role="main" style={{ backgroundColor: "white" }}>
          <Helmet>
            <title>Low-Power LCD Displays & ePoster Modules | Sharp SECD</title>
            <meta
              name="description"
              content="Sharp SECD delivers world-class low-power, sunlight-viewable LCDs and ePoster display modules. Explore reflective, Memory in Pixel, and general-purpose displays."
            />
          </Helmet>
          {/* <Body /> */}
          <NewBody />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
