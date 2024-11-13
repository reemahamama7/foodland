import React, { useState } from "react";
import image25 from "../img/image25.png";
import image24 from "../img/image24.png";
import image23 from "../img/image23.png";
import image22 from "../img/image22.png";
import image21 from "../img/image21.png";
import Group879 from "../img/Group879.png";

const Cat = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="font-bold text-[48px] mb-8 text-left mt-8">Categories</h1>
        <div className="grid grid-cols-6 gap-7 content-center justify-center">
          <div
            className="grid text-center justify-center rounded-larg h-[150%]"
            style={{
              background: "linear-gradient(0deg, rgba(112, 130, 70, 0.1) 0%, rgba(112, 130, 70, 0) 100%)",
            }}
          >
            {/* <img src={image25} /> */}
            <div className="relative mx-auto">
              <div
                className="absolute inset-0 rounded-full bg-blue-200"
                style={{
                  filter: "blur(20px)",
                  transform: "scale(1.2)",
                  zIndex: -1, // Keep shadow behind the image
                }}
              ></div>

              <img
                src={image25} // Replace with your image URL
                alt="Description"
                className="relative   w-[60%] justify-self-center mb-8"
              />
            </div>
            <p className="font-semibold text-base">Breakfast</p>
          </div>

          <div
            className="grid text-center justify-center rounded-larg h-[150%]"
            style={{
              background: "linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)",
            }}
          >
            {/* <img src={Group879} /> */}
            <div className="relative mx-auto">
              <div
                className="absolute inset-0 rounded-full bg-blue-100"
                style={{
                  filter: "blur(20px)",
                  transform: "scale(1.2)",
                  zIndex: -1, // Keep shadow behind the image
                }}
              ></div>

              <img
                src={Group879} // Replace with your image URL
                alt="Description"
                className="relative   w-[60%] justify-self-center mb-8"
              />
            </div>
            <p className="font-semibold text-base">Vegan</p>
          </div>

          <div
            className="grid text-center justify-center rounded-larg h-[150%]"
            style={{
              background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)",
            }}
          >
            {/* <img src={image23} /> */}
            <div className="relative mx-auto">
              <div
                className="absolute inset-0 rounded-full bg-red-100"
                style={{
                  filter: "blur(20px)",
                  transform: "scale(1.2)",
                  zIndex: -1, // Keep shadow behind the image
                }}
              ></div>

              <img
                src={image22} // Replace with your image URL
                alt="Description"
                className="relative   w-[60%] justify-self-center mb-8"
              />
            </div>
            <p className="font-semibold text-base">launch</p>
          </div>

          <div
            className="grid text-center justify-center rounded-larg h-[150%]"
            style={{
              background: "linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)",
            }}
          >
            {/* <img src={image22} /> */}
            <div className="relative mx-auto">
              <div
                className="absolute inset-0 rounded-full bg-red-200"
                style={{
                  filter: "blur(20px)",
                  transform: "scale(1.2)",
                  zIndex: -1, // Keep shadow behind the image
                }}
              ></div>

              <img
                src={image22} // Replace with your image URL
                alt="Description"
                className="relative   w-[60%] justify-self-center mb-8"
              />
            </div>
            <p className="font-semibold text-base">Dessert</p>
          </div>

          <div
            className="grid text-center justify-center rounded-larg h-[150%]"
            style={{
              background: "linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)",
            }}
          >
            {/* <img src={image21} /> */}
            <div className="relative mx-auto">
              <div
                className="absolute inset-0 rounded-full bg-red-200"
                style={{
                  filter: "blur(20px)",
                  transform: "scale(1.2)",
                  zIndex: -1, // Keep shadow behind the image
                }}
              ></div>

              <img
                src={image21} // Replace with your image URL
                alt="Description"
                className="relative   w-[60%] justify-self-center mb-8"
              />
            </div>
            <p className="font-semibold text-base">Meat</p>
          </div>
          <div
            className="grid text-center justify-center rounded-larg h-[150%]"
            style={{
              background: "linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)",
            }}
          >
            <div className="relative mx-auto">
              <div
                className="absolute inset-0 rounded-full bg-red-200"
                style={{
                  filter: "blur(20px)",
                  transform: "scale(1.2)",
                  zIndex: -1, // Keep shadow behind the image
                }}
              ></div>

              <img
                src={image21} // Replace with your image URL
                alt="Description"
                className="relative   w-[60%] justify-self-center mb-8"
              />
            </div>
            <p className="font-semibold text-base">Lunch</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cat;
