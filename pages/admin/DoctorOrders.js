// // // // function DoctorOrders(doctor = {}, orders = []) {

// // // //     let rows = "";

// // // //     orders.forEach((order, index) => {

// // // //         const products = Array.isArray(order.items)
// // // //             ? order.items.map((item) => {
// // // //                 return `
// // // //                     <div class="product">
// // // //                         <b>${item.name || item.productName || "Product"}</b>
// // // //                         × ${item.quantity || 1}
// // // //                     </div>
// // // //                 `;
// // // //             }).join("")
// // // //             : "-";

// // // //         rows += `
// // // //         <tr>
// // // //             <td>${index + 1}</td>
// // // //             <td>${order.orderId || order._id}</td>
// // // //             <td>${products}</td>
// // // //             <td>₹ ${order.totalAmount || order.total || 0}</td>
// // // //             <td>${order.paymentMethod || "COD"}</td>
// // // //             <td>
// // // //                 <span class="status">
// // // //                     ${order.status || "Pending"}
// // // //                 </span>
// // // //             </td>
// // // //             <td>
// // // //                 ${
// // // //                     order.createdAt
// // // //                         ? new Date(order.createdAt).toLocaleString("en-IN")
// // // //                         : "-"
// // // //                 }
// // // //             </td>
// // // //         </tr>
// // // //         `;
// // // //     });

// // // //     return `
// // // //     <!DOCTYPE html>
// // // //     <html lang="en">

// // // //     <head>
// // // //         <meta charset="UTF-8">
// // // //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
// // // //         <title>Doctor Orders</title>

// // // //         <style>
// // // //             body{
// // // //                 margin:0;
// // // //                 background:#f4f7fb;
// // // //                 font-family:Arial, sans-serif;
// // // //                 color:#1d2939;
// // // //             }

// // // //             .container{
// // // //                 width:95%;
// // // //                 max-width:1300px;
// // // //                 margin:30px auto;
// // // //             }

// // // //             .top{
// // // //                 display:flex;
// // // //                 justify-content:space-between;
// // // //                 align-items:center;
// // // //                 gap:15px;
// // // //                 margin-bottom:20px;
// // // //             }

// // // //             h1{
// // // //                 margin:0 0 8px;
// // // //                 font-size:25px;
// // // //             }

// // // //             p{
// // // //                 margin:0;
// // // //                 color:#667085;
// // // //             }

// // // //             .back-btn{
// // // //                 background:#0d6efd;
// // // //                 color:white;
// // // //                 text-decoration:none;
// // // //                 padding:10px 16px;
// // // //                 border-radius:8px;
// // // //                 white-space:nowrap;
// // // //             }

// // // //             .table-box{
// // // //                 background:white;
// // // //                 border-radius:10px;
// // // //                 overflow-x:auto;
// // // //                 box-shadow:0 2px 10px rgba(0,0,0,.08);
// // // //             }

// // // //             table{
// // // //                 width:100%;
// // // //                 min-width:900px;
// // // //                 border-collapse:collapse;
// // // //             }

// // // //             th, td{
// // // //                 padding:12px;
// // // //                 border:1px solid #e5e7eb;
// // // //                 text-align:center;
// // // //                 font-size:14px;
// // // //             }

// // // //             th{
// // // //                 background:#0d6efd;
// // // //                 color:white;
// // // //             }

// // // //             .product{
// // // //                 text-align:left;
// // // //                 margin-bottom:6px;
// // // //             }

// // // //             .status{
// // // //                 display:inline-block;
// // // //                 padding:5px 10px;
// // // //                 border-radius:20px;
// // // //                 background:#fff3cd;
// // // //                 color:#856404;
// // // //                 font-weight:bold;
// // // //             }

// // // //             .empty{
// // // //                 padding:35px;
// // // //                 text-align:center;
// // // //                 font-size:16px;
// // // //                 color:#667085;
// // // //             }

// // // //             @media(max-width:600px){
// // // //                 .container{
// // // //                     width:94%;
// // // //                 }

// // // //                 .top{
// // // //                     flex-direction:column;
// // // //                     align-items:flex-start;
// // // //                 }
// // // //             }
// // // //         </style>
// // // //     </head>

// // // //     <body>

// // // //         <div class="container">

// // // //             <div class="top">
// // // //                 <div>
// // // //                     <h1>📦 Orders — ${doctor.name || "Doctor"}</h1>
// // // //                     <p>Doctor ID: ${doctor.doctorId || "-"}</p>
// // // //                 </div>

// // // //                 <a href="/admin/manage-doctors" class="back-btn">
// // // //                     ← Back to Doctors
// // // //                 </a>
// // // //             </div>

// // // //             <div class="table-box">

// // // //                 ${
// // // //                     orders.length
// // // //                         ? `
// // // //                         <table>
// // // //                             <thead>
// // // //                                 <tr>
// // // //                                     <th>#</th>
// // // //                                     <th>Order ID</th>
// // // //                                     <th>Products</th>
// // // //                                     <th>Total</th>
// // // //                                     <th>Payment</th>
// // // //                                     <th>Status</th>
// // // //                                     <th>Order Date</th>
// // // //                                 </tr>
// // // //                             </thead>

// // // //                             <tbody>
// // // //                                 ${rows}
// // // //                             </tbody>
// // // //                         </table>
// // // //                         `
// // // //                         : `
// // // //                         <div class="empty">
// // // //                             No orders found for ${doctor.name || "this doctor"}.
// // // //                         </div>
// // // //                         `
// // // //                 }

// // // //             </div>

// // // //         </div>

// // // //     </body>
// // // //     </html>
// // // //     `;
// // // // }

// // // // module.exports = DoctorOrders;


// // // function DoctorOrders(doctor = {}, orders = []) {

// // //     let rows = "";

// // //     orders.forEach((order, index) => {

// // //         const products = Array.isArray(order.items)
// // //             ? order.items.map((item) => {
// // //                 return `
// // //                     <div class="product">
// // //                         <b>${item.name || item.productName || "Product"}</b>
// // //                         × ${item.quantity || 1}
// // //                     </div>
// // //                 `;
// // //             }).join("")
// // //             : "-";

// // //         rows += `
// // //         <tr>
// // //             <td>${index + 1}</td>

// // //             <td>${order.orderId || order._id}</td>

// // //             <td>${products}</td>

// // //             <td>₹ ${order.totalAmount || order.total || 0}</td>

// // //             <td>${String(order.paymentMethod || "COD").toUpperCase()}</td>

// // //             <td>
// // //                 <span class="status">
// // //                     ${order.status || "Pending"}
// // //                 </span>
// // //             </td>

// // //             <td>
// // //                 ${
// // //                     order.createdAt
// // //                         ? new Date(order.createdAt).toLocaleString("en-IN")
// // //                         : "-"
// // //                 }
// // //             </td>

// // //             <td class="action-cell">

// // //                 <form
// // //                     action="/admin/doctor-order/${order._id}/status"
// // //                     method="POST"
// // //                     class="status-form"
// // //                 >
// // //                     <select name="status">
// // //                         <option value="Pending"
// // //                             ${order.status === "Pending" ? "selected" : ""}>
// // //                             Pending
// // //                         </option>

// // //                         <option value="Confirmed"
// // //                             ${order.status === "Confirmed" ? "selected" : ""}>
// // //                             Confirmed
// // //                         </option>

// // //                         <option value="Processing"
// // //                             ${order.status === "Processing" ? "selected" : ""}>
// // //                             Processing
// // //                         </option>

// // //                         <option value="Completed"
// // //                             ${order.status === "Completed" ? "selected" : ""}>
// // //                             Completed
// // //                         </option>

// // //                         <option value="Cancelled"
// // //                             ${order.status === "Cancelled" ? "selected" : ""}>
// // //                             Cancelled
// // //                         </option>
// // //                     </select>

// // //                     <button type="submit" class="update-btn">
// // //                         Update
// // //                     </button>
// // //                 </form>

// // //                 <a
// // //                     href="/admin/doctor-order/${order._id}/invoice"
// // //                     class="invoice-btn"
// // //                     target="_blank"
// // //                 >
// // //                     ⬇ Invoice
// // //                 </a>

// // //             </td>
// // //         </tr>
// // //         `;
// // //     });

// // //     return `
// // //     <!DOCTYPE html>
// // //     <html lang="en">

// // //     <head>
// // //         <meta charset="UTF-8">
// // //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
// // //         <title>Doctor Orders</title>

// // //         <style>

// // //             *{
// // //                 box-sizing:border-box;
// // //             }

// // //             body{
// // //                 margin:0;
// // //                 background:#f4f7fb;
// // //                 font-family:Arial, sans-serif;
// // //                 color:#1d2939;
// // //             }

// // //             .container{
// // //                 width:95%;
// // //                 max-width:1400px;
// // //                 margin:30px auto;
// // //             }

// // //             .top{
// // //                 display:flex;
// // //                 justify-content:space-between;
// // //                 align-items:center;
// // //                 gap:15px;
// // //                 margin-bottom:20px;
// // //             }

// // //             h1{
// // //                 margin:0 0 8px;
// // //                 font-size:25px;
// // //             }

// // //             p{
// // //                 margin:0;
// // //                 color:#667085;
// // //             }

// // //             .back-btn{
// // //                 background:#0d6efd;
// // //                 color:white;
// // //                 text-decoration:none;
// // //                 padding:10px 16px;
// // //                 border-radius:8px;
// // //                 white-space:nowrap;
// // //                 font-weight:bold;
// // //             }

// // //             .table-box{
// // //                 background:white;
// // //                 border-radius:10px;
// // //                 overflow-x:auto;
// // //                 box-shadow:0 2px 10px rgba(0,0,0,.08);
// // //             }

// // //             table{
// // //                 width:100%;
// // //                 min-width:1100px;
// // //                 border-collapse:collapse;
// // //             }

// // //             th,
// // //             td{
// // //                 padding:12px;
// // //                 border:1px solid #e5e7eb;
// // //                 text-align:center;
// // //                 font-size:14px;
// // //             }

// // //             th{
// // //                 background:#0d6efd;
// // //                 color:white;
// // //                 white-space:nowrap;
// // //             }

// // //             .product{
// // //                 text-align:left;
// // //                 margin-bottom:6px;
// // //             }

// // //             .status{
// // //                 display:inline-block;
// // //                 padding:5px 10px;
// // //                 border-radius:20px;
// // //                 background:#fff3cd;
// // //                 color:#856404;
// // //                 font-weight:bold;
// // //             }

// // //             .action-cell{
// // //                 min-width:185px;
// // //             }

// // //             .status-form{
// // //                 display:flex;
// // //                 justify-content:center;
// // //                 gap:5px;
// // //                 margin-bottom:8px;
// // //             }

// // //             .status-form select{
// // //                 max-width:110px;
// // //                 padding:7px 5px;
// // //                 border:1px solid #d0d5dd;
// // //                 border-radius:6px;
// // //                 outline:none;
// // //             }

// // //             .update-btn,
// // //             .invoice-btn{
// // //                 border:none;
// // //                 color:white;
// // //                 padding:7px 9px;
// // //                 border-radius:6px;
// // //                 font-size:12px;
// // //                 font-weight:bold;
// // //                 cursor:pointer;
// // //                 text-decoration:none;
// // //             }

// // //             .update-btn{
// // //                 background:#198754;
// // //             }

// // //             .invoice-btn{
// // //                 background:#0d6efd;
// // //                 display:inline-block;
// // //             }

// // //             .empty{
// // //                 padding:35px;
// // //                 text-align:center;
// // //                 font-size:16px;
// // //                 color:#667085;
// // //             }

// // //             @media(max-width:600px){

// // //                 .container{
// // //                     width:94%;
// // //                     margin:20px auto;
// // //                 }

// // //                 .top{
// // //                     flex-direction:column;
// // //                     align-items:flex-start;
// // //                 }

// // //             }

// // //         </style>
// // //     </head>

// // //     <body>

// // //         <div class="container">

// // //             <div class="top">

// // //                 <div>
// // //                     <h1>📦 Orders — ${doctor.name || "Doctor"}</h1>
// // //                     <p>Doctor ID: ${doctor.doctorId || "-"}</p>
// // //                 </div>

// // //                 <a href="/admin/manage-doctors" class="back-btn">
// // //                     ← Back to Doctors
// // //                 </a>

// // //             </div>

// // //             <div class="table-box">

// // //                 ${
// // //                     orders.length
// // //                         ? `
// // //                         <table>

// // //                             <thead>
// // //                                 <tr>
// // //                                     <th>#</th>
// // //                                     <th>Order ID</th>
// // //                                     <th>Products</th>
// // //                                     <th>Total</th>
// // //                                     <th>Payment</th>
// // //                                     <th>Status</th>
// // //                                     <th>Order Date</th>
// // //                                     <th>Action</th>
// // //                                 </tr>
// // //                             </thead>

// // //                             <tbody>
// // //                                 ${rows}
// // //                             </tbody>

// // //                         </table>
// // //                         `
// // //                         : `
// // //                         <div class="empty">
// // //                             No orders found for ${doctor.name || "this doctor"}.
// // //                         </div>
// // //                         `
// // //                 }

// // //             </div>

// // //         </div>

// // //     </body>
// // //     </html>
// // //     `;
// // // }

// // // module.exports = DoctorOrders;

// // // function DoctorOrders(doctor = {}, orders = []) {

// // //     let rows = "";

// // //     orders.forEach((order, index) => {

// // //         const products = Array.isArray(order.items)
// // //             ? order.items.map((item) => {
// // //                 return `
// // //                     <div class="product">
// // //                         <b>${item.name || item.productName || "Product"}</b>
// // //                         × ${item.quantity || 1}
// // //                     </div>
// // //                 `;
// // //             }).join("")
// // //             : "-";

// // //         rows += `
// // //         <tr>
// // //             <td>${index + 1}</td>
// // //             <td>${order.orderId || order._id}</td>
// // //             <td>${products}</td>
// // //             <td>₹ ${order.totalAmount || order.total || 0}</td>
// // //             <td>${order.paymentMethod || "COD"}</td>
// // //             <td>
// // //                 <span class="status">
// // //                     ${order.status || "Pending"}
// // //                 </span>
// // //             </td>
// // //             <td>
// // //                 ${
// // //                     order.createdAt
// // //                         ? new Date(order.createdAt).toLocaleString("en-IN")
// // //                         : "-"
// // //                 }
// // //             </td>
// // //         </tr>
// // //         `;
// // //     });

// // //     return `
// // //     <!DOCTYPE html>
// // //     <html lang="en">

// // //     <head>
// // //         <meta charset="UTF-8">
// // //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
// // //         <title>Doctor Orders</title>

// // //         <style>
// // //             body{
// // //                 margin:0;
// // //                 background:#f4f7fb;
// // //                 font-family:Arial, sans-serif;
// // //                 color:#1d2939;
// // //             }

// // //             .container{
// // //                 width:95%;
// // //                 max-width:1300px;
// // //                 margin:30px auto;
// // //             }

// // //             .top{
// // //                 display:flex;
// // //                 justify-content:space-between;
// // //                 align-items:center;
// // //                 gap:15px;
// // //                 margin-bottom:20px;
// // //             }

// // //             h1{
// // //                 margin:0 0 8px;
// // //                 font-size:25px;
// // //             }

// // //             p{
// // //                 margin:0;
// // //                 color:#667085;
// // //             }

// // //             .back-btn{
// // //                 background:#0d6efd;
// // //                 color:white;
// // //                 text-decoration:none;
// // //                 padding:10px 16px;
// // //                 border-radius:8px;
// // //                 white-space:nowrap;
// // //             }

// // //             .table-box{
// // //                 background:white;
// // //                 border-radius:10px;
// // //                 overflow-x:auto;
// // //                 box-shadow:0 2px 10px rgba(0,0,0,.08);
// // //             }

// // //             table{
// // //                 width:100%;
// // //                 min-width:900px;
// // //                 border-collapse:collapse;
// // //             }

// // //             th, td{
// // //                 padding:12px;
// // //                 border:1px solid #e5e7eb;
// // //                 text-align:center;
// // //                 font-size:14px;
// // //             }

// // //             th{
// // //                 background:#0d6efd;
// // //                 color:white;
// // //             }

// // //             .product{
// // //                 text-align:left;
// // //                 margin-bottom:6px;
// // //             }

// // //             .status{
// // //                 display:inline-block;
// // //                 padding:5px 10px;
// // //                 border-radius:20px;
// // //                 background:#fff3cd;
// // //                 color:#856404;
// // //                 font-weight:bold;
// // //             }

// // //             .empty{
// // //                 padding:35px;
// // //                 text-align:center;
// // //                 font-size:16px;
// // //                 color:#667085;
// // //             }

// // //             @media(max-width:600px){
// // //                 .container{
// // //                     width:94%;
// // //                 }

// // //                 .top{
// // //                     flex-direction:column;
// // //                     align-items:flex-start;
// // //                 }
// // //             }
// // //         </style>
// // //     </head>

// // //     <body>

// // //         <div class="container">

// // //             <div class="top">
// // //                 <div>
// // //                     <h1>📦 Orders — ${doctor.name || "Doctor"}</h1>
// // //                     <p>Doctor ID: ${doctor.doctorId || "-"}</p>
// // //                 </div>

// // //                 <a href="/admin/manage-doctors" class="back-btn">
// // //                     ← Back to Doctors
// // //                 </a>
// // //             </div>

// // //             <div class="table-box">

// // //                 ${
// // //                     orders.length
// // //                         ? `
// // //                         <table>
// // //                             <thead>
// // //                                 <tr>
// // //                                     <th>#</th>
// // //                                     <th>Order ID</th>
// // //                                     <th>Products</th>
// // //                                     <th>Total</th>
// // //                                     <th>Payment</th>
// // //                                     <th>Status</th>
// // //                                     <th>Order Date</th>
// // //                                 </tr>
// // //                             </thead>

// // //                             <tbody>
// // //                                 ${rows}
// // //                             </tbody>
// // //                         </table>
// // //                         `
// // //                         : `
// // //                         <div class="empty">
// // //                             No orders found for ${doctor.name || "this doctor"}.
// // //                         </div>
// // //                         `
// // //                 }

// // //             </div>

// // //         </div>

// // //     </body>
// // //     </html>
// // //     `;
// // // }

// // // module.exports = DoctorOrders;


// // function DoctorOrders(doctor = {}, orders = []) {

// //     let rows = "";

// //     orders.forEach((order, index) => {

// //         const products = Array.isArray(order.items)
// //             ? order.items.map((item) => {

// //                 const packSize =
// //                     item.packSize ||
// //                     item.pack ||
// //                     item.size ||
// //                     item.product?.packSize ||
// //                     "";

// //                 const composition = Array.isArray(item.composition)
// //                     ? item.composition
// //                         .filter(Boolean)
// //                         .map(part => {
// //                             if (typeof part === "object") {
// //                                 return [
// //                                     part.name || "",
// //                                     part.strength || ""
// //                                 ].filter(Boolean).join(" ");
// //                             }

// //                             return String(part);
// //                         })
// //                         .filter(Boolean)
// //                         .join(" + ")
// //                     : (
// //                         item.composition ||
// //                         item.strength ||
// //                         item.product?.composition ||
// //                         ""
// //                     );

// //                 return `
// //                     <div class="product">
// //                         <b>${item.name || item.productName || "Product"}</b>
// //                         × ${item.quantity || 1}

// //                         ${
// //                             packSize
// //                                 ? `<div class="product-detail">📦 Pack: ${packSize}</div>`
// //                                 : ""
// //                         }

// //                         ${
// //                             composition
// //                                 ? `<div class="product-detail composition-detail">💊 ${composition}</div>`
// //                                 : ""
// //                         }
// //                     </div>
// //                 `;
// //             }).join("")
// //             : "-";

// //         rows += `
// //         <tr>
// //             <td>${index + 1}</td>

// //             <td>${order.orderId || order._id}</td>

// //             <td>${products}</td>

// //             <td>₹ ${order.totalAmount || order.total || 0}</td>

// //             <td>${String(order.paymentMethod || "COD").toUpperCase()}</td>

// //             <td>
// //                 <span class="status">
// //                     ${order.status || "Pending"}
// //                 </span>
// //             </td>

// //             <td>
// //                 ${
// //                     order.createdAt
// //                         ? new Date(order.createdAt).toLocaleString("en-IN")
// //                         : "-"
// //                 }
// //             </td>

// //             <td class="action-cell">

// //                 <form
// //                     action="/admin/doctor-order/${order._id}/status"
// //                     method="POST"
// //                     class="status-form"
// //                 >
// //                     <select name="status">
// //                         <option value="Pending"
// //                             ${order.status === "Pending" ? "selected" : ""}>
// //                             Pending
// //                         </option>

// //                         <option value="Confirmed"
// //                             ${order.status === "Confirmed" ? "selected" : ""}>
// //                             Confirmed
// //                         </option>

// //                         <option value="Processing"
// //                             ${order.status === "Processing" ? "selected" : ""}>
// //                             Processing
// //                         </option>

// //                         <option value="Completed"
// //                             ${order.status === "Completed" ? "selected" : ""}>
// //                             Completed
// //                         </option>

// //                         <option value="Cancelled"
// //                             ${order.status === "Cancelled" ? "selected" : ""}>
// //                             Cancelled
// //                         </option>
// //                     </select>

// //                     <button type="submit" class="update-btn">
// //                         Update
// //                     </button>
// //                 </form>

// //                 <a
// //                     href="/admin/doctor-order/${order._id}/invoice"
// //                     class="invoice-btn"
// //                     target="_blank"
// //                 >
// //                     ⬇ Invoice
// //                 </a>

// //             </td>
// //         </tr>
// //         `;
// //     });

// //     return `
// //     <!DOCTYPE html>
// //     <html lang="en">

// //     <head>
// //         <meta charset="UTF-8">
// //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //         <title>Doctor Orders</title>

// //         <style>

// //             *{
// //                 box-sizing:border-box;
// //             }

// //             body{
// //                 margin:0;
// //                 background:#f4f7fb;
// //                 font-family:Arial, sans-serif;
// //                 color:#1d2939;
// //             }

// //             .container{
// //                 width:95%;
// //                 max-width:1400px;
// //                 margin:30px auto;
// //             }

// //             .top{
// //                 display:flex;
// //                 justify-content:space-between;
// //                 align-items:center;
// //                 gap:15px;
// //                 margin-bottom:20px;
// //             }

// //             h1{
// //                 margin:0 0 8px;
// //                 font-size:25px;
// //             }

// //             p{
// //                 margin:0;
// //                 color:#667085;
// //             }

// //             .back-btn{
// //                 background:#0d6efd;
// //                 color:white;
// //                 text-decoration:none;
// //                 padding:10px 16px;
// //                 border-radius:8px;
// //                 white-space:nowrap;
// //                 font-weight:bold;
// //             }

// //             .table-box{
// //                 background:white;
// //                 border-radius:10px;
// //                 overflow-x:auto;
// //                 box-shadow:0 2px 10px rgba(0,0,0,.08);
// //             }

// //             table{
// //                 width:100%;
// //                 min-width:1100px;
// //                 border-collapse:collapse;
// //             }

// //             th,
// //             td{
// //                 padding:12px;
// //                 border:1px solid #e5e7eb;
// //                 text-align:center;
// //                 font-size:14px;
// //             }

// //             th{
// //                 background:#0d6efd;
// //                 color:white;
// //                 white-space:nowrap;
// //             }

// //             .product{
// //                 text-align:left;
// //                 margin-bottom:6px;
// //                 padding-bottom:7px;
// //                 border-bottom:1px dashed #dbe3ee;
// //             }

// //             .product:last-child{
// //                 margin-bottom:0;
// //                 border-bottom:0;
// //             }

// //             .product-detail{
// //                 margin-top:4px;
// //                 color:#075985;
// //                 font-size:12px;
// //                 line-height:1.4;
// //             }

// //             .composition-detail{
// //                 color:#166534;
// //             }

// //             .status{
// //                 display:inline-block;
// //                 padding:5px 10px;
// //                 border-radius:20px;
// //                 background:#fff3cd;
// //                 color:#856404;
// //                 font-weight:bold;
// //             }

// //             .action-cell{
// //                 min-width:185px;
// //             }

// //             .status-form{
// //                 display:flex;
// //                 justify-content:center;
// //                 gap:5px;
// //                 margin-bottom:8px;
// //             }

// //             .status-form select{
// //                 max-width:110px;
// //                 padding:7px 5px;
// //                 border:1px solid #d0d5dd;
// //                 border-radius:6px;
// //                 outline:none;
// //             }

// //             .update-btn,
// //             .invoice-btn{
// //                 border:none;
// //                 color:white;
// //                 padding:7px 9px;
// //                 border-radius:6px;
// //                 font-size:12px;
// //                 font-weight:bold;
// //                 cursor:pointer;
// //                 text-decoration:none;
// //             }

// //             .update-btn{
// //                 background:#198754;
// //             }

// //             .invoice-btn{
// //                 background:#0d6efd;
// //                 display:inline-block;
// //             }

// //             .empty{
// //                 padding:35px;
// //                 text-align:center;
// //                 font-size:16px;
// //                 color:#667085;
// //             }

// //             @media(max-width:600px){

// //                 .container{
// //                     width:94%;
// //                     margin:20px auto;
// //                 }

// //                 .top{
// //                     flex-direction:column;
// //                     align-items:flex-start;
// //                 }

// //             }

// //         </style>
// //     </head>

// //     <body>

// //         <div class="container">

// //             <div class="top">

// //                 <div>
// //                     <h1>📦 Orders — ${doctor.name || "Doctor"}</h1>
// //                     <p>Doctor ID: ${doctor.doctorId || "-"}</p>
// //                 </div>

// //                 <a href="/admin/manage-doctors" class="back-btn">
// //                     ← Back to Doctors
// //                 </a>

// //             </div>

// //             <div class="table-box">

// //                 ${
// //                     orders.length
// //                         ? `
// //                         <table>

// //                             <thead>
// //                                 <tr>
// //                                     <th>#</th>
// //                                     <th>Order ID</th>
// //                                     <th>Products</th>
// //                                     <th>Total</th>
// //                                     <th>Payment</th>
// //                                     <th>Status</th>
// //                                     <th>Order Date</th>
// //                                     <th>Action</th>
// //                                 </tr>
// //                             </thead>

// //                             <tbody>
// //                                 ${rows}
// //                             </tbody>

// //                         </table>
// //                         `
// //                         : `
// //                         <div class="empty">
// //                             No orders found for ${doctor.name || "this doctor"}.
// //                         </div>
// //                         `
// //                 }

// //             </div>

// //         </div>

// //     </body>
// //     </html>
// //     `;
// // }

// // module.exports = DoctorOrders;

// const express = require("express");
// const router = express.Router();

// const Product = require("../../models/Product");
// const DoctorOrder = require("../../models/DoctorOrder");
// const Doctor = require("../../models/Doctor");


// // ==========================================
// // SAFE HTML
// // ==========================================

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


// // ==========================================
// // DATE FORMAT
// // ==========================================

// function formatDate(value) {

//     if (!value) {
//         return "-";
//     }

//     try {

//         return new Date(value)
//             .toLocaleDateString("en-GB");

//     } catch (error) {

//         return "-";

//     }
// }


// // ==========================================
// // DOCTOR ORDER INVOICE
// // ==========================================

// router.get(
//     "/doctor-order/:orderId/invoice",
//     async (req, res) => {

//         try {

//             const order = await DoctorOrder
//                 .findById(req.params.orderId)
//                 .lean();

//             if (!order) {

//                 return res
//                     .status(404)
//                     .send("Order not found");

//             }


//             const doctor = await Doctor
//                 .findById(order.doctorId)
//                 .lean();


//             // ==========================================
//             // GET PRODUCTS WITH PACK SIZE + COMPOSITION
//             // ==========================================

//             const rawItems = Array.isArray(order.items)
//                 ? order.items
//                 : [];


//             const items = await Promise.all(

//                 rawItems.map(async (item) => {

//                     let product = null;

//                     const productId =
//                         item.productId ||
//                         item.product?._id ||
//                         item.product ||
//                         null;


//                     if (productId) {

//                         try {

//                             product = await Product
//                                 .findById(productId)
//                                 .lean();

//                         } catch (error) {

//                             product = null;

//                         }

//                     }


//                     const quantity = Number(
//                         item.quantity ||
//                         item.qty ||
//                         1
//                     );


//                     const rate = Number(
//                         item.price ||
//                         item.rate ||
//                         product?.price ||
//                         0
//                     );


//                     const amount = Number(
//                         item.amount ||
//                         item.total ||
//                         (rate * quantity)
//                     );


//                     const packSize =
//                         item.packSize ||
//                         item.pack ||
//                         item.size ||
//                         product?.packSize ||
//                         product?.pack ||
//                         product?.size ||
//                         "";


//                     const rawComposition =
//                         item.composition ||
//                         item.strength ||
//                         product?.composition ||
//                         "";


//                     const composition = Array.isArray(rawComposition)

//                         ? rawComposition
//                             .filter(Boolean)
//                             .map((part) => {

//                                 if (typeof part === "object") {

//                                     return [
//                                         part.name || "",
//                                         part.strength || ""
//                                     ]
//                                         .filter(Boolean)
//                                         .join(" ");

//                                 }

//                                 return String(part);

//                             })
//                             .filter(Boolean)
//                             .join(" + ")

//                         : String(rawComposition).trim();


//                     return {

//                         name:
//                             item.name ||
//                             item.productName ||
//                             product?.name ||
//                             "Product",

//                         quantity,

//                         rate,

//                         amount,

//                         packSize,

//                         composition

//                     };

//                 })

//             );


//             // ==========================================
//             // TOTALS
//             // ==========================================

//             const totalQuantity = items.reduce(
//                 (sum, item) => {

//                     return sum + Number(item.quantity || 0);

//                 },
//                 0
//             );


//             const currentBillAmount = items.reduce(
//                 (sum, item) => {

//                     return sum + Number(item.amount || 0);

//                 },
//                 0
//             );


//             const grandTotal = Number(
//                 order.totalAmount ||
//                 order.total ||
//                 currentBillAmount ||
//                 0
//             );


//             const backDues = Number(
//                 order.backDues ||
//                 order.previousDue ||
//                 0
//             );


//             const totalBalance =
//                 grandTotal + backDues;


//             const billNo =
//                 "D" +
//                 String(
//                     order.orderId ||
//                     order._id
//                 )
//                     .slice(-6)
//                     .toUpperCase();


//             const doctorName =
//                 String(
//                     doctor?.name ||
//                     order.doctorName ||
//                     "Doctor"
//                 )
//                     .replace(/^Dr\.?\s*/i, "")
//                     .trim();


//             const specialization =
//                 doctor?.specialization ||
//                 order.specialization ||
//                 "General Physician";


//             const doctorId =
//                 doctor?.doctorId ||
//                 order.doctorCode ||
//                 "-";


//             const phone =
//                 doctor?.mobile ||
//                 doctor?.phone ||
//                 order.phone ||
//                 "-";


//             const paymentMethod =
//                 String(
//                     order.paymentMethod ||
//                     "COD"
//                 )
//                     .toUpperCase();


//             const orderType =
//                 String(
//                     order.orderType ||
//                     "CREDIT"
//                 )
//                     .toUpperCase();


//             // ==========================================
//             // INVOICE ROWS
//             // ==========================================

//             const rows = items.length

//                 ? items.map((item, index) => `

//                     <tr>

//                         <td>${index + 1}</td>

//                         <td class="description">

//                             <strong>
//                                 ${escapeHTML(item.name)}
//                             </strong>

//                             ${
//                                 item.packSize

//                                     ? `
//                                         <div class="pack-size">
//                                             📦 Pack Size:
//                                             ${escapeHTML(item.packSize)}
//                                         </div>
//                                     `

//                                     : ""
//                             }

//                             ${
//                                 item.composition

//                                     ? `
//                                         <div class="composition">
//                                             💊 Composition:
//                                             ${escapeHTML(item.composition)}
//                                         </div>
//                                     `

//                                     : ""
//                             }

//                         </td>

//                         <td>${item.quantity}</td>

//                         <td>
//                             Rs.${item.rate.toFixed(2)}
//                         </td>

//                         <td>
//                             Rs.${item.amount.toFixed(2)}
//                         </td>

//                     </tr>

//                 `).join("")

//                 : `
//                     <tr>
//                         <td colspan="5">
//                             No products found.
//                         </td>
//                     </tr>
//                 `;


//             return res.send(`

// <!DOCTYPE html>
// <html lang="en">

// <head>

//     <meta charset="UTF-8">

//     <meta
//         name="viewport"
//         content="width=device-width, initial-scale=1.0"
//     >

//     <title>
//         Invoice ${escapeHTML(billNo)}
//     </title>

//     <style>

//         *{
//             box-sizing:border-box;
//         }

//         body{
//             margin:0;
//             padding:20px;
//             background:#f1f5f9;
//             color:#111827;
//             font-family:Arial,sans-serif;
//         }

//         .invoice{
//             width:100%;
//             max-width:900px;
//             margin:auto;
//             padding:28px;
//             background:#fff;
//             border:1px solid #dbe3ee;
//             box-shadow:0 5px 22px rgba(0,0,0,.1);
//         }

//         .header{
//             display:flex;
//             align-items:flex-start;
//             justify-content:space-between;
//             gap:20px;
//             padding-bottom:16px;
//             border-bottom:3px solid #1d4ed8;
//         }

//         .company-name{
//             margin:0;
//             color:#123b85;
//             font-size:25px;
//             font-weight:800;
//         }

//         .tagline{
//             margin-top:5px;
//             color:#64748b;
//             font-size:13px;
//             font-weight:600;
//         }

//         .invoice-title{
//             margin:0;
//             color:#1d4ed8;
//             font-size:23px;
//         }

//         .doctor-box{
//             display:grid;
//             grid-template-columns:repeat(2,1fr);
//             gap:12px 30px;
//             margin:20px 0;
//             padding:16px;
//             border-radius:10px;
//             background:#eff6ff;
//         }

//         .doctor-box div{
//             font-size:14px;
//         }

//         .doctor-box strong{
//             color:#1e3a8a;
//         }

//         table{
//             width:100%;
//             margin-top:15px;
//             border-collapse:collapse;
//         }

//         th,
//         td{
//             padding:10px;
//             border:1px solid #cbd5e1;
//             font-size:13px;
//             vertical-align:top;
//             text-align:center;
//         }

//         th{
//             color:#fff;
//             background:#1d4ed8;
//         }

//         .description{
//             min-width:280px;
//             text-align:left;
//         }

//         .pack-size{
//             margin-top:7px;
//             padding:5px 7px;
//             color:#075985;
//             font-size:12px;
//             border-radius:5px;
//             background:#ecfeff;
//         }

//         .composition{
//             margin-top:5px;
//             padding:5px 7px;
//             color:#166534;
//             font-size:12px;
//             line-height:1.4;
//             border-radius:5px;
//             background:#f0fdf4;
//         }

//         .summary{
//             width:100%;
//             max-width:420px;
//             margin:20px 0 0 auto;
//         }

//         .summary-row{
//             display:flex;
//             justify-content:space-between;
//             gap:20px;
//             padding:9px 0;
//             border-bottom:1px solid #e2e8f0;
//             font-size:14px;
//         }

//         .grand-total{
//             margin-top:6px;
//             padding:12px;
//             color:#fff;
//             font-size:16px;
//             font-weight:800;
//             border-radius:7px;
//             background:#1d4ed8;
//         }

//         .footer{
//             margin-top:30px;
//             padding-top:14px;
//             color:#64748b;
//             font-size:12px;
//             text-align:center;
//             border-top:1px solid #e2e8f0;
//         }

//         .buttons{
//             display:flex;
//             justify-content:center;
//             gap:12px;
//             margin-top:22px;
//         }

//         button,
//         .back-btn{
//             padding:10px 16px;
//             color:#fff;
//             border:0;
//             border-radius:7px;
//             background:#1d4ed8;
//             cursor:pointer;
//             font-weight:700;
//             text-decoration:none;
//         }

//         .back-btn{
//             background:#475569;
//         }

//         @media(max-width:650px){

//             body{
//                 padding:8px;
//             }

//             .invoice{
//                 padding:15px;
//             }

//             .header,
//             .doctor-box{
//                 display:block;
//             }

//             .invoice-title{
//                 margin-top:12px;
//             }

//             .doctor-box div{
//                 margin-top:9px;
//             }

//             table{
//                 min-width:650px;
//             }

//             .table-scroll{
//                 overflow-x:auto;
//             }
//         }

//         @media print{

//             body{
//                 padding:0;
//                 background:#fff;
//             }

//             .invoice{
//                 max-width:none;
//                 border:0;
//                 box-shadow:none;
//             }

//             .buttons{
//                 display:none;
//             }
//         }

//     </style>

// </head>

// <body>

// <div class="invoice">

//     <div class="header">

//         <div>
//             <h1 class="company-name">
//                 GLOBAL HEALTHCARE
//             </h1>

//             <div class="tagline">
//                 SAFE & SECURE Healthcare
//             </div>
//         </div>

//         <h2 class="invoice-title">
//             ROUGH ESTIMATE
//         </h2>

//     </div>


//     <div class="doctor-box">

//         <div>
//             <strong>DOCTOR :</strong>
//             Dr. ${escapeHTML(doctorName)}
//         </div>

//         <div>
//             <strong>SPECIALIZATION :</strong>
//             ${escapeHTML(specialization)}
//         </div>

//         <div>
//             <strong>DOCTOR ID :</strong>
//             ${escapeHTML(doctorId)}
//         </div>

//         <div>
//             <strong>PHONE :</strong>
//             ${escapeHTML(phone)}
//         </div>

//         <div>
//             <strong>BILL NO :</strong>
//             ${escapeHTML(billNo)}
//         </div>

//         <div>
//             <strong>DATE :</strong>
//             ${formatDate(order.createdAt)}
//         </div>

//         <div>
//             <strong>TYPE :</strong>
//             ${escapeHTML(orderType)}
//         </div>

//         <div>
//             <strong>PAYMENT :</strong>
//             ${escapeHTML(paymentMethod)}
//         </div>

//     </div>


//     <div class="table-scroll">

//         <table>

//             <thead>
//                 <tr>
//                     <th>SL</th>
//                     <th>PRODUCT DESCRIPTION</th>
//                     <th>QTY</th>
//                     <th>RATE</th>
//                     <th>AMOUNT</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 ${rows}
//             </tbody>

//         </table>

//     </div>


//     <div class="summary">

//         <div class="summary-row">
//             <strong>NO OF ITEMS :</strong>
//             <span>${items.length}</span>
//         </div>

//         <div class="summary-row">
//             <strong>TOTAL QUANTITY :</strong>
//             <span>${totalQuantity}</span>
//         </div>

//         <div class="summary-row">
//             <strong>CURRENT BILL AMOUNT :</strong>
//             <span>Rs.${currentBillAmount.toFixed(2)}</span>
//         </div>

//         <div class="summary-row">
//             <strong>GRAND TOTAL :</strong>
//             <span>Rs.${grandTotal.toFixed(2)}</span>
//         </div>

//         <div class="summary-row">
//             <strong>BACK DUES AMOUNT :</strong>
//             <span>Rs.${backDues.toFixed(2)}</span>
//         </div>

//         <div class="summary-row grand-total">
//             <strong>TOTAL BALANCE :</strong>
//             <span>Rs.${totalBalance.toFixed(2)}</span>
//         </div>

//     </div>


//     <div class="footer">

//         <div>
//             GLOBAL HEALTHCARE
//         </div>

//         <div>
//             Powered by Osium Biogenix
//         </div>

//         <div>
//             Call : 9142264714
//         </div>

//     </div>


//     <div class="buttons">

//         <button onclick="window.print()">
//             🖨 Print Invoice
//         </button>

//         <a
//             href="/admin/manage-doctors"
//             class="back-btn"
//         >
//             ← Back
//         </a>

//     </div>

// </div>

// </body>
// </html>

//             `);

//         } catch (error) {

//             console.error(
//                 "INVOICE ERROR:",
//                 error
//             );

//             return res
//                 .status(500)
//                 .send("Unable to generate invoice");

//         }

//     }
// );

// module.exports = router;

// ==========================================
// ADMIN - ALL DOCTOR ORDERS
// ==========================================
const express = require("express");
const router = express.Router();

const Product = require("../../models/Product");
const DoctorOrder = require("../../models/DoctorOrder");
const Doctor = require("../../models/Doctor");


router.get("/doctor-orders", async (req, res) => {
    try {
        const orders = await DoctorOrder
            .find({})
            .sort({ createdAt: -1 })
            .lean();

        const rows = orders.length
            ? orders.map((order, index) => {

                const items = Array.isArray(order.items)
                    ? order.items
                    : [];

                const doctorName =
                    order.doctorName ||
                    order.doctor?.name ||
                    "Doctor";

                const totalAmount = Number(
                    order.totalAmount ||
                    order.total ||
                    0
                );

                const status =
                    order.status ||
                    "Pending";

                const statusClass =
                    String(status).toLowerCase() === "completed"
                        ? "completed"
                        : String(status).toLowerCase() === "cancelled"
                            ? "cancelled"
                            : "pending";

                return `
                    <tr>
                        <td>${index + 1}</td>

                        <td>
                            <strong>
                                ${escapeHTML(
                                    "D" + String(
                                        order.orderId || order._id
                                    ).slice(-6).toUpperCase()
                                )}
                            </strong>
                        </td>

                        <td>
                            ${escapeHTML(doctorName)}
                        </td>

                        <td>${items.length}</td>

                        <td>₹${totalAmount.toFixed(2)}</td>

                        <td>
                            <span class="status ${statusClass}">
                                ${escapeHTML(status)}
                            </span>
                        </td>

                        <td>${formatDate(order.createdAt)}</td>

                        <td>
                            <a
                                class="invoice-btn"
                                href="/admin/doctor-order/${order._id}/invoice"
                                target="_blank"
                            >
                                View Invoice
                            </a>
                        </td>
                    </tr>
                `;
            }).join("")
            : `
                <tr>
                    <td colspan="8" class="empty">
                        No doctor orders found.
                    </td>
                </tr>
            `;

        return res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doctor Orders</title>

    <style>
        * { box-sizing: border-box; }

        body {
            margin: 0;
            padding: 25px;
            background: #f1f5f9;
            color: #0f172a;
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 1250px;
            margin: auto;
            padding: 25px;
            background: #ffffff;
            border-radius: 14px;
            box-shadow: 0 8px 28px rgba(15, 23, 42, .10);
        }

        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            margin-bottom: 22px;
        }

        h1 { margin: 0; color: #123b85; }

        .back-btn, .invoice-btn {
            display: inline-block;
            padding: 10px 14px;
            color: #fff;
            border-radius: 7px;
            background: #475569;
            text-decoration: none;
            font-size: 13px;
            font-weight: 700;
        }

        .invoice-btn { background: #1d4ed8; }

        .table-wrap { overflow-x: auto; }

        table {
            width: 100%;
            min-width: 850px;
            border-collapse: collapse;
        }

        th, td {
            padding: 13px 10px;
            border-bottom: 1px solid #e2e8f0;
            text-align: left;
            font-size: 14px;
        }

        th {
            color: #fff;
            background: #123b85;
        }

        .status {
            display: inline-block;
            padding: 5px 9px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
        }

        .pending {
            color: #92400e;
            background: #fef3c7;
        }

        .completed {
            color: #166534;
            background: #dcfce7;
        }

        .cancelled {
            color: #991b1b;
            background: #fee2e2;
        }

        .empty {
            padding: 35px;
            color: #64748b;
            text-align: center;
        }

        @media (max-width: 600px) {
            body { padding: 10px; }
            .container { padding: 15px; }
            .top { align-items: flex-start; flex-direction: column; }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="top">
            <div>
                <h1>Doctor Orders</h1>
                <p>Total Orders: <strong>${orders.length}</strong></p>
            </div>

            <a href="/admin/manage-doctors" class="back-btn">
                ← Back to Doctors
            </a>
        </div>

        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Bill No.</th>
                        <th>Doctor</th>
                        <th>Items</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Invoice</th>
                    </tr>
                </thead>

                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
        `);

    } catch (error) {
        console.error("DOCTOR ORDERS ERROR:", error);

        return res.status(500).send(`
            <h2>Unable to load doctor orders</h2>
            <p>${escapeHTML(error.message)}</p>
            <a href="/admin/manage-doctors">← Back to Doctors</a>
        `);
    }
});

module.exports = router;
