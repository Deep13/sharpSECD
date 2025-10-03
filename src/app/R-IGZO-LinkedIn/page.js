"use client";

import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function RIGZOLinkedIn() {
  const router = useRouter();

  useEffect(() => {
    // Setup Google Analytics gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", process.env.NEXT_PUBLIC_TRACKING_ID_MARKET, {
      page_title: "R-IGZO-LinkedIn",
      page_path: "/R-IGZO-LinkedIn",
    });

    // Perform redirect
    window.location.href =
      "https://agentmarcom.lpages.co/sharp-reflective-igzo-5-inch/";
  }, []);

  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_TRACKING_ID_MARKET}`}
        ></script>
      </Head>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg text-gray-700 animate-pulse">Redirecting...</p>
      </div>
    </>
  );
}
