import "./players.css";

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import axios from "axios";
const Players = () => {
  const [players, setPlayers] = useState([]);

  //getallPlayers
  const getAllPlayers = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/player/get-players`
      );
      setPlayers(data.players);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPlayers();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="players-container">
      <h1 className="players-title">players</h1>

      <div className="players-carousel">
        <Carousel responsive={responsive} infinite={true}>
          {players?.map((p) => (
            <div key={p._id} className="players-cards">
              <div className="players-cards-img">
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/player/players-photo/${p._id}`}
                  alt={p.name}
                />
              </div>
              <div className="players-cards-topback"></div>

              <div className="players-info">
                <div className="players-info-top">
                  <div className="players-info-number">{p.number}</div>
                  <div className="players-info-name">{p.name}</div>
                </div>
                <div className="players-info-position">{p.position}</div>
                <div className="players-info-back">{p.name.split(" ")[1]}</div>
              </div>
              <div className="players-extra">
                <div className="players-extra-appear">
                  <div className="players-extra-appear-title">Appearance</div>
                  <div className="players-extra-appear-number">{p.appears}</div>
                </div>
                <div className="players-extra-goals">
                  <div className="players-extra-goals-title">
                    {p.position === "Goalkeeper" ? "Save" : "Goal"}{" "}
                  </div>
                  <div className="players-extra-goals-number">{p.goals}</div>
                </div>
                <div className="players-extra-assist">
                  <div className="players-extra-goals-title">
                    {p.position === "Goalkeeper" ? "Clean Sheet" : "Assist"}{" "}
                  </div>
                  <div className="players-extra-goals-number">{p.assists}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Players;
