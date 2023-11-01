import React from "react";
import "./newsScreen.css";
import AdminMenu from "../../../AdminMenu";
import { NavLink } from "react-router-dom";

const NewsScreen = () => {
  return (
    <div className="newsScreen-container">
      <AdminMenu />
      <div className="newsScreen-container-right">
        <NavLink
          className="newsScreen-container-box"
          to="/admin/news/create-news"
        >
          CREATE NEWS
        </NavLink>
        <NavLink
          className="newsScreen-container-box"
          to="/admin/news/admin-news"
        >
          UPDATE NEWS
        </NavLink>
      </div>
    </div>
  );
};

export default NewsScreen;
