// // // const multer = require("multer");
// // // const { CloudinaryStorage } = require("multer-storage-cloudinary");
// // // const cloudinary = require("./cloudinary");


// // // const storage = new CloudinaryStorage({

// // //     cloudinary: cloudinary,

// // //     params: {

// // //         folder: "hhgs-banners",

// // //         allowed_formats: [
// // //             "jpg",
// // //             "jpeg",
// // //             "png",
// // //             "webp"
// // //         ],

// // //         public_id: (req, file) => {

// // //             return Date.now() + "-" + file.originalname.split(".")[0];

// // //         }

// // //     }

// // // });


// // // const upload = multer({

// // //     storage: storage,

// // //     limits: {

// // //         fileSize: 20 * 1024 * 1024   // 20 MB

// // //     }

// // // });


// // // module.exports = upload;




// // const multer = require("multer");
// // const { CloudinaryStorage } = require("multer-storage-cloudinary");
// // const cloudinary = require("./cloudinary");

// // const storage = new CloudinaryStorage({

// //     cloudinary,

// //     params: async (req, file) => ({

// //         folder: "hhgs-products",

// //         allowed_formats: [
// //             "jpg",
// //             "jpeg",
// //             "png",
// //             "webp"
// //         ],

// //         public_id:
// //             Date.now() +
// //             "-" +
// //             Math.round(Math.random() * 1000000)

// //     })

// // });

// // const upload = multer({

// //     storage,

// //     limits: {

// //         fileSize: 20 * 1024 * 1024   // 20MB

// //     },

// //     fileFilter: (req, file, cb) => {

// //         const allow = [
// //             "image/jpeg",
// //             "image/jpg",
// //             "image/png",
// //             "image/webp"
// //         ];

// //         if (allow.includes(file.mimetype)) {

// //             cb(null, true);

// //         } else {

// //             cb(new Error("Only JPG, PNG & WEBP images allowed"));

// //         }

// //     }

// // });

// // module.exports = upload;


// const multer = require("multer");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const cloudinary = require("./cloudinary");


// // =====================================================
// // CLOUDINARY STORAGE
// // =====================================================

// const storage = new CloudinaryStorage({

//     cloudinary: cloudinary,

//     params: async (req, file) => {

//         const isVideo =
//             file.mimetype &&
//             file.mimetype.startsWith("video/");

//         return {

//             folder: isVideo
//                 ? "hhgs-products/videos"
//                 : "hhgs-products/images",

//             resource_type: isVideo
//                 ? "video"
//                 : "image",

//             allowed_formats: isVideo
//                 ? [
//                     "mp4",
//                     "webm",
//                     "mov",
//                     "avi",
//                     "mkv"
//                 ]
//                 : [
//                     "jpg",
//                     "jpeg",
//                     "png",
//                     "webp"
//                 ],

//             public_id:
//                 Date.now() +
//                 "-" +
//                 Math.round(
//                     Math.random() * 1000000
//                 )
//         };
//     }

// });


// // =====================================================
// // MULTER
// // =====================================================

// const upload = multer({

//     storage: storage,

//     limits: {

//         // 50 MB
//         fileSize:
//             50 * 1024 * 1024

//     },


//     // =================================================
//     // FILE FILTER
//     // =================================================

//     fileFilter: (req, file, cb) => {

//         const allowedImages = [

//             "image/jpeg",
//             "image/jpg",
//             "image/png",
//             "image/webp"

//         ];


//         const allowedVideos = [

//             "video/mp4",
//             "video/webm",
//             "video/quicktime",
//             "video/x-msvideo",
//             "video/x-matroska"

//         ];


//         // IMAGE

//         if (
//             allowedImages.includes(
//                 file.mimetype
//             )
//         ) {

//             return cb(null, true);

//         }


//         // VIDEO

//         if (
//             allowedVideos.includes(
//                 file.mimetype
//             )
//         ) {

//             return cb(null, true);

//         }


//         // INVALID

//         return cb(
//             new Error(
//                 "Only JPG, PNG, WEBP, MP4, WEBM & MOV files are allowed"
//             )
//         );

//     }

// });


// module.exports = upload;


const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");


// =====================================================
// CLOUDINARY STORAGE
// =====================================================

const storage = new CloudinaryStorage({

    cloudinary: cloudinary,

    params: async (req, file) => {

        const isVideo =
            file.mimetype &&
            file.mimetype.startsWith("video/");


        return {

            // =========================
            // FOLDER
            // =========================

            folder: isVideo
                ? "hhgs-products/videos"
                : "hhgs-products/images",


            // =========================
            // RESOURCE TYPE
            // =========================

            resource_type: isVideo
                ? "video"
                : "image",


            // =========================
            // ALLOWED FORMAT
            // =========================

            allowed_formats: isVideo

                ? [
                    "mp4",
                    "webm",
                    "mov",
                    "avi",
                    "mkv"
                ]

                : [
                    "jpg",
                    "jpeg",
                    "png",
                    "webp"
                ],


            // =========================
            // PUBLIC ID
            // =========================

            public_id:
                Date.now() +
                "-" +
                Math.round(
                    Math.random() * 1000000
                )

        };

    }

});


// =====================================================
// MULTER
// =====================================================

const upload = multer({

    storage: storage,


    // =========================
    // FILE SIZE
    // =========================

    limits: {

        // Maximum 50 MB
        fileSize:
            50 * 1024 * 1024

    },


    // =========================
    // FILE FILTER
    // =========================

    fileFilter: (req, file, cb) => {


        // =========================
        // IMAGES
        // =========================

        const allowedImages = [

            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp"

        ];


        // =========================
        // VIDEOS
        // =========================

        const allowedVideos = [

            "video/mp4",
            "video/webm",
            "video/quicktime",
            "video/x-msvideo",
            "video/x-matroska"

        ];


        // =========================
        // IMAGE CHECK
        // =========================

        if (
            allowedImages.includes(
                file.mimetype
            )
        ) {

            return cb(null, true);

        }


        // =========================
        // VIDEO CHECK
        // =========================

        if (
            allowedVideos.includes(
                file.mimetype
            )
        ) {

            return cb(null, true);

        }


        // =========================
        // INVALID FILE
        // =========================

        return cb(
            new Error(
                "Only JPG, PNG, WEBP, MP4, WEBM, MOV, AVI & MKV files are allowed"
            )
        );

    }

});


// =====================================================
// EXPORT
// =====================================================

module.exports = upload;
