const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
    elephant_color: String,
    elephant_height: Number,
    elephant_weight: Number
})
module.exports = mongoose.model("elephant", elephantSchema)