const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    first_name : {
        type: String,
        require: true
    },
    middle_name :{
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email : {
        type: String,
        unique: true,
        require: true
    },
    phone_no :{
        type: String,
        require: true
    }
})

const User = mongoose.model("User",userSchema)

module.exports= User

