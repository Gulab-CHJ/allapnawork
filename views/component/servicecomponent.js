// // // function ServiceSection(services = []) {

// // // return `
// // // <section class="services">

// // // <div class="section-title">
// // // <h2>Our Services</h2>
// // // <p>Professional Digital & Healthcare Services</p>
// // // </div>

// // // <div class="container">

// // // ${services.length ?

// // // services.map(service => `

// // // <a href="/service/${service._id}" class="service-card">

// // // <div class="image-box">
// // // <img
// // // src="${
// // // service.image
// // // ? (service.image.startsWith("http")
// // // ? service.image
// // // : "/" + service.image.replace(/\\/g,"/"))
// // // : "/images/no-image.png"
// // // }"
// // // alt="${service.title}">
// // // </div>

// // // <div class="content">
// // // <h2>${service.title}</h2>

// // // <p>
// // // ${service.description
// // // ? service.description.substring(0,80)
// // // : "Premium Service"}
// // // ...
// // // </p>

// // // <span class="view-btn">
// // // View Details →
// // // </span>

// // // </div>

// // // </a>

// // // `).join("")

// // // :

// // // "<h3>No Services Available</h3>"

// // // }

// // // </div>

// // // </section>
// // // `;
// // // }

// // // module.exports = ServiceSection;


// // // function ServiceSection(services = []) {
// // // return `

// // // <style>

// // // /* ===========================
// // //    SERVICES SECTION
// // // =========================== */

// // // .services-section{
// // //     padding:60px 20px;
// // //     background:linear-gradient(135deg,#f8fbff,#e0f2fe);
// // // }

// // // .services-title{
// // //     text-align:center;
// // //     margin-bottom:40px;
// // // }

// // // .services-title h2{
// // //     font-size:38px;
// // //     font-weight:800;
// // //     color:#1d4ed8;
// // //     margin-bottom:10px;
// // // }

// // // .services-title p{
// // //     font-size:16px;
// // //     color:#64748b;
// // // }

// // // /* ===========================
// // //    GRID
// // // =========================== */

// // // .services-grid{
// // //     max-width:1200px;
// // //     margin:auto;
// // //     display:grid;
// // //     grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
// // //     gap:25px;
// // // }

// // // /* ===========================
// // //    CARD
// // // =========================== */

// // // .service-card{

// // //     display:flex;
// // //     flex-direction:column;

// // //     background:#fff;

// // //     border-radius:18px;

// // //     overflow:hidden;

// // //     text-decoration:none;

// // //     color:#111827;

// // //     border:1px solid #e5e7eb;

// // //     box-shadow:
// // //     0 8px 20px rgba(0,0,0,.10);

// // //     transition:.35s ease;

// // // }

// // // .service-card:hover{

// // //     transform:translateY(-8px);

// // //     box-shadow:
// // //     0 20px 40px rgba(37,99,235,.18);

// // // }

// // // /* ===========================
// // //    IMAGE
// // // =========================== */

// // // .service-image{

// // //     width:100%;

// // //     height:220px;

// // //     background:#f8fafc;

// // //     display:flex;

// // //     justify-content:center;

// // //     align-items:center;

// // //     padding:12px;

// // //     border-bottom:1px solid #e5e7eb;

// // // }

// // // .service-image img{

// // //     width:100%;

// // //     height:100%;

// // //     object-fit:contain;

// // //     transition:.4s;

// // // }

// // // .service-card:hover .service-image img{

// // //     transform:scale(1.05);

// // // }

// // // /* ===========================
// // //    CONTENT
// // // =========================== */

// // // .service-content{

// // //     flex:1;

// // //     display:flex;

// // //     flex-direction:column;

// // //     padding:18px;

// // //     text-align:center;

// // // }

// // // .service-content h3{

// // //     font-size:20px;

// // //     color:#0f172a;

// // //     font-weight:700;

// // //     margin-bottom:10px;

// // // }

// // // .service-content p{

// // //     flex:1;

// // //     font-size:14px;

// // //     color:#64748b;

// // //     line-height:1.6;

// // //     margin-bottom:18px;

// // // }

// // // /* ===========================
// // //    BUTTON
// // // =========================== */

// // // .service-btn{

// // //     display:block;

// // //     width:100%;

// // //     text-align:center;

// // //     padding:12px;

// // //     border-radius:10px;

// // //     background:
// // //     linear-gradient(
// // //     135deg,
// // //     #2563eb,
// // //     #06b6d4
// // //     );

// // //     color:#fff;

// // //     font-size:14px;

// // //     font-weight:600;

// // //     transition:.3s;

// // //     box-shadow:
// // //     0 8px 20px rgba(37,99,235,.25);

// // // }

// // // .service-card:hover .service-btn{

// // //     transform:scale(1.03);

// // // }

// // // /* ===========================
// // //    MOBILE
// // // =========================== */

// // // @media(max-width:768px){

// // // .services-section{

// // //     padding:35px 12px;

// // // }

// // // .services-title h2{

// // //     font-size:28px;

// // // }

// // // .services-title p{

// // //     font-size:14px;

// // // }

// // // .services-grid{

// // //     grid-template-columns:repeat(2,1fr);

// // //     gap:15px;

// // // }

// // // .service-card{

// // //     border-radius:14px;

// // // }

// // // .service-image{

// // //     height:140px;

// // //     padding:8px;

// // // }

// // // .service-content{

// // //     padding:10px;

// // // }

// // // .service-content h3{

// // //     font-size:15px;

// // //     margin-bottom:6px;

// // // }

// // // .service-content p{

// // //     font-size:11px;

// // //     line-height:1.5;

// // //     margin-bottom:10px;

// // // }

// // // .service-btn{

// // //     padding:8px;

// // //     font-size:11px;

// // //     border-radius:8px;

// // // }

// // // }
// // // </style>

// // // <section class="services-section">

// // // <div class="services-title">
// // // <h2>Our Services</h2>
// // // <p>Professional Digital & Healthcare Services</p>
// // // </div>

// // // <div class="services-grid">

// // // ${
// // // services.length ?

// // // services.map(service=>`

// // // <a href="/service/${service._id}" class="service-card">

// // // <div class="service-image">

// // // <img
// // // src="${
// // // service.image
// // // ? (
// // // service.image.startsWith("http")
// // // ? service.image
// // // : "/" + service.image.replace(/\\/g,"/")
// // // )
// // // : "/images/no-image.png"
// // // }"
// // // alt="${service.title}"
// // // loading="lazy"
// // // onerror="this.src='/images/no-image.png'"
// // // >

// // // </div>

// // // <div class="service-content">

// // // <h3>${service.title}</h3>

// // // <p>
// // // ${service.description
// // // ? service.description.substring(0,70)
// // // : "Professional Service"}
// // // ...
// // // </p>

// // // <span class="service-btn">
// // // View Details →
// // // </span>

// // // </div>

// // // </a>

// // // `).join("")

// // // :

// // // "<h3 style='text-align:center'>No Services Available</h3>"

// // // }

// // // </div>

// // // </section>

// // // `;
// // // }

// // // module.exports = ServiceSection;

// // function ServiceSection(services = []) {
// // return `

// // <style>

// // /* =========================
// //    SERVICES SECTION
// // ========================= */

// // .services-section{
// //     padding:60px 20px;
// //     background:linear-gradient(135deg,#f8fbff,#e0f2fe);
// // }

// // .services-container{
// //     max-width:1200px;
// //     margin:auto;
// // }

// // .services-title{
// //     text-align:center;
// //     margin-bottom:40px;
// // }

// // .services-title h2{
// //     font-size:38px;
// //     font-weight:800;
// //     color:#1d4ed8;
// //     margin-bottom:10px;
// // }

// // .services-title p{
// //     font-size:16px;
// //     color:#64748b;
// // }

// // /* =========================
// //    GRID
// // ========================= */

// // .services-grid{
// //     display:grid;
// //     grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
// //     gap:25px;
// // }

// // /* =========================
// //    CARD
// // ========================= */

// // .service-card{
// //     display:flex;
// //     flex-direction:column;
// //     background:#fff;
// //     border-radius:18px;
// //     overflow:hidden;
// //     text-decoration:none;
// //     color:#111827;
// //     border:1px solid #e5e7eb;
// //     box-shadow:0 10px 25px rgba(0,0,0,.10);
// //     transition:.35s ease;
// // }

// // .service-card:hover{
// //     transform:translateY(-8px);
// //     box-shadow:0 18px 40px rgba(37,99,235,.20);
// // }

// // /* =========================
// //    IMAGE
// // ========================= */

// // .service-image{
// //     width:100%;
// //     height:220px;
// //     background:#f8fafc;
// //     display:flex;
// //     justify-content:center;
// //     align-items:center;
// //     padding:12px;
// // }

// // .service-image img{
// //     width:100%;
// //     height:100%;
// //     object-fit:contain;
// //     transition:.4s ease;
// // }

// // .service-card:hover .service-image img{
// //     transform:scale(1.05);
// // }

// // /* =========================
// //    CONTENT
// // ========================= */

// // .service-content{
// //     flex:1;
// //     display:flex;
// //     flex-direction:column;
// //     padding:18px;
// //     text-align:center;
// // }

// // .service-content h3{
// //     font-size:20px;
// //     font-weight:700;
// //     color:#0f172a;
// //     margin-bottom:10px;
// // }

// // .service-content p{
// //     flex:1;
// //     font-size:14px;
// //     color:#64748b;
// //     line-height:1.6;
// //     margin-bottom:18px;
// // }

// // /* =========================
// //    BUTTON
// // ========================= */

// // .service-btn{
// //     display:block;
// //     width:100%;
// //     padding:12px;
// //     text-align:center;
// //     background:linear-gradient(135deg,#2563eb,#06b6d4);
// //     color:#fff;
// //     font-weight:600;
// //     border-radius:10px;
// //     transition:.3s;
// // }

// // .service-card:hover .service-btn{
// //     transform:scale(1.03);
// // }

// // </style>

// // <section class="services-section">

// // <div class="services-container">

// // <div class="services-title">

// // <h2>Our Services</h2>

// // <p>Professional Digital & Healthcare Services</p>

// // </div>

// // <div class="services-grid">

// // let serviceCards = "";


// // services.forEach(service => {


// // serviceCards += `


// // <a href="/service/${service._id}" 
// // class="service-card">


// // <img 

// // src="${service.image || '/images/no-image.png'}"

// // class="service-image"

// // alt="${service.title}"

// // >



// // <div class="service-content">


// // <h3>

// // ${service.title}

// // </h3>



// // <p>

// // ${service.description.substring(0,120)}

// // ...

// // </p>



// // <span class="view-btn">

// // View Details

// // </span>



// // </div>


// // </a>


// // `;


// // });



// // return `

// // <style>

// // /* keep css above */

// // </style>


// // <section class="services-section">


// // <div class="services-title">

// // <h2>
// // Our Services
// // </h2>

// // <p>
// // Fast & Secure Digital Services
// // </p>

// // </div>



// // <div class="services-container">


// // ${serviceCards}


// // </div>


// // </section>



// // `;

// // }


// function ServiceSection(services = []) {

// return `

// <style>

// /* =========================
//    SERVICES SECTION
// ========================= */


// .services-section{

// width:100%;

// max-width:1400px;

// margin:50px auto;

// padding:25px 15px;

// }




// /* TITLE */


// .services-title{

// text-align:center;

// font-size:36px;

// font-weight:800;

// color:#0f3d91;

// margin-bottom:20px;

// }



// .services-title::after{

// content:"";

// width:80px;

// height:4px;

// background:#16a34a;

// display:block;

// margin:10px auto;

// border-radius:20px;

// }




// /* =========================
//    GRID
// ========================= */


// .services-grid{

// display:grid;

// grid-template-columns:

// repeat(auto-fill,minmax(280px,320px));


// gap:25px;


// justify-content:center;

// }




// /* =========================
//    CARD
// ========================= */


// .service-card{


// background:

// linear-gradient(

// 145deg,

// #ffffff,

// #f1f7ff

// );



// border-radius:20px;


// overflow:hidden;



// border:1px solid rgba(37,99,235,.15);



// box-shadow:

// 0 10px 25px rgba(0,0,0,.12);



// transition:.3s;



// cursor:pointer;



// text-decoration:none;



// color:#111827;



// min-height:420px;


// }



// .service-card:hover{


// transform:translateY(-8px);


// box-shadow:

// 0 20px 40px rgba(37,99,235,.25);


// }





// /* =========================
//    IMAGE
// ========================= */


// .service-img{


// width:100%;



// height:220px;



// overflow:hidden;



// background:#f8fafc;



// }



// .service-img img{


// width:100%;



// height:100%;



// object-fit:cover;



// transition:.4s;



// }



// .service-card:hover .service-img img{


// transform:scale(1.08);


// }





// /* =========================
//    BODY
// ========================= */


// .service-body{


// padding:15px;



// text-align:center;



// }



// .service-body h3{


// font-size:20px;



// font-weight:800;



// color:#0f172a;



// margin-bottom:8px;



// }



// .service-desc{


// color:#475569;



// font-size:13px;



// line-height:1.5;



// margin-bottom:12px;



// }




// /* =========================
//    BUTTON
// ========================= */


// .service-btn{


// display:block;



// background:#eff6ff;



// padding:10px;



// border-radius:10px;



// color:#2563eb;



// font-weight:700;



// font-size:13px;



// transition:.3s;



// }



// .service-card:hover .service-btn{


// background:#2563eb;



// color:white;



// }





// /* =========================
//    MOBILE
// ========================= */


// @media(max-width:768px){



// .services-section{


// padding:20px 8px;


// }



// .services-title{


// font-size:28px;


// }




// .services-grid{


// grid-template-columns:

// repeat(2,1fr);



// gap:10px;



// }



// .service-card{


// min-height:300px;



// border-radius:14px;



// }




// .service-img{


// height:120px;



// }




// .service-body{


// padding:10px;



// }



// .service-body h3{


// font-size:14px;



// }



// .service-desc{


// font-size:10px;



// line-height:1.3;



// }



// .service-btn{


// padding:7px;



// font-size:10px;



// }



// }




// /* SMALL MOBILE */

// @media(max-width:360px){



// .services-grid{


// gap:8px;



// }



// .service-img{


// height:100px;



// }



// .service-card{


// min-height:280px;



// }



// .service-body h3{


// font-size:12px;



// }



// .service-desc{


// font-size:9px;



// }



// .service-btn{


// font-size:9px;



// padding:6px;



// }


// }


// </style>



// <section class="services-section">


// <div class="services-container">



// <div class="services-title">

// <h2>
// Our Services
// </h2>


// <p>
// Professional Digital & Healthcare Services
// </p>


// </div>



// <div class="services-grid">


// ${
// services.length ?


// services.map(service => `


// <a href="/service/${service._id}" 
// class="service-card">



// <div class="service-image">


// <img

// src="${
// service.image

// ? 
// (
// service.image.startsWith("http")

// ?
// service.image

// :
// "/"+service.image.replace(/\\/g,"/")
// )

// :
// "/images/no-image.png"

// }"

// alt="${service.title}"

// loading="lazy"

// onerror="this.src='/images/no-image.png'"

// >


// </div>




// <div class="service-content">


// <h3>

// ${service.title}

// </h3>



// <p>

// ${
// service.description

// ?
// service.description.substring(0,120)

// :
// "Professional Service"

// }

// ...

// </p>



// <span class="service-btn">

// View Details →

// </span>


// </div>



// </a>



// `).join("")

// :

// `
// <h3 style="text-align:center;width:100%">
// No Services Available
// </h3>
// `


// }



// </div>



// </div>


// </section>


// `;

// }



// module.exports = ServiceSection;


function ServiceSection(services = []) {

return `

<style>

.services-grid{

display:grid;

grid-template-columns:
repeat(4,1fr);

gap:18px;

}



.service-card{

background:#fff;

border-radius:16px;

overflow:hidden;

text-decoration:none;

color:#111;

border:1px solid #e5e7eb;

box-shadow:
0 8px 20px rgba(0,0,0,.08);

transition:.3s;

}



.service-card:hover{

transform:translateY(-5px);

box-shadow:
0 15px 35px rgba(37,99,235,.18);

}



/* IMAGE */

.service-image{

height:140px;

overflow:hidden;

}



.service-image img{

width:100%;

height:100%;

object-fit:cover;

transition:.3s;

}


.service-card:hover img{

transform:scale(1.05);

}



/* CONTENT */

.service-content{

padding:12px;

text-align:center;

}


.service-content h3{

font-size:16px;

font-weight:800;

color:#0f172a;

margin-bottom:6px;

}



.service-content p{

font-size:12px;

color:#64748b;

line-height:1.4;

height:34px;

overflow:hidden;

}



/* BUTTON */

/* BUTTON FIX */

.service-btn{

    display:inline-flex !important;

    align-items:center;

    justify-content:center;

    margin-top:15px;

    padding:8px 18px;

    background:#2563eb;

    color:#ffffff !important;

    border-radius:50px;

    font-size:12px;

    font-weight:700;

    text-decoration:none;

    position:relative;

    z-index:5;

}



.service-card:hover .service-btn{

    background:#1d4ed8;

}



/* anchor color override */

.service-card{

    text-decoration:none;

}


.service-card span{

    color:white;

}



/* MOBILE */

@media(max-width:768px){

.services-grid{

grid-template-columns:repeat(2,1fr);

gap:10px;

}


.service-image{

height:100px;

}


.service-content{

padding:10px;

}


.service-content h3{

font-size:13px;

}


.service-content p{

font-size:10px;

height:28px;

}


.service-btn{

font-size:10px;

padding:5px 12px;

}

}

/* =========================
   SERVICES TITLE
========================= */

.services-title{

    text-align:center;

    margin-bottom:35px;

}


.services-title h2{

    font-size:38px;

    font-weight:900;

    color:#0f3d91;

    letter-spacing:.5px;

    margin:0;

    position:relative;

}



.services-title h2::after{

    content:"";

    display:block;

    width:70px;

    height:4px;

    margin:12px auto 0;

    border-radius:20px;

    background:

    linear-gradient(
        90deg,
        #2563eb,
        #06b6d4
    );

}



.services-title p{

    margin-top:12px;

    font-size:16px;

    font-weight:500;

    color:#64748b;

    letter-spacing:.3px;

}



/* MOBILE */

@media(max-width:768px){


.services-title{

    margin-bottom:25px;

}


.services-title h2{

    font-size:26px;

}


.services-title p{

    font-size:13px;

}


}

</style>



<section class="services-section">


<div class="services-title">

<h2>
Our Services
</h2>

<p>
Professional Digital & Healthcare Services
</p>

</div>



<div class="services-grid">


${
services.length ?

services.map(service=>`


<a href="/service/${service._id}" 
class="service-card">


<div class="service-image">


<img

src="${
service.image
?
(
service.image.startsWith("http")
?
service.image
:
"/"+service.image.replace(/\\/g,"/")
)
:
"/images/no-image.png"
}"

alt="${service.title}"

loading="lazy"

onerror="this.src='/images/no-image.png'"

>


</div>



<div class="service-content">


<h3>

${service.title}

</h3>


<p>

${
service.description
?
service.description.substring(0,100)
:
"Premium Service"
}

...

</p>



<span class="service-btn">

View Details →

</span>


</div>


</a>


`).join("")

:

`
<h3>No Services Available</h3>
`

}


</div>


</section>


`;

}


module.exports = ServiceSection;
