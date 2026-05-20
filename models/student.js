const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    roll:{
        type:Number,
        unique:true,
        required:true
    },

    name:String,

    father:String,

    dob:String,

    className:String,

    phone:String,

    email:String,

    password:String,

    username:String,

    paymentId:String

});

module.exports =
mongoose.model("Student",studentSchema);