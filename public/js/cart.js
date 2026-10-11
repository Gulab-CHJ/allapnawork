/* =========================================================
   DOCTOR CART - FINAL
   Database Based Cart
   API:
   GET    /api/cart
   POST   /api/cart
   PUT    /api/cart/:productId
   DELETE /api/cart/:productId
   DELETE /api/cart/clear
========================================================= */

(function () {

    "use strict";

    let cart = [];

    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHTML(value) {

        if (value === null || value === undefined) {
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
       FORMAT PRICE
    ===================================================== */

    function formatPrice(value) {

        const price = Number(value) || 0;

        return price.toFixed(2);
    }


    /* =====================================================
       LOAD CART
    ===================================================== */

    async function loadCart() {

        const cartContainer =
            document.getElementById("cartItems");

        if (!cartContainer) {
            return;
        }

        cartContainer.innerHTML = `
            <div style="
                text-align:center;
                padding:40px 20px;
                color:#64748b;
            ">
                Loading cart...
            </div>
        `;

        try {

            const response =
                await fetch("/api/cart", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Accept": "application/json"
                    }
                });

            const data = await response.json();

            console.log("CART API RESPONSE:", data);

            if (!response.ok) {

                if (response.status === 401) {
                    cart = [];
                    renderCart();

                    alert("Please login as doctor.");

                    return;
                }

                throw new Error(
                    data.message ||
                    "Unable to load cart"
                );
            }

            cart =
                Array.isArray(data.cart)
                    ? data.cart
                    : [];

            normalizeCart();

            renderCart();

        } catch (error) {

            console.error(
                "LOAD CART ERROR:",
                error
            );

            cart = [];

            cartContainer.innerHTML = `
                <div style="
                    text-align:center;
                    padding:50px 20px;
                    color:#dc2626;
                ">
                    <div style="
                        font-size:45px;
                        margin-bottom:10px;
                    ">
                        ⚠️
                    </div>

                    <h3>
                        Unable to load cart
                    </h3>

                    <p style="
                        margin-top:8px;
                        color:#64748b;
                    ">
                        Please refresh the page and try again.
                    </p>

                    <button
                        type="button"
                        onclick="loadCart()"
                        style="
                            margin-top:15px;
                            border:none;
                            background:#2563eb;
                            color:white;
                            padding:10px 18px;
                            border-radius:9px;
                            cursor:pointer;
                            font-weight:700;
                        "
                    >
                        🔄 Retry
                    </button>
                </div>
            `;

            updateSummary();
        }
    }


    /* =====================================================
       NORMALIZE CART
    ===================================================== */

    function normalizeCart() {

        cart = cart.map(item => {

            const quantity =
                Number(
                    item.quantity ??
                    item.qty ??
                    1
                );

            return {

                id:
                    String(
                        item.productId ??
                        item.id ??
                        ""
                    ),

                productId:
                    String(
                        item.productId ??
                        item.id ??
                        ""
                    ),

                name:
                    item.name ||
                    "Product",

                price:
                    Number(item.price) || 0,

                image:
                    item.image ||
                    "",

                quantity:
                    quantity > 0
                        ? quantity
                        : 1,

                qty:
                    quantity > 0
                        ? quantity
                        : 1
            };

        }).filter(item => item.productId);
    }


    /* =====================================================
       RENDER CART
    ===================================================== */

    function renderCart() {

        const container =
            document.getElementById("cartItems");

        if (!container) {
            return;
        }

        if (!Array.isArray(cart) || cart.length === 0) {

            container.innerHTML = `
                <div class="empty-cart">

                    <div class="empty-cart-icon">
                        🛒
                    </div>

                    <h3>
                        Your Cart is Empty
                    </h3>

                    <p>
                        Add some products from the
                        doctor dashboard.
                    </p>

                    <a
                        href="/doctor/dashboard"
                        class="shop-btn"
                    >
                        🛍️ Continue Shopping
                    </a>

                </div>
            `;

            updateSummary();

            return;
        }


        container.innerHTML =
            cart.map((item, index) => {

                const productId =
                    escapeHTML(item.productId);

                const name =
                    escapeHTML(item.name);

                const image =
                    escapeHTML(item.image);

                const price =
                    Number(item.price) || 0;

                const quantity =
                    Number(item.quantity) || 1;

                const itemTotal =
                    price * quantity;


                return `
                    <div
                        class="cart-item"
                        data-product-id="${productId}"
                    >

                        <!-- PRODUCT IMAGE -->

                        <div class="cart-item-image">

                            ${
                                image
                                    ? `
                                        <img
                                            src="${image}"
                                            alt="${name}"
                                            onerror="
                                                this.style.display='none';
                                            "
                                        >
                                      `
                                    : `
                                        <div style="
                                            width:100%;
                                            height:100%;
                                            display:flex;
                                            align-items:center;
                                            justify-content:center;
                                            font-size:35px;
                                        ">
                                            💊
                                        </div>
                                      `
                            }

                        </div>


                        <!-- PRODUCT INFO -->

                        <div class="cart-item-info">

                            <h3>
                                ${name}
                            </h3>

                            <p>
                                Product ID:
                                ${productId}
                            </p>

                            <div class="item-price">
                                ₹${formatPrice(price)}
                            </div>

                        </div>


                        <!-- ACTIONS -->

                        <div class="item-actions">

                            <div class="qty-box">

                                <button
                                    type="button"
                                    class="qty-btn"
                                    onclick="
                                        changeQuantity(
                                            '${productId}',
                                            -1
                                        )
                                    "
                                    aria-label="Decrease quantity"
                                >
                                    −
                                </button>

                                <span
                                    class="qty-value"
                                    id="qty-${productId}"
                                >
                                    ${quantity}
                                </span>

                                <button
                                    type="button"
                                    class="qty-btn"
                                    onclick="
                                        changeQuantity(
                                            '${productId}',
                                            1
                                        )
                                    "
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>

                            </div>


                            <strong class="item-total">
                                ₹${formatPrice(itemTotal)}
                            </strong>


                            <button
                                type="button"
                                class="remove-btn"
                                onclick="
                                    removeItem(
                                        '${productId}'
                                    )
                                "
                            >
                                🗑 Remove
                            </button>

                        </div>

                    </div>
                `;

            }).join("");

        updateSummary();
    }


    /* =====================================================
       CHANGE QUANTITY
       +1 OR -1
    ===================================================== */

    async function changeQuantity(
        productId,
        change
    ) {

        productId = String(productId);

        const item =
            cart.find(
                product =>
                    String(product.productId) ===
                    productId
            );

        if (!item) {

            console.error(
                "Product not found:",
                productId
            );

            return;
        }


        const currentQuantity =
            Number(item.quantity) || 1;


        const newQuantity =
            currentQuantity +
            Number(change);


        /* ================================================
           MINIMUM QUANTITY = 1
        ================================================= */

        if (newQuantity < 1) {

            return;
        }


        /* ================================================
           TEMPORARY UI UPDATE
        ================================================= */

        item.quantity =
            newQuantity;

        item.qty =
            newQuantity;

        renderCart();


        try {

            const response =
                await fetch(
                    "/api/cart/" +
                    encodeURIComponent(
                        productId
                    ),
                    {
                        method: "PUT",

                        credentials: "include",

                        headers: {
                            "Content-Type":
                                "application/json",

                            "Accept":
                                "application/json"
                        },

                        body: JSON.stringify({
                            quantity:
                                newQuantity
                        })
                    }
                );


            const data =
                await response.json();


            console.log(
                "UPDATE CART RESPONSE:",
                data
            );


            if (!response.ok ||
                !data.success) {

                throw new Error(
                    data.message ||
                    "Quantity update failed"
                );
            }


            /* =========================================
               USE DATABASE RESPONSE
            ========================================= */

            if (Array.isArray(data.cart)) {

                cart =
                    data.cart;

                normalizeCart();

                renderCart();
            }

        } catch (error) {

            console.error(
                "CHANGE QUANTITY ERROR:",
                error
            );

            /*
                Database update failed.
                Reload actual database cart.
            */

            await loadCart();

            alert(
                error.message ||
                "Unable to update quantity"
            );
        }
    }


    /* =====================================================
       REMOVE ITEM
    ===================================================== */

    async function removeItem(productId) {

        productId = String(productId);

        const item =
            cart.find(
                product =>
                    String(product.productId) ===
                    productId
            );


        if (!item) {
            return;
        }


        const confirmRemove =
            confirm(
                `"${item.name}" ko cart se remove karna hai?`
            );


        if (!confirmRemove) {
            return;
        }


        try {

            const response =
                await fetch(
                    "/api/cart/" +
                    encodeURIComponent(
                        productId
                    ),
                    {
                        method: "DELETE",

                        credentials: "include",

                        headers: {
                            "Accept":
                                "application/json"
                        }
                    }
                );


            const data =
                await response.json();


            console.log(
                "REMOVE CART RESPONSE:",
                data
            );


            if (!response.ok ||
                !data.success) {

                throw new Error(
                    data.message ||
                    "Unable to remove product"
                );
            }


            if (Array.isArray(data.cart)) {

                cart =
                    data.cart;

                normalizeCart();

                renderCart();

            } else {

                await loadCart();
            }


        } catch (error) {

            console.error(
                "REMOVE ITEM ERROR:",
                error
            );

            alert(
                error.message ||
                "Unable to remove product"
            );
        }
    }


    /* =====================================================
       CLEAR CART
    ===================================================== */

    async function clearCart() {

        if (!cart.length) {

            return;
        }


        const confirmClear =
            confirm(
                "Kya aap poora cart clear karna chahte hain?"
            );


        if (!confirmClear) {
            return;
        }


        try {

            const response =
                await fetch(
                    "/api/cart/clear",
                    {
                        method: "DELETE",

                        credentials: "include",

                        headers: {
                            "Accept":
                                "application/json"
                        }
                    }
                );


            const data =
                await response.json();


            console.log(
                "CLEAR CART RESPONSE:",
                data
            );


            if (!response.ok ||
                !data.success) {

                throw new Error(
                    data.message ||
                    "Unable to clear cart"
                );
            }


            cart = [];

            renderCart();


        } catch (error) {

            console.error(
                "CLEAR CART ERROR:",
                error
            );

            alert(
                error.message ||
                "Unable to clear cart"
            );
        }
    }


    /* =====================================================
       UPDATE SUMMARY
    ===================================================== */

    function updateSummary() {

        let totalItems = 0;

        let subtotal = 0;


        cart.forEach(item => {

            const quantity =
                Number(item.quantity) || 0;

            const price =
                Number(item.price) || 0;

            totalItems += quantity;

            subtotal +=
                price * quantity;

        });


        const delivery = 0;

        const total =
            subtotal +
            delivery;


        /* ================================================
           TOTAL ITEMS
        ================================================= */

        const cartCount =
            document.getElementById(
                "cartCount"
            );

        if (cartCount) {

            cartCount.textContent =
                totalItems;
        }


        /* ================================================
           SUBTOTAL
        ================================================= */

        const subtotalElement =
            document.getElementById(
                "subtotal"
            );

        if (subtotalElement) {

            subtotalElement.textContent =
                formatPrice(
                    subtotal
                );
        }


        /* ================================================
           DELIVERY
        ================================================= */

        const deliveryElement =
            document.getElementById(
                "delivery"
            );

        if (deliveryElement) {

            deliveryElement.textContent =
                formatPrice(
                    delivery
                );
        }


        /* ================================================
           TOTAL
        ================================================= */

        const totalElement =
            document.getElementById(
                "total"
            );

        if (totalElement) {

            totalElement.textContent =
                formatPrice(
                    total
                );
        }


        /* ================================================
           HEADER CART COUNT
        ================================================= */

        const headerCount =
            document.getElementById(
                "headerCartCount"
            );


        if (headerCount) {

            if (totalItems > 0) {

                headerCount.style.display =
                    "inline-flex";

                headerCount.textContent =
                    totalItems;

            } else {

                headerCount.style.display =
                    "none";

                headerCount.textContent =
                    "0";
            }
        }


        /* ================================================
           CHECKOUT BUTTON
        ================================================= */

        const checkoutButton =
            document.getElementById(
                "checkoutBtn"
            );


        if (checkoutButton) {

            checkoutButton.disabled =
                cart.length === 0;
        }
    }


    /* =====================================================
       CHECKOUT
    ===================================================== */

    function checkout() {

        if (!cart.length) {

            alert(
                "Your cart is empty."
            );

            return;
        }


        window.location.href =
            "/doctor/checkout";
    }


    /* =====================================================
       ADD PRODUCT TO CART
       Dashboard se bhi use kar sakte hain
    ===================================================== */

    async function addToCart(product) {

        if (!product ||
            !product.productId &&
            !product.id) {

            alert(
                "Invalid product."
            );

            return;
        }


        const productId =
            String(
                product.productId ||
                product.id
            );


        const quantity =
            Number(
                product.quantity ||
                product.qty ||
                1
            );


        try {

            const response =
                await fetch(
                    "/api/cart",
                    {
                        method: "POST",

                        credentials: "include",

                        headers: {
                            "Content-Type":
                                "application/json",

                            "Accept":
                                "application/json"
                        },

                        body:
                            JSON.stringify({

                                productId:
                                    productId,

                                name:
                                    product.name ||
                                    "Product",

                                price:
                                    Number(
                                        product.price
                                    ) || 0,

                                image:
                                    product.image ||
                                    "",

                                quantity:
                                    quantity > 0
                                        ? quantity
                                        : 1
                            })
                    }
                );


            const data =
                await response.json();


            console.log(
                "ADD TO CART RESPONSE:",
                data
            );


            if (!response.ok ||
                !data.success) {

                throw new Error(
                    data.message ||
                    "Unable to add product"
                );
            }


            alert(
                "✅ Product added to cart"
            );


            /*
                Cart page par ho to
                database se fresh cart load karein.
            */

            if (
                window.location.pathname ===
                "/doctor/cart"
            ) {

                await loadCart();
            }


            return data;


        } catch (error) {

            console.error(
                "ADD TO CART ERROR:",
                error
            );

            alert(
                error.message ||
                "Unable to add product to cart"
            );

            throw error;
        }
    }


    /* =====================================================
       GLOBAL FUNCTIONS
       DoctorCart HTML onclick ke liye
    ===================================================== */

    window.loadCart =
        loadCart;

    window.changeQuantity =
        changeQuantity;

    window.removeItem =
        removeItem;

    window.clearCart =
        clearCart;

    window.checkout =
        checkout;

    window.addToCart =
        addToCart;


    /* =====================================================
       PAGE LOAD
    ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            console.log(
                "Doctor Cart JS Loaded"
            );

            loadCart();

        }
    );

})();
