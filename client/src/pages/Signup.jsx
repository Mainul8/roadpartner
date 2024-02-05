import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const Signup = () => {
  const [firstName,setFirstName]=useState()
  const [lastName,setLastName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    if (!firstName || !lastName || !email || !password) {
      toast.error("Please fill in all the fields..");
      return;
    } else {
      axios
        .post("https://roadpartner.server.roadpartner.org/user/signup", {
          firstName,
          lastName,
          email,
          password,
        })
        .then((result) => {
          console.log(result);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
      toast.success("Registered Successfully......");
    }
  };

  return (
    <>
      <div className="bg-black xl:min-h-[890px] xl:w-full lg:w-full md:w-full w-[530px] flex justify-center items-center bg-cover">
        <div className="xl:mt-[92px]">
          <h1 className="xl:text-4xl text-lg mt-20 pb-3 text-white font-bold text-center xl:mb-12">
            Hey, good to see you here!
          </h1>
          <form action="/user/signup" method="POST" onSubmit = {handleSubmit} className="mt-1 py-1 mb-4 xl:w-full bg-blackColor w-[340px] border-2 border-gray-700 rounded-[35px] h-full shadow-lg relative xl:px-[20px]">
            <p className="xl:text-3xl xl:mt-4 xl:font-medium  text-yellowColor mt-1 text-center tracking-tight xl:mb-2">
              Sign Up for roadpartner.org
            </p>
            <p className="text-lg mt-3 font-medium text-whiteColor tracking-tight text-center mb-4">
              Create Your Profile with Us and Shine
            </p>

            <button className="flex justify-center items-center ml-3 w-[310px] xl:mb-3 text-center xl:w-[510px] xl:h-[45px] dark:bg-gray-900 border border-gray-300 rounded-2xl shadow-md xl:px-3 xl:py-3 text-sm tracking-tight xl:font-medium text-gray-300 dark:text-white hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <svg
                className="h-8 mx-[10px] items-center "
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill="#ffffff"
                width="24"
                height="100"
                viewBox="0 0 50 50"
              >
                {" "}
                <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)"
                  >
                    {" "}
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)"
                    >
                      {" "}
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </svg>
              <span className="text-center tracking-tight text-lg">
                Continue with Google
              </span>
            </button>
            <button className="flex justify-center ml-3 mt-2 w-[310px] items-center text-center xl:w-[510px] xl:h-[45px]  dark:bg-gray-900 border border-gray-300 rounded-2xl shadow-md xl:px-3 xl:py-3 xl:text-lg font-medium text-gray-300 dark:text-white hover:bg-gray-200 ffocus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <svg
                class="w-5 h-5 me-2 -ms-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              <span className="text-center tracking-tight text-lg">
                Continue with Apple
              </span>
            </button>
            <p className="text-center tracking-tight text-sm  text-gray-300 mt-4 mb-2">
              Don’t worry, we never post without your permission
            </p>
            <div className="relative text-gray-200 flex items-center">
              <div className="flex-grow border-t ml-2  border-white"></div>
              <span className="flex-shrink mx-2 tracking-tight text-xl">
                OR
              </span>
              <div className="flex-grow border-t mr-2 border-white"></div>
            </div>
            <div className="grid tracking-tight gap-2 px-2 py-0 text-whiteColor md:grid-cols-2">
              <div className="">
                <label for="first-name" className="form-label"></label>
                <input
                  type="first-name"
                  className="block w-full bg-black border border-slate-600 xl:w-[250px] rounded-[20px] py-3 xl:py-3 px-3 text-sm font-medium text-white"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={(e)=> setFirstName(e.target.value)}
                />
              </div>
              <div className="">
                <label for="last-name" className="form-label"></label>
                <input
                  type="last-name"
                  className="block w-full bg-black border border-slate-400 xl:w-70 rounded-[20px] py-3 px-3 text-sm font-medium text-white"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  onChange={(e)=> setLastName(e.target.value)}

                />
              </div>
            </div>
            <div className="px-2">
              <label for="email" className="form-label"></label>
              <input
                type="email"
                className="block w-full bg-black border border-slate-400 rounded-[20px]  px-3 py-3 xl:py-3 xl:px-3 text-sm font-medium text-white"
                id="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e)=> setEmail(e.target.value)}

              />
            </div>
            <div className="mb-3 px-2">
              <label
                for="exampleFormControlInput1"
                className="form-label"
              ></label>
              <input
                type="password"
                className="block w-full bg-black border border-slate-400 rounded-[20px] py-3 px-3 text-sm font-medium text-white" 
                id="password"
                name="password"
                placeholder="Password"
                required
                onChange={(e)=> setPassword(e.target.value)}

              />
            </div>
              <button
                type="submit"
                className=" block w-[314px] xl:w-[510px] bg-yellowColor tracking-tight focus:shadow-outline ml-3 py-2 xl:py-3 xl:px-3 mb-6 text-blackColor text-2xl font-medium transition-colors duration-150 rounded-[20px]"
              >
                Sign Up
              </button>
              <ToastContainer/>

          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
