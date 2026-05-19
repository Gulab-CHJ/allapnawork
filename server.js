// const express = require("express");
// const path = require("path");
// const mongoose = require("mongoose");

// const app = express();

// /* ================= MIDDLEWARE ================= */

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// /* ================= VIEW ================= */

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// /* ================= DB ================= */

// mongoose.connect("mongodb://127.0.0.1:27017/gs")
// .then(() => console.log("DB Connected"))
// .catch(err => console.log(err));

// /* ================= MODEL ================= */

// const Student = require("./models/Student");

// /* ================= ROUTES ================= */

// app.get("/", (req, res) => {
//     res.render("index");
// });

// /* STUDENT PAGE */



// /* REGISTER */

// app.post("/student-register", async (req, res) => {

//     try {

//         const {
//             name,
//             father,
//             dob,
//             className,
//             phone,
//             password
//         } = req.body;

//         /* AUTO USERNAME */

//         const dobPart = dob.split("-").join("");

//         const username =
//             name.replace(/\s/g, "").toLowerCase()
//             + dobPart;

//         /* PHONE CHECK */

//         if (phone.length !== 10) {
//             return res.send("❌ Wrong Number");
//         }

//         /* SAVE */

//         await Student.create({
//             name,
//             father,
//             dob,
//             className,
//             phone,
//             password,
//             username
//         });

//         /* PAYMENT */

//         res.redirect("/payment");

//     } catch (err) {

//         console.log(err);
//         res.send("Register Error");
//     }
// });

// /* PAYMENT */

// app.get("/payment", (req, res) => {
//     res.render("payment");
// });

// /* SERVER */

// app.listen(3000, () => {
//     console.log("Server Running on 3000");
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Server Running"));

app.listen(3000);