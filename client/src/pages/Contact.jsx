import React from "react";
import logo from "../assets/logo-rd.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa6";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all the fields..");
      return;
    } else {
      axios
        .post("https://roadpartner.server.roadpartner.org/user/contactus", {
          name,
          email,
          subject,
          message,
        })
        .then((result) => {
          console.log(result);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
      toast("Request submitted Successfully..");
    }
  };

  return (
    <>
      <div className="bg-yellowColor xl:w-full lg:w-full md:w-full w-[530px] h-full overflow-hidden">
        <div
          id="map"
          className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          <iframe
            className=" relative top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div className="container px-6  py-12 md:px-12">
          <div className="block rounded-lg px-6 py-12 md:py-16 md:px-12 xl:-mt-[120px] -mt-[75px] backdrop-blur-[30px] border border-white">
            <h2 className="text-center font-bold text-4xl mb-4">
              Get In Touch
            </h2>
            <div className="flex flex-wrap">
              <div className="mb-12 w-full h-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form
                  action="/user/contactus"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="relative mb-6 " data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-2 border-black bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear   motion-reduce:transition-none"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor="name"
                    ></label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-2 border-black bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[0.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor="email"
                    ></label>
                  </div>
                  <div className="relative mb-6 " data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-2 border-black bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear   motion-reduce:transition-none"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor="subject"
                    ></label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-black border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="message"
                      rows="3"
                      name="message"
                      placeholder="Message"
                      required
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    ></label>
                  </div>
                  <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                    <input
                      className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full border-black before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent "
                      type="checkbox"
                      value=""
                      id="checkbox"
                      checked
                    />
                    <label
                      className="inline-block pl-[0.15rem] text-black hover:cursor-pointer"
                      htmlFor="exampleCheck96"
                    >
                      Send me a copy of this message
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="mb-6 w-full rounded bg-black text-white px- pt-2.5 pb-2 text-xs font-medium uppercase leading-normal rounded-[20px] lg:mb-0"
                  >
                    Send
                  </button>
                  <ToastContainer />
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap ">
                  <div className="xl:mb-12 xl:mt-6 md:mt-6 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md  bg-black p-4 text-yellowColor">
                          <BsFillTelephoneInboundFill />
                        </div>
                      </div>
                      <div className="ml-6 grow ">
                        <p className="mb-2 font-bold text-black ">
                          Technical support
                        </p>
                        <p className="text-sm text-neutral-500">
                          contact@roadpartner.org
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6 xl:mt-6 mt-6 w-full shrink-0 grow-0 basis-auto md:w-4/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="srink-0">
                        <div className="inline-block rounded-md p-4 bg-black text-yellowColor">
                          <FaAddressCard />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Address</p>
                        <p className="text-sm text-neutral-500">
                          11 LOCKLIN CT Sayreville, <br />
                          NJ 08872, <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xl:mb-12 mb-6 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md  p-4 bg-black text-yellowColor">
                          <TbDeviceLandlinePhone />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Land Line</p>
                        <p className="text-neutral-500"> (0421) 431 2030</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md p-4 bg-black text-yellowColor">
                          <FaMobileAlt />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Mobile</p>
                        <p className="text-neutral-500"> +91 123456789</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
