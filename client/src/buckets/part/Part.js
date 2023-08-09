import "./part.css";

import React from "react";
import partbanner from "../../img/banner/part.png";

const Part = () => {
  return (
    <div className="part-wrapper">
      <div className="part-container">
        <img src={partbanner} alt="partbanner" />
      </div>
    </div>
  );
};

export default Part;
