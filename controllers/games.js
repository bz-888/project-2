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
        console.log(req.params.id, "<-- req.params.id");
        const gameDoc = await Game.findById(req.params.id);
        
        console.log(gameDoc, "<-- gameDoc");
        gameDoc.remove(req.params.id);

        await gameDoc.save();
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