// const mongoose = require("mongoose");

// const quickServiceSchema =
// new mongoose.Schema({

//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },

//     type:{
//         type:String,
//         enum:[
//             "normal",
//             "photocopy"
//         ],
//         default:"normal"
//     },

//     price:{
//         type:Number,
//         default:0
//     },

//     description:{
//         type:String,
//         default:""
//     },

//     active:{
//         type:Boolean,
//         default:true
//     },

//     allowMultipleImages:{
//         type:Boolean,
//         default:false
//     },

//     requirements:[
//         {
//             name:{
//                 type:String,
//                 required:true
//             },

//             required:{
//                 type:Boolean,
//                 default:true
//             }
//         }
//     ],

//     createdAt:{
//         type:Date,
//         default:Date.now
//     }

// });

// module.exports =
// mongoose.model(
//     "QuickService",
//     quickServiceSchema
// );

const mongoose = require("mongoose");

const quickServiceSchema =
new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },

    type:{
        type:String,
        enum:[
            "normal",
            "photocopy"
        ],
        default:"normal"
    },

    price:{
        type:Number,
        default:0
    },

    description:{
        type:String,
        default:""
    },

    active:{
        type:Boolean,
        default:true
    },

    requirements:[
        {
            name:{
                type:String,
                required:true
            },

            required:{
                type:Boolean,
                default:true
            }
        }
    ],

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports =
mongoose.model(
    "QuickService",
    quickServiceSchema
);
