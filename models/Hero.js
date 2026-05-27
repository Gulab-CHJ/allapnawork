const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({

    title: String,

    subtitle: String,

    logo: String,

    buttonText: String

});

module.exports = mongoose.model("Hero", heroSchema);