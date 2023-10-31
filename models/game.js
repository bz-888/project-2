const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
    {
        logo: {
            type: String,
        },
        
        title: {
            type: String,
            require: true
        },

        genre: {
            type: String,
            require: true
        },

        description: {
            type: String,
        }
})

module.exports = mongoose.model("Game", gameSchema);