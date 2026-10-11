// // // // function DoctorSection(doctors = []) {

// // // //     let cards = "";

// // // //     if (doctors.length === 0) {

// // // //         cards = `
// // // //         <div class="no-doctor">
// // // //             <h3>No Doctors Available</h3>
// // // //         </div>
// // // //         `;

// // // //     } else {

// // // //         doctors.forEach((doctor) => {

// // // //             cards += `
// // // //             <div class="doctor-card">

// // // //                 <div class="doctor-img">
// // // //                     <img src="${doctor.image}" alt="${doctor.name}">
// // // //                 </div>

// // // //                 <div class="doctor-body">

// // // //                     <h3>${doctor.name}</h3>

// // // //                     <p class="degree">
// // // //                         ${doctor.degree || ""}
// // // //                     </p>

// // // //                     <p class="speciality">
// // // //                         ${doctor.specialization || ""}
// // // //                     </p>

// // // //                     <p class="hospital">
// // // //                         ${doctor.hospital || ""}
// // // //                     </p>

// // // //                     <div class="doctor-btns">

// // // //                         <a href="tel:${doctor.phone}" class="call-btn">
// // // //                             📞 Call
// // // //                         </a>

// // // //                         <a
// // // //                         href="https://wa.me/91${doctor.phone}?text=Hello Doctor"
// // // //                         target="_blank"
// // // //                         class="whatsapp-btn">
// // // //                             WhatsApp
// // // //                         </a>

// // // //                     </div>

// // // //                 </div>

// // // //             </div>
// // // //             `;
// // // //         });

// // // //     }

// // // //     return `

// // // // <style>

// // // // .doctor-section{

// // // //     width:100%;
// // // //     max-width:1400px;
// // // //     margin:60px auto;
// // // //     padding:30px 20px;

// // // // }


// // // // .doctor-title{

// // // //     text-align:center;
// // // //     font-size:38px;
// // // //     font-weight:800;
// // // //     margin-bottom:40px;
// // // //     color:#0f3d91;
// // // //     position:relative;

// // // // }


// // // // .doctor-title::after{

// // // //     content:"";
// // // //     width:80px;
// // // //     height:4px;
// // // //     background:#16a34a;
// // // //     display:block;
// // // //     margin:12px auto;
// // // //     border-radius:20px;

// // // // }



// // // // /* GRID */

// // // // .doctor-grid{

// // // //     display:grid;
// // // //     grid-template-columns:repeat(auto-fit,minmax(280px,320px));
// // // //     gap:30px;
// // // //     justify-content:center;

// // // // }




// // // // /* CARD */

// // // // .doctor-card{

// // // //     background:
// // // //     linear-gradient(
// // // //     145deg,
// // // //     #ffffff,
// // // //     #f1f7ff
// // // //     );

// // // //     border-radius:25px;
// // // //     overflow:hidden;

// // // //     box-shadow:
// // // //     0 15px 35px rgba(0,0,0,.12);

// // // //     transition:.4s;

// // // //     border:1px solid rgba(37,99,235,.15);

// // // // }


// // // // .doctor-card:hover{

// // // //     transform:
// // // //     translateY(-12px)
// // // //     scale(1.03);

// // // //     box-shadow:
// // // //     0 25px 50px rgba(37,99,235,.25);

// // // // }




// // // // /* IMAGE */

// // // // .doctor-img{

// // // //     width:100%;
// // // //     height:270px;

// // // //     overflow:hidden;

// // // //     position:relative;

// // // // }


// // // // .doctor-img::after{

// // // //     content:"";
// // // //     position:absolute;
// // // //     bottom:0;
// // // //     left:0;
// // // //     width:100%;
// // // //     height:60px;

// // // //     background:
// // // //     linear-gradient(
// // // //     transparent,
// // // //     rgba(0,0,0,.15)
// // // //     );

// // // // }


// // // // .doctor-img img{

// // // //     width:100%;
// // // //     height:100%;
// // // //     object-fit:cover;

// // // //     transition:.5s;

// // // // }


// // // // .doctor-card:hover img{

// // // //     transform:scale(1.08);

// // // // }





// // // // /* BODY */

// // // // .doctor-body{

// // // //     padding:25px;
// // // //     text-align:center;

// // // // }



// // // // .doctor-body h3{

// // // //     font-size:23px;
// // // //     font-weight:800;

// // // //     color:#0f172a;

// // // //     margin-bottom:8px;

// // // // }



// // // // .degree{

// // // //     color:#2563eb;
// // // //     font-weight:700;
// // // //     font-size:16px;

// // // // }


// // // // .speciality{

// // // //     color:#475569;
// // // //     margin:8px;

// // // // }


// // // // .hospital{

// // // //     color:#64748b;
// // // //     font-size:14px;

// // // // }





// // // // /* BUTTON */

// // // // .doctor-btns{

// // // //     display:flex;
// // // //     gap:12px;
// // // //     margin-top:22px;

// // // // }



// // // // .doctor-btns a{

// // // //     flex:1;

// // // //     padding:13px;

// // // //     border-radius:30px;

// // // //     color:white;

// // // //     text-decoration:none;

// // // //     font-weight:700;

// // // //     transition:.3s;

// // // // }



// // // // .call-btn{

// // // //     background:
// // // //     linear-gradient(135deg,#2563eb,#1d4ed8);

// // // // }



// // // // .whatsapp-btn{

// // // //     background:
// // // //     linear-gradient(135deg,#16a34a,#15803d);

// // // // }



// // // // .doctor-btns a:hover{

// // // //     transform:scale(1.05);

// // // // }





// // // // /* CLICK */

// // // // .doctor-link{

// // // //     text-decoration:none;
// // // //     color:inherit;

// // // // }




// // // // /* MOBILE */

// // // // @media(max-width:768px){


// // // // .doctor-section{

// // // //     padding:20px 15px;

// // // // }


// // // // .doctor-title{

// // // //     font-size:30px;

// // // // }


// // // // .doctor-grid{

// // // //     grid-template-columns:repeat(2,1fr);
// // // //     gap:15px;

// // // // }



// // // // .doctor-img{

// // // //     height:190px;

// // // // }


// // // // .doctor-body{

// // // //     padding:15px;

// // // // }


// // // // .doctor-body h3{

// // // //     font-size:17px;

// // // // }


// // // // .degree,
// // // // .speciality,
// // // // .hospital{

// // // //     font-size:13px;

// // // // }


// // // // .doctor-btns{

// // // //     flex-direction:column;

// // // // }



// // // // }



// // // // @media(max-width:480px){


// // // // .doctor-grid{

// // // //     grid-template-columns:1fr;

// // // // }


// // // // }

// // // // </style>

// // // // <section class="doctor-section">

// // // //     <h2 class="doctor-title">
// // // //         Our Doctors
// // // //     </h2>

// // // //     <div class="doctor-grid">

// // // //         ${cards}

// // // //     </div>

// // // // </section>

// // // // `;

// // // // }

// // // // module.exports = DoctorSection;

// // // function DoctorSection(doctors = []) {

// // //     let cards = "";


// // //     if(doctors.length === 0){

// // //         cards = `
// // //         <div class="no-doctor">
// // //             <h3>No Doctors Available</h3>
// // //         </div>
// // //         `;

// // //     }
// // //     else{


// // //         doctors.forEach((doctor)=>{


// // //         cards += `

// // // <div 
// // // class="doctor-card doctor-link"

// // // onclick="window.location.href='/admin/doctor/${doctor._id}'"

// // // data-search="
// // // ${doctor.name || ""}
// // // ${doctor.specialization || ""}
// // // ${doctor.address || ""}
// // // ">


// // // <div class="doctor-img">

// // // <img 
// // // src="${doctor.image || "/images/default-doctor.png"}"
// // // alt="${doctor.name || "Doctor"}">

// // // </div>



// // // <div class="doctor-body">


// // // <h3>
// // // NAME : ${doctor.name || ""}
// // // </h3>


// // // <p class="speciality">
// // // SPECIALIZATION : ${doctor.specialization || ""}
// // // </p>


// // // <p class="hospital">
// // // ADDRESS : ${doctor.address || ""}
// // // </p>






// // // </div>


// // // </div>


// // // `;

// // //         });


// // //     }

// // // return `


// // // <style>
// // // .doctor-link{

// // //     text-decoration:none;
// // //     color:inherit;
// // //     display:block;
// // //    cursor: pointer;

// // // }


// // // .doctor-section{

// // //     width:100%;
// // //     max-width:1400px;

// // //     margin:60px auto;

// // //     padding:30px 20px;

// // // }




// // // .doctor-title{

// // //     text-align:center;

// // //     font-size:38px;

// // //     font-weight:800;

// // //     color:#0f3d91;

// // //     margin-bottom:20px;

// // // }



// // // .doctor-title::after{

// // //     content:"";

// // //     width:90px;

// // //     height:4px;

// // //     background:#16a34a;

// // //     display:block;

// // //     margin:12px auto;

// // //     border-radius:20px;

// // // }





// // // /* SEARCH */


// // // .doctor-search{

// // //     max-width:520px;

// // //     margin:0 auto 40px;

// // // }



// // // .doctor-search input{


// // //     width:100%;

// // //     padding:16px 25px;

// // //     border-radius:50px;

// // //     border:2px solid #dbeafe;

// // //     outline:none;

// // //     font-size:16px;

// // //     background:#fff;


// // //     box-shadow:
// // //     0 10px 30px rgba(0,0,0,.10);


// // //     transition:.3s;


// // // }



// // // .doctor-search input:focus{


// // //     border-color:#2563eb;


// // //     box-shadow:
// // //     0 0 0 5px rgba(37,99,235,.15);


// // // }





// // // /* GRID */


// // // .doctor-grid{

// // //     display:grid;

// // //     grid-template-columns:repeat(auto-fill,minmax(280px,320px));

// // //     gap:30px;

// // //     justify-content:start;

// // // }






// // // /* CARD */


// // // .doctor-card{


// // //     background:
// // //     linear-gradient(
// // //     145deg,
// // //     #ffffff,
// // //     #f1f7ff
// // //     );


// // //     border-radius:25px;


// // //     overflow:hidden;


// // //     border:1px solid rgba(37,99,235,.15);


// // //     box-shadow:

// // //     0 15px 35px rgba(0,0,0,.12);


// // //     transition:.4s;


// // // }



// // // .doctor-card:hover{


// // //     transform:

// // //     translateY(-12px)
// // //     scale(1.03);


// // //     box-shadow:

// // //     0 25px 50px rgba(37,99,235,.25);


// // // }





// // // /* IMAGE */


// // // .doctor-img{


// // //     width:100%;

// // //     height:270px;

// // //     overflow:hidden;


// // // }




// // // .doctor-img img{


// // //     width:100%;

// // //     height:100%;


// // //     object-fit:cover;


// // //     transition:.5s;


// // // }



// // // .doctor-card:hover img{


// // //     transform:scale(1.08);


// // // }
// // // /* BODY */


// // // .doctor-body{


// // //     padding:25px;

// // //     text-align:center;


// // // }




// // // .doctor-body h3{


// // //     font-size:23px;

// // //     font-weight:800;

// // //     color:#0f172a;

// // //     margin:0 0 10px;


// // // }




// // // .degree{


// // //     color:#2563eb;

// // //     font-weight:700;

// // //     font-size:16px;


// // // }




// // // .speciality{


// // //     color:#475569;

// // //     margin:8px 0;


// // // }




// // // .hospital{


// // //     color:#64748b;

// // //     font-size:14px;


// // // }






// // // /* BUTTON */


// // // .doctor-btns{


// // //     display:flex;

// // //     gap:12px;

// // //     margin-top:22px;


// // // }




// // // .doctor-btns a{


// // //     flex:1;

// // //     padding:13px;


// // //     border-radius:30px;


// // //     color:#fff;


// // //     text-decoration:none;


// // //     font-weight:700;


// // //     transition:.3s;


// // // }




// // // .call-btn{


// // //     background:

// // //     linear-gradient(
// // //     135deg,
// // //     #2563eb,
// // //     #1d4ed8
// // //     );


// // // }





// // // .whatsapp-btn{


// // //     background:

// // //     linear-gradient(
// // //     135deg,
// // //     #16a34a,
// // //     #15803d
// // //     );


// // // }




// // // .doctor-btns a:hover{


// // //     transform:scale(1.05);


// // // }






// // // /* NO DOCTOR */


// // // .no-doctor{


// // //     text-align:center;

// // //     padding:50px;

// // //     background:white;

// // //     border-radius:20px;


// // //     box-shadow:

// // //     0 10px 30px rgba(0,0,0,.1);


// // // }








// // // /* MOBILE */


// // // @media(max-width:768px){



// // // .doctor-section{


// // //     padding:20px 15px;


// // // }



// // // .doctor-title{


// // //     font-size:30px;


// // // }





// // // .doctor-grid{


// // //     grid-template-columns:

// // //     repeat(2,1fr);


// // //     gap:15px;


// // // }





// // // .doctor-img{


// // //     height:190px;


// // // }




// // // .doctor-body{


// // //     padding:15px;


// // // }





// // // .doctor-body h3{


// // //     font-size:17px;


// // // }





// // // .degree,
// // // .speciality,
// // // .hospital{


// // //     font-size:13px;


// // // }





// // // .doctor-btns{


// // //     flex-direction:column;


// // // }



// // // }





// // // @media(max-width:480px){



// // // .doctor-grid{


// // //     grid-template-columns:1fr;


// // // }



// // // }
// // // </style>


// // // <section class="doctor-section">


// // //     <h2 class="doctor-title">

// // //         Our Doctors

// // //     </h2>



// // //     <div class="doctor-search">


// // //         <input

// // //         type="text"

// // //         id="doctorSearch"

// // //         placeholder="Find Doctor"

// // //         onkeyup="searchDoctor()"


// // //         >


// // //     </div>





// // //     <div class="doctor-grid">


// // //         ${cards}


// // //     </div>



// // // </section>





// // // <script>


// // // function searchDoctor(){


// // //     let value =

// // //     document

// // //     .getElementById("doctorSearch")

// // //     .value

// // //     .toLowerCase();




// // //     let cards =

// // //     document

// // //     .querySelectorAll(".doctor-card");





// // //     cards.forEach(card => {



// // //         let data =

// // //         card

// // //         .getAttribute("data-search")

// // //         .toLowerCase();





// // //         if(data.includes(value)){


// // //             card.style.display="block";


// // //         }

// // //         else{


// // //             card.style.display="none";


// // //         }



// // //     });



// // // }



// // // </script>


// // // `;

// // // }



// // // module.exports = DoctorSection;


// // function DoctorSection(doctors = []) {

// //     let cards = "";


// //     if (doctors.length === 0) {

// //         cards = `
// //         <div class="no-doctor">
// //             <h3>No Doctors Available</h3>
// //         </div>
// //         `;

// //     } else {


// //         doctors.forEach((doctor) => {


// //             cards += `

// // <div 
// // class="doctor-card doctor-link"

// // onclick="window.location.href='/admin/doctor/${doctor._id}'"

// // data-search="
// // ${doctor.name || ""}
// // ${doctor.specialization || ""}
// // ${doctor.address || ""}
// // ${doctor.hospital || ""}
// // ">


// // <div class="doctor-img">

// // <img 
// // src="${doctor.image || "/images/default-doctor.png"}"
// // alt="${doctor.name || "Doctor"}">

// // </div>



// // <div class="doctor-body">


// // <h3>
// // NAME : ${doctor.name || "N/A"}
// // </h3>



// // <p class="degree">

// // 🎓 DEGREE :

// // ${doctor.degree || "N/A"}

// // </p>




// // <p class="speciality">

// // 🩺 SPECIALIZATION :

// // ${doctor.specialization || "N/A"}

// // </p>




// // <p class="hospital">

// // 🏥 HOSPITAL :

// // ${doctor.hospital || "N/A"}

// // </p>




// // <p class="address">

// // 📍 ADDRESS :

// // ${doctor.address || "N/A"}

// // </p>




// // <div class="doctor-time">


// // ⏰ TIMING


// // <br>


// // ${
// // doctor.availableDay

// // ?

// // doctor.availableDay
// // +
// // "<br>"
// // +
// // doctor.timeFrom
// // +
// // " - "
// // +
// // doctor.timeTo

// // :

// // "Timing Not Available"

// // }


// // </div>




// // <div class="doctor-fee">


// // 💰 FEE


// // <br>


// // ₹ ${doctor.fee || 0}


// // (${doctor.feeType || "per_visit"})


// // </div>



// // </div>



// // </div>


// // `;

// //         });


// //     }



// // return `


// // <style>


// // .doctor-section{


// // width:100%;

// // max-width:1400px;

// // margin:60px auto;

// // padding:30px 20px;


// // }




// // .doctor-title{


// // text-align:center;

// // font-size:38px;

// // font-weight:800;

// // color:#0f3d91;

// // margin-bottom:20px;


// // }



// // .doctor-title::after{


// // content:"";

// // width:90px;

// // height:4px;

// // background:#16a34a;

// // display:block;

// // margin:12px auto;

// // border-radius:20px;


// // }




// // .doctor-search{


// // max-width:520px;

// // margin:0 auto 40px;


// // }



// // .doctor-search input{


// // width:100%;

// // padding:16px 25px;

// // border-radius:50px;

// // border:2px solid #dbeafe;

// // outline:none;

// // font-size:16px;


// // }




// // .doctor-grid{


// // display:grid;

// // grid-template-columns:

// // repeat(auto-fill,minmax(280px,320px));


// // gap:30px;

// // justify-content:center;


// // }





// // .doctor-card{


// // background:

// // linear-gradient(

// // 145deg,

// // #ffffff,

// // #f1f7ff

// // );


// // border-radius:25px;

// // overflow:hidden;

// // border:1px solid rgba(37,99,235,.15);


// // box-shadow:

// // 0 15px 35px rgba(0,0,0,.12);


// // transition:.4s;

// // cursor:pointer;


// // }





// // .doctor-card:hover{


// // transform:

// // translateY(-10px);


// // box-shadow:

// // 0 25px 50px rgba(37,99,235,.25);


// // }




// // .doctor-img{


// // width:100%;

// // height:270px;

// // overflow:hidden;


// // }



// // .doctor-img img{


// // width:100%;

// // height:100%;

// // object-fit:cover;

// // transition:.5s;


// // }




// // .doctor-card:hover img{


// // transform:scale(1.08);


// // }




// // .doctor-body{


// // padding:25px;

// // text-align:center;


// // }





// // .doctor-body h3{


// // font-size:22px;

// // font-weight:800;

// // color:#0f172a;


// // }




// // .degree{


// // color:#2563eb;

// // font-weight:700;


// // }



// // .speciality{


// // color:#475569;

// // margin:8px 0;


// // }



// // .hospital,
// // .address{


// // color:#64748b;

// // font-size:14px;

// // margin:8px 0;


// // }





// // .doctor-time{


// // margin-top:15px;

// // background:#eff6ff;

// // padding:12px;

// // border-radius:12px;

// // color:#1d4ed8;

// // font-weight:600;


// // }





// // .doctor-fee{


// // margin-top:12px;

// // background:#dcfce7;

// // padding:12px;

// // border-radius:12px;

// // color:#166534;

// // font-weight:700;


// // }





// // .no-doctor{


// // text-align:center;

// // padding:50px;

// // background:white;

// // border-radius:20px;


// // }





// // @media(max-width:768px){


// // .doctor-grid{


// // grid-template-columns:repeat(2,1fr);

// // gap:15px;


// // }


// // .doctor-img{


// // height:190px;


// // }


// // .doctor-body{


// // padding:15px;


// // }


// // }




// // @media(max-width:480px){


// // .doctor-grid{


// // grid-template-columns:1fr;


// // }


// // }



// // </style>





// // <section class="doctor-section">


// // <h2 class="doctor-title">

// // Our Doctors

// // </h2>




// // <div class="doctor-search">


// // <input

// // type="text"

// // id="doctorSearch"

// // placeholder="Find Doctor"

// // onkeyup="searchDoctor()"


// // >


// // </div>





// // <div class="doctor-grid">


// // ${cards}


// // </div>



// // </section>





// // <script>


// // function searchDoctor(){


// // let value =

// // document

// // .getElementById("doctorSearch")

// // .value

// // .toLowerCase();




// // let cards =

// // document

// // .querySelectorAll(".doctor-card");




// // cards.forEach(card=>{


// // let data =

// // card

// // .getAttribute("data-search")

// // .toLowerCase();




// // if(data.includes(value)){


// // card.style.display="block";


// // }

// // else{


// // card.style.display="none";


// // }


// // });


// // }



// // </script>


// // `;

// // }



// // module.exports = DoctorSection;

// function DoctorSection(doctors = []) {

//     let cards = "";

//     if (doctors.length === 0) {

//         cards = `
//             <div class="no-doctor">
//                 <h3>No Doctors Available</h3>
//             </div>
//         `;

//     } else {

//         doctors.forEach((doctor) => {

//             const phone =
//                 String(doctor.phone || "")
//                 .replace(/\D/g, "");

//             const timing =
//                 doctor.availableDay &&
//                 doctor.timeFrom &&
//                 doctor.timeTo
//                     ? `${doctor.availableDay} | ${doctor.timeFrom} - ${doctor.timeTo}`
//                     : "Timing Not Available";

//             cards += `

//             <div
//                 class="doctor-card doctor-link"

//                 onclick="window.location.href='/admin/doctor/${doctor._id}'"

//                 data-search="
//                     ${doctor.name || ""}
//                     ${doctor.degree || ""}
//                     ${doctor.specialization || ""}
//                     ${doctor.address || ""}
//                     ${doctor.hospital || ""}
//                 "
//             >

//                 <!-- DOCTOR IMAGE -->

//                 <div class="doctor-img">

//                     <img
//                         src="${doctor.image || "/images/default-doctor.png"}"
//                         alt="${doctor.name || "Doctor"}"
//                         loading="lazy"
//                     >

//                 </div>


//                 <!-- DOCTOR BODY -->

//                 <div class="doctor-body">

//                     <h3>
//                         ${doctor.name || "Doctor"}
//                     </h3>


//                     <div class="doctor-info degree">

//                         🎓
//                         ${doctor.degree || "Qualification N/A"}

//                     </div>


//                     <div class="doctor-info speciality">

//                         🩺
//                         ${doctor.specialization || "General Physician"}

//                     </div>


//                     <div class="doctor-info hospital">

//                         🏥
//                         ${doctor.hospital || "Clinic / Hospital"}

//                     </div>


//                     <div class="doctor-info address">

//                         📍
//                         ${doctor.address || "Address Not Available"}

//                     </div>


//                     <div class="doctor-info timing">

//                         ⏰
//                         ${timing}

//                     </div>


//                     <div class="doctor-fee">

//                         <span>
//                             💰 Consultation
//                         </span>

//                         <strong>
//                             ₹${doctor.fee || 0}
//                         </strong>

//                         <small>
//                             ${doctor.feeType || "Per Visit"}
//                         </small>

//                     </div>


//                     <div
//                         class="doctor-view-btn"
//                     >
//                         View Doctor
//                     </div>

//                 </div>

//             </div>

//             `;

//         });

//     }


//     return `

// <style>

// /* =========================================
//    DOCTOR SECTION
// ========================================= */

// .doctor-section {

//     width: 100%;

//     max-width: 1400px;

//     margin: 60px auto;

//     padding: 30px 20px;

// }


// /* =========================================
//    TITLE
// ========================================= */

// .doctor-title {

//     text-align: center;

//     font-size: 38px;

//     font-weight: 800;

//     color: #0f3d91;

//     margin: 0 0 20px;

// }


// .doctor-title::after {

//     content: "";

//     width: 90px;

//     height: 4px;

//     background: #16a34a;

//     display: block;

//     margin: 12px auto;

//     border-radius: 20px;

// }


// /* =========================================
//    SEARCH
// ========================================= */

// .doctor-search {

//     width: 100%;

//     max-width: 520px;

//     margin: 0 auto 40px;

// }


// .doctor-search input {

//     width: 100%;

//     padding: 15px 22px;

//     border-radius: 50px;

//     border: 2px solid #dbeafe;

//     outline: none;

//     font-size: 15px;

//     background: #ffffff;

//     box-shadow:
//         0 8px 25px rgba(0,0,0,.08);

//     transition: .3s;

// }


// .doctor-search input:focus {

//     border-color: #2563eb;

//     box-shadow:
//         0 0 0 4px
//         rgba(37,99,235,.12);

// }


// /* =========================================
//    GRID
// ========================================= */

// .doctor-grid {

//     display: grid;

//     grid-template-columns:
//         repeat(4, minmax(0, 1fr));

//     gap: 25px;

// }


// /* =========================================
//    CARD
// ========================================= */

// .doctor-card {

//     width: 100%;

//     min-width: 0;

//     background:
//         linear-gradient(
//             145deg,
//             #ffffff,
//             #f1f7ff
//         );

//     border-radius: 20px;

//     overflow: hidden;

//     border:
//         1px solid
//         rgba(37,99,235,.15);

//     box-shadow:
//         0 12px 30px
//         rgba(0,0,0,.10);

//     transition:
//         transform .3s ease,
//         box-shadow .3s ease;

//     cursor: pointer;

// }


// .doctor-card:hover {

//     transform:
//         translateY(-7px);

//     box-shadow:
//         0 20px 40px
//         rgba(37,99,235,.20);

// }


// /* =========================================
//    IMAGE
// ========================================= */

// .doctor-img {

//     width: 100%;

//     height: 250px;

//     overflow: hidden;

//     background: #e2e8f0;

// }


// .doctor-img img {

//     width: 100%;

//     height: 100%;

//     object-fit: cover;

//     display: block;

//     transition:
//         transform .4s ease;

// }


// .doctor-card:hover
// .doctor-img img {

//     transform:
//         scale(1.06);

// }


// /* =========================================
//    BODY
// ========================================= */

// .doctor-body {

//     padding: 20px;

//     text-align: left;

// }


// .doctor-body h3 {

//     margin: 0 0 12px;

//     font-size: 21px;

//     font-weight: 800;

//     color: #0f172a;

// }


// /* =========================================
//    INFO
// ========================================= */

// .doctor-info {

//     margin-top: 8px;

//     line-height: 1.4;

//     font-size: 14px;

//     word-break: break-word;

// }


// .degree {

//     color: #2563eb;

//     font-weight: 700;

// }


// .speciality {

//     color: #475569;

//     font-weight: 600;

// }


// .hospital {

//     color: #64748b;

// }


// .address {

//     color: #64748b;

// }


// .timing {

//     color: #334155;

//     font-weight: 600;

// }


// /* =========================================
//    FEE
// ========================================= */

// .doctor-fee {

//     display: flex;

//     align-items: center;

//     flex-wrap: wrap;

//     gap: 6px;

//     margin-top: 15px;

//     padding: 10px;

//     background: #eff6ff;

//     border-radius: 10px;

//     font-size: 13px;

// }


// .doctor-fee span {

//     color: #475569;

// }


// .doctor-fee strong {

//     color: #16a34a;

//     font-size: 17px;

// }


// .doctor-fee small {

//     color: #64748b;

// }


// /* =========================================
//    VIEW BUTTON
// ========================================= */

// .doctor-view-btn {

//     width: 100%;

//     text-align: center;

//     margin-top: 15px;

//     padding: 11px;

//     border-radius: 10px;

//     background:
//         linear-gradient(
//             135deg,
//             #2563eb,
//             #1d4ed8
//         );

//     color: #ffffff;

//     font-size: 14px;

//     font-weight: 700;

// }


// /* =========================================
//    NO DOCTOR
// ========================================= */

// .no-doctor {

//     grid-column: 1 / -1;

//     text-align: center;

//     padding: 50px 20px;

//     background: #ffffff;

//     border-radius: 20px;

//     box-shadow:
//         0 10px 30px
//         rgba(0,0,0,.08);

// }


// .no-doctor h3 {

//     margin: 0;

//     color: #64748b;

// }


// /* =========================================
//    TABLET
// ========================================= */

// @media (max-width: 1100px) {

//     .doctor-grid {

//         grid-template-columns:
//             repeat(3, minmax(0, 1fr));

//         gap: 18px;

//     }

//     .doctor-img {

//         height: 220px;

//     }

// }


// /* =========================================
//    MOBILE
//    2 DOCTORS PER ROW
// ========================================= */

// @media (max-width: 768px) {

//     .doctor-section {

//         margin: 35px auto;

//         padding:
//             20px 10px;

//     }


//     .doctor-title {

//         font-size: 28px;

//         margin-bottom: 18px;

//     }


//     .doctor-search {

//         margin-bottom: 25px;

//     }


//     .doctor-search input {

//         padding:
//             13px 18px;

//         font-size: 14px;

//     }


//     .doctor-grid {

//         grid-template-columns:
//             repeat(2, minmax(0, 1fr));

//         gap: 10px;

//     }


//     .doctor-card {

//         border-radius: 14px;

//     }


//     .doctor-img {

//         height: 145px;

//     }


//     .doctor-body {

//         padding: 11px;

//     }


//     .doctor-body h3 {

//         font-size: 15px;

//         line-height: 1.25;

//         margin-bottom: 7px;

//     }


//     .doctor-info {

//         font-size: 11px;

//         margin-top: 5px;

//         line-height: 1.35;

//     }


//     .doctor-fee {

//         margin-top: 9px;

//         padding: 7px;

//         gap: 3px;

//         font-size: 10px;

//     }


//     .doctor-fee strong {

//         font-size: 13px;

//     }


//     .doctor-fee small {

//         font-size: 9px;

//     }


//     .doctor-view-btn {

//         margin-top: 9px;

//         padding: 8px 5px;

//         font-size: 11px;

//         border-radius: 8px;

//     }

// }


// /* =========================================
//    SMALL PHONE
// ========================================= */

// @media (max-width: 480px) {

//     .doctor-section {

//         padding:
//             18px 8px;

//     }


//     .doctor-grid {

//         grid-template-columns:
//             repeat(2, minmax(0, 1fr));

//         gap: 8px;

//     }


//     .doctor-card {

//         border-radius: 12px;

//     }


//     .doctor-img {

//         height: 125px;

//     }


//     .doctor-body {

//         padding: 9px;

//     }


//     .doctor-body h3 {

//         font-size: 14px;

//     }


//     .doctor-info {

//         font-size: 10px;

//     }


//     .doctor-fee {

//         display: block;

//         font-size: 9px;

//     }


//     .doctor-fee strong {

//         display: block;

//         font-size: 12px;

//         margin-top: 2px;

//     }


//     .doctor-fee small {

//         font-size: 8px;

//     }


//     .doctor-view-btn {

//         font-size: 10px;

//         padding: 7px 3px;

//     }

// }

// </style>


// <section class="doctor-section">


//     <h2 class="doctor-title">
//         Our Doctors
//     </h2>


//     <div class="doctor-search">

//         <input

//             type="text"

//             id="doctorSearch"

//             placeholder="🔎 Find Doctor..."

//             onkeyup="searchDoctor()"

//         >

//     </div>


//     <div class="doctor-grid">

//         ${cards}

//     </div>


// </section>


// <script>

// function searchDoctor() {

//     const input =
//         document.getElementById("doctorSearch");

//     if (!input) return;


//     const value =
//         input.value
//         .toLowerCase()
//         .trim();


//     const cards =
//         document.querySelectorAll(
//             ".doctor-card"
//         );


//     cards.forEach(card => {

//         const data =
//             (
//                 card.getAttribute(
//                     "data-search"
//                 ) || ""
//             ).toLowerCase();


//         if (
//             data.includes(value)
//         ) {

//             card.style.display = "";

//         } else {

//             card.style.display = "none";

//         }

//     });

// }

// </script>

// `;

// }


// module.exports = DoctorSection;

function DoctorSection(doctors = []) {

    let cards = "";

    if (doctors.length === 0) {

        cards = `
            <div class="no-doctor">
                <h3>No Doctors Available</h3>
            </div>
        `;

    } else {

        doctors.forEach((doctor) => {

            const phone =
                String(doctor.phone || "")
                .replace(/\D/g, "");

            const timing =
                doctor.availableDay &&
                doctor.timeFrom &&
                doctor.timeTo
                    ? `${doctor.availableDay} | ${doctor.timeFrom} - ${doctor.timeTo}`
                    : "Timing Not Available";

            cards += `

            <div
                class="doctor-card doctor-link"

                onclick="window.location.href='/admin/doctor/${doctor._id}'"

                data-search="
                    ${doctor.name || ""}
                    ${doctor.degree || ""}
                    ${doctor.specialization || ""}
                    ${doctor.address || ""}
                    ${doctor.hospital || ""}
                "
            >

                <!-- DOCTOR IMAGE -->

                <div class="doctor-img">

                    <img
                        src="${doctor.image || "/images/default-doctor.png"}"
                        alt="${doctor.name || "Doctor"}"
                        loading="lazy"
                    >

                </div>


                <!-- DOCTOR BODY -->

                <div class="doctor-body">

                    <h3>
                        ${doctor.name || "Doctor"}
                    </h3>


                    <div  style=" display: none !important; " class="doctor-info degree">

                        🎓
                        ${doctor.degree || "Qualification N/A"}

                    </div>


                    <div class="doctor-info speciality">

                        🩺
                        ${doctor.specialization || "General Physician"}

                    </div>


                    <div class="doctor-info hospital">

                        🏥
                        ${doctor.hospital || "Clinic / Hospital"}

                    </div>


                    <div class="doctor-info address">

                        📍
                        ${doctor.address || "Address Not Available"}

                    </div>


                    <div class="doctor-info timing">

                        ⏰
                        ${timing}

                    </div>


                    <div class="doctor-fee">

                        <span>
                            💰 Consultation
                        </span>

                        <strong>
                            ₹${doctor.fee || 0}
                        </strong>

                        <small>
                            ${doctor.feeType || "Per Visit"}
                        </small>

                    </div>


                    <div
                        class="doctor-view-btn"
                    >
                        View Doctor
                    </div>

                </div>

            </div>

            `;

        });

    }


    return `

<style>

/* =========================================
   DOCTOR SECTION
========================================= */

.doctor-section {

    width: 100%;

    max-width: 1400px;

    margin: 60px auto;

    padding: 30px 20px;

}


/* =========================================
   TITLE
========================================= */

.doctor-title {

    text-align: center;

    font-size: 38px;

    font-weight: 800;

    color: #0f3d91;

    margin: 0 0 20px;

}


.doctor-title::after {

    content: "";

    width: 90px;

    height: 4px;

    background: #16a34a;

    display: block;

    margin: 12px auto;

    border-radius: 20px;

}


/* =========================================
   SEARCH
========================================= */

.doctor-search {

    width: 100%;

    max-width: 520px;

    margin: 0 auto 40px;

}


.doctor-search input {

    width: 100%;

    padding: 15px 22px;

    border-radius: 50px;

    border: 2px solid #dbeafe;

    outline: none;

    font-size: 15px;

    background: #ffffff;

    box-shadow:
        0 8px 25px rgba(0,0,0,.08);

    transition: .3s;

}


.doctor-search input:focus {

    border-color: #2563eb;

    box-shadow:
        0 0 0 4px
        rgba(37,99,235,.12);

}


/* =========================================
   GRID
========================================= */

.doctor-grid {

    display: grid;

    grid-template-columns:
        repeat(4, minmax(0, 1fr));

    gap: 25px;

}


/* =========================================
   CARD
========================================= */

.doctor-card {

    width: 100%;

    min-width: 0;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #f1f7ff
        );

    border-radius: 20px;

    overflow: hidden;

    border:
        1px solid
        rgba(37,99,235,.15);

    box-shadow:
        0 12px 30px
        rgba(0,0,0,.10);

    transition:
        transform .3s ease,
        box-shadow .3s ease;

    cursor: pointer;

}


.doctor-card:hover {

    transform:
        translateY(-7px);

    box-shadow:
        0 20px 40px
        rgba(37,99,235,.20);

}


/* =========================================
   IMAGE
========================================= */

.doctor-img {

    width: 100%;

    height: 250px;

    overflow: hidden;

    background: #e2e8f0;

}


.doctor-img img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    display: block;

    transition:
        transform .4s ease;

}


.doctor-card:hover
.doctor-img img {

    transform:
        scale(1.06);

}


/* =========================================
   BODY
========================================= */

.doctor-body {

    padding: 20px;

    text-align: left;

}


.doctor-body h3 {

    margin: 0 0 12px;

    font-size: 21px;

    font-weight: 800;

    color: #0f172a;

}


/* =========================================
   INFO
========================================= */

.doctor-info {
    margin-top: 8px;

    line-height: 1.4;

    font-size: 14px;

    word-break: break-word;

}


.degree {

    color: #2563eb;

    font-weight: 700;

}


.speciality {

    color: #475569;

    font-weight: 600;

}


.hospital {

    color: #64748b;

}


.address {

    color: #64748b;

}


.timing {

    color: #334155;

    font-weight: 600;

}


/* =========================================
   FEE
========================================= */

.doctor-fee {

    display: flex;

    align-items: center;

    flex-wrap: wrap;

    gap: 6px;

    margin-top: 15px;

    padding: 10px;

    background: #eff6ff;

    border-radius: 10px;

    font-size: 13px;

}


.doctor-fee span {

    color: #475569;

}


.doctor-fee strong {

    color: #16a34a;

    font-size: 17px;

}


.doctor-fee small {

    color: #64748b;

}


/* =========================================
   VIEW BUTTON
========================================= */

.doctor-view-btn {

    width: 100%;

    text-align: center;

    margin-top: 15px;

    padding: 11px;

    border-radius: 10px;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #1d4ed8
        );

    color: #ffffff;

    font-size: 14px;

    font-weight: 700;

}


/* =========================================
   NO DOCTOR
========================================= */

.no-doctor {

    grid-column: 1 / -1;

    text-align: center;

    padding: 50px 20px;

    background: #ffffff;

    border-radius: 20px;

    box-shadow:
        0 10px 30px
        rgba(0,0,0,.08);

}


.no-doctor h3 {

    margin: 0;

    color: #64748b;

}


/* =========================================
   TABLET
========================================= */

@media (max-width: 1100px) {

    .doctor-grid {

        grid-template-columns:
            repeat(3, minmax(0, 1fr));

        gap: 18px;

    }

    .doctor-img {

        height: 220px;

    }

}


/* =========================================
   MOBILE
   2 DOCTORS PER ROW
========================================= */

@media (max-width: 768px) {

    .doctor-section {

        margin: 35px auto;

        padding:
            20px 10px;

    }


    .doctor-title {

        font-size: 28px;

        margin-bottom: 18px;

    }


    .doctor-search {

        margin-bottom: 25px;

    }


    .doctor-search input {

        padding:
            13px 18px;

        font-size: 14px;

    }


    .doctor-grid {

        grid-template-columns:
            repeat(2, minmax(0, 1fr));

        gap: 10px;

    }


    .doctor-card {

        border-radius: 14px;

    }


    .doctor-img {

        height: 145px;

    }


    .doctor-body {

        padding: 11px;

    }


    .doctor-body h3 {

        font-size: 15px;

        line-height: 1.25;

        margin-bottom: 7px;

    }


    .doctor-info {

        font-size: 11px;

        margin-top: 5px;

        line-height: 1.35;

    }


    .doctor-fee {

        margin-top: 9px;

        padding: 7px;

        gap: 3px;

        font-size: 10px;

    }


    .doctor-fee strong {

        font-size: 13px;

    }


    .doctor-fee small {

        font-size: 9px;

    }


    .doctor-view-btn {

        margin-top: 9px;

        padding: 8px 5px;

        font-size: 11px;

        border-radius: 8px;

    }

}


/* =========================================
   SMALL PHONE
========================================= */

@media (max-width: 480px) {

    .doctor-section {

        padding:
            18px 8px;

    }


    .doctor-grid {

        grid-template-columns:
            repeat(2, minmax(0, 1fr));

        gap: 8px;

    }


    .doctor-card {

        border-radius: 12px;

    }


    .doctor-img {

        height: 125px;

    }


    .doctor-body {

        padding: 9px;

    }


    .doctor-body h3 {

        font-size: 14px;

    }


    .doctor-info {

        font-size: 10px;

    }


    .doctor-fee {

        display: block;

        font-size: 9px;

    }


    .doctor-fee strong {

        display: block;

        font-size: 12px;

        margin-top: 2px;

    }


    .doctor-fee small {

        font-size: 8px;

    }


    .doctor-view-btn {

        font-size: 10px;

        padding: 7px 3px;

    }

}

</style>


<section class="doctor-section">


    <h2 class="doctor-title">
        Our Doctors
    </h2>


    <div class="doctor-search">

        <input

            type="text"

            id="doctorSearch"

            placeholder="🔎 Find Doctor..."

            onkeyup="searchDoctor()"

        >

    </div>


    <div class="doctor-grid">

        ${cards}

    </div>


</section>


<script>

function searchDoctor() {

    const input =
        document.getElementById("doctorSearch");

    if (!input) return;


    const value =
        input.value
        .toLowerCase()
        .trim();


    const cards =
        document.querySelectorAll(
            ".doctor-card"
        );


    cards.forEach(card => {

        const data =
            (
                card.getAttribute(
                    "data-search"
                ) || ""
            ).toLowerCase();


        if (
            data.includes(value)
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}

</script>

`;

}


module.exports = DoctorSection;
