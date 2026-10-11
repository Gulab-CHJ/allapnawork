
// // // const express = require("express");
// // // const bcrypt = require("bcrypt");
// // // const rateLimit = require("express-rate-limit");
// // // const Customer = require("../models/CustomerBakaya");

// // // const router = express.Router();
// // // router.use(express.urlencoded({ extended: false }));

// // // const esc = v => String(v ?? "")
// // //   .replace(/&/g, "&amp;")
// // //   .replace(/</g, "&lt;")
// // //   .replace(/>/g, "&gt;")
// // //   .replace(/"/g, "&quot;")
// // //   .replace(/'/g, "&#39;");

// // // const money = n => "₹" + Number(n || 0).toFixed(2);

// // // const dateText = d => new Date(d).toLocaleDateString(
// // //   "en-IN", { day: "2-digit", month: "short", year: "numeric" }
// // // );

// // // const layout = (title, content) => `
// // // <!DOCTYPE html>
// // // <html lang="hi">
// // // <head>
// // // <meta charset="UTF-8">
// // // <meta name="viewport" content="width=device-width,initial-scale=1">
// // // <title>${esc(title)} | GLOBAL SERVICES</title>
// // // <style>
// // // *{box-sizing:border-box}
// // // body{margin:0;background:#f1f5f9;font-family:Arial,sans-serif;color:#172b37}
// // // .wrap{max-width:950px;margin:25px auto;padding:15px}
// // // .header{background:linear-gradient(120deg,#064e3b,#059669);color:white;padding:25px;border-radius:18px;text-align:center}
// // // .header h1{margin:0;font-size:27px}
// // // .header p{margin:8px 0 0}
// // // .card{background:white;padding:22px;border-radius:16px;margin-top:18px;box-shadow:0 5px 25px #0000000b}
// // // input,select{width:100%;padding:13px;margin:8px 0 14px;border:1px solid #cbd5e1;border-radius:9px;font-size:15px}
// // // button,.btn{padding:12px 18px;border:0;border-radius:9px;background:#047857;color:white;font-weight:bold;cursor:pointer;text-decoration:none;display:inline-block}
// // // button{width:100%}
// // // label{font-size:13px;font-weight:bold}
// // // .table-wrap{overflow-x:auto}
// // // table{width:100%;border-collapse:collapse;min-width:510px}
// // // th,td{padding:13px 10px;border-bottom:1px solid #e2e8f0;text-align:left;font-size:13px}
// // // th{background:#ecfdf5;color:#065f46}
// // // .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
// // // .stat{padding:15px;border-radius:12px;background:#f1f5f9}
// // // .stat strong{display:block;margin-top:10px;font-size:21px}
// // // .green{color:#047857}.red{color:#dc2626}
// // // .badge{padding:6px 9px;border-radius:20px;font-weight:bold;font-size:11px}
// // // .paid{background:#dcfce7;color:#166534}
// // // .unpaid{background:#fee2e2;color:#991b1b}
// // // .error{color:#dc2626;font-weight:bold}
// // // @media(max-width:600px){
// // //  .grid{grid-template-columns:1fr}
// // //  .card{padding:15px}
// // //  .header h1{font-size:22px}
// // // }
// // // </style>
// // // </head>
// // // <body>
// // // <div class="wrap">
// // //  <header class="header">
// // //   <h1>GLOBAL SERVICES</h1>
// // //   <p>Customer Payment & Bakaya Details</p>
// // //  </header>
// // //  ${content}
// // // </div>
// // // </body>
// // // </html>`;

// // // function requireAdmin(req, res, next) {
// // //   if (!req.session || !req.session.adminId) {
// // //     return res.status(403).send("Admin login required");
// // //   }
// // //   next();
// // // }

// // // const searchLimit = rateLimit({
// // //   windowMs: 15 * 60 * 1000,
// // //   limit: 10,
// // //   standardHeaders: "draft-7",
// // //   legacyHeaders: false,
// // //   message: "Too many attempts. Try again later."
// // // });

// // // function searchForm(error = "") {
// // //   return layout("Customer Bakaya", `
// // //   <div class="card">
// // //    <h2>अपना बकाया चेक करें</h2>
// // //    <p>Mobile या Aadhaar के आखिरी 4 अंक डालें।</p>
// // //    ${error ? `<p class="error">${esc(error)}</p>` : ""}
// // //    <form action="/customer-bakaya/search" method="POST">
// // //     <label>Search By</label>
// // //     <select name="searchType">
// // //      <option value="phone">Mobile Last 4 Digits</option>
// // //      <option value="aadhaar">Aadhaar Last 4 Digits</option>
// // //     </select>
// // //     <label>Last 4 Digits</label>
// // //     <input name="last4" maxlength="4"
// // //       pattern="[0-9]{4}" inputmode="numeric" required>
// // //     <label>Customer Security PIN</label>
// // //     <input type="password" name="pin" required
// // //       minlength="6" autocomplete="off">
// // //     <button type="submit">Search Customer</button>
// // //    </form>
// // //   </div>`);
// // // }

// // // router.get("/customer-bakaya", (req, res) => {
// // //   res.set("Cache-Control", "no-store");
// // //   res.send(searchForm());
// // // });

// // // router.post("/customer-bakaya/search", searchLimit,
// // //  async (req, res) => {
// // //   try {
// // //     res.set("Cache-Control", "no-store");

// // //     const { searchType, last4, pin } = req.body;

// // //     if (!["phone", "aadhaar"].includes(searchType) ||
// // //         !/^\d{4}$/.test(last4 || "") ||
// // //         typeof pin !== "string" ||
// // //         pin.length < 6 || pin.length > 72) {
// // //       return res.status(400).send(
// // //         searchForm("Invalid search details")
// // //       );
// // //     }

// // //     const field = searchType === "phone"
// // //       ? "phoneLast4" : "aadhaarLast4";

// // //     // PIN must also match. Never expose records
// // //     // based on the last four digits alone.
// // //     const matches = await Customer.find({
// // //       [field]: last4
// // //     }).limit(100);

// // //     let customer = null;
// // //     for (const item of matches) {
// // //       if (await bcrypt.compare(pin, item.pinHash)) {
// // //         customer = item;
// // //         break;
// // //       }
// // //     }

// // //     if (!customer) {
// // //       return res.status(404).send(
// // //         searchForm("Customer not found or incorrect PIN")
// // //       );
// // //     }

// // //     const entries = [...customer.entries].sort(
// // //       (a, b) => new Date(a.date) - new Date(b.date)
// // //     );

// // //     const totalDue = entries
// // //       .filter(e => e.type === "DUE")
// // //       .reduce((sum, e) => sum + e.amount, 0);

// // //     const totalPaid = entries
// // //       .filter(e => e.type === "PAID")
// // //       .reduce((sum, e) => sum + e.amount, 0);

// // //     const balance = totalDue - totalPaid;

// // //     const rows = entries.map((e, i) => `
// // //       <tr>
// // //        <td>${i + 1}</td>
// // //        <td>${dateText(e.date)}</td>
// // //        <td>${esc(e.reason || "-")}</td>
// // //        <td>${money(e.amount)}</td>
// // //        <td>
// // //         <span class="badge ${e.type === "PAID" ? "paid" : "unpaid"}">
// // //          ${e.type === "PAID" ? "PAID" : "DUE"}
// // //         </span>
// // //        </td>
// // //       </tr>
// // //     `).join("");

// // //     res.send(layout("Payment View", `
// // //       <div class="card">
// // //        <h2>Customer Payment View</h2>
// // //        <div class="table-wrap">
// // //         <table>
// // //          <thead><tr>
// // //           <th>S.No.</th>
// // //           <th>Phone</th>
// // //           <th>Aadhaar</th>
// // //           <th>Payment</th>
// // //          </tr></thead>
// // //          <tbody><tr>
// // //           <td>1</td>
// // //           <td>******${esc(customer.phoneLast4)}</td>
// // //           <td>XXXX-XXXX-${esc(customer.aadhaarLast4)}</td>
// // //           <td><span class="badge paid">VIEW</span></td>
// // //          </tr></tbody>
// // //         </table>
// // //        </div>
// // //        <p><b>Customer:</b> ${esc(customer.name)}</p>
// // //       </div>

// // //       <div class="card">
// // //        <h2>Payment Summary</h2>
// // //        <div class="grid">
// // //         <div class="stat">Total Bill
// // //          <strong>${money(totalDue)}</strong>
// // //         </div>
// // //         <div class="stat">Total Paid
// // //          <strong class="green">${money(totalPaid)}</strong>
// // //         </div>
// // //         <div class="stat">Remaining Balance
// // //          <strong class="${balance > 0 ? "red" : "green"}">
// // //           ${money(Math.max(0, balance))}
// // //          </strong>
// // //         </div>
// // //        </div>
// // //        <p><b>Status:</b> ${
// // //          balance > 0 ? "UNPAID / PARTIAL" :
// // //          balance < 0 ? "ADVANCE PAID" : "FULLY PAID"
// // //        }</p>
// // //       </div>

// // //       <div class="card">
// // //        <h2>कब और क्यों बकाया है / Payment History</h2>
// // //        <div class="table-wrap">
// // //         <table>
// // //          <thead><tr>
// // //           <th>S.No.</th><th>Date</th>
// // //           <th>Reason</th><th>Amount</th><th>Status</th>
// // //          </tr></thead>
// // //          <tbody>${rows || `<tr><td colspan="5">No records</td></tr>`}</tbody>
// // //         </table>
// // //        </div>
// // //        <p><a class="btn" href="/customer-bakaya">Back</a></p>
// // //       </div>
// // //     `));
// // //   } catch (err) {
// // //     console.error("Bakaya search error:", err);
// // //     res.status(500).send("Server Error");
// // //   }
// // // });

// // // // ADMIN: Create customer
// // // router.post("/admin/bakaya/customer", requireAdmin,
// // //  async (req, res) => {
// // //   try {
// // //     const { name, phoneLast4, aadhaarLast4, pin } = req.body;

// // //     if (!name || name.length > 100 ||
// // //         !/^\d{4}$/.test(phoneLast4 || "") ||
// // //         !/^\d{4}$/.test(aadhaarLast4 || "") ||
// // //         typeof pin !== "string" ||
// // //         pin.length < 6 || pin.length > 72) {
// // //       return res.status(400).send("Invalid customer details");
// // //     }

// // //     const customer = await Customer.create({
// // //       name: name.trim(),
// // //       phoneLast4,
// // //       aadhaarLast4,
// // //       pinHash: await bcrypt.hash(pin, 12),
// // //       entries: []
// // //     });

// // //     res.status(201).json({
// // //       success: true,
// // //       customerId: customer._id
// // //     });
// // //   } catch (err) {
// // //     console.error(err);
// // //     res.status(500).send("Customer creation failed");
// // //   }
// // // });

// // // // ADMIN: Add due or received payment
// // // router.post("/admin/bakaya/payment/:id", requireAdmin,
// // //  async (req, res) => {
// // //   try {
// // //     const { type, amount, reason, date } = req.body;
// // //     const value = Number(amount);

// // //     if (!["DUE", "PAID"].includes(type) ||
// // //         !Number.isFinite(value) ||
// // //         value <= 0 ||
// // //         value > 100000000 ||
// // //         typeof reason !== "string" ||
// // //         reason.length > 300 ||
// // //         !date ||
// // //         Number.isNaN(Date.parse(date))) {
// // //       return res.status(400).send("Invalid payment");
// // //     }

// // //     const customer = await Customer.findById(req.params.id);

// // //     if (!customer) {
// // //       return res.status(404).send("Customer not found");
// // //     }

// // //     customer.entries.push({
// // //       type,
// // //       amount: Math.round(value * 100) / 100,
// // //       reason: reason.trim(),
// // //       date: new Date(date)
// // //     });

// // //     await customer.save();

// // //     res.json({ success: true, message: "Payment saved" });
// // //   } catch (err) {
// // //     console.error(err);
// // //     res.status(500).send("Payment save failed");
// // //   }
// // // });



// // // router.get("/admin/bakaya/customer", requireAdmin, (req, res) => {
// // //   res.send(layout("Add Customer", `
// // //     <div class="card">
// // //       <h2>GLOBAL SERVICES – Add Customer</h2>
// // //       <p>नया ग्राहक जोड़ें और उसका बकाया हिसाब शुरू करें।</p>

// // //       <form id="customerForm">
// // //         <label>Customer Name</label>
// // //         <input name="name" placeholder="Customer Name" required>

// // //         <label>Mobile Number – Last 4 Digits</label>
// // //         <input name="phoneLast4" maxlength="4"
// // //           pattern="[0-9]{4}" inputmode="numeric" required>

// // //         <label>Aadhaar Number – Last 4 Digits</label>
// // //         <input name="aadhaarLast4" maxlength="4"
// // //           pattern="[0-9]{4}" inputmode="numeric" required>

// // //         <label>Customer Security PIN</label>
// // //         <input name="pin" type="password"
// // //           minlength="6" maxlength="72" required>

// // //         <button type="submit">Save Customer</button>
// // //       </form>

// // //       <p id="message"></p>
// // //       <p><a class="btn" href="/admin">Admin Dashboard</a></p>
// // //     </div>

// // //     <script>
// // //       document.getElementById("customerForm")
// // //         .addEventListener("submit", async function(e) {
// // //           e.preventDefault();

// // //           const message = document.getElementById("message");
// // //           const data = Object.fromEntries(new FormData(this));

// // //           try {
// // //             const response = await fetch("/admin/bakaya/customer", {
// // //               method: "POST",
// // //               headers: {
// // //                 "Content-Type": "application/json"
// // //               },
// // //               body: JSON.stringify(data)
// // //             });

// // //             if (!response.ok) {
// // //               message.textContent = "Customer save failed";
// // //               return;
// // //             }

// // //             const result = await response.json();
// // //             message.textContent = "Customer Saved Successfully!";
// // //             this.reset();
// // //           } catch (err) {
// // //             message.textContent = "Server connection error";
// // //           }
// // //         });
// // //     </script>
// // //   `));
// // // });


// // // module.exports = router;



// // const express = require("express");
// // const crypto = require("crypto");
// // const rateLimit = require("express-rate-limit");
// // const Customer = require("../models/CustomerBakaya");

// // const router = express.Router();

// // router.use(express.urlencoded({ extended: true }));
// // router.use(express.json());

// // const esc = v => String(v ?? "")
// //   .replace(/&/g, "&amp;")
// //   .replace(/</g, "&lt;")
// //   .replace(/>/g, "&gt;")
// //   .replace(/"/g, "&quot;")
// //   .replace(/'/g, "&#39;");

// // const money = n => "₹" + Number(n || 0).toFixed(2);

// // const dateText = d =>
// //   new Date(d).toLocaleDateString("en-IN");

// // function requireAdmin(req, res, next) {
// //   if (!req.session?.adminId) {
// //     return res.status(403).send("Admin login required");
// //   }
// //   next();
// // }

// // const searchLimit = rateLimit({
// //   windowMs: 15 * 60 * 1000,
// //   limit: 15,
// //   standardHeaders: "draft-7",
// //   legacyHeaders: false
// // });

// // function totals(customer) {
// //   const entries = customer.entries || [];

// //   const due = entries
// //     .filter(e => e.type === "DUE")
// //     .reduce((sum, e) => sum + e.amount, 0);

// //   const paid = entries
// //     .filter(e => e.type === "PAID")
// //     .reduce((sum, e) => sum + e.amount, 0);

// //   return { due, paid, balance: due - paid };
// // }

// // function layout(title, body) {
// //   return `
// // <!DOCTYPE html>
// // <html lang="hi">
// // <head>
// // <meta charset="UTF-8">
// // <meta name="viewport"
// //  content="width=device-width,initial-scale=1">
// // <title>${esc(title)} | GLOBAL SERVICES</title>

// // <style>
// // *{box-sizing:border-box}
// // body{
// //  margin:0;
// //  background:#f1f5f9;
// //  color:#1e293b;
// //  font-family:Arial,sans-serif;
// // }
// // .container{
// //  max-width:1050px;
// //  margin:25px auto;
// //  padding:15px;
// // }
// // .header{
// //  background:linear-gradient(135deg,#064e3b,#059669);
// //  color:white;
// //  text-align:center;
// //  padding:28px 15px;
// //  border-radius:18px;
// // }
// // .header h1{margin:0;font-size:27px}
// // .header p{margin:9px 0 0}
// // .card{
// //  background:white;
// //  margin-top:20px;
// //  padding:22px;
// //  border-radius:16px;
// //  box-shadow:0 6px 22px #00000010;
// // }
// // input,select{
// //  width:100%;
// //  padding:13px;
// //  margin:9px 0 15px;
// //  border:1px solid #cbd5e1;
// //  border-radius:9px;
// //  font-size:15px;
// // }
// // label{font-size:14px;font-weight:bold}
// // button,.btn{
// //  display:inline-block;
// //  padding:12px 18px;
// //  background:#047857;
// //  color:white;
// //  border:0;
// //  border-radius:9px;
// //  font-weight:bold;
// //  text-decoration:none;
// //  cursor:pointer;
// // }
// // button{width:100%}
// // .table-wrap{overflow-x:auto}
// // table{
// //  width:100%;
// //  min-width:520px;
// //  border-collapse:collapse;
// // }
// // th,td{
// //  padding:13px 10px;
// //  border-bottom:1px solid #e2e8f0;
// //  text-align:left;
// //  font-size:13px;
// // }
// // th{background:#ecfdf5;color:#065f46}
// // .grid{
// //  display:grid;
// //  grid-template-columns:repeat(3,1fr);
// //  gap:12px;
// // }
// // .stat{
// //  background:#f8fafc;
// //  padding:17px;
// //  border-radius:12px;
// // }
// // .stat strong{
// //  display:block;
// //  margin-top:8px;
// //  font-size:22px;
// // }
// // .green{color:#047857}
// // .red{color:#dc2626}
// // .tag{
// //  padding:6px 10px;
// //  border-radius:20px;
// //  font-size:11px;
// //  font-weight:bold;
// // }
// // .paid{background:#dcfce7;color:#166534}
// // .unpaid{background:#fee2e2;color:#991b1b}
// // .note{color:#64748b;font-size:13px}
// // .error{color:#dc2626}
// // @media(max-width:600px){
// //  .grid{grid-template-columns:1fr}
// //  .card{padding:15px}
// //  .header h1{font-size:22px}
// // }
// // </style>
// // </head>

// // <body>
// // <div class="container">
// //  <div class="header">
// //   <h1>GLOBAL SERVICES</h1>
// //   <p>Customer Bakaya & Payment Details</p>
// //  </div>
// //  ${body}
// // </div>
// // </body>
// // </html>`;
// // }

// // // ======================================
// // // PUBLIC CUSTOMER SEARCH PAGE
// // // ======================================

// // function searchForm(message = "") {
// //   return layout("Customer Search", `
// //   <div class="card">
// //    <h2>🔍 अपना बकाया खोजें</h2>
// //    <p>Mobile या Aadhaar के आखिरी 4 अंक डालें।</p>

// //    ${message ? `<p class="error">${esc(message)}</p>` : ""}

// //    <form method="POST"
// //      action="/customer-bakaya/search">

// //     <label>Search By</label>
// //     <select name="searchType">
// //      <option value="phone">Mobile Last 4</option>
// //      <option value="aadhaar">Aadhaar Last 4</option>
// //     </select>

// //     <label>Last 4 Digits</label>
// //     <input
// //       name="last4"
// //       maxlength="4"
// //       pattern="[0-9]{4}"
// //       inputmode="numeric"
// //       placeholder="Enter Last 4 Digits"
// //       required
// //     >

// //     <button type="submit">
// //       🔍 Search Customer
// //     </button>

// //    </form>
// //   </div>`);
// // }

// // router.get("/customer-bakaya", (req, res) => {
// //   res.set("Cache-Control", "no-store");
// //   res.send(searchForm());
// // });

// // // ======================================
// // // SEARCH WITHOUT PIN OR OTP
// // // ======================================

// // router.post(
// //   "/customer-bakaya/search",
// //   searchLimit,
// //   async (req, res) => {
// //     try {
// //       res.set("Cache-Control", "no-store");

// //       const { searchType, last4 } = req.body;

// //       if (
// //         !["phone", "aadhaar"].includes(searchType) ||
// //         !/^\d{4}$/.test(last4 || "")
// //       ) {
// //         return res.status(400).send(
// //           searchForm("Please enter valid 4 digits")
// //         );
// //       }

// //       const field = searchType === "phone"
// //         ? "phoneLast4"
// //         : "aadhaarLast4";

// //       const customers = await Customer.find({
// //         [field]: last4,
// //         active: { $ne: false }
// //       })
// //       .select("phoneLast4 aadhaarLast4")
// //       .limit(30)
// //       .lean();

// //       const rows = customers.map((c, i) => `
// //        <tr>
// //         <td>${i + 1}</td>
// //         <td>******${esc(c.phoneLast4)}</td>
// //         <td>XXXX-XXXX-${esc(c.aadhaarLast4)}</td>
// //         <td>
// //          <span class="tag paid">
// //            MATCH FOUND
// //          </span>
// //         </td>
// //        </tr>
// //       `).join("");

// //       res.send(layout("Search Results", `
// //        <div class="card">
// //         <h2>Customer Search Results</h2>
// //         <p class="note">
// //          अंतिम 4 अंक एक से ज्यादा ग्राहकों के
// //          हो सकते हैं।
// //         </p>
// //         <div class="table-wrap">
// //          <table>
// //           <thead>
// //            <tr>
// //             <th>S.No.</th>
// //             <th>Phone</th>
// //             <th>Aadhaar</th>
// //             <th>Payment</th>
// //            </tr>
// //           </thead>
// //           <tbody>
// //            ${rows || `
// //             <tr>
// //              <td colspan="4">
// //                No Customer Found
// //              </td>
// //             </tr>
// //            `}
// //           </tbody>
// //          </table>
// //         </div>

// //         <p class="note">
// //          पूरी Payment History के लिए Admin से
// //          अपना Customer Payment Link प्राप्त करें।
// //         </p>

// //         <a href="/customer-bakaya" class="btn">
// //          Back to Search
// //         </a>
// //        </div>
// //       `));

// //     } catch (err) {
// //       console.error("Search Error:", err);
// //       res.status(500).send("Server Error");
// //     }
// //   }
// // );

// // // ======================================
// // // PUBLIC PAYMENT VIEW BY PRIVATE LINK
// // // NO PIN OR OTP
// // // ======================================

// // router.get("/customer-bakaya/view/:reference",
// //   async (req, res) => {
// //     try {
// //       res.set("Cache-Control", "no-store");
// //       res.set("Referrer-Policy", "no-referrer");
// //       res.set("X-Robots-Tag", "noindex, nofollow");

// //       const reference = req.params.reference;

// //       if (!/^[a-f0-9]{48}$/.test(reference)) {
// //         return res.status(404).send("Not Found");
// //       }

// //       const customer = await Customer.findOne({
// //         publicReference: reference,
// //         active: { $ne: false }
// //       });

// //       if (!customer) {
// //         return res.status(404).send("Not Found");
// //       }

// //       const { due, paid, balance } = totals(customer);

// //       const entries = [...customer.entries].sort(
// //         (a, b) => new Date(a.date) - new Date(b.date)
// //       );

// //       const history = entries.map((e, i) => `
// //        <tr>
// //         <td>${i + 1}</td>
// //         <td>${dateText(e.date)}</td>
// //         <td>${esc(e.reason)}</td>
// //         <td>${money(e.amount)}</td>
// //         <td>
// //          <span class="tag ${
// //            e.type === "PAID" ? "paid" : "unpaid"
// //          }">
// //           ${e.type}
// //          </span>
// //         </td>
// //        </tr>
// //       `).join("");

// //       res.send(layout("Payment History", `
// //        <div class="card">
// //         <h2>Customer Payment View</h2>
// //         <p><b>Name:</b> ${esc(customer.name)}</p>
// //         <p><b>Mobile:</b>
// //          ******${esc(customer.phoneLast4)}
// //         </p>
// //         <p><b>Aadhaar:</b>
// //          XXXX-XXXX-${esc(customer.aadhaarLast4)}
// //         </p>
// //        </div>

// //        <div class="card">
// //         <h2>Payment Summary</h2>

// //         <div class="grid">
// //          <div class="stat">
// //           Total Bill
// //           <strong>${money(due)}</strong>
// //          </div>
// //          <div class="stat">
// //           Total Paid
// //           <strong class="green">
// //            ${money(paid)}
// //           </strong>
// //          </div>
// //          <div class="stat">
// //           Remaining Bakaya
// //           <strong class="red">
// //            ${money(Math.max(balance, 0))}
// //           </strong>
// //          </div>
// //         </div>

// //         <p><b>Status:</b>
// //           ${
// //             balance > 0 ? "UNPAID / PARTIAL" :
// //             balance < 0 ? "ADVANCE PAID" :
// //             "FULLY PAID"
// //           }
// //         </p>
// //        </div>

// //        <div class="card">
// //         <h2>Payment History</h2>

// //         <div class="table-wrap">
// //          <table>
// //           <thead>
// //            <tr>
// //             <th>S.No.</th>
// //             <th>Date</th>
// //             <th>Reason</th>
// //             <th>Amount</th>
// //             <th>Status</th>
// //            </tr>
// //           </thead>
// //           <tbody>
// //            ${history || `
// //             <tr>
// //              <td colspan="5">
// //               No Payment History
// //              </td>
// //             </tr>
// //            `}
// //           </tbody>
// //          </table>
// //         </div>
// //        </div>
// //       `));

// //     } catch (err) {
// //       console.error("Payment View Error:", err);
// //       res.status(500).send("Server Error");
// //     }
// //   }
// // );

// // // ======================================
// // // ADMIN ADD CUSTOMER PAGE
// // // ======================================

// // router.get(
// //   "/admin/bakaya/customer",
// //   requireAdmin,
// //   (req, res) => {
// //     res.send(layout("Add Customer", `
// //      <div class="card">
// //       <h2>GLOBAL SERVICES – Add Customer</h2>

// //       <form method="POST"
// //         action="/admin/bakaya/customer">

// //        <label>Customer Name</label>
// //        <input name="name"
// //         maxlength="100" required>

// //        <label>Mobile Number (10 Digits)</label>
// //        <input name="phone"
// //         maxlength="10"
// //         pattern="[0-9]{10}"
// //         inputmode="numeric" required>

// //        <label>Aadhaar Number (12 Digits)</label>
// //        <input name="aadhaar"
// //         maxlength="12"
// //         pattern="[0-9]{12}"
// //         inputmode="numeric" required>

// //        <button type="submit">
// //         Save Customer
// //        </button>
// //       </form>
// //      </div>
// //     `));
// //   }
// // );

// // // ======================================
// // // ADMIN SAVE CUSTOMER
// // // ======================================

// // router.post(
// //   "/admin/bakaya/customer",
// //   requireAdmin,
// //   async (req, res) => {
// //     try {
// //       const name = String(req.body.name || "").trim();
// //       const phone = String(req.body.phone || "").trim();
// //       const aadhaar = String(req.body.aadhaar || "").trim();

// //       if (
// //         !name ||
// //         name.length > 100 ||
// //         !/^\d{10}$/.test(phone) ||
// //         !/^\d{12}$/.test(aadhaar)
// //       ) {
// //         return res.status(400).send(
// //           "Invalid Customer Details"
// //         );
// //       }

// //       const reference =
// //         crypto.randomBytes(24).toString("hex");

// //       const customer = await Customer.create({
// //         name,
// //         phone,
// //         phoneLast4: phone.slice(-4),
// //         aadhaarLast4: aadhaar.slice(-4),
// //         publicReference: reference,
// //         entries: []
// //       });

// //       const paymentPath =
// //         "/customer-bakaya/view/" + reference;

// //       res.send(layout("Customer Saved", `
// //        <div class="card">
// //         <h2>Customer Saved Successfully</h2>
// //         <p><b>Name:</b> ${esc(customer.name)}</p>

// //         <p>
// //          यह निजी Payment Link ग्राहक को भेजें।
// //          जिसके पास लिंक होगा, वह हिसाब देख सकेगा।
// //         </p>

// //         <a class="btn" href="${paymentPath}">
// //          View Customer Payment
// //         </a>

// //         <p class="note">
// //          ${esc(paymentPath)}
// //         </p>

// //         <p>
// //          <a href="/admin/bakaya/customer">
// //           Add Another Customer
// //          </a>
// //         </p>
// //        </div>
// //       `));

// //     } catch (err) {
// //       console.error("Create Customer Error:", err);
// //       res.status(500).send(
// //         "Customer creation failed"
// //       );
// //     }
// //   }
// // );

// // // ======================================
// // // ADMIN ADD PAYMENT / DUE
// // // ======================================

// // router.post(
// //   "/admin/bakaya/payment/:id",
// //   requireAdmin,
// //   async (req, res) => {
// //     try {
// //       const { type, amount, reason, date } = req.body;
// //       const value = Number(amount);

// //       if (
// //         !["DUE", "PAID"].includes(type) ||
// //         !Number.isFinite(value) ||
// //         value <= 0 ||
// //         value > 100000000 ||
// //         typeof reason !== "string" ||
// //         reason.length > 300 ||
// //         !date ||
// //         Number.isNaN(Date.parse(date))
// //       ) {
// //         return res.status(400).send("Invalid Payment");
// //       }

// //       const customer = await Customer.findById(
// //         req.params.id
// //       );

// //       if (!customer) {
// //         return res.status(404).send(
// //           "Customer Not Found"
// //         );
// //       }

// //       customer.entries.push({
// //         type,
// //         amount: Math.round(value * 100) / 100,
// //         reason: reason.trim(),
// //         date: new Date(date)
// //       });

// //       await customer.save();

// //       res.json({
// //         success: true,
// //         message: "Payment Saved"
// //       });

// //     } catch (err) {
// //       console.error("Payment Error:", err);
// //       res.status(500).send("Payment Save Failed");
// //     }
// //   }
// // );

// // module.exports = router;




// const express = require("express");
// const crypto = require("crypto");
// const mongoose = require("mongoose");
// const rateLimit = require("express-rate-limit");
// const Customer = require("../models/CustomerBakaya");

// const router = express.Router();

// router.use(express.urlencoded({ extended: false }));
// router.use(express.json());

// const esc = value => String(value ?? "")
//   .replace(/&/g, "&amp;")
//   .replace(/</g, "&lt;")
//   .replace(/>/g, "&gt;")
//   .replace(/"/g, "&quot;")
//   .replace(/'/g, "&#39;");

// const money = amount =>
//   "₹" + Number(amount || 0).toLocaleString("en-IN", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2
//   });

// const dateText = date =>
//   new Date(date).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric"
//   });

// function totals(customer) {
//   const entries = customer.entries || [];
//   const due = entries.filter(e => e.type === "DUE")
//     .reduce((s, e) => s + e.amount, 0);
//   const paid = entries.filter(e => e.type === "PAID")
//     .reduce((s, e) => s + e.amount, 0);
//   return { due, paid, balance: due - paid };
// }

// function requireAdmin(req, res, next) {
//   if (!req.session?.adminId) {
//     return res.status(403).send(
//       "Admin login required. Please log in at /admin."
//     );
//   }
//   next();
// }

// function page(title, content) {
//   return `<!DOCTYPE html>
// <html lang="hi">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width,initial-scale=1">
// <meta name="robots" content="noindex,nofollow">
// <title>${esc(title)} | GLOBAL SERVICES</title>
// <style>
// *{box-sizing:border-box}
// body{margin:0;background:#f1f5f9;color:#1e293b;font-family:Arial,sans-serif}
// .wrap{max-width:1150px;margin:auto;padding:15px}
// header{background:linear-gradient(135deg,#064e3b,#059669);color:white;padding:25px;text-align:center;border-radius:16px}
// header h1{margin:0 0 8px;font-size:27px}
// .card{background:white;padding:20px;margin-top:18px;border-radius:15px;box-shadow:0 4px 18px #0000000b}
// h2{font-size:20px;margin:0 0 15px}
// label{display:block;font-size:13px;font-weight:bold;margin-top:12px}
// input,select{width:100%;padding:12px;margin-top:7px;border:1px solid #cbd5e1;border-radius:9px;font-size:15px}
// .btn,button{display:inline-block;padding:12px 17px;background:#047857;color:white;border:0;border-radius:9px;text-decoration:none;font-weight:bold;cursor:pointer;font-size:13px}
// .btn:hover,button:hover{background:#065f46}
// .secondary{background:#334155}
// .grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:13px}
// .two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:13px}
// .stat{padding:17px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0}
// .stat strong{display:block;font-size:23px;margin-top:9px}
// .red{color:#dc2626}.green{color:#047857}
// .table-wrap{width:100%;overflow-x:auto}
// table{width:100%;border-collapse:collapse;min-width:620px}
// th,td{text-align:left;padding:13px 11px;border-bottom:1px solid #e2e8f0;font-size:13px}
// th{background:#ecfdf5;color:#065f46}
// .tag{display:inline-block;padding:6px 10px;border-radius:30px;font-weight:bold;font-size:11px}
// .tag-due{color:#b91c1c;background:#fee2e2}
// .tag-paid{color:#166534;background:#dcfce7}
// .actions{display:flex;gap:9px;flex-wrap:wrap;margin:12px 0}
// .note{color:#64748b;font-size:13px;line-height:1.6}
// .full{width:100%;margin-top:16px}
// @media(max-width:650px){
//  .grid,.two{grid-template-columns:1fr}
//  .card{padding:15px}
//  header h1{font-size:23px}
// }
// </style>
// </head>
// <body>
// <div class="wrap">
// <header>
// <h1>GLOBAL SERVICES</h1>
// <div>Customer Bakaya & Payment Management</div>
// </header>
// ${content}
// </div>
// </body>
// </html>`;
// }

// function summary(customer) {
//   const t = totals(customer);
//   return `
//   <div class="grid">
//     <div class="stat">Total Bill
//       <strong>${money(t.due)}</strong>
//     </div>
//     <div class="stat">Total Paid
//       <strong class="green">${money(t.paid)}</strong>
//     </div>
//     <div class="stat">Remaining Bakaya
//       <strong class="red">${money(Math.max(t.balance, 0))}</strong>
//     </div>
//   </div>
//   <p><b>Status:</b> ${
//     t.balance > 0 ? "PENDING / UNPAID" :
//     t.balance < 0 ? "ADVANCE PAID" : "FULLY PAID"
//   }</p>`;
// }

// function history(customer) {
//   const entries = [...(customer.entries || [])]
//     .sort((a, b) => new Date(b.date) - new Date(a.date));

//   const rows = entries.map((e, i) => `
//     <tr>
//       <td>${i + 1}</td>
//       <td>${dateText(e.date)}</td>
//       <td>${esc(e.reason || "-")}</td>
//       <td>${money(e.amount)}</td>
//       <td>${e.type === "PAID"
//         ? esc(e.paymentMode || "CASH") : "-"}</td>
//       <td><span class="tag ${
//         e.type === "PAID" ? "tag-paid" : "tag-due"
//       }">${e.type === "PAID" ? "PAID" : "DUE"}</span></td>
//     </tr>
//   `).join("");

//   return `<div class="table-wrap">
//    <table>
//     <thead><tr>
//       <th>S.No.</th><th>Date</th><th>Reason</th>
//       <th>Amount</th><th>Mode</th><th>Status</th>
//     </tr></thead>
//     <tbody>${rows || '<tr><td colspan="6">No payment history</td></tr>'}</tbody>
//    </table>
//   </div>`;
// }

// function adminNav() {
//   return `<div class="actions">
//     <a class="btn" href="/admin/bakaya">All Customers</a>
//     <a class="btn" href="/admin/bakaya/customer">Add Customer</a>
//     <a class="btn secondary" href="/admin">Dashboard</a>
//   </div>`;
// }

// // ============================================
// // ADMIN CUSTOMER LIST
// // ============================================

// router.get("/admin/bakaya", requireAdmin, async (req, res) => {
//   try {
//     const customers = await Customer.find()
//       .sort({ createdAt: -1 })
//       .limit(500);

//     const rows = customers.map((c, i) => {
//       const t = totals(c);
//       return `<tr>
//         <td>${i + 1}</td>
//         <td>${esc(c.name)}</td>
//         <td>${esc(c.phone || "******" + c.phoneLast4)}</td>
//         <td>XXXX-XXXX-${esc(c.aadhaarLast4)}</td>
//         <td>${money(Math.max(t.balance, 0))}</td>
//         <td><span class="tag ${
//           t.balance > 0 ? "tag-due" : "tag-paid"
//         }">${t.balance > 0 ? "PENDING" : "PAID"}</span></td>
//         <td><a class="btn" href="/admin/bakaya/${c._id}">
//           Manage / View
//         </a></td>
//       </tr>`;
//     }).join("");

//     res.set("Cache-Control", "no-store");
//     res.send(page("Bakaya Dashboard", `
//       ${adminNav()}
//       <div class="card">
//         <h2>Customer List (${customers.length})</h2>
//         <input id="filter" placeholder="Search name or mobile">
//         <div class="table-wrap">
//           <table id="customerTable">
//             <thead><tr>
//               <th>S.No.</th><th>Name</th><th>Mobile</th>
//               <th>Aadhaar</th><th>Bakaya</th>
//               <th>Status</th><th>Action</th>
//             </tr></thead>
//             <tbody>${rows || '<tr><td colspan="7">No customers</td></tr>'}</tbody>
//           </table>
//         </div>
//       </div>
//       <script>
//         document.getElementById("filter").addEventListener("input", function(){
//           const q = this.value.toLowerCase();
//           document.querySelectorAll("#customerTable tbody tr")
//             .forEach(row => {
//               row.style.display = row.innerText.toLowerCase().includes(q)
//                 ? "" : "none";
//             });
//         });
//       </script>
//     `));
//   } catch (err) {
//     console.error("Admin list error:", err);
//     res.status(500).send("Customer List Failed: " + esc(err.message));
//   }
// });

// // ============================================
// // ADD CUSTOMER FORM
// // ============================================

// router.get("/admin/bakaya/customer", requireAdmin, (req, res) => {
//   res.send(page("Add Customer", `
//     ${adminNav()}
//     <div class="card">
//       <h2>➕ Add New Customer</h2>
//       <form method="POST" action="/admin/bakaya/customer">
//         <label>Customer Name</label>
//         <input name="name" maxlength="100" required>

//         <label>Mobile Number (10 Digits)</label>
//         <input name="phone" maxlength="10"
//           pattern="[0-9]{10}" inputmode="numeric" required>

//         <label>Aadhaar Number (12 Digits)</label>
//         <input name="aadhaar" maxlength="12"
//           pattern="[0-9]{12}" inputmode="numeric" required>

//         <button type="submit" class="full">Save Customer</button>
//       </form>
//       <p class="note">
//         Aadhaar के केवल अंतिम 4 अंक database में रखे जाएँगे।
//         PIN और OTP की जरूरत नहीं है।
//       </p>
//     </div>
//   `));
// });

// // ============================================
// // SAVE CUSTOMER
// // ============================================

// router.post("/admin/bakaya/customer", requireAdmin, async (req, res) => {
//   try {
//     const name = String(req.body.name || "").trim();
//     const phone = String(req.body.phone || "").trim();
//     const aadhaar = String(req.body.aadhaar || "").trim();

//     if (!name || name.length > 100 ||
//         !/^\d{10}$/.test(phone) ||
//         !/^\d{12}$/.test(aadhaar)) {
//       return res.status(400).send(
//         page("Invalid Details", `
//           <div class="card">
//             <h2>Invalid Customer Details</h2>
//             <a href="/admin/bakaya/customer" class="btn">Try Again</a>
//           </div>
//         `)
//       );
//     }

//     const customer = await Customer.create({
//       name,
//       phone,
//       phoneLast4: phone.slice(-4),
//       aadhaarLast4: aadhaar.slice(-4),
//       publicReference: crypto.randomBytes(24).toString("hex"),
//       entries: [],
//       active: true
//     });

//     res.redirect("/admin/bakaya/" + customer._id);
//   } catch (err) {
//     console.error("Customer Create Error:", err);
//     res.status(500).send(page("Save Failed", `
//       <div class="card">
//         <h2 class="red">Customer Creation Failed</h2>
//         <p>${esc(err.message)}</p>
//         <a class="btn" href="/admin/bakaya/customer">Try Again</a>
//       </div>
//     `));
//   }
// });

// // ============================================
// // ADMIN CUSTOMER DETAILS + PAYMENT FORM
// // ============================================

// router.get("/admin/bakaya/:id", requireAdmin, async (req, res) => {
//   try {
//     if (!mongoose.isValidObjectId(req.params.id)) {
//       return res.status(404).send("Invalid Customer ID");
//     }

//     const c = await Customer.findById(req.params.id)
//       .select("+publicReference");

//     if (!c) return res.status(404).send("Customer Not Found");

//     const link = c.publicReference
//       ? "/customer-bakaya/view/" + c.publicReference
//       : "";

//     res.set("Cache-Control", "no-store");
//     res.send(page("Manage Customer", `
//       ${adminNav()}

//       <div class="card">
//         <h2>Customer Details</h2>
//         <p><b>Name:</b> ${esc(c.name)}</p>
//         <p><b>Mobile:</b> ${esc(c.phone || c.phoneLast4)}</p>
//         <p><b>Aadhaar:</b> XXXX-XXXX-${esc(c.aadhaarLast4)}</p>
//         ${link ? `
//           <p><a href="${link}" class="btn" target="_blank"
//           rel="noopener noreferrer">Public Payment View</a></p>
//           <p class="note">यह लिंक केवल संबंधित ग्राहक को भेजें।</p>
//         ` : `<p class="note">इस पुराने रिकॉर्ड का Public Link अभी उपलब्ध नहीं है।</p>`}
//       </div>

//       <div class="card">
//         <h2>Payment Summary</h2>
//         ${summary(c)}
//       </div>

//       <div class="card">
//         <h2>➕ Add Due / Add Paid</h2>

//         <form method="POST" action="/admin/bakaya/payment/${c._id}">
//           <div class="two">
//             <div>
//               <label>Payment Status</label>
//               <select name="type" id="type">
//                 <option value="DUE">DUE / PENDING (बाकी)</option>
//                 <option value="PAID">PAID / RECEIVED (जमा)</option>
//               </select>
//             </div>
//             <div>
//               <label>Amount (₹)</label>
//               <input type="number" name="amount" min="0.01"
//                 step="0.01" placeholder="Enter Amount" required>
//             </div>
//           </div>

//           <div class="two">
//             <div>
//               <label>Date</label>
//               <input type="date" name="date" id="paymentDate" required>
//             </div>
//             <div>
//               <label>Payment Mode</label>
//               <select name="paymentMode">
//                 <option value="CASH">CASH</option>
//                 <option value="UPI">UPI</option>
//                 <option value="BANK">BANK</option>
//                 <option value="OTHER">OTHER</option>
//               </select>
//             </div>
//           </div>

//           <label>Reason / Service Details</label>
//           <input name="reason" maxlength="300"
//             placeholder="e.g. PAN Card, Ration Card, Pending Fee"
//             required>

//           <button class="full" type="submit">Save Payment Entry</button>
//         </form>
//       </div>

//       <div class="card">
//         <h2>📋 Due & Payment History</h2>
//         ${history(c)}
//       </div>

//       <script>
//         document.getElementById("paymentDate").value =
//           new Date(Date.now() - new Date().getTimezoneOffset()*60000)
//             .toISOString().slice(0,10);
//       </script>
//     `));
//   } catch (err) {
//     console.error("Customer Detail Error:", err);
//     res.status(500).send("Customer Details Failed");
//   }
// });

// // ============================================
// // SAVE DUE / PAID ENTRY
// // ============================================

// router.post("/admin/bakaya/payment/:id",
//   requireAdmin, async (req, res) => {
//   try {
//     if (!mongoose.isValidObjectId(req.params.id)) {
//       return res.status(400).send("Invalid Customer ID");
//     }

//     const { type, amount, reason, date, paymentMode } = req.body;
//     const value = Number(amount);

//     if (!["DUE", "PAID"].includes(type) ||
//         !Number.isFinite(value) ||
//         value <= 0 || value > 100000000 ||
//         typeof reason !== "string" ||
//         !reason.trim() || reason.length > 300 ||
//         !/^\d{4}-\d{2}-\d{2}$/.test(date || "") ||
//         Number.isNaN(Date.parse(date)) ||
//         !["CASH","UPI","BANK","OTHER"].includes(paymentMode)) {
//       return res.status(400).send("Invalid Payment Details");
//     }

//     const customer = await Customer.findById(req.params.id);

//     if (!customer) {
//       return res.status(404).send("Customer Not Found");
//     }

//     customer.entries.push({
//       type,
//       amount: Math.round(value * 100) / 100,
//       reason: reason.trim(),
//       date: new Date(date + "T12:00:00+05:30"),
//       paymentMode
//     });

//     await customer.save();
//     res.redirect("/admin/bakaya/" + customer._id);
//   } catch (err) {
//     console.error("Payment Save Error:", err);
//     res.status(500).send("Payment Save Failed");
//   }
// });

// // ============================================
// // PUBLIC SEARCH (LAST 4 DIGITS)
// // ============================================

// router.get("/customer-bakaya", (req, res) => {
//   res.set("Cache-Control", "no-store");
//   res.send(page("Customer Search", `
//     <div class="card">
//       <h2>🔍 Check Customer Bakaya</h2>
//       <form method="POST" action="/customer-bakaya/search">
//         <label>Search By</label>
//         <select name="searchType">
//           <option value="phone">Mobile Last 4 Digits</option>
//           <option value="aadhaar">Aadhaar Last 4 Digits</option>
//         </select>
//         <label>Enter Last 4 Digits</label>
//         <input name="last4" maxlength="4" pattern="[0-9]{4}"
//           inputmode="numeric" required>
//         <button class="full">Search Customer</button>
//       </form>
//     </div>
//   `));
// });

// const publicLimit = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   limit: 10,
//   standardHeaders: "draft-7",
//   legacyHeaders: false
// });

// router.post("/customer-bakaya/search", publicLimit,
//   async (req, res) => {
//   try {
//     const { searchType, last4 } = req.body;
//     if (!["phone","aadhaar"].includes(searchType) ||
//         !/^\d{4}$/.test(last4 || "")) {
//       return res.status(400).send("Invalid Search");
//     }

//     const field = searchType === "phone"
//       ? "phoneLast4" : "aadhaarLast4";

//     const matches = await Customer.find({
//       [field]: last4,
//       active: { $ne: false }
//     }).select("phoneLast4 aadhaarLast4").limit(30);

//     const rows = matches.map((c, i) => `
//       <tr>
//         <td>${i + 1}</td>
//         <td>******${esc(c.phoneLast4)}</td>
//         <td>XXXX-XXXX-${esc(c.aadhaarLast4)}</td>
//         <td><span class="tag tag-paid">MATCH FOUND</span></td>
//       </tr>
//     `).join("");

//     res.set("Cache-Control", "no-store");
//     res.send(page("Search Results", `
//       <div class="card">
//         <h2>Customer Search Result</h2>
//         <div class="table-wrap">
//           <table>
//             <thead><tr>
//               <th>S.No.</th><th>Phone</th>
//               <th>Aadhaar</th><th>Payment</th>
//             </tr></thead>
//             <tbody>${rows || '<tr><td colspan="4">No Customer Found</td></tr>'}</tbody>
//           </table>
//         </div>
//         <p class="note">
//           पूरी Payment History के लिए अपना निजी Payment Link लें।
//           सिर्फ 4 अंक से निजी हिसाब नहीं खोला जाता।
//         </p>
//         <a href="/customer-bakaya" class="btn">Back</a>
//       </div>
//     `));
//   } catch (err) {
//     console.error("Public Search Error:", err);
//     res.status(500).send("Search Failed");
//   }
// });

// // ============================================
// // PRIVATE CUSTOMER PAYMENT VIEW LINK
// // ============================================

// router.get("/customer-bakaya/view/:reference",
//   async (req, res) => {
//   try {
//     const reference = req.params.reference;

//     if (!/^[a-f0-9]{48}$/.test(reference)) {
//       return res.status(404).send("Not Found");
//     }

//     const customer = await Customer.findOne({
//       publicReference: reference,
//       active: { $ne: false }
//     });

//     if (!customer) {
//       return res.status(404).send("Not Found");
//     }

//     res.set("Cache-Control", "no-store");
//     res.set("Referrer-Policy", "no-referrer");
//     res.set("X-Robots-Tag", "noindex, nofollow");

//     res.send(page("Payment History", `
//       <div class="card">
//         <h2>Customer Payment View</h2>
//         <p><b>Name:</b> ${esc(customer.name)}</p>
//         <p><b>Phone:</b> ******${esc(customer.phoneLast4)}</p>
//         <p><b>Aadhaar:</b> XXXX-XXXX-${esc(customer.aadhaarLast4)}</p>
//       </div>
//       <div class="card">
//         <h2>Payment Summary</h2>
//         ${summary(customer)}
//       </div>
//       <div class="card">
//         <h2>Payment History</h2>
//         ${history(customer)}
//       </div>
//     `));
//   } catch (err) {
//     console.error("Public Payment Error:", err);
//     res.status(500).send("Payment View Failed");
//   }
// });

// module.exports = router;




const express = require("express");
const crypto = require("crypto");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const Customer = require("../models/CustomerBakaya");

const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// ======================================
// HELPERS
// ======================================

const esc = v => String(v ?? "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");

const money = n => "₹" + Number(n || 0)
  .toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

const dateText = d => new Date(d)
  .toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

function totals(customer) {
  const entries = customer.entries || [];

  const due = entries
    .filter(e => e.type === "DUE")
    .reduce((s, e) => s + Number(e.amount || 0), 0);

  const paid = entries
    .filter(e => e.type === "PAID")
    .reduce((s, e) => s + Number(e.amount || 0), 0);

  return { due, paid, balance: due - paid };
}

function requireAdmin(req, res, next) {
  if (!req.session?.adminId) {
    return res.status(403).send(
      'Admin login required. <a href="/admin">Login</a>'
    );
  }
  next();
}

const publicLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-7",
  legacyHeaders: false
});

// ======================================
// PAGE DESIGN
// ======================================

function page(title, content) {
  return `
<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>${esc(title)} | GLOBAL SERVICES</title>

<style>
*{box-sizing:border-box}
body{
 margin:0;
 background:#f1f5f9;
 color:#1e293b;
 font-family:Arial,sans-serif;
}
.wrap{
 max-width:1150px;
 margin:auto;
 padding:15px;
}
header{
 background:linear-gradient(135deg,#064e3b,#059669);
 color:white;
 padding:25px 15px;
 text-align:center;
 border-radius:16px;
}
header h1{margin:0 0 8px;font-size:27px}
.card{
 background:#fff;
 padding:20px;
 margin-top:18px;
 border-radius:15px;
 box-shadow:0 4px 18px #0000000b;
}
h2{font-size:20px;margin:0 0 15px}
label{
 display:block;
 font-size:13px;
 font-weight:bold;
 margin-top:12px;
}
input,select{
 width:100%;
 padding:12px;
 margin-top:7px;
 border:1px solid #cbd5e1;
 border-radius:9px;
 font-size:15px;
}
input[type=checkbox]{
 width:auto;
 margin-right:8px;
}
.btn,button{
 display:inline-block;
 padding:12px 17px;
 background:#047857;
 color:white;
 border:0;
 border-radius:9px;
 text-decoration:none;
 font-weight:bold;
 cursor:pointer;
 font-size:13px;
}
.btn:hover,button:hover{background:#065f46}
.secondary{background:#334155}
.full{width:100%;margin-top:16px}
.grid{
 display:grid;
 grid-template-columns:repeat(3,minmax(0,1fr));
 gap:13px;
}
.two{
 display:grid;
 grid-template-columns:repeat(2,minmax(0,1fr));
 gap:13px;
}
.stat{
 padding:17px;
 background:#f8fafc;
 border:1px solid #e2e8f0;
 border-radius:12px;
}
.stat strong{
 display:block;
 font-size:23px;
 margin-top:9px;
}
.green{color:#047857}
.red{color:#dc2626}
.table-wrap{
 width:100%;
 overflow-x:auto;
}
table{
 width:100%;
 border-collapse:collapse;
 min-width:650px;
}
th,td{
 text-align:left;
 padding:13px 11px;
 border-bottom:1px solid #e2e8f0;
 font-size:13px;
}
th{
 background:#ecfdf5;
 color:#065f46;
 white-space:nowrap;
}
.tag{
 display:inline-block;
 padding:6px 10px;
 border-radius:30px;
 font-weight:bold;
 font-size:11px;
}
.tag-due{
 color:#b91c1c;
 background:#fee2e2;
}
.tag-paid{
 color:#166534;
 background:#dcfce7;
}
.actions{
 display:flex;
 gap:9px;
 flex-wrap:wrap;
 margin:12px 0;
}
.note{
 color:#64748b;
 font-size:13px;
 line-height:1.6;
}
@media(max-width:650px){
 .grid,.two{grid-template-columns:1fr}
 .card{padding:15px}
 header h1{font-size:23px}
}
</style>
</head>
<body>
<div class="wrap">
<header>
<h1>GLOBAL SERVICES</h1>
<div>Customer Bakaya & Payment Management</div>
</header>
${content}
</div>
</body>
</html>`;
}

// ======================================
// SUMMARY
// ======================================

function summary(customer) {
  const t = totals(customer);

  return `
  <div class="grid">
    <div class="stat">
      Total Bill
      <strong>${money(t.due)}</strong>
    </div>
    <div class="stat">
      Total Paid
      <strong class="green">${money(t.paid)}</strong>
    </div>
    <div class="stat">
      Remaining Bakaya
      <strong class="red">
        ${money(Math.max(t.balance, 0))}
      </strong>
    </div>
  </div>
  <p><b>Status:</b> ${
    t.balance > 0 ? "PENDING / UNPAID" :
    t.balance < 0 ? "ADVANCE PAID" :
    "FULLY PAID"
  }</p>`;
}

// ======================================
// PAYMENT HISTORY
// ======================================


function history(customer, isAdmin = false) {

  const entries = [...(customer.entries || [])]
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const rows = entries.map((e, i) => `

    <tr>
      <td>${i + 1}</td>

      <td>${dateText(e.date)}</td>

      <td>${esc(e.reason || "-")}</td>

      <td>${money(e.amount)}</td>

      <td>
        ${e.type === "PAID"
          ? esc(e.paymentMode || "CASH")
          : "-"}
      </td>

      <td>
        <span class="tag ${
          e.type === "PAID" ? "tag-paid" : "tag-due"
        }">
          ${esc(e.type)}
        </span>
      </td>

      ${isAdmin ? `
      <td>
        <form
          method="POST"
          action="/admin/bakaya/payment/${customer._id}/delete/${e._id}"
          onsubmit="return confirm('क्या आप इस Payment Entry को Delete करना चाहते हैं?')"
        >
          <button type="submit" style="
            background:#dc2626;
            color:white;
            padding:9px 13px;
            border:0;
            border-radius:8px;
            cursor:pointer;
            font-weight:bold;
          ">
            🗑 Delete
          </button>
        </form>
      </td>
      ` : ""}
    </tr>

  `).join("");

  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Amount</th>
            <th>Mode</th>
            <th>Status</th>
            ${isAdmin ? "<th>Action</th>" : ""}
          </tr>
        </thead>

        <tbody>
          ${rows || `
            <tr>
              <td colspan="${isAdmin ? 7 : 6}">
                No Payment History
              </td>
            </tr>
          `}
        </tbody>
      </table>
    </div>
  `;
}


function adminNav() {
  return `
  <div class="actions">
    <a class="btn" href="/admin/bakaya">
      All Customers
    </a>
    <a class="btn" href="/admin/bakaya/customer">
      Add Customer
    </a>
    <a class="btn secondary" href="/admin">
      Admin Dashboard
    </a>
  </div>`;
}

// ======================================
// ADMIN CUSTOMER LIST
// ======================================

router.get("/admin/bakaya", requireAdmin, async (req, res) => {
  try {
    const customers = await Customer.find()
      .sort({ createdAt: -1 })
      .limit(500);

    const rows = customers.map((c, i) => {
      const t = totals(c);

      return `
      <tr>
        <td>${i + 1}</td>
        <td>${esc(c.name)}</td>
        <td>${esc(c.phone || "******" + c.phoneLast4)}</td>
        <td>XXXX-XXXX-${esc(c.aadhaarLast4)}</td>
        <td>${money(t.due)}</td>
        <td>${money(t.paid)}</td>
        <td class="red">
          ${money(Math.max(t.balance, 0))}
        </td>
        <td>
          <span class="tag ${
            t.balance > 0 ? "tag-due" : "tag-paid"
          }">
            ${t.balance > 0 ? "PENDING" : "PAID"}
          </span>
        </td>
        <td>
          <a class="btn" href="/admin/bakaya/${c._id}">
            Manage / View
          </a>
        </td>
      </tr>`;
    }).join("");

    res.set("Cache-Control", "no-store");

    res.send(page("Bakaya Dashboard", `
      ${adminNav()}

      <div class="card">
        <h2>Customer List (${customers.length})</h2>

        <input id="filter"
          placeholder="Search Name or Mobile Number">

        <div class="table-wrap">
          <table id="customerTable">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Aadhaar</th>
                <th>Total Due</th>
                <th>Total Paid</th>
                <th>Bakaya</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              ${rows || '<tr><td colspan="9">No Customers</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>

      <script>
        document.getElementById("filter")
          .addEventListener("input", function() {
            const q = this.value.toLowerCase();

            document.querySelectorAll(
              "#customerTable tbody tr"
            ).forEach(row => {
              row.style.display =
                row.innerText.toLowerCase().includes(q)
                  ? "" : "none";
            });
          });
      </script>
    `));

  } catch (err) {
    console.error("Admin Customer List:", err);
    res.status(500).send("Customer List Failed");
  }
});

// ======================================
// ADD CUSTOMER PAGE
// ======================================

router.get("/admin/bakaya/customer", requireAdmin, (req, res) => {
  res.set("Cache-Control", "no-store");

  res.send(page("Add Customer", `
    ${adminNav()}

    <div class="card">
      <h2>➕ Add New Customer</h2>

      <form method="POST"
        action="/admin/bakaya/customer">

        <label>Customer Name</label>
        <input name="name" maxlength="100" required>

        <label>Mobile Number (10 Digits)</label>
        <input name="phone"
          maxlength="10"
          pattern="[0-9]{10}"
          inputmode="numeric"
          required>

        <label>Aadhaar Number (12 Digits)</label>
        <input name="aadhaar"
          maxlength="12"
          pattern="[0-9]{12}"
          inputmode="numeric"
          required>

        <label>
          <input type="checkbox"
            name="publicBalanceVisible"
            value="yes">
          Customer की सहमति है:
          Public में Total Due, Paid और Bakaya दिखाएँ
        </label>

        <button class="full" type="submit">
          Save Customer
        </button>
      </form>

      <p class="note">
        Aadhaar के केवल आखिरी 4 अंक Database में
        सेव होंगे। PIN या OTP की जरूरत नहीं है।
      </p>
    </div>
  `));
});

// ======================================
// SAVE CUSTOMER
// ======================================

router.post("/admin/bakaya/customer", requireAdmin,
  async (req, res) => {
  try {
    const name = String(req.body.name || "").trim();
    const phone = String(req.body.phone || "").trim();
    const aadhaar = String(req.body.aadhaar || "").trim();

    if (!name || name.length > 100 ||
        !/^\d{10}$/.test(phone) ||
        !/^\d{12}$/.test(aadhaar)) {
      return res.status(400).send(
        "Invalid Customer Details"
      );
    }

    const customer = await Customer.create({
      name,
      phone,
      phoneLast4: phone.slice(-4),
      aadhaarLast4: aadhaar.slice(-4),
      publicReference: crypto.randomBytes(24).toString("hex"),
      publicBalanceVisible:
        req.body.publicBalanceVisible === "yes",
      entries: [],
      active: true
    });

    res.redirect("/admin/bakaya/" + customer._id);

  } catch (err) {
    console.error("Customer Create Error:", err);

    res.status(500).send(page("Save Failed", `
      <div class="card">
        <h2 class="red">Customer Creation Failed</h2>
        <p>Please check the server logs and MongoDB model.</p>
        <a href="/admin/bakaya/customer" class="btn">
          Try Again
        </a>
      </div>
    `));
  }
});

// ======================================
// PUBLIC VISIBILITY UPDATE
// ======================================

router.post("/admin/bakaya/visibility/:id",
  requireAdmin, async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).send("Invalid Customer ID");
    }

    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).send("Customer Not Found");
    }

    customer.publicBalanceVisible =
      req.body.publicBalanceVisible === "yes";

    await customer.save();

    res.redirect("/admin/bakaya/" + customer._id);

  } catch (err) {
    console.error("Visibility Error:", err);
    res.status(500).send("Visibility Update Failed");
  }
});

// ======================================
// ADMIN CUSTOMER PAYMENT VIEW
// ======================================

router.get("/admin/bakaya/:id", requireAdmin,
  async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).send("Invalid Customer ID");
    }

    const c = await Customer.findById(req.params.id)
      .select("+publicReference");

    if (!c) {
      return res.status(404).send("Customer Not Found");
    }

    const link = c.publicReference
      ? "/customer-bakaya/view/" + c.publicReference
      : "";

    res.set("Cache-Control", "no-store");

    res.send(page("Manage Customer", `
      ${adminNav()}

      <div class="card">
        <h2>Customer Details</h2>
        <p><b>Name:</b> ${esc(c.name)}</p>
        <p><b>Mobile:</b> ${esc(c.phone || c.phoneLast4)}</p>
        <p><b>Aadhaar:</b>
          XXXX-XXXX-${esc(c.aadhaarLast4)}
        </p>

        ${link ? `
          <a class="btn" href="${link}"
            target="_blank" rel="noopener noreferrer">
            Public Payment View
          </a>
          <p class="note">
            यह निजी लिंक केवल संबंधित ग्राहक को दें।
          </p>
        ` : `
          <p class="note">
            इस पुराने रिकॉर्ड का Public Link उपलब्ध नहीं है।
          </p>
        `}
      </div>

      <div class="card">
        <h2>Public Balance Visibility</h2>

        <p class="note">
          Customer की सहमति होने पर ही
          Public Search में रकम दिखाएँ।
        </p>

        <form method="POST"
          action="/admin/bakaya/visibility/${c._id}">

          <label>
            <input type="checkbox"
              name="publicBalanceVisible"
              value="yes"
              ${c.publicBalanceVisible ? "checked" : ""}>

            Public में Total Due, Paid और Bakaya दिखाएँ
          </label>

          <button type="submit">
            Save Visibility
          </button>
        </form>
      </div>

      <div class="card">
        <h2>Payment Summary</h2>
        ${summary(c)}
      </div>

      <div class="card">
        <h2>➕ Add Due / Add Paid</h2>

        <form method="POST"
          action="/admin/bakaya/payment/${c._id}">

          <div class="two">
            <div>
              <label>Payment Status</label>
              <select name="type">
                <option value="DUE">
                  DUE / PENDING (बाकी)
                </option>
                <option value="PAID">
                  PAID / RECEIVED (जमा)
                </option>
              </select>
            </div>

            <div>
              <label>Amount (₹)</label>
              <input type="number"
                name="amount"
                min="0.01"
                step="0.01"
                required>
            </div>
          </div>

          <div class="two">
            <div>
              <label>Date</label>
              <input type="date"
                id="paymentDate"
                name="date"
                required>
            </div>

            <div>
              <label>Payment Mode</label>
              <select name="paymentMode">
                <option value="CASH">CASH</option>
                <option value="UPI">UPI</option>
                <option value="BANK">BANK</option>
                <option value="OTHER">OTHER</option>
              </select>
            </div>
          </div>

          <label>Reason / Service Details</label>
          <input name="reason"
            maxlength="300"
            placeholder="e.g. Ration Card PVC Printing"
            required>

          <button class="full" type="submit">
            Save Payment Entry
          </button>
        </form>
      </div>

      <div class="card">
        <h2>📋 Payment History</h2>
        ${history(c, true)}
      </div>

      <script>
        const now = new Date();
        document.getElementById("paymentDate").value =
          new Date(now.getTime() -
            now.getTimezoneOffset() * 60000)
            .toISOString().slice(0,10);
      </script>
    `));

  } catch (err) {
    console.error("Customer Detail Error:", err);
    res.status(500).send("Customer Details Failed");
  }
});

// ======================================
// SAVE DUE / PAID PAYMENT
// ======================================

router.post("/admin/bakaya/payment/:id",
  requireAdmin, async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).send("Invalid Customer ID");
    }

    const { type, amount, reason, date, paymentMode } = req.body;
    const value = Number(amount);

    const allowedModes = ["CASH", "UPI", "BANK", "OTHER"];

    if (!["DUE", "PAID"].includes(type) ||
        !Number.isFinite(value) ||
        value <= 0 ||
        value > 100000000 ||
        typeof reason !== "string" ||
        !reason.trim() ||
        reason.length > 300 ||
        !/^\d{4}-\d{2}-\d{2}$/.test(date || "") ||
        !allowedModes.includes(paymentMode)) {
      return res.status(400).send("Invalid Payment Details");
    }

    const paymentDate = new Date(date + "T12:00:00+05:30");

    if (Number.isNaN(paymentDate.getTime())) {
      return res.status(400).send("Invalid Payment Date");
    }

    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).send("Customer Not Found");
    }

    customer.entries.push({
      type,
      amount: Math.round(value * 100) / 100,
      reason: reason.trim(),
      date: paymentDate,
      paymentMode
    });

    await customer.save();

    res.redirect("/admin/bakaya/" + customer._id);

  } catch (err) {
    console.error("Payment Save Error:", err);
    res.status(500).send("Payment Save Failed");
  }
});

// ======================================
// PUBLIC CUSTOMER SEARCH PAGE
// ======================================

router.get("/customer-bakaya", (req, res) => {
  res.set("Cache-Control", "no-store");

  res.send(page("Customer Search", `
    <div class="card">
      <h2>🔍 Check Customer Bakaya</h2>

      <form method="POST"
        action="/customer-bakaya/search">

        <label>Search By</label>

        <select name="searchType">
          <option value="phone">
            Mobile Last 4 Digits
          </option>
          <option value="aadhaar">
            Aadhaar Last 4 Digits
          </option>
        </select>

        <label>Enter Last 4 Digits</label>

        <input name="last4"
          maxlength="4"
          pattern="[0-9]{4}"
          inputmode="numeric"
          placeholder="Enter Last 4 Digits"
          required>

        <button class="full" type="submit">
          🔍 Search Customer
        </button>
      </form>
    </div>
  `));
});

// ======================================
// PUBLIC SEARCH RESULT
// TOTAL DUE / TOTAL PAID / BAKAYA
// ======================================

router.post("/customer-bakaya/search",
  publicLimit, async (req, res) => {
  try {
    const { searchType, last4 } = req.body;

    if (!["phone", "aadhaar"].includes(searchType) ||
        !/^\d{4}$/.test(last4 || "")) {
      return res.status(400).send("Invalid Search");
    }

    const field = searchType === "phone"
      ? "phoneLast4"
      : "aadhaarLast4";

    const matches = await Customer.find({
      [field]: last4,
      active: { $ne: false }
    })
    .select(
      "phoneLast4 aadhaarLast4 entries publicBalanceVisible"
    )
    .limit(30)
    .lean();

    const rows = matches.map((c, i) => {
      const visible = c.publicBalanceVisible === true;
      const t = visible ? totals(c) : null;

      return `
        <tr>
          <td>${i + 1}</td>

          <td>******${esc(c.phoneLast4)}</td>

          <td>
            XXXX-XXXX-${esc(c.aadhaarLast4)}
          </td>

          <td>
            ${visible ? money(t.due) : "Private"}
          </td>

          <td class="green">
            ${visible ? money(t.paid) : "Private"}
          </td>

          <td class="red">
            ${visible
              ? money(Math.max(t.balance, 0))
              : "Private"}
          </td>

          <td>
            ${visible
              ? `<span class="tag ${
                  t.balance > 0 ? "tag-due" : "tag-paid"
                }">${
                  t.balance > 0 ? "PENDING" :
                  t.balance < 0 ? "ADVANCE" : "PAID"
                }</span>`
              : `<span class="tag tag-due">PRIVATE</span>`
            }
          </td>
        </tr>`;
    }).join("");

    res.set("Cache-Control", "no-store");

    res.send(page("Customer Search Result", `
      <div class="card">
        <h2>Customer Search Result</h2>

        <p class="note">
          Mobile या Aadhaar के अंतिम 4 अंक से
          मिलने वाले Customer Records।
        </p>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Phone</th>
                <th>Aadhaar</th>
                <th>Total Due</th>
                <th>Total Paid</th>
                <th>Remaining Bakaya</th>
                <th>Payment Status</th>
              </tr>
            </thead>

            <tbody>
              ${rows || `
                <tr>
                  <td colspan="7">
                    No Customer Found
                  </td>
                </tr>
              `}
            </tbody>
          </table>
        </div>

        <p class="note">
          Payment History के लिए अपना
          निजी Customer Payment Link प्राप्त करें।
        </p>

        <a href="/customer-bakaya" class="btn">
          Back to Search
        </a>
      </div>
    `));

  } catch (err) {
    console.error("Public Search Error:", err);
    res.status(500).send("Search Failed");
  }
});

// ======================================
// CUSTOMER PRIVATE PAYMENT VIEW
// NO PIN / NO OTP
// ======================================

router.get("/customer-bakaya/view/:reference",
  publicLimit, async (req, res) => {
  try {
    const reference = req.params.reference;

    if (!/^[a-f0-9]{48}$/.test(reference)) {
      return res.status(404).send("Not Found");
    }

    const customer = await Customer.findOne({
      publicReference: reference,
      active: { $ne: false }
    });

    if (!customer) {
      return res.status(404).send("Not Found");
    }

    res.set("Cache-Control", "no-store");
    res.set("Referrer-Policy", "no-referrer");
    res.set("X-Robots-Tag", "noindex, nofollow");

    res.send(page("Payment History", `
      <div class="card">
        <h2>Customer Payment View</h2>

        <p>
          <b>Name:</b>
          ${esc(customer.name)}
        </p>

        <p>
          <b>Phone:</b>
          ******${esc(customer.phoneLast4)}
        </p>

        <p>
          <b>Aadhaar:</b>
          XXXX-XXXX-${esc(customer.aadhaarLast4)}
        </p>
      </div>

      <div class="card">
        <h2>Payment Summary</h2>
        ${summary(customer)}
      </div>

      <div class="card">
        <h2>📋 Payment History</h2>
        ${history(customer)}
      </div>
    `));

  } catch (err) {
    console.error("Public Payment Error:", err);
    res.status(500).send("Payment View Failed");
  }
});


router.post(
  "/admin/bakaya/payment/:id/delete/:entryId",
  requireAdmin,
  async (req, res) => {
    try {

      const { id, entryId } = req.params;

      if (
        !mongoose.isValidObjectId(id) ||
        !mongoose.isValidObjectId(entryId)
      ) {
        return res.status(400).send(
          "Invalid Customer or Payment ID"
        );
      }

      const customer = await Customer.findById(id);

      if (!customer) {
        return res.status(404).send(
          "Customer Not Found"
        );
      }

      const payment = customer.entries.id(entryId);

      if (!payment) {
        return res.status(404).send(
          "Payment Entry Not Found"
        );
      }

      // Delete selected entry only
      customer.entries.pull({ _id: entryId });

      await customer.save();

      return res.redirect(
        "/admin/bakaya/" + customer._id
      );

    } catch (err) {

      console.error("Delete Payment Error:", err);

      return res.status(500).send(
        "Payment Delete Failed"
      );
    }
  }
);



/* ==========================================
   HOME PAGE - PUBLIC CUSTOMER BAKAYA API
========================================== */

router.get("/api/public-bakaya", publicLimit, async (req, res) => {
  try {
    res.set("Cache-Control", "no-store");

    const customers = await Customer.find({
      active: { $ne: false },
      publicBalanceVisible: true
    })
      .select("phoneLast4 aadhaarLast4 entries")
      .sort({ createdAt: -1 })
      .limit(100)
      .lean();

    const result = customers.map(c => {
      const t = totals(c);

      return {
        phoneLast4: c.phoneLast4,
        aadhaarLast4: c.aadhaarLast4,
        totalDue: t.due,
        totalPaid: t.paid,
        bakaya: Math.max(0, t.balance)
      };
    });

    return res.json({
      success: true,
      customers: result
    });

  } catch (err) {
    console.error("Public Bakaya API Error:", err);

    return res.status(500).json({
      success: false,
      message: "Customer data load failed"
    });
  }
});


module.exports = router;
