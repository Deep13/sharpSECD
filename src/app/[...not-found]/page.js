"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer"; // adjust path as needed
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "@/assets/logo.png"; // use Next.js asset import

export default function NotFoundPage() {
  useEffect(() => {
    // initialize AOS only on client
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          color: "#e61e25",
          flexDirection: "column",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <div data-aos="fade-down">
          <Image
            src={logo}
            alt="SHARP Logo"
            width={400} // adjust size as needed
            height={100}
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </div>
        <span data-aos="fade-up" style={{ marginTop: "1rem" }}>
          Page Not Found
        </span>
        <Link href="/" passHref legacyBehavior>
          <a
            style={{
              textDecoration: "none",
              color: "#e61d24",
              marginTop: "1rem",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
            data-aos="fade-up"
          >
            Go to Home →
          </a>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
