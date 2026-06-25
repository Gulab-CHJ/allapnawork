const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// About
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "page", "about.html"));
});

// Learning
app.get("/learning", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "page", "learning.html"));
});

// Shop
app.get("/shop", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "page", "shop.html"));
});

// Shop Dashboard
app.get("/shop-dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "page", "shop-dashboard.html"));
});

// Admin Login
app.get("/admin-login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "page", "admin-login.html"));
});

// Doctor Login
app.get("/dr-login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "page", "dr-login.html"));
});

// Doctor Signup
app.get("/doctor-signup", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "page", "doctor-signup.html"));
});

// Customers
app.get("/customers", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "page", "customers.html"));
});

// Orders
app.get("/orders", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "page", "orders.html"));
});

// Products
app.get("/all-products", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "page", "all-products.html"));
});

// Add Product
app.get("/add-product", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "page", "add-product.html"));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});