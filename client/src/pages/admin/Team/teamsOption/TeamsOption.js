import React from "react";
import "./teamsOption.css";
import AdminMenu from "../../../AdminMenu";
import { NavLink } from "react-router-dom";

const TeamsOption = () => {
  return (
    <div className="newsScreen-container">
      <AdminMenu />
      <div className="newsScreen-container-right">
        <NavLink
          className="newsScreen-container-box"
          to="/admin/teams/create-teams"
        >
          CREATE TEAMS
        </NavLink>
        <NavLink
          className="newsScreen-container-box"
          to="/admin/teams/admin-teams"
        >
          UPDATE TEAMS
        </NavLink>
      </div>
    </div>
  );
};

export default TeamsOption;
