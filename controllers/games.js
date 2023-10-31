const Game = require("../models/game");

module.exports = {
    index,
    new: newGame
}

async function newGame (req, res) {
    res.render("games/new");
}

async function index(req, res) {
    try {
        const gameDocuments = await Game.find({});
        console.log("gameDocuments: ", gameDocuments);
        res.render("games/index", {gameDocs: gameDocuments})
    } catch(err) {
        console.log("err: ", err);
        res.send(err);
    }
}