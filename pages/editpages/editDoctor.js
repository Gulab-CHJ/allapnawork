// // // // function EditDoctor(doctor = {}) {
// // // //     return `
// // // // <!DOCTYPE html>
// // // // <html lang="en">

// // // // <head>

// // // // <meta charset="UTF-8">
// // // // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // // // <title>Edit Doctor</title>

// // // // <link rel="stylesheet" href="/css/admin.css">

// // // // <style>

// // // // body{
// // // //     background:#f4f6f9;
// // // //     font-family:Arial,Helvetica,sans-serif;
// // // // }

// // // // .container{
// // // //     max-width:700px;
// // // //     margin:40px auto;
// // // // }

// // // // .card{
// // // //     background:#fff;
// // // //     padding:30px;
// // // //     border-radius:10px;
// // // //     box-shadow:0 5px 15px rgba(0,0,0,.1);
// // // // }

// // // // h2{
// // // //     text-align:center;
// // // //     margin-bottom:25px;
// // // // }

// // // // input,
// // // // textarea{
// // // //     width:100%;
// // // //     padding:12px;
// // // //     margin-bottom:15px;
// // // //     border:1px solid #ddd;
// // // //     border-radius:8px;
// // // //     font-size:15px;
// // // //     box-sizing:border-box;
// // // // }

// // // // textarea{
// // // //     resize:vertical;
// // // // }

// // // // .preview{
// // // //     text-align:center;
// // // //     margin-bottom:20px;
// // // // }

// // // // .preview img{
// // // //     width:120px;
// // // //     height:120px;
// // // //     border-radius:50%;
// // // //     object-fit:cover;
// // // //     border:3px solid #0d6efd;
// // // // }

// // // // .btn{
// // // //     width:100%;
// // // //     padding:14px;
// // // //     background:#0d6efd;
// // // //     color:#fff;
// // // //     border:none;
// // // //     border-radius:8px;
// // // //     font-size:16px;
// // // //     cursor:pointer;
// // // // }

// // // // .btn:hover{
// // // //     background:#0b5ed7;
// // // // }

// // // // .back{
// // // //     display:block;
// // // //     text-align:center;
// // // //     margin-top:20px;
// // // //     text-decoration:none;
// // // //     color:#0d6efd;
// // // //     font-weight:bold;
// // // // }

// // // // </style>

// // // // </head>

// // // // <body>

// // // // <div class="container">

// // // // <div class="card">

// // // // <h2>Edit Doctor</h2>

// // // // <form
// // // // action="/admin/edit-doctor/${doctor._id}"
// // // // method="POST"
// // // // enctype="multipart/form-data"
// // // // >

// // // // <div class="preview">

// // // // <img
// // // // src="${doctor.image || "/images/default-doctor.png"}"
// // // // alt="Doctor"
// // // // >

// // // // </div>

// // // // <input
// // // // type="text"
// // // // name="name"
// // // // placeholder="Doctor Name"
// // // // value="${doctor.name || ""}"
// // // // required
// // // // >

// // // // <input
// // // // type="text"
// // // // name="qualification"
// // // // placeholder="Qualification"
// // // // value="${doctor.degree || ""}"
// // // // required
// // // // >

// // // // <input
// // // // type="text"
// // // // name="speciality"
// // // // placeholder="Specialization"
// // // // value="${doctor.specialization || ""}"
// // // // required
// // // // >

// // // // <input
// // // // type="text"
// // // // name="experience"
// // // // placeholder="Experience"
// // // // value="${doctor.experience || ""}"
// // // // required
// // // // >

// // // // <input
// // // // type="text"
// // // // name="clinic"
// // // // placeholder="Hospital / Clinic"
// // // // value="${doctor.hospital || ""}"
// // // // required
// // // // >

// // // // <input
// // // // type="text"
// // // // name="phone"
// // // // placeholder="Phone"
// // // // value="${doctor.phone || ""}"
// // // // required
// // // // >

// // // // <input
// // // // type="email"
// // // // name="email"
// // // // placeholder="Email"
// // // // value="${doctor.email || ""}"
// // // // >

// // // // <input
// // // // type="password"
// // // // name="password"
// // // // placeholder="Password"
// // // // value="${doctor.password || ""}"
// // // // required
// // // // >

// // // // <textarea
// // // // name="description"
// // // // rows="4"
// // // // placeholder="Doctor Description"
// // // // >${doctor.description || ""}</textarea>

// // // // <input
// // // // type="text"
// // // // name="address"
// // // // placeholder="Address"
// // // // value="${doctor.address || ""}"
// // // // required
// // // // >

// // // // <label><b>Change Photo</b></label>

// // // // <input
// // // // type="file"
// // // // name="image"
// // // // accept="image/*"
// // // // >

// // // // <button
// // // // type="submit"
// // // // class="btn"
// // // // >
// // // // Update Doctor
// // // // </button>

// // // // </form>

// // // // <a
// // // // href="/admin/manage-doctors"
// // // // class="back"
// // // // >
// // // // ← Back to Manage Doctors
// // // // </a>

// // // // </div>

// // // // </div>

// // // // </body>

// // // // </html>
// // // // `;
// // // // }

// // // // module.exports = EditDoctor;

// // // <h3>Available Timing</h3>

// // // <select name="availableDay">

// // // <option ${doctor.availableDay=="Monday"?"selected":""}>
// // // Monday
// // // </option>

// // // <option ${doctor.availableDay=="Tuesday"?"selected":""}>
// // // Tuesday
// // // </option>

// // // <option ${doctor.availableDay=="Wednesday"?"selected":""}>
// // // Wednesday
// // // </option>

// // // <option ${doctor.availableDay=="Thursday"?"selected":""}>
// // // Thursday
// // // </option>

// // // <option ${doctor.availableDay=="Friday"?"selected":""}>
// // // Friday
// // // </option>

// // // <option ${doctor.availableDay=="Saturday"?"selected":""}>
// // // Saturday
// // // </option>

// // // <option ${doctor.availableDay=="Sunday"?"selected":""}>
// // // Sunday
// // // </option>

// // // </select>


// // // <input
// // // type="time"
// // // name="timeFrom"
// // // value="${doctor.timeFrom || ''}"
// // // >


// // // <input
// // // type="time"
// // // name="timeTo"
// // // value="${doctor.timeTo || ''}"
// // // >



// // // <h3>Consultation Fee</h3>


// // // <input
// // // type="number"
// // // name="fee"
// // // value="${doctor.fee || ''}"
// // // placeholder="Fee"
// // // >



// // // <select name="feeType">

// // // <option value="per_visit">
// // // Per Visit
// // // </option>

// // // <option value="per_month">
// // // Per Month
// // // </option>

// // // <option value="per_hour">
// // // Per Hour
// // // </option>

// // // </select>


// // function EditDoctor(doctor = {}) {

// // return `

// // <!DOCTYPE html>
// // <html lang="en">

// // <head>

// // <meta charset="UTF-8">

// // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // <title>Edit Doctor</title>


// // <link rel="stylesheet" href="/css/admin.css">


// // <style>

// // body{

// // background:#f4f6f9;

// // font-family:Arial,Helvetica,sans-serif;

// // }


// // .container{

// // max-width:700px;

// // margin:40px auto;

// // padding:15px;

// // }


// // .card{

// // background:white;

// // padding:30px;

// // border-radius:12px;

// // box-shadow:0 5px 20px rgba(0,0,0,.12);

// // }


// // h2{

// // text-align:center;

// // margin-bottom:25px;

// // color:#0d6efd;

// // }


// // input,
// // textarea,
// // select{


// // width:100%;

// // padding:12px;

// // margin-bottom:15px;

// // border:1px solid #ddd;

// // border-radius:8px;

// // font-size:15px;

// // box-sizing:border-box;

// // }


// // textarea{

// // resize:none;

// // }


// // label{

// // display:block;

// // margin-bottom:8px;

// // font-weight:bold;

// // color:#333;

// // }



// // .preview{

// // text-align:center;

// // margin-bottom:20px;

// // }



// // .preview img{

// // width:120px;

// // height:120px;

// // border-radius:50%;

// // object-fit:cover;

// // border:3px solid #0d6efd;

// // }



// // .time-box{

// // display:flex;

// // gap:10px;

// // }


// // .time-box input{

// // width:50%;

// // }



// // .btn{

// // width:100%;

// // padding:14px;

// // background:#0d6efd;

// // color:white;

// // border:none;

// // border-radius:8px;

// // font-size:16px;

// // cursor:pointer;

// // }



// // .btn:hover{

// // background:#084298;

// // }



// // .back{

// // display:block;

// // text-align:center;

// // margin-top:20px;

// // text-decoration:none;

// // color:#0d6efd;

// // font-weight:bold;

// // }



// // @media(max-width:600px){


// // .card{

// // padding:20px;

// // }


// // .time-box{

// // flex-direction:column;

// // }


// // .time-box input{

// // width:100%;

// // }


// // }


// // </style>


// // </head>


// // <body>



// // <div class="container">


// // <div class="card">


// // <h2>Edit Doctor</h2>



// // <form

// // action="/admin/edit-doctor/${doctor._id}"

// // method="POST"

// // enctype="multipart/form-data"

// // >



// // <div class="preview">


// // <img

// // src="${doctor.image || "/images/default-doctor.png"}"

// // >


// // </div>




// // <label>
// // Doctor Name
// // </label>


// // <input

// // type="text"

// // name="name"

// // value="${doctor.name || ""}"

// // required

// // >




// // <label>
// // Qualification
// // </label>


// // <input

// // type="text"

// // name="qualification"

// // value="${doctor.degree || ""}"

// // required

// // >




// // <label>
// // Specialization
// // </label>


// // <input

// // type="text"

// // name="speciality"

// // value="${doctor.specialization || ""}"

// // required

// // >




// // <label>
// // Experience
// // </label>


// // <input

// // type="text"

// // name="experience"

// // value="${doctor.experience || ""}"

// // required

// // >




// // <label>
// // Hospital / Clinic
// // </label>


// // <input

// // type="text"

// // name="clinic"

// // value="${doctor.hospital || ""}"

// // required

// // >




// // <label>
// // Phone
// // </label>


// // <input

// // type="text"

// // name="phone"

// // value="${doctor.phone || ""}"

// // required

// // >




// // <label>
// // Email
// // </label>


// // <input

// // type="email"

// // name="email"

// // value="${doctor.email || ""}"

// // >




// // <label>
// // Password
// // </label>


// // <input

// // type="password"

// // name="password"

// // value="${doctor.password || ""}"

// // required

// // >




// // <label>
// // Address
// // </label>


// // <input

// // type="text"

// // name="address"

// // value="${doctor.address || ""}"

// // required

// // >




// // <label>
// // Description
// // </label>


// // <textarea

// // name="description"

// // rows="4"

// // >${doctor.description || ""}</textarea>





// // <label>
// // Available Day
// // </label>


// // <select name="availableDay">


// // <option value="Monday"
// // ${doctor.availableDay=="Monday"?"selected":""}>
// // Monday
// // </option>


// // <option value="Tuesday"
// // ${doctor.availableDay=="Tuesday"?"selected":""}>
// // Tuesday
// // </option>


// // <option value="Wednesday"
// // ${doctor.availableDay=="Wednesday"?"selected":""}>
// // Wednesday
// // </option>


// // <option value="Thursday"
// // ${doctor.availableDay=="Thursday"?"selected":""}>
// // Thursday
// // </option>


// // <option value="Friday"
// // ${doctor.availableDay=="Friday"?"selected":""}>
// // Friday
// // </option>


// // <option value="Saturday"
// // ${doctor.availableDay=="Saturday"?"selected":""}>
// // Saturday
// // </option>


// // <option value="Sunday"
// // ${doctor.availableDay=="Sunday"?"selected":""}>
// // Sunday
// // </option>


// // </select>





// // <label>
// // Available Time
// // </label>


// // <div class="time-box">


// // <input

// // type="time"

// // name="timeFrom"

// // value="${doctor.timeFrom || ""}"

// // >



// // <input

// // type="time"

// // name="timeTo"

// // value="${doctor.timeTo || ""}"

// // >


// // </div>




// // <label>
// // Consultation Fee
// // </label>


// // <input

// // type="number"

// // name="fee"

// // placeholder="Fee"

// // value="${doctor.fee || ""}"

// // >




// // <label>
// // Fee Type
// // </label>


// // <select name="feeType">


// // <option value="per_visit"
// // ${doctor.feeType=="per_visit"?"selected":""}>
// // Per Visit
// // </option>


// // <option value="per_hour"
// // ${doctor.feeType=="per_hour"?"selected":""}>
// // Per Hour
// // </option>


// // <option value="per_day"
// // ${doctor.feeType=="per_day"?"selected":""}>
// // Per Day
// // </option>


// // <option value="per_week"
// // ${doctor.feeType=="per_week"?"selected":""}>
// // Per Week
// // </option>


// // <option value="half_month"
// // ${doctor.feeType=="half_month"?"selected":""}>
// // Half Month (15 Days)
// // </option>


// // <option value="per_month"
// // ${doctor.feeType=="per_month"?"selected":""}>
// // Per Month
// // </option>


// // </select>

// // <label>
// // Change Photo
// // </label>


// // <input

// // type="file"

// // name="image"

// // accept="image/*"

// // >




// // <button

// // type="submit"

// // class="btn">

// // Update Doctor

// // </button>




// // </form>



// // <a

// // href="/admin/manage-doctors"

// // class="back">

// // ← Back To Manage Doctors

// // </a>



// // </div>


// // </div>


// // </body>

// // </html>


// // `;

// // }


// // module.exports = EditDoctor;

// function EditDoctor(doctor = {}) {

// return `

// <!DOCTYPE html>
// <html lang="en">

// <head>

// <meta charset="UTF-8">

// <meta name="viewport" content="width=device-width, initial-scale=1.0">

// <title>Edit Doctor</title>

// <link rel="stylesheet" href="/css/admin.css">


// <style>

// body{
//     background:#f4f6f9;
//     font-family:Arial,Helvetica,sans-serif;
// }


// .container{

//     max-width:700px;
//     margin:40px auto;
//     padding:15px;

// }


// .card{

//     background:white;
//     padding:30px;
//     border-radius:12px;
//     box-shadow:0 5px 20px rgba(0,0,0,.12);

// }


// h2{

//     text-align:center;
//     color:#0d6efd;
//     margin-bottom:25px;

// }


// input,
// textarea,
// select{

//     width:100%;
//     padding:12px;
//     margin-bottom:15px;
//     border:1px solid #ddd;
//     border-radius:8px;
//     box-sizing:border-box;
//     font-size:15px;

// }


// label{

//     display:block;
//     font-weight:bold;
//     margin-bottom:8px;

// }


// .preview{

//     text-align:center;
//     margin-bottom:20px;

// }


// .preview img{

//     width:120px;
//     height:120px;
//     border-radius:50%;
//     object-fit:cover;
//     border:3px solid #0d6efd;

// }


// .btn{

//     width:100%;
//     padding:14px;
//     background:#0d6efd;
//     color:white;
//     border:none;
//     border-radius:8px;
//     font-size:16px;
//     cursor:pointer;

// }


// .back{

//     display:block;
//     text-align:center;
//     margin-top:20px;
//     text-decoration:none;
//     color:#0d6efd;

// }


// </style>


// </head>


// <body>


// <div class="container">


// <div class="card">


// <h2>Edit Doctor</h2>


// <form

// action="/admin/edit-doctor/${doctor._id}"

// method="POST"

// enctype="multipart/form-data"

// >


// <div class="preview">

// <img src="${doctor.image || "/images/default-doctor.png"}">

// </div>

// <label>
// Doctor Name
// </label>

// <input
// type="text"
// name="name"
// value="${doctor.name || ""}"
// required
// >


// <label>
// Qualification
// </label>

// <input
// type="text"
// name="qualification"
// value="${doctor.degree || ""}"
// required
// >


// <label>
// Specialization
// </label>

// <input
// type="text"
// name="speciality"
// value="${doctor.specialization || ""}"
// required
// >


// <label>
// Experience (Years)
// </label>

// <input
// type="number"
// name="experience"
// value="${doctor.experience || ""}"
// required
// >


// <label>
// Hospital / Clinic
// </label>

// <input
// type="text"
// name="clinic"
// value="${doctor.hospital || ""}"
// required
// >


// <label>
// Phone Number
// </label>

// <input
// type="text"
// name="phone"
// value="${doctor.phone || ""}"
// required
// >


// <label>
// Email
// </label>

// <input
// type="email"
// name="email"
// value="${doctor.email || ""}"
// >


// <label>
// Password
// </label>

// <input
// type="password"
// name="password"
// value="${doctor.password || ""}"
// required
// >


// <label>
// Address
// </label>

// <input
// type="text"
// name="address"
// value="${doctor.address || ""}"
// required
// >


// <label>
// Doctor Description
// </label>

// <textarea
// name="description"
// rows="4"
// >${doctor.description || ""}</textarea>

// <!-- ================= DOCTOR AVAILABILITY ================= -->


// <h3>
// Available Timing
// </h3>


// <label>
// Available Day
// </label>


// <select name="availableDay" required>


// <option value="">
// Select Day
// </option>


// <option value="Monday"
// ${doctor.availableDay=="Monday"?"selected":""}>
// Monday
// </option>


// <option value="Tuesday"
// ${doctor.availableDay=="Tuesday"?"selected":""}>
// Tuesday
// </option>


// <option value="Wednesday"
// ${doctor.availableDay=="Wednesday"?"selected":""}>
// Wednesday
// </option>


// <option value="Thursday"
// ${doctor.availableDay=="Thursday"?"selected":""}>
// Thursday
// </option>


// <option value="Friday"
// ${doctor.availableDay=="Friday"?"selected":""}>
// Friday
// </option>


// <option value="Saturday"
// ${doctor.availableDay=="Saturday"?"selected":""}>
// Saturday
// </option>


// <option value="Sunday"
// ${doctor.availableDay=="Sunday"?"selected":""}>
// Sunday
// </option>


// </select>




// <label>
// Available From
// </label>


// <input

// type="time"

// name="timeFrom"

// value="${doctor.timeFrom || ""}"

// required

// >




// <label>
// Available To
// </label>


// <input

// type="time"

// name="timeTo"

// value="${doctor.timeTo || ""}"

// required

// >





// <!-- ================= APPOINTMENT SLOT ================= -->


// <h3>
// Appointment Settings
// </h3>


// <label>
// Patient Appointment Duration
// </label>


// <select name="slotDuration" required>


// <option value="5"
// ${doctor.slotDuration==5?"selected":""}>
// 5 Minutes
// </option>


// <option value="10"
// ${doctor.slotDuration==10?"selected":""}>
// 10 Minutes
// </option>


// <option value="15"
// ${doctor.slotDuration==15?"selected":""}>
// 15 Minutes
// </option>


// <option value="20"
// ${doctor.slotDuration==20?"selected":""}>
// 20 Minutes
// </option>


// <option value="25"
// ${doctor.slotDuration==25?"selected":""}>
// 25 Minutes
// </option>


// <option value="30"
// ${doctor.slotDuration==30?"selected":""}>
// 30 Minutes
// </option>


// <option value="45"
// ${doctor.slotDuration==45?"selected":""}>
// 45 Minutes
// </option>


// <option value="60"
// ${doctor.slotDuration==60?"selected":""}>
// 60 Minutes
// </option>


// </select>



// <!-- ================= CONSULTATION FEE ================= -->


// <h3>
// Consultation Fee
// </h3>


// <label>
// Fee Amount (₹)
// </label>


// <input

// type="number"

// name="fee"

// placeholder="Consultation Fee"

// value="${doctor.fee || ""}"

// required

// >




// <label>
// Fee Type
// </label>


// <select name="feeType" required>


// <option value="per_visit"
// ${doctor.feeType=="per_visit"?"selected":""}>
// Per Visit
// </option>



// <option value="per_hour"
// ${doctor.feeType=="per_hour"?"selected":""}>
// Per Hour
// </option>



// <option value="per_day"
// ${doctor.feeType=="per_day"?"selected":""}>
// Per Day
// </option>



// <option value="per_week"
// ${doctor.feeType=="per_week"?"selected":""}>
// Per Week
// </option>



// <option value="half_month"
// ${doctor.feeType=="half_month"?"selected":""}>
// Half Month (15 Days)
// </option>



// <option value="per_month"
// ${doctor.feeType=="per_month"?"selected":""}>
// Per Month
// </option>


// </select>





// <!-- ================= CHANGE PHOTO ================= -->


// <h3>
// Doctor Photo
// </h3>


// <label>
// Change Photo
// </label>


// <input

// type="file"

// name="image"

// accept="image/*"

// >




// <br><br>



// <button

// type="submit"

// class="btn">

// Update Doctor

// </button>



// </form>





// <a

// href="/admin/manage-doctors"

// class="back">

// ← Back To Manage Doctors

// </a>




// </div>

// </div>


// </body>

// </html>


// `;

// }


// module.exports = EditDoctor;


function EditDoctor(doctor = {}) {

return `

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>Edit Doctor</title>

<link
    rel="stylesheet"
    href="/css/admin.css"
>


<style>

/* =========================================
   PAGE
========================================= */

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background: #f1f5f9;
    font-family:
        Arial,
        Helvetica,
        sans-serif;
    color: #0f172a;
}


/* =========================================
   MAIN CONTAINER
========================================= */

.edit-doctor-container {

    width: 100%;
    max-width: 900px;

    margin: 35px auto;

    padding: 15px;
}


/* =========================================
   CARD
========================================= */

.edit-doctor-card {

    background: #ffffff;

    border-radius: 20px;

    padding: 32px;

    box-shadow:
        0 10px 35px rgba(15, 23, 42, 0.08);

    border: 1px solid #e2e8f0;
}


/* =========================================
   HEADER
========================================= */

.edit-doctor-header {

    text-align: center;

    margin-bottom: 30px;
}

.edit-doctor-header h2 {

    margin: 0;

    font-size: 28px;

    font-weight: 700;

    color: #0f172a;
}

.edit-doctor-header p {

    margin: 8px 0 0;

    color: #64748b;

    font-size: 14px;
}


/* =========================================
   PROFILE IMAGE
========================================= */

.doctor-preview {

    text-align: center;

    margin-bottom: 28px;
}

.doctor-preview img {

    width: 125px;

    height: 125px;

    border-radius: 50%;

    object-fit: cover;

    border: 4px solid #2563eb;

    padding: 3px;

    background: #ffffff;

    box-shadow:
        0 8px 25px rgba(37, 99, 235, 0.18);
}


/* =========================================
   FORM GRID
========================================= */

.doctor-form-grid {

    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 18px;
}


/* =========================================
   FORM GROUP
========================================= */

.form-group {

    display: flex;

    flex-direction: column;
}

.form-group.full {

    grid-column: 1 / -1;
}


/* =========================================
   LABEL
========================================= */

.form-group label {

    margin-bottom: 7px;

    font-size: 14px;

    font-weight: 600;

    color: #334155;
}


/* =========================================
   INPUT / SELECT / TEXTAREA
========================================= */

.form-group input,
.form-group select,
.form-group textarea {

    width: 100%;

    padding: 13px 14px;

    border: 1px solid #cbd5e1;

    border-radius: 11px;

    background: #f8fafc;

    color: #0f172a;

    font-size: 14px;

    outline: none;

    transition: all 0.2s ease;
}


.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {

    background: #ffffff;

    border-color: #2563eb;

    box-shadow:
        0 0 0 3px
        rgba(37, 99, 235, 0.10);
}


.form-group textarea {

    min-height: 115px;

    resize: vertical;

    line-height: 1.5;
}


/* =========================================
   TIMING SECTION
========================================= */

.form-section {

    grid-column: 1 / -1;

    margin-top: 5px;

    padding: 22px;

    border-radius: 15px;

    background: #f8fafc;

    border: 1px solid #e2e8f0;
}


.section-title {

    display: flex;

    align-items: center;

    gap: 9px;

    margin: 0 0 20px;

    font-size: 18px;

    font-weight: 700;

    color: #0f172a;
}


/* =========================================
   TIMING GRID
========================================= */

.timing-grid {

    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 16px;
}


/* =========================================
   APPOINTMENT SECTION
========================================= */

.appointment-section {

    grid-column: 1 / -1;

    margin-top: 0;

    padding: 22px;

    border-radius: 15px;

    background: #f8fafc;

    border: 1px solid #e2e8f0;
}


.appointment-grid {

    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 16px;
}


.help-text {

    display: block;

    margin-top: 8px;

    color: #64748b;

    font-size: 12px;

    line-height: 1.5;
}


/* =========================================
   PHOTO SECTION
========================================= */

.photo-section {

    grid-column: 1 / -1;

    padding: 20px;

    border-radius: 15px;

    background: #f8fafc;

    border: 1px solid #e2e8f0;
}


.photo-section input[type="file"] {

    background: #ffffff;

    cursor: pointer;

    padding: 10px;
}


/* =========================================
   BUTTON
========================================= */

.update-doctor-btn {

    grid-column: 1 / -1;

    width: 100%;

    padding: 15px;

    margin-top: 5px;

    border: none;

    border-radius: 12px;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #1d4ed8
        );

    color: #ffffff;

    font-size: 16px;

    font-weight: 700;

    cursor: pointer;

    transition: all 0.2s ease;
}


.update-doctor-btn:hover {

    transform: translateY(-1px);

    box-shadow:
        0 10px 25px
        rgba(37, 99, 235, 0.25);
}


.update-doctor-btn:active {

    transform: translateY(0);
}


/* =========================================
   BACK BUTTON
========================================= */

.back-link {

    display: block;

    text-align: center;

    margin-top: 22px;

    padding: 12px;

    text-decoration: none;

    color: #2563eb;

    font-size: 14px;

    font-weight: 600;

    border-radius: 10px;

    transition: 0.2s ease;
}


.back-link:hover {

    background: #eff6ff;

    color: #1d4ed8;
}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {

    .edit-doctor-container {

        margin: 10px auto;

        padding: 10px;
    }


    .edit-doctor-card {

        padding: 20px;

        border-radius: 16px;
    }


    .edit-doctor-header h2 {

        font-size: 23px;
    }


    .doctor-form-grid {

        grid-template-columns: 1fr;

        gap: 15px;
    }


    .form-group.full {

        grid-column: 1;
    }


    .form-section,
    .appointment-section,
    .photo-section {

        grid-column: 1;

        padding: 17px;
    }


    .timing-grid {

        grid-template-columns: 1fr;

        gap: 14px;
    }


    .appointment-grid {

        grid-template-columns: 1fr;

        gap: 14px;
    }


    .update-doctor-btn {

        grid-column: 1;
    }


    .back-link {

        margin-bottom: 10px;
    }

}


/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 400px) {

    .edit-doctor-card {

        padding: 15px;
    }


    .doctor-preview img {

        width: 105px;

        height: 105px;
    }


    .form-group input,
    .form-group select,
    .form-group textarea {

        font-size: 13px;

        padding: 12px;
    }

}

</style>

</head>


<body>


<div class="edit-doctor-container">


<div class="edit-doctor-card">


<!-- =====================================
     HEADER
===================================== -->

<div class="edit-doctor-header">

    <h2>
        👨‍⚕️ Edit Doctor
    </h2>

    <p>
        Update doctor profile and appointment details
    </p>

</div>


<!-- =====================================
     FORM
===================================== -->

<form

    action="/admin/edit-doctor/${doctor._id}"

    method="POST"

    enctype="multipart/form-data"
>


<div class="doctor-form-grid">


<!-- =====================================
     PROFILE IMAGE
===================================== -->

<div class="doctor-preview">

    <img

        src="${
            doctor.image ||
            "/images/default-doctor.png"
        }"

        alt="Doctor Profile"
    >

</div>


<!-- =====================================
     DOCTOR NAME
===================================== -->

<div class="form-group">

    <label>
        Doctor Name
    </label>

    <input

        type="text"

        name="name"

        placeholder="Doctor Name"

        value="${doctor.name || ""}"

        required
    >

</div>


<!-- =====================================
     QUALIFICATION
===================================== -->

<div class="form-group">

    <label>
        Qualification
    </label>

    <input

        type="text"

        name="qualification"

        placeholder="Qualification (MBBS, MD...)"

        value="${doctor.degree || ""}"

        required
    >

</div>


<!-- =====================================
     SPECIALIZATION
===================================== -->

<div class="form-group">

    <label>
        Specialization
    </label>

    <input

        type="text"

        name="speciality"

        placeholder="General Physician"

        value="${doctor.specialization || ""}"

        required
    >

</div>


<!-- =====================================
     EXPERIENCE
===================================== -->

<div class="form-group">

    <label>
        Experience (Years)
    </label>

    <input

        type="number"

        name="experience"

        placeholder="Experience in Years"

        min="0"

        value="${doctor.experience || ""}"

        required
    >

</div>


<!-- =====================================
     CLINIC
===================================== -->

<div class="form-group">

    <label>
        Hospital / Clinic
    </label>

    <input

        type="text"

        name="clinic"

        placeholder="Hospital / Clinic Name"

        value="${doctor.hospital || ""}"

        required
    >

</div>


<!-- =====================================
     PHONE
===================================== -->

<div class="form-group">

    <label>
        Phone Number
    </label>

    <input

        type="text"

        name="phone"

        placeholder="Phone Number"

        value="${doctor.phone || ""}"

        required
    >

</div>


<!-- =====================================
     EMAIL
===================================== -->

<div class="form-group">

    <label>
        Email Address
    </label>

    <input

        type="email"

        name="email"

        placeholder="Email Address"

        value="${doctor.email || ""}"
    >

</div>


<!-- =====================================
     PASSWORD
===================================== -->

<div class="form-group">

    <label>
        Login Password
    </label>

    <input

        type="password"

        name="password"

        placeholder="Login Password"

        value="${doctor.password || ""}"

        required
    >

</div>


<!-- =====================================
     ADDRESS
===================================== -->

<div class="form-group full">

    <label>
        Clinic Address
    </label>

    <input

        type="text"

        name="address"

        placeholder="Full Clinic Address"

        value="${doctor.address || ""}"

        required
    >

</div>


<!-- =====================================
     DESCRIPTION
===================================== -->

<div class="form-group full">

    <label>
        Doctor Description
    </label>

    <textarea

        name="description"

        rows="4"

        placeholder="Doctor Description"
    >${doctor.description || ""}</textarea>

</div>


<!-- =====================================
     AVAILABLE TIMING
===================================== -->

<div class="form-section">


    <h3 class="section-title">

        🕐 Available Timing

    </h3>


    <div class="timing-grid">


        <!-- AVAILABLE DAY -->

        <div class="form-group">

            <label>
                Available Day
            </label>

            <select
                name="availableDay"
                required
            >

                <option value="">
                    Select Day
                </option>


                <option
                    value="Every Day"
                    ${
                        doctor.availableDay ==
                        "Every Day"
                            ? "selected"
                            : ""
                    }
                >
                    Every Day
                </option>


                <option
                    value="Monday"
                    ${
                        doctor.availableDay ==
                        "Monday"
                            ? "selected"
                            : ""
                    }
                >
                    Monday
                </option>


                <option
                    value="Tuesday"
                    ${
                        doctor.availableDay ==
                        "Tuesday"
                            ? "selected"
                            : ""
                    }
                >
                    Tuesday
                </option>


                <option
                    value="Wednesday"
                    ${
                        doctor.availableDay ==
                        "Wednesday"
                            ? "selected"
                            : ""
                    }
                >
                    Wednesday
                </option>


                <option
                    value="Thursday"
                    ${
                        doctor.availableDay ==
                        "Thursday"
                            ? "selected"
                            : ""
                    }
                >
                    Thursday
                </option>


                <option
                    value="Friday"
                    ${
                        doctor.availableDay ==
                        "Friday"
                            ? "selected"
                            : ""
                    }
                >
                    Friday
                </option>


                <option
                    value="Saturday"
                    ${
                        doctor.availableDay ==
                        "Saturday"
                            ? "selected"
                            : ""
                    }
                >
                    Saturday
                </option>


                <option
                    value="Sunday"
                    ${
                        doctor.availableDay ==
                        "Sunday"
                            ? "selected"
                            : ""
                    }
                >
                    Sunday
                </option>

            </select>

        </div>


        <!-- AVAILABLE FROM -->

        <div class="form-group">

            <label>
                Available From
            </label>

            <input

                type="time"

                name="timeFrom"

                value="${doctor.timeFrom || ""}"

                required
            >

        </div>


        <!-- AVAILABLE TO -->

        <div class="form-group">

            <label>
                Available To
            </label>

            <input

                type="time"

                name="timeTo"

                value="${doctor.timeTo || ""}"

                required
            >

        </div>


    </div>


    <small class="help-text">

        Select the day and clinic consultation timing.
        If "Every Day" is selected, the schedule can be used
        for all days.

    </small>

</div>


<!-- =====================================
     APPOINTMENT SETTINGS
===================================== -->

<div class="appointment-section">


    <h3 class="section-title">

        ⏱️ Appointment Settings

    </h3>


    <div class="appointment-grid">


        <!-- SLOT DURATION -->

        <div class="form-group">

            <label>
                Approx Time Per Patient
            </label>

            <select
                name="slotDuration"
                required
            >

                <option
                    value="5"
                    ${
                        Number(doctor.slotDuration) === 5
                            ? "selected"
                            : ""
                    }
                >
                    5 Minutes
                </option>


                <option
                    value="10"
                    ${
                        Number(doctor.slotDuration) === 10
                            ? "selected"
                            : ""
                    }
                >
                    10 Minutes
                </option>


                <option
                    value="15"
                    ${
                        Number(doctor.slotDuration) === 15
                            ? "selected"
                            : ""
                    }
                >
                    15 Minutes
                </option>


                <option
                    value="20"
                    ${
                        Number(doctor.slotDuration) === 20
                            ? "selected"
                            : ""
                    }
                >
                    20 Minutes
                </option>


                <option
                    value="25"
                    ${
                        Number(doctor.slotDuration) === 25
                            ? "selected"
                            : ""
                    }
                >
                    25 Minutes
                </option>


                <option
                    value="30"
                    ${
                        Number(doctor.slotDuration) === 30
                            ? "selected"
                            : ""
                    }
                >
                    30 Minutes
                </option>


                <option
                    value="45"
                    ${
                        Number(doctor.slotDuration) === 45
                            ? "selected"
                            : ""
                    }
                >
                    45 Minutes
                </option>


                <option
                    value="60"
                    ${
                        Number(doctor.slotDuration) === 60
                            ? "selected"
                            : ""
                    }
                >
                    60 Minutes
                </option>

            </select>


            <small class="help-text">

                Appointment time slots will be generated
                automatically according to this duration.

            </small>

        </div>


        <!-- CONSULTATION FEE -->

        <div class="form-group">

            <label>
                Consultation Fee (₹)
            </label>

            <input

                type="number"

                name="fee"

                placeholder="Consultation Fee"

                min="0"

                value="${doctor.fee || ""}"

                required
            >

        </div>


        <!-- FEE TYPE -->

        <div class="form-group">

            <label>
                Fee Type
            </label>

            <select
                name="feeType"
                required
            >


                <option
                    value="per_visit"
                    ${
                        doctor.feeType ==
                        "per_visit"
                            ? "selected"
                            : ""
                    }
                >
                    Per Visit
                </option>


                <option
                    value="per_hour"
                    ${
                        doctor.feeType ==
                        "per_hour"
                            ? "selected"
                            : ""
                    }
                >
                    Per Hour
                </option>


                <option
                    value="per_day"
                    ${
                        doctor.feeType ==
                        "per_day"
                            ? "selected"
                            : ""
                    }
                >
                    Per Day
                </option>


                <option
                    value="per_week"
                    ${
                        doctor.feeType ==
                        "per_week"
                            ? "selected"
                            : ""
                    }
                >
                    Per Week
                </option>


                <option
                    value="half_month"
                    ${
                        doctor.feeType ==
                        "half_month"
                            ? "selected"
                            : ""
                    }
                >
                    Half Month (15 Days)
                </option>


                <option
                    value="per_month"
                    ${
                        doctor.feeType ==
                        "per_month"
                            ? "selected"
                            : ""
                    }
                >
                    Per Month
                </option>


            </select>

        </div>


    </div>

</div>


<!-- =====================================
     CHANGE PHOTO
===================================== -->

<div class="photo-section">


    <h3 class="section-title">

        📷 Doctor Photo

    </h3>


    <div class="form-group">

        <label>
            Change Photo
        </label>

        <input

            type="file"

            name="image"

            accept="image/*"
        >


        <small class="help-text">

            Leave this empty if you want to keep
            the current doctor photo.

        </small>

    </div>

</div>


<!-- =====================================
     UPDATE BUTTON
===================================== -->

<button

    type="submit"

    class="update-doctor-btn"
>

    💾 Update Doctor

</button>


</div>


</form>


<!-- =====================================
     BACK LINK
===================================== -->

<a

    href="/admin/manage-doctors"

    class="back-link"
>

    ← Back To Manage Doctors

</a>


</div>

</div>


</body>

</html>

`;

}


module.exports = EditDoctor;
