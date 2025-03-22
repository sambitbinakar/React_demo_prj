import { ChevronDown, Menu } from "lucide-react";
import React, { useState } from "react";
import Button from "./button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="border-b border-b-neutral-100 w-full">
      <div className="flex items-center justify-between px-4 md:px-12">
        <div className="py-3 md:py-5">
          <img src="./Logo.png" alt="" className="h-10 md:h-14 object-cover" />
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 items-start md:items-center gap-4 md:gap-6`}>
          <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-100 font-medium w-full md:w-auto">
            <li className="flex items-center gap-2 mx-4 py-2 md:py-0">
              Products <ChevronDown size={18} />
            </li>
            <li className="flex items-center gap-2 mx-4 py-2 md:py-0">
              Solutions <ChevronDown size={18}/>
            </li>
            <li className="flex items-center gap-2 mx-4 py-2 md:py-0">
              Resources <ChevronDown size={18}/>
            </li>
            <li className="flex items-center gap-2 mx-4 py-2 md:py-0">
              Pricing <ChevronDown size={18}/>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto px-4 md:px-0">
            <button className="px-6 py-3 bg-[#FFE492] text-base font-semibold rounded-lg text-secondary w-full md:w-auto">
              Login
            </button>
            <Button text={"Try Whitepace free"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
