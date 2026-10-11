// function ServicesPage(services = []) {
// return `
// <!DOCTYPE html>
// <html lang="en">

// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">

// <title>Our Medical Services</title>

// <style>
// *{
//     margin:0;
//     padding:0;
//     box-sizing:border-box;
//     font-family:'Segoe UI',Arial,sans-serif;
// }


// body{

//     background:
//     linear-gradient(135deg,#f8fbff,#e0f2fe);

//     color:#111827;

// }



// /* ================= HEADER ================= */


// .header{

//     background:
//     linear-gradient(
//     135deg,
//     #1d4ed8,
//     #06b6d4
//     );

//     padding:55px 20px;

//     text-align:center;

//     color:white;

//     border-radius:0 0 40px 40px;

//     box-shadow:
//     0 15px 40px rgba(37,99,235,.35);

// }



// .logo{

//     width:95px;
//     height:95px;

//     object-fit:contain;

//     background:white;

//     padding:10px;

//     border-radius:50%;

//     margin-bottom:18px;

//     box-shadow:
//     0 10px 25px rgba(0,0,0,.25);

// }



// .header h1{

//     font-size:38px;

//     font-weight:800;

// }



// .header p{

//     margin-top:12px;

//     font-size:17px;

//     opacity:.95;

// }



// /* ================= CONTAINER ================= */


// .container{

//     max-width:1200px;

//     margin:auto;

//     padding:40px 25px;

//     display:grid;

//     grid-template-columns:
//     repeat(auto-fit,minmax(250px,1fr));

//     gap:25px;

// }



// /* ================= SERVICE CARD ================= */


// .service-card{

//     display:flex;

//     flex-direction:column;

//     background:#ffffff;

//     color:#111827;

//     max-width:260px;

//     width:100%;

//     margin:auto;

//     border-radius:18px;

//     overflow:hidden;

//     text-decoration:none;

//     border:1px solid #e5e7eb;


//     box-shadow:

//     0 10px 25px rgba(0,0,0,.10);


//     transition:.35s ease;

// }



// .service-card:hover{

//     transform:translateY(-8px);

//     box-shadow:

//     0 18px 35px rgba(37,99,235,.22);

// }



// /* ================= IMAGE ================= */


// .image-box{

//     width:100%;

//     height:170px;

//     overflow:hidden;

//     background:#eef4ff;

// }



// .image-box img{

//     width:100%;

//     height:100%;

//     object-fit:cover;

//     display:block;

//     transition:.4s;

// }



// .service-card:hover .image-box img{

//     transform:scale(1.08);

// }



// /* ================= CONTENT ================= */


// .content{

//     padding:16px;

//     text-align:center;

// }



// .content h2{

//     font-size:19px;

//     color:#0f172a;

//     font-weight:700;

//     margin-bottom:10px;

// }



// .content p{

//     font-size:13px;

//     color:#64748b;

//     line-height:1.6;

//     min-height:42px;

//     margin-bottom:16px;

// }



// /* ================= BUTTON ================= */


// .view-btn{

//     display:inline-block;

//     padding:10px 20px;

//     border-radius:30px;


//     background:

//     linear-gradient(
//     135deg,
//     #2563eb,
//     #06b6d4
//     );


//     color:white;

//     font-size:13px;

//     font-weight:600;

//     box-shadow:

//     0 8px 20px rgba(37,99,235,.25);


//     transition:.3s;

// }



// .service-card:hover .view-btn{

//     transform:scale(1.05);

// }



// /* ================= FOOTER ================= */


// .footer{

//     margin-top:60px;

//     padding:40px 20px;

//     text-align:center;


//     background:

//     linear-gradient(
//     135deg,
//     #020617,
//     #1e293b
//     );


//     color:white;

//     border-radius:35px 35px 0 0;

// }



// .footer h3{

//     font-size:28px;

//     font-weight:800;

// }



// .footer p{

//     margin-top:10px;

//     color:#cbd5e1;

// }



// /* ================= MOBILE ================= */


// @media(max-width:768px){

// .header{
//     padding:40px 15px;
// }

// .logo{
//     width:80px;
//     height:80px;
// }

// .header h1{
//     font-size:28px;
// }

// .header p{
//     font-size:14px;
// }


// /* 2 CARD IN MOBILE */
// .container{

//     padding:25px 10px;

//     display:grid;

//     grid-template-columns:repeat(2,1fr);

//     gap:15px;

// }


// .service-card{

//     max-width:100%;

//     border-radius:14px;

// }


// .image-box{

//     height:120px;

// }


// .content{

//     padding:10px;

// }


// .content h2{

//     font-size:15px;

// }


// .content p{

//     font-size:11px;

//     min-height:35px;

// }


// .view-btn{

//     padding:8px 12px;

//     font-size:11px;

// }

// }

// </style>

// </head>

// <body>

// <section class="header">

// <img 
// src="/images/GS LOGO.png"
// class="logo"
// alt="GS Logo"
// >

// <h1>
// ✨ Professional Service Center
// </h1>

// <p>
// Reliable • Fast • Secure Digital Solutions
// </p>

// </section>

// <section class="container">

// ${
// services.length
// ?

// services.map(service=>`

// <a href="/service/${service._id}" class="service-card">

// <div class="image-box">

// <img
//   src="${
//     service.image
//       ? (
//           service.image.startsWith("http")
//             ? service.image
//             : "/" + service.image.replace(/\\/g, "/")
//         )
//       : "/images/no-image.png"
//   }"
//   alt="${service.title}"
//   loading="lazy"
//   onerror="this.onerror=null;this.src='/images/no-image.png';"
// />

// </div>

// <div class="content">

// <h2>${service.title}</h2>

// <p>

// ${
// service.description
// ?
// service.description.substring(0,90)
// :
// "Premium Healthcare Service Available"
// }

// ...

// </p>

// <span class="view-btn">
// View Details →
// </span>

// </div>

// </a>

// `).join("")

// :
// `
// <div class="empty">

// No Services Available

// </div>
// `
// }
// </section>

// <footer class="footer">
//     <h3>GLOBAL SERVICE</h3>
//     <p>Safe & Secure Healthcare Solution</p>
// </footer>

// </body>
// </html>
// `;
// }

// module.exports = ServicesPage;


function ServicesPage(services = []) {

return `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Our Medical Services</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',Arial,sans-serif;
}

body{

    background:
    linear-gradient(135deg,#f8fbff,#e0f2fe);

    color:#111827;

}


/* ================= HEADER ================= */

.header{

    background:
    linear-gradient(
    135deg,
    #1d4ed8,
    #06b6d4
    );

    padding:55px 20px;

    text-align:center;

    color:white;

    border-radius:0 0 40px 40px;

    box-shadow:
    0 15px 40px rgba(37,99,235,.35);

}

.logo{

    width:95px;
    height:95px;

    object-fit:contain;

    background:white;

    padding:10px;

    border-radius:50%;

    margin-bottom:18px;

    box-shadow:
    0 10px 25px rgba(0,0,0,.25);

}

.header h1{

    font-size:38px;

    font-weight:800;

}

.header p{

    margin-top:12px;

    font-size:17px;

    opacity:.95;

}


/* ================= CONTAINER ================= */

.container{

    max-width:1200px;

    margin:auto;

    padding:40px 25px;

    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(250px,1fr));

    gap:25px;

}


/* ================= SERVICE CARD ================= */

.service-card{

    display:flex;

    flex-direction:column;

    background:#ffffff;

    color:#111827;

    max-width:260px;

    width:100%;

    margin:auto;

    border-radius:18px;

    overflow:hidden;

    border:1px solid #e5e7eb;

    box-shadow:
    0 10px 25px rgba(0,0,0,.10);

    transition:.35s ease;

}

.service-card:hover{

    transform:translateY(-8px);

    box-shadow:
    0 18px 35px rgba(37,99,235,.22);

}


/* ================= IMAGE ================= */

.image-box{

    width:100%;

    height:170px;

    overflow:hidden;

    background:#eef4ff;

}

.image-box a{

    display:block;

    width:100%;
    height:100%;

}

.image-box img{

    width:100%;

    height:100%;

    object-fit:cover;

    display:block;

    transition:.4s;

    cursor:pointer;

}

.service-card:hover .image-box img{

    transform:scale(1.08);

}


/* ================= CONTENT ================= */

.content{

    padding:16px;

    text-align:center;

}

.content h2{

    font-size:19px;

    color:#0f172a;

    font-weight:700;

    margin-bottom:10px;

}

.content p{

    font-size:13px;

    color:#64748b;

    line-height:1.6;

    min-height:42px;

    margin-bottom:16px;

}


/* ================= BUTTON ================= */

.view-btn{

    display:inline-block;

    padding:10px 20px;

    border-radius:30px;

    background:
    linear-gradient(
    135deg,
    #2563eb,
    #06b6d4
    );

    color:white;

    text-decoration:none;

    font-size:13px;

    font-weight:600;

    box-shadow:
    0 8px 20px rgba(37,99,235,.25);

    transition:.3s;

}

.view-btn:hover{

    transform:scale(1.05);

}


/* ================= EMPTY ================= */

.empty{

    grid-column:1/-1;

    text-align:center;

    padding:50px;

    background:white;

    border-radius:20px;

    font-size:18px;

}


/* ================= FOOTER ================= */

.footer{

    margin-top:60px;

    padding:40px 20px;

    text-align:center;

    background:
    linear-gradient(
    135deg,
    #020617,
    #1e293b
    );

    color:white;

    border-radius:35px 35px 0 0;

}

.footer h3{

    font-size:28px;

    font-weight:800;

}

.footer p{

    margin-top:10px;

    color:#cbd5e1;

}


/* ================= MOBILE ================= */

@media(max-width:768px){

.header{
    padding:40px 15px;
}

.logo{
    width:80px;
    height:80px;
}

.header h1{
    font-size:28px;
}

.header p{
    font-size:14px;
}

.container{

    padding:25px 10px;

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:15px;

}

.service-card{

    max-width:100%;

    border-radius:14px;

}

.image-box{

    height:120px;

}

.content{

    padding:10px;

}

.content h2{

    font-size:15px;

}

.content p{

    font-size:11px;

    min-height:35px;

}

.view-btn{

    padding:8px 12px;

    font-size:11px;

}

}

</style>

</head>

<body>

<section class="header">

<img
src="/images/GS LOGO.png"
class="logo"
alt="GS Logo"
>

<h1>
✨ Professional Service Center
</h1>

<p>
Reliable • Fast • Secure Digital Solutions
</p>

</section>


<section class="container">

${
services.length
?

services.map(service => {

    const detailUrl =
        "/service/" + service._id;


    const customLink =
        service.link
        ?
        String(service.link).trim()
        :
        "";


    const imageClickUrl =
        customLink || detailUrl;


    const imageUrl =
    service.image
    ?
    (
        String(service.image).startsWith("http")
        ?
        service.image
        :
        "/" +
        String(service.image)
        .replace(/\\/g, "/")
        .replace(/^\/+/, "")
    )
    :
    "/images/no-image.png";


    return `

    <div class="service-card">


        <div class="image-box">

            <a
                href="${imageClickUrl}"

                ${
                    customLink
                    ?
                    'target="_blank" rel="noopener noreferrer"'
                    :
                    ''
                }
            >

                <img
                    src="${imageUrl}"
                    alt="${service.title || "Service"}"
                    loading="lazy"

                    onerror="
                        this.onerror=null;
                        this.src='/images/no-image.png';
                    "
                >

            </a>

        </div>


        <div class="content">

            <h2>
                ${service.title || "Service"}
            </h2>


            <p>

                ${
                    service.description
                    ?
                    String(
                        service.description
                    ).substring(0,90)
                    :
                    "Premium Healthcare Service Available"
                }

                ...

            </p>


            <a
                href="${detailUrl}"
                class="view-btn"
            >
                View Details →
            </a>

        </div>


    </div>

    `;

}).join("")

:

`
<div class="empty">

No Services Available

</div>
`

}

</section>


<footer class="footer">

    <h3>
        GLOBAL SERVICE
    </h3>

    <p>
        Safe & Secure Healthcare Solution
    </p>

</footer>


</body>
</html>
`;

}

module.exports = ServicesPage;
