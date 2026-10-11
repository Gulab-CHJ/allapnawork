"use strict";


// ======================================================
// PRODUCT DATA
// ======================================================

let products = Array.isArray(window.STORE_PRODUCTS)
    ? window.STORE_PRODUCTS
    : [];


// ======================================================
// ELEMENTS
// ======================================================

const productsGrid =
    document.getElementById("productsGrid");

const searchInput =
    document.getElementById("searchInput");

const productCount =
    document.getElementById("productCount");

const productModal =
    document.getElementById("productModal");

const productDetailContent =
    document.getElementById(
        "productDetailContent"
    );

const cartCount =
    document.getElementById("cartCount");


// ======================================================
// HTML ESCAPE
// ======================================================

function escapeHTML(value) {

    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// ======================================================
// IMAGE URL
// ======================================================

function imageURL(image) {

    if (!image) {

        return "";

    }

    image = String(image);

    if (
        image.startsWith("http://") ||
        image.startsWith("https://") ||
        image.startsWith("/")
    ) {

        return image;

    }

    return "/" + image.replace(/^\/+/, "");

}


// ======================================================
// VIDEO URL
// ======================================================

function videoURL(video) {

    if (!video) {

        return "";

    }

    video = String(video);

    if (
        video.startsWith("http://") ||
        video.startsWith("https://") ||
        video.startsWith("/")
    ) {

        return video;

    }

    return "/" + video.replace(/^\/+/, "");

}


// ======================================================
// RENDER PRODUCTS
// ======================================================

function renderProducts(list) {

    if (!productsGrid) {

        return;

    }


    productCount.textContent =
        `${list.length} Products`;


    if (!list.length) {

        productsGrid.innerHTML = `

            <div class="empty">

                <div class="empty-icon">
                    🔍
                </div>

                <h3>
                    No Products Found
                </h3>

                <p>
                    Try another search.
                </p>

            </div>

        `;

        return;

    }


    productsGrid.innerHTML =
        list.map(product => {

            const image =
                product.mainImage ||
                product.image ||
                "";


            const stock =
                Number(product.stock || 0);


            const stockClass =
                stock > 0
                    ? "in-stock"
                    : "out-stock";


            const stockText =
                stock > 0
                    ? `● In Stock (${stock})`
                    : "● Out of Stock";


            return `

                <div
                    class="product-card"
                    onclick="openProduct('${escapeHTML(product._id)}')"
                >

                    <div class="product-image">

                        ${
                            image
                            ?

                            `<img
                                class="product-img"
                                src="${imageURL(image)}"
                                alt="${escapeHTML(product.name)}"
                                onerror="this.style.display='none'"
                            >`

                            :

                            `<div class="image-placeholder">
                                🧴
                            </div>`
                        }

                    </div>


                    <div class="category">

                        ${escapeHTML(
                            product.category ||
                            "Healthcare"
                        )}

                    </div>


                    <h3>
                        ${escapeHTML(product.name)}
                    </h3>


                    <div class="description">

                        ${escapeHTML(
                            product.description ||
                            "Premium Healthcare Product"
                        )}

                    </div>


                    ${
                        product.brand

                        ?

                        `<div class="brand">
                            🏭 Brand:
                            <strong>
                                ${escapeHTML(product.brand)}
                            </strong>
                        </div>`

                        :

                        ""
                    }


                    <span
                        class="stock ${stockClass}"
                    >

                        ${stockText}

                    </span>


                    <button
                        class="view-btn"
                        onclick="
                            event.stopPropagation();
                            openProduct('${escapeHTML(product._id)}');
                        "
                    >

                        View Product

                    </button>

                </div>

            `;

        }).join("");

}


// ======================================================
// OPEN PRODUCT
// ======================================================

function openProduct(productId) {

    const product =
        products.find(
            item =>
                String(item._id) ===
                String(productId)
        );


    if (!product) {

        return;

    }


    const stock =
        Number(product.stock || 0);


    const mainImage =
        product.mainImage ||
        product.image ||
        "";


    let galleryImages = [];


    if (mainImage) {

        galleryImages.push(mainImage);

    }


    if (
        Array.isArray(product.images)
    ) {

        galleryImages =
            galleryImages.concat(
                product.images
            );

    }


    galleryImages =
        galleryImages.filter(
            (value, index, array) =>
                value &&
                array.indexOf(value) === index
        );


    const galleryHTML =
        galleryImages.length

        ?

        `

        <div class="gallery">

            ${galleryImages.map(image => `

                <img
                    src="${imageURL(image)}"
                    alt="${escapeHTML(product.name)}"
                    onclick="
                        document.getElementById('mainProductImage').src =
                        '${imageURL(image)}'
                    "
                >

            `).join("")}

        </div>

        `

        :

        "";


    const videoHTML =
        product.video

        ?

        `

        <video
            class="product-video"
            controls
            preload="metadata"
        >

            <source
                src="${videoURL(product.video)}"
            >

            Your browser does not support
            video playback.

        </video>

        `

        :

        "";


    const useText =
        product.use ||
        product.uses ||
        "Not available";


    const batchText =
        product.batch ||
        product.batchNo ||
        product.batchNumber ||
        "Not available";


    const expiryText =
        product.expiry ||
        product.expiryDate ||
        "Not available";


    const stockClass =
        stock > 0
            ? "in-stock"
            : "out-stock";


    const stockText =
        stock > 0
            ? `● In Stock (${stock})`
            : "● Out of Stock";


    productDetailContent.innerHTML = `

        <div class="detail-grid">


            <div>


                <div class="detail-image">

                    ${
                        mainImage

                        ?

                        `<img
                            id="mainProductImage"
                            src="${imageURL(mainImage)}"
                            alt="${escapeHTML(product.name)}"
                        >`

                        :

                        `<div class="image-placeholder">
                            🧴
                        </div>`
                    }

                </div>


                ${galleryHTML}


            </div>



            <div>


                <div class="detail-category">

                    ${escapeHTML(
                        product.category ||
                        "Healthcare Product"
                    )}

                </div>


                <h2 class="detail-title">

                    ${escapeHTML(product.name)}

                </h2>


                <div class="detail-description">

                    ${escapeHTML(
                        product.description ||
                        "Premium Healthcare Product"
                    )}

                </div>


                ${
                    product.brand

                    ?

                    `<div class="detail-description">

                        🏭 Brand:
                        <strong>
                            ${escapeHTML(product.brand)}
                        </strong>

                    </div>`

                    :

                    ""
                }


                <div class="info-box">


                    <div class="info-item">

                        <span class="info-label">
                            Batch Number
                        </span>

                        <span class="info-value">

                            ${escapeHTML(batchText)}

                        </span>

                    </div>


                    <div class="info-item">

                        <span class="info-label">
                            Expiry Date
                        </span>

                        <span class="info-value">

                            ${escapeHTML(expiryText)}

                        </span>

                    </div>


                    <div class="info-item">

                        <span class="info-label">
                            Product Use
                        </span>

                        <span class="info-value">

                            ${escapeHTML(useText)}

                        </span>

                    </div>


                    <div class="info-item">

                        <span class="info-label">
                            Availability
                        </span>

                        <span
                            class="info-value ${stockClass}"
                        >

                            ${stockText}

                        </span>

                    </div>


                </div>


                ${
                    product.manufacturer

                    ?

                    `<div class="info-item" style="margin-top:8px;">

                        <span class="info-label">
                            Manufacturer
                        </span>

                        <span class="info-value">
                            ${escapeHTML(
                                product.manufacturer
                            )}
                        </span>

                    </div>`

                    :

                    ""
                }


                <!-- PRICE INTENTIONALLY HIDDEN -->


                <button
                    class="detail-cart-btn"
                    onclick="
                        goToDoctorLogin(
                            '${escapeHTML(product._id)}'
                        )
                    "
                >

                    🛒 Add To Cart

                </button>


                <button
                    class="detail-cart-btn"
                    style="
                        background:
                        linear-gradient(
                            135deg,
                            #0f766e,
                            #115e59
                        );
                    "
                    onclick="
                        goToDoctorLogin(
                            '${escapeHTML(product._id)}'
                        )
                    "
                >

                    💰 View Price

                </button>


                ${videoHTML}


            </div>

        </div>

    `;


    productModal.classList.add("show");


    document.body.style.overflow =
        "hidden";

}


// ======================================================
// DOCTOR LOGIN
// ======================================================

function goToDoctorLogin(productId) {

    const redirectURL =
        "/doctor/store?product=" +
        encodeURIComponent(productId);


    window.location.href =
        "/admin/doctor-login?redirect=" +
        encodeURIComponent(redirectURL);

}


// ======================================================
// CLOSE PRODUCT
// ======================================================

function closeProduct() {

    if (productModal) {

        productModal.classList.remove("show");

    }


    document.body.style.overflow =
        "";

}


// ======================================================
// CLICK OUTSIDE MODAL
// ======================================================

if (productModal) {

    productModal.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                productModal
            ) {

                closeProduct();

            }

        }
    );

}


// ======================================================
// ESC KEY
// ======================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeProduct();

        }

    }
);


// ======================================================
// SEARCH
// ======================================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            const query =
                this.value
                    .trim()
                    .toLowerCase();


            if (!query) {

                renderProducts(products);

                return;

            }


            const filtered =
                products.filter(product => {

                    const text = [

                        product.name,

                        product.category,

                        product.brand,

                        product.manufacturer,

                        product.description,

                        product.batch,

                        product.expiry,

                        product.use

                    ]
                        .filter(Boolean)
                        .join(" ")
                        .toLowerCase();


                    return text.includes(query);

                });


            renderProducts(filtered);

        }
    );

}


// ======================================================
// CART COUNT
// ======================================================

async function loadCartCount() {

    try {

        const response =
            await fetch(
                "/api/cart",
                {
                    credentials: "include"
                }
            );


        if (!response.ok) {

            return;

        }


        const data =
            await response.json();


        if (
            data &&
            Array.isArray(data.cart)
        ) {

            let count = 0;


            data.cart.forEach(item => {

                count +=
                    Number(
                        item.quantity || 1
                    );

            });


            if (cartCount) {

                cartCount.textContent =
                    count;

            }

        }

    }

    catch (error) {

        console.log(
            "Cart count error:",
            error.message
        );

    }

}


// ======================================================
// INITIAL LOAD
// ======================================================

renderProducts(products);

loadCartCount();


// ======================================================
// GLOBAL FUNCTIONS
// ======================================================

window.openProduct =
    openProduct;

window.closeProduct =
    closeProduct;

window.goToDoctorLogin =
    goToDoctorLogin;
