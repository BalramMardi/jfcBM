import React from "react";
import "./playerOption.css";
import AdminMenu from "../../../AdminMenu";
import { NavLink } from "react-router-dom";

const PlayersOption = () => {
  return (
    <div className="newsScreen-container">
      <AdminMenu />
      <div className="newsScreen-container-right">
        <NavLink
          className="newsScreen-container-box"
          to="/admin/player/create-players"
        >
          CREATE PLAYERS
        </NavLink>
        <NavLink
          className="newsScreen-container-box"
          to="/admin/player/admin-players"
        >
          UPDATE PLAYERS
        </NavLink>
      </div>
    </div>
  );
};

export default PlayersOption;
