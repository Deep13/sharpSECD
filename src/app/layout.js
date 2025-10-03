import "@/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headernav from "@/components/HeaderNav";
import ScrollArrow from "@/components/ScrollArrow";

import LinkedInTracker from "@/components/LinkedInTracker";
import ClientCookieConsent from "@/components/CookieConsent";

export const metadata = {
  title: "SHARP SECD",
  description:
    "Sharp reflective display modules enable products with ultra-low power requirements and stunning bright-light viewability.",
  icons: {
    icon: "/favicon.ico", // Place your favicon in public folder
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Headernav />
        <LinkedInTracker />
        {children}
        <ScrollArrow />
        <ClientCookieConsent />
      </body>
    </html>
  );
}
