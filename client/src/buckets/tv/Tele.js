import "./tv.css";

import React from "react";
import tele1 from "../../video/tele1.mp4";

const Tele = () => {
  return (
    <div className="tv-wrapper">
      <div className="tv-title">JFC TV</div>
      <div className="tv-container">
        <video src={tele1} autoPlay muted loop></video>
      </div>
      <div class="shadow"></div>
    </div>
  );
};

export default Tele;
