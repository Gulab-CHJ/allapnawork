// // // function ServicePage(services = []) {

// // // return `

// // // <!DOCTYPE html>
// // // <html lang="en">

// // // <head>

// // // <meta charset="UTF-8">

// // // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // // <title>Our Services</title>


// // // <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

// // // <link rel="stylesheet" 
// // // href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css">


// // // <style>

// // // *{
// // // margin:0;
// // // padding:0;
// // // box-sizing:border-box;
// // // font-family:'Poppins',sans-serif;
// // // }


// // // body{

// // // background:linear-gradient(
// // // 135deg,
// // // #020617,
// // // #1e293b,
// // // #2563eb
// // // );

// // // min-height:100vh;
// // // color:white;
// // // padding:40px 20px;

// // // }


// // // .container{

// // // max-width:1200px;
// // // margin:auto;

// // // }



// // // .header{

// // // text-align:center;
// // // margin-bottom:40px;

// // // }


// // // .header h1{

// // // font-size:45px;
// // // font-weight:700;

// // // }


// // // .header p{

// // // color:#ddd;
// // // margin-top:10px;

// // // }



// // // .services{

// // // display:grid;

// // // grid-template-columns:
// // // repeat(auto-fit,minmax(280px,1fr));

// // // gap:30px;

// // // }



// // // .card{

// // // background:white;

// // // color:#111;

// // // border-radius:20px;

// // // overflow:hidden;

// // // box-shadow:
// // // 0 10px 30px rgba(0,0,0,.3);

// // // transition:.3s;

// // // }



// // // .card:hover{

// // // transform:translateY(-8px);

// // // }



// // // .imageBox{

// // // height:220px;

// // // }



// // // .imageBox img{

// // // width:100%;
// // // height:100%;

// // // object-fit:cover;

// // // }



// // // .content{

// // // padding:25px;

// // // }



// // // .content h2{

// // // font-size:22px;

// // // margin-bottom:10px;

// // // }



// // // .content p{

// // // color:#555;

// // // line-height:1.6;

// // // }



// // // .btn{

// // // display:inline-block;

// // // margin-top:20px;

// // // background:#2563eb;

// // // color:white;

// // // padding:12px 25px;

// // // border-radius:30px;

// // // text-decoration:none;

// // // font-weight:600;

// // // }



// // // .btn:hover{

// // // background:#22c55e;

// // // }



// // // .empty{

// // // text-align:center;

// // // padding:60px;

// // // font-size:22px;

// // // }



// // // @media(max-width:600px){

// // // .header h1{

// // // font-size:32px;

// // // }

// // // }

// // // </style>


// // // </head>


// // // <body>


// // // <div class="container">


// // // <div class="header">

// // // <h1>
// // // <i class="fa-solid fa-layer-group"></i>
// // // Our Services
// // // </h1>


// // // <p>
// // // Professional solutions with quality and trust
// // // </p>


// // // </div>



// // // <div class="services">


// // // ${
// // // services.length ?

// // // services.map(service=>`

// // // <div class="card">


// // // <div class="imageBox">

// // // <img 
// // // src="${service.image || '/images/no-image.png'}"
// // // alt="${service.title}"
// // // >

// // // </div>


// // // <div class="content">


// // // <h2>
// // // ${service.title}
// // // </h2>


// // // <p>
// // // ${service.description || "Quality service available"}
// // // </p>



// // // <a href="#" class="btn">

// // // <i class="fa-solid fa-arrow-right"></i>

// // // Explore

// // // </a>


// // // </div>


// // // </div>


// // // `).join("")


// // // :


// // // `

// // // <div class="empty">

// // // <i class="fa-solid fa-box-open"
// // // style="font-size:70px">
// // // </i>

// // // <br>

// // // No Services Available

// // // </div>

// // // `

// // // }


// // // </div>


// // // </div>


// // // </body>

// // // </html>

// // // `;

// // // }


// // // module.exports = ServicePage;






// // const express = require("express");
// // const router = express.Router();

// // const Service = require("../models/Service");
// // const ServicePage = require("../pages/services");


// // // Services Page

// // router.get("/services", async (req,res)=>{

// // try{

// // const services = await Service
// // .find()
// // .limit(20)
// // .sort({
// //     createdAt:-1
// // })
// // .lean();


// // console.log("SERVICES DATA:", services);


// // res.send(
// //     ServicePage(services)
// // );


// // }
// // catch(err){

// // console.log(err);

// // res.status(500)
// // .send(err.message);

// // }

// // });



// // module.exports = router;


// const express = require("express");
// const router = express.Router();

// const Service = require("../models/Service");
// const ServicePage = require("../pages/services");

// router.get("/services", async (req, res) => {
//     try {

//         const services = await Service.find().sort({ createdAt: -1 });

//         res.send(ServicePage(services));

//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err.message);
//     }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const Service = require("../models/Service");

const ServicePage = require("../pages/services");
const ServiceDetails = require("../pages/serviceDetails");


// All Services

router.get("/services", async (req,res)=>{

try{

const services = await Service.find()
.sort({createdAt:-1});


res.send(
ServicePage(services)
);


}catch(err){

console.log(err);

res.status(500)
.send(err.message);

}

});




// Single Service

router.get("/service/:id", async(req,res)=>{

try{

const service = await Service.findById(req.params.id).lean();


if(!service){

return res.send("Service Not Found");

}


res.send(
ServiceDetails(service)
);


}catch(err){

console.log(err);

res.status(500)
.send(err.message);

}

});



module.exports = router;
