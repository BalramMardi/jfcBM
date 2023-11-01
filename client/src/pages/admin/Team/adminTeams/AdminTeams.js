import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./adminTeams.css";
import axios from "axios";
import AdminMenu from "../../../AdminMenu";
const AdminTeams = () => {
  const [teams, setTeams] = useState([]);

  //getallPlayers
  const getAllTeams = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/teams/get-teams`
      );
      setTeams(data.teams);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <div className="createNews-container">
      <AdminMenu />
      <div className="news-container">
        <div className="news-title">Teams</div>
        <div className="news-tiles">
          {teams?.map((p) => (
            <Link
              key={p._id}
              className="teams-cards"
              to={`/admin/teams/admin-teams/${p.slug}`}
            >
              <div className="teams-cards-img">
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${p._id}`}
                  alt={p.name}
                />
              </div>
              <div className="teams-cards-topback"></div>

              <div className="teams-info">
                <div className="teams-info-top">
                  <div className="teams-info-number">{p.number}</div>
                  <div className="teams-info-name">{p.teamname}</div>
                </div>
                <div className="teams-info-position">{p.stadium}</div>
                <div className="teams-info-back">
                  {p.teamname.split(" ")[0].length > 2
                    ? p.teamname.split(" ")[0]
                    : p.teamname.split(" ")[1]}
                </div>
              </div>
              <div className="teams-extra">
                <div className="teams-extra-goals">
                  <div className="teams-extra-goals-number">{p.shortname}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTeams;
