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


// function formatPaymentDate(value) {

//     if (!value) {
//         return "-";
//     }

//     try {

//         const date =
//             new Date(value);

//         if (
//             Number.isNaN(
//                 date.getTime()
//             )
//         ) {
//             return "-";
//         }

//         return date.toLocaleDateString(
//             "en-IN",
//             {
//                 day: "2-digit",
//                 month: "2-digit",
//                 year: "numeric"
//             }
//         );

//     } catch (error) {

//         return "-";

//     }

// }


// function StudentInformation(student = {}) {


//     const paymentSuccess =
//         String(
//             student.paymentStatus || ""
//         ).toLowerCase() ===
//         "success";


//     const studentName =
//         student.name ||
//         "Student";


//     const rollNumber =
//         student.roll ||
//         student.rollNo ||
//         "-";


//     const mobile =
//         student.mobile ||
//         student.phone ||
//         "-";


//     const course =
//         student.className ||
//         student.course ||
//         "-";


//     const amount =
//         Number(
//             student.amount || 0
//         ).toFixed(2);


//     const studentId =
//         student._id ||
//         "";


//     // =====================================
//     // PAYMENT HISTORY
//     // =====================================

//     const paymentHistory =
//         Array.isArray(
//             student.paymentHistory
//         )
//             ? student.paymentHistory
//             : [];


//     const totalPaid =
//         paymentHistory.reduce(
//             (total, payment) => {

//                 return (
//                     total +
//                     Number(
//                         payment.amount || 0
//                     )
//                 );

//             },
//             0
//         );


//     const paymentHistoryHTML =

//         paymentHistory.length > 0

//             ? paymentHistory
//                 .slice()
//                 .sort(
//                     (a, b) => {

//                         return (
//                             new Date(
//                                 b.paidDate || 0
//                             ) -
//                             new Date(
//                                 a.paidDate || 0
//                             )
//                         );

//                     }
//                 )
//                 .map(
//                     (payment) => {

//                         return `
//                             <div
//                                 class="payment-history-row"
//                             >

//                                 <div
//                                     class="payment-left"
//                                 >

//                                     <div
//                                         class="payment-month"
//                                     >
//                                         ${
//                                             escapeHTML(
//                                                 payment.month ||
//                                                 "-"
//                                             )
//                                         }
//                                     </div>


//                                     <div
//                                         class="payment-date"
//                                     >
//                                         📅 Paid on:
//                                         ${
//                                             escapeHTML(
//                                                 formatPaymentDate(
//                                                     payment.paidDate
//                                                 )
//                                             )
//                                         }
//                                     </div>


//                                     ${
//                                         payment.note
//                                             ? `
//                                                 <div
//                                                     class="payment-note"
//                                                 >
//                                                     ${
//                                                         escapeHTML(
//                                                             payment.note
//                                                         )
//                                                     }
//                                                 </div>
//                                             `
//                                             : ""
//                                     }

//                                 </div>


//                                 <div
//                                     class="payment-right"
//                                 >

//                                     <strong>
//                                         ₹${
//                                             Number(
//                                                 payment.amount || 0
//                                             ).toFixed(2)
//                                         }
//                                     </strong>

//                                     <span>
//                                         ✓ PAID
//                                     </span>

//                                 </div>

//                             </div>
//                         `;

//                     }
//                 )
//                 .join("")

//             : `
//                 <div
//                     class="no-payment-history"
//                 >
//                     अभी तक कोई payment history उपलब्ध नहीं है।
//                 </div>
//             `;


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
//         Student Information | Global Services
//     </title>


//     <style>

//         * {

//             box-sizing:
//                 border-box;

//             font-family:
//                 "Segoe UI",
//                 Arial,
//                 sans-serif;

//         }


//         body {

//             min-height:
//                 100vh;

//             margin:
//                 0;

//             padding:
//                 30px 15px;

//             color:
//                 #eaf2ff;

//             background:

//                 radial-gradient(
//                     circle at top right,
//                     #2563eb,
//                     transparent 35%
//                 ),

//                 radial-gradient(
//                     circle at bottom left,
//                     #0891b2,
//                     transparent 35%
//                 ),

//                 linear-gradient(
//                     135deg,
//                     #06162f,
//                     #0b3b70
//                 );

//         }


//         .profile-card {

//             width:
//                 100%;

//             max-width:
//                 900px;

//             margin:
//                 auto;

//             overflow:
//                 hidden;

//             border:
//                 1px solid
//                 rgba(
//                     255,
//                     255,
//                     255,
//                     .16
//                 );

//             border-radius:
//                 25px;

//             background:
//                 rgba(
//                     255,
//                     255,
//                     255,
//                     .1
//                 );

//             box-shadow:
//                 0 24px 65px
//                 rgba(
//                     0,
//                     0,
//                     0,
//                     .35
//                 );

//             backdrop-filter:
//                 blur(15px);

//         }


//         .top-bar {

//             display:
//                 flex;

//             align-items:
//                 center;

//             justify-content:
//                 space-between;

//             padding:
//                 14px 23px;

//             color:
//                 #cfe8ff;

//             background:
//                 rgba(
//                     0,
//                     0,
//                     0,
//                     .18
//                 );

//             font-size:
//                 12px;

//             font-weight:
//                 700;

//             letter-spacing:
//                 .5px;

//         }


//         .secure {

//             color:
//                 #86efac;

//         }


//         .hero {

//             position:
//                 relative;

//             padding:
//                 34px 30px;

//             overflow:
//                 hidden;

//             text-align:
//                 center;

//             background:
//                 linear-gradient(
//                     135deg,
//                     #2563eb,
//                     #06b6d4
//                 );

//         }


//         .hero::before,
//         .hero::after {

//             position:
//                 absolute;

//             width:
//                 150px;

//             height:
//                 150px;

//             border-radius:
//                 50%;

//             content:
//                 "";

//             background:
//                 rgba(
//                     255,
//                     255,
//                     255,
//                     .12
//                 );

//         }


//         .hero::before {

//             top:
//                 -70px;

//             left:
//                 -30px;

//         }


//         .hero::after {

//             right:
//                 -40px;

//             bottom:
//                 -90px;

//         }


//         .avatar {

//             position:
//                 relative;

//             z-index:
//                 1;

//             display:
//                 flex;

//             width:
//                 92px;

//             height:
//                 92px;

//             align-items:
//                 center;

//             justify-content:
//                 center;

//             margin:
//                 auto auto 14px;

//             border:
//                 4px solid
//                 rgba(
//                     255,
//                     255,
//                     255,
//                     .8
//                 );

//             border-radius:
//                 50%;

//             color:
//                 #1d4ed8;

//             background:
//                 #fff;

//             box-shadow:
//                 0 10px 25px
//                 rgba(
//                     0,
//                     0,
//                     0,
//                     .18
//                 );

//         }


//         .avatar img {

//             width:
//                 100%;

//             height:
//                 100%;

//             padding:
//                 6px;

//             border-radius:
//                 50%;

//             object-fit:
//                 contain;

//         }


//         .hero h1 {

//             position:
//                 relative;

//             z-index:
//                 1;

//             margin:
//                 0;

//             color:
//                 #fff;

//             font-size:
//                 29px;

//         }


//         .hero p {

//             position:
//                 relative;

//             z-index:
//                 1;

//             margin:
//                 8px 0 0;

//             color:
//                 #eafcff;

//             font-size:
//                 14px;

//         }


//         .content {

//             padding:
//                 28px;

//         }


//         .roll-number {

//             margin-bottom:
//                 24px;

//             padding:
//                 17px;

//             border:
//                 1px solid
//                 rgba(
//                     96,
//                     165,
//                     250,
//                     .45
//                 );

//             border-radius:
//                 14px;

//             color:
//                 #bfdbfe;

//             background:
//                 rgba(
//                     37,
//                     99,
//                     235,
//                     .22
//                 );

//             text-align:
//                 center;

//             font-size:
//                 12px;

//             font-weight:
//                 700;

//             letter-spacing:
//                 1px;

//         }


//         .roll-number span {

//             display:
//                 block;

//             margin-top:
//                 6px;

//             color:
//                 #fff;

//             font-size:
//                 26px;

//             font-weight:
//                 800;

//             letter-spacing:
//                 1px;

//         }


//         .details-grid {

//             display:
//                 grid;

//             grid-template-columns:
//                 repeat(
//                     2,
//                     1fr
//                 );

//             gap:
//                 15px;

//         }


//         .detail-box {

//             padding:
//                 17px;

//             border:
//                 1px solid
//                 rgba(
//                     255,
//                     255,
//                     255,
//                     .11
//                 );

//             border-radius:
//                 14px;

//             background:
//                 rgba(
//                     255,
//                     255,
//                     255,
//                     .07
//                 );

//         }


//         .detail-box small {

//             display:
//                 block;

//             margin-bottom:
//                 8px;

//             color:
//                 #93c5fd;

//             font-size:
//                 11px;

//             font-weight:
//                 700;

//             letter-spacing:
//                 .5px;

//             text-transform:
//                 uppercase;

//         }


//         .detail-box strong {

//             color:
//                 #fff;

//             font-size:
//                 16px;

//         }


//         .status {

//             display:
//                 inline-block;

//             padding:
//                 7px 12px;

//             border-radius:
//                 20px;

//             font-size:
//                 12px;

//             font-weight:
//                 700;

//         }


//         .success {

//             color:
//                 #dcfce7;

//             background:
//                 #15803d;

//         }


//         .pending {

//             color:
//                 #fef3c7;

//             background:
//                 #a16207;

//         }


//         /* ==================================
//            PAYMENT HISTORY
//         ================================== */


//         .payment-history {

//             margin-top:
//                 25px;

//             padding:
//                 20px;

//             border:
//                 1px solid
//                 rgba(
//                     134,
//                     239,
//                     172,
//                     .25
//                 );

//             border-radius:
//                 16px;

//             background:
//                 rgba(
//                     15,
//                     118,
//                     110,
//                     .16
//                 );

//         }


//         .payment-history-title {

//             display:
//                 flex;

//             align-items:
//                 center;

//             justify-content:
//                 space-between;

//             gap:
//                 10px;

//             margin-bottom:
//                 15px;

//         }


//         .payment-history-title h2 {

//             margin:
//                 0;

//             color:
//                 #ffffff;

//             font-size:
//                 19px;

//         }


//         .total-paid {

//             padding:
//                 7px 11px;

//             border-radius:
//                 20px;

//             color:
//                 #dcfce7;

//             background:
//                 #15803d;

//             font-size:
//                 12px;

//             font-weight:
//                 800;

//         }


//         .payment-history-row {

//             display:
//                 flex;

//             align-items:
//                 center;

//             justify-content:
//                 space-between;

//             gap:
//                 15px;

//             padding:
//                 14px 0;

//             border-bottom:
//                 1px solid
//                 rgba(
//                     255,
//                     255,
//                     255,
//                     .10
//                 );

//         }


//         .payment-history-row:last-child {

//             border-bottom:
//                 none;

//         }


//         .payment-month {

//             color:
//                 #ffffff;

//             font-size:
//                 15px;

//             font-weight:
//                 800;

//         }


//         .payment-date {

//             margin-top:
//                 5px;

//             color:
//                 #bfdbfe;

//             font-size:
//                 12px;

//         }


//         .payment-note {

//             margin-top:
//                 5px;

//             color:
//                 #cbd5e1;

//             font-size:
//                 11px;

//         }


//         .payment-right {

//             min-width:
//                 90px;

//             text-align:
//                 right;

//         }


//         .payment-right strong {

//             display:
//                 block;

//             color:
//                 #86efac;

//             font-size:
//                 17px;

//         }


//         .payment-right span {

//             display:
//                 inline-block;

//             margin-top:
//                 4px;

//             padding:
//                 3px 7px;

//             border-radius:
//                 10px;

//             color:
//                 #dcfce7;

//             background:
//                 #15803d;

//             font-size:
//                 9px;

//             font-weight:
//                 800;

//         }


//         .no-payment-history {

//             padding:
//                 18px;

//             border-radius:
//                 10px;

//             color:
//                 #cbd5e1;

//             background:
//                 rgba(
//                     255,
//                     255,
//                     255,
//                     .05
//                 );

//             text-align:
//                 center;

//             font-size:
//                 13px;

//         }


//         .pending-alert {

//             display:
//                 flex;

//             gap:
//                 13px;

//             margin-top:
//                 20px;

//             padding:
//                 15px;

//             border:
//                 1px solid
//                 rgba(
//                     251,
//                     191,
//                     36,
//                     .30
//                 );

//             border-radius:
//                 13px;

//             color:
//                 #fef3c7;

//             background:
//                 rgba(
//                     161,
//                     98,
//                     7,
//                     .22
//                 );

//         }


//         .alert-icon {

//             font-size:
//                 24px;

//         }


//         .pending-alert strong {

//             color:
//                 #fde68a;

//         }


//         .pending-alert p {

//             margin:
//                 5px 0 0;

//             color:
//                 #fef3c7;

//             font-size:
//                 12px;

//             line-height:
//                 1.5;

//         }


//         .buttons {

//             display:
//                 grid;

//             grid-template-columns:
//                 1fr 1fr;

//             gap:
//                 12px;

//             margin-top:
//                 25px;

//         }


//         .receipt-btn,
//         .logout-btn {

//             display:
//                 block;

//             padding:
//                 14px;

//             border-radius:
//                 10px;

//             color:
//                 #fff;

//             text-align:
//                 center;

//             text-decoration:
//                 none;

//             font-size:
//                 14px;

//             font-weight:
//                 700;

//             transition:
//                 .2s ease;

//         }


//         .receipt-btn {

//             background:
//                 linear-gradient(
//                     135deg,
//                     #2563eb,
//                     #06b6d4
//                 );

//         }


//         .logout-btn {

//             background:
//                 rgba(
//                     255,
//                     255,
//                     255,
//                     .13
//                 );

//         }


//         .receipt-btn:hover,
//         .logout-btn:hover {

//             transform:
//                 translateY(
//                     -2px
//                 );

//         }


//         .footer {

//             padding:
//                 0 28px 24px;

//             color:
//                 #93c5fd;

//             text-align:
//                 center;

//             font-size:
//                 11px;

//         }


//         @media (
//             max-width:
//             600px
//         ) {

//             body {

//                 padding:
//                     15px 10px;

//             }


//             .top-bar {

//                 padding:
//                     12px 16px;

//             }


//             .hero {

//                 padding:
//                     28px 20px;

//             }


//             .hero h1 {

//                 font-size:
//                     23px;

//             }


//             .content {

//                 padding:
//                     20px;

//             }


//             .details-grid,
//             .buttons {

//                 grid-template-columns:
//                     1fr;

//             }


//             .payment-history-title {

//                 align-items:
//                     flex-start;

//                 flex-direction:
//                     column;

//             }


//             .payment-history-row {

//                 align-items:
//                     flex-start;

//             }

//         }

//     </style>

// </head>


// <body>


//     <main class="profile-card">


//         <div class="top-bar">

//             <span>
//                 GLOBAL SERVICES
//             </span>

//             <span class="secure">
//                 ● SAFE & SECURE
//             </span>

//         </div>


//         <section class="hero">


//             <div class="avatar">

//                 <img
//                     src="/images/GS LOGO.png"
//                     alt="GLOBAL SERVICES Logo"
//                 >

//             </div>


//             <h1>
//                 ${escapeHTML(
//                     studentName
//                 )}
//             </h1>


//             <p>
//                 Gulab Service Institute Student Profile
//             </p>


//         </section>


//         <section class="content">


//             <div class="roll-number">

//                 STUDENT ROLL NUMBER

//                 <span>
//                     ${escapeHTML(
//                         rollNumber
//                     )}
//                 </span>

//             </div>


//             <div class="details-grid">


//                 <div class="detail-box">

//                     <small>
//                         Mobile Number
//                     </small>

//                     <strong>
//                         ${escapeHTML(
//                             mobile
//                         )}
//                     </strong>

//                 </div>


//                 <div class="detail-box">

//                     <small>
//                         Age
//                     </small>

//                     <strong>
//                         ${
//                             escapeHTML(
//                                 student.age ||
//                                 "-"
//                             )
//                         }
//                         Years
//                     </strong>

//                 </div>


//                 <div class="detail-box">

//                     <small>
//                         Class / Course
//                     </small>

//                     <strong>
//                         ${escapeHTML(
//                             course
//                         )}
//                     </strong>

//                 </div>


//                 <div class="detail-box">

//                     <small>
//                         Subscription Plan
//                     </small>

//                     <strong>
//                         ${
//                             escapeHTML(
//                                 student.plan ||
//                                 "-"
//                             )
//                         }
//                     </strong>

//                 </div>


//                 <div class="detail-box">

//                     <small>
//                         Total Fee
//                     </small>

//                     <strong>
//                         ₹${amount}
//                     </strong>

//                 </div>


//                 <div class="detail-box">

//                     <small>
//                         Payment Status
//                     </small>

//                     <span
//                         class="status ${
//                             paymentSuccess
//                                 ? "success"
//                                 : "pending"
//                         }"
//                     >

//                         ${
//                             paymentSuccess
//                                 ? "✓ Success"
//                                 : "⏳ Pending"
//                         }

//                     </span>

//                 </div>


//             </div>



//             <!-- ============================
//                  PAYMENT HISTORY
//             ============================= -->


//             <div class="payment-history">


//                 <div class="payment-history-title">


//                     <h2>
//                         💳 Payment History
//                     </h2>


//                     <div class="total-paid">

//                         Total Paid:
//                         ₹${
//                             totalPaid.toFixed(
//                                 2
//                             )
//                         }

//                     </div>


//                 </div>


//                 ${paymentHistoryHTML}


//             </div>



//             ${
//                 !paymentSuccess

//                     ? `
//                         <div class="pending-alert">

//                             <div class="alert-icon">
//                                 ⚠️
//                             </div>

//                             <div>

//                                 <strong>
//                                     भुगतान लंबित है
//                                 </strong>

//                                 <p>
//                                     कृपया भुगतान संबंधी जानकारी और पुष्टि के लिए
//                                     होम ब्रांच से संपर्क करें।
//                                 </p>

//                             </div>

//                         </div>
//                     `

//                     : ""
//             }



//             <div class="buttons">


//                 <a

//                     href="/admin/student-receipt/${
//                         escapeHTML(
//                             studentId
//                         )
//                     }"

//                     target="_blank"

//                     class="receipt-btn"

//                 >
//                     ⬇ Download Receipt
//                 </a>


//                 <a
//                     href="/student-logout"
//                     class="logout-btn"
//                 >
//                     🚪 Logout
//                 </a>


//             </div>


//         </section>


//         <div class="footer">

//             GLOBAL SERVICES •
//             Your education, our commitment

//         </div>


//     </main>


// </body>

// </html>
//     `;

// }


// module.exports =
//     StudentInformation;



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


function formatPaymentDate(value) {

    if (!value) {
        return "-";
    }

    try {

        const date =
            new Date(value);

        if (
            Number.isNaN(
                date.getTime()
            )
        ) {
            return "-";
        }

        return date.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            }
        );

    } catch (error) {

        return "-";

    }

}


function StudentInformation(student = {}) {


    const paymentSuccess =
        String(
            student.paymentStatus || ""
        ).toLowerCase() ===
        "success";


    const studentName =
        student.name ||
        "Student";


    const rollNumber =
        student.roll ||
        student.rollNo ||
        "-";


    const mobile =
        student.mobile ||
        student.phone ||
        "-";


    const course =
        student.className ||
        student.course ||
        "-";


    const amount =
        Number(
            student.amount || 0
        ).toFixed(2);


    const studentId =
        student._id ||
        "";


    // =====================================
    // STUDENT PHOTO
    // =====================================

    const studentPhoto = (() => {

        let photo =
            student.image ||
            student.photo ||
            "";

        if (!photo) {

            return "/images/GS LOGO.png";

        }


        photo =
            String(photo)
                .trim()
                .replace(/\\/g, "/");


        if (
            photo.startsWith("http://") ||
            photo.startsWith("https://")
        ) {

            return photo;

        }


        if (!photo.startsWith("/")) {

            photo =
                "/" +
                photo;

        }


        return photo;

    })();


    // =====================================
    // PAYMENT HISTORY
    // =====================================

    let paymentHistory =
        Array.isArray(
            student.paymentHistory
        )
            ? [...student.paymentHistory]
            : [];


    // =====================================
    // OLD STUDENT PAYMENT FALLBACK
    // =====================================

    if (
        paymentHistory.length === 0 &&
        paymentSuccess &&
        Number(
            student.amount || 0
        ) > 0
    ) {

        paymentHistory.push({

            month:
                "Previous Payment",

            amount:
                Number(
                    student.amount || 0
                ),

            paidDate:
                null,

            note:
                "पुरानी payment entry में month/date save नहीं था"

        });

    }


    const totalPaid =
        paymentHistory.reduce(
            (
                total,
                payment
            ) => {

                return (
                    total +
                    Number(
                        payment.amount || 0
                    )
                );

            },
            0
        );


    const paymentHistoryHTML =

        paymentHistory.length > 0

            ? paymentHistory
                .slice()
                .sort(
                    (
                        a,
                        b
                    ) => {

                        return (
                            new Date(
                                b.paidDate || 0
                            ) -
                            new Date(
                                a.paidDate || 0
                            )
                        );

                    }
                )
                .map(
                    (payment) => {

                        return `
                            <div class="payment-history-row">

                                <div class="payment-left">

                                    <div class="payment-month">

                                        ${
                                            escapeHTML(
                                                payment.month ||
                                                "-"
                                            )
                                        }

                                    </div>


                                    <div class="payment-date">

                                        📅 Paid on:

                                        ${
                                            escapeHTML(
                                                formatPaymentDate(
                                                    payment.paidDate
                                                )
                                            )
                                        }

                                    </div>


                                    ${
                                        payment.note

                                            ? `
                                                <div class="payment-note">

                                                    ${
                                                        escapeHTML(
                                                            payment.note
                                                        )
                                                    }

                                                </div>
                                            `

                                            : ""
                                    }

                                </div>


                                <div class="payment-right">

                                    <strong>

                                        ₹${
                                            Number(
                                                payment.amount || 0
                                            ).toFixed(2)
                                        }

                                    </strong>

                                    <span>
                                        ✓ PAID
                                    </span>

                                </div>

                            </div>
                        `;

                    }
                )
                .join("")

            : `
                <div class="no-payment-history">

                    अभी तक कोई payment history उपलब्ध नहीं है।

                </div>
            `;


    return `
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Student Information | Global Services
    </title>


    <style>

        * {

            box-sizing:
                border-box;

            font-family:
                "Segoe UI",
                Arial,
                sans-serif;

        }


        body {

            min-height:
                100vh;

            margin:
                0;

            padding:
                30px 15px;

            color:
                #eaf2ff;

            background:

                radial-gradient(
                    circle at top right,
                    #2563eb,
                    transparent 35%
                ),

                radial-gradient(
                    circle at bottom left,
                    #0891b2,
                    transparent 35%
                ),

                linear-gradient(
                    135deg,
                    #06162f,
                    #0b3b70
                );

        }


        .profile-card {

            width:
                100%;

            max-width:
                900px;

            margin:
                auto;

            overflow:
                hidden;

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    .16
                );

            border-radius:
                25px;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .1
                );

            box-shadow:
                0 24px 65px
                rgba(
                    0,
                    0,
                    0,
                    .35
                );

            backdrop-filter:
                blur(15px);

        }


        .top-bar {

            display:
                flex;

            align-items:
                center;

            justify-content:
                space-between;

            padding:
                14px 23px;

            color:
                #cfe8ff;

            background:
                rgba(
                    0,
                    0,
                    0,
                    .18
                );

            font-size:
                12px;

            font-weight:
                700;

            letter-spacing:
                .5px;

        }


        .secure {

            color:
                #86efac;

        }


        .hero {

            position:
                relative;

            padding:
                34px 30px;

            overflow:
                hidden;

            text-align:
                center;

            background:
                linear-gradient(
                    135deg,
                    #2563eb,
                    #06b6d4
                );

        }


        .hero::before,
        .hero::after {

            position:
                absolute;

            width:
                150px;

            height:
                150px;

            border-radius:
                50%;

            content:
                "";

            background:
                rgba(
                    255,
                    255,
                    255,
                    .12
                );

        }


        .hero::before {

            top:
                -70px;

            left:
                -30px;

        }


        .hero::after {

            right:
                -40px;

            bottom:
                -90px;

        }


        .avatar {

            position:
                relative;

            z-index:
                1;

            display:
                flex;

            width:
                110px;

            height:
                110px;

            align-items:
                center;

            justify-content:
                center;

            margin:
                auto auto 14px;

            overflow:
                hidden;

            border:
                4px solid
                rgba(
                    255,
                    255,
                    255,
                    .8
                );

            border-radius:
                50%;

            background:
                #fff;

            box-shadow:
                0 10px 25px
                rgba(
                    0,
                    0,
                    0,
                    .18
                );

        }


        .avatar img {

            width:
                100%;

            height:
                100%;

            display:
                block;

            border-radius:
                50%;

            object-fit:
                cover;

            object-position:
                center;

        }


        .hero h1 {

            position:
                relative;

            z-index:
                1;

            margin:
                0;

            color:
                #fff;

            font-size:
                29px;

        }


        .hero p {

            position:
                relative;

            z-index:
                1;

            margin:
                8px 0 0;

            color:
                #eafcff;

            font-size:
                14px;

        }


        .content {

            padding:
                28px;

        }


        .roll-number {

            margin-bottom:
                24px;

            padding:
                17px;

            border:
                1px solid
                rgba(
                    96,
                    165,
                    250,
                    .45
                );

            border-radius:
                14px;

            color:
                #bfdbfe;

            background:
                rgba(
                    37,
                    99,
                    235,
                    .22
                );

            text-align:
                center;

            font-size:
                12px;

            font-weight:
                700;

            letter-spacing:
                1px;

        }


        .roll-number span {

            display:
                block;

            margin-top:
                6px;

            color:
                #fff;

            font-size:
                26px;

            font-weight:
                800;

            letter-spacing:
                1px;

        }


        .details-grid {

            display:
                grid;

            grid-template-columns:
                repeat(
                    2,
                    1fr
                );

            gap:
                15px;

        }


        .detail-box {

            padding:
                17px;

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    .11
                );

            border-radius:
                14px;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .07
                );

        }


        .detail-box small {

            display:
                block;

            margin-bottom:
                8px;

            color:
                #93c5fd;

            font-size:
                11px;

            font-weight:
                700;

            letter-spacing:
                .5px;

            text-transform:
                uppercase;

        }


        .detail-box strong {

            color:
                #fff;

            font-size:
                16px;

        }


        .status {

            display:
                inline-block;

            padding:
                7px 12px;

            border-radius:
                20px;

            font-size:
                12px;

            font-weight:
                700;

        }


        .success {

            color:
                #dcfce7;

            background:
                #15803d;

        }


        .pending {

            color:
                #fef3c7;

            background:
                #a16207;

        }


        /* ==================================
           PAYMENT HISTORY
        ================================== */


        .payment-history {

            margin-top:
                25px;

            padding:
                20px;

            border:
                1px solid
                rgba(
                    134,
                    239,
                    172,
                    .25
                );

            border-radius:
                16px;

            background:
                rgba(
                    15,
                    118,
                    110,
                    .16
                );

        }


        .payment-history-title {

            display:
                flex;

            align-items:
                center;

            justify-content:
                space-between;

            gap:
                10px;

            margin-bottom:
                15px;

        }


        .payment-history-title h2 {

            margin:
                0;

            color:
                #ffffff;

            font-size:
                19px;

        }


        .total-paid {

            padding:
                7px 11px;

            border-radius:
                20px;

            color:
                #dcfce7;

            background:
                #15803d;

            font-size:
                12px;

            font-weight:
                800;

        }


        .payment-history-row {

            display:
                flex;

            align-items:
                center;

            justify-content:
                space-between;

            gap:
                15px;

            padding:
                14px 0;

            border-bottom:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    .10
                );

        }


        .payment-history-row:last-child {

            border-bottom:
                none;

        }


        .payment-month {

            color:
                #ffffff;

            font-size:
                15px;

            font-weight:
                800;

        }


        .payment-date {

            margin-top:
                5px;

            color:
                #bfdbfe;

            font-size:
                12px;

        }


        .payment-note {

            margin-top:
                5px;

            color:
                #cbd5e1;

            font-size:
                11px;

        }


        .payment-right {

            min-width:
                90px;

            text-align:
                right;

        }


        .payment-right strong {

            display:
                block;

            color:
                #86efac;

            font-size:
                17px;

        }


        .payment-right span {

            display:
                inline-block;

            margin-top:
                4px;

            padding:
                3px 7px;

            border-radius:
                10px;

            color:
                #dcfce7;

            background:
                #15803d;

            font-size:
                9px;

            font-weight:
                800;

        }


        .no-payment-history {

            padding:
                18px;

            border-radius:
                10px;

            color:
                #cbd5e1;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .05
                );

            text-align:
                center;

            font-size:
                13px;

        }


        .pending-alert {

            display:
                flex;

            gap:
                13px;

            margin-top:
                20px;

            padding:
                15px;

            border:
                1px solid
                rgba(
                    251,
                    191,
                    36,
                    .30
                );

            border-radius:
                13px;

            color:
                #fef3c7;

            background:
                rgba(
                    161,
                    98,
                    7,
                    .22
                );

        }


        .alert-icon {

            font-size:
                24px;

        }


        .pending-alert strong {

            color:
                #fde68a;

        }


        .pending-alert p {

            margin:
                5px 0 0;

            color:
                #fef3c7;

            font-size:
                12px;

            line-height:
                1.5;

        }


        .buttons {

            display:
                grid;

            grid-template-columns:
                1fr 1fr;

            gap:
                12px;

            margin-top:
                25px;

        }


        .receipt-btn,
        .logout-btn {

            display:
                block;

            padding:
                14px;

            border-radius:
                10px;

            color:
                #fff;

            text-align:
                center;

            text-decoration:
                none;

            font-size:
                14px;

            font-weight:
                700;

            transition:
                .2s ease;

        }


        .receipt-btn {

            background:
                linear-gradient(
                    135deg,
                    #2563eb,
                    #06b6d4
                );

        }


        .logout-btn {

            background:
                rgba(
                    255,
                    255,
                    255,
                    .13
                );

        }


        .receipt-btn:hover,
        .logout-btn:hover {

            transform:
                translateY(
                    -2px
                );

        }


        .footer {

            padding:
                0 28px 24px;

            color:
                #93c5fd;

            text-align:
                center;

            font-size:
                11px;

        }


        @media (
            max-width:
            600px
        ) {

            body {

                padding:
                    15px 10px;

            }


            .top-bar {

                padding:
                    12px 16px;

            }


            .hero {

                padding:
                    28px 20px;

            }


            .hero h1 {

                font-size:
                    23px;

            }


            .content {

                padding:
                    20px;

            }


            .details-grid,
            .buttons {

                grid-template-columns:
                    1fr;

            }


            .payment-history-title {

                align-items:
                    flex-start;

                flex-direction:
                    column;

            }


            .payment-history-row {

                align-items:
                    flex-start;

            }

        }

    </style>

</head>


<body>


    <main class="profile-card">


        <div class="top-bar">

            <span>
                GLOBAL SERVICES
            </span>

            <span class="secure">
                ● SAFE & SECURE
            </span>

        </div>


        <section class="hero">


            <div class="avatar">

                <img

                    src="${
                        escapeHTML(
                            studentPhoto
                        )
                    }"

                    alt="${
                        escapeHTML(
                            studentName
                        )
                    }"

                    onerror="
                        this.onerror = null;
                        this.src = '/images/GS LOGO.png';
                    "

                >

            </div>


            <h1>

                ${
                    escapeHTML(
                        studentName
                    )
                }

            </h1>


            <p>
                Gulab Service Institute Student Profile
            </p>


        </section>


        <section class="content">


            <div class="roll-number">

                STUDENT ROLL NUMBER

                <span>

                    ${
                        escapeHTML(
                            rollNumber
                        )
                    }

                </span>

            </div>


            <div class="details-grid">


                <div class="detail-box">

                    <small>
                        Mobile Number
                    </small>

                    <strong>

                        ${
                            escapeHTML(
                                mobile
                            )
                        }

                    </strong>

                </div>


                <div class="detail-box">

                    <small>
                        Age
                    </small>

                    <strong>

                        ${
                            escapeHTML(
                                student.age ||
                                "-"
                            )
                        }
                        Years

                    </strong>

                </div>


                <div class="detail-box">

                    <small>
                        Class / Course
                    </small>

                    <strong>

                        ${
                            escapeHTML(
                                course
                            )
                        }

                    </strong>

                </div>


                <div class="detail-box">

                    <small>
                        Subscription Plan
                    </small>

                    <strong>

                        ${
                            escapeHTML(
                                student.plan ||
                                "-"
                            )
                        }

                    </strong>

                </div>


                <div class="detail-box">

                    <small>
                        Total Fee
                    </small>

                    <strong>
                        ₹${amount}
                    </strong>

                </div>


                <div class="detail-box">

                    <small>
                        Payment Status
                    </small>


                    <span
                        class="status ${
                            paymentSuccess
                                ? "success"
                                : "pending"
                        }"
                    >

                        ${
                            paymentSuccess
                                ? "✓ Success"
                                : "⏳ Pending"
                        }

                    </span>

                </div>


            </div>



            <!-- ============================
                 PAYMENT HISTORY
            ============================= -->


            <div class="payment-history">


                <div class="payment-history-title">


                    <h2>
                        💳 Payment History
                    </h2>


                    <div class="total-paid">

                        Total Paid:

                        ₹${
                            totalPaid.toFixed(
                                2
                            )
                        }

                    </div>


                </div>


                ${paymentHistoryHTML}


            </div>



            ${
                !paymentSuccess

                    ? `
                        <div class="pending-alert">

                            <div class="alert-icon">
                                ⚠️
                            </div>

                            <div>

                                <strong>
                                    भुगतान लंबित है
                                </strong>

                                <p>
                                    कृपया भुगतान संबंधी जानकारी और पुष्टि के लिए
                                    होम ब्रांच से संपर्क करें।
                                </p>

                            </div>

                        </div>
                    `

                    : ""
            }



            <div class="buttons">


                <a

                    href="/admin/student-receipt/${
                        escapeHTML(
                            studentId
                        )
                    }"

                    target="_blank"

                    class="receipt-btn"

                >
                    ⬇ Download Receipt
                </a>


                <a

                    href="/admin/student-logout"

                    class="logout-btn"

                >
                    🚪 Logout
                </a>


            </div>


        </section>


        <div class="footer">

            GLOBAL SERVICES •
            Your education, our commitment

        </div>


    </main>


</body>

</html>
    `;

}


module.exports =
    StudentInformation;
