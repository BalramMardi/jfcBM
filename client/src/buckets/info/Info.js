import React from "react";
import "./info.css";
import Matchslate from "../../pages/matchslate/Matchslate";
import Tickets from "../../pages/tickets/Tickets";
import HomeStore from "../../pages/store/HomeStore";

const Info = () => {
  return (
    <div className="info-bucket">
      <Matchslate />
      <Tickets />
      <HomeStore />
    </div>
  );
};

export default Info;
