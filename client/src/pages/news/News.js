import React from "react";
import "./news.css";

const newsdata = [
  {
    title: "Clean the kitchen",
    description:
      "Mop the floor, wipe the countertop and don't forget to take out the trash!",
    src: "https://previews.123rf.com/images/natursports/natursports1408/natursports140800080/31006503-fcb-players-posing-for-photos-at-gamper-friendly-match-between-fc-barcelona-and-club-leon-fc-final.jpg",
  },
  {
    title: "Call Mom",
    description: "It's her birthday!",
    src: "https://previews.123rf.com/images/natursports/natursports1408/natursports140800080/31006503-fcb-players-posing-for-photos-at-gamper-friendly-match-between-fc-barcelona-and-club-leon-fc-final.jpg",
  },
  {
    title: "Water flowers",
    description: "They need water, or they will die.",
    src: "https://previews.123rf.com/images/natursports/natursports1408/natursports140800080/31006503-fcb-players-posing-for-photos-at-gamper-friendly-match-between-fc-barcelona-and-club-leon-fc-final.jpg",
  },
  {
    title: "Water flowers",
    description: "They need water, or they will die.",
    src: "https://previews.123rf.com/images/natursports/natursports1408/natursports140800080/31006503-fcb-players-posing-for-photos-at-gamper-friendly-match-between-fc-barcelona-and-club-leon-fc-final.jpg",
  },
  {
    title: "Water flowers",
    description: "They need water, or they will die.",
    src: "https://previews.123rf.com/images/natursports/natursports1408/natursports140800080/31006503-fcb-players-posing-for-photos-at-gamper-friendly-match-between-fc-barcelona-and-club-leon-fc-final.jpg",
  },
  {
    title: "Water flowers",
    description: "They need water, or they will die.",
    src: "https://previews.123rf.com/images/natursports/natursports1408/natursports140800080/31006503-fcb-players-posing-for-photos-at-gamper-friendly-match-between-fc-barcelona-and-club-leon-fc-final.jpg",
  },
  {
    title: "Water flowers",
    description: "They need water, or they will die.",
    src: "https://previews.123rf.com/images/natursports/natursports1408/natursports140800080/31006503-fcb-players-posing-for-photos-at-gamper-friendly-match-between-fc-barcelona-and-club-leon-fc-final.jpg",
  },
  {
    title: "Water flowers",
    description: "They need water, or they will die.",
    src: "https://previews.123rf.com/images/natursports/natursports1408/natursports140800080/31006503-fcb-players-posing-for-photos-at-gamper-friendly-match-between-fc-barcelona-and-club-leon-fc-final.jpg",
  },
];

const News = () => {
  return (
    <div className="news-container">
      <div className="news-title">JFC News</div>
      <div className="news-tiles">
        {newsdata.map((e, key) => {
          return (
            <div key={key} className="newsdata-tiles">
              <div className="newsdata-tiles-img">
                <img src={e.src} alt="logo" height="100%" width="100%" />
              </div>
              <div className="newsdata-tiles-data">
                <div className="newsdata-tiles-title">{e.title}</div>
                <div className="newsdata-tiles-des">{e.description}</div>
              </div>
              <div className="newsdata-tiles-bottom">
                <div className="newsdata-team">🔴 team</div>
                <div className="newsdata-date">date</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
