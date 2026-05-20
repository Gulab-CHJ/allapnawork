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



require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const nodemailer = require("nodemailer");

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

/* ================= SESSION ================= */

app.use(session({
    secret: process.env.SESSION_SECRET || "defaultsecret",
    resave: false,
    saveUninitialized: false
}));

/* ================= VIEW ENGINE ================= */

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

/* ================= DATABASE ================= */

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ Mongo Error:", err));

/* ================= MODELS ================= */

const Student = require("./models/student");

const otpSchema = new mongoose.Schema({

    email: String,

    otp: String,

    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300
    }

});

const OTP = mongoose.model("OTP", otpSchema);

/* ================= NODEMAILER ================= */


const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",

    port: 465,

    secure: true,

    auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS

    }

});

transporter.verify((error, success) => {

    if(error){

        console.log("MAIL ERROR =>", error);

    }else{

        console.log("✅ MAIL SERVER READY");

    }

});
/* ================= ROUTES ================= */

/* HOME */

app.get("/", (req, res) => {

    res.render("index");

});

/* STUDENT PAGE */

app.get("/student", (req, res) => {

    res.render("student-register");

});

/* VERIFY PAGE */

app.get("/verify", (req, res) => {

    res.render("verify");

});

/* PAYMENT PAGE */

app.get("/payment", (req, res) => {

    res.render("payment");

});

/* ================= SEND OTP ================= */

app.post("/send-otp", async (req, res) => {

    try {

        const { email } = req.body;

        if (!email) {

            return res.json({
                success: false,
                message: "Email Required"
            });

        }

        const otp =
            Math.floor(100000 + Math.random() * 900000).toString();

        await OTP.deleteMany({ email });

        await OTP.create({
            email,
            otp
        });

        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: email,

            subject: "Your OTP Code",

            html: `
                <div style="font-family:Arial;padding:20px;">
                    <h2>Email Verification</h2>

                    <h1 style="letter-spacing:5px;">
                        ${otp}
                    </h1>

                    <p>OTP valid for 5 minutes.</p>
                </div>
            `
        });

        res.json({
            success: true,
            message: "OTP Sent Successfully"
        });

    } catch (err) {

        console.log("OTP ERROR:", err);

        res.json({
            success: false,
            message: "OTP Send Failed"
        });

    }

});

/* ================= VERIFY OTP ================= */

app.post("/verify-otp", async (req, res) => {

    try {

        const { email, otp } = req.body;

        const data = await OTP.findOne({ email, otp });

        if (!data) {

            return res.json({
                success: false,
                message: "Invalid OTP"
            });

        }

        req.session.verifiedEmail = email;

        res.json({
            success: true,
            message: "OTP Verified"
        });

    } catch (err) {

        console.log("VERIFY ERROR:", err);

        res.json({
            success: false,
            message: "Verification Failed"
        });

    }

});

/* ================= REGISTER ================= */
app.post("/student-register", async (req, res) => {

    try {

        const {
            name = "",
            father = "",
            dob = "",
            className = "",
            phone = "",
            password = "",
            email = ""
        } = req.body;

        if (req.session.verifiedEmail !== email) {

            return res.json({
                success:false,
                message:"Verify Email First"
            });

        }

        const phoneStr =
        String(phone).replace(/\D/g,"");

        if(phoneStr.length !== 10){

            return res.json({
                success:false,
                message:"Wrong Number"
            });

        }

        const dobPart =
        dob ? dob.replace(/-/g,"") : "000000";

        const username =
        name.trim()
        .replace(/\s+/g,"")
        .toLowerCase() + dobPart;

        await Student.create({

            name:name.trim(),

            father:father.trim(),

            dob,

            className,

            phone:phoneStr,

            email,

            password,

            username

        });

        req.session.verifiedEmail = null;

        return res.json({

            success:true,

            message:"Registration Successful",

            redirect:"/payment"

        });

    } catch(err){

        console.log(err);

        return res.json({

            success:false,

            message:"Register Error"

        });

    }

});

/* ================= 404 ================= */

app.use((req, res) => {

    res.status(404).send("❌ 404 Page Not Found");

});

/* ================= RAZORPAY ================= */


const Razorpay = require("razorpay");

const razorpay = new Razorpay({

    key_id: process.env.RAZORPAY_KEY_ID,

    key_secret: process.env.RAZORPAY_KEY_SECRET

});


/* ================= CREATE ORDER ================= */

app.post("/create-order", async (req, res) => {

    try {

        const order = await razorpay.orders.create({

            amount: 29900,

            currency: "INR",

            receipt: "receipt_order"

        });

        res.json({

            success: true,

            order

        });

    } catch (err) {

        console.log(err);

        res.json({

            success: false,

            message: "Order Failed"

        });

    }

});


/* ================= START SERVER ================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("🚀 Server Running On Port " + PORT);

});











// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Server Running"));

// app.listen(3000);