// // // function ServiceDetails(service) {

// // // return `

// // // <!DOCTYPE html>
// // // <html>
// // // <head>

// // // <title>${service.name}</title>

// // // <style>

// // // body{
// // // font-family:Arial;
// // // background:#f1f7ff;
// // // padding:30px;
// // // }

// // // .card{
// // // background:white;
// // // max-width:500px;
// // // margin:auto;
// // // padding:20px;
// // // border-radius:15px;
// // // box-shadow:0 5px 20px #ccc;
// // // }

// // // img{
// // // width:100%;
// // // border-radius:10px;
// // // }

// // // h1{
// // // color:#0066ff;
// // // }

// // // </style>

// // // </head>


// // // <body>


// // // <div class="card">

// // // <img src="${service.image}">


// // // <h1>${service.name}</h1>

// // // <p>
// // // ${service.description || ""}
// // // </p>


// // // </div>


// // // </body>
// // // </html>


// // // `;

// // // }


// // // module.exports = ServiceDetails;


// // function ServiceDetails(service) {

// // return `

// // <!DOCTYPE html>
// // <html>
// // <head>

// // <title>${service.name}</title>

// // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // <style>

// // *{
// // margin:0;
// // padding:0;
// // box-sizing:border-box;
// // font-family:Arial;
// // }


// // body{

// // background:#f1f7ff;
// // padding:20px;

// // }


// // .card{

// // background:white;
// // max-width:700px;
// // margin:auto;
// // padding:25px;
// // border-radius:20px;

// // box-shadow:
// // 0 10px 30px rgba(0,0,0,.15);

// // }



// // img{

// // width:100%;
// // height:250px;
// // object-fit:cover;
// // border-radius:15px;

// // }



// // h1{

// // color:#0066ff;
// // margin:20px 0;

// // }



// // .description{

// // color:#555;
// // line-height:1.7;

// // }



// // h2{

// // margin-top:25px;
// // color:#111;

// // }



// // ul{

// // margin-top:15px;
// // padding-left:20px;

// // }



// // li{

// // padding:8px 0;
// // font-size:16px;

// // }



// // .btn{

// // display:inline-block;

// // margin-top:25px;

// // background:#0066ff;

// // color:white;

// // padding:12px 25px;

// // border-radius:30px;

// // text-decoration:none;

// // }



// // </style>


// // </head>


// // <body>


// // <div class="card">


// // <img src="${service.image || '/images/no-image.png'}">



// // <h1>
// // ${service.name}
// // </h1>



// // <p class="description">

// // ${service.description || 
// // "Professional service available"}

// // </p>



// // <h2>
// // Available Services
// // </h2>



// // <ul>


// // <li>✅ Name Change / Correction</li>

// // <li>✅ Date of Birth (Age) Correction</li>

// // <li>✅ Address Change</li>

// // <li>✅ Mobile Number Update</li>

// // <li>✅ Email ID Update</li>

// // <li>✅ Photo Update</li>

// // <li>✅ Biometric Update</li>

// // <li>✅ New Aadhaar Enrollment</li>

// // <li>✅ Aadhaar Download & Print</li>

// // <li>✅ PVC Aadhaar Card Order</li>


// // </ul>



// // <a href="/contact" class="btn">
// // Apply Now
// // </a>



// // </div>


// // </body>
// // </html>

// // `;

// // }


// // module.exports = ServiceDetails;



// function ServiceDetails(service) {

// return `

// <!DOCTYPE html>
// <html>

// <head>

// <title>${service.title}</title>

// <meta name="viewport" content="width=device-width, initial-scale=1.0">


// <style>

// *{
//     margin:0;
//     padding:0;
//     box-sizing:border-box;
//     font-family:'Segoe UI',Arial,sans-serif;
// }

// body{
//     min-height:100vh;
//     padding:25px;
//     background:linear-gradient(135deg,#eef6ff,#dbeafe,#f8fbff);
// }

// /* ================= HEADER ================= */

// .header{
//     max-width:1000px;
//     margin:0 auto 35px;
//     padding:35px;
//     text-align:center;
//     color:#fff;
//     border-radius:25px;
//     background:linear-gradient(135deg,#2563eb,#0ea5e9);
//     box-shadow:0 20px 40px rgba(37,99,235,.30);
// }

// .header h1{
//     font-size:40px;
//     font-weight:800;
//     margin-bottom:10px;
// }

// .header p{
//     font-size:17px;
//     opacity:.95;
// }

// /* ================= CARD ================= */

// .card{
//     max-width:1000px;
//     margin:auto;
//     background:#fff;
//     border-radius:25px;
//     overflow:hidden;
//     box-shadow:0 20px 60px rgba(0,0,0,.12);
// }

// /* ================= IMAGE ================= */

// .card img{
//     display:block;
//     width:100%;
//     height:380px;
//     object-fit:contain;
//     background:#f8fafc;
//     padding:20px;
//     border-bottom:1px solid #e5e7eb;
//     transition:all .4s ease;
// }

// .card:hover img{
//     transform:scale(1.03);
// }

// /* ================= TITLE ================= */

// .card h1{
//     font-size:34px;
//     color:#0f172a;
//     font-weight:800;
//     padding:30px 30px 15px;
// }

// /* ================= DESCRIPTION ================= */

// .description{
//     margin:0 30px;
//     padding:22px;
//     background:#f8fbff;
//     border-left:6px solid #2563eb;
//     border-radius:18px;
//     color:#475569;
//     font-size:16px;
//     line-height:1.8;
// }

// /* ================= FEATURES ================= */

// .card h2{
//     margin:35px 30px 20px;
//     font-size:28px;
//     color:#0f172a;
// }

// ul{
//     list-style:none;
//     margin:0 30px 30px;
// }

// li{
//     background:#fff;
//     margin-bottom:15px;
//     padding:18px 20px;
//     border-radius:16px;
//     border:1px solid #dbeafe;
//     box-shadow:0 8px 20px rgba(0,0,0,.08);
//     transition:.3s;
//     font-size:16px;
//     color:#334155;
// }

// li:hover{
//     transform:translateX(8px);
//     background:#eff6ff;
//     border-color:#2563eb;
// }

// /* ================= BUTTON ================= */

// .btn{
//     display:block;
//     width:280px;
//     margin:35px auto 35px;
//     text-align:center;
//     text-decoration:none;
//     padding:16px;
//     border-radius:50px;
//     font-size:18px;
//     font-weight:700;
//     color:#fff;
//     background:linear-gradient(135deg,#16a34a,#22c55e);
//     box-shadow:0 15px 35px rgba(22,163,74,.35);
//     transition:.3s;
// }

// .btn:hover{
//     transform:translateY(-5px);
//     box-shadow:0 20px 45px rgba(22,163,74,.45);
// }

// /* ================= MOBILE ================= */

// @media(max-width:768px){

// body{
//     padding:15px;
// }

// .header{
//     padding:22px;
// }

// .header h1{
//     font-size:28px;
// }

// .header p{
//     font-size:15px;
// }

// .card{
//     border-radius:20px;
// }

// .card img{
//     height:240px;
//     padding:15px;
// }

// .card h1{
//     font-size:25px;
//     padding:20px;
// }

// .description{
//     margin:0 20px;
//     padding:16px;
//     font-size:15px;
// }

// .card h2{
//     margin:25px 20px 15px;
//     font-size:22px;
// }

// ul{
//     margin:0 20px 20px;
// }

// li{
//     padding:15px;
//     font-size:15px;
// }

// .btn{
//     width:90%;
//     font-size:16px;
// }

// }

// </style>


// </head>


// <body>

// <div class="header">

// <h1>
// 🌐 CSC Digital Services
// </h1>

// <p>
// Fast, Safe & Secure Government Digital Services
// </p>

// </div>


// <div class="card">

// <img src="${service.image || '/images/no-image.png'}">


// <h1>

// ${service.title}

// </h1>



// <p class="description">

// ${service.description || "Professional service available"}

// </p>




// <h2>
// Available Services
// </h2>



// <ul>


// ${
// (service.features || [])

// .map(feature=>`

// <li>
// ✅ ${feature}
// </li>

// `).join("")

// }



// </ul>



// <a href="/contact" class="btn">

// Apply Now

// </a>



// </div>


// </body>


// </html>


// `;

// }


// module.exports = ServiceDetails;


function ServiceDetails(service) {

return `

<!DOCTYPE html>
<html>

<head>

<title>${service.title}</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">


<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',Arial,sans-serif;
}

body{
    min-height:100vh;
    padding:25px;
    background:linear-gradient(135deg,#eef6ff,#dbeafe,#f8fbff);
}

/* ================= HEADER ================= */

.header{
    max-width:1000px;
    margin:0 auto 35px;
    padding:35px;
    text-align:center;
    color:#fff;
    border-radius:25px;
    background:linear-gradient(135deg,#2563eb,#0ea5e9);
    box-shadow:0 20px 40px rgba(37,99,235,.30);
}

.header h1{
    font-size:40px;
    font-weight:800;
    margin-bottom:10px;
}

.header p{
    font-size:17px;
    opacity:.95;
}

/* ================= CARD ================= */

.card{
    max-width:1000px;
    margin:auto;
    background:#fff;
    border-radius:25px;
    overflow:hidden;
    box-shadow:0 20px 60px rgba(0,0,0,.12);
}

/* ================= IMAGE ================= */

.card img{
    display:block;
    width:100%;
    height:380px;
    object-fit:contain;
    background:#f8fafc;
    padding:20px;
    border-bottom:1px solid #e5e7eb;
    transition:all .4s ease;
}

.card:hover img{
    transform:scale(1.03);
}

/* ================= TITLE ================= */

.card h1{
    font-size:34px;
    color:#0f172a;
    font-weight:800;
    padding:30px 30px 15px;
}

/* ================= DESCRIPTION ================= */

.description{
    margin:0 30px;
    padding:22px;
    background:#f8fbff;
    border-left:6px solid #2563eb;
    border-radius:18px;
    color:#475569;
    font-size:16px;
    line-height:1.8;
}

/* ================= CUSTOM LINK BUTTON ================= */

.link-btn{
    display:block;
    width:280px;
    margin:25px auto 10px;
    text-align:center;
    text-decoration:none;
    padding:15px;
    border-radius:50px;
    font-size:17px;
    font-weight:700;
    color:#fff;
    background:linear-gradient(135deg,#2563eb,#06b6d4);
    box-shadow:0 15px 35px rgba(37,99,235,.30);
    transition:.3s;
}

.link-btn:hover{
    transform:translateY(-4px);
    box-shadow:0 20px 45px rgba(37,99,235,.40);
}

/* ================= FEATURES ================= */

.card h2{
    margin:35px 30px 20px;
    font-size:28px;
    color:#0f172a;
}

ul{
    list-style:none;
    margin:0 30px 30px;
}

li{
    background:#fff;
    margin-bottom:15px;
    padding:18px 20px;
    border-radius:16px;
    border:1px solid #dbeafe;
    box-shadow:0 8px 20px rgba(0,0,0,.08);
    transition:.3s;
    font-size:16px;
    color:#334155;
}

li:hover{
    transform:translateX(8px);
    background:#eff6ff;
    border-color:#2563eb;
}

/* ================= APPLY BUTTON ================= */

.btn{
    display:block;
    width:280px;
    margin:35px auto 35px;
    text-align:center;
    text-decoration:none;
    padding:16px;
    border-radius:50px;
    font-size:18px;
    font-weight:700;
    color:#fff;
    background:linear-gradient(135deg,#16a34a,#22c55e);
    box-shadow:0 15px 35px rgba(22,163,74,.35);
    transition:.3s;
}

.btn:hover{
    transform:translateY(-5px);
    box-shadow:0 20px 45px rgba(22,163,74,.45);
}

/* ================= MOBILE ================= */

@media(max-width:768px){

body{
    padding:15px;
}

.header{
    padding:22px;
}

.header h1{
    font-size:28px;
}

.header p{
    font-size:15px;
}

.card{
    border-radius:20px;
}

.card img{
    height:240px;
    padding:15px;
}

.card h1{
    font-size:25px;
    padding:20px;
}

.description{
    margin:0 20px;
    padding:16px;
    font-size:15px;
}

.link-btn{
    width:90%;
    font-size:16px;
}

.card h2{
    margin:25px 20px 15px;
    font-size:22px;
}

ul{
    margin:0 20px 20px;
}

li{
    padding:15px;
    font-size:15px;
}

.btn{
    width:90%;
    font-size:16px;
}

}

</style>


</head>


<body>

<div class="header">

<h1>
🌐 CSC Digital Services
</h1>

<p>
Fast, Safe & Secure Government Digital Services
</p>

</div>


<div class="card">


<img
src="${service.image || '/images/no-image.png'}"
onerror="
this.onerror=null;
this.src='/images/no-image.png';
"
>


<h1>
${service.title || "Service"}
</h1>


<p class="description">

${service.description || "Professional service available"}

</p>


${
    service.link &&
    String(service.link).trim()
    ?
    `
    <a
        href="${String(service.link).trim()}"
        target="_blank"
        rel="noopener noreferrer"
        class="link-btn"
    >
        🔗 Click Here
    </a>
    `
    :
    ""
}


<h2>
Available Services
</h2>


<ul>

${
    (service.features || [])
    .map(feature => `

        <li>
        ✅ ${feature}
        </li>

    `)
    .join("")
}

</ul>


<a
href="/contact"
class="btn"
>
Apply Now
</a>


</div>


</body>

</html>

`;

}


module.exports = ServiceDetails;
