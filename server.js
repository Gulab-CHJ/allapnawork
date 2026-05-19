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
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


/* ================= MONGODB ================= */

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));


/* ================= MODELS ================= */

const otpSchema = new mongoose.Schema({
    email:String,
    otp:String,
    createdAt:{
        type:Date,
        default:Date.now,
        expires:300
    }
});

const OTP = mongoose.model("OTP",otpSchema);


const studentSchema = new mongoose.Schema({
    name:String,
    father:String,
    dob:String,
    className:String,
    email:String
});

const Student = mongoose.model("Student",studentSchema);


/* ================= NODEMAILER ================= */

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
});


/* ================= FRONTEND ================= */

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});


/* ================= SEND OTP ================= */

app.post("/send-otp",async(req,res)=>{

    try{

        const {email} = req.body;

        const otp = Math.floor(100000 + Math.random()*900000).toString();

        await OTP.deleteMany({email});

        await OTP.create({
            email,
            otp
        });

        await transporter.sendMail({
            from:process.env.EMAIL_USER,
            to:email,
            subject:"Your OTP Code",
            html:`
                <h2>Your OTP is:</h2>
                <h1>${otp}</h1>
                <p>Valid for 5 minutes</p>
            `
        });

        res.json({
            success:true,
            message:"OTP Sent Successfully"
        });

    }catch(err){

        console.log(err);

        res.json({
            success:false,
            message:"OTP Send Failed"
        });
    }

});


/* ================= VERIFY OTP ================= */

app.post("/verify-otp",async(req,res)=>{

    try{

        const {email,otp} = req.body;

        const data = await OTP.findOne({email,otp});

        if(!data){

            return res.json({
                success:false,
                message:"Invalid OTP"
            });
        }

        res.json({
            success:true,
            message:"OTP Verified"
        });

    }catch(err){

        console.log(err);

        res.json({
            success:false,
            message:"Verification Failed"
        });

    }

});


/* ================= REGISTER ================= */

app.post("/student-register",async(req,res)=>{

    try{

        await Student.create(req.body);

        res.json({
            success:true,
            message:"Student Registered Successfully"
        });

    }catch(err){

        console.log(err);

        res.json({
            success:false,
            message:"Registration Failed"
        });

    }

});


/* ================= START ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server Running On Port",PORT);
});











// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Server Running"));

// app.listen(3000);