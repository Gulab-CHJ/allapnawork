const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    name: String,

    father: String,

    dob: String,

    className: String,

    phone: String,

    password: String,

    username: String
});

module.exports =
mongoose.model("student", studentSchema);