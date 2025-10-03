"use client";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Import assets
import Screen3 from "@/assets/About-banner.jpg";
import logo from "@/assets/SHARP_Logo_red.png";
import image1 from "@/assets/Sharp-Memory-In-Pixel_700x1082.jpg";
import Auto from "@/assets/About-Auto.png";
import VR from "@/assets/About-VR.png";
import Exercise from "@/assets/About-Exercise.png";
import Healthcare from "@/assets/About-Healthcare.png";

export default function AboutUs() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>About Sharp SECD – 50+ Years of Display Innovation</title>
        <meta
          name="description"
          content="Sharp SECD has been a leader in display technology for over 50 years, offering cutting-edge displays for automotive, healthcare, VR, and more."
        />
      </Head>

      {/* Hero Section */}
      <section
        className="flex justify-center min-h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${Screen3.src})` }}
      >
        <div className="max-w-[1140px] w-full px-5 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex justify-center">
            <Image
              src={logo}
              alt="SHARP Logo"
              className="w-[250px] md:w-[300px]"
              priority
            />
          </div>
          <h1 className="text-white font-bold text-3xl lg:text-5xl text-center lg:text-left mt-8 lg:mt-0">
            PUSHING THE BOUNDARIES OF DISPLAY INNOVATION
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-12">
        <div className="max-w-[1140px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src={image1}
              alt="Sharp Memory In Pixel"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              50+ YEARS OF DISPLAY TECHNOLOGY LEADERSHIP
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Sharp has been a pioneer in the display technology industry,
              consistently innovating and delivering cutting-edge display
              solutions for diverse applications. Our memory-in-pixel and TFT
              technologies power devices across industries — automotive, VR,
              healthcare, fitness, and more.
            </p>
            <button
              onClick={() => navigateTo("/contact")}
              className="bg-[#E61D24] text-white py-3 px-8 rounded-lg hover:bg-red-700 transition"
            >
              Contact Sharp
            </button>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-[1140px] mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            DISPLAY APPLICATIONS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <Image
                src={Auto}
                alt="Automotive Display"
                className="w-[120px]"
              />
              <p className="mt-3 text-gray-700 font-semibold">Automotive</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={VR} alt="VR Display" className="w-[120px]" />
              <p className="mt-3 text-gray-700 font-semibold">VR / AR</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={Exercise}
                alt="Exercise Display"
                className="w-[120px]"
              />
              <p className="mt-3 text-gray-700 font-semibold">Fitness</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={Healthcare}
                alt="Healthcare Display"
                className="w-[120px]"
              />
              <p className="mt-3 text-gray-700 font-semibold">Healthcare</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E61D24] text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Partner with Sharp</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Explore how Sharp can provide high-performance display solutions for
          your next project.
        </p>
        <button
          onClick={() => navigateTo("/contact")}
          className="bg-white text-[#E61D24] font-semibold py-3 px-10 rounded-lg hover:bg-gray-200 transition"
        >
          Get in Touch
        </button>
      </section>
    </>
  );
}
