// const mongoose = require("mongoose");

// const quickShopSettingSchema =
// new mongoose.Schema({

//     isOpen:{
//         type:Boolean,
//         default:true
//     },

//     deliveryRadiusKm:{
//         type:Number,
//         default:2
//     },

//     deliveryCharge:{
//         type:Number,
//         default:20
//     },

//     shopLatitude:{
//         type:Number,
//         default:0
//     },

//     shopLongitude:{
//         type:Number,
//         default:0
//     },

//     updatedAt:{
//         type:Date,
//         default:Date.now
//     }

// });

// module.exports =
// mongoose.model(
//     "QuickShopSetting",
//     quickShopSettingSchema
// );

const mongoose = require("mongoose");

const quickShopSettingSchema =
new mongoose.Schema({

    shopName:{
        type:String,
        default:"GLOBAL QUICK SERVICES"
    },

    isOpen:{
        type:Boolean,
        default:false
    },

    deliveryRadiusKm:{
        type:Number,
        default:2
    },

    deliveryCharge:{
        type:Number,
        default:20
    },

    shopLocation:{

        latitude:{
            type:Number,
            default:null
        },

        longitude:{
            type:Number,
            default:null
        },

        accuracy:{
            type:Number,
            default:null
        },

        updatedAt:{
            type:Date,
            default:null
        }

    }

});

module.exports =
mongoose.model(
    "QuickShopSetting",
    quickShopSettingSchema
);
