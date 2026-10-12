// // // require("dotenv").config();

// // // const express = require("express");
// // // const router = express.Router();

// // // const path = require("path");
// // // const fs = require("fs");
// // // const multer = require("multer");
// // // const crypto = require("crypto");
// // // const Razorpay = require("razorpay");

// // // const QuickService =
// // //     require("../models/QuickService");

// // // const QuickOrder =
// // //     require("../models/QuickOrder");

// // // const QuickShopSetting =
// // //     require("../models/QuickShopSetting");


// // // // ======================================================
// // // // RAZORPAY
// // // // ======================================================

// // // const razorpay =
// // // new Razorpay({

// // //     key_id:
// // //         process.env.RAZORPAY_KEY_ID,

// // //     key_secret:
// // //         process.env.RAZORPAY_KEY_SECRET

// // // });


// // // // ======================================================
// // // // PRIVATE DOCUMENT STORAGE
// // // // ======================================================

// // // const privateFolder =
// // // path.join(
// // //     process.cwd(),
// // //     "storage",
// // //     "quick-orders"
// // // );

// // // if(
// // //     !fs.existsSync(privateFolder)
// // // ){

// // //     fs.mkdirSync(
// // //         privateFolder,
// // //         {
// // //             recursive:true
// // //         }
// // //     );

// // // }


// // // const storage =
// // // multer.diskStorage({

// // //     destination:
// // //     function(req,file,cb){

// // //         cb(
// // //             null,
// // //             privateFolder
// // //         );

// // //     },

// // //     filename:
// // //     function(req,file,cb){

// // //         const ext =
// // //             path.extname(
// // //                 file.originalname
// // //             ).toLowerCase();

// // //         const filename =
// // //             "doc-" +
// // //             Date.now() +
// // //             "-" +
// // //             Math.round(
// // //                 Math.random() *
// // //                 1000000000
// // //             ) +
// // //             ext;

// // //         cb(
// // //             null,
// // //             filename
// // //         );

// // //     }

// // // });


// // // const upload =
// // // multer({

// // //     storage,

// // //     limits:{
// // //         fileSize:
// // //             8 * 1024 * 1024,

// // //         files:20
// // //     },

// // //     fileFilter:
// // //     function(req,file,cb){

// // //         const allowed = [

// // //             "image/jpeg",
// // //             "image/png",
// // //             "image/webp",
// // //             "application/pdf"

// // //         ];

// // //         if(
// // //             allowed.includes(
// // //                 file.mimetype
// // //             )
// // //         ){

// // //             return cb(
// // //                 null,
// // //                 true
// // //             );

// // //         }

// // //         cb(
// // //             new Error(
// // //                 "Only JPG, PNG, WEBP and PDF allowed"
// // //             )
// // //         );

// // //     }

// // // });


// // // // ======================================================
// // // // ADMIN CHECK
// // // // ======================================================

// // // function requireAdmin(
// // //     req,
// // //     res,
// // //     next
// // // ){

// // //     if(
// // //         !req.session ||
// // //         !req.session.adminId
// // //     ){

// // //         return res
// // //             .status(403)
// // //             .send(
// // //                 "Admin Login Required"
// // //             );

// // //     }

// // //     next();

// // // }


// // // // ======================================================
// // // // DISTANCE FUNCTION
// // // // ======================================================

// // // function calculateDistance(
// // //     lat1,
// // //     lon1,
// // //     lat2,
// // //     lon2
// // // ){

// // //     const R = 6371;

// // //     const toRad =
// // //         value =>
// // //         value * Math.PI / 180;

// // //     const dLat =
// // //         toRad(
// // //             lat2 - lat1
// // //         );

// // //     const dLon =
// // //         toRad(
// // //             lon2 - lon1
// // //         );

// // //     const a =

// // //         Math.sin(
// // //             dLat / 2
// // //         ) ** 2

// // //         +

// // //         Math.cos(
// // //             toRad(lat1)
// // //         )

// // //         *

// // //         Math.cos(
// // //             toRad(lat2)
// // //         )

// // //         *

// // //         Math.sin(
// // //             dLon / 2
// // //         ) ** 2;


// // //     const c =
// // //         2 *
// // //         Math.atan2(
// // //             Math.sqrt(a),
// // //             Math.sqrt(1-a)
// // //         );


// // //     return R * c;

// // // }


// // // // ======================================================
// // // // GENERATE ORDER ID
// // // // ======================================================

// // // async function createOrderId(){

// // //     const lastOrder =
// // //         await QuickOrder
// // //             .findOne()
// // //             .sort({
// // //                 createdAt:-1
// // //             });

// // //     let number = 1001;

// // //     if(
// // //         lastOrder &&
// // //         lastOrder.orderId
// // //     ){

// // //         const old =
// // //             parseInt(
// // //                 String(
// // //                     lastOrder.orderId
// // //                 )
// // //                 .replace(
// // //                     "GH",
// // //                     ""
// // //                 )
// // //             );

// // //         if(!isNaN(old)){

// // //             number =
// // //                 old + 1;

// // //         }

// // //     }

// // //     return "GH" + number;

// // // }


// // // // ======================================================
// // // // CUSTOMER QUICK SERVICE PAGE
// // // // ======================================================

// // // router.get(
// // //     "/quick-service",
// // //     async(req,res)=>{

// // //         try{

// // //             const services =
// // //                 await QuickService
// // //                     .find({
// // //                         active:true
// // //                     })
// // //                     .sort({
// // //                         createdAt:-1
// // //                     })
// // //                     .lean();


// // //             let setting =
// // //                 await QuickShopSetting
// // //                     .findOne()
// // //                     .lean();


// // //             if(!setting){

// // //                 setting = {
// // //                     isOpen:true,
// // //                     deliveryRadiusKm:2,
// // //                     deliveryCharge:20
// // //                 };

// // //             }


// // //             return res.send(`

// // // <!DOCTYPE html>

// // // <html>

// // // <head>

// // // <meta
// // // name="viewport"
// // // content="width=device-width,initial-scale=1">

// // // <title>
// // // Quick Document Service
// // // </title>

// // // <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

// // // <style>

// // // *{
// // // box-sizing:border-box;
// // // font-family:Arial,sans-serif;
// // // }

// // // body{
// // // margin:0;
// // // background:#f5f7fb;
// // // color:#111827;
// // // }

// // // .header{
// // // background:
// // // linear-gradient(
// // // 135deg,
// // // #0d604b,
// // // #18a47b
// // // );
// // // color:white;
// // // padding:25px 15px;
// // // text-align:center;
// // // }

// // // .container{
// // // max-width:650px;
// // // margin:20px auto;
// // // padding:15px;
// // // }

// // // .card{
// // // background:white;
// // // padding:20px;
// // // border-radius:20px;
// // // box-shadow:
// // // 0 10px 30px
// // // rgba(0,0,0,.10);
// // // }

// // // .shop-open{
// // // padding:12px;
// // // background:#dcfce7;
// // // color:#166534;
// // // border-radius:10px;
// // // text-align:center;
// // // font-weight:bold;
// // // margin-bottom:15px;
// // // }

// // // .shop-close{
// // // padding:15px;
// // // background:#fee2e2;
// // // color:#991b1b;
// // // border-radius:10px;
// // // text-align:center;
// // // font-weight:bold;
// // // margin-bottom:15px;
// // // }

// // // label{
// // // display:block;
// // // margin-top:16px;
// // // margin-bottom:6px;
// // // font-weight:bold;
// // // }

// // // input,
// // // select,
// // // textarea{
// // // width:100%;
// // // padding:13px;
// // // border:1px solid #ddd;
// // // border-radius:10px;
// // // font-size:15px;
// // // }

// // // textarea{
// // // min-height:90px;
// // // }

// // // .document-box{
// // // margin-top:15px;
// // // padding:15px;
// // // background:#f8fafc;
// // // border:1px solid #dbeafe;
// // // border-radius:14px;
// // // }

// // // .camera{
// // // display:block;
// // // margin-top:8px;
// // // }

// // // .total-box{
// // // margin-top:20px;
// // // padding:18px;
// // // background:#eff6ff;
// // // border-radius:15px;
// // // }

// // // .pay-btn{
// // // width:100%;
// // // margin-top:20px;
// // // padding:16px;
// // // border:0;
// // // border-radius:12px;
// // // background:#16a34a;
// // // color:#fff;
// // // font-size:17px;
// // // font-weight:bold;
// // // cursor:pointer;
// // // }

// // // .pay-btn:disabled{
// // // background:#94a3b8;
// // // cursor:not-allowed;
// // // }

// // // .hidden{
// // // display:none;
// // // }

// // // .location-box{
// // // margin-top:15px;
// // // padding:12px;
// // // border-radius:10px;
// // // background:#f1f5f9;
// // // }

// // // </style>

// // // </head>


// // // <body>

// // // <div class="header">

// // // <h2>
// // // ⚡ GLOBAL QUICK SERVICES
// // // </h2>

// // // <p>
// // // Document Service at Your Doorstep
// // // </p>

// // // </div>


// // // <div class="container">

// // // <div class="card">


// // // ${
// // // setting.isOpen

// // // ?

// // // `
// // // <div class="shop-open">
// // // 🟢 Shop Open
// // // </div>
// // // `

// // // :

// // // `
// // // <div class="shop-close">
// // // 🔴 Shop is currently closed
// // // </div>
// // // `

// // // }


// // // <form
// // // id="orderForm"
// // // enctype="multipart/form-data"
// // // >


// // // <label>
// // // Select Service
// // // </label>

// // // <select
// // // name="serviceId"
// // // id="service"
// // // required
// // // >

// // // <option value="">
// // // Select Service
// // // </option>

// // // ${
// // // services.map(service=>`

// // // <option
// // // value="${service._id}"
// // // data-type="${service.type}"
// // // data-price="${service.price}"
// // // data-requirements='${JSON.stringify(service.requirements || [])}'
// // // >
// // // ${service.name} - ₹${service.price}
// // // </option>

// // // `).join("")
// // // }

// // // </select>


// // // <div
// // // id="documentsArea"
// // // ></div>


// // // <div
// // // id="photoCopyOptions"
// // // class="hidden"
// // // >

// // // <label>
// // // Print Type
// // // </label>

// // // <select name="printType">

// // // <option>
// // // Black & White
// // // </option>

// // // <option>
// // // Color
// // // </option>

// // // </select>


// // // <label>
// // // Number of Copies
// // // </label>

// // // <input
// // // type="number"
// // // name="copies"
// // // min="1"
// // // value="1"
// // // >

// // // </div>


// // // <label>
// // // Customer Name
// // // </label>

// // // <input
// // // type="text"
// // // name="customerName"
// // // required
// // // >


// // // <label>
// // // Phone Number
// // // </label>

// // // <input
// // // type="tel"
// // // name="phone"
// // // maxlength="10"
// // // required
// // // >


// // // <label>
// // // Full Delivery Address
// // // </label>

// // // <textarea
// // // name="address"
// // // required
// // // ></textarea>


// // // <input
// // // type="hidden"
// // // name="latitude"
// // // id="latitude"
// // // >

// // // <input
// // // type="hidden"
// // // name="longitude"
// // // id="longitude"
// // // >


// // // <div
// // // class="location-box"
// // // id="locationStatus"
// // // >

// // // 📍 Checking delivery location...

// // // </div>


// // // <div class="total-box">

// // // Service:
// // // ₹<span id="servicePrice">0</span>

// // // <br><br>

// // // Delivery:
// // // ₹${Number(setting.deliveryCharge || 0)}

// // // <br><br>

// // // <strong>
// // // Total:
// // // ₹<span id="totalPrice">0</span>
// // // </strong>

// // // </div>


// // // <button
// // // type="submit"
// // // class="pay-btn"
// // // id="payButton"
// // // ${setting.isOpen ? "" : "disabled"}
// // // >

// // // 💳 Continue to Payment

// // // </button>


// // // </form>

// // // </div>

// // // </div>


// // // <script>

// // // const shopOpen =
// // // ${setting.isOpen ? "true" : "false"};

// // // const deliveryCharge =
// // // ${Number(setting.deliveryCharge || 0)};


// // // const service =
// // // document.getElementById(
// // //     "service"
// // // );

// // // const documentsArea =
// // // document.getElementById(
// // //     "documentsArea"
// // // );

// // // const photoCopyOptions =
// // // document.getElementById(
// // //     "photoCopyOptions"
// // // );

// // // const servicePrice =
// // // document.getElementById(
// // //     "servicePrice"
// // // );

// // // const totalPrice =
// // // document.getElementById(
// // //     "totalPrice"
// // // );


// // // // ======================================================
// // // // SERVICE CHANGE
// // // // ======================================================

// // // service.addEventListener(
// // // "change",
// // // function(){

// // //     documentsArea.innerHTML = "";

// // //     photoCopyOptions.classList.add(
// // //         "hidden"
// // //     );


// // //     const option =
// // //         this.options[
// // //             this.selectedIndex
// // //         ];


// // //     if(!option.value){

// // //         return;

// // //     }


// // //     const type =
// // //         option.dataset.type;

// // //     const price =
// // //         Number(
// // //             option.dataset.price ||
// // //             0
// // //         );


// // //     servicePrice.textContent =
// // //         price;

// // //     totalPrice.textContent =
// // //         price +
// // //         deliveryCharge;


// // //     if(
// // //         type ===
// // //         "photocopy"
// // //     ){

// // //         photoCopyOptions
// // //             .classList
// // //             .remove(
// // //                 "hidden"
// // //             );


// // //         documentsArea.innerHTML = \`

// // // <div class="document-box">

// // // <label>
// // // 📄 Scan / Upload Pages
// // // </label>

// // // <input
// // // type="file"
// // // name="photocopyPages"
// // // accept="image/*"
// // // capture="environment"
// // // multiple
// // // required
// // // >

// // // <small>
// // // Multiple pages select kar sakte hain.
// // // </small>

// // // </div>

// // //         \`;

// // //         return;

// // //     }


// // //     let requirements = [];

// // //     try{

// // //         requirements =
// // //             JSON.parse(
// // //                 option.dataset
// // //                     .requirements ||
// // //                 "[]"
// // //             );

// // //     }
// // //     catch(error){

// // //         requirements = [];

// // //     }


// // //     requirements.forEach(
// // //     function(item,index){

// // //         const box =
// // //             document.createElement(
// // //                 "div"
// // //             );

// // //         box.className =
// // //             "document-box";


// // //         box.innerHTML = \`

// // // <label>
// // // 📷 ${item.name}
// // // ${item.required ? "*" : ""}
// // // </label>

// // // <input
// // // type="file"
// // // name="doc_${index}"
// // // accept="image/*"
// // // capture="environment"
// // // ${item.required ? "required" : ""}
// // // >

// // // <input
// // // type="hidden"
// // // name="docName_${index}"
// // // value="${item.name}"
// // // >

// // //         \`;


// // //         documentsArea
// // //             .appendChild(
// // //                 box
// // //             );

// // //     });

// // // });


// // // // ======================================================
// // // // LOCATION
// // // // ======================================================

// // // const locationStatus =
// // // document.getElementById(
// // //     "locationStatus"
// // // );

// // // if(
// // // navigator.geolocation
// // // ){

// // // navigator.geolocation
// // // .getCurrentPosition(

// // // function(position){

// // //     document
// // //     .getElementById(
// // //         "latitude"
// // //     )
// // //     .value =
// // //         position.coords
// // //             .latitude;


// // //     document
// // //     .getElementById(
// // //         "longitude"
// // //     )
// // //     .value =
// // //         position.coords
// // //             .longitude;


// // //     locationStatus.innerHTML =
// // //         "✅ Location captured";

// // // },

// // // function(){

// // //     locationStatus.innerHTML =
// // //         "❌ Location permission required";

// // // }

// // // );

// // // }


// // // // ======================================================
// // // // SUBMIT ORDER
// // // // ======================================================

// // // document
// // // .getElementById(
// // //     "orderForm"
// // // )
// // // .addEventListener(
// // // "submit",
// // // async function(event){

// // //     event.preventDefault();


// // //     if(!shopOpen){

// // //         alert(
// // //             "Shop is currently closed"
// // //         );

// // //         return;

// // //     }


// // //     const lat =
// // //         document
// // //         .getElementById(
// // //             "latitude"
// // //         )
// // //         .value;


// // //     const lng =
// // //         document
// // //         .getElementById(
// // //             "longitude"
// // //         )
// // //         .value;


// // //     if(!lat || !lng){

// // //         alert(
// // //             "Please allow location permission"
// // //         );

// // //         return;

// // //     }


// // //     const button =
// // //         document
// // //         .getElementById(
// // //             "payButton"
// // //         );

// // //     button.disabled = true;

// // //     button.innerText =
// // //         "Please wait...";


// // //     try{

// // //         const formData =
// // //             new FormData(
// // //                 this
// // //             );


// // //         const response =
// // //             await fetch(
// // //                 "/quick-service/create-order",
// // //                 {
// // //                     method:"POST",
// // //                     body:formData
// // //                 }
// // //             );


// // //         const data =
// // //             await response.json();


// // //         if(!data.success){

// // //             alert(
// // //                 data.message ||
// // //                 "Order failed"
// // //             );

// // //             button.disabled=false;

// // //             button.innerText=
// // //                 "💳 Continue to Payment";

// // //             return;

// // //         }


// // //         const options = {

// // //             key:
// // //                 data.key,

// // //             amount:
// // //                 data.amount,

// // //             currency:
// // //                 "INR",

// // //             name:
// // //                 "GLOBAL QUICK SERVICES",

// // //             description:
// // //                 data.serviceName,

// // //             order_id:
// // //                 data.razorpayOrderId,

// // //             handler:
// // //             async function(response){

// // //                 const verify =
// // //                     await fetch(
// // //                         "/quick-service/verify-payment",
// // //                         {

// // //                             method:"POST",

// // //                             headers:{
// // //                                 "Content-Type":
// // //                                 "application/json"
// // //                             },

// // //                             body:
// // //                             JSON.stringify({

// // //                                 orderId:
// // //                                     data.orderId,

// // //                                 razorpay_order_id:
// // //                                     response
// // //                                     .razorpay_order_id,

// // //                                 razorpay_payment_id:
// // //                                     response
// // //                                     .razorpay_payment_id,

// // //                                 razorpay_signature:
// // //                                     response
// // //                                     .razorpay_signature

// // //                             })

// // //                         }
// // //                     );


// // //                 const result =
// // //                     await verify.json();


// // //                 if(result.success){

// // //                     window.location.href =
// // //                         "/quick-service/success/" +
// // //                         data.orderId;

// // //                 }
// // //                 else{

// // //                     alert(
// // //                         "Payment verification failed"
// // //                     );

// // //                 }

// // //             }

// // //         };


// // //         const rzp =
// // //             new Razorpay(
// // //                 options
// // //             );

// // //         rzp.open();


// // //         button.disabled=false;

// // //         button.innerText=
// // //             "💳 Continue to Payment";


// // //     }
// // //     catch(error){

// // //         console.error(error);

// // //         alert(
// // //             "Something went wrong"
// // //         );

// // //         button.disabled=false;

// // //         button.innerText=
// // //             "💳 Continue to Payment";

// // //     }

// // // }
// // // );

// // // </script>

// // // </body>

// // // </html>

// // //             `);

// // //         }
// // //         catch(err){

// // //             console.error(err);

// // //             res.status(500)
// // //             .send(err.message);

// // //         }

// // //     }
// // // );


// // // // ======================================================
// // // // CREATE ORDER
// // // // ======================================================

// // // router.post(
// // //     "/quick-service/create-order",

// // //     upload.any(),

// // //     async(req,res)=>{

// // //         try{

// // //             const setting =
// // //                 await QuickShopSetting
// // //                     .findOne();


// // //             if(
// // //                 setting &&
// // //                 setting.isOpen === false
// // //             ){

// // //                 return res.json({

// // //                     success:false,

// // //                     message:
// // //                     "Shop is currently closed"

// // //                 });

// // //             }


// // //             const service =
// // //                 await QuickService
// // //                     .findById(
// // //                         req.body.serviceId
// // //                     );


// // //             if(
// // //                 !service ||
// // //                 service.active === false
// // //             ){

// // //                 return res.json({

// // //                     success:false,

// // //                     message:
// // //                     "Service not available"

// // //                 });

// // //             }


// // //             const latitude =
// // //                 Number(
// // //                     req.body.latitude
// // //                 );

// // //             const longitude =
// // //                 Number(
// // //                     req.body.longitude
// // //                 );


// // //             if(
// // //                 !latitude ||
// // //                 !longitude
// // //             ){

// // //                 return res.json({

// // //                     success:false,

// // //                     message:
// // //                     "Location required"

// // //                 });

// // //             }


// // //             const shopLat =
// // //                 Number(
// // //                     setting?.shopLatitude
// // //                 );

// // //             const shopLng =
// // //                 Number(
// // //                     setting?.shopLongitude
// // //                 );


// // //             if(
// // //                 !shopLat ||
// // //                 !shopLng
// // //             ){

// // //                 return res.json({

// // //                     success:false,

// // //                     message:
// // //                     "Shop location not configured"

// // //                 });

// // //             }


// // //             const distance =
// // //                 calculateDistance(

// // //                     shopLat,
// // //                     shopLng,

// // //                     latitude,
// // //                     longitude

// // //                 );


// // //             const radius =
// // //                 Number(
// // //                     setting
// // //                     ?.deliveryRadiusKm ||
// // //                     2
// // //                 );


// // //             if(
// // //                 distance >
// // //                 radius
// // //             ){

// // //                 return res.json({

// // //                     success:false,

// // //                     message:
// // //                     "Delivery only available within " +
// // //                     radius +
// // //                     " KM"

// // //                 });

// // //             }


// // // // ======================================================
// // // // DOCUMENTS
// // // // ======================================================

// // //             const documents = [];


// // //             for(
// // //                 const file
// // //                 of
// // //                 req.files || []
// // //             ){

// // //                 let name =
// // //                     "Document";


// // //                 if(
// // //                     file.fieldname ===
// // //                     "photocopyPages"
// // //                 ){

// // //                     name =
// // //                         "Photo Copy Page";

// // //                 }
// // //                 else if(
// // //                     file.fieldname
// // //                     .startsWith(
// // //                         "doc_"
// // //                     )
// // //                 ){

// // //                     const index =
// // //                         file.fieldname
// // //                         .replace(
// // //                             "doc_",
// // //                             ""
// // //                         );


// // //                     name =
// // //                         req.body[
// // //                             "docName_" +
// // //                             index
// // //                         ]
// // //                         ||
// // //                         "Document";

// // //                 }


// // //                 documents.push({

// // //                     documentName:
// // //                         name,

// // //                     fileName:
// // //                         file.filename,

// // //                     originalName:
// // //                         file.originalname

// // //                 });

// // //             }


// // // // ======================================================
// // // // AMOUNT
// // // // ======================================================

// // //             const copies =
// // //                 Math.max(
// // //                     1,
// // //                     Number(
// // //                         req.body.copies ||
// // //                         1
// // //                     )
// // //                 );


// // //             let serviceAmount =
// // //                 Number(
// // //                     service.price ||
// // //                     0
// // //                 );


// // //             if(
// // //                 service.type ===
// // //                 "photocopy"
// // //             ){

// // //                 const pageCount =
// // //                     documents.length ||
// // //                     1;

// // //                 serviceAmount =
// // //                     Number(
// // //                         service.price
// // //                     )
// // //                     *
// // //                     pageCount
// // //                     *
// // //                     copies;

// // //             }


// // //             const deliveryCharge =
// // //                 Number(
// // //                     setting
// // //                     ?.deliveryCharge ||
// // //                     0
// // //                 );


// // //             const totalAmount =
// // //                 serviceAmount +
// // //                 deliveryCharge;


// // //             const orderId =
// // //                 await createOrderId();


// // //             const paymentOrder =
// // //                 await razorpay
// // //                     .orders
// // //                     .create({

// // //                         amount:
// // //                             Math.round(
// // //                                 totalAmount *
// // //                                 100
// // //                             ),

// // //                         currency:
// // //                             "INR",

// // //                         receipt:
// // //                             orderId

// // //                     });


// // //             const order =
// // //                 new QuickOrder({

// // //                     orderId,

// // //                     customerName:
// // //                         req.body
// // //                         .customerName,

// // //                     phone:
// // //                         req.body.phone,

// // //                     address:
// // //                         req.body.address,

// // //                     latitude,

// // //                     longitude,

// // //                     distanceKm:
// // //                         Number(
// // //                             distance
// // //                             .toFixed(2)
// // //                         ),

// // //                     serviceId:
// // //                         service._id,

// // //                     serviceName:
// // //                         service.name,

// // //                     serviceType:
// // //                         service.type,

// // //                     documents,

// // //                     copies,

// // //                     printType:
// // //                         req.body
// // //                         .printType ||
// // //                         "Black & White",

// // //                     serviceAmount,

// // //                     deliveryCharge,

// // //                     totalAmount,

// // //                     razorpayOrderId:
// // //                         paymentOrder.id,

// // //                     paymentStatus:
// // //                         "PENDING",

// // //                     status:
// // //                         "NEW"

// // //                 });


// // //             await order.save();


// // //             return res.json({

// // //                 success:true,

// // //                 key:
// // //                     process.env
// // //                     .RAZORPAY_KEY_ID,

// // //                 orderId:
// // //                     order._id,

// // //                 orderNumber:
// // //                     order.orderId,

// // //                 serviceName:
// // //                     service.name,

// // //                 razorpayOrderId:
// // //                     paymentOrder.id,

// // //                 amount:
// // //                     paymentOrder.amount

// // //             });

// // //         }
// // //         catch(err){

// // //             console.error(
// // //                 "CREATE QUICK ORDER:",
// // //                 err
// // //             );

// // //             return res
// // //                 .status(500)
// // //                 .json({

// // //                     success:false,

// // //                     message:
// // //                         err.message

// // //                 });

// // //         }

// // //     }
// // // );


// // // // ======================================================
// // // // VERIFY PAYMENT
// // // // ======================================================

// // // router.post(
// // //     "/quick-service/verify-payment",
// // //     async(req,res)=>{

// // //         try{

// // //             const {

// // //                 orderId,

// // //                 razorpay_order_id,

// // //                 razorpay_payment_id,

// // //                 razorpay_signature

// // //             } = req.body;


// // //             const body =
// // //                 razorpay_order_id +
// // //                 "|" +
// // //                 razorpay_payment_id;


// // //             const expected =
// // //                 crypto
// // //                 .createHmac(
// // //                     "sha256",
// // //                     process.env
// // //                     .RAZORPAY_KEY_SECRET
// // //                 )
// // //                 .update(body)
// // //                 .digest("hex");


// // //             if(
// // //                 expected !==
// // //                 razorpay_signature
// // //             ){

// // //                 return res.json({

// // //                     success:false

// // //                 });

// // //             }


// // //             const order =
// // //                 await QuickOrder
// // //                     .findByIdAndUpdate(

// // //                         orderId,

// // //                         {

// // //                             paymentStatus:
// // //                                 "PAID",

// // //                             razorpayPaymentId:
// // //                                 razorpay_payment_id,

// // //                             status:
// // //                                 "NEW"

// // //                         },

// // //                         {
// // //                             new:true
// // //                         }

// // //                     );


// // //             return res.json({

// // //                 success:true,

// // //                 orderNumber:
// // //                     order.orderId

// // //             });

// // //         }
// // //         catch(err){

// // //             console.error(err);

// // //             return res
// // //                 .status(500)
// // //                 .json({

// // //                     success:false

// // //                 });

// // //         }

// // //     }
// // // );


// // // // ======================================================
// // // // SUCCESS PAGE
// // // // ======================================================

// // // router.get(
// // //     "/quick-service/success/:id",
// // //     async(req,res)=>{

// // //         const order =
// // //             await QuickOrder
// // //                 .findById(
// // //                     req.params.id
// // //                 )
// // //                 .lean();


// // //         if(!order){

// // //             return res.send(
// // //                 "Order Not Found"
// // //             );

// // //         }


// // //         res.send(`

// // // <!DOCTYPE html>

// // // <html>

// // // <head>

// // // <meta name="viewport"
// // // content="width=device-width,initial-scale=1">

// // // <title>
// // // Order Successful
// // // </title>

// // // </head>

// // // <body style="
// // // font-family:Arial;
// // // background:#f0fdf4;
// // // text-align:center;
// // // padding:40px;
// // // ">

// // // <h1>
// // // ✅ Payment Successful
// // // </h1>

// // // <h2>
// // // Order:
// // // ${order.orderId}
// // // </h2>

// // // <p>
// // // Your order has been received.
// // // </p>

// // // <a href="/">
// // // Back Home
// // // </a>

// // // </body>

// // // </html>

// // //         `);

// // //     }
// // // );


// // // // ======================================================
// // // // ADMIN DASHBOARD
// // // // ======================================================

// // // router.get(
// // //     "/admin/quick-service",

// // //     requireAdmin,

// // //     async(req,res)=>{

// // //         try{

// // //             const orders =
// // //                 await QuickOrder
// // //                     .find({
// // //                         paymentStatus:"PAID"
// // //                     })
// // //                     .sort({
// // //                         createdAt:-1
// // //                     })
// // //                     .lean();


// // //             let setting =
// // //                 await QuickShopSetting
// // //                     .findOne()
// // //                     .lean();


// // //             if(!setting){

// // //                 setting = {
// // //                     isOpen:true,
// // //                     deliveryRadiusKm:2,
// // //                     deliveryCharge:20
// // //                 };

// // //             }


// // //             res.send(`

// // // <!DOCTYPE html>

// // // <html>

// // // <head>

// // // <meta name="viewport"
// // // content="width=device-width,initial-scale=1">

// // // <title>
// // // Quick Service Admin
// // // </title>

// // // <style>

// // // *{
// // // box-sizing:border-box;
// // // font-family:Arial;
// // // }

// // // body{
// // // margin:0;
// // // background:#f1f5f9;
// // // }

// // // .container{
// // // max-width:1100px;
// // // margin:auto;
// // // padding:20px;
// // // }

// // // .control{
// // // background:white;
// // // padding:20px;
// // // border-radius:18px;
// // // margin-bottom:20px;
// // // }

// // // .status-open{
// // // color:#15803d;
// // // }

// // // .status-close{
// // // color:#dc2626;
// // // }

// // // button{
// // // padding:10px 16px;
// // // border:0;
// // // border-radius:8px;
// // // cursor:pointer;
// // // font-weight:bold;
// // // }

// // // .open{
// // // background:#16a34a;
// // // color:white;
// // // }

// // // .close{
// // // background:#dc2626;
// // // color:white;
// // // }

// // // .order{
// // // background:white;
// // // padding:20px;
// // // border-radius:18px;
// // // margin-bottom:20px;
// // // box-shadow:
// // // 0 5px 20px
// // // rgba(0,0,0,.08);
// // // }

// // // .documents{
// // // display:grid;
// // // grid-template-columns:
// // // repeat(
// // // auto-fit,
// // // minmax(180px,1fr)
// // // );
// // // gap:15px;
// // // margin-top:15px;
// // // }

// // // .document{
// // // border:1px solid #ddd;
// // // padding:10px;
// // // border-radius:12px;
// // // }

// // // .document img{
// // // width:100%;
// // // height:180px;
// // // object-fit:contain;
// // // background:#f8fafc;
// // // }

// // // .download{
// // // display:block;
// // // margin-top:8px;
// // // padding:9px;
// // // text-align:center;
// // // background:#2563eb;
// // // color:white;
// // // text-decoration:none;
// // // border-radius:8px;
// // // }

// // // select{
// // // padding:10px;
// // // border-radius:8px;
// // // }

// // // </style>

// // // </head>

// // // <body>

// // // <div class="container">


// // // <div class="control">

// // // <h2>
// // // 🏪 Shop Control
// // // </h2>

// // // <h3
// // // class="${
// // // setting.isOpen
// // // ?
// // // "status-open"
// // // :
// // // "status-close"
// // // }"
// // // >

// // // ${
// // // setting.isOpen
// // // ?
// // // "🟢 SHOP OPEN"
// // // :
// // // "🔴 SHOP CLOSED"
// // // }

// // // </h3>


// // // <form
// // // action="/admin/quick-service/shop-status"
// // // method="POST"
// // // style="display:inline"
// // // >

// // // <input
// // // type="hidden"
// // // name="isOpen"
// // // value="true"
// // // >

// // // <button class="open">
// // // OPEN SHOP
// // // </button>

// // // </form>


// // // <form
// // // action="/admin/quick-service/shop-status"
// // // method="POST"
// // // style="display:inline"
// // // >

// // // <input
// // // type="hidden"
// // // name="isOpen"
// // // value="false"
// // // >

// // // <button class="close">
// // // CLOSE SHOP
// // // </button>

// // // </form>


// // // <p>
// // // Delivery Radius:
// // // <strong>
// // // ${setting.deliveryRadiusKm} KM
// // // </strong>
// // // </p>

// // // </div>


// // // <h2>
// // // 📦 Customer Orders
// // // </h2>


// // // ${
// // // orders.length
// // // ?

// // // orders.map(order=>`

// // // <div class="order">

// // // <h2>
// // // ${order.orderId}
// // // </h2>

// // // <p>
// // // <strong>
// // // ${order.serviceName}
// // // </strong>
// // // </p>

// // // <p>
// // // 👤 ${order.customerName}
// // // </p>

// // // <p>
// // // 📞
// // // <a href="tel:${order.phone}">
// // // ${order.phone}
// // // </a>
// // // </p>

// // // <p>
// // // 🏠 ${order.address}
// // // </p>

// // // <p>
// // // 📍 Distance:
// // // <strong>
// // // ${order.distanceKm} KM
// // // </strong>
// // // </p>

// // // <p>
// // // 💰 ₹${order.totalAmount}
// // // -
// // // <strong style="color:green">
// // // PAID
// // // </strong>
// // // </p>

// // // <p>
// // // Print:
// // // ${order.printType}
// // // </p>

// // // <p>
// // // Copies:
// // // ${order.copies}
// // // </p>


// // // <h3>
// // // 📄 Customer Documents
// // // </h3>


// // // <div class="documents">

// // // ${
// // // (order.documents || [])
// // // .map((doc,index)=>`

// // // <div class="document">

// // // <strong>
// // // ${doc.documentName}
// // // </strong>

// // // <br><br>

// // // <img
// // // src="/admin/quick-service/document/${order._id}/${index}"
// // // onerror="
// // // this.style.display='none'
// // // "
// // // >

// // // <a
// // // href="/admin/quick-service/document/${order._id}/${index}?download=1"
// // // class="download"
// // // >

// // // ⬇ Download

// // // </a>

// // // </div>

// // // `).join("")
// // // }

// // // </div>


// // // <br>


// // // <form
// // // method="POST"
// // // action="/admin/quick-service/order-status/${order._id}"
// // // >

// // // <select
// // // name="status"
// // // >

// // // ${[
// // // "NEW",
// // // "PROCESSING",
// // // "READY",
// // // "PACKED",
// // // "OUT_FOR_DELIVERY",
// // // "DELIVERED",
// // // "CANCELLED"
// // // ]
// // // .map(status=>`

// // // <option
// // // value="${status}"
// // // ${order.status === status ? "selected" : ""}
// // // >
// // // ${status}
// // // </option>

// // // `).join("")}

// // // </select>

// // // <button
// // // style="
// // // background:#0d604b;
// // // color:white;
// // // "
// // // >
// // // Update Status
// // // </button>

// // // </form>


// // // </div>

// // // `).join("")

// // // :

// // // "<p>No paid orders yet.</p>"
// // // }


// // // </div>

// // // </body>

// // // </html>

// // //             `);

// // //         }
// // //         catch(err){

// // //             console.error(err);

// // //             res.status(500)
// // //             .send(err.message);

// // //         }

// // //     }
// // // );


// // // // ======================================================
// // // // SHOP OPEN / CLOSE
// // // // ======================================================

// // // router.post(
// // //     "/admin/quick-service/shop-status",

// // //     requireAdmin,

// // //     async(req,res)=>{

// // //         try{

// // //             const isOpen =
// // //                 req.body.isOpen ===
// // //                 "true";


// // //             await QuickShopSetting
// // //                 .findOneAndUpdate(

// // //                     {},

// // //                     {
// // //                         isOpen,
// // //                         updatedAt:
// // //                             new Date()
// // //                     },

// // //                     {
// // //                         upsert:true,
// // //                         new:true
// // //                     }

// // //                 );


// // //             res.redirect(
// // //                 "/admin/quick-service"
// // //             );

// // //         }
// // //         catch(err){

// // //             console.error(err);

// // //             res.status(500)
// // //             .send(err.message);

// // //         }

// // //     }
// // // );


// // // // ======================================================
// // // // ORDER STATUS
// // // // ======================================================

// // // router.post(
// // //     "/admin/quick-service/order-status/:id",

// // //     requireAdmin,

// // //     async(req,res)=>{

// // //         try{

// // //             await QuickOrder
// // //                 .findByIdAndUpdate(

// // //                     req.params.id,

// // //                     {
// // //                         status:
// // //                             req.body.status
// // //                     }

// // //                 );


// // //             res.redirect(
// // //                 "/admin/quick-service"
// // //             );

// // //         }
// // //         catch(err){

// // //             console.error(err);

// // //             res.status(500)
// // //             .send(err.message);

// // //         }

// // //     }
// // // );


// // // // ======================================================
// // // // PRIVATE DOCUMENT VIEW / DOWNLOAD
// // // // ======================================================

// // // router.get(
// // //     "/admin/quick-service/document/:orderId/:index",

// // //     requireAdmin,

// // //     async(req,res)=>{

// // //         try{

// // //             const order =
// // //                 await QuickOrder
// // //                     .findById(
// // //                         req.params.orderId
// // //                     );


// // //             if(!order){

// // //                 return res
// // //                     .status(404)
// // //                     .send(
// // //                         "Order Not Found"
// // //                     );

// // //             }


// // //             const index =
// // //                 Number(
// // //                     req.params.index
// // //                 );


// // //             const document =
// // //                 order.documents[
// // //                     index
// // //                 ];


// // //             if(!document){

// // //                 return res
// // //                     .status(404)
// // //                     .send(
// // //                         "Document Not Found"
// // //                     );

// // //             }


// // //             const file =
// // //                 path.join(
// // //                     privateFolder,
// // //                     document.fileName
// // //                 );


// // //             if(
// // //                 !fs.existsSync(file)
// // //             ){

// // //                 return res
// // //                     .status(404)
// // //                     .send(
// // //                         "File Not Found"
// // //                     );

// // //             }


// // //             if(
// // //                 req.query.download ===
// // //                 "1"
// // //             ){

// // //                 return res.download(

// // //                     file,

// // //                     document.originalName ||
// // //                     document.fileName

// // //                 );

// // //             }


// // //             return res.sendFile(
// // //                 file
// // //             );

// // //         }
// // //         catch(err){

// // //             console.error(err);

// // //             res.status(500)
// // //             .send(err.message);

// // //         }

// // //     }
// // // );


// // // module.exports = router;


// // require("dotenv").config();

// // const express = require("express");
// // const router = express.Router();

// // const path = require("path");
// // const fs = require("fs");
// // const multer = require("multer");
// // const crypto = require("crypto");
// // const Razorpay = require("razorpay");

// // const QuickService =
// //     require("../models/QuickService");

// // const QuickOrder =
// //     require("../models/QuickOrder");

// // const QuickShopSetting =
// //     require("../models/QuickShopSetting");


// // // ======================================================
// // // RAZORPAY
// // // ======================================================

// // const razorpay =
// // new Razorpay({

// //     key_id:
// //         process.env.RAZORPAY_KEY_ID,

// //     key_secret:
// //         process.env.RAZORPAY_KEY_SECRET

// // });


// // // ======================================================
// // // PRIVATE DOCUMENT FOLDER
// // // ======================================================

// // const uploadDirectory =
// // path.join(
// //     process.cwd(),
// //     "storage",
// //     "quick-service"
// // );

// // if(
// //     !fs.existsSync(
// //         uploadDirectory
// //     )
// // ){

// //     fs.mkdirSync(
// //         uploadDirectory,
// //         {
// //             recursive:true
// //         }
// //     );

// // }


// // // ======================================================
// // // MULTER
// // // ======================================================

// // const storage =
// // multer.diskStorage({

// //     destination:function(
// //         req,
// //         file,
// //         cb
// //     ){

// //         cb(
// //             null,
// //             uploadDirectory
// //         );

// //     },

// //     filename:function(
// //         req,
// //         file,
// //         cb
// //     ){

// //         const extension =
// //             path.extname(
// //                 file.originalname
// //             ).toLowerCase();

// //         const fileName =
// //             "quick-" +
// //             Date.now() +
// //             "-" +
// //             Math.round(
// //                 Math.random() *
// //                 1e9
// //             ) +
// //             extension;

// //         cb(
// //             null,
// //             fileName
// //         );

// //     }

// // });


// // const upload =
// // multer({

// //     storage,

// //     limits:{
// //         fileSize:
// //             8 * 1024 * 1024,

// //         files:25
// //     },

// //     fileFilter:function(
// //         req,
// //         file,
// //         cb
// //     ){

// //         const allowed = [

// //             "image/jpeg",
// //             "image/jpg",
// //             "image/png",
// //             "image/webp",
// //             "application/pdf"

// //         ];


// //         if(
// //             !allowed.includes(
// //                 file.mimetype
// //             )
// //         ){

// //             return cb(
// //                 new Error(
// //                     "Only JPG, PNG, WEBP and PDF allowed."
// //                 )
// //             );

// //         }


// //         cb(
// //             null,
// //             true
// //         );

// //     }

// // });


// // // ======================================================
// // // GET SHOP SETTING
// // // ======================================================

// // async function getQuickShopSetting(){

// //     let setting =
// //         await QuickShopSetting
// //             .findOne();


// //     if(!setting){

// //         setting =
// //             await QuickShopSetting
// //                 .create({

// //                     shopName:
// //                         "GLOBAL QUICK SERVICES",

// //                     isOpen:
// //                         false,

// //                     deliveryRadiusKm:
// //                         2,

// //                     deliveryCharge:
// //                         0

// //                 });

// //     }


// //     return setting;

// // }


// // // ======================================================
// // // SAFE NUMBER
// // // ======================================================

// // function safeNumber(
// //     value,
// //     defaultValue = 0
// // ){

// //     const number =
// //         Number(value);

// //     return Number.isFinite(
// //         number
// //     )
// //         ? number
// //         : defaultValue;

// // }


// // // ======================================================
// // // VALID GPS
// // // ======================================================

// // function validCoordinates(
// //     latitude,
// //     longitude
// // ){

// //     if(
// //         latitude === null ||
// //         latitude === undefined ||
// //         latitude === "" ||

// //         longitude === null ||
// //         longitude === undefined ||
// //         longitude === ""
// //     ){

// //         return false;

// //     }


// //     const lat =
// //         Number(latitude);

// //     const lng =
// //         Number(longitude);


// //     return (

// //         Number.isFinite(lat) &&

// //         Number.isFinite(lng) &&

// //         lat >= -90 &&
// //         lat <= 90 &&

// //         lng >= -180 &&
// //         lng <= 180

// //     );

// // }


// // // ======================================================
// // // DISTANCE
// // // ======================================================

// // function calculateDistanceKm(
// //     latitude1,
// //     longitude1,
// //     latitude2,
// //     longitude2
// // ){

// //     const earthRadiusKm =
// //         6371;


// //     const toRadians =
// //         value =>
// //             value *
// //             Math.PI /
// //             180;


// //     const latitudeDifference =
// //         toRadians(
// //             latitude2 -
// //             latitude1
// //         );


// //     const longitudeDifference =
// //         toRadians(
// //             longitude2 -
// //             longitude1
// //         );


// //     const calculation =

// //         Math.sin(
// //             latitudeDifference /
// //             2
// //         ) ** 2

// //         +

// //         Math.cos(
// //             toRadians(
// //                 latitude1
// //             )
// //         )

// //         *

// //         Math.cos(
// //             toRadians(
// //                 latitude2
// //             )
// //         )

// //         *

// //         Math.sin(
// //             longitudeDifference /
// //             2
// //         ) ** 2;


// //     return (

// //         earthRadiusKm *

// //         2 *

// //         Math.atan2(

// //             Math.sqrt(
// //                 calculation
// //             ),

// //             Math.sqrt(
// //                 1 -
// //                 calculation
// //             )

// //         )

// //     );

// // }


// // // ======================================================
// // // ORDER NUMBER
// // // ======================================================

// // async function generateOrderNumber(){

// //     let number =
// //         1001;


// //     const lastOrder =
// //         await QuickOrder
// //             .findOne()
// //             .sort({
// //                 createdAt:-1
// //             });


// //     if(
// //         lastOrder &&
// //         lastOrder.orderId
// //     ){

// //         const oldNumber =
// //             Number(

// //                 String(
// //                     lastOrder.orderId
// //                 )
// //                 .replace(
// //                     "GQ",
// //                     ""
// //                 )

// //             );


// //         if(
// //             Number.isFinite(
// //                 oldNumber
// //             )
// //         ){

// //             number =
// //                 oldNumber +
// //                 1;

// //         }

// //     }


// //     return (
// //         "GQ" +
// //         number
// //     );

// // }


// // // ======================================================
// // // CUSTOMER PAGE
// // // GET /quick-service
// // // ======================================================

// // router.get(
// //     "/quick-service",

// //     async(req,res)=>{

// //         try{

// //             const setting =
// //                 await getQuickShopSetting();


// //             const services =
// //                 await QuickService
// //                     .find({
// //                         active:true
// //                     })
// //                     .sort({
// //                         createdAt:-1
// //                     })
// //                     .lean();


// //             return res.send(`

// // <!DOCTYPE html>

// // <html>

// // <head>

// // <meta
// // charset="UTF-8"
// // >

// // <meta
// // name="viewport"
// // content="width=device-width,initial-scale=1"
// // >

// // <title>
// // GLOBAL QUICK SERVICES
// // </title>

// // <script
// // src="https://checkout.razorpay.com/v1/checkout.js"
// // ></script>

// // <style>

// // *{
// // box-sizing:border-box;
// // font-family:Arial,sans-serif;
// // }

// // body{
// // margin:0;
// // background:#f1f5f9;
// // color:#0f172a;
// // }

// // .header{
// // padding:22px;
// // text-align:center;
// // color:white;
// // background:
// // linear-gradient(
// // 135deg,
// // #0d604b,
// // #16a34a
// // );
// // }

// // .container{
// // max-width:650px;
// // margin:auto;
// // padding:15px;
// // }

// // .card{
// // background:white;
// // padding:20px;
// // border-radius:18px;
// // box-shadow:
// // 0 10px 30px
// // rgba(0,0,0,.10);
// // }

// // .status{
// // padding:13px;
// // border-radius:12px;
// // text-align:center;
// // font-weight:bold;
// // margin-bottom:18px;
// // }

// // .status.open{
// // background:#dcfce7;
// // color:#166534;
// // }

// // .status.closed{
// // background:#fee2e2;
// // color:#991b1b;
// // }

// // label{
// // display:block;
// // margin-top:15px;
// // margin-bottom:6px;
// // font-weight:bold;
// // }

// // input,
// // select,
// // textarea{
// // width:100%;
// // padding:13px;
// // border:1px solid #cbd5e1;
// // border-radius:10px;
// // font-size:15px;
// // }

// // textarea{
// // min-height:90px;
// // }

// // .document-box{
// // margin-top:15px;
// // padding:15px;
// // background:#f8fafc;
// // border-radius:13px;
// // border:1px solid #dbeafe;
// // }

// // .location-box{
// // margin-top:15px;
// // padding:13px;
// // border-radius:10px;
// // background:#fef3c7;
// // color:#92400e;
// // font-weight:bold;
// // }

// // .location-box.success{
// // background:#dcfce7;
// // color:#166534;
// // }

// // .location-box.error{
// // background:#fee2e2;
// // color:#991b1b;
// // }

// // .location-btn{
// // width:100%;
// // margin-top:10px;
// // padding:13px;
// // border:0;
// // border-radius:10px;
// // background:#f59e0b;
// // color:white;
// // font-weight:bold;
// // }

// // .total{
// // margin-top:20px;
// // padding:15px;
// // background:#eff6ff;
// // border-radius:12px;
// // line-height:1.9;
// // }

// // .pay-btn{
// // width:100%;
// // margin-top:20px;
// // padding:15px;
// // border:0;
// // border-radius:10px;
// // background:#16a34a;
// // color:white;
// // font-size:16px;
// // font-weight:bold;
// // }

// // .pay-btn:disabled{
// // background:#94a3b8;
// // }

// // .hidden{
// // display:none;
// // }

// // </style>

// // </head>

// // <body>


// // <div class="header">

// // <h2>
// // ⚡ GLOBAL QUICK SERVICES
// // </h2>

// // <p>
// // Fast Document Service at Your Doorstep
// // </p>

// // </div>


// // <div class="container">

// // <div class="card">


// // <div
// // class="status ${
// // setting.isOpen
// // ?
// // "open"
// // :
// // "closed"
// // }"
// // >

// // ${
// // setting.isOpen
// // ?
// // "🟢 SHOP OPEN"
// // :
// // "🔴 SHOP CLOSED"
// // }

// // </div>


// // <label>
// // Select Service
// // </label>

// // <select
// // id="service"
// // >

// // <option value="">
// // Select Service
// // </option>

// // ${
// // services.map(
// // service=>`

// // <option
// // value="${service._id}"
// // data-type="${service.type}"
// // data-price="${service.price}"
// // data-requirements='${JSON.stringify(service.requirements || [])}'
// // >

// // ${service.name}
// // - ₹${service.price}

// // </option>

// // `
// // ).join("")
// // }

// // </select>


// // <div
// // id="documentsArea"
// // ></div>


// // <div
// // id="photoCopyOptions"
// // class="hidden"
// // >

// // <label>
// // Print Type
// // </label>

// // <select id="printType">

// // <option>
// // Black & White
// // </option>

// // <option>
// // Color
// // </option>

// // </select>


// // <label>
// // Copies
// // </label>

// // <input
// // type="number"
// // id="copies"
// // value="1"
// // min="1"
// // >

// // </div>


// // <label>
// // Customer Name
// // </label>

// // <input
// // type="text"
// // id="customerName"
// // >


// // <label>
// // Mobile Number
// // </label>

// // <input
// // type="tel"
// // id="mobile"
// // maxlength="10"
// // >


// // <label>
// // Delivery Address
// // </label>

// // <textarea
// // id="address"
// // ></textarea>


// // <div
// // id="locationStatus"
// // class="location-box"
// // >

// // 📍 Location check करें

// // </div>


// // <button
// // type="button"
// // class="location-btn"
// // id="checkLocationButton"
// // >
// // 📍 CHECK MY LOCATION
// // </button>


// // <div class="total">

// // Service:
// // ₹<span id="serviceAmount">0</span>

// // <br>

// // Delivery:
// // ₹0
// // <br>

// // <strong>
// // Total:
// // ₹<span id="totalAmount">0</span>
// // </strong>

// // </div>


// // <button
// // type="button"
// // class="pay-btn"
// // id="orderButton"
// // onclick="placeOrder()"
// // disabled
// // >

// // CHECK LOCATION FIRST

// // </button>


// // </div>

// // </div>


// // <script>

// // const SHOP_OPEN =
// // ${setting.isOpen ? "true" : "false"};

// // const SHOP_LATITUDE =
// // ${
// // validCoordinates(
// // setting.shopLocation?.latitude,
// // setting.shopLocation?.longitude
// // )
// // ?
// // Number(
// // setting.shopLocation.latitude
// // )
// // :
// // "null"
// // };

// // const SHOP_LONGITUDE =
// // ${
// // validCoordinates(
// // setting.shopLocation?.latitude,
// // setting.shopLocation?.longitude
// // )
// // ?
// // Number(
// // setting.shopLocation.longitude
// // )
// // :
// // "null"
// // };

// // const DELIVERY_RADIUS =
// // ${safeNumber(
// // setting.deliveryRadiusKm,
// // 2
// // )};

// // const DELIVERY_CHARGE =0;


// // let customerLatitude =
// // null;

// // let customerLongitude =
// // null;

// // let customerAccuracy =
// // null;

// // let customerDistance =
// // null;

// // let locationAllowed =
// // false;


// // const serviceSelect =
// // document.getElementById(
// //     "service"
// // );


// // serviceSelect.addEventListener(
// // "change",
// // function(){

// //     const option =
// //         this.options[
// //             this.selectedIndex
// //         ];


// //     const documentsArea =
// //         document.getElementById(
// //             "documentsArea"
// //         );


// //     const photoCopyOptions =
// //         document.getElementById(
// //             "photoCopyOptions"
// //         );


// //     documentsArea.innerHTML =
// //         "";


// //     photoCopyOptions
// //         .classList
// //         .add(
// //             "hidden"
// //         );


// //     if(!option.value){

// //         document.getElementById(
// //             "serviceAmount"
// //         ).textContent =
// //             "0";

// //         document.getElementById(
// //             "totalAmount"
// //         ).textContent =
// //             "0";

// //         return;

// //     }


// //     const price =
// //         Number(
// //             option.dataset.price ||
// //             0
// //         );


// //     document.getElementById(
// //         "serviceAmount"
// //     ).textContent =
// //         price;


// //     document.getElementById(
// //         "totalAmount"
// //     ).textContent =
// //         price +
// //         DELIVERY_CHARGE;


// //     if(
// //         option.dataset.type ===
// //         "photocopy"
// //     ){

// //         photoCopyOptions
// //             .classList
// //             .remove(
// //                 "hidden"
// //             );


// //         documentsArea.innerHTML = \`

// // <div class="document-box">

// // <label>
// // 📷 Scan / Upload Document Pages
// // </label>

// // <input
// // type="file"
// // id="photocopyPages"
// // accept="image/*"
// // capture="environment"
// // multiple
// // >

// // <p>
// // एक से ज्यादा pages select कर सकते हैं।
// // </p>

// // </div>

// //         \`;


// //         return;

// //     }


// //     let requirements =
// //         [];


// //     try{

// //         requirements =
// //             JSON.parse(
// //                 option.dataset
// //                 .requirements ||
// //                 "[]"
// //             );

// //     }
// //     catch(error){

// //         requirements =
// //             [];

// //     }


// // requirements.forEach(
// // function(item,index){

// //     const box =
// //         document.createElement(
// //             "div"
// //         );

// //     box.className =
// //         "document-box";


// //     const requiredMark =
// //         item.required
// //         ? "*"
// //         : "";


// //     const requiredAttribute =
// //         item.required
// //         ? "required"
// //         : "";


// //     const documentName =
// //         String(
// //             item.name ||
// //             "Document"
// //         );


// //     box.innerHTML =

// //         '<label>' +

// //         '📷 ' +
// //         documentName +
// //         requiredMark +

// //         '</label>' +

// //         '<input ' +

// //         'type="file" ' +

// //         'id="doc_' +
// //         index +
// //         '" ' +

// //         'data-doc-name="' +
// //         documentName
// //             .replace(
// //                 /"/g,
// //                 '&quot;'
// //             ) +
// //         '" ' +

// //         'accept="image/*" ' +

// //         'capture="environment" ' +

// //         requiredAttribute +

// //         '>';


// //     documentsArea.appendChild(
// //         box
// //     );

// // });


// // updateTotal();

// // });   // serviceSelect.addEventListener ka closing


// // // ======================================================
// // // DISTANCE
// // // ======================================================

// // function calculateDistanceKm(
// //     lat1,
// //     lon1,
// //     lat2,
// //     lon2
// // ){

// //     const R =
// //         6371;


// //     const rad =
// //         function(value){

// //             return (
// //                 value *
// //                 Math.PI /
// //                 180
// //             );

// //         };


// //     const dLat =
// //         rad(
// //             lat2 -
// //             lat1
// //         );


// //     const dLon =
// //         rad(
// //             lon2 -
// //             lon1
// //         );


// //     const a =

// //         Math.sin(
// //             dLat /
// //             2
// //         ) ** 2

// //         +

// //         Math.cos(
// //             rad(
// //                 lat1
// //             )
// //         )

// //         *

// //         Math.cos(
// //             rad(
// //                 lat2
// //             )
// //         )

// //         *

// //         Math.sin(
// //             dLon /
// //             2
// //         ) ** 2;


// //     return (

// //         R *

// //         2 *

// //         Math.atan2(

// //             Math.sqrt(
// //                 a
// //             ),

// //             Math.sqrt(
// //                 1 -
// //                 a
// //             )

// //         )

// //     );

// // }


// // // ======================================================
// // // CHECK LOCATION
// // // ======================================================

// // function checkLocation(){

// //     const box =
// //         document.getElementById(
// //             "locationStatus"
// //         );


// //     const button =
// //         document.getElementById(
// //             "orderButton"
// //         );


// //     locationAllowed =
// //         false;


// //     button.disabled =
// //         true;


// //     if(
// //         !SHOP_OPEN
// //     ){

// //         box.className =
// //             "location-box error";


// //         box.innerHTML =
// //             "🔴 Shop अभी Closed है।";


// //         button.textContent =
// //             "SHOP CLOSED";


// //         return;

// //     }


// //     if(
// //         SHOP_LATITUDE === null ||
// //         SHOP_LONGITUDE === null
// //     ){

// //         box.className =
// //             "location-box error";


// //         box.innerHTML =
// //             "❌ Shop Location save नहीं है।";


// //         button.textContent =
// //             "SHOP LOCATION NOT AVAILABLE";


// //         return;

// //     }


// //     if(
// //         !navigator.geolocation
// //     ){

// //         box.className =
// //             "location-box error";


// //         box.innerHTML =
// //             "❌ GPS support नहीं है।";


// //         return;

// //     }


// //     checkLocationButton.disabled =
// //         true;


// //     checkLocationButton.textContent =
// //         "📍 CHECKING LOCATION...";


// //     box.className =
// //         "location-box";


// //     box.innerHTML =
// //         "📍 Location check हो रही है...";


// //     navigator.geolocation
// //     .getCurrentPosition(

// //         function(position){

// //             customerLatitude =
// //                 Number(
// //                     position.coords.latitude
// //                 );


// //             customerLongitude =
// //                 Number(
// //                     position.coords.longitude
// //                 );


// //             customerAccuracy =
// //                 Number(
// //                     position.coords.accuracy ||
// //                     0
// //                 );


// //             customerDistance =
// //                 calculateDistanceKm(

// //                     Number(
// //                         SHOP_LATITUDE
// //                     ),

// //                     Number(
// //                         SHOP_LONGITUDE
// //                     ),

// //                     customerLatitude,

// //                     customerLongitude

// //                 );


// //             checkLocationButton.disabled =
// //                 false;


// //             checkLocationButton.textContent =
// //                 "📍 CHECK LOCATION AGAIN";


// //             if(
// //                 customerDistance <=
// //                 DELIVERY_RADIUS
// //             ){

// //                 locationAllowed =
// //                     true;


// //                 box.className =
// //                     "location-box success";


// //                 box.innerHTML =

// //                     "✅ DELIVERY AVAILABLE" +

// //                     "<br>" +

// //                     "Distance: " +

// //                     customerDistance
// //                     .toFixed(2) +

// //                     " KM";


// //                 button.disabled =
// //                     false;


// //                 button.textContent =
// //                     "💳 CONTINUE TO PAYMENT";

// //             }
// //             else{

// //                 locationAllowed =
// //                     false;


// //                 box.className =
// //                     "location-box error";


// //                 box.innerHTML =

// //                     "❌ Delivery Available नहीं है." +

// //                     "<br>" +

// //                     "Distance: " +

// //                     customerDistance
// //                     .toFixed(2) +

// //                     " KM" +

// //                     "<br>" +

// //                     "Maximum Radius: " +

// //                     DELIVERY_RADIUS +

// //                     " KM";


// //                 button.disabled =
// //                     true;


// //                 button.textContent =
// //                     "OUTSIDE DELIVERY AREA";

// //             }

// //         },


// //         function(error){

// //             console.error(
// //                 "LOCATION ERROR:",
// //                 error
// //             );


// //             checkLocationButton.disabled =
// //                 false;


// //             checkLocationButton.textContent =
// //                 "📍 CHECK MY LOCATION";


// //             box.className =
// //                 "location-box error";


// //             if(
// //                 error.code === 1
// //             ){

// //                 box.innerHTML =
// //                     "❌ Location Permission Denied. Browser में Location Allow करें.";

// //             }
// //             else if(
// //                 error.code === 2
// //             ){

// //                 box.innerHTML =
// //                     "❌ GPS Location नहीं मिल रही. Phone Location ON करें.";

// //             }
// //             else if(
// //                 error.code === 3
// //             ){

// //                 box.innerHTML =
// //                     "❌ Location Timeout. फिर से कोशिश करें.";

// //             }
// //             else{

// //                 box.innerHTML =
// //                     "❌ Location Check नहीं हो सकी.";

// //             }

// //         },


// //         {
// //             enableHighAccuracy:
// //                 true,

// //             timeout:
// //                 20000,

// //             maximumAge:
// //                 0
// //         }

// //     );

// // }


// // // ======================================================
// // // LOCATION BUTTON EVENT
// // // ======================================================

// // checkLocationButton.addEventListener(
// //     "click",
// //     checkLocation
// // );


// // async function placeOrder(){

// //     if(
// //         !SHOP_OPEN ||
// //         !locationAllowed
// //     ){

// //         return;

// //     }


// //     const serviceId =
// //         serviceSelect.value;


// //     if(!serviceId){

// //         alert(
// //             "Service select करें."
// //         );

// //         return;

// //     }


// //     const customerName =
// //         document
// //         .getElementById(
// //             "customerName"
// //         )
// //         .value
// //         .trim();


// //     const mobile =
// //         document
// //         .getElementById(
// //             "mobile"
// //         )
// //         .value
// //         .trim();


// //     const address =
// //         document
// //         .getElementById(
// //             "address"
// //         )
// //         .value
// //         .trim();


// //     if(
// //         !customerName ||
// //         !mobile ||
// //         !address
// //     ){

// //         alert(
// //             "Name, Mobile और Address जरूरी है."
// //         );

// //         return;

// //     }


// //     const formData =
// //         new FormData();


// //     formData.append(
// //         "serviceId",
// //         serviceId
// //     );


// //     formData.append(
// //         "customerName",
// //         customerName
// //     );


// //     formData.append(
// //         "mobile",
// //         mobile
// //     );


// //     formData.append(
// //         "address",
// //         address
// //     );


// //     formData.append(
// //         "latitude",
// //         customerLatitude
// //     );


// //     formData.append(
// //         "longitude",
// //         customerLongitude
// //     );


// //     formData.append(
// //         "accuracy",
// //         customerAccuracy || ""
// //     );


// //     formData.append(
// //         "copies",
// //         document
// //         .getElementById(
// //             "copies"
// //         )
// //         ?.value ||
// //         1
// //     );


// //     formData.append(
// //         "printType",
// //         document
// //         .getElementById(
// //             "printType"
// //         )
// //         ?.value ||
// //         "Black & White"
// //     );


// //     const option =
// //         serviceSelect.options[
// //             serviceSelect.selectedIndex
// //         ];


// //     if(
// //         option.dataset.type ===
// //         "photocopy"
// //     ){

// //         const input =
// //             document.getElementById(
// //                 "photocopyPages"
// //             );


// //         if(
// //             !input ||
// //             !input.files.length
// //         ){

// //             alert(
// //                 "Document image upload करें."
// //             );

// //             return;

// //         }


// //         Array.from(
// //             input.files
// //         )
// //         .forEach(
// //         function(file){

// //             formData.append(
// //                 "photocopyPages",
// //                 file
// //             );

// //         });

// //     }
// //     else{

// //         const documentInputs =
// //             document.querySelectorAll(
// //                 '[id^="doc_"]'
// //             );


// //         for(
// //             const input
// //             of documentInputs
// //         ){

// //             if(
// //                 input.required &&
// //                 !input.files.length
// //             ){

// //                 alert(
// //                     input.dataset.docName +
// //                     " upload करें."
// //                 );

// //                 return;

// //             }


// //             if(
// //                 input.files.length
// //             ){

// //                 formData.append(
// //                     input.id,
// //                     input.files[0]
// //                 );


// //                 formData.append(
// //                     "name_" +
// //                     input.id,
// //                     input.dataset.docName
// //                 );

// //             }

// //         }

// //     }


// //     const button =
// //         document.getElementById(
// //             "orderButton"
// //         );


// //     button.disabled =
// //         true;


// //     button.textContent =
// //         "PLEASE WAIT...";


// //     try{

// //         const response =
// //             await fetch(
// //                 "/quick-service/create-order",
// //                 {
// //                     method:"POST",
// //                     body:formData
// //                 }
// //             );


// //         const data =
// //             await response.json();


// //         if(!data.success){

// //             alert(
// //                 data.message
// //             );


// //             button.disabled =
// //                 false;


// //             button.textContent =
// //                 "CONTINUE TO PAYMENT";


// //             return;

// //         }


// //         const options = {

// //             key:
// //                 data.key,

// //             amount:
// //                 data.amount,

// //             currency:
// //                 "INR",

// //             name:
// //                 "GLOBAL QUICK SERVICES",

// //             description:
// //                 data.serviceName,

// //             order_id:
// //                 data.razorpayOrderId,

// //             handler:
// //             async function(response){

// //                 const verify =
// //                     await fetch(
// //                         "/quick-service/verify-payment",
// //                         {

// //                             method:"POST",

// //                             headers:{
// //                                 "Content-Type":
// //                                 "application/json"
// //                             },

// //                             body:
// //                             JSON.stringify({

// //                                 orderId:
// //                                     data.orderId,

// //                                 razorpay_order_id:
// //                                     response
// //                                     .razorpay_order_id,

// //                                 razorpay_payment_id:
// //                                     response
// //                                     .razorpay_payment_id,

// //                                 razorpay_signature:
// //                                     response
// //                                     .razorpay_signature

// //                             })

// //                         }
// //                     );


// //                 const result =
// //                     await verify.json();


// //                 if(
// //                     result.success
// //                 ){

// //                     window.location.href =
// //                         "/quick-service/success/" +
// //                         data.orderId;

// //                 }
// //                 else{

// //                     alert(
// //                         "Payment verification failed"
// //                     );

// //                 }

// //             }

// //         };


// //         const razorpayObject =
// //             new Razorpay(
// //                 options
// //             );


// //         razorpayObject.open();


// //     }
// //     catch(error){

// //         console.error(
// //             error
// //         );


// //         alert(
// //             "Order create नहीं हुआ."
// //         );


// //         button.disabled =
// //             false;


// //         button.textContent =
// //             "CONTINUE TO PAYMENT";

// //     }

// // }

// // </script>


// // </body>

// // </html>

// //             `);

// //         }
// //         catch(error){

// //             console.error(
// //                 "QUICK SERVICE PAGE ERROR:",
// //                 error
// //             );


// //             res
// //             .status(500)
// //             .send(
// //                 error.message
// //             );

// //         }

// //     }
// // );


// // // ======================================================
// // // CREATE ORDER
// // // ======================================================

// // router.post(
// //     "/quick-service/create-order",

// //     upload.any(),

// //     async(req,res)=>{

// //         try{

// //             const setting =
// //                 await getQuickShopSetting();


// //             if(
// //                 !setting.isOpen
// //             ){

// //                 return res
// //                 .status(400)
// //                 .json({

// //                     success:false,

// //                     message:
// //                         "Shop अभी Closed है."

// //                 });

// //             }


// //             const service =
// //                 await QuickService
// //                 .findById(
// //                     req.body.serviceId
// //                 );


// //             if(
// //                 !service ||
// //                 !service.active
// //             ){

// //                 return res
// //                 .status(404)
// //                 .json({

// //                     success:false,

// //                     message:
// //                         "Service available नहीं है."

// //                 });

// //             }


// //             if(
// //                 !validCoordinates(
// //                     req.body.latitude,
// //                     req.body.longitude
// //                 )
// //             ){

// //                 return res
// //                 .status(400)
// //                 .json({

// //                     success:false,

// //                     message:
// //                         "Customer Location required."

// //                 });

// //             }


// //             if(
// //                 !validCoordinates(
// //                     setting
// //                     .shopLocation
// //                     ?.latitude,

// //                     setting
// //                     .shopLocation
// //                     ?.longitude
// //                 )
// //             ){

// //                 return res
// //                 .status(400)
// //                 .json({

// //                     success:false,

// //                     message:
// //                         "Shop Location available नहीं है."

// //                 });

// //             }


// //             const customerLatitude =
// //                 Number(
// //                     req.body.latitude
// //                 );


// //             const customerLongitude =
// //                 Number(
// //                     req.body.longitude
// //                 );


// //             const distance =
// //                 calculateDistanceKm(

// //                     Number(
// //                         setting
// //                         .shopLocation
// //                         .latitude
// //                     ),

// //                     Number(
// //                         setting
// //                         .shopLocation
// //                         .longitude
// //                     ),

// //                     customerLatitude,

// //                     customerLongitude

// //                 );


// //             const radius =
// //                 safeNumber(
// //                     setting
// //                     .deliveryRadiusKm,
// //                     2
// //                 );


// //             if(
// //                 distance >
// //                 radius
// //             ){

// //                 return res
// //                 .status(400)
// //                 .json({

// //                     success:false,

// //                     message:
// //                         "Delivery केवल " +
// //                         radius +
// //                         " KM तक available है."

// //                 });

// //             }


// // // ======================================================
// // // DOCUMENTS
// // // ======================================================

// //             const documents =
// //                 [];


// //             for(
// //                 const file
// //                 of
// //                 req.files || []
// //             ){

// //                 let documentName =
// //                     "Document";


// //                 if(
// //                     file.fieldname ===
// //                     "photocopyPages"
// //                 ){

// //                     documentName =
// //                         "Photo Copy Page";

// //                 }
// //                 else{

// //                     documentName =
// //                         req.body[
// //                             "name_" +
// //                             file.fieldname
// //                         ]
// //                         ||
// //                         "Document";

// //                 }


// //                 documents.push({

// //                     documentName,

// //                     fileName:
// //                         file.filename,

// //                     originalName:
// //                         file.originalname,

// //                     mimeType:
// //                         file.mimetype

// //                 });

// //             }


// // // ======================================================
// // // AMOUNT
// // // ======================================================

// //             const copies =
// //                 Math.max(

// //                     1,

// //                     safeNumber(
// //                         req.body.copies,
// //                         1
// //                     )

// //                 );


// //             let serviceAmount =
// //                 safeNumber(
// //                     service.price,
// //                     0
// //                 );


// //             if(
// //                 service.type ===
// //                 "photocopy"
// //             ){

// //                 const pages =
// //                     documents.length ||
// //                     1;


// //                 serviceAmount =

// //                     safeNumber(
// //                         service.price,
// //                         0
// //                     )

// //                     *

// //                     pages

// //                     *

// //                     copies;

// //             }


// //             const deliveryCharge = 0;


// //             const totalAmount =
// //                 serviceAmount +
// //                 deliveryCharge;


// //             const orderId =
// //                 await generateOrderNumber();


// // // ======================================================
// // // RAZORPAY ORDER
// // // ======================================================

// //             const razorpayOrder =
// //                 await razorpay
// //                 .orders
// //                 .create({

// //                     amount:
// //                         Math.round(
// //                             totalAmount *
// //                             100
// //                         ),

// //                     currency:
// //                         "INR",

// //                     receipt:
// //                         orderId

// //                 });


// // // ======================================================
// // // SAVE ORDER
// // // ======================================================

// //             const order =
// //                 await QuickOrder
// //                 .create({

// //                     orderId,

// //                     customerName:
// //                         String(
// //                             req.body.customerName ||
// //                             ""
// //                         ).trim(),

// //                     mobile:
// //                         String(
// //                             req.body.mobile ||
// //                             ""
// //                         ).trim(),

// //                     address:
// //                         String(
// //                             req.body.address ||
// //                             ""
// //                         ).trim(),

// //                     customerLocation:{

// //                         latitude:
// //                             customerLatitude,

// //                         longitude:
// //                             customerLongitude,

// //                         accuracy:
// //                             safeNumber(
// //                                 req.body.accuracy,
// //                                 0
// //                             )

// //                     },

// //                     distanceFromShopKm:
// //                         Number(
// //                             distance
// //                             .toFixed(2)
// //                         ),

// //                     serviceId:
// //                         service._id,

// //                     serviceName:
// //                         service.name,

// //                     serviceType:
// //                         service.type,

// //                     documents,

// //                     copies,

// //                     printType:
// //                         req.body
// //                         .printType ||
// //                         "Black & White",

// //                     serviceAmount,

// //                     deliveryCharge,

// //                     totalAmount,

// //                     paymentStatus:
// //                         "Pending",

// //                     razorpayOrderId:
// //                         razorpayOrder.id,

// //                     status:
// //                         "Pending"

// //                 });


// //             return res.json({

// //                 success:true,

// //                 key:
// //                     process.env
// //                     .RAZORPAY_KEY_ID,

// //                 orderId:
// //                     order._id,

// //                 orderNumber:
// //                     order.orderId,

// //                 serviceName:
// //                     order.serviceName,

// //                 amount:
// //                     razorpayOrder.amount,

// //                 razorpayOrderId:
// //                     razorpayOrder.id

// //             });

// //         }
// //         catch(error){

// //             console.error(
// //                 "CREATE QUICK ORDER ERROR:",
// //                 error
// //             );


// //             return res
// //             .status(500)
// //             .json({

// //                 success:false,

// //                 message:
// //                     error.message

// //             });

// //         }

// //     }
// // );


// // // ======================================================
// // // VERIFY PAYMENT
// // // ======================================================

// // router.post(
// //     "/quick-service/verify-payment",

// //     async(req,res)=>{

// //         try{

// //             const {

// //                 orderId,

// //                 razorpay_order_id,

// //                 razorpay_payment_id,

// //                 razorpay_signature

// //             } = req.body;


// //             const body =

// //                 razorpay_order_id +

// //                 "|" +

// //                 razorpay_payment_id;


// //             const expectedSignature =

// //                 crypto

// //                 .createHmac(
// //                     "sha256",
// //                     process.env
// //                     .RAZORPAY_KEY_SECRET
// //                 )

// //                 .update(
// //                     body
// //                 )

// //                 .digest(
// //                     "hex"
// //                 );


// //             if(
// //                 expectedSignature !==
// //                 razorpay_signature
// //             ){

// //                 return res
// //                 .status(400)
// //                 .json({

// //                     success:false,

// //                     message:
// //                         "Invalid Payment Signature"

// //                 });

// //             }


// //             const order =
// //                 await QuickOrder
// //                 .findByIdAndUpdate(

// //                     orderId,

// //                     {

// //                         paymentStatus:
// //                             "Paid",

// //                         razorpayPaymentId:
// //                             razorpay_payment_id,

// //                         status:
// //                             "Pending"

// //                     },

// //                     {
// //                         new:true
// //                     }

// //                 );


// //             return res.json({

// //                 success:true,

// //                 orderNumber:
// //                     order.orderId

// //             });

// //         }
// //         catch(error){

// //             console.error(
// //                 "VERIFY PAYMENT ERROR:",
// //                 error
// //             );


// //             return res
// //             .status(500)
// //             .json({

// //                 success:false

// //             });

// //         }

// //     }
// // );


// // // ======================================================
// // // SUCCESS PAGE
// // // ======================================================

// // router.get(
// //     "/quick-service/success/:id",

// //     async(req,res)=>{

// //         const order =
// //             await QuickOrder
// //             .findById(
// //                 req.params.id
// //             )
// //             .lean();


// //         if(!order){

// //             return res
// //             .status(404)
// //             .send(
// //                 "Order Not Found"
// //             );

// //         }


// //         return res.send(`

// // <!DOCTYPE html>

// // <html>

// // <head>

// // <meta
// // name="viewport"
// // content="width=device-width,initial-scale=1"
// // >

// // <title>
// // Order Successful
// // </title>

// // </head>


// // <body style="
// // font-family:Arial;
// // background:#f0fdf4;
// // padding:40px;
// // text-align:center;
// // ">

// // <h1>
// // ✅ PAYMENT SUCCESSFUL
// // </h1>

// // <h2>
// // ${order.orderId}
// // </h2>

// // <p>
// // आपका Order मिल गया है।
// // </p>

// // <p>
// // Service:
// // <strong>
// // ${order.serviceName}
// // </strong>
// // </p>

// // <p>
// // Amount:
// // <strong>
// // ₹${order.totalAmount}
// // </strong>
// // </p>

// // <a href="/">
// // HOME
// // </a>

// // </body>

// // </html>

// //         `);

// //     }
// // );


// // // ======================================================
// // // ADMIN SHOP STATUS
// // // GET /admin/quick-service/shop-status
// // // ======================================================

// // router.get(
// //     "/admin/quick-service/shop-status",

// //     async(req,res)=>{

// //         try{

// //             const setting =
// //                 await getQuickShopSetting();


// //             const locationSaved =
// //                 validCoordinates(

// //                     setting
// //                     .shopLocation
// //                     ?.latitude,

// //                     setting
// //                     .shopLocation
// //                     ?.longitude

// //                 );


// //             return res.send(`

// // <!DOCTYPE html>

// // <html>

// // <head>

// // <meta
// // name="viewport"
// // content="width=device-width,initial-scale=1"
// // >

// // <title>
// // Quick Service Shop Control
// // </title>

// // <style>

// // *{
// // box-sizing:border-box;
// // font-family:Arial;
// // }

// // body{
// // margin:0;
// // padding:20px;
// // background:#f1f5f9;
// // }

// // .card{
// // max-width:470px;
// // margin:30px auto;
// // padding:25px;
// // background:white;
// // border-radius:20px;
// // text-align:center;
// // box-shadow:
// // 0 15px 45px
// // rgba(0,0,0,.12);
// // }

// // .status{
// // padding:15px;
// // margin:20px 0;
// // border-radius:12px;
// // font-size:20px;
// // font-weight:bold;
// // }

// // .open{
// // background:#dcfce7;
// // color:#166534;
// // }

// // .closed{
// // background:#fee2e2;
// // color:#991b1b;
// // }

// // .setting{
// // padding:15px;
// // background:#f8fafc;
// // border-radius:12px;
// // text-align:left;
// // line-height:1.9;
// // }

// // button{
// // width:100%;
// // padding:15px;
// // margin-top:18px;
// // border:0;
// // border-radius:12px;
// // color:white;
// // font-weight:bold;
// // font-size:16px;
// // }

// // .open-btn{
// // background:#16a34a;
// // }

// // .close-btn{
// // background:#dc2626;
// // }

// // .links a{
// // display:block;
// // margin-top:10px;
// // padding:12px;
// // background:#2563eb;
// // color:white;
// // text-decoration:none;
// // border-radius:10px;
// // }

// // </style>

// // </head>


// // <body>

// // <div class="card">

// // <h1>
// // ⚡ GLOBAL QUICK SERVICES
// // </h1>


// // <div
// // class="status ${
// // setting.isOpen
// // ?
// // "open"
// // :
// // "closed"
// // }"
// // >

// // ${
// // setting.isOpen
// // ?
// // "🟢 SHOP OPEN"
// // :
// // "🔴 SHOP CLOSED"
// // }

// // </div>


// // <div class="setting">

// // 📦 Delivery Radius:
// // <strong>
// // ${safeNumber(
// // setting.deliveryRadiusKm,
// // 2
// // )} KM
// // </strong>

// // <br>

// // 💵 Delivery Charge:
// // <strong>
// // ₹${safeNumber(
// // setting.deliveryCharge,
// // 0
// // )}
// // </strong>

// // <br>

// // 📍 Shop Location:
// // <strong>
// // ${
// // locationSaved
// // ?
// // "Saved ✅"
// // :
// // "Not Saved ❌"
// // }
// // </strong>

// // </div>


// // <form
// // method="POST"
// // action="/admin/quick-service/toggle-shop"
// // id="toggleForm"
// // >

// // <input
// // type="hidden"
// // name="latitude"
// // id="latitude"
// // >

// // <input
// // type="hidden"
// // name="longitude"
// // id="longitude"
// // >

// // <input
// // type="hidden"
// // name="accuracy"
// // id="accuracy"
// // >


// // <button
// // type="button"
// // id="toggleButton"
// // class="${
// // setting.isOpen
// // ?
// // "close-btn"
// // :
// // "open-btn"
// // }"
// // >

// // ${
// // setting.isOpen
// // ?
// // "🔴 CLOSE SHOP"
// // :
// // "🟢 OPEN SHOP WITH LOCATION"
// // }

// // </button>

// // </form>


// // <p
// // id="locationMessage"
// // >

// // ${
// // setting.isOpen
// // ?
// // "✅ 2 KM के अंदर Customer order कर सकते हैं."
// // :
// // "Shop Open करने के लिए GPS Location Allow करें."
// // }

// // </p>


// // <div class="links">

// //     <a href="/admin/quick-service/orders">
// //         🔔 ORDERS
// //     </a>

// //     <a href="/admin/quick-service/services">
// //         🛠 MANAGE SERVICES
// //     </a>

// //     <a href="/quick-service">
// //         👤 CUSTOMER PAGE
// //     </a>

// // </div>


// // </div>


// // <div class="setting">

// // 📦 Delivery Radius:
// // <strong>
// // ${safeNumber(
// // setting.deliveryRadiusKm,
// // 2
// // )} KM
// // </strong>

// // <br>

// // 💵 Delivery Charge:
// // <strong>
// // ₹${safeNumber(
// // setting.deliveryCharge,
// // 0
// // )}
// // </strong>

// // <br>

// // 📍 Shop Location:
// // <strong>
// // ${
// // locationSaved
// // ?
// // "Saved ✅"
// // :
// // "Not Saved ❌"
// // }
// // </strong>

// // </div>


// // <form
// // method="POST"
// // action="/admin/quick-service/toggle-shop"
// // id="toggleForm"
// // >

// // <input
// // type="hidden"
// // name="latitude"
// // id="latitude"
// // >

// // <input
// // type="hidden"
// // name="longitude"
// // id="longitude"
// // >

// // <input
// // type="hidden"
// // name="accuracy"
// // id="accuracy"
// // >


// // <button
// // type="button"
// // id="toggleButton"
// // class="${
// // setting.isOpen
// // ?
// // "close-btn"
// // :
// // "open-btn"
// // }"
// // >

// // ${
// // setting.isOpen
// // ?
// // "🔴 CLOSE SHOP"
// // :
// // "🟢 OPEN SHOP WITH LOCATION"
// // }

// // </button>

// // </form>


// // <p
// // id="locationMessage"
// // >

// // ${
// // setting.isOpen
// // ?
// // "✅ 2 KM के अंदर Customer order कर सकते हैं."
// // :
// // "Shop Open करने के लिए GPS Location Allow करें."
// // }

// // </p>


// // <div class="links">

// // <a href="/admin/quick-service/orders">
// // 🔔 ORDERS
// // </a>

// // <a href="/quick-service">
// // 👤 CUSTOMER PAGE
// // </a>

// // </div>

// // </div>


// // <script>

// // const SHOP_OPEN =
// // ${setting.isOpen ? "true" : "false"};


// // const button =
// // document.getElementById(
// //     "toggleButton"
// // );


// // const form =
// // document.getElementById(
// //     "toggleForm"
// // );


// // const message =
// // document.getElementById(
// //     "locationMessage"
// // );


// // button.addEventListener(
// // "click",
// // function(){

// //     if(SHOP_OPEN){

// //         button.disabled =
// //             true;

// //         button.textContent =
// //             "CLOSING SHOP...";

// //         form.submit();

// //         return;

// //     }


// //     if(
// //         !navigator.geolocation
// //     ){

// //         alert(
// //             "GPS support नहीं है."
// //         );

// //         return;

// //     }


// //     button.disabled =
// //         true;


// //     button.textContent =
// //         "📍 GETTING LOCATION...";


// //     navigator.geolocation
// //     .getCurrentPosition(

// //     function(position){

// //         document
// //         .getElementById(
// //             "latitude"
// //         )
// //         .value =
// //             position.coords
// //             .latitude;


// //         document
// //         .getElementById(
// //             "longitude"
// //         )
// //         .value =
// //             position.coords
// //             .longitude;


// //         document
// //         .getElementById(
// //             "accuracy"
// //         )
// //         .value =
// //             position.coords
// //             .accuracy;


// //         message.innerHTML =
// //             "✅ Location मिली. Shop Open हो रही है...";


// //         form.submit();

// //     },

// //     function(error){

// //         console.error(
// //             error
// //         );


// //         button.disabled =
// //             false;


// //         button.textContent =
// //             "🟢 OPEN SHOP WITH LOCATION";


// //         message.innerHTML =
// //             "❌ Location Permission Allow करें.";

// //     },

// //     {

// //         enableHighAccuracy:
// //             true,

// //         timeout:
// //             20000,

// //         maximumAge:
// //             0

// //     }

// //     );

// // });

// // </script>


// // </body>

// // </html>

// //             `);

// //         }
// //         catch(error){

// //             console.error(
// //                 error
// //             );

// //             res
// //             .status(500)
// //             .send(
// //                 error.message
// //             );

// //         }

// //     }
// // );


// // // ======================================================
// // // TOGGLE SHOP
// // // ======================================================

// // router.post(
// //     "/admin/quick-service/toggle-shop",

// //     async(req,res)=>{

// //         try{

// //             const setting =
// //                 await getQuickShopSetting();


// //             const nextStatus =
// //                 !setting.isOpen;


// //             if(nextStatus){

// //                 const {

// //                     latitude,

// //                     longitude,

// //                     accuracy

// //                 } = req.body;


// //                 if(
// //                     !validCoordinates(
// //                         latitude,
// //                         longitude
// //                     )
// //                 ){

// //                     return res
// //                     .status(400)
// //                     .send(
// //                         "Shop Open करने के लिए GPS Location जरूरी है."
// //                     );

// //                 }


// //                 setting.shopLocation = {

// //                     latitude:
// //                         Number(
// //                             latitude
// //                         ),

// //                     longitude:
// //                         Number(
// //                             longitude
// //                         ),

// //                     accuracy:
// //                         safeNumber(
// //                             accuracy,
// //                             0
// //                         ),

// //                     updatedAt:
// //                         new Date()

// //                 };


// //                 setting.deliveryRadiusKm =
// //                     2;

// //             }


// //             setting.isOpen =
// //                 nextStatus;


// //             await setting.save();


// //             return res.redirect(
// //                 "/admin/quick-service/shop-status"
// //             );

// //         }
// //         catch(error){

// //             console.error(
// //                 error
// //             );


// //             return res
// //             .status(500)
// //             .send(
// //                 error.message
// //             );

// //         }

// //     }
// // );


// // // ======================================================
// // // ADMIN ORDERS
// // // ======================================================
// // // ======================================================
// // // ADMIN QUICK SERVICE ORDERS
// // // ======================================================

// // router.get(
// //     "/admin/quick-service/orders",

// //     async(req,res)=>{

// //         try{

// //             // ==================================================
// //             // SYNC PENDING ORDERS WITH RAZORPAY
// //             // ==================================================

// //             const pendingOrders =
// //                 await QuickOrder.find({

// //                     paymentStatus:
// //                         "Pending",

// //                     razorpayOrderId:{
// //                         $exists:true,
// //                         $ne:""
// //                     }

// //                 });


// //             for(
// //                 const pendingOrder
// //                 of pendingOrders
// //             ){

// //                 try{

// //                     const razorpayOrder =
// //                         await razorpay
// //                         .orders
// //                         .fetch(
// //                             pendingOrder
// //                             .razorpayOrderId
// //                         );


// //                     console.log(
// //                         "RAZORPAY ORDER:",
// //                         pendingOrder.orderId,
// //                         razorpayOrder.status
// //                     );


// //                     if(
// //                         razorpayOrder &&
// //                         razorpayOrder.status ===
// //                         "paid"
// //                     ){

// //                         let paymentId =
// //                             "";


// //                         // ==========================================
// //                         // GET PAYMENT ID
// //                         // ==========================================

// //                         try{

// //                             const payments =
// //                                 await razorpay
// //                                 .orders
// //                                 .fetchPayments(
// //                                     pendingOrder
// //                                     .razorpayOrderId
// //                                 );


// //                             if(
// //                                 payments &&
// //                                 Array.isArray(
// //                                     payments.items
// //                                 ) &&
// //                                 payments.items.length >
// //                                 0
// //                             ){

// //                                 const paidPayment =
// //                                     payments.items.find(
// //                                         function(payment){

// //                                             return (
// //                                                 payment.status ===
// //                                                 "captured"
// //                                             );

// //                                         }
// //                                     )
// //                                     ||
// //                                     payments.items[0];


// //                                 if(paidPayment){

// //                                     paymentId =
// //                                         paidPayment.id ||
// //                                         "";

// //                                 }

// //                             }

// //                         }
// //                         catch(paymentError){

// //                             console.error(
// //                                 "FETCH PAYMENT ERROR:",
// //                                 pendingOrder.orderId,
// //                                 paymentError.message
// //                             );

// //                         }


// //                         // ==========================================
// //                         // MARK ORDER PAID
// //                         // ==========================================

// //                         pendingOrder.paymentStatus =
// //                             "Paid";


// //                         if(
// //                             !pendingOrder.status ||
// //                             pendingOrder.status ===
// //                             "Pending"
// //                         ){

// //                             pendingOrder.status =
// //                                 "Pending";

// //                         }


// //                         if(paymentId){

// //                             pendingOrder
// //                             .razorpayPaymentId =
// //                                 paymentId;

// //                         }


// //                         await pendingOrder.save();


// //                         console.log(
// //                             "PAYMENT SYNCED:",
// //                             pendingOrder.orderId
// //                         );

// //                     }

// //                 }
// //                 catch(syncError){

// //                     console.error(
// //                         "RAZORPAY SYNC ERROR:",
// //                         pendingOrder.orderId,
// //                         syncError.message
// //                     );

// //                 }

// //             }


// //             // ==================================================
// //             // GET PAID ORDERS
// //             // ==================================================

// //             const orders =
// //                 await QuickOrder
// //                 .find({
// //                     paymentStatus:"Paid"
// //                 })
// //                 .sort({
// //                     createdAt:-1
// //                 })
// //                 .lean();


// //             const statuses = [

// //                 "Pending",

// //                 "Accepted",

// //                 "Processing",

// //                 "Ready",

// //                 "Packed",

// //                 "Out for Delivery",

// //                 "Delivered",

// //                 "Cancelled"

// //             ];


// //             return res.send(`

// // <!DOCTYPE html>

// // <html>

// // <head>

// // <meta
// // name="viewport"
// // content="width=device-width,initial-scale=1"
// // >

// // <title>
// // Quick Service Orders
// // </title>

// // <style>

// // *{
// // box-sizing:border-box;
// // font-family:Arial;
// // }

// // body{
// // margin:0;
// // background:#f1f5f9;
// // }

// // .container{
// // max-width:1100px;
// // margin:auto;
// // padding:20px;
// // }

// // .order{
// // background:white;
// // padding:20px;
// // margin-bottom:20px;
// // border-radius:18px;
// // box-shadow:
// // 0 8px 25px
// // rgba(0,0,0,.08);
// // }

// // .documents{
// // display:grid;
// // grid-template-columns:
// // repeat(
// // auto-fit,
// // minmax(180px,1fr)
// // );
// // gap:12px;
// // }

// // .document{
// // padding:10px;
// // border:1px solid #ddd;
// // border-radius:12px;
// // }

// // .document img{
// // width:100%;
// // height:190px;
// // object-fit:contain;
// // background:#f8fafc;
// // }

// // .download{
// // display:block;
// // margin-top:8px;
// // padding:10px;
// // border-radius:8px;
// // background:#2563eb;
// // color:white;
// // text-align:center;
// // text-decoration:none;
// // }

// // select,
// // button{
// // padding:10px;
// // border-radius:8px;
// // }

// // .status-btn{
// // background:#16a34a;
// // color:white;
// // border:0;
// // cursor:pointer;
// // }

// // .payment-paid{
// // color:#15803d;
// // font-weight:bold;
// // }

// // </style>

// // </head>


// // <body>

// // <div class="container">

// // <h1>
// // 🔔 Quick Service Orders
// // </h1>


// // <p>

// // <a href="/admin/quick-service/shop-status">
// // ← Shop Control
// // </a>

// // &nbsp;&nbsp;

// // <a href="/admin/quick-service/orders">
// // 🔄 Refresh Payments
// // </a>

// // </p>


// // ${
// // orders.length
// // ?

// // orders.map(
// // order=>`

// // <div class="order">

// // <h2>
// // #${order.orderId}
// // </h2>


// // <p>
// // <strong>
// // ${order.serviceName}
// // </strong>
// // </p>


// // <p>
// // 👤 ${order.customerName}
// // </p>


// // <p>
// // 📞
// // <a href="tel:${order.mobile}">
// // ${order.mobile}
// // </a>
// // </p>


// // <p>
// // 🏠 ${order.address}
// // </p>


// // <p>
// // 📍 Distance:
// // <strong>
// // ${Number(
// //     order.distanceFromShopKm ||
// //     0
// // ).toFixed(2)} KM
// // </strong>
// // </p>


// // <p>
// // 💰 Service:
// // <strong>
// // ₹${Number(
// //     order.serviceAmount ||
// //     0
// // ).toFixed(2)}
// // </strong>
// // </p>


// // <p>
// // 🚚 Delivery:
// // <strong>
// // ₹${Number(
// //     order.deliveryCharge ||
// //     0
// // ).toFixed(2)}
// // </strong>
// // </p>


// // <p>
// // 💰 Total:
// // <strong>
// // ₹${Number(
// //     order.totalAmount ||
// //     0
// // ).toFixed(2)}
// // </strong>
// // </p>


// // <p>
// // Payment:
// // <span class="payment-paid">
// // ${order.paymentStatus} ✅
// // </span>
// // </p>


// // <p>
// // Payment ID:
// // <strong>
// // ${order.razorpayPaymentId || "N/A"}
// // </strong>
// // </p>


// // <p>
// // Copies:
// // ${order.copies || 1}
// // </p>


// // <p>
// // Print:
// // ${order.printType || "Black & White"}
// // </p>


// // <h3>
// // 📄 Customer Documents
// // </h3>


// // <div class="documents">

// // ${
// // (order.documents || [])
// // .map(
// // (doc,index)=>`

// // <div class="document">

// // <strong>
// // ${doc.documentName}
// // </strong>

// // <br><br>

// // ${
// // doc.mimeType ===
// // "application/pdf"

// // ?

// // `
// // <div
// // style="
// // padding:50px 10px;
// // text-align:center;
// // background:#fee2e2;
// // "
// // >
// // 📄 PDF DOCUMENT
// // </div>
// // `

// // :

// // `
// // <img
// // src="/admin/quick-service/document/${order._id}/${index}"
// // onerror="this.style.display='none'"
// // >
// // `
// // }


// // <a
// // href="/admin/quick-service/document/${order._id}/${index}?download=1"
// // class="download"
// // >

// // ⬇ DOWNLOAD

// // </a>

// // </div>

// // `
// // ).join("")
// // }

// // </div>


// // <br>


// // <form
// // method="POST"
// // action="/admin/quick-service/order/${order._id}/status"
// // >

// // <select name="status">

// // ${
// // statuses.map(
// // status=>`

// // <option
// // value="${status}"
// // ${
// // order.status === status
// // ?
// // "selected"
// // :
// // ""
// // }
// // >
// // ${status}
// // </option>

// // `
// // ).join("")
// // }

// // </select>


// // <button
// // type="submit"
// // class="status-btn"
// // >
// // UPDATE STATUS
// // </button>

// // </form>


// // </div>

// // `
// // ).join("")

// // :

// // `
// // <p>
// // अभी कोई Paid Order नहीं है।
// // </p>
// // `
// // }

// // </div>

// // </body>

// // </html>

// //             `);

// //         }
// //         catch(error){

// //             console.error(
// //                 "QUICK ORDERS ERROR:",
// //                 error
// //             );


// //             return res
// //             .status(500)
// //             .send(
// //                 error.message
// //             );

// //         }

// //     }
// // );

// // // ======================================================
// // // UPDATE ORDER STATUS
// // // ======================================================

// // router.post(
// //     "/admin/quick-service/order/:id/status",

// //     async(req,res)=>{

// //         try{

// //             const allowedStatuses = [

// //                 "Pending",

// //                 "Accepted",

// //                 "Processing",

// //                 "Ready",

// //                 "Packed",

// //                 "Out for Delivery",

// //                 "Delivered",

// //                 "Cancelled"

// //             ];


// //             const status =
// //                 String(
// //                     req.body.status ||
// //                     ""
// //                 )
// //                 .trim();


// //             if(
// //                 !allowedStatuses
// //                 .includes(
// //                     status
// //                 )
// //             ){

// //                 return res
// //                 .status(400)
// //                 .send(
// //                     "Invalid Status"
// //                 );

// //             }


// //             await QuickOrder
// //                 .findByIdAndUpdate(

// //                     req.params.id,

// //                     {
// //                         status
// //                     }

// //                 );


// //             return res.redirect(
// //                 "/admin/quick-service/orders"
// //             );

// //         }
// //         catch(error){

// //             console.error(
// //                 error
// //             );


// //             res
// //             .status(500)
// //             .send(
// //                 error.message
// //             );

// //         }

// //     }
// // );


// // // ======================================================
// // // DOCUMENT VIEW / DOWNLOAD
// // // ======================================================

// // router.get(
// //     "/admin/quick-service/document/:orderId/:index",

// //     async(req,res)=>{

// //         try{

// //             const order =
// //                 await QuickOrder
// //                 .findById(
// //                     req.params.orderId
// //                 );


// //             if(!order){

// //                 return res
// //                 .status(404)
// //                 .send(
// //                     "Order Not Found"
// //                 );

// //             }


// //             const index =
// //                 Number(
// //                     req.params.index
// //                 );


// //             const document =
// //                 order.documents[
// //                     index
// //                 ];


// //             if(!document){

// //                 return res
// //                 .status(404)
// //                 .send(
// //                     "Document Not Found"
// //                 );

// //             }


// //             const filePath =
// //                 path.join(

// //                     uploadDirectory,

// //                     document.fileName

// //                 );


// //             if(
// //                 !fs.existsSync(
// //                     filePath
// //                 )
// //             ){

// //                 return res
// //                 .status(404)
// //                 .send(
// //                     "File Not Found"
// //                 );

// //             }


// //             if(
// //                 req.query.download ===
// //                 "1"
// //             ){

// //                 return res.download(

// //                     filePath,

// //                     document.originalName ||
// //                     document.fileName

// //                 );

// //             }


// //             return res.sendFile(
// //                 filePath
// //             );

// //         }
// //         catch(error){

// //             console.error(
// //                 error
// //             );


// //             res
// //             .status(500)
// //             .send(
// //                 error.message
// //             );

// //         }

// //     }
// // );

// // // ======================================================
// // // ADMIN MANAGE QUICK SERVICES
// // // GET /admin/quick-service/services
// // // ======================================================

// // router.get(
// //     "/admin/quick-service/services",
// //     async (req, res) => {

// //         try {

// //             const services =
// //                 await QuickService
// //                     .find({})
// //                     .sort({
// //                         createdAt: -1
// //                     })
// //                     .lean();


// //             return res.send(`

// // <!DOCTYPE html>

// // <html lang="en">

// // <head>

// // <meta charset="UTF-8">

// // <meta
// //     name="viewport"
// //     content="width=device-width, initial-scale=1.0"
// // >

// // <title>
// // Manage Quick Services
// // </title>


// // <style>

// // *{
// //     box-sizing:border-box;
// // }

// // body{
// //     margin:0;
// //     background:#f1f5f9;
// //     font-family:Arial,sans-serif;
// //     color:#0f172a;
// // }

// // .header{
// //     padding:20px;
// //     color:white;
// //     text-align:center;
// //     background:
// //         linear-gradient(
// //             135deg,
// //             #065f46,
// //             #16a34a
// //         );
// // }

// // .container{
// //     width:100%;
// //     max-width:900px;
// //     margin:auto;
// //     padding:18px;
// // }

// // .nav{
// //     display:grid;
// //     grid-template-columns:
// //         repeat(
// //             auto-fit,
// //             minmax(150px,1fr)
// //         );
// //     gap:10px;
// //     margin-bottom:18px;
// // }

// // .nav a{
// //     padding:12px;
// //     border-radius:10px;
// //     background:#2563eb;
// //     color:white;
// //     text-align:center;
// //     text-decoration:none;
// //     font-weight:800;
// // }

// // .card{
// //     padding:20px;
// //     margin-bottom:18px;
// //     border-radius:18px;
// //     background:white;
// //     box-shadow:
// //         0 8px 25px
// //         rgba(15,23,42,.08);
// // }

// // label{
// //     display:block;
// //     margin-top:14px;
// //     margin-bottom:5px;
// //     font-weight:800;
// // }

// // input,
// // select,
// // textarea{
// //     width:100%;
// //     padding:12px;
// //     border:
// //         1px solid
// //         #cbd5e1;
// //     border-radius:9px;
// //     font-size:15px;
// // }

// // textarea{
// //     min-height:80px;
// // }

// // .requirements-box{
// //     margin-top:15px;
// //     padding:15px;
// //     border-radius:12px;
// //     background:#f8fafc;
// // }

// // .requirement-row{
// //     display:flex;
// //     gap:8px;
// //     margin-top:8px;
// // }

// // .requirement-row input{
// //     flex:1;
// // }

// // .remove-btn{
// //     width:45px;
// //     border:0;
// //     border-radius:8px;
// //     background:#dc2626;
// //     color:white;
// //     cursor:pointer;
// // }

// // .add-doc-btn{
// //     margin-top:10px;
// //     padding:10px 14px;
// //     border:0;
// //     border-radius:8px;
// //     background:#0ea5e9;
// //     color:white;
// //     font-weight:800;
// //     cursor:pointer;
// // }

// // .save-btn{
// //     width:100%;
// //     margin-top:18px;
// //     padding:14px;
// //     border:0;
// //     border-radius:10px;
// //     background:#16a34a;
// //     color:white;
// //     font-weight:900;
// //     font-size:16px;
// //     cursor:pointer;
// // }

// // .service{
// //     padding:16px;
// //     margin-bottom:12px;
// //     border:
// //         1px solid
// //         #e2e8f0;
// //     border-radius:13px;
// // }

// // .service-head{
// //     display:flex;
// //     justify-content:space-between;
// //     align-items:center;
// //     gap:10px;
// // }

// // .service-name{
// //     font-size:18px;
// //     font-weight:900;
// // }

// // .active{
// //     color:#15803d;
// //     font-weight:900;
// // }

// // .inactive{
// //     color:#dc2626;
// //     font-weight:900;
// // }

// // .actions{
// //     display:flex;
// //     flex-wrap:wrap;
// //     gap:8px;
// //     margin-top:12px;
// // }

// // .actions a{
// //     padding:9px 12px;
// //     border-radius:8px;
// //     text-decoration:none;
// //     color:white;
// //     font-weight:800;
// //     font-size:13px;
// // }

// // .edit{
// //     background:#2563eb;
// // }

// // .toggle{
// //     background:#f59e0b;
// // }

// // .delete{
// //     background:#dc2626;
// // }

// // .documents{
// //     margin-top:8px;
// //     color:#475569;
// //     font-size:13px;
// //     line-height:1.7;
// // }

// // </style>

// // </head>


// // <body>


// // <header class="header">

// // <h1>
// // ⚡ Manage Quick Services
// // </h1>

// // <p>
// // Service, Price और Required Documents Control करें
// // </p>

// // </header>


// // <main class="container">


// // <div class="nav">

// // <a href="/admin/quick-service/shop-status">
// // 🏪 SHOP CONTROL
// // </a>

// // <a href="/admin/quick-service/orders">
// // 🔔 ORDERS
// // </a>

// // <a href="/quick-service">
// // 👤 CUSTOMER PAGE
// // </a>

// // </div>


// // <!-- ======================================= -->
// // <!-- ADD SERVICE -->
// // <!-- ======================================= -->

// // <section class="card">

// // <h2>
// // ➕ Add New Service
// // </h2>


// // <form
// //     method="POST"
// //     action="/admin/quick-service/services"
// // >


// // <label>
// // Service Name *
// // </label>

// // <input
// //     type="text"
// //     name="name"
// //     placeholder="Example: New PAN Card"
// //     required
// // >


// // <label>
// // Service Type *
// // </label>

// // <select
// //     name="type"
// //     id="serviceType"
// // >

// // <option value="normal">
// // Normal Document Service
// // </option>

// // <option value="photocopy">
// // Photo Copy
// // </option>

// // </select>


// // <label>
// // Price ₹ *
// // </label>

// // <input
// //     type="number"
// //     name="price"
// //     min="0"
// //     step="0.01"
// //     placeholder="150"
// //     required
// // >


// // <label>
// // Description
// // </label>

// // <textarea
// //     name="description"
// //     placeholder="Service details"
// // ></textarea>


// // <div
// //     class="requirements-box"
// //     id="requirementsBox"
// // >

// // <strong>
// // 📄 Required Documents
// // </strong>

// // <div id="requirementsList"></div>


// // <button
// //     type="button"
// //     class="add-doc-btn"
// //     onclick="addRequirement()"
// // >

// // + ADD REQUIRED DOCUMENT

// // </button>

// // </div>


// // <button
// //     type="submit"
// //     class="save-btn"
// // >

// // ✅ SAVE SERVICE

// // </button>


// // </form>

// // </section>


// // <!-- ======================================= -->
// // <!-- EXISTING SERVICES -->
// // <!-- ======================================= -->

// // <section class="card">

// // <h2>
// // 🛠 Existing Services
// // </h2>


// // ${
// //     services.length

// //     ?

// //     services.map(
// //         function(service){

// //             const requirements =
// //                 Array.isArray(
// //                     service.requirements
// //                 )
// //                 ? service.requirements
// //                 : [];


// //             return `

// // <div class="service">

// // <div class="service-head">

// // <div>

// // <div class="service-name">
// // ${service.name}
// // </div>

// // <div>
// // ₹${Number(service.price || 0).toFixed(2)}
// // </div>

// // </div>


// // <div
// // class="${
// //     service.active
// //         ? "active"
// //         : "inactive"
// // }"
// // >

// // ${
// //     service.active
// //         ? "● ACTIVE"
// //         : "● OFF"
// // }

// // </div>

// // </div>


// // <div class="documents">

// // <strong>
// // Type:
// // </strong>

// // ${
// //     service.type === "photocopy"
// //         ? "Photo Copy"
// //         : "Normal"
// // }

// // <br>


// // <strong>
// // Required Documents:
// // </strong>

// // ${
// //     requirements.length

// //     ?

// //     requirements
// //         .map(
// //             function(item){

// //                 return (
// //                     "• " +
// //                     item.name
// //                 );

// //             }
// //         )
// //         .join("<br>")

// //     :

// //     "No required document"

// // }

// // </div>


// // <div class="actions">

// // <a
// //     class="edit"
// //     href="/admin/quick-service/services/edit/${service._id}"
// // >
// // ✏ EDIT
// // </a>


// // <a
// //     class="toggle"
// //     href="/admin/quick-service/services/toggle/${service._id}"
// // >
// // ${
// //     service.active
// //         ? "🔴 TURN OFF"
// //         : "🟢 TURN ON"
// // }
// // </a>


// // <a
// //     class="delete"
// //     href="/admin/quick-service/services/delete/${service._id}"
// //     onclick="return confirm('Delete this service?')"
// // >
// // 🗑 DELETE
// // </a>

// // </div>


// // </div>

// //             `;

// //         }
// //     ).join("")

// //     :

// //     `
// //     <p>
// //         अभी कोई Service Add नहीं है।
// //     </p>
// //     `
// // }


// // </section>


// // </main>


// // <script>

// // let requirementIndex =
// //     0;


// // function addRequirement(){

// //     const list =
// //         document.getElementById(
// //             "requirementsList"
// //         );


// //     const row =
// //         document.createElement(
// //             "div"
// //         );


// //     row.className =
// //         "requirement-row";


// //     row.innerHTML =

// //         '<input ' +
// //         'type="text" ' +
// //         'name="requirements[]" ' +
// //         'placeholder="Example: Aadhaar Card" ' +
// //         'required' +
// //         '>' +

// //         '<button ' +
// //         'type="button" ' +
// //         'class="remove-btn" ' +
// //         'onclick="this.parentElement.remove()"' +
// //         '>' +

// //         '✕' +

// //         '</button>';


// //     list.appendChild(
// //         row
// //     );


// //     requirementIndex++;

// // }


// // const serviceType =
// //     document.getElementById(
// //         "serviceType"
// //     );


// // const requirementsBox =
// //     document.getElementById(
// //         "requirementsBox"
// //     );


// // function updateRequirementBox(){

// //     if(
// //         serviceType.value ===
// //         "photocopy"
// //     ){

// //         requirementsBox.style.display =
// //             "none";

// //     }
// //     else{

// //         requirementsBox.style.display =
// //             "block";

// //     }

// // }


// // serviceType.addEventListener(
// //     "change",
// //     updateRequirementBox
// // );


// // updateRequirementBox();

// // </script>


// // </body>

// // </html>

// //             `);

// //         }
// //         catch(error){

// //             console.error(
// //                 "MANAGE QUICK SERVICES ERROR:",
// //                 error
// //             );


// //             return res
// //                 .status(500)
// //                 .send(
// //                     error.message
// //                 );

// //         }

// //     }
// // );


// // // ======================================================
// // // ADD QUICK SERVICE
// // // POST /admin/quick-service/services
// // // ======================================================

// // router.post(
// //     "/admin/quick-service/services",
// //     async (req, res) => {

// //         try {

// //             const name =
// //                 String(
// //                     req.body.name ||
// //                     ""
// //                 ).trim();


// //             const type =
// //                 req.body.type ===
// //                 "photocopy"
// //                     ? "photocopy"
// //                     : "normal";


// //             const price =
// //                 Math.max(
// //                     0,
// //                     Number(
// //                         req.body.price ||
// //                         0
// //                     )
// //                 );


// //             if(!name){

// //                 return res
// //                     .status(400)
// //                     .send(
// //                         "Service Name Required"
// //                     );

// //             }


// //             let requirements =
// //                 req.body[
// //                     "requirements[]"
// //                 ]
// //                 ||
// //                 req.body.requirements
// //                 ||
// //                 [];


// //             if(
// //                 !Array.isArray(
// //                     requirements
// //                 )
// //             ){

// //                 requirements =
// //                     [requirements];

// //             }


// //             requirements =
// //                 requirements

// //                 .map(
// //                     function(item){

// //                         return String(
// //                             item ||
// //                             ""
// //                         ).trim();

// //                     }
// //                 )

// //                 .filter(Boolean)

// //                 .map(
// //                     function(item){

// //                         return {

// //                             name:
// //                                 item,

// //                             required:
// //                                 true

// //                         };

// //                     }
// //                 );


// //             if(
// //                 type ===
// //                 "photocopy"
// //             ){

// //                 requirements =
// //                     [];

// //             }


// //             await QuickService.create({

// //                 name,

// //                 type,

// //                 price,

// //                 description:
// //                     String(
// //                         req.body.description ||
// //                         ""
// //                     ).trim(),

// //                 active:
// //                     true,

// //                 requirements

// //             });


// //             return res.redirect(
// //                 "/admin/quick-service/services"
// //             );

// //         }
// //         catch(error){

// //             console.error(
// //                 "ADD QUICK SERVICE ERROR:",
// //                 error
// //             );


// //             return res
// //                 .status(500)
// //                 .send(
// //                     error.message
// //                 );

// //         }

// //     }
// // );


// // // ======================================================
// // // TOGGLE SERVICE
// // // ======================================================

// // router.get(
// //     "/admin/quick-service/services/toggle/:id",
// //     async (req, res) => {

// //         try {

// //             const service =
// //                 await QuickService.findById(
// //                     req.params.id
// //                 );


// //             if(!service){

// //                 return res
// //                     .status(404)
// //                     .send(
// //                         "Service Not Found"
// //                     );

// //             }


// //             service.active =
// //                 !service.active;


// //             await service.save();


// //             return res.redirect(
// //                 "/admin/quick-service/services"
// //             );

// //         }
// //         catch(error){

// //             console.error(
// //                 "TOGGLE QUICK SERVICE ERROR:",
// //                 error
// //             );


// //             return res
// //                 .status(500)
// //                 .send(
// //                     error.message
// //                 );

// //         }

// //     }
// // );


// // // ======================================================
// // // DELETE SERVICE
// // // ======================================================

// // router.get(
// //     "/admin/quick-service/services/delete/:id",
// //     async (req, res) => {

// //         try {

// //             await QuickService
// //                 .findByIdAndDelete(
// //                     req.params.id
// //                 );


// //             return res.redirect(
// //                 "/admin/quick-service/services"
// //             );

// //         }
// //         catch(error){

// //             console.error(
// //                 "DELETE QUICK SERVICE ERROR:",
// //                 error
// //             );


// //             return res
// //                 .status(500)
// //                 .send(
// //                     error.message
// //                 );

// //         }

// //     }
// // );


// // // ======================================================
// // // EDIT SERVICE PAGE
// // // ======================================================

// // router.get(
// //     "/admin/quick-service/services/edit/:id",
// //     async (req, res) => {

// //         try {

// //             const service =
// //                 await QuickService
// //                     .findById(
// //                         req.params.id
// //                     )
// //                     .lean();


// //             if(!service){

// //                 return res
// //                     .status(404)
// //                     .send(
// //                         "Service Not Found"
// //                     );

// //             }


// //             const requirements =
// //                 Array.isArray(
// //                     service.requirements
// //                 )
// //                 ? service.requirements
// //                 : [];


// //             return res.send(`

// // <!DOCTYPE html>

// // <html>

// // <head>

// // <meta
// // name="viewport"
// // content="width=device-width,initial-scale=1"
// // >

// // <title>
// // Edit Service
// // </title>

// // <style>

// // *{
// // box-sizing:border-box;
// // font-family:Arial;
// // }

// // body{
// // margin:0;
// // padding:20px;
// // background:#f1f5f9;
// // }

// // .card{
// // max-width:600px;
// // margin:auto;
// // padding:22px;
// // background:white;
// // border-radius:18px;
// // }

// // label{
// // display:block;
// // margin-top:14px;
// // margin-bottom:5px;
// // font-weight:bold;
// // }

// // input,
// // select,
// // textarea{
// // width:100%;
// // padding:12px;
// // border:1px solid #cbd5e1;
// // border-radius:9px;
// // }

// // textarea{
// // min-height:80px;
// // }

// // .req{
// // display:flex;
// // gap:8px;
// // margin-top:8px;
// // }

// // .req button{
// // width:45px;
// // border:0;
// // border-radius:8px;
// // background:#dc2626;
// // color:white;
// // }

// // .add{
// // margin-top:10px;
// // padding:10px;
// // border:0;
// // border-radius:8px;
// // background:#2563eb;
// // color:white;
// // }

// // .save{
// // width:100%;
// // margin-top:18px;
// // padding:14px;
// // border:0;
// // border-radius:10px;
// // background:#16a34a;
// // color:white;
// // font-weight:bold;
// // }

// // </style>

// // </head>


// // <body>


// // <div class="card">

// // <h2>
// // ✏ Edit Service
// // </h2>


// // <form
// // method="POST"
// // action="/admin/quick-service/services/edit/${service._id}"
// // >


// // <label>
// // Service Name
// // </label>

// // <input
// // type="text"
// // name="name"
// // value="${service.name || ""}"
// // required
// // >


// // <label>
// // Service Type
// // </label>

// // <select
// // name="type"
// // id="serviceType"
// // >

// // <option
// // value="normal"
// // ${
// // service.type === "normal"
// // ?
// // "selected"
// // :
// // ""
// // }
// // >
// // Normal
// // </option>

// // <option
// // value="photocopy"
// // ${
// // service.type === "photocopy"
// // ?
// // "selected"
// // :
// // ""
// // }
// // >
// // Photo Copy
// // </option>

// // </select>


// // <label>
// // Price ₹
// // </label>

// // <input
// // type="number"
// // name="price"
// // step="0.01"
// // min="0"
// // value="${Number(service.price || 0)}"
// // required
// // >


// // <label>
// // Description
// // </label>

// // <textarea
// // name="description"
// // >${service.description || ""}</textarea>


// // <div id="requirementsBox">

// // <label>
// // Required Documents
// // </label>

// // <div id="requirements">

// // ${
// // requirements
// // .map(
// // function(item){

// // return `

// // <div class="req">

// // <input
// // type="text"
// // name="requirements[]"
// // value="${item.name || ""}"
// // required
// // >

// // <button
// // type="button"
// // onclick="this.parentElement.remove()"
// // >
// // ✕
// // </button>

// // </div>

// // `;

// // }
// // )
// // .join("")
// // }

// // </div>


// // <button
// // type="button"
// // class="add"
// // onclick="addRequirement()"
// // >
// // + ADD DOCUMENT
// // </button>

// // </div>


// // <button
// // class="save"
// // >
// // ✅ UPDATE SERVICE
// // </button>

// // </form>


// // <br>

// // <a href="/admin/quick-service/services">
// // ← Back
// // </a>


// // </div>


// // <script>

// // const type =
// // document.getElementById(
// //     "serviceType"
// // );


// // const box =
// // document.getElementById(
// //     "requirementsBox"
// // );


// // function updateBox(){

// //     box.style.display =

// //         type.value ===
// //         "photocopy"

// //         ?

// //         "none"

// //         :

// //         "block";

// // }


// // type.addEventListener(
// //     "change",
// //     updateBox
// // );


// // updateBox();


// // function addRequirement(){

// //     const list =
// //         document.getElementById(
// //             "requirements"
// //         );


// //     const row =
// //         document.createElement(
// //             "div"
// //         );


// //     row.className =
// //         "req";


// //     row.innerHTML =

// //         '<input ' +
// //         'type="text" ' +
// //         'name="requirements[]" ' +
// //         'placeholder="Document Name" ' +
// //         'required' +
// //         '>' +

// //         '<button ' +
// //         'type="button" ' +
// //         'onclick="this.parentElement.remove()"' +
// //         '>' +

// //         '✕' +

// //         '</button>';


// //     list.appendChild(
// //         row
// //     );

// // }

// // </script>


// // </body>

// // </html>

// //             `);

// //         }
// //         catch(error){

// //             console.error(
// //                 "EDIT SERVICE PAGE ERROR:",
// //                 error
// //             );


// //             return res
// //                 .status(500)
// //                 .send(
// //                     error.message
// //                 );

// //         }

// //     }
// // );


// // // ======================================================
// // // UPDATE SERVICE
// // // ======================================================

// // router.post(
// //     "/admin/quick-service/services/edit/:id",
// //     async (req, res) => {

// //         try {

// //             let requirements =
// //                 req.body[
// //                     "requirements[]"
// //                 ]
// //                 ||
// //                 req.body.requirements
// //                 ||
// //                 [];


// //             if(
// //                 !Array.isArray(
// //                     requirements
// //                 )
// //             ){

// //                 requirements =
// //                     [requirements];

// //             }


// //             requirements =
// //                 requirements

// //                 .map(
// //                     function(item){

// //                         return String(
// //                             item ||
// //                             ""
// //                         ).trim();

// //                     }
// //                 )

// //                 .filter(Boolean)

// //                 .map(
// //                     function(item){

// //                         return {

// //                             name:
// //                                 item,

// //                             required:
// //                                 true

// //                         };

// //                     }
// //                 );


// //             const type =
// //                 req.body.type ===
// //                 "photocopy"

// //                 ?

// //                 "photocopy"

// //                 :

// //                 "normal";


// //             if(
// //                 type ===
// //                 "photocopy"
// //             ){

// //                 requirements =
// //                     [];

// //             }


// //             await QuickService
// //                 .findByIdAndUpdate(

// //                     req.params.id,

// //                     {

// //                         name:
// //                             String(
// //                                 req.body.name ||
// //                                 ""
// //                             ).trim(),

// //                         type,

// //                         price:
// //                             Math.max(
// //                                 0,
// //                                 Number(
// //                                     req.body.price ||
// //                                     0
// //                                 )
// //                             ),

// //                         description:
// //                             String(
// //                                 req.body.description ||
// //                                 ""
// //                             ).trim(),

// //                         requirements

// //                     }

// //                 );


// //             return res.redirect(
// //                 "/admin/quick-service/services"
// //             );

// //         }
// //         catch(error){

// //             console.error(
// //                 "UPDATE QUICK SERVICE ERROR:",
// //                 error
// //             );


// //             return res
// //                 .status(500)
// //                 .send(
// //                     error.message
// //                 );

// //         }

// //     }
// // );


// // module.exports =
// // router;




// require("dotenv").config();

// const express = require("express");
// const router = express.Router();

// const path = require("path");
// const fs = require("fs");
// const multer = require("multer");
// const crypto = require("crypto");
// const Razorpay = require("razorpay");

// const QuickService =
//     require("../models/QuickService");

// const QuickOrder =
//     require("../models/QuickOrder");

// const QuickShopSetting =
//     require("../models/QuickShopSetting");

// // ======================================================
// // RAZORPAY
// // ======================================================

// const razorpay =
// new Razorpay({

//     key_id:
//         process.env.RAZORPAY_KEY_ID,

//     key_secret:
//         process.env.RAZORPAY_KEY_SECRET

// });

// // ======================================================
// // PRIVATE DOCUMENT FOLDER
// // ======================================================

// const uploadDirectory =
// path.join(
//     process.cwd(),
//     "storage",
//     "quick-service"
// );

// if(
//     !fs.existsSync(
//         uploadDirectory
//     )
// ){

//     fs.mkdirSync(
//         uploadDirectory,
//         {
//             recursive:true
//         }
//     );

// }

// // ======================================================
// // MULTER
// // ======================================================

// const storage =
// multer.diskStorage({

//     destination:function(
//         req,
//         file,
//         cb
//     ){

//         cb(
//             null,
//             uploadDirectory
//         );

//     },

//     filename:function(
//         req,
//         file,
//         cb
//     ){

//         const extension =
//             path.extname(
//                 file.originalname
//             ).toLowerCase();

//         const fileName =
//             "quick-" +
//             Date.now() +
//             "-" +
//             Math.round(
//                 Math.random() *
//                 1e9
//             ) +
//             extension;

//         cb(
//             null,
//             fileName
//         );

//     }

// });

// const upload =
// multer({

//     storage,

//     limits:{
//         fileSize:
//             8 * 1024 * 1024,

//         files:25
//     },

//     fileFilter:function(
//         req,
//         file,
//         cb
//     ){

//         const allowed = [

//             "image/jpeg",
//             "image/jpg",
//             "image/png",
//             "image/webp",
//             "application/pdf"

//         ];

//         if(
//             !allowed.includes(
//                 file.mimetype
//             )
//         ){

//             return cb(
//                 new Error(
//                     "Only JPG, PNG, WEBP and PDF allowed."
//                 )
//             );

//         }

//         cb(
//             null,
//             true
//         );

//     }

// });

// // ======================================================
// // GET SHOP SETTING
// // ======================================================

// async function getQuickShopSetting(){

//     let setting =
//         await QuickShopSetting
//             .findOne();

//     if(!setting){

//         setting =
//             await QuickShopSetting
//                 .create({

//                     shopName:
//                         "GLOBAL QUICK SERVICES",

//                     isOpen:
//                         false,

//                     deliveryRadiusKm:
//                         2,

//                     deliveryCharge:
//                         0

//                 });

//     }

//     return setting;

// }

// // ======================================================
// // SAFE NUMBER
// // ======================================================

// function safeNumber(
//     value,
//     defaultValue = 0
// ){

//     const number =
//         Number(value);

//     return Number.isFinite(
//         number
//     )
//         ? number
//         : defaultValue;

// }

// // ======================================================
// // VALID GPS
// // ======================================================

// function validCoordinates(
//     latitude,
//     longitude
// ){

//     if(
//         latitude === null ||
//         latitude === undefined ||
//         latitude === "" ||

//         longitude === null ||
//         longitude === undefined ||
//         longitude === ""
//     ){

//         return false;

//     }

//     const lat =
//         Number(latitude);

//     const lng =
//         Number(longitude);

//     return (

//         Number.isFinite(lat) &&

//         Number.isFinite(lng) &&

//         lat >= -90 &&
//         lat <= 90 &&

//         lng >= -180 &&
//         lng <= 180

//     );

// }

// // ======================================================
// // DISTANCE
// // ======================================================

// function calculateDistanceKm(
//     latitude1,
//     longitude1,
//     latitude2,
//     longitude2
// ){

//     const earthRadiusKm =
//         6371;

//     const toRadians =
//         value =>
//             value *
//             Math.PI /
//             180;

//     const latitudeDifference =
//         toRadians(
//             latitude2 -
//             latitude1
//         );

//     const longitudeDifference =
//         toRadians(
//             longitude2 -
//             longitude1
//         );

//     const calculation =

//         Math.sin(
//             latitudeDifference /
//             2
//         ) ** 2

//         +

//         Math.cos(
//             toRadians(
//                 latitude1
//             )
//         )

//         *

//         Math.cos(
//             toRadians(
//                 latitude2
//             )
//         )

//         *

//         Math.sin(
//             longitudeDifference /
//             2
//         ) ** 2;

//     return (

//         earthRadiusKm *

//         2 *

//         Math.atan2(

//             Math.sqrt(
//                 calculation
//             ),

//             Math.sqrt(
//                 1 -
//                 calculation
//             )

//         )

//     );

// }

// // ======================================================
// // ORDER NUMBER
// // ======================================================

// async function generateOrderNumber(){

//     let number =
//         1001;

//     const lastOrder =
//         await QuickOrder
//             .findOne()
//             .sort({
//                 createdAt:-1
//             });

//     if(
//         lastOrder &&
//         lastOrder.orderId
//     ){

//         const oldNumber =
//             Number(

//                 String(
//                     lastOrder.orderId
//                 )
//                 .replace(
//                     "GQ",
//                     ""
//                 )

//             );

//         if(
//             Number.isFinite(
//                 oldNumber
//             )
//         ){

//             number =
//                 oldNumber +
//                 1;

//         }

//     }

//     return (
//         "GQ" +
//         number
//     );

// }

// // ======================================================
// // CUSTOMER PAGE
// // GET /quick-service
// // ======================================================

// router.get(
//     "/quick-service",

//     async(req,res)=>{

//         try{

//             const setting =
//                 await getQuickShopSetting();

//             const services =
//                 await QuickService
//                     .find({
//                         active:true
//                     })
//                     .sort({
//                         createdAt:-1
//                     })
//                     .lean();

//             return res.send(`

// <!DOCTYPE html>

// <html>

// <head>

// <meta
// charset="UTF-8"
// >

// <meta
// name="viewport"
// content="width=device-width,initial-scale=1"
// >

// <title>
// GLOBAL QUICK SERVICES
// </title>

// <script
// src="https://checkout.razorpay.com/v1/checkout.js"
// ></script>

// <style>

// *{
// box-sizing:border-box;
// font-family:Arial,sans-serif;
// }

// body{
// margin:0;
// background:#f1f5f9;
// color:#0f172a;
// }

// .header{
// padding:22px;
// text-align:center;
// color:white;
// background:
// linear-gradient(
// 135deg,
// #0d604b,
// #16a34a
// );
// }

// .container{
// max-width:650px;
// margin:auto;
// padding:15px;
// }

// .card{
// background:white;
// padding:20px;
// border-radius:18px;
// box-shadow:
// 0 10px 30px
// rgba(0,0,0,.10);
// }

// .status{
// padding:13px;
// border-radius:12px;
// text-align:center;
// font-weight:bold;
// margin-bottom:18px;
// }

// .status.open{
// background:#dcfce7;
// color:#166534;
// }

// .status.closed{
// background:#fee2e2;
// color:#991b1b;
// }

// label{
// display:block;
// margin-top:15px;
// margin-bottom:6px;
// font-weight:bold;
// }

// input,
// select,
// textarea{
// width:100%;
// padding:13px;
// border:1px solid #cbd5e1;
// border-radius:10px;
// font-size:15px;
// }

// textarea{
// min-height:90px;
// }

// .document-box{
// margin-top:15px;
// padding:15px;
// background:#f8fafc;
// border-radius:13px;
// border:1px solid #dbeafe;
// }

// .location-box{
// margin-top:15px;
// padding:13px;
// border-radius:10px;
// background:#fef3c7;
// color:#92400e;
// font-weight:bold;
// }

// .location-box.success{
// background:#dcfce7;
// color:#166534;
// }

// .location-box.error{
// background:#fee2e2;
// color:#991b1b;
// }

// .location-btn{
// width:100%;
// margin-top:10px;
// padding:13px;
// border:0;
// border-radius:10px;
// background:#f59e0b;
// color:white;
// font-weight:bold;
// }

// .total{
// margin-top:20px;
// padding:15px;
// background:#eff6ff;
// border-radius:12px;
// line-height:1.9;
// }

// .pay-btn{
// width:100%;
// margin-top:20px;
// padding:15px;
// border:0;
// border-radius:10px;
// background:#16a34a;
// color:white;
// font-size:16px;
// font-weight:bold;
// }

// .pay-btn:disabled{
// background:#94a3b8;
// }

// .hidden{
// display:none;
// }

// </style>

// </head>

// <body>

// <div class="header">

// <h2>
// ⚡ GLOBAL QUICK SERVICES
// </h2>

// <p>
// Fast Document Service at Your Doorstep
// </p>

// </div>

// <div class="container">

// <div class="card">

// <div
// class="status ${
// setting.isOpen
// ?
// "open"
// :
// "closed"
// }"
// >

// ${
// setting.isOpen
// ?
// "🟢 SHOP OPEN"
// :
// "🔴 SHOP CLOSED"
// }

// </div>

// <label>
// Select Service
// </label>

// <select
// id="service"
// >

// <option value="">
// Select Service
// </option>

// ${
// services.map(
// service=>`

// <option
// value="${service._id}"
// data-type="${service.type}"
// data-price="${service.price}"
// data-requirements='${JSON.stringify(service.requirements || [])}'
// >

// ${service.name}
// - ₹${service.price}

// </option>

// `
// ).join("")
// }

// </select>

// <div
// id="documentsArea"
// ></div>

// <div
// id="photoCopyOptions"
// class="hidden"
// >

// <label>
// Print Type
// </label>

// <select id="printType">

// <option>
// Black & White
// </option>

// <option>
// Color
// </option>

// </select>

// <label>
// Copies
// </label>

// <input
// type="number"
// id="copies"
// value="1"
// min="1"
// >

// </div>

// <label>
// Customer Name
// </label>

// <input
// type="text"
// id="customerName"
// >

// <label>
// Mobile Number
// </label>

// <input
// type="tel"
// id="mobile"
// maxlength="10"
// >

// <label>
// Delivery Address
// </label>

// <textarea
// id="address"
// ></textarea>

// <div
// id="locationStatus"
// class="location-box"
// >

// 📍 Location check करें

// </div>

// <button
// type="button"
// class="location-btn"
// id="checkLocationButton"
// >
// 📍 CHECK MY LOCATION
// </button>

// <div class="total">

// Service:
// ₹<span id="serviceAmount">0</span>

// <br>

// Delivery:
// ₹0
// <br>

// <strong>
// Total:
// ₹<span id="totalAmount">0</span>
// </strong>

// </div>

// <button
// type="button"
// class="pay-btn"
// id="orderButton"
// onclick="placeOrder()"
// disabled
// >

// CHECK LOCATION FIRST

// </button>

// </div>

// </div>

// <script>

// const SHOP_OPEN =
// ${setting.isOpen ? "true" : "false"};

// const SHOP_LATITUDE =
// ${
// validCoordinates(
// setting.shopLocation?.latitude,
// setting.shopLocation?.longitude
// )
// ?
// Number(
// setting.shopLocation.latitude
// )
// :
// "null"
// };

// const SHOP_LONGITUDE =
// ${
// validCoordinates(
// setting.shopLocation?.latitude,
// setting.shopLocation?.longitude
// )
// ?
// Number(
// setting.shopLocation.longitude
// )
// :
// "null"
// };

// const DELIVERY_RADIUS =
// ${safeNumber(
// setting.deliveryRadiusKm,
// 2
// )};

// const DELIVERY_CHARGE =0;

// let customerLatitude =
// null;

// let customerLongitude =
// null;

// let customerAccuracy =
// null;

// let customerDistance =
// null;

// let locationAllowed =
// false;

// const serviceSelect =
// document.getElementById(
//     "service"
// );

// // PAGE ADD / REMOVE + LIVE PRICE
// function addPhotocopyPage(){
//   const box = document.getElementById("photocopyPageRows");
//   if(!box) return;
//   if(box.children.length >= 25){ alert("Maximum 25 pages allowed"); return; }
//   const row = document.createElement("div");
//   row.className = "page-upload-row";
//   row.style.cssText = "display:flex;align-items:center;gap:8px;margin:10px 0;padding:9px;border:1px solid #ddd;border-radius:10px";
//   const label = document.createElement("span");
//   label.className = "page-label";
//   const input = document.createElement("input");
//   input.type = "file";
//   input.name = "photocopyPages";
//   input.accept = "image/jpeg,image/png,image/webp";
//   input.required = true;
//   input.style.cssText = "flex:1;min-width:0";
//   const remove = document.createElement("button");
//   remove.type = "button";
//   remove.textContent = "✕";
//   remove.style.cssText = "padding:10px;background:#dc2626;border:0;border-radius:8px;color:white;cursor:pointer";
//   remove.onclick = function(){
//     if(box.children.length <= 1){input.value = "";} else {row.remove();}
//     updateTotal();
//   };
//   row.append(label,input,remove);
//   box.appendChild(row);
//   updateTotal();
// }
// function updateTotal(){
//   const option = serviceSelect.options[serviceSelect.selectedIndex];
//   const type = option?.dataset?.type || "";
//   let serviceAmount = Number(option?.dataset?.price || 0);
//   if(type === "photocopy"){
//     const rows = [...document.querySelectorAll("#photocopyPageRows .page-upload-row")];
//     const copies = Math.max(1,Math.floor(Number(document.getElementById("copies")?.value || 1)));
//     const rate = document.getElementById("printType")?.value === "Color" ? 10 : 5;
//     serviceAmount = rows.length * copies * rate;
//     rows.forEach((row,i)=>{
//       row.querySelector(".page-label").textContent = "Page " + (i+1);
//       row.querySelector("button").style.display = rows.length > 1 ? "block" : "none";
//     });
//     const hint = document.getElementById("pageCountText");
//     if(hint) hint.textContent = rows.length + " Pages × " + copies + " Copies × ₹" + rate + " = ₹" + serviceAmount;
//   }
//   document.getElementById("serviceAmount").textContent = serviceAmount.toFixed(2);
//   document.getElementById("totalAmount").textContent = (serviceAmount + DELIVERY_CHARGE).toFixed(2);
// }
// document.getElementById("printType").addEventListener("change",updateTotal);
// document.getElementById("copies").addEventListener("input",updateTotal);

// serviceSelect.addEventListener(
// "change",
// function(){

//     const option =
//         this.options[
//             this.selectedIndex
//         ];

//     const documentsArea =
//         document.getElementById(
//             "documentsArea"
//         );

//     const photoCopyOptions =
//         document.getElementById(
//             "photoCopyOptions"
//         );

//     documentsArea.innerHTML =
//         "";

//     photoCopyOptions
//         .classList
//         .add(
//             "hidden"
//         );

//     if(!option.value){

//         document.getElementById(
//             "serviceAmount"
//         ).textContent =
//             "0";

//         document.getElementById(
//             "totalAmount"
//         ).textContent =
//             "0";

//         return;

//     }

//     const price =
//         Number(
//             option.dataset.price ||
//             0
//         );

//     document.getElementById(
//         "serviceAmount"
//     ).textContent =
//         price;

//     document.getElementById(
//         "totalAmount"
//     ).textContent =
//         price +
//         DELIVERY_CHARGE;

//     if(
//         option.dataset.type ===
//         "photocopy"
//     ){

//         photoCopyOptions
//             .classList
//             .remove(
//                 "hidden"
//             );        documentsArea.innerHTML = \`
// <div class="document-box">
//   <label>📷 Scan / Upload Document Pages</label>
//   <p>हर Page अलग Upload करें (JPG, PNG या WEBP)।</p>
//   <div id="photocopyPageRows"></div>
//   <button type="button" id="addPhotocopyPage" style="margin-top:12px;padding:12px;background:#047857;color:white;border:0;border-radius:9px;font-weight:bold;cursor:pointer">➕ Add Page</button>
//   <p id="pageCountText" style="color:#047857;font-weight:bold"></p>
// </div>\`;
//         addPhotocopyPage();
//         document.getElementById("addPhotocopyPage")
//           .addEventListener("click", addPhotocopyPage);
//         updateTotal();

//         return;

//     }

//     let requirements =
//         [];

//     try{

//         requirements =
//             JSON.parse(
//                 option.dataset
//                 .requirements ||
//                 "[]"
//             );

//     }
//     catch(error){

//         requirements =
//             [];

//     }

// requirements.forEach(
// function(item,index){

//     const box =
//         document.createElement(
//             "div"
//         );

//     box.className =
//         "document-box";

//     const requiredMark =
//         item.required
//         ? "*"
//         : "";

//     const requiredAttribute =
//         item.required
//         ? "required"
//         : "";

//     const documentName =
//         String(
//             item.name ||
//             "Document"
//         );

//     box.innerHTML =

//         '<label>' +

//         '📷 ' +
//         documentName +
//         requiredMark +

//         '</label>' +

//         '<input ' +

//         'type="file" ' +

//         'id="doc_' +
//         index +
//         '" ' +

//         'data-doc-name="' +
//         documentName
//             .replace(
//                 /"/g,
//                 '&quot;'
//             ) +
//         '" ' +

//         'accept="image/*" ' +

//         'capture="environment" ' +

//         requiredAttribute +

//         '>';

//     documentsArea.appendChild(
//         box
//     );

// });

// updateTotal();

// });   // serviceSelect.addEventListener ka closing

// // ======================================================
// // DISTANCE
// // ======================================================

// function calculateDistanceKm(
//     lat1,
//     lon1,
//     lat2,
//     lon2
// ){

//     const R =
//         6371;

//     const rad =
//         function(value){

//             return (
//                 value *
//                 Math.PI /
//                 180
//             );

//         };

//     const dLat =
//         rad(
//             lat2 -
//             lat1
//         );

//     const dLon =
//         rad(
//             lon2 -
//             lon1
//         );

//     const a =

//         Math.sin(
//             dLat /
//             2
//         ) ** 2

//         +

//         Math.cos(
//             rad(
//                 lat1
//             )
//         )

//         *

//         Math.cos(
//             rad(
//                 lat2
//             )
//         )

//         *

//         Math.sin(
//             dLon /
//             2
//         ) ** 2;

//     return (

//         R *

//         2 *

//         Math.atan2(

//             Math.sqrt(
//                 a
//             ),

//             Math.sqrt(
//                 1 -
//                 a
//             )

//         )

//     );

// }

// // ======================================================
// // CHECK LOCATION
// // ======================================================

// function checkLocation(){

//     const box =
//         document.getElementById(
//             "locationStatus"
//         );

//     const button =
//         document.getElementById(
//             "orderButton"
//         );

//     locationAllowed =
//         false;

//     button.disabled =
//         true;

//     if(
//         !SHOP_OPEN
//     ){

//         box.className =
//             "location-box error";

//         box.innerHTML =
//             "🔴 Shop अभी Closed है।";

//         button.textContent =
//             "SHOP CLOSED";

//         return;

//     }

//     if(
//         SHOP_LATITUDE === null ||
//         SHOP_LONGITUDE === null
//     ){

//         box.className =
//             "location-box error";

//         box.innerHTML =
//             "❌ Shop Location save नहीं है।";

//         button.textContent =
//             "SHOP LOCATION NOT AVAILABLE";

//         return;

//     }

//     if(
//         !navigator.geolocation
//     ){

//         box.className =
//             "location-box error";

//         box.innerHTML =
//             "❌ GPS support नहीं है।";

//         return;

//     }

//     checkLocationButton.disabled =
//         true;

//     checkLocationButton.textContent =
//         "📍 CHECKING LOCATION...";

//     box.className =
//         "location-box";

//     box.innerHTML =
//         "📍 Location check हो रही है...";

//     navigator.geolocation
//     .getCurrentPosition(

//         function(position){

//             customerLatitude =
//                 Number(
//                     position.coords.latitude
//                 );

//             customerLongitude =
//                 Number(
//                     position.coords.longitude
//                 );

//             customerAccuracy =
//                 Number(
//                     position.coords.accuracy ||
//                     0
//                 );

//             customerDistance =
//                 calculateDistanceKm(

//                     Number(
//                         SHOP_LATITUDE
//                     ),

//                     Number(
//                         SHOP_LONGITUDE
//                     ),

//                     customerLatitude,

//                     customerLongitude

//                 );

//             checkLocationButton.disabled =
//                 false;

//             checkLocationButton.textContent =
//                 "📍 CHECK LOCATION AGAIN";

//             if(
//                 customerDistance <=
//                 DELIVERY_RADIUS
//             ){

//                 locationAllowed =
//                     true;

//                 box.className =
//                     "location-box success";

//                 box.innerHTML =

//                     "✅ DELIVERY AVAILABLE" +

//                     "<br>" +

//                     "Distance: " +

//                     customerDistance
//                     .toFixed(2) +

//                     " KM";

//                 button.disabled =
//                     false;

//                 button.textContent =
//                     "💳 CONTINUE TO PAYMENT";

//             }
//             else{

//                 locationAllowed =
//                     false;

//                 box.className =
//                     "location-box error";

//                 box.innerHTML =

//                     "❌ Delivery Available नहीं है." +

//                     "<br>" +

//                     "Distance: " +

//                     customerDistance
//                     .toFixed(2) +

//                     " KM" +

//                     "<br>" +

//                     "Maximum Radius: " +

//                     DELIVERY_RADIUS +

//                     " KM";

//                 button.disabled =
//                     true;

//                 button.textContent =
//                     "OUTSIDE DELIVERY AREA";

//             }

//         },

//         function(error){

//             console.error(
//                 "LOCATION ERROR:",
//                 error
//             );

//             checkLocationButton.disabled =
//                 false;

//             checkLocationButton.textContent =
//                 "📍 CHECK MY LOCATION";

//             box.className =
//                 "location-box error";

//             if(
//                 error.code === 1
//             ){

//                 box.innerHTML =
//                     "❌ Location Permission Denied. Browser में Location Allow करें.";

//             }
//             else if(
//                 error.code === 2
//             ){

//                 box.innerHTML =
//                     "❌ GPS Location नहीं मिल रही. Phone Location ON करें.";

//             }
//             else if(
//                 error.code === 3
//             ){

//                 box.innerHTML =
//                     "❌ Location Timeout. फिर से कोशिश करें.";

//             }
//             else{

//                 box.innerHTML =
//                     "❌ Location Check नहीं हो सकी.";

//             }

//         },

//         {
//             enableHighAccuracy:
//                 true,

//             timeout:
//                 20000,

//             maximumAge:
//                 0
//         }

//     );

// }

// // ======================================================
// // LOCATION BUTTON EVENT
// // ======================================================

// checkLocationButton.addEventListener(
//     "click",
//     checkLocation
// );

// async function placeOrder(){

//     if(
//         !SHOP_OPEN ||
//         !locationAllowed
//     ){

//         return;

//     }

//     const serviceId =
//         serviceSelect.value;

//     if(!serviceId){

//         alert(
//             "Service select करें."
//         );

//         return;

//     }

//     const customerName =
//         document
//         .getElementById(
//             "customerName"
//         )
//         .value
//         .trim();

//     const mobile =
//         document
//         .getElementById(
//             "mobile"
//         )
//         .value
//         .trim();

//     const address =
//         document
//         .getElementById(
//             "address"
//         )
//         .value
//         .trim();

//     if(
//         !customerName ||
//         !mobile ||
//         !address
//     ){

//         alert(
//             "Name, Mobile और Address जरूरी है."
//         );

//         return;

//     }

//     const formData =
//         new FormData();

//     formData.append(
//         "serviceId",
//         serviceId
//     );

//     formData.append(
//         "customerName",
//         customerName
//     );

//     formData.append(
//         "mobile",
//         mobile
//     );

//     formData.append(
//         "address",
//         address
//     );

//     formData.append(
//         "latitude",
//         customerLatitude
//     );

//     formData.append(
//         "longitude",
//         customerLongitude
//     );

//     formData.append(
//         "accuracy",
//         customerAccuracy || ""
//     );

//     formData.append(
//         "copies",
//         document
//         .getElementById(
//             "copies"
//         )
//         ?.value ||
//         1
//     );

//     formData.append(
//         "printType",
//         document
//         .getElementById(
//             "printType"
//         )
//         ?.value ||
//         "Black & White"
//     );

//     const option =
//         serviceSelect.options[
//             serviceSelect.selectedIndex
//         ];

//     if(
//         option.dataset.type ===
//         "photocopy"
//     ){

//         const inputs = [...document.querySelectorAll("#photocopyPageRows input[type=file]")];
//         if(!inputs.length || inputs.some(input => input.files.length !== 1)){
//           alert("हर Page के लिए एक Image Upload करें।");
//           return;
//         }
//         inputs.forEach(input => formData.append("photocopyPages",input.files[0]));
//     }
//     else{

//         const documentInputs =
//             document.querySelectorAll(
//                 '[id^="doc_"]'
//             );

//         for(
//             const input
//             of documentInputs
//         ){

//             if(
//                 input.required &&
//                 !input.files.length
//             ){

//                 alert(
//                     input.dataset.docName +
//                     " upload करें."
//                 );

//                 return;

//             }

//             if(
//                 input.files.length
//             ){

//                 formData.append(
//                     input.id,
//                     input.files[0]
//                 );

//                 formData.append(
//                     "name_" +
//                     input.id,
//                     input.dataset.docName
//                 );

//             }

//         }

//     }

//     const button =
//         document.getElementById(
//             "orderButton"
//         );

//     button.disabled =
//         true;

//     button.textContent =
//         "PLEASE WAIT...";

//     try{

//         const response =
//             await fetch(
//                 "/quick-service/create-order",
//                 {
//                     method:"POST",
//                     body:formData
//                 }
//             );

//         const data =
//             await response.json();

//         if(!data.success){

//             alert(
//                 data.message
//             );

//             button.disabled =
//                 false;

//             button.textContent =
//                 "CONTINUE TO PAYMENT";

//             return;

//         }

//         const options = {

//             key:
//                 data.key,

//             amount:
//                 data.amount,

//             currency:
//                 "INR",

//             name:
//                 "GLOBAL QUICK SERVICES",

//             description:
//                 data.serviceName,

//             order_id:
//                 data.razorpayOrderId,

//             handler:
//             async function(response){

//                 const verify =
//                     await fetch(
//                         "/quick-service/verify-payment",
//                         {

//                             method:"POST",

//                             headers:{
//                                 "Content-Type":
//                                 "application/json"
//                             },

//                             body:
//                             JSON.stringify({

//                                 orderId:
//                                     data.orderId,

//                                 razorpay_order_id:
//                                     response
//                                     .razorpay_order_id,

//                                 razorpay_payment_id:
//                                     response
//                                     .razorpay_payment_id,

//                                 razorpay_signature:
//                                     response
//                                     .razorpay_signature

//                             })

//                         }
//                     );

//                 const result =
//                     await verify.json();

//                 if(
//                     result.success
//                 ){

//                     window.location.href =
//                         "/quick-service/success/" +
//                         data.orderId;

//                 }
//                 else{

//                     alert(
//                         "Payment verification failed"
//                     );

//                 }

//             }

//         };

//         const razorpayObject =
//             new Razorpay(
//                 options
//             );

//         razorpayObject.open();

//     }
//     catch(error){

//         console.error(
//             error
//         );

//         alert(
//             "Order create नहीं हुआ."
//         );

//         button.disabled =
//             false;

//         button.textContent =
//             "CONTINUE TO PAYMENT";

//     }

// }

// </script>

// </body>

// </html>

//             `);

//         }
//         catch(error){

//             console.error(
//                 "QUICK SERVICE PAGE ERROR:",
//                 error
//             );

//             res
//             .status(500)
//             .send(
//                 error.message
//             );

//         }

//     }
// );

// // ======================================================
// // CREATE ORDER
// // ======================================================

// router.post(
//     "/quick-service/create-order",

//     upload.any(),

//     async(req,res)=>{

//         try{

//             const setting =
//                 await getQuickShopSetting();

//             if(
//                 !setting.isOpen
//             ){

//                 return res
//                 .status(400)
//                 .json({

//                     success:false,

//                     message:
//                         "Shop अभी Closed है."

//                 });

//             }

//             const service =
//                 await QuickService
//                 .findById(
//                     req.body.serviceId
//                 );

//             if(
//                 !service ||
//                 !service.active
//             ){

//                 return res
//                 .status(404)
//                 .json({

//                     success:false,

//                     message:
//                         "Service available नहीं है."

//                 });

//             }

//             if(
//                 !validCoordinates(
//                     req.body.latitude,
//                     req.body.longitude
//                 )
//             ){

//                 return res
//                 .status(400)
//                 .json({

//                     success:false,

//                     message:
//                         "Customer Location required."

//                 });

//             }

//             if(
//                 !validCoordinates(
//                     setting
//                     .shopLocation
//                     ?.latitude,

//                     setting
//                     .shopLocation
//                     ?.longitude
//                 )
//             ){

//                 return res
//                 .status(400)
//                 .json({

//                     success:false,

//                     message:
//                         "Shop Location available नहीं है."

//                 });

//             }

//             const customerLatitude =
//                 Number(
//                     req.body.latitude
//                 );

//             const customerLongitude =
//                 Number(
//                     req.body.longitude
//                 );

//             const distance =
//                 calculateDistanceKm(

//                     Number(
//                         setting
//                         .shopLocation
//                         .latitude
//                     ),

//                     Number(
//                         setting
//                         .shopLocation
//                         .longitude
//                     ),

//                     customerLatitude,

//                     customerLongitude

//                 );

//             const radius =
//                 safeNumber(
//                     setting
//                     .deliveryRadiusKm,
//                     2
//                 );

//             if(
//                 distance >
//                 radius
//             ){

//                 return res
//                 .status(400)
//                 .json({

//                     success:false,

//                     message:
//                         "Delivery केवल " +
//                         radius +
//                         " KM तक available है."

//                 });

//             }

// // ======================================================
// // DOCUMENTS
// // ======================================================

//             const documents =
//                 [];

//             for(
//                 const file
//                 of
//                 req.files || []
//             ){

//                 let documentName =
//                     "Document";

//                 if(
//                     file.fieldname ===
//                     "photocopyPages"
//                 ){

//                     documentName =
//                         "Photo Copy Page";

//                 }
//                 else{

//                     documentName =
//                         req.body[
//                             "name_" +
//                             file.fieldname
//                         ]
//                         ||
//                         "Document";

//                 }

//                 documents.push({

//                     documentName,

//                     fileName:
//                         file.filename,

//                     originalName:
//                         file.originalname,

//                     mimeType:
//                         file.mimetype

//                 });

//             }

// // ======================================================
// // AMOUNT
// // ======================================================

//             const copies =
//                 Math.max(

//                     1,

//                     safeNumber(
//                         req.body.copies,
//                         1
//                     )

//                 );

//             let serviceAmount =
//                 safeNumber(
//                     service.price,
//                     0
//                 );

//             if(
//                 service.type ===
//                 "photocopy"
//             ){

//                 const pages =
//                     documents.length ||
//                     1;

//                 serviceAmount =

//                     safeNumber(
//                         service.price,
//                         0
//                     )

//                     *

//                     pages

//                     *

//                     copies;

//             }

//             const deliveryCharge = 0;

//             const totalAmount =
//                 serviceAmount +
//                 deliveryCharge;

//             const orderId =
//                 await generateOrderNumber();

// // ======================================================
// // RAZORPAY ORDER
// // ======================================================

//             const razorpayOrder =
//                 await razorpay
//                 .orders
//                 .create({

//                     amount:
//                         Math.round(
//                             totalAmount *
//                             100
//                         ),

//                     currency:
//                         "INR",

//                     receipt:
//                         orderId

//                 });

// // ======================================================
// // SAVE ORDER
// // ======================================================

//             const order =
//                 await QuickOrder
//                 .create({

//                     orderId,

//                     customerName:
//                         String(
//                             req.body.customerName ||
//                             ""
//                         ).trim(),

//                     mobile:
//                         String(
//                             req.body.mobile ||
//                             ""
//                         ).trim(),

//                     address:
//                         String(
//                             req.body.address ||
//                             ""
//                         ).trim(),

//                     customerLocation:{

//                         latitude:
//                             customerLatitude,

//                         longitude:
//                             customerLongitude,

//                         accuracy:
//                             safeNumber(
//                                 req.body.accuracy,
//                                 0
//                             )

//                     },

//                     distanceFromShopKm:
//                         Number(
//                             distance
//                             .toFixed(2)
//                         ),

//                     serviceId:
//                         service._id,

//                     serviceName:
//                         service.name,

//                     serviceType:
//                         service.type,

//                     documents,

//                     copies,

//                     printType:
//                         req.body
//                         .printType ||
//                         "Black & White",

//                     serviceAmount,

//                     deliveryCharge,

//                     totalAmount,

//                     paymentStatus:
//                         "Pending",

//                     razorpayOrderId:
//                         razorpayOrder.id,

//                     status:
//                         "Pending"

//                 });

//             return res.json({

//                 success:true,

//                 key:
//                     process.env
//                     .RAZORPAY_KEY_ID,

//                 orderId:
//                     order._id,

//                 orderNumber:
//                     order.orderId,

//                 serviceName:
//                     order.serviceName,

//                 amount:
//                     razorpayOrder.amount,

//                 razorpayOrderId:
//                     razorpayOrder.id

//             });

//         }
//         catch(error){

//             console.error(
//                 "CREATE QUICK ORDER ERROR:",
//                 error
//             );

//             return res
//             .status(500)
//             .json({

//                 success:false,

//                 message:
//                     error.message

//             });

//         }

//     }
// );

// // ======================================================
// // VERIFY PAYMENT
// // ======================================================

// router.post(
//     "/quick-service/verify-payment",

//     async(req,res)=>{

//         try{

//             const {

//                 orderId,

//                 razorpay_order_id,

//                 razorpay_payment_id,

//                 razorpay_signature

//             } = req.body;

//             const body =

//                 razorpay_order_id +

//                 "|" +

//                 razorpay_payment_id;

//             const expectedSignature =

//                 crypto

//                 .createHmac(
//                     "sha256",
//                     process.env
//                     .RAZORPAY_KEY_SECRET
//                 )

//                 .update(
//                     body
//                 )

//                 .digest(
//                     "hex"
//                 );

//             if(
//                 expectedSignature !==
//                 razorpay_signature
//             ){

//                 return res
//                 .status(400)
//                 .json({

//                     success:false,

//                     message:
//                         "Invalid Payment Signature"

//                 });

//             }

//             const order =
//                 await QuickOrder
//                 .findByIdAndUpdate(

//                     orderId,

//                     {

//                         paymentStatus:
//                             "Paid",

//                         razorpayPaymentId:
//                             razorpay_payment_id,

//                         status:
//                             "Pending"

//                     },

//                     {
//                         new:true
//                     }

//                 );

//             return res.json({

//                 success:true,

//                 orderNumber:
//                     order.orderId

//             });

//         }
//         catch(error){

//             console.error(
//                 "VERIFY PAYMENT ERROR:",
//                 error
//             );

//             return res
//             .status(500)
//             .json({

//                 success:false

//             });

//         }

//     }
// );

// // ======================================================
// // SUCCESS PAGE
// // ======================================================

// router.get(
//     "/quick-service/success/:id",

//     async(req,res)=>{

//         const order =
//             await QuickOrder
//             .findById(
//                 req.params.id
//             )
//             .lean();

//         if(!order){

//             return res
//             .status(404)
//             .send(
//                 "Order Not Found"
//             );

//         }

//         return res.send(`

// <!DOCTYPE html>

// <html>

// <head>

// <meta
// name="viewport"
// content="width=device-width,initial-scale=1"
// >

// <title>
// Order Successful
// </title>

// </head>

// <body style="
// font-family:Arial;
// background:#f0fdf4;
// padding:40px;
// text-align:center;
// ">

// <h1>
// ✅ PAYMENT SUCCESSFUL
// </h1>

// <h2>
// ${order.orderId}
// </h2>

// <p>
// आपका Order मिल गया है।
// </p>

// <p>
// Service:
// <strong>
// ${order.serviceName}
// </strong>
// </p>

// <p>
// Amount:
// <strong>
// ₹${order.totalAmount}
// </strong>
// </p>

// <a href="/">
// HOME
// </a>

// </body>

// </html>

//         `);

//     }
// );

// // ======================================================
// // ADMIN SHOP STATUS
// // GET /admin/quick-service/shop-status
// // ======================================================

// router.get(
//     "/admin/quick-service/shop-status",

//     async(req,res)=>{

//         try{

//             const setting =
//                 await getQuickShopSetting();

//             const locationSaved =
//                 validCoordinates(

//                     setting
//                     .shopLocation
//                     ?.latitude,

//                     setting
//                     .shopLocation
//                     ?.longitude

//                 );

//             return res.send(`

// <!DOCTYPE html>

// <html>

// <head>

// <meta
// name="viewport"
// content="width=device-width,initial-scale=1"
// >

// <title>
// Quick Service Shop Control
// </title>

// <style>

// *{
// box-sizing:border-box;
// font-family:Arial;
// }

// body{
// margin:0;
// padding:20px;
// background:#f1f5f9;
// }

// .card{
// max-width:470px;
// margin:30px auto;
// padding:25px;
// background:white;
// border-radius:20px;
// text-align:center;
// box-shadow:
// 0 15px 45px
// rgba(0,0,0,.12);
// }

// .status{
// padding:15px;
// margin:20px 0;
// border-radius:12px;
// font-size:20px;
// font-weight:bold;
// }

// .open{
// background:#dcfce7;
// color:#166534;
// }

// .closed{
// background:#fee2e2;
// color:#991b1b;
// }

// .setting{
// padding:15px;
// background:#f8fafc;
// border-radius:12px;
// text-align:left;
// line-height:1.9;
// }

// button{
// width:100%;
// padding:15px;
// margin-top:18px;
// border:0;
// border-radius:12px;
// color:white;
// font-weight:bold;
// font-size:16px;
// }

// .open-btn{
// background:#16a34a;
// }

// .close-btn{
// background:#dc2626;
// }

// .links a{
// display:block;
// margin-top:10px;
// padding:12px;
// background:#2563eb;
// color:white;
// text-decoration:none;
// border-radius:10px;
// }

// </style>

// </head>

// <body>

// <div class="card">

// <h1>
// ⚡ GLOBAL QUICK SERVICES
// </h1>

// <div
// class="status ${
// setting.isOpen
// ?
// "open"
// :
// "closed"
// }"
// >

// ${
// setting.isOpen
// ?
// "🟢 SHOP OPEN"
// :
// "🔴 SHOP CLOSED"
// }

// </div>

// <div class="setting">

// 📦 Delivery Radius:
// <strong>
// ${safeNumber(
// setting.deliveryRadiusKm,
// 2
// )} KM
// </strong>

// <br>

// 💵 Delivery Charge:
// <strong>
// ₹${safeNumber(
// setting.deliveryCharge,
// 0
// )}
// </strong>

// <br>

// 📍 Shop Location:
// <strong>
// ${
// locationSaved
// ?
// "Saved ✅"
// :
// "Not Saved ❌"
// }
// </strong>

// </div>

// <form
// method="POST"
// action="/admin/quick-service/toggle-shop"
// id="toggleForm"
// >

// <input
// type="hidden"
// name="latitude"
// id="latitude"
// >

// <input
// type="hidden"
// name="longitude"
// id="longitude"
// >

// <input
// type="hidden"
// name="accuracy"
// id="accuracy"
// >

// <button
// type="button"
// id="toggleButton"
// class="${
// setting.isOpen
// ?
// "close-btn"
// :
// "open-btn"
// }"
// >

// ${
// setting.isOpen
// ?
// "🔴 CLOSE SHOP"
// :
// "🟢 OPEN SHOP WITH LOCATION"
// }

// </button>

// </form>

// <p
// id="locationMessage"
// >

// ${
// setting.isOpen
// ?
// "✅ 2 KM के अंदर Customer order कर सकते हैं."
// :
// "Shop Open करने के लिए GPS Location Allow करें."
// }

// </p>

// <div class="links">

//     <a href="/admin/quick-service/orders">
//         🔔 ORDERS
//     </a>

//     <a href="/admin/quick-service/services">
//         🛠 MANAGE SERVICES
//     </a>

//     <a href="/quick-service">
//         👤 CUSTOMER PAGE
//     </a>

// </div>

// </div>

// <div class="setting">

// 📦 Delivery Radius:
// <strong>
// ${safeNumber(
// setting.deliveryRadiusKm,
// 2
// )} KM
// </strong>

// <br>

// 💵 Delivery Charge:
// <strong>
// ₹${safeNumber(
// setting.deliveryCharge,
// 0
// )}
// </strong>

// <br>

// 📍 Shop Location:
// <strong>
// ${
// locationSaved
// ?
// "Saved ✅"
// :
// "Not Saved ❌"
// }
// </strong>

// </div>

// <form
// method="POST"
// action="/admin/quick-service/toggle-shop"
// id="toggleForm"
// >

// <input
// type="hidden"
// name="latitude"
// id="latitude"
// >

// <input
// type="hidden"
// name="longitude"
// id="longitude"
// >

// <input
// type="hidden"
// name="accuracy"
// id="accuracy"
// >

// <button
// type="button"
// id="toggleButton"
// class="${
// setting.isOpen
// ?
// "close-btn"
// :
// "open-btn"
// }"
// >

// ${
// setting.isOpen
// ?
// "🔴 CLOSE SHOP"
// :
// "🟢 OPEN SHOP WITH LOCATION"
// }

// </button>

// </form>

// <p
// id="locationMessage"
// >

// ${
// setting.isOpen
// ?
// "✅ 2 KM के अंदर Customer order कर सकते हैं."
// :
// "Shop Open करने के लिए GPS Location Allow करें."
// }

// </p>

// <div class="links">

// <a href="/admin/quick-service/orders">
// 🔔 ORDERS
// </a>

// <a href="/quick-service">
// 👤 CUSTOMER PAGE
// </a>

// </div>

// </div>

// <script>

// const SHOP_OPEN =
// ${setting.isOpen ? "true" : "false"};

// const button =
// document.getElementById(
//     "toggleButton"
// );

// const form =
// document.getElementById(
//     "toggleForm"
// );

// const message =
// document.getElementById(
//     "locationMessage"
// );

// button.addEventListener(
// "click",
// function(){

//     if(SHOP_OPEN){

//         button.disabled =
//             true;

//         button.textContent =
//             "CLOSING SHOP...";

//         form.submit();

//         return;

//     }

//     if(
//         !navigator.geolocation
//     ){

//         alert(
//             "GPS support नहीं है."
//         );

//         return;

//     }

//     button.disabled =
//         true;

//     button.textContent =
//         "📍 GETTING LOCATION...";

//     navigator.geolocation
//     .getCurrentPosition(

//     function(position){

//         document
//         .getElementById(
//             "latitude"
//         )
//         .value =
//             position.coords
//             .latitude;

//         document
//         .getElementById(
//             "longitude"
//         )
//         .value =
//             position.coords
//             .longitude;

//         document
//         .getElementById(
//             "accuracy"
//         )
//         .value =
//             position.coords
//             .accuracy;

//         message.innerHTML =
//             "✅ Location मिली. Shop Open हो रही है...";

//         form.submit();

//     },

//     function(error){

//         console.error(
//             error
//         );

//         button.disabled =
//             false;

//         button.textContent =
//             "🟢 OPEN SHOP WITH LOCATION";

//         message.innerHTML =
//             "❌ Location Permission Allow करें.";

//     },

//     {

//         enableHighAccuracy:
//             true,

//         timeout:
//             20000,

//         maximumAge:
//             0

//     }

//     );

// });

// </script>

// </body>

// </html>

//             `);

//         }
//         catch(error){

//             console.error(
//                 error
//             );

//             res
//             .status(500)
//             .send(
//                 error.message
//             );

//         }

//     }
// );

// // ======================================================
// // TOGGLE SHOP
// // ======================================================

// router.post(
//     "/admin/quick-service/toggle-shop",

//     async(req,res)=>{

//         try{

//             const setting =
//                 await getQuickShopSetting();

//             const nextStatus =
//                 !setting.isOpen;

//             if(nextStatus){

//                 const {

//                     latitude,

//                     longitude,

//                     accuracy

//                 } = req.body;

//                 if(
//                     !validCoordinates(
//                         latitude,
//                         longitude
//                     )
//                 ){

//                     return res
//                     .status(400)
//                     .send(
//                         "Shop Open करने के लिए GPS Location जरूरी है."
//                     );

//                 }

//                 setting.shopLocation = {

//                     latitude:
//                         Number(
//                             latitude
//                         ),

//                     longitude:
//                         Number(
//                             longitude
//                         ),

//                     accuracy:
//                         safeNumber(
//                             accuracy,
//                             0
//                         ),

//                     updatedAt:
//                         new Date()

//                 };

//                 setting.deliveryRadiusKm =
//                     2;

//             }

//             setting.isOpen =
//                 nextStatus;

//             await setting.save();

//             return res.redirect(
//                 "/admin/quick-service/shop-status"
//             );

//         }
//         catch(error){

//             console.error(
//                 error
//             );

//             return res
//             .status(500)
//             .send(
//                 error.message
//             );

//         }

//     }
// );

// // ======================================================
// // ADMIN ORDERS
// // ======================================================
// // ======================================================
// // ADMIN QUICK SERVICE ORDERS
// // ======================================================

// router.get(
//     "/admin/quick-service/orders",

//     async(req,res)=>{

//         try{

//             // ==================================================
//             // SYNC PENDING ORDERS WITH RAZORPAY
//             // ==================================================

//             const pendingOrders =
//                 await QuickOrder.find({

//                     paymentStatus:
//                         "Pending",

//                     razorpayOrderId:{
//                         $exists:true,
//                         $ne:""
//                     }

//                 });

//             for(
//                 const pendingOrder
//                 of pendingOrders
//             ){

//                 try{

//                     const razorpayOrder =
//                         await razorpay
//                         .orders
//                         .fetch(
//                             pendingOrder
//                             .razorpayOrderId
//                         );

//                     console.log(
//                         "RAZORPAY ORDER:",
//                         pendingOrder.orderId,
//                         razorpayOrder.status
//                     );

//                     if(
//                         razorpayOrder &&
//                         razorpayOrder.status ===
//                         "paid"
//                     ){

//                         let paymentId =
//                             "";

//                         // ==========================================
//                         // GET PAYMENT ID
//                         // ==========================================

//                         try{

//                             const payments =
//                                 await razorpay
//                                 .orders
//                                 .fetchPayments(
//                                     pendingOrder
//                                     .razorpayOrderId
//                                 );

//                             if(
//                                 payments &&
//                                 Array.isArray(
//                                     payments.items
//                                 ) &&
//                                 payments.items.length >
//                                 0
//                             ){

//                                 const paidPayment =
//                                     payments.items.find(
//                                         function(payment){

//                                             return (
//                                                 payment.status ===
//                                                 "captured"
//                                             );

//                                         }
//                                     )
//                                     ||
//                                     payments.items[0];

//                                 if(paidPayment){

//                                     paymentId =
//                                         paidPayment.id ||
//                                         "";

//                                 }

//                             }

//                         }
//                         catch(paymentError){

//                             console.error(
//                                 "FETCH PAYMENT ERROR:",
//                                 pendingOrder.orderId,
//                                 paymentError.message
//                             );

//                         }

//                         // ==========================================
//                         // MARK ORDER PAID
//                         // ==========================================

//                         pendingOrder.paymentStatus =
//                             "Paid";

//                         if(
//                             !pendingOrder.status ||
//                             pendingOrder.status ===
//                             "Pending"
//                         ){

//                             pendingOrder.status =
//                                 "Pending";

//                         }

//                         if(paymentId){

//                             pendingOrder
//                             .razorpayPaymentId =
//                                 paymentId;

//                         }

//                         await pendingOrder.save();

//                         console.log(
//                             "PAYMENT SYNCED:",
//                             pendingOrder.orderId
//                         );

//                     }

//                 }
//                 catch(syncError){

//                     console.error(
//                         "RAZORPAY SYNC ERROR:",
//                         pendingOrder.orderId,
//                         syncError.message
//                     );

//                 }

//             }

//             // ==================================================
//             // GET PAID ORDERS
//             // ==================================================

//             const orders =
//                 await QuickOrder
//                 .find({
//                     paymentStatus:"Paid"
//                 })
//                 .sort({
//                     createdAt:-1
//                 })
//                 .lean();

//             const statuses = [

//                 "Pending",

//                 "Accepted",

//                 "Processing",

//                 "Ready",

//                 "Packed",

//                 "Out for Delivery",

//                 "Delivered",

//                 "Cancelled"

//             ];

//             return res.send(`

// <!DOCTYPE html>

// <html>

// <head>

// <meta
// name="viewport"
// content="width=device-width,initial-scale=1"
// >

// <title>
// Quick Service Orders
// </title>

// <style>

// *{
// box-sizing:border-box;
// font-family:Arial;
// }

// body{
// margin:0;
// background:#f1f5f9;
// }

// .container{
// max-width:1100px;
// margin:auto;
// padding:20px;
// }

// .order{
// background:white;
// padding:20px;
// margin-bottom:20px;
// border-radius:18px;
// box-shadow:
// 0 8px 25px
// rgba(0,0,0,.08);
// }

// .documents{
// display:grid;
// grid-template-columns:
// repeat(
// auto-fit,
// minmax(180px,1fr)
// );
// gap:12px;
// }

// .document{
// padding:10px;
// border:1px solid #ddd;
// border-radius:12px;
// }

// .document img{
// width:100%;
// height:190px;
// object-fit:contain;
// background:#f8fafc;
// }

// .download{
// display:block;
// margin-top:8px;
// padding:10px;
// border-radius:8px;
// background:#2563eb;
// color:white;
// text-align:center;
// text-decoration:none;
// }

// select,
// button{
// padding:10px;
// border-radius:8px;
// }

// .status-btn{
// background:#16a34a;
// color:white;
// border:0;
// cursor:pointer;
// }

// .payment-paid{
// color:#15803d;
// font-weight:bold;
// }

// </style>

// </head>

// <body>

// <div class="container">

// <h1>
// 🔔 Quick Service Orders
// </h1>

// <p>

// <a href="/admin/quick-service/shop-status">
// ← Shop Control
// </a>

// &nbsp;&nbsp;

// <a href="/admin/quick-service/orders">
// 🔄 Refresh Payments
// </a>

// </p>

// ${
// orders.length
// ?

// orders.map(
// order=>`

// <div class="order">

// <h2>
// #${order.orderId}
// </h2>

// <p>
// <strong>
// ${order.serviceName}
// </strong>
// </p>

// <p>
// 👤 ${order.customerName}
// </p>

// <p>
// 📞
// <a href="tel:${order.mobile}">
// ${order.mobile}
// </a>
// </p>

// <p>
// 🏠 ${order.address}
// </p>

// <p>
// 📍 Distance:
// <strong>
// ${Number(
//     order.distanceFromShopKm ||
//     0
// ).toFixed(2)} KM
// </strong>
// </p>

// <p>
// 💰 Service:
// <strong>
// ₹${Number(
//     order.serviceAmount ||
//     0
// ).toFixed(2)}
// </strong>
// </p>

// <p>
// 🚚 Delivery:
// <strong>
// ₹${Number(
//     order.deliveryCharge ||
//     0
// ).toFixed(2)}
// </strong>
// </p>

// <p>
// 💰 Total:
// <strong>
// ₹${Number(
//     order.totalAmount ||
//     0
// ).toFixed(2)}
// </strong>
// </p>

// <p>
// Payment:
// <span class="payment-paid">
// ${order.paymentStatus} ✅
// </span>
// </p>

// <p>
// Payment ID:
// <strong>
// ${order.razorpayPaymentId || "N/A"}
// </strong>
// </p>

// <p>
// Copies:
// ${order.copies || 1}
// </p>

// <p>
// Print:
// ${order.printType || "Black & White"}
// </p>

// <h3>
// 📄 Customer Documents
// </h3>

// <div class="documents">

// ${
// (order.documents || [])
// .map(
// (doc,index)=>`

// <div class="document">

// <strong>
// ${doc.documentName}
// </strong>

// <br><br>

// ${
// doc.mimeType ===
// "application/pdf"

// ?

// `
// <div
// style="
// padding:50px 10px;
// text-align:center;
// background:#fee2e2;
// "
// >
// 📄 PDF DOCUMENT
// </div>
// `

// :

// `
// <img
// src="/admin/quick-service/document/${order._id}/${index}"
// onerror="this.style.display='none'"
// >
// `
// }

// <a
// href="/admin/quick-service/document/${order._id}/${index}?download=1"
// class="download"
// >

// ⬇ DOWNLOAD

// </a>

// </div>

// `
// ).join("")
// }

// </div>

// <br>

// <form
// method="POST"
// action="/admin/quick-service/order/${order._id}/status"
// >

// <select name="status">

// ${
// statuses.map(
// status=>`

// <option
// value="${status}"
// ${
// order.status === status
// ?
// "selected"
// :
// ""
// }
// >
// ${status}
// </option>

// `
// ).join("")
// }

// </select>

// <button
// type="submit"
// class="status-btn"
// >
// UPDATE STATUS
// </button>

// </form>

// </div>

// `
// ).join("")

// :

// `
// <p>
// अभी कोई Paid Order नहीं है।
// </p>
// `
// }

// </div>

// </body>

// </html>

//             `);

//         }
//         catch(error){

//             console.error(
//                 "QUICK ORDERS ERROR:",
//                 error
//             );

//             return res
//             .status(500)
//             .send(
//                 error.message
//             );

//         }

//     }
// );

// // ======================================================
// // UPDATE ORDER STATUS
// // ======================================================

// router.post(
//     "/admin/quick-service/order/:id/status",

//     async(req,res)=>{

//         try{

//             const allowedStatuses = [

//                 "Pending",

//                 "Accepted",

//                 "Processing",

//                 "Ready",

//                 "Packed",

//                 "Out for Delivery",

//                 "Delivered",

//                 "Cancelled"

//             ];

//             const status =
//                 String(
//                     req.body.status ||
//                     ""
//                 )
//                 .trim();

//             if(
//                 !allowedStatuses
//                 .includes(
//                     status
//                 )
//             ){

//                 return res
//                 .status(400)
//                 .send(
//                     "Invalid Status"
//                 );

//             }

//             await QuickOrder
//                 .findByIdAndUpdate(

//                     req.params.id,

//                     {
//                         status
//                     }

//                 );

//             return res.redirect(
//                 "/admin/quick-service/orders"
//             );

//         }
//         catch(error){

//             console.error(
//                 error
//             );

//             res
//             .status(500)
//             .send(
//                 error.message
//             );

//         }

//     }
// );

// // ======================================================
// // DOCUMENT VIEW / DOWNLOAD
// // ======================================================

// router.get(
//     "/admin/quick-service/document/:orderId/:index",

//     async(req,res)=>{

//         try{

//             const order =
//                 await QuickOrder
//                 .findById(
//                     req.params.orderId
//                 );

//             if(!order){

//                 return res
//                 .status(404)
//                 .send(
//                     "Order Not Found"
//                 );

//             }

//             const index =
//                 Number(
//                     req.params.index
//                 );

//             const document =
//                 order.documents[
//                     index
//                 ];

//             if(!document){

//                 return res
//                 .status(404)
//                 .send(
//                     "Document Not Found"
//                 );

//             }

//             const filePath =
//                 path.join(

//                     uploadDirectory,

//                     document.fileName

//                 );

//             if(
//                 !fs.existsSync(
//                     filePath
//                 )
//             ){

//                 return res
//                 .status(404)
//                 .send(
//                     "File Not Found"
//                 );

//             }

//             if(
//                 req.query.download ===
//                 "1"
//             ){

//                 return res.download(

//                     filePath,

//                     document.originalName ||
//                     document.fileName

//                 );

//             }

//             return res.sendFile(
//                 filePath
//             );

//         }
//         catch(error){

//             console.error(
//                 error
//             );

//             res
//             .status(500)
//             .send(
//                 error.message
//             );

//         }

//     }
// );

// // ======================================================
// // ADMIN MANAGE QUICK SERVICES
// // GET /admin/quick-service/services
// // ======================================================

// router.get(
//     "/admin/quick-service/services",
//     async (req, res) => {

//         try {

//             const services =
//                 await QuickService
//                     .find({})
//                     .sort({
//                         createdAt: -1
//                     })
//                     .lean();

//             return res.send(`

// <!DOCTYPE html>

// <html lang="en">

// <head>

// <meta charset="UTF-8">

// <meta
//     name="viewport"
//     content="width=device-width, initial-scale=1.0"
// >

// <title>
// Manage Quick Services
// </title>

// <style>

// *{
//     box-sizing:border-box;
// }

// body{
//     margin:0;
//     background:#f1f5f9;
//     font-family:Arial,sans-serif;
//     color:#0f172a;
// }

// .header{
//     padding:20px;
//     color:white;
//     text-align:center;
//     background:
//         linear-gradient(
//             135deg,
//             #065f46,
//             #16a34a
//         );
// }

// .container{
//     width:100%;
//     max-width:900px;
//     margin:auto;
//     padding:18px;
// }

// .nav{
//     display:grid;
//     grid-template-columns:
//         repeat(
//             auto-fit,
//             minmax(150px,1fr)
//         );
//     gap:10px;
//     margin-bottom:18px;
// }

// .nav a{
//     padding:12px;
//     border-radius:10px;
//     background:#2563eb;
//     color:white;
//     text-align:center;
//     text-decoration:none;
//     font-weight:800;
// }

// .card{
//     padding:20px;
//     margin-bottom:18px;
//     border-radius:18px;
//     background:white;
//     box-shadow:
//         0 8px 25px
//         rgba(15,23,42,.08);
// }

// label{
//     display:block;
//     margin-top:14px;
//     margin-bottom:5px;
//     font-weight:800;
// }

// input,
// select,
// textarea{
//     width:100%;
//     padding:12px;
//     border:
//         1px solid
//         #cbd5e1;
//     border-radius:9px;
//     font-size:15px;
// }

// textarea{
//     min-height:80px;
// }

// .requirements-box{
//     margin-top:15px;
//     padding:15px;
//     border-radius:12px;
//     background:#f8fafc;
// }

// .requirement-row{
//     display:flex;
//     gap:8px;
//     margin-top:8px;
// }

// .requirement-row input{
//     flex:1;
// }

// .remove-btn{
//     width:45px;
//     border:0;
//     border-radius:8px;
//     background:#dc2626;
//     color:white;
//     cursor:pointer;
// }

// .add-doc-btn{
//     margin-top:10px;
//     padding:10px 14px;
//     border:0;
//     border-radius:8px;
//     background:#0ea5e9;
//     color:white;
//     font-weight:800;
//     cursor:pointer;
// }

// .save-btn{
//     width:100%;
//     margin-top:18px;
//     padding:14px;
//     border:0;
//     border-radius:10px;
//     background:#16a34a;
//     color:white;
//     font-weight:900;
//     font-size:16px;
//     cursor:pointer;
// }

// .service{
//     padding:16px;
//     margin-bottom:12px;
//     border:
//         1px solid
//         #e2e8f0;
//     border-radius:13px;
// }

// .service-head{
//     display:flex;
//     justify-content:space-between;
//     align-items:center;
//     gap:10px;
// }

// .service-name{
//     font-size:18px;
//     font-weight:900;
// }

// .active{
//     color:#15803d;
//     font-weight:900;
// }

// .inactive{
//     color:#dc2626;
//     font-weight:900;
// }

// .actions{
//     display:flex;
//     flex-wrap:wrap;
//     gap:8px;
//     margin-top:12px;
// }

// .actions a{
//     padding:9px 12px;
//     border-radius:8px;
//     text-decoration:none;
//     color:white;
//     font-weight:800;
//     font-size:13px;
// }

// .edit{
//     background:#2563eb;
// }

// .toggle{
//     background:#f59e0b;
// }

// .delete{
//     background:#dc2626;
// }

// .documents{
//     margin-top:8px;
//     color:#475569;
//     font-size:13px;
//     line-height:1.7;
// }

// </style>

// </head>

// <body>

// <header class="header">

// <h1>
// ⚡ Manage Quick Services
// </h1>

// <p>
// Service, Price और Required Documents Control करें
// </p>

// </header>

// <main class="container">

// <div class="nav">

// <a href="/admin/quick-service/shop-status">
// 🏪 SHOP CONTROL
// </a>

// <a href="/admin/quick-service/orders">
// 🔔 ORDERS
// </a>

// <a href="/quick-service">
// 👤 CUSTOMER PAGE
// </a>

// </div>

// <!-- ======================================= -->
// <!-- ADD SERVICE -->
// <!-- ======================================= -->

// <section class="card">

// <h2>
// ➕ Add New Service
// </h2>

// <form
//     method="POST"
//     action="/admin/quick-service/services"
// >

// <label>
// Service Name *
// </label>

// <input
//     type="text"
//     name="name"
//     placeholder="Example: New PAN Card"
//     required
// >

// <label>
// Service Type *
// </label>

// <select
//     name="type"
//     id="serviceType"
// >

// <option value="normal">
// Normal Document Service
// </option>

// <option value="photocopy">
// Photo Copy
// </option>

// </select>

// <label>
// Price ₹ *
// </label>

// <input
//     type="number"
//     name="price"
//     min="0"
//     step="0.01"
//     placeholder="150"
//     required
// >

// <label>
// Description
// </label>

// <textarea
//     name="description"
//     placeholder="Service details"
// ></textarea>

// <div
//     class="requirements-box"
//     id="requirementsBox"
// >

// <strong>
// 📄 Required Documents
// </strong>

// <div id="requirementsList"></div>

// <button
//     type="button"
//     class="add-doc-btn"
//     onclick="addRequirement()"
// >

// + ADD REQUIRED DOCUMENT

// </button>

// </div>

// <button
//     type="submit"
//     class="save-btn"
// >

// ✅ SAVE SERVICE

// </button>

// </form>

// </section>

// <!-- ======================================= -->
// <!-- EXISTING SERVICES -->
// <!-- ======================================= -->

// <section class="card">

// <h2>
// 🛠 Existing Services
// </h2>

// ${
//     services.length

//     ?

//     services.map(
//         function(service){

//             const requirements =
//                 Array.isArray(
//                     service.requirements
//                 )
//                 ? service.requirements
//                 : [];

//             return `

// <div class="service">

// <div class="service-head">

// <div>

// <div class="service-name">
// ${service.name}
// </div>

// <div>
// ₹${Number(service.price || 0).toFixed(2)}
// </div>

// </div>

// <div
// class="${
//     service.active
//         ? "active"
//         : "inactive"
// }"
// >

// ${
//     service.active
//         ? "● ACTIVE"
//         : "● OFF"
// }

// </div>

// </div>

// <div class="documents">

// <strong>
// Type:
// </strong>

// ${
//     service.type === "photocopy"
//         ? "Photo Copy"
//         : "Normal"
// }

// <br>

// <strong>
// Required Documents:
// </strong>

// ${
//     requirements.length

//     ?

//     requirements
//         .map(
//             function(item){

//                 return (
//                     "• " +
//                     item.name
//                 );

//             }
//         )
//         .join("<br>")

//     :

//     "No required document"

// }

// </div>

// <div class="actions">

// <a
//     class="edit"
//     href="/admin/quick-service/services/edit/${service._id}"
// >
// ✏ EDIT
// </a>

// <a
//     class="toggle"
//     href="/admin/quick-service/services/toggle/${service._id}"
// >
// ${
//     service.active
//         ? "🔴 TURN OFF"
//         : "🟢 TURN ON"
// }
// </a>

// <a
//     class="delete"
//     href="/admin/quick-service/services/delete/${service._id}"
//     onclick="return confirm('Delete this service?')"
// >
// 🗑 DELETE
// </a>

// </div>

// </div>

//             `;

//         }
//     ).join("")

//     :

//     `
//     <p>
//         अभी कोई Service Add नहीं है।
//     </p>
//     `
// }

// </section>

// </main>

// <script>

// let requirementIndex =
//     0;

// function addRequirement(){

//     const list =
//         document.getElementById(
//             "requirementsList"
//         );

//     const row =
//         document.createElement(
//             "div"
//         );

//     row.className =
//         "requirement-row";

//     row.innerHTML =

//         '<input ' +
//         'type="text" ' +
//         'name="requirements[]" ' +
//         'placeholder="Example: Aadhaar Card" ' +
//         'required' +
//         '>' +

//         '<button ' +
//         'type="button" ' +
//         'class="remove-btn" ' +
//         'onclick="this.parentElement.remove()"' +
//         '>' +

//         '✕' +

//         '</button>';

//     list.appendChild(
//         row
//     );

//     requirementIndex++;

// }

// const serviceType =
//     document.getElementById(
//         "serviceType"
//     );

// const requirementsBox =
//     document.getElementById(
//         "requirementsBox"
//     );

// function updateRequirementBox(){

//     if(
//         serviceType.value ===
//         "photocopy"
//     ){

//         requirementsBox.style.display =
//             "none";

//     }
//     else{

//         requirementsBox.style.display =
//             "block";

//     }

// }

// serviceType.addEventListener(
//     "change",
//     updateRequirementBox
// );

// updateRequirementBox();

// </script>

// </body>

// </html>

//             `);

//         }
//         catch(error){

//             console.error(
//                 "MANAGE QUICK SERVICES ERROR:",
//                 error
//             );

//             return res
//                 .status(500)
//                 .send(
//                     error.message
//                 );

//         }

//     }
// );

// // ======================================================
// // ADD QUICK SERVICE
// // POST /admin/quick-service/services
// // ======================================================

// router.post(
//     "/admin/quick-service/services",
//     async (req, res) => {

//         try {

//             const name =
//                 String(
//                     req.body.name ||
//                     ""
//                 ).trim();

//             const type =
//                 req.body.type ===
//                 "photocopy"
//                     ? "photocopy"
//                     : "normal";

//             const price =
//                 Math.max(
//                     0,
//                     Number(
//                         req.body.price ||
//                         0
//                     )
//                 );

//             if(!name){

//                 return res
//                     .status(400)
//                     .send(
//                         "Service Name Required"
//                     );

//             }

//             let requirements =
//                 req.body[
//                     "requirements[]"
//                 ]
//                 ||
//                 req.body.requirements
//                 ||
//                 [];

//             if(
//                 !Array.isArray(
//                     requirements
//                 )
//             ){

//                 requirements =
//                     [requirements];

//             }

//             requirements =
//                 requirements

//                 .map(
//                     function(item){

//                         return String(
//                             item ||
//                             ""
//                         ).trim();

//                     }
//                 )

//                 .filter(Boolean)

//                 .map(
//                     function(item){

//                         return {

//                             name:
//                                 item,

//                             required:
//                                 true

//                         };

//                     }
//                 );

//             if(
//                 type ===
//                 "photocopy"
//             ){

//                 requirements =
//                     [];

//             }

//             await QuickService.create({

//                 name,

//                 type,

//                 price,

//                 description:
//                     String(
//                         req.body.description ||
//                         ""
//                     ).trim(),

//                 active:
//                     true,

//                 requirements

//             });

//             return res.redirect(
//                 "/admin/quick-service/services"
//             );

//         }
//         catch(error){

//             console.error(
//                 "ADD QUICK SERVICE ERROR:",
//                 error
//             );

//             return res
//                 .status(500)
//                 .send(
//                     error.message
//                 );

//         }

//     }
// );

// // ======================================================
// // TOGGLE SERVICE
// // ======================================================

// router.get(
//     "/admin/quick-service/services/toggle/:id",
//     async (req, res) => {

//         try {

//             const service =
//                 await QuickService.findById(
//                     req.params.id
//                 );

//             if(!service){

//                 return res
//                     .status(404)
//                     .send(
//                         "Service Not Found"
//                     );

//             }

//             service.active =
//                 !service.active;

//             await service.save();

//             return res.redirect(
//                 "/admin/quick-service/services"
//             );

//         }
//         catch(error){

//             console.error(
//                 "TOGGLE QUICK SERVICE ERROR:",
//                 error
//             );

//             return res
//                 .status(500)
//                 .send(
//                     error.message
//                 );

//         }

//     }
// );

// // ======================================================
// // DELETE SERVICE
// // ======================================================

// router.get(
//     "/admin/quick-service/services/delete/:id",
//     async (req, res) => {

//         try {

//             await QuickService
//                 .findByIdAndDelete(
//                     req.params.id
//                 );

//             return res.redirect(
//                 "/admin/quick-service/services"
//             );

//         }
//         catch(error){

//             console.error(
//                 "DELETE QUICK SERVICE ERROR:",
//                 error
//             );

//             return res
//                 .status(500)
//                 .send(
//                     error.message
//                 );

//         }

//     }
// );

// // ======================================================
// // EDIT SERVICE PAGE
// // ======================================================

// router.get(
//     "/admin/quick-service/services/edit/:id",
//     async (req, res) => {

//         try {

//             const service =
//                 await QuickService
//                     .findById(
//                         req.params.id
//                     )
//                     .lean();

//             if(!service){

//                 return res
//                     .status(404)
//                     .send(
//                         "Service Not Found"
//                     );

//             }

//             const requirements =
//                 Array.isArray(
//                     service.requirements
//                 )
//                 ? service.requirements
//                 : [];

//             return res.send(`

// <!DOCTYPE html>

// <html>

// <head>

// <meta
// name="viewport"
// content="width=device-width,initial-scale=1"
// >

// <title>
// Edit Service
// </title>

// <style>

// *{
// box-sizing:border-box;
// font-family:Arial;
// }

// body{
// margin:0;
// padding:20px;
// background:#f1f5f9;
// }

// .card{
// max-width:600px;
// margin:auto;
// padding:22px;
// background:white;
// border-radius:18px;
// }

// label{
// display:block;
// margin-top:14px;
// margin-bottom:5px;
// font-weight:bold;
// }

// input,
// select,
// textarea{
// width:100%;
// padding:12px;
// border:1px solid #cbd5e1;
// border-radius:9px;
// }

// textarea{
// min-height:80px;
// }

// .req{
// display:flex;
// gap:8px;
// margin-top:8px;
// }

// .req button{
// width:45px;
// border:0;
// border-radius:8px;
// background:#dc2626;
// color:white;
// }

// .add{
// margin-top:10px;
// padding:10px;
// border:0;
// border-radius:8px;
// background:#2563eb;
// color:white;
// }

// .save{
// width:100%;
// margin-top:18px;
// padding:14px;
// border:0;
// border-radius:10px;
// background:#16a34a;
// color:white;
// font-weight:bold;
// }

// </style>

// </head>

// <body>

// <div class="card">

// <h2>
// ✏ Edit Service
// </h2>

// <form
// method="POST"
// action="/admin/quick-service/services/edit/${service._id}"
// >

// <label>
// Service Name
// </label>

// <input
// type="text"
// name="name"
// value="${service.name || ""}"
// required
// >

// <label>
// Service Type
// </label>

// <select
// name="type"
// id="serviceType"
// >

// <option
// value="normal"
// ${
// service.type === "normal"
// ?
// "selected"
// :
// ""
// }
// >
// Normal
// </option>

// <option
// value="photocopy"
// ${
// service.type === "photocopy"
// ?
// "selected"
// :
// ""
// }
// >
// Photo Copy
// </option>

// </select>

// <label>
// Price ₹
// </label>

// <input
// type="number"
// name="price"
// step="0.01"
// min="0"
// value="${Number(service.price || 0)}"
// required
// >

// <label>
// Description
// </label>

// <textarea
// name="description"
// >${service.description || ""}</textarea>

// <div id="requirementsBox">

// <label>
// Required Documents
// </label>

// <div id="requirements">

// ${
// requirements
// .map(
// function(item){

// return `

// <div class="req">

// <input
// type="text"
// name="requirements[]"
// value="${item.name || ""}"
// required
// >

// <button
// type="button"
// onclick="this.parentElement.remove()"
// >
// ✕
// </button>

// </div>

// `;

// }
// )
// .join("")
// }

// </div>

// <button
// type="button"
// class="add"
// onclick="addRequirement()"
// >
// + ADD DOCUMENT
// </button>

// </div>

// <button
// class="save"
// >
// ✅ UPDATE SERVICE
// </button>

// </form>

// <br>

// <a href="/admin/quick-service/services">
// ← Back
// </a>

// </div>

// <script>

// const type =
// document.getElementById(
//     "serviceType"
// );

// const box =
// document.getElementById(
//     "requirementsBox"
// );

// function updateBox(){

//     box.style.display =

//         type.value ===
//         "photocopy"

//         ?

//         "none"

//         :

//         "block";

// }

// type.addEventListener(
//     "change",
//     updateBox
// );

// updateBox();

// function addRequirement(){

//     const list =
//         document.getElementById(
//             "requirements"
//         );

//     const row =
//         document.createElement(
//             "div"
//         );

//     row.className =
//         "req";

//     row.innerHTML =

//         '<input ' +
//         'type="text" ' +
//         'name="requirements[]" ' +
//         'placeholder="Document Name" ' +
//         'required' +
//         '>' +

//         '<button ' +
//         'type="button" ' +
//         'onclick="this.parentElement.remove()"' +
//         '>' +

//         '✕' +

//         '</button>';

//     list.appendChild(
//         row
//     );

// }

// </script>

// </body>

// </html>

//             `);

//         }
//         catch(error){

//             console.error(
//                 "EDIT SERVICE PAGE ERROR:",
//                 error
//             );

//             return res
//                 .status(500)
//                 .send(
//                     error.message
//                 );

//         }

//     }
// );

// // ======================================================
// // UPDATE SERVICE
// // ======================================================

// router.post(
//     "/admin/quick-service/services/edit/:id",
//     async (req, res) => {

//         try {

//             let requirements =
//                 req.body[
//                     "requirements[]"
//                 ]
//                 ||
//                 req.body.requirements
//                 ||
//                 [];

//             if(
//                 !Array.isArray(
//                     requirements
//                 )
//             ){

//                 requirements =
//                     [requirements];

//             }

//             requirements =
//                 requirements

//                 .map(
//                     function(item){

//                         return String(
//                             item ||
//                             ""
//                         ).trim();

//                     }
//                 )

//                 .filter(Boolean)

//                 .map(
//                     function(item){

//                         return {

//                             name:
//                                 item,

//                             required:
//                                 true

//                         };

//                     }
//                 );

//             const type =
//                 req.body.type ===
//                 "photocopy"

//                 ?

//                 "photocopy"

//                 :

//                 "normal";

//             if(
//                 type ===
//                 "photocopy"
//             ){

//                 requirements =
//                     [];

//             }

//             await QuickService
//                 .findByIdAndUpdate(

//                     req.params.id,

//                     {

//                         name:
//                             String(
//                                 req.body.name ||
//                                 ""
//                             ).trim(),

//                         type,

//                         price:
//                             Math.max(
//                                 0,
//                                 Number(
//                                     req.body.price ||
//                                     0
//                                 )
//                             ),

//                         description:
//                             String(
//                                 req.body.description ||
//                                 ""
//                             ).trim(),

//                         requirements

//                     }

//                 );

//             return res.redirect(
//                 "/admin/quick-service/services"
//             );

//         }
//         catch(error){

//             console.error(
//                 "UPDATE QUICK SERVICE ERROR:",
//                 error
//             );

//             return res
//                 .status(500)
//                 .send(
//                     error.message
//                 );

//         }

//     }
// );

// module.exports =
// router;

require("dotenv").config();

const express = require("express");
const router = express.Router();

const path = require("path");
const fs = require("fs");
const multer = require("multer");
const crypto = require("crypto");
const Razorpay = require("razorpay");

const QuickService =
    require("../models/QuickService");

const QuickOrder =
    require("../models/QuickOrder");

const QuickShopSetting =
    require("../models/QuickShopSetting");

// ======================================================
// RAZORPAY
// ======================================================

const razorpay =
new Razorpay({

    key_id:
        process.env.RAZORPAY_KEY_ID,

    key_secret:
        process.env.RAZORPAY_KEY_SECRET

});

// ======================================================
// PRIVATE DOCUMENT FOLDER
// ======================================================

const uploadDirectory =
path.join(
    process.cwd(),
    "storage",
    "quick-service"
);

if(
    !fs.existsSync(
        uploadDirectory
    )
){

    fs.mkdirSync(
        uploadDirectory,
        {
            recursive:true
        }
    );

}

// ======================================================
// MULTER
// ======================================================

const storage =
multer.diskStorage({

    destination:function(
        req,
        file,
        cb
    ){

        cb(
            null,
            uploadDirectory
        );

    },

    filename:function(
        req,
        file,
        cb
    ){

        const extension =
            path.extname(
                file.originalname
            ).toLowerCase();

        const fileName =
            "quick-" +
            Date.now() +
            "-" +
            Math.round(
                Math.random() *
                1e9
            ) +
            extension;

        cb(
            null,
            fileName
        );

    }

});

const upload =
multer({

    storage,

    limits:{
        fileSize:
            8 * 1024 * 1024,

        files:25
    },

    fileFilter:function(
        req,
        file,
        cb
    ){

        const allowed = [

            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp",
            "application/pdf"

        ];

        if(
            !allowed.includes(
                file.mimetype
            )
        ){

            return cb(
                new Error(
                    "Only JPG, PNG, WEBP and PDF allowed."
                )
            );

        }

        cb(
            null,
            true
        );

    }

});

// ======================================================
// GET SHOP SETTING
// ======================================================

async function getQuickShopSetting(){

    let setting =
        await QuickShopSetting
            .findOne();

    if(!setting){

        setting =
            await QuickShopSetting
                .create({

                    shopName:
                        "GLOBAL QUICK SERVICES",

                    isOpen:
                        false,

                    deliveryRadiusKm:
                        2,

                    deliveryCharge:
                        0

                });

    }

    return setting;

}

// ======================================================
// SAFE NUMBER
// ======================================================

function safeNumber(
    value,
    defaultValue = 0
){

    const number =
        Number(value);

    return Number.isFinite(
        number
    )
        ? number
        : defaultValue;

}

// ======================================================
// VALID GPS
// ======================================================

function validCoordinates(
    latitude,
    longitude
){

    if(
        latitude === null ||
        latitude === undefined ||
        latitude === "" ||

        longitude === null ||
        longitude === undefined ||
        longitude === ""
    ){

        return false;

    }

    const lat =
        Number(latitude);

    const lng =
        Number(longitude);

    return (

        Number.isFinite(lat) &&

        Number.isFinite(lng) &&

        lat >= -90 &&
        lat <= 90 &&

        lng >= -180 &&
        lng <= 180

    );

}

// ======================================================
// DISTANCE
// ======================================================

function calculateDistanceKm(
    latitude1,
    longitude1,
    latitude2,
    longitude2
){

    const earthRadiusKm =
        6371;

    const toRadians =
        value =>
            value *
            Math.PI /
            180;

    const latitudeDifference =
        toRadians(
            latitude2 -
            latitude1
        );

    const longitudeDifference =
        toRadians(
            longitude2 -
            longitude1
        );

    const calculation =

        Math.sin(
            latitudeDifference /
            2
        ) ** 2

        +

        Math.cos(
            toRadians(
                latitude1
            )
        )

        *

        Math.cos(
            toRadians(
                latitude2
            )
        )

        *

        Math.sin(
            longitudeDifference /
            2
        ) ** 2;

    return (

        earthRadiusKm *

        2 *

        Math.atan2(

            Math.sqrt(
                calculation
            ),

            Math.sqrt(
                1 -
                calculation
            )

        )

    );

}

// ======================================================
// ORDER NUMBER
// ======================================================

async function generateOrderNumber(){

    let number =
        1001;

    const lastOrder =
        await QuickOrder
            .findOne()
            .sort({
                createdAt:-1
            });

    if(
        lastOrder &&
        lastOrder.orderId
    ){

        const oldNumber =
            Number(

                String(
                    lastOrder.orderId
                )
                .replace(
                    "GQ",
                    ""
                )

            );

        if(
            Number.isFinite(
                oldNumber
            )
        ){

            number =
                oldNumber +
                1;

        }

    }

    return (
        "GQ" +
        number
    );

}

// ======================================================
// CUSTOMER PAGE
// GET /quick-service
// ======================================================

router.get(
    "/quick-service",

    async(req,res)=>{

        try{

            const setting =
                await getQuickShopSetting();

            const services =
                await QuickService
                    .find({
                        active:true
                    })
                    .sort({
                        createdAt:-1
                    })
                    .lean();

            return res.send(`

<!DOCTYPE html>

<html>

<head>

<meta
charset="UTF-8"
>

<meta
name="viewport"
content="width=device-width,initial-scale=1"
>

<title>
GLOBAL QUICK SERVICES
</title>

<script
src="https://checkout.razorpay.com/v1/checkout.js"
></script>

<style>

*{
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
margin:0;
background:#f1f5f9;
color:#0f172a;
}

.header{
padding:22px;
text-align:center;
color:white;
background:
linear-gradient(
135deg,
#0d604b,
#16a34a
);
}

.container{
max-width:650px;
margin:auto;
padding:15px;
}

.card{
background:white;
padding:20px;
border-radius:18px;
box-shadow:
0 10px 30px
rgba(0,0,0,.10);
}

.status{
padding:13px;
border-radius:12px;
text-align:center;
font-weight:bold;
margin-bottom:18px;
}

.status.open{
background:#dcfce7;
color:#166534;
}

.status.closed{
background:#fee2e2;
color:#991b1b;
}

label{
display:block;
margin-top:15px;
margin-bottom:6px;
font-weight:bold;
}

input,
select,
textarea{
width:100%;
padding:13px;
border:1px solid #cbd5e1;
border-radius:10px;
font-size:15px;
}

textarea{
min-height:90px;
}

.document-box{
margin-top:15px;
padding:15px;
background:#f8fafc;
border-radius:13px;
border:1px solid #dbeafe;
}

.location-box{
margin-top:15px;
padding:13px;
border-radius:10px;
background:#fef3c7;
color:#92400e;
font-weight:bold;
}

.location-box.success{
background:#dcfce7;
color:#166534;
}

.location-box.error{
background:#fee2e2;
color:#991b1b;
}

.location-btn{
width:100%;
margin-top:10px;
padding:13px;
border:0;
border-radius:10px;
background:#f59e0b;
color:white;
font-weight:bold;
}

.total{
margin-top:20px;
padding:15px;
background:#eff6ff;
border-radius:12px;
line-height:1.9;
}

.pay-btn{
width:100%;
margin-top:20px;
padding:15px;
border:0;
border-radius:10px;
background:#16a34a;
color:white;
font-size:16px;
font-weight:bold;
}

.pay-btn:disabled{
background:#94a3b8;
}

.hidden{
display:none;
}

</style>

</head>

<body>

<div class="header">

<h2>
⚡ GLOBAL QUICK SERVICES
</h2>

<p>
Fast Document Service at Your Doorstep
</p>

</div>

<div class="container">

<div class="card">

<div
class="status ${
setting.isOpen
?
"open"
:
"closed"
}"
>

${
setting.isOpen
?
"🟢 SHOP OPEN"
:
"🔴 SHOP CLOSED"
}

</div>

<label>
Select Service
</label>

<select
id="service"
>

<option value="">
Select Service
</option>

${
services.map(
service=>`

<option
value="${service._id}"
data-type="${service.type}"
data-price="${service.price}"
data-requirements='${JSON.stringify(service.requirements || [])}'
>

${service.name}
- ₹${service.price}

</option>

`
).join("")
}

</select>

<div
id="documentsArea"
></div>

<div
id="photoCopyOptions"
class="hidden"
>

<label>
Print Type
</label>

<select id="printType">

<option>
Black & White
</option>

<option>
Color
</option>

</select>

<label>
Copies
</label>

<input
type="number"
id="copies"
value="1"
min="1"
>

</div>

<label>
Customer Name
</label>

<input
type="text"
id="customerName"
>

<label>
Mobile Number
</label>

<input
type="tel"
id="mobile"
maxlength="10"
>

<label>
Delivery Address
</label>

<textarea
id="address"
></textarea>

<div
id="locationStatus"
class="location-box"
>

📍 Location check करें

</div>

<button
type="button"
class="location-btn"
id="checkLocationButton"
>
📍 CHECK MY LOCATION
</button>

<div class="total">

Service:
₹<span id="serviceAmount">0</span>

<br>

Delivery:
₹0
<br>

<strong>
Total:
₹<span id="totalAmount">0</span>
</strong>

</div>

<button
type="button"
class="pay-btn"
id="orderButton"
onclick="placeOrder()"
disabled
>

CHECK LOCATION FIRST

</button>

</div>

</div>

<script>

const SHOP_OPEN =
${setting.isOpen ? "true" : "false"};

const SHOP_LATITUDE =
${
validCoordinates(
setting.shopLocation?.latitude,
setting.shopLocation?.longitude
)
?
Number(
setting.shopLocation.latitude
)
:
"null"
};

const SHOP_LONGITUDE =
${
validCoordinates(
setting.shopLocation?.latitude,
setting.shopLocation?.longitude
)
?
Number(
setting.shopLocation.longitude
)
:
"null"
};

const DELIVERY_RADIUS =
${safeNumber(
setting.deliveryRadiusKm,
2
)};

const DELIVERY_CHARGE =0;

let customerLatitude =
null;

let customerLongitude =
null;

let customerAccuracy =
null;

let customerDistance =
null;

let locationAllowed =
false;

const serviceSelect =
document.getElementById(
    "service"
);

// PAGE ADD / REMOVE + LIVE PRICE
function addPhotocopyPage(){
  const box = document.getElementById("photocopyPageRows");
  if(!box) return;
  if(box.children.length >= 25){ alert("Maximum 25 pages allowed"); return; }
  const row = document.createElement("div");
  row.className = "page-upload-row";
  row.style.cssText = "display:flex;align-items:center;gap:8px;margin:10px 0;padding:9px;border:1px solid #ddd;border-radius:10px";
  const label = document.createElement("span");
  label.className = "page-label";
  const input = document.createElement("input");
  input.type = "file";
  input.name = "photocopyPages";
  input.accept = "image/jpeg,image/png,image/webp";
  input.required = true;
  input.style.cssText = "flex:1;min-width:0";
  const remove = document.createElement("button");
  remove.type = "button";
  remove.textContent = "✕";
  remove.style.cssText = "padding:10px;background:#dc2626;border:0;border-radius:8px;color:white;cursor:pointer";
  remove.onclick = function(){
    if(box.children.length <= 1){input.value = "";} else {row.remove();}
    updateTotal();
  };
  row.append(label,input,remove);
  box.appendChild(row);
  updateTotal();
}
function updateTotal(){
  const option = serviceSelect.options[serviceSelect.selectedIndex];
  const type = option?.dataset?.type || "";
  let serviceAmount = Number(option?.dataset?.price || 0);
  if(type === "photocopy"){
    const rows = [...document.querySelectorAll("#photocopyPageRows .page-upload-row")];
    const copies = Math.max(1,Math.floor(Number(document.getElementById("copies")?.value || 1)));
    const rate = document.getElementById("printType")?.value === "Color" ? 10 : 5;
    serviceAmount = rows.length * copies * rate;
    rows.forEach((row,i)=>{
      row.querySelector(".page-label").textContent = "Page " + (i+1);
      row.querySelector("button").style.display = rows.length > 1 ? "block" : "none";
    });
    const hint = document.getElementById("pageCountText");
    if(hint) hint.textContent = rows.length + " Pages × " + copies + " Copies × ₹" + rate + " = ₹" + serviceAmount;
  }
  document.getElementById("serviceAmount").textContent = serviceAmount.toFixed(2);
  document.getElementById("totalAmount").textContent = (serviceAmount + DELIVERY_CHARGE).toFixed(2);
}
document.getElementById("printType").addEventListener("change",updateTotal);
document.getElementById("copies").addEventListener("input",updateTotal);

serviceSelect.addEventListener(
"change",
function(){

    const option =
        this.options[
            this.selectedIndex
        ];

    const documentsArea =
        document.getElementById(
            "documentsArea"
        );

    const photoCopyOptions =
        document.getElementById(
            "photoCopyOptions"
        );

    documentsArea.innerHTML =
        "";

    photoCopyOptions
        .classList
        .add(
            "hidden"
        );

    if(!option.value){

        document.getElementById(
            "serviceAmount"
        ).textContent =
            "0";

        document.getElementById(
            "totalAmount"
        ).textContent =
            "0";

        return;

    }

    const price =
        Number(
            option.dataset.price ||
            0
        );

    document.getElementById(
        "serviceAmount"
    ).textContent =
        price;

    document.getElementById(
        "totalAmount"
    ).textContent =
        price +
        DELIVERY_CHARGE;

    if(
        option.dataset.type ===
        "photocopy"
    ){

        photoCopyOptions
            .classList
            .remove(
                "hidden"
            );        documentsArea.innerHTML = \`
<div class="document-box">
  <label>📷 Scan / Upload Document Pages</label>
  <p>हर Page अलग Upload करें (JPG, PNG या WEBP)।</p>
  <div id="photocopyPageRows"></div>
  <button type="button" id="addPhotocopyPage" style="margin-top:12px;padding:12px;background:#047857;color:white;border:0;border-radius:9px;font-weight:bold;cursor:pointer">➕ Add Page</button>
  <p id="pageCountText" style="color:#047857;font-weight:bold"></p>
</div>\`;
        addPhotocopyPage();
        document.getElementById("addPhotocopyPage")
          .addEventListener("click", addPhotocopyPage);
        updateTotal();

        return;

    }

    let requirements =
        [];

    try{

        requirements =
            JSON.parse(
                option.dataset
                .requirements ||
                "[]"
            );

    }
    catch(error){

        requirements =
            [];

    }

requirements.forEach(
function(item,index){

    const box =
        document.createElement(
            "div"
        );

    box.className =
        "document-box";

    const requiredMark =
        item.required
        ? "*"
        : "";

    const requiredAttribute =
        item.required
        ? "required"
        : "";

    const documentName =
        String(
            item.name ||
            "Document"
        );

    box.innerHTML =

        '<label>' +

        '📷 ' +
        documentName +
        requiredMark +

        '</label>' +

        '<input ' +

        'type="file" ' +

        'id="doc_' +
        index +
        '" ' +

        'data-doc-name="' +
        documentName
            .replace(
                /"/g,
                '&quot;'
            ) +
        '" ' +

        'accept="image/*" ' +

        'capture="environment" ' +

        requiredAttribute +

        '>';

    documentsArea.appendChild(
        box
    );

});

updateTotal();

});   // serviceSelect.addEventListener ka closing

// ======================================================
// DISTANCE
// ======================================================

function calculateDistanceKm(
    lat1,
    lon1,
    lat2,
    lon2
){

    const R =
        6371;

    const rad =
        function(value){

            return (
                value *
                Math.PI /
                180
            );

        };

    const dLat =
        rad(
            lat2 -
            lat1
        );

    const dLon =
        rad(
            lon2 -
            lon1
        );

    const a =

        Math.sin(
            dLat /
            2
        ) ** 2

        +

        Math.cos(
            rad(
                lat1
            )
        )

        *

        Math.cos(
            rad(
                lat2
            )
        )

        *

        Math.sin(
            dLon /
            2
        ) ** 2;

    return (

        R *

        2 *

        Math.atan2(

            Math.sqrt(
                a
            ),

            Math.sqrt(
                1 -
                a
            )

        )

    );

}

// ======================================================
// CHECK LOCATION
// ======================================================

function checkLocation(){

    const box =
        document.getElementById(
            "locationStatus"
        );

    const button =
        document.getElementById(
            "orderButton"
        );

    locationAllowed =
        false;

    button.disabled =
        true;

    if(
        !SHOP_OPEN
    ){

        box.className =
            "location-box error";

        box.innerHTML =
            "🔴 Shop अभी Closed है।";

        button.textContent =
            "SHOP CLOSED";

        return;

    }

    if(
        SHOP_LATITUDE === null ||
        SHOP_LONGITUDE === null
    ){

        box.className =
            "location-box error";

        box.innerHTML =
            "❌ Shop Location save नहीं है।";

        button.textContent =
            "SHOP LOCATION NOT AVAILABLE";

        return;

    }

    if(
        !navigator.geolocation
    ){

        box.className =
            "location-box error";

        box.innerHTML =
            "❌ GPS support नहीं है।";

        return;

    }

    checkLocationButton.disabled =
        true;

    checkLocationButton.textContent =
        "📍 CHECKING LOCATION...";

    box.className =
        "location-box";

    box.innerHTML =
        "📍 Location check हो रही है...";

    navigator.geolocation
    .getCurrentPosition(

        function(position){

            customerLatitude =
                Number(
                    position.coords.latitude
                );

            customerLongitude =
                Number(
                    position.coords.longitude
                );

            customerAccuracy =
                Number(
                    position.coords.accuracy ||
                    0
                );

            customerDistance =
                calculateDistanceKm(

                    Number(
                        SHOP_LATITUDE
                    ),

                    Number(
                        SHOP_LONGITUDE
                    ),

                    customerLatitude,

                    customerLongitude

                );

            checkLocationButton.disabled =
                false;

            checkLocationButton.textContent =
                "📍 CHECK LOCATION AGAIN";

            if(
                customerDistance <=
                DELIVERY_RADIUS
            ){

                locationAllowed =
                    true;

                box.className =
                    "location-box success";

                box.innerHTML =

                    "✅ DELIVERY AVAILABLE" +

                    "<br>" +

                    "Distance: " +

                    customerDistance
                    .toFixed(2) +

                    " KM";

                button.disabled =
                    false;

                button.textContent =
                    "💳 CONTINUE TO PAYMENT";

            }
            else{

                locationAllowed =
                    false;

                box.className =
                    "location-box error";

                box.innerHTML =

                    "❌ Delivery Available नहीं है." +

                    "<br>" +

                    "Distance: " +

                    customerDistance
                    .toFixed(2) +

                    " KM" +

                    "<br>" +

                    "Maximum Radius: " +

                    DELIVERY_RADIUS +

                    " KM";

                button.disabled =
                    true;

                button.textContent =
                    "OUTSIDE DELIVERY AREA";

            }

        },

        function(error){

            console.error(
                "LOCATION ERROR:",
                error
            );

            checkLocationButton.disabled =
                false;

            checkLocationButton.textContent =
                "📍 CHECK MY LOCATION";

            box.className =
                "location-box error";

            if(
                error.code === 1
            ){

                box.innerHTML =
                    "❌ Location Permission Denied. Browser में Location Allow करें.";

            }
            else if(
                error.code === 2
            ){

                box.innerHTML =
                    "❌ GPS Location नहीं मिल रही. Phone Location ON करें.";

            }
            else if(
                error.code === 3
            ){

                box.innerHTML =
                    "❌ Location Timeout. फिर से कोशिश करें.";

            }
            else{

                box.innerHTML =
                    "❌ Location Check नहीं हो सकी.";

            }

        },

        {
            enableHighAccuracy:
                true,

            timeout:
                20000,

            maximumAge:
                0
        }

    );

}

// ======================================================
// LOCATION BUTTON EVENT
// ======================================================

checkLocationButton.addEventListener(
    "click",
    checkLocation
);

async function placeOrder(){

    if(
        !SHOP_OPEN ||
        !locationAllowed
    ){

        return;

    }

    const serviceId =
        serviceSelect.value;

    if(!serviceId){

        alert(
            "Service select करें."
        );

        return;

    }

    const customerName =
        document
        .getElementById(
            "customerName"
        )
        .value
        .trim();

    const mobile =
        document
        .getElementById(
            "mobile"
        )
        .value
        .trim();

    const address =
        document
        .getElementById(
            "address"
        )
        .value
        .trim();

    if(
        !customerName ||
        !mobile ||
        !address
    ){

        alert(
            "Name, Mobile और Address जरूरी है."
        );

        return;

    }

    const formData =
        new FormData();

    formData.append(
        "serviceId",
        serviceId
    );

    formData.append(
        "customerName",
        customerName
    );

    formData.append(
        "mobile",
        mobile
    );

    formData.append(
        "address",
        address
    );

    formData.append(
        "latitude",
        customerLatitude
    );

    formData.append(
        "longitude",
        customerLongitude
    );

    formData.append(
        "accuracy",
        customerAccuracy || ""
    );

    formData.append(
        "copies",
        document
        .getElementById(
            "copies"
        )
        ?.value ||
        1
    );

    formData.append(
        "printType",
        document
        .getElementById(
            "printType"
        )
        ?.value ||
        "Black & White"
    );

    const option =
        serviceSelect.options[
            serviceSelect.selectedIndex
        ];

    if(
        option.dataset.type ===
        "photocopy"
    ){

        const inputs = [...document.querySelectorAll("#photocopyPageRows input[type=file]")];
        if(!inputs.length || inputs.some(input => input.files.length !== 1)){
          alert("हर Page के लिए एक Image Upload करें।");
          return;
        }
        inputs.forEach(input => formData.append("photocopyPages",input.files[0]));
    }
    else{

        const documentInputs =
            document.querySelectorAll(
                '[id^="doc_"]'
            );

        for(
            const input
            of documentInputs
        ){

            if(
                input.required &&
                !input.files.length
            ){

                alert(
                    input.dataset.docName +
                    " upload करें."
                );

                return;

            }

            if(
                input.files.length
            ){

                formData.append(
                    input.id,
                    input.files[0]
                );

                formData.append(
                    "name_" +
                    input.id,
                    input.dataset.docName
                );

            }

        }

    }

    const button =
        document.getElementById(
            "orderButton"
        );

    button.disabled =
        true;

    button.textContent =
        "PLEASE WAIT...";

    try{

        const response =
            await fetch(
                "/quick-service/create-order",
                {
                    method:"POST",
                    body:formData
                }
            );

        const data =
            await response.json();

        if(!data.success){

            alert(
                data.message
            );

            button.disabled =
                false;

            button.textContent =
                "CONTINUE TO PAYMENT";

            return;

        }

        const options = {

            key:
                data.key,

            amount:
                data.amount,

            currency:
                "INR",

            name:
                "GLOBAL QUICK SERVICES",

            description:
                data.serviceName,

            order_id:
                data.razorpayOrderId,

            handler:
            async function(response){

                const verify =
                    await fetch(
                        "/quick-service/verify-payment",
                        {

                            method:"POST",

                            headers:{
                                "Content-Type":
                                "application/json"
                            },

                            body:
                            JSON.stringify({

                                orderId:
                                    data.orderId,

                                razorpay_order_id:
                                    response
                                    .razorpay_order_id,

                                razorpay_payment_id:
                                    response
                                    .razorpay_payment_id,

                                razorpay_signature:
                                    response
                                    .razorpay_signature

                            })

                        }
                    );

                const result =
                    await verify.json();

                if(
                    result.success
                ){

                    window.location.href =
                        "/quick-service/success/" +
                        data.orderId;

                }
                else{

                    alert(
                        "Payment verification failed"
                    );

                }

            }

        };

        const razorpayObject =
            new Razorpay(
                options
            );

        razorpayObject.open();

    }
    catch(error){

        console.error(
            error
        );

        alert(
            "Order create नहीं हुआ."
        );

        button.disabled =
            false;

        button.textContent =
            "CONTINUE TO PAYMENT";

    }

}

</script>

</body>

</html>

            `);

        }
        catch(error){

            console.error(
                "QUICK SERVICE PAGE ERROR:",
                error
            );

            res
            .status(500)
            .send(
                error.message
            );

        }

    }
);

// ======================================================
// CREATE ORDER
// ======================================================

router.post(
    "/quick-service/create-order",

    upload.any(),

    async(req,res)=>{

        try{

            const setting =
                await getQuickShopSetting();

            if(
                !setting.isOpen
            ){

                return res
                .status(400)
                .json({

                    success:false,

                    message:
                        "Shop अभी Closed है."

                });

            }

            const service =
                await QuickService
                .findById(
                    req.body.serviceId
                );

            if(
                !service ||
                !service.active
            ){

                return res
                .status(404)
                .json({

                    success:false,

                    message:
                        "Service available नहीं है."

                });

            }

            if(
                !validCoordinates(
                    req.body.latitude,
                    req.body.longitude
                )
            ){

                return res
                .status(400)
                .json({

                    success:false,

                    message:
                        "Customer Location required."

                });

            }

            if(
                !validCoordinates(
                    setting
                    .shopLocation
                    ?.latitude,

                    setting
                    .shopLocation
                    ?.longitude
                )
            ){

                return res
                .status(400)
                .json({

                    success:false,

                    message:
                        "Shop Location available नहीं है."

                });

            }

            const customerLatitude =
                Number(
                    req.body.latitude
                );

            const customerLongitude =
                Number(
                    req.body.longitude
                );

            const distance =
                calculateDistanceKm(

                    Number(
                        setting
                        .shopLocation
                        .latitude
                    ),

                    Number(
                        setting
                        .shopLocation
                        .longitude
                    ),

                    customerLatitude,

                    customerLongitude

                );

            const radius =
                safeNumber(
                    setting
                    .deliveryRadiusKm,
                    2
                );

            if(
                distance >
                radius
            ){

                return res
                .status(400)
                .json({

                    success:false,

                    message:
                        "Delivery केवल " +
                        radius +
                        " KM तक available है."

                });

            }

// ======================================================
// DOCUMENTS
// ======================================================

            const documents =
                [];

            for(
                const file
                of
                req.files || []
            ){

                let documentName =
                    "Document";

                if(
                    file.fieldname ===
                    "photocopyPages"
                ){

                    documentName =
                        "Photo Copy Page";

                }
                else{

                    documentName =
                        req.body[
                            "name_" +
                            file.fieldname
                        ]
                        ||
                        "Document";

                }

                documents.push({

                    documentName,

                    fileName:
                        file.filename,

                    originalName:
                        file.originalname,

                    mimeType:
                        file.mimetype

                });

            }

// ======================================================
// AMOUNT
// ======================================================

            const copies =
                Math.max(

                    1,

                    safeNumber(
                        req.body.copies,
                        1
                    )

                );

            let serviceAmount =
                safeNumber(
                    service.price,
                    0
                );

            if(
                service.type ===
                "photocopy"
            ){

                const pages =
                    documents.length ||
                    1;

                serviceAmount =

                    safeNumber(
                        service.price,
                        0
                    )

                    *

                    pages

                    *

                    copies;

            }

            const deliveryCharge = 0;

            const totalAmount =
                serviceAmount +
                deliveryCharge;

            const orderId =
                await generateOrderNumber();

// ======================================================
// RAZORPAY ORDER
// ======================================================

            const razorpayOrder =
                await razorpay
                .orders
                .create({

                    amount:
                        Math.round(
                            totalAmount *
                            100
                        ),

                    currency:
                        "INR",

                    receipt:
                        orderId

                });

// ======================================================
// SAVE ORDER
// ======================================================

            const order =
                await QuickOrder
                .create({

                    orderId,

                    customerName:
                        String(
                            req.body.customerName ||
                            ""
                        ).trim(),

                    mobile:
                        String(
                            req.body.mobile ||
                            ""
                        ).trim(),

                    address:
                        String(
                            req.body.address ||
                            ""
                        ).trim(),

                    customerLocation:{

                        latitude:
                            customerLatitude,

                        longitude:
                            customerLongitude,

                        accuracy:
                            safeNumber(
                                req.body.accuracy,
                                0
                            )

                    },

                    distanceFromShopKm:
                        Number(
                            distance
                            .toFixed(2)
                        ),

                    serviceId:
                        service._id,

                    serviceName:
                        service.name,

                    serviceType:
                        service.type,

                    documents,

                    copies,

                    printType:
                        req.body
                        .printType ||
                        "Black & White",

                    serviceAmount,

                    deliveryCharge,

                    totalAmount,

                    paymentStatus:
                        "Pending",

                    razorpayOrderId:
                        razorpayOrder.id,

                    status:
                        "Pending"

                });

            return res.json({

                success:true,

                key:
                    process.env
                    .RAZORPAY_KEY_ID,

                orderId:
                    order._id,

                orderNumber:
                    order.orderId,

                serviceName:
                    order.serviceName,

                amount:
                    razorpayOrder.amount,

                razorpayOrderId:
                    razorpayOrder.id

            });

        }
        catch(error){

            console.error(
                "CREATE QUICK ORDER ERROR:",
                error
            );

            return res
            .status(500)
            .json({

                success:false,

                message:
                    error.message

            });

        }

    }
);

// ======================================================
// VERIFY PAYMENT
// ======================================================

router.post(
    "/quick-service/verify-payment",
    async (req, res) => {
        try {
            const {
                orderId,
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature
            } = req.body;

            // Validate required fields
            if (
                !orderId ||
                !razorpay_order_id ||
                !razorpay_payment_id ||
                !razorpay_signature
            ) {
                return res.status(400).json({
                    success: false,
                    message: "Missing payment details"
                });
            }

            // Check Razorpay secret
            const secret =
                process.env.RAZORPAY_KEY_SECRET;

            if (!secret) {
                console.error(
                    "RAZORPAY_KEY_SECRET is missing"
                );

                return res.status(500).json({
                    success: false,
                    message: "Payment configuration error"
                });
            }

            // Generate expected signature
            const body =
                razorpay_order_id +
                "|" +
                razorpay_payment_id;

            const expectedSignature =
                crypto
                    .createHmac("sha256", secret)
                    .update(body)
                    .digest("hex");

            // Validate signature format
            if (
                !/^[a-f0-9]{64}$/i.test(
                    razorpay_signature
                )
            ) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid Payment Signature"
                });
            }

            const expectedBuffer = Buffer.from(
                expectedSignature,
                "hex"
            );

            const receivedBuffer = Buffer.from(
                razorpay_signature,
                "hex"
            );

            // Verify signature securely
            if (
                expectedBuffer.length !== 32 ||
                receivedBuffer.length !== 32 ||
                !crypto.timingSafeEqual(
                    expectedBuffer,
                    receivedBuffer
                )
            ) {
                console.error(
                    "RAZORPAY SIGNATURE VERIFICATION FAILED"
                );

                return res.status(400).json({
                    success: false,
                    message: "Invalid Payment Signature"
                });
            }

            // Find the existing order
            const order = await QuickOrder.findById(
                orderId
            );

            if (!order) {
                return res.status(404).json({
                    success: false,
                    message: "Order not found"
                });
            }

            // IMPORTANT:
            // Confirm that razorpay_order_id belongs
            // to this database order.
            //
            // Replace "razorpayOrderId" below with
            // your actual schema field name.
            if (
                order.razorpayOrderId !==
                razorpay_order_id
            ) {
                return res.status(400).json({
                    success: false,
                    message: "Order ID mismatch"
                });
            }

            // Update only after successful verification
            order.paymentStatus = "Paid";
            order.razorpayPaymentId =
                razorpay_payment_id;
            order.status = "Pending";

            await order.save();

            return res.json({
                success: true,
                orderNumber: order.orderId
            });
        } catch (error) {
            console.error(
                "VERIFY PAYMENT ERROR:",
                error
            );

            return res.status(500).json({
                success: false,
                message: "Payment verification failed"
            });
        }
    }
);
// ======================================================
// SUCCESS PAGE
// ======================================================

router.get(
    "/quick-service/success/:id",

    async(req,res)=>{

        const order =
            await QuickOrder
            .findById(
                req.params.id
            )
            .lean();

        if(!order){

            return res
            .status(404)
            .send(
                "Order Not Found"
            );

        }

        return res.send(`

<!DOCTYPE html>

<html>

<head>

<meta
name="viewport"
content="width=device-width,initial-scale=1"
>

<title>
Order Successful
</title>

</head>

<body style="
font-family:Arial;
background:#f0fdf4;
padding:40px;
text-align:center;
">

<h1>
✅ PAYMENT SUCCESSFUL
</h1>

<h2>
${order.orderId}
</h2>

<p>
आपका Order मिल गया है।
</p>

<p>
Service:
<strong>
${order.serviceName}
</strong>
</p>

<p>
Amount:
<strong>
₹${order.totalAmount}
</strong>
</p>

<a href="/">
HOME
</a>

</body>

</html>

        `);

    }
);

// ======================================================
// ADMIN SHOP STATUS
// GET /admin/quick-service/shop-status
// ======================================================

router.get(
    "/admin/quick-service/shop-status",

    async(req,res)=>{

        try{

            const setting =
                await getQuickShopSetting();

            const locationSaved =
                validCoordinates(

                    setting
                    .shopLocation
                    ?.latitude,

                    setting
                    .shopLocation
                    ?.longitude

                );

            return res.send(`

<!DOCTYPE html>

<html>

<head>

<meta
name="viewport"
content="width=device-width,initial-scale=1"
>

<title>
Quick Service Shop Control
</title>

<style>

*{
box-sizing:border-box;
font-family:Arial;
}

body{
margin:0;
padding:20px;
background:#f1f5f9;
}

.card{
max-width:470px;
margin:30px auto;
padding:25px;
background:white;
border-radius:20px;
text-align:center;
box-shadow:
0 15px 45px
rgba(0,0,0,.12);
}

.status{
padding:15px;
margin:20px 0;
border-radius:12px;
font-size:20px;
font-weight:bold;
}

.open{
background:#dcfce7;
color:#166534;
}

.closed{
background:#fee2e2;
color:#991b1b;
}

.setting{
padding:15px;
background:#f8fafc;
border-radius:12px;
text-align:left;
line-height:1.9;
}

button{
width:100%;
padding:15px;
margin-top:18px;
border:0;
border-radius:12px;
color:white;
font-weight:bold;
font-size:16px;
}

.open-btn{
background:#16a34a;
}

.close-btn{
background:#dc2626;
}

.links a{
display:block;
margin-top:10px;
padding:12px;
background:#2563eb;
color:white;
text-decoration:none;
border-radius:10px;
}

</style>

</head>

<body>

<div class="card">

<h1>
⚡ GLOBAL QUICK SERVICES
</h1>

<div
class="status ${
setting.isOpen
?
"open"
:
"closed"
}"
>

${
setting.isOpen
?
"🟢 SHOP OPEN"
:
"🔴 SHOP CLOSED"
}

</div>

<div class="setting">

📦 Delivery Radius:
<strong>
${safeNumber(
setting.deliveryRadiusKm,
2
)} KM
</strong>

<br>

💵 Delivery Charge:
<strong>
₹${safeNumber(
setting.deliveryCharge,
0
)}
</strong>

<br>

📍 Shop Location:
<strong>
${
locationSaved
?
"Saved ✅"
:
"Not Saved ❌"
}
</strong>

</div>

<form
method="POST"
action="/admin/quick-service/toggle-shop"
id="toggleForm"
>

<input
type="hidden"
name="latitude"
id="latitude"
>

<input
type="hidden"
name="longitude"
id="longitude"
>

<input
type="hidden"
name="accuracy"
id="accuracy"
>

<button
type="button"
id="toggleButton"
class="${
setting.isOpen
?
"close-btn"
:
"open-btn"
}"
>

${
setting.isOpen
?
"🔴 CLOSE SHOP"
:
"🟢 OPEN SHOP WITH LOCATION"
}

</button>

</form>

<p
id="locationMessage"
>

${
setting.isOpen
?
"✅ 2 KM के अंदर Customer order कर सकते हैं."
:
"Shop Open करने के लिए GPS Location Allow करें."
}

</p>

<div class="links">

    <a href="/admin/quick-service/orders">
        🔔 ORDERS
    </a>

    <a href="/admin/quick-service/services">
        🛠 MANAGE SERVICES
    </a>

    <a href="/quick-service">
        👤 CUSTOMER PAGE
    </a>

</div>

</div>

<div class="setting">

📦 Delivery Radius:
<strong>
${safeNumber(
setting.deliveryRadiusKm,
2
)} KM
</strong>

<br>

💵 Delivery Charge:
<strong>
₹${safeNumber(
setting.deliveryCharge,
0
)}
</strong>

<br>

📍 Shop Location:
<strong>
${
locationSaved
?
"Saved ✅"
:
"Not Saved ❌"
}
</strong>

</div>

<form
method="POST"
action="/admin/quick-service/toggle-shop"
id="toggleForm"
>

<input
type="hidden"
name="latitude"
id="latitude"
>

<input
type="hidden"
name="longitude"
id="longitude"
>

<input
type="hidden"
name="accuracy"
id="accuracy"
>

<button
type="button"
id="toggleButton"
class="${
setting.isOpen
?
"close-btn"
:
"open-btn"
}"
>

${
setting.isOpen
?
"🔴 CLOSE SHOP"
:
"🟢 OPEN SHOP WITH LOCATION"
}

</button>

</form>

<p
id="locationMessage"
>

${
setting.isOpen
?
"✅ 2 KM के अंदर Customer order कर सकते हैं."
:
"Shop Open करने के लिए GPS Location Allow करें."
}

</p>

<div class="links">

<a href="/admin/quick-service/orders">
🔔 ORDERS
</a>

<a href="/quick-service">
👤 CUSTOMER PAGE
</a>

</div>

</div>

<script>

const SHOP_OPEN =
${setting.isOpen ? "true" : "false"};

const button =
document.getElementById(
    "toggleButton"
);

const form =
document.getElementById(
    "toggleForm"
);

const message =
document.getElementById(
    "locationMessage"
);

button.addEventListener(
"click",
function(){

    if(SHOP_OPEN){

        button.disabled =
            true;

        button.textContent =
            "CLOSING SHOP...";

        form.submit();

        return;

    }

    if(
        !navigator.geolocation
    ){

        alert(
            "GPS support नहीं है."
        );

        return;

    }

    button.disabled =
        true;

    button.textContent =
        "📍 GETTING LOCATION...";

    navigator.geolocation
    .getCurrentPosition(

    function(position){

        document
        .getElementById(
            "latitude"
        )
        .value =
            position.coords
            .latitude;

        document
        .getElementById(
            "longitude"
        )
        .value =
            position.coords
            .longitude;

        document
        .getElementById(
            "accuracy"
        )
        .value =
            position.coords
            .accuracy;

        message.innerHTML =
            "✅ Location मिली. Shop Open हो रही है...";

        form.submit();

    },

    function(error){

        console.error(
            error
        );

        button.disabled =
            false;

        button.textContent =
            "🟢 OPEN SHOP WITH LOCATION";

        message.innerHTML =
            "❌ Location Permission Allow करें.";

    },

    {

        enableHighAccuracy:
            true,

        timeout:
            20000,

        maximumAge:
            0

    }

    );

});

</script>

</body>

</html>

            `);

        }
        catch(error){

            console.error(
                error
            );

            res
            .status(500)
            .send(
                error.message
            );

        }

    }
);

// ======================================================
// TOGGLE SHOP
// ======================================================

router.post(
    "/admin/quick-service/toggle-shop",

    async(req,res)=>{

        try{

            const setting =
                await getQuickShopSetting();

            const nextStatus =
                !setting.isOpen;

            if(nextStatus){

                const {

                    latitude,

                    longitude,

                    accuracy

                } = req.body;

                if(
                    !validCoordinates(
                        latitude,
                        longitude
                    )
                ){

                    return res
                    .status(400)
                    .send(
                        "Shop Open करने के लिए GPS Location जरूरी है."
                    );

                }

                setting.shopLocation = {

                    latitude:
                        Number(
                            latitude
                        ),

                    longitude:
                        Number(
                            longitude
                        ),

                    accuracy:
                        safeNumber(
                            accuracy,
                            0
                        ),

                    updatedAt:
                        new Date()

                };

                setting.deliveryRadiusKm =
                    2;

            }

            setting.isOpen =
                nextStatus;

            await setting.save();

            return res.redirect(
                "/admin/quick-service/shop-status"
            );

        }
        catch(error){

            console.error(
                error
            );

            return res
            .status(500)
            .send(
                error.message
            );

        }

    }
);

// ======================================================
// ADMIN ORDERS
// ======================================================
function quickAdminOnly(req,res,next){
    if(!req.session || !req.session.adminId){
        return res.status(403).send('Admin Login Required');
    }
    next();
}
function quickEscape(value){
    return String(value == null ? '' : value)
        .replace(/&/g,'&amp;').replace(/</g,'&lt;')
        .replace(/>/g,'&gt;').replace(/"/g,'&quot;')
        .replace(/'/g,'&#39;');
}
const QUICK_STATUSES = ['Pending','Accepted','Processing','Ready',
    'Packed','Out for Delivery','Delivered','Cancelled'];
function quickCard(order){
    const id=String(order._id), status=order.status || 'Pending';
    const q=quickEscape;
    const money=n=>'₹'+Number(n||0).toFixed(2);
    const docs=(order.documents||[]).map((doc,i)=>{
        const url='/admin/quick-service/document/'+encodeURIComponent(id)+'/'+i;
        const label=q(doc.documentName||'Document');
        const image=doc.mimeType && !String(doc.mimeType).startsWith('image/') ? '' :
            '<img loading="lazy" src="'+url+'" alt="'+label+'" onerror="this.style.display=\'none\'">';
        return '<div class="doc"><b>'+label+'</b>'+image+
            '<a class="download" href="'+url+'?download=1">⬇ DOWNLOAD</a></div>';
    }).join('') || '<p>No documents</p>';
    return `<article class="order" data-id="${q(id)}" data-status="${q(status)}">
      <div class="summary"><div><b>#${q(order.orderId)}</b><small>${q(order.serviceName)}</small>
        <span class="status">${q(status)}</span></div>
        <div class="price">${money(order.totalAmount)}<small>Paid ✅</small></div></div>
      <details><summary>📂 Customer Details & Download</summary>
        <div class="detail"><p>👤 ${q(order.customerName)}</p>
        <p>📞 <a href="tel:${q(order.mobile)}">${q(order.mobile)}</a></p>
        <p>🏠 ${q(order.address)}</p>
        <p>📍 ${Number(order.distanceFromShopKm||0).toFixed(2)} KM</p>
        <p>Service: ${money(order.serviceAmount)} | Delivery: ${money(order.deliveryCharge)}</p>
        <p>Payment ID: ${q(order.razorpayPaymentId||'N/A')}</p>
        <p>Copies: ${q(order.copies||1)} | Print: ${q(order.printType||'Black & White')}</p>
        <h4>📄 Customer Documents</h4><div class="docs">${docs}</div></div>
      </details>
      ${status==='Pending'?`<button class="accept" type="button" data-accept="${q(id)}">✅ ACCEPT ORDER</button>`:''}
      <form class="status-form" data-id="${q(id)}"><select name="status">
        ${QUICK_STATUSES.map(st=>`<option value="${q(st)}" ${status===st?'selected':''}>${q(st)}</option>`).join('')}
        </select><button type="submit">UPDATE STATUS</button></form>
    </article>`;
}
function quickCards(orders){
    return orders.length ? orders.map(quickCard).join('') : '<p>No paid orders yet.</p>';
}
// ADMIN ORDERS
// ======================================================
// ======================================================
// ADMIN QUICK SERVICE ORDERS
// ======================================================

router.get(
    "/admin/quick-service/orders",

    quickAdminOnly,

    async(req,res)=>{

        try{
            if(req.query.partial === "1") {
                const items = await QuickOrder.find({paymentStatus:"Paid"}).sort({createdAt:-1}).lean();
                res.set("Cache-Control","private, no-store");
                return res.send(quickCards(items));
            }

            // ==================================================
            // SYNC PENDING ORDERS WITH RAZORPAY
            // ==================================================

            const pendingOrders =
                await QuickOrder.find({

                    paymentStatus:
                        "Pending",

                    razorpayOrderId:{
                        $exists:true,
                        $ne:""
                    }

                });

            for(
                const pendingOrder
                of pendingOrders
            ){

                try{

                    const razorpayOrder =
                        await razorpay
                        .orders
                        .fetch(
                            pendingOrder
                            .razorpayOrderId
                        );

                    console.log(
                        "RAZORPAY ORDER:",
                        pendingOrder.orderId,
                        razorpayOrder.status
                    );

                    if(
                        razorpayOrder &&
                        razorpayOrder.status ===
                        "paid"
                    ){

                        let paymentId =
                            "";

                        // ==========================================
                        // GET PAYMENT ID
                        // ==========================================

                        try{

                            const payments =
                                await razorpay
                                .orders
                                .fetchPayments(
                                    pendingOrder
                                    .razorpayOrderId
                                );

                            if(
                                payments &&
                                Array.isArray(
                                    payments.items
                                ) &&
                                payments.items.length >
                                0
                            ){

                                const paidPayment =
                                    payments.items.find(
                                        function(payment){

                                            return (
                                                payment.status ===
                                                "captured"
                                            );

                                        }
                                    )
                                    ||
                                    payments.items[0];

                                if(paidPayment){

                                    paymentId =
                                        paidPayment.id ||
                                        "";

                                }

                            }

                        }
                        catch(paymentError){

                            console.error(
                                "FETCH PAYMENT ERROR:",
                                pendingOrder.orderId,
                                paymentError.message
                            );

                        }

                        // ==========================================
                        // MARK ORDER PAID
                        // ==========================================

                        pendingOrder.paymentStatus =
                            "Paid";

                        if(
                            !pendingOrder.status ||
                            pendingOrder.status ===
                            "Pending"
                        ){

                            pendingOrder.status =
                                "Pending";

                        }

                        if(paymentId){

                            pendingOrder
                            .razorpayPaymentId =
                                paymentId;

                        }

                        await pendingOrder.save();

                        console.log(
                            "PAYMENT SYNCED:",
                            pendingOrder.orderId
                        );

                    }

                }
                catch(syncError){

                    console.error(
                        "RAZORPAY SYNC ERROR:",
                        pendingOrder.orderId,
                        syncError.message
                    );

                }

            }

            // ==================================================
            // GET PAID ORDERS
            // ==================================================

            const orders =
                await QuickOrder
                .find({
                    paymentStatus:"Paid"
                })
                .sort({
                    createdAt:-1
                })
                .lean();

            res.set('Cache-Control','private, no-store');
            return res.send(`<!doctype html><html lang="hi"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Quick Service Orders</title><style>
*{box-sizing:border-box}body{margin:0;background:#f1f5f9;color:#0f172a;font-family:Arial,sans-serif}
main{max-width:900px;margin:auto;padding:14px}.head,.order{background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:14px;margin-bottom:12px}
h1{font-size:23px;margin:0 0 12px}.head a{display:inline-block;margin-right:13px;color:#2563eb;text-decoration:none;font-size:14px}
#enable{background:#15803d;color:white;padding:11px;border:0;border-radius:8px;margin:14px 8px 0 0;font-weight:bold;cursor:pointer}
#live{font-size:12px;color:#64748b}.summary{display:flex;justify-content:space-between;gap:12px}.summary b{font-size:18px}
.summary small,.price small{display:block;font-size:12px;color:#64748b;margin-top:5px}.price{text-align:right;font-weight:bold;font-size:18px}
.price small{color:#15803d}.status{display:inline-block;background:#dbeafe;color:#1d4ed8;border-radius:12px;font-size:11px;padding:5px 9px;margin-top:8px}
details{border:1px solid #dbeafe;border-radius:9px;margin:13px 0;overflow:hidden}
details summary{padding:12px;background:#eff6ff;color:#1d4ed8;font-weight:bold;cursor:pointer}
.detail{padding:12px;font-size:14px;overflow-wrap:anywhere}.detail p{margin:8px 0}.docs{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px}
.doc{padding:9px;border:1px solid #ddd;border-radius:9px}.doc img{display:block;width:100%;height:110px;object-fit:contain}
.download{display:block;background:#2563eb;color:white;text-align:center;padding:9px;margin-top:8px;border-radius:8px;text-decoration:none}
button{cursor:pointer;border:0;border-radius:9px;padding:11px;font-weight:bold}.accept{width:100%;background:#16a34a;color:white;margin-bottom:9px}
.status-form{display:flex;gap:8px}.status-form select{flex:1;min-width:0;padding:10px;border:1px solid #cbd5e1;border-radius:8px}.status-form button{background:#0f766e;color:#fff}
#alert{background:#fef3c7;padding:13px;margin-bottom:13px;border-radius:9px;font-weight:bold}#alert[hidden]{display:none}
</style></head><body><main><div class="head"><h1>🔔 Quick Service Orders</h1>
<a href="/admin/quick-service/shop-status">← Shop Control</a>
<a href="/admin/quick-service/orders">🔄 Refresh Payments</a><div>
<button type="button" id="enable">🔔 ENABLE SOUND</button><span id="live">Checking orders...</span></div></div>
<div id="alert" hidden>🔔 NEW ORDER</div><section id="ordersList">${quickCards(orders)}</section></main>
<script>
(function(){
const list=document.getElementById('ordersList'),btn=document.getElementById('enable');
const live=document.getElementById('live'),alertBox=document.getElementById('alert');
let audio=null, enabled=false, timer=null, working=false;
const getCards=()=>Array.from(list.querySelectorAll('.order'));
let known=new Set(getCards().map(c=>c.dataset.id));
const getPending=()=>getCards().filter(c=>c.dataset.status==='Pending');
function beep(){if(!audio||!enabled)return;const now=audio.currentTime;
 [0,.22].forEach(delay=>{let o=audio.createOscillator(),g=audio.createGain(),t=now+delay;
 o.type='sine';o.frequency.value=950;g.gain.setValueAtTime(.001,t);
 g.gain.linearRampToValueAtTime(.20,t+.03);g.gain.exponentialRampToValueAtTime(.001,t+.18);
 o.connect(g);g.connect(audio.destination);o.start(t);o.stop(t+.2);});}
function ring(){if(!enabled||getPending().length===0){if(timer)clearInterval(timer);timer=null;return}
 if(timer)return;beep();timer=setInterval(()=>{if(!getPending().length)ring();else beep()},1800);}
btn.addEventListener('click',async()=>{try{let AC=window.AudioContext||window.webkitAudioContext;
 if(!AC)throw Error('Audio unsupported');audio=audio||new AC();await audio.resume();enabled=true;
 btn.textContent='🔊 SOUND ENABLED';ring()}catch(e){alert('Enable Sound failed')}});
async function refresh(){if(working)return;working=true;try{
 const response=await fetch('/admin/quick-service/orders/live',{credentials:'same-origin',cache:'no-store'});
 if(!response.ok)throw Error('Live orders unavailable');const data=await response.json();
 const nextIds=new Set(data.orders.map(o=>o.id));const fresh=data.orders.filter(o=>!known.has(o.id)&&o.status==='Pending');
 // Avoid replacing opened details or status forms when no order has changed.
 const oldSignature=getCards().map(c=>c.dataset.id+':'+c.dataset.status).join('|');
 const newSignature=data.orders.map(o=>o.id+':'+o.status).join('|');
 if(oldSignature!==newSignature){
  const opened=new Set(getCards().filter(c=>c.querySelector('details[open]')).map(c=>c.dataset.id));
  const html=await fetch('/admin/quick-service/orders?partial=1',{credentials:'same-origin',cache:'no-store'});
  if(!html.ok)throw Error('Orders update failed');list.innerHTML=await html.text();
  getCards().forEach(c=>{if(opened.has(c.dataset.id)){let d=c.querySelector('details');if(d)d.open=true}});
 }
 known=nextIds;if(fresh.length){alertBox.hidden=false;alertBox.textContent='🔔 '+fresh.length+' NEW ORDER!';document.title='🔔 New Order'}
 ring();live.textContent='🟢 LIVE | '+data.orders.length+' Paid Orders';
 }catch(e){console.error(e);live.textContent='🔴 Connection issue'}finally{working=false}}
async function changeStatus(id,status,button){button.disabled=true;try{
 const r=await fetch('/admin/quick-service/order/'+encodeURIComponent(id)+'/status',{
 method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/x-www-form-urlencoded','Accept':'application/json'},
 body:new URLSearchParams({status}).toString()});
 if(!r.ok)throw Error('Status save failed');const card=getCards().find(c=>c.dataset.id===id);
 if(card)card.dataset.status=status;ring();await refresh();
 }catch(e){alert('Status update failed');console.error(e)}finally{button.disabled=false}}
list.addEventListener('click',e=>{let b=e.target.closest('[data-accept]');if(b)changeStatus(b.dataset.accept,'Accepted',b)});
list.addEventListener('submit',e=>{let f=e.target.closest('.status-form');if(!f)return;e.preventDefault();
 changeStatus(f.dataset.id,f.querySelector('select').value,f.querySelector('button'))});
setInterval(refresh,5000);refresh();
})();
</script></body></html>`);
        }catch(error){console.error('QUICK ORDERS ERROR:',error);return res.status(500).send('Unable to load orders')}
    }
);
// Lightweight live polling endpoint
router.get('/admin/quick-service/orders/live',quickAdminOnly,async(req,res)=>{
    try{const orders=await QuickOrder.find({paymentStatus:'Paid'}).sort({createdAt:-1})
        .select('_id status').lean();res.set('Cache-Control','private, no-store');
        return res.json({orders:orders.map(o=>({id:String(o._id),status:o.status||'Pending'}))});
    }catch(e){console.error(e);return res.status(500).json({error:'Failed to check orders'})}
});
// Compact card HTML for polling; no customer details outside an admin session
router.get('/admin/quick-service/orders',quickAdminOnly,async(req,res,next)=>{
    if(req.query.partial!=='1')return next();
    try{const orders=await QuickOrder.find({paymentStatus:'Paid'}).sort({createdAt:-1}).lean();
        res.set('Cache-Control','private, no-store');return res.send(quickCards(orders));
    }catch(e){return res.status(500).send('Unable to load orders')}
});
// UPDATE ORDER STATUS
router.post('/admin/quick-service/order/:id/status',quickAdminOnly,async(req,res)=>{
    try{const status=String(req.body.status||'').trim();
        if(!QUICK_STATUSES.includes(status))return res.status(400).json({error:'Invalid status'});
        const updated=await QuickOrder.findByIdAndUpdate(req.params.id,{status},{new:true});
        if(!updated)return res.status(404).json({error:'Order not found'});
        if(req.get('Accept')?.includes('application/json'))return res.json({success:true,status:updated.status});
        return res.redirect('/admin/quick-service/orders');
    }catch(e){console.error(e);return res.status(500).json({error:'Status update failed'})}
});
// ======================================================
// DOCUMENT VIEW / DOWNLOAD
// ======================================================

router.get(
    "/admin/quick-service/document/:orderId/:index",

    quickAdminOnly,

    async(req,res)=>{

        try{

            const order =
                await QuickOrder
                .findById(
                    req.params.orderId
                );

            if(!order){

                return res
                .status(404)
                .send(
                    "Order Not Found"
                );

            }

            const index =
                Number(
                    req.params.index
                );

            const document =
                order.documents[
                    index
                ];

            if(!document){

                return res
                .status(404)
                .send(
                    "Document Not Found"
                );

            }

            const filePath =
                path.join(

                    uploadDirectory,

                    document.fileName

                );

            if(
                !fs.existsSync(
                    filePath
                )
            ){

                return res
                .status(404)
                .send(
                    "File Not Found"
                );

            }

            if(
                req.query.download ===
                "1"
            ){

                return res.download(

                    filePath,

                    document.originalName ||
                    document.fileName

                );

            }

            return res.sendFile(
                filePath
            );

        }
        catch(error){

            console.error(
                error
            );

            res
            .status(500)
            .send(
                error.message
            );

        }

    }
);

// ======================================================
// ADMIN MANAGE QUICK SERVICES
// GET /admin/quick-service/services
// ======================================================

router.get(
    "/admin/quick-service/services",
    async (req, res) => {

        try {

            const services =
                await QuickService
                    .find({})
                    .sort({
                        createdAt: -1
                    })
                    .lean();

            return res.send(`

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
Manage Quick Services
</title>

<style>

*{
    box-sizing:border-box;
}

body{
    margin:0;
    background:#f1f5f9;
    font-family:Arial,sans-serif;
    color:#0f172a;
}

.header{
    padding:20px;
    color:white;
    text-align:center;
    background:
        linear-gradient(
            135deg,
            #065f46,
            #16a34a
        );
}

.container{
    width:100%;
    max-width:900px;
    margin:auto;
    padding:18px;
}

.nav{
    display:grid;
    grid-template-columns:
        repeat(
            auto-fit,
            minmax(150px,1fr)
        );
    gap:10px;
    margin-bottom:18px;
}

.nav a{
    padding:12px;
    border-radius:10px;
    background:#2563eb;
    color:white;
    text-align:center;
    text-decoration:none;
    font-weight:800;
}

.card{
    padding:20px;
    margin-bottom:18px;
    border-radius:18px;
    background:white;
    box-shadow:
        0 8px 25px
        rgba(15,23,42,.08);
}

label{
    display:block;
    margin-top:14px;
    margin-bottom:5px;
    font-weight:800;
}

input,
select,
textarea{
    width:100%;
    padding:12px;
    border:
        1px solid
        #cbd5e1;
    border-radius:9px;
    font-size:15px;
}

textarea{
    min-height:80px;
}

.requirements-box{
    margin-top:15px;
    padding:15px;
    border-radius:12px;
    background:#f8fafc;
}

.requirement-row{
    display:flex;
    gap:8px;
    margin-top:8px;
}

.requirement-row input{
    flex:1;
}

.remove-btn{
    width:45px;
    border:0;
    border-radius:8px;
    background:#dc2626;
    color:white;
    cursor:pointer;
}

.add-doc-btn{
    margin-top:10px;
    padding:10px 14px;
    border:0;
    border-radius:8px;
    background:#0ea5e9;
    color:white;
    font-weight:800;
    cursor:pointer;
}

.save-btn{
    width:100%;
    margin-top:18px;
    padding:14px;
    border:0;
    border-radius:10px;
    background:#16a34a;
    color:white;
    font-weight:900;
    font-size:16px;
    cursor:pointer;
}

.service{
    padding:16px;
    margin-bottom:12px;
    border:
        1px solid
        #e2e8f0;
    border-radius:13px;
}

.service-head{
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
}

.service-name{
    font-size:18px;
    font-weight:900;
}

.active{
    color:#15803d;
    font-weight:900;
}

.inactive{
    color:#dc2626;
    font-weight:900;
}

.actions{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
    margin-top:12px;
}

.actions a{
    padding:9px 12px;
    border-radius:8px;
    text-decoration:none;
    color:white;
    font-weight:800;
    font-size:13px;
}

.edit{
    background:#2563eb;
}

.toggle{
    background:#f59e0b;
}

.delete{
    background:#dc2626;
}

.documents{
    margin-top:8px;
    color:#475569;
    font-size:13px;
    line-height:1.7;
}

</style>

</head>

<body>

<header class="header">

<h1>
⚡ Manage Quick Services
</h1>

<p>
Service, Price और Required Documents Control करें
</p>

</header>

<main class="container">

<div class="nav">

<a href="/admin/quick-service/shop-status">
🏪 SHOP CONTROL
</a>

<a href="/admin/quick-service/orders">
🔔 ORDERS
</a>

<a href="/quick-service">
👤 CUSTOMER PAGE
</a>

</div>

<!-- ======================================= -->
<!-- ADD SERVICE -->
<!-- ======================================= -->

<section class="card">

<h2>
➕ Add New Service
</h2>

<form
    method="POST"
    action="/admin/quick-service/services"
>

<label>
Service Name *
</label>

<input
    type="text"
    name="name"
    placeholder="Example: New PAN Card"
    required
>

<label>
Service Type *
</label>

<select
    name="type"
    id="serviceType"
>

<option value="normal">
Normal Document Service
</option>

<option value="photocopy">
Photo Copy
</option>

</select>

<label>
Price ₹ *
</label>

<input
    type="number"
    name="price"
    min="0"
    step="0.01"
    placeholder="150"
    required
>

<label>
Description
</label>

<textarea
    name="description"
    placeholder="Service details"
></textarea>

<div
    class="requirements-box"
    id="requirementsBox"
>

<strong>
📄 Required Documents
</strong>

<div id="requirementsList"></div>

<button
    type="button"
    class="add-doc-btn"
    onclick="addRequirement()"
>

+ ADD REQUIRED DOCUMENT

</button>

</div>

<button
    type="submit"
    class="save-btn"
>

✅ SAVE SERVICE

</button>

</form>

</section>

<!-- ======================================= -->
<!-- EXISTING SERVICES -->
<!-- ======================================= -->

<section class="card">

<h2>
🛠 Existing Services
</h2>

${
    services.length

    ?

    services.map(
        function(service){

            const requirements =
                Array.isArray(
                    service.requirements
                )
                ? service.requirements
                : [];

            return `

<div class="service">

<div class="service-head">

<div>

<div class="service-name">
${service.name}
</div>

<div>
₹${Number(service.price || 0).toFixed(2)}
</div>

</div>

<div
class="${
    service.active
        ? "active"
        : "inactive"
}"
>

${
    service.active
        ? "● ACTIVE"
        : "● OFF"
}

</div>

</div>

<div class="documents">

<strong>
Type:
</strong>

${
    service.type === "photocopy"
        ? "Photo Copy"
        : "Normal"
}

<br>

<strong>
Required Documents:
</strong>

${
    requirements.length

    ?

    requirements
        .map(
            function(item){

                return (
                    "• " +
                    item.name
                );

            }
        )
        .join("<br>")

    :

    "No required document"

}

</div>

<div class="actions">

<a
    class="edit"
    href="/admin/quick-service/services/edit/${service._id}"
>
✏ EDIT
</a>

<a
    class="toggle"
    href="/admin/quick-service/services/toggle/${service._id}"
>
${
    service.active
        ? "🔴 TURN OFF"
        : "🟢 TURN ON"
}
</a>

<a
    class="delete"
    href="/admin/quick-service/services/delete/${service._id}"
    onclick="return confirm('Delete this service?')"
>
🗑 DELETE
</a>

</div>

</div>

            `;

        }
    ).join("")

    :

    `
    <p>
        अभी कोई Service Add नहीं है।
    </p>
    `
}

</section>

</main>

<script>

let requirementIndex =
    0;

function addRequirement(){

    const list =
        document.getElementById(
            "requirementsList"
        );

    const row =
        document.createElement(
            "div"
        );

    row.className =
        "requirement-row";

    row.innerHTML =

        '<input ' +
        'type="text" ' +
        'name="requirements[]" ' +
        'placeholder="Example: Aadhaar Card" ' +
        'required' +
        '>' +

        '<button ' +
        'type="button" ' +
        'class="remove-btn" ' +
        'onclick="this.parentElement.remove()"' +
        '>' +

        '✕' +

        '</button>';

    list.appendChild(
        row
    );

    requirementIndex++;

}

const serviceType =
    document.getElementById(
        "serviceType"
    );

const requirementsBox =
    document.getElementById(
        "requirementsBox"
    );

function updateRequirementBox(){

    if(
        serviceType.value ===
        "photocopy"
    ){

        requirementsBox.style.display =
            "none";

    }
    else{

        requirementsBox.style.display =
            "block";

    }

}

serviceType.addEventListener(
    "change",
    updateRequirementBox
);

updateRequirementBox();

</script>

</body>

</html>

            `);

        }
        catch(error){

            console.error(
                "MANAGE QUICK SERVICES ERROR:",
                error
            );

            return res
                .status(500)
                .send(
                    error.message
                );

        }

    }
);

// ======================================================
// ADD QUICK SERVICE
// POST /admin/quick-service/services
// ======================================================

router.post(
    "/admin/quick-service/services",
    async (req, res) => {

        try {

            const name =
                String(
                    req.body.name ||
                    ""
                ).trim();

            const type =
                req.body.type ===
                "photocopy"
                    ? "photocopy"
                    : "normal";

            const price =
                Math.max(
                    0,
                    Number(
                        req.body.price ||
                        0
                    )
                );

            if(!name){

                return res
                    .status(400)
                    .send(
                        "Service Name Required"
                    );

            }

            let requirements =
                req.body[
                    "requirements[]"
                ]
                ||
                req.body.requirements
                ||
                [];

            if(
                !Array.isArray(
                    requirements
                )
            ){

                requirements =
                    [requirements];

            }

            requirements =
                requirements

                .map(
                    function(item){

                        return String(
                            item ||
                            ""
                        ).trim();

                    }
                )

                .filter(Boolean)

                .map(
                    function(item){

                        return {

                            name:
                                item,

                            required:
                                true

                        };

                    }
                );

            if(
                type ===
                "photocopy"
            ){

                requirements =
                    [];

            }

            await QuickService.create({

                name,

                type,

                price,

                description:
                    String(
                        req.body.description ||
                        ""
                    ).trim(),

                active:
                    true,

                requirements

            });

            return res.redirect(
                "/admin/quick-service/services"
            );

        }
        catch(error){

            console.error(
                "ADD QUICK SERVICE ERROR:",
                error
            );

            return res
                .status(500)
                .send(
                    error.message
                );

        }

    }
);

// ======================================================
// TOGGLE SERVICE
// ======================================================

router.get(
    "/admin/quick-service/services/toggle/:id",
    async (req, res) => {

        try {

            const service =
                await QuickService.findById(
                    req.params.id
                );

            if(!service){

                return res
                    .status(404)
                    .send(
                        "Service Not Found"
                    );

            }

            service.active =
                !service.active;

            await service.save();

            return res.redirect(
                "/admin/quick-service/services"
            );

        }
        catch(error){

            console.error(
                "TOGGLE QUICK SERVICE ERROR:",
                error
            );

            return res
                .status(500)
                .send(
                    error.message
                );

        }

    }
);

// ======================================================
// DELETE SERVICE
// ======================================================

router.get(
    "/admin/quick-service/services/delete/:id",
    async (req, res) => {

        try {

            await QuickService
                .findByIdAndDelete(
                    req.params.id
                );

            return res.redirect(
                "/admin/quick-service/services"
            );

        }
        catch(error){

            console.error(
                "DELETE QUICK SERVICE ERROR:",
                error
            );

            return res
                .status(500)
                .send(
                    error.message
                );

        }

    }
);

// ======================================================
// EDIT SERVICE PAGE
// ======================================================

router.get(
    "/admin/quick-service/services/edit/:id",
    async (req, res) => {

        try {

            const service =
                await QuickService
                    .findById(
                        req.params.id
                    )
                    .lean();

            if(!service){

                return res
                    .status(404)
                    .send(
                        "Service Not Found"
                    );

            }

            const requirements =
                Array.isArray(
                    service.requirements
                )
                ? service.requirements
                : [];

            return res.send(`

<!DOCTYPE html>

<html>

<head>

<meta
name="viewport"
content="width=device-width,initial-scale=1"
>

<title>
Edit Service
</title>

<style>

*{
box-sizing:border-box;
font-family:Arial;
}

body{
margin:0;
padding:20px;
background:#f1f5f9;
}

.card{
max-width:600px;
margin:auto;
padding:22px;
background:white;
border-radius:18px;
}

label{
display:block;
margin-top:14px;
margin-bottom:5px;
font-weight:bold;
}

input,
select,
textarea{
width:100%;
padding:12px;
border:1px solid #cbd5e1;
border-radius:9px;
}

textarea{
min-height:80px;
}

.req{
display:flex;
gap:8px;
margin-top:8px;
}

.req button{
width:45px;
border:0;
border-radius:8px;
background:#dc2626;
color:white;
}

.add{
margin-top:10px;
padding:10px;
border:0;
border-radius:8px;
background:#2563eb;
color:white;
}

.save{
width:100%;
margin-top:18px;
padding:14px;
border:0;
border-radius:10px;
background:#16a34a;
color:white;
font-weight:bold;
}

</style>

</head>

<body>

<div class="card">

<h2>
✏ Edit Service
</h2>

<form
method="POST"
action="/admin/quick-service/services/edit/${service._id}"
>

<label>
Service Name
</label>

<input
type="text"
name="name"
value="${service.name || ""}"
required
>

<label>
Service Type
</label>

<select
name="type"
id="serviceType"
>

<option
value="normal"
${
service.type === "normal"
?
"selected"
:
""
}
>
Normal
</option>

<option
value="photocopy"
${
service.type === "photocopy"
?
"selected"
:
""
}
>
Photo Copy
</option>

</select>

<label>
Price ₹
</label>

<input
type="number"
name="price"
step="0.01"
min="0"
value="${Number(service.price || 0)}"
required
>

<label>
Description
</label>

<textarea
name="description"
>${service.description || ""}</textarea>

<div id="requirementsBox">

<label>
Required Documents
</label>

<div id="requirements">

${
requirements
.map(
function(item){

return `

<div class="req">

<input
type="text"
name="requirements[]"
value="${item.name || ""}"
required
>

<button
type="button"
onclick="this.parentElement.remove()"
>
✕
</button>

</div>

`;

}
)
.join("")
}

</div>

<button
type="button"
class="add"
onclick="addRequirement()"
>
+ ADD DOCUMENT
</button>

</div>

<button
class="save"
>
✅ UPDATE SERVICE
</button>

</form>

<br>

<a href="/admin/quick-service/services">
← Back
</a>

</div>

<script>

const type =
document.getElementById(
    "serviceType"
);

const box =
document.getElementById(
    "requirementsBox"
);

function updateBox(){

    box.style.display =

        type.value ===
        "photocopy"

        ?

        "none"

        :

        "block";

}

type.addEventListener(
    "change",
    updateBox
);

updateBox();

function addRequirement(){

    const list =
        document.getElementById(
            "requirements"
        );

    const row =
        document.createElement(
            "div"
        );

    row.className =
        "req";

    row.innerHTML =

        '<input ' +
        'type="text" ' +
        'name="requirements[]" ' +
        'placeholder="Document Name" ' +
        'required' +
        '>' +

        '<button ' +
        'type="button" ' +
        'onclick="this.parentElement.remove()"' +
        '>' +

        '✕' +

        '</button>';

    list.appendChild(
        row
    );

}

</script>

</body>

</html>

            `);

        }
        catch(error){

            console.error(
                "EDIT SERVICE PAGE ERROR:",
                error
            );

            return res
                .status(500)
                .send(
                    error.message
                );

        }

    }
);

// ======================================================
// UPDATE SERVICE
// ======================================================

router.post(
    "/admin/quick-service/services/edit/:id",
    async (req, res) => {

        try {

            let requirements =
                req.body[
                    "requirements[]"
                ]
                ||
                req.body.requirements
                ||
                [];

            if(
                !Array.isArray(
                    requirements
                )
            ){

                requirements =
                    [requirements];

            }

            requirements =
                requirements

                .map(
                    function(item){

                        return String(
                            item ||
                            ""
                        ).trim();

                    }
                )

                .filter(Boolean)

                .map(
                    function(item){

                        return {

                            name:
                                item,

                            required:
                                true

                        };

                    }
                );

            const type =
                req.body.type ===
                "photocopy"

                ?

                "photocopy"

                :

                "normal";

            if(
                type ===
                "photocopy"
            ){

                requirements =
                    [];

            }

            await QuickService
                .findByIdAndUpdate(

                    req.params.id,

                    {

                        name:
                            String(
                                req.body.name ||
                                ""
                            ).trim(),

                        type,

                        price:
                            Math.max(
                                0,
                                Number(
                                    req.body.price ||
                                    0
                                )
                            ),

                        description:
                            String(
                                req.body.description ||
                                ""
                            ).trim(),

                        requirements

                    }

                );

            return res.redirect(
                "/admin/quick-service/services"
            );

        }
        catch(error){

            console.error(
                "UPDATE QUICK SERVICE ERROR:",
                error
            );

            return res
                .status(500)
                .send(
                    error.message
                );

        }

    }
);

module.exports =
router;

