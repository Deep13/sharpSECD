"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import screen3 from "@/assets/HomepageNoBottomLayers.jpeg";

export default function Jumbo() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="flex justify-center" data-aos="fade-up">
      <Image
        src={screen3}
        alt="SHARP Banner"
        priority
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
