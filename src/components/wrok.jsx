import React from "react";
import Button from "./Button";

function Working() {
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 px-4 sm:px-8 md:px-14 py-6 sm:py-8 md:py-12 lg:py-15">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1">
                <img
                    src="./work_img.png"
                    alt="Work collaboration"
                    className="w-full max-w-[400px] mx-auto h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-7 order-1 md:order-2 text-center md:text-left">
                <div className="relative">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold z-10">
                        Work together
                    </h1>
                    <img 
                        src="./sec3-vector.png" 
                        alt="" 
                        className='absolute h-8 sm:h-10 w-40 sm:w-60 z-0 left-1/2 md:left-20 -translate-x-1/2 md:translate-x-0'
                    />
                </div>
                <p className="text-sm sm:text-base lg:text-lg max-w-[600px] mx-auto md:mx-0">
                    With whitepace, share your notes with your colleagues and collaborate
                    on them. You can also publish a note to the internet and share the URL
                    with others.
                </p>
                <div className="flex justify-center md:justify-start">
                    <Button text={"Try it now"}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Working;
