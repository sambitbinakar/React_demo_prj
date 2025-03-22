import React from "react";

const company =[
    {
        path:"./Apple.png",
        name:"apple"
    },
    {
        path:"./microsoft.png",
        name:"microsoft"
    },
    {
        path:"./slack.png",
        name:"slack"
    },
    {
        path:"./Google.png",
        name:"google"
    },
]

function Sponsor() {
  return (
    <div className="mt-5 md:mt-10 py-5 md:py-10">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="relative text-3xl md:text-5xl font-bold z-10">Our Sponsors</h1>
          <img src="./sec3-vector.png" alt="" className="absolute h-10 md:h-14 w-40 md:w-60 z-0 ml-5 md:ml-10"/>
        </div>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-around gap-4 mt-5 md:mt-10 py-3 md:py-5 px-4">
        {company.map((image)=>(
            <img src={image.path} alt={image.name} className="object-contain h-12 md:h-20 w-24 md:w-32"/>
        ))}
      </div>
    </div>
  );
}

export default Sponsor;
