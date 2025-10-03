// app/memory-lcd/page.js  (if using Next.js App Router)
// OR pages/memory-lcd.js  (if using Pages Router)

"use client";

import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";

// Import images from public or assets folder
import convdisp from "@/assets/Sharp-Press-Landing-Page-Hero-2.jpg";
import convdisp1 from "@/assets/news2.png";
import news1 from "@/assets/Sharp-ePoster-28.5-inch--Display.jpg";
import news3 from "@/assets/news3.png";
import news4 from "@/assets/Sharp-MIP-3-5-inch-LS035Q7DD01.png";

export default function MemoryLCD() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Sharp SECD News – Latest Display Technology Announcements</title>
        <meta
          name="description"
          content="Stay updated with the latest Sharp SECD product news, including ultra-low-power Memory in Pixel LCDs and sustainable ePoster display innovations."
        />
      </Head>

      {/* Hero Section */}
      <div
        className="row container-row-85 padding-top-50 padding-bottom-30"
        style={{ overflowX: "hidden" }}
      >
        <div
          id="main-content"
          role="main"
          tabIndex={0}
          className="col-md-6"
          style={{ padding: 0 }}
        >
          <div style={{ height: "100%" }}>
            <h1>Sharp SECD News</h1>
            <br />
            <span className="h5">
              Visit this page for the latest product and technology news from
              Sharp SECD.
            </span>
            <br />
            <br />
            <p>For media inquiries, please contact:</p>
            <p>
              Karamy Muessig, Xposure Unlimited <br />
              <a
                style={{ color: "#e61d24" }}
                className="redLink"
                href="mailto:karamy@xposureunlimited.com"
              >
                Karamy [at] XposureUnlimited.com
              </a>
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div
          data-aos="fade-left"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          className="col-md-6 flex justify-center"
        >
          <Image
            src={convdisp}
            alt="The outline of a Sharp display with a picture of flowers suggesting brightness and contrast"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* News Sections */}
      <NewsSection
        title="Sharp’s New Memory in Pixel LCD Features 64-Colors, Super Low-Power, and High Reflectivity for Portable Applications"
        date="May 6, 2025"
        description="Sharp has announced its new high-contrast, highly reflective
        3.5-inch (diagonal) 64-color Memory in Pixel display. It renders
        color at 18% NTSC and has a 9.0% reflectivity, which makes
        images pop even in direct sunlight or high-ambient lighting scenarios."
        pdf="/Documents/news-4.pdf"
        image={news4}
      />

      <NewsSection
        title="Sharp’s ePoster Display Module Eliminates Paper Signage Expense and Waste"
        date="April 03, 2025"
        description="Today, Sharp announced its new 28.5-inch ePoster display. The
        2160 x 3060 display module enables an ultra-low-power
        alternative to the expense and material waste of A2 poster printing."
        pdf="/Documents/Sharp-ePoster-28.5-inch--PR-FINAL.pdf"
        image={news1}
      />

      <NewsSection
        title="Sharp Memory in Pixel Display Combines Superb Visual Detail with Low-Power Operation"
        date="March 12, 2024"
        description="Today, Sharp announced its new high-contrast, highly-reflective
        2.16-inch monochrome Memory in Pixel display. It provides excellent
        viewability in high-ambient environments and can be either front-lit or
        back-lit for dim/dark environments."
        pdf="/Documents/news-3.pdf"
        image={news3}
      />

      <NewsSection
        title="Sharp’s New 64-color Memory LCD is Perfect for Wearable Product Designs"
        date="October 11, 2022"
        description="Today, Sharp Electronics Corporation, Device Division unveiled its new
        2.13-inch color Memory in Pixel LCD module. It delivers static or moving
        images in QVGA resolution and 64 colors, perfect for wearables and handhelds."
        pdf="/Documents/news-1.pdf"
        image={convdisp1}
      />

      <Footer />
    </>
  );
}

// Reusable News Section Component
function NewsSection({ title, date, description, pdf, image }) {
  return (
    <div
      className="padding-top-50 padding-bottom-30"
      style={{ backgroundColor: "#e4e4e4" }}
    >
      <div className="row container-row-85">
        <div className="col-md-6" style={{ padding: 0 }}>
          <h2 style={{ textDecoration: "underline" }}>{title}</h2>
          <p>{date}</p>
          <p>
            {description}
            <br />
            <a
              className="redLink"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#e61d24" }}
            >
              Read More..
            </a>
          </p>
        </div>
        <div className="col-md-6 flex justify-center">
          <Image
            src={image}
            alt={title}
            style={{ maxHeight: 400, width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
