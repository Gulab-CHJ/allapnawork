
const Header =
    require("../views/component/headercomponent");

const Banner =
    require("../views/component/bannercomponent");

const Footer =
    require("../views/component/footercomponent");

const DoctorSection =
    require("../views/component/doctorcomponent");

const StudentSection =
    require("../views/component/studentcomponent");

const ServiceSection =
    require("../views/component/servicecomponent");

const GovernmentSection =
    require("../views/component/governmentcomponent");

    const MedicineStoreSection =
    require(
        "../views/component/medicinestorecomponent"
    );
    const QuickServiceSection =
    require("../views/component/quickservicecomponent");


    const CustomerBakayaSection =
  require("../views/component/customerbakayacomponent");



    // const StarRankingSection =
    // require("../views/component/starrankingcomponent");


  // ======================================================
// MONGODB STUDENT STAR RANKING
// ======================================================

function escapeStudentHTML(value) {

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


// ======================================================
// CURRENT MONTH
// ======================================================

function getStudentMonthKey() {

    const date = new Date();

    return (
        date.getFullYear() +
        "-" +
        String(
            date.getMonth() + 1
        ).padStart(2, "0")
    );

}


// ======================================================
// STUDENT STAR SECTION
// ======================================================

function StarRankingSection(
    students = []
) {

    const currentMonth =
        getStudentMonthKey();


    const rankedStudents =
        Array.isArray(students)
            ? students.map(
                function (student) {

                    const monthlyStars =
                        Array.isArray(
                            student.monthlyStars
                        )
                            ? student.monthlyStars
                                .find(
                                    function (record) {

                                        return (
                                            record.month ===
                                            currentMonth
                                        );

                                    }
                                )
                            : null;


                    return {

                        id:
                            String(
                                student._id ||
                                student.id ||
                                ""
                            ),

                        name:
                            student.name ||
                            "Student",

                        className:
                            student.className ||
                            student.course ||
                            (
                                student.classLevel
                                    ? "Class " +
                                      student.classLevel
                                    : "Student"
                            ),

                        image:
                            student.image ||
                            "",

                        stars:
                            Number(
                                monthlyStars
                                    ? monthlyStars.stars
                                    : student.stars || 0
                            )

                    };

                }
            )
            : [];


    rankedStudents.sort(
        function (first, second) {

            if (
                second.stars !==
                first.stars
            ) {
                return (
                    second.stars -
                    first.stars
                );
            }

            return String(first.name)
                .localeCompare(
                    String(second.name)
                );

        }
    );


    rankedStudents.forEach(
        function (student, index) {

            student.rank =
                index + 1;

        }
    );


    const leader =
        rankedStudents.length
            ? rankedStudents[0]
            : null;


    const cardsHTML =
        rankedStudents.length
            ? rankedStudents.map(
                function (student) {

                    const words =
                        String(
                            student.name ||
                            "S"
                        )
                            .trim()
                            .split(" ")
                            .filter(Boolean)
                            .slice(0, 2);


                    const initials =
                        words.map(
                            function (word) {

                                return word
                                    .charAt(0)
                                    .toUpperCase();

                            }
                        ).join("") || "S";


                    const avatarHTML =
                        student.image
                            ? `
                                <img
                                    src="${escapeStudentHTML(student.image)}"
                                    alt="${escapeStudentHTML(student.name)}"
                                >
                            `
                            : `
                                <span>
                                    ${escapeStudentHTML(initials)}
                                </span>
                            `;


                    return `

                        <article class="
                            mongo-student-card
                            ${
                                student.rank === 1
                                    ? "first-rank"
                                    : ""
                            }
                        ">

                            <div class="mongo-rank-badge">
                                #${student.rank}
                            </div>


                            <div class="mongo-student-avatar">

                                ${avatarHTML}

                            </div>


                            <h3>
                                ${escapeStudentHTML(student.name)}
                            </h3>


                            <p>
                                ${escapeStudentHTML(student.className)}
                            </p>


                            <div class="mongo-star-count">

                                <strong>
                                    ${student.stars}
                                </strong>

                                <span>★</span>

                            </div>


                            <small>
                                ${
                                    student.rank === 1
                                        ? "MONTHLY TOPPER"
                                        : "CURRENT RANK"
                                }
                            </small>

                        </article>

                    `;

                }
            ).join("")
            : `

                <div class="mongo-no-student">

                    <strong>
                        अभी कोई Student उपलब्ध नहीं है।
                    </strong>

                    <span>
                        Admin Panel से Student add करें।
                    </span>

                </div>

            `;


    const leaderHTML =
        leader
            ? `

                <div class="mongo-monthly-leader">

                    <div class="mongo-crown">
                        ♛
                    </div>


                    <div class="mongo-leader-details">

                        <small>
                            MONTHLY LEADER
                        </small>

                        <strong>
                            ${escapeStudentHTML(leader.name)}
                        </strong>

                        <span>
                            ${escapeStudentHTML(leader.className)}
                            ·
                            ${leader.stars} Stars
                        </span>

                    </div>


                    <div class="mongo-leader-rank">

                        <strong>#1</strong>

                        <small>
                            CURRENT RANK
                        </small>

                    </div>

                </div>

            `
            : "";


    return `

<style>

.mongo-student-section {
    width:calc(100% - 30px);
    max-width:1180px;

    margin:35px auto;
    padding:28px;

    position:relative;
    overflow:hidden;

    font-family:
        Arial,
        sans-serif;

    background:#ffffff;

    border:1px solid #dbe9e3;
    border-radius:25px;

    box-shadow:
        0 18px 55px
        rgba(15,73,58,.12);
}

.mongo-student-section::before {
    width:170px;
    height:6px;

    content:"";

    position:absolute;
    top:0;
    left:0;

    background:
        linear-gradient(
            90deg,
            #d99f00,
            #ffdc62
        );
}

.mongo-student-heading {
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    gap:20px;

    margin-bottom:22px;
}

.mongo-student-heading small {
    display:block;

    margin-bottom:7px;

    color:#a47500;

    font-size:10px;
    font-weight:900;
    letter-spacing:1.6px;
}

.mongo-student-heading h2 {
    margin:0;

    color:#123d32;

    font-size:30px;
}

.mongo-student-heading p {
    margin:8px 0 0;

    color:#64748b;

    font-size:14px;
}

.mongo-admin-button {
    display:inline-flex;
    align-items:center;
    justify-content:center;

    padding:11px 17px;

    color:#ffffff;
    background:#0d604b;

    border-radius:10px;

    text-decoration:none;

    font-size:13px;
    font-weight:800;
}

.mongo-monthly-leader {
    display:flex;
    align-items:center;
    gap:16px;

    margin-bottom:22px;
    padding:18px;

    color:#ffffff;

    background:
        linear-gradient(
            135deg,
            #0a5744,
            #11805e
        );

    border-radius:18px;
}

.mongo-crown {
    width:56px;
    height:56px;

    flex-shrink:0;

    display:flex;
    align-items:center;
    justify-content:center;

    color:#705000;
    background:#ffda61;

    border-radius:50%;

    font-size:29px;
}

.mongo-leader-details {
    min-width:0;
    flex:1;
}

.mongo-leader-details small {
    display:block;

    margin-bottom:5px;

    color:#bce7d8;

    font-size:10px;
    font-weight:900;
    letter-spacing:1.3px;
}

.mongo-leader-details strong {
    display:block;

    overflow:hidden;

    font-size:21px;

    white-space:nowrap;
    text-overflow:ellipsis;
}

.mongo-leader-details span {
    display:block;

    margin-top:5px;

    color:#e4fff5;

    font-size:13px;
}

.mongo-leader-rank {
    flex-shrink:0;
    text-align:center;
}

.mongo-leader-rank strong {
    display:block;

    color:#ffdb63;

    font-size:27px;
}

.mongo-leader-rank small {
    color:#d7f6eb;

    font-size:9px;
}

.mongo-student-grid {
    display:grid;

    grid-template-columns:
        repeat(
            3,
            minmax(0,1fr)
        );

    gap:16px;
}

.mongo-student-card {
    min-width:0;

    position:relative;

    padding:21px 15px;

    text-align:center;

    background:#ffffff;

    border:1px solid #dce9e3;
    border-radius:18px;

    box-shadow:
        0 8px 24px
        rgba(15,73,58,.08);

    transition:.25s;
}

.mongo-student-card:hover {
    transform:
        translateY(-4px);

    box-shadow:
        0 15px 32px
        rgba(15,73,58,.14);
}

.mongo-student-card.first-rank {
    border-color:#e2b938;

    background:
        linear-gradient(
            180deg,
            #fff9e9,
            #ffffff
        );
}

.mongo-rank-badge {
    position:absolute;
    top:11px;
    right:11px;

    padding:5px 9px;

    color:#0c654e;
    background:#e8f5f0;

    border-radius:20px;

    font-size:11px;
    font-weight:900;
}

.mongo-student-card.first-rank
.mongo-rank-badge {
    color:#785600;
    background:#ffedab;
}

.mongo-student-avatar {
    width:70px;
    height:70px;

    display:flex;
    align-items:center;
    justify-content:center;

    margin:0 auto 13px;

    overflow:hidden;

    color:#ffffff;
    background:
        linear-gradient(
            135deg,
            #0b604a,
            #18a47b
        );

    border:4px solid #d8eee6;
    border-radius:50%;

    font-size:23px;
    font-weight:900;
}

.mongo-student-avatar img {
    width:100%;
    height:100%;

    object-fit:cover;
}

.mongo-student-card h3 {
    margin:0;

    overflow:hidden;

    color:#173e34;

    font-size:17px;

    white-space:nowrap;
    text-overflow:ellipsis;
}

.mongo-student-card p {
    min-height:17px;

    margin:7px 0 0;

    overflow:hidden;

    color:#64748b;

    font-size:12px;

    white-space:nowrap;
    text-overflow:ellipsis;
}

.mongo-star-count {
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:5px;

    margin-top:13px;
    padding:8px 14px;

    color:#725200;
    background:#fff2bd;

    border-radius:25px;
}

.mongo-star-count strong {
    font-size:15px;
}

.mongo-star-count span {
    color:#e2a400;

    font-size:19px;
}

.mongo-student-card > small {
    display:block;

    margin-top:8px;

    color:#94a3b8;

    font-size:9px;
    font-weight:800;
    letter-spacing:.6px;
}

.mongo-no-student {
    grid-column:1 / -1;

    padding:35px 15px;

    text-align:center;

    color:#64748b;
    background:#f5faf8;

    border-radius:16px;
}

.mongo-no-student strong,
.mongo-no-student span {
    display:block;
}

.mongo-no-student span {
    margin-top:8px;

    font-size:13px;
}

.mongo-public-note {
    display:flex;
    align-items:center;
    justify-content:center;
    gap:7px;

    margin-top:20px;
    padding:12px;

    color:#52665f;
    background:#f4f9f7;

    border-radius:12px;

    font-size:12px;
}

.mongo-public-note b {
    color:#0b7c5c;
}

@media(max-width:700px) {

    .mongo-student-section {
        width:calc(100% - 18px);

        margin:22px auto;
        padding:18px 12px;

        border-radius:18px;
    }

    .mongo-student-heading {
        display:block;
    }

    .mongo-student-heading h2 {
        font-size:24px;
    }

    .mongo-admin-button {
        width:100%;

        margin-top:15px;
    }

    .mongo-monthly-leader {
        gap:10px;

        padding:14px 10px;
    }

    .mongo-crown {
        width:46px;
        height:46px;

        font-size:22px;
    }

    .mongo-leader-details strong {
        font-size:16px;
    }

    .mongo-leader-details span {
        font-size:11px;
    }

    .mongo-leader-rank strong {
        font-size:21px;
    }

    .mongo-student-grid {
        grid-template-columns:
            repeat(
                2,
                minmax(0,1fr)
            );

        gap:10px;
    }

    .mongo-student-card {
        padding:18px 7px;

        border-radius:14px;
    }

    .mongo-student-avatar {
        width:57px;
        height:57px;

        font-size:18px;
    }

    .mongo-student-card h3 {
        font-size:14px;
    }

    .mongo-student-card p {
        font-size:10px;
    }

    .mongo-star-count {
        padding:6px 10px;
    }

}

</style>


<section
    id="student-ranking"
    class="mongo-student-section"
>

    <div class="mongo-student-heading">

        <div>

            <small>
                MONTHLY STAR RANKING
            </small>

            <h2>
                Our Star Students
            </h2>

            <p>
                Class 1 से 10 के मेहनती विद्यार्थियों की Ranking
            </p>

        </div>


        

    </div>


    ${leaderHTML}


    <div class="mongo-student-grid">

        ${cardsHTML}

    </div>


    <div class="mongo-public-note">

        <b>✓</b>

        Public केवल Rank देख सकता है।
        बदलाव सिर्फ Admin कर सकता है।

    </div>

</section>

    `;

}






function Home(
    banners = [],
    doctors = [],
    governments = [],
    services = [],
    students = [],

    products = [],

    customers = []
) {

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
        rel="manifest"
        href="/manifest.json"
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

    <title>
        HHGS23 | Online Healthcare & Government Services
    </title>

    <link
        rel="stylesheet"
        href="/css/style.css"
    >

    <link
        rel="stylesheet"
        href="/css/banner.css"
    >

    <style>

        * {
            box-sizing: border-box;
        }

        html,
        body {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }

        img {
            max-width: 100%;
        }


        /* INSTALL POPUP */

        .install-popup {
            display: none;

            position: fixed;
            inset: 0;
            z-index: 999999;

            align-items: center;
            justify-content: center;

            padding: 20px;

            background:
                rgba(15, 23, 42, 0.75);

            backdrop-filter: blur(5px);
        }

        .install-popup.show {
            display: flex;
        }

        .install-box {
            width: 100%;
            max-width: 360px;

            position: relative;

            padding: 28px 22px 22px;

            text-align: center;

            border-radius: 24px;

            background: #ffffff;

            box-shadow:
                0 20px 60px
                rgba(0, 0, 0, 0.30);

            animation:
                installPopupOpen
                0.35s ease;
        }

        @keyframes installPopupOpen {

            from {
                opacity: 0;
                transform: scale(0.85);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }

        }

        .install-close {
            width: 34px;
            height: 34px;

            position: absolute;
            top: 12px;
            right: 12px;

            border: 0;
            border-radius: 50%;

            color: #475569;
            background: #f1f5f9;

            font-size: 25px;
            line-height: 30px;

            cursor: pointer;
        }

        .install-logo {
            width: 78px;
            height: 78px;

            display: block;

            margin: 5px auto 15px;

            object-fit: contain;
        }

        .install-box h2 {
            margin: 0 0 8px;

            color: #123c77;

            font-size: 23px;
            font-weight: 800;
        }

        .install-box p {
            margin: 0 auto 18px;

            color: #64748b;

            font-size: 14px;
            line-height: 1.5;
        }

        .install-benefits {
            display: flex;
            flex-direction: column;
            gap: 7px;

            margin-bottom: 20px;

            color: #166534;

            font-size: 13px;
            font-weight: 700;
        }

        .install-now {
            width: 100%;

            padding: 14px 18px;

            border: 0;
            border-radius: 14px;

            color: #ffffff;

            background:
                linear-gradient(
                    135deg,
                    #16a34a,
                    #15803d
                );

            font-size: 16px;
            font-weight: 800;

            cursor: pointer;

            box-shadow:
                0 8px 20px
                rgba(22, 163, 74, 0.25);
        }

        .install-later {
            width: 100%;

            margin-top: 9px;
            padding: 10px;

            border: 0;

            color: #64748b;
            background: transparent;

            font-size: 13px;
            font-weight: 600;

            cursor: pointer;
        }


        /* PHONE VIEW */
@media screen and (max-width: 768px) {

    html,
    body {
        width: 100%;
        max-width: 100%;

        font-size: 14px;
    }

    main,
    section,
    .container {
        width: 100%;
        max-width: 100%;
    }

    .container {
        margin: 0 auto;

        padding-left: 10px;
        padding-right: 10px;
    }

    img {
        max-width: 100%;
        height: auto;
    }

}
    </style>

</head>

<body>


    <!-- INSTALL HHGS APP POPUP -->

    <div
        id="installPopup"
        class="install-popup"
    >

        <div class="install-box">

            <button
                type="button"
                id="closeInstallPopup"
                class="install-close"
            >
                ×
            </button>

            <img
                src="/images/hhgs-icon-192.png"
                alt="HHGS Logo"
                class="install-logo"
            >

            <h2>
                Install HHGS App
            </h2>

            <p>
                सभी Healthcare और Government
                Services को तेजी से इस्तेमाल करने
                के लिए HHGS App install करें।
            </p>

            <div class="install-benefits">

                <span>
                    ✓ Fast Loading
                </span>

                <span>
                    ✓ Direct Home Screen Access
                </span>

                <span>
                    ✓ Quick Services Access
                </span>

            </div>

            <button
                type="button"
                id="installNowButton"
                class="install-now"
            >
                ⬇ Install Now
            </button>

            <button
                type="button"
                id="installLaterButton"
                class="install-later"
            >
                Maybe Later
            </button>

        </div>

    </div>


    ${Header()}

    ${Banner(banners)}


    

${CustomerBakayaSection(customers)}


    ${MedicineStoreSection(products)}


    ${StarRankingSection(students)}

    ${DoctorSection(doctors)}

    ${StudentSection(students)}

    ${ServiceSection(services)}

    ${GovernmentSection(governments)}

    ${Footer()}


    <style>

/* =====================================
   FORCE PHONE APP VIEW
===================================== */

@media screen and (pointer: coarse) and (max-width: 1200px),
       screen and (max-device-width: 768px) {

    html,
    body {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;

        margin: 0 !important;
        padding: 0 !important;

        overflow-x: hidden !important;
    }

    main,
    section,
    header,
    footer,
    .container {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
    }

    /* TWO DOCTORS PER ROW */

    .doctor-grid {
        display: grid !important;

        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            ) !important;

        gap: 10px !important;

        width: 100% !important;
    }

    .doctor-card {
        width: 100% !important;
        min-width: 0 !important;

        border-radius: 14px !important;
    }

    .doctor-img {
        width: 100% !important;
        height: 145px !important;

        object-fit: cover !important;
    }

    .doctor-body {
        padding: 10px !important;
    }

    .doctor-body h3 {
        font-size: 15px !important;
        line-height: 1.25 !important;
    }

    .doctor-info {
        font-size: 11px !important;
    }

    /* TWO SERVICES PER ROW */

    .services-grid {
        display: grid !important;

        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            ) !important;

        gap: 10px !important;

        width: 100% !important;
    }

    /* RESPONSIVE IMAGES */

    img,
    video,
    iframe {
        max-width: 100% !important;
    }

}

</style>

    <script src="/js/banner.js"></script>

    <script
        src="https://checkout.razorpay.com/v1/checkout.js"
    ></script>


    <script>

        // SERVICE WORKER

        if ("serviceWorker" in navigator) {

            window.addEventListener(
                "load",
                function () {

                    navigator.serviceWorker
                        .register(
                            "/service-worker.js"
                        )
                        .then(
                            function (
                                registration
                            ) {

                                console.log(
                                    "Service Worker Registered:",
                                    registration.scope
                                );

                            }
                        )
                        .catch(
                            function (error) {

                                console.log(
                                    "Service Worker Error:",
                                    error
                                );

                            }
                        );

                },
                {
                    once: true
                }
            );

        }


        // INSTALL POPUP ELEMENTS

        let hhgsInstallPrompt = null;

        const installPopup =
            document.getElementById(
                "installPopup"
            );

        const installNowButton =
            document.getElementById(
                "installNowButton"
            );

        const installLaterButton =
            document.getElementById(
                "installLaterButton"
            );

        const closeInstallPopup =
            document.getElementById(
                "closeInstallPopup"
            );


        // CHECK APP INSTALLED

        function isHHGSInstalled() {

            return (

                window.matchMedia(
                    "(display-mode: standalone)"
                ).matches ||

                window.navigator
                    .standalone === true

            );

        }


        // SHOW POPUP

        function showInstallPopup() {

            if (
                installPopup &&
                !isHHGSInstalled()
            ) {

                installPopup.classList.add(
                    "show"
                );

            }

        }


        // HIDE POPUP

        function hideInstallPopup() {

            if (installPopup) {

                installPopup.classList.remove(
                    "show"
                );

            }

        }


        // CAPTURE INSTALL EVENT

        window.addEventListener(
            "beforeinstallprompt",
            function (event) {

                event.preventDefault();

                hhgsInstallPrompt = event;

                console.log(
                    "HHGS installation available"
                );

                setTimeout(
                    showInstallPopup,
                    800
                );

            }
        );


        // ALWAYS SHOW POPUP

        function scheduleInstallPopup() {

            if (!isHHGSInstalled()) {

                setTimeout(
                    showInstallPopup,
                    1500
                );

            }

        }


        if (
            document.readyState ===
            "complete"
        ) {

            scheduleInstallPopup();

        } else {

            window.addEventListener(
                "load",
                scheduleInstallPopup,
                {
                    once: true
                }
            );

        }


        // CLOSE BUTTON

        if (closeInstallPopup) {

            closeInstallPopup.addEventListener(
                "click",
                hideInstallPopup
            );

        }


        // MAYBE LATER

        if (installLaterButton) {

            installLaterButton.addEventListener(
                "click",
                hideInstallPopup
            );

        }


        // INSTALL NOW

        if (installNowButton) {

            installNowButton.addEventListener(
                "click",
                async function () {

                    if (hhgsInstallPrompt) {

                        hideInstallPopup();

                        hhgsInstallPrompt.prompt();

                        const installChoice =
                            await hhgsInstallPrompt
                                .userChoice;

                        if (
                            installChoice.outcome ===
                            "accepted"
                        ) {

                            console.log(
                                "HHGS App Installed"
                            );

                        } else {

                            console.log(
                                "Installation cancelled"
                            );

                        }

                        hhgsInstallPrompt = null;

                    } else {

                        alert(
                            "Chrome के ⋮ Menu में जाकर Install and create shortcut दबाएँ।"
                        );

                    }

                }
            );

        }


        // INSTALLATION COMPLETE

        window.addEventListener(
            "appinstalled",
            function () {

                hideInstallPopup();

                hhgsInstallPrompt = null;

                console.log(
                    "HHGS App Installation Complete"
                );

            }
        );


        // APP ALREADY INSTALLED

        if (isHHGSInstalled()) {

            hideInstallPopup();

        }

    </script>

</body>

</html>
`;

}


module.exports = Home;


