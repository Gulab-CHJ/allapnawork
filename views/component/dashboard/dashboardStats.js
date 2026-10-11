// function DashboardStats(data = {}) {
//   return `

// <style>
// .stats-grid {

//     width:100%;

//     display:grid;

//     grid-template-columns:repeat(4, minmax(0,1fr));

//     gap:15px;

//     box-sizing:border-box;

//     margin-top:10px;

//     margin-left:0;

// }



// /* CARD */

// .stat-card {

//     background:#fff;

//     border-radius:12px;

//     padding:18px;

//     position:relative;

//     overflow:hidden;

//     box-shadow:0 5px 15px rgba(0,0,0,.08);

//     border:1px solid #e5e7eb;

//     min-width:0;

//     transition:.3s ease;

// }


// .stat-card:hover{

//     transform:translateY(-3px);

//     box-shadow:0 10px 25px rgba(0,0,0,.12);

// }



// /* TOP COLOR LINE */

// .stat-card::before {

//     content:"";

//     position:absolute;

//     top:0;

//     left:0;

//     width:100%;

//     height:4px;

//     background:#2563eb;

// }


// .stat-card:nth-child(2)::before {

//     background:#16a34a;

// }


// .stat-card:nth-child(3)::before {

//     background:#f59e0b;

// }


// .stat-card:nth-child(4)::before {

//     background:#db2777;

// }



// /* TEXT */

// .stat-card h3 {

//     font-size:13px;

//     color:#64748b;

//     margin:8px 0;

//     font-weight:600;

//     display:flex;

//     align-items:center;

//     gap:8px;

// }



// .stat-card h3 i {

//     font-size:15px;

//     color:#2563eb;

// }



// .stat-card h2 {

//     font-size:30px;

//     font-weight:800;

//     color:#0f172a;

//     margin:0;

// }



// .stat-card p {

//     font-size:12px;

//     color:#16a34a;

//     font-weight:600;

//     margin-top:6px;

// }



// /* LARGE LAPTOP */

// @media(max-width:1200px){

//     .stats-grid{

//         grid-template-columns:repeat(3,1fr);

//     }

// }



// /* TABLET */

// @media(max-width:992px){

//     .stats-grid{

//         grid-template-columns:repeat(2,1fr);

//     }


//     .stat-card{

//         padding:16px;

//     }

// }



// /* MOBILE */

// @media(max-width:600px){

//     .stats-grid{

//         grid-template-columns:1fr;

//         gap:12px;

//         margin-top:10px;

//     }


//     .stat-card{

//         padding:15px;

//     }


//     .stat-card h2{

//         font-size:26px;

//     }


//     .stat-card h3{

//         font-size:12px;

//     }

// }



// /* SMALL MOBILE */

// @media(max-width:380px){

//     .stats-grid{

//         gap:10px;

//     }


//     .stat-card{

//         padding:12px;

//     }


//     .stat-card h2{

//         font-size:24px;

//     }

// }

// </style>



// <div class="stats-grid">


// <div class="stat-card">

// <h3>
// <i class="fa-solid fa-user-doctor"></i>
// Doctors
// </h3>

// <h2>${data.doctorCount || 0}</h2>

// <p>Registered</p>

// </div>



// <div class="stat-card">

// <h3>
// <i class="fa-solid fa-user-graduate"></i>
// Students
// </h3>

// <h2>${data.studentCount || 0}</h2>

// <p>Registered</p>

// </div>



// <div class="stat-card">

// <h3>
// <i class="fa-solid fa-stethoscope"></i>
// Services
// </h3>

// <h2>${data.serviceCount || 0}</h2>

// <p>Available</p>

// </div>



// <div class="stat-card">

// <h3>
// <i class="fa-solid fa-image"></i>
// Banners
// </h3>

// <h2>${data.bannerCount || 0}</h2>

// <p>Published</p>

// </div>



// </div>


// `;
// }


// module.exports = DashboardStats;

function DashboardStats(data = {}) {

return `

<style>


/* ================= STATS GRID ================= */


.stats-grid{


    width:100%;


    display:grid;


    grid-template-columns:repeat(4, minmax(0,1fr));


    gap:15px;


    margin-top:10px;


}





/* ================= CARD ================= */


.stat-card{


    background:#ffffff;


    border-radius:15px;


    padding:18px;


    position:relative;


    overflow:hidden;


    box-shadow:
    0 5px 20px rgba(0,0,0,.08);


    border:1px solid #e5e7eb;


    min-width:0;


    transition:.3s;


}



.stat-card:hover{


    transform:translateY(-3px);


}





/* TOP COLOR LINE */


.stat-card::before{


    content:"";


    position:absolute;


    top:0;


    left:0;


    width:100%;


    height:4px;


    background:#2563eb;


}



.stat-card:nth-child(2)::before{


    background:#16a34a;


}



.stat-card:nth-child(3)::before{


    background:#f59e0b;


}



.stat-card:nth-child(4)::before{


    background:#db2777;


}





/* TEXT */


.stat-card h3{


    display:flex;


    align-items:center;


    gap:8px;


    font-size:14px;


    color:#64748b;


    margin:8px 0;


    font-weight:600;


}



.stat-card h3 i{


    color:#2563eb;


    font-size:16px;


}





.stat-card h2{


    margin:0;


    font-size:32px;


    font-weight:800;


    color:#0f172a;


}





.stat-card p{


    margin-top:6px;


    font-size:12px;


    font-weight:600;


    color:#16a34a;


}





/* ================= LAPTOP ================= */


@media(max-width:1200px){


.stats-grid{


    grid-template-columns:repeat(3,1fr);


}


}





/* ================= TABLET ================= */


@media(max-width:900px){


.stats-grid{


    grid-template-columns:repeat(2,1fr);


}



.stat-card{


    padding:16px;


}



}





/* ================= MOBILE ================= */


@media(max-width:600px){


.stats-grid{


    grid-template-columns:1fr;


    gap:12px;


}



.stat-card{


    padding:15px;


}



.stat-card h2{


    font-size:26px;


}


}





/* ================= SMALL MOBILE ================= */


@media(max-width:380px){


.stat-card{


    padding:12px;


}



.stat-card h2{


    font-size:24px;


}



}



</style>





<div class="stats-grid">





<div class="stat-card">


<h3>

<i class="fa-solid fa-user-doctor"></i>

Doctors

</h3>


<h2>
${data.doctorCount || 0}
</h2>


<p>
Registered
</p>


</div>





<div class="stat-card">


<h3>

<i class="fa-solid fa-user-graduate"></i>

Students

</h3>


<h2>
${data.studentCount || 0}
</h2>


<p>
Registered
</p>


</div>





<div class="stat-card">


<h3>

<i class="fa-solid fa-stethoscope"></i>

Services

</h3>


<h2>
${data.serviceCount || 0}
</h2>


<p>
Available
</p>


</div>





<div class="stat-card">


<h3>

<i class="fa-solid fa-image"></i>

Banners

</h3>


<h2>
${data.bannerCount || 0}
</h2>


<p>
Published
</p>


</div>





</div>


`;

}


module.exports = DashboardStats;
