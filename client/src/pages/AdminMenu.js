import React from "react";
import "./adminMenu.css";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div>
      <div className="dashboard-sidebar">
        <h1 className="dashboard-title">My Dashboard</h1>
        <ul className="category-list">
          <NavLink
            className="category"
            to="/admin/news"
            activeClassName="active"
          >
            News
          </NavLink>
          <NavLink
            className="category"
            to="/admin/player"
            activeClassName="active"
          >
            Players
          </NavLink>
          <NavLink
            className="category"
            to="/admin/teams"
            activeClassName="active"
          >
            Teams
          </NavLink>
          <NavLink
            className="category"
            to="/admin/matches"
            activeClassName="active"
          >
            Matches
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
