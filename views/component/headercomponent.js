// function Header() {
//     return `
//      <link rel="stylesheet" href="/css/style.css"> 

// <!-- Font Awesome -->
// <link rel="stylesheet"
// href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

// <header class="header">

//     <!-- Logo -->
//     <div class="logo">

//         <img src="/images/GS LOGO.png" alt="HHGS Logo">

//         <div class="logo-text">
//             <h2>HHGS</h2>
//             <span>Human Healthy Global Services</span>
//         </div>

//     </div>

//     <!-- Menu -->

//     <nav class="navbar" id="navbar">

//         <a href="/student-login">
//             <i class="fa-solid fa-user-graduate"></i>
//             Student
//         </a>

//         <a href="/admin/doctor-login">
//     <i class="fa-solid fa-user-doctor"></i>
//     Doctor
// </a>

//         <a href="/services">
//             <i class="fa-solid fa-briefcase-medical"></i>
//             Services
//         </a>

//         <a href="/store">
//             <i class="fa-solid fa-store"></i>
//             HumanHealth
//         </a>

//         <a href="/contact">
//             <i class="fa-solid fa-phone"></i>
//             Contact
//         </a>

//         <a href="/admin" class="admin-btn">
//             <i class="fa-solid fa-lock"></i>
//             Admin
//         </a>

//     </nav>

//     <!-- Mobile Button -->

//     <button class="menu-btn" id="menuBtn">

//         <i class="fa-solid fa-bars"></i>

//     </button>

// </header>
// <script src="/js/headercomponent.js"></script>

// `;
// }

// module.exports = Header;

function Header() {
return `

<style>

/* =========================
   HEADER
========================= */

.site-header {
    width: 100%;
    margin: 0;
    padding: 0;

    background: #ffffff;

    border-bottom: 1px solid #e5e7eb;

    box-sizing: border-box;

    position: relative;
    z-index: 1000;
}


/* =========================
   HEADER INNER
========================= */

.header-inner {
    width: 100%;
    max-width: 1400px;

    min-height: 70px;

    margin: 0 auto;
    padding: 8px 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
}


/* =========================
   LOGO
========================= */

.logo {
    display: flex;
    align-items: center;

    gap: 10px;

    margin: 0;
    padding: 0;

    text-decoration: none;
}


.logo img {
    width: 48px;
    height: 48px;

    object-fit: contain;

    display: block;

    margin: 0;
    padding: 0;
}


.logo-text {
    margin: 0;
    padding: 0;
}


.logo-text h2 {
    margin: 0;
    padding: 0;

    font-size: 21px;

    line-height: 1.1;

    color: #1e3a8a;
}


.logo-text span {
    display: block;

    margin: 2px 0 0 0;
    padding: 0;

    font-size: 10px;

    line-height: 1.1;

    color: #64748b;

    white-space: nowrap;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    display: flex;

    align-items: center;

    gap: 6px;

    margin: 0;
    padding: 0;
}


.navbar a {
    display: flex;

    align-items: center;

    gap: 6px;

    padding: 9px 11px;

    margin: 0;

    color: #1e293b;

    text-decoration: none;

    font-size: 13px;

    font-weight: 600;

    border-radius: 8px;

    white-space: nowrap;

    transition: .2s;
}


.navbar a:hover {
    background: #eff6ff;
    color: #2563eb;
}


.navbar a i {
    font-size: 13px;
}


/* =========================
   ADMIN
========================= */

.navbar .admin-btn {
    background: #2563eb;

    color: #ffffff;
}


.navbar .admin-btn:hover {
    background: #1d4ed8;

    color: #ffffff;
}


/* =========================
   MOBILE BUTTON
========================= */

.menu-btn {
    display: none;

    width: 40px;
    height: 40px;

    border: none;

    border-radius: 8px;

    background: #2563eb;

    color: #ffffff;

    font-size: 18px;

    cursor: pointer;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 850px) {

    .header-inner {
        min-height: 62px;

        padding: 7px 12px;
    }


    .logo img {
        width: 42px;
        height: 42px;
    }


    .logo-text h2 {
        font-size: 18px;
    }


    .logo-text span {
        font-size: 8px;
    }


    .navbar {
        display: none;

        position: absolute;

        top: 100%;
        left: 0;

        width: 100%;

        padding: 8px 12px;

        background: #ffffff;

        border-top: 1px solid #e5e7eb;

        box-shadow:
            0 8px 20px
            rgba(0,0,0,.10);

        flex-direction: column;

        align-items: stretch;

        gap: 3px;
    }


    .navbar.active {
        display: flex;
    }


    .navbar a {
        width: 100%;

        padding: 11px 12px;

        justify-content: flex-start;

        box-sizing: border-box;
    }


    .menu-btn {
        display: flex;

        align-items: center;
        justify-content: center;
    }

}


/* =========================
   VERY SMALL MOBILE
========================= */

@media (max-width: 400px) {

    .header-inner {
        padding: 6px 9px;
    }


    .logo img {
        width: 38px;
        height: 38px;
    }


    .logo-text h2 {
        font-size: 16px;
    }


    .logo-text span {
        font-size: 7px;
    }


    .menu-btn {
        width: 36px;
        height: 36px;

        font-size: 16px;
    }

}

.navbar .vegetable-btn {
    background: #16a34a;
    color: #ffffff;
}

.navbar .vegetable-btn:hover {
    background: #15803d;
    color: #ffffff;
}

</style>


<header class="site-header">

    <div class="header-inner">


        <!-- =========================
             LOGO
        ========================== -->

        <a href="/" class="logo">

            <img
                src="/images/GS LOGO.png"
                alt="HHGS Logo"
            >

            <div class="logo-text">

                <h2>HHGS</h2>

                <span>
                    Human Healthy Global Services
                </span>

            </div>

        </a>


        <!-- =========================
             MENU
        ========================== -->

        <nav
            class="navbar"
            id="navbar"
        >

            <a href="/student-login">

                <i class="fa-solid fa-user-graduate"></i>

                Student

            </a>


            <a href="/admin/doctor-login">

                <i class="fa-solid fa-user-doctor"></i>

                Doctor

            </a>


            <a href="/services">

                <i class="fa-solid fa-briefcase-medical"></i>

                Services

            </a>


            <a href="/doctor/store">

                <i class="fa-solid fa-store"></i>

                HumanHealth

            </a>


            <a
    href="/sabji"
    class="vegetable-btn"
>
    <i class="fa-solid fa-carrot"></i>

    Fresh Vegetables
</a>


            <a href="/contact">

                <i class="fa-solid fa-phone"></i>

                Contact

            </a>


            <a
                href="/admin"
                class="admin-btn"
            >

                <i class="fa-solid fa-lock"></i>

                Admin

            </a>

        </nav>


        <!-- =========================
             MOBILE BUTTON
        ========================== -->

        <button
            class="menu-btn"
            id="menuBtn"
            type="button"
        >

            <i class="fa-solid fa-bars"></i>

        </button>


    </div>

</header>


<script>

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.getElementById("navbar");


if (menuBtn && navbar) {

    menuBtn.addEventListener(
        "click",
        function () {

            navbar.classList.toggle("active");

        }
    );

}

</script>

`;
}

module.exports = Header;
