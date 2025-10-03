"use client";

import Image from "next/image";
import logo from "@/assets/Sharp-Logo.png";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const handleLink = (e, link) => {
    e.preventDefault();
    router.push(link); // ✅ client-side navigation
  };

  return (
    <footer
      role="contentinfo"
      className="grid grid-cols-1 md:grid-cols-4 bg-black text-white gap-8 px-6 md:px-12 py-12"
    >
      {/* Logo + Address */}
      <div className="flex flex-col space-y-4 text-sm">
        <Image
          src={logo}
          alt="SHARP Logo"
          width={200}
          height={60}
          className="footer-logo"
        />
        <div>
          Sharp Electronics Corporation, Device Division
          <br />
          <span>100 Paragon Drive</span>
          <br />
          <span>Montvale, New Jersey 07645</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="text-sm">
        <span className="text-2xl font-semibold">Products</span>
        <div className="mt-2">
          <p className="font-bold mb-1">Memory in Pixel LCDs</p>
          <div className="ml-2 flex flex-col space-y-1">
            <a href="/" onClick={(e) => handleLink(e, "/MemoryInPixel")}>
              Overview
            </a>
            <a
              href="/"
              onClick={(e) => handleLink(e, "/memory-in-pixel-lcds-product")}
            >
              Find a Product
            </a>
            <a
              href="/"
              onClick={(e) => handleLink(e, "/memory-in-pixel-lcds-technology")}
            >
              Technology
            </a>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-bold mb-1">ePoster Display Modules</p>
          <div className="ml-2">
            <a href="/" onClick={(e) => handleLink(e, "/eposters-displays")}>
              Overview
            </a>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-bold mb-1">General Purpose LCDs</p>
          <div className="ml-2">
            <a
              href="/"
              onClick={(e) => handleLink(e, "/industrial-lcds-product")}
            >
              Find a Product
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="text-sm">
        <span className="text-2xl font-semibold">About Sharp</span>
        <div className="mt-2 flex flex-col space-y-1">
          <a href="/" onClick={(e) => handleLink(e, "/news")}>
            News
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-sm">
        <a
          href="/"
          className="text-2xl font-semibold"
          onClick={(e) => handleLink(e, "/contact")}
        >
          Contact
        </a>
        <div className="mt-2 flex flex-col space-y-1">
          <a
            href="http://www.sharpusa.com/TermsAndConditions.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms & Conditions
          </a>
          <a
            href="https://policies.sharpusa.com/Privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
