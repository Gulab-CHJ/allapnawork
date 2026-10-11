// const mongoose = require("mongoose");

// const shopSettingSchema = new mongoose.Schema(
//     {
//         shopName: {
//             type: String,
//             default: "GLOBAL MINI SABJI"
//         },

//         isOpen: {
//             type: Boolean,
//             default: true
//         },

//         deliveryCharge: {
//             type: Number,
//             default: 0
//         },

//         minimumOrder: {
//             type: Number,
//             default: 0
//         }
//     },
//     {
//         timestamps: true
//     }
// );

// module.exports = mongoose.model(
//     "ShopSetting",
//     shopSettingSchema
// );

const mongoose = require("mongoose");


// ======================================================
// SHOP SETTING SCHEMA
// ======================================================

const shopSettingSchema =
    new mongoose.Schema(
        {
            shopName: {
                type: String,
                default: "GLOBAL MINI SABJI",
                trim: true
            },


            // ==========================================
            // SHOP OPEN / CLOSED
            // ==========================================

            isOpen: {
                type: Boolean,

                // Location save किए बिना shop open न हो
                default: false
            },


            // ==========================================
            // DELIVERY SETTINGS
            // ==========================================

            deliveryCharge: {
                type: Number,
                default: 0,
                min: 0
            },

            minimumOrder: {
                type: Number,
                default: 0,
                min: 0
            },

            deliveryRadiusKm: {
                type: Number,
                default: 2,
                min: 0.1
            },


            // ==========================================
            // SHOP GPS LOCATION
            // Shop Open करते समय save होगी
            // ==========================================

            shopLocation: {

                latitude: {
                    type: Number,
                    default: null,
                    min: -90,
                    max: 90
                },

                longitude: {
                    type: Number,
                    default: null,
                    min: -180,
                    max: 180
                },

                accuracy: {
                    type: Number,
                    default: null
                },

                updatedAt: {
                    type: Date,
                    default: null
                }
            }
        },

        {
            timestamps: true
        }
    );


// ======================================================
// EXPORT MODEL
// ======================================================

module.exports = mongoose.model(
    "ShopSetting",
    shopSettingSchema
);
