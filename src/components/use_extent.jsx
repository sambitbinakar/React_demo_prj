import React from "react";
import Button from "./button";

function Use_Extent() {
  return (
    <div className="bg-secondary w-full">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 gap-8 md:gap-12">
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-7 text-center md:text-left">
          <div className="relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold z-10 text-white leading-tight">
              Use as Extension
            </h1>
            <img
              src="./sec3-vector.png"
              alt=""
              className="absolute h-8 sm:h-10 w-40 sm:w-60 z-0 left-1/2 md:left-20 -translate-x-1/2 md:translate-x-0"
            />
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-[600px] mx-auto md:mx-0">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button text={"Let's Go"} />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-8">
          <img 
            src="./sec3-img.png" 
            alt="Extension preview" 
            className="w-full max-w-[450px] mx-auto h-auto rounded-lg shadow-xl hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>
    </div>
  );
}

export default Use_Extent;
