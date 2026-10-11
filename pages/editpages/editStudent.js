// // // function escapeHTML(value) {

// // //     if (value === null || value === undefined) {
// // //         return "";
// // //     }

// // //     return String(value)
// // //         .replace(/&/g, "&amp;")
// // //         .replace(/</g, "&lt;")
// // //         .replace(/>/g, "&gt;")
// // //         .replace(/"/g, "&quot;")
// // //         .replace(/'/g, "&#039;");
// // // }


// // // function EditStudent(student = {}) {

// // //     return `
// // // <!DOCTYPE html>
// // // <html lang="en">

// // // <head>

// // //     <meta charset="UTF-8">

// // //     <meta
// // //         name="viewport"
// // //         content="width=device-width, initial-scale=1.0"
// // //     >

// // //     <title>Edit Student</title>

// // //     <style>

// // //         * {
// // //             box-sizing: border-box;
// // //             font-family: Arial, sans-serif;
// // //         }

// // //         body {
// // //             margin: 0;
// // //             min-height: 100vh;
// // //             padding: 25px 15px;
// // //             background: linear-gradient(135deg, #2563eb, #06b6d4);
// // //         }

// // //         .card {
// // //             width: 100%;
// // //             max-width: 560px;
// // //             margin: auto;
// // //             padding: 28px;
// // //             border-radius: 18px;
// // //             background: #ffffff;
// // //             box-shadow: 0 18px 40px rgba(0, 0, 0, .2);
// // //         }

// // //         h1 {
// // //             margin: 0 0 22px;
// // //             color: #1e3a8a;
// // //             text-align: center;
// // //         }

// // //         label {
// // //             display: block;
// // //             margin: 15px 0 7px;
// // //             color: #1e3a8a;
// // //             font-weight: bold;
// // //         }

// // //         input,
// // //         select {
// // //             width: 100%;
// // //             padding: 12px;
// // //             border: 1px solid #cbd5e1;
// // //             border-radius: 8px;
// // //             outline: none;
// // //             font-size: 15px;
// // //         }

// // //         input:focus,
// // //         select:focus {
// // //             border-color: #2563eb;
// // //             box-shadow: 0 0 8px rgba(37, 99, 235, .25);
// // //         }

// // //         .roll-box {
// // //             margin-top: 17px;
// // //             padding: 13px;
// // //             border-radius: 8px;
// // //             color: #1d4ed8;
// // //             background: #dbeafe;
// // //             text-align: center;
// // //             font-weight: bold;
// // //         }

// // //         button {
// // //             width: 100%;
// // //             margin-top: 24px;
// // //             padding: 13px;
// // //             border: none;
// // //             border-radius: 8px;
// // //             color: #ffffff;
// // //             background: #2563eb;
// // //             font-size: 16px;
// // //             font-weight: bold;
// // //             cursor: pointer;
// // //         }

// // //         button:hover {
// // //             background: #1d4ed8;
// // //         }

// // //         .back {
// // //             display: block;
// // //             margin-top: 18px;
// // //             color: #2563eb;
// // //             text-align: center;
// // //             text-decoration: none;
// // //         }

// // //     </style>

// // // </head>

// // // <body>

// // //     <div class="card">

// // //         <h1>Edit Student</h1>

// // //         <form
// // //             method="POST"
// // //             action="/admin/edit-student/${student._id}"
// // //         >

// // //             <label>Student Name</label>

// // //             <input
// // //                 type="text"
// // //                 name="name"
// // //                 value="${escapeHTML(student.name)}"
// // //                 required
// // //             >

// // //             <label>Mobile Number</label>

// // //             <input
// // //                 type="tel"
// // //                 name="mobile"
// // //                 value="${escapeHTML(student.mobile)}"
// // //                 required
// // //             >

// // //             <label>Age</label>

// // //             <input
// // //                 type="number"
// // //                 name="age"
// // //                 value="${escapeHTML(student.age)}"
// // //                 min="3"
// // //                 max="100"
// // //             >

// // //             <label>Class / Course</label>

// // //             <input
// // //                 type="text"
// // //                 name="course"
// // //                 value="${escapeHTML(student.course)}"
// // //                 required
// // //             >

// // //             <div class="roll-box">
// // //                 Roll Number: ${escapeHTML(student.rollNo)}
// // //             </div>

// // //             <label>New Password</label>

// // //             <input
// // //                 type="password"
// // //                 name="password"
// // //                 placeholder="Leave empty to keep old password"
// // //             >

// // //             <label>Payment Plan</label>

// // //             <select
// // //                 name="plan"
// // //                 id="plan"
// // //             >

// // //                 <option
// // //                     value="1 Month"
// // //                     ${student.plan === "1 Month" ? "selected" : ""}
// // //                 >
// // //                     1 Month — ₹500
// // //                 </option>

// // //                 <option
// // //                     value="6 Months"
// // //                     ${student.plan === "6 Months" ? "selected" : ""}
// // //                 >
// // //                     6 Months — ₹2500
// // //                 </option>

// // //             </select>

// // //             <label>Amount</label>

// // //             <input
// // //                 type="number"
// // //                 name="amount"
// // //                 id="amount"
// // //                 value="${escapeHTML(student.amount)}"
// // //                 required
// // //             >

// // //             <label>Payment Status</label>

// // //             <select name="paymentStatus">

// // //                 <option
// // //                     value="Pending"
// // //                     ${student.paymentStatus === "Pending" ? "selected" : ""}
// // //                 >
// // //                     Pending
// // //                 </option>

// // //                 <option
// // //                     value="Success"
// // //                     ${student.paymentStatus === "Success" ? "selected" : ""}
// // //                 >
// // //                     Success
// // //                 </option>

// // //             </select>

// // //             <button type="submit">
// // //                 Update Student
// // //             </button>

// // //         </form>

// // //         <a
// // //             href="/admin/manage-students"
// // //             class="back"
// // //         >
// // //             ← Back to Manage Students
// // //         </a>

// // //     </div>

// // //     <script>

// // //         const plan =
// // //             document.getElementById("plan");

// // //         const amount =
// // //             document.getElementById("amount");

// // //         plan.addEventListener("change", () => {

// // //             if (plan.value === "1 Month") {
// // //                 amount.value = 500;
// // //             }

// // //             if (plan.value === "6 Months") {
// // //                 amount.value = 2500;
// // //             }

// // //         });

// // //     </script>

// // // </body>

// // // </html>
// // // `;

// // // }

// // // module.exports = EditStudent;

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


// // function EditStudent(student = {}) {

// //     const currentImage =
// //         student.image ||
// //         student.photo ||
// //         "/images/student-default.png";

// //     return `
// // <!DOCTYPE html>
// // <html lang="en">

// // <head>

// //     <meta charset="UTF-8">

// //     <meta
// //         name="viewport"
// //         content="width=device-width, initial-scale=1.0"
// //     >

// //     <title>Edit Student</title>

// //     <style>

// //         * {
// //             box-sizing: border-box;
// //             font-family: Arial, sans-serif;
// //         }

// //         body {
// //             margin: 0;
// //             min-height: 100vh;
// //             padding: 25px 15px;
// //             background:
// //                 linear-gradient(
// //                     135deg,
// //                     #1d4ed8,
// //                     #06b6d4
// //                 );
// //         }

// //         .card {
// //             width: 100%;
// //             max-width: 580px;
// //             margin: auto;
// //             padding: 28px;
// //             border: 1px solid rgba(255, 255, 255, 0.4);
// //             border-radius: 20px;
// //             background: #ffffff;
// //             box-shadow:
// //                 0 20px 50px
// //                 rgba(0, 0, 0, 0.22);
// //         }

// //         .heading {
// //             margin-bottom: 24px;
// //             text-align: center;
// //         }

// //         .heading-icon {
// //             width: 52px;
// //             height: 52px;
// //             display: grid;
// //             place-items: center;
// //             margin: 0 auto 10px;
// //             border-radius: 50%;
// //             background: #dbeafe;
// //             font-size: 26px;
// //         }

// //         h1 {
// //             margin: 0;
// //             color: #1e3a8a;
// //             font-size: 28px;
// //         }

// //         .heading p {
// //             margin: 7px 0 0;
// //             color: #64748b;
// //             font-size: 13px;
// //         }

// //         label {
// //             display: block;
// //             margin: 16px 0 7px;
// //             color: #1e3a8a;
// //             font-size: 14px;
// //             font-weight: 700;
// //         }

// //         input,
// //         select {
// //             width: 100%;
// //             min-height: 46px;
// //             padding: 12px;
// //             border: 1px solid #cbd5e1;
// //             border-radius: 10px;
// //             outline: none;
// //             background: #ffffff;
// //             color: #1e293b;
// //             font-size: 15px;
// //         }

// //         input:focus,
// //         select:focus {
// //             border-color: #2563eb;
// //             box-shadow:
// //                 0 0 0 3px
// //                 rgba(37, 99, 235, 0.14);
// //         }

// //         .photo-section {
// //             margin-bottom: 22px;
// //             padding: 18px;
// //             border: 1px dashed #93c5fd;
// //             border-radius: 14px;
// //             background: #f8fbff;
// //             text-align: center;
// //         }

// //         .photo-preview-box {
// //             width: 125px;
// //             height: 125px;
// //             position: relative;
// //             overflow: hidden;
// //             margin: 0 auto 14px;
// //             border: 4px solid #ffffff;
// //             border-radius: 50%;
// //             background: #e2e8f0;
// //             box-shadow:
// //                 0 8px 22px
// //                 rgba(30, 64, 175, 0.22);
// //         }

// //         .photo-preview {
// //             width: 100%;
// //             height: 100%;
// //             display: block;
// //             object-fit: cover;
// //             object-position: center;
// //         }

// //         .photo-label {
// //             display: inline-flex;
// //             align-items: center;
// //             justify-content: center;
// //             gap: 7px;
// //             margin: 0;
// //             padding: 10px 16px;
// //             border-radius: 9px;
// //             background: #2563eb;
// //             color: #ffffff;
// //             font-size: 13px;
// //             font-weight: 700;
// //             cursor: pointer;
// //         }

// //         .photo-label:hover {
// //             background: #1d4ed8;
// //         }

// //         .photo-input {
// //             display: none;
// //         }

// //         .photo-help {
// //             margin: 10px 0 0;
// //             color: #64748b;
// //             font-size: 11px;
// //         }

// //         .selected-file-name {
// //             overflow: hidden;
// //             margin-top: 8px;
// //             color: #0f766e;
// //             font-size: 12px;
// //             font-weight: 700;
// //             text-overflow: ellipsis;
// //             white-space: nowrap;
// //         }

// //         .form-row {
// //             display: grid;
// //             grid-template-columns: 1fr 1fr;
// //             gap: 14px;
// //         }

// //         .roll-box {
// //             margin-top: 18px;
// //             padding: 14px;
// //             border: 1px solid #bfdbfe;
// //             border-radius: 10px;
// //             color: #1d4ed8;
// //             background: #eff6ff;
// //             text-align: center;
// //             font-weight: 800;
// //         }

// //         .password-help {
// //             display: block;
// //             margin-top: 6px;
// //             color: #64748b;
// //             font-size: 11px;
// //         }

// //         .update-button {
// //             width: 100%;
// //             min-height: 48px;
// //             margin-top: 25px;
// //             padding: 13px;
// //             border: none;
// //             border-radius: 10px;
// //             color: #ffffff;
// //             background:
// //                 linear-gradient(
// //                     135deg,
// //                     #2563eb,
// //                     #0891b2
// //                 );
// //             font-size: 16px;
// //             font-weight: 800;
// //             cursor: pointer;
// //             box-shadow:
// //                 0 8px 20px
// //                 rgba(37, 99, 235, 0.25);
// //         }

// //         .update-button:hover {
// //             background:
// //                 linear-gradient(
// //                     135deg,
// //                     #1d4ed8,
// //                     #0e7490
// //                 );
// //         }

// //         .update-button:disabled {
// //             cursor: not-allowed;
// //             opacity: 0.7;
// //         }

// //         .back {
// //             display: block;
// //             margin-top: 19px;
// //             color: #2563eb;
// //             text-align: center;
// //             font-size: 14px;
// //             font-weight: 700;
// //             text-decoration: none;
// //         }

// //         .back:hover {
// //             text-decoration: underline;
// //         }

// //         @media (max-width: 600px) {

// //             body {
// //                 padding: 12px 10px;
// //             }

// //             .card {
// //                 padding: 20px 15px;
// //                 border-radius: 16px;
// //             }

// //             h1 {
// //                 font-size: 24px;
// //             }

// //             .form-row {
// //                 grid-template-columns: 1fr;
// //                 gap: 0;
// //             }

// //             .photo-preview-box {
// //                 width: 110px;
// //                 height: 110px;
// //             }

// //         }

// //     </style>

// // </head>

// // <body>

// //     <div class="card">

// //         <div class="heading">

// //             <div class="heading-icon">
// //                 👨‍🎓
// //             </div>

// //             <h1>Edit Student</h1>

// //             <p>
// //                 Student information और photo update करें
// //             </p>

// //         </div>


// //         <form
// //             method="POST"
// //             action="/admin/edit-student/${escapeHTML(student._id)}"
// //             enctype="multipart/form-data"
// //             id="editStudentForm"
// //         >

// //             <div class="photo-section">

// //                 <div class="photo-preview-box">

// //                     <img
// //                         src="${escapeHTML(currentImage)}"
// //                         alt="Student Photo"
// //                         id="photoPreview"
// //                         class="photo-preview"
// //                         onerror="
// //                             this.onerror = null;
// //                             this.src = '/images/student-default.png';
// //                         "
// //                     >

// //                 </div>

// //                 <label
// //                     for="studentImage"
// //                     class="photo-label"
// //                 >
// //                     📷 Choose Student Photo
// //                 </label>

// //                 <input
// //                     type="file"
// //                     name="image"
// //                     id="studentImage"
// //                     class="photo-input"
// //                     accept="image/jpeg,image/png,image/webp"
// //                 >

// //                 <div
// //                     class="selected-file-name"
// //                     id="selectedFileName"
// //                 >
// //                     कोई नई photo select नहीं की गई
// //                 </div>

// //                 <p class="photo-help">
// //                     JPG, PNG या WEBP • Maximum size 5 MB
// //                 </p>

// //             </div>


// //             <label for="studentName">
// //                 Student Name
// //             </label>

// //             <input
// //                 type="text"
// //                 name="name"
// //                 id="studentName"
// //                 value="${escapeHTML(student.name)}"
// //                 placeholder="Enter student name"
// //                 required
// //             >


// //             <div class="form-row">

// //                 <div>

// //                     <label for="mobile">
// //                         Mobile Number
// //                     </label>

// //                     <input
// //                         type="tel"
// //                         name="mobile"
// //                         id="mobile"
// //                         value="${escapeHTML(student.mobile)}"
// //                         placeholder="10-digit mobile number"
// //                         inputmode="numeric"
// //                         maxlength="10"
// //                         required
// //                     >

// //                 </div>

// //                 <div>

// //                     <label for="age">
// //                         Age
// //                     </label>

// //                     <input
// //                         type="number"
// //                         name="age"
// //                         id="age"
// //                         value="${escapeHTML(student.age)}"
// //                         min="3"
// //                         max="100"
// //                         placeholder="Student age"
// //                     >

// //                 </div>

// //             </div>


// //             <label for="course">
// //                 Class / Course
// //             </label>

// //             <input
// //                 type="text"
// //                 name="course"
// //                 id="course"
// //                 value="${escapeHTML(
// //                     student.course ||
// //                     student.className
// //                 )}"
// //                 placeholder="Enter class or course"
// //                 required
// //             >


// //             <div class="roll-box">
// //                 🎓 Roll Number:
// //                 ${escapeHTML(
// //                     student.rollNo ||
// //                     student.roll ||
// //                     "Not Available"
// //                 )}
// //             </div>


// //             <label for="password">
// //                 New Password
// //             </label>

// //             <input
// //                 type="password"
// //                 name="password"
// //                 id="password"
// //                 placeholder="Enter new password"
// //             >

// //             <span class="password-help">
// //                 Password change नहीं करना है तो इसे खाली छोड़ दें।
// //             </span>


// //             <div class="form-row">

// //                 <div>

// //                     <label for="plan">
// //                         Payment Plan
// //                     </label>

// //                     <select
// //                         name="plan"
// //                         id="plan"
// //                     >

// //                         <option
// //                             value="1 Month"
// //                             ${student.plan === "1 Month"
// //                                 ? "selected"
// //                                 : ""}
// //                         >
// //                             1 Month — ₹500
// //                         </option>

// //                         <option
// //                             value="6 Months"
// //                             ${student.plan === "6 Months"
// //                                 ? "selected"
// //                                 : ""}
// //                         >
// //                             6 Months — ₹2500
// //                         </option>

// //                     </select>

// //                 </div>

// //                 <div>

// //                     <label for="amount">
// //                         Amount
// //                     </label>

// //                     <input
// //                         type="number"
// //                         name="amount"
// //                         id="amount"
// //                         value="${escapeHTML(student.amount ?? 0)}"
// //                         min="0"
// //                         required
// //                     >

// //                 </div>

// //             </div>


// //             <label for="paymentStatus">
// //                 Payment Status
// //             </label>

// //             <select
// //                 name="paymentStatus"
// //                 id="paymentStatus"
// //             >

// //                 <option
// //                     value="Pending"
// //                     ${student.paymentStatus === "Pending"
// //                         ? "selected"
// //                         : ""}
// //                 >
// //                     ⏳ Pending
// //                 </option>

// //                 <option
// //                     value="Success"
// //                     ${student.paymentStatus === "Success"
// //                         ? "selected"
// //                         : ""}
// //                 >
// //                     ✅ Success
// //                 </option>

// //             </select>


// //             <button
// //                 type="submit"
// //                 class="update-button"
// //                 id="updateButton"
// //             >
// //                 ✅ Update Student
// //             </button>

// //         </form>


// //         <a
// //             href="/admin/manage-students"
// //             class="back"
// //         >
// //             ← Back to Manage Students
// //         </a>

// //     </div>


// //     <script>

// //         const plan =
// //             document.getElementById("plan");

// //         const amount =
// //             document.getElementById("amount");

// //         const studentImage =
// //             document.getElementById("studentImage");

// //         const photoPreview =
// //             document.getElementById("photoPreview");

// //         const selectedFileName =
// //             document.getElementById("selectedFileName");

// //         const editStudentForm =
// //             document.getElementById("editStudentForm");

// //         const updateButton =
// //             document.getElementById("updateButton");


// //         plan.addEventListener("change", function () {

// //             if (plan.value === "1 Month") {
// //                 amount.value = 500;
// //             }

// //             if (plan.value === "6 Months") {
// //                 amount.value = 2500;
// //             }

// //         });


// //         studentImage.addEventListener("change", function () {

// //             const file = this.files[0];

// //             if (!file) {
// //                 return;
// //             }

// //             const allowedTypes = [
// //                 "image/jpeg",
// //                 "image/png",
// //                 "image/webp"
// //             ];

// //             if (!allowedTypes.includes(file.type)) {

// //                 alert(
// //                     "केवल JPG, PNG या WEBP photo upload करें।"
// //                 );

// //                 this.value = "";
// //                 return;
// //             }

// //             const maximumSize =
// //                 5 * 1024 * 1024;

// //             if (file.size > maximumSize) {

// //                 alert(
// //                     "Photo की size 5 MB से कम होनी चाहिए।"
// //                 );

// //                 this.value = "";
// //                 return;
// //             }

// //             selectedFileName.textContent =
// //                 "✅ " + file.name;

// //             const imageURL =
// //                 URL.createObjectURL(file);

// //             photoPreview.src = imageURL;

// //             photoPreview.onload = function () {
// //                 URL.revokeObjectURL(imageURL);
// //             };

// //         });


// //         editStudentForm.addEventListener(
// //             "submit",
// //             function () {

// //                 updateButton.disabled = true;

// //                 updateButton.textContent =
// //                     "⏳ Updating Student...";

// //             }
// //         );

// //     </script>

// // </body>

// // </html>
// // `;

// // }


// // module.exports = EditStudent;



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


// function formatDateForInput(dateValue) {

//     if (!dateValue) {
//         return "";
//     }

//     try {

//         const date =
//             new Date(dateValue);

//         if (
//             Number.isNaN(
//                 date.getTime()
//             )
//         ) {
//             return "";
//         }

//         const year =
//             date.getFullYear();

//         const month =
//             String(
//                 date.getMonth() + 1
//             ).padStart(
//                 2,
//                 "0"
//             );

//         const day =
//             String(
//                 date.getDate()
//             ).padStart(
//                 2,
//                 "0"
//             );

//         return (
//             year +
//             "-" +
//             month +
//             "-" +
//             day
//         );

//     } catch (error) {

//         return "";

//     }

// }


// function formatDisplayDate(dateValue) {

//     if (!dateValue) {
//         return "-";
//     }

//     try {

//         const date =
//             new Date(dateValue);

//         if (
//             Number.isNaN(
//                 date.getTime()
//             )
//         ) {
//             return "-";
//         }

//         return date
//             .toLocaleDateString(
//                 "en-IN"
//             );

//     } catch (error) {

//         return "-";

//     }

// }


// function EditStudent(student = {}) {


//     const currentImage =
//         student.image ||
//         student.photo ||
//         "/images/student-default.png";


//     const paymentHistory =
//         Array.isArray(
//             student.paymentHistory
//         )
//             ? student.paymentHistory
//             : [];


//     const paymentHistoryHTML =

//         paymentHistory.length > 0

//             ? paymentHistory
//                 .slice()
//                 .reverse()
//                 .map(
//                     (payment) => {

//                         return `
//                             <div
//                                 class="payment-history-row"
//                             >

//                                 <div>

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
//                                         Paid:
//                                         ${
//                                             formatDisplayDate(
//                                                 payment.paidDate
//                                             )
//                                         }
//                                     </div>

//                                 </div>


//                                 <div
//                                     class="payment-history-amount"
//                                 >

//                                     ₹${
//                                         escapeHTML(
//                                             payment.amount ||
//                                             0
//                                         )
//                                     }

//                                     <span>
//                                         PAID
//                                     </span>

//                                 </div>

//                             </div>
//                         `;

//                     }
//                 )
//                 .join("")

//             : `
//                 <div class="no-payment">
//                     अभी कोई payment history नहीं है।
//                 </div>
//             `;


//     const today =
//         formatDateForInput(
//             new Date()
//         );


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
//         Edit Student
//     </title>


//     <style>

//         * {

//             box-sizing:
//                 border-box;

//             font-family:
//                 Arial,
//                 sans-serif;

//         }


//         body {

//             margin:
//                 0;

//             min-height:
//                 100vh;

//             padding:
//                 25px 15px;

//             background:
//                 linear-gradient(
//                     135deg,
//                     #1d4ed8,
//                     #06b6d4
//                 );

//         }


//         .card {

//             width:
//                 100%;

//             max-width:
//                 620px;

//             margin:
//                 auto;

//             padding:
//                 28px;

//             border:
//                 1px solid
//                 rgba(
//                     255,
//                     255,
//                     255,
//                     0.4
//                 );

//             border-radius:
//                 20px;

//             background:
//                 #ffffff;

//             box-shadow:
//                 0 20px 50px
//                 rgba(
//                     0,
//                     0,
//                     0,
//                     0.22
//                 );

//         }


//         .heading {

//             margin-bottom:
//                 24px;

//             text-align:
//                 center;

//         }


//         .heading-icon {

//             width:
//                 52px;

//             height:
//                 52px;

//             display:
//                 grid;

//             place-items:
//                 center;

//             margin:
//                 0 auto 10px;

//             border-radius:
//                 50%;

//             background:
//                 #dbeafe;

//             font-size:
//                 26px;

//         }


//         h1 {

//             margin:
//                 0;

//             color:
//                 #1e3a8a;

//             font-size:
//                 28px;

//         }


//         .heading p {

//             margin:
//                 7px 0 0;

//             color:
//                 #64748b;

//             font-size:
//                 13px;

//         }


//         label {

//             display:
//                 block;

//             margin:
//                 16px 0 7px;

//             color:
//                 #1e3a8a;

//             font-size:
//                 14px;

//             font-weight:
//                 700;

//         }


//         input,
//         select,
//         textarea {

//             width:
//                 100%;

//             min-height:
//                 46px;

//             padding:
//                 12px;

//             border:
//                 1px solid
//                 #cbd5e1;

//             border-radius:
//                 10px;

//             outline:
//                 none;

//             background:
//                 #ffffff;

//             color:
//                 #1e293b;

//             font-size:
//                 15px;

//         }


//         input:focus,
//         select:focus,
//         textarea:focus {

//             border-color:
//                 #2563eb;

//             box-shadow:
//                 0 0 0 3px
//                 rgba(
//                     37,
//                     99,
//                     235,
//                     0.14
//                 );

//         }


//         .photo-section {

//             margin-bottom:
//                 22px;

//             padding:
//                 18px;

//             border:
//                 1px dashed
//                 #93c5fd;

//             border-radius:
//                 14px;

//             background:
//                 #f8fbff;

//             text-align:
//                 center;

//         }


//         .photo-preview-box {

//             width:
//                 125px;

//             height:
//                 125px;

//             position:
//                 relative;

//             overflow:
//                 hidden;

//             margin:
//                 0 auto 14px;

//             border:
//                 4px solid
//                 #ffffff;

//             border-radius:
//                 50%;

//             background:
//                 #e2e8f0;

//             box-shadow:
//                 0 8px 22px
//                 rgba(
//                     30,
//                     64,
//                     175,
//                     0.22
//                 );

//         }


//         .photo-preview {

//             width:
//                 100%;

//             height:
//                 100%;

//             display:
//                 block;

//             object-fit:
//                 cover;

//             object-position:
//                 center;

//         }


//         .photo-label {

//             display:
//                 inline-flex;

//             align-items:
//                 center;

//             justify-content:
//                 center;

//             gap:
//                 7px;

//             margin:
//                 0;

//             padding:
//                 10px 16px;

//             border-radius:
//                 9px;

//             background:
//                 #2563eb;

//             color:
//                 #ffffff;

//             font-size:
//                 13px;

//             font-weight:
//                 700;

//             cursor:
//                 pointer;

//         }


//         .photo-label:hover {

//             background:
//                 #1d4ed8;

//         }


//         .photo-input {

//             display:
//                 none;

//         }


//         .photo-help {

//             margin:
//                 10px 0 0;

//             color:
//                 #64748b;

//             font-size:
//                 11px;

//         }


//         .selected-file-name {

//             overflow:
//                 hidden;

//             margin-top:
//                 8px;

//             color:
//                 #0f766e;

//             font-size:
//                 12px;

//             font-weight:
//                 700;

//             text-overflow:
//                 ellipsis;

//             white-space:
//                 nowrap;

//         }


//         .form-row {

//             display:
//                 grid;

//             grid-template-columns:
//                 1fr 1fr;

//             gap:
//                 14px;

//         }


//         .roll-box {

//             margin-top:
//                 18px;

//             padding:
//                 14px;

//             border:
//                 1px solid
//                 #bfdbfe;

//             border-radius:
//                 10px;

//             color:
//                 #1d4ed8;

//             background:
//                 #eff6ff;

//             text-align:
//                 center;

//             font-weight:
//                 800;

//         }


//         .password-help {

//             display:
//                 block;

//             margin-top:
//                 6px;

//             color:
//                 #64748b;

//             font-size:
//                 11px;

//         }


//         .payment-section {

//             margin-top:
//                 25px;

//             padding:
//                 18px;

//             border:
//                 1px solid
//                 #bbf7d0;

//             border-radius:
//                 14px;

//             background:
//                 #f0fdf4;

//         }


//         .payment-section h2 {

//             margin:
//                 0 0 6px;

//             color:
//                 #166534;

//             font-size:
//                 19px;

//         }


//         .payment-section p {

//             margin:
//                 0 0 14px;

//             color:
//                 #64748b;

//             font-size:
//                 12px;

//         }


//         .payment-history-box {

//             margin-top:
//                 25px;

//             padding:
//                 18px;

//             border:
//                 1px solid
//                 #dbeafe;

//             border-radius:
//                 14px;

//             background:
//                 #f8fafc;

//         }


//         .payment-history-box h2 {

//             margin:
//                 0 0 15px;

//             color:
//                 #1e3a8a;

//             font-size:
//                 19px;

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
//                 12px 0;

//             border-bottom:
//                 1px solid
//                 #e2e8f0;

//         }


//         .payment-history-row:last-child {

//             border-bottom:
//                 none;

//         }


//         .payment-month {

//             color:
//                 #111827;

//             font-weight:
//                 800;

//         }


//         .payment-date {

//             margin-top:
//                 4px;

//             color:
//                 #64748b;

//             font-size:
//                 12px;

//         }


//         .payment-history-amount {

//             color:
//                 #166534;

//             text-align:
//                 right;

//             font-size:
//                 16px;

//             font-weight:
//                 800;

//         }


//         .payment-history-amount span {

//             display:
//                 block;

//             margin-top:
//                 3px;

//             color:
//                 #16a34a;

//             font-size:
//                 10px;

//         }


//         .no-payment {

//             padding:
//                 12px;

//             color:
//                 #64748b;

//             text-align:
//                 center;

//             font-size:
//                 13px;

//         }


//         .update-button {

//             width:
//                 100%;

//             min-height:
//                 48px;

//             margin-top:
//                 25px;

//             padding:
//                 13px;

//             border:
//                 none;

//             border-radius:
//                 10px;

//             color:
//                 #ffffff;

//             background:
//                 linear-gradient(
//                     135deg,
//                     #2563eb,
//                     #0891b2
//                 );

//             font-size:
//                 16px;

//             font-weight:
//                 800;

//             cursor:
//                 pointer;

//             box-shadow:
//                 0 8px 20px
//                 rgba(
//                     37,
//                     99,
//                     235,
//                     0.25
//                 );

//         }


//         .update-button:hover {

//             background:
//                 linear-gradient(
//                     135deg,
//                     #1d4ed8,
//                     #0e7490
//                 );

//         }


//         .update-button:disabled {

//             cursor:
//                 not-allowed;

//             opacity:
//                 0.7;

//         }


//         .back {

//             display:
//                 block;

//             margin-top:
//                 19px;

//             color:
//                 #2563eb;

//             text-align:
//                 center;

//             font-size:
//                 14px;

//             font-weight:
//                 700;

//             text-decoration:
//                 none;

//         }


//         .back:hover {

//             text-decoration:
//                 underline;

//         }


//         @media (
//             max-width:
//             600px
//         ) {

//             body {

//                 padding:
//                     12px 10px;

//             }


//             .card {

//                 padding:
//                     20px 15px;

//                 border-radius:
//                     16px;

//             }


//             h1 {

//                 font-size:
//                     24px;

//             }


//             .form-row {

//                 grid-template-columns:
//                     1fr;

//                 gap:
//                     0;

//             }


//             .photo-preview-box {

//                 width:
//                     110px;

//                 height:
//                     110px;

//             }

//         }

//     </style>

// </head>


// <body>


//     <div class="card">


//         <div class="heading">

//             <div class="heading-icon">
//                 👨‍🎓
//             </div>

//             <h1>
//                 Edit Student
//             </h1>

//             <p>
//                 Student information, photo और payment update करें
//             </p>

//         </div>


//         <form

//             method="POST"

//             action="/admin/edit-student/${
//                 escapeHTML(
//                     student._id
//                 )
//             }"

//             enctype="multipart/form-data"

//             id="editStudentForm"

//         >


//             <div class="photo-section">


//                 <div class="photo-preview-box">

//                     <img

//                         src="${
//                             escapeHTML(
//                                 currentImage
//                             )
//                         }"

//                         alt="Student Photo"

//                         id="photoPreview"

//                         class="photo-preview"

//                         onerror="
//                             this.onerror = null;
//                             this.src = '/images/student-default.png';
//                         "

//                     >

//                 </div>


//                 <label
//                     for="studentImage"
//                     class="photo-label"
//                 >
//                     📷 Choose Student Photo
//                 </label>


//                 <input
//                     type="file"
//                     name="image"
//                     id="studentImage"
//                     class="photo-input"
//                     accept="image/jpeg,image/png,image/webp"
//                 >


//                 <div
//                     class="selected-file-name"
//                     id="selectedFileName"
//                 >
//                     कोई नई photo select नहीं की गई
//                 </div>


//                 <p class="photo-help">
//                     JPG, PNG या WEBP • Maximum size 5 MB
//                 </p>


//             </div>


//             <label for="studentName">
//                 Student Name
//             </label>

//             <input
//                 type="text"
//                 name="name"
//                 id="studentName"
//                 value="${
//                     escapeHTML(
//                         student.name
//                     )
//                 }"
//                 placeholder="Enter student name"
//                 required
//             >


//             <div class="form-row">

//                 <div>

//                     <label for="mobile">
//                         Mobile Number
//                     </label>

//                     <input
//                         type="tel"
//                         name="mobile"
//                         id="mobile"
//                         value="${
//                             escapeHTML(
//                                 student.mobile
//                             )
//                         }"
//                         placeholder="10-digit mobile number"
//                         inputmode="numeric"
//                         maxlength="10"
//                         required
//                     >

//                 </div>


//                 <div>

//                     <label for="age">
//                         Age
//                     </label>

//                     <input
//                         type="number"
//                         name="age"
//                         id="age"
//                         value="${
//                             escapeHTML(
//                                 student.age
//                             )
//                         }"
//                         min="3"
//                         max="100"
//                         placeholder="Student age"
//                     >

//                 </div>

//             </div>


//             <label for="course">
//                 Class / Course
//             </label>

//             <input
//                 type="text"
//                 name="course"
//                 id="course"
//                 value="${
//                     escapeHTML(
//                         student.course ||
//                         student.className
//                     )
//                 }"
//                 placeholder="Enter class or course"
//                 required
//             >


//             <div class="roll-box">

//                 🎓 Roll Number:

//                 ${
//                     escapeHTML(
//                         student.rollNo ||
//                         student.roll ||
//                         "Not Available"
//                     )
//                 }

//             </div>


//             <label for="password">
//                 New Password
//             </label>

//             <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Enter new password"
//             >

//             <span class="password-help">
//                 Password change नहीं करना है तो इसे खाली छोड़ दें।
//             </span>


//             <div class="form-row">


//                 <div>

//                     <label for="plan">
//                         Payment Plan
//                     </label>

//                     <select
//                         name="plan"
//                         id="plan"
//                     >

//                         <option
//                             value="1 Month"
//                             ${
//                                 student.plan ===
//                                 "1 Month"
//                                     ? "selected"
//                                     : ""
//                             }
//                         >
//                             1 Month — ₹500
//                         </option>


//                         <option
//                             value="6 Months"
//                             ${
//                                 student.plan ===
//                                 "6 Months"
//                                     ? "selected"
//                                     : ""
//                             }
//                         >
//                             6 Months — ₹2500
//                         </option>

//                     </select>

//                 </div>


//                 <div>

//                     <label for="amount">
//                         Plan Amount
//                     </label>

//                     <input
//                         type="number"
//                         name="amount"
//                         id="amount"
//                         value="${
//                             escapeHTML(
//                                 student.amount ??
//                                 0
//                             )
//                         }"
//                         min="0"
//                         required
//                     >

//                 </div>


//             </div>


//             <label for="paymentStatus">
//                 Payment Status
//             </label>

//             <select
//                 name="paymentStatus"
//                 id="paymentStatus"
//             >

//                 <option
//                     value="Pending"
//                     ${
//                         student.paymentStatus ===
//                         "Pending"
//                             ? "selected"
//                             : ""
//                     }
//                 >
//                     ⏳ Pending
//                 </option>


//                 <option
//                     value="Success"
//                     ${
//                         student.paymentStatus ===
//                         "Success"
//                             ? "selected"
//                             : ""
//                     }
//                 >
//                     ✅ Success
//                 </option>

//             </select>



//             <!-- =============================
//                  ADD NEW PAYMENT
//             ============================== -->

//             <div class="payment-section">


//                 <h2>
//                     💰 Add New Payment
//                 </h2>


//                 <p>
//                     Student ने किस महीने का पैसा कब दिया, यहाँ दर्ज करें।
//                 </p>


//                 <label for="paymentMonth">
//                     Payment Month
//                 </label>


//                 <input
//                     type="month"
//                     name="paymentMonth"
//                     id="paymentMonth"
//                 >


//                 <div class="form-row">


//                     <div>

//                         <label for="paymentAmount">
//                             Paid Amount
//                         </label>

//                         <input
//                             type="number"
//                             name="paymentAmount"
//                             id="paymentAmount"
//                             min="1"
//                             placeholder="Example: 500"
//                         >

//                     </div>


//                     <div>

//                         <label for="paidDate">
//                             Payment Date
//                         </label>

//                         <input
//                             type="date"
//                             name="paidDate"
//                             id="paidDate"
//                             value="${today}"
//                         >

//                     </div>


//                 </div>


//                 <label for="paymentNote">
//                     Payment Note
//                 </label>

//                 <input
//                     type="text"
//                     name="paymentNote"
//                     id="paymentNote"
//                     placeholder="Example: Cash / UPI / Received by admin"
//                 >


//             </div>



//             <!-- =============================
//                  OLD PAYMENT HISTORY
//             ============================== -->

//             <div class="payment-history-box">

//                 <h2>
//                     💳 Payment History
//                 </h2>

//                 ${paymentHistoryHTML}

//             </div>



//             <button
//                 type="submit"
//                 class="update-button"
//                 id="updateButton"
//             >
//                 ✅ Update Student
//             </button>


//         </form>


//         <a
//             href="/admin/manage-students"
//             class="back"
//         >
//             ← Back to Manage Students
//         </a>


//     </div>


//     <script>


//         const plan =
//             document.getElementById(
//                 "plan"
//             );


//         const amount =
//             document.getElementById(
//                 "amount"
//             );


//         const paymentAmount =
//             document.getElementById(
//                 "paymentAmount"
//             );


//         const studentImage =
//             document.getElementById(
//                 "studentImage"
//             );


//         const photoPreview =
//             document.getElementById(
//                 "photoPreview"
//             );


//         const selectedFileName =
//             document.getElementById(
//                 "selectedFileName"
//             );


//         const editStudentForm =
//             document.getElementById(
//                 "editStudentForm"
//             );


//         const updateButton =
//             document.getElementById(
//                 "updateButton"
//             );


//         plan.addEventListener(
//             "change",
//             function () {

//                 if (
//                     plan.value ===
//                     "1 Month"
//                 ) {

//                     amount.value =
//                         500;

//                     paymentAmount.value =
//                         500;

//                 }


//                 if (
//                     plan.value ===
//                     "6 Months"
//                 ) {

//                     amount.value =
//                         2500;

//                     paymentAmount.value =
//                         2500;

//                 }

//             }
//         );


//         studentImage.addEventListener(
//             "change",
//             function () {

//                 const file =
//                     this.files[0];


//                 if (!file) {
//                     return;
//                 }


//                 const allowedTypes = [

//                     "image/jpeg",

//                     "image/png",

//                     "image/webp"

//                 ];


//                 if (
//                     !allowedTypes.includes(
//                         file.type
//                     )
//                 ) {

//                     alert(
//                         "केवल JPG, PNG या WEBP photo upload करें।"
//                     );

//                     this.value =
//                         "";

//                     return;

//                 }


//                 const maximumSize =
//                     5 *
//                     1024 *
//                     1024;


//                 if (
//                     file.size >
//                     maximumSize
//                 ) {

//                     alert(
//                         "Photo की size 5 MB से कम होनी चाहिए।"
//                     );

//                     this.value =
//                         "";

//                     return;

//                 }


//                 selectedFileName.textContent =
//                     "✅ " +
//                     file.name;


//                 const imageURL =
//                     URL.createObjectURL(
//                         file
//                     );


//                 photoPreview.src =
//                     imageURL;


//                 photoPreview.onload =
//                     function () {

//                         URL.revokeObjectURL(
//                             imageURL
//                         );

//                     };

//             }
//         );


//         editStudentForm.addEventListener(

//             "submit",

//             function () {

//                 updateButton.disabled =
//                     true;

//                 updateButton.textContent =
//                     "⏳ Updating Student...";

//             }

//         );


//     </script>


// </body>

// </html>
//     `;

// }


// module.exports =
//     EditStudent;


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


function formatDateForInput(dateValue) {

    if (!dateValue) {
        return "";
    }

    try {

        const date =
            new Date(dateValue);

        if (
            Number.isNaN(
                date.getTime()
            )
        ) {
            return "";
        }


        const year =
            date.getFullYear();


        const month =
            String(
                date.getMonth() + 1
            ).padStart(
                2,
                "0"
            );


        const day =
            String(
                date.getDate()
            ).padStart(
                2,
                "0"
            );


        return (
            year +
            "-" +
            month +
            "-" +
            day
        );

    } catch (error) {

        return "";

    }

}


function formatDisplayDate(dateValue) {

    if (!dateValue) {
        return "-";
    }

    try {

        const date =
            new Date(dateValue);

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


function EditStudent(student = {}) {


    const currentImage =
        student.image ||
        student.photo ||
        "/images/student-default.png";


    const studentId =
        student._id
            ? String(student._id)
            : "";


    const paymentHistory =
        Array.isArray(
            student.paymentHistory
        )
            ? student.paymentHistory
            : [];


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


                        const paymentId =
                            payment._id
                                ? String(
                                    payment._id
                                )
                                : "";


                        const paymentAmount =
                            Number(
                                payment.amount || 0
                            ).toFixed(2);


                        return `
                            <div class="payment-history-row">


                                <div class="payment-info">


                                    <div class="payment-month">

                                        ${
                                            escapeHTML(
                                                payment.month ||
                                                "-"
                                            )
                                        }

                                    </div>


                                    <div class="payment-date">

                                        📅 Paid:
                                        ${
                                            escapeHTML(
                                                formatDisplayDate(
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


                                <div class="payment-actions">


                                    <div class="payment-history-amount">

                                        ₹${paymentAmount}

                                        <span>
                                            ✓ PAID
                                        </span>

                                    </div>


                                    ${
                                        paymentId
                                            ? `
                                                <button
                                                    type="button"
                                                    class="delete-payment-btn"
                                                    onclick="deletePayment(
                                                        '${escapeHTML(studentId)}',
                                                        '${escapeHTML(paymentId)}'
                                                    )"
                                                >
                                                    🗑 Delete
                                                </button>
                                            `
                                            : ""
                                    }


                                </div>


                            </div>
                        `;

                    }
                )
                .join("")

            : `
                <div class="no-payment">
                    अभी कोई payment history नहीं है।
                </div>
            `;


    const today =
        formatDateForInput(
            new Date()
        );


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
        Edit Student
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
                25px 15px;

            background:
                linear-gradient(
                    135deg,
                    #1d4ed8,
                    #06b6d4
                );

        }


        .card {

            width:
                100%;

            max-width:
                650px;

            margin:
                auto;

            padding:
                28px;

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    0.4
                );

            border-radius:
                20px;

            background:
                #ffffff;

            box-shadow:
                0 20px 50px
                rgba(
                    0,
                    0,
                    0,
                    0.22
                );

        }


        .heading {

            margin-bottom:
                24px;

            text-align:
                center;

        }


        .heading-icon {

            display:
                grid;

            width:
                52px;

            height:
                52px;

            place-items:
                center;

            margin:
                0 auto 10px;

            border-radius:
                50%;

            background:
                #dbeafe;

            font-size:
                26px;

        }


        h1 {

            margin:
                0;

            color:
                #1e3a8a;

            font-size:
                28px;

        }


        .heading p {

            margin:
                7px 0 0;

            color:
                #64748b;

            font-size:
                13px;

        }


        label {

            display:
                block;

            margin:
                16px 0 7px;

            color:
                #1e3a8a;

            font-size:
                14px;

            font-weight:
                700;

        }


        input,
        select,
        textarea {

            width:
                100%;

            min-height:
                46px;

            padding:
                12px;

            border:
                1px solid
                #cbd5e1;

            border-radius:
                10px;

            outline:
                none;

            background:
                #ffffff;

            color:
                #1e293b;

            font-size:
                15px;

        }


        input:focus,
        select:focus,
        textarea:focus {

            border-color:
                #2563eb;

            box-shadow:
                0 0 0 3px
                rgba(
                    37,
                    99,
                    235,
                    0.14
                );

        }


        .form-row {

            display:
                grid;

            grid-template-columns:
                1fr 1fr;

            gap:
                14px;

        }


        /* ==============================
           PHOTO
        ============================== */


        .photo-section {

            margin-bottom:
                22px;

            padding:
                18px;

            border:
                1px dashed
                #93c5fd;

            border-radius:
                14px;

            background:
                #f8fbff;

            text-align:
                center;

        }


        .photo-preview-box {

            position:
                relative;

            width:
                125px;

            height:
                125px;

            overflow:
                hidden;

            margin:
                0 auto 14px;

            border:
                4px solid
                #ffffff;

            border-radius:
                50%;

            background:
                #e2e8f0;

            box-shadow:
                0 8px 22px
                rgba(
                    30,
                    64,
                    175,
                    0.22
                );

        }


        .photo-preview {

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


        .photo-label {

            display:
                inline-flex;

            align-items:
                center;

            justify-content:
                center;

            gap:
                7px;

            margin:
                0;

            padding:
                10px 16px;

            border-radius:
                9px;

            color:
                #ffffff;

            background:
                #2563eb;

            font-size:
                13px;

            font-weight:
                700;

            cursor:
                pointer;

        }


        .photo-label:hover {

            background:
                #1d4ed8;

        }


        .photo-input {

            display:
                none;

        }


        .photo-help {

            margin:
                10px 0 0;

            color:
                #64748b;

            font-size:
                11px;

        }


        .selected-file-name {

            overflow:
                hidden;

            margin-top:
                8px;

            color:
                #0f766e;

            font-size:
                12px;

            font-weight:
                700;

            text-overflow:
                ellipsis;

            white-space:
                nowrap;

        }


        /* ==============================
           ROLL / PASSWORD
        ============================== */


        .roll-box {

            margin-top:
                18px;

            padding:
                14px;

            border:
                1px solid
                #bfdbfe;

            border-radius:
                10px;

            color:
                #1d4ed8;

            background:
                #eff6ff;

            text-align:
                center;

            font-weight:
                800;

        }


        .password-help {

            display:
                block;

            margin-top:
                6px;

            color:
                #64748b;

            font-size:
                11px;

        }


        /* ==============================
           ADD PAYMENT
        ============================== */


        .payment-section {

            margin-top:
                25px;

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


        .payment-section h2 {

            margin:
                0 0 6px;

            color:
                #166534;

            font-size:
                19px;

        }


        .payment-section p {

            margin:
                0 0 14px;

            color:
                #64748b;

            font-size:
                12px;

        }


        /* ==============================
           PAYMENT HISTORY
        ============================== */


        .payment-history-box {

            margin-top:
                25px;

            padding:
                18px;

            border:
                1px solid
                #dbeafe;

            border-radius:
                14px;

            background:
                #f8fafc;

        }


        .payment-history-box h2 {

            margin:
                0 0 15px;

            color:
                #1e3a8a;

            font-size:
                19px;

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
                #e2e8f0;

        }


        .payment-history-row:last-child {

            border-bottom:
                none;

        }


        .payment-info {

            flex:
                1;

        }


        .payment-month {

            color:
                #111827;

            font-size:
                15px;

            font-weight:
                800;

        }


        .payment-date {

            margin-top:
                4px;

            color:
                #64748b;

            font-size:
                12px;

        }


        .payment-note {

            margin-top:
                5px;

            color:
                #475569;

            font-size:
                11px;

        }


        .payment-actions {

            display:
                flex;

            align-items:
                center;

            gap:
                12px;

        }


        .payment-history-amount {

            color:
                #166534;

            text-align:
                right;

            font-size:
                16px;

            font-weight:
                800;

        }


        .payment-history-amount span {

            display:
                block;

            margin-top:
                3px;

            color:
                #16a34a;

            font-size:
                10px;

        }


        .delete-payment-btn {

            width:
                auto;

            min-width:
                80px;

            min-height:
                36px;

            margin:
                0;

            padding:
                8px 11px;

            border:
                none;

            border-radius:
                8px;

            color:
                #ffffff;

            background:
                #dc2626;

            font-size:
                12px;

            font-weight:
                700;

            cursor:
                pointer;

        }


        .delete-payment-btn:hover {

            background:
                #b91c1c;

        }


        .delete-payment-btn:disabled {

            cursor:
                not-allowed;

            opacity:
                .6;

        }


        .no-payment {

            padding:
                15px;

            border-radius:
                9px;

            color:
                #64748b;

            background:
                #ffffff;

            text-align:
                center;

            font-size:
                13px;

        }


        /* ==============================
           UPDATE
        ============================== */


        .update-button {

            width:
                100%;

            min-height:
                48px;

            margin-top:
                25px;

            padding:
                13px;

            border:
                none;

            border-radius:
                10px;

            color:
                #ffffff;

            background:
                linear-gradient(
                    135deg,
                    #2563eb,
                    #0891b2
                );

            font-size:
                16px;

            font-weight:
                800;

            cursor:
                pointer;

            box-shadow:
                0 8px 20px
                rgba(
                    37,
                    99,
                    235,
                    0.25
                );

        }


        .update-button:hover {

            background:
                linear-gradient(
                    135deg,
                    #1d4ed8,
                    #0e7490
                );

        }


        .update-button:disabled {

            cursor:
                not-allowed;

            opacity:
                .7;

        }


        .back {

            display:
                block;

            margin-top:
                19px;

            color:
                #2563eb;

            text-align:
                center;

            font-size:
                14px;

            font-weight:
                700;

            text-decoration:
                none;

        }


        .back:hover {

            text-decoration:
                underline;

        }


        @media (
            max-width:
            600px
        ) {

            body {

                padding:
                    12px 10px;

            }


            .card {

                padding:
                    20px 15px;

                border-radius:
                    16px;

            }


            h1 {

                font-size:
                    24px;

            }


            .form-row {

                grid-template-columns:
                    1fr;

                gap:
                    0;

            }


            .photo-preview-box {

                width:
                    110px;

                height:
                    110px;

            }


            .payment-history-row {

                align-items:
                    flex-start;

                flex-direction:
                    column;

            }


            .payment-actions {

                width:
                    100%;

                justify-content:
                    space-between;

            }


            .delete-payment-btn {

                min-width:
                    95px;

            }

        }

    </style>

</head>


<body>


    <div class="card">


        <div class="heading">

            <div class="heading-icon">
                👨‍🎓
            </div>

            <h1>
                Edit Student
            </h1>

            <p>
                Student information, photo और payment update करें
            </p>

        </div>



        <form

            method="POST"

            action="/admin/edit-student/${
                escapeHTML(
                    studentId
                )
            }"

            enctype="multipart/form-data"

            id="editStudentForm"

        >


            <!-- ===========================
                 PHOTO
            ============================ -->


            <div class="photo-section">


                <div class="photo-preview-box">

                    <img

                        src="${
                            escapeHTML(
                                currentImage
                            )
                        }"

                        alt="Student Photo"

                        id="photoPreview"

                        class="photo-preview"

                        onerror="
                            this.onerror = null;
                            this.src = '/images/student-default.png';
                        "

                    >

                </div>


                <label
                    for="studentImage"
                    class="photo-label"
                >
                    📷 Choose Student Photo
                </label>


                <input

                    type="file"

                    name="image"

                    id="studentImage"

                    class="photo-input"

                    accept="image/jpeg,image/png,image/webp"

                >


                <div
                    class="selected-file-name"
                    id="selectedFileName"
                >
                    कोई नई photo select नहीं की गई
                </div>


                <p class="photo-help">
                    JPG, PNG या WEBP • Maximum size 5 MB
                </p>


            </div>



            <!-- STUDENT NAME -->


            <label for="studentName">
                Student Name
            </label>


            <input

                type="text"

                name="name"

                id="studentName"

                value="${
                    escapeHTML(
                        student.name
                    )
                }"

                placeholder="Enter student name"

                required

            >



            <div class="form-row">


                <div>

                    <label for="mobile">
                        Mobile Number
                    </label>

                    <input

                        type="tel"

                        name="mobile"

                        id="mobile"

                        value="${
                            escapeHTML(
                                student.mobile ||
                                student.phone
                            )
                        }"

                        placeholder="10-digit mobile number"

                        maxlength="10"

                        inputmode="numeric"

                        required

                    >

                </div>


                <div>

                    <label for="age">
                        Age
                    </label>

                    <input

                        type="number"

                        name="age"

                        id="age"

                        value="${
                            escapeHTML(
                                student.age
                            )
                        }"

                        min="3"

                        max="100"

                        placeholder="Student age"

                    >

                </div>


            </div>



            <!-- COURSE -->


            <label for="course">
                Class / Course
            </label>


            <input

                type="text"

                name="course"

                id="course"

                value="${
                    escapeHTML(
                        student.course ||
                        student.className
                    )
                }"

                placeholder="Enter class or course"

                required

            >



            <div class="roll-box">

                🎓 Roll Number:

                ${
                    escapeHTML(
                        student.rollNo ||
                        student.roll ||
                        "Not Available"
                    )
                }

            </div>



            <!-- PASSWORD -->


            <label for="password">
                New Password
            </label>


            <input

                type="password"

                name="password"

                id="password"

                placeholder="Enter new password"

            >


            <span class="password-help">
                Password change नहीं करना है तो इसे खाली छोड़ दें।
            </span>



            <!-- PLAN -->


            <div class="form-row">


                <div>

                    <label for="plan">
                        Payment Plan
                    </label>


                    <select
                        name="plan"
                        id="plan"
                    >


                        <option
                            value="1 Month"

                            ${
                                student.plan ===
                                "1 Month"
                                    ? "selected"
                                    : ""
                            }
                        >
                            1 Month — ₹500
                        </option>


                        <option
                            value="6 Months"

                            ${
                                student.plan ===
                                "6 Months"
                                    ? "selected"
                                    : ""
                            }
                        >
                            6 Months — ₹2500
                        </option>


                    </select>

                </div>


                <div>

                    <label for="amount">
                        Plan Amount
                    </label>


                    <input

                        type="number"

                        name="amount"

                        id="amount"

                        value="${
                            escapeHTML(
                                student.amount ?? 0
                            )
                        }"

                        min="0"

                        required

                    >

                </div>


            </div>



            <!-- PAYMENT STATUS -->


            <label for="paymentStatus">
                Payment Status
            </label>


            <select
                name="paymentStatus"
                id="paymentStatus"
            >


                <option
                    value="Pending"

                    ${
                        student.paymentStatus ===
                        "Pending"
                            ? "selected"
                            : ""
                    }
                >
                    ⏳ Pending
                </option>


                <option
                    value="Success"

                    ${
                        student.paymentStatus ===
                        "Success"
                            ? "selected"
                            : ""
                    }
                >
                    ✅ Success
                </option>


            </select>



            <!-- ===========================
                 ADD PAYMENT
            ============================ -->


            <div class="payment-section">


                <h2>
                    💰 Add New Payment
                </h2>


                <p>
                    Student ने किस महीने का पैसा कब दिया, यहाँ दर्ज करें।
                </p>


                <label for="paymentMonth">
                    Payment Month
                </label>


                <input

                    type="month"

                    name="paymentMonth"

                    id="paymentMonth"

                >



                <div class="form-row">


                    <div>

                        <label for="paymentAmount">
                            Paid Amount
                        </label>


                        <input

                            type="number"

                            name="paymentAmount"

                            id="paymentAmount"

                            min="1"

                            placeholder="Example: 500"

                        >

                    </div>


                    <div>

                        <label for="paidDate">
                            Payment Date
                        </label>


                        <input

                            type="date"

                            name="paidDate"

                            id="paidDate"

                            value="${today}"

                        >

                    </div>


                </div>



                <label for="paymentNote">
                    Payment Note
                </label>


                <input

                    type="text"

                    name="paymentNote"

                    id="paymentNote"

                    placeholder="Example: Cash / UPI"

                >


            </div>



            <!-- ===========================
                 PAYMENT HISTORY
            ============================ -->


            <div class="payment-history-box">


                <h2>
                    💳 Payment History
                </h2>


                ${paymentHistoryHTML}


            </div>



            <button

                type="submit"

                class="update-button"

                id="updateButton"

            >
                ✅ Update Student
            </button>


        </form>



        <a

            href="/admin/manage-students"

            class="back"

        >
            ← Back to Manage Students
        </a>


    </div>



    <script>


        const plan =
            document.getElementById(
                "plan"
            );


        const amount =
            document.getElementById(
                "amount"
            );


        const paymentAmount =
            document.getElementById(
                "paymentAmount"
            );


        const studentImage =
            document.getElementById(
                "studentImage"
            );


        const photoPreview =
            document.getElementById(
                "photoPreview"
            );


        const selectedFileName =
            document.getElementById(
                "selectedFileName"
            );


        const editStudentForm =
            document.getElementById(
                "editStudentForm"
            );


        const updateButton =
            document.getElementById(
                "updateButton"
            );



        // =========================
        // PLAN CHANGE
        // =========================


        plan.addEventListener(
            "change",
            function () {


                if (
                    plan.value ===
                    "1 Month"
                ) {

                    amount.value =
                        500;

                    paymentAmount.value =
                        500;

                }


                if (
                    plan.value ===
                    "6 Months"
                ) {

                    amount.value =
                        2500;

                    paymentAmount.value =
                        2500;

                }


            }
        );



        // =========================
        // PHOTO PREVIEW
        // =========================


        studentImage.addEventListener(
            "change",
            function () {


                const file =
                    this.files[0];


                if (!file) {

                    selectedFileName.textContent =
                        "कोई नई photo select नहीं की गई";

                    return;

                }


                const allowedTypes = [

                    "image/jpeg",
                    "image/png",
                    "image/webp"

                ];


                if (
                    !allowedTypes.includes(
                        file.type
                    )
                ) {

                    alert(
                        "केवल JPG, PNG या WEBP photo upload करें।"
                    );

                    this.value =
                        "";

                    return;

                }


                const maximumSize =
                    5 * 1024 * 1024;


                if (
                    file.size >
                    maximumSize
                ) {

                    alert(
                        "Photo की size 5 MB से कम होनी चाहिए।"
                    );

                    this.value =
                        "";

                    return;

                }


                selectedFileName.textContent =
                    "✅ " +
                    file.name;


                const imageURL =
                    URL.createObjectURL(
                        file
                    );


                photoPreview.src =
                    imageURL;


                photoPreview.onload =
                    function () {

                        URL.revokeObjectURL(
                            imageURL
                        );

                    };


            }
        );



        // =========================
        // DELETE PAYMENT
        // =========================


        async function deletePayment(
            studentId,
            paymentId
        ) {


            const confirmed =
                confirm(
                    "क्या आप यह payment delete करना चाहते हैं?"
                );


            if (!confirmed) {

                return;

            }


            try {


                const response =
                    await fetch(

                        "/admin/delete-student-payment/" +
                        encodeURIComponent(
                            studentId
                        ) +
                        "/" +
                        encodeURIComponent(
                            paymentId
                        ),

                        {
                            method:
                                "POST"
                        }

                    );


                const message =
                    await response.text();


                if (
                    !response.ok
                ) {

                    alert(
                        message ||
                        "Payment delete नहीं हुआ।"
                    );

                    return;

                }


                window.location.reload();


            } catch (error) {


                console.error(
                    "DELETE PAYMENT ERROR:",
                    error
                );


                alert(
                    "Payment delete करते समय error आया।"
                );


            }


        }



        // =========================
        // UPDATE FORM
        // =========================


        editStudentForm.addEventListener(
            "submit",
            function () {


                updateButton.disabled =
                    true;


                updateButton.textContent =
                    "⏳ Updating Student...";


            }
        );


    </script>


</body>

</html>
    `;

}


module.exports =
    EditStudent;
