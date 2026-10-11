// ============================================
// public/js/checkout.js
// DOCTOR CHECKOUT JAVASCRIPT
// ============================================

(function () {

    "use strict";


    // ==========================================
    // GLOBAL STATE
    // ==========================================

    let cart = [];

    let selectedPayment = "cod";

    let placingOrder = false;


    // ==========================================
    // ELEMENTS
    // ==========================================

    const cartItemsEl =
        document.getElementById("cartItems");

    const cartEmptyEl =
        document.getElementById("cartEmpty");

    const cartErrorEl =
        document.getElementById("cartError");

    const cartErrorTextEl =
        document.getElementById("cartErrorText");

    const cartSubtotalEl =
        document.getElementById("cartSubtotal");

    const cartTotalEl =
        document.getElementById("cartTotal");

    const checkoutBtn =
        document.getElementById("checkoutBtn");

    const checkoutBtnText =
        document.getElementById("checkoutBtnText");

    const errorMessage =
        document.getElementById("errorMessage");

    const successMessage =
        document.getElementById("successMessage");

    const codMessage =
        document.getElementById("codMessage");

    const paymentNotice =
        document.getElementById("paymentNotice");


    // ==========================================
    // ESCAPE HTML
    // ==========================================

    function escapeHTML(value) {

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


    // ==========================================
    // MONEY
    // ==========================================

    function money(value) {

        const amount =
            Number(value) || 0;

        return "₹" +
            amount.toFixed(2);

    }


    // ==========================================
    // NORMALIZE CART
    // ==========================================

    function normalizeCart(items) {

        if (!Array.isArray(items)) {
            return [];
        }


        return items
            .map(item => {

                const quantity =
                    Number(
                        item.qty ??
                        item.quantity ??
                        1
                    );


                const price =
                    Number(
                        item.price || 0
                    );


                return {

                    id:
                        String(
                            item.id ||
                            item.productId ||
                            ""
                        ),

                    productId:
                        String(
                            item.productId ||
                            item.id ||
                            ""
                        ),

                    name:
                        item.name ||
                        "Product",

                    price:
                        price,

                    image:
                        item.image ||
                        "",

                    qty:
                        quantity > 0
                            ? quantity
                            : 1

                };

            })
            .filter(item =>
                item.productId
            );

    }


    // ==========================================
    // LOAD CART
    // ==========================================

    window.loadCart =
        async function loadCart() {

            hideMessages();

            showLoading();

            disableCheckout(
                "Loading Cart..."
            );


            try {

                const response =
                    await fetch(
                        "/api/cart",
                        {

                            method:
                                "GET",

                            credentials:
                                "include",

                            headers: {

                                "Accept":
                                    "application/json"

                            },

                            cache:
                                "no-store"

                        }
                    );


                let data = null;


                try {

                    data =
                        await response.json();

                }

                catch (jsonError) {

                    throw new Error(
                        "Cart API returned invalid JSON"
                    );

                }


                console.log(
                    "CART API RESPONSE:",
                    data
                );


                if (!response.ok) {

                    throw new Error(
                        data?.message ||
                        `Cart API returned HTTP ${response.status}`
                    );

                }


                if (
                    data &&
                    data.success === false
                ) {

                    throw new Error(
                        data.message ||
                        "Unable to load cart"
                    );

                }


                cart =
                    normalizeCart(
                        data?.cart ||
                        data?.items ||
                        []
                    );


                renderCart();


            }

            catch (error) {

                console.error(
                    "CHECKOUT CART ERROR:",
                    error
                );


                cart = [];

                renderEmptyTotals();

                showCartError(
                    error.message ||
                    "Unable to load cart"
                );

            }

        };


    // ==========================================
    // LOADING
    // ==========================================

    function showLoading() {

        cartItemsEl.style.display =
            "block";

        cartEmptyEl.style.display =
            "none";

        cartErrorEl.style.display =
            "none";


        cartItemsEl.innerHTML = `

            <div class="loading-box">

                <div class="loader"></div>

                <span>
                    Loading products...
                </span>

            </div>

        `;

    }


    // ==========================================
    // CART ERROR
    // ==========================================

    function showCartError(message) {

        cartItemsEl.style.display =
            "none";

        cartEmptyEl.style.display =
            "none";

        cartErrorEl.style.display =
            "flex";


        cartErrorTextEl.textContent =
            message;


        disableCheckout(
            "Cart Unavailable"
        );

    }


    // ==========================================
    // RENDER CART
    // ==========================================

    function renderCart() {

        if (!cart.length) {

            renderEmptyTotals();

            cartItemsEl.style.display =
                "none";

            cartEmptyEl.style.display =
                "block";

            cartErrorEl.style.display =
                "none";


            disableCheckout(
                "Cart is Empty"
            );

            return;

        }


        cartItemsEl.style.display =
            "block";

        cartEmptyEl.style.display =
            "none";

        cartErrorEl.style.display =
            "none";


        let subtotal = 0;


        const html =
            cart.map(item => {

                const quantity =
                    Number(item.qty) || 1;

                const price =
                    Number(item.price) || 0;

                const amount =
                    price * quantity;


                subtotal += amount;


                const image =
                    item.image
                        ? `
                            <img
                                src="${escapeHTML(item.image)}"
                                alt="${escapeHTML(item.name)}"
                                class="cart-product-image"
                                onerror="
                                    this.style.display='none';
                                    this.nextElementSibling.style.display='flex';
                                "
                            >

                            <div
                                class="cart-image-fallback"
                                style="display:none;"
                            >
                                📦
                            </div>
                        `
                        : `
                            <div class="cart-image-fallback">
                                📦
                            </div>
                        `;


                return `

                    <div class="cart-product">

                        <div class="cart-product-image-wrap">

                            ${image}

                        </div>


                        <div class="cart-product-info">

                            <h3>
                                ${escapeHTML(item.name)}
                            </h3>

                            <div class="cart-product-meta">

                                <span>
                                    ${money(price)}
                                </span>

                                <span>
                                    × ${quantity}
                                </span>

                            </div>

                        </div>


                        <div class="cart-product-total">

                            ${money(amount)}

                        </div>

                    </div>

                `;

            }).join("");


        cartItemsEl.innerHTML =
            html;


        cartSubtotalEl.textContent =
            money(subtotal);

        cartTotalEl.textContent =
            money(subtotal);


        enableCheckout();


    }


    // ==========================================
    // EMPTY TOTALS
    // ==========================================

    function renderEmptyTotals() {

        cartSubtotalEl.textContent =
            "₹0.00";

        cartTotalEl.textContent =
            "₹0.00";

    }


    // ==========================================
    // ENABLE
    // ==========================================

    function enableCheckout() {

        checkoutBtn.disabled =
            false;

        checkoutBtnText.textContent =
            selectedPayment === "cod"
                ? "Place COD Order"
                : "Continue to Payment";

    }


    // ==========================================
    // DISABLE
    // ==========================================

    function disableCheckout(text) {

        checkoutBtn.disabled =
            true;

        checkoutBtnText.textContent =
            text;

    }


    // ==========================================
    // PAYMENT
    // ==========================================

    function setupPaymentOptions() {

        const options =
            document.querySelectorAll(
                ".payment-option"
            );


        options.forEach(option => {

            option.addEventListener(
                "click",
                function () {

                    const radio =
                        option.querySelector(
                            'input[type="radio"]'
                        );


                    if (!radio) {
                        return;
                    }


                    radio.checked =
                        true;


                    selectedPayment =
                        radio.value;


                    options.forEach(
                        item =>
                            item.classList.remove(
                                "selected"
                            )
                    );


                    option.classList.add(
                        "selected"
                    );


                    updatePaymentUI();

                }
            );

        });


        document
            .querySelectorAll(
                'input[name="payment"]'
            )
            .forEach(radio => {

                radio.addEventListener(
                    "change",
                    function () {

                        selectedPayment =
                            this.value;

                        updatePaymentUI();

                    }
                );

            });


        updatePaymentUI();

    }


    // ==========================================
    // PAYMENT UI
    // ==========================================

    function updatePaymentUI() {

        if (
            selectedPayment ===
            "cod"
        ) {

            codMessage.style.display =
                "block";

            paymentNotice.style.display =
                "none";


            if (cart.length) {

                enableCheckout();

            }

        }

        else {

            codMessage.style.display =
                "none";

            paymentNotice.style.display =
                "block";

            paymentNotice.textContent =
                "Online payment will be available soon. Please select Cash on Delivery.";

            disableCheckout(
                "Online Payment Coming Soon"
            );

        }

    }


    // ==========================================
    // PLACE ORDER
    // ==========================================

    checkoutBtn.addEventListener(
        "click",
        placeOrder
    );


    async function placeOrder() {

        if (placingOrder) {
            return;
        }


        if (!cart.length) {

            showError(
                "Your cart is empty."
            );

            return;

        }


        if (
            selectedPayment !==
            "cod"
        ) {

            showError(
                "Please select Cash on Delivery."
            );

            return;

        }


        placingOrder =
            true;


        hideMessages();

        checkoutBtn.disabled =
            true;

        checkoutBtnText.textContent =
            "Placing Order...";


        try {

            const response =
                await fetch(
                    "/doctor/checkout/cod",
                    {

                        method:
                            "POST",

                        credentials:
                            "include",

                        headers: {

                            "Content-Type":
                                "application/json",

                            "Accept":
                                "application/json"

                        },

                        body:
                            JSON.stringify({

                                cart:
                                    cart,

                                paymentMethod:
                                    "cod"

                            })

                    }
                );


            const data =
                await response.json();


            console.log(
                "COD RESPONSE:",
                data
            );


            if (!response.ok) {

                throw new Error(
                    data?.message ||
                    `Order failed (${response.status})`
                );

            }


            if (
                !data ||
                !data.success
            ) {

                throw new Error(
                    data?.message ||
                    "Unable to place order"
                );

            }


            showSuccess(
                data.message ||
                "Order placed successfully."
            );


            checkoutBtnText.textContent =
                "Order Placed ✓";


            // --------------------------------------
            // Clear database cart
            // --------------------------------------

            try {

                await fetch(
                    "/api/cart/clear",
                    {

                        method:
                            "DELETE",

                        credentials:
                            "include",

                        headers: {

                            "Accept":
                                "application/json"

                        }

                    }
                );

            }

            catch (clearError) {

                console.warn(
                    "Cart clear warning:",
                    clearError
                );

            }


            // --------------------------------------
            // Redirect
            // --------------------------------------

           setTimeout(
    function () {

        if (data.redirect) {

            window.location.href =
                data.redirect;

        }

        else if (data.orderId) {

            window.location.href =
                "/doctor/checkout-success/" +
                data.orderId;

        }

        else {

            window.location.href =
                "/doctor/orders";

        }

    },
    700
);


        }

        catch (error) {

            console.error(
                "PLACE ORDER ERROR:",
                error
            );


            showError(
                error.message ||
                "Unable to place order."
            );


            checkoutBtn.disabled =
                false;

            checkoutBtnText.textContent =
                "Place COD Order";

        }

        finally {

            placingOrder =
                false;

        }

    }


    // ==========================================
    // ERROR
    // ==========================================

    function showError(message) {

        errorMessage.textContent =
            "⚠️ " + message;

        errorMessage.style.display =
            "block";

        successMessage.style.display =
            "none";

    }


    // ==========================================
    // SUCCESS
    // ==========================================

    function showSuccess(message) {

        successMessage.textContent =
            "✓ " + message;

        successMessage.style.display =
            "block";

        errorMessage.style.display =
            "none";

    }


    // ==========================================
    // HIDE MESSAGES
    // ==========================================

    function hideMessages() {

        errorMessage.style.display =
            "none";

        successMessage.style.display =
            "none";

    }


    // ==========================================
    // START
    // ==========================================

    setupPaymentOptions();

    loadCart();


})();
