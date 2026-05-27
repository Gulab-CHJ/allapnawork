const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({

    title:String,

    desc:String,

    logoURL:String,

    bannerURL:String
});

module.exports =
mongoose.model("Hero", heroSchema);