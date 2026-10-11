const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI || process.env.MONGO_URL;

mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err.message));
