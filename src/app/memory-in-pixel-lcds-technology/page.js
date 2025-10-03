"use client";

import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import convdisp from "@/assets/product_memory_lcd_2.jpg";
import convdisp1 from "@/assets/Sharp-Technology-MIP-Power-Consumption-1.png";
import convdisp2 from "@/assets/Sharp-Technology-MIP-Data-Memory-2.png";
import convdisp3 from "@/assets/Sharp-Technology-MIP-Image-Refresh-3.png";
import convdisp4 from "@/assets/Sharp-Technology-MIP-Simple-Interface-4.png";
import Footer from "@/components/Footer";

export default function MemoryLCD() {
  const router = useRouter();

  useEffect(() => {
    AOS.init();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const navigateTo = (link) => {
    router.push(link);
  };

  return (
    <>
      <Head>
        <title>Memory-in-Pixel LCD Technology Overview | Sharp SECD</title>
        <meta
          name="description"
          content="Understand how Sharp’s Memory-in-Pixel LCDs use embedded pixel memory to enable ultra-low power, high-resolution, sunlight-readable display designs."
        />
      </Head>

      {/* Hero Section */}
      <section className="max-w-[1140px] mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Memory-in-Pixel LCD Technology
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-semibold">
            High Resolution. Long Battery Life. Thin, Lightweight Design.
          </p>
          <p className="mt-4 text-gray-700">
            The{" "}
            <button
              onClick={(e) => navigateTo("/memory-in-pixel-lcds-product")}
              className="text-[#e61d24] underline hover:text-red-700"
            >
              Memory-in-Pixel LCD
            </button>{" "}
            combines matrix technology with a one-bit memory circuit embedded
            into every pixel, so information is retained once it's written.
          </p>
          <p className="mt-2 text-gray-700">
            This allows the design of products with ultra-low power consumption
            and long battery life. It also delivers higher resolution, shock,
            and temperature tolerance than E-Ink (electronic paper) displays.
          </p>
          <button
            onClick={() => navigateTo("/contact")}
            className="mt-6 border border-[#e61d24] text-[#e61d24] hover:bg-[#e61d24] hover:text-white transition px-6 py-2 rounded-lg"
          >
            Find a Rep
          </button>
        </div>
        <div data-aos="fade-left" className="flex justify-center">
          <Image
            src={convdisp}
            alt="Sharp Memory in Pixel Display"
            className="rounded-lg shadow-md"
            priority
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-200 py-12">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10">
            Key Sharp Memory-in-Pixel Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-[#e61d24]">1</div>
              <div>
                <h3 className="font-bold text-lg">
                  Ultra Low Power Consumption
                </h3>
                <p>Microwatt range (Typ.)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-[#e61d24]">2</div>
              <div>
                <h3 className="font-bold text-lg">High Readability</h3>
                <p>
                  Viewable in any light, from edge-of-vision to brightest
                  sunlight
                </p>
                <p>Reflective, plus Transflective models</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-[#e61d24]">3</div>
              <div>
                <h3 className="font-bold text-lg">Simple Interface</h3>
                <p>Single 5V or 3.3V supply</p>
                <p>3-wire SPI interface</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-[#e61d24]">4</div>
              <div>
                <h3 className="font-bold text-lg">
                  Wide/Symmetrical Viewing Angle
                </h3>
                <p>Typically 120° × 120°</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Low Power Consumption */}
      <section className="max-w-[1140px] mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-8">Ultra-low Power Consumption</h2>
        <Image
          src={convdisp1}
          alt="Power Consumption Chart"
          className="mx-auto"
        />
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <p>
            Requires just 1/40 ～ 1/80 of an STN LCD’s power consumption and
            1/1000 of an AM-TFT LCD’s power consumption. Excellent reflective
            display performance without the need for a backlight.
          </p>
          <p>
            Embedded pixel memory stores graphic data, so continuous refresh is
            not required for a still image. Less power is needed during refresh
            than with traditional graphic displays.
          </p>
        </div>
      </section>

      {/* Data Memory in Each Pixel */}
      <section className="bg-gray-200 py-12">
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Data Memory in Each Pixel</h2>
          <Image
            src={convdisp2}
            alt="Data Memory Diagram"
            className="mx-auto"
          />
          <p className="mt-6 max-w-2xl mx-auto">
            Embedded driver and peripheral circuits are monolithic on the TFT
            glass. Each pixel contains 1-bit memory.
          </p>
        </div>
      </section>

      {/* Fast Image Refresh */}
      <section className="max-w-[1140px] mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-8">Fast Image Refresh Time</h2>
        <Image src={convdisp3} alt="Image Refresh Chart" className="mx-auto" />
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <p>
            MIP LCDs have fast response times for scrolling text and moving
            images.
          </p>
          <p>
            Cholesteric, STN, and E-Ink displays require longer times to update
            the display image (several hundred milliseconds).
          </p>
        </div>
      </section>

      {/* Simple 3-Wire Interface */}
      <section className="bg-gray-200 py-12">
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Simple 3-Wire Interface</h2>
          <Image
            src={convdisp4}
            alt="3-Wire Interface Diagram"
            className="mx-auto"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <p>
              Simple 3-wire Serial I/F connectivity (SI, SCS, SCLK). Only a
              single 3V or 5V power supply is required.
            </p>
            <p>
              Only 3 external capacitors are required. Fewer peripheral
              components = simplified design process.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
