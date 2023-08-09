import "./banner.css";

import React from "react";

import tata from "../../img/logo/tata.png";
import steel from "../../img/logo/steel.png";
import sbi from "../../img/logo/sbi.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-top">
        <div className="banner-title">JAMSHEDPUR FC</div>
        <button className="banner-partner">VIEW ALL PARTNERS</button>
      </div>

      <div className="banner-promo">
        <img className="banner-promo-img steel" src={steel} alt="steel"></img>
        <img className="banner-promo-img tata" src={tata} alt="tata"></img>
        <img className="banner-promo-img sbi" src={sbi} alt="sbi"></img>
      </div>

      <div className="banner-bottom">MAIN PARTNERS</div>
    </div>
  );
};

export default Banner;
