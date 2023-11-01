import React, { useEffect, useState } from "react";
import middle from "../../img/news/mid.jpeg";
import first from "../../img/news/first.jpeg";
import third from "../../img/news/third.jpeg";
import "./threetile.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Threetile = () => {
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

  const threeNews = news.filter((n) => n.tile === true).slice(0, 3);

  useEffect(() => {
    getAllNews();
  }, []);

  const [num, setNum] = useState(2);

  const hover1 = () => {
    setNum(1);
  };
  const hover2 = () => {
    setNum(2);
  };
  const hover3 = () => {
    setNum(3);
  };

  return (
    <>
      {threeNews.length > 0 ? (
        <div className="three-container">
          <div
            // className="tiles"
            // style={{ flex: num === 1 ? 3 : 1 }}

            className={num === 1 ? "button1 food " : "button"}
            onMouseOver={hover1}
            onClick={() => navigate(`/news/${threeNews[0].slug}`)}
          >
            <img
              src={`${process.env.REACT_APP_API}/api/v1/news/news-photo/${threeNews[0]._id}`}
              alt="first"
              className={num === 1 ? "imgscale " : "imgnotscale"}
              onMouseOver={hover1}
            />
            <div className="info first">
              <div className="title first-title">{threeNews[0].title}</div>
              <div className="des first-des">
                {threeNews[0].desc.split(/\s+/).slice(0, 20).join(" ")} ...
              </div>
              <div className="time first-time">{threeNews[0].date}</div>
            </div>
            <div className="overlay"></div>
          </div>
          <div
            // className="tiles"
            // style={{ flex: num === 2 ? 3 : 1 }}

            className={num === 2 ? "button2 food " : "button"}
            onMouseOver={hover2}
            onClick={() => navigate(`/news/${threeNews[1].slug}`)}
          >
            <img
              src={`${process.env.REACT_APP_API}/api/v1/news/news-photo/${threeNews[1]._id}`}
              alt="middle"
              className={num === 2 ? "imgscale " : "imgnotscale"}
              onMouseOver={hover2}
            />
            <div className="info first">
              <div className="title middle-title">{threeNews[1].title}</div>
              <div className="des middle-des">
                {threeNews[1].desc.split(/\s+/).slice(0, 20).join(" ")} ...
              </div>
              <div className="time middle-time">{threeNews[1].date}</div>
            </div>
            <div className="overlay"></div>
          </div>
          <div
            // className="tiles"
            // style={{ flex: num === 3 ? 3 : 1 }}

            className={num === 3 ? "button3 food " : "button"}
            onMouseOver={hover3}
            onClick={() => navigate(`/news/${threeNews[2].slug}`)}
          >
            <img
              src={`${process.env.REACT_APP_API}/api/v1/news/news-photo/${threeNews[2]._id}`}
              alt="third"
              className={num === 3 ? "imgscale " : "imgnotscale"}
              onMouseOver={hover3}
            />
            <div className="info third">
              <div className="title third-title">{threeNews[2].title}</div>
              <div className="des third-des">
                {threeNews[2].desc.split(/\s+/).slice(0, 20).join(" ")} ...
              </div>
              <div className="time third-time">{threeNews[2].date}</div>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      ) : (
        <p>not found</p>
      )}
    </>
  );
};

export default Threetile;
