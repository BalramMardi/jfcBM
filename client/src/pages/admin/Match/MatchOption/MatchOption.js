import React from "react";
import "./matchOption.css";
import AdminMenu from "../../../AdminMenu";
import { NavLink } from "react-router-dom";

const MatchOption = () => {
  return (
    <div className="newsScreen-container">
      <AdminMenu />
      <div className="newsScreen-container-right">
        <NavLink
          className="newsScreen-container-box"
          to="/admin/matches/create-matches"
        >
          CREATE MATCH
        </NavLink>
        <NavLink
          className="newsScreen-container-box"
          to="/admin/matches/admin-matches"
        >
          UPDATE MATCH
        </NavLink>
      </div>
    </div>
  );
};

export default MatchOption;
