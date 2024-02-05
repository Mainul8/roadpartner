import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../assets/logo-rd.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import {
  Navigation,
  Scrollbar,
  FreeMode,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";
const Blogs = () => {
  return (
    <div className="flex items-center justify-center flex-col lg:w-full md:w-full w-[530px] xl:w-full xl:max-h-[1436px] h-full bg-black pr-12">
      <div className="flex container flex-col relative">
        {/* <div className="container ">
          <span>
            <img className="w-[220px] mx-[940px] pb-12" src={logo} />
          </span>
          <h1 className="font-bold text-4xl text-white ">We Have</h1>
        </div> */}
        <div className="flow-root pl-5">
          <p className="float-left font-bold xl:text-4xl text-lg text-white xl:pl-[45px] mt-2">
            We have
          </p>
          <img
            className="float-right xl:w-[280px] w-[150px] xl:pr-[65px] pl-8 mt-2.5"
            src={logo}
          />
        </div>
        <div className="flow-root pl-5">
          <p className=" float-left font-bold xl:text-6xl text-xl text-yellowColor xl:pl-[45px]">
            Stories of Success
          </p>
          <p className=" float-right font text-sm text-white xl:pr-[70px] pr-2">
            for Business
          </p>
        </div>
        <h3 className="font-bold xl:text-3xl text-lg text-white xl:pl-[64px] mb-12 pl-5">
          from{" "}
          <span className="font-extrabold xl:text-5xl text-yellowColor mb-12">
            Registered Business Owners
          </span>
        </h3>
      </div>
      <Swiper
        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          740: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation
        scrollbar={{ draggable: true }}
        modules={[Navigation, Scrollbar, FreeMode, Pagination, Thumbs]}
        className="max-w-[70%] xl:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col mb-20 group relative shadow-lg mx-2 text-white rounded-xl px-3 xl:py-8 py-2 xl:h-[335px] h-[250px] xl:w-[335px] lg:w-full md:w-full w-[320px]  overflow-hidden cursor-pointer border-2 border-slate-500">
              <div className="absolute inset-0 bg-cover bg-center" />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-2">
                <item.icon className="text-yellow-400 group-hover:text-yellow-400 xl:w-[62px] w-[62px] xl:h-[72px] h-[72px]" />
                <h1 className="xl:text-3xl lg:text-xl md:text-xl text-lg font-bold">
                  {item.title}
                </h1>
                <p className="xl:text-lg lg:text-lg md:text-[14px] text-[14px]">
                  {item.content}
                </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 xl:w-[35px] w-[25px] xl:h-[35px] h-[25px] text-yellowColor group-hover:text-white-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Blogs;
