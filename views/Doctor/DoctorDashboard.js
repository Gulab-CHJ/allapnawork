function DoctorDashboard(doctor){

return `

<style>

:root{

--primary:#2563eb;
--green:#10b981;
--bg:#f8fafc;
--text:#0f172a;

}


.doctor-dashboard{

background:#f8fafc;

min-height:100vh;

padding:25px;

font-family:Arial,sans-serif;

}


/* HEADER */


.dashboard-header{

background:
linear-gradient(
135deg,
#1e3a8a,
#2563eb
);

color:white;

padding:25px;

border-radius:22px;

display:flex;

justify-content:space-between;

align-items:center;

box-shadow:
0 15px 35px rgba(0,0,0,.15);

}


.dashboard-header h1{

margin:0;

font-size:28px;

}


.profile-btn{

background:white;

color:#2563eb;

padding:12px 20px;

border-radius:12px;

text-decoration:none;

font-weight:bold;

}



/* STATS */


.stats-grid{

margin-top:25px;

display:grid;

grid-template-columns:
repeat(4,1fr);

gap:18px;

}


.stat-card{


background:white;

padding:25px;

border-radius:20px;

border:1px solid #e5e7eb;

box-shadow:
0 10px 25px rgba(0,0,0,.08);

}



.stat-card h2{

margin:0;

color:#2563eb;

font-size:32px;

}



.stat-card p{

color:#64748b;

font-weight:bold;

}



/* APPOINTMENT */


.appointment-section{

margin-top:35px;

background:white;

padding:25px;

border-radius:22px;

box-shadow:
0 10px 30px rgba(0,0,0,.08);

}



.appointment-card{


margin-top:18px;

padding:22px;

border-radius:18px;

background:#f8fafc;

border:1px solid #e2e8f0;

display:flex;

justify-content:space-between;

align-items:center;

}



.patient h3{

margin:0;

color:#0f172a;

}



.patient p{

margin:8px 0;

color:#64748b;

}



.right-side{

text-align:right;

}



.payment{

background:#dcfce7;

color:#15803d;

padding:8px 15px;

border-radius:20px;

font-weight:bold;

display:inline-block;

}



.status{

margin-top:12px;

}



.status select{


padding:10px;

border-radius:10px;

border:1px solid #ddd;

font-weight:bold;

}



/* MOBILE */


@media(max-width:800px){


.stats-grid{

grid-template-columns:
repeat(2,1fr);

}


.appointment-card{

flex-direction:column;

align-items:flex-start;

gap:20px;

}


.right-side{

text-align:left;

}


}



@media(max-width:500px){


.doctor-dashboard{

padding:12px;

}


.stats-grid{

grid-template-columns:1fr;

}


.dashboard-header{

flex-direction:column;

gap:15px;

}


}


</style>




<div class="doctor-dashboard">



<div class="dashboard-header">


<div>

<h1>
🩺 HHGS Doctor
</h1>

<p>
Welcome Dr. ${doctor.name || ""}
</p>

</div>



<a class="profile-btn"
href="/admin/doctor/profile">

👤 Profile

</a>


</div>





<div class="stats-grid">


<div class="stat-card">

<h2>
25
</h2>

<p>
📅 Total Appointment
</p>

</div>



<div class="stat-card">

<h2>
5
</h2>

<p>
🕒 Today
</p>

</div>




<div class="stat-card">

<h2>
18
</h2>

<p>
✅ Completed
</p>

</div>




<div class="stat-card">

<h2>
₹5000
</h2>

<p>
💰 Earning
</p>

</div>


</div>






<div class="appointment-section">


<h2>
📅 Today's Appointments
</h2>



<div class="appointment-card">


<div class="patient">


<h3>
👤 Md Gulab
</h3>


<p>
📞 9142264714
</p>


<p>
📅 28-07-2026</p>


<p>
⏰ 09:10
</p>


<p>
📝 Problem: Good
</p>


</div>





<div class="right-side">


<div class="payment">

💳 Payment Success

</div>


<div class="status">


<select>


<option>
Pending
</option>


<option>
Confirmed
</option>


<option>
Completed
</option>


<option>
Cancelled
</option>


</select>


</div>



</div>



</div>




</div>




</div>



`;

}


module.exports = DoctorDashboard;
