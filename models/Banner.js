

// const mongoose = require("mongoose");

// const bannerSchema = new mongoose.Schema({

//     image: {
//         type: String,
//         required: true
//     },

//     link: {
//         type: String,
//         default: "#"
//     },

//     active: {
//         type: Boolean,
//         default: true
//     }

// }, { timestamps: true });

// module.exports = mongoose.models.Banner || mongoose.model("Banner", bannerSchema);

const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        default: "#"
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

// Check and export safely
module.exports = mongoose.model("Banner", bannerSchema);
