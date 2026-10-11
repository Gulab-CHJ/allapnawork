require("dotenv").config();

const express = require("express");
const router = express.Router();

const Razorpay = require("razorpay");
const crypto = require("crypto");


const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");



const razorpay = new Razorpay({

key_id:process.env.RAZORPAY_KEY_ID,

key_secret:process.env.RAZORPAY_KEY_SECRET

});




// CREATE PAYMENT

router.post(
"/create-payment",
async(req,res)=>{


try{


const doctor =
await Doctor.findById(
req.body.doctorId
);



if(!doctor){

return res.status(404)
.json({
error:"Doctor not found"
});

}




let amount =
Number(doctor.fee || 0);



if(amount<=0){

amount=1;

}



const order =
await razorpay.orders.create({

amount:amount*100,

currency:"INR",

receipt:
"appointment_"+Date.now()

});



res.json(order);



}catch(err){

console.log(err);

res.status(500)
.json({
error:err.message
});

}


});






// SAVE APPOINTMENT AFTER PAYMENT


router.post(
"/save",
async(req,res)=>{


try{


const {

doctorId,
patientName,
phone,
age,
gender,
appointmentDate,
appointmentTime,
problem,

paymentId,
orderId,
signature


}=req.body;




// VERIFY SIGNATURE


const body =
orderId+"|"+paymentId;



const expected =
crypto
.createHmac(
"sha256",
process.env.RAZORPAY_KEY_SECRET
)
.update(body)
.digest("hex");



if(expected!==signature){

return res.status(400)
.json({

success:false,

message:"Payment Failed"

});

}




const appointment =
new Appointment({

doctorId,

patientName,

phone,

age,

gender,

appointmentDate,

appointmentTime,

problem,


paymentId,

orderId,

signature


});



await appointment.save();



res.json({

success:true

});



}catch(err){

console.log(err);

res.status(500)
.json({
error:err.message
});


}


});


// ================================
// GET DOCTOR APPOINTMENTS
// ================================

router.get(
"/doctor/:id",
async(req,res)=>{

try{


const appointments =
await Appointment.find({

doctorId:req.params.id

})
.sort({
createdAt:-1
});



res.json(appointments);



}catch(err){


console.log("GET APPOINTMENT ERROR:",err);


res.status(500).json({

error:err.message

});


}


});

router.get("/test", (req, res) => {
    res.send("Appointment Route Working");
});




module.exports=router;
