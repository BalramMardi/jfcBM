import "./schedule.css";
import React from "react";
import mbsg from "../../img/logo/mbsg.png";
import jfc from "../../img/logo/jfc.png";
import mcfc from "../../img/logo/mcfc.png";
import goa from "../../img/logo/goa.png";
import isl from "../../img/logo/isl.svg";
import Layout from "../../layout/Layout";

const matches = [
  {
    no: 1,
    day: 1,
    home: "Jamshedpur",
    away: "mohun bagan",
    stadium: "JRD Tata Sports Complex",
  },
  {
    no: 2,
    day: 2,
    home: "Jamshedpur",
    away: "mohun bagan",
    stadium: "JRD Tata Sports Complex",
  },
  {
    no: 3,
    day: 3,
    home: "Jamshedpur",
    away: "mohun bagan",
    stadium: "JRD Tata Sports Complex",
  },
  {
    no: 4,
    day: 4,
    home: "Jamshedpur",
    away: "mohun bagan",
    stadium: "JRD Tata Sports Complex",
  },
  {
    no: 5,
    day: 5,
    home: "Jamshedpur",
    away: "mohun bagan",
    stadium: "JRD Tata Sports Complex",
  },
];

const Schedule = () => {
  return (
    <Layout>
      <div className="schedule-bucket">
        <div className="schedule-container">
          <h1>First Team Schedule</h1>
          {matches.map((name, no) => (
            <div key={no} className="schedule-slate">
              <div className="scline"></div>
              <div className="scdate">
                <div className="scdate-info">
                  <div>date</div>
                  <div>day</div>
                </div>
              </div>
              <div className="scline-mid">
                <div className="scline-mid-break"></div>
              </div>
              <div className="sctype">
                <img src={isl} alt="type" />
              </div>
              <div className="scline-mid">
                <div className="scline-mid-break"></div>
              </div>
              <div className="scnumber">
                <div className="scnumber-info">
                  <div className="scnumber-info-number">Match No.{no}</div>
                  <div className="scnumber-info-stadium">
                    vidya bharti chimaya vidyalaya
                  </div>
                </div>
              </div>
              <div className="scline-mid">
                <div className="scline-mid-break"></div>
              </div>
              <div className="scmain">
                <div className="scmain-home">Jamshedpur FC</div>
                <div className="scmain-homepic">
                  <img src={jfc} alt="home" />
                </div>
                <div className="scmain-v">VS</div>
                <div className="scmain-awaypic">
                  <img src={mbsg} alt="away" />
                </div>
                <div className="scmain-away">Mohun Bagan SG</div>
              </div>
              <div className="scline-mid">
                <div className="scline-mid-break"></div>
              </div>
              <div className="scticket">
                <div className="scticket-info">TICKET</div>
              </div>
              <div className="scline"></div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
