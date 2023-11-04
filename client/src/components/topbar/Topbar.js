import React from "react";
import "./topbar.css";
import jfc from "../../img/logo/jfc.png";
import { useNavigate } from "react-router";
const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-16  bg-[#181733] w-[100%] fixed z-50 top-[50px] topbar-container">
      <div>
        <img src={jfc} alt="jfc" onClick={() => navigate("/")} />
      </div>
      <div onClick={() => navigate("/schedule")}>Schedule</div>
      <div onClick={() => navigate("/result")}>Results</div>
      <div onClick={() => navigate("/pagenotfound")}>Players</div>
      <div onClick={() => navigate("/pagenotfound")}>Tickets</div>
      <div onClick={() => navigate("/pagenotfound")}>Photos</div>
    </div>
  );
};

export default Topbar;
