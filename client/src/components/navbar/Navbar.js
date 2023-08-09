import React from "react";
import "./navbar.css";
import { AiOutlineUser } from "react-icons/ai";
import tfa from "../../img/logo/tfa.png";
import jfcBW from "../../img/logo/jfcBW.png";
const Navbar = () => {
  return (
    <div className="bg-[#242555] bg-gradient-to-r from-indigo-500 h-[50px] w-[100%] flex justify-around items-center fixed font-bold z-50 top-0">
      <div className="absolute left-[300px]  ">
        <div className="flex justify-center gap-2 items-center text-cyan-50 w-[31rem] h-8 rounded-2xl p-1 m-1 bg-gradient-to-r from-blue-800 to-gray-800 text-center text-[0.8rem] hover:cursor-pointer ">
          The season is about to begin ⚽
          <span style={{ color: "orange" }}> BUY YOUR TICKET NOW!</span>
        </div>
      </div>
      <div className="flex justify-between text-[0.80rem] text-cyan-50 gap-3 absolute right-4 items-center">
        <div className="flex gap-2 items-center hover:cursor-pointer">
          <AiOutlineUser
            size={30}
            style={{ backgroundColor: "#154284", borderRadius: "50%" }}
          />
          <div className="rounded-lg">login</div>
        </div>
        <div className="flex gap-2 items-center justify-center hover:cursor-pointer  p-1 m-2 bg-gradient-to-r from-red-800 to-red-700  rounded-md s shadow-lg shadow-cyan-50/10  hover:animate-pulse text-[0.80rem] w-[7.6rem] h-11">
          <img
            src={jfcBW}
            alt="jfc"
            style={{
              height: "30px",
              width: "30px",
            }}
          />
          <div className="rounded-lg ">Register</div>
        </div>
        <a
          href="https://www.fcjamshedpur.com/academy"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col h-11 w-11 items-center hover:cursor-pointer p-2 bg-slate-700 rounded-[100%] hover:bg-gradient-to-r from-red-800 to-red-700  justify-center"
        >
          <img
            src={tfa}
            alt="tfalogo"
            style={{
              height: "20px",
              width: "20px",
              filter: "brightness(0) invert(1)",
            }}
          />
          <div className="text-[7px]">TFA</div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
