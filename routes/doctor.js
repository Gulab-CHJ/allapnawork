


// const path = require("path");
// const express = require("express");
// const router = express.Router();

// const Product = require("../models/Product");
// const DoctorOrder = require("../models/DoctorOrder");
// const Doctor = require("../models/Doctor");

// const PDFDocument = require("pdfkit");


// // ======================================================
// // SAFE HTML
// // ======================================================

// function escapeHTML(value) {

//     if (value === null || value === undefined) {
//         return "";
//     }

//     return String(value)
//         .replace(/&/g, "&amp;")
//         .replace(/</g, "&lt;")
//         .replace(/>/g, "&gt;")
//         .replace(/"/g, "&quot;")
//         .replace(/'/g, "&#039;");
// }


// // ======================================================
// // DOCTOR ORDERS
// // ======================================================

// router.get("/orders", async (req, res) => {

//     try {

//         // ==============================================
//         // LOGIN CHECK
//         // ==============================================

//         if (!req.session.doctor) {

//             return res.redirect(
//                 "/admin/doctor-login"
//             );

//         }


//         // ==============================================
//         // LOGGED IN DOCTOR
//         // ==============================================

//         const doctor = req.session.doctor;


//         const doctorName =
//             doctor.name ||
//             doctor.doctorName ||
//             "Doctor";


//         const doctorSpecialization =
//             doctor.specialization ||
//             "General Physician";


//         // ==============================================
//         // GET ORDERS
//         // ==============================================

//         const orders =
//             await DoctorOrder.find({
//                 doctorId: doctor._id
//             })
//             .sort({
//                 createdAt: -1
//             });


//         // ==============================================
//         // ORDER HTML
//         // ==============================================

//         let orderHTML = "";


//         if (orders.length > 0) {

//             orderHTML = orders.map(order => {


//                 const itemsHTML =
//                     Array.isArray(order.items)

//                         ?

//                     order.items.map(item => {

//                         const qty =
//                             Number(item.qty || 0);

//                         const price =
//                             Number(item.price || 0);

//                         const amount =
//                             qty * price;


//                         return `

//                             <div class="product">

//                                 <div class="product-info">

//                                     <div class="product-name">
//                                         ${escapeHTML(
//                                             item.name || "Product"
//                                         )}
//                                     </div>

//                                     <div class="product-meta">
//                                         Quantity: ${qty}
//                                         &nbsp; × &nbsp;
//                                         ₹${price.toFixed(2)}
//                                     </div>

//                                 </div>


//                                 <div class="product-price">

//                                     ₹${amount.toFixed(2)}

//                                 </div>

//                             </div>

//                         `;

//                     }).join("")

//                         :

//                     "";


//                 // ======================================
//                 // TOTAL
//                 // ======================================

//                 const totalAmount =
//                     Number(
//                         order.totalAmount || 0
//                     );


//                 // ======================================
//                 // STATUS
//                 // ======================================

//                 const status =
//                     order.status ||
//                     "Pending";


//                 return `

//                     <div class="order-card">


//                         <div class="order-top">

//                             <div>

//                                 <div class="order-id">

//                                     Order #
//                                     ${String(order._id).slice(-8)}

//                                 </div>


//                                 <div class="order-date">

//                                     📅

//                                     ${new Date(
//                                         order.createdAt
//                                     ).toLocaleDateString(
//                                         "en-IN",
//                                         {
//                                             day: "2-digit",
//                                             month: "short",
//                                             year: "numeric"
//                                         }
//                                     )}

//                                 </div>

//                             </div>


//                             <span class="status">

//                                 ${escapeHTML(status)}

//                             </span>

//                         </div>



//                         <div class="product-box">

//                             <div class="section-title">

//                                 🛒 Ordered Products

//                             </div>


//                             ${itemsHTML}

//                         </div>



//                         <div class="total-row">

//                             <span>
//                                 Total Amount
//                             </span>

//                             <strong>
//                                 ₹${totalAmount.toFixed(2)}
//                             </strong>

//                         </div>



//                         <div class="order-actions">

//     <a
//         class="btn invoice-btn"
//         href="/doctor/invoice/${order._id}"
//     >

//         📄 Download Invoice

//     </a>


//     ${
//         String(status).toLowerCase() !== "cancelled"
//         &&
//         String(status).toLowerCase() !== "delivered"
//         ?
//         `
//         <button
//             type="button"
//             class="btn cancel-btn"
//             onclick="cancelOrder('${order._id}')"
//         >

//             ❌ Cancel Order

//         </button>
//         `
//         :
//         ""
//     }

// </div>


//                     </div>

//                 `;

//             }).join("");

//         }

//         else {

//             orderHTML = `

//                 <div class="empty-orders">

//                     <div class="empty-icon">
//                         📦
//                     </div>

//                     <h2>
//                         No Orders Found
//                     </h2>

//                     <p>
//                         Your orders will appear here.
//                     </p>

//                     <a
//                         href="/doctor/dashboard"
//                         class="shop-btn"
//                     >

//                         🛒 Shop Products

//                     </a>

//                 </div>

//             `;

//         }


//         // ==============================================
//         // PAGE
//         // ==============================================

//         res.send(`

// <!DOCTYPE html>

// <html lang="en">

// <head>

// <meta charset="UTF-8">

// <meta
//     name="viewport"
//     content="width=device-width, initial-scale=1.0"
// >

// <title>
//     My Orders | GLOBAL HEALTHCARE
// </title>


// <style>

// *{
//     margin:0;
//     padding:0;
//     box-sizing:border-box;
//     font-family:
//         "Poppins",
//         "Segoe UI",
//         Arial,
//         sans-serif;
// }


// body{

//     min-height:100vh;

//     background:
//         linear-gradient(
//             135deg,
//             #eef7ff,
//             #f8fafc
//         );

//     color:#0f172a;

//     padding:25px;

// }


// /* =========================================
//    HEADER
// ========================================= */

// .header{

//     max-width:1250px;

//     margin:auto;

//     padding:22px 28px;

//     border-radius:24px;

//     background:
//         linear-gradient(
//             135deg,
//             #005bea,
//             #00c6fb
//         );

//     color:white;

//     display:flex;

//     align-items:center;

//     justify-content:space-between;

//     gap:20px;

//     box-shadow:
//         0 18px 45px
//         rgba(0,91,234,.22);

// }

// .cancel-btn{

//     border:none;

//     cursor:pointer;

//     color:#dc2626;

//     background:#fee2e2;

//     border:1px solid #fecaca;

//     padding:13px 20px;

//     border-radius:14px;

//     font-weight:800;

//     transition:.25s;

// }

// .cancel-btn:hover{

//     background:#fecaca;

//     transform:translateY(-2px);

// }

// .order-actions{

//     display:flex;

//     justify-content:flex-end;

//     align-items:center;

//     gap:12px;

//     flex-wrap:wrap;

// }


// @media(max-width:700px){

//     .order-actions{

//         flex-direction:column;

//         align-items:stretch;

//     }

//     .order-actions .btn{

//         width:100%;

//     }

// }


// .logo{

//     display:flex;

//     align-items:center;

//     gap:14px;

// }


// .logo-icon{

//     width:55px;

//     height:55px;

//     border-radius:18px;

//     background:
//         rgba(255,255,255,.18);

//     display:flex;

//     align-items:center;

//     justify-content:center;

//     font-size:28px;

// }


// .logo-text{

//     font-size:24px;

//     font-weight:900;

//     letter-spacing:.5px;

// }


// .logo-sub{

//     font-size:12px;

//     opacity:.85;

//     margin-top:3px;

// }


// .dashboard-btn{

//     text-decoration:none;

//     color:#2563eb;

//     background:white;

//     padding:12px 20px;

//     border-radius:14px;

//     font-weight:800;

//     box-shadow:
//         0 8px 20px
//         rgba(0,0,0,.12);

//     transition:.25s;

// }


// .dashboard-btn:hover{

//     transform:translateY(-2px);

// }


// /* =========================================
//    DOCTOR
// ========================================= */

// .doctor-info{

//     max-width:1250px;

//     margin:25px auto 18px;

//     background:white;

//     border:1px solid #e2e8f0;

//     border-radius:22px;

//     padding:20px 24px;

//     display:flex;

//     align-items:center;

//     gap:18px;

//     box-shadow:
//         0 12px 35px
//         rgba(15,23,42,.07);

// }


// .doctor-avatar{

//     width:65px;

//     height:65px;

//     border-radius:20px;

//     display:flex;

//     align-items:center;

//     justify-content:center;

//     font-size:34px;

//     background:
//         linear-gradient(
//             135deg,
//             #dbeafe,
//             #eff6ff
//         );

// }


// .doctor-info h2{

//     font-size:22px;

// }


// .doctor-info p{

//     margin-top:5px;

//     color:#64748b;

//     font-weight:600;

// }


// /* =========================================
//    PAGE TITLE
// ========================================= */

// .page-title{

//     max-width:1250px;

//     margin:25px auto;

// }


// .page-title h1{

//     font-size:32px;

//     font-weight:900;

// }


// .page-title p{

//     color:#64748b;

//     margin-top:7px;

// }


// /* =========================================
//    ORDER CARD
// ========================================= */

// .order-card{

//     max-width:1250px;

//     margin:0 auto 22px;

//     background:white;

//     border-radius:24px;

//     padding:24px;

//     border:1px solid #e2e8f0;

//     box-shadow:
//         0 15px 40px
//         rgba(15,23,42,.07);

//     transition:.3s;

// }


// .order-card:hover{

//     transform:translateY(-4px);

//     box-shadow:
//         0 20px 50px
//         rgba(15,23,42,.12);

// }


// /* =========================================
//    ORDER TOP
// ========================================= */

// .order-top{

//     display:flex;

//     justify-content:space-between;

//     align-items:center;

//     gap:20px;

//     padding-bottom:18px;

//     border-bottom:1px solid #eef2f7;

// }


// .order-id{

//     color:#2563eb;

//     font-size:18px;

//     font-weight:900;

// }


// .order-date{

//     color:#64748b;

//     font-size:14px;

//     margin-top:6px;

// }


// .status{

//     padding:9px 16px;

//     border-radius:50px;

//     background:#fef3c7;

//     color:#92400e;

//     font-weight:800;

//     font-size:13px;

// }


// /* =========================================
//    PRODUCTS
// ========================================= */

// .product-box{

//     margin-top:20px;

// }


// .section-title{

//     font-size:17px;

//     font-weight:900;

//     margin-bottom:12px;

// }


// .product{

//     display:flex;

//     align-items:center;

//     justify-content:space-between;

//     gap:20px;

//     padding:16px;

//     margin:10px 0;

//     background:#f8fafc;

//     border:1px solid #e2e8f0;

//     border-radius:16px;

// }


// .product-name{

//     font-size:16px;

//     font-weight:800;

// }


// .product-meta{

//     color:#64748b;

//     font-size:13px;

//     margin-top:5px;

// }


// .product-price{

//     font-weight:900;

//     color:#16a34a;

//     font-size:17px;

//     white-space:nowrap;

// }


// /* =========================================
//    TOTAL
// ========================================= */

// .total-row{

//     margin-top:20px;

//     padding:18px 20px;

//     border-radius:18px;

//     background:
//         linear-gradient(
//             135deg,
//             #16a34a,
//             #22c55e
//         );

//     color:white;

//     display:flex;

//     align-items:center;

//     justify-content:space-between;

// }


// .total-row span{

//     font-weight:700;

// }


// .total-row strong{

//     font-size:25px;

// }


// /* =========================================
//    ACTION
// ========================================= */

// .order-actions{

//     margin-top:18px;

// }


// .btn{

//     display:inline-flex;

//     align-items:center;

//     justify-content:center;

//     text-decoration:none;

//     padding:13px 20px;

//     border-radius:14px;

//     font-weight:800;

// }


// .invoice-btn{

//     color:white;

//     background:
//         linear-gradient(
//             135deg,
//             #2563eb,
//             #4f46e5
//         );

//     box-shadow:
//         0 10px 25px
//         rgba(37,99,235,.22);

// }


// .invoice-btn:hover{

//     transform:translateY(-2px);

// }


// /* =========================================
//    EMPTY
// ========================================= */

// .empty-orders{

//     max-width:700px;

//     margin:50px auto;

//     text-align:center;

//     background:white;

//     padding:50px 25px;

//     border-radius:25px;

//     box-shadow:
//         0 15px 40px
//         rgba(0,0,0,.07);

// }


// .empty-icon{

//     font-size:60px;

//     margin-bottom:15px;

// }


// .empty-orders p{

//     color:#64748b;

//     margin:10px 0 20px;

// }


// .shop-btn{

//     display:inline-block;

//     text-decoration:none;

//     background:
//         linear-gradient(
//             135deg,
//             #2563eb,
//             #4f46e5
//         );

//     color:white;

//     padding:14px 24px;

//     border-radius:14px;

//     font-weight:800;

// }


// /* =========================================
//    FOOTER
// ========================================= */

// .footer{

//     max-width:1250px;

//     margin:35px auto 10px;

//     text-align:center;

//     padding:25px;

//     color:#64748b;

//     line-height:1.8;

// }


// .footer strong{

//     color:#2563eb;

// }


// /* =========================================
//    MOBILE
// ========================================= */

// @media(max-width:700px){

//     body{
//         padding:12px;
//     }

//     .header{

//         flex-direction:column;

//         align-items:stretch;

//         text-align:center;

//     }

//     .logo{

//         justify-content:center;

//     }

//     .dashboard-btn{

//         text-align:center;

//     }

//     .doctor-info{

//         padding:18px;

//     }

//     .page-title h1{

//         font-size:26px;

//     }

//     .order-card{

//         padding:16px;

//     }

//     .order-top{

//         align-items:flex-start;

//         flex-direction:column;

//     }

//     .product{

//         align-items:flex-start;

//     }

//     .total-row{

//         gap:10px;

//     }

//     .total-row strong{

//         font-size:20px;

//     }

// }

// </style>

// </head>


// <body>


// <header class="header">


//     <div class="logo">

//         <div class="logo-icon">
//             🩺
//         </div>

//         <div>

//             <div class="logo-text">
//                 GLOBAL HEALTHCARE
//             </div>

//             <div class="logo-sub">
//                 SAFE & SECURE Healthcare
//             </div>

//         </div>

//     </div>


//     <a
//         href="/doctor/dashboard"
//         class="dashboard-btn"
//     >

//         🏠 Dashboard

//     </a>

// </header>



// <section class="doctor-info">

//     <div class="doctor-avatar">
//         👨‍⚕️
//     </div>

//     <div>

//         <h2>
//             Dr. ${escapeHTML(doctorName)}
//         </h2>

//         <p>
//             ${escapeHTML(doctorSpecialization)}
//         </p>

//     </div>

// </section>



// <section class="page-title">

//     <h1>
//         📦 My Orders
//     </h1>

//     <p>
//         View your complete order history and invoices.
//     </p>

// </section>



// ${orderHTML}



// <footer class="footer">

//     © 2026

//     <strong>
//         GLOBAL HEALTHCARE
//     </strong>

//     <br>

//     Powered by

//     <strong>
//         Osium Biogenix
//     </strong>

// </footer>


// </body>

// </html>

//         `);

//     }

//     catch (err) {

//         console.log(
//             "Orders Error:",
//             err
//         );

//         res.status(500)
//             .send("Orders Page Error");

//     }

// });


// // ======================================================
// // CREATE ORDER
// // ======================================================

// router.post(
//     "/create-order",
//     async (req, res) => {

//         try {

//             // ==========================================
//             // LOGIN
//             // ==========================================

//             if (!req.session.doctor) {

//                 return res.status(401).json({

//                     success: false,

//                     message: "Unauthorized"

//                 });

//             }


//             // ==========================================
//             // CART
//             // ==========================================

//             const cart =
//                 Array.isArray(req.body.cart)
//                     ? req.body.cart
//                     : [];


//             if (cart.length === 0) {

//                 return res.status(400).json({

//                     success: false,

//                     message: "Cart is Empty"

//                 });

//             }


//             // ==========================================
//             // TOTAL
//             // ==========================================

//             let total = 0;


//             cart.forEach(item => {

//                 const price =
//                     Number(item.price || 0);

//                 const qty =
//                     Number(item.qty || 0);

//                 total += price * qty;

//             });


//             // ==========================================
//             // CREATE ORDER
//             // ==========================================

//             const order =
//                 await DoctorOrder.create({

//                     doctorId:
//                         req.session.doctor._id,

//                     items:
//                         cart.map(item => ({

//                             productId:
//                                 item.id,

//                             name:
//                                 item.name,

//                             price:
//                                 Number(item.price || 0),

//                             image:
//                                 item.image || "",

//                             qty:
//                                 Number(item.qty || 0)

//                         })),

//                     totalAmount:
//                         total,

//                     status:
//                         "Pending"

//                 });


//             // ==========================================
//             // RESPONSE
//             // ==========================================

//             res.json({

//                 success: true,

//                 message:
//                     "Order Created Successfully",

//                 orderId:
//                     order._id

//             });

//         }

//         catch (err) {

//             console.log(
//                 "Create Order Error:",
//                 err
//             );

//             res.status(500).json({

//                 success: false,

//                 message:
//                     "Order Failed"

//             });

//         }

//     }
// );


// // ======================================================
// // GENERATE INVOICE PDF
// // ======================================================

// router.get(
//     "/invoice/:id",
//     async (req, res) => {

//         try {

//             // ==========================================
//             // LOGIN CHECK
//             // ==========================================

//             if (!req.session.doctor) {

//                 return res.redirect(
//                     "/admin/doctor-login"
//                 );

//             }


//             // ==========================================
//             // FIND ORDER
//             // ==========================================

//             const order =
//                 await DoctorOrder.findById(
//                     req.params.id
//                 );


//             if (!order) {

//                 return res
//                     .status(404)
//                     .send("Order Not Found");

//             }


//             // ==========================================
//             // DOCTOR
//             // ==========================================

//             let doctor = null;


//             try {

//                 if (order.doctorId) {

//                     doctor =
//                         await Doctor.findById(
//                             order.doctorId
//                         );

//                 }

//             }

//             catch (doctorError) {

//                 console.log(
//                     "Doctor Fetch Error:",
//                     doctorError
//                 );

//             }


//             // ==========================================
//             // FALLBACK SESSION DOCTOR
//             // ==========================================

//             const sessionDoctor =
//                 req.session.doctor || {};


//             const doctorName =
//                 (doctor && (
//                     doctor.name ||
//                     doctor.doctorName
//                 )) ||
//                 sessionDoctor.name ||
//                 sessionDoctor.doctorName ||
//                 "Doctor";


//             const doctorId =
//                 (doctor && (
//                     doctor.doctorId ||
//                     doctor._id
//                 )) ||
//                 sessionDoctor.doctorId ||
//                 sessionDoctor._id ||
//                 "";


//             const doctorPhone =
//                 (doctor && (
//                     doctor.phone ||
//                     doctor.mobile
//                 )) ||
//                 sessionDoctor.phone ||
//                 sessionDoctor.mobile ||
//                 "";


//             const specialization =
//                 (doctor && doctor.specialization) ||
//                 sessionDoctor.specialization ||
//                 "General Physician";


//             // ==========================================
//             // PDF HEADER
//             // ==========================================

//             res.setHeader(
//                 "Content-Type",
//                 "application/pdf"
//             );


//             res.setHeader(
//                 "Content-Disposition",
//                 `attachment; filename=Estimate-${order._id}.pdf`
//             );


//             const doc =
//                 new PDFDocument({

//                     size: "A4",

//                     margins: {

//                         top: 40,

//                         bottom: 40,

//                         left: 40,

//                         right: 40

//                     }

//                 });


//             // ==========================================
//             // FONT
//             // ==========================================

//             const fontPath =
//                 path.join(
//                     __dirname,
//                     "../fonts/DejaVuSans.ttf"
//                 );


//             try {

//                 doc.font(fontPath);

//             }

//             catch (fontError) {

//                 console.log(
//                     "Font Error:",
//                     fontError
//                 );

//             }


//             // ==========================================
//             // PIPE
//             // ==========================================

//             doc.pipe(res);


//             // ==========================================
//             // HELPER
//             // ==========================================

//             const money = amount => {

//                 return `Rs.${Number(
//                     amount || 0
//                 ).toFixed(2)}`;

//             };


//             // ==========================================
//             // HEADER
//             // ==========================================

//             doc
//                 .fontSize(20)
//                 .text(
//                     "GLOBAL HEALTHCARE",
//                     {
//                         align: "center"
//                     }
//                 );


//             doc
//                 .fontSize(10)
//                 .text(
//                     "SAFE & SECURE Healthcare",
//                     {
//                         align: "center"
//                     }
//                 );


//             doc.moveDown(1);


//             doc
//                 .fontSize(16)
//                 .text(
//                     "ROUGH ESTIMATE",
//                     {
//                         align: "center"
//                     }
//                 );


//             doc.moveDown(1.5);


//             // ==========================================
//             // DOCTOR DETAILS
//             // ==========================================

//             doc.fontSize(11);


//             doc.text(
//                 `DOCTOR : Dr. ${doctorName}`
//             );


//             if (specialization) {

//                 doc.text(
//                     `SPECIALIZATION : ${specialization}`
//                 );

//             }


//             if (doctorId) {

//                 doc.text(
//                     `DOCTOR ID : ${doctorId}`
//                 );

//             }


//             if (doctorPhone) {

//                 doc.text(
//                     `PHONE : ${doctorPhone}`
//                 );

//             }


//             doc.text(
//                 `BILL NO : A${order._id
//                     .toString()
//                     .slice(-6)}`
//             );


//             doc.text(
//                 `DATE : ${
//                     new Date(
//                         order.createdAt
//                     ).toLocaleDateString(
//                         "en-GB"
//                     )
//                 }`
//             );


//             doc.text(
//                 "TYPE : CREDIT"
//             );


//             doc.moveDown(1);


//             // ==========================================
//             // TABLE TOP LINE
//             // ==========================================

//             doc
//                 .fontSize(9)
//                 .text(
//                     "--------------------------------------------------------------------------------",
//                     40
//                 );


//             doc.moveDown(.5);


//             // ==========================================
//             // TABLE HEADER
//             // ==========================================

//             let tableY = doc.y;


//             doc
//                 .fontSize(10)
//                 .text(
//                     "SL",
//                     40,
//                     tableY
//                 );


//             doc.text(
//                 "PRODUCT DESCRIPTION",
//                 70,
//                 tableY
//             );


//             doc.text(
//                 "QTY",
//                 300,
//                 tableY
//             );


//             doc.text(
//                 "RATE",
//                 350,
//                 tableY
//             );


//             doc.text(
//                 "AMOUNT",
//                 430,
//                 tableY
//             );


//             // ==========================================
//             // HEADER LINE
//             // ==========================================

//             tableY += 20;


//             doc.text(
//                 "--------------------------------------------------------------------------------",
//                 40,
//                 tableY
//             );


//             tableY += 10;


//             // ==========================================
//             // PRODUCTS
//             // ==========================================

//             let total = 0;

//             let totalQty = 0;


//             const items =
//                 Array.isArray(order.items)
//                     ? order.items
//                     : [];


//             items.forEach(
//                 (item, index) => {

//                     const qty =
//                         Number(
//                             item.qty || 0
//                         );


//                     const rate =
//                         Number(
//                             item.price || 0
//                         );


//                     const amount =
//                         qty * rate;


//                     total += amount;

//                     totalQty += qty;


//                     let productName =
//                         item.name ||
//                         "Product";


//                     // Long name control

//                     if (
//                         productName.length > 35
//                     ) {

//                         productName =
//                             productName.substring(
//                                 0,
//                                 35
//                             ) + "...";

//                     }


//                     // ==================================
//                     // PAGE BREAK
//                     // ==================================

//                     if (tableY > 700) {

//                         doc.addPage();

//                         tableY = 50;


//                         doc
//                             .fontSize(10)
//                             .text(
//                                 "SL",
//                                 40,
//                                 tableY
//                             );


//                         doc.text(
//                             "PRODUCT DESCRIPTION",
//                             70,
//                             tableY
//                         );


//                         doc.text(
//                             "QTY",
//                             300,
//                             tableY
//                         );


//                         doc.text(
//                             "RATE",
//                             350,
//                             tableY
//                         );


//                         doc.text(
//                             "AMOUNT",
//                             430,
//                             tableY
//                         );


//                         tableY += 20;

//                     }


//                     // ==================================
//                     // ROW
//                     // ==================================

//                     doc
//                         .fontSize(9)
//                         .text(
//                             `${index + 1}`,
//                             40,
//                             tableY
//                         );


//                     doc.text(
//                         productName,
//                         70,
//                         tableY,
//                         {
//                             width: 215
//                         }
//                     );


//                     doc.text(
//                         `${qty}`,
//                         300,
//                         tableY
//                     );


//                     doc.text(
//                         money(rate),
//                         350,
//                         tableY
//                     );


//                     doc.text(
//                         money(amount),
//                         430,
//                         tableY
//                     );


//                     tableY += 25;

//                 }
//             );


//             // ==========================================
//             // TABLE BOTTOM
//             // ==========================================

//             doc.text(
//                 "--------------------------------------------------------------------------------",
//                 40,
//                 tableY
//             );


//             tableY += 25;


//             // ==========================================
//             // SUMMARY
//             // ==========================================

//             doc
//                 .fontSize(11)
//                 .text(
//                     `NO OF ITEMS : ${items.length}`,
//                     40,
//                     tableY
//                 );


//             tableY += 20;


//             doc.text(
//                 `TOTAL QUANTITY : ${totalQty}`,
//                 40,
//                 tableY
//             );


//             tableY += 25;


//             // ==========================================
//             // GRAND TOTAL
//             // ==========================================

//             doc
//                 .fontSize(13)
//                 .text(
//                     `GRAND TOTAL : ${money(total)}`,
//                     40,
//                     tableY
//                 );


//             tableY += 25;


//             // ==========================================
//             // BILL SUMMARY
//             // ==========================================

//             doc
//                 .fontSize(11)
//                 .text(
//                     "--------------------------------------------------------------------------------",
//                     40,
//                     tableY
//                 );


//             tableY += 20;


//             doc.text(
//                 `CURRENT BILL AMOUNT : ${money(total)}`,
//                 40,
//                 tableY
//             );


//             tableY += 20;


//             const backDues =
//                 Number(
//                     order.backDues || 0
//                 );


//             const totalBalance =
//                 total + backDues;


//             doc.text(
//                 `BACK DUES AMOUNT    : ${money(backDues)}`,
//                 40,
//                 tableY
//             );


//             tableY += 20;


//             doc.text(
//                 `TOTAL BALANCE       : ${money(totalBalance)}`,
//                 40,
//                 tableY
//             );


//             tableY += 25;


//             doc.text(
//                 "--------------------------------------------------------------------------------",
//                 40,
//                 tableY
//             );


//             tableY += 30;


//             // ==========================================
//             // FOOTER
//             // ==========================================

//             doc
//                 .fontSize(10)
//                 .text(
//                     "Import Purchase ONLINE : No",
//                     40,
//                     tableY
//                 );


//             tableY += 20;


//             doc
//                 .fontSize(12)
//                 .text(
//                     "GLOBAL HEALTHCARE",
//                     40,
//                     tableY
//                 );


//             tableY += 18;


//             doc
//                 .fontSize(9)
//                 .text(
//                     "Powered by Osium Biogenix",
//                     40,
//                     tableY
//                 );


//             tableY += 18;


//             doc.text(
//                 "Call : 7488033368",
//                 40,
//                 tableY
//             );


//             tableY += 25;


//             doc.text(
//                 "============================================================",
//                 40,
//                 tableY
//             );


//             // ==========================================
//             // END PDF
//             // ==========================================

//             doc.end();

//         }

//         catch (err) {

//             console.log(
//                 "Invoice Error:",
//                 err
//             );


//             if (!res.headersSent) {

//                 res.status(500)
//                     .send(
//                         "Invoice Generate Error"
//                     );

//             }

//         }

//     }
// );


// // ======================================================
// // LOGOUT
// // ======================================================

// router.get(
//     "/logout",
//     (req, res) => {

//         req.session.destroy(
//             () => {

//                 res.redirect(
//                     "/admin/doctor-login"
//                 );

//             }
//         );

//     }
// );


// // ======================================================
// // DOCTOR CART PAGE
// // ======================================================

// router.get(
//     "/cart",
//     async (req, res) => {

//         try {

//             // ==========================================
//             // LOGIN CHECK
//             // ==========================================

//             if (!req.session.doctor) {

//                 return res.redirect(
//                     "/admin/doctor-login"
//                 );

//             }

//             // ==========================================
//             // DOCTOR CART PAGE
//             // ==========================================

//             const DoctorCart =
//                 require(
//                     "../pages/doctorCart"
//                 );

//             res.send(
//                 DoctorCart(
//                     req.session.doctor
//                 )
//             );

//         }

//         catch (err) {

//             console.log(
//                 "Doctor Cart Error:",
//                 err
//             );

//             res.status(500).send(
//                 "Doctor Cart Page Error"
//             );

//         }

//     }
// );

// // ======================================================
// // DOCTOR DASHBOARD
// // ======================================================

// router.get(
//     "/dashboard",
//     async (req, res) => {

//         try {

//             // ==========================================
//             // LOGIN CHECK
//             // ==========================================

//             if (!req.session.doctor) {

//                 return res.redirect(
//                     "/admin/doctor-login"
//                 );

//             }


//             // ==========================================
//             // PRODUCTS
//             // ==========================================

//             const products =
//                 await Product.find()
//                     .sort({
//                         createdAt: -1
//                     });


//             // ==========================================
//             // DASHBOARD
//             // ==========================================

//             const DoctorDashboard =
//                 require(
//                     "../pages/doctorDashboard"
//                 );


//             res.send(

//                 DoctorDashboard(
//                     req.session.doctor,
//                     products
//                 )

//             );

//         }

//         catch (err) {

//             console.log(
//                 "Dashboard Error:",
//                 err
//             );


//             res.status(500)
//                 .send(
//                     "Dashboard Error"
//                 );

//         }

//     }
// );

// // ========================================
// // DOCTOR CHECKOUT PAGE
// // ========================================

// const Checkout = require("../pages/checkout");

// router.get("/checkout", async (req, res) => {

//     try {

//         // ==================================
//         // LOGIN CHECK
//         // ==================================

//         if (!req.session.doctor) {

//             return res.redirect(
//                 "/admin/doctor-login"
//             );

//         }

//         // ==================================
//         // SESSION DOCTOR ID
//         // ==================================

//         const sessionDoctor =
//             req.session.doctor;

//         const doctorId =
//             sessionDoctor._id ||
//             sessionDoctor.id ||
//             sessionDoctor.doctorId;

//         console.log(
//             "CHECKOUT SESSION DOCTOR:",
//             sessionDoctor
//         );

//         console.log(
//             "CHECKOUT DOCTOR ID:",
//             doctorId
//         );

//         // ==================================
//         // ID CHECK
//         // ==================================

//         if (!doctorId) {

//             return res.status(400).send(
//                 "Doctor ID is missing from session."
//             );

//         }

//         // ==================================
//         // DATABASE SE DOCTOR FETCH
//         // ==================================

//         const doctor =
//             await Doctor.findById(
//                 doctorId
//             ).lean();

//         // ==================================
//         // DOCTOR NOT FOUND
//         // ==================================

//         if (!doctor) {

//             return res.status(404).send(
//                 "Doctor not found in database."
//             );

//         }

//         console.log(
//             "CHECKOUT DOCTOR FROM DATABASE:",
//             doctor
//         );

//         // ==================================
//         // SEND CHECKOUT PAGE
//         // ==================================

//         res.send(
//             Checkout(doctor)
//         );

//     }

//     catch (error) {

//         console.error(
//             "Doctor Checkout Error:",
//             error
//         );

//         res.status(500).send(
//             "Server Error. Please try again."
//         );

//     }

// });


// // ========================================
// // CASH ON DELIVERY
// // ========================================
// // ========================================
// // CASH ON DELIVERY ORDER
// // ========================================

// // ========================================
// // DOCTOR CHECKOUT PAGE
// // ========================================

// router.get("/checkout/:id", async (req, res) => {

//     try {

//         const id = req.params.id;

//         console.log("CHECKOUT ID:", id);


//         // ==================================
//         // FIND DOCTOR
//         // ==================================

//         let doctor = null;


//         // पहले custom doctorId से खोजें
//         doctor = await Doctor.findOne({
//             doctorId: id
//         }).lean();


//         // अगर नहीं मिला तो MongoDB _id से खोजें
//         if (!doctor) {

//             // ObjectId valid है तभी findById करें
//             if (
//                 /^[0-9a-fA-F]{24}$/.test(id)
//             ) {

//                 doctor =
//                     await Doctor.findById(id).lean();

//             }

//         }


//         // ==================================
//         // DOCTOR NOT FOUND
//         // ==================================

//         if (!doctor) {

//             console.log(
//                 "DOCTOR NOT FOUND:",
//                 id
//             );

//             return res.status(404).send(
//                 "Doctor not found"
//             );

//         }


//         // ==================================
//         // SUCCESS
//         // ==================================

//         console.log(
//             "CHECKOUT DOCTOR:",
//             doctor
//         );


//         const Checkout =
//             require("../pages/checkout");


//         res.send(
//             Checkout(doctor)
//         );


//     }

//     catch (error) {

//         console.error(
//             "Doctor Checkout Error:",
//             error
//         );

//         res.status(500).send(
//             "Server Error"
//         );

//     }

// });

// // ========================================
// // CHECKOUT SUCCESS PAGE
// // ========================================
// // ======================================================
// // CHECKOUT SUCCESS PAGE
// // ======================================================

// router.get(
//     "/checkout-success/:id",
//     async (req, res) => {

//         try {

//             // ==========================================
//             // LOGIN CHECK
//             // ==========================================

//             if (!req.session.doctor) {

//                 return res.redirect(
//                     "/admin/doctor-login"
//                 );

//             }


//             // ==========================================
//             // ORDER ID
//             // ==========================================

//             const orderId =
//                 req.params.id;


//             console.log(
//                 "SUCCESS ORDER ID:",
//                 orderId
//             );


//             // ==========================================
//             // FIND ORDER
//             // ==========================================

//             const order =
//                 await DoctorOrder
//                     .findById(orderId)
//                     .lean();


//             if (!order) {

//                 console.log(
//                     "SUCCESS ORDER NOT FOUND:",
//                     orderId
//                 );

//                 return res.status(404).send(
//                     "Order not found"
//                 );

//             }


//             // ==========================================
//             // FIND DOCTOR
//             // ==========================================

//             let doctor = null;


//             if (order.doctorId) {

//                 // MongoDB ObjectId
//                 if (
//                     /^[0-9a-fA-F]{24}$/.test(
//                         String(order.doctorId)
//                     )
//                 ) {

//                     doctor =
//                         await Doctor
//                             .findById(
//                                 order.doctorId
//                             )
//                             .lean();

//                 }


//                 // Custom doctorId fallback
//                 if (!doctor) {

//                     doctor =
//                         await Doctor
//                             .findOne({
//                                 doctorId:
//                                     String(
//                                         order.doctorId
//                                     )
//                             })
//                             .lean();

//                 }

//             }


//             // ==========================================
//             // SESSION DOCTOR FALLBACK
//             // ==========================================

//             if (!doctor) {

//                 doctor =
//                     req.session.doctor || {};

//             }


//             // ==========================================
//             // DOCTOR DETAILS
//             // ==========================================

//             const doctorName =
//                 doctor.name ||
//                 doctor.doctorName ||
//                 order.doctorName ||
//                 "Doctor";


//             const doctorPhone =
//                 doctor.phone ||
//                 doctor.mobile ||
//                 order.doctorPhone ||
//                 "";


//             const doctorEmail =
//                 doctor.email ||
//                 order.doctorEmail ||
//                 "";


//             const doctorDisplayId =
//                 doctor.doctorId ||
//                 doctor._id ||
//                 order.doctorId ||
//                 "";


//             // ==========================================
//             // ORDER TOTAL
//             // ==========================================

//             const totalAmount =
//                 Number(
//                     order.totalAmount || 0
//                 );


//             // ==========================================
//             // ITEMS
//             // ==========================================

//             const items =
//                 Array.isArray(order.items)
//                     ? order.items
//                     : [];


//             // ==========================================
//             // SUCCESS PAGE
//             // ==========================================

//             res.send(`

// <!DOCTYPE html>

// <html lang="en">

// <head>

// <meta charset="UTF-8">

// <meta
//     name="viewport"
//     content="width=device-width, initial-scale=1.0"
// >

// <title>
//     Order Successful | GLOBAL HEALTHCARE
// </title>

// <style>

// *{
//     margin:0;
//     padding:0;
//     box-sizing:border-box;
//     font-family:
//         Arial,
//         Helvetica,
//         sans-serif;
// }

// body{

//     min-height:100vh;

//     display:flex;

//     align-items:center;

//     justify-content:center;

//     padding:20px;

//     background:
//         linear-gradient(
//             135deg,
//             #eff6ff,
//             #f0fdf4
//         );

// }

// .success-card{

//     width:100%;

//     max-width:550px;

//     background:#fff;

//     border-radius:28px;

//     padding:35px 25px;

//     text-align:center;

//     box-shadow:
//         0 20px 60px
//         rgba(0,0,0,.12);

// }

// .success-icon{

//     width:90px;

//     height:90px;

//     margin:0 auto 20px;

//     border-radius:50%;

//     display:flex;

//     align-items:center;

//     justify-content:center;

//     background:#dcfce7;

//     color:#16a34a;

//     font-size:48px;

// }

// h1{

//     color:#15803d;

//     font-size:28px;

//     margin-bottom:10px;

// }

// .subtitle{

//     color:#64748b;

//     font-size:15px;

//     line-height:1.6;

//     margin-bottom:25px;

// }

// .order-box{

//     background:#eff6ff;

//     border:1px solid #bfdbfe;

//     border-radius:18px;

//     padding:16px;

//     margin-bottom:20px;

// }

// .order-number{

//     color:#2563eb;

//     font-size:16px;

//     font-weight:900;

// }

// .doctor-box{

//     background:#f8fafc;

//     border:1px solid #e2e8f0;

//     border-radius:18px;

//     padding:18px;

//     text-align:left;

//     margin-bottom:20px;

// }

// .row{

//     display:flex;

//     justify-content:space-between;

//     gap:15px;

//     padding:9px 0;

//     border-bottom:1px solid #e5e7eb;

// }

// .row:last-child{

//     border-bottom:none;

// }

// .label{

//     color:#64748b;

//     font-size:14px;

// }

// .value{

//     font-weight:700;

//     color:#0f172a;

//     text-align:right;

// }

// .amount-box{

//     display:flex;

//     justify-content:space-between;

//     align-items:center;

//     padding:18px;

//     margin-bottom:20px;

//     border-radius:18px;

//     background:
//         linear-gradient(
//             135deg,
//             #16a34a,
//             #22c55e
//         );

//     color:white;

// }

// .amount-label{

//     font-weight:700;

// }

// .amount{

//     font-size:24px;

//     font-weight:900;

// }

// .cod-box{

//     background:#fff7ed;

//     border:1px solid #fed7aa;

//     border-radius:18px;

//     padding:18px;

//     margin-bottom:25px;

// }

// .cod-title{

//     color:#c2410c;

//     font-weight:800;

//     font-size:17px;

//     margin-bottom:7px;

// }

// .cod-text{

//     color:#7c2d12;

//     font-size:14px;

//     line-height:1.5;

// }

// .buttons{

//     display:flex;

//     flex-direction:column;

//     gap:12px;

// }

// .btn{

//     display:block;

//     width:100%;

//     padding:14px 20px;

//     border-radius:14px;

//     text-decoration:none;

//     font-weight:800;

// }

// .dashboard{

//     background:
//         linear-gradient(
//             135deg,
//             #2563eb,
//             #4f46e5
//         );

//     color:#fff;

// }

// .orders{

//     background:#eff6ff;

//     color:#2563eb;

// }

// .footer{

//     margin-top:25px;

//     color:#94a3b8;

//     font-size:12px;

// }

// </style>

// </head>

// <body>

// <div class="success-card">


//     <div class="success-icon">
//         ✓
//     </div>


//     <h1>
//         Order Placed Successfully
//     </h1>


//     <p class="subtitle">

//         Your Cash on Delivery order has been
//         successfully placed.

//     </p>


//     <!-- ORDER -->

//     <div class="order-box">

//         <div class="order-number">

//             Order #${String(order._id).slice(-8)}

//         </div>

//     </div>


//     <!-- DOCTOR -->

//     <div class="doctor-box">


//         <div class="row">

//             <span class="label">
//                 Doctor ID
//             </span>

//             <span class="value">
//                 ${escapeHTML(
//                     String(doctorDisplayId)
//                 )}
//             </span>

//         </div>


//         <div class="row">

//             <span class="label">
//                 Doctor Name
//             </span>

//             <span class="value">
//                 Dr. ${escapeHTML(
//                     doctorName
//                 )}
//             </span>

//         </div>


//         ${
//             doctorPhone
//             ?
//             `
//             <div class="row">

//                 <span class="label">
//                     Mobile
//                 </span>

//                 <span class="value">
//                     ${escapeHTML(
//                         doctorPhone
//                     )}
//                 </span>

//             </div>
//             `
//             :
//             ""
//         }


//         ${
//             doctorEmail
//             ?
//             `
//             <div class="row">

//                 <span class="label">
//                     Email
//                 </span>

//                 <span class="value">
//                     ${escapeHTML(
//                         doctorEmail
//                     )}
//                 </span>

//             </div>
//             `
//             :
//             ""
//         }


//     </div>


//     <!-- TOTAL -->

//     <div class="amount-box">

//         <span class="amount-label">
//             Order Amount
//         </span>

//         <span class="amount">
//             ₹${totalAmount.toFixed(2)}
//         </span>

//     </div>


//     <!-- COD -->

//     <div class="cod-box">

//         <div class="cod-title">

//             💵 Cash on Delivery

//         </div>

//         <div class="cod-text">

//             You have selected Cash on Delivery.
//             Payment will be collected when
//             your order is delivered.

//         </div>

//     </div>


//     <!-- BUTTONS -->

//     <div class="buttons">


//         <a
//             href="/doctor/orders"
//             class="btn orders"
//         >

//             📦 View My Orders

//         </a>


//         <a
//             href="/doctor/dashboard"
//             class="btn dashboard"
//         >

//             🏠 Go to Dashboard

//         </a>


//     </div>


//     <div class="footer">

//         🔒 Secure order • GLOBAL HEALTHCARE

//     </div>


// </div>

// </body>

// </html>

//             `);

//         }

//         catch (error) {

//             console.error(
//                 "Checkout Success Error:",
//                 error
//             );

//             res.status(500).send(
//                 "Checkout Success Page Error"
//             );

//         }

//     }
// );

// // ======================================================
// // CASH ON DELIVERY ORDER
// // ======================================================
// // ======================================================
// // CASH ON DELIVERY ORDER
// // ======================================================

// router.post("/checkout/cod", async (req, res) => {

//     try {

//         // ==========================================
//         // LOGIN CHECK
//         // ==========================================

//         if (!req.session.doctor) {

//             return res.status(401).json({

//                 success: false,
//                 message: "Doctor login required"

//             });

//         }


//         // ==========================================
//         // SESSION DOCTOR
//         // ==========================================

//         const sessionDoctor =
//             req.session.doctor;


//         const doctorId =
//             sessionDoctor._id ||
//             sessionDoctor.id ||
//             sessionDoctor.doctorId;


//         if (!doctorId) {

//             return res.status(400).json({

//                 success: false,
//                 message: "Doctor ID missing from session"

//             });

//         }


//         // ==========================================
//         // FETCH DOCTOR
//         // ==========================================

//         let doctor = null;


//         // MongoDB _id
//         if (
//             /^[0-9a-fA-F]{24}$/.test(
//                 String(doctorId)
//             )
//         ) {

//             doctor =
//                 await Doctor.findById(
//                     doctorId
//                 ).lean();

//         }


//         // Custom doctorId fallback
//         if (!doctor) {

//             doctor =
//                 await Doctor.findOne({

//                     doctorId:
//                         String(doctorId)

//                 }).lean();

//         }


//         if (!doctor) {

//             console.log(
//                 "COD DOCTOR NOT FOUND:",
//                 doctorId
//             );

//             return res.status(404).json({

//                 success: false,
//                 message: "Doctor not found"

//             });

//         }


//         // ==========================================
//         // CART
//         // ==========================================

//         const cart =
//             Array.isArray(req.body.cart)
//                 ? req.body.cart
//                 : [];


//         console.log(
//             "COD CART:",
//             cart
//         );


//         if (cart.length === 0) {

//             return res.status(400).json({

//                 success: false,
//                 message: "Cart is Empty"

//             });

//         }


//         // ==========================================
//         // PREPARE ITEMS
//         // ==========================================

//         const items =
//             cart.map(item => {

//                 const price =
//                     Number(item.price || 0);

//                 const qty =
//                     Number(item.qty || 0);


//                 return {

//                     productId:
//                         item.productId ||
//                         item.id ||
//                         null,

//                     name:
//                         item.name ||
//                         "Product",

//                     price:
//                         price,

//                     image:
//                         item.image ||
//                         "",

//                     qty:
//                         qty

//                 };

//             });


//         // ==========================================
//         // TOTAL
//         // ==========================================

//         let totalAmount = 0;


//         items.forEach(item => {

//             totalAmount +=
//                 Number(item.price) *
//                 Number(item.qty);

//         });


//         // ==========================================
//         // VALIDATE TOTAL
//         // ==========================================

//         if (totalAmount <= 0) {

//             return res.status(400).json({

//                 success: false,
//                 message: "Invalid cart amount"

//             });

//         }


//         // ==========================================
//         // CREATE ORDER
//         // ==========================================

//         const order =
//             await DoctorOrder.create({

//                 doctorId:
//                     doctor._id,

//                 doctorName:
//                     doctor.name ||
//                     doctor.doctorName ||
//                     "",

//                 doctorPhone:
//                     doctor.phone ||
//                     doctor.mobile ||
//                     "",

//                 doctorEmail:
//                     doctor.email ||
//                     "",

//                 items:
//                     items,

//                 totalAmount:
//                     totalAmount,

//                 paymentMethod:
//                     "cod",

//                 paymentStatus:
//                     "pending",

//                 status:
//                     "Pending",

//                 createdAt:
//                     new Date()

//             });


//         console.log(
//             "COD ORDER CREATED:",
//             order._id
//         );


//         // ==========================================
//         // SUCCESS
//         // ==========================================

//         return res.status(200).json({

//             success: true,

//             message:
//                 "Cash on Delivery order placed successfully",

//             orderId:
//                 order._id.toString(),

//             redirect:
//                 `/doctor/checkout-success/${order._id}`

//         });

//     }

//     catch (error) {

//         console.error(
//             "COD ORDER ERROR:",
//             error
//         );

//         return res.status(500).json({

//             success: false,

//             message:
//                 "Unable to place COD order",

//             error:
//                 error.message

//         });

//     }

// });


// /// ======================================================
// // CANCEL DOCTOR ORDER
// // ======================================================

// router.post(
//     "/cancel-order/:id",
//     async (req, res) => {

//         try {

//             // ==========================================
//             // LOGIN CHECK
//             // ==========================================

//             if (!req.session.doctor) {

//                 return res.status(401).json({

//                     success: false,

//                     message:
//                         "Doctor login required"

//                 });

//             }


//             // ==========================================
//             // ORDER ID
//             // ==========================================

//             const orderId =
//                 String(
//                     req.params.id || ""
//                 ).trim();


//             if (!orderId) {

//                 return res.status(400).json({

//                     success: false,

//                     message:
//                         "Order ID is required"

//                 });

//             }


//             // ==========================================
//             // SESSION DOCTOR
//             // ==========================================

//             const sessionDoctor =
//                 req.session.doctor;


//             const sessionMongoId =
//                 sessionDoctor._id ||
//                 sessionDoctor.id ||
//                 "";


//             const sessionDoctorId =
//                 sessionDoctor.doctorId ||
//                 "";


//             console.log(
//                 "================================="
//             );

//             console.log(
//                 "CANCEL ORDER REQUEST"
//             );

//             console.log(
//                 "ORDER ID:",
//                 orderId
//             );

//             console.log(
//                 "SESSION DOCTOR:",
//                 sessionDoctor
//             );

//             console.log(
//                 "SESSION MONGO ID:",
//                 sessionMongoId
//             );

//             console.log(
//                 "SESSION DOCTOR ID:",
//                 sessionDoctorId
//             );


//             // ==========================================
//             // FIND ORDER
//             // ==========================================

//             let order = null;


//             if (
//                 /^[0-9a-fA-F]{24}$/.test(
//                     orderId
//                 )
//             ) {

//                 order =
//                     await DoctorOrder.findById(
//                         orderId
//                     );

//             }


//             // ==========================================
//             // ORDER NOT FOUND
//             // ==========================================

//             if (!order) {

//                 console.log(
//                     "ORDER NOT FOUND:",
//                     orderId
//                 );

//                 return res.status(404).json({

//                     success: false,

//                     message:
//                         "Order not found"

//                 });

//             }


//             // ==========================================
//             // ORDER DOCTOR ID
//             // ==========================================

//             const orderDoctorId =
//                 order.doctorId
//                     ? String(
//                         order.doctorId
//                     )
//                     : "";


//             console.log(
//                 "ORDER DOCTOR ID:",
//                 orderDoctorId
//             );


//             // ==========================================
//             // VERIFY DOCTOR
//             // ==========================================

//             let doctorMatched = false;


//             // ------------------------------------------
//             // Direct MongoDB ID match
//             // ------------------------------------------

//             if (
//                 sessionMongoId &&
//                 orderDoctorId ===
//                 String(sessionMongoId)
//             ) {

//                 doctorMatched = true;

//             }


//             // ------------------------------------------
//             // Custom doctorId match
//             // ------------------------------------------

//             if (
//                 sessionDoctorId &&
//                 orderDoctorId ===
//                 String(sessionDoctorId)
//             ) {

//                 doctorMatched = true;

//             }


//             // ==========================================
//             // DATABASE DOCTOR VERIFICATION
//             // ==========================================

//             if (!doctorMatched) {

//                 let doctor = null;


//                 // MongoDB ObjectId
//                 if (
//                     /^[0-9a-fA-F]{24}$/.test(
//                         orderDoctorId
//                     )
//                 ) {

//                     doctor =
//                         await Doctor.findById(
//                             orderDoctorId
//                         ).lean();

//                 }


//                 // Custom doctorId
//                 if (!doctor) {

//                     doctor =
//                         await Doctor.findOne({

//                             doctorId:
//                                 orderDoctorId

//                         }).lean();

//                 }


//                 if (doctor) {

//                     console.log(
//                         "ORDER DOCTOR FOUND:",
//                         doctor._id,
//                         doctor.doctorId
//                     );


//                     // MongoDB ID
//                     if (
//                         sessionMongoId &&
//                         String(doctor._id) ===
//                         String(sessionMongoId)
//                     ) {

//                         doctorMatched = true;

//                     }


//                     // Custom ID
//                     if (
//                         sessionDoctorId &&
//                         String(doctor.doctorId) ===
//                         String(sessionDoctorId)
//                     ) {

//                         doctorMatched = true;

//                     }

//                 }

//             }


//             // ==========================================
//             // SECURITY CHECK
//             // ==========================================

//             if (!doctorMatched) {

//                 console.log(
//                     "UNAUTHORIZED CANCEL ATTEMPT"
//                 );

//                 return res.status(403).json({

//                     success: false,

//                     message:
//                         "You cannot cancel this order"

//                 });

//             }


//             // ==========================================
//             // CURRENT STATUS
//             // ==========================================

//             const currentStatus =
//                 String(
//                     order.status || "Pending"
//                 )
//                 .trim()
//                 .toLowerCase();


//             console.log(
//                 "CURRENT ORDER STATUS:",
//                 currentStatus
//             );


//             // ==========================================
//             // ALREADY CANCELLED
//             // ==========================================

//             if (
//                 currentStatus ===
//                 "cancelled"
//             ) {

//                 return res.status(400).json({

//                     success: false,

//                     message:
//                         "Order is already cancelled"

//                 });

//             }


//             // ==========================================
//             // DELIVERED
//             // ==========================================

//             if (
//                 currentStatus ===
//                 "delivered"
//             ) {

//                 return res.status(400).json({

//                     success: false,

//                     message:
//                         "Delivered order cannot be cancelled"

//                 });

//             }


//             // ==========================================
//             // SHIPPED
//             // ==========================================

//             if (
//                 currentStatus ===
//                 "shipped"
//             ) {

//                 return res.status(400).json({

//                     success: false,

//                     message:
//                         "Shipped order cannot be cancelled"

//                 });

//             }


//             // ==========================================
//             // CANCEL ORDER
//             // ==========================================

//             order.status =
//                 "Cancelled";


//             order.cancelledAt =
//                 new Date();


//             await order.save();


//             console.log(
//                 "================================="
//             );

//             console.log(
//                 "ORDER CANCELLED SUCCESSFULLY"
//             );

//             console.log(
//                 "ORDER:",
//                 order._id.toString()
//             );

//             console.log(
//                 "STATUS:",
//                 order.status
//             );

//             console.log(
//                 "================================="
//             );


//             // ==========================================
//             // SUCCESS RESPONSE
//             // ==========================================

//             return res.status(200).json({

//                 success: true,

//                 message:
//                     "Order cancelled successfully",

//                 orderId:
//                     order._id.toString(),

//                 status:
//                     "Cancelled"

//             });

//         }

//         catch (error) {

//             console.error(
//                 "================================="
//             );

//             console.error(
//                 "CANCEL ORDER ERROR:",
//                 error
//             );

//             console.error(
//                 "================================="
//             );


//             return res.status(500).json({

//                 success: false,

//                 message:
//                     "Unable to cancel order",

//                 error:
//                     error.message

//             });

//         }

//     }
// );

// // ======================================================
// // EXPORT
// // ======================================================

// module.exports = router;

const path = require("path");
const express = require("express");
const router = express.Router();

const Product = require("../models/Product");
const DoctorOrder = require("../models/DoctorOrder");
const Doctor = require("../models/Doctor");

const PDFDocument = require("pdfkit");


// ======================================================
// SAFE HTML
// ======================================================

function escapeHTML(value) {

    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ======================================================
// DOCTOR ID HELPER
// ======================================================

function getSessionDoctorId(doctor = {}) {

    return (
        doctor._id ||
        doctor.id ||
        doctor.doctorId ||
        ""
    );

}


// ======================================================
// FIND DOCTOR
// ======================================================

async function findDoctorByAnyId(id) {

    if (!id) {
        return null;
    }

    const value = String(id);

    let doctor = null;

    // MongoDB ObjectId
    if (/^[0-9a-fA-F]{24}$/.test(value)) {

        try {

            doctor = await Doctor
                .findById(value)
                .lean();

        } catch (error) {

            console.log(
                "findById error:",
                error.message
            );

        }

    }

    // Custom doctorId
    if (!doctor) {

        doctor = await Doctor
            .findOne({
                doctorId: value
            })
            .lean();

    }

    return doctor;

}


// ======================================================
// DOCTOR ORDERS
// ======================================================

router.get("/orders", async (req, res) => {

    try {

        // LOGIN CHECK
        if (!req.session.doctor) {

            return res.redirect(
                "/admin/doctor-login"
            );

        }


        const sessionDoctor =
            req.session.doctor;


        const doctorName =
            sessionDoctor.name ||
            sessionDoctor.doctorName ||
            "Doctor";


        const doctorSpecialization =
            sessionDoctor.specialization ||
            "General Physician";


        // GET ORDERS
        const doctorId =
            getSessionDoctorId(
                sessionDoctor
            );


        let orders = [];


        if (doctorId) {

            const doctor =
                await findDoctorByAnyId(
                    doctorId
                );


            if (doctor) {

                orders =
                    await DoctorOrder
                        .find({
                            doctorId: doctor._id
                        })
                        .sort({
                            createdAt: -1
                        });

            } else {

                // fallback
                orders =
                    await DoctorOrder
                        .find({
                            doctorId: doctorId
                        })
                        .sort({
                            createdAt: -1
                        });

            }

        }


        // ==================================================
        // ORDER HTML
        // ==================================================

        let orderHTML = "";


        if (orders.length > 0) {

            orderHTML =
                orders.map(order => {

                    const itemsHTML =
                        Array.isArray(order.items)

                            ?

                        order.items.map(item => {

                            const qty =
                                Number(
                                    item.qty || 0
                                );

                            const price =
                                Number(
                                    item.price || 0
                                );

                            const amount =
                                qty * price;


                            return `

<div class="product">

    <div class="product-info">

        <div class="product-name">
            ${escapeHTML(
                item.name || "Product"
            )}
        </div>

        <div class="product-meta">
            Quantity: ${qty}
            &nbsp; × &nbsp;
            ₹${price.toFixed(2)}
        </div>

    </div>

    <div class="product-price">
        ₹${amount.toFixed(2)}
    </div>

</div>

`;

                        }).join("")

                            :

                        "";


                    const totalAmount =
                        Number(
                            order.totalAmount || 0
                        );


                    const status =
                        order.status ||
                        "Pending";


                    const normalizedStatus =
                        String(status)
                            .trim()
                            .toLowerCase();


                    const canCancel =
                        ![
                            "cancelled",
                            "delivered",
                            "shipped"
                        ].includes(
                            normalizedStatus
                        );


                    return `

<div
    class="order-card"
    id="order-${escapeHTML(
        String(order._id)
    )}"
>


    <div class="order-top">

        <div>

            <div class="order-id">

                Order #
                ${escapeHTML(
                    String(order._id)
                        .slice(-8)
                )}

            </div>


            <div class="order-date">

                📅

                ${new Date(
                    order.createdAt
                ).toLocaleDateString(
                    "en-IN",
                    {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    }
                )}

            </div>

        </div>


        <span
            class="status status-${normalizedStatus}"
        >

            ${escapeHTML(status)}

        </span>

    </div>



    <div class="product-box">

        <div class="section-title">

            🛒 Ordered Products

        </div>


        ${itemsHTML}

    </div>



    <div class="total-row">

        <span>
            Total Amount
        </span>

        <strong>
            ₹${totalAmount.toFixed(2)}
        </strong>

    </div>



    <div class="order-actions">


        <a
            class="btn invoice-btn"
            href="/doctor/invoice/${order._id}"
        >

            📄 Download Invoice

        </a>

        


        ${
            canCancel

                ?

`
<button
    type="button"
    class="btn cancel-btn"
    data-order-id="${escapeHTML(
        String(order._id)
    )}"
    onclick="cancelOrder(this)"
>

    ❌ Cancel Order

</button>
`

                :

`
<span class="cancel-disabled">

    ${
        normalizedStatus === "cancelled"

            ?

        "❌ Order Cancelled"

            :

        normalizedStatus === "shipped"

            ?

        "🚚 Order Shipped"

            :

        normalizedStatus === "delivered"

            ?

        "✅ Order Delivered"

            :

        ""
    }

</span>
`
        }


    </div>


</div>

`;

                }).join("");

        }

        else {

            orderHTML = `

<div class="empty-orders">

    <div class="empty-icon">
        📦
    </div>

    <h2>
        No Orders Found
    </h2>

    <p>
        Your orders will appear here.
    </p>

    <a
        href="/doctor/dashboard"
        class="shop-btn"
    >

        🛒 Shop Products

    </a>

</div>

`;

        }


        // ==================================================
        // PAGE
        // ==================================================

        res.send(`

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
    My Orders | GLOBAL HEALTHCARE
</title>


<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:
        "Poppins",
        "Segoe UI",
        Arial,
        sans-serif;
}


body{

    min-height:100vh;

    background:
        linear-gradient(
            135deg,
            #eef7ff,
            #f8fafc
        );

    color:#0f172a;

    padding:25px;

}


/* =====================================================
HEADER
===================================================== */

.header{

    max-width:1250px;

    margin:auto;

    padding:22px 28px;

    border-radius:24px;

    background:
        linear-gradient(
            135deg,
            #005bea,
            #00c6fb
        );

    color:white;

    display:flex;

    align-items:center;

    justify-content:space-between;

    gap:20px;

    box-shadow:
        0 18px 45px
        rgba(0,91,234,.22);

}


.logo{

    display:flex;

    align-items:center;

    gap:14px;

}


.logo-icon{

    width:55px;
    height:55px;

    border-radius:18px;

    background:
        rgba(255,255,255,.18);

    display:flex;

    align-items:center;

    justify-content:center;

    font-size:28px;

}


.logo-text{

    font-size:24px;

    font-weight:900;

}

.order-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
}

.invoice-btn,
.delete-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 38px;
    padding: 9px 14px;
    border: none;
    border-radius: 9px;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
}

.invoice-btn {
    color: #ffffff;
    background: #2563eb;
}

.invoice-btn:hover {
    background: #1d4ed8;
}

.delete-btn {
    color: #ffffff;
    background: #dc2626;
}

.delete-btn:hover {
    background: #b91c1c;
}


.logo-sub{

    font-size:12px;

    opacity:.85;

    margin-top:3px;

}


.dashboard-btn{

    text-decoration:none;

    color:#2563eb;

    background:white;

    padding:12px 20px;

    border-radius:14px;

    font-weight:800;

    box-shadow:
        0 8px 20px
        rgba(0,0,0,.12);

    transition:.25s;

}


.dashboard-btn:hover{

    transform:translateY(-2px);

}


/* =====================================================
DOCTOR
===================================================== */

.doctor-info{

    max-width:1250px;

    margin:25px auto 18px;

    background:white;

    border:1px solid #e2e8f0;

    border-radius:22px;

    padding:20px 24px;

    display:flex;

    align-items:center;

    gap:18px;

    box-shadow:
        0 12px 35px
        rgba(15,23,42,.07);

}


.doctor-avatar{

    width:65px;
    height:65px;

    border-radius:20px;

    display:flex;

    align-items:center;

    justify-content:center;

    font-size:34px;

    background:
        linear-gradient(
            135deg,
            #dbeafe,
            #eff6ff
        );

}


.doctor-info h2{

    font-size:22px;

}


.doctor-info p{

    margin-top:5px;

    color:#64748b;

    font-weight:600;

}


/* =====================================================
TITLE
===================================================== */

.page-title{

    max-width:1250px;

    margin:25px auto;

}


.page-title h1{

    font-size:32px;

    font-weight:900;

}


.page-title p{

    color:#64748b;

    margin-top:7px;

}


/* =====================================================
ORDER CARD
===================================================== */

.order-card{

    max-width:1250px;

    margin:0 auto 22px;

    background:white;

    border-radius:24px;

    padding:24px;

    border:1px solid #e2e8f0;

    box-shadow:
        0 15px 40px
        rgba(15,23,42,.07);

    transition:.3s;

}


.order-card:hover{

    transform:translateY(-3px);

    box-shadow:
        0 20px 50px
        rgba(15,23,42,.12);

}


/* =====================================================
ORDER TOP
===================================================== */

.order-top{

    display:flex;

    justify-content:space-between;

    align-items:center;

    gap:20px;

    padding-bottom:18px;

    border-bottom:1px solid #eef2f7;

}


.order-id{

    color:#2563eb;

    font-size:18px;

    font-weight:900;

}


.order-date{

    color:#64748b;

    font-size:14px;

    margin-top:6px;

}


.status{

    padding:9px 16px;

    border-radius:50px;

    font-weight:800;

    font-size:13px;

}


.status-pending{

    background:#fef3c7;

    color:#92400e;

}


.status-processing{

    background:#dbeafe;

    color:#1d4ed8;

}


.status-confirmed{

    background:#dcfce7;

    color:#166534;

}


.status-shipped{

    background:#e0e7ff;

    color:#3730a3;

}


.status-delivered{

    background:#dcfce7;

    color:#15803d;

}


.status-cancelled{

    background:#fee2e2;

    color:#b91c1c;

}


/* =====================================================
PRODUCT
===================================================== */

.product-box{

    margin-top:20px;

}


.section-title{

    font-size:17px;

    font-weight:900;

    margin-bottom:12px;

}


.product{

    display:flex;

    align-items:center;

    justify-content:space-between;

    gap:20px;

    padding:16px;

    margin:10px 0;

    background:#f8fafc;

    border:1px solid #e2e8f0;

    border-radius:16px;

}


.product-name{

    font-size:16px;

    font-weight:800;

}


.product-meta{

    color:#64748b;

    font-size:13px;

    margin-top:5px;

}


.product-price{

    font-weight:900;

    color:#16a34a;

    font-size:17px;

    white-space:nowrap;

}


/* =====================================================
TOTAL
===================================================== */

.total-row{

    margin-top:20px;

    padding:18px 20px;

    border-radius:18px;

    background:
        linear-gradient(
            135deg,
            #16a34a,
            #22c55e
        );

    color:white;

    display:flex;

    align-items:center;

    justify-content:space-between;

}


.total-row span{

    font-weight:700;

}


.total-row strong{

    font-size:25px;

}


/* =====================================================
ACTIONS
===================================================== */

.order-actions{

    margin-top:18px;

    display:flex;

    justify-content:flex-end;

    align-items:center;

    gap:12px;

    flex-wrap:wrap;

}


.btn{

    border:none;

    display:inline-flex;

    align-items:center;

    justify-content:center;

    text-decoration:none;

    padding:13px 20px;

    border-radius:14px;

    font-weight:800;

    cursor:pointer;

    transition:.25s;

}


.invoice-btn{

    color:white;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #4f46e5
        );

    box-shadow:
        0 10px 25px
        rgba(37,99,235,.22);

}


.invoice-btn:hover{

    transform:translateY(-2px);

}


/* =====================================================
CANCEL
===================================================== */

.cancel-btn{

    color:#dc2626;

    background:#fee2e2;

    border:1px solid #fecaca;

}


.cancel-btn:hover{

    background:#fecaca;

    transform:translateY(-2px);

}


.cancel-btn:disabled{

    opacity:.6;

    cursor:not-allowed;

    transform:none;

}


.cancel-disabled{

    display:inline-flex;

    align-items:center;

    justify-content:center;

    padding:13px 20px;

    border-radius:14px;

    background:#f1f5f9;

    color:#64748b;

    font-weight:800;

}


/* =====================================================
EMPTY
===================================================== */

.empty-orders{

    max-width:700px;

    margin:50px auto;

    text-align:center;

    background:white;

    padding:50px 25px;

    border-radius:25px;

    box-shadow:
        0 15px 40px
        rgba(0,0,0,.07);

}


.empty-icon{

    font-size:60px;

    margin-bottom:15px;

}


.empty-orders p{

    color:#64748b;

    margin:10px 0 20px;

}


.shop-btn{

    display:inline-block;

    text-decoration:none;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #4f46e5
        );

    color:white;

    padding:14px 24px;

    border-radius:14px;

    font-weight:800;

}


/* =====================================================
FOOTER
===================================================== */

.footer{

    max-width:1250px;

    margin:35px auto 10px;

    text-align:center;

    padding:25px;

    color:#64748b;

    line-height:1.8;

}


.footer strong{

    color:#2563eb;

}


/* =====================================================
MOBILE
===================================================== */

@media(max-width:700px){

    body{
        padding:12px;
    }


    .header{

        flex-direction:column;

        align-items:stretch;

        text-align:center;

    }


    .logo{

        justify-content:center;

    }


    .dashboard-btn{

        text-align:center;

    }


    .doctor-info{

        padding:18px;

    }


    .page-title h1{

        font-size:26px;

    }


    .order-card{

        padding:16px;

    }


    .order-top{

        align-items:flex-start;

        flex-direction:column;

    }


    .product{

        align-items:flex-start;

    }


    .total-row{

        gap:10px;

    }


    .total-row strong{

        font-size:20px;

    }


    .order-actions{

        flex-direction:column;

        align-items:stretch;

    }


    .order-actions .btn,
    .order-actions .cancel-disabled{

        width:100%;

        text-align:center;

    }

}

</style>

</head>


<body>


<header class="header">

    <div class="logo">

        <div class="logo-icon">
            🩺
        </div>

        <div>

            <div class="logo-text">
                GLOBAL HEALTHCARE
            </div>

            <div class="logo-sub">
                SAFE & SECURE Healthcare
            </div>

        </div>

    </div>


    <a
        href="/doctor/dashboard"
        class="dashboard-btn"
    >

        🏠 Dashboard

    </a>

</header>



<section class="doctor-info">

    <div class="doctor-avatar">
        👨‍⚕️
    </div>

    <div>

        <h2>
            Dr. ${escapeHTML(doctorName)}
        </h2>

        <p>
            ${escapeHTML(
                doctorSpecialization
            )}
        </p>

    </div>

</section>



<section class="page-title">

    <h1>
        📦 My Orders
    </h1>

    <p>
        View your complete order history and invoices.
    </p>

</section>



${orderHTML}



<footer class="footer">

    © 2026

    <strong>
        GLOBAL HEALTHCARE
    </strong>

    <br>

    Powered by

    <strong>
        Osium Biogenix
    </strong>

</footer>



<script>

/* =====================================================
CANCEL ORDER
===================================================== */

async function cancelOrder(button) {

    if (!button) {
        return;
    }


    const orderId =
        button.dataset.orderId;


    if (!orderId) {

        alert(
            "Order ID is missing."
        );

        return;

    }


    // =========================================
    // CONFIRM
    // =========================================

    const confirmed =
        confirm(
            "Are you sure you want to cancel this order?"
        );


    if (!confirmed) {
        return;
    }


    // =========================================
    // DISABLE BUTTON
    // =========================================

    button.disabled = true;

    button.innerHTML =
        "⏳ Cancelling...";


    try {

        // =====================================
        // API
        // =====================================

        const response =
            await fetch(
                "/doctor/cancel-order/" +
                encodeURIComponent(orderId),
                {
                    method:"POST",

                    headers:{
                        "Content-Type":
                            "application/json",

                        "Accept":
                            "application/json"
                    },

                    credentials:
                        "same-origin"
                }
            );


        // =====================================
        // RESPONSE
        // =====================================

        let data = null;


        try {

            data =
                await response.json();

        }

        catch(error) {

            console.error(
                "Response JSON Error:",
                error
            );

        }


        console.log(
            "Cancel Response:",
            data
        );


        // =====================================
        // SUCCESS
        // =====================================

        if (
            response.ok &&
            data &&
            data.success
        ) {

            alert(
                data.message ||
                "Order cancelled successfully."
            );


            // Reload
            window.location.reload();

            return;

        }


        // =====================================
        // ERROR
        // =====================================

        alert(
            data &&
            data.message

                ?

            data.message

                :

            "Unable to cancel order."
        );


        button.disabled = false;

        button.innerHTML =
            "❌ Cancel Order";

    }


    catch(error) {

        console.error(
            "Cancel Order Error:",
            error
        );


        alert(
            "Server error. Please try again."
        );


        button.disabled = false;

        button.innerHTML =
            "❌ Cancel Order";

    }

}

</script>


</body>

</html>

        `);

    }

    catch (err) {

        console.error(
            "Orders Error:",
            err
        );

        res.status(500)
            .send(
                "Orders Page Error"
            );

    }

});


// ======================================================
// CREATE ORDER
// ======================================================

router.post(
    "/create-order",
    async (req, res) => {

        try {

            if (!req.session.doctor) {

                return res.status(401).json({
                    success:false,
                    message:"Unauthorized"
                });

            }


            const cart =
                Array.isArray(req.body.cart)
                    ? req.body.cart
                    : [];


            if (cart.length === 0) {

                return res.status(400).json({
                    success:false,
                    message:"Cart is Empty"
                });

            }


            let total = 0;


            const items =
                cart.map(item => {

                    const price =
                        Number(item.price || 0);

                    const qty =
                        Number(item.qty || 0);


                    total +=
                        price * qty;


                    return {

                        productId:
                            item.productId ||
                            item.id ||
                            null,

                        name:
                            item.name ||
                            "Product",

                        price,

                        image:
                            item.image || "",

                        qty

                    };

                });


            if (total <= 0) {

                return res.status(400).json({
                    success:false,
                    message:"Invalid cart amount"
                });

            }


            const doctor =
                await findDoctorByAnyId(
                    getSessionDoctorId(
                        req.session.doctor
                    )
                );


            if (!doctor) {

                return res.status(404).json({
                    success:false,
                    message:"Doctor not found"
                });

            }


            const order =
                await DoctorOrder.create({

                    doctorId:
                        doctor._id,

                    doctorName:
                        doctor.name ||
                        doctor.doctorName ||
                        "",

                    doctorPhone:
                        doctor.phone ||
                        doctor.mobile ||
                        "",

                    doctorEmail:
                        doctor.email ||
                        "",

                    items,

                    totalAmount:
                        total,

                    paymentMethod:
                        "cod",

                    paymentStatus:
                        "pending",

                    status:
                        "Pending",

                    createdAt:
                        new Date()

                });


            return res.json({

                success:true,

                message:
                    "Order Created Successfully",

                orderId:
                    order._id.toString(),

                redirect:
                    `/doctor/checkout-success/${order._id}`

            });

        }

        catch (error) {

            console.error(
                "Create Order Error:",
                error
            );

            return res.status(500).json({

                success:false,

                message:
                    "Order Failed"

            });

        }

    }
);


// ======================================================
// INVOICE PDF
// ======================================================

router.get(
    "/invoice/:id",
    async (req, res) => {

        try {

            if (!req.session.doctor) {

                return res.redirect(
                    "/admin/doctor-login"
                );

            }


            const order =
                await DoctorOrder.findById(
                    req.params.id
                );


            if (!order) {

                return res
                    .status(404)
                    .send("Order Not Found");

            }


            // ==========================================
            // SECURITY
            // ==========================================

            const sessionDoctor =
                req.session.doctor;


            const sessionDoctorId =
                getSessionDoctorId(
                    sessionDoctor
                );


            const loggedDoctor =
                await findDoctorByAnyId(
                    sessionDoctorId
                );


            if (
                loggedDoctor &&
                order.doctorId &&
                String(order.doctorId) !==
                String(loggedDoctor._id)
            ) {

                return res
                    .status(403)
                    .send(
                        "You cannot access this invoice."
                    );

            }


            let doctor = null;


            if (order.doctorId) {

                doctor =
                    await findDoctorByAnyId(
                        order.doctorId
                    );

            }


            if (!doctor) {
                doctor = sessionDoctor;
            }


            const doctorName =
                doctor.name ||
                doctor.doctorName ||
                "Doctor";


            const doctorId =
                doctor.doctorId ||
                doctor._id ||
                "";


            const doctorPhone =
                doctor.phone ||
                doctor.mobile ||
                "";


            const specialization =
                doctor.specialization ||
                "General Physician";


            res.setHeader(
                "Content-Type",
                "application/pdf"
            );


            res.setHeader(
                "Content-Disposition",
                `attachment; filename=Estimate-${order._id}.pdf`
            );


            const doc =
                new PDFDocument({

                    size:"A4",

                    margins:{
                        top:40,
                        bottom:40,
                        left:40,
                        right:40
                    }

                });


            const fontPath =
                path.join(
                    __dirname,
                    "../fonts/DejaVuSans.ttf"
                );


            try {

                doc.font(fontPath);

            }

            catch(error) {

                console.log(
                    "Font Error:",
                    error.message
                );

            }


            doc.pipe(res);


            const money = amount => {

                return `Rs.${Number(
                    amount || 0
                ).toFixed(2)}`;

            };


            doc
                .fontSize(20)
                .text(
                    "GLOBAL HEALTHCARE",
                    {
                        align:"center"
                    }
                );


            doc
                .fontSize(10)
                .text(
                    "SAFE & SECURE Healthcare",
                    {
                        align:"center"
                    }
                );


            doc.moveDown(1);


            doc
                .fontSize(16)
                .text(
                    "ROUGH ESTIMATE",
                    {
                        align:"center"
                    }
                );


            doc.moveDown(1.5);


            doc.fontSize(11);


            doc.text(
                `DOCTOR : Dr. ${doctorName}`
            );


            doc.text(
                `SPECIALIZATION : ${specialization}`
            );


            if (doctorId) {

                doc.text(
                    `DOCTOR ID : ${doctorId}`
                );

            }


            if (doctorPhone) {

                doc.text(
                    `PHONE : ${doctorPhone}`
                );

            }


            doc.text(
                `BILL NO : A${String(
                    order._id
                ).slice(-6)}`
            );


            doc.text(
                `DATE : ${new Date(
                    order.createdAt
                ).toLocaleDateString(
                    "en-GB"
                )}`
            );


            doc.text(
                "TYPE : CREDIT"
            );


            doc.moveDown(1);


            doc
                .fontSize(9)
                .text(
                    "--------------------------------------------------------------------------------",
                    40
                );


            doc.moveDown(.5);


            let tableY = doc.y;


            doc
                .fontSize(10)
                .text(
                    "SL",
                    40,
                    tableY
                );


            doc.text(
                "PRODUCT DESCRIPTION",
                70,
                tableY
            );


            doc.text(
                "QTY",
                300,
                tableY
            );


            doc.text(
                "RATE",
                350,
                tableY
            );


            doc.text(
                "AMOUNT",
                430,
                tableY
            );


            tableY += 20;


            doc.text(
                "--------------------------------------------------------------------------------",
                40,
                tableY
            );


            tableY += 10;


            let total = 0;

            let totalQty = 0;


            const items =
                Array.isArray(order.items)
                    ? order.items
                    : [];


            items.forEach(
                (item,index) => {

                    const qty =
                        Number(
                            item.qty || 0
                        );


                    const rate =
                        Number(
                            item.price || 0
                        );


                    const amount =
                        qty * rate;


                    total += amount;

                    totalQty += qty;


                    let productName =
                        item.name ||
                        "Product";


                    if (
                        productName.length > 35
                    ) {

                        productName =
                            productName.substring(
                                0,
                                35
                            ) + "...";

                    }


                    if (tableY > 700) {

                        doc.addPage();

                        tableY = 50;

                    }


                    doc
                        .fontSize(9)
                        .text(
                            `${index + 1}`,
                            40,
                            tableY
                        );


                    doc.text(
                        productName,
                        70,
                        tableY,
                        {
                            width:215
                        }
                    );


                    doc.text(
                        `${qty}`,
                        300,
                        tableY
                    );


                    doc.text(
                        money(rate),
                        350,
                        tableY
                    );


                    doc.text(
                        money(amount),
                        430,
                        tableY
                    );


                    tableY += 25;

                }
            );


            doc.text(
                "--------------------------------------------------------------------------------",
                40,
                tableY
            );


            tableY += 25;


            doc
                .fontSize(11)
                .text(
                    `NO OF ITEMS : ${items.length}`,
                    40,
                    tableY
                );


            tableY += 20;


            doc.text(
                `TOTAL QUANTITY : ${totalQty}`,
                40,
                tableY
            );


            tableY += 25;


            doc
                .fontSize(13)
                .text(
                    `GRAND TOTAL : ${money(total)}`,
                    40,
                    tableY
                );


            tableY += 25;


            doc
                .fontSize(11)
                .text(
                    "--------------------------------------------------------------------------------",
                    40,
                    tableY
                );


            tableY += 20;


            doc.text(
                `CURRENT BILL AMOUNT : ${money(total)}`,
                40,
                tableY
            );


            tableY += 20;


            const backDues =
                Number(
                    order.backDues || 0
                );


            const totalBalance =
                total + backDues;


            doc.text(
                `BACK DUES AMOUNT    : ${money(backDues)}`,
                40,
                tableY
            );


            tableY += 20;


            doc.text(
                `TOTAL BALANCE       : ${money(totalBalance)}`,
                40,
                tableY
            );


            tableY += 25;


            doc.text(
                "--------------------------------------------------------------------------------",
                40,
                tableY
            );


            tableY += 30;


            doc
                .fontSize(10)
                .text(
                    "Import Purchase ONLINE : No",
                    40,
                    tableY
                );


            tableY += 20;


            doc
                .fontSize(12)
                .text(
                    "GLOBAL HEALTHCARE",
                    40,
                    tableY
                );


            tableY += 18;


            doc
                .fontSize(9)
                .text(
                    "Powered by Osium Biogenix",
                    40,
                    tableY
                );


            tableY += 18;


            doc.text(
                "Call : 7488033368",
                40,
                tableY
            );


            tableY += 25;


            doc.text(
                "============================================================",
                40,
                tableY
            );


            doc.end();

        }

        catch (error) {

            console.error(
                "Invoice Error:",
                error
            );


            if (!res.headersSent) {

                res.status(500)
                    .send(
                        "Invoice Generate Error"
                    );

            }

        }

    }
);


// ======================================================
// LOGOUT
// ======================================================

router.get(
    "/logout",
    (req,res) => {

        req.session.destroy(
            () => {

                res.redirect(
                    "/admin/doctor-login"
                );

            }
        );

    }
);


// ======================================================
// DOCTOR CART
// ======================================================

router.get(
    "/cart",
    async (req,res) => {

        try {

            if (!req.session.doctor) {

                return res.redirect(
                    "/admin/doctor-login"
                );

            }


            const DoctorCart =
                require(
                    "../pages/doctorCart"
                );


            res.send(
                DoctorCart(
                    req.session.doctor
                )
            );

        }

        catch(error) {

            console.error(
                "Doctor Cart Error:",
                error
            );

            res.status(500)
                .send(
                    "Doctor Cart Page Error"
                );

        }

    }
);


// ======================================================
// DOCTOR DASHBOARD
// ======================================================

router.get(
    "/dashboard",
    async (req,res) => {

        try {

            if (!req.session.doctor) {

                return res.redirect(
                    "/admin/doctor-login"
                );

            }


            const products =
                await Product.find()
                    .sort({
                        createdAt:-1
                    });


            const DoctorDashboard =
                require(
                    "../pages/doctorDashboard"
                );


            res.send(
                DoctorDashboard(
                    req.session.doctor,
                    products
                )
            );

        }

        catch(error) {

            console.error(
                "Dashboard Error:",
                error
            );

            res.status(500)
                .send(
                    "Dashboard Error"
                );

        }

    }
);


// ======================================================
// CHECKOUT PAGE
// ======================================================

const Checkout =
    require("../pages/checkout");


router.get(
    "/checkout",
    async (req,res) => {

        try {

            if (!req.session.doctor) {

                return res.redirect(
                    "/admin/doctor-login"
                );

            }


            const sessionDoctor =
                req.session.doctor;


            const doctorId =
                getSessionDoctorId(
                    sessionDoctor
                );


            if (!doctorId) {

                return res.status(400)
                    .send(
                        "Doctor ID is missing from session."
                    );

            }


            const doctor =
                await findDoctorByAnyId(
                    doctorId
                );


            if (!doctor) {

                return res.status(404)
                    .send(
                        "Doctor not found in database."
                    );

            }


            res.send(
                Checkout(doctor)
            );

        }

        catch(error) {

            console.error(
                "Doctor Checkout Error:",
                error
            );

            res.status(500)
                .send(
                    "Server Error. Please try again."
                );

        }

    }
);


// ======================================================
// CHECKOUT BY DOCTOR ID
// ======================================================

router.get(
    "/checkout/:id",
    async (req,res) => {

        try {

            const doctor =
                await findDoctorByAnyId(
                    req.params.id
                );


            if (!doctor) {

                return res.status(404)
                    .send(
                        "Doctor not found"
                    );

            }


            res.send(
                Checkout(doctor)
            );

        }

        catch(error) {

            console.error(
                "Doctor Checkout Error:",
                error
            );

            res.status(500)
                .send(
                    "Server Error"
                );

        }

    }
);


// ======================================================
// CHECKOUT SUCCESS
// ======================================================

router.get(
    "/checkout-success/:id",
    async (req,res) => {

        try {

            if (!req.session.doctor) {

                return res.redirect(
                    "/admin/doctor-login"
                );

            }


            const order =
                await DoctorOrder
                    .findById(
                        req.params.id
                    )
                    .lean();


            if (!order) {

                return res.status(404)
                    .send(
                        "Order not found"
                    );

            }


            const sessionDoctor =
                req.session.doctor;


            const loggedDoctor =
                await findDoctorByAnyId(
                    getSessionDoctorId(
                        sessionDoctor
                    )
                );


            if (
                loggedDoctor &&
                order.doctorId &&
                String(order.doctorId) !==
                String(loggedDoctor._id)
            ) {

                return res.status(403)
                    .send(
                        "You cannot access this order."
                    );

            }


            let doctor = null;


            if (order.doctorId) {

                doctor =
                    await findDoctorByAnyId(
                        order.doctorId
                    );

            }


            if (!doctor) {

                doctor =
                    sessionDoctor;

            }


            const doctorName =
                doctor.name ||
                doctor.doctorName ||
                order.doctorName ||
                "Doctor";


            const doctorPhone =
                doctor.phone ||
                doctor.mobile ||
                order.doctorPhone ||
                "";


            const doctorEmail =
                doctor.email ||
                order.doctorEmail ||
                "";


            const doctorDisplayId =
                doctor.doctorId ||
                doctor._id ||
                order.doctorId ||
                "";


            const totalAmount =
                Number(
                    order.totalAmount || 0
                );


            res.send(`

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
Order Successful | GLOBAL HEALTHCARE
</title>


<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:
        Arial,
        Helvetica,
        sans-serif;
}


body{

    min-height:100vh;

    display:flex;

    align-items:center;

    justify-content:center;

    padding:20px;

    background:
        linear-gradient(
            135deg,
            #eff6ff,
            #f0fdf4
        );

}


.success-card{

    width:100%;

    max-width:550px;

    background:#fff;

    border-radius:28px;

    padding:35px 25px;

    text-align:center;

    box-shadow:
        0 20px 60px
        rgba(0,0,0,.12);

}


.success-icon{

    width:90px;
    height:90px;

    margin:0 auto 20px;

    border-radius:50%;

    display:flex;

    align-items:center;

    justify-content:center;

    background:#dcfce7;

    color:#16a34a;

    font-size:48px;

}


h1{

    color:#15803d;

    font-size:28px;

    margin-bottom:10px;

}


.subtitle{

    color:#64748b;

    font-size:15px;

    line-height:1.6;

    margin-bottom:25px;

}


.order-box{

    background:#eff6ff;

    border:1px solid #bfdbfe;

    border-radius:18px;

    padding:16px;

    margin-bottom:20px;

}


.order-number{

    color:#2563eb;

    font-size:16px;

    font-weight:900;

}


.doctor-box{

    background:#f8fafc;

    border:1px solid #e2e8f0;

    border-radius:18px;

    padding:18px;

    text-align:left;

    margin-bottom:20px;

}


.row{

    display:flex;

    justify-content:space-between;

    gap:15px;

    padding:9px 0;

    border-bottom:1px solid #e5e7eb;

}


.row:last-child{

    border-bottom:none;

}


.label{

    color:#64748b;

    font-size:14px;

}


.value{

    font-weight:700;

    color:#0f172a;

    text-align:right;

}


.amount-box{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:18px;

    margin-bottom:20px;

    border-radius:18px;

    background:
        linear-gradient(
            135deg,
            #16a34a,
            #22c55e
        );

    color:white;

}


.amount-label{

    font-weight:700;

}


.amount{

    font-size:24px;

    font-weight:900;

}


.cod-box{

    background:#fff7ed;

    border:1px solid #fed7aa;

    border-radius:18px;

    padding:18px;

    margin-bottom:25px;

}


.cod-title{

    color:#c2410c;

    font-weight:800;

    font-size:17px;

    margin-bottom:7px;

}


.cod-text{

    color:#7c2d12;

    font-size:14px;

    line-height:1.5;

}


.buttons{

    display:flex;

    flex-direction:column;

    gap:12px;

}


.btn{

    display:block;

    width:100%;

    padding:14px 20px;

    border-radius:14px;

    text-decoration:none;

    font-weight:800;

}


.dashboard{

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #4f46e5
        );

    color:#fff;

}


.orders{

    background:#eff6ff;

    color:#2563eb;

}


.footer{

    margin-top:25px;

    color:#94a3b8;

    font-size:12px;

}

</style>

</head>


<body>


<div class="success-card">


    <div class="success-icon">
        ✓
    </div>


    <h1>
        Order Placed Successfully
    </h1>


    <p class="subtitle">

        Your Cash on Delivery order has been
        successfully placed.

    </p>


    <div class="order-box">

        <div class="order-number">

            Order #
            ${escapeHTML(
                String(order._id).slice(-8)
            )}

        </div>

    </div>


    <div class="doctor-box">


        <div class="row">

            <span class="label">
                Doctor ID
            </span>

            <span class="value">

                ${escapeHTML(
                    String(doctorDisplayId)
                )}

            </span>

        </div>


        <div class="row">

            <span class="label">
                Doctor Name
            </span>

            <span class="value">

                Dr.
                ${escapeHTML(
                    doctorName
                )}

            </span>

        </div>


        ${
            doctorPhone
                ?
`
<div class="row">

    <span class="label">
        Mobile
    </span>

    <span class="value">
        ${escapeHTML(
            doctorPhone
        )}
    </span>

</div>
`
                :
""
        }


        ${
            doctorEmail
                ?
`
<div class="row">

    <span class="label">
        Email
    </span>

    <span class="value">
        ${escapeHTML(
            doctorEmail
        )}
    </span>

</div>
`
                :
""
        }


    </div>


    <div class="amount-box">

        <span class="amount-label">
            Order Amount
        </span>

        <span class="amount">

            ₹${totalAmount.toFixed(2)}

        </span>

    </div>


    <div class="cod-box">

        <div class="cod-title">
            💵 Cash on Delivery
        </div>

        <div class="cod-text">

            You have selected Cash on Delivery.
            Payment will be collected when
            your order is delivered.

        </div>

    </div>


    <div class="buttons">

        <a
            href="/doctor/orders"
            class="btn orders"
        >

            📦 View My Orders

        </a>


        <a
            href="/doctor/dashboard"
            class="btn dashboard"
        >

            🏠 Go to Dashboard

        </a>

    </div>


    <div class="footer">

        🔒 Secure order • GLOBAL HEALTHCARE

    </div>


</div>


</body>

</html>

`);

        }

        catch(error) {

            console.error(
                "Checkout Success Error:",
                error
            );

            res.status(500)
                .send(
                    "Checkout Success Page Error"
                );

        }

    }
);


// ======================================================
// CASH ON DELIVERY
// ======================================================

router.post(
    "/checkout/cod",
    async (req,res) => {

        try {

            if (!req.session.doctor) {

                return res.status(401).json({

                    success:false,

                    message:
                        "Doctor login required"

                });

            }


            const sessionDoctor =
                req.session.doctor;


            const sessionDoctorId =
                getSessionDoctorId(
                    sessionDoctor
                );


            if (!sessionDoctorId) {

                return res.status(400).json({

                    success:false,

                    message:
                        "Doctor ID missing from session"

                });

            }


            const doctor =
                await findDoctorByAnyId(
                    sessionDoctorId
                );


            if (!doctor) {

                return res.status(404).json({

                    success:false,

                    message:
                        "Doctor not found"

                });

            }


            const cart =
                Array.isArray(req.body.cart)
                    ? req.body.cart
                    : [];


            if (cart.length === 0) {

                return res.status(400).json({

                    success:false,

                    message:
                        "Cart is Empty"

                });

            }


            const items =
                cart.map(item => {

                    const price =
                        Number(
                            item.price || 0
                        );


                    const qty =
                        Number(
                            item.qty || 0
                        );


                    return {

                        productId:
                            item.productId ||
                            item.id ||
                            null,

                        name:
                            item.name ||
                            "Product",

                        price,

                        image:
                            item.image ||
                            "",

                        qty

                    };

                });


            let totalAmount = 0;


            items.forEach(item => {

                totalAmount +=
                    Number(item.price) *
                    Number(item.qty);

            });


            if (totalAmount <= 0) {

                return res.status(400).json({

                    success:false,

                    message:
                        "Invalid cart amount"

                });

            }


            const order =
                await DoctorOrder.create({

                    doctorId:
                        doctor._id,

                    doctorName:
                        doctor.name ||
                        doctor.doctorName ||
                        "",

                    doctorPhone:
                        doctor.phone ||
                        doctor.mobile ||
                        "",

                    doctorEmail:
                        doctor.email ||
                        "",

                    items,

                    totalAmount,

                    paymentMethod:
                        "cod",

                    paymentStatus:
                        "pending",

                    status:
                        "Pending",

                    createdAt:
                        new Date()

                });


            console.log(
                "COD ORDER CREATED:",
                order._id
            );


            return res.status(200).json({

                success:true,

                message:
                    "Cash on Delivery order placed successfully",

                orderId:
                    order._id.toString(),

                redirect:
                    `/doctor/checkout-success/${order._id}`

            });

        }

        catch(error) {

            console.error(
                "COD ORDER ERROR:",
                error
            );

            return res.status(500).json({

                success:false,

                message:
                    "Unable to place COD order",

                error:
                    error.message

            });

        }

    }
);


// ======================================================
// CANCEL DOCTOR ORDER
// ======================================================

router.post(
    "/cancel-order/:id",
    async (req,res) => {

        try {

            // ==========================================
            // LOGIN
            // ==========================================

            if (!req.session.doctor) {

                return res.status(401).json({

                    success:false,

                    message:
                        "Doctor login required"

                });

            }


            // ==========================================
            // ORDER ID
            // ==========================================

            const orderId =
                String(
                    req.params.id || ""
                ).trim();


            if (
                !/^[0-9a-fA-F]{24}$/.test(
                    orderId
                )
            ) {

                return res.status(400).json({

                    success:false,

                    message:
                        "Invalid Order ID"

                });

            }


            // ==========================================
            // SESSION DOCTOR
            // ==========================================

            const sessionDoctor =
                req.session.doctor;


            const sessionMongoId =
                sessionDoctor._id ||
                sessionDoctor.id ||
                "";


            const sessionCustomDoctorId =
                sessionDoctor.doctorId ||
                "";


            // ==========================================
            // FIND ORDER
            // ==========================================

            const order =
                await DoctorOrder.findById(
                    orderId
                );


            if (!order) {

                return res.status(404).json({

                    success:false,

                    message:
                        "Order not found"

                });

            }


            // ==========================================
            // FIND LOGGED DOCTOR
            // ==========================================

            const loggedDoctor =
                await findDoctorByAnyId(
                    sessionMongoId ||
                    sessionCustomDoctorId
                );


            if (!loggedDoctor) {

                return res.status(403).json({

                    success:false,

                    message:
                        "Doctor verification failed"

                });

            }


            // ==========================================
            // SECURITY
            // ==========================================

            if (
                !order.doctorId ||
                String(order.doctorId) !==
                String(loggedDoctor._id)
            ) {

                return res.status(403).json({

                    success:false,

                    message:
                        "You cannot cancel this order"

                });

            }


            // ==========================================
            // STATUS
            // ==========================================

            const currentStatus =
                String(
                    order.status ||
                    "Pending"
                )
                    .trim()
                    .toLowerCase();


            // ==========================================
            // ALREADY CANCELLED
            // ==========================================

            if (
                currentStatus ===
                "cancelled"
            ) {

                return res.status(400).json({

                    success:false,

                    message:
                        "Order is already cancelled"

                });

            }


            // ==========================================
            // DELIVERED
            // ==========================================

            if (
                currentStatus ===
                "delivered"
            ) {

                return res.status(400).json({

                    success:false,

                    message:
                        "Delivered order cannot be cancelled"

                });

            }


            // ==========================================
            // SHIPPED
            // ==========================================

            if (
                currentStatus ===
                "shipped"
            ) {

                return res.status(400).json({

                    success:false,

                    message:
                        "Shipped order cannot be cancelled"

                });

            }


            // ==========================================
            // CANCEL
            // ==========================================

            order.status =
                "Cancelled";


            order.cancelledAt =
                new Date();


            await order.save();


            console.log(
                "ORDER CANCELLED:",
                order._id.toString()
            );


            return res.status(200).json({

                success:true,

                message:
                    "Order cancelled successfully",

                orderId:
                    order._id.toString(),

                status:
                    "Cancelled"

            });

        }

        catch(error) {

            console.error(
                "CANCEL ORDER ERROR:",
                error
            );


            return res.status(500).json({

                success:false,

                message:
                    "Unable to cancel order",

                error:
                    error.message

            });

        }

    }
);


// =====================================
// DELETE DOCTOR ORDER
// POST /admin/doctor-order/:orderId/delete
// =====================================
router.post(
    "/doctor-order/:orderId/delete",
    async (req, res) => {

        try {

            const order = await DoctorOrder.findById(
                req.params.orderId
            );

            if (!order) {
                return res
                    .status(404)
                    .send("Order not found");
            }

            const doctorId =
                req.body.doctorId ||
                order.doctorId ||
                order.doctor;

            await DoctorOrder.findByIdAndDelete(
                req.params.orderId
            );

            if (doctorId) {
                return res.redirect(
                    `/admin/doctor/${doctorId}/orders`
                );
            }

            return res.redirect(
                "/admin/doctor-orders"
            );

        } catch (error) {

            console.error(
                "DELETE DOCTOR ORDER ERROR:",
                error
            );

            return res
                .status(500)
                .send("Doctor order delete failed");
        }
    }
);


// ======================================================
// EXPORT
// ======================================================

module.exports = router;
