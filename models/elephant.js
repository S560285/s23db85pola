const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
    elephant_Color: String,
    elephant_height: Number,
    elephant_Weight: Number,
    elephant_Length: Number 
})
module.exports = mongoose.model("elephant", elephantSchema)