import "./result.css";
import React, { useEffect, useState } from "react";

import Layout from "../../layout/Layout";
import { useNavigate } from "react-router";
import dayjs from "dayjs";

import axios from "axios";

const Result = () => {
  const [match, setMatch] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [leagueData, setLeagueData] = useState([]);

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
    <Layout>
      <div className="schedule-bucket">
        <div className="schedule-container">
          <h1>First Team Result</h1>
          {match
            .filter((match) => match.done)
            .map((c) => {
              const homeTeam = teamData.find((team) => team._id === c.home);
              const awayTeam = teamData.find((team) => team._id === c.away);
              const leagueUsed = leagueData.find((lea) => lea._id === c.league);
              return (
                <div key={c._id} className="schedule-slate">
                  <div className="scline"></div>
                  <div className="scdate">
                    <div className="scdate-info">
                      <div>
                        {dayjs(c.date).format("ddd")}{" "}
                        {dayjs(c.date).format("DD MMM")}{" "}
                      </div>
                      <div>{c.time} pm</div>
                    </div>
                  </div>
                  <div className="scline-mid">
                    <div className="scline-mid-break"></div>
                  </div>
                  <div className="sctype">
                    <img
                      // src={`${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${homeTeam._id}`}
                      // alt={homeTeam}
                      src={
                        leagueUsed
                          ? `${process.env.REACT_APP_API}/api/v1/league/league-photo/${leagueUsed._id}`
                          : null
                      }
                      alt={leagueUsed ? leagueUsed.leaname : "Unknown Team"}
                    />
                  </div>
                  <div className="scline-mid">
                    <div className="scline-mid-break"></div>
                  </div>
                  <div className="scnumber">
                    <div className="scnumber-info">
                      <div className="scnumber-info-number">
                        Match No.{c.matchday}
                      </div>
                      <div className="scnumber-info-stadium">{c.stadium}</div>
                    </div>
                  </div>
                  <div className="scline-mid">
                    <div className="scline-mid-break"></div>
                  </div>
                  <div className="scmainresult">
                    <div className="scmain-home">
                      {homeTeam ? homeTeam.teamname : "Unknown Team"}
                    </div>
                    <div className="scmain-homepic">
                      <img
                        // src={`${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${homeTeam._id}`}
                        // alt={homeTeam}
                        src={
                          homeTeam
                            ? `${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${homeTeam._id}`
                            : null
                        }
                        alt={homeTeam ? homeTeam.teamname : "Unknown Team"}
                      />
                    </div>
                    <div className="scScoreResult">
                      <div
                        className="scticket-info"
                        style={{
                          backgroundColor: "#20295D",
                          color: "white",
                          fontSize: "20px",
                        }}
                      >
                        {c.homescore > -1 ? c.homescore : "-"}
                      </div>
                    </div>
                    <div className="scmain-v">FT</div>
                    <div className="scScoreResult">
                      <div
                        className="scticket-info"
                        style={{
                          backgroundColor: "#20295D",
                          color: "white",
                          fontSize: "20px",
                        }}
                      >
                        {c.awayscore > -1 ? c.awayscore : "-"}
                      </div>
                    </div>
                    <div className="scmain-awaypic">
                      <img
                        // src={`${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${homeTeam._id}`}
                        // alt={homeTeam}
                        src={
                          awayTeam
                            ? `${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${awayTeam._id}`
                            : null
                        }
                        alt={awayTeam ? awayTeam.teamname : "Unknown Team"}
                      />
                    </div>
                    <div className="scmain-away">
                      {awayTeam ? awayTeam.teamname : "Unknown Team"}
                    </div>
                  </div>
                  <div className="scline-mid">
                    <div className="scline-mid-break"></div>
                  </div>

                  <div className="scline"></div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default Result;
