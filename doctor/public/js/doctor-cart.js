/* =====================================================
   DOCTOR CART.JS
   MongoDB / API Based Cart
===================================================== */

"use strict";


/* =====================================================
   API HELPER
===================================================== */

async function cartRequest(url, options = {}) {

    try {

        const response = await fetch(url, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {})
            },
            ...options
        });


        const contentType =
            response.headers.get("content-type") || "";


        if (!contentType.includes("application/json")) {

            const text = await response.text();

            console.error(
                "Expected JSON but received:",
                text.substring(0, 300)
            );

            throw new Error(
                "Server returned invalid response."
            );
        }


        const data = await response.json();


        if (!response.ok) {

            throw new Error(
                data.message ||
                data.error ||
                "Request failed."
            );
        }


        return data;

    } catch (error) {

        console.error(
            "Cart API Error:",
            error
        );

        throw error;
    }
}



/* =====================================================
   SAFE TEXT
===================================================== */

function safeText(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}



/* =====================================================
   CART DATA
===================================================== */

let doctorCart = [];



/* =====================================================
   NORMALIZE CART
===================================================== */

function normalizeCart(data) {

    if (!data) {
        return [];
    }


    let items = [];


    if (Array.isArray(data)) {

        items = data;

    } else if (Array.isArray(data.items)) {

        items = data.items;

    } else if (
        data.cart &&
        Array.isArray(data.cart.items)
    ) {

        items = data.cart.items;

    } else if (
        data.data &&
        Array.isArray(data.data.items)
    ) {

        items = data.data.items;

    } else if (
        data.data &&
        Array.isArray(data.data)
    ) {

        items = data.data;
    }


    return items.map(function (item) {

        return {

            id:
                item.productId ||
                item.id ||
                item._id ||
                "",

            productId:
                item.productId ||
                item.id ||
                item._id ||
                "",

            name:
                item.name ||
                "Product",

            price:
                Number(item.price || 0),

            qty:
                Math.max(
                    1,
                    Number(
                        item.quantity ||
                        item.qty ||
                        1
                    )
                ),

            quantity:
                Math.max(
                    1,
                    Number(
                        item.quantity ||
                        item.qty ||
                        1
                    )
                ),

            image:
                item.image ||
                "/images/no-image.png"
        };

    });
}



/* =====================================================
   GET CART FROM DATABASE
===================================================== */

async function getCart() {

    try {

        const data =
            await cartRequest(
                "/api/cart"
            );


        doctorCart =
            normalizeCart(data);


        return doctorCart;

    } catch (error) {

        console.error(
            "Unable to load cart:",
            error
        );


        doctorCart = [];


        return [];
    }
}



/* =====================================================
   HEADER CART COUNT
===================================================== */

function updateHeaderCartCount(cart) {

    const element =
        document.getElementById(
            "headerCartCount"
        );


    if (!element) {
        return;
    }


    if (!Array.isArray(cart)) {
        cart = [];
    }


    let count = 0;


    cart.forEach(function (item) {

        count += Math.max(
            1,
            Number(
                item.quantity ||
                item.qty ||
                1
            )
        );

    });


    element.textContent =
        count;


    element.style.display =
        count > 0
            ? "inline-flex"
            : "none";
}



/* =====================================================
   UPDATE SUMMARY
===================================================== */

function updateSummary(cart) {

    if (!Array.isArray(cart)) {
        cart = [];
    }


    let count = 0;

    let subtotal = 0;


    cart.forEach(function (item) {

        const price =
            Number(item.price || 0);


        const qty =
            Math.max(
                1,
                Number(
                    item.quantity ||
                    item.qty ||
                    1
                )
            );


        count += qty;


        subtotal +=
            price * qty;

    });


    const delivery = 0;


    const total =
        subtotal + delivery;



    const countElement =
        document.getElementById(
            "cartCount"
        );


    const subtotalElement =
        document.getElementById(
            "subtotal"
        );


    const deliveryElement =
        document.getElementById(
            "delivery"
        );


    const totalElement =
        document.getElementById(
            "total"
        );


    const checkoutButton =
        document.getElementById(
            "checkoutBtn"
        );



    if (countElement) {

        countElement.textContent =
            count;
    }


    if (subtotalElement) {

        subtotalElement.textContent =
            subtotal.toFixed(2);
    }


    if (deliveryElement) {

        deliveryElement.textContent =
            delivery.toFixed(2);
    }


    if (totalElement) {

        totalElement.textContent =
            total.toFixed(2);
    }


    if (checkoutButton) {

        checkoutButton.disabled =
            cart.length === 0;
    }


    updateHeaderCartCount(cart);
}



/* =====================================================
   RENDER CART
===================================================== */

function renderCart(cart) {

    const container =
        document.getElementById(
            "cartItems"
        );


    if (!container) {
        return;
    }


    if (!Array.isArray(cart)) {
        cart = [];
    }



    /* =================================================
       EMPTY CART
    ================================================= */

    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Your Cart is Empty
                </h3>

                <p>
                    Add healthcare products
                    from the dashboard.
                </p>

                <a
                    href="/doctor/dashboard"
                    class="shop-btn"
                >
                    Browse Products
                </a>

            </div>

        `;


        updateSummary([]);


        return;
    }



    /* =================================================
       CART ITEMS
    ================================================= */

    let html = "";


    cart.forEach(function (item, index) {

        const name =
            safeText(
                item.name ||
                "Product"
            );


        const image =
            safeText(
                item.image ||
                "/images/no-image.png"
            );


        const id =
            safeText(
                item.productId ||
                item.id ||
                "-"
            );


        const price =
            Number(
                item.price || 0
            );


        const qty =
            Math.max(
                1,
                Number(
                    item.quantity ||
                    item.qty ||
                    1
                )
            );


        const total =
            price * qty;



        html += `

            <article
                class="cart-item"
                data-product-id="${id}"
            >

                <div class="cart-item-image">

                    <img
                        src="${image}"
                        alt="${name}"
                        onerror="
                            this.onerror=null;
                            this.src='/images/no-image.png';
                        "
                    >

                </div>


                <div class="cart-item-info">

                    <h3>
                        ${name}
                    </h3>


                    <p>
                        Product ID: ${id}
                    </p>


                    <div class="item-price">
                        ₹${price.toFixed(2)}
                    </div>

                </div>


                <div class="item-actions">


                    <div class="qty-box">

                        <button
                            type="button"
                            class="qty-btn"
                            onclick="
                                changeQty(
                                    ${index},
                                    -1
                                )
                            "
                        >
                            −
                        </button>


                        <span
                            class="qty-value"
                        >
                            ${qty}
                        </span>


                        <button
                            type="button"
                            class="qty-btn"
                            onclick="
                                changeQty(
                                    ${index},
                                    1
                                )
                            "
                        >
                            +
                        </button>

                    </div>


                    <strong
                        class="item-total"
                    >
                        ₹${total.toFixed(2)}
                    </strong>


                    <button
                        type="button"
                        class="remove-btn"
                        onclick="
                            removeItem(
                                ${index}
                            )
                        "
                    >
                        🗑 Remove
                    </button>


                </div>

            </article>

        `;

    });


    container.innerHTML =
        html;


    updateSummary(cart);
}



/* =====================================================
   CHANGE QUANTITY
===================================================== */

async function changeQty(
    index,
    change
) {

    if (
        index < 0 ||
        index >= doctorCart.length
    ) {
        return;
    }


    const item =
        doctorCart[index];


    const productId =
        item.productId ||
        item.id;


    if (!productId) {

        alert(
            "Product ID not found."
        );

        return;
    }


    const currentQty =
        Math.max(
            1,
            Number(
                item.quantity ||
                item.qty ||
                1
            )
        );


    const newQty =
        currentQty +
        Number(change);



    /* ================================================
       REMOVE WHEN QUANTITY BECOMES ZERO
    ================================================= */

    if (newQty <= 0) {

        await removeItem(index);

        return;
    }



    try {

        await cartRequest(
            "/api/cart/update",
            {

                method: "PUT",

                body: JSON.stringify({

                    productId:
                        productId,

                    quantity:
                        newQty

                })

            }
        );


        await loadCart();


    } catch (error) {

        alert(
            error.message ||
            "Unable to update quantity."
        );

    }
}



/* =====================================================
   REMOVE ITEM
===================================================== */

async function removeItem(index) {

    if (
        index < 0 ||
        index >= doctorCart.length
    ) {
        return;
    }


    const item =
        doctorCart[index];


    const productId =
        item.productId ||
        item.id;


    if (!productId) {

        alert(
            "Product ID not found."
        );

        return;
    }


    try {

        await cartRequest(
            "/api/cart/remove/" +
            encodeURIComponent(
                productId
            ),
            {
                method: "DELETE"
            }
        );


        await loadCart();


    } catch (error) {

        alert(
            error.message ||
            "Unable to remove product."
        );

    }
}



/* =====================================================
   CLEAR CART
===================================================== */

async function clearCart() {

    if (
        !doctorCart ||
        doctorCart.length === 0
    ) {

        await loadCart();

        return;
    }


    const confirmed =
        window.confirm(
            "Are you sure you want to clear the cart?"
        );


    if (!confirmed) {
        return;
    }


    try {

        await cartRequest(
            "/api/cart/clear",
            {
                method: "DELETE"
            }
        );


        await loadCart();


    } catch (error) {

        alert(
            error.message ||
            "Unable to clear cart."
        );

    }
}



/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

    if (
        !doctorCart ||
        doctorCart.length === 0
    ) {

        alert(
            "Your cart is empty."
        );

        return;
    }


    window.location.href =
        "/doctor/checkout";
}



/* =====================================================
   LOAD CART
===================================================== */

async function loadCart() {

    const container =
        document.getElementById(
            "cartItems"
        );


    if (container) {

        container.innerHTML = `

            <div class="cart-loading">

                <div>
                    🛒
                </div>

                <p>
                    Loading cart...
                </p>

            </div>

        `;
    }


    const cart =
        await getCart();


    renderCart(cart);
}



/* =====================================================
   INITIALIZE
===================================================== */

async function initializeCart() {

    await loadCart();
}



/* =====================================================
   GLOBAL FUNCTIONS
   These are browser globals only.
===================================================== */

window.changeQty =
    changeQty;


window.removeItem =
    removeItem;


window.clearCart =
    clearCart;


window.checkout =
    checkout;


window.loadCart =
    loadCart;



/* =====================================================
   DOM READY
===================================================== */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeCart
    );

} else {

    initializeCart();

}
