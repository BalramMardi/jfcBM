import "./match.css";

import React, { useEffect, useState } from "react";

import jfc from "../../img/logo/jfc.png";
import goa from "../../img/logo/nufc.png";
import kerela from "../../img/logo/kb.png";
import mb from "../../img/logo/mbsg.png";

import axios from "axios";
import dayjs from "dayjs";

import { useNavigate } from "react-router";

const Match = () => {
  const [match, setMatch] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [leagueData, setLeagueData] = useState([]);

  const homeTeamMiddle = teamData.find(
    (team) => team._id === match.filter((m) => !m.done)[0]?.home
  );
  const awayTeamMiddle = teamData.find(
    (team) => team._id === match.filter((m) => !m.done)[0]?.away
  );

  const homeTeamfirst = teamData.find(
    (team) =>
      team._id ===
      match.filter((m) => m.done)[match.filter((m) => m.done).length - 1]?.home
  );
  const awayTeamfirst = teamData.find(
    (team) =>
      team._id ===
      match.filter((m) => m.done)[match.filter((m) => m.done).length - 1]?.away
  );

  const homeTeamthird = teamData.find(
    (team) => team._id === match.filter((m) => !m.done)[1]?.home
  );
  const awayTeamthird = teamData.find(
    (team) => team._id === match.filter((m) => !m.done)[1]?.away
  );

  const homefirstScore = match.filter((m) => m.done)[
    match.filter((m) => m.done).length - 1
  ]?.homescore;
  const awayfirstScore = match.filter((m) => m.done)[
    match.filter((m) => m.done).length - 1
  ]?.awayscore;

  let winning = "home";
  if (homefirstScore > awayfirstScore) {
    winning = homeTeamfirst ? homeTeamfirst.teamname + " WON" : "null";
  } else if (homefirstScore < awayfirstScore) {
    winning = awayTeamfirst ? awayTeamfirst.teamname + " WON" : "null";
  } else {
    winning = "Match was Draw";
  }

  const navigate = useNavigate();

  const getAllMatch = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/match/get-match`
      );
      setMatch(data.match);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTeam = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/teams/get-teams`
      );
      setTeamData(data.teams);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllLeague = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/league/get-league`
      );
      setLeagueData(data.league);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMatch();
    getAllTeam();
    getAllLeague();
  }, []);

  return (
    <div className="matchinfo-container">
      <div className="matchcard matchcard-side">
        <div className="matchcard-h1">
          <h1>
            {" "}
            {match[1] && match[1].date
              ? dayjs(
                  match.filter((m) => m.done)[
                    match.filter((m) => m.done).length - 1
                  ]?.date
                ).format("DD MMM YYYY")
              : "no"}{" "}
          </h1>
        </div>
        <div className="matchcard-side-info">
          <div className="matchcard-side-logo flex-col text-slate-950">
            <img
              src={
                homeTeamfirst
                  ? `${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${homeTeamfirst._id}`
                  : null
              }
              alt={homeTeamfirst ? homeTeamfirst.teamname : "Unknown Team"}
            />
            <div className="text-center font-bold">
              {homeTeamfirst ? homeTeamfirst.teamname : "no"}
            </div>
          </div>
          <div className="matchcard-side-data flex-col ">
            <div className="matchcard-side-data-score text-[25px]">
              {
                match.filter((m) => m.done)[
                  match.filter((m) => m.done).length - 1
                ]?.homescore
              }
              -
              {
                match.filter((m) => m.done)[
                  match.filter((m) => m.done).length - 1
                ]?.awayscore
              }
            </div>
            <div className="text-sm ">Full Time</div>
          </div>
          <div className="matchcard-side-logo flex-col text-slate-950">
            <img
              src={
                awayTeamfirst
                  ? `${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${awayTeamfirst._id}`
                  : null
              }
              alt={awayTeamfirst ? awayTeamfirst.teamname : "Unknown Team"}
            />
            <div className="text-center font-bold">
              {awayTeamfirst ? awayTeamfirst.teamname : "no"}
            </div>
          </div>
        </div>
        <div className="matchcard-winning ">
          <h1>{winning}</h1>
        </div>
      </div>

      {/* card 2 */}

      <div className="matchcard matchcard-middle">
        <div className="matchcard-h1">
          <h1>
            {match[0] && match[0].date
              ? dayjs(match.filter((m) => !m.done)[0]?.date).format(
                  "DD MMM YYYY"
                )
              : "no"}{" "}
          </h1>
        </div>
        <div className="matchcard-middle-info">
          <div className="matchcard-middle-logo">
            <img
              src={
                homeTeamMiddle
                  ? `${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${homeTeamMiddle._id}`
                  : null
              }
              alt={homeTeamMiddle ? homeTeamMiddle.teamname : "Unknown Team"}
            />
          </div>
          <div className="matchcard-middle-data">
            <div className="matchcard-middle-title">
              {match[0] && match[0].date
                ? match.filter((m) => !m.done)[0]?.time
                : "no"}{" "}
            </div>
            <div className="matchcard-middle-data-details">
              <div className="matchcard-middle-data-match">
                <div className="matchcard-middle-data-match-home">
                  {homeTeamMiddle ? homeTeamMiddle.teamname : "no"}
                </div>
                <div className="matchcard-middle-data-match-v"> V </div>
                <div className="matchcard-middle-data-match-away">
                  {" "}
                  {awayTeamMiddle ? awayTeamMiddle.teamname : "no"}
                </div>
              </div>
              <div className="matchcard-middle-data-stadium">
                {match[0] && match[0].date
                  ? match.filter((m) => !m.done)[0]?.stadium
                  : "no"}{" "}
              </div>
            </div>
          </div>
          <div className="matchcard-middle-logo">
            <img
              src={
                awayTeamMiddle
                  ? `${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${awayTeamMiddle._id}`
                  : null
              }
              alt={awayTeamMiddle ? awayTeamMiddle.teamname : "Unknown Team"}
            />
          </div>
        </div>
        <div className="matchcard-ticket">
          <h1>TICKET</h1>
        </div>
      </div>

      {/* card 3  */}

      <div className="matchcard matchcard-side">
        <div className="matchcard-h1">
          <h1>
            {match[1] && match[1].date
              ? dayjs(match.filter((m) => !m.done)[1]?.date).format(
                  "DD MMM YYYY"
                )
              : "no"}{" "}
          </h1>
        </div>
        <div className="matchcard-side-info">
          <div className="matchcard-side-logo  text-slate-900 relative">
            <img
              src={
                homeTeamthird
                  ? `${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${homeTeamthird._id}`
                  : null
              }
              alt={homeTeamthird ? homeTeamthird.teamname : "Unknown Team"}
            />
            {/* <div className="text-center font-bold ">
              {homeTeamthird ? homeTeamthird.teamname : "no"}
            </div> */}
          </div>
          <div className="matchcard-rightside-data flex-col relative text-[40px]">
            <div className="matchcard-rightside-time">
              {match[1] && match[1].date
                ? match.filter((m) => !m.done)[1]?.time
                : "no"}{" "}
            </div>
            <div className="text-[12px] text-slate-900 text-center">
              {match[1] && match[1].date
                ? match.filter((m) => !m.done)[1]?.stadium
                : "no"}{" "}
            </div>

            <div className="text-xl absolute top-[110px] w-[350px] text-center text-slate-900">
              {homeTeamthird ? homeTeamthird.teamname : "no"} -{" "}
              {awayTeamthird ? awayTeamthird.teamname : "no"}
            </div>
          </div>
          <div className="matchcard-side-logo text-slate-900">
            <img
              src={
                awayTeamthird
                  ? `${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${awayTeamthird._id}`
                  : null
              }
              alt={awayTeamthird ? awayTeamthird.teamname : "Unknown Team"}
            />
            {/* <div className="text-center font-bold">
              {awayTeamthird ? awayTeamthird.teamname : "no"}
            </div> */}
          </div>
        </div>
        <div className="matchcard-ticket">
          <h1>TICKET</h1>
        </div>
      </div>
    </div>
  );
};

export default Match;
