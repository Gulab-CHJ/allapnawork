const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({

    title:String,
    desc:String,
    logoURL:String,
    bannerURL:String

},{
    timestamps:true
});

module.exports =
mongoose.model(
"Hero",
HeroSchema
);