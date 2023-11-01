import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import cors from "cors";
import playerRoute from "./routes/playerRoute.js";
import newsRoute from "./routes/newsRoute.js";
import teamsRoute from "./routes/teamsRoute.js";
import matchRoute from "./routes/matchRoute.js";
import leagueRoute from "./routes/leagueRoute.js";

//config
dotenv.config();

//database
connectDB();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/player", playerRoute);
app.use("/api/v1/news", newsRoute);
app.use("/api/v1/teams", teamsRoute);
app.use("/api/v1/match", matchRoute);
app.use("/api/v1/league", leagueRoute);

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to the app",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`.bgCyan.white);
});
