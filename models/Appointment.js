// const mongoose = require("mongoose");


// const AppointmentSchema = new mongoose.Schema({

// doctorId:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"Doctor",
//     required:true
// },


// patientName:{
//     type:String,
//     required:true
// },


// phone:{
//     type:String,
//     required:true
// },


// age:{
//     type:Number,
//     required:true
// },


// gender:{
//     type:String,
//     required:true
// },


// appointmentDate:{
//     type:String,
//     required:true
// },


// appointmentTime:{
//     type:String,
//     required:true
// },


// problem:{
//     type:String,
//     required:true
// },


// paymentStatus:{
//     type:String,
//     default:"Pending"
// },


// paymentId:{
//     type:String,
//     default:""
// },


// orderId:{
//     type:String,
//     default:""
// },


// createdAt:{
//     type:Date,
//     default:Date.now
// }


// });


// module.exports =
// mongoose.models.Appointment ||
// mongoose.model(
// "Appointment",
// AppointmentSchema
// );


const mongoose = require("mongoose");


const AppointmentSchema = new mongoose.Schema({

doctorId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Doctor",
    required:true
},


patientName:{
    type:String,
    required:true
},


phone:{
    type:String,
    required:true
},


age:{
    type:Number
},


gender:{
    type:String
},


appointmentDate:{
    type:String,
    required:true
},


appointmentTime:{
    type:String,
    required:true
},


problem:{
    type:String
},


paymentStatus:{
    type:String,
    default:"Pending"
},


paymentId:{
    type:String
},


orderId:{
    type:String
},


signature:{
    type:String
},


status:{
    type:String,
    default:"Pending"
}


},{
    timestamps:true
});


module.exports =
mongoose.models.Appointment ||
mongoose.model(
"Appointment",
AppointmentSchema
);
