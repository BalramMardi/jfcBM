import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import AdminMenu from "../../../AdminMenu";
const AdminPlayers = () => {
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

  return (
    <div className="createNews-container">
      <AdminMenu />
      <div className="news-container">
        <div className="news-title">JFC Players</div>
        <div className="news-tiles">
          {players?.map((p) => (
            <Link
              key={p._id}
              className="players-cards"
              to={`/admin/player/admin-players/${p.slug}`}
            >
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPlayers;
