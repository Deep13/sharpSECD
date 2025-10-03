"use client";

import CookieConsent from "react-cookie-consent";

export default function ClientCookieConsent() {
  return (
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
        if (!acceptedByScrolling) {
          // GTM injection
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
              "gtm.start": new Date().getTime(),
              event: "gtm.js",
            });
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
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
}
