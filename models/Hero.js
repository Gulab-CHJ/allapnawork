const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({

    title: String,

    desc: String,

    bannerURL: String,

    logoURL: String

});

module.exports =
mongoose.model("Hero", heroSchema);