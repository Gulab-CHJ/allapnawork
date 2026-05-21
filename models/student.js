// const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema({

//     roll:{
//         type:Number,
//         unique:true,
//         required:true
//     },

//     name:String,

//     father:String,

//     dob:String,

//     className:String,

//     phone:String,

//     email:String,

//     password:String,

//     username:String,

//     paymentId:String

// });

// module.exports =
// mongoose.model("Student",studentSchema);


const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    roll: {
        type: Number,
        unique: true,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    father: String,

    dob: String,

    className: String,

    phone: String,

    email: String,

    username: String,

    password: String,

    paymentId: String,

    status: {
        type: String,
        default: "active"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Student", studentSchema);