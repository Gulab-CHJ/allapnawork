// // async function loadAppointments(){

// // const res = await fetch(
// // "/appointment/doctor/"+doctorId
// // );

// // const appointments =
// // await res.json();


// // let box =
// // document.getElementById(
// // "liveAppointments"
// // );


// // if(!appointments.length){

// // box.innerHTML =
// // "<h2>No Appointment Found</h2>";

// // return;

// // }


// // let html =
// // "<h2>📅 Live Appointments</h2>";


// // appointments.forEach(app=>{

// // html += `

// // <div class="appointment-card">

// // <h3>
// // 👤 ${app.patientName}
// // </h3>

// // <p>
// // 📞 ${app.phone}
// // </p>

// // <p>
// // 📅 ${app.appointmentDate}
// // </p>

// // <p>
// // ⏰ ${app.appointmentTime}
// // </p>

// // <p>
// // 📝 ${app.problem}
// // </p>

// // <p>
// // Status:
// // ${app.status}
// // </p>

// // </div>

// // `;

// // });


// // box.innerHTML=html;


// // }



// async function loadAppointments() {

//     try {

//         const res = await fetch("/appointment/doctor/" + window.doctorId);

//         const appointments = await res.json();

//         const box = document.getElementById("liveAppointments");

//         if (!appointments.length) {

//             box.innerHTML = `
//                 <h2>📅 Live Appointments</h2>
//                 <p>No Appointment Found</p>
//             `;

//             return;
//         }

//         let html = `<h2>📅 Live Appointments</h2>`;

//         appointments.forEach(app => {

//             html += `
//             <div class="appointment-card">

//                 <h3>👤 ${app.patientName}</h3>

//                 <p>📞 ${app.phone}</p>

//                 <p>📅 ${app.appointmentDate}</p>

//                 <p>⏰ ${app.appointmentTime}</p>

//                 <p>📝 ${app.problem}</p>

//                 <p>Status: <b>${app.status || "Pending"}</b></p>

//             </div>
//             `;

//         });

//         box.innerHTML = html;

//     } catch (err) {

//         console.log(err);

//     }

// }

// document.addEventListener("DOMContentLoaded", () => {

//     loadAppointments();

//     setInterval(loadAppointments, 5000);

// });



async function loadAppointments(){

try{

const res = await fetch(
"/appointment/doctor/"+window.doctorId
);


const appointments = await res.json();


const box =
document.getElementById(
"liveAppointments"
);



if(!appointments.length){

box.innerHTML=`

<h2>📅 Live Appointments</h2>

<p>No Appointment Found</p>

`;

return;

}



let html = `

<h2>📅 Live Appointments</h2>

`;



appointments.forEach(app=>{


html += `

<div class="appointment-card">


<div class="appointment-left">


<div class="patient-avatar">
👤
</div>


<div>

<h3>${app.patientName}</h3>

<p>📞 ${app.phone}</p>

<p>📝 ${app.problem || "No Problem"}</p>


</div>


</div>




<div class="appointment-right">


<div class="date-box">

📅 ${app.appointmentDate}

<br>

⏰ ${app.appointmentTime}

</div>



<div class="payment-success">

✔ Payment Success

</div>



<div class="status-box">

${app.status || "Pending"}

</div>



<button 
class="download-btn"
onclick="downloadAppointment('${app._id}')">

⬇ Download

</button>



</div>



</div>

`;

});


box.innerHTML = html;



}catch(err){

console.log(err);

}


}



document.addEventListener(
"DOMContentLoaded",
()=>{

loadAppointments();

setInterval(
loadAppointments,
5000
);

});
