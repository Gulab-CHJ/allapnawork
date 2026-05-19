require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");

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

/* ================= MODEL ================= */
const Student = require("./models/student");

/* ================= ROUTES ================= */

/* HOME */
app.get("/", (req, res) => {
    res.render("index");
});

/* STUDENT REGISTER PAGE */
app.get("/student", (req, res) => {
    res.render("student-register");
});

/* EMAIL VERIFY PAGE (FOR EMAIL OTP SYSTEM) */
app.get("/verify", (req, res) => {
    res.render("verify");
});

/* REGISTER */
app.post("/student-register", async (req, res) => {
    try {

        const {
            name = "",
            father = "",
            dob = "",
            className = "",
            phone = "",
            password = ""
        } = req.body;

        /* CLEAN PHONE */
        const phoneStr = String(phone).replace(/\D/g, "");

        if (phoneStr.length !== 10) {
            return res.status(400).send("❌ Wrong Number");
        }

        /* SAFE DOB */
        const dobPart = dob ? dob.replace(/-/g, "") : "000000";

        /* AUTO USERNAME */
        const username =
            name.trim().replace(/\s+/g, "").toLowerCase() + dobPart;

        /* SAVE STUDENT */
        await Student.create({
            name: name.trim(),
            father: father.trim(),
            dob,
            className,
            phone: phoneStr,
            password,
            username
        });

        return res.redirect("/payment");

    } catch (err) {
        console.log("REGISTER ERROR:", err);
        return res.status(500).send("❌ Register Error");
    }
});

/* PAYMENT PAGE */
app.get("/payment", (req, res) => {
    res.render("payment");
});

/* 404 */
app.use((req, res) => {
    res.status(404).send("❌ 404 Page Not Found");
});

/* ================= START SERVER ================= */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("🚀 Server Running on port " + PORT);
});
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Server Running"));

// app.listen(3000);