import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Carousel } from "flowbite-react";
import Blogs from "./Blogs";
import Categories from "./Categories";
import pc1 from "../assets/pic3.jpeg";
import pc2 from "../assets/pic2.jpeg";
import pc3 from "../assets/pic-new.jpg";
import pc4 from "../assets/pic5.jpeg";

const Home = () => {
  return (
    <>
      <div className="xl:h-screen xl:w-full lg:w-full md:w-full w-[530px] bg-black xl:mx-auto relative group overflow-hidden">
        <Carousel className="w-full xl:top-[-210px] transition={{ duration: 200 }} mx-auto xl:top-[0px]">
          <div className="flex bg-black rounded-none  h-full items-center justify-center relative">
            <div>
              <img src={pc1} alt="" />
            </div>
          </div>
          <div className="flex bg-black h-full rounded-none items-center justify-center relative">
            <div>
              <img src={pc2} alt="" />
            </div>
          </div>
          <div className="flex h-full rounded-none items-center justify-center relative">
            <div>
              <img  src={pc3} alt="" />
            </div>
          </div>
          <div className="flex h-full rounded-none items-center justify-center relative">
            <div>
              <img  src={pc4} alt="" />
            </div>
          </div>
        </Carousel>
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <Blogs />
      </div>
    </>
  );
};



export default Home;
