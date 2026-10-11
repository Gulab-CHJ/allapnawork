// function Footer() {

// return `

// <style>

// /* Main Footer Container */
// .footer {
//     position: fixed;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 20vh; /* Fixed 20% Height */
//     background: linear-gradient(135deg, #0f172a, #1e3a8a);
//     color: #fff;
//     font-family: Arial, sans-serif;
//     padding: 8px 15px;
//     box-sizing: border-box;
//     z-index: 9999;
//     display: flex;
//     align-items: center;
//     overflow: hidden; /* Strict NO scroll */
// }

// .footer-container {
//     max-width: 1200px;
//     width: 100%;
//     height: 100%;
//     margin: 0 auto;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// }

// /* Grid Layout for Top Section */
// .footer-top {
//     display: grid;
//     grid-template-columns: 1.2fr 1fr 1fr;
//     gap: 15px;
//     height: calc(100% - 22px);
//     align-items: center;
// }

// .footer-box {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     height: 100%;
// }

// .footer-box h2 {
//     font-size: 15px;
//     font-weight: 700;
//     margin: 0 0 2px 0;
//     color: #38bdf8;
//     white-space: nowrap;
// }

// .footer-box h3 {
//     font-size: 13px;
//     font-weight: 600;
//     margin: 0 0 4px 0;
//     color: #f8fafc;
// }

// .footer-box p {
//     color: #cbd5e1;
//     margin: 0 0 2px 0;
//     font-size: 11px;
//     line-height: 1.2;
//     white-space: nowrap;
// }

// .footer-box ul {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 2px 8px;
// }

// .footer-box ul li a {
//     color: #e2e8f0;
//     text-decoration: none;
//     font-size: 11px;
//     transition: color 0.2s;
// }

// .footer-box ul li a:hover {
//     color: #38bdf8;
// }

// /* Social Icons Layout */
// .social {
//     display: flex;
//     gap: 6px;
//     margin-top: 4px;
// }

// .social a {
//     width: 24px;
//     height: 24px;
//     border-radius: 50%;
//     background: rgba(255, 255, 255, 0.15);
//     color: #fff;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-decoration: none;
//     font-size: 11px;
//     transition: all 0.2s ease;
// }

// .social a:hover {
//     background: #38bdf8;
//     color: #0f172a;
// }

// /* Copyright Section */
// .footer-bottom {
//     height: 18px;
//     line-height: 18px;
//     border-top: 1px solid rgba(255, 255, 255, 0.1);
//     text-align: center;
//     color: #94a3b8;
//     font-size: 10px;
// }

// /* Perfect Alignment Mobile Screen Optimization */
// @media (max-width: 768px) {
//     .footer {
//         padding: 6px 10px;
//     }

//     .footer-top {
//         grid-template-columns: 1fr 1fr 1fr; /* 3 Columns mobile par bhi clean align rahegi */
//         gap: 6px;
//     }

//     .footer-box h2 {
//         font-size: 12px;
//     }

//     .footer-box h3 {
//         font-size: 11px;
//         margin-bottom: 2px;
//     }

//     .footer-box p, 
//     .footer-box ul li a {
//         font-size: 9.5px;
//     }

//     .footer-box ul {
//         grid-template-columns: 1fr; /* Links Vertical list ban jayegi spacing maintain karne ke liye */
//         gap: 1px;
//     }

//     .social a {
//         width: 20px;
//         height: 20px;
//         font-size: 9px;
//     }

//     .footer-bottom {
//         font-size: 9px;
//         height: 14px;
//         line-height: 14px;
//     }
// }

// </style>

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

// <footer class="footer">
//     <div class="footer-container">
//         <div class="footer-top">

//             <!-- Brand Section -->
//             <div class="footer-box">
//                 <h2>GLOBAL SERVICE</h2>
//                 <p>Digital Services</p>
//                 <div class="social">
//                     <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
//                     <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
//                     <a href="https://wa.me/919142264714" target="_blank"><i class="fab fa-whatsapp"></i></a>
//                     <a href="https://www.youtube.com/@HH_GS" target="_blank"><i class="fab fa-youtube"></i></a>
//                 </div>
//             </div>

//             <!-- Quick Links -->
//             <div class="footer-box">
//                 <h3>Quick Links</h3>
//                 <ul>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/services">Services</a></li>
//                     <li><a href="/about">About</a></li>
//                     <li><a href="/contact">Contact</a></li>
//                 </ul>
//             </div>

//             <!-- Contact Info -->
//             <div class="footer-box">
//                 <h3>Contact</h3>
//                 <p><i class="fa-solid fa-location-dot"></i> Muzaffarpur</p>
//                 <p><i class="fa-solid fa-phone"></i> +91 9142264714</p>
//             </div>

//         </div>

//         <!-- Copyright -->
//         <div class="footer-bottom">
//             © ${new Date().getFullYear()} GLOBAL SERVICE. All Rights Reserved.
//         </div>
//     </div>
// </footer>

// `;

// }

// module.exports = Footer;

function Footer() {

return `

<style>


html,
body {
    margin: 0 !important;
    padding: 0 !important;
}

body {
    overflow-x: hidden;
}

/* =========================
   FOOTER
========================= */

.footer {
    position: relative;
    bottom: auto;
    left: auto;

    width: 100%;
    height: 20vh;

    background: linear-gradient(135deg, #0f172a, #1e3a8a);
    color: #fff;

    font-family: Arial, sans-serif;

    padding: 8px 15px;
    box-sizing: border-box;

    z-index: 1;

    display: flex;
    align-items: center;

    overflow: hidden;

    margin: 0;
}


/* Footer ke neeche koi gap nahi */
.footer,
.footer * {
    box-sizing: border-box;
}


/* =========================
   CONTAINER
========================= */

.footer-container {
    max-width: 1200px;
    width: 100%;
    height: 100%;

    margin: 0 auto;
    padding: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}


/* =========================
   TOP SECTION
========================= */

.footer-top {
    display: grid;

    grid-template-columns:
        1.2fr
        1fr
        1fr;

    gap: 15px;

    height: calc(100% - 22px);

    align-items: center;
}


/* =========================
   FOOTER BOX
========================= */

.footer-box {
    display: flex;
    flex-direction: column;

    justify-content: center;

    height: 100%;
    min-width: 0;
}


/* =========================
   HEADINGS
========================= */

.footer-box h2 {
    font-size: 15px;
    font-weight: 700;

    margin: 0 0 2px 0;

    color: #38bdf8;

    white-space: nowrap;
}


.footer-box h3 {
    font-size: 13px;
    font-weight: 600;

    margin: 0 0 4px 0;

    color: #f8fafc;
}


/* =========================
   TEXT
========================= */

.footer-box p {
    color: #cbd5e1;

    margin: 0 0 2px 0;

    font-size: 11px;
    line-height: 1.2;

    white-space: nowrap;
}


/* =========================
   LINKS
========================= */

.footer-box ul {
    list-style: none;

    padding: 0;
    margin: 0;

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    gap: 2px 8px;
}


.footer-box ul li {
    margin: 0;
    padding: 0;
}


.footer-box ul li a {
    color: #e2e8f0;

    text-decoration: none;

    font-size: 11px;

    transition: color 0.2s;
}


.footer-box ul li a:hover {
    color: #38bdf8;
}


/* =========================
   SOCIAL
========================= */

.social {
    display: flex;

    gap: 6px;

    margin-top: 4px;
}


.social a {
    width: 24px;
    height: 24px;

    border-radius: 50%;

    background: rgba(255,255,255,0.15);

    color: #fff;

    display: flex;

    justify-content: center;
    align-items: center;

    text-decoration: none;

    font-size: 11px;

    transition: all 0.2s ease;
}


.social a:hover {
    background: #38bdf8;
    color: #0f172a;
}


/* =========================
   COPYRIGHT
========================= */

.footer-bottom {
    height: 18px;

    line-height: 18px;

    border-top:
        1px solid
        rgba(255,255,255,0.1);

    text-align: center;

    color: #94a3b8;

    font-size: 10px;

    margin: 0;
    padding: 0;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {

    .footer {
        height: 20vh;

        padding: 6px 10px;

        bottom: 0;
    }


    .footer-top {

        grid-template-columns:
            1fr
            1fr
            1fr;

        gap: 6px;
    }


    .footer-box h2 {
        font-size: 12px;
    }


    .footer-box h3 {
        font-size: 11px;

        margin-bottom: 2px;
    }


    .footer-box p,
    .footer-box ul li a {

        font-size: 9.5px;
    }


    .footer-box ul {

        grid-template-columns: 1fr;

        gap: 1px;
    }


    .social a {

        width: 20px;
        height: 20px;

        font-size: 9px;
    }


    .footer-bottom {

        font-size: 9px;

        height: 14px;

        line-height: 14px;
    }

}


/* =========================
   VERY SMALL SCREEN
========================= */

@media (max-width: 400px) {

    .footer {
        height: 20vh;
        padding: 5px 7px;
    }

    .footer-top {
        gap: 4px;
    }

    .footer-box h2 {
        font-size: 11px;
    }

    .footer-box h3 {
        font-size: 10px;
    }

    .footer-box p,
    .footer-box ul li a {
        font-size: 8.5px;
    }

    .social {
        gap: 4px;
    }

    .social a {
        width: 18px;
        height: 18px;
        font-size: 8px;
    }

}

</style>


<link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
>


<footer class="footer">

    <div class="footer-container">

        <div class="footer-top">


            <!-- BRAND -->

            <div class="footer-box">

                <h2>GLOBAL SERVICE</h2>

                <p>Digital Services</p>

                <div class="social">

                    <a
                    href="https://facebook.com"
                    target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </a>

                    <a
                    href="https://instagram.com"
                    target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>

                    <a
                    href="https://wa.me/919142264714"
                    target="_blank">
                        <i class="fab fa-whatsapp"></i>
                    </a>

                    <a
                    href="https://www.youtube.com/@HH_GS"
                    target="_blank">
                        <i class="fab fa-youtube"></i>
                    </a>

                </div>

            </div>


            <!-- QUICK LINKS -->

            <div class="footer-box">

                <h3>Quick Links</h3>

                <ul>

                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/services">Services</a>
                    </li>

                    <li>
                        <a href="/about">About</a>
                    </li>

                    <li>
                        <a href="/contact">Contact</a>
                    </li>

                </ul>

            </div>


            <!-- CONTACT -->

            <div class="footer-box">

                <h3>Contact</h3>

                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    Muzaffarpur
                </p>

                <p>
                    <i class="fa-solid fa-phone"></i>
                    +91 9142264714
                </p>

            </div>


        </div>


        <!-- COPYRIGHT -->

        <div class="footer-bottom">

            © ${new Date().getFullYear()}
            GLOBAL SERVICE.
            All Rights Reserved.

        </div>

    </div>

</footer>

`;

}

module.exports = Footer;
