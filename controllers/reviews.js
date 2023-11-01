const Game = require("../models/game");

module.exports = {
    create,
}

async function create(req, res) {

    try {

        const gameDoc = await Game.findById(req.params.id);
    
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.email = req.user.email;
        req.body.avatar = req.user.avatar;
    
        gameDoc.reviews.push(req.body);
    
        await gameDoc.save();
    
        console.log(gameDoc, "<-- gameDoc");

    } catch(err) {
        console.log(err, "<-- create function error");
        res.send(err);
    }


}