import React from "react";
import EngineIcon from "../assets/icon1.jpeg";
import TrailerIcon from "../assets/icon2.jpeg";
import OnCallIcon from "../assets/icon3.jpeg";
import TruckIcon from "../assets/icon4.jpeg";
import CarIcon from "../assets/icon5.jpeg";
import DriveIcon from "../assets/icon6.jpeg";
import Card from "./card";
import DefaultAccordion from "./DefaultAccordion";
const Categories = () => {
  return (
    <>
      <div className="relative bg-blackColor overflow-x-hidden flex-col xl:w-full lg:w-full md:w-full w-[530px] xl:max-h-[1436px] h-full mx-auto py-4 mt-auto xl:mt-0 sticky pb-2 justify-between items-center">
        <div className="flex items-center justify-center">
          <div className="bg-yellowColor relative mt-20  rounded-2xl py-2 xl:px-[64px] px-[18px] xl:mt-28 mb-4">
            <p className="py-2 px-4 text-2xl font-bold text-black">
              Categories
            </p>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 xl:gap-[80px] md:gap-[70px]  py-8 xl:mb-32 pb-4 xl:px-[180px] mx-7 mb-8 pl-6 ">
          <div className="text-center xl:mt-2 xl:pt-2 mb-14 border-2 border-yellowColor mr-4 rounded-3xl shadow-lg ">
            <div className="py-2 mt-2.5 overflow-hidden flex justify-center items-center">
              <img
                src={EngineIcon}
                className="mt-12 w-[120px]  hover:scale-125 duration-1000"
              />
            </div>
            <div className="bg-yellowColor relative rounded-2xl mx-2 py-2 xl:mx-[8px] mt-14 mb-2">
              <p className="py-2 xl:px-8 px-3 xl:text-xl text-sm font-bold text-black">
                Engine Tuning
              </p>
            </div>
          </div>
          <div className="text-center xl:mt-2 xl:pt-2 mb-14 border-2 mr-4 border-yellowColor rounded-3xl shadow-lg ">
            <div className="py-2 mt-2.5 overflow-hidden flex justify-center items-center">
              <img
                src={TrailerIcon}
                className="mt-12 w-[120px] hover:scale-125 duration-1000"
              />
            </div>
            <div className="bg-yellowColor relative rounded-2xl py-2 mx-2 xl:mx-[8px] mt-14 mb-2">
              <p className="py-2 xl:px-8 px-3 xl:text-xl text-sm font-bold text-black">
                Trailer Repair{" "}
              </p>
            </div>
          </div>
          <div className="text-center xl:mt-2 xl:pt-2 mb-14 border-2 mr-4 border-yellowColor rounded-3xl shadow-lg ">
            <div className="py-2 mt-2.5 overflow-hidden flex justify-center items-center">
              <img
                src={OnCallIcon}
                className="mt-12 w-[120px] hover:scale-125 duration-1000"
              />
            </div>
            <div className="bg-yellowColor relative rounded-2xl py-2 mx-2 xl:mx-[8px] mt-14 mb-2">
              <p className="py-2 xl:px-8 px-3 xl:text-xl text-sm font-bold text-black">
                On-Call Service{" "}
              </p>
            </div>
          </div>
          <div className="text-center xl:mt-2 xl:pt-2 mb-14 border-2 mr-4 border-yellowColor rounded-3xl shadow-lg ">
            <div className="py-2 mt-2.5 overflow-hidden flex justify-center items-center">
              <img
                src={TruckIcon}
                className="mt-12 w-[120px] hover:scale-125 duration-1000"
              />
            </div>
            <div className="bg-yellowColor relative rounded-2xl py-2 mx-2 xl:mx-[8px] mt-14 mb-2">
              <p className="py-2 xl:px-8 px-3 xl:text-xl text-sm font-bold text-black">
                Truck Repair
              </p>
            </div>
          </div>
          <div className="text-center xl:mt-2 xl:pt-2 mb-14 border-2 mr-4 border-yellowColor rounded-3xl shadow-lg ">
            <div className="py-2 mt-2.5 overflow-hidden flex justify-center items-center">
              <img
                src={CarIcon}
                className="mt-12 w-[120px] hover:scale-125 duration-1000"
              />
            </div>
            <div className="bg-yellowColor relative rounded-2xl py-2 mx-2 xl:mx-[8px] mt-14 mb-2">
              <p className="py-2 xl:px-8 px-3 xl:text-xl text-sm font-bold text-black">
                Car Repair
              </p>
            </div>
          </div>
          <div className="text-center xl:mt-2 xl:pt-2 mb-14 border-2 mr-4 border-yellowColor rounded-3xl shadow-lg ">
            <div className="py-2 mt-2.5 overflow-hidden flex justify-center items-center">
              <img
                src={DriveIcon}
                className="mt-12 w-[120px] hover:scale-125 duration-1000"
              />
            </div>
            <div className="bg-yellowColor relative rounded-2xl py-2 mx-2 xl:mx-[8px] mt-14 mb-2">
              <p className="py-2 xl:px-8 px-3 xl:text-xl text-sm font-bold text-black">
                Driving School
              </p>
            </div>
          </div>
        </div>
      </div>
      <Card />
      <DefaultAccordion />
    </>
  );
};
export default Categories;
