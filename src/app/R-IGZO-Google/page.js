"use client";

import { useEffect } from "react";
import Head from "next/head";
import ClipLoader from "react-spinners/ClipLoader";

export default function RIGZOGoogle() {
  useEffect(() => {
    // Google Analytics setup
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", process.env.NEXT_PUBLIC_TRACKING_ID_MARKET, {
      page_title: "R-IGZO-Google",
      page_path: "/R-IGZO-Google",
    });

    // Redirect after small delay to ensure GA fires
    const timer = setTimeout(() => {
      window.location.href =
        "https://agentmarcom.lpages.co/sharp-reflective-igzo-5-inch/";
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_TRACKING_ID_MARKET}`}
        ></script>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <ClipLoader color="#e61d24" size={50} />
        <p className="mt-4 text-gray-700 text-lg">Redirecting...</p>
      </div>
    </>
  );
}
