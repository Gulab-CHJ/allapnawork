// module.exports = function StudentProfile(student) {

//     const name =
//         student?.name || "Student";

//     const roll =
//         student?.roll ||
//         student?.rollNo ||
//         "N/A";

//     const course =
//         student?.className ||
//         student?.course ||
//         "N/A";

//     const mobile =
//         student?.mobile ||
//         student?.phone ||
//         "N/A";

//     const paymentStatus =
//         student?.paymentStatus ||
//         "Pending";

//     const isPaid =
//         paymentStatus === "Paid" ||
//         paymentStatus === "Success";

//     const image =
//         student?.image || "";

//     const profileImage = image
//         ? `
//             <img
//                 src="${image}"
//                 alt="${name}"
//                 class="profile-image"
//                 onerror="this.style.display='none'; document.getElementById('defaultAvatar').style.display='flex';"
//             >

//             <div
//                 id="defaultAvatar"
//                 class="default-avatar"
//                 style="display:none;"
//             >
//                 ${name.charAt(0).toUpperCase()}
//             </div>
//         `
//         : `
//             <div class="default-avatar">
//                 ${name.charAt(0).toUpperCase()}
//             </div>
//         `;


//     const fatherNameRow =
//         student?.fatherName
//             ? `
//                 <div class="detail-row">
//                     <span class="label">
//                         Father's Name
//                     </span>

//                     <span class="value">
//                         ${student.fatherName}
//                     </span>
//                 </div>
//             `
//             : "";


//     const ageRow =
//         student?.age
//             ? `
//                 <div class="detail-row">
//                     <span class="label">
//                         Age
//                     </span>

//                     <span class="value">
//                         ${student.age} Years
//                     </span>
//                 </div>
//             `
//             : "";


//     const emailRow =
//         student?.email
//             ? `
//                 <div class="detail-row">
//                     <span class="label">
//                         Email
//                     </span>

//                     <span class="value">
//                         ${student.email}
//                     </span>
//                 </div>
//             `
//             : "";


//     const addressRow =
//         student?.address
//             ? `
//                 <div class="detail-row">
//                     <span class="label">
//                         Address
//                     </span>

//                     <span class="value">
//                         ${student.address}
//                     </span>
//                 </div>
//             `
//             : "";


//     const paymentPendingBox =
//         !isPaid
//             ? `
//                 <div class="payment-box">

//                     <strong>
//                         ⚠ Payment Pending
//                     </strong>

//                     आपका payment अभी pending है।
//                     कृपया समय पर अपना fee जमा करें।

//                 </div>
//             `
//             : "";


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
//         ${name} - Student Profile
//     </title>


//     <style>

//         * {
//             box-sizing: border-box;
//             margin: 0;
//             padding: 0;
//         }


//         body {

//             font-family:
//                 Arial,
//                 sans-serif;

//             background:
//                 #f4f7fb;

//             color:
//                 #222;

//         }


//         .header {

//             background:
//                 linear-gradient(
//                     135deg,
//                     #0f766e,
//                     #16a34a
//                 );

//             color:
//                 white;

//             text-align:
//                 center;

//             padding:
//                 25px 15px;

//         }


//         .header h1 {

//             font-size:
//                 27px;

//             margin-bottom:
//                 5px;

//         }


//         .header p {

//             font-size:
//                 14px;

//             opacity:
//                 0.9;

//         }


//         .container {

//             max-width:
//                 700px;

//             margin:
//                 25px auto;

//             padding:
//                 0 15px;

//         }


//         .profile-card {

//             background:
//                 white;

//             border-radius:
//                 18px;

//             box-shadow:
//                 0 6px 25px
//                 rgba(0,0,0,0.08);

//             overflow:
//                 hidden;

//         }


//         .profile-top {

//             text-align:
//                 center;

//             padding:
//                 30px 20px 20px;

//             border-bottom:
//                 1px solid #eee;

//         }


//         .profile-image {

//             width:
//                 110px;

//             height:
//                 110px;

//             border-radius:
//                 50%;

//             object-fit:
//                 cover;

//             border:
//                 4px solid #16a34a;

//             margin-bottom:
//                 12px;

//         }


//         .default-avatar {

//             width:
//                 110px;

//             height:
//                 110px;

//             border-radius:
//                 50%;

//             margin:
//                 auto;

//             margin-bottom:
//                 12px;

//             background:
//                 #16a34a;

//             color:
//                 white;

//             align-items:
//                 center;

//             justify-content:
//                 center;

//             font-size:
//                 42px;

//             font-weight:
//                 bold;

//             border:
//                 4px solid #dcfce7;

//             display:
//                 flex;

//         }


//         .student-name {

//             font-size:
//                 24px;

//             font-weight:
//                 bold;

//             color:
//                 #111827;

//         }


//         .roll {

//             display:
//                 inline-block;

//             margin-top:
//                 8px;

//             background:
//                 #dcfce7;

//             color:
//                 #15803d;

//             padding:
//                 6px 14px;

//             border-radius:
//                 50px;

//             font-weight:
//                 bold;

//             font-size:
//                 14px;

//         }


//         .details {

//             padding:
//                 22px;

//         }


//         .detail-row {

//             display:
//                 flex;

//             justify-content:
//                 space-between;

//             gap:
//                 15px;

//             padding:
//                 13px 0;

//             border-bottom:
//                 1px solid #eee;

//         }


//         .detail-row:last-child {

//             border-bottom:
//                 none;

//         }


//         .label {

//             color:
//                 #6b7280;

//             font-size:
//                 14px;

//             font-weight:
//                 600;

//         }


//         .value {

//             text-align:
//                 right;

//             font-weight:
//                 600;

//             color:
//                 #111827;

//             word-break:
//                 break-word;

//         }


//         .payment-box {

//             margin:
//                 0 22px 22px;

//             padding:
//                 15px;

//             border-radius:
//                 12px;

//             text-align:
//                 center;

//             background:
//                 #fff7ed;

//             border:
//                 1px solid #fed7aa;

//             color:
//                 #c2410c;

//             font-size:
//                 14px;

//             line-height:
//                 1.6;

//         }


//         .payment-box strong {

//             display:
//                 block;

//             margin-bottom:
//                 3px;

//             font-size:
//                 16px;

//         }


//         .buttons {

//             padding:
//                 0 22px 25px;

//             display:
//                 grid;

//             grid-template-columns:
//                 1fr 1fr;

//             gap:
//                 12px;

//         }


//         .btn {

//             display:
//                 block;

//             text-align:
//                 center;

//             text-decoration:
//                 none;

//             border:
//                 none;

//             padding:
//                 13px 10px;

//             border-radius:
//                 10px;

//             cursor:
//                 pointer;

//             font-size:
//                 15px;

//             font-weight:
//                 bold;

//         }


//         .receipt-btn {

//             background:
//                 #16a34a;

//             color:
//                 white;

//         }


//         .id-btn {

//             background:
//                 #2563eb;

//             color:
//                 white;

//         }


//         .logout-btn {

//             background:
//                 #ef4444;

//             color:
//                 white;

//             grid-column:
//                 1 / -1;

//         }


//         .btn:hover {

//             opacity:
//                 0.9;

//         }


//         .footer {

//             text-align:
//                 center;

//             font-size:
//                 13px;

//             color:
//                 #777;

//             padding:
//                 18px;

//         }


//         @media (max-width:500px) {

//             .header h1 {

//                 font-size:
//                     22px;

//             }


//             .container {

//                 margin:
//                     15px auto;

//             }


//             .detail-row {

//                 flex-direction:
//                     column;

//                 gap:
//                     4px;

//             }


//             .value {

//                 text-align:
//                     left;

//             }


//             .buttons {

//                 grid-template-columns:
//                     1fr;

//             }


//             .logout-btn {

//                 grid-column:
//                     auto;

//             }

//         }

//     </style>

// </head>


// <body>


//     <div class="header">

//         <h1>
//             GLOBAL SMART STUDY
//         </h1>

//         <p>
//             Student Profile
//         </p>

//     </div>


//     <div class="container">


//         <div class="profile-card">


//             <div class="profile-top">

//                 ${profileImage}

//                 <div class="student-name">
//                     ${name}
//                 </div>

//                 <div class="roll">
//                     Roll: ${roll}
//                 </div>

//             </div>


//             <div class="details">


//                 ${fatherNameRow}


//                 ${ageRow}


//                 <div class="detail-row">

//                     <span class="label">
//                         Class / Course
//                     </span>

//                     <span class="value">
//                         ${course}
//                     </span>

//                 </div>


//                 <div class="detail-row">

//                     <span class="label">
//                         Mobile Number
//                     </span>

//                     <span class="value">
//                         ${mobile}
//                     </span>

//                 </div>


//                 ${emailRow}


//                 ${addressRow}


//                 <div class="detail-row">

//                     <span class="label">
//                         Plan
//                     </span>

//                     <span class="value">
//                         ${student?.plan || "N/A"}
//                     </span>

//                 </div>


//                 <div class="detail-row">

//                     <span class="label">
//                         Total Fee
//                     </span>

//                     <span class="value">
//                         ₹${student?.amount || 0}
//                     </span>

//                 </div>


//                 <div class="detail-row">

//                     <span class="label">
//                         Payment Status
//                     </span>

//                     <span
//                         class="value"
//                         style="
//                             color:
//                             ${isPaid
//                                 ? "#16a34a"
//                                 : "#dc2626"
//                             };
//                         "
//                     >
//                         ${paymentStatus}
//                     </span>

//                 </div>


//             </div>


//             ${paymentPendingBox}


//             <div class="buttons">


//                 <a
//                     href="/admin/student-receipt/${student._id}"
//                     class="btn receipt-btn"
//                 >
//                     📄 Download Receipt
//                 </a>


//                 <a
//                     href="/student-id-card/${student._id}"
//                     class="btn id-btn"
//                 >
//                     🪪 Student ID Card
//                 </a>


//                 <a
//                     href="/admin/student-logout"
//                     class="btn logout-btn"
//                 >
//                     Logout
//                 </a>


//             </div>


//         </div>


//     </div>


//     <div class="footer">

//         © ${new Date().getFullYear()}
//         Global Smart Study

//     </div>


// </body>

// </html>
//     `;

// };


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


function StudentProfile(student = {}) {


    const studentId =
        student._id
            ? String(student._id)
            : "";


    const studentName =
        student.name ||
        "Student";


    const rollNumber =
        student.roll ||
        student.rollNo ||
        "-";


    const course =
        student.className ||
        student.course ||
        "-";


    // const mobile =
    //     student.mobile ||
    //     student.phone ||
    //     "-";


    const mobile =
    student.mobile ||
    student.phone ||
    "-";


const maskedMobile = (() => {

    const number =
        String(mobile || "")
            .replace(/\D/g, "");

    if (number.length >= 10) {

        return (
            number.slice(0, 4) +
            "****" +
            number.slice(-2)
        );

    }

    if (number.length > 4) {

        return (
            number.slice(0, 2) +
            "****" +
            number.slice(-2)
        );

    }

    return "****";

})();


    const paymentSuccess =
        String(
            student.paymentStatus || ""
        ).toLowerCase() ===
        "success";


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
                "/" + photo;

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


    // Old student fallback
    if (
        paymentHistory.length === 0 &&
        paymentSuccess &&
        Number(student.amount || 0) > 0
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
                "पुरानी payment entry में month/date उपलब्ध नहीं है"

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
                            <div class="payment-row">

                                <div>

                                    <strong>
                                        ${
                                            escapeHTML(
                                                payment.month ||
                                                "-"
                                            )
                                        }
                                    </strong>

                                    <small>
                                        📅 Paid:
                                        ${
                                            escapeHTML(
                                                formatPaymentDate(
                                                    payment.paidDate
                                                )
                                            )
                                        }
                                    </small>

                                    ${
                                        payment.note
                                            ? `
                                                <small>
                                                    ${
                                                        escapeHTML(
                                                            payment.note
                                                        )
                                                    }
                                                </small>
                                            `
                                            : ""
                                    }

                                </div>


                                <div class="payment-amount">

                                    ₹${
                                        Number(
                                            payment.amount || 0
                                        ).toFixed(2)
                                    }

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
                <div class="no-payment">
                    अभी कोई payment history उपलब्ध नहीं है।
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
        ${escapeHTML(studentName)} | Student Profile
    </title>


    <style>

        * {

            box-sizing:
                border-box;

            font-family:
                Arial,
                sans-serif;

        }


        body {

            margin:
                0;

            min-height:
                100vh;

            padding:
                20px 12px;

            background:
                linear-gradient(
                    135deg,
                    #064e3b,
                    #16a34a
                );

        }


        .profile-card {

            width:
                100%;

            max-width:
                760px;

            margin:
                auto;

            overflow:
                hidden;

            border-radius:
                22px;

            background:
                #ffffff;

            box-shadow:
                0 20px 50px
                rgba(
                    0,
                    0,
                    0,
                    .25
                );

        }


        .header {

            padding:
                28px 20px;

            color:
                #ffffff;

            background:
                linear-gradient(
                    135deg,
                    #15803d,
                    #22c55e
                );

            text-align:
                center;

        }


        .header-title {

            font-size:
                14px;

            font-weight:
                800;

            letter-spacing:
                1px;

        }


        .header-subtitle {

            margin-top:
                5px;

            font-size:
                12px;

            opacity:
                .9;

        }


        .photo {

            width:
                120px;

            height:
                120px;

            overflow:
                hidden;

            margin:
                18px auto 10px;

            border:
                5px solid
                #ffffff;

            border-radius:
                50%;

            background:
                #ffffff;

            box-shadow:
                0 8px 20px
                rgba(
                    0,
                    0,
                    0,
                    .2
                );

        }


        .photo img {

            display:
                block;

            width:
                100%;

            height:
                100%;

            object-fit:
                cover;

            object-position:
                center;

        }


        .header h1 {

            margin:
                8px 0 4px;

            font-size:
                26px;

        }


        .roll {

            font-size:
                13px;

            font-weight:
                700;

            opacity:
                .95;

        }


        .content {

            padding:
                24px;

        }


        .details {

            display:
                grid;

            grid-template-columns:
                repeat(
                    2,
                    1fr
                );

            gap:
                13px;

        }


        .detail {

            padding:
                15px;

            border:
                1px solid
                #e2e8f0;

            border-radius:
                12px;

            background:
                #f8fafc;

        }


        .detail small {

            display:
                block;

            margin-bottom:
                6px;

            color:
                #64748b;

            font-size:
                11px;

            font-weight:
                700;

            text-transform:
                uppercase;

        }


        .detail strong {

            color:
                #0f172a;

            font-size:
                15px;

        }


        .status {

            display:
                inline-block;

            padding:
                6px 10px;

            border-radius:
                20px;

            font-size:
                12px;

            font-weight:
                800;

        }


        .success {

            color:
                #166534;

            background:
                #dcfce7;

        }


        .pending {

            color:
                #92400e;

            background:
                #fef3c7;

        }


        .payment-box {

            margin-top:
                22px;

            padding:
                18px;

            border:
                1px solid
                #bbf7d0;

            border-radius:
                14px;

            background:
                #f0fdf4;

        }


        .payment-heading {

            display:
                flex;

            align-items:
                center;

            justify-content:
                space-between;

            gap:
                10px;

            margin-bottom:
                10px;

        }


        .payment-heading h2 {

            margin:
                0;

            color:
                #166534;

            font-size:
                18px;

        }


        .total-paid {

            padding:
                6px 10px;

            border-radius:
                20px;

            color:
                #ffffff;

            background:
                #16a34a;

            font-size:
                11px;

            font-weight:
                800;

        }


        .payment-row {

            display:
                flex;

            align-items:
                center;

            justify-content:
                space-between;

            gap:
                12px;

            padding:
                13px 0;

            border-bottom:
                1px solid
                #dcfce7;

        }


        .payment-row:last-child {

            border-bottom:
                none;

        }


        .payment-row strong {

            display:
                block;

            color:
                #0f172a;

            font-size:
                14px;

        }


        .payment-row small {

            display:
                block;

            margin-top:
                4px;

            color:
                #64748b;

            font-size:
                11px;

        }


        .payment-amount {

            min-width:
                90px;

            color:
                #15803d;

            text-align:
                right;

            font-size:
                16px;

            font-weight:
                800;

        }


        .payment-amount span {

            display:
                block;

            margin-top:
                3px;

            color:
                #16a34a;

            font-size:
                9px;

        }


        .no-payment {

            padding:
                15px;

            color:
                #64748b;

            text-align:
                center;

            font-size:
                12px;

        }


        .pending-alert {

            margin-top:
                18px;

            padding:
                14px;

            border:
                1px solid
                #fde68a;

            border-radius:
                12px;

            color:
                #92400e;

            background:
                #fffbeb;

            font-size:
                12px;

        }


        .buttons {

            display:
                grid;

            grid-template-columns:
                repeat(
                    3,
                    1fr
                );

            gap:
                10px;

            margin-top:
                22px;

        }


        .button {

            display:
                flex;

            align-items:
                center;

            justify-content:
                center;

            min-height:
                45px;

            padding:
                10px;

            border-radius:
                10px;

            color:
                #ffffff;

            text-align:
                center;

            text-decoration:
                none;

            font-size:
                12px;

            font-weight:
                800;

        }


        .receipt {

            background:
                #2563eb;

        }


        .id-card {

            background:
                #7c3aed;

        }


        .logout {

            background:
                #475569;

        }


        .footer {

            padding:
                18px;

            color:
                #64748b;

            background:
                #f8fafc;

            text-align:
                center;

            font-size:
                10px;

        }


        @media (
            max-width:
            600px
        ) {

            .details {

                grid-template-columns:
                    1fr;

            }


            .buttons {

                grid-template-columns:
                    1fr;

            }


            .payment-heading {

                align-items:
                    flex-start;

                flex-direction:
                    column;

            }


            .payment-row {

                align-items:
                    flex-start;

            }


            .content {

                padding:
                    18px;

            }

        }

    </style>

</head>


<body>


    <main class="profile-card">


        <section class="header">

            <div class="header-title">
                GLOBAL SMART STUDY
            </div>

            <div class="header-subtitle">
                Student Profile
            </div>


            <div class="photo">

                <img
                    src="${escapeHTML(studentPhoto)}"
                    alt="${escapeHTML(studentName)}"
                    onerror="
                        this.onerror = null;
                        this.src = '/images/GS LOGO.png';
                    "
                >

            </div>


            <h1>
                ${escapeHTML(studentName)}
            </h1>


            <div class="roll">
                Roll: ${escapeHTML(rollNumber)}
            </div>


        </section>



        <section class="content">


            <div class="details">


                <div class="detail">

                    <small>
                        Age
                    </small>

                    <strong>
                        ${escapeHTML(student.age || "-")} Years
                    </strong>

                </div>


                <div class="detail">

                    <small>
                        Class / Course
                    </small>

                    <strong>
                        ${escapeHTML(course)}
                    </strong>

                </div>


                <div class="detail">

                    <small>
                        Mobile Number
                    </small>

                    <strong>
                        ${escapeHTML(maskedMobile)}
                    </strong>

                </div>


                <div class="detail">

                    <small>
                        Plan
                    </small>

                    <strong>
                        ${escapeHTML(student.plan || "-")}
                    </strong>

                </div>


                <div class="detail">

                    <small>
                        Total Fee
                    </small>

                    <strong>
                        ₹${Number(student.amount || 0).toFixed(2)}
                    </strong>

                </div>


                <div class="detail">

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



            <div class="payment-box">


                <div class="payment-heading">


                    <h2>
                        💳 Payment History
                    </h2>


                    <div class="total-paid">
                        Total Paid:
                        ₹${totalPaid.toFixed(2)}
                    </div>


                </div>


                ${paymentHistoryHTML}


            </div>



            ${
                !paymentSuccess
                    ? `
                        <div class="pending-alert">
                            ⚠️ Payment pending है। कृपया होम ब्रांच से संपर्क करें।
                        </div>
                    `
                    : ""
            }



            <div class="buttons">


                <a
                    href="/admin/student-receipt/${escapeHTML(studentId)}"
                    target="_blank"
                    class="button receipt"
                >
                    📄 Download Receipt
                </a>


                <a
                    href="/student-id-card/${escapeHTML(studentId)}"
                    target="_blank"
                    class="button id-card"
                >
                    🪪 Student ID Card
                </a>


                <a
                    href="/admin/student-logout"
                    class="button logout"
                >
                    🚪 Logout
                </a>


            </div>


        </section>


        <div class="footer">
            GLOBAL SMART STUDY • Your education, our commitment
        </div>


    </main>


</body>

</html>
    `;

}


module.exports =
    StudentProfile;
