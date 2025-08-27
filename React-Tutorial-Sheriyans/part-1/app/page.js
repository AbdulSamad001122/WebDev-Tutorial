"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";
import axios from "axios";

const page = () => {
  const [images, setimages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      console.log("fetched data:", data);
      setimages(data); // ✅ set the full array
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-6">
        <div className="p-20">
          <h1 className="text-3xl font-bold mt-5 mb-5">This Is Home Page</h1>
          <button
            onClick={fetchImages}
            className="p-5 text-2xl font-bold text-white bg-green-500 rounded-2xl cursor-pointer hover:bg-green-950"
          >
            Get Images
          </button>
        </div>

        <div className="p-10">
          {images.map((each_img, i) => {
            return (
              <img
                key={i}
                src={each_img.download_url}
                width={300}
                height={300}
                className="m-4 rounded inline-block"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
