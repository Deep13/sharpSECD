import React, { Component } from "react";
import Body from "./body";
import { ParallaxProvider } from "react-scroll-parallax";
import "./scrollbar.css";
import Screen3 from "./assets/home_header.jpg";
import { Helmet } from "react-helmet";

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
            <meta
              name="description"
              content="Sharp reflective display modules enable products with ultra-low power requirements and stunning bright-light viewability."
            />
          </Helmet>
          <Body />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
