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


// // function StudentSection(students = []) {

// //     const safeStudents = Array.isArray(students)
// //         ? students
// //         : [];


// //     if (safeStudents.length === 0) {
// //         return "";
// //     }


// //     const studentCards = safeStudents.map((student) => {

// //         const name =
// //             student.name ||
// //             student.studentName ||
// //             "Student";

// //         const course =
// //             student.course ||
// //             student.className ||
// //             student.class ||
// //             "Course Not Available";

// //         const institute =
// //             student.institute ||
// //             student.school ||
// //             student.college ||
// //             "Student Institute";

// //         const address =
// //             student.address ||
// //             student.location ||
// //             "Address Not Available";

// //         const timing =
// //             student.timing ||
// //             student.batchTime ||
// //             student.schedule ||
// //             "Time Not Available";

// //         const fee =
// //             student.fee ||
// //             student.fees ||
// //             student.amount ||
// //             0;

// //         const image =
// //             student.image ||
// //             student.photo ||
// //             "/images/student-default.png";

// //         const studentId = student._id || "";

// //         return `
// //             <article class="student-card">

// //                 <img
// //                     src="${escapeHTML(image)}"
// //                     alt="${escapeHTML(name)}"
// //                     class="student-image"
// //                     onerror="this.src='/images/student-default.png'"
// //                 >

// //                 <div class="student-card-content">

// //                     <h3>
// //                         ${escapeHTML(name)}
// //                     </h3>

// //                     <p>
// //                         🎓 <b>${escapeHTML(course)}</b>
// //                     </p>

// //                     <p>
// //                         🏫 ${escapeHTML(institute)}
// //                     </p>

// //                     <p>
// //                         📍 ${escapeHTML(address)}
// //                     </p>

// //                     <p>
// //                         ⏰ ${escapeHTML(timing)}
// //                     </p>

// //                     <p>
// //                         💰 Fee <b>₹${escapeHTML(fee)}</b>
// //                     </p>

// //                     <a
// //                         href="/student/${escapeHTML(studentId)}"
// //                         class="view-student-btn"
// //                     >
// //                         View Student
// //                     </a>

// //                 </div>

// //             </article>
// //         `;
// //     }).join("");


// //     return `
// //         <section class="students-section">

// //             <style>

// //                 .students-section {
// //                     padding: 45px 16px;
// //                     background: #f7faff;
// //                 }

// //                 .students-section h2 {
// //                     text-align: center;
// //                     font-size: 30px;
// //                     color: #152a4a;
// //                     margin: 0 0 28px;
// //                 }

// //                 .students-grid {
// //                     width: 100%;
// //                     max-width: 1200px;
// //                     margin: auto;
// //                     display: grid;
// //                     grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
// //                     gap: 22px;
// //                 }

// //                 .student-card {
// //                     overflow: hidden;
// //                     border-radius: 16px;
// //                     background: #ffffff;
// //                     box-shadow: 0 8px 24px rgba(17, 48, 91, 0.12);
// //                     transition: 0.25s ease;
// //                 }

// //                 .student-card:hover {
// //                     transform: translateY(-5px);
// //                     box-shadow: 0 13px 30px rgba(17, 48, 91, 0.2);
// //                 }

// //                 .student-image {
// //                     width: 100%;
// //                     height: 210px;
// //                     object-fit: cover;
// //                     display: block;
// //                     background: #e8eef7;
// //                 }

// //                 .student-card-content {
// //                     padding: 18px;
// //                 }

// //                 .student-card h3 {
// //                     color: #0d2c54;
// //                     font-size: 21px;
// //                     margin: 0 0 14px;
// //                 }

// //                 .student-card p {
// //                     color: #4a5568;
// //                     font-size: 14px;
// //                     line-height: 1.55;
// //                     margin: 8px 0;
// //                 }

// //                 .view-student-btn {
// //                     width: 100%;
// //                     display: block;
// //                     box-sizing: border-box;
// //                     text-align: center;
// //                     margin-top: 18px;
// //                     padding: 11px 14px;
// //                     border-radius: 8px;
// //                     background: #0a7a52;
// //                     color: #ffffff;
// //                     font-weight: 700;
// //                     text-decoration: none;
// //                 }

// //                 .view-student-btn:hover {
// //                     background: #075f40;
// //                 }

// //                 @media (max-width: 600px) {

// //                     .students-section {
// //                         padding: 32px 12px;
// //                     }

// //                     .students-section h2 {
// //                         font-size: 24px;
// //                     }

// //                     .students-grid {
// //                         grid-template-columns: 1fr;
// //                         gap: 16px;
// //                     }

// //                 }

// //             </style>

// //             <h2>Our Students</h2>

// //             <div class="students-grid">
// //                 ${studentCards}
// //             </div>

// //         </section>
// //     `;
// // }


// // module.exports = StudentSection;


// function escapeHTML(value) {

//     if (value === null || value === undefined) {
//         return "";
//     }

//     return String(value)
//         .replace(/&/g, "&amp;")
//         .replace(/</g, "&lt;")
//         .replace(/>/g, "&gt;")
//         .replace(/"/g, "&quot;")
//         .replace(/'/g, "&#039;");
// }


// function formatFee(value) {

//     const fee = Number(value);

//     if (!Number.isFinite(fee)) {
//         return "0";
//     }

//     return fee.toLocaleString("en-IN", {
//         minimumFractionDigits: 0,
//         maximumFractionDigits: 2
//     });
// }


// function StudentSection(students = []) {

//     const safeStudents = Array.isArray(students)
//         ? students
//         : [];


//     if (safeStudents.length === 0) {
//         return "";
//     }


//     const studentCards = safeStudents.map((student) => {

//         const name =
//             student.name ||
//             student.studentName ||
//             "Student";

//         const course =
//             student.course ||
//             student.className ||
//             student.class ||
//             "Not Available";

//         const institute =
//             student.institute ||
//             student.school ||
//             student.college ||
//             "Student Institute";

//         const address =
//             student.address ||
//             student.location ||
//             "Address Not Available";

//         const timing =
//             student.timing ||
//             student.batchTime ||
//             student.schedule ||
//             "Time Not Available";

//         const fee =
//             student.fee ??
//             student.fees ??
//             student.amount ??
//             0;

//         const image =
//             student.image ||
//             student.photo ||
//             "/images/student-default.png";

//         const studentId =
//             student._id
//                 ? String(student._id)
//                 : "";

//         const rollNumber =
//             student.rollNo ||
//             student.roll ||
//             student.studentId ||
//             "";

//         const viewButton = studentId
//             ? `
//                 <a
//                     href="/student/${escapeHTML(studentId)}"
//                     class="view-student-btn"
//                 >
//                     View Profile
//                     <span aria-hidden="true">→</span>
//                 </a>
//             `
//             : `
//                 <span class="view-student-btn disabled">
//                     Profile Unavailable
//                 </span>
//             `;


//         return `
//             <article class="student-card">

//                 <div class="student-image-box">

//                     <img
//                         src="${escapeHTML(image)}"
//                         alt="${escapeHTML(name)}"
//                         class="student-image"
//                         loading="lazy"
//                         onerror="
//                             this.onerror = null;
//                             this.src = '/images/student-default.png';
//                         "
//                     >

//                     <span class="student-status">
//                         ● Active
//                     </span>

//                     <div class="image-overlay"></div>

//                     <div class="student-name-overlay">
//                         <h3 title="${escapeHTML(name)}">
//                             ${escapeHTML(name)}
//                         </h3>

//                         ${
//                             rollNumber
//                                 ? `
//                                     <span>
//                                         ID: ${escapeHTML(rollNumber)}
//                                     </span>
//                                 `
//                                 : ""
//                         }
//                     </div>

//                 </div>


//                 <div class="student-card-content">

//                     <div class="course-badge">
//                         🎓 ${escapeHTML(course)}
//                     </div>

//                     <div class="student-info-list">

//                         <div class="student-info-row">
//                             <span class="info-icon">🏫</span>

//                             <span
//                                 class="info-text"
//                                 title="${escapeHTML(institute)}"
//                             >
//                                 ${escapeHTML(institute)}
//                             </span>
//                         </div>


//                         <div class="student-info-row">
//                             <span class="info-icon">📍</span>

//                             <span
//                                 class="info-text"
//                                 title="${escapeHTML(address)}"
//                             >
//                                 ${escapeHTML(address)}
//                             </span>
//                         </div>


//                         <div class="student-info-row">
//                             <span class="info-icon">⏰</span>

//                             <span
//                                 class="info-text"
//                                 title="${escapeHTML(timing)}"
//                             >
//                                 ${escapeHTML(timing)}
//                             </span>
//                         </div>

//                     </div>


//                     <div class="student-card-footer">

//                         <div class="student-fee">
//                             <small>Course Fee</small>

//                             <strong>
//                                 ₹${escapeHTML(formatFee(fee))}
//                             </strong>
//                         </div>

//                     </div>

//                     ${viewButton}

//                 </div>

//             </article>
//         `;

//     }).join("");


//     return `
//         <section class="students-section">

//             <style>

//                 .students-section,
//                 .students-section * {
//                     box-sizing: border-box;
//                 }


//                 .students-section {
//                     width: 100%;
//                     padding: 52px 18px;
//                     background:
//                         radial-gradient(
//                             circle at top left,
//                             rgba(37, 99, 235, 0.08),
//                             transparent 32%
//                         ),
//                         linear-gradient(
//                             180deg,
//                             #f8fbff 0%,
//                             #eef5ff 100%
//                         );
//                 }


//                 .students-container {
//                     width: 100%;
//                     max-width: 1200px;
//                     margin: 0 auto;
//                 }


//                 .students-heading {
//                     text-align: center;
//                     margin-bottom: 30px;
//                 }


//                 .students-heading-badge {
//                     display: inline-flex;
//                     align-items: center;
//                     gap: 6px;
//                     padding: 7px 13px;
//                     border: 1px solid #c7d7fe;
//                     border-radius: 999px;
//                     background: #eff6ff;
//                     color: #1d4ed8;
//                     font-size: 12px;
//                     font-weight: 800;
//                     letter-spacing: 0.5px;
//                     text-transform: uppercase;
//                 }


//                 .students-heading h2 {
//                     margin: 12px 0 7px;
//                     color: #102a4c;
//                     font-size: clamp(25px, 4vw, 34px);
//                     line-height: 1.2;
//                     font-weight: 800;
//                 }


//                 .students-heading p {
//                     max-width: 520px;
//                     margin: 0 auto;
//                     color: #64748b;
//                     font-size: 14px;
//                     line-height: 1.6;
//                 }


//                 .students-grid {
//                     width: 100%;
//                     display: grid;
//                     grid-template-columns:
//                         repeat(
//                             auto-fit,
//                             minmax(250px, 1fr)
//                         );
//                     gap: 22px;
//                 }


//                 .student-card {
//                     min-width: 0;
//                     overflow: hidden;
//                     position: relative;
//                     border: 1px solid rgba(148, 163, 184, 0.24);
//                     border-radius: 20px;
//                     background: #ffffff;
//                     box-shadow:
//                         0 10px 30px
//                         rgba(15, 42, 77, 0.10);
//                     transition:
//                         transform 0.25s ease,
//                         box-shadow 0.25s ease,
//                         border-color 0.25s ease;
//                 }


//                 .student-card:hover {
//                     transform: translateY(-6px);
//                     border-color: rgba(37, 99, 235, 0.35);
//                     box-shadow:
//                         0 18px 38px
//                         rgba(15, 42, 77, 0.17);
//                 }


//                 .student-image-box {
//                     height: 210px;
//                     position: relative;
//                     overflow: hidden;
//                     background:
//                         linear-gradient(
//                             135deg,
//                             #dbeafe,
//                             #eff6ff
//                         );
//                 }


//                 .student-image {
//                     width: 100%;
//                     height: 100%;
//                     display: block;
//                     object-fit: cover;
//                     object-position: center;
//                     transition: transform 0.35s ease;
//                 }


//                 .student-card:hover .student-image {
//                     transform: scale(1.05);
//                 }


//                 .image-overlay {
//                     position: absolute;
//                     inset: 0;
//                     pointer-events: none;
//                     background:
//                         linear-gradient(
//                             180deg,
//                             transparent 45%,
//                             rgba(4, 18, 38, 0.86) 100%
//                         );
//                 }


//                 .student-status {
//                     position: absolute;
//                     z-index: 2;
//                     top: 12px;
//                     right: 12px;
//                     display: inline-flex;
//                     align-items: center;
//                     padding: 6px 10px;
//                     border: 1px solid rgba(255, 255, 255, 0.65);
//                     border-radius: 999px;
//                     background: rgba(255, 255, 255, 0.94);
//                     color: #07834c;
//                     font-size: 11px;
//                     font-weight: 800;
//                     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.10);
//                 }


//                 .student-name-overlay {
//                     position: absolute;
//                     z-index: 2;
//                     right: 15px;
//                     bottom: 14px;
//                     left: 15px;
//                     color: #ffffff;
//                 }


//                 .student-name-overlay h3 {
//                     overflow: hidden;
//                     margin: 0;
//                     color: #ffffff;
//                     font-size: 20px;
//                     font-weight: 800;
//                     line-height: 1.25;
//                     text-overflow: ellipsis;
//                     white-space: nowrap;
//                 }


//                 .student-name-overlay span {
//                     display: inline-block;
//                     margin-top: 4px;
//                     color: #dbeafe;
//                     font-size: 11px;
//                     font-weight: 700;
//                 }


//                 .student-card-content {
//                     padding: 18px;
//                 }


//                 .course-badge {
//                     overflow: hidden;
//                     display: inline-block;
//                     max-width: 100%;
//                     padding: 7px 11px;
//                     border-radius: 8px;
//                     background: #eef5ff;
//                     color: #1e4f91;
//                     font-size: 12px;
//                     font-weight: 800;
//                     text-overflow: ellipsis;
//                     white-space: nowrap;
//                 }


//                 .student-info-list {
//                     display: grid;
//                     gap: 10px;
//                     margin-top: 16px;
//                 }


//                 .student-info-row {
//                     min-width: 0;
//                     display: flex;
//                     align-items: center;
//                     gap: 9px;
//                     color: #526176;
//                     font-size: 13px;
//                 }


//                 .info-icon {
//                     width: 27px;
//                     height: 27px;
//                     flex: 0 0 27px;
//                     display: grid;
//                     place-items: center;
//                     border-radius: 8px;
//                     background: #f1f5f9;
//                     font-size: 13px;
//                 }


//                 .info-text {
//                     overflow: hidden;
//                     min-width: 0;
//                     display: block;
//                     text-overflow: ellipsis;
//                     white-space: nowrap;
//                 }


//                 .student-card-footer {
//                     display: flex;
//                     align-items: center;
//                     justify-content: space-between;
//                     margin-top: 17px;
//                     padding-top: 14px;
//                     border-top: 1px solid #edf1f7;
//                 }


//                 .student-fee small {
//                     display: block;
//                     margin-bottom: 2px;
//                     color: #8793a4;
//                     font-size: 10px;
//                     font-weight: 700;
//                     text-transform: uppercase;
//                 }


//                 .student-fee strong {
//                     color: #087454;
//                     font-size: 20px;
//                     font-weight: 850;
//                 }


//                 .view-student-btn {
//                     width: 100%;
//                     min-height: 43px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     gap: 8px;
//                     margin-top: 15px;
//                     padding: 11px 14px;
//                     border-radius: 11px;
//                     background:
//                         linear-gradient(
//                             135deg,
//                             #087454,
//                             #0a936a
//                         );
//                     color: #ffffff;
//                     font-size: 13px;
//                     font-weight: 800;
//                     text-align: center;
//                     text-decoration: none;
//                     box-shadow:
//                         0 8px 18px
//                         rgba(8, 116, 84, 0.20);
//                     transition:
//                         transform 0.2s ease,
//                         box-shadow 0.2s ease;
//                 }


//                 .view-student-btn:hover {
//                     transform: translateY(-1px);
//                     box-shadow:
//                         0 11px 23px
//                         rgba(8, 116, 84, 0.28);
//                 }


//                 .view-student-btn.disabled {
//                     cursor: not-allowed;
//                     background: #94a3b8;
//                     box-shadow: none;
//                 }


//                 /* Tablet */

//                 @media (max-width: 768px) {

//                     .students-section {
//                         padding: 38px 14px;
//                     }

//                     .students-grid {
//                         grid-template-columns:
//                             repeat(
//                                 2,
//                                 minmax(0, 1fr)
//                             );
//                         gap: 14px;
//                     }

//                 }


//                 /* Phone: one row में 2 cards */

//                 @media (max-width: 600px) {

//                     .students-section {
//                         padding: 30px 10px;
//                     }

//                     .students-heading {
//                         margin-bottom: 20px;
//                     }

//                     .students-heading h2 {
//                         margin-top: 9px;
//                         font-size: 24px;
//                     }

//                     .students-heading p {
//                         font-size: 12px;
//                     }

//                     .students-grid {
//                         grid-template-columns:
//                             repeat(
//                                 2,
//                                 minmax(0, 1fr)
//                             );
//                         gap: 10px;
//                     }

//                     .student-card {
//                         border-radius: 14px;
//                     }

//                     .student-image-box {
//                         height: 135px;
//                     }

//                     .student-status {
//                         top: 7px;
//                         right: 7px;
//                         padding: 4px 7px;
//                         font-size: 8px;
//                     }

//                     .student-name-overlay {
//                         right: 9px;
//                         bottom: 9px;
//                         left: 9px;
//                     }

//                     .student-name-overlay h3 {
//                         font-size: 14px;
//                     }

//                     .student-name-overlay span {
//                         font-size: 8px;
//                     }

//                     .student-card-content {
//                         padding: 10px;
//                     }

//                     .course-badge {
//                         width: 100%;
//                         padding: 6px 7px;
//                         font-size: 10px;
//                         text-align: center;
//                     }

//                     .student-info-list {
//                         gap: 7px;
//                         margin-top: 10px;
//                     }

//                     .student-info-row {
//                         gap: 5px;
//                         font-size: 10px;
//                     }

//                     .info-icon {
//                         width: 22px;
//                         height: 22px;
//                         flex-basis: 22px;
//                         border-radius: 6px;
//                         font-size: 10px;
//                     }

//                     .student-card-footer {
//                         margin-top: 10px;
//                         padding-top: 9px;
//                     }

//                     .student-fee small {
//                         font-size: 8px;
//                     }

//                     .student-fee strong {
//                         font-size: 15px;
//                     }

//                     .view-student-btn {
//                         min-height: 36px;
//                         margin-top: 10px;
//                         padding: 8px 5px;
//                         border-radius: 8px;
//                         font-size: 10px;
//                     }

//                 }


//                 /* Very small phone */

//                 @media (max-width: 360px) {

//                     .students-section {
//                         padding-right: 7px;
//                         padding-left: 7px;
//                     }

//                     .students-grid {
//                         gap: 7px;
//                     }

//                     .student-image-box {
//                         height: 120px;
//                     }

//                     .student-card-content {
//                         padding: 8px;
//                     }

//                 }

//             </style>


//             <div class="students-container">

//                 <div class="students-heading">

//                     <span class="students-heading-badge">
//                         🎓 Student Community
//                     </span>

//                     <h2>Our Students</h2>

//                     <p>
//                         हमारे registered students की जानकारी और
//                         course details देखें।
//                     </p>

//                 </div>


//                 <div class="students-grid">
//                     ${studentCards}
//                 </div>

//             </div>

//         </section>
//     `;
// }


// module.exports = StudentSection;

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


function formatFee(value) {

    const fee = Number(value);

    if (!Number.isFinite(fee)) {
        return "0";
    }

    return fee.toLocaleString("en-IN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });

}


function cleanValue(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }

    return String(value).trim();

}


function StudentSection(students = []) {

    const safeStudents =
        Array.isArray(students)
            ? students.filter(Boolean)
            : [];


    if (safeStudents.length === 0) {
        return "";
    }


    const studentCards =
        safeStudents.map((student) => {

            const name =
                cleanValue(
                    student.name ||
                    student.studentName ||
                    "Student"
                );


            const course =
                cleanValue(
                    student.course ||
                    student.className ||
                    student.class ||
                    "Course Not Available"
                );


            /*
             * Empty रहने पर इनकी row नहीं दिखेगी
             */
            const institute =
                cleanValue(
                    student.institute ||
                    student.school ||
                    student.college ||
                    ""
                );


            const address =
                cleanValue(
                    student.address ||
                    student.location ||
                    ""
                );


            const timing =
                cleanValue(
                    student.timing ||
                    student.batchTime ||
                    student.schedule ||
                    ""
                );


            const fee =
                student.fee ??
                student.fees ??
                student.amount ??
                0;


            const image =
                cleanValue(
                    student.image ||
                    student.photo ||
                    "/images/student-default.png"
                );


            const studentId =
                cleanValue(
                    student._id
                );


            const rollNumber =
                cleanValue(
                    student.rollNo ||
                    student.roll ||
                    student.studentId ||
                    ""
                );


            const status =
                cleanValue(
                    student.status ||
                    "Active"
                );


            const statusClass =
                status.toLowerCase() === "active"
                    ? "active"
                    : "inactive";


            /*
             * Institute, Address और Timing में से
             * जो उपलब्ध होगा केवल वही दिखेगा।
             */
            const optionalInformation =
                institute ||
                address ||
                timing
                    ? `
                        <div class="student-info-list">

                            ${
                                institute
                                    ? `
                                        <div class="student-info-row">

                                            <span class="info-icon">
                                                🏫
                                            </span>

                                            <span
                                                class="info-text"
                                                title="${escapeHTML(institute)}"
                                            >
                                                ${escapeHTML(institute)}
                                            </span>

                                        </div>
                                    `
                                    : ""
                            }


                            ${
                                address
                                    ? `
                                        <div class="student-info-row">

                                            <span class="info-icon">
                                                📍
                                            </span>

                                            <span
                                                class="info-text"
                                                title="${escapeHTML(address)}"
                                            >
                                                ${escapeHTML(address)}
                                            </span>

                                        </div>
                                    `
                                    : ""
                            }


                            ${
                                timing
                                    ? `
                                        <div class="student-info-row">

                                            <span class="info-icon">
                                                ⏰
                                            </span>

                                            <span
                                                class="info-text"
                                                title="${escapeHTML(timing)}"
                                            >
                                                ${escapeHTML(timing)}
                                            </span>

                                        </div>
                                    `
                                    : ""
                            }

                        </div>
                    `
                    : "";


            const viewButton =
                studentId
                    ? `
                        <a
                            href="/student/${escapeHTML(studentId)}"
                            class="view-student-btn"
                        >
                            View Profile

                            <span aria-hidden="true">
                                →
                            </span>
                        </a>
                    `
                    : `
                        <span
                            class="view-student-btn disabled"
                        >
                            Profile Unavailable
                        </span>
                    `;


            return `
                <article class="student-card">

                    <div class="student-image-box">

                        <img
                            src="${escapeHTML(image)}"
                            alt="${escapeHTML(name)}"
                            class="student-image"
                            loading="lazy"
                            onerror="
                                this.onerror = null;
                                this.src = '/images/student-default.png';
                            "
                        >


                        <span
                            class="student-status ${statusClass}"
                        >
                            ● ${escapeHTML(status)}
                        </span>


                        <div class="image-overlay"></div>


                        <div class="student-name-overlay">

                            <h3
                                title="${escapeHTML(name)}"
                            >
                                ${escapeHTML(name)}
                            </h3>


                            ${
                                rollNumber
                                    ? `
                                        <span>
                                            ID:
                                            ${escapeHTML(rollNumber)}
                                        </span>
                                    `
                                    : ""
                            }

                        </div>

                    </div>


                    <div class="student-card-content">

                        <div
                            class="course-badge"
                            title="${escapeHTML(course)}"
                        >
                            🎓 ${escapeHTML(course)}
                        </div>


                        ${optionalInformation}


                        <div class="student-card-footer">

                            <div class="student-fee">

                                <small>
                                    Course Fee
                                </small>

                                <strong>
                                    ₹${escapeHTML(
                                        formatFee(fee)
                                    )}
                                </strong>

                            </div>

                        </div>


                        ${viewButton}

                    </div>

                </article>
            `;

        }).join("");


    return `
        <section class="students-section">

            <style>

                .students-section,
                .students-section * {
                    box-sizing: border-box;
                }


                .students-section {
                    width: 100%;
                    padding: 52px 18px;

                    background:
                        radial-gradient(
                            circle at top left,
                            rgba(37, 99, 235, 0.08),
                            transparent 32%
                        ),
                        linear-gradient(
                            180deg,
                            #f8fbff 0%,
                            #eef5ff 100%
                        );
                }


                .students-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                }


                .students-heading {
                    margin-bottom: 30px;
                    text-align: center;
                }


                .students-heading-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;

                    padding: 7px 13px;

                    border: 1px solid #c7d7fe;
                    border-radius: 999px;

                    background: #eff6ff;
                    color: #1d4ed8;

                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }


                .students-heading h2 {
                    margin: 12px 0 7px;

                    color: #102a4c;

                    font-size:
                        clamp(
                            25px,
                            4vw,
                            34px
                        );

                    line-height: 1.2;
                }


                .students-heading p {
                    max-width: 520px;
                    margin: 0 auto;

                    color: #64748b;

                    font-size: 14px;
                    line-height: 1.6;
                }


                .students-grid {
                    width: 100%;

                    display: grid;

                    grid-template-columns:
                        repeat(
                            auto-fit,
                            minmax(250px, 1fr)
                        );

                    gap: 22px;
                }


                .student-card {
                    min-width: 0;

                    overflow: hidden;
                    position: relative;

                    display: flex;
                    flex-direction: column;

                    border:
                        1px solid
                        rgba(148, 163, 184, 0.24);

                    border-radius: 20px;

                    background: #ffffff;

                    box-shadow:
                        0 10px 30px
                        rgba(15, 42, 77, 0.10);

                    transition:
                        transform 0.25s ease,
                        box-shadow 0.25s ease,
                        border-color 0.25s ease;
                }


                .student-card:hover {
                    transform:
                        translateY(-6px);

                    border-color:
                        rgba(37, 99, 235, 0.35);

                    box-shadow:
                        0 18px 38px
                        rgba(15, 42, 77, 0.17);
                }


                .student-image-box {
                    width: 100%;
                    height: 210px;

                    position: relative;
                    overflow: hidden;

                    background:
                        linear-gradient(
                            135deg,
                            #dbeafe,
                            #eff6ff
                        );
                }


                .student-image {
                    width: 100%;
                    height: 100%;

                    display: block;

                    object-fit: cover;
                    object-position: center;

                    transition:
                        transform 0.35s ease;
                }


                .student-card:hover
                .student-image {
                    transform: scale(1.05);
                }


                .image-overlay {
                    position: absolute;
                    inset: 0;

                    pointer-events: none;

                    background:
                        linear-gradient(
                            180deg,
                            transparent 45%,
                            rgba(4, 18, 38, 0.86) 100%
                        );
                }


                .student-status {
                    position: absolute;
                    z-index: 2;

                    top: 12px;
                    right: 12px;

                    display: inline-flex;
                    align-items: center;

                    padding: 6px 10px;

                    border:
                        1px solid
                        rgba(255, 255, 255, 0.65);

                    border-radius: 999px;

                    background:
                        rgba(255, 255, 255, 0.94);

                    font-size: 11px;
                    font-weight: 800;

                    box-shadow:
                        0 5px 15px
                        rgba(0, 0, 0, 0.10);
                }


                .student-status.active {
                    color: #07834c;
                }


                .student-status.inactive {
                    color: #b45309;
                }


                .student-name-overlay {
                    position: absolute;
                    z-index: 2;

                    right: 15px;
                    bottom: 14px;
                    left: 15px;

                    color: #ffffff;
                }


                .student-name-overlay h3 {
                    overflow: hidden;

                    margin: 0;

                    color: #ffffff;

                    font-size: 20px;
                    line-height: 1.25;

                    text-overflow: ellipsis;
                    white-space: nowrap;
                }


                .student-name-overlay span {
                    display: inline-block;
                    margin-top: 4px;

                    color: #dbeafe;

                    font-size: 11px;
                    font-weight: 700;
                }


                .student-card-content {
                    flex: 1;

                    display: flex;
                    flex-direction: column;

                    padding: 18px;
                }


                .course-badge {
                    overflow: hidden;

                    display: block;
                    max-width: 100%;

                    padding: 7px 11px;

                    border-radius: 8px;

                    background: #eef5ff;
                    color: #1e4f91;

                    font-size: 12px;
                    font-weight: 800;
                    text-align: center;

                    text-overflow: ellipsis;
                    white-space: nowrap;
                }


                .student-info-list {
                    display: grid;
                    gap: 10px;

                    margin-top: 16px;
                }


                .student-info-row {
                    min-width: 0;

                    display: flex;
                    align-items: center;
                    gap: 9px;

                    color: #526176;

                    font-size: 13px;
                }


                .info-icon {
                    width: 27px;
                    height: 27px;
                    flex: 0 0 27px;

                    display: grid;
                    place-items: center;

                    border-radius: 8px;

                    background: #f1f5f9;

                    font-size: 13px;
                }


                .info-text {
                    overflow: hidden;
                    min-width: 0;

                    display: block;

                    text-overflow: ellipsis;
                    white-space: nowrap;
                }


                .student-card-footer {
                    display: flex;
                    align-items: center;

                    margin-top: 17px;
                    padding-top: 14px;

                    border-top:
                        1px solid #edf1f7;
                }


                .student-fee small {
                    display: block;

                    margin-bottom: 2px;

                    color: #8793a4;

                    font-size: 10px;
                    font-weight: 700;
                    text-transform: uppercase;
                }


                .student-fee strong {
                    color: #087454;

                    font-size: 20px;
                    font-weight: 800;
                }


                .view-student-btn {
                    width: 100%;
                    min-height: 43px;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;

                    margin-top: 15px;
                    padding: 11px 14px;

                    border-radius: 11px;

                    background:
                        linear-gradient(
                            135deg,
                            #087454,
                            #0a936a
                        );

                    color: #ffffff;

                    font-size: 13px;
                    font-weight: 800;
                    text-align: center;
                    text-decoration: none;

                    box-shadow:
                        0 8px 18px
                        rgba(8, 116, 84, 0.20);

                    transition:
                        transform 0.2s ease,
                        box-shadow 0.2s ease;
                }


                .view-student-btn:hover {
                    transform:
                        translateY(-1px);

                    box-shadow:
                        0 11px 23px
                        rgba(8, 116, 84, 0.28);
                }


                .view-student-btn.disabled {
                    cursor: not-allowed;
                    background: #94a3b8;
                    box-shadow: none;
                }


                /* Tablet */

                @media (max-width: 768px) {

                    .students-section {
                        padding: 38px 14px;
                    }

                    .students-grid {
                        grid-template-columns:
                            repeat(
                                2,
                                minmax(0, 1fr)
                            );

                        gap: 14px;
                    }

                }


                /* Phone: एक row में 2 cards */

                @media (max-width: 600px) {

                    .students-section {
                        padding: 30px 10px;
                    }

                    .students-heading {
                        margin-bottom: 20px;
                    }

                    .students-heading h2 {
                        margin-top: 9px;
                        font-size: 24px;
                    }

                    .students-heading p {
                        font-size: 12px;
                    }

                    .students-grid {
                        grid-template-columns:
                            repeat(
                                2,
                                minmax(0, 1fr)
                            );

                        gap: 10px;
                    }

                    .student-card {
                        border-radius: 14px;
                    }

                    .student-image-box {
                        height: 135px;
                    }

                    .student-status {
                        top: 7px;
                        right: 7px;

                        padding: 4px 7px;

                        font-size: 8px;
                    }

                    .student-name-overlay {
                        right: 9px;
                        bottom: 9px;
                        left: 9px;
                    }

                    .student-name-overlay h3 {
                        font-size: 14px;
                    }

                    .student-name-overlay span {
                        font-size: 8px;
                    }

                    .student-card-content {
                        padding: 10px;
                    }

                    .course-badge {
                        padding: 6px 7px;
                        font-size: 10px;
                    }

                    .student-info-list {
                        gap: 7px;
                        margin-top: 10px;
                    }

                    .student-info-row {
                        gap: 5px;
                        font-size: 10px;
                    }

                    .info-icon {
                        width: 22px;
                        height: 22px;
                        flex-basis: 22px;

                        border-radius: 6px;

                        font-size: 10px;
                    }

                    .student-card-footer {
                        margin-top: 10px;
                        padding-top: 9px;
                    }

                    .student-fee small {
                        font-size: 8px;
                    }

                    .student-fee strong {
                        font-size: 15px;
                    }

                    .view-student-btn {
                        min-height: 36px;

                        margin-top: 10px;
                        padding: 8px 5px;

                        border-radius: 8px;

                        font-size: 10px;
                    }

                }


                /* बहुत छोटा phone */

                @media (max-width: 360px) {

                    .students-section {
                        padding-right: 7px;
                        padding-left: 7px;
                    }

                    .students-grid {
                        gap: 7px;
                    }

                    .student-image-box {
                        height: 120px;
                    }

                    .student-card-content {
                        padding: 8px;
                    }

                }

            </style>


            <div class="students-container">

                <div class="students-heading">

                    <span class="students-heading-badge">
                        🎓 Student Community
                    </span>

                    <h2>
                        Our Students
                    </h2>

                    <p>
                        हमारे registered students की
                        जानकारी और course details देखें।
                    </p>

                </div>


                <div class="students-grid">
                    ${studentCards}
                </div>

            </div>

        </section>
    `;

}


module.exports = StudentSection;
