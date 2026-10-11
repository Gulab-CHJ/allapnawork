// // // // const mongoose = require("mongoose");

// // // // const productSchema = new mongoose.Schema({

// // // //     // Basic Details
// // // //     name: {
// // // //         type: String,
// // // //         required: true
// // // //     },

// // // //     brand: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     category: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     manufacturer: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     // Pricing
// // // //     mrp: {
// // // //         type: Number,
// // // //         default: 0
// // // //     },

// // // //     price: {
// // // //         type: Number,
// // // //         required: true
// // // //     },

// // // //     stock: {
// // // //         type: Number,
// // // //         default: 0
// // // //     },

// // // //     // Medicine Details
// // // //     packSize: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     batchNo: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     mfgDate: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     expDate: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     // Multiple Composition
// // // //     composition: [{
// // // //         type: String
// // // //     }],

// // // //     // Multiple Images
// // // //     images: [{
// // // //         type: String
// // // //     }],

// // // //     // Main Image
// // // //     image: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     // Description
// // // //     description: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     uses: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     benefits: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     dosage: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     sideEffects: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     storage: {
// // // //         type: String,
// // // //         default: ""
// // // //     },

// // // //     // Status
// // // //     active: {
// // // //         type: Boolean,
// // // //         default: true
// // // //     },

// // // //     createdAt: {
// // // //         type: Date,
// // // //         default: Date.now
// // // //     },

// // // //     video: {
// // // //     type: String,
// // // //     default: ""
// // // // },

// // // // });

// // // // module.exports =
// // // // mongoose.models.Product ||
// // // // mongoose.model("Product", productSchema);

// // // const mongoose = require("mongoose");

// // // const productSchema = new mongoose.Schema({

// // //     // =============================
// // //     // Basic Details
// // //     // =============================

// // //     name: {
// // //         type: String,
// // //         required: true
// // //     },

// // //     brand: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     category: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     manufacturer: {
// // //         type: String,
// // //         default: ""
// // //     },


// // //     // =============================
// // //     // Pricing
// // //     // =============================

// // //     mrp: {
// // //         type: Number,
// // //         default: 0
// // //     },

// // //     price: {
// // //         type: Number,
// // //         required: true
// // //     },

// // //     stock: {
// // //         type: Number,
// // //         default: 0
// // //     },


// // //     // =============================
// // //     // Medicine Details
// // //     // =============================

// // //     packSize: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     batchNo: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     mfgDate: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     expDate: {
// // //         type: String,
// // //         default: ""
// // //     },


// // //     // =============================
// // //     // Multiple Composition
// // //     // =============================

// // //     composition: [{
// // //         type: String
// // //     }],


// // //     // =============================
// // //     // Multiple Images
// // //     // =============================

// // //     images: [{
// // //         type: String
// // //     }],


// // //     // =============================
// // //     // Main Image
// // //     // =============================

// // //     image: {
// // //         type: String,
// // //         default: ""
// // //     },


// // //     // =============================
// // //     // Product Video
// // //     // =============================

// // //     video: {
// // //         type: String,
// // //         default: ""
// // //     },


// // //     // =============================
// // //     // Description
// // //     // =============================

// // //     description: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     uses: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     benefits: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     dosage: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     sideEffects: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     storage: {
// // //         type: String,
// // //         default: ""
// // //     },


// // //     // =============================
// // //     // Status
// // //     // =============================

// // //     active: {
// // //         type: Boolean,
// // //         default: true
// // //     },

// // //     createdAt: {
// // //         type: Date,
// // //         default: Date.now
// // //     }

// // // });


// // // module.exports =
// // //     mongoose.models.Product ||
// // //     mongoose.model("Product", productSchema);



// // const mongoose = require("mongoose");

// // const productSchema = new mongoose.Schema({

// //     // =============================
// //     // BASIC DETAILS
// //     // =============================

// //     name: {
// //         type: String,
// //         required: true,
// //         trim: true
// //     },

// //     brand: {
// //         type: String,
// //         default: ""
// //     },

// //     category: {
// //         type: String,
// //         default: ""
// //     },

// //     manufacturer: {
// //         type: String,
// //         default: ""
// //     },


// //     // =============================
// //     // PRICING
// //     // =============================

// //     mrp: {
// //         type: Number,
// //         default: 0
// //     },

// //     price: {
// //         type: Number,
// //         required: true
// //     },

// //     stock: {
// //         type: Number,
// //         default: 0
// //     },


// //     // =============================
// //     // MEDICINE DETAILS
// //     // =============================

// //     packSize: {
// //         type: String,
// //         default: ""
// //     },

// //     batchNo: {
// //         type: String,
// //         default: ""
// //     },

// //     mfgDate: {
// //         type: String,
// //         default: ""
// //     },

// //     expDate: {
// //         type: String,
// //         default: ""
// //     },


// //     // =============================
// //     // COMPOSITION
// //     // =============================

// //     composition: [{
// //         type: String
// //     }],


// //     // =============================
// //     // MULTIPLE IMAGES
// //     // =============================

// //     images: [{
// //         type: String
// //     }],


// //     // =============================
// //     // MAIN IMAGE
// //     // =============================

// //     image: {
// //         type: String,
// //         default: ""
// //     },


// //     // =============================
// //     // PRODUCT VIDEO
// //     // =============================

// //     video: {
// //         type: String,
// //         default: ""
// //     },


// //     // =============================
// //     // PRODUCT DETAILS
// //     // =============================

// //     description: {
// //         type: String,
// //         default: ""
// //     },

// //     uses: {
// //         type: String,
// //         default: ""
// //     },

// //     benefits: {
// //         type: String,
// //         default: ""
// //     },

// //     dosage: {
// //         type: String,
// //         default: ""
// //     },

// //     sideEffects: {
// //         type: String,
// //         default: ""
// //     },

// //     storage: {
// //         type: String,
// //         default: ""
// //     },


// //     // =============================
// //     // STATUS
// //     // =============================

// //     active: {
// //         type: Boolean,
// //         default: true
// //     },


// //     // =============================
// //     // CREATED DATE
// //     // =============================

// //     createdAt: {
// //         type: Date,
// //         default: Date.now
// //     }

// // });


// // // =============================
// // // EXPORT
// // // =============================

// // module.exports =
// //     mongoose.models.Product ||
// //     mongoose.model("Product", productSchema);

// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({

//     // =============================
//     // BASIC DETAILS
//     // =============================

//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },

//     brand: {
//         type: String,
//         default: ""
//     },

//     category: {
//         type: String,
//         default: ""
//     },

//     manufacturer: {
//         type: String,
//         default: ""
//     },


//     // =============================
//     // PRICING
//     // =============================

//     mrp: {
//         type: Number,
//         default: 0
//     },

//     price: {
//         type: Number,
//         required: true
//     },

//     stock: {
//         type: Number,
//         default: 0
//     },


//     // =============================
//     // MEDICINE DETAILS
//     // =============================

//     packSize: {
//         type: String,
//         default: ""
//     },

//     batchNo: {
//         type: String,
//         default: ""
//     },

//     mfgDate: {
//         type: String,
//         default: ""
//     },

//     expDate: {
//         type: String,
//         default: ""
//     },


//     // =============================
//     // COMPOSITION
//     // =============================

//     composition: [{
//         type: String
//     }],


//     // =============================
//     // MULTIPLE IMAGES
//     // =============================

//     images: [{
//         type: String
//     }],


//     // =============================
//     // MAIN IMAGE
//     // =============================

//     image: {
//         type: String,
//         default: ""
//     },


//     // =============================
//     // PRODUCT VIDEOS
//     // =============================

//     videos: [{
//         type: String
//     }],


//     // =============================
//     // PRODUCT DETAILS
//     // =============================

//     description: {
//         type: String,
//         default: ""
//     },

//     uses: {
//         type: String,
//         default: ""
//     },

//     benefits: {
//         type: String,
//         default: ""
//     },

//     dosage: {
//         type: String,
//         default: ""
//     },

//     sideEffects: {
//         type: String,
//         default: ""
//     },

//     storage: {
//         type: String,
//         default: ""
//     },


//     // =============================
//     // STATUS
//     // =============================

//     active: {
//         type: Boolean,
//         default: true
//     },


//     // =============================
//     // CREATED DATE
//     // =============================

//     createdAt: {
//         type: Date,
//         default: Date.now
//     }

// });


// // =============================
// // EXPORT
// // =============================

// module.exports =
//     mongoose.models.Product ||
//     mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    // =============================
    // BASIC DETAILS
    // =============================

    name: {
        type: String,
        required: true,
        trim: true
    },

    brand: {
        type: String,
        default: ""
    },

    category: {
        type: String,
        default: ""
    },

    manufacturer: {
        type: String,
        default: ""
    },

    // =============================
    // PRICING
    // =============================

    mrp: {
        type: Number,
        default: 0
    },

    price: {
        type: Number,
        required: true
    },

    stock: {
        type: Number,
        default: 0
    },

    // =============================
    // MEDICINE DETAILS
    // =============================

    packSize: {
        type: String,
        default: ""
    },

    batchNo: {
        type: String,
        default: ""
    },

    mfgDate: {
        type: String,
        default: ""
    },

    expDate: {
        type: String,
        default: ""
    },

    // =============================
    // COMPOSITION
    // =============================

    composition: [{
        type: String
    }],

    // =============================
    // MULTIPLE IMAGES
    // =============================

    images: [{
        type: String
    }],

    // =============================
    // MAIN IMAGE
    // =============================

    image: {
        type: String,
        default: ""
    },

    // =============================
    // PRODUCT VIDEO
    // =============================

    video: {
        type: String,
        default: ""
    },

    // =============================
    // PRODUCT DETAILS
    // =============================

    description: {
        type: String,
        default: ""
    },

    uses: {
        type: String,
        default: ""
    },

    benefits: {
        type: String,
        default: ""
    },

    dosage: {
        type: String,
        default: ""
    },

    sideEffects: {
        type: String,
        default: ""
    },

    storage: {
        type: String,
        default: ""
    },

    // =============================
    // STATUS
    // =============================

    active: {
        type: Boolean,
        default: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports =
    mongoose.models.Product ||
    mongoose.model("Product", productSchema);
