// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");

// const Admin = require("../models/modelsAdmin");
// const ChangePassword = require("../views/ChangePassword");

// // Change Password Page
// router.get("/", (req, res) => {
//     res.send(ChangePassword());
// });

// // Change Password Submit
// router.post("/", async (req, res) => {
//     try {
//         const { oldPassword, newPassword, confirmPassword } = req.body;

//         if (!oldPassword || !newPassword || !confirmPassword) {
//             return res.send("All fields are required.");
//         }

//         if (newPassword !== confirmPassword) {
//             return res.send("Passwords do not match.");
//         }

//         const admin = await Admin.findOne({ username: "admin" });

//         if (!admin) {
//             return res.send("Admin not found.");
//         }

//         const match = await bcrypt.compare(oldPassword, admin.password);

//         if (!match) {
//             return res.send("Old Password is incorrect.");
//         }

//         admin.password = await bcrypt.hash(newPassword, 10);
//         await admin.save();

//         res.send(`
//             <script>
//                 alert("Password Changed Successfully");
//                 window.location="/admin";
//             </script>
//         `);

//     } catch (err) {
//         console.error(err);
//         res.status(500).send(err.message);
//     }
// });

// module.exports = router;





const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const Admin = require("../models/modelsAdmin");
const ChangePassword = require("../views/ChangePassword");


// ==========================================
// CHANGE PASSWORD PAGE
// ==========================================

router.get("/", (req, res) => {

    res.send(ChangePassword());

});


// ==========================================
// CHANGE PASSWORD SUBMIT
// ==========================================

router.post("/", async (req, res) => {

    try {

        const body = req.body || {};

        const {
            oldPassword,
            newPassword,
            confirmPassword
        } = body;


        // All fields required
        if (
            !oldPassword ||
            !newPassword ||
            !confirmPassword
        ) {

            return res.send(`
                <script>
                    alert("Please fill all fields");
                    history.back();
                </script>
            `);
        }


        // Minimum 6 characters
        if (newPassword.length < 6) {

            return res.send(`
                <script>
                    alert("New Password must be at least 6 characters");
                    history.back();
                </script>
            `);
        }


        // Confirm password check
        if (newPassword !== confirmPassword) {

            return res.send(`
                <script>
                    alert("New Password and Confirm Password do not match");
                    history.back();
                </script>
            `);
        }


        // Find admin
        const admin = await Admin.findOne({
            username: "admin"
        });


        if (!admin) {

            return res.send(`
                <script>
                    alert("Admin not found");
                    history.back();
                </script>
            `);
        }


        // Check old password
        const match = await bcrypt.compare(
            oldPassword,
            admin.password
        );


        if (!match) {

            return res.send(`
                <script>
                    alert("Old Password is incorrect");
                    history.back();
                </script>
            `);
        }


        // Hash new password
        const hashedPassword = await bcrypt.hash(
            newPassword,
            10
        );


        // Save password
        admin.password = hashedPassword;

        await admin.save();


        // Success
        return res.send(`
            <script>

                alert("Password Changed Successfully");

                window.location.href="/admin";

            </script>
        `);


    } catch (err) {

        console.error(
            "CHANGE PASSWORD ERROR:",
            err
        );

        return res.status(500).send(
            "Password Change Failed: " +
            err.message
        );
    }

});


module.exports = router;
