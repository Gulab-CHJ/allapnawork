const mongoose = require("mongoose");

const GovernmentPersonSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    position:{
        type:String,
        required:true
    },

    department:{
        type:String
    },

    phone:{
        type:String
    },

    address:{
        type:String
    },

    description:{
        type:String
    },

    image:{
        type:String,
        default:""
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});


module.exports = mongoose.model(
    "GovernmentPerson",
    GovernmentPersonSchema
);
