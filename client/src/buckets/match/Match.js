import "./match.css";

import React from "react";
import jfc from "../../img/logo/jfcColor.png";
import goa from "../../img/logo/goa.png";
import kerela from "../../img/logo/kerela.png";
import mb from "../../img/logo/mb.png";

const Match = () => {
  return (
    <div className="matchinfo-container">
      <div className="matchcard matchcard-side">
        <h1>date</h1>
        <div className="matchcard-side-info">
          <div className="matchcard-side-logo">
            <img src={jfc} alt="logo" className="matchcard-logo" />
          </div>
          <div className="matchcard-side-data">score</div>
          <div className="matchcard-side-logo">
            <img src={mb} alt="logo" className="matchcard-logo" />
          </div>
        </div>
      </div>
      <div className="matchcard matchcard-middle">
        <h1>date</h1>
        <div className="matchcard-middle-info">
          <div className="matchcard-middle-logo">
            <img src={jfc} alt="logo" className="matchcard-logo" />
          </div>
          <div className="matchcard-middle-data">05:00</div>
          <div className="matchcard-middle-logo">
            <img src={kerela} alt="logo" className="matchcard-logo" />
          </div>
        </div>
      </div>
      <div className="matchcard matchcard-side">
        <h1>date</h1>
        <div className="matchcard-side-info">
          <div className="matchcard-side-logo">
            <img src={jfc} alt="logo" className="matchcard-logo" />
          </div>
          <div className="matchcard-side-data">06:00</div>
          <div className="matchcard-side-logo">
            <img src={goa} alt="logo" className="matchcard-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
