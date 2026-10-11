// // // // const mongoose = require("mongoose");

// // // // const studentSchema = new mongoose.Schema({

// // // //     name:{
// // // //         type:String,
// // // //         required:true
// // // //     },

// // // //     fatherName:{
// // // //         type:String,
// // // //         default:""
// // // //     },

// // // //     course:{
// // // //         type:String,
// // // //         default:""
// // // //     },

// // // //     mobile:{
// // // //         type:String,
// // // //         default:""
// // // //     },

// // // //     email:{
// // // //         type:String,
// // // //         default:""
// // // //     },

// // // //     address:{
// // // //         type:String,
// // // //         default:""
// // // //     },

// // // //     image:{
// // // //         type:String,
// // // //         default:""
// // // //     },

// // // //     description:{
// // // //         type:String,
// // // //         default:""
// // // //     },

// // // //     createdAt:{
// // // //         type:Date,
// // // //         default:Date.now
// // // //     }

// // // // });

// // // // module.exports = mongoose.model("Student",studentSchema);

// // // const mongoose = require("mongoose");

// // // const studentSchema = new mongoose.Schema({

// // //     name: {
// // //         type: String,
// // //         required: true
// // //     },

// // //     fatherName: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     course: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     college: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     rollNo: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     rank: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     qualification: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     dob: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     gender: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     mobile: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     email: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     address: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     image: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     description: {
// // //         type: String,
// // //         default: ""
// // //     },

// // //     status: {
// // //         type: String,
// // //         default: "Active"
// // //     },

// // //     createdAt: {
// // //         type: Date,
// // //         default: Date.now
// // //     }

// // // });

// // // module.exports =
// // //     mongoose.models.Student ||
// // //     mongoose.model("Student", studentSchema);


// // const mongoose = require("mongoose");

// // const studentSchema = new mongoose.Schema({

// //     name: {
// //         type: String,
// //         required: true
// //     },

// //     fatherName: {
// //         type: String,
// //         default: ""
// //     },

// //     course: {
// //         type: String,
// //         default: ""
// //     },

// //     college: {
// //         type: String,
// //         default: ""
// //     },

// //     rollNo: {
// //         type: String,
// //         default: "",
// //         index: true
// //     },

// //     age: {
// //         type: Number,
// //         default: null
// //     },

// //     mobile: {
// //         type: String,
// //         default: ""
// //     },

// //     email: {
// //         type: String,
// //         default: ""
// //     },

// //     password: {
// //         type: String,
// //         default: ""
// //     },

// //     plan: {
// //         type: String,
// //         default: ""
// //     },

// //     amount: {
// //         type: Number,
// //         default: 0
// //     },

// //     paymentStatus: {
// //         type: String,
// //         default: "Pending"
// //     },

// //     rank: {
// //         type: String,
// //         default: ""
// //     },

// //     qualification: {
// //         type: String,
// //         default: ""
// //     },

// //     dob: {
// //         type: String,
// //         default: ""
// //     },

// //     gender: {
// //         type: String,
// //         default: ""
// //     },

// //     address: {
// //         type: String,
// //         default: ""
// //     },

// //     image: {
// //         type: String,
// //         default: ""
// //     },

// //     description: {
// //         type: String,
// //         default: ""
// //     },

// //     status: {
// //         type: String,
// //         default: "Active"
// //     },

// //     createdAt: {
// //         type: Date,
// //         default: Date.now
// //     }

// // });

// // module.exports =
// //     mongoose.models.Student ||
// //     mongoose.model("Student", studentSchema);



// const mongoose =
//     require("mongoose");


// const monthlyStarSchema =
//     new mongoose.Schema(
//         {
//             month: {
//                 type: String,
//                 required: true
//             },

//             stars: {
//                 type: Number,
//                 default: 0,
//                 min: 0
//             }
//         },
//         {
//             _id: false
//         }
//     );


// const studentSchema =
//     new mongoose.Schema({

//         name: {
//             type: String,
//             required: true,
//             trim: true
//         },

//         fatherName: {
//             type: String,
//             default: ""
//         },

//         course: {
//             type: String,
//             default: ""
//         },

//         className: {
//             type: String,
//             default: ""
//         },

//         college: {
//             type: String,
//             default: ""
//         },

//         rollNo: {
//             type: String,
//             default: "",
//             index: true
//         },

//         roll: {
//             type: String,
//             default: "",
//             index: true
//         },

//         age: {
//             type: Number,
//             default: null
//         },

//         mobile: {
//             type: String,
//             default: ""
//         },

//         phone: {
//             type: String,
//             default: ""
//         },

//         email: {
//             type: String,
//             default: ""
//         },

//         password: {
//             type: String,
//             default: ""
//         },

//         plan: {
//             type: String,
//             default: ""
//         },

//         amount: {
//             type: Number,
//             default: 0
//         },

//         paymentStatus: {
//             type: String,
//             default: "Pending"
//         },

//         // Current stars
//         stars: {
//             type: Number,
//             default: 0,
//             min: 0
//         },

//         // Month-wise stars
//         monthlyStars: {
//             type: [monthlyStarSchema],
//             default: []
//         },

//         rank: {
//             type: String,
//             default: ""
//         },

//         qualification: {
//             type: String,
//             default: ""
//         },

//         dob: {
//             type: String,
//             default: ""
//         },

//         gender: {
//             type: String,
//             default: ""
//         },

//         address: {
//             type: String,
//             default: ""
//         },

//         image: {
//             type: String,
//             default: ""
//         },

//         description: {
//             type: String,
//             default: ""
//         },

//         status: {
//             type: String,
//             default: "Active"
//         },

//         createdAt: {
//             type: Date,
//             default: Date.now
//         }

//     });


// module.exports =
//     mongoose.models.Student ||
//     mongoose.model(
//         "Student",
//         studentSchema
//     );

const mongoose =
    require("mongoose");


// =====================================
// MONTHLY STAR SCHEMA
// =====================================

const monthlyStarSchema =
    new mongoose.Schema(
        {
            month: {
                type: String,
                required: true
            },

            stars: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        {
            _id: false
        }
    );


// =====================================
// PAYMENT HISTORY SCHEMA
// =====================================

const paymentHistorySchema =
    new mongoose.Schema(
        {

            month: {
                type: String,
                required: true,
                trim: true
            },

            amount: {
                type: Number,
                required: true,
                min: 0
            },

            paidDate: {
                type: Date,
                default: Date.now
            },

            note: {
                type: String,
                default: ""
            }

        },
        {
            _id: true
        }
    );


// =====================================
// STUDENT SCHEMA
// =====================================

const studentSchema =
    new mongoose.Schema({

        name: {
            type: String,
            required: true,
            trim: true
        },

        fatherName: {
            type: String,
            default: ""
        },

        course: {
            type: String,
            default: ""
        },

        className: {
            type: String,
            default: ""
        },

        college: {
            type: String,
            default: ""
        },

        rollNo: {
            type: String,
            default: "",
            index: true
        },

        roll: {
            type: String,
            default: "",
            index: true
        },

        age: {
            type: Number,
            default: null
        },

        mobile: {
            type: String,
            default: ""
        },

        phone: {
            type: String,
            default: ""
        },

        email: {
            type: String,
            default: ""
        },

        password: {
            type: String,
            default: ""
        },

        plan: {
            type: String,
            default: ""
        },

        amount: {
            type: Number,
            default: 0
        },

        paymentStatus: {
            type: String,
            default: "Pending"
        },


        // =====================================
        // PAYMENT HISTORY
        // =====================================

        paymentHistory: {
            type: [paymentHistorySchema],
            default: []
        },


        // =====================================
        // CURRENT STARS
        // =====================================

        stars: {
            type: Number,
            default: 0,
            min: 0
        },


        // =====================================
        // MONTH WISE STARS
        // =====================================

        monthlyStars: {
            type: [monthlyStarSchema],
            default: []
        },


        rank: {
            type: String,
            default: ""
        },

        qualification: {
            type: String,
            default: ""
        },

        dob: {
            type: String,
            default: ""
        },

        gender: {
            type: String,
            default: ""
        },

        address: {
            type: String,
            default: ""
        },

        image: {
            type: String,
            default: ""
        },

        description: {
            type: String,
            default: ""
        },

        status: {
            type: String,
            default: "Active"
        },

        createdAt: {
            type: Date,
            default: Date.now
        }

    });


module.exports =
    mongoose.models.Student ||
    mongoose.model(
        "Student",
        studentSchema
    );
