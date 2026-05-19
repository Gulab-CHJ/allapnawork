const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {

    res.render("index");
});

// student
app.get("/student", (req, res) => {

    res.render("student-register");
});

const Student = require("./models/Student");

app.post("/student-register", async (req, res) => {

    try{

        const {
            name,
            father,
            dob,
            className,
            phone,
            password
        } = req.body;

        /* ================= AUTO USERNAME ================= */

        const dobPart =
        dob.replaceAll("-", "");

        const username =
        name.replace(/\s/g,"").toLowerCase()
        + dobPart;

        /* ================= PHONE CHECK ================= */

        if(phone.length !== 10){

            return res.send("❌ Wrong Number");
        }

        /* ================= SAVE ================= */

        await Student.create({

            name,
            father,
            dob,
            className,
            phone,
            password,
            username
        });

        /* ================= PAYMENT PAGE ================= */

        res.redirect("/payment");

    }catch(err){

        console.log(err);

        res.send("Register Error");
    }
});

// Payment Page Route
app.get("/payment", (req, res) => {
    res.render("payment");
});

app.listen(3000, () => {

    console.log("Server Running");
});