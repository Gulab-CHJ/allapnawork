// const mongoose = require("mongoose");

// const vegetableOrderSchema =
//     new mongoose.Schema(
//         {
//             customerName: {
//                 type: String,
//                 required: true
//             },

//             mobile: {
//                 type: String,
//                 required: true
//             },

//             address: {
//                 type: String,
//                 required: true
//             },

//             items: [
//                 {
//                     productId: {
//                         type: mongoose.Schema.Types.ObjectId,
//                         ref: "VegetableProduct"
//                     },

//                     name: String,
//                     unit: String,

//                     price: {
//                         type: Number,
//                         default: 0
//                     },

//                     quantity: {
//                         type: Number,
//                         default: 1
//                     },

//                     amount: {
//                         type: Number,
//                         default: 0
//                     }
//                 }
//             ],

//             subtotal: {
//                 type: Number,
//                 default: 0
//             },

//             deliveryCharge: {
//                 type: Number,
//                 default: 0
//             },

//             totalAmount: {
//                 type: Number,
//                 default: 0
//             },

//             paymentMethod: {
//                 type: String,
//                 default: "COD"
//             },

//             status: {
//                 type: String,

//                 enum: [
//                     "Pending",
//                     "Accepted",
//                     "Preparing",
//                     "Out for Delivery",
//                     "Delivered",
//                     "Cancelled"
//                 ],

//                 default: "Pending"
//             }
//         },
//         {
//             timestamps: true
//         }
//     );

// module.exports = mongoose.model(
//     "VegetableOrder",
//     vegetableOrderSchema
// );

const mongoose = require("mongoose");


// ======================================================
// ORDER ITEM SCHEMA
// ======================================================

const orderItemSchema =
    new mongoose.Schema(
        {
            productId: {
                type:
                    mongoose.Schema.Types.ObjectId,

                ref:
                    "VegetableProduct",

                required:
                    true
            },

            name: {
                type: String,
                required: true,
                trim: true
            },

            unit: {
                type: String,
                default: "",
                trim: true
            },

            price: {
                type: Number,
                required: true,
                default: 0,
                min: 0
            },

            quantity: {
                type: Number,
                required: true,
                default: 1,
                min: 1
            },

            amount: {
                type: Number,
                required: true,
                default: 0,
                min: 0
            }
        },

        {
            _id: false
        }
    );


// ======================================================
// VEGETABLE ORDER SCHEMA
// ======================================================

const vegetableOrderSchema =
    new mongoose.Schema(
        {
            customerName: {
                type: String,
                required: true,
                trim: true
            },

            mobile: {
                type: String,
                required: true,
                trim: true
            },

            address: {
                type: String,
                required: true,
                trim: true
            },


            // ==========================================
            // CUSTOMER LIVE GPS LOCATION
            // ==========================================

            customerLocation: {

                latitude: {
                    type: Number,
                    required: true,
                    min: -90,
                    max: 90
                },

                longitude: {
                    type: Number,
                    required: true,
                    min: -180,
                    max: 180
                },

                accuracy: {
                    type: Number,
                    default: null
                }
            },


            // Shop से customer की दूरी
            distanceFromShopKm: {
                type: Number,
                required: true,
                default: 0,
                min: 0
            },


            // ==========================================
            // ORDER PRODUCTS
            // ==========================================

            items: {
                type: [orderItemSchema],

                validate: {
                    validator: function(items) {

                        return (
                            Array.isArray(items) &&
                            items.length > 0
                        );
                    },

                    message:
                        "Order में कम से कम एक product जरूरी है।"
                }
            },


            // ==========================================
            // ORDER AMOUNTS
            // ==========================================

            subtotal: {
                type: Number,
                required: true,
                default: 0,
                min: 0
            },

            deliveryCharge: {
                type: Number,
                default: 0,
                min: 0
            },

            totalAmount: {
                type: Number,
                required: true,
                default: 0,
                min: 0
            },


            // ==========================================
            // PAYMENT
            // ==========================================

            paymentMethod: {
                type: String,

                enum: [
                    "COD",
                    "UPI",
                    "Online"
                ],

                default: "COD"
            },


            // ==========================================
            // ORDER STATUS
            // ==========================================

            status: {
                type: String,

                enum: [
                    "Pending",
                    "Accepted",
                    "Preparing",
                    "Out for Delivery",
                    "Delivered",
                    "Cancelled"
                ],

                default: "Pending"
            }
        },

        {
            timestamps: true
        }
    );


// Latest orders जल्दी निकालने के लिए
vegetableOrderSchema.index({
    createdAt: -1
});

vegetableOrderSchema.index({
    status: 1,
    createdAt: -1
});


// ======================================================
// EXPORT MODEL
// ======================================================

module.exports = mongoose.model(
    "VegetableOrder",
    vegetableOrderSchema
);
