import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";
import aotLogo from "../assets/aotlogo.png";

function Signup() {
  const [val, setVal] = useState({
    email: "",
    password: "",
  });

  // const handleInput = (event) => {
  //   setVal((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
  // };
  const navigate = useNavigate();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("http://localhost:8081/Signup", val)
  //     .then((res) => {
  //       if (res.data.Signup) {
  //         navigate("/dashboard");
  //       } else {
  //         alert("ERROR: 404");
  //       }
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <>
      <div className=" h-screen flex justify-center items-center flex-col">
        <div className=" flex flex-col p-5 justify-center items-center gap-5 bg-white border-2 border-blue-950 rounded-xl mx-1 md:mx-0">
          <img src={aotLogo} className="w-1/2" />
          <div className="text-2xl uppercase font-bold font-[headline]">
            sign In
          </div>
          <form
            className=" flex flex-col justify-between items-center"
          >
            <div class="input-container">
              <input placeholder="Enter your email" className="input-field form-control font-[para]" type="email"  required/>
              <label htmlFor="email" for="input-field" class="input-label">
                Email
              </label>
              <span class="input-highlight"></span>
            </div>
            <div class="input-container">
              <input placeholder="Enter your password" className="input-field form-control font-[para]" type="password"  required/>
              <label htmlFor="password" for="input-field" class="input-label">
                Password
              </label>
              <span class="input-highlight"></span>
            </div>

            <div className=" flex gap-3 flex-col mt-6">
              <button
                type="submit"
                className="font-[para] border-2 rounded-xl border-black text-lg  px-6 py-2 bg-yellow-500 hover:bg-yellow-400 font-bold uppercase"
              >
                Login
              </button>

              <h1 className="font-[para]">
                {" "}
                Don't Have any account?
                <NavLink to={"/register"}>
                  {" "}
                  <button className="px-1 py-2 underline underline-offset-2 font-bold text-blue-600 hover:text-blue-800 active:text-blue-950 visited:text-violet-800">
                    Register here
                  </button>
                </NavLink>{" "}
              </h1>
            </div>
          </form>
        </div>
      <NavLink to={"/"}><button className='mt-4 px-6 py-2 bg-blue-900 hover:bg-blue-950 rounded-lg border-2 border-yellow-500 text-white font-[para]'>Go Home</button></NavLink>

      </div>
    </>
  );
}

export default Signup;
