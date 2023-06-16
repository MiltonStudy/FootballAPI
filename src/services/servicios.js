import fetch from "node-fetch";

const urlCountries = "https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
const urlLeagues = "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";
const ulrTeamsPremierLeague = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League";
const urlTeamsLaLiga = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=Spain";
const ulrEventsPL = "https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=38&s=2014-2015";

async function paisesJSON() {
    try {
        const res = await fetch(urlCountries);
        const data = await res.json();
        return data["countries"];
    } catch (error) {
        console.log(error);
    }
}

async function ligasJSON() {
    try {
        const res = await fetch(urlLeagues);
        const data = await res.json();
        const leagues = data["leagues"].filter((liga) => {
            return (liga.strSport == "Soccer");
        });
        return leagues;
    } catch (error) {
        console.log(error);
    }
}

async function teamsPremierLeagueJSON() {
    try {
        const res = await fetch(ulrTeamsPremierLeague);
        const data = await res.json();
        return data["teams"];
    } catch (error) {
        console.log(error);
    }
}

async function teamsLaLigaJSON() {
    try {
        const res = await fetch(urlTeamsLaLiga);
        const data = await res.json();
        return data["teams"];
    } catch (error) {
        console.log(error);
    }
}

async function eventsPLJSON() {
    try {
        const res = await fetch(ulrEventsPL);
        const data = await res.json();
        return data["events"];
    } catch (error) {
        console.log(error);
    }
}

export default {
    paisesJSON: paisesJSON,
    ligasJSON: ligasJSON,
    teamsPremierLeagueJSON: teamsPremierLeagueJSON,
    teamsLaLigaJSON: teamsLaLigaJSON,
    eventsPLJSON: eventsPLJSON
}