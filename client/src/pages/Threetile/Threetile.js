import React from "react";
import middle from "../../img/news/mid.jpeg";
import first from "../../img/news/first.jpeg";
import third from "../../img/news/third.jpeg";
import "./threetile.css";

const Threetile = () => {
  return (
    <div className="three-container">
      <div className="tiles first">
        <img src={first} alt="first" />
        <div className="info first">
          <div className="title first-title">First Title</div>
          <div className="des first-des">First Description</div>
          <div className="time first-time">First time</div>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="tiles middle">
        <img src={middle} alt="middle" />
        <div className="info first">
          <div className="title middle-title">middle Title</div>
          <div className="des middle-des">middle Description</div>
          <div className="time middle-time">middle time</div>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="tiles third">
        <img src={third} alt="third" />
        <div className="info third">
          <div className="title third-title">third Title</div>
          <div className="des third-des">third Description</div>
          <div className="time third-time">third time</div>
        </div>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Threetile;
