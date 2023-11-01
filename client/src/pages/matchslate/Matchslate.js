import React from "react";
import "./matchslate.css";
import Match from "../../buckets/match/Match";
import Time from "../../buckets/time/Time";
import { NavLink, Link } from "react-router-dom";

const Matchslate = () => {
  return (
    <>
      <div className="matchslate">
        <div className="match-top">
          <div className="matchtop-left">JFC First Team Matches</div>
          <div className="matchtop-mid">Next Match</div>
          <div className="matchtop-right">
            <Time />
          </div>

          <NavLink to={"/schedule"} className="matchtop-farright">
            Schedule
          </NavLink>
        </div>
        <div className="match-bottom">
          <Match />
        </div>
      </div>
      <div className="line-match"></div>
    </>
  );
};

export default Matchslate;
