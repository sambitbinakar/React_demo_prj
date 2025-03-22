import React from "react";
import Button from "./Button";

function Custom_needs() {
  return (
    <div className="mt-8 sm:mt-10 mx-4 sm:mx-8 md:mx-12 lg:mx-20 px-4 sm:px-8 md:px-12 lg:px-15 py-6 sm:py-8 md:py-10">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src="./sec4-img.png"
            alt="Customization features"
            className="w-full max-w-[400px] mx-auto h-auto object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-7 order-1 md:order-2 text-center md:text-left">
          <div className="relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold z-10 leading-tight">
              Customise it to
              <br className="hidden md:block" /> your needs
            </h1>
            <img
              src="./sec3-vector.png"
              alt=""
              className="absolute h-8 sm:h-10 md:h-12 w-40 sm:w-60 md:w-72 z-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0"
            />
          </div>
          <p className="text-sm sm:text-base lg:text-lg max-w-[600px] mx-auto md:mx-0">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button text={"Let's Go"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custom_needs;
