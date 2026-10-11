// const bcrypt = require("bcrypt");
// const Admin = require("../models/Admin");

// const AdminLogin = require("../pages/adminLogin");
// const AdminDashboard = require("../pages/dashboard");

// async function login(req, res) {
//     try {
//         const { username, password } = req.body;

//         const admin = await Admin.findOne({ username });

//         if (!admin) {
//             return res.send(AdminLogin("Username Not Found"));
//         }

//         const match = await bcrypt.compare(password, admin.password);

//         if (!match) {
//             return res.send(AdminLogin("Wrong Password"));
//         }

//         return res.send(AdminDashboard());

//     } catch (err) {
//         console.error(err);
//         res.status(500).send(err.message);
//     }
// }

// module.exports = { login };

const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");

const AdminLogin = require("../pages/adminLogin");
const AdminDashboard = require("../pages/dashboard");

const Doctor = require("../models/Doctor");
const Student = require("../models/Student");
const Service = require("../models/Service");
const Banner = require("../models/Banner");


async function login(req, res) {
    try {
        const { username, password } = req.body;

        const admin = await Admin.findOne({ username });

        if (!admin) {
            return res.send(AdminLogin("Username Not Found"));
        }

        const match = await bcrypt.compare(password, admin.password);

        if (!match) {
            return res.send(AdminLogin("Wrong Password"));
        }

        req.session.adminId = admin._id;


        // Dashboard counts
        const doctorCount = await Doctor.countDocuments();
        const studentCount = await Student.countDocuments();
        const serviceCount = await Service.countDocuments();
        const bannerCount = await Banner.countDocuments();


        const data = {
            doctorCount,
            studentCount,
            serviceCount,
            bannerCount
        };


        console.log("=== LOGIN DASHBOARD DATA ===");
        console.log(data);


        return res.send(AdminDashboard(data));


    } catch (err) {

        console.error(err);
        res.status(500).send(err.message);

    }
}


module.exports = { login };
