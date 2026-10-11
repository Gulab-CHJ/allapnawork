function DoctorCart(doctor) {

    const escapeHTML = (value) => {

        if (value === null || value === undefined) {
            return "";
        }

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };


    const doctorName =
        doctor && doctor.name
            ? String(doctor.name)
                .replace(/^Dr\.\s*/i, "")
            : "Doctor";


    return `<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>Doctor Cart - GLOBAL HEALTHCARE</title>


<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f5f9ff;
    color: #172033;
    min-height: 100vh;
}

.header {
    background: linear-gradient(135deg, #005bea, #00c6fb);
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 8px 25px rgba(0,0,0,.15);
}

.logo {
    color: white;
    font-size: 22px;
    font-weight: 800;
}

.nav {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.nav a {
    color: white;
    text-decoration: none;
    padding: 9px 12px;
    border-radius: 9px;
    font-size: 14px;
    font-weight: 700;
}

.nav a:hover {
    background: rgba(255,255,255,.18);
}


/* CART COUNT */

.cart-count {
    display: none;
    align-items: center;
    justify-content: center;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    margin-left: 4px;
    border-radius: 20px;
    background: #dc2626;
    color: white;
    font-size: 11px;
    font-weight: 800;
}


/* MAIN */

.main {
    max-width: 1400px;
    margin: auto;
    padding: 25px 20px 50px;
}

.page-title {
    background: white;
    border-radius: 20px;
    padding: 28px;
    margin-bottom: 25px;
    box-shadow: 0 10px 30px rgba(0,0,0,.07);
}

.doctor-label {
    display: inline-block;
    background: #e0f2fe;
    color: #0369a1;
    padding: 7px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 10px;
}

.page-title h1 {
    font-size: 30px;
    margin-bottom: 8px;
}

.page-title h1 span {
    color: #2563eb;
}

.page-title p {
    color: #64748b;
}

.cart-wrapper {
    display: grid;
    grid-template-columns: minmax(0,1fr) 350px;
    gap: 22px;
    align-items: start;
}

.cart-box,
.summary {
    background: white;
    border-radius: 20px;
    padding: 22px;
    box-shadow: 0 10px 30px rgba(0,0,0,.07);
}

.cart-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding-bottom: 18px;
    border-bottom: 1px solid #e2e8f0;
    margin-bottom: 18px;
}

.cart-heading h2 {
    font-size: 20px;
}

.clear-btn {
    border: none;
    background: #fee2e2;
    color: #dc2626;
    padding: 10px 14px;
    border-radius: 9px;
    font-weight: 700;
    cursor: pointer;
}

.cart-items {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.cart-item {
    display: grid;
    grid-template-columns: 100px minmax(0,1fr) auto;
    gap: 18px;
    align-items: center;
    border: 1px solid #e2e8f0;
    border-radius: 15px;
    padding: 15px;
}

.cart-item-image {
    width: 100px;
    height: 100px;
    border-radius: 12px;
    background: #f1f5f9;
    overflow: hidden;
}

.cart-item-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 7px;
}

.cart-item-info {
    min-width: 0;
}

.cart-item-info h3 {
    font-size: 18px;
    margin-bottom: 7px;
    word-break: break-word;
}

.cart-item-info p {
    color: #94a3b8;
    font-size: 12px;
    margin-bottom: 9px;
}

.item-price {
    color: #16a34a;
    font-size: 18px;
    font-weight: 800;
}

.item-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
}

.qty-box {
    display: flex;
    align-items: center;
    border: 1px solid #dbe3ef;
    border-radius: 9px;
    overflow: hidden;
}

.qty-btn {
    width: 34px;
    height: 34px;
    border: none;
    background: #eff6ff;
    color: #2563eb;
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
}

.qty-value {
    min-width: 40px;
    text-align: center;
    font-weight: 800;
}

.item-total {
    font-size: 17px;
}

.remove-btn {
    border: none;
    background: none;
    color: #dc2626;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
}

.summary {
    position: sticky;
    top: 90px;
}

.summary h2 {
    margin-bottom: 20px;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #eef2f7;
    color: #64748b;
}

.summary-total {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 10px;
    font-weight: 800;
    font-size: 18px;
}

.total-price {
    color: #16a34a;
    font-size: 24px;
}

.checkout-btn {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 12px;
    margin-top: 15px;
    background: linear-gradient(135deg,#2563eb,#4f46e5);
    color: white;
    font-weight: 800;
    cursor: pointer;
}

.checkout-btn:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
}

.continue-btn {
    display: block;
    text-align: center;
    margin-top: 12px;
    padding: 11px;
    border: 1px solid #dbe3ef;
    border-radius: 10px;
    text-decoration: none;
    color: #2563eb;
    font-weight: 700;
}

.empty-cart {
    text-align: center;
    padding: 60px 20px;
}

.empty-cart-icon {
    font-size: 55px;
    margin-bottom: 15px;
}

.empty-cart h3 {
    font-size: 22px;
    margin-bottom: 10px;
}

.empty-cart p {
    color: #64748b;
    margin-bottom: 20px;
}

.shop-btn {
    display: inline-block;
    padding: 12px 20px;
    background: linear-gradient(135deg,#2563eb,#4f46e5);
    color: white;
    text-decoration: none;
    border-radius: 10px;
    font-weight: 700;
}


/* MOBILE */

@media(max-width: 950px) {

    .cart-wrapper {
        grid-template-columns: 1fr;
    }

    .summary {
        position: static;
    }
}


@media(max-width: 650px) {

    .header {
        flex-direction: column;
        gap: 10px;
    }

    .nav {
        justify-content: center;
    }

    .main {
        padding: 15px 10px 35px;
    }

    .cart-item {
        grid-template-columns: 75px minmax(0,1fr);
    }

    .cart-item-image {
        width: 75px;
        height: 75px;
    }

    .item-actions {
        grid-column: 1 / -1;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-top: 10px;
        border-top: 1px solid #eef2f7;
    }
}

</style>

</head>


<body>


<header class="header">

    <div class="logo">
        🩺 GLOBAL HEALTHCARE
    </div>


    <nav class="nav">

        <a href="/doctor/dashboard">
            🏠 Home
        </a>

        <a href="/doctor/orders">
            📦 Orders
        </a>

        <a href="/doctor/cart">
            🛒 Cart
            <span
                id="headerCartCount"
                class="cart-count"
            >0</span>
        </a>

        <a href="/admin/doctor/logout">
            🚪 Logout
        </a>

    </nav>

</header>


<main class="main">


<section class="page-title">

    <span class="doctor-label">
        👨‍⚕️ DOCTOR PORTAL
    </span>

    <h1>
        🛒 Doctor <span>Cart</span>
    </h1>

    <p>
        Welcome Dr. ${escapeHTML(doctorName)}
    </p>

</section>


<div class="cart-wrapper">


<section class="cart-box">

    <div class="cart-heading">

        <h2>
            🛍️ Your Products
        </h2>

        <button
            type="button"
            class="clear-btn"
            onclick="clearCart()"
        >
            Clear Cart
        </button>

    </div>


    <div
        id="cartItems"
        class="cart-items"
    ></div>

</section>


<aside class="summary">

    <h2>
        Order Summary
    </h2>


    <div class="summary-row">

        <span>Total Items</span>

        <strong id="cartCount">
            0
        </strong>

    </div>


    <div class="summary-row">

        <span>Subtotal</span>

        <strong>
            ₹<span id="subtotal">0.00</span>
        </strong>

    </div>


    <div class="summary-row">

        <span>Delivery</span>

        <strong>
            ₹<span id="delivery">0.00</span>
        </strong>

    </div>


    <div class="summary-total">

        <span>Total</span>

        <span class="total-price">
            ₹<span id="total">0.00</span>
        </span>

    </div>


    <button
        type="button"
        id="checkoutBtn"
        class="checkout-btn"
        disabled
        onclick="checkout()"
    >
        Proceed to Checkout
    </button>


    <a
        href="/doctor/dashboard"
        class="continue-btn"
    >
        ← Continue Shopping
    </a>

</aside>


</div>

</main>

<script src="/js/cart.js"></script>


</body>

</html>`;
}


module.exports = DoctorCart;
