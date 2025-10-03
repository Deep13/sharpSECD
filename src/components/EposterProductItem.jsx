"use client";

import React from "react";

const Eposters_product_item = ({ item, showModal }) => {
  return (
    <div tabIndex={0} className="mb-2">
      <div
        tabIndex={-1}
        className="border rounded shadow-sm p-4 hover:shadow-md transition-shadow"
      >
        <h2>
          <button
            className="text-red-600 text-xl md:text-2xl font-semibold hover:underline p-0"
            onClick={showModal}
          >
            {item["PN"]}
          </button>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <div>
            <p className="text-sm">
              <span className="font-semibold">Diagonal Size: </span>
              {item["DIAGONAL SIZE"]}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Number of Colors: </span>
              {item["NUMBER OF COLORS"]}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Pixel Format: </span>
              {item["PIXEL FORMAT"]}
            </p>
          </div>
          <div>
            <p className="text-sm">
              <span className="font-semibold">Operating Temperature: </span>
              {item["OPERATING TEMP"]}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Reflectivity: </span>
              {item["REFLECTIVITY"]}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Storage Temp: </span>
              {item["STORAGE TEMP"]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eposters_product_item;
