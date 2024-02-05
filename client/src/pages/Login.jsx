import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://roadpartner.server.roadpartner.org/user/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "sucess") {
          toast.success("Logged in successfully!");
          setTimeout(() => {
            navigate("/");
          }, 700);
        } else {
          toast.error("Invalid Email Id or Password..");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-black flex-col xl:w-full lg:w-full md:w-full w-[530px] min-h-[650px] py-4 pb-2 items-center text-center justify-between ">
        <h1 className="text-3xl xl:text-4xl  text-white tracking-tight font-bold text-center mt-9 xl:pl-20 py-4 xl:py-0 xl:mt-[78px]">
          Welcome Back
        </h1>
        <div>
          <div className="mt-1 mx-auto xl:mt-0 w-full xl:mx-0 max-w-sm ">
            <form
              className="space-y-4 py-1 xl:mt-[15px] xl:h-[410px] h-[410px] xl:w-[430px] mx-auto xl:mx-2  mb-4 border-2 w-[345px] text-center rounded-3xl border-gray-700 "
              action="/user/login"
              method="POST"
              onSubmit={handleSubmit}
            >
              <h2 className="py-3 mt-2 text-center text-2xl xl:pl-2 font-bold leading-4 tracking-tight text-yellowColor">
                Sign in to your account
              </h2>
              <h4 className=" pb-4 xl:mx-15 xl:pl-3 xl:py-3 xl:mt-0 xl:pt-0 text-center text-lg font-bold leading-4 tracking-tight text-white">
                Pick up where you left
              </h4>

              <div>
                <div className=" px-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    required
                    className="block w-full xl:w-[395px] xl:ml-2 border xl:mt-5 border-slate-400 rounded-[20px] py-3 px-3 text-sm font-medium text-gray-300 bg-black"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm pl-52 xl:pl-[285px]">
                    <a
                      href="#"
                      className="font-semibold text-yellowColor hover:text-yellowColor-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2 px-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    required
                    className="block w-full xl:w-[395px] xl:ml-2 bg-black border border-slate-400 rounded-[20px] py-3 px-3 text-sm font-medium text-gray-300 bg-black"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className=" block w-80 ml-2.5 xl:mx-6 bg-yellowColor xl:w-[380px] focus:shadow-outline text-black rounded-[20px] py-2 xl:py-3 xl:px-3 text-2xl font-bold font-medium  "
                >
                  Sign in
                </button>
                <ToastContainer />
                <p className="mt-3 mb-4 text-center text-sm xl:pt-1 text-gray-500">
                  Not a member?{" "}
                  <a
                    href="/signup"
                    className="font-semibold leading-4 text-yellowColor hover:text-yellowColor-500"
                  >
                    Create a new account
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
