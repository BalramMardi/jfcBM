import React, { useEffect, useState } from "react";
import "./AdminMatch.css";
import AdminMenu from "../../../AdminMenu";
import axios from "axios";
import dayjs from "dayjs";

import { useNavigate } from "react-router";

const AdminMatch = () => {
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
    <div className="createNews-container">
      <AdminMenu />
      <div className="createNews-right">
        <div className="schedule-bucket">
          <div className="schedule-container">
            <h1>First Team Schedule</h1>
            {match.map((c) => {
              const homeTeam = teamData.find((team) => team._id === c.home);
              const awayTeam = teamData.find((team) => team._id === c.away);
              const leagueUsed = leagueData.find((lea) => lea._id === c.league);
              return (
                <div
                  key={c._id}
                  className={
                    c.done ? "adminschedule-slate" : "adminschedule-slate-false"
                  }
                  onClick={() => {
                    navigate(`/admin/matches/admin-matches/${c.slug}`);
                  }}
                >
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
                  <div className="sctypeadmin">
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
                    <div className="scnumberadmin-info">
                      <div className="text-sm font-bold">
                        Match No.{c.matchday}
                      </div>
                      <div className="scnumber-info-stadium">{c.stadium}</div>
                    </div>
                  </div>
                  <div className="scline-mid">
                    <div className="scline-mid-break"></div>
                  </div>
                  <div className="scmainadmin">
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
                    <div className="scScore">
                      <div
                        className="scticket-info"
                        style={{
                          backgroundColor: "#20295D",
                          color: "white",
                        }}
                      >
                        {c.homescore > -1 ? c.homescore : "-"}
                      </div>
                    </div>
                    <div className="scmain-v">{c.done ? "FT" : "VS"}</div>
                    <div className="scScore">
                      <div
                        className="scticket-info"
                        style={{
                          backgroundColor: "#20295D",
                          color: "white",
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
                  {/* <div className="scticket">
                    <div
                      className="scticket-info"
                      style={{
                        backgroundColor: c.done ? "green" : "red",
                        color: "white",
                      }}
                    >
                      {c.done ? "Done" : "Not Done"}
                    </div>
                  </div> */}
                  <div className="scline"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMatch;
