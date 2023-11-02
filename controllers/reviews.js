const Game = require("../models/game");

module.exports = {
    create,
    deleteReview
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
        res.redirect(`/games/${gameDoc._id}`);

    } catch(err) {
        console.log(err, "<-- review.js create function error");
        res.send(err);
    }
}


async function deleteReview(req, res) {
    try {
        const gameDoc = await Game.findOne({
        "reviews._id": req.params.id,
        "reviews.user": req.user._id   
    })
    gameDoc.reviews.remove(req.params.id);
    await gameDoc.save();
    res.redirect(`/games/${gameDoc._id}`);
    
    } catch(err) {
        res.send(err);
    }
}
