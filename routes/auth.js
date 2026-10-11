const express = require("express");
const router = express.Router();

const StudentLogin = require("../pages/studentLogin");

router.get("/student-login", (req, res) => {
    res.send(StudentLogin());
});


module.exports = router;
