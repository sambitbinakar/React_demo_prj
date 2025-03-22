import { ArrowRight } from "lucide-react";
import React from "react";

function Datapage() {
  return (
    <div>
      <div className="mt-5 sm:mt-8 md:mt-10 py-4 md:py-7">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-4 sm:px-6 md:px-20 lg:px-24">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-7 text-center md:text-left">
            <div className="relative">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold z-10 leading-tight">
                100% your data
              </h1>
              <img
                src="./sec3-vector.png"
                alt=""
                className="absolute h-8 sm:h-10 md:h-12 w-48 sm:w-60 md:w-72 z-0 left-1/2 md:left-16 -translate-x-1/2 md:translate-x-0"
              />
            </div>
            <p className="text-sm md:text-base text-gray-700 px-2 md:px-0">
              The app is open source and your notes are saved to an open format,
              so you'll always have access to them. Uses End-To-End Encryption
              (E2EE) to secure your notes and ensure no-one but yourself can
              access them.
            </p>
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 bg-primary rounded-lg text-sm md:text-base font-semibold text-white flex gap-2 md:gap-3 items-center justify-center md:justify-start tracking-tight">
                Read more<ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="./data-img.png"
              alt="data security"
              className="w-full max-w-[450px] mx-auto h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datapage;
