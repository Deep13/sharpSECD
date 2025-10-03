"use client";

import { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

import Footer from "@/components/Footer";
import { Toast, ToastHeader, ToastBody } from "react-bootstrap"; // still works with next

import Screen3 from "@/assets/Crater_Lake.jpg";
import Screen1 from "@/assets/Crater_Lake_Sky.jpg";
import logo from "@/assets/sharp_logo.png";
import image1 from "@/assets/mip.png";
import image2 from "@/assets/rbaloon.png";
import icon from "@/assets/Icon1.png";
import icon2 from "@/assets/Icon2.png";
import icon3 from "@/assets/Icon3.png";
import icon4 from "@/assets/Icon4.png";
import { ClipLoader } from "react-spinners";

export default function MemoryInPixel() {
  const [formData, setFormData] = useState({
    name: "",
    mobileCode: "",
    mobile: "",
    email: "",
    message: "",
    demo: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef(null);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, demo: !formData.demo });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      const data = {
        name: formData.name,
        mobile: `${formData.mobileCode}-${formData.mobile}`,
        email: formData.email,
        message: formData.demo
          ? `Yes, I’d like to request a demo. ${formData.message}`
          : formData.message,
        subject: ["Reflective LCD Landing Page"],
      };

      await axios.post("/api/form", data);

      setSubmitSuccess(true);
      setFormData({
        name: "",
        mobileCode: "",
        mobile: "",
        email: "",
        message: "",
        demo: false,
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError(true);
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Reflective LCD - Sharp</title>
        <meta name="description" content="Sharp-Reflective-LCD" />
      </Head>

      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center min-h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${Screen3.src})` }}
      >
        <Image
          src={logo}
          alt="SHARP Logo"
          role="presentation"
          className="w-[35%] max-w-[300px] pt-24"
        />
        <h1 className="text-white text-center text-3xl sm:text-4xl font-bold bg-black/30 p-3 mt-6">
          LEADING THE WAY IN REFLECTIVE <br /> DISPLAY TECHNOLOGY
        </h1>
      </div>

      {/* Info Section */}
      <section className="flex flex-col items-center bg-white">
        <div className="max-w-[1140px] flex flex-col md:flex-row p-5 md:p-10 gap-8">
          <p className="text-xl md:w-1/2">
            Typically, outdoor sunlight-readable displays require a high-power
            backlight to provide 1200+ nits brightness to overcome the sun. In
            applications that require a true low-power display, traditional
            transmissive LCDs were not an option without major performance
            compromises.
          </p>
          <p className="text-xl md:w-1/2">
            Sharp's reflective display technologies provide the right solution
            when low-power AND sunlight viewability are required. The brighter
            the environment, the better they look. Both backlight and frontlight
            options are available to ensure the display is viewable under{" "}
            <i>all</i> conditions -- even when ambient light is limited.
          </p>
        </div>

        {/* Features Section */}
        <div
          className="w-full bg-cover bg-center flex justify-center py-24"
          style={{ backgroundImage: `url(${Screen1.src})` }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                icon,
                title: "HIGH READABILITY",
                text: "From edge-of-vision to bright sunlight",
              },
              {
                icon: icon2,
                title: "LOW-POWER",
                text: "No backlight required in reflective mode",
              },
              {
                icon: icon3,
                title: "WIDE TEMPERATURES",
                text: "Operates in even the most extreme environments",
              },
              {
                icon: icon4,
                title: "THIN + LIGHTWEIGHT",
                text: "Slim profile enables compact product design",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={90}
                  height={90}
                />
                <h2 className="text-xl font-bold p-2">{item.title}</h2>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-[1140px] w-full px-5 py-16">
          <h1 className="text-4xl font-bold mb-4">PRODUCTS</h1>
          <div className="h-1 bg-red-600 w-full mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                img: image1,
                title: "MEMORY IN PIXEL LCDs",
                text: "Choose from monochrome or 64-color for wearable and remote applications",
                desc: "Our Memory-In-pixel (MIP) technology provides high performance solutions for wearable and portable applications. Sizes range from 1.08-inch to 4.4-inch (diagonal) with static-image operation at power levels as low as 10's of microamps.",
                link: "/MemoryInPixel",
              },
              {
                img: image2,
                title: "R-IGZO LCDs",
                text: "Full-color and high-resolution for hand-held and signage applications",
                desc: "Our Reflective IGZO displays combine full-color and high resolution in a low-power reflective LCD. Current available sizes are 5.0-inch (diagonal) for hand-held, portable applications and 32-inch (diagonal) targeted at outdoor signage applications. Both sizes include low-power backlighting for low-ambient viewing.",
                link: "/ReflectiveIGZO",
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="border-2 border-gray-300 p-4 flex flex-col justify-between"
              >
                <Image
                  src={product.img}
                  alt={product.title}
                  className="w-full"
                />
                <h2 className="text-2xl font-bold p-2">{product.title}</h2>
                <p className="font-semibold p-2">{product.text}</p>
                <p className="p-2">{product.desc}</p>
                <a
                  href={product.link}
                  className="block text-center text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition-all p-3 rounded-md mt-4"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full bg-[#2d2f41] flex justify-center py-16">
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="bg-transparent w-[70%] flex flex-col gap-4"
          >
            <h1 className="text-white text-3xl text-center font-bold mb-8">
              WANT TO KNOW MORE ABOUT SHARP REFLECTIVE DISPLAYS?
            </h1>

            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 rounded-md"
              value={formData.email}
              onChange={handleChange("email")}
            />
            <input
              type="text"
              placeholder="Name"
              required
              className="p-3 rounded-md"
              value={formData.name}
              onChange={handleChange("name")}
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="+1"
                required
                className="p-3 w-24 rounded-md"
                value={formData.mobileCode}
                onChange={handleChange("mobileCode")}
              />
              <input
                type="text"
                placeholder="Contact number"
                maxLength={10}
                required
                className="p-3 flex-1 rounded-md"
                value={formData.mobile}
                onChange={handleChange("mobile")}
              />
            </div>
            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={formData.demo}
                onChange={handleCheckboxChange}
              />
              Yes, I’d like to request a demo
            </label>
            <textarea
              placeholder="Comments (optional)"
              rows={3}
              className="p-3 rounded-md"
              value={formData.message}
              onChange={handleChange("message")}
            />

            <button
              type="submit"
              disabled={submitted}
              className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-md w-full"
            >
              {loading ? (
                <ClipLoader className="animate-spin mx-auto" />
              ) : (
                "Submit"
              )}
            </button>

            {submitSuccess && (
              <Toast className="bg-green-500 text-white mt-4">
                <ToastHeader closeButton={false}>
                  <strong className="me-auto">Success</strong>
                </ToastHeader>
                <ToastBody>
                  Thank You! Your query has been successfully submitted.
                </ToastBody>
              </Toast>
            )}

            {submitError && (
              <Toast className="bg-red-500 text-white mt-4">
                <ToastHeader closeButton={false}>
                  <strong className="me-auto">Error</strong>
                </ToastHeader>
                <ToastBody>
                  We were unable to receive your query. Please try again.
                </ToastBody>
              </Toast>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
