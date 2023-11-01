import React, { useEffect, useState } from "react";
import "./newsDetail.css";
import axios from "axios";
import { useParams } from "react-router";

const NewsDetails = () => {
  const params = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    if (params?.slug) getNews();
  }, [params?.slug]);

  const getNews = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/news/get-news/${params?.slug}`
      );
      setNews(data?.news);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newsD-container">
      <div className="news-container">
        <div className="news-img1">
          {news._id && (
            <img
              src={`${process.env.REACT_APP_API}/api/v1/news/news-photo/${news?._id}`}
              className="card-img-top"
              alt={news?.title}
              style={{ filter: "blur(10px)" }}
            />
          )}
        </div>

        <div className="news-img2">
          {news._id && (
            <img
              src={`${process.env.REACT_APP_API}/api/v1/news/news-photo/${news?._id}`}
              className="card-img-top"
              alt={news?.title}
            />
          )}
        </div>
        <div className="news-article">
          <div className="news-heading">
            <h1>{news?.title}</h1>
          </div>
          <pre className="news-desc-large">{news?.desc}</pre>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
