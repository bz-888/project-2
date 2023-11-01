const Game = require("../models/game");

module.exports = {
    index,
    new: newGame,
    create,
    show
}

async function show (req, res) {
    console.log(req.params.id, "<-- req.params.id");
    const gameDocument = await Game.findById(req.params.id);
    console.log(gameDocument._id, "<-- gameDocument._id");
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