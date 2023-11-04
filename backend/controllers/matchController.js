import slugify from "slugify";
import matchModel from "../models/matchModel.js";

import teamsModel from "../models/teamsModel.js";
import leagueModel from "../models/leagueModel.js";

export const createMatchController = async (req, res) => {
  try {
    const {
      matchday,
      league,
      home,
      away,
      date,
      done,
      neutral,
      stadium,
      homescore,
      awayscore,
      time,
    } = req.body;
    if (!matchday) {
      return res.status(401).send({
        message: "number name is required",
      });
    }
    if (!league) {
      return res.status(401).send({
        message: "title name is required",
      });
    }
    if (!home) {
      return res.status(401).send({
        message: "title name is required",
      });
    }
    if (!away) {
      return res.status(401).send({
        message: "title name is required",
      });
    }

    if (!date) {
      return res.status(401).send({
        message: "date name is required",
      });
    }
    if (!stadium) {
      return res.status(401).send({
        message: "stadium name is required",
      });
    }

    /*  const existingMatch = await matchModel.findOne({ number });
    if (existingMatch) {
      return res.status(200).send({
        success: true,
        message: "match already Existed",
      });
    }
 */

    const hometeams = await teamsModel.findById(home);
    const awayteams = await teamsModel.findById(away);
    const leagname = await leagueModel.findById(league);

    const newword = `${leagname.leashort} ${matchday} ${hometeams.shortname} ${
      awayteams.shortname
    } ${new Date(date).getFullYear()} `;

    // Create a new Date object and set the time to midnight (00:00:00) on the server
    const dateWithoutTime = new Date(date);
    dateWithoutTime.setUTCHours(0, 0, 0, 0); // Set the time to midnight in UTC

    const match = await new matchModel({
      matchday,
      league,
      date: dateWithoutTime,
      home,
      away,
      done,
      neutral,
      stadium,
      homescore,
      awayscore,
      time,
      slug: slugify(newword),
    }).save();
    res.status(201).send({
      success: true,
      message: "New match Created",
      match,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in match",
    });
  }
};

//update
export const updateMatchController = async (req, res) => {
  try {
    const {
      league,
      matchday,
      home,
      away,
      date,
      done,
      stadium,
      neutral,
      homescore,
      awayscore,
      time,
    } = req.body;
    const { id } = req.params;

    const hometeams2 = await teamsModel.findById(home);
    const awayteams2 = await teamsModel.findById(away);
    const leagname2 = await leagueModel.findById(league);

    const newword2 = `${leagname2.leashort} ${matchday} ${
      hometeams2.shortname
    } ${awayteams2.shortname} ${new Date(date).getFullYear()}`;

    // Create a new Date object and set the time to midnight (00:00:00) on the server
    const dateWithoutTime = new Date(date);
    dateWithoutTime.setUTCHours(0, 0, 0, 0); // Set the time to midnight in UTC

    const match = await matchModel.findByIdAndUpdate(
      id,
      {
        league,
        matchday,
        home,
        away,
        date: dateWithoutTime,
        done,
        neutral,
        stadium,
        homescore,
        awayscore,
        time,
        slug: slugify(newword2),
      },
      { new: true }
    );

    console.log(newword2);

    res.status(200).send({
      success: true,
      message: "match Updated Successfully",
      match,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while handling update match",
    });
  }
};

//get all
export const getMatchController = async (req, res) => {
  try {
    const match = await matchModel.find({}).sort({ matchday: 1 });
    res.status(200).send({
      success: true,
      message: "All match list",
      match,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all match",
    });
  }
};

//getSingle

export const singleMatchController = async (req, res) => {
  try {
    const match = await matchModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Single match",
      match,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting one match",
    });
  }
};

//delete

export const deleteMatchController = async (req, res) => {
  try {
    const { id } = req.params;
    await matchModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while deleting the match",
    });
  }
};
