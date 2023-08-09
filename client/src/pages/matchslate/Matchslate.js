import React from "react";
import "./matchslate.css";
import Match from "../../buckets/match/Match";
const Matchslate = () => {
  return (
    <>
      <div className="matchslate">
        <div className="match-top">
          <div className="matchtop-left">JFC First Team Matches</div>
          <div className="matchtop-right">time to go</div>
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
