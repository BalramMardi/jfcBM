import React, { useEffect, useState } from "react";
import "./adminNews.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminMenu from "../../../AdminMenu";

const AdminNews = () => {
  const navigate = useNavigate();

  const [news, setNews] = useState([]);

  //getallNews
  const getAllNews = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/news/get-news`
      );
      setNews(data.news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);
  return (
    <div className="createNews-container">
      <AdminMenu />
      <div className="news-container">
        <div className="news-title">JFC News</div>
        <div className="news-tiles">
          {news?.map((e, key) => {
            return (
              <Link
                key={key}
                className="newsdata-tiles"
                to={`/admin/news/admin-news/${e.slug}`}
              >
                <div className="newsdata-tiles-img">
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/news/news-photo/${e._id}`}
                    alt={e.title}
                    height="100%"
                    width="100%"
                  />
                </div>
                <div className="newsdata-tiles-data">
                  <text className="newsdata-tiles-title">
                    {e.title.split(/\s+/).slice(0, 13).join(" ")} ...
                  </text>
                  <div className="newsdata-tiles-des">
                    {e.desc.split(/\s+/).slice(0, 15).join(" ")} ...
                  </div>
                </div>
                <div className="newsdata-tiles-bottom">
                  <div className="newsdata-team">🔴{e.team} team</div>
                  <div className="newsdata-date">{e.date}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminNews;
