const mongoose = require("mongoose");

// ============================================
// CART ITEM
// ============================================

const CartItemSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true
        },

        name: {
            type: String,
            default: ""
        },

        price: {
            type: Number,
            default: 0
        },

        quantity: {
            type: Number,
            default: 1,
            min: 1
        },

        image: {
            type: String,
            default: ""
        }
    },
    {
        _id: true
    }
);


// ============================================
// CART
// ============================================

const CartSchema = new mongoose.Schema(
    {
        doctorId: {
            type: String,
            required: true,
            unique: true
        },

        items: {
            type: [CartItemSchema],
            default: []
        }
    },
    {
        timestamps: true
    }
);


// ============================================
// MODEL
// ============================================

module.exports =
    mongoose.models.Cart ||
    mongoose.model("Cart", CartSchema);
