const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
    title: String,
    desc: String,
    logoURL: String,
    bannerURL: String
});

module.exports =
mongoose.models.Hero ||
mongoose.model("Hero", heroSchema);