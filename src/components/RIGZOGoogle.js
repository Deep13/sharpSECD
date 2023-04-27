import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class RIGZOGoogle extends Component {
  componentDidMount() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", process.env.REACT_APP_TRACKING_ID_MARKET, {
      page_title: "R-IGZO-Google",
      page_path: "/R-IGZO-Google",
    });
    window.location.href =
      "https://agentmarcom.lpages.co/sharp-reflective-igzo-5-inch/";
  }

  render() {
    return (
      <div>
        <Helmet>
          {/* <title>Sharp SECD News - Sharp</title>
          <meta
            name="description"
            content="Visit the Sharp SECD News page for info on our latest TFT LCD display products and solutions."
          /> */}
          <script
            async
            src={
              "https://www.googletagmanager.com/gtag/js?id=" +
              process.env.REACT_APP_TRACKING_ID_MARKET
            }
          ></script>
        </Helmet>
        <p>Redirecting..</p>
      </div>
    );
  }
}
