const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const gameSchema = new Schema(
    {
        Players: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    }
)

module.exports = Game = mongoose.model('Game', gameSchema)