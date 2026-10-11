require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URL);

async function createAdmin() {

    const hash = await bcrypt.hash("123456", 10);

    await Admin.create({
        username: "admin",
        password: hash
    });

    console.log("✅ Admin Created");

    process.exit();

}

createAdmin();
