import "./trophy.css";

import React from "react";

import shield from "../../img/trophy/shield.png";

const Trophy = () => {
  return (
    <div className="trophy-container">
      <div className="trophy-title">HONOURS</div>
      <div className="trophy-cabinet">
        <div className="trophy-card">
          <img src={shield} alt="shield" className="trophy-img" />
          <div className="trophy-card-title">LEAGUE SHIELD</div>
          <div className="trophy-card-year">2017</div>
          <div className="trophy-card-number">x1</div>
        </div>
      </div>
    </div>
  );
};

export default Trophy;
