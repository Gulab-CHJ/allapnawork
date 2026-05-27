// require("dotenv").config();

// const express = require("express");
// const path = require("path");
// const mongoose = require("mongoose");
// const session = require("express-session");

// const app = express();

// /* ================= MIDDLEWARE ================= */
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));

// /* ================= SESSION ================= */
// app.use(session({
//     secret: process.env.SESSION_SECRET || "defaultsecret",
//     resave: false,
//     saveUninitialized: false
// }));

// /* ================= VIEW ENGINE ================= */
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// /* ================= DATABASE ================= */
// mongoose.connect(process.env.MONGO_URL)
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.log("❌ Mongo Error:", err));

// /* ================= MODEL ================= */
// const Student = require("./models/student");

// /* ================= ROUTES ================= */

// /* HOME */
// app.get("/", (req, res) => {
//     res.render("index");
// });

// /* STUDENT REGISTER PAGE */
// app.get("/student", (req, res) => {
//     res.render("student-register");
// });

// /* EMAIL VERIFY PAGE (FOR EMAIL OTP SYSTEM) */
// app.get("/verify", (req, res) => {
//     res.render("verify");
// });

// /* REGISTER */
// app.post("/student-register", async (req, res) => {
//     try {

//         const {
//             name = "",
//             father = "",
//             dob = "",
//             className = "",
//             phone = "",
//             password = ""
//         } = req.body;

//         /* CLEAN PHONE */
//         const phoneStr = String(phone).replace(/\D/g, "");

//         if (phoneStr.length !== 10) {
//             return res.status(400).send("❌ Wrong Number");
//         }

//         /* SAFE DOB */
//         const dobPart = dob ? dob.replace(/-/g, "") : "000000";

//         /* AUTO USERNAME */
//         const username =
//             name.trim().replace(/\s+/g, "").toLowerCase() + dobPart;

//         /* SAVE STUDENT */
//         await Student.create({
//             name: name.trim(),
//             father: father.trim(),
//             dob,
//             className,
//             phone: phoneStr,
//             password,
//             username
//         });

//         return res.redirect("/payment");

//     } catch (err) {
//         console.log("REGISTER ERROR:", err);
//         return res.status(500).send("❌ Register Error");
//     }
// });

// /* PAYMENT PAGE */
// app.get("/payment", (req, res) => {
//     res.render("payment");
// });

// /* 404 */
// app.use((req, res) => {
//     res.status(404).send("❌ 404 Page Not Found");
// });

// /* ================= START SERVER ================= */
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log("🚀 Server Running on port " + PORT);
// });



// require("dotenv").config();
// const crypto = require("crypto");

// const express = require("express");
// const path = require("path");
// const mongoose = require("mongoose");
// const session = require("express-session");
// const nodemailer = require("nodemailer");
// const multer = require("multer");

// const app = express();

// /* ================= MIDDLEWARE ================= */

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static(path.join(__dirname, "public")));

// /* ================= SESSION ================= */

// app.use(session({
//     secret: process.env.SESSION_SECRET || "defaultsecret",
//     resave: false,
//     saveUninitialized: false
// }));

// /* ================= VIEW ENGINE ================= */

// app.set("view engine", "ejs");

// app.set("views", path.join(__dirname, "views"));

// /* ================= DATABASE ================= */

// mongoose.connect(process.env.MONGO_URL)
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.log("❌ Mongo Error:", err));

// /* ================= MODELS ================= */

// const Student = require("./models/student");

// const otpSchema = new mongoose.Schema({

//     email: String,

//     otp: String,

//     createdAt: {
//         type: Date,
//         default: Date.now,
//         expires: 300
//     }

// });

// const OTP = mongoose.model("OTP", otpSchema);

// /* ================= NODEMAILER ================= */


// const transporter = nodemailer.createTransport({

//     host: "smtp.gmail.com",

//     port: 465,

//     secure: true,

//     auth: {

//         user: process.env.EMAIL_USER,

//         pass: process.env.EMAIL_PASS

//     }

// });

// transporter.verify((error, success) => {

//     if(error){

//         console.log("MAIL ERROR =>", error);

//     }else{

//         console.log("✅ MAIL SERVER READY");

//     }

// });
// /* ================= ROUTES ================= */

// /* HOME */

// app.get("/", (req, res) => {

//     res.render("index");

// });

// /* STUDENT PAGE */

// app.get("/student", (req, res) => {

//     res.render("student-register");

// });

// /* VERIFY PAGE */

// app.get("/verify", (req, res) => {

//     res.render("verify");

// });

// /* PAYMENT PAGE */

// app.get("/payment", (req, res) => {

//     res.render("payment");

// });

// /* ================= SEND OTP ================= */
// app.post("/send-otp", async (req, res) => {

//     try {

//         const { email } = req.body;

//         if (!email) {

//             return res.json({
//                 success: false,
//                 message: "Email Required"
//             });

//         }

//         const otp =
//         Math.floor(100000 + Math.random() * 900000).toString();

//         await OTP.deleteMany({ email });

//         await OTP.create({
//             email,
//             otp
//         });

//         try {

//             await transporter.sendMail({

//                 from: process.env.EMAIL_USER,

//                 to: email,

//                 subject: "Your OTP Code",

//                 html: `
//                     <div style="font-family:Arial;padding:20px;">
//                         <h2>Email Verification</h2>

//                         <h1 style="letter-spacing:5px;">
//                             ${otp}
//                         </h1>

//                         <p>OTP valid for 5 minutes.</p>
//                     </div>
//                 `
//             });

//             return res.json({
//                 success: true,
//                 message: "OTP Sent Successfully"
//             });

//         } catch (mailErr) {

//             console.log("MAIL ERROR:", mailErr);

//             if(mailErr.responseCode === 550){

//                 return res.json({
//                     success: false,
//                     message: "Wrong Email ID"
//                 });
//             }

//             return res.json({
//                 success: false,
//                 message: "Email Send Failed"
//             });
//         }

//     } catch (err) {

//         console.log("OTP ERROR:", err);

//         return res.json({
//             success: false,
//             message: "OTP Send Failed"
//         });
//     }

// });

// /* ================= REGISTER ================= */
// // app.post("/student-register", async (req, res) => {

// //     try {

// //         const {
// //             name = "",
// //             father = "",
// //             dob = "",
// //             className = "",
// //             phone = "",
// //             password = "",
// //             email = ""
// //         } = req.body;

// //         if (req.session.verifiedEmail !== email) {
// //             return res.json({
// //                 success: false,
// //                 message: "Verify Email First"
// //             });
// //         }

// //         const phoneStr = String(phone).replace(/\D/g, "");

// //         if (phoneStr.length !== 10) {
// //             return res.json({
// //                 success: false,
// //                 message: "Wrong Number"
// //             });
// //         }

// //         const dobPart = dob ? dob.replace(/-/g, "") : "000000";

// //         const username =
// //             name.trim().replace(/\s+/g, "").toLowerCase() + dobPart;

// //         // 🔥 TEMP STORE ONLY (NO DB SAVE)
// //         req.session.tempStudent = {
// //             name,
// //             father,
// //             dob,
// //             className,
// //             phone: phoneStr,
// //             email,
// //             password,
// //             username
// //         };

// //         return res.json({
// //             success: true,
// //             redirect: "/payment"
// //         });

// //     } catch (err) {

// //         console.log(err);

// //         return res.json({
// //             success: false,
// //             message: err.message
// //         });

// //     }
// // });

// app.post("/student-register", upload.single("photo"), async (req, res) => {

//     try {

//         const {
//             name = "",
//             father = "",
//             dob = "",
//             className = "",
//             phone = "",
//             password = "",
//             email = ""
//         } = req.body;

//         const phoneStr = String(phone).replace(/\D/g, "");

//         const dobPart = dob ? dob.replace(/-/g, "") : "000000";

//         const username =
//             name.trim().replace(/\s+/g, "").toLowerCase() + dobPart;

//         const photoPath = req.file ? "/uploads/" + req.file.filename : "";

//         const last = await Student.findOne().sort({ roll: -1 });
//         const roll = last ? last.roll + 1 : 1;

//         const student = await Student.create({
//             roll,
//             name,
//             father,
//             dob,
//             className,
//             phone: phoneStr,
//             email,
//             password,
//             username,
//             photo: photoPath
//         });

//         res.json({
//             success: true,
//             message: "Student Registered"
//         });

//     } catch (err) {
//         console.log(err);
//         res.json({ success: false, message: err.message });
//     }
// });

// app.get("/payment-success",(req,res)=>{
//     res.send("Payment Successful 🎉 Registration Complete");
// });





// /* ================= RAZORPAY ================= */


// const Razorpay = require("razorpay");

// const razorpay = new Razorpay({

//     key_id: process.env.RAZORPAY_KEY_ID,

//     key_secret: process.env.RAZORPAY_KEY_SECRET

// });


// /* ================= CREATE ORDER ================= */

// app.post("/create-order", async (req, res) => {

//     try {

//         const order = await razorpay.orders.create({

//             amount: 299 * 100, // amount in paise

//             currency: "INR",

//             receipt: "receipt_order"

//         });

//         res.json({

//             success: true,

//             order

//         });

//     } catch (err) {

//         console.log(err);

//         res.json({

//             success: false,

//             message: "Order Failed"

//         });

//     }

// });

// app.post("/payment-success-save", async (req, res) => {

//     try {

//         const data = req.body;

//         if (!data) {
//             return res.json({
//                 success: false,
//                 message: "No student data found"
//             });
//         }

//         const lastStudent = await Student.findOne().sort({ roll: -1 });
//         const roll = lastStudent ? lastStudent.roll + 1 : 1;

//         const student = await Student.create({
//             ...data,
//             roll,
//             paymentId: req.body.payment_id
//         });


//         res.json({
//             success: true,
//             message: "Registration Complete"
//         });

//     } catch (err) {
//         res.json({
//             success: false,
//             message: err.message
//         });
//     }
// });
// /* ================= VERIFY OTP ================= */

// app.post("/verify-otp", async (req, res) => {

//     try {

//         const email = req.body.email;

//         const otp = req.body.otp;

//         const data = await OTP.findOne({
//             email,
//             otp
//         });

//         if (!data) {

//             return res.json({
//                 success: false,
//                 message: "Invalid OTP"
//             });
//         }

//         req.session.verifiedEmail = email;

//         return res.json({
//             success: true,
//             message: "OTP Verified"
//         });

//     } catch (err) {

//         console.log("VERIFY ERROR:", err);

//         return res.json({
//             success: false,
//             message: "Verification Failed"
//         });
//     }
// });

// app.post("/verify-payment", (req, res) => {

//     try {

//         const {

//             razorpay_order_id,

//             razorpay_payment_id,

//             razorpay_signature

//         } = req.body;

//         const body =
//         razorpay_order_id + "|" + razorpay_payment_id;

//         const expectedSignature =
//         crypto
//         .createHmac(
//             "sha256",
//             process.env.RAZORPAY_KEY_SECRET
//         )
//         .update(body.toString())
//         .digest("hex");

//         if(expectedSignature === razorpay_signature){

//             return res.json({
//                 success:true,
//                 message:"Payment Verified"
//             });

//         }else{

//             return res.status(400).json({
//                 success:false,
//                 message:"Invalid Signature"
//             });
//         }

//     } catch (err) {

//         console.log(err);

//         return res.status(500).json({
//             success:false
//         });
//     }
// });

// // new change code

// app.get("/admin", isAdmin, (req, res) => {
//     res.render("admin");
// });

// app.get("/api/students", isAdmin, async (req, res) => {
//     const data = await Student.find();
//     res.json(data);
// });

// app.put("/api/student/:id", isAdmin, async (req, res) => {
//     await Student.findByIdAndUpdate(req.params.id, req.body);
//     res.json({ message: "Updated" });
// });

// app.delete("/api/student/:id", isAdmin, async (req, res) => {
//     await Student.findByIdAndDelete(req.params.id);
//     res.json({ message: "Deleted" });
// });

// const ADMIN_ID = "admin";
// const ADMIN_PASS = "12345";


// app.get("/admin-login", (req, res) => {
//     res.render("admin-login");
// });
// function isAdmin(req, res, next){
//     if(req.session.isAdmin){
//         return next();
//     }
//     return res.redirect("/admin-login");
// }
// app.post("/admin-login", (req, res) => {

//     const { username, password } = req.body;

//     if(username === ADMIN_ID && password === ADMIN_PASS){
//         req.session.isAdmin = true;
//         return res.redirect("/admin");
//     }

//     return res.send("❌ Wrong ID or Password");
// });

// const fs = require("fs");

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "public/uploads");
//     },
//     filename: function (req, file, cb) {
//         const uniqueName = Date.now() + "-" + file.originalname;
//         cb(null, uniqueName);
//     }
// });

// const upload = multer({ storage });


// /* ================= START SERVER ================= */

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {

//     console.log("🚀 Server Running On Port " + PORT);

// });

/* ================= 404 ================= */













// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Server Running"));

// app.listen(3000);

// require("dotenv").config();

// const express = require("express");
// const path = require("path");
// const mongoose = require("mongoose");
// const session = require("express-session");
// const nodemailer = require("nodemailer");
// const crypto = require("crypto");
// const multer = require("multer");

// const app = express();

// /* ================= MIDDLEWARE ================= */
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));

// /* ================= SESSION ================= */
// app.use(session({
//     secret: process.env.SESSION_SECRET || "secret",
//     resave: false,
//     saveUninitialized: false
// }));

// /* ================= VIEW ENGINE ================= */
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// /* ================= DB ================= */
// mongoose.connect(process.env.MONGO_URL)
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.log(err));

// /* ================= MODEL ================= */
// const Student = require("./models/student");

// /* ================= OTP MODEL ================= */
// const otpSchema = new mongoose.Schema({
//     email: String,
//     otp: String,
//     createdAt: { type: Date, default: Date.now, expires: 300 }
// });
// const OTP = mongoose.model("OTP", otpSchema);

// /* ================= UPLOAD ================= */
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "public/uploads");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "-" + file.originalname);
//     }
// });
// const upload = multer({ storage });

// /* ================= EMAIL ================= */
// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     }
// });

// /* ================= ROUTES ================= */
// app.get("/", (req, res) => res.render("index"));
// app.get("/student", (req, res) => res.render("student-register"));
// app.get("/payment", (req, res) => res.render("payment"));
// app.get("/verify", (req, res) => res.render("verify"));

// /* ================= OTP SEND ================= */
// app.post("/send-otp", async (req, res) => {
//     try {
//         const { email } = req.body;

//         const otp = Math.floor(100000 + Math.random() * 900000).toString();

//         await OTP.deleteMany({ email });
//         await OTP.create({ email, otp });

//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: "OTP Verification",
//             html: `<h1>Your OTP: ${otp}</h1>`
//         });

//         res.json({ success: true, message: "OTP Sent" });

//     } catch (err) {
//         console.log(err);
//         res.json({ success: false, message: "OTP Failed" });
//     }
// });

// /* ================= VERIFY OTP ================= */
// app.post("/verify-otp", async (req, res) => {
//     const { email, otp } = req.body;

//     const data = await OTP.findOne({ email, otp });

//     if (!data) {
//         return res.json({ success: false, message: "Invalid OTP" });
//     }

//     req.session.verifiedEmail = email;

//     res.json({ success: true, message: "OTP Verified" });
// });

// /* ================= REGISTER STUDENT ================= */
// app.post("/student-register", upload.single("photo"), async (req, res) => {
//     try {

//         console.log("BODY:", req.body);
//         console.log("FILE:", req.file);

//         const {
//             name,
//             father,
//             dob,
//             className,
//             phone,
//             email,
//             password
//         } = req.body;

//         if(!name || !email){
//             return res.json({
//                 success:false,
//                 message:"Missing fields"
//             });
//         }

//         const photo = req.file ? "/uploads/" + req.file.filename : "";

//         await Student.create({
//             name,
//             father,
//             dob,
//             className,
//             phone,
//             email,
//             password,
//             photo
//         });

//         return res.json({
//             success:true,
//             message:"Student Registered",
//             redirect:"/payment"
//         });

//     } catch(err){
//         console.log("REGISTER ERROR:", err);
//         return res.json({
//             success:false,
//             message:err.message
//         });
//     }
// });

// /* ================= SUCCESS PAGE ================= */
// app.get("/payment-success", (req, res) => {
//     res.send("🎉 Registration Complete");
// });

// /* ================= ADMIN LOGIN ================= */
// const ADMIN_ID = "admin";
// const ADMIN_PASS = "12345";

// app.get("/admin-login", (req, res) => {
//     res.render("admin-login");
// });

// app.post("/admin-login", (req, res) => {
//     const { username, password } = req.body;

//     if (username === ADMIN_ID && password === ADMIN_PASS) {
//         req.session.isAdmin = true;
//         return res.redirect("/admin");
//     }

//     res.send("❌ Wrong Login");
// });

// function isAdmin(req, res, next) {
//     if (req.session.isAdmin) return next();
//     res.redirect("/admin-login");
// }

// /* ================= ADMIN PANEL ================= */
// app.get("/admin", isAdmin, (req, res) => {
//     res.render("admin");
// });

// app.get("/api/students", isAdmin, async (req, res) => {
//     const data = await Student.find();
//     res.json(data);
// });

// app.put("/api/student/:id", isAdmin, async (req, res) => {
//     await Student.findByIdAndUpdate(req.params.id, req.body);
//     res.json({ message: "Updated" });
// });

// app.delete("/api/student/:id", isAdmin, async (req, res) => {
//     await Student.findByIdAndDelete(req.params.id);
//     res.json({ message: "Deleted" });
// });

// /* ================= RAZORPAY ================= */
// const Razorpay = require("razorpay");

// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET
// });

// app.post("/create-order", async (req, res) => {
//     try {
//         const order = await razorpay.orders.create({
//             amount: 299 * 100,
//             currency: "INR",
//             receipt: "order_rcpt"
//         });

//         res.json({ success: true, order });

//     } catch (err) {
//         res.json({ success: false });
//     }
// });

// /* ================= SERVER ================= */
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log("🚀 Server running on " + PORT);
// });

// /* ================= 404 ================= */
// app.use((req, res) => {
//     res.status(404).send("❌ 404 Page Not Found");
// });



require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const nodemailer = require("nodemailer");
const multer = require("multer");
const Razorpay = require("razorpay");

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(
    path.join(__dirname, "public")
));

/* ================= SESSION ================= */

app.use(session({

    secret:
    process.env.SESSION_SECRET || "secret",

    resave: false,

    saveUninitialized: false
}));

/* ================= VIEW ENGINE ================= */

app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);

/* ================= DB ================= */

mongoose.connect(process.env.MONGO_URL)

.then(() =>
    console.log("✅ MongoDB Connected")
)

.catch(err =>
    console.log(err)
);

/* ================= MODEL ================= */

const Student =
require("./models/student");


/* ================= OTP MODEL ================= */

const otpSchema =
new mongoose.Schema({

    email: String,

    otp: String,

    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300
    }
});

const OTP =
mongoose.model("OTP", otpSchema);

/* ================= MULTER ================= */

const storage =
multer.diskStorage({

    destination: (req, file, cb) => {

        cb(
            null,
            "public/uploads"
        );
    },

    filename: (req, file, cb) => {

        cb(
            null,
            Date.now() +
            "-" +
            file.originalname
        );
    }
});

const upload =
multer({ storage });

/* ================= EMAIL ================= */

const transporter =
nodemailer.createTransport({

    host: "smtp.gmail.com",

    port: 465,

    secure: true,

    auth: {

        user:
        process.env.EMAIL_USER,

        pass:
        process.env.EMAIL_PASS
    }
});

/* ================= RAZORPAY ================= */

const razorpay =
new Razorpay({

    key_id:
    process.env.RAZORPAY_KEY_ID,

    key_secret:
    process.env.RAZORPAY_KEY_SECRET
});

/* ================= ROUTES ================= */

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/student", (req, res) => {
    res.render("student-register");
});

app.get("/payment-success", (req, res) => {

    res.send(
        "🎉 Registration Complete"
    );
});

/* ================= SEND OTP ================= */

app.post("/send-otp", async (req, res) => {

    try {

        const { email } = req.body;

        const otp =
        Math.floor(
            100000 +
            Math.random() * 900000
        ).toString();

        await OTP.deleteMany({ email });

        await OTP.create({
            email,
            otp
        });

        await transporter.sendMail({

            from:
            process.env.EMAIL_USER,

            to: email,

            subject:
            "OTP Verification",

            html:
            `<h1>Your OTP: ${otp}</h1>`
        });

        res.json({

            success: true,

            message: "OTP Sent"
        });

    } catch (err) {

        console.log(err);

        res.json({

            success: false,

            message: "OTP Failed"
        });
    }
});

/* ================= VERIFY OTP ================= */

app.post("/verify-otp", async (req, res) => {

    try {

        const { email, otp } =
        req.body;

        const data =
        await OTP.findOne({
            email,
            otp
        });

        if (!data) {

            return res.json({

                success: false,

                message:
                "Invalid OTP"
            });
        }

        req.session.verifiedEmail =
        email;

        res.json({

            success: true,

            message:
            "OTP Verified"
        });

    } catch (err) {

        console.log(err);

        res.json({

            success: false,

            message:
            "Verification Failed"
        });
    }
});

/* ================= CREATE ORDER ================= */

app.post("/create-order", async (req, res) => {

    try {

        const options = {

            amount: 299 * 100,

            currency: "INR",

            receipt:
            "receipt_" + Date.now()
        };

        const order =
        await razorpay.orders.create(
            options
        );

        res.json({

            success: true,

            id: order.id,

            amount: order.amount,

            currency: order.currency
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message:
            "Order Failed"
        });
    }
});

/* ================= REGISTER STUDENT ================= */

app.post(
    "/student-register",

    upload.single("photo"),

    async (req, res) => {

        try {

            console.log(
                "BODY:",
                req.body
            );

            console.log(
                "FILE:",
                req.file
            );

            const {

                name,
                father,
                dob,
                className,
                phone,
                email,
                password,
                paymentId,
                orderId

            } = req.body;

            /* ================= CHECK ================= */

            if (
                !name ||
                !email ||
                !paymentId
            ) {

                return res.json({

                    success: false,

                    message:
                    "Payment Required"
                });
            }

            /* ================= PHOTO ================= */

            const photo =
            req.file
            ? "/uploads/" +
              req.file.filename
            : "";

            /* ================= SAVE ================= */

            await Student.create({

                name,
                father,
                dob,
                className,
                phone,
                email,
                password,

                photo,

                paymentId,

                orderId
            });

            return res.json({

                success: true,

                message:
                "Registration Successful",

                redirect:
                "/payment-success"
            });

        } catch (err) {

            console.log(
                "REGISTER ERROR:",
                err
            );

            return res.json({

                success: false,

                message:
                err.message
            });
        }
    }
);

/* ================= ADMIN LOGIN ================= */

const ADMIN_ID = "admin";

const ADMIN_PASS = "12345";

app.get("/admin-login", (req, res) => {

    res.render("admin-login");
});

app.post("/admin-login", (req, res) => {

    const {
        username,
        password
    } = req.body;

    if (
        username === ADMIN_ID &&
        password === ADMIN_PASS
    ) {

        req.session.isAdmin =
        true;

        return res.redirect(
            "/admin"
        );
    }

    res.send("❌ Wrong Login");
});

/* ================= ADMIN AUTH ================= */

function isAdmin(
    req,
    res,
    next
) {

    if (req.session.isAdmin) {

        return next();
    }

    res.redirect("/admin-login");
}

/* ================= ADMIN PANEL ================= */

app.get(
    "/admin",
    isAdmin,
    (req, res) => {

        res.render("admin");
    }
);

app.get(
    "/api/students",
    isAdmin,

    async (req, res) => {

        const data =
        await Student.find();

        res.json(data);
    }
);

app.put(
    "/api/student/:id",

    isAdmin,

    async (req, res) => {

        await Student.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        res.json({
            message: "Updated"
        });
    }
);

app.delete(
    "/api/student/:id",

    isAdmin,

    async (req, res) => {

        await Student.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: "Deleted"
        });
    }
);

app.get("/api/hero", async (req, res) => {

    try {

        const hero =
        await Hero.findOne();

        res.json(hero);

    } catch (err) {

        res.status(500).json({

            success:false,

            message:"Hero Load Failed"
        });
    }
});
/* ================= HERO API ================= */

app.get("/add-hero", async (req, res) => {

    await Hero.deleteMany();

    await Hero.create({

        title: "GLOBAL SERVICES",

        desc: "Digital Services Platform",

        logoURL: "/images/logo.png",

        bannerURL: "/images/bgs.png"

    });

    res.send("✅ Hero Added");
});

app.get("/api/hero", async (req, res) => {

    try {

        const hero = await Hero.findOne();

        res.json(hero);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: "Hero Load Failed"
        });
    }
});

/* ================= SERVER ================= */

const PORT =
process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        "🚀 Server Running On " + PORT
    );
});

/* ================= 404 ================= */

app.use((req, res) => {

    res.status(404).send(
        "❌ 404 Page Not Found"
    );
});