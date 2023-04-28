const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
    elephant_color:{
        type:String,
        required:true,
        match:/^[a-zA-z]+$/
    },
    elephant_height: Number,
    elephant_weight: {
        type:Number,
        min:1,
        max:11000
    }
})
module.exports = mongoose.model("elephant", elephantSchema)