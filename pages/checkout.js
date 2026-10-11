// // ============================================
// // pages/checkout.js
// // DOCTOR CHECKOUT PAGE
// // ============================================


// function escapeHTML(value) {

//     if (
//         value === null ||
//         value === undefined
//     ) {
//         return "";
//     }

//     return String(value)
//         .replace(/&/g, "&amp;")
//         .replace(/</g, "&lt;")
//         .replace(/>/g, "&gt;")
//         .replace(/"/g, "&quot;")
//         .replace(/'/g, "&#039;");
// }


// // ============================================
// // CHECKOUT PAGE
// // ============================================

// function Checkout(doctor = {}) {


//     // ========================================
//     // DOCTOR DATA
//     // ========================================

//     const doctorMongoId =
//         doctor._id ||
//         doctor.id ||
//         "";

//     const doctorBusinessId =
//         doctor.doctorId ||
//         "";

//     const doctorName =
//         doctor.name ||
//         doctor.doctorName ||
//         "Doctor";

//     const doctorPhone =
//         doctor.phone ||
//         doctor.mobile ||
//         "";

//     const doctorEmail =
//         doctor.email ||
//         "";

//     const doctorDegree =
//         doctor.degree ||
//         "";

//     const doctorSpecialization =
//         doctor.specialization ||
//         "General Physician";

//     const doctorHospital =
//         doctor.hospital ||
//         "";

//     const doctorImage =
//         doctor.image ||
//         "";


//     // ========================================
//     // REMOVE DUPLICATE Dr.
//     // ========================================

//     let displayDoctorName =
//         String(doctorName).trim();


//     if (
//         displayDoctorName
//             .toLowerCase()
//             .startsWith("dr.")
//     ) {

//         displayDoctorName =
//             displayDoctorName
//                 .substring(3)
//                 .trim();

//     }


//     // ========================================
//     // SAFE DATA
//     // ========================================

//     const safeDoctorMongoId =
//         escapeHTML(doctorMongoId);

//     const safeDoctorBusinessId =
//         escapeHTML(doctorBusinessId);

//     const safeDoctorName =
//         escapeHTML(displayDoctorName);

//     const safeDoctorPhone =
//         escapeHTML(doctorPhone);

//     const safeDoctorEmail =
//         escapeHTML(doctorEmail);

//     const safeDoctorDegree =
//         escapeHTML(doctorDegree);

//     const safeDoctorSpecialization =
//         escapeHTML(doctorSpecialization);

//     const safeDoctorHospital =
//         escapeHTML(doctorHospital);

//     const safeDoctorImage =
//         escapeHTML(doctorImage);


//     // ========================================
//     // DOCTOR PHOTO
//     // ========================================

//     let doctorPhotoHTML = `
//         <div class="doctor-placeholder">
//             👨‍⚕️
//         </div>
//     `;


//     if (doctorImage) {

//         doctorPhotoHTML = `
//             <img
//                 src="${safeDoctorImage}"
//                 class="doctor-photo"
//                 alt="${safeDoctorName}"
//             >
//         `;

//     }


//     // ========================================
//     // DEGREE
//     // ========================================

//     const degreeHTML =
//         doctorDegree
//             ? `
//                 <p>
//                     🎓 ${safeDoctorDegree}
//                 </p>
//             `
//             : "";


//     // ========================================
//     // SPECIALIZATION
//     // ========================================

//     const specializationHTML =
//         doctorSpecialization
//             ? `
//                 <p>
//                     🩺 ${safeDoctorSpecialization}
//                 </p>
//             `
//             : "";


//     // ========================================
//     // HOSPITAL
//     // ========================================

//     const hospitalHTML =
//         doctorHospital
//             ? `
//                 <p>
//                     🏥 ${safeDoctorHospital}
//                 </p>
//             `
//             : "";


//     // ========================================
//     // PHONE
//     // ========================================

//     const phoneHTML =
//         doctorPhone
//             ? `
//                 <div class="detail-row">

//                     <span class="detail-label">
//                         Mobile
//                     </span>

//                     <span class="detail-value">
//                         ${safeDoctorPhone}
//                     </span>

//                 </div>
//             `
//             : "";


//     // ========================================
//     // EMAIL
//     // ========================================

//     const emailHTML =
//         doctorEmail
//             ? `
//                 <div class="detail-row">

//                     <span class="detail-label">
//                         Email
//                     </span>

//                     <span class="detail-value">
//                         ${safeDoctorEmail}
//                     </span>

//                 </div>
//             `
//             : "";


//     // ========================================
//     // PAGE
//     // ========================================

//     return `

// <!DOCTYPE html>

// <html lang="en">

// <head>

//     <meta charset="UTF-8">

//     <meta
//         name="viewport"
//         content="width=device-width, initial-scale=1.0"
//     >

//     <title>
//         Doctor Checkout
//     </title>


//     <!-- CHECKOUT CSS -->

//     <link
//         rel="stylesheet"
//         href="/css/checkout.css"
//     >

// </head>


// <body>


// <div class="checkout-container">


//     <!-- ====================================
//          HEADER
//     ===================================== -->

//     <div class="checkout-header">

//         <div class="checkout-icon">
//             🩺
//         </div>

//         <h1>
//             Doctor Checkout
//         </h1>

//         <p>
//             Confirm doctor details and place your order
//         </p>

//     </div>


//     <!-- ====================================
//          DOCTOR DETAILS
//     ===================================== -->

//     <div class="checkout-card">

//         <div class="section-title">
//             👨‍⚕️ Doctor Details
//         </div>


//         <div class="doctor-top">

//             ${doctorPhotoHTML}


//             <div class="doctor-info">

//                 <h2>
//                     Dr. ${safeDoctorName}
//                 </h2>

//                 ${degreeHTML}

//                 ${specializationHTML}

//                 ${hospitalHTML}

//             </div>

//         </div>


//         <div class="detail-row">

//             <span class="detail-label">
//                 Doctor ID
//             </span>

//             <span class="detail-value">

//                 ${
//                     safeDoctorBusinessId ||
//                     safeDoctorMongoId ||
//                     "-"
//                 }

//             </span>

//         </div>


//         <div class="detail-row">

//             <span class="detail-label">
//                 Name
//             </span>

//             <span class="detail-value">
//                 Dr. ${safeDoctorName}
//             </span>

//         </div>


//         ${phoneHTML}

//         ${emailHTML}

//     </div>


//     <!-- ====================================
//          ORDER SUMMARY
//     ===================================== -->

//     <div class="checkout-card">

//         <div class="section-title">
//             🛒 Order Summary
//         </div>


//         <div id="cartItems">

//             <div class="loading-cart">
//                 Loading products...
//             </div>

//         </div>


//         <div class="order-row">

//             <span>
//                 Platform Fee
//             </span>

//             <span>
//                 ₹0
//             </span>

//         </div>


//         <div class="order-row total">

//             <span>
//                 Total
//             </span>

//             <span
//                 class="price"
//                 id="cartTotal"
//             >
//                 ₹0.00
//             </span>

//         </div>

//     </div>


//     <!-- ====================================
//          PAYMENT
//     ===================================== -->

//     <div class="checkout-card">

//         <div class="section-title">
//             💳 Payment Method
//         </div>


//         <!-- UPI -->

//         <label class="payment-option">

//             <input
//                 type="radio"
//                 name="payment"
//                 value="upi"
//             >

//             <div>

//                 <strong>
//                     UPI
//                 </strong>

//                 <small>
//                     Google Pay / PhonePe / Paytm
//                 </small>

//             </div>

//         </label>


//         <!-- CARD -->

//         <label class="payment-option">

//             <input
//                 type="radio"
//                 name="payment"
//                 value="card"
//             >

//             <div>

//                 <strong>
//                     Card
//                 </strong>

//                 <small>
//                     Debit Card / Credit Card
//                 </small>

//             </div>

//         </label>


//         <!-- COD -->

//         <label
//             class="payment-option selected"
//             id="codOption"
//         >

//             <input
//                 type="radio"
//                 name="payment"
//                 value="cod"
//                 checked
//             >

//             <div>

//                 <strong>
//                     Cash on Delivery
//                 </strong>

//                 <small>
//                     Pay when your order is delivered
//                 </small>

//             </div>

//         </label>


//         <div
//             class="cod-message"
//             id="codMessage"
//         >

//             ✓ Cash on Delivery selected.

//             You will pay when your order is delivered.

//         </div>


//         <!-- BUTTON -->

//         <button
//             type="button"
//             class="checkout-btn"
//             id="checkoutBtn"
//         >

//             Place COD Order

//         </button>


//         <div
//             id="errorMessage"
//             class="error-message"
//         ></div>


//         <div
//             id="successMessage"
//             class="success-message"
//         ></div>


//         <div class="secure-text">

//             🔒 Secure order • Your information is protected

//         </div>

//     </div>


//     <!-- ====================================
//          BACK
//     ===================================== -->

//     <a
//         href="/doctor/dashboard"
//         class="back-btn"
//     >

//         ← Back to Dashboard

//     </a>


// </div>


// <!-- ====================================
//      CHECKOUT JS
// ===================================== -->

// <script>

//     window.checkoutDoctor = ${JSON.stringify({
//         _id: doctorMongoId,
//         doctorId: doctorBusinessId,
//         name: displayDoctorName,
//         phone: doctorPhone,
//         email: doctorEmail
//     })};

// </script>


// <script
//     src="/js/checkout.js"
// ></script>


// </body>

// </html>

// `;

// }


// // ============================================
// // EXPORT
// // ============================================

// module.exports = Checkout;

// ============================================
// pages/checkout.js
// DOCTOR CHECKOUT PAGE
// ============================================

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


// ============================================
// CHECKOUT
// ============================================

function Checkout(doctor = {}) {

    const doctorMongoId =
        doctor._id ||
        doctor.id ||
        "";

    const doctorBusinessId =
        doctor.doctorId ||
        "";

    // ------------------------------------------
    // DOCTOR NAME
    // ------------------------------------------

    let doctorName =
        doctor.name ||
        doctor.doctorName ||
        "Doctor";

    doctorName =
        String(doctorName)
            .trim()
            .replace(/^dr\.?\s*/i, "")
            .trim();


    const doctorPhone =
        doctor.phone ||
        doctor.mobile ||
        "";

    const doctorEmail =
        doctor.email ||
        "";

    const doctorDegree =
        doctor.degree ||
        "";

    const doctorSpecialization =
        doctor.specialization ||
        "General Physician";

    const doctorHospital =
        doctor.hospital ||
        "";

    const doctorImage =
        doctor.image ||
        "";


    // ==========================================
    // SAFE DATA
    // ==========================================

    const safeDoctorMongoId =
        escapeHTML(doctorMongoId);

    const safeDoctorBusinessId =
        escapeHTML(doctorBusinessId);

    const safeDoctorName =
        escapeHTML(doctorName);

    const safeDoctorPhone =
        escapeHTML(doctorPhone);

    const safeDoctorEmail =
        escapeHTML(doctorEmail);

    const safeDoctorDegree =
        escapeHTML(doctorDegree);

    const safeDoctorSpecialization =
        escapeHTML(doctorSpecialization);

    const safeDoctorHospital =
        escapeHTML(doctorHospital);

    const safeDoctorImage =
        escapeHTML(doctorImage);


    // ==========================================
    // DOCTOR PHOTO
    // ==========================================

    let doctorPhotoHTML = `
        <div class="doctor-placeholder">
            👨‍⚕️
        </div>
    `;

    if (doctorImage) {

        doctorPhotoHTML = `
            <img
                src="${safeDoctorImage}"
                class="doctor-photo"
                alt="Dr. ${safeDoctorName}"
                onerror="
                    this.style.display='none';
                    this.nextElementSibling.style.display='flex';
                "
            >

            <div
                class="doctor-placeholder photo-fallback"
                style="display:none;"
            >
                👨‍⚕️
            </div>
        `;
    }


    // ==========================================
    // OPTIONAL DETAILS
    // ==========================================

    const degreeHTML =
        doctorDegree
            ? `
                <p>
                    🎓 ${safeDoctorDegree}
                </p>
            `
            : "";


    const specializationHTML =
        doctorSpecialization
            ? `
                <p>
                    🩺 ${safeDoctorSpecialization}
                </p>
            `
            : "";


    const hospitalHTML =
        doctorHospital
            ? `
                <p>
                    🏥 ${safeDoctorHospital}
                </p>
            `
            : "";


    const phoneHTML =
        doctorPhone
            ? `
                <div class="detail-row">

                    <span class="detail-label">
                        Mobile
                    </span>

                    <span class="detail-value">
                        ${safeDoctorPhone}
                    </span>

                </div>
            `
            : "";


    const emailHTML =
        doctorEmail
            ? `
                <div class="detail-row">

                    <span class="detail-label">
                        Email
                    </span>

                    <span class="detail-value">
                        ${safeDoctorEmail}
                    </span>

                </div>
            `
            : "";


    // ==========================================
    // PAGE
    // ==========================================

    return `

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="theme-color"
        content="#2563eb"
    >

    <title>
        Doctor Checkout | GLOBAL HEALTHCARE
    </title>

    <link
        rel="stylesheet"
        href="/css/checkout.css"
    >

</head>


<body>

<div class="checkout-container">


    <!-- ======================================
         HEADER
    ======================================= -->

    <header class="checkout-header">

        <a
            href="/doctor/dashboard"
            class="brand"
        >

            <div class="brand-icon">
                🩺
            </div>

            <div>

                <div class="brand-name">
                    GLOBAL HEALTHCARE
                </div>

                <div class="brand-sub">
                    SAFE & SECURE Healthcare
                </div>

            </div>

        </a>


        <div class="checkout-title">

            <div class="checkout-icon">
                🛒
            </div>

            <div>

                <h1>
                    Doctor Checkout
                </h1>

                <p>
                    Confirm your details and place your order
                </p>

            </div>

        </div>

    </header>



    <!-- ======================================
         DOCTOR DETAILS
    ======================================= -->

    <section class="checkout-card doctor-card">

        <div class="section-heading">

            <span class="section-icon">
                👨‍⚕️
            </span>

            <div>

                <h2>
                    Doctor Details
                </h2>

                <p>
                    Your registered doctor information
                </p>

            </div>

        </div>


        <div class="doctor-top">

            <div class="doctor-photo-wrap">

                ${doctorPhotoHTML}

            </div>


            <div class="doctor-info">

                <h3>
                    Dr. ${safeDoctorName}
                </h3>

                ${degreeHTML}

                ${specializationHTML}

                ${hospitalHTML}

            </div>

        </div>


        <div class="doctor-details-grid">


            <div class="detail-box">

                <span class="detail-label">
                    Doctor ID
                </span>

                <strong>
                    ${
                        safeDoctorBusinessId ||
                        safeDoctorMongoId ||
                        "-"
                    }
                </strong>

            </div>


            <div class="detail-box">

                <span class="detail-label">
                    Name
                </span>

                <strong>
                    Dr. ${safeDoctorName}
                </strong>

            </div>


            ${phoneHTML}

            ${emailHTML}


        </div>

    </section>



    <!-- ======================================
         ORDER SUMMARY
    ======================================= -->

    <section class="checkout-card">

        <div class="section-heading">

            <span class="section-icon">
                🛒
            </span>

            <div>

                <h2>
                    Order Summary
                </h2>

                <p>
                    Products in your cart
                </p>

            </div>

        </div>


        <div id="cartItems">

            <div class="loading-box">

                <div class="loader"></div>

                <span>
                    Loading products...
                </span>

            </div>

        </div>


        <div
            id="cartEmpty"
            class="empty-cart"
            style="display:none;"
        >

            <div class="empty-icon">
                🛒
            </div>

            <h3>
                Your cart is empty
            </h3>

            <p>
                Add products from the doctor dashboard.
            </p>

            <a
                href="/doctor/dashboard"
                class="shop-btn"
            >
                Browse Products
            </a>

        </div>


        <div
            id="cartError"
            class="cart-error"
            style="display:none;"
        >

            <div class="error-icon">
                ⚠️
            </div>

            <div>

                <strong>
                    Unable to load cart
                </strong>

                <p id="cartErrorText">
                    Please try again.
                </p>

            </div>

            <button
                type="button"
                onclick="loadCart()"
                class="retry-btn"
            >
                Retry
            </button>

        </div>


        <div class="summary-box">

            <div class="summary-row">

                <span>
                    Subtotal
                </span>

                <strong id="cartSubtotal">
                    ₹0.00
                </strong>

            </div>


            <div class="summary-row">

                <span>
                    Platform Fee
                </span>

                <strong>
                    ₹0.00
                </strong>

            </div>


            <div class="summary-divider"></div>


            <div class="summary-row total-row">

                <span>
                    Total Amount
                </span>

                <strong id="cartTotal">
                    ₹0.00
                </strong>

            </div>

        </div>

    </section>



    <!-- ======================================
         PAYMENT
    ======================================= -->

    <section class="checkout-card payment-card">

        <div class="section-heading">

            <span class="section-icon">
                💳
            </span>

            <div>

                <h2>
                    Payment Method
                </h2>

                <p>
                    Select your preferred payment method
                </p>

            </div>

        </div>


        <!-- UPI -->

        <label
            class="payment-option"
            data-payment="upi"
        >

            <input
                type="radio"
                name="payment"
                value="upi"
            >

            <span class="payment-radio"></span>

            <span class="payment-icon">
                📱
            </span>

            <span class="payment-content">

                <strong>
                    UPI
                </strong>

                <small>
                    Google Pay / PhonePe / Paytm
                </small>

            </span>

        </label>



        <!-- CARD -->

        <label
            class="payment-option"
            data-payment="card"
        >

            <input
                type="radio"
                name="payment"
                value="card"
            >

            <span class="payment-radio"></span>

            <span class="payment-icon">
                💳
            </span>

            <span class="payment-content">

                <strong>
                    Card
                </strong>

                <small>
                    Debit Card / Credit Card
                </small>

            </span>

        </label>



        <!-- COD -->

        <label
            class="payment-option selected"
            data-payment="cod"
            id="codOption"
        >

            <input
                type="radio"
                name="payment"
                value="cod"
                checked
            >

            <span class="payment-radio"></span>

            <span class="payment-icon">
                💵
            </span>

            <span class="payment-content">

                <strong>
                    Cash on Delivery
                </strong>

                <small>
                    Pay when your order is delivered
                </small>

            </span>

        </label>


        <div
            class="cod-message"
            id="codMessage"
        >

            ✓ Cash on Delivery selected.
            You will pay when your order is delivered.

        </div>


        <div
            id="paymentNotice"
            class="payment-notice"
            style="display:none;"
        >
        </div>


        <!-- BUTTON -->

        <button
            type="button"
            class="checkout-btn"
            id="checkoutBtn"
            disabled
        >

            <span id="checkoutBtnText">
                Loading Cart...
            </span>

        </button>


        <div
            id="errorMessage"
            class="error-message"
        ></div>


        <div
            id="successMessage"
            class="success-message"
        ></div>


        <div class="secure-text">

            🔒 Secure order • Your information is protected

        </div>

    </section>



    <!-- ======================================
         BACK
    ======================================= -->

    <a
        href="/doctor/dashboard"
        class="back-btn"
    >

        ← Back to Dashboard

    </a>


    <footer class="checkout-footer">

        © 2026
        <strong>
            GLOBAL HEALTHCARE
        </strong>

        <span>•</span>

        Powered by
        <strong>
            Osium Biogenix
        </strong>

    </footer>


</div>



<script>

    window.checkoutDoctor =
        ${JSON.stringify({

            _id:
                doctorMongoId,

            doctorId:
                doctorBusinessId,

            name:
                doctorName,

            phone:
                doctorPhone,

            email:
                doctorEmail

        })};

</script>


<script
    src="/js/checkout.js"
></script>


</body>

</html>

`;

}


module.exports = Checkout;
