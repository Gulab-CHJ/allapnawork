// const mongoose = require("mongoose");

// const vegetableProductSchema =
//     new mongoose.Schema(
//         {
//             name: {
//                 type: String,
//                 required: true,
//                 trim: true
//             },

//             category: {
//                 type: String,
//                 default: "Vegetable"
//             },

//             unit: {
//                 type: String,
//                 default: "1 KG"
//             },

//             mrp: {
//                 type: Number,
//                 default: 0
//             },

//             price: {
//                 type: Number,
//                 required: true
//             },

//             stock: {
//                 type: Number,
//                 default: 0
//             },

//             image: {
//                 type: String,
//                 default: ""
//             },

//             description: {
//                 type: String,
//                 default: ""
//             },

//             isActive: {
//                 type: Boolean,
//                 default: true
//             }
//         },
//         {
//             timestamps: true
//         }
//     );

// module.exports = mongoose.model(
//     "VegetableProduct",
//     vegetableProductSchema
// );

const mongoose = require("mongoose");


// ======================================================
// VEGETABLE PRODUCT SCHEMA
// ======================================================

const vegetableProductSchema =
    new mongoose.Schema(
        {
            // ==========================================
            // PRODUCT BASIC DETAILS
            // ==========================================

            name: {
                type: String,
                required: [
                    true,
                    "Product name required hai."
                ],
                trim: true,
                maxlength: 100
            },

            category: {
                type: String,
                default: "Vegetable",
                trim: true
            },

            unit: {
                type: String,
                default: "1 KG",
                trim: true
            },

            description: {
                type: String,
                default: "",
                trim: true,
                maxlength: 500
            },


            // ==========================================
            // PRICE DETAILS
            // ==========================================

            mrp: {
                type: Number,
                default: 0,
                min: [
                    0,
                    "MRP zero से कम नहीं हो सकती।"
                ]
            },

            price: {
                type: Number,
                required: [
                    true,
                    "Selling price required hai."
                ],
                min: [
                    0,
                    "Price zero से कम नहीं हो सकती।"
                ]
            },


            // ==========================================
            // STOCK
            // ==========================================

            stock: {
                type: Number,
                default: 0,
                min: [
                    0,
                    "Stock zero से कम नहीं हो सकता।"
                ]
            },


            // ==========================================
            // PRODUCT IMAGE
            // ==========================================

            image: {
                type: String,
                default: "",
                trim: true
            },


            // ==========================================
            // PRODUCT STATUS
            // ==========================================

            isActive: {
                type: Boolean,
                default: true
            }
        },

        {
            timestamps: true,

            toJSON: {
                virtuals: true
            },

            toObject: {
                virtuals: true
            }
        }
    );


// ======================================================
// AUTO-CALCULATE DISCOUNT PERCENTAGE
// Database में save नहीं होगा
// ======================================================

vegetableProductSchema.virtual(
    "discountPercentage"
).get(function() {

    const mrp =
        Number(this.mrp || 0);

    const price =
        Number(this.price || 0);

    if (
        mrp <= 0 ||
        price >= mrp
    ) {
        return 0;
    }

    return Math.round(
        (
            (mrp - price) /
            mrp
        ) * 100
    );
});


// ======================================================
// CLEAN DATA BEFORE SAVE
// ======================================================

vegetableProductSchema.pre(
    "save",
    function(next) {

        this.name =
            String(this.name || "")
                .trim();

        this.category =
            String(
                this.category ||
                "Vegetable"
            ).trim();

        this.unit =
            String(
                this.unit ||
                "1 KG"
            ).trim();

        this.mrp =
            Number(this.mrp || 0);

        this.price =
            Number(this.price || 0);

        this.stock =
            Math.max(
                0,
                Math.floor(
                    Number(this.stock || 0)
                )
            );

        next();
    }
);


// ======================================================
// INDEXES FOR FAST LOADING
// ======================================================

vegetableProductSchema.index({
    isActive: 1,
    createdAt: -1
});

vegetableProductSchema.index({
    category: 1,
    isActive: 1
});

vegetableProductSchema.index({
    name: "text",
    category: "text"
});


// ======================================================
// EXPORT MODEL
// ======================================================

module.exports = mongoose.model(
    "VegetableProduct",
    vegetableProductSchema
);
