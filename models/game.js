const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            require: true
        },

        rating: {
            type: Number,
            min: 1,
            max: 10,
            default: 5,
            required: true
        },

        progress: {
            type: String,
            enum: ["In Progress", "Completed"],
            required: true
        },

        user: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
        },
        
        userName: {
            type: String,
            required: true
        },

        userAvatar: String
    },

    {
        timestamps: true,
    }
);

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
        },

        reviews: [reviewSchema],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Game", gameSchema);