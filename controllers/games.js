const Game = require("../models/game");

module.exports = {
    index,
    new: newGame,
    create,
    show,
    deleteGame
}

async function deleteGame (req, res) {
    try {
        // find the id equal to req.params.id and remove it from the Game db model
        await Game.findByIdAndRemove(req.params.id);
        res.redirect("/games");
    } catch(err) {
        res.send(err);
    }
}

async function show (req, res) {
    const gameDocument = await Game.findById(req.params.id);
    res.render("games/show", { game: gameDocument});
}

async function create (req, res) {
    try {
        const gameDocument = await Game.create(req.body);
        res.redirect("/games");
    } catch(err) {
        res.send(err);
    }
}
    

async function newGame (req, res) {
    res.render("games/new");
}

async function index(req, res) {
    try {
        const gameDocuments = await Game.find({});
        res.render("games/index", {gameDocs: gameDocuments})
    } catch(err) {
        console.log("err: ", err);
        res.send(err);
    }
}