"use client";

import { useEffect } from "react";
import LinkedInTag from "react-linkedin-insight";
import { Cookies } from "react-cookie-consent";

export default function LinkedInTracker() {
  useEffect(() => {
    const consent = Cookies.get("_consent_sharp_");
    LinkedInTag.init(
      process.env.NEXT_PUBLIC_PARTNER_ID,
      "px",
      consent !== "true"
    );
  }, []);

  return null;
}
