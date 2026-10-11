// // function escapeHTML(value) {

// //     if (value === null || value === undefined) {
// //         return "";
// //     }

// //     return String(value)
// //         .replace(/&/g, "&amp;")
// //         .replace(/</g, "&lt;")
// //         .replace(/>/g, "&gt;")
// //         .replace(/"/g, "&quot;")
// //         .replace(/'/g, "&#039;");
// // }


// // function ManageStudents(students = []) {

// //     const safeStudents = Array.isArray(students)
// //         ? students
// //         : [];


// //     const rows = safeStudents.map((student, index) => {

// //         return `
// //             <tr>

// //                 <td>${index + 1}</td>

// //                 <td>${escapeHTML(student.name)}</td>

// //                 <td>${escapeHTML(student.rollNo || "Not Generated")}</td>

// //                 <td>${escapeHTML(student.mobile)}</td>

// //                 <td>${escapeHTML(student.course)}</td>

// //                 <td>${escapeHTML(student.plan || "-")}</td>

// //                 <td>₹${escapeHTML(student.amount || 0)}</td>

// //                 <td>
// //                     ${escapeHTML(student.paymentStatus || "Pending")}
// //                 </td>

// //                 <td>

// //                     <form
// //                         method="POST"
// //                         action="/admin/delete-student/${student._id}"
// //                         onsubmit="return confirm('Delete ${escapeHTML(student.name)}?')"
// //                     >

// //                         <button
// //                             type="submit"
// //                             class="delete-btn"
// //                         >
// //                             Delete
// //                         </button>

// //                     </form>

// //                 </td>

// //             </tr>
// //         `;

// //     }).join("");


// //     return `
// // <!DOCTYPE html>
// // <html lang="en">

// // <head>

// //     <meta charset="UTF-8">

// //     <meta
// //         name="viewport"
// //         content="width=device-width, initial-scale=1.0"
// //     >

// //     <title>Manage Students</title>

// //     <style>

// //         * {
// //             box-sizing: border-box;
// //             font-family: Arial, sans-serif;
// //         }

// //         body {
// //             margin: 0;
// //             padding: 25px;
// //             background: #f1f5f9;
// //         }

// //         .container {
// //             width: 100%;
// //             max-width: 1300px;
// //             margin: auto;
// //         }

// //         .top-bar {
// //             display: flex;
// //             align-items: center;
// //             justify-content: space-between;
// //             gap: 15px;
// //             margin-bottom: 22px;
// //         }

// //         h1 {
// //             margin: 0;
// //             color: #1e3a8a;
// //             font-size: 28px;
// //         }

// //         .add-btn {
// //             display: inline-block;
// //             padding: 11px 16px;
// //             border-radius: 8px;
// //             color: #ffffff;
// //             background: #2563eb;
// //             font-weight: bold;
// //             text-decoration: none;
// //         }

// //         .add-btn:hover {
// //             background: #1d4ed8;
// //         }

// //         .table-box {
// //             overflow-x: auto;
// //             border-radius: 12px;
// //             background: #ffffff;
// //             box-shadow: 0 5px 18px rgba(0, 0, 0, .1);
// //         }

// //         table {
// //             width: 100%;
// //             min-width: 950px;
// //             border-collapse: collapse;
// //         }

// //         th {
// //             color: #ffffff;
// //             background: #1e3a8a;
// //         }

// //         th,
// //         td {
// //             padding: 13px;
// //             border-bottom: 1px solid #e2e8f0;
// //             text-align: left;
// //             font-size: 14px;
// //         }

// //         tr:hover td {
// //             background: #f8fafc;
// //         }

// //         .delete-btn {
// //             padding: 8px 12px;
// //             border: none;
// //             border-radius: 7px;
// //             color: #ffffff;
// //             background: #dc2626;
// //             font-weight: 600;
// //             cursor: pointer;
// //         }

// //         .delete-btn:hover {
// //             background: #b91c1c;
// //         }

// //         .empty {
// //             padding: 35px;
// //             color: #64748b;
// //             text-align: center;
// //             font-size: 16px;
// //         }

// //         @media (max-width: 600px) {

// //             body {
// //                 padding: 15px;
// //             }

// //             .top-bar {
// //                 align-items: flex-start;
// //                 flex-direction: column;
// //             }

// //         }

// //     </style>

// // </head>

// // <body>

// //     <div class="container">

// //         <div class="top-bar">

// //             <h1>Manage Students</h1>

// //             <a
// //                 href="/admin/student-registration"
// //                 class="add-btn"
// //             >
// //                 + Add New Student
// //             </a>

// //         </div>

// //         <div class="table-box">

// //             ${
// //                 safeStudents.length === 0
// //                     ? `
// //                         <div class="empty">
// //                             No students found.
// //                         </div>
// //                     `
// //                     : `
// //                         <table>

// //                             <thead>

// //                                 <tr>
// //                                     <th>#</th>
// //                                     <th>Student Name</th>
// //                                     <th>Roll Number</th>
// //                                     <th>Mobile</th>
// //                                     <th>Class / Course</th>
// //                                     <th>Plan</th>
// //                                     <th>Amount</th>
// //                                     <th>Payment Status</th>
// //                                     <th>Action</th>
// //                                 </tr>

// //                             </thead>

// //                             <tbody>
// //                                 ${rows}
// //                             </tbody>

// //                         </table>
// //                     `
// //             }

// //         </div>

// //     </div>

// // </body>

// // </html>
// // `;

// // }


// // module.exports = ManageStudents;


// <td>

//     <span class="
//         payment-status
//         ${
//             student.paymentStatus === "Success"
//                 ? "success"
//                 : "pending"
//         }
//     ">
//         ${escapeHTML(student.paymentStatus || "Pending")}
//     </span>

//     <form
//         method="POST"
//         action="/admin/update-student-payment/${student._id}"
//         class="payment-form"
//     >

//         <select name="paymentStatus">

//             <option
//                 value="Pending"
//                 ${
//                     student.paymentStatus === "Pending"
//                         ? "selected"
//                         : ""
//                 }
//             >
//                 Pending
//             </option>

//             <option
//                 value="Success"
//                 ${
//                     student.paymentStatus === "Success"
//                         ? "selected"
//                         : ""
//                 }
//             >
//                 Success
//             </option>

//         </select>

//         <button
//             type="submit"
//             class="payment-btn"
//         >
//             Update
//         </button>

//     </form>

// </td>

// <td>

//     <a
//         href="/admin/edit-student/${student._id}"
//         class="edit-btn"
//     >
//         Edit
//     </a>

//     <form
//         method="POST"
//         action="/admin/delete-student/${student._id}"
//         onsubmit="return confirm('Delete ${escapeHTML(student.name)}?')"
//     >

//         <button
//             type="submit"
//             class="delete-btn"
//         >
//             Delete
//         </button>

//     </form>

// </td>

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


function ManageStudents(students = []) {

    const safeStudents = Array.isArray(students)
        ? students
        : [];


    const rows = safeStudents.map((student, index) => {

        const paymentStatus =
            student.paymentStatus === "Success"
                ? "Success"
                : "Pending";

        return `
            <tr>

                <td>${index + 1}</td>

                <td>${escapeHTML(student.name)}</td>

                <td>${escapeHTML(student.rollNo || "Not Generated")}</td>

                <td>${escapeHTML(student.mobile)}</td>

                <td>${escapeHTML(student.course)}</td>

                <td>${escapeHTML(student.plan || "-")}</td>

                <td>₹${escapeHTML(student.amount || 0)}</td>

                <td>

                    <span class="payment-status ${paymentStatus.toLowerCase()}">
                        ${paymentStatus}
                    </span>

                    <form
                        method="POST"
                        action="/admin/update-student-payment/${student._id}"
                        class="payment-form"
                    >

                        <select name="paymentStatus">

                            <option
                                value="Pending"
                                ${paymentStatus === "Pending" ? "selected" : ""}
                            >
                                Pending
                            </option>

                            <option
                                value="Success"
                                ${paymentStatus === "Success" ? "selected" : ""}
                            >
                                Success
                            </option>

                        </select>

                        <button
                            type="submit"
                            class="payment-btn"
                        >
                            Update
                        </button>

                    </form>

                </td>

                <td>

                    <a
                        href="/admin/edit-student/${student._id}"
                        class="edit-btn"
                    >
                        Edit
                    </a>

                    <form
                        method="POST"
                        action="/admin/delete-student/${student._id}"
                        onsubmit="return confirm('Delete this student?')"
                    >

                        <button
                            type="submit"
                            class="delete-btn"
                        >
                            Delete
                        </button>

                    </form>

                </td>

            </tr>
        `;

    }).join("");


    return `
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Manage Students</title>

    <style>

        * {
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            margin: 0;
            padding: 25px;
            background: #f1f5f9;
        }

        .container {
            max-width: 1300px;
            margin: auto;
        }

        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            margin-bottom: 22px;
        }

        h1 {
            margin: 0;
            color: #1e3a8a;
        }

        .add-btn {
            padding: 11px 16px;
            border-radius: 8px;
            color: #fff;
            background: #2563eb;
            font-weight: bold;
            text-decoration: none;
        }

        .table-box {
            overflow-x: auto;
            border-radius: 12px;
            background: #fff;
            box-shadow: 0 5px 18px rgba(0, 0, 0, .1);
        }

        table {
            width: 100%;
            min-width: 1050px;
            border-collapse: collapse;
        }

        th {
            color: #fff;
            background: #1e3a8a;
        }

        th,
        td {
            padding: 13px;
            border-bottom: 1px solid #e2e8f0;
            text-align: left;
            font-size: 14px;
        }

        .payment-status {
            display: inline-block;
            padding: 6px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
        }

        .pending {
            color: #92400e;
            background: #fef3c7;
        }

        .success {
            color: #166534;
            background: #dcfce7;
        }

        .payment-form {
            display: flex;
            gap: 6px;
            margin-top: 8px;
        }

        .payment-form select {
            padding: 6px;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
        }

        .payment-btn,
        .edit-btn,
        .delete-btn {
            padding: 8px 10px;
            border: 0;
            border-radius: 7px;
            color: #fff;
            font-size: 13px;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
        }

        .payment-btn {
            background: #2563eb;
        }

        .edit-btn {
            display: inline-block;
            margin-bottom: 8px;
            background: #f59e0b;
        }

        .delete-btn {
            background: #dc2626;
        }

        .empty {
            padding: 35px;
            color: #64748b;
            text-align: center;
        }

        @media (max-width: 600px) {

            body {
                padding: 15px;
            }

            .top-bar {
                flex-direction: column;
                align-items: flex-start;
            }

        }

    </style>

</head>

<body>

    <div class="container">

        <div class="top-bar">

            <h1>Manage Students</h1>

            <a
                href="/admin/student-registration"
                class="add-btn"
            >
                + Add New Student
            </a>

        </div>

        <div class="table-box">

            ${
                safeStudents.length === 0
                    ? `<div class="empty">No students found.</div>`
                    : `
                        <table>

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Student Name</th>
                                    <th>Roll Number</th>
                                    <th>Mobile</th>
                                    <th>Class / Course</th>
                                    <th>Plan</th>
                                    <th>Amount</th>
                                    <th>Payment Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                ${rows}
                            </tbody>

                        </table>
                    `
            }

        </div>

    </div>

</body>

</html>
`;

}

module.exports = ManageStudents;
