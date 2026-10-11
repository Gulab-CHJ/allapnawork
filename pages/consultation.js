// const Doctor = require("../models/Doctor");


// async function Consultation(req, res){

//     try{

//         const doctor = await Doctor.findById(req.params.id);


//         if(!doctor){
//             return res.send("Doctor not found");
//         }


//         res.send(`

//         <h1>Book Appointment</h1>

//         <h2>
//         Dr. ${doctor.name}
//         </h2>

//         <p>
//         Specialization: ${doctor.specialization || ""}
//         </p>

//         <p>
//         Address: ${doctor.address || ""}
//         </p>


//         <form method="POST" action="/admin/book-appointment">


//         <input 
//         type="hidden"
//         name="doctorId"
//         value="${doctor._id}"
//         >


//         <input
//         name="patientName"
//         placeholder="Patient Name"
//         required
//         >


//         <input
//         name="phone"
//         placeholder="Mobile Number"
//         required
//         >


//         <button>
//         Confirm Appointment
//         </button>


//         </form>


//         `);


//     }catch(error){

//         console.log(error);

//         res.status(500).send("Server Error");

//     }

// }


// module.exports = Consultation;

const Doctor = require("../models/Doctor");


async function Consultation(req,res){

try{

const doctor = await Doctor.findById(req.params.id);


if(!doctor){
    return res.send("Doctor not found");
}


res.send(`

<style>

body{
    margin:0;
    font-family:'Segoe UI',Arial;
    background:#f1f5f9;
}


.consult-container{

    max-width:700px;
    margin:40px auto;
    padding:20px;

}


.card{

    background:white;
    border-radius:25px;
    padding:30px;

    box-shadow:
    0 20px 50px rgba(0,0,0,.12);

}



/* Doctor */

.doctor-box{

    background:
    linear-gradient(
    135deg,
    #2563eb,
    #0ea5e9
    );

    color:white;

    padding:25px;

    border-radius:20px;

    margin-bottom:25px;

}


.doctor-box h2{

    margin:0;
    font-size:28px;

}



.doctor-box p{

    margin:8px 0;

}




h1{

text-align:center;
color:#0f172a;

}



label{

font-weight:600;
color:#334155;

}



input,
textarea,
select{


width:100%;

padding:14px;

margin:8px 0 18px;

border-radius:12px;

border:1px solid #cbd5e1;

font-size:15px;

outline:none;

}



input:focus,
textarea:focus,
select:focus{

border-color:#2563eb;

box-shadow:0 0 0 4px rgba(37,99,235,.15);

}




textarea{

height:100px;
resize:none;

}



.row{

display:grid;

grid-template-columns:1fr 1fr;

gap:15px;

}



button{

width:100%;

padding:16px;

border:none;

border-radius:15px;

background:

linear-gradient(
135deg,
#16a34a,
#059669
);

color:white;

font-size:17px;

font-weight:700;

cursor:pointer;

}



button:hover{

transform:translateY(-2px);

}




@media(max-width:600px){

.row{

grid-template-columns:1fr;

}

}


</style>



<div class="consult-container">


<div class="card">


<h1>
Book Appointment
</h1>



<div class="doctor-box">


<h2>
👨‍⚕️ Dr. ${doctor.name}
</h2>


<p>
🩺 ${doctor.specialization || "General Physician"}
</p>


<p>
🏥 ${doctor.hospital || "Hospital"}
</p>


<p>
📍 ${doctor.address || ""}
</p>


</div>




<form method="POST" action="/admin/book-appointment">



<input 
type="hidden"
name="doctorId"
value="${doctor._id}"
>




<label>
Patient Name
</label>

<input
name="patientName"
placeholder="Enter patient name"
required
>




<div class="row">


<div>

<label>
Mobile Number
</label>

<input

name="phone"

placeholder="Mobile Number"

required

>

</div>



<div>

<label>
Age
</label>

<input

name="age"

placeholder="Age"

>

</div>


</div>




<div class="row">


<div>

<label>
Gender
</label>

<select name="gender">

<option>Male</option>

<option>Female</option>

<option>Other</option>

</select>


</div>




<div>

<label>
Appointment Date
</label>

<input

type="date"

name="date"

required

>


</div>


</div>




<label>
Email
</label>


<input

type="email"

name="email"

placeholder="Email Address"

>




<label>
Patient Address
</label>


<textarea

name="address"

placeholder="Full address"

></textarea>





<label>
Problem / Symptoms
</label>


<textarea

name="problem"

placeholder="Describe your health problem"

required

></textarea>




<label>
Appointment Time
</label>


<select name="time">


<option>
10:00 AM - 12:00 PM
</option>


<option>
12:00 PM - 2:00 PM
</option>


<option>
5:00 PM - 8:00 PM
</option>


</select>





<button>

✅ Confirm Appointment

</button>




</form>


</div>


</div>


`);



}catch(error){

console.log(error);

res.status(500).send("Server Error");

}


}



module.exports = Consultation;
