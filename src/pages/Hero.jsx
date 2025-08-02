import React from "react";
import bannerImg from "./../assets/banner.png";
import { FaSearch } from "react-icons/fa";
import Tooltipbutton from "../components/Tooltipbutton";

const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="md:pt-44 pt-24 text-center px-2 space-y-6 md:w-1/2 mx-auto ">
        <h1 className="text-3xl lg:text-3xl  font-medium lg:leading-tight leading-snug">
          Make Your Interior More Minimalistic & Modern
        </h1>
        <p className="text-xs font-normal lg:w-1/2  mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>

        {/* search field */}
        <div className="relative inline-block z-30">
          <input
            type="text"
            placeholder="search furniture"
            className="w-full  md:w-80  px-6 py-2 bg-white/25 placeholder:text-white/50 rounded-full border border-gray-300 focus:outline-none"
          />

          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer">
            <FaSearch />
          </div>
        </div>
      </div>

      {/* bottom blur effect */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>
    



      {/* hover button for diplaying tooltip box */}
        <div className="hidden xl:block absolute bottom-23 left-15"> 
          <Tooltipbutton position="bottom" />
        </div>
         <div className="hidden xl:block absolute top-40 left-24"> 
          <Tooltipbutton position="top" />
        </div>
    
    
    </section>
  );
};
export default Hero;
