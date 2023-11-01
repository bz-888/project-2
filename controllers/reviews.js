const Game = require("../models/game");

module.exports = {
    create,
}

async function create(req, res) {
    const gameDoc = await Game.findById(req.params.id);

    req.body.googleId = req.user._id;
    req.body.name = req.user.name;
    req.body.email = req.user.email;
    req.body.avatar = req.user.avatar;

    

}