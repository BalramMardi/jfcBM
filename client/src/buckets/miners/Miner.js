import React from "react";
import "./miner.css";
import Redminers from "../../pages/redminers/Redminers";
import News from "../../pages/news/News";

const Miner = () => {
  return (
    <div className="miner-bucket">
      <Redminers />
      <News />
    </div>
  );
};

export default Miner;
