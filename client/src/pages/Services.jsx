import { useState } from "react";
import HtLogo from "../assets/htlogo.png";
import TextRating from "../constants/TextRating";
import { useStateValue } from "../context/StateProvider.jsx";
import { MdWifiCalling3 } from "react-icons/md";

const Services = ({
  id,
  name,
  countryName,
  stateName,
  cityName,
  mobileNumber,
}) => {
  return (
    <>
      <div className="flex items-center justify-center mt-10 mb-6">
        <div className="flex xl:grid-rows-3 md:grid-rows-3 gap-8 xl:gap-4 xl:py-auto py-8 pb-2 w-full md:px-[16px] xl:px-auto">
          <div className="border-yellowColor border-2 w-[340px] md:w-full xl:w-[1100px] xl:h-auto mx-auto xl:mt-12 rounded-[20px] shadow-lg">
            <div
              key={id}
              className="grid lg:grid-cols-2 md:grid-cols-2 xl:w-1/2"
            >
              <div className="mx-2.5 pb-2 mt-2 ">
                <img
                  className=" xl:w-[200px] xl:h-[150px] w-[315px] h-[200px] rounded-[20px]"
                  src={HtLogo}
                />
              </div>

              <div>
                <p className="text-white mt-0 ml-4 xl:text-2xl md:text-xl text-[17px] ">
                  {name}
                  <br />
                  <p className="xl:text-[12px] text-sm text-auto mt-0 text-gray-300">
                    {cityName},{stateName},{countryName}
                    {/* <br /> United States */}
                  </p>
                </p>
                <div className="display inline-flex mx-2 grid-cols-3 gap-2 xl:w-[600px] md:w-auto w-[460px] mt-2">
                  <button className="bg-gray-700 relative w-32 rounded-[10px] h-[30px] xl:w-[150px] md:w-[90px] xl:pr-4 xl:mt-2 xl:mr-4 xl:mb-3 text-[9px]  text-white">
                    Truck Repair Shop
                  </button>
                  <button className="bg-gray-700 relative w-32 rounded-[10px] h-[30px] xl:w-[150px] md:w-[90px] xl:pr-4 xl:mt-2 xl:mr-4 xl:mb-3 text-[9px] text-white">
                    Truck engine repair
                  </button>
                </div>
                <TextRating />
              </div>
              <div className="display inline-flex grid pl-4 grid-cols-2 w-[320px] lg:w-[810px] md:w-[410px] xl:w-[1090px]">
                <button className="bg-yellowColor relative rounded-[10px] h-[46px] px-1 pr-4 mt-1 mr-4 mb-3 xl:text-2xl text-md font-bold text-black">
                  Visit Website
                </button>
                <button className="bg-yellowColor grid grid-cols-2 gap-2 relative rounded-[10px] h-[46px]  mt-1 mb-3 xl:text-2xl xl:pr-48 lg:pr-48 md:pr-16 pr-20 py-2 text-md font-bold text-black">
                  <MdWifiCalling3 className="xl:ml-40 md:ml-12 ml-5 xl:mt-2 md:mt-1 mt-1" />
                  {mobileNumber}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
