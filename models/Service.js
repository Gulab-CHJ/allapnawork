// // // const mongoose = require("mongoose");

// // // const serviceSchema = new mongoose.Schema({
// // //     title: {
// // //         type: String,
// // //         required: true
// // //     },

// // //     description: {
// // //         type: String,
// // //         required: true
// // //     },

// // //     image: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     createdAt: {
// // //         type: Date,
// // //         default: Date.now
// // //     }
// // // });

// // // module.exports = mongoose.model("Service", serviceSchema);

// // const mongoose = require("mongoose");


// // const serviceSchema = new mongoose.Schema({

// //     title: {
// //         type: String,
// //         required: true
// //     },


// //     description: {
// //         type: String,
// //         required: true
// //     },


// //     image: {
// //         type: String,
// //         default: ""
// //     },


// //     features: [
// //         {
// //             type: String
// //         }
// //     ],


// //     createdAt: {
// //         type: Date,
// //         default: Date.now
// //     }

// // });


// // module.exports = mongoose.model("Service", serviceSchema);

// const mongoose =
// require("mongoose");

// const serviceSchema =
// new mongoose.Schema({

// title:{
//     type:String,
//     required:true,
//     trim:true
// },

// description:{
//     type:String,
//     required:true
// },

// image:{
//     type:String,
//     default:""
// },

// link:{
//     type:String,
//     default:"",
//     trim:true
// },

// features:{
//     type:[String],
//     default:[]
// },

// createdAt:{
//     type:Date,
//     default:Date.now
// }

// });

// module.exports =
// mongoose.model(
//     "Service",
//     serviceSchema
// );

const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        default: ""
    },

    link: {
        type: String,
        default: "",
        trim: true
    },

    features: {
        type: [String],
        default: []
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model(
    "Service",
    serviceSchema
);
