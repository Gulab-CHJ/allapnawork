const express = require("express");

const router = express.Router();

const Student = require("../models/Student");

const checkLogin = require("../middleware/auth");

/* ================= HOME ================= */

router.get("/", async (req, res) => {

    try {

        const students = await Student.find().sort({ createdAt: -1 });

        res.render("index", { students });

    } catch (err) {

        console.log(err.message);

        res.send("Home Error");
    }
});

/* ================= LOGIN ================= */

router.get("/login", (req, res) => {

    res.render("login");
});

router.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (username === "admin" && password === "123") {

        req.session.user = username;

        return res.redirect("/dashboard");
    }

    res.send("❌ Invalid Login");
});

/* ================= DASHBOARD ================= */

router.get("/dashboard", checkLogin, async (req, res) => {

    try {

        const students = await Student.find().sort({ createdAt: -1 });

        res.render("dashboard", { students });

    } catch (err) {

        console.log(err.message);

        res.send("Dashboard Error");
    }
});

/* ================= ADD STUDENT ================= */

router.post("/add-student", checkLogin, async (req, res) => {

    try {

        const { name, course, phone } = req.body;

        await Student.create({
            name,
            course,
            phone
        });

        res.redirect("/dashboard");

    } catch (err) {

        console.log(err.message);

        res.send("Add Student Error");
    }
});

/* ================= DELETE STUDENT ================= */

router.get("/delete-student/:id", checkLogin, async (req, res) => {

    try {

        await Student.findByIdAndDelete(req.params.id);

        res.redirect("/dashboard");

    } catch (err) {

        console.log(err.message);

        res.send("Delete Error");
    }
});

module.exports = router;