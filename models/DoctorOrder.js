// const mongoose = require("mongoose");


// const DoctorOrderSchema = new mongoose.Schema({


// doctorId:{


// type:mongoose.Schema.Types.ObjectId,

// ref:"Doctor",

// required:true


// },



// items:[{


// productId:String,


// name:String,


// price:Number,


// image:String,


// qty:Number



// }],



// totalAmount:{


// type:Number,


// required:true


// },



// status:{


// type:String,

// default:"Pending"


// },



// createdAt:{


// type:Date,

// default:Date.now


// }



// });



// module.exports =
// mongoose.model(
// "DoctorOrder",
// DoctorOrderSchema
// );

const mongoose = require("mongoose");

const DoctorOrderSchema =
    new mongoose.Schema({

        doctorId: {

            type:
                mongoose.Schema.Types.ObjectId,

            ref:
                "Doctor",

            required:true

        },


        doctorName: {

            type:String,

            default:""

        },


        doctorPhone: {

            type:String,

            default:""

        },


        doctorEmail: {

            type:String,

            default:""

        },


        items: [

            {

                productId: {

                    type:
                        mongoose.Schema.Types.ObjectId,

                    ref:
                        "Product",

                    default:null

                },


                name: {

                    type:String,

                    default:""

                },


                price: {

                    type:Number,

                    default:0

                },


                image: {

                    type:String,

                    default:""

                },


                qty: {

                    type:Number,

                    default:1

                }

            }

        ],


        totalAmount: {

            type:Number,

            default:0

        },


        paymentMethod: {

            type:String,

            default:"cod"

        },


        paymentStatus: {

            type:String,

            default:"pending"

        },


        status: {

            type:String,

            default:"Pending"

        },


        createdAt: {

            type:Date,

            default:Date.now

        }

    });


module.exports =
    mongoose.models.DoctorOrder ||
    mongoose.model(
        "DoctorOrder",
        DoctorOrderSchema
    );
