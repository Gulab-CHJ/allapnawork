
const AppointmentForm = require("../views/component/AppointmentForm");
function DoctorProfile(doctor) {
  return `

<style>

:root{
    --primary:#2563eb;
    --accent:#10b981;
    --bg:#f8fafc;
    --dark:#0f172a;
    --muted:#64748b;
}


.profile-page{

    width:100%;
    max-width:1000px;

    margin:40px auto;

    padding:20px;

    font-family:'Inter',Arial,sans-serif;

}



.doctor-card{

    background:#fff;

    border-radius:24px;

    overflow:hidden;

    border:1px solid #e5e7eb;

    box-shadow:
    0 15px 40px rgba(0,0,0,.08);

}



/* HEADER */


.profile-header{

    background:
    linear-gradient(
    135deg,
    #1e3a8a,
    #2563eb,
    #0d9488
    );

    padding:40px 20px;

    text-align:center;

    color:white;

}


.avatar-wrapper{

    position:relative;

    display:inline-block;

}


.profile-header img{

    width:150px;

    height:150px;

    border-radius:50%;

    object-fit:cover;

    border:5px solid white;

}



.verified-badge{

    position:absolute;

    right:5px;

    bottom:10px;

    background:#10b981;

    width:30px;

    height:30px;

    border-radius:50%;

    display:flex;

    justify-content:center;

    align-items:center;

}



.doc-name{

    font-size:30px;

    margin:15px 0 8px;

}



.doc-spec{

    background:
    rgba(255,255,255,.2);

    padding:8px 20px;

    border-radius:20px;

}



/* BODY */


.profile-body{

    padding:30px;

}



.info-grid{

    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(220px,1fr));

    gap:18px;

}



.info-card{

    background:#f8fafc;

    padding:18px;

    border-radius:16px;

    border:1px solid #e2e8f0;

}



.info-card:hover{

    background:white;

    box-shadow:
    0 10px 20px rgba(0,0,0,.06);

}



.info-label{

    font-size:12px;

    color:#64748b;

    font-weight:700;

    margin-bottom:8px;

    text-transform:uppercase;

}



.info-value{

    font-size:16px;

    color:#0f172a;

    font-weight:600;

    word-break:break-word;

}



/* PHONE BUTTON */


.unlock-btn{

    margin-top:12px;

    background:#16a34a;

    color:white;

    border:none;

    padding:10px 18px;

    border-radius:10px;

    cursor:pointer;

    font-weight:bold;

}



/* CONSULTATION BOX */


.patient-action-box{

    margin-top:30px;

    background:
    linear-gradient(
    135deg,
    #ecfdf5,
    #eff6ff
    );

    border:1px solid #bbf7d0;

    padding:25px;

    border-radius:20px;

    display:flex;

    justify-content:space-between;

    align-items:center;

    gap:20px;

}



.action-text h2{

    margin:0;

}



.action-text p{

    color:#64748b;

}



.consult-btn{

    background:#10b981;

    color:white;

    text-decoration:none;

    padding:14px 25px;

    border-radius:12px;

    font-weight:bold;

}



.consult-btn:hover{

    background:#059669;

}



/* MOBILE */


@media(max-width:700px){


.profile-page{

    padding:10px;

    margin:20px auto;

}



.profile-body{

    padding:20px;

}



.profile-header img{

    width:120px;

    height:120px;

}



.doc-name{

    font-size:22px;

}



.patient-action-box{

    flex-direction:column;

    text-align:center;

}



.consult-btn{

    width:100%;

}



.info-grid{

    grid-template-columns:1fr;

}


}




</style>

<div class="info-grid">

<div class="info-card">
<div class="info-label">🎓 Degree</div>
<div  style=" display: none !important; " class="info-value">
${doctor.degree || "N/A"}
</div>
</div>


<div class="info-card">
<div class="info-label">⏳ Experience</div>
<div class="info-value">
${doctor.experience ? doctor.experience+" Years" : "N/A"}
</div>
</div>


<div class="info-card">
<div class="info-label">🏥 Hospital</div>
<div class="info-value">
${doctor.hospital || "N/A"}
</div>
</div>


<div class="info-card">
<div class="info-label">📅 Available Day</div>
<div class="info-value">
${doctor.availableDay || "Not Available"}
</div>
</div>


<div class="info-card">
<div class="info-label">⏰ Available Time</div>
<div class="info-value">

${
doctor.timeFrom && doctor.timeTo
?
doctor.timeFrom+" - "+doctor.timeTo
:
"Not Available"
}

</div>
</div>


<div class="info-card">
<div class="info-label">💰 Consultation Fee</div>
<div class="info-value">

${
doctor.fee
?
"₹"+doctor.fee
:
"Free"
}

</div>
</div>


<div class="info-card">
<div class="info-label">💳 Fee Type</div>
<div class="info-value">

${
doctor.feeType
?
doctor.feeType.replace("_"," ")
:
"Per Visit"
}

</div>
</div>



<div class="info-card">

<div class="info-label">
📞 Phone Number
</div>

<div class="info-value" id="doctorPhone">
${doctor.phoneUnlocked ? doctor.phone : "**********"}
</div>

<br>

<button
onclick="unlockPhone()"
id="unlockBtn"
style="
background:#16a34a;
color:white;
border:none;
padding:10px 18px;
border-radius:10px;
cursor:pointer;
font-weight:bold;
">

🔓 Unlock for ₹1

</button>

</div>



<div class="info-card">
<div class="info-label">📍 Address</div>

<div class="info-value">
${doctor.address || "N/A"}
</div>

</div>


</div>
${AppointmentForm(doctor)}

<div id="liveAppointments">

<h2>📅 Live Appointments</h2>

<p>Loading...</p>

</div>

<script>
window.doctorId = "${doctor._id}";
</script>

<script src="/js/doctor-profile.js"></script>






<style>
#liveAppointments{

margin-top:35px;

background:#ffffff;

padding:30px;

border-radius:24px;

box-shadow:
0 15px 40px rgba(0,0,0,.08);

border:1px solid #e5e7eb;

}



#liveAppointments h2{

font-size:24px;

color:#0f172a;

margin-bottom:25px;

}



/* APPOINTMENT CARD */

.appointment-card{


display:flex;

justify-content:space-between;

align-items:center;

gap:25px;


background:linear-gradient(
135deg,
#ffffff,
#f8fafc
);


padding:22px;


border-radius:20px;


margin-bottom:18px;


border:1px solid #e2e8f0;


box-shadow:
0 8px 25px rgba(0,0,0,.06);


transition:.3s;


}



.appointment-card:hover{


transform:translateY(-3px);


box-shadow:
0 15px 35px rgba(0,0,0,.12);


}



/* LEFT SIDE */


.appointment-left{


display:flex;

align-items:center;

gap:15px;


}



.patient-avatar{


width:60px;

height:60px;


border-radius:50%;


background:
linear-gradient(
135deg,
#2563eb,
#10b981
);


display:flex;

align-items:center;

justify-content:center;


font-size:28px;


color:white;


}




.appointment-left h3{


margin:0 0 8px;


font-size:18px;


color:#0f172a;


}



.appointment-left p{


margin:5px 0;


color:#64748b;


}



/* RIGHT SIDE */


.appointment-right{


text-align:right;


}



.date-box{


background:#eff6ff;


color:#2563eb;


padding:12px 18px;


border-radius:14px;


font-weight:700;


}



.payment-success{


margin-top:12px;


background:#dcfce7;


color:#15803d;


padding:8px 15px;


border-radius:20px;


font-size:14px;


font-weight:bold;


}



.status-box{


margin-top:10px;


background:#fef3c7;


color:#92400e;


padding:8px 15px;


border-radius:20px;


font-weight:bold;


}



/* MOBILE */


@media(max-width:700px){


.appointment-card{


flex-direction:column;


align-items:flex-start;


}



.appointment-right{


width:100%;


text-align:left;


}


}


</style>
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

<script>


async function unlockPhone() {

    const btn = document.getElementById("unlockBtn");

    btn.innerHTML = "Please Wait...";
    btn.disabled = true;


    try {


        const res = await fetch("/admin/create-phone-payment", {

    method:"POST",

    headers:{
        "Content-Type":"application/json"
    },

    body:JSON.stringify({

        doctorId:"${doctor._id}"

    })

});


        const order = await res.json();


        if(!order.id){

            alert("Order create failed");

            btn.disabled=false;
            btn.innerHTML="🔓 Unlock for ₹1";

            return;
        }



        const options = {


            key:"rzp_live_THG6859JR3Ww9Y",


            amount:order.amount,


            currency:order.currency,


            order_id:order.id,


            name:"HHGS",


            description:"Doctor Phone Unlock",



            handler: async function(response){


                const verify = await fetch(
                    "/admin/verify-phone-payment",
                    {

                    method:"POST",

                    headers:{
                        "Content-Type":"application/json"
                    },


                    body:JSON.stringify({

                        paymentId:
                        response.razorpay_payment_id,


                        orderId:
                        response.razorpay_order_id,


                        signature:
                        response.razorpay_signature,


                        doctorId:"${doctor._id}"

                    })

                });



                const data = await verify.json();



                if(data.success){


                    document.getElementById(
                    "doctorPhone"
                    ).innerHTML=data.phone;


                    btn.innerHTML="Unlocked ✔";

                    btn.disabled=true;


                }else{


                    alert("Payment verification failed");

                    btn.disabled=false;

                    btn.innerHTML="🔓 Unlock for ₹1";

                }



            }


        };



        const razorpay = new Razorpay(options);


        razorpay.open();



    } catch(error){


        console.log(error);


        alert("Payment Error");


        btn.disabled=false;

        btn.innerHTML="🔓 Unlock for ₹1";


    }



}

</script>



`;
}

module.exports = DoctorProfile;
