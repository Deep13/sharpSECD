"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FullHeightDivWithImageRight({
  bg = "#fff",
  content,
  children,
  link,
  alt,
  image,
}) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="flex flex-col md:flex-row" style={{ backgroundColor: bg }}>
      {/* Left Content Section */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div data-aos="fade-right" className="max-w-xl w-full space-y-6">
          <h2 className="text-4xl font-bold text-left">{content.title}</h2>
          <div>{children}</div>
          <a
            href={link}
            aria-label={`learn-more-${content.title}`}
            className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 rounded-xl px-6 py-3 text-lg"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div data-aos="fade-left" className="w-full">
          <Image
            src={image}
            alt={alt}
            width={800}
            height={600}
            className="w-full object-contain rounded-xl"
            style={{ paddingBlock: 30 }}
          />
        </div>
      </div>
    </div>
  );
}
