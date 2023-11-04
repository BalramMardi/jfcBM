import React from "react";
import tata from "../../img/logo/tata1.png";
import steel from "../../img/logo/steel1.png";
import sbi from "../../img/logo/sbi1.png";

import "./strips.css";
const Strips = () => {
  return (
    <div className="strip-wrapper">
      <div className="strip-container">
        <div style={{ marginLeft: "100px" }}>MAIN PARTNERS</div>
        <div>|</div>
        <div>TATA STEEL</div>
        <div>TATA</div>
        <div>SBI</div>

        <div className="partner-promo">
          {/* <img
            className="partner-promo-img steel"
            src={steel}
            alt="steel"
          ></img>
          <img className="partner-promo-img tata" src={tata} alt="tata"></img>
          <img className="partner-promo-img sbi" src={sbi} alt="sbi"></img> */}
        </div>
      </div>
    </div>
  );
};

export default Strips;
