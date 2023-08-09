import React from "react";
import jfc from "../../img/logo/jfcBW.png";
import { FaTicketAlt } from "react-icons/fa";
import { AiTwotoneShopping, AiFillPlayCircle } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";

const Sidebar = () => {
  return (
    <nav className="z-10 fixed">
      <div className="h-[700px] w-16 opacity-70 bg-red-400 text-white flex flex-col items-center justify-center -z-10 ">
        <div className="absolute top-[9rem]">
          <img src={jfc} alt="logo" width="58px" />
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <FaTicketAlt size={35} />
          <AiTwotoneShopping size={35} />
          <AiFillPlayCircle size={35} />
          <HiUserGroup size={35} />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
