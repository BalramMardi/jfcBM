import "./match.css";

import React from "react";
import jfc from "../../img/logo/jfc.png";
import goa from "../../img/logo/nufc.png";
import kerela from "../../img/logo/kb.png";
import mb from "../../img/logo/mbsg.png";

const Match = () => {
  return (
    <div className="matchinfo-container">
      <div className="matchcard matchcard-side">
        <div className="matchcard-h1">
          <h1>date</h1>
        </div>
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
        <div className="matchcard-h1">
          <h1>date</h1>
        </div>
        <div className="matchcard-middle-info">
          <div className="matchcard-middle-logo">
            <img src={jfc} alt="logo" className="matchcard-logo" />
          </div>
          <div className="matchcard-middle-data">
            <div className="matchcard-middle-title">5:00</div>
            <div className="matchcard-middle-data-details">
              <div className="matchcard-middle-data-match">
                <div className="matchcard-middle-data-match-home">
                  Jamshedpur
                </div>
                <div className="matchcard-middle-data-match-v"> V </div>
                <div className="matchcard-middle-data-match-away">Kerela</div>
              </div>
              <div className="matchcard-middle-data-stadium">
                Stadia da Bernabau
              </div>
            </div>
          </div>
          <div className="matchcard-middle-logo">
            <img src={kerela} alt="logo" className="matchcard-logo" />
          </div>
        </div>
        <div className="matchcard-ticket">
          <h1>TICKET</h1>
        </div>
      </div>
      <div className="matchcard matchcard-side">
        <div className="matchcard-h1">
          <h1>date</h1>
        </div>
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
