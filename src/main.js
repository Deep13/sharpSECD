import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollArrow from "./ScrollArrow";
import Routes from "./routes";
import Headernav from "./headernav";
import CookieConsent from "react-cookie-consent";
import { BrowserRouter } from "react-router-dom";
function Main() {
  return (
    <BrowserRouter>
      <Headernav />
      <Routes />
      <ScrollArrow />
      <CookieConsent
        location="bottom"
        flipButtons={true}
        cookieName="_consent_sharp_"
        style={{ background: "#000" }}
        buttonStyle={{
          color: "#fff",
          background: "rgb(169 31 44)",
          fontSize: "13px",
        }}
        declineButtonText="Decline"
        expires={150}
        enableDeclineButton={true}
        declineButtonStyle={{
          color: "#fff",
          background: "rgb(169 31 44)",
          fontSize: "13px",
        }}
        buttonText="Accept"
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            // alert("Accept was triggered by user scrolling");
          } else {
            // alert("Accept was triggered by clicking the Accept button");
            (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-MBHLZHT");
          }
        }}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </BrowserRouter>
  );
}
export default Main;
