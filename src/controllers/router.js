import express from 'express';
import servicio from '../services/servicios.js';

const router = express.Router();

router.get("/", (req, res) => {
    servicio.paisesJSON().then((paisesResult) => {
        res.render("home.ejs", { paises: paisesResult });
    });
});

router.get("/leagues", (req, res) => {
    servicio.ligasJSON().then((ligasResult) => {
        res.render("leagues.ejs", { ligas: ligasResult });
    });
});

router.get("/teams/premierleague", (req, res) => {
    servicio.teamsPremierLeagueJSON().then((teamsPLResult) => {
        res.render("teams_pl.ejs", { teamsPL: teamsPLResult });
    });
});

router.get("/teams/laliga", (req, res) => {
    servicio.teamsLaLigaJSON().then((teamsLaLigaResult) => {
        res.render("teams_laliga.ejs", { teamsLaLiga: teamsLaLigaResult });
    });
});

router.get("/events/premierleague/2014-2015", (req, res) => {
    servicio.eventsPLJSON().then((eventsPLResult) => {
        res.render("events_pl.ejs", { events: eventsPLResult });
    });
});

export default router;
