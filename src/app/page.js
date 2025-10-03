"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import Jumbo from "@/components/Jumbo";
import Footer from "@/components/Footer";
import FullHeightDivWithImageRight from "@/components/FullHeightDivWithImageRight";
import HomeContent from "@/json/HomeContent";
import { Card } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/navigation";

import picture1 from "@/assets/Picture1.jpg";
import picture2 from "@/assets/Picture2.jpg";
import picture4 from "@/assets/Picture4.jpg";
import logo from "@/assets/Sharp-Logo.png";

export default function Home() {
  const router = useRouter();

  const handleLink = (e, link) => {
    e.preventDefault();
    router.push(link); // ✅ Next.js navigation (no reload)
  };

  return (
    <ParallaxProvider
      init={{
        smoothScrollingDuration: 100,
        smoothScrolling: true,
        forceHeight: false,
      }}
    >
      <main className="bg-white">
        <Jumbo />

        {/* Intro Section */}
        <section
          className="mobile-padding-40 text-center justify-center p-[60px]"
          role="main"
        >
          <div tabIndex={0} id="main-content">
            <h1
              tabIndex={-1}
              className="main-header text-left"
              style={{ fontSize: "2.5rem" }}
            >
              Make Your Product Shine with Our Reflective, Low-Power, Sunlight
              Viewable Displays
            </h1>
          </div>

          <div className="row">
            <div tabIndex={0} className="col-md-6">
              <div
                tabIndex={-1}
                className="mob-top-div text-left text-[1.2rem] pt-12 pr-12"
              >
                <div className="mb-4">
                  Sharp wrote the book when it comes to displays that perform in
                  the most challenging environments. Today, there are endless
                  applications for displays that can stand up to extreme
                  lighting conditions or the need to render mission-critical
                  detail.
                </div>
                <div className="mb-4">
                  Our line-up includes the best in Sharp reflective technology,
                  from our Memory-in-Pixel LCDs to new Reflective IGZO display
                  modules that enable thin, lightweight products with ultra-low
                  power requirements. And we continue to offer some of the
                  toughest Industrial LCD specifications in the industry.
                </div>
              </div>
            </div>

            <div className="col-md-6 flex justify-center items-center p-[60px]">
              <Image
                src={logo}
                alt="SHARP Logo"
                role="presentation"
                style={{ width: "70%" }}
              />
            </div>
          </div>
        </section>

        {/* FullHeight Sections */}
        <FullHeightDivWithImageRight
          bg="#e4e4e4"
          content={HomeContent.content[0]}
          image={picture1}
          alt="Memory in pixel LCD"
        >
          <Card.Text className="text-left text-[1.2rem]">
            Our
            <a
              href="/memory-in-pixel-lcds-product"
              className="text-[#e61d24]"
              onClick={(e) => handleLink(e, "/memory-in-pixel-lcds-product")}
            >
              {" "}
              Memory-in-Pixel{" "}
            </a>
            displays offer best-of-class performance with ultra-low power
            consumption and high readability in almost any ambient lighting
            environment.
          </Card.Text>
          <Card.Text className="text-left text-[1.2rem]">
            Choose from eye-catching 64-color or high-contrast monochrome for
            designs ranging from wearables to medical devices to smart meters
            and many more.
          </Card.Text>
        </FullHeightDivWithImageRight>

        <FullHeightDivWithImageRight
          bg="white"
          content={HomeContent.content[1]}
          image={picture2}
          alt="Reflect IGZO"
        >
          <Card.Text className="text-left text-[1.2rem]">
            Our full-color, low-power
            <a
              href="/reflective-igzo-displays-product"
              className="text-[#e61d24]"
              onClick={(e) =>
                handleLink(e, "/reflective-igzo-displays-product")
              }
            >
              {" "}
              Reflective IGZO{" "}
            </a>
            displays are the latest advancement built on Sharp’s IGZO-TFT
            technology.
          </Card.Text>
          <Card.Text className="text-left text-[1.2rem]">
            They’re the perfect solution for battery-operated handheld and
            outdoor applications where fantastic readability is required.
          </Card.Text>
        </FullHeightDivWithImageRight>

        <FullHeightDivWithImageRight
          bg="#e4e4e4"
          content={HomeContent.content[3]}
          image={picture4}
          alt="Industrial LCD"
        >
          <Card.Text className="text-left text-[1.2rem]">
            Whether it’s all-Sharp out of the box or a high-performance solution
            by a Sharp value-add partner, we work with you and the industry’s
            best talent to find the perfect
            <a
              href="/industrial-lcds-product"
              className="text-[#e61d24]"
              onClick={(e) => handleLink(e, "/industrial-lcds-product")}
            >
              {" "}
              General Purpose LCD{" "}
            </a>
            module for your project.
          </Card.Text>
          <Card.Text className="text-left text-[1.2rem]">
            We deliver multi-touch PCAP, high-brightness, high-contrast, wide
            viewing angles, and wide operating temperatures for performance in
            the most challenging environments.
          </Card.Text>
        </FullHeightDivWithImageRight>

        <Footer />
      </main>
    </ParallaxProvider>
  );
}
