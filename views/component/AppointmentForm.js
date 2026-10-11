// // // function AppointmentForm(doctor) {

// // // return `

// // // <div class="appointment-box">

// // // <h2>📅 Book Appointment</h2>

// // // <form action="/appointment" method="POST">

// // // <input
// // // type="hidden"
// // // name="doctorId"
// // // value="${doctor._id}">

// // // <div class="form-grid">

// // // <input
// // // type="text"
// // // name="patientName"
// // // placeholder="Patient Name"
// // // required>

// // // <input
// // // type="tel"
// // // name="phone"
// // // placeholder="Mobile Number"
// // // required>

// // // <input
// // // type="number"
// // // name="age"
// // // placeholder="Age"
// // // required>

// // // <select name="gender" required>
// // // <option value="">Select Gender</option>
// // // <option value="Male">Male</option>
// // // <option value="Female">Female</option>
// // // <option value="Other">Other</option>
// // // </select>

// // // <input
// // // type="date"
// // // name="appointmentDate"
// // // required>

// // // <input
// // // type="time"
// // // name="appointmentTime"
// // // required>

// // // </div>

// // // <textarea
// // // name="problem"
// // // placeholder="Describe Your Problem"
// // // required></textarea>

// // // <button
// // // type="submit"
// // // class="book-btn">

// // // 📅 Book Appointment

// // // </button>

// // // </form>

// // // <style>

// // // .appointment-box{

// // // margin-top:35px;
// // // background:#fff;
// // // padding:30px;
// // // border-radius:20px;
// // // box-shadow:0 10px 30px rgba(0,0,0,.08);
// // // border:1px solid #e5e7eb;

// // // }

// // // .appointment-box h2{

// // // text-align:center;
// // // margin-bottom:25px;
// // // color:#2563eb;

// // // }

// // // .form-grid{

// // // display:grid;
// // // grid-template-columns:repeat(2,1fr);
// // // gap:15px;

// // // }

// // // .form-grid input,
// // // .form-grid select,
// // // .appointment-box textarea{

// // // width:100%;
// // // padding:14px;
// // // border:1px solid #d1d5db;
// // // border-radius:12px;
// // // font-size:15px;
// // // box-sizing:border-box;

// // // }

// // // .appointment-box textarea{

// // // margin-top:15px;
// // // height:120px;
// // // resize:none;

// // // }

// // // .book-btn{

// // // margin-top:20px;
// // // width:100%;
// // // padding:15px;
// // // background:#10b981;
// // // color:#fff;
// // // border:none;
// // // border-radius:12px;
// // // font-size:17px;
// // // font-weight:700;
// // // cursor:pointer;

// // // }

// // // .book-btn:hover{

// // // background:#059669;

// // // }

// // // @media(max-width:700px){

// // // .form-grid{

// // // grid-template-columns:1fr;

// // // }

// // // }

// // // </style>

// // // `;

// // // }

// // // module.exports = AppointmentForm;

// // function AppointmentForm(doctor){

// // return `

// // <div class="appointment-box">


// // <h2>
// // 📅 Book Appointment
// // </h2>


// // <form id="appointmentForm">


// // <input 
// // type="hidden"
// // name="doctorId"
// // value="${doctor._id}"
// // >


// // <input
// // name="patientName"
// // placeholder="Patient Name"
// // required
// // >


// // <input
// // name="phone"
// // placeholder="Mobile Number"
// // required
// // >


// // <input
// // name="age"
// // type="number"
// // placeholder="Age"
// // required
// // >


// // <select name="gender" required>

// // <option value="">
// // Gender
// // </option>

// // <option>
// // Male
// // </option>

// // <option>
// // Female
// // </option>

// // <option>
// // Other
// // </option>

// // </select>



// // <input
// // type="date"
// // name="appointmentDate"
// // required
// // >



// // <select name="appointmentTime" required>


// // <option>
// // Select Time
// // </option>


// // ${generateSlots(
// // doctor.timeFrom,
// // doctor.timeTo,
// // doctor.slotDuration
// // )}


// // </select>




// // <textarea
// // name="problem"
// // placeholder="Problem"
// // required>
// // </textarea>



// // <button
// // type="button"
// // onclick="payNow()"
// // >

// // 💳 Pay Now ₹${doctor.fee || 0}

// // </button>



// // </form>



// // <script src="https://checkout.razorpay.com/v1/checkout.js"></script>



// // <script>


// // async function payNow(){


// // let form =
// // document.getElementById(
// // "appointmentForm"
// // );



// // let data =
// // Object.fromEntries(
// // new FormData(form)
// // );



// // let order =
// // await fetch(
// // "/appointment/create-payment",
// // {

// // method:"POST",

// // headers:{
// // "Content-Type":"application/json"
// // },

// // body:JSON.stringify(data)

// // });


// // let result =
// // await order.json();



// // let options={


// // key:
// // "${process.env.RAZORPAY_KEY_ID}",


// // amount:
// // result.amount,


// // currency:"INR",


// // order_id:
// // result.id,


// // name:"HHGS",


// // description:"Doctor Appointment",



// // handler:function(response){


// // fetch(
// // "/appointment/save",
// // {

// // method:"POST",

// // headers:{
// // "Content-Type":"application/json"
// // },


// // body:JSON.stringify({

// // ...data,

// // paymentId:
// // response.razorpay_payment_id,


// // orderId:
// // response.razorpay_order_id,


// // signature:
// // response.razorpay_signature

// // })


// // })
// // .then(()=>{

// // alert(
// // "Appointment Booked Successfully"
// // );

// // location.reload();

// // });


// // }



// // };


// // let razorpay =
// // new Razorpay(options);


// // razorpay.open();



// // }


// // </script>



// // <style>

// // .appointment-box{

// // background:white;
// // padding:30px;
// // margin-top:30px;
// // border-radius:20px;
// // box-shadow:0 10px 30px #ddd;

// // }


// // .appointment-box input,
// // .appointment-box select,
// // .appointment-box textarea{

// // width:100%;
// // padding:14px;
// // margin-bottom:15px;
// // border-radius:10px;
// // border:1px solid #ddd;

// // }


// // .appointment-box button{

// // width:100%;
// // padding:15px;
// // background:#10b981;
// // color:white;
// // border:0;
// // border-radius:12px;
// // font-size:18px;
// // font-weight:bold;

// // }

// // </style>


// // `;

// // }



// // function generateSlots(
// // from,
// // to,
// // duration
// // ){

// // if(!from || !to)
// // return "";


// // let html="";


// // let start =
// // new Date(
// // "2026-01-01 "+from
// // );


// // let end =
// // new Date(
// // "2026-01-01 "+to
// // );



// // while(start < end){


// // let t =
// // start.toLocaleTimeString(
// // "en-GB",
// // {
// // hour:"2-digit",
// // minute:"2-digit"
// // }
// // );



// // html +=
// // `
// // <option>
// // ${t}
// // </option>
// // `;



// // start.setMinutes(
// // start.getMinutes()
// // +
// // Number(duration || 10)
// // );



// // }


// // return html;


// // }



// // module.exports =
// // AppointmentForm;


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


// paymentId:{
//     type:String
// },

// orderId:{
//     type:String
// },

// signature:{
//     type:String
// },


// status:{
//     type:String,
//     default:"Booked"
// }


// },{
// timestamps:true
// });


// module.exports =
// mongoose.models.Appointment ||
// mongoose.model(
// "Appointment",
// AppointmentSchema
// );

function AppointmentForm(doctor){


return `


<div class="appointment-box">


<h2>
📅 Book Appointment
</h2>


<form id="appointmentForm">


<input 
type="hidden"
name="doctorId"
value="${doctor._id}"
>



<input
name="patientName"
placeholder="Patient Name"
required
>


<input
name="phone"
placeholder="Mobile Number"
required
>



<input
type="number"
name="age"
placeholder="Age"
required
>




<select name="gender" required>

<option value="">
Select Gender
</option>

<option>
Male
</option>

<option>
Female
</option>

<option>
Other
</option>

</select>





<input
type="date"
name="appointmentDate"
required
>




<select 
name="appointmentTime"
required
>


<option>
Select Time
</option>


${generateSlots(
doctor.timeFrom,
doctor.timeTo,
doctor.slotDuration
)}


</select>





<textarea

name="problem"

placeholder="Problem"

required

></textarea>




<button

type="button"

onclick="payNow()"

>

💳 Pay Now ₹${doctor.fee || 1}


</button>



</form>





<script src="https://checkout.razorpay.com/v1/checkout.js"></script>



<script>



async function payNow(){



let form =
document.getElementById(
"appointmentForm"
);



let data =
Object.fromEntries(
new FormData(form)
);





let response =
await fetch(
"/appointment/create-payment",
{


method:"POST",


headers:{


"Content-Type":
"application/json"


},


body:
JSON.stringify(data)


});





let order =
await response.json();





let options={


key:
"${process.env.RAZORPAY_KEY_ID}",


amount:
order.amount,


currency:"INR",


order_id:
order.id,



name:
"HHGS",



description:
"Doctor Appointment",





handler:function(payment){



fetch(
"/appointment/save",
{


method:"POST",


headers:{


"Content-Type":
"application/json"


},


body:
JSON.stringify({

...data,


paymentId:
payment.razorpay_payment_id,


orderId:
payment.razorpay_order_id,


signature:
payment.razorpay_signature,


paymentStatus:"Success"


})


}

)
.then(res=>res.json())
.then(result=>{


if(result.success){

alert("Appointment Booked Successfully");

// Form Reset
document.getElementById("appointmentForm").reset();

// Live Appointment Refresh
if(typeof loadAppointments === "function"){
    loadAppointments();
}

}


});


}


};



let razorpay =
new Razorpay(options);



razorpay.open();



}



</script>





<style>


.appointment-box{

margin-top:30px;

background:#fff;

padding:30px;

border-radius:20px;

box-shadow:
0 10px 30px rgba(0,0,0,.1);

}



.appointment-box input,
.appointment-box select,
.appointment-box textarea{


width:100%;

padding:14px;

margin-bottom:15px;

border-radius:10px;

border:1px solid #ddd;


}



.appointment-box textarea{

height:120px;

}



.appointment-box button{

width:100%;

padding:15px;

background:#10b981;

color:white;

border:none;

border-radius:12px;

font-size:18px;

font-weight:bold;

cursor:pointer;

transition:.3s;

}


.appointment-box button:hover{

background:#059669;

transform:translateY(-2px);

}



</style>



`;


}



function generateSlots(from,to,duration){


if(!from || !to)
return "";



let html="";



let start =
new Date(
"2026-01-01 "+from
);



let end =
new Date(
"2026-01-01 "+to
);




while(start<end){



let time =
start.toLocaleTimeString(
"en-GB",
{
hour:"2-digit",
minute:"2-digit"
}
);



html +=
`
<option>
${time}
</option>
`;



start.setMinutes(
start.getMinutes()
+
Number(duration || 10)
);


}


return html;


}



module.exports=AppointmentForm;
