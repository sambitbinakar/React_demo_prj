import React from "react";
import Button from "../components/Button";
import { ChevronDown, Copyright, Globe } from "lucide-react";

const Proucts = ["Overview", "Pricing", "Customer stories"];
const Resources = ["Blog", "Guides & tutorials", "Help center"];
const Company = ["About us", "Careers", "Media kit"];

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="mx-4 md:mx-24 py-5 md:py-10 px-4 md:px-15">
        <div className="border-b flex flex-col md:flex-row items-start md:items-center gap-8 md:space-x-14 px-2 md:px-5 py-5 md:py-10 md:justify-around">
          <div className="space-y-2.5 w-full md:w-1/5">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <img
                src="./whitpacelogo.png"
                alt=""
                className="h-5 object-contain"
              />
              whitepace
            </h2>
            <p className="text-sm">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
            <div className="space-y-2.5">
              <h2 className="font-semibold text-sm">Products</h2>
              {Proucts.map((item, index) => (
                <p key={index} className="text-sm ">
                  {item}
                </p>
              ))}
            </div>
            <div className="space-y-2.5">
              <h2 className="font-semibold text-sm">Resources</h2>
              {Resources.map((item, index) => (
                <p key={index} className="text-sm ">
                  {item}
                </p>
              ))}
            </div>
            <div className="space-y-2.5">
              <h2 className="font-semibold text-sm">Company</h2>
              {Company.map((item, index) => (
                <p key={index} className="text-sm">
                  {item}
                </p>
              ))}
            </div>
            <div className="space-y-2.5 col-span-2 md:col-span-1">
              <h2 className="text-lg font-semibold">Try It Today</h2>
              <p>Get started for free. Add your whole team as your needs grow</p>
              <Button text={"Start today"} />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-sm">
            <h2 className="flex items-center text-base gap-1"><Globe size={18}/>English <ChevronDown size={18} /></h2>
            <h2>Terms & Privacy</h2>
            <h2>Security</h2>
            <h2>Status</h2>
            <h2 className="flex items-center gap-1"><Copyright size={18} />2021 Whitepace LLC.</h2>
          </div>
          <img src="./medialogo.png" alt="" className="h-5 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
