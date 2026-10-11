

const express = require("express");
const router = express.Router();

const path = require("path");
const fs = require("fs");
const multer = require("multer");

const VegetableProduct =
    require("../models/VegetableProduct");

const VegetableOrder =
    require("../models/VegetableOrder");

const ShopSetting =
    require("../models/ShopSetting");


// ======================================================
// UPLOAD DIRECTORY
// ======================================================

const uploadDirectory =
    path.join(
        __dirname,
        "../uploads/sabji"
    );

if (
    !fs.existsSync(
        uploadDirectory
    )
) {

    fs.mkdirSync(
        uploadDirectory,
        {
            recursive: true
        }
    );
}


// ======================================================
// MULTER IMAGE UPLOAD
// ======================================================

const storage =
    multer.diskStorage({

        destination: function(
            req,
            file,
            cb
        ) {

            cb(
                null,
                uploadDirectory
            );
        },

        filename: function(
            req,
            file,
            cb
        ) {

            const extension =
                path.extname(
                    file.originalname
                ).toLowerCase();

            const fileName =
                Date.now() +
                "-" +
                Math.round(
                    Math.random() *
                    1e9
                ) +
                extension;

            cb(
                null,
                fileName
            );
        }
    });


const upload =
    multer({

        storage: storage,

        limits: {
            fileSize:
                5 *
                1024 *
                1024
        },

        fileFilter: function(
            req,
            file,
            cb
        ) {

            const allowedTypes = [
                "image/jpeg",
                "image/jpg",
                "image/png",
                "image/webp"
            ];

            if (
                !allowedTypes.includes(
                    file.mimetype
                )
            ) {

                return cb(
                    new Error(
                        "Only JPG, PNG and WEBP images are allowed."
                    )
                );
            }

            cb(
                null,
                true
            );
        }
    });


// ======================================================
// GET SHOP SETTING
// ======================================================

async function getShopSetting() {

    let setting =
        await ShopSetting.findOne();

    if (!setting) {

        setting =
            await ShopSetting.create({

                shopName:
                    "GLOBAL MINI SABJI",

                isOpen:
                    false,

                deliveryCharge:
                    0,

                minimumOrder:
                    0,

                deliveryRadiusKm:
                    2
            });
    }

    return setting;
}


// ======================================================
// SAFE HTML
// ======================================================

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );
}


// ======================================================
// SAFE NUMBER
// ======================================================

function safeNumber(
    value,
    defaultValue = 0
) {

    const number =
        Number(value);

    return Number.isFinite(
        number
    )
        ? number
        : defaultValue;
}


// ======================================================
// VALID GPS COORDINATES
// ======================================================

function validCoordinates(
    latitude,
    longitude
) {

    if (
        latitude === null ||
        latitude === undefined ||
        latitude === "" ||

        longitude === null ||
        longitude === undefined ||
        longitude === ""
    ) {
        return false;
    }

    const latitudeNumber =
        Number(latitude);

    const longitudeNumber =
        Number(longitude);

    return (
        Number.isFinite(
            latitudeNumber
        ) &&

        Number.isFinite(
            longitudeNumber
        ) &&

        latitudeNumber >= -90 &&
        latitudeNumber <= 90 &&

        longitudeNumber >= -180 &&
        longitudeNumber <= 180
    );
}


// ======================================================
// CALCULATE DISTANCE IN KM
// ======================================================

function calculateDistanceKm(
    latitude1,
    longitude1,
    latitude2,
    longitude2
) {

    const earthRadiusKm =
        6371;

    const toRadians =
        function(value) {

            return (
                value *
                Math.PI /
                180
            );
        };

    const latitudeDifference =
        toRadians(
            latitude2 -
            latitude1
        );

    const longitudeDifference =
        toRadians(
            longitude2 -
            longitude1
        );

    const calculation =

        Math.sin(
            latitudeDifference /
            2
        ) ** 2 +

        Math.cos(
            toRadians(
                latitude1
            )
        ) *

        Math.cos(
            toRadians(
                latitude2
            )
        ) *

        Math.sin(
            longitudeDifference /
            2
        ) ** 2;

    const centralAngle =
        2 *
        Math.atan2(

            Math.sqrt(
                calculation
            ),

            Math.sqrt(
                1 -
                calculation
            )
        );

    return (
        earthRadiusKm *
        centralAngle
    );
}


// ======================================================
// GOOGLE MAPS DIRECTION URL
// ======================================================

function createDirectionUrl(
    latitude,
    longitude
) {

    return (

        "https://www.google.com/maps/dir/" +

        "?api=1&destination=" +

        encodeURIComponent(
            latitude +
            "," +
            longitude
        )
    );
}


// ======================================================
// CUSTOMER SHOP PAGE
// GET /sabji
// ======================================================

router.get(
    "/sabji",
    async (req, res) => {

        try {

            const setting =
                await getShopSetting();

            const products =
                await VegetableProduct

                    .find({
                        isActive:
                            true
                    })

                    .sort({
                        createdAt:
                            -1
                    })

                    .lean();


            const productCards =
                products.length

                    ? products.map(
                        function(product) {

                            const stock =
                                Math.max(

                                    0,

                                    safeNumber(
                                        product.stock,
                                        0
                                    )
                                );

                            const price =
                                Math.max(

                                    0,

                                    safeNumber(
                                        product.price,
                                        0
                                    )
                                );

                            const mrp =
                                Math.max(

                                    0,

                                    safeNumber(
                                        product.mrp,
                                        0
                                    )
                                );

                            const disabled =
                                !setting.isOpen ||
                                stock <= 0;

                            const buttonText =
                                !setting.isOpen

                                    ? "SHOP CLOSED"

                                    : stock <= 0

                                        ? "OUT OF STOCK"

                                        : "ADD TO CART";


                            const discount =
                                mrp > price &&
                                mrp > 0

                                    ? Math.round(
                                        (
                                            (mrp - price) /
                                            mrp
                                        ) *
                                        100
                                    )

                                    : 0;


                            return `
<article
    class="product-card ${
        disabled
            ? "disabled-card"
            : ""
    }"
>

    <div class="image-area">

        ${
            product.image
                ? `
                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                >
                `
                : `
                <div class="no-image">
                    🥬
                </div>
                `
        }

        ${
            discount > 0
                ? `
                <span class="discount-badge">
                    ${discount}% OFF
                </span>
                `
                : ""
        }

        ${
            !setting.isOpen
                ? `
                <span class="closed-badge">
                    SHOP CLOSED
                </span>
                `
                : ""
        }

    </div>


    <div class="product-info">

        <div class="category">
            ${escapeHTML(product.category || "Vegetable")}
        </div>

        <h3>
            ${escapeHTML(product.name)}
        </h3>

        <div class="unit">
            ${escapeHTML(product.unit || "")}
        </div>


        <div class="price-row">

            <strong>
                ₹${price.toFixed(2)}
            </strong>

            ${
                mrp > price
                    ? `
                    <del>
                        ₹${mrp.toFixed(2)}
                    </del>
                    `
                    : ""
            }

        </div>


        <div class="stock">
            ${
                stock > 0
                    ? `✅ ${stock} In Stock`
                    : "❌ Out of Stock"
            }
        </div>


        <button
            type="button"
            class="cart-btn"
            data-product-id="${product._id}"
            data-product-name="${escapeHTML(product.name)}"
            data-product-price="${price}"
            data-product-unit="${escapeHTML(product.unit || "")}"
            ${disabled ? "disabled" : ""}
        >
            ${buttonText}
        </button>

    </div>

</article>
                            `;
                        }
                    ).join("")

                    : `
                    <div class="empty">
                        अभी कोई सब्जी उपलब्ध नहीं है।
                    </div>
                    `;


            return res.send(`
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
    ${escapeHTML(setting.shopName)}
</title>




<link rel="manifest" href="/manifest.json">

<link
    rel="apple-touch-icon"
    href="/images/hhgs-icon-192.png"
>

<meta name="theme-color" content="#16a34a">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">


<style>

*{
    box-sizing:border-box;
}

body{
    margin:0;
    font-family:Arial,sans-serif;
    background:#f1f5f9;
    color:#0f172a;
}

.install-app-button{
    padding:9px 13px;
    border:0;
    border-radius:9px;
    background:#2563eb;
    color:#ffffff;
    font-size:11px;
    font-weight:900;
    cursor:pointer;
    box-shadow:
        0 5px 15px
        rgba(37,99,235,.25);
}

.install-app-button:active{
    transform:scale(.97);
}

.install-app-button[hidden]{
    display:none;
}

@media(max-width:650px){

    .header-inner{
        flex-wrap:wrap;
    }

    .install-app-button{
        width:100%;
        padding:10px;
    }
}

.header{
    position:sticky;
    top:0;
    z-index:30;
    padding:15px;
    background:white;
    box-shadow:
        0 4px 18px
        rgba(15,23,42,.10);
}

.header-inner{
    max-width:1150px;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:12px;
}

.brand{
    font-size:20px;
    font-weight:900;
    color:#166534;
}

.shop-status{
    padding:8px 12px;
    border-radius:30px;
    font-size:12px;
    font-weight:900;
}

.shop-status.open{
    background:#dcfce7;
    color:#166534;
}

.shop-status.closed{
    background:#fee2e2;
    color:#991b1b;
}

.hero{
    padding:28px 18px;
    text-align:center;
    color:white;
    background:
        linear-gradient(
            135deg,
            #065f46,
            #16a34a
        );
}

.hero h1{
    margin:0 0 8px;
}

.hero p{
    margin:0;
    opacity:.9;
}

.products-grid{
    width:100%;
    max-width:1150px;
    margin:auto;
    padding:18px;
    display:grid;
    grid-template-columns:
        repeat(
            4,
            minmax(0,1fr)
        );
    gap:15px;
}

.product-card{
    overflow:hidden;
    border-radius:16px;
    background:white;
    box-shadow:
        0 8px 25px
        rgba(15,23,42,.08);
}

.disabled-card{
    opacity:.65;
}

.image-area{
    position:relative;
    width:100%;
    height:180px;
    background:#f8fafc;
}

.image-area img{
    width:100%;
    height:100%;
    object-fit:cover;
}

.no-image{
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:55px;
}

.discount-badge,
.closed-badge{
    position:absolute;
    top:9px;
    padding:6px 8px;
    border-radius:7px;
    color:white;
    font-size:10px;
    font-weight:900;
}

.discount-badge{
    left:9px;
    background:#dc2626;
}

.closed-badge{
    right:9px;
    background:#64748b;
}

.product-info{
    padding:14px;
}

.category{
    color:#16a34a;
    font-size:11px;
    font-weight:800;
}

.product-info h3{
    min-height:40px;
    margin:7px 0;
    font-size:16px;
}

.unit{
    color:#64748b;
    font-size:12px;
}

.price-row{
    display:flex;
    align-items:center;
    gap:8px;
    margin-top:10px;
}

.price-row strong{
    color:#15803d;
    font-size:19px;
}

.price-row del{
    color:#94a3b8;
    font-size:12px;
}

.stock{
    margin:9px 0;
    color:#475569;
    font-size:11px;
    font-weight:700;
}

.cart-btn{
    width:100%;
    padding:11px;
    border:0;
    border-radius:9px;
    background:#16a34a;
    color:white;
    font-weight:900;
    cursor:pointer;
}

.cart-btn:disabled{
    background:#94a3b8;
    cursor:not-allowed;
}

.empty{
    grid-column:1/-1;
    padding:50px 20px;
    border-radius:15px;
    background:white;
    color:#64748b;
    text-align:center;
}

.bottom-cart{
    display:none;
    position:fixed;
    left:50%;
    bottom:15px;
    z-index:50;
    width:calc(100% - 30px);
    max-width:520px;
    padding:12px 15px;
    border-radius:14px;
    transform:translateX(-50%);
    background:#0f172a;
    color:white;
    align-items:center;
    justify-content:space-between;
    box-shadow:
        0 12px 35px
        rgba(15,23,42,.35);
}

.bottom-cart.show{
    display:flex;
}

.bottom-cart button{
    padding:10px 14px;
    border:0;
    border-radius:9px;
    background:#22c55e;
    color:white;
    font-weight:900;
    cursor:pointer;
}

@media(max-width:900px){

    .products-grid{
        grid-template-columns:
            repeat(
                3,
                minmax(0,1fr)
            );
    }
}

@media(max-width:650px){

    body{
        padding-bottom:80px;
    }

    .products-grid{
        padding:10px;
        grid-template-columns:
            repeat(
                2,
                minmax(0,1fr)
            );
        gap:9px;
    }

    .image-area{
        height:130px;
    }

    .product-info{
        padding:10px;
    }

    .product-info h3{
        min-height:34px;
        font-size:13px;
    }

    .price-row strong{
        font-size:16px;
    }

    .cart-btn{
        padding:9px 5px;
        font-size:11px;
    }
}

</style>

</head>


<body>


<header class="header">

    <div class="header-inner">

        <div class="brand">
            🥬 ${escapeHTML(setting.shopName)}
        </div>

        <div
            class="shop-status ${
                setting.isOpen
                    ? "open"
                    : "closed"
            }"
        >
            ${
                setting.isOpen
                    ? "● SHOP OPEN"
                    : "● SHOP CLOSED"
            }
        </div>

                <button
            type="button"
            id="installAppButton"
            class="install-app-button"
            hidden
        >
            ⬇ INSTALL APP
        </button>

    </div>

</header>


<section class="hero">

    <h1>
        Fresh Vegetables 🥕
    </h1>

    <p>
        2 KM के अंदर Fresh Sabji घर तक Order करें।
    </p>

</section>


<main class="products-grid">

    ${productCards}

</main>


<div
    class="bottom-cart"
    id="bottomCart"
>

    <div>
        🛒
        <strong id="cartCount">
            0
        </strong>
        Items
    </div>

    <button
        type="button"
        onclick="openCart()"
    >
        VIEW CART
    </button>

</div>


<script>

const SHOP_OPEN =
    ${setting.isOpen ? "true" : "false"};


// ======================================================
// GET CART
// ======================================================

function getCart(){

    try{

        const cart =
            JSON.parse(
                localStorage.getItem(
                    "vegetableCart"
                )
            );

        return Array.isArray(cart)
            ? cart
            : [];

    }catch(error){

        return [];
    }
}


// ======================================================
// SAVE CART
// ======================================================

function saveCart(cart){

    localStorage.setItem(
        "vegetableCart",
        JSON.stringify(cart)
    );

    updateCartCount();
}


// ======================================================
// ADD PRODUCT TO CART
// ======================================================

function addToCart(
    productId,
    productName,
    productPrice,
    productUnit
){

    if(!SHOP_OPEN){

        alert(
            "Shop अभी Closed है।"
        );

        return;
    }


    const cart =
        getCart();


    const existingProduct =
        cart.find(
            function(item){

                return (
                    String(
                        item.productId
                    ) ===
                    String(
                        productId
                    )
                );
            }
        );


    if(existingProduct){

        existingProduct.quantity =
            Number(
                existingProduct.quantity ||
                1
            ) +
            1;

    }else{

        cart.push({

            productId:
                productId,

            name:
                productName,

            price:
                Number(
                    productPrice
                ),

            unit:
                productUnit,

            quantity:
                1
        });
    }


    saveCart(
        cart
    );


    alert(
        productName +
        " Cart में Add हो गया।"
    );
}


// ======================================================
// PRODUCT BUTTON EVENTS
// ======================================================

document.addEventListener(
    "click",
    function(event){

        const button =
            event.target.closest(
                ".cart-btn"
            );


        if(
            !button ||
            button.disabled
        ){
            return;
        }


        addToCart(

            button.dataset.productId,

            button.dataset.productName,

            button.dataset.productPrice,

            button.dataset.productUnit
        );
    }
);


// ======================================================
// UPDATE CART COUNT
// ======================================================

function updateCartCount(){

    const cart =
        getCart();


    const totalItems =
        cart.reduce(
            function(total,item){

                return (
                    total +
                    Number(
                        item.quantity ||
                        0
                    )
                );
            },

            0
        );


    document.getElementById(
        "cartCount"
    ).textContent =
        totalItems;


    document.getElementById(
        "bottomCart"
    ).classList.toggle(
        "show",
        totalItems > 0
    );
}


// ======================================================
// OPEN CART
// ======================================================

function openCart(){

    window.location.href =
        "/sabji/cart";
}


updateCartCount();


// ======================================================
// SABJI APP INSTALL
// ======================================================

let installPromptEvent =
    null;

const installAppButton =
    document.getElementById(
        "installAppButton"
    );


function sabjiAppInstalled(){

    return (

        window.matchMedia(
            "(display-mode: standalone)"
        ).matches ||

        window.navigator.standalone ===
            true
    );
}


function isIOSDevice(){

    return /iphone|ipad|ipod/i
        .test(
            window.navigator.userAgent
        );
}


// Chrome/Edge Install Event
window.addEventListener(
    "beforeinstallprompt",
    function(event){

        event.preventDefault();

        installPromptEvent =
            event;


        if(
            installAppButton &&
            !sabjiAppInstalled()
        ){

            installAppButton.hidden =
                false;
        }
    }
);


// iPhone में custom instructions button दिखाएँ
if(
    installAppButton &&
    isIOSDevice() &&
    !sabjiAppInstalled()
){

    installAppButton.hidden =
        false;

    installAppButton.textContent =
        "⬇ ADD APP TO HOME SCREEN";
}


// Browser prompt देर से मिले तो fallback button
setTimeout(
    function(){

        if(
            installAppButton &&
            !sabjiAppInstalled()
        ){

            installAppButton.hidden =
                false;
        }
    },

    2500
);


if(installAppButton){

    installAppButton.addEventListener(
        "click",
        async function(){

            if(sabjiAppInstalled()){

                alert(
                    "GLOBAL MINI SABJI App पहले से Install है।"
                );

                installAppButton.hidden =
                    true;

                return;
            }


            // Android Chrome/Edge
            if(installPromptEvent){

                installAppButton.disabled =
                    true;

                installAppButton.textContent =
                    "INSTALLING...";


                installPromptEvent.prompt();


                const installResult =
                    await installPromptEvent
                        .userChoice;


                if(
                    installResult.outcome ===
                    "accepted"
                ){

                    installAppButton.textContent =
                        "✅ APP INSTALLED";

                }else{

                    installAppButton.disabled =
                        false;

                    installAppButton.textContent =
                        "⬇ INSTALL APP";
                }


                installPromptEvent =
                    null;

                return;
            }


            // iPhone / iPad
            if(isIOSDevice()){

                alert(
                    "iPhone में App Install करने के लिए:\\n\\n" +
                    "1. Website को Safari में खोलें।\\n" +
                    "2. नीचे Share button दबाएँ।\\n" +
                    "3. Add to Home Screen चुनें।\\n" +
                    "4. ऊपर Add दबाएँ।"
                );

                return;
            }


            // Browser install event उपलब्ध नहीं
            alert(
                "Browser Menu (⋮) खोलें और Install App या Add to Home Screen दबाएँ।"
            );
        }
    );
}


// Install Successfully Complete
window.addEventListener(
    "appinstalled",
    function(){

        installPromptEvent =
            null;


        if(installAppButton){

            installAppButton.hidden =
                true;
        }


        console.log(
            "GLOBAL MINI SABJI APP INSTALLED"
        );
    }
);


// पहले से installed है
if(
    installAppButton &&
    sabjiAppInstalled()
){

    installAppButton.hidden =
        true;
}


// ======================================================
// SERVICE WORKER REGISTRATION
// ======================================================

if(
    "serviceWorker" in navigator
){

    window.addEventListener(
        "load",
        function(){

            navigator.serviceWorker
                .register(
                    "/sabji-service-worker.js",
                    {
                        scope:
                            "/sabji"
                    }
                )

                .then(
                    function(registration){

                        console.log(
                            "Sabji App Service Worker:",
                            registration.scope
                        );
                    }
                )

                .catch(
                    function(error){

                        console.error(
                            "Service Worker Error:",
                            error
                        );
                    }
                );
        }
    );
}

</script>


</body>

</html>
            `);

        } catch (error) {

            console.error(
                "CUSTOMER SABJI PAGE ERROR:",
                error
            );

            return res
                .status(500)
                .send(
                    "Sabji Shop page load नहीं हो सका।"
                );
        }
    }
);


// ======================================================
// FINAL PART 2 यहां से नीचे लगेगा
// ======================================================

// ======================================================
// CUSTOMER CART PAGE
// GET /sabji/cart
// ======================================================

router.get(
    "/sabji/cart",
    async (req, res) => {

        try {

            const setting =
                await getShopSetting();


            const locationAvailable =
                validCoordinates(

                    setting
                        .shopLocation
                        ?.latitude,

                    setting
                        .shopLocation
                        ?.longitude
                );


            const shopLatitude =
                locationAvailable

                    ? Number(
                        setting
                            .shopLocation
                            .latitude
                    )

                    : null;


            const shopLongitude =
                locationAvailable

                    ? Number(
                        setting
                            .shopLocation
                            .longitude
                    )

                    : null;


            const deliveryRadiusKm =
                safeNumber(

                    setting
                        .deliveryRadiusKm,

                    2
                );


            return res.send(`
<!DOCTYPE html>

<html lang="en">

<head>
<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
    HHGS - Human Healthy Global Services
</title>

<link
    rel="apple-touch-icon"
    href="/images/GS%20LOGO.png"
>

<link
    rel="icon"
    type="image/png"
    href="/images/GS%20LOGO.png"
>

<meta
    name="theme-color"
    content="#16a34a"
>

<meta
    name="mobile-web-app-capable"
    content="yes"
>

<meta
    name="apple-mobile-web-app-capable"
    content="yes"
>

<meta
    name="apple-mobile-web-app-status-bar-style"
    content="default"
>

<meta
    name="apple-mobile-web-app-title"
    content="HHGS"
>

<link
    rel="icon"
    type="image/png"
    href="/images/hhgs-icon-192.png"
>

<link
    rel="apple-touch-icon"
    href="/images/hhgs-icon-192.png"
>
<style>

*{
    box-sizing:border-box;
}

body{
    margin:0;
    padding:0;
    font-family:Arial,sans-serif;
    background:#f1f5f9;
    color:#0f172a;
}

.header{
    position:sticky;
    top:0;
    z-index:20;
    padding:15px;
    color:white;
    background:
        linear-gradient(
            135deg,
            #065f46,
            #16a34a
        );
    box-shadow:
        0 5px 20px
        rgba(15,23,42,.15);
}

.header-inner{
    width:100%;
    max-width:650px;
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
}

.header h1{
    margin:0;
    font-size:21px;
}

.back-btn{
    padding:9px 12px;
    border-radius:9px;
    background:white;
    color:#166534;
    text-decoration:none;
    font-weight:900;
}

.container{
    width:100%;
    max-width:650px;
    margin:auto;
    padding:18px;
}

.card{
    padding:18px;
    margin-bottom:15px;
    border-radius:17px;
    background:white;
    box-shadow:
        0 8px 25px
        rgba(15,23,42,.08);
}

.card h2,
.card h3{
    margin-top:0;
}

.shop-closed{
    padding:14px;
    margin-bottom:15px;
    border-radius:11px;
    background:#fee2e2;
    color:#991b1b;
    text-align:center;
    font-weight:900;
}

.cart-item{
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:12px;
    padding:13px 0;
    border-bottom:
        1px solid #e2e8f0;
}

.cart-item:last-child{
    border-bottom:0;
}

.item-name{
    margin-bottom:4px;
    font-weight:900;
}

.item-unit{
    color:#64748b;
    font-size:12px;
}

.item-price{
    margin-top:5px;
    color:#15803d;
    font-size:13px;
    font-weight:800;
}

.quantity-box{
    display:flex;
    align-items:center;
    gap:7px;
}

.quantity-btn{
    width:32px;
    height:32px;
    padding:0;
    border:0;
    border-radius:8px;
    background:#dcfce7;
    color:#166534;
    font-size:18px;
    font-weight:900;
    cursor:pointer;
}

.quantity-number{
    min-width:24px;
    text-align:center;
    font-weight:900;
}

.remove-btn{
    padding:0;
    margin-top:7px;
    border:0;
    background:transparent;
    color:#dc2626;
    font-size:11px;
    font-weight:900;
    cursor:pointer;
}

.cart-total{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-top:15px;
    font-size:20px;
    font-weight:900;
}

.cart-total strong{
    color:#15803d;
}

.empty-cart{
    padding:35px 15px;
    text-align:center;
    color:#64748b;
}

.empty-cart a{
    color:#15803d;
    font-weight:900;
}

label{
    display:block;
    margin:0 0 5px;
    color:#334155;
    font-size:13px;
    font-weight:800;
}

input,
textarea{
    width:100%;
    padding:12px;
    margin-bottom:13px;
    border:
        1px solid #cbd5e1;
    border-radius:9px;
    outline:none;
    font-family:Arial,sans-serif;
    font-size:15px;
}

input:focus,
textarea:focus{
    border-color:#16a34a;
    box-shadow:
        0 0 0 3px
        rgba(22,163,74,.12);
}

textarea{
    min-height:90px;
    resize:vertical;
}

.location-status{
    padding:13px;
    margin-bottom:12px;
    border-radius:11px;
    background:#fef3c7;
    color:#92400e;
    line-height:1.6;
    font-size:14px;
    font-weight:800;
}

.location-status.success{
    background:#dcfce7;
    color:#166534;
}

.location-status.error{
    background:#fee2e2;
    color:#991b1b;
}

.location-btn{
    width:100%;
    padding:12px;
    margin-bottom:12px;
    border:0;
    border-radius:9px;
    background:#f59e0b;
    color:white;
    font-weight:900;
    cursor:pointer;
}

.location-btn:disabled{
    opacity:.65;
    cursor:not-allowed;
}

.direction-btn{
    display:none;
    padding:13px;
    margin-bottom:12px;
    border-radius:10px;
    background:#2563eb;
    color:white;
    text-align:center;
    text-decoration:none;
    font-weight:900;
}

.order-btn{
    width:100%;
    padding:15px;
    border:0;
    border-radius:11px;
    background:#16a34a;
    color:white;
    font-size:16px;
    font-weight:900;
    cursor:pointer;
}

.order-btn:disabled{
    background:#94a3b8;
    cursor:not-allowed;
}

/* =====================================
   HHGS APP SPLASH SCREEN
===================================== */

#appSplashScreen {
    position: fixed;
    inset: 0;
    z-index: 999999;

    display: flex;
    align-items: center;
    justify-content: center;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #eef7ff
        );

    transition:
        opacity 0.5s ease,
        visibility 0.5s ease;
}

#appSplashScreen.hide {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}

.splash-content {
    width: 100%;
    padding: 25px;
    text-align: center;
}

.splash-logo {
    width: 85px;
    height: 85px;

    display: block;
    margin: 0 auto 18px;

    object-fit: contain;
    border-radius: 50%;

    background: #ffffff;

    box-shadow:
        0 8px 28px
        rgba(15, 23, 42, 0.16);
}

.splash-content h1 {
    margin: 0 0 7px;

    color: #123c77;

    font-family:
        Arial,
        sans-serif;

    font-size: 25px;
    font-weight: 800;
}

.splash-content p {
    margin: 0 0 25px;

    color: #64748b;

    font-family:
        Arial,
        sans-serif;

    font-size: 13px;
}

.splash-content small {
    display: block;
    margin-top: 20px;

    color: #64748b;

    font-family:
        Arial,
        sans-serif;

    font-size: 12px;
    font-weight: 600;
}

.splash-loader {
    width: 42px;
    height: 4px;

    margin: auto;

    overflow: hidden;
    position: relative;

    border-radius: 20px;
    background: #dbeafe;
}

.splash-loader::after {
    content: "";

    width: 50%;
    height: 100%;

    position: absolute;
    top: 0;
    left: -50%;

    border-radius: 20px;
    background: #16a34a;

    animation:
        splashLoading 1s
        infinite ease-in-out;
}

@keyframes splashLoading {

    from {
        left: -50%;
    }

    to {
        left: 100%;
    }

}

</style>

</head>


<body>

<!-- HHGS APP SPLASH SCREEN -->

<div id="appSplashScreen">

    <div class="splash-content">

        <img
            src="/images/GS%20LOGO.png"
            alt="HHGS Logo"
            class="splash-logo"
        >

        <h1>Welcome to HHGS</h1>

        <p>
            Human Healthy Global Services
        </p>

        <div class="splash-loader"></div>

        <small>
            Developed by Gulab
        </small>

    </div>

</div>


<header class="header">

    <div class="header-inner">

        <h1>
            🛒 Sabji Cart
        </h1>

        <a
            href="/sabji"
            class="back-btn"
        >
            ← SHOP
        </a>

    </div>

</header>


<main class="container">


    ${
        !setting.isOpen
            ? `
            <div class="shop-closed">
                🔴 SHOP CLOSED — अभी Order स्वीकार नहीं हो रहा।
            </div>
            `
            : ""
    }


    <section class="card">

        <h2>
            🥬 Selected Products
        </h2>

        <div id="cartItems">
            Cart Loading...
        </div>

    </section>


    <section class="card">

        <h3>
            👤 Delivery Details
        </h3>


        <label for="customerName">
            Customer Name
        </label>

        <input
            type="text"
            id="customerName"
            placeholder="अपना पूरा नाम लिखें"
            autocomplete="name"
        >


        <label for="customerMobile">
            Mobile Number
        </label>

        <input
            type="tel"
            id="customerMobile"
            placeholder="10 digit Mobile Number"
            maxlength="15"
            autocomplete="tel"
        >


        <label for="customerAddress">
            Delivery Address
        </label>

        <textarea
            id="customerAddress"
            placeholder="House, Road, Area और Landmark लिखें"
            autocomplete="street-address"
        ></textarea>


        <div
            class="location-status"
            id="locationStatus"
        >
            📍 आपकी Delivery Location check हो रही है...
        </div>


        <button
            type="button"
            class="location-btn"
            id="checkLocationButton"
            onclick="checkCustomerLocation()"
        >
            📍 CHECK MY LOCATION
        </button>


        <a
            href="#"
            target="_blank"
            class="direction-btn"
            id="goToShopLink"
        >
            📍 PLEASE GO TO THIS LOCATION
        </a>


        <button
            type="button"
            class="order-btn"
            id="placeOrderButton"
            onclick="placeOrder()"
            disabled
        >
            ${
                setting.isOpen
                    ? "CHECKING LOCATION..."
                    : "SHOP CLOSED"
            }
        </button>

    </section>


</main>


<script>

// ======================================================
// SERVER SHOP SETTINGS
// ======================================================

const SHOP_OPEN =
    ${setting.isOpen ? "true" : "false"};

const SHOP_LATITUDE =
    ${
        shopLatitude !== null
            ? shopLatitude
            : "null"
    };

const SHOP_LONGITUDE =
    ${
        shopLongitude !== null
            ? shopLongitude
            : "null"
    };

const DELIVERY_RADIUS_KM =
    ${deliveryRadiusKm};


// ======================================================
// CUSTOMER LOCATION STATE
// ======================================================

let customerLatitude =
    null;

let customerLongitude =
    null;

let customerAccuracy =
    null;

let customerDistanceKm =
    null;

let locationAllowed =
    false;


// ======================================================
// SAFE BROWSER HTML
// ======================================================

function escapeBrowserHTML(value){

    return String(value || "")

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );
}


// ======================================================
// GET CART
// ======================================================

function getCart(){

    try{

        const savedCart =
            JSON.parse(
                localStorage.getItem(
                    "vegetableCart"
                )
            );

        return Array.isArray(
            savedCart
        )
            ? savedCart
            : [];

    }catch(error){

        return [];
    }
}


// ======================================================
// SAVE CART
// ======================================================

function saveCart(cart){

    localStorage.setItem(
        "vegetableCart",
        JSON.stringify(cart)
    );

    renderCart();
}


// ======================================================
// CHANGE PRODUCT QUANTITY
// ======================================================

function changeQuantity(
    productId,
    change
){

    const cart =
        getCart();


    const product =
        cart.find(
            function(item){

                return (
                    String(
                        item.productId
                    ) ===
                    String(
                        productId
                    )
                );
            }
        );


    if(!product){
        return;
    }


    product.quantity =
        Number(
            product.quantity ||
            1
        ) +
        Number(change);


    if(
        product.quantity <=
        0
    ){

        removeCartItem(
            productId
        );

        return;
    }


    saveCart(
        cart
    );
}


// ======================================================
// REMOVE PRODUCT FROM CART
// ======================================================

function removeCartItem(
    productId
){

    const cart =
        getCart().filter(
            function(item){

                return (
                    String(
                        item.productId
                    ) !==
                    String(
                        productId
                    )
                );
            }
        );


    saveCart(
        cart
    );
}


// ======================================================
// RENDER CART
// ======================================================

function renderCart(){

    const cart =
        getCart();


    const cartBox =
        document.getElementById(
            "cartItems"
        );


    const orderButton =
        document.getElementById(
            "placeOrderButton"
        );


    if(!cart.length){

        cartBox.innerHTML =

            '<div class="empty-cart">' +

                '🛒 Cart खाली है।' +

                '<br><br>' +

                '<a href="/sabji">' +
                    'Sabji खरीदने के लिए वापस जाएँ' +
                '</a>' +

            '</div>';


        orderButton.disabled =
            true;

        return;
    }


    let totalAmount =
        0;


    const productsHTML =
        cart.map(
            function(item){

                const price =
                    Number(
                        item.price ||
                        0
                    );


                const quantity =
                    Math.max(

                        1,

                        Number(
                            item.quantity ||
                            1
                        )
                    );


                const amount =
                    price *
                    quantity;


                totalAmount +=
                    amount;


                const productId =
                    String(
                        item.productId ||
                        ""
                    );


                return (

                    '<div class="cart-item">' +

                        '<div>' +

                            '<div class="item-name">' +

                                escapeBrowserHTML(
                                    item.name
                                ) +

                            '</div>' +

                            '<div class="item-unit">' +

                                escapeBrowserHTML(
                                    item.unit ||
                                    ""
                                ) +

                            '</div>' +

                            '<div class="item-price">' +

                                '₹' +

                                price.toFixed(2) +

                                ' × ' +

                                quantity +

                                ' = ₹' +

                                amount.toFixed(2) +

                            '</div>' +

                            '<button ' +

                                'type="button" ' +

                                'class="remove-btn" ' +

                                'onclick="removeCartItem(\\'' +

                                    productId +

                                '\\')"' +

                            '>' +

                                '🗑 REMOVE' +

                            '</button>' +

                        '</div>' +


                        '<div class="quantity-box">' +

                            '<button ' +

                                'type="button" ' +

                                'class="quantity-btn" ' +

                                'onclick="changeQuantity(\\'' +

                                    productId +

                                '\\',-1)"' +

                            '>' +

                                '−' +

                            '</button>' +

                            '<span class="quantity-number">' +

                                quantity +

                            '</span>' +

                            '<button ' +

                                'type="button" ' +

                                'class="quantity-btn" ' +

                                'onclick="changeQuantity(\\'' +

                                    productId +

                                '\\',1)"' +

                            '>' +

                                '+' +

                            '</button>' +

                        '</div>' +

                    '</div>'
                );
            }
        ).join("");


    cartBox.innerHTML =

        productsHTML +

        '<div class="cart-total">' +

            '<span>' +
                'Cart Total' +
            '</span>' +

            '<strong>' +

                '₹' +

                totalAmount.toFixed(2) +

            '</strong>' +

        '</div>';


    if(
        SHOP_OPEN &&
        locationAllowed
    ){

        orderButton.disabled =
            false;

        orderButton.textContent =
            "PLACE ORDER";
    }
}


// ======================================================
// CALCULATE DISTANCE IN BROWSER
// ======================================================

function calculateBrowserDistanceKm(
    latitude1,
    longitude1,
    latitude2,
    longitude2
){

    const earthRadiusKm =
        6371;


    const toRadians =
        function(value){

            return (
                value *
                Math.PI /
                180
            );
        };


    const latitudeDifference =
        toRadians(
            latitude2 -
            latitude1
        );


    const longitudeDifference =
        toRadians(
            longitude2 -
            longitude1
        );


    const calculation =

        Math.sin(
            latitudeDifference /
            2
        ) ** 2 +

        Math.cos(
            toRadians(
                latitude1
            )
        ) *

        Math.cos(
            toRadians(
                latitude2
            )
        ) *

        Math.sin(
            longitudeDifference /
            2
        ) ** 2;


    return (

        earthRadiusKm *

        2 *

        Math.atan2(

            Math.sqrt(
                calculation
            ),

            Math.sqrt(
                1 -
                calculation
            )
        )
    );
}


// ======================================================
// CHECK CUSTOMER LOCATION
// ======================================================

function checkCustomerLocation(){

    const locationBox =
        document.getElementById(
            "locationStatus"
        );


    const locationButton =
        document.getElementById(
            "checkLocationButton"
        );


    const directionButton =
        document.getElementById(
            "goToShopLink"
        );


    const orderButton =
        document.getElementById(
            "placeOrderButton"
        );


    locationAllowed =
        false;

    orderButton.disabled =
        true;

    directionButton.style.display =
        "none";


    if(!SHOP_OPEN){

        locationBox.className =
            "location-status error";

        locationBox.innerHTML =
            "🔴 Shop अभी Closed है।";

        orderButton.textContent =
            "SHOP CLOSED";

        return;
    }


    if(
        SHOP_LATITUDE === null ||
        SHOP_LONGITUDE === null
    ){

        locationBox.className =
            "location-status error";

        locationBox.innerHTML =
            "❌ Shop की GPS Location save नहीं है। Admin को Shop दोबारा Open करना होगा।";

        orderButton.textContent =
            "SHOP LOCATION NOT AVAILABLE";

        return;
    }


    if(!navigator.geolocation){

        locationBox.className =
            "location-status error";

        locationBox.innerHTML =
            "❌ इस Device में GPS Location support नहीं है।";

        orderButton.textContent =
            "GPS REQUIRED";

        return;
    }


    locationButton.disabled =
        true;

    locationButton.textContent =
        "📍 CHECKING LOCATION...";


    locationBox.className =
        "location-status";

    locationBox.innerHTML =
        "📍 Browser Location permission Allow करें...";


    navigator.geolocation
        .getCurrentPosition(

            function(position){

                customerLatitude =
                    position.coords.latitude;


                customerLongitude =
                    position.coords.longitude;


                customerAccuracy =
                    position.coords.accuracy;


                customerDistanceKm =
                    calculateBrowserDistanceKm(

                        Number(
                            SHOP_LATITUDE
                        ),

                        Number(
                            SHOP_LONGITUDE
                        ),

                        customerLatitude,

                        customerLongitude
                    );


                locationButton.disabled =
                    false;


                locationButton.textContent =
                    "📍 CHECK LOCATION AGAIN";


                if(
                    customerDistanceKm <=
                    DELIVERY_RADIUS_KM
                ){

                    locationAllowed =
                        true;


                    locationBox.className =
                        "location-status success";


                    locationBox.innerHTML =

                        "✅ DELIVERY AVAILABLE" +

                        "<br>" +

                        "आप Shop से " +

                        customerDistanceKm
                            .toFixed(2) +

                        " KM दूर हैं।";


                    if(
                        getCart().length
                    ){

                        orderButton.disabled =
                            false;


                        orderButton.textContent =
                            "PLACE ORDER";
                    }

                }else{

                    locationAllowed =
                        false;


                    locationBox.className =
                        "location-status error";


                    locationBox.innerHTML =

                        "❌ DELIVERY AVAILABLE नहीं है।" +

                        "<br>" +

                        "आप Shop से " +

                        customerDistanceKm
                            .toFixed(2) +

                        " KM दूर हैं।" +

                        "<br>" +

                        "Order करने के लिए " +

                        DELIVERY_RADIUS_KM +

                        " KM radius के अंदर आएँ।";


                    orderButton.disabled =
                        true;


                    orderButton.textContent =
                        "OUTSIDE DELIVERY AREA";


                    directionButton.href =

                        "https://www.google.com/maps/dir/" +

                        "?api=1&destination=" +

                        SHOP_LATITUDE +

                        "," +

                        SHOP_LONGITUDE;


                    directionButton.style.display =
                        "block";
                }
            },


            function(error){

                console.error(
                    "CUSTOMER LOCATION ERROR:",
                    error
                );


                locationButton.disabled =
                    false;


                locationButton.textContent =
                    "📍 TRY LOCATION AGAIN";


                locationAllowed =
                    false;


                locationBox.className =
                    "location-status error";


                locationBox.innerHTML =
                    "❌ Order करने के लिए Browser Location permission Allow करें।";


                orderButton.disabled =
                    true;


                orderButton.textContent =
                    "ALLOW LOCATION";
            },


            {
                enableHighAccuracy:
                    true,

                timeout:
                    20000,

                maximumAge:
                    0
            }
        );
}


// ======================================================
// PLACE ORDER
// ======================================================

async function placeOrder(){

    if(!SHOP_OPEN){

        alert(
            "Shop अभी Closed है।"
        );

        return;
    }


    if(!locationAllowed){

        alert(
            "Order के लिए " +
            DELIVERY_RADIUS_KM +
            " KM Delivery Area के अंदर होना जरूरी है।"
        );

        checkCustomerLocation();

        return;
    }


    const cart =
        getCart();


    if(!cart.length){

        alert(
            "Cart खाली है।"
        );

        return;
    }


    const customerName =
        document.getElementById(
            "customerName"
        ).value.trim();


    const mobile =
        document.getElementById(
            "customerMobile"
        ).value.trim();


    const address =
        document.getElementById(
            "customerAddress"
        ).value.trim();


    if(
        !customerName ||
        !mobile ||
        !address
    ){

        alert(
            "Name, Mobile और Address पूरा भरें।"
        );

        return;
    }


    const mobileDigits =
        mobile.replace(
            /\\D/g,
            ""
        );


    if(
        mobileDigits.length <
        10
    ){

        alert(
            "सही Mobile Number लिखें।"
        );

        return;
    }


    const orderButton =
        document.getElementById(
            "placeOrderButton"
        );


    orderButton.disabled =
        true;


    orderButton.textContent =
        "PLACING ORDER...";


    try{

        const response =
            await fetch(

                "/sabji/order",

                {
                    method:
                        "POST",

                    headers: {

                        "Content-Type":
                            "application/json"
                    },

                    credentials:
                        "same-origin",

                    body:
                        JSON.stringify({

                            customerName:
                                customerName,

                            mobile:
                                mobile,

                            address:
                                address,

                            customerLatitude:
                                customerLatitude,

                            customerLongitude:
                                customerLongitude,

                            customerAccuracy:
                                customerAccuracy,

                            items:
                                cart
                        })
                }
            );


        const result =
            await response.json();


        if(
            !response.ok ||
            !result.success
        ){

            if(
                result.outsideDeliveryArea &&
                result.directionUrl
            ){

                directionButton =
                    document.getElementById(
                        "goToShopLink"
                    );


                directionButton.href =
                    result.directionUrl;


                directionButton.style.display =
                    "block";
            }


            throw new Error(

                result.message ||
                "Order failed"
            );
        }


        localStorage.removeItem(
            "vegetableCart"
        );


        alert(

            "✅ Order Successfully Placed!" +

            "\\nOrder ID: #" +

            String(
                result.orderNumber ||
                result.orderId ||
                ""
            )
                .slice(-6)
                .toUpperCase()
        );


        window.location.href =
            "/sabji";

    }catch(error){

        console.error(
            "PLACE ORDER ERROR:",
            error
        );


        alert(
            error.message ||
            "Order place नहीं हो सका।"
        );


        orderButton.disabled =
            false;


        orderButton.textContent =
            "PLACE ORDER";
    }
}


// ======================================================
// START CART PAGE
// ======================================================

renderCart();

checkCustomerLocation();



window.addEventListener(
    "load",
    function () {

        const splashScreen =
            document.getElementById(
                "appSplashScreen"
            );

        setTimeout(
            function () {

                if (splashScreen) {

                    splashScreen.classList.add(
                        "hide"
                    );

                    setTimeout(
                        function () {

                            splashScreen.remove();

                        },
                        600
                    );

                }

            },
            1800
        );

    }
);

</script>


</body>

</html>
            `);

        } catch (error) {

            console.error(
                "SABJI CART PAGE ERROR:",
                error
            );

            return res
                .status(500)
                .send(
                    "Cart page load नहीं हो सका।"
                );
        }
    }
);


// ======================================================
// FINAL PART 3 यहां से नीचे लगेगा
// ======================================================

// ======================================================
// CREATE SABJI ORDER
// POST /sabji/order
// ======================================================

router.post(
    "/sabji/order",
    async (req, res) => {

        try {

            const setting =
                await getShopSetting();


            // ==================================================
            // SHOP OPEN CHECK
            // ==================================================

            if(!setting.isOpen){

                return res
                    .status(403)
                    .json({

                        success:
                            false,

                        message:
                            "Shop अभी Closed है। Order स्वीकार नहीं हो रहा।"
                    });
            }


            // ==================================================
            // REQUEST DATA
            // ==================================================

            const {

                customerName,

                mobile,

                address,

                customerLatitude,

                customerLongitude,

                customerAccuracy,

                items

            } = req.body;


            // ==================================================
            // CUSTOMER DETAILS VALIDATION
            // ==================================================

            if(
                !customerName ||
                !String(
                    customerName
                ).trim() ||

                !mobile ||
                !String(
                    mobile
                ).trim() ||

                !address ||
                !String(
                    address
                ).trim()
            ){

                return res
                    .status(400)
                    .json({

                        success:
                            false,

                        message:
                            "Customer Name, Mobile और Address पूरा भरें।"
                    });
            }


            const mobileDigits =
                String(mobile)
                    .replace(
                        /\D/g,
                        ""
                    );


            if(
                mobileDigits.length <
                10
            ){

                return res
                    .status(400)
                    .json({

                        success:
                            false,

                        message:
                            "सही Mobile Number लिखें।"
                    });
            }


            // ==================================================
            // CART VALIDATION
            // ==================================================

            if(
                !Array.isArray(
                    items
                ) ||
                !items.length
            ){

                return res
                    .status(400)
                    .json({

                        success:
                            false,

                        message:
                            "Cart खाली है।"
                    });
            }


            // ==================================================
            // SHOP LOCATION VALIDATION
            // ==================================================

            const shopLocationValid =
                validCoordinates(

                    setting
                        .shopLocation
                        ?.latitude,

                    setting
                        .shopLocation
                        ?.longitude
                );


            if(!shopLocationValid){

                return res
                    .status(400)
                    .json({

                        success:
                            false,

                        message:
                            "Shop की GPS Location save नहीं है। Admin को Shop Close करके दोबारा Open करना होगा।"
                    });
            }


            const shopLatitude =
                Number(
                    setting
                        .shopLocation
                        .latitude
                );


            const shopLongitude =
                Number(
                    setting
                        .shopLocation
                        .longitude
                );


            // ==================================================
            // CUSTOMER LOCATION VALIDATION
            // ==================================================

            const customerLocationValid =
                validCoordinates(

                    customerLatitude,

                    customerLongitude
                );


            if(!customerLocationValid){

                return res
                    .status(400)
                    .json({

                        success:
                            false,

                        message:
                            "Order करने के लिए Browser Location permission Allow करें।"
                    });
            }


            const customerLat =
                Number(
                    customerLatitude
                );


            const customerLng =
                Number(
                    customerLongitude
                );


            const accuracy =
                customerAccuracy !== null &&
                customerAccuracy !== undefined &&
                customerAccuracy !== "" &&
                Number.isFinite(
                    Number(
                        customerAccuracy
                    )
                )

                    ? Number(
                        customerAccuracy
                    )

                    : null;


            // ==================================================
            // CALCULATE DELIVERY DISTANCE
            // ==================================================

            const deliveryRadiusKm =
                safeNumber(

                    setting
                        .deliveryRadiusKm,

                    2
                );


            const distanceFromShopKm =
                calculateDistanceKm(

                    shopLatitude,

                    shopLongitude,

                    customerLat,

                    customerLng
                );


            // ==================================================
            // BLOCK OUTSIDE DELIVERY AREA
            // ==================================================

            if(
                distanceFromShopKm >
                deliveryRadiusKm
            ){

                return res
                    .status(403)
                    .json({

                        success:
                            false,

                        outsideDeliveryArea:
                            true,

                        distanceKm:
                            Number(
                                distanceFromShopKm
                                    .toFixed(2)
                            ),

                        deliveryRadiusKm:
                            deliveryRadiusKm,

                        message:

                            "आप Shop से " +

                            distanceFromShopKm
                                .toFixed(2) +

                            " KM दूर हैं। Order के लिए " +

                            deliveryRadiusKm +

                            " KM radius के अंदर आएँ।",

                        directionUrl:
                            createDirectionUrl(

                                shopLatitude,

                                shopLongitude
                            )
                    });
            }


            // ==================================================
            // VALIDATE PRODUCTS FROM DATABASE
            // ==================================================

            const finalItems =
                [];

            let subtotal =
                0;


            for(
                const cartItem of items
            ){

                const productId =
                    String(
                        cartItem.productId ||
                        ""
                    ).trim();


                if(
                    !/^[a-fA-F0-9]{24}$/
                        .test(
                            productId
                        )
                ){

                    continue;
                }


                const product =
                    await VegetableProduct
                        .findById(
                            productId
                        );


                if(
                    !product ||
                    !product.isActive
                ){

                    continue;
                }


                const availableStock =
                    Math.max(

                        0,

                        Math.floor(
                            safeNumber(
                                product.stock,
                                0
                            )
                        )
                    );


                if(
                    availableStock <=
                    0
                ){

                    continue;
                }


                let quantity =
                    Math.floor(
                        safeNumber(
                            cartItem.quantity,
                            1
                        )
                    );


                if(
                    quantity <
                    1
                ){

                    quantity =
                        1;
                }


                if(
                    quantity >
                    availableStock
                ){

                    quantity =
                        availableStock;
                }


                const price =
                    Math.max(

                        0,

                        safeNumber(
                            product.price,
                            0
                        )
                    );


                const amount =
                    Number(
                        (
                            price *
                            quantity
                        ).toFixed(2)
                    );


                subtotal +=
                    amount;


                finalItems.push({

                    productId:
                        product._id,

                    name:
                        String(
                            product.name ||
                            "Vegetable"
                        ).trim(),

                    unit:
                        String(
                            product.unit ||
                            ""
                        ).trim(),

                    price:
                        price,

                    quantity:
                        quantity,

                    amount:
                        amount
                });
            }


            if(
                !finalItems.length
            ){

                return res
                    .status(400)
                    .json({

                        success:
                            false,

                        message:
                            "Selected Products अभी available नहीं हैं।"
                    });
            }


            subtotal =
                Number(
                    subtotal.toFixed(2)
                );


            // ==================================================
            // MINIMUM ORDER
            // ==================================================

            const minimumOrder =
                Math.max(

                    0,

                    safeNumber(

                        setting
                            .minimumOrder,

                        0
                    )
                );


            if(
                subtotal <
                minimumOrder
            ){

                return res
                    .status(400)
                    .json({

                        success:
                            false,

                        message:

                            "Minimum Order ₹" +

                            minimumOrder
                                .toFixed(2) +

                            " होना चाहिए।"
                    });
            }


            // ==================================================
            // TOTAL AMOUNT
            // ==================================================

            const deliveryCharge =
                Math.max(

                    0,

                    safeNumber(

                        setting
                            .deliveryCharge,

                        0
                    )
                );


            const totalAmount =
                Number(
                    (
                        subtotal +
                        deliveryCharge
                    ).toFixed(2)
                );


            // ==================================================
            // CREATE ORDER
            // ==================================================

            const order =
                await VegetableOrder.create({

                    customerName:
                        String(
                            customerName
                        ).trim(),

                    mobile:
                        String(
                            mobile
                        ).trim(),

                    address:
                        String(
                            address
                        ).trim(),

                    customerLocation: {

                        latitude:
                            customerLat,

                        longitude:
                            customerLng,

                        accuracy:
                            accuracy
                    },

                    distanceFromShopKm:
                        Number(
                            distanceFromShopKm
                                .toFixed(2)
                        ),

                    items:
                        finalItems,

                    subtotal:
                        subtotal,

                    deliveryCharge:
                        deliveryCharge,

                    totalAmount:
                        totalAmount,

                    paymentMethod:
                        "COD",

                    status:
                        "Pending"
                });


            // ==================================================
            // REDUCE STOCK
            // ==================================================

            for(
                const item of finalItems
            ){

                await VegetableProduct
                    .findByIdAndUpdate(

                        item.productId,

                        {
                            $inc: {

                                stock:
                                    -Number(
                                        item.quantity
                                    )
                            }
                        }
                    );
            }


            // ==================================================
            // SUCCESS
            // ==================================================

            return res
                .status(201)
                .json({

                    success:
                        true,

                    message:
                        "Order Successfully Placed!",

                    orderId:
                        order._id,

                    orderNumber:
                        String(
                            order._id
                        )
                            .slice(-6)
                            .toUpperCase(),

                    distanceKm:
                        Number(
                            distanceFromShopKm
                                .toFixed(2)
                        ),

                    subtotal:
                        subtotal,

                    deliveryCharge:
                        deliveryCharge,

                    totalAmount:
                        totalAmount
                });

        }catch(error){

            console.error(
                "CREATE SABJI ORDER ERROR:",
                error
            );


            if(
                error.name ===
                "ValidationError"
            ){

                return res
                    .status(400)
                    .json({

                        success:
                            false,

                        message:
                            error.message
                    });
            }


            return res
                .status(500)
                .json({

                    success:
                        false,

                    message:
                        "Order Place नहीं हो सका। कृपया दोबारा कोशिश करें।"
                });
        }
    }
);


// ======================================================
// ADMIN SHOP STATUS PAGE
// GET /admin/sabji/shop-status
// ======================================================

router.get(
    "/admin/sabji/shop-status",
    async (req, res) => {

        try {

            const setting =
                await getShopSetting();


            const locationSaved =
                validCoordinates(

                    setting
                        .shopLocation
                        ?.latitude,

                    setting
                        .shopLocation
                        ?.longitude
                );


            return res.send(`
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
    Sabji Shop Control
</title>


<style>

*{
    box-sizing:border-box;
}

body{
    margin:0;
    padding:20px;
    font-family:Arial,sans-serif;
    background:#f1f5f9;
    color:#0f172a;
}

.card{
    width:100%;
    max-width:470px;
    margin:35px auto;
    padding:25px;
    border-radius:22px;
    background:white;
    text-align:center;
    box-shadow:
        0 15px 45px
        rgba(15,23,42,.12);
}

.logo{
    width:75px;
    height:75px;
    margin:0 auto 14px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#dcfce7;
    font-size:42px;
}

h1{
    margin:0 0 7px;
    color:#166534;
}

.subtitle{
    margin:0;
    color:#64748b;
    font-size:13px;
}

.status{
    padding:15px;
    margin:20px 0;
    border-radius:13px;
    font-size:20px;
    font-weight:900;
}

.status.open{
    background:#dcfce7;
    color:#166534;
}

.status.closed{
    background:#fee2e2;
    color:#991b1b;
}

.setting-box{
    padding:14px;
    margin-bottom:15px;
    border-radius:12px;
    background:#f8fafc;
    text-align:left;
    color:#475569;
    line-height:1.8;
    font-size:14px;
}

.toggle-btn{
    width:100%;
    padding:15px;
    border:0;
    border-radius:12px;
    color:white;
    font-size:16px;
    font-weight:900;
    cursor:pointer;
}

.open-btn{
    background:#16a34a;
}

.close-btn{
    background:#dc2626;
}

.toggle-btn:disabled{
    opacity:.65;
    cursor:not-allowed;
}

.location-message{
    padding:12px;
    margin-top:14px;
    border-radius:10px;
    background:#fef3c7;
    color:#92400e;
    font-size:13px;
    line-height:1.6;
}

.links{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:10px;
    margin-top:16px;
}

.links a{
    padding:11px;
    border-radius:9px;
    background:#e2e8f0;
    color:#0f172a;
    text-decoration:none;
    font-size:13px;
    font-weight:900;
}

</style>

</head>


<body>


<div class="card">

    <div class="logo">
        🥬
    </div>

    <h1>
        ${escapeHTML(setting.shopName)}
    </h1>

    <p class="subtitle">
        Shop और Delivery Location Control
    </p>


    <div
        class="status ${
            setting.isOpen
                ? "open"
                : "closed"
        }"
    >
        ${
            setting.isOpen
                ? "🟢 SHOP OPEN"
                : "🔴 SHOP CLOSED"
        }
    </div>


    <div class="setting-box">

        <div>
            📦 Delivery Radius:
            <strong>
                ${safeNumber(setting.deliveryRadiusKm, 2)} KM
            </strong>
        </div>

        <div>
            💵 Delivery Charge:
            <strong>
                ₹${safeNumber(setting.deliveryCharge, 0).toFixed(2)}
            </strong>
        </div>

        <div>
            🛒 Minimum Order:
            <strong>
                ₹${safeNumber(setting.minimumOrder, 0).toFixed(2)}
            </strong>
        </div>

        <div>
            📍 Shop Location:
            <strong>
                ${
                    locationSaved
                        ? "Saved ✅"
                        : "Not Saved ❌"
                }
            </strong>
        </div>

    </div>


    <form
        method="POST"
        action="/admin/sabji/toggle-shop"
        id="shopToggleForm"
    >

        <input
            type="hidden"
            name="latitude"
            id="shopLatitude"
        >

        <input
            type="hidden"
            name="longitude"
            id="shopLongitude"
        >

        <input
            type="hidden"
            name="accuracy"
            id="shopAccuracy"
        >


        <button
            type="button"
            class="toggle-btn ${
                setting.isOpen
                    ? "close-btn"
                    : "open-btn"
            }"
            id="shopToggleButton"
        >
            ${
                setting.isOpen
                    ? "🔴 CLOSE SHOP"
                    : "🟢 OPEN SHOP WITH LOCATION"
            }
        </button>

    </form>


    <div
        class="location-message"
        id="locationMessage"
    >
        ${
            setting.isOpen
                ? "✅ Shop Open है। 2 KM के अंदर Customer Order कर सकते हैं।"
                : "Shop Open करने के लिए मोबाइल की GPS Location Allow करें।"
        }
    </div>


    <div class="links">

        <a href="/admin/sabji/products">
            📦 PRODUCTS
        </a>

        <a href="/admin/sabji/orders">
            🔔 ORDERS
        </a>

    </div>

</div>


<script>

const SHOP_CURRENTLY_OPEN =
    ${setting.isOpen ? "true" : "false"};

const shopToggleButton =
    document.getElementById(
        "shopToggleButton"
    );

const shopToggleForm =
    document.getElementById(
        "shopToggleForm"
    );

const locationMessage =
    document.getElementById(
        "locationMessage"
    );


shopToggleButton.addEventListener(
    "click",
    function(){

        // Shop Close करने में GPS की जरूरत नहीं
        if(SHOP_CURRENTLY_OPEN){

            shopToggleButton.disabled =
                true;

            shopToggleButton.textContent =
                "CLOSING SHOP...";

            shopToggleForm.submit();

            return;
        }


        if(!navigator.geolocation){

            alert(
                "इस Device में GPS Location support नहीं है।"
            );

            return;
        }


        shopToggleButton.disabled =
            true;


        shopToggleButton.textContent =
            "📍 GETTING SHOP LOCATION...";


        locationMessage.textContent =
            "Browser में Location Permission Allow करें।";


        navigator.geolocation
            .getCurrentPosition(

                function(position){

                    document.getElementById(
                        "shopLatitude"
                    ).value =
                        position.coords.latitude;


                    document.getElementById(
                        "shopLongitude"
                    ).value =
                        position.coords.longitude;


                    document.getElementById(
                        "shopAccuracy"
                    ).value =
                        position.coords.accuracy;


                    locationMessage.textContent =
                        "✅ Shop Location मिल गई। Shop Open हो रही है...";


                    shopToggleButton.textContent =
                        "OPENING SHOP...";


                    shopToggleForm.submit();
                },


                function(error){

                    console.error(
                        "SHOP LOCATION ERROR:",
                        error
                    );


                    shopToggleButton.disabled =
                        false;


                    shopToggleButton.textContent =
                        "🟢 OPEN SHOP WITH LOCATION";


                    locationMessage.textContent =
                        "❌ Location नहीं मिली। Browser Settings में Location Allow करें।";


                    alert(
                        "Shop Open करने के लिए Location Permission जरूरी है।"
                    );
                },


                {
                    enableHighAccuracy:
                        true,

                    timeout:
                        20000,

                    maximumAge:
                        0
                }
            );
    }
);

</script>


</body>

</html>
            `);

        }catch(error){

            console.error(
                "SHOP STATUS PAGE ERROR:",
                error
            );


            return res
                .status(500)
                .send(
                    "Shop Status page load नहीं हो सका।"
                );
        }
    }
);


// ======================================================
// TOGGLE SHOP OPEN / CLOSED
// POST /admin/sabji/toggle-shop
// ======================================================

router.post(
    "/admin/sabji/toggle-shop",
    async (req, res) => {

        try {

            const setting =
                await getShopSetting();


            const nextShopStatus =
                !setting.isOpen;


            // Shop Open करते समय GPS save करें
            if(nextShopStatus){

                const {

                    latitude,

                    longitude,

                    accuracy

                } = req.body;


                if(
                    !validCoordinates(
                        latitude,
                        longitude
                    )
                ){

                    return res
                        .status(400)
                        .send(
                            "Shop Open करने के लिए Valid GPS Location जरूरी है।"
                        );
                }


                setting.shopLocation = {

                    latitude:
                        Number(
                            latitude
                        ),

                    longitude:
                        Number(
                            longitude
                        ),

                    accuracy:
                        accuracy !== null &&
                        accuracy !== undefined &&
                        accuracy !== "" &&
                        Number.isFinite(
                            Number(
                                accuracy
                            )
                        )

                            ? Number(
                                accuracy
                            )

                            : null,

                    updatedAt:
                        new Date()
                };


                setting.deliveryRadiusKm =
                    2;
            }


            setting.isOpen =
                nextShopStatus;


            await setting.save();


            return res.redirect(
                "/admin/sabji/shop-status"
            );

        }catch(error){

            console.error(
                "TOGGLE SHOP ERROR:",
                error
            );


            return res
                .status(500)
                .send(
                    "Shop Status Update नहीं हो सका।"
                );
        }
    }
);


// ======================================================
// FINAL PART 4 यहां से नीचे लगेगा
// ======================================================

// ======================================================
// ADMIN MANAGE SABJI PRODUCTS
// GET /admin/sabji/products
// ======================================================

router.get(
    "/admin/sabji/products",
    async (req, res) => {

        try {

            const setting =
                await getShopSetting();


            const products =
                await VegetableProduct

                    .find({})

                    .sort({
                        createdAt:
                            -1
                    })

                    .lean();


            const productRows =
                products.length

                    ? products.map(
                        function(
                            product,
                            index
                        ){

                            const price =
                                safeNumber(
                                    product.price,
                                    0
                                );


                            const mrp =
                                safeNumber(
                                    product.mrp,
                                    0
                                );


                            const stock =
                                safeNumber(
                                    product.stock,
                                    0
                                );


                            return `
<tr>

    <td>
        ${index + 1}
    </td>

    <td>

        ${
            product.image
                ? `
                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    class="product-image"
                >
                `
                : `
                <div class="no-product-image">
                    🥬
                </div>
                `
        }

    </td>

    <td>

        <strong>
            ${escapeHTML(product.name)}
        </strong>

        <small>
            ${escapeHTML(product.category || "Vegetable")}
        </small>

    </td>

    <td>
        ${escapeHTML(product.unit || "")}
    </td>

    <td>

        <strong>
            ₹${price.toFixed(2)}
        </strong>

        ${
            mrp > price
                ? `
                <small>
                    MRP ₹${mrp.toFixed(2)}
                </small>
                `
                : ""
        }

    </td>

    <td>

        <span
            class="stock-badge ${
                stock > 0
                    ? "stock-available"
                    : "stock-empty"
            }"
        >
            ${stock}
        </span>

    </td>

    <td>

        <span
            class="status-badge ${
                product.isActive
                    ? "active"
                    : "inactive"
            }"
        >
            ${
                product.isActive
                    ? "ACTIVE"
                    : "INACTIVE"
            }
        </span>

    </td>

    <td>

        <div class="action-buttons">

            <form
                method="POST"
                action="/admin/sabji/product/${product._id}/toggle"
            >

                <button
                    type="submit"
                    class="toggle-button"
                >
                    ${
                        product.isActive
                            ? "DISABLE"
                            : "ENABLE"
                    }
                </button>

            </form>


            <form
                method="POST"
                action="/admin/sabji/product/${product._id}/delete"
                onsubmit="return confirm('क्या आप यह Product Delete करना चाहते हैं?')"
            >

                <button
                    type="submit"
                    class="delete-button"
                >
                    DELETE
                </button>

            </form>

        </div>

    </td>

</tr>
                            `;
                        }
                    ).join("")

                    : `
                    <tr>

                        <td
                            colspan="8"
                            class="empty-row"
                        >
                            अभी कोई Vegetable Product Add नहीं है।
                        </td>

                    </tr>
                    `;


            return res.send(`
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
    Manage Sabji Products
</title>


<style>

*{
    box-sizing:border-box;
}

body{
    margin:0;
    font-family:Arial,sans-serif;
    background:#f1f5f9;
    color:#0f172a;
}

.header{
    padding:17px;
    color:white;
    background:
        linear-gradient(
            135deg,
            #065f46,
            #16a34a
        );
}

.header-inner{
    width:100%;
    max-width:1200px;
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
}

.header h1{
    margin:0 0 5px;
    font-size:23px;
}

.header p{
    margin:0;
    font-size:13px;
    opacity:.9;
}

.shop-status{
    padding:9px 13px;
    border-radius:30px;
    background:white;
    color:#166534;
    font-size:12px;
    font-weight:900;
}

.container{
    width:100%;
    max-width:1200px;
    margin:auto;
    padding:18px;
}

.navigation{
    display:flex;
    flex-wrap:wrap;
    gap:9px;
    margin-bottom:17px;
}

.navigation a{
    padding:10px 13px;
    border-radius:9px;
    background:white;
    color:#0f172a;
    text-decoration:none;
    font-size:13px;
    font-weight:900;
    box-shadow:
        0 5px 15px
        rgba(15,23,42,.07);
}

.form-card,
.table-card{
    padding:20px;
    margin-bottom:18px;
    border-radius:17px;
    background:white;
    box-shadow:
        0 8px 25px
        rgba(15,23,42,.08);
}

.form-card h2,
.table-card h2{
    margin-top:0;
}

.form-grid{
    display:grid;
    grid-template-columns:
        repeat(
            3,
            minmax(0,1fr)
        );
    gap:13px;
}

.field.full-width{
    grid-column:1/-1;
}

label{
    display:block;
    margin-bottom:5px;
    color:#334155;
    font-size:12px;
    font-weight:900;
}

input,
select,
textarea{
    width:100%;
    padding:11px;
    border:
        1px solid #cbd5e1;
    border-radius:9px;
    outline:none;
    font-family:Arial,sans-serif;
    font-size:14px;
}

input:focus,
select:focus,
textarea:focus{
    border-color:#16a34a;
    box-shadow:
        0 0 0 3px
        rgba(22,163,74,.12);
}

textarea{
    min-height:85px;
    resize:vertical;
}

.submit-button{
    padding:13px 20px;
    border:0;
    border-radius:10px;
    background:#16a34a;
    color:white;
    font-size:15px;
    font-weight:900;
    cursor:pointer;
}

.table-wrapper{
    width:100%;
    overflow-x:auto;
}

table{
    width:100%;
    border-collapse:collapse;
    min-width:900px;
}

th,
td{
    padding:11px;
    border-bottom:
        1px solid #e2e8f0;
    text-align:left;
    vertical-align:middle;
    font-size:13px;
}

th{
    background:#f8fafc;
    color:#475569;
    font-size:11px;
}

td small{
    display:block;
    margin-top:4px;
    color:#64748b;
    font-size:10px;
}

.product-image,
.no-product-image{
    width:55px;
    height:55px;
    border-radius:10px;
}

.product-image{
    object-fit:cover;
}

.no-product-image{
    display:flex;
    align-items:center;
    justify-content:center;
    background:#dcfce7;
    font-size:27px;
}

.stock-badge,
.status-badge{
    display:inline-block;
    padding:6px 9px;
    border-radius:20px;
    font-size:10px;
    font-weight:900;
}

.stock-available,
.active{
    background:#dcfce7;
    color:#166534;
}

.stock-empty,
.inactive{
    background:#fee2e2;
    color:#991b1b;
}

.action-buttons{
    display:flex;
    gap:6px;
}

.action-buttons form{
    margin:0;
}

.toggle-button,
.delete-button{
    padding:7px 9px;
    border:0;
    border-radius:7px;
    color:white;
    font-size:10px;
    font-weight:900;
    cursor:pointer;
}

.toggle-button{
    background:#f59e0b;
}

.delete-button{
    background:#dc2626;
}

.empty-row{
    padding:40px;
    text-align:center;
    color:#64748b;
}

@media(max-width:800px){

    .form-grid{
        grid-template-columns:
            repeat(
                2,
                minmax(0,1fr)
            );
    }
}

@media(max-width:520px){

    .form-grid{
        grid-template-columns:1fr;
    }

    .field.full-width{
        grid-column:auto;
    }

    .header-inner{
        align-items:flex-start;
        flex-direction:column;
    }
}

</style>

</head>


<body>


<header class="header">

    <div class="header-inner">

        <div>

            <h1>
                🥬 Manage Vegetables
            </h1>

            <p>
                Product Add, Stock और Status Control
            </p>

        </div>


        <div class="shop-status">

            ${
                setting.isOpen
                    ? "🟢 SHOP OPEN"
                    : "🔴 SHOP CLOSED"
            }

        </div>

    </div>

</header>


<main class="container">


    <nav class="navigation">

        <a href="/sabji">
            🛒 CUSTOMER SHOP
        </a>

        <a href="/admin/sabji/orders">
            🔔 ORDERS
        </a>

        <a href="/admin/sabji/shop-status">
            🟢 OPEN / CLOSE
        </a>

    </nav>


    <section class="form-card">

        <h2>
            ➕ Add New Vegetable
        </h2>


        <form
            method="POST"
            action="/admin/sabji/products"
            enctype="multipart/form-data"
        >

            <div class="form-grid">


                <div class="field">

                    <label for="name">
                        Product Name *
                    </label>

                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="जैसे TOMATO"
                        required
                    >

                </div>


                <div class="field">

                    <label for="category">
                        Category
                    </label>

                    <select
                        name="category"
                        id="category"
                    >

                        <option value="Vegetable">
                            Vegetable
                        </option>

                        <option value="Fruit">
                            Fruit
                        </option>

                        <option value="Leafy Vegetable">
                            Leafy Vegetable
                        </option>

                        <option value="Other">
                            Other
                        </option>

                    </select>

                </div>


                <div class="field">

                    <label for="unit">
                        Unit *
                    </label>

                    <input
                        type="text"
                        name="unit"
                        id="unit"
                        placeholder="250 GM / 1 KG / 1 Piece"
                        value="1 KG"
                        required
                    >

                </div>


                <div class="field">

                    <label for="mrp">
                        MRP ₹
                    </label>

                    <input
                        type="number"
                        name="mrp"
                        id="mrp"
                        min="0"
                        step="0.01"
                        placeholder="50"
                    >

                </div>


                <div class="field">

                    <label for="price">
                        Selling Price ₹ *
                    </label>

                    <input
                        type="number"
                        name="price"
                        id="price"
                        min="0"
                        step="0.01"
                        placeholder="40"
                        required
                    >

                </div>


                <div class="field">

                    <label for="stock">
                        Stock Quantity *
                    </label>

                    <input
                        type="number"
                        name="stock"
                        id="stock"
                        min="0"
                        step="1"
                        placeholder="100"
                        required
                    >

                </div>


                <div class="field full-width">

                    <label for="description">
                        Description
                    </label>

                    <textarea
                        name="description"
                        id="description"
                        placeholder="Fresh product description..."
                    ></textarea>

                </div>


                <div class="field full-width">

                    <label for="image">
                        Product Image — Local Device
                    </label>

                    <input
                        type="file"
                        name="image"
                        id="image"
                        accept="image/jpeg,image/png,image/webp"
                    >

                </div>


                <div class="field full-width">

                    <button
                        type="submit"
                        class="submit-button"
                    >
                        ✅ ADD PRODUCT
                    </button>

                </div>


            </div>

        </form>

    </section>


    <section class="table-card">

        <h2>
            📦 All Vegetable Products
        </h2>


        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>

                        <th>
                            #
                        </th>

                        <th>
                            IMAGE
                        </th>

                        <th>
                            PRODUCT
                        </th>

                        <th>
                            UNIT
                        </th>

                        <th>
                            PRICE
                        </th>

                        <th>
                            STOCK
                        </th>

                        <th>
                            STATUS
                        </th>

                        <th>
                            ACTION
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${productRows}

                </tbody>

            </table>

        </div>

    </section>


</main>


</body>

</html>
            `);

        }catch(error){

            console.error(
                "MANAGE SABJI PRODUCTS ERROR:",
                error
            );


            return res
                .status(500)
                .send(
                    "Products page load नहीं हो सका।"
                );
        }
    }
);


// ======================================================
// ADD VEGETABLE PRODUCT
// POST /admin/sabji/products
// ======================================================

router.post(
    "/admin/sabji/products",
    upload.single("image"),
    async (req, res) => {

        try {

            const name =
                String(
                    req.body.name ||
                    ""
                ).trim();


            const category =
                String(
                    req.body.category ||
                    "Vegetable"
                ).trim();


            const unit =
                String(
                    req.body.unit ||
                    "1 KG"
                ).trim();


            const description =
                String(
                    req.body.description ||
                    ""
                ).trim();


            const mrp =
                Math.max(

                    0,

                    safeNumber(
                        req.body.mrp,
                        0
                    )
                );


            const price =
                safeNumber(
                    req.body.price,
                    NaN
                );


            const stock =
                Math.max(

                    0,

                    Math.floor(
                        safeNumber(
                            req.body.stock,
                            0
                        )
                    )
                );


            if(
                !name ||
                !Number.isFinite(price) ||
                price < 0
            ){

                return res
                    .status(400)
                    .send(
                        "Product Name और Valid Price जरूरी है।"
                    );
            }


            const image =
                req.file

                    ? (
                        "/uploads/sabji/" +
                        req.file.filename
                    )

                    : "";


            await VegetableProduct.create({

                name:
                    name,

                category:
                    category,

                unit:
                    unit,

                mrp:
                    mrp,

                price:
                    price,

                stock:
                    stock,

                image:
                    image,

                description:
                    description,

                isActive:
                    true
            });


            return res.redirect(
                "/admin/sabji/products"
            );

        }catch(error){

            console.error(
                "ADD SABJI PRODUCT ERROR:",
                error
            );


            return res
                .status(500)
                .send(
                    "Product Add नहीं हो सका।"
                );
        }
    }
);


// ======================================================
// TOGGLE PRODUCT ACTIVE / INACTIVE
// POST /admin/sabji/product/:id/toggle
// ======================================================

router.post(
    "/admin/sabji/product/:id/toggle",
    async (req, res) => {

        try {

            const product =
                await VegetableProduct
                    .findById(
                        req.params.id
                    );


            if(!product){

                return res
                    .status(404)
                    .send(
                        "Product नहीं मिला।"
                    );
            }


            product.isActive =
                !product.isActive;


            await product.save();


            return res.redirect(
                "/admin/sabji/products"
            );

        }catch(error){

            console.error(
                "TOGGLE PRODUCT ERROR:",
                error
            );


            return res
                .status(500)
                .send(
                    "Product Status Update नहीं हुआ।"
                );
        }
    }
);


// ======================================================
// DELETE PRODUCT
// POST /admin/sabji/product/:id/delete
// ======================================================

router.post(
    "/admin/sabji/product/:id/delete",
    async (req, res) => {

        try {

            const product =
                await VegetableProduct
                    .findById(
                        req.params.id
                    );


            if(!product){

                return res
                    .status(404)
                    .send(
                        "Product नहीं मिला।"
                    );
            }


            // Local product image delete करें
            if(
                product.image &&
                String(product.image)
                    .startsWith(
                        "/uploads/sabji/"
                    )
            ){

                const imageName =
                    path.basename(
                        product.image
                    );


                const imagePath =
                    path.join(
                        uploadDirectory,
                        imageName
                    );


                if(
                    fs.existsSync(
                        imagePath
                    )
                ){

                    try{

                        fs.unlinkSync(
                            imagePath
                        );

                    }catch(imageError){

                        console.error(
                            "PRODUCT IMAGE DELETE ERROR:",
                            imageError
                        );
                    }
                }
            }


            await VegetableProduct
                .findByIdAndDelete(
                    req.params.id
                );


            return res.redirect(
                "/admin/sabji/products"
            );

        }catch(error){

            console.error(
                "DELETE PRODUCT ERROR:",
                error
            );


            return res
                .status(500)
                .send(
                    "Product Delete नहीं हो सका।"
                );
        }
    }
);


// ======================================================
// FINAL PART 5 यहां से नीचे लगेगा
// ======================================================

// ======================================================
// ADMIN SABJI ORDERS PAGE
// GET /admin/sabji/orders
// ======================================================

router.get(
    "/admin/sabji/orders",
    async (req, res) => {

        try {

            const setting =
                await getShopSetting();

            const orders =
                await VegetableOrder
                    .find({})
                    .sort({ createdAt: -1 })
                    .lean();

            const pendingCount =
                await VegetableOrder
                    .countDocuments({
                        status: "Pending"
                    });

            const statuses = [
                "Pending",
                "Accepted",
                "Preparing",
                "Out for Delivery",
                "Delivered",
                "Cancelled"
            ];

            const orderCards =
                orders.length

                    ? orders.map(
                        function(order) {

                            const items =
                                Array.isArray(order.items)
                                    ? order.items
                                    : [];

                            const itemHTML =
                                items.map(
                                    function(item) {

                                        return `
<div class="item">

    <strong>
        ${escapeHTML(item.name)}
    </strong>

    <span>
        ${safeNumber(item.quantity, 1)}
        ${escapeHTML(item.unit || "")}
        ×
        ₹${safeNumber(item.price, 0).toFixed(2)}
    </span>

</div>
                                        `;
                                    }
                                ).join("");

                            const statusOptions =
                                statuses.map(
                                    function(status) {

                                        return `
<option
    value="${status}"
    ${
        order.status === status
            ? "selected"
            : ""
    }
>
    ${status}
</option>
                                        `;
                                    }
                                ).join("");

                            const orderDate =
                                order.createdAt

                                    ? new Date(
                                        order.createdAt
                                    ).toLocaleString(
                                        "en-IN"
                                    )

                                    : "-";

                            const distance =
                                safeNumber(
                                    order.distanceFromShopKm,
                                    0
                                );

                            return `
<article
    class="order-card"
    data-order-id="${order._id}"
>

    <div class="order-head">

        <div>

            <small>
                ORDER ID
            </small>

            <strong>
                #${String(order._id).slice(-6).toUpperCase()}
            </strong>

        </div>

        <span class="status-badge">
            ${escapeHTML(order.status || "Pending")}
        </span>

    </div>


    <h3>
        👤 ${escapeHTML(order.customerName)}
    </h3>


    <p>
        📞
        <a href="tel:${escapeHTML(order.mobile)}">
            ${escapeHTML(order.mobile)}
        </a>
    </p>


    <p>
        📍 ${escapeHTML(order.address)}
    </p>


    <p class="distance">
        🛵 Shop से दूरी:
        <strong>
            ${distance.toFixed(2)} KM
        </strong>
    </p>


    <div class="items">
        ${itemHTML}
    </div>


    <div class="total">

        <span>
            Total Amount
        </span>

        <strong>
            ₹${safeNumber(order.totalAmount, 0).toFixed(2)}
        </strong>

    </div>


    <div class="order-date">
        ${escapeHTML(orderDate)}
    </div>


    <form
        method="POST"
        action="/admin/sabji/order/${order._id}/status"
        class="status-form"
    >

        <select name="status">
            ${statusOptions}
        </select>

        <button type="submit">
            UPDATE
        </button>

    </form>

</article>
                            `;
                        }
                    ).join("")

                    : `
                    <div
                        class="empty"
                        id="emptyOrders"
                    >
                        अभी कोई Sabji Order नहीं आया है।
                    </div>
                    `;


            return res.send(`
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
    Sabji Orders
</title>


<style>

*{
    box-sizing:border-box;
}

body{
    margin:0;
    font-family:Arial,sans-serif;
    background:#f1f5f9;
    color:#0f172a;
}

.header{
    padding:17px;
    color:white;
    background:
        linear-gradient(
            135deg,
            #065f46,
            #16a34a
        );
}

.header-inner{
    width:100%;
    max-width:1150px;
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
}

.header h1{
    margin:0 0 5px;
    font-size:23px;
}

.header p{
    margin:0;
    opacity:.9;
    font-size:13px;
}

.header-links{
    display:flex;
    gap:8px;
}

.header-links a{
    padding:9px 12px;
    border-radius:9px;
    background:white;
    color:#166534;
    text-decoration:none;
    font-size:12px;
    font-weight:900;
}

.container{
    width:100%;
    max-width:1150px;
    margin:auto;
    padding:18px;
}

.notification-panel{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
    padding:15px;
    margin-bottom:17px;
    border-radius:15px;
    background:white;
    box-shadow:
        0 8px 25px
        rgba(15,23,42,.08);
}

.pending-count{
    font-size:17px;
    font-weight:900;
}

.pending-count span{
    color:#dc2626;
}

.ring-buttons{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
}

.ring-button{
    padding:11px 14px;
    border:0;
    border-radius:9px;
    color:white;
    font-weight:900;
    cursor:pointer;
}

#enableRing{
    background:#f97316;
}

#stopRingButton{
    background:#dc2626;
}

.ring-button:disabled{
    opacity:.65;
    cursor:not-allowed;
}

.orders-grid{
    display:grid;
    grid-template-columns:
        repeat(
            2,
            minmax(0,1fr)
        );
    gap:15px;
}

.order-card{
    padding:17px;
    border-left:
        5px solid #22c55e;
    border-radius:16px;
    background:white;
    box-shadow:
        0 8px 25px
        rgba(15,23,42,.08);
}

.order-head{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:10px;
}

.order-head small{
    display:block;
    margin-bottom:3px;
    color:#64748b;
    font-size:10px;
}

.status-badge{
    padding:6px 9px;
    border-radius:20px;
    background:#fef3c7;
    color:#92400e;
    font-size:11px;
    font-weight:900;
}

.order-card h3{
    margin:16px 0 8px;
}

.order-card p{
    margin:7px 0;
    color:#475569;
}

.order-card a{
    color:#0369a1;
    text-decoration:none;
    font-weight:800;
}

.distance{
    padding:8px;
    border-radius:8px;
    background:#eff6ff;
    color:#1d4ed8 !important;
    font-size:12px;
}

.items{
    padding:10px;
    margin-top:13px;
    border-radius:10px;
    background:#f8fafc;
}

.item{
    display:flex;
    justify-content:space-between;
    gap:10px;
    padding:7px 0;
    border-bottom:
        1px solid #e2e8f0;
    font-size:13px;
}

.item:last-child{
    border-bottom:0;
}

.total{
    display:flex;
    justify-content:space-between;
    margin-top:13px;
    font-size:18px;
    font-weight:900;
}

.total strong{
    color:#15803d;
}

.order-date{
    margin-top:9px;
    color:#64748b;
    font-size:11px;
}

.status-form{
    display:flex;
    gap:8px;
    margin-top:13px;
}

.status-form select{
    flex:1;
    padding:10px;
    border:
        1px solid #cbd5e1;
    border-radius:8px;
}

.status-form button{
    padding:10px 13px;
    border:0;
    border-radius:8px;
    background:#0f766e;
    color:white;
    font-weight:900;
    cursor:pointer;
}

.status-form button:disabled{
    opacity:.65;
}

.empty{
    grid-column:1/-1;
    padding:50px 20px;
    border-radius:15px;
    background:white;
    color:#64748b;
    text-align:center;
}

.new-order-alert{
    display:none;
    position:fixed;
    top:15px;
    left:50%;
    z-index:99990;
    padding:14px 20px;
    border-radius:11px;
    transform:translateX(-50%);
    background:#dc2626;
    color:white;
    font-weight:900;
    box-shadow:
        0 12px 35px
        rgba(0,0,0,.25);
}

@media(max-width:700px){

    .orders-grid{
        grid-template-columns:1fr;
    }

    .notification-panel,
    .header-inner{
        align-items:flex-start;
        flex-direction:column;
    }
}

</style>

</head>


<body>


<div
    class="new-order-alert"
    id="newOrderAlert"
>
    🔔 NEW SABJI ORDER RECEIVED!
</div>


<header class="header">

    <div class="header-inner">

        <div>

            <h1>
                🥬 GLOBAL MINI SABJI
            </h1>

            <p>
                Customer Orders Management
            </p>

        </div>


        <div class="header-links">

            <a href="/admin/sabji/products">
                PRODUCTS
            </a>

            <a href="/admin/sabji/shop-status">
                SHOP STATUS
            </a>

        </div>

    </div>

</header>


<main class="container">


    <section class="notification-panel">

        <div class="pending-count">

            Pending Orders:

            <span id="pendingCount">
                ${pendingCount}
            </span>

        </div>


        <div class="ring-buttons">

            <button
                type="button"
                class="ring-button"
                id="enableRing"
            >
                🔔 ENABLE ORDER RING
            </button>

            <button
                type="button"
                class="ring-button"
                id="stopRingButton"
                disabled
            >
                🔕 STOP CURRENT RING
            </button>

        </div>

    </section>


    <section
        class="orders-grid"
        id="ordersGrid"
    >
        ${orderCards}
    </section>


</main>


<script>

// ======================================================
// ELEMENTS AND STATE
// ======================================================

const enableRingButton =
    document.getElementById(
        "enableRing"
    );

const stopRingButton =
    document.getElementById(
        "stopRingButton"
    );

const newOrderAlert =
    document.getElementById(
        "newOrderAlert"
    );

const pendingCountElement =
    document.getElementById(
        "pendingCount"
    );


let shopIsOpen =
    ${setting.isOpen ? "true" : "false"};

let ringEnabled =
    false;



let audioContext =
    null;

let masterGain =
    null;

let compressor =
    null;

let ringInterval =
    null;

let ringStopTimer =
    null;

const activeOscillators =
    new Set();

const RING_DURATION_MS =
    60 * 1000;


const knownOrderIds =
    new Set(

        Array.from(
            document.querySelectorAll(
                "[data-order-id]"
            )
        ).map(
            function(element) {

                return String(
                    element.dataset.orderId
                );
            }
        )
    );


// ======================================================
// SAFE BROWSER HTML
// ======================================================

function safeBrowserHTML(value) {

    return String(value || "")

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");
}


// ======================================================
// STOP CURRENT RING ONLY
// ======================================================

function stopCurrentRing() {

    if(ringInterval) {

        clearInterval(
            ringInterval
        );

        ringInterval =
            null;
    }


    if(ringStopTimer) {

        clearTimeout(
            ringStopTimer
        );

        ringStopTimer =
            null;
    }


    activeOscillators.forEach(
        function(oscillator) {

            try {

                oscillator.stop();

            }catch(error){}
        }
    );


    activeOscillators.clear();


    if(newOrderAlert) {

        newOrderAlert.style.display =
            "none";
    }


    if(stopRingButton) {

        stopRingButton.disabled =
            true;
    }


    // ringEnabled false नहीं करना है
}


// ======================================================
// UPDATE RING BUTTON
// ======================================================

function updateRingButton() {

    if(!shopIsOpen) {

        ringEnabled =
            false;

        stopCurrentRing();


        enableRingButton.disabled =
            true;

        enableRingButton.textContent =
            "🔕 RING INACTIVE — SHOP CLOSED";

        enableRingButton.style.background =
            "#64748b";

        return;
    }


    if(
        ringEnabled &&
        audioContext &&
        audioContext.state ===
        "running"
    ) {

        enableRingButton.disabled =
            true;

        enableRingButton.textContent =
            "✅ ORDER RING ACTIVE";

        enableRingButton.style.background =
            "#16a34a";

        return;
    }


    enableRingButton.disabled =
        false;

    enableRingButton.textContent =
        "🔔 ENABLE ORDER RING";

    enableRingButton.style.background =
        "#f97316";
}


// ======================================================
// ENABLE AUDIO
// ======================================================

async function enableOrderRing() {

    if(!shopIsOpen) {

        updateRingButton();

        return;
    }


    const AudioContextClass =
        window.AudioContext ||
        window.webkitAudioContext;


    if(!AudioContextClass) {

        alert(
            "इस Browser में Audio Support नहीं है।"
        );

        return;
    }


    if(!audioContext) {

        audioContext =
            new AudioContextClass();


        masterGain =
            audioContext.createGain();


        compressor =
            audioContext
                .createDynamicsCompressor();


        masterGain.gain.value =
            1.4;


        compressor.threshold.value =
            -18;

        compressor.knee.value =
            12;

        compressor.ratio.value =
            8;

        compressor.attack.value =
            0.003;

        compressor.release.value =
            0.25;


        masterGain.connect(
            compressor
        );


        compressor.connect(
            audioContext.destination
        );
    }


    await audioContext.resume();


    ringEnabled =
        audioContext.state ===
        "running";


        // Phone audio को पूरी तरह unlock करें

const unlockOscillator =
    audioContext.createOscillator();

const unlockGain =
    audioContext.createGain();

unlockGain.gain.value =
    0.001;

unlockOscillator.connect(
    unlockGain
);

unlockGain.connect(
    audioContext.destination
);

unlockOscillator.start();

unlockOscillator.stop(
    audioContext.currentTime +
    0.05
);


    if(
        "Notification" in window &&
        Notification.permission ===
        "default"
    ) {

        await Notification
            .requestPermission();
    }


    updateRingButton();


    // Enable button दबाते ही test ring बजेगी

if (ringEnabled) {

    ringPulse();

    setTimeout(
        ringPulse,
        900
    );

    alert(
        "✅ Order Ring Active है। Test Ring बज रही है।"
    );

}
}


// ======================================================
// RING TONE
// ======================================================

function createRingTone(
    frequency,
    delay,
    duration
) {

    if(
        !audioContext ||
        !masterGain
    ) {
        return;
    }


    const oscillator =
        audioContext
            .createOscillator();


    const gain =
        audioContext
            .createGain();


    const startTime =
        audioContext.currentTime +
        delay;


    oscillator.type =
        "square";


    oscillator.frequency
        .setValueAtTime(
            frequency,
            startTime
        );


    gain.gain.setValueAtTime(
        0.001,
        startTime
    );


    gain.gain
        .exponentialRampToValueAtTime(
            0.75,
            startTime + 0.02
        );


    gain.gain
        .exponentialRampToValueAtTime(
            0.001,
            startTime + duration
        );


    oscillator.connect(
        gain
    );


    gain.connect(
        masterGain
    );


    activeOscillators.add(
        oscillator
    );


    oscillator.onended =
        function() {

            activeOscillators.delete(
                oscillator
            );
        };


    oscillator.start(
        startTime
    );


    oscillator.stop(
        startTime +
        duration +
        0.03
    );
}


// ======================================================
// RING PULSE
// ======================================================

function ringPulse() {

    if(
        !shopIsOpen ||
        !ringEnabled ||
        !audioContext
    ) {
        return;
    }


    createRingTone(
        920,
        0,
        0.18
    );

    createRingTone(
        1350,
        0.22,
        0.18
    );

    createRingTone(
        1050,
        0.44,
        0.18
    );

    createRingTone(
        1500,
        0.66,
        0.22
    );
}


// ======================================================
// PLAY RING FOR 1 MINUTE
// ======================================================
async function playRing() {

    if (
        !shopIsOpen ||
        !ringEnabled ||
        !audioContext
    ) {
        return;
    }


    try {

        if (
            audioContext.state ===
            "suspended"
        ) {

            await audioContext.resume();

        }

    } catch (error) {

        console.log(
            "Audio resume failed:",
            error
        );

        return;

    }


    if (
        audioContext.state !==
        "running"
    ) {

        ringEnabled = false;

        updateRingButton();

        return;

    }


    stopCurrentRing();


    if (newOrderAlert) {

        newOrderAlert.style.display =
            "block";

    }


    if (stopRingButton) {

        stopRingButton.disabled =
            false;

    }


    ringPulse();


    ringInterval =
        setInterval(
            ringPulse,
            1100
        );


    ringStopTimer =
        setTimeout(
            stopCurrentRing,
            RING_DURATION_MS
        );

}


// ======================================================
// NEW ORDER POPUP
// ======================================================

function showOrderPopup(order) {

    if(!order) {
        return;
    }


    const oldPopup =
        document.getElementById(
            "liveOrderPopup"
        );


    if(oldPopup) {
        oldPopup.remove();
    }


    const orderId =
        String(
            order._id ||
            ""
        );


    const customerName =
        safeBrowserHTML(
            order.customerName ||
            "Customer"
        );


    const mobile =
        safeBrowserHTML(
            order.mobile ||
            "-"
        );


    const totalAmount =
        Number(
            order.totalAmount ||
            0
        ).toFixed(2);


    const popup =
        document.createElement(
            "div"
        );


    popup.id =
        "liveOrderPopup";


    popup.style.cssText =

        "position:fixed;" +
        "inset:0;" +
        "z-index:99999;" +
        "padding:20px;" +
        "display:flex;" +
        "align-items:center;" +
        "justify-content:center;" +
        "background:rgba(15,23,42,.82);";


    popup.innerHTML =

        '<div style="' +

            'width:100%;' +
            'max-width:390px;' +
            'padding:25px;' +
            'border-radius:24px;' +
            'background:white;' +
            'text-align:center;' +
            'box-shadow:0 25px 70px rgba(0,0,0,.35);' +

        '">' +

            '<div style="font-size:52px">' +
                '🛵' +
            '</div>' +

            '<h2 style="color:#dc2626">' +
                '🔔 NEW SABJI ORDER!' +
            '</h2>' +

            '<p>' +

                '<strong>' +

                    'Order #' +

                    orderId
                        .slice(-6)
                        .toUpperCase() +

                '</strong>' +

            '</p>' +

            '<p>👤 ' +
                customerName +
            '</p>' +

            '<p>📞 ' +
                mobile +
            '</p>' +

            '<h2 style="color:#15803d">' +

                '₹' +

                totalAmount +

            '</h2>' +

            '<button ' +
                'type="button" ' +
                'id="viewPopupOrder" ' +
                'style="' +
                    'padding:13px 17px;' +
                    'margin:5px;' +
                    'border:0;' +
                    'border-radius:10px;' +
                    'background:#16a34a;' +
                    'color:white;' +
                    'font-weight:900;' +
                '"' +
            '>' +
                '👁 VIEW ORDER' +
            '</button>' +

            '<button ' +
                'type="button" ' +
                'id="closePopupOrder" ' +
                'style="' +
                    'padding:13px 17px;' +
                    'margin:5px;' +
                    'border:0;' +
                    'border-radius:10px;' +
                    'background:#64748b;' +
                    'color:white;' +
                    'font-weight:900;' +
                '"' +
            '>' +
                'CLOSE' +
            '</button>' +

        '</div>';


    document.body.appendChild(
        popup
    );


    document.getElementById(
        "closePopupOrder"
    ).onclick =
        function() {

            popup.remove();
        };


    document.getElementById(
        "viewPopupOrder"
    ).onclick =
        function() {

            popup.remove();


            const card =
                document.querySelector(

                    '[data-order-id="' +
                    orderId +
                    '"]'
                );


            if(card) {

                card.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "center"
                });


                card.style.outline =
                    "4px solid #f97316";


                setTimeout(
                    function() {

                        card.style.outline =
                            "none";
                    },

                    4000
                );
            }
        };


    if(
        "Notification" in window &&
        Notification.permission ===
        "granted"
    ) {

        new Notification(

            "🔔 New Sabji Order",

            {
                body:

                    customerName +

                    " ने ₹" +

                    totalAmount +

                    " का Order किया है।",

                tag:
                    orderId,

                requireInteraction:
                    true
            }
        );
    }
}


// ======================================================
// ADD LIVE ORDER CARD
// ======================================================

function addNewOrderCard(order) {

    if(
        !order ||
        !order._id
    ) {
        return false;
    }


    const orderId =
        String(
            order._id
        );


    if(
        knownOrderIds.has(
            orderId
        )
    ) {
        return false;
    }


    knownOrderIds.add(
        orderId
    );


    const emptyBox =
        document.getElementById(
            "emptyOrders"
        );


    if(emptyBox) {
        emptyBox.remove();
    }


    const items =
        Array.isArray(
            order.items
        )
            ? order.items
            : [];


    const itemHTML =
        items.map(
            function(item) {

                return (

                    '<div class="item">' +

                        '<strong>' +
                            safeBrowserHTML(
                                item.name
                            ) +
                        '</strong>' +

                        '<span>' +

                            Number(
                                item.quantity ||
                                1
                            ) +

                            ' ' +

                            safeBrowserHTML(
                                item.unit ||
                                ""
                            ) +

                            ' × ₹' +

                            Number(
                                item.price ||
                                0
                            ).toFixed(2) +

                        '</span>' +

                    '</div>'
                );
            }
        ).join("");


    const card =
        document.createElement(
            "article"
        );


    card.className =
        "order-card";


    card.dataset.orderId =
        orderId;


    card.innerHTML =

        '<div class="order-head">' +

            '<div>' +

                '<small>ORDER ID</small>' +

                '<strong>#' +

                    orderId
                        .slice(-6)
                        .toUpperCase() +

                '</strong>' +

            '</div>' +

            '<span class="status-badge">' +

                safeBrowserHTML(
                    order.status ||
                    "Pending"
                ) +

            '</span>' +

        '</div>' +

        '<h3>👤 ' +

            safeBrowserHTML(
                order.customerName
            ) +

        '</h3>' +

        '<p>📞 <a href="tel:' +

            safeBrowserHTML(
                order.mobile
            ) +

        '">' +

            safeBrowserHTML(
                order.mobile
            ) +

        '</a></p>' +

        '<p>📍 ' +

            safeBrowserHTML(
                order.address
            ) +

        '</p>' +

        '<p class="distance">' +

            '🛵 Shop से दूरी: <strong>' +

            Number(
                order.distanceFromShopKm ||
                0
            ).toFixed(2) +

            ' KM</strong>' +

        '</p>' +

        '<div class="items">' +

            itemHTML +

        '</div>' +

        '<div class="total">' +

            '<span>Total Amount</span>' +

            '<strong>₹' +

                Number(
                    order.totalAmount ||
                    0
                ).toFixed(2) +

            '</strong>' +

        '</div>' +

        '<div class="order-date">' +

            new Date(
                order.createdAt
            ).toLocaleString(
                "en-IN"
            ) +

        '</div>' +

        '<form ' +

            'method="POST" ' +

            'action="/admin/sabji/order/' +

                orderId +

            '/status" ' +

            'class="status-form"' +

        '>' +

            '<select name="status">' +

                '<option value="Pending">Pending</option>' +

                '<option value="Accepted">Accepted</option>' +

                '<option value="Preparing">Preparing</option>' +

                '<option value="Out for Delivery">Out for Delivery</option>' +

                '<option value="Delivered">Delivered</option>' +

                '<option value="Cancelled">Cancelled</option>' +

            '</select>' +

            '<button type="submit">UPDATE</button>' +

        '</form>';


    document.getElementById(
        "ordersGrid"
    ).prepend(
        card
    );


    return true;
}


// ======================================================
// BUTTON EVENTS
// ======================================================

enableRingButton.addEventListener(
    "click",
    async function() {

        try {

            await enableOrderRing();

        }catch(error) {

            console.error(
                "ENABLE RING ERROR:",
                error
            );
        }
    }
);


stopRingButton.addEventListener(
    "click",
    function() {

        stopCurrentRing();

        stopRingButton.textContent =
            "🔕 RING STOPPED";


        setTimeout(
            function() {

                stopRingButton.textContent =
                    "🔕 STOP CURRENT RING";
            },

            1500
        );
    }
);


// ======================================================
// STATUS UPDATE WITHOUT PAGE RELOAD
// ======================================================

// ======================================================
// STATUS UPDATE WITHOUT PAGE RELOAD
// Accepted होने पर Sound बंद, Ring Active
// ======================================================

document.addEventListener(
    "submit",
    async function(event) {

        const form =
            event.target.closest(
                ".status-form"
            );


        if(!form) {
            return;
        }


        event.preventDefault();


        // User के Update click से Audio Activate होगा
        if(
            shopIsOpen &&
            !ringEnabled
        ) {

            try {

                await enableOrderRing();

            }catch(error) {

                console.error(
                    "RING ACTIVATE ERROR:",
                    error
                );
            }
        }


        const button =
            form.querySelector(
                'button[type="submit"]'
            );


        const select =
            form.querySelector(
                'select[name="status"]'
            );


        const card =
            form.closest(
                ".order-card"
            );


        const badge =
            card.querySelector(
                ".status-badge"
            );


        const selectedStatus =
            select.value;


        button.disabled =
            true;


        select.disabled =
            true;


        button.textContent =
            "UPDATING...";


        try {

            const response =
                await fetch(

                    form.action,

                    {
                        method:
                            "POST",

                        headers: {

                            "Content-Type":
                                "application/x-www-form-urlencoded",

                            "X-Requested-With":
                                "XMLHttpRequest",

                            "Accept":
                                "application/json"
                        },

                        credentials:
                            "same-origin",

                        body:
    new URLSearchParams({

        status:
            selectedStatus

    }).toString()
                    }
                );


            const result =
                await response.json();


            if(
                !response.ok ||
                !result.success
            ) {

                throw new Error(

                    result.message ||
                    "Status Update Failed"
                );
            }


            const updatedStatus =
                result.status ||
                selectedStatus;


            // Status Badge Update
            badge.textContent =
                updatedStatus;


            // ==================================================
            // ACCEPTED होने पर Current Sound और Popup बंद
            // Ring Monitoring Active रहेगी
            // ==================================================

            if(
                updatedStatus ===
                "Accepted"
            ) {

                // केवल अभी बज रही आवाज बंद होगी
                stopCurrentRing();


                // New Order Popup बंद करें
                const popup =
                    document.getElementById(
                        "liveOrderPopup"
                    );


                if(popup) {

                    popup.remove();
                }


                // Browser title normal करें
                document.title =
                    "Sabji Orders";


                // Shop Open और Audio Running है तो
                // Ring अगले Order के लिए Active रहेगी
                ringEnabled =
                    Boolean(

                        shopIsOpen &&

                        audioContext &&

                        audioContext.state ===
                        "running"
                    );


                updateRingButton();
            }


            // Other final statuses पर भी current popup हटाएँ
            if(
                updatedStatus ===
                    "Delivered" ||

                updatedStatus ===
                    "Cancelled"
            ) {

                stopCurrentRing();


                const popup =
                    document.getElementById(
                        "liveOrderPopup"
                    );


                if(popup) {

                    popup.remove();
                }


                document.title =
                    "Sabji Orders";


                ringEnabled =
                    Boolean(

                        shopIsOpen &&

                        audioContext &&

                        audioContext.state ===
                        "running"
                    );


                updateRingButton();
            }


            button.textContent =
                "✅ UPDATED";


            // Pending Count तुरंत Update करें
            if(
                updatedStatus !==
                "Pending"
            ) {

                const currentPending =
                    Number(
                        pendingCountElement
                            .textContent ||
                        0
                    );


                pendingCountElement.textContent =
                    Math.max(
                        0,
                        currentPending - 1
                    );
            }


            setTimeout(
                function() {

                    button.disabled =
                        false;


                    select.disabled =
                        false;


                    button.textContent =
                        "UPDATE";
                },

                1200
            );

        }catch(error) {

            console.error(
                "STATUS UPDATE ERROR:",
                error
            );


            alert(
                error.message ||
                "Status Update Failed"
            );


            button.disabled =
                false;


            select.disabled =
                false;


            button.textContent =
                "UPDATE";
        }
    }
);

// ======================================================
// CHECK NEW ORDERS EVERY 4 SECONDS
// ======================================================

async function checkNewOrders() {

    try {

        const response =
            await fetch(

                "/admin/sabji/orders/check?time=" +
                Date.now(),

                {
                    cache:
                        "no-store",

                    credentials:
                        "same-origin"
                }
            );


        const data =
            await response.json();


        if(!data.success) {
            return;
        }


        const previousShopStatus =
            shopIsOpen;


        shopIsOpen =
            Boolean(
                data.isOpen
            );


        if(!shopIsOpen) {

            ringEnabled =
                false;

            stopCurrentRing();

        }else if(

            !previousShopStatus &&

            audioContext &&

            audioContext.state ===
            "running"
        ) {

            ringEnabled =
                true;
        }


        updateRingButton();


        pendingCountElement.textContent =
            Number(
                data.pendingCount ||
                0
            );


        const orders =
            Array.isArray(
                data.orders
            )
                ? data.orders
                : [];


        let latestNewOrder =
            null;


        orders
            .slice()
            .reverse()
            .forEach(
                function(order) {

                    if(
                        addNewOrderCard(
                            order
                        )
                    ) {

                        latestNewOrder =
                            order;
                    }
                }
            );


        if(
            latestNewOrder &&
            shopIsOpen
        ) {

            document.title =
                "🔔 NEW SABJI ORDER";


            showOrderPopup(
                latestNewOrder
            );


            await playRing();


            setTimeout(
                function() {

                    document.title =
                        "Sabji Orders";
                },

                5000
            );
        }

    }catch(error) {

        console.error(
            "ORDER CHECK ERROR:",
            error
        );
    }
}


// ======================================================
// START ORDER PAGE
// ======================================================

updateRingButton();

checkNewOrders();


// Phone app दोबारा foreground में आए तो audio resume करें

document.addEventListener(
    "visibilitychange",
    async function () {

        if (
            document.visibilityState ===
            "visible" &&
            shopIsOpen &&
            audioContext
        ) {

            try {

                await audioContext.resume();

                ringEnabled =
                    audioContext.state ===
                    "running";

                updateRingButton();

            } catch (error) {

                console.log(
                    "Audio resume error:",
                    error
                );

            }

        }

    }
);

setInterval(checkNewOrders, 4000);

</script>


</body>

</html>
            `);

        }catch(error) {

            console.error(
                "ADMIN SABJI ORDERS ERROR:",
                error
            );


            return res
                .status(500)
                .send(
                    "Orders page load नहीं हो सका।"
                );
        }
    }
);


// ======================================================
// CHECK NEW ORDERS API
// GET /admin/sabji/orders/check
// ======================================================

router.get(
    "/admin/sabji/orders/check",
    async (req, res) => {

        try {

            const setting =
                await getShopSetting();


            const orders =
                await VegetableOrder

                    .find({})

                    .sort({
                        createdAt:
                            -1
                    })

                    .limit(20)

                    .lean();


            const pendingCount =
                await VegetableOrder
                    .countDocuments({

                        status:
                            "Pending"
                    });


            res.set(
                "Cache-Control",
                "no-store"
            );


            return res.json({

                success:
                    true,

                isOpen:
                    Boolean(
                        setting.isOpen
                    ),

                pendingCount:
                    pendingCount,

                orders:
                    orders
            });

        }catch(error) {

            console.error(
                "ORDER CHECK API ERROR:",
                error
            );


            return res
                .status(500)
                .json({

                    success:
                        false,

                    message:
                        "Order Check Failed"
                });
        }
    }
);


// ======================================================
// UPDATE ORDER STATUS
// POST /admin/sabji/order/:id/status
// ======================================================

router.post(
    "/admin/sabji/order/:id/status",
    async (req, res) => {

        const isAjax =

            req.get(
                "X-Requested-With"
            ) ===
            "XMLHttpRequest";


        try {

            const allowedStatuses = [

                "Pending",

                "Accepted",

                "Preparing",

                "Out for Delivery",

                "Delivered",

                "Cancelled"
            ];


            const status =
                String(
                    req.body.status ||
                    ""
                ).trim();


            if(
                !allowedStatuses.includes(
                    status
                )
            ) {

                if(isAjax) {

                    return res
                        .status(400)
                        .json({

                            success:
                                false,

                            message:
                                "Invalid Order Status"
                        });
                }


                return res
                    .status(400)
                    .send(
                        "Invalid Order Status"
                    );
            }


            const order =
                await VegetableOrder
                    .findByIdAndUpdate(

                        req.params.id,

                        {
                            status:
                                status
                        },

                        {
                            new:
                                true
                        }
                    );


            if(!order) {

                if(isAjax) {

                    return res
                        .status(404)
                        .json({

                            success:
                                false,

                            message:
                                "Order नहीं मिला।"
                        });
                }


                return res
                    .status(404)
                    .send(
                        "Order नहीं मिला।"
                    );
            }


            if(isAjax) {

                return res.json({

                    success:
                        true,

                    message:
                        "Order Status Updated",

                    status:
                        order.status
                });
            }


            return res.redirect(
                "/admin/sabji/orders"
            );

        }catch(error) {

            console.error(
                "ORDER STATUS UPDATE ERROR:",
                error
            );


            if(isAjax) {

                return res
                    .status(500)
                    .json({

                        success:
                            false,

                        message:
                            "Status Update Failed"
                    });
            }


            return res
                .status(500)
                .send(
                    "Status Update Failed"
                );
        }
    }
);


// ======================================================
// EXPORT ROUTER
// हमेशा file की आखिरी line
// ======================================================

module.exports = router;
