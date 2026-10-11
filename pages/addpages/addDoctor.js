// // // // // // // function AddDoctor() {
// // // // // // //     return `
// // // // // // // <!DOCTYPE html>
// // // // // // // <html lang="en">
// // // // // // // <head>

// // // // // // // <meta charset="UTF-8">
// // // // // // // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // // // // // // <title>Add Doctor</title>

// // // // // // // <link rel="stylesheet" href="/css/admin.css">

// // // // // // // </head>

// // // // // // // <body>

// // // // // // // <div class="login-container">

// // // // // // // <div class="login-card">

// // // // // // // <h2>Add Doctor</h2>

// // // // // // // <form action="/admin/add-doctor" method="POST" enctype="multipart/form-data">

// // // // // // // <input
// // // // // // // type="text"
// // // // // // // name="name"
// // // // // // // placeholder="Doctor Name"
// // // // // // // required
// // // // // // // >

// // // // // // // <input
// // // // // // // type="text"
// // // // // // // name="qualification"
// // // // // // // placeholder="Qualification (MBBS, MD...)"
// // // // // // // required
// // // // // // // >

// // // // // // // <input
// // // // // // // type="text"
// // // // // // // name="speciality"
// // // // // // // placeholder="Specialization"
// // // // // // // required
// // // // // // // >

// // // // // // // <input
// // // // // // // type="text"
// // // // // // // name="experience"
// // // // // // // placeholder="Experience"
// // // // // // // required
// // // // // // // >

// // // // // // // <input
// // // // // // // type="text"
// // // // // // // name="clinic"
// // // // // // // placeholder="Hospital / Clinic"
// // // // // // // required
// // // // // // // >

// // // // // // // <input
// // // // // // // type="text"
// // // // // // // name="phone"
// // // // // // // placeholder="Phone Number"
// // // // // // // required
// // // // // // // >

// // // // // // // <input
// // // // // // // type="email"
// // // // // // // name="email"
// // // // // // // placeholder="Email"
// // // // // // // >

// // // // // // // <input
// // // // // // // type="password"
// // // // // // // name="password"
// // // // // // // placeholder="Login Password"
// // // // // // // required
// // // // // // // >

// // // // // // // <textarea
// // // // // // // name="description"
// // // // // // // placeholder="Doctor Description"
// // // // // // // rows="4"
// // // // // // // ></textarea>

// // // // // // // <input
// // // // // // // type="text"
// // // // // // // name="address"
// // // // // // // placeholder="Address"
// // // // // // // required
// // // // // // // >

// // // // // // // <input
// // // // // // // type="file"
// // // // // // // name="image"
// // // // // // // accept="image/*"
// // // // // // // required
// // // // // // // >

// // // // // // // <button type="submit">
// // // // // // // Save Doctor
// // // // // // // </button>

// // // // // // // </form>

// // // // // // // <br>

// // // // // // // <a href="/admin/manage-doctors">
// // // // // // // Manage Doctors
// // // // // // // </a>

// // // // // // // </div>

// // // // // // // </div>

// // // // // // // </body>

// // // // // // // </html>
// // // // // // // `;
// // // // // // // }

// // // // // // // module.exports = AddDoctor;

// // // // // // function AddDoctor() {
// // // // // //     return `
// // // // // // <!DOCTYPE html>
// // // // // // <html lang="en">
// // // // // // <head>

// // // // // // <meta charset="UTF-8">
// // // // // // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // // // // // <title>Add Doctor</title>

// // // // // // <link rel="stylesheet" href="/css/admin.css">

// // // // // // </head>

// // // // // // <body>


// // // // // // <div class="login-container">


// // // // // // <div class="login-card">


// // // // // // <h2>Add Doctor</h2>


// // // // // // <form action="/admin/add-doctor" method="POST" enctype="multipart/form-data">


// // // // // // <input
// // // // // // type="text"
// // // // // // name="name"
// // // // // // placeholder="Doctor Name"
// // // // // // required
// // // // // // >


// // // // // // <input
// // // // // // type="text"
// // // // // // name="qualification"
// // // // // // placeholder="Qualification (MBBS, MD...)"
// // // // // // required
// // // // // // >


// // // // // // <input
// // // // // // type="text"
// // // // // // name="speciality"
// // // // // // placeholder="Specialization"
// // // // // // required
// // // // // // >


// // // // // // <input
// // // // // // type="text"
// // // // // // name="experience"
// // // // // // placeholder="Experience"
// // // // // // required
// // // // // // >


// // // // // // <input
// // // // // // type="text"
// // // // // // name="clinic"
// // // // // // placeholder="Hospital / Clinic"
// // // // // // required
// // // // // // >


// // // // // // <input
// // // // // // type="text"
// // // // // // name="phone"
// // // // // // placeholder="Phone Number"
// // // // // // required
// // // // // // >


// // // // // // <input
// // // // // // type="email"
// // // // // // name="email"
// // // // // // placeholder="Email"
// // // // // // >


// // // // // // <input
// // // // // // type="password"
// // // // // // name="password"
// // // // // // placeholder="Login Password"
// // // // // // required
// // // // // // >



// // // // // // <textarea
// // // // // // name="description"
// // // // // // placeholder="Doctor Description"
// // // // // // rows="4"
// // // // // // ></textarea>



// // // // // // <input
// // // // // // type="text"
// // // // // // name="address"
// // // // // // placeholder="Address"
// // // // // // required
// // // // // // >




// // // // // // <!-- ================= DOCTOR TIMING ================= -->


// // // // // // <h3>Available Timing</h3>


// // // // // // <label>
// // // // // // Available Day
// // // // // // </label>


// // // // // // <select name="availableDay" required>

// // // // // // <option value="">
// // // // // // Select Day
// // // // // // </option>

// // // // // // <option>Monday</option>

// // // // // // <option>Tuesday</option>

// // // // // // <option>Wednesday</option>

// // // // // // <option>Thursday</option>

// // // // // // <option>Friday</option>

// // // // // // <option>Saturday</option>

// // // // // // <option>Sunday</option>

// // // // // // </select>




// // // // // // <label>
// // // // // // Available From
// // // // // // </label>


// // // // // // <input
// // // // // // type="time"
// // // // // // name="timeFrom"
// // // // // // required
// // // // // // >



// // // // // // <label>
// // // // // // Available To
// // // // // // </label>


// // // // // // <input
// // // // // // type="time"
// // // // // // name="timeTo"
// // // // // // required
// // // // // // >




// // // // // // <!-- ================= FEE ================= -->


// // // // // // <h3>Consultation Fee</h3>


// // // // // // <input
// // // // // // type="number"
// // // // // // name="fee"
// // // // // // placeholder="Consultation Fee"
// // // // // // required
// // // // // // >



// // // // // // <select name="feeType" required>

// // // // // // <option value="">
// // // // // // Fee Type
// // // // // // </option>

// // // // // // <option value="per_visit">
// // // // // // Per Visit
// // // // // // </option>

// // // // // // <option value="per_month">
// // // // // // Per Month
// // // // // // </option>

// // // // // // <option value="per_hour">
// // // // // // Per Hour
// // // // // // </option>

// // // // // // </select>





// // // // // // <input
// // // // // // type="file"
// // // // // // name="image"
// // // // // // accept="image/*"
// // // // // // required
// // // // // // >




// // // // // // <button type="submit">
// // // // // // Save Doctor
// // // // // // </button>



// // // // // // </form>



// // // // // // <br>


// // // // // // <a href="/admin/manage-doctors">
// // // // // // Manage Doctors
// // // // // // </a>



// // // // // // </div>


// // // // // // </div>



// // // // // // </body>

// // // // // // </html>
// // // // // // `;
// // // // // // }

// // // // // // module.exports = AddDoctor;


// // // // // function AddDoctor() {
// // // // // return `
// // // // // <!DOCTYPE html>
// // // // // <html lang="en">

// // // // // <head>

// // // // // <meta charset="UTF-8">
// // // // // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // // // // <title>Add Doctor</title>

// // // // // <link rel="stylesheet" href="/css/admin.css">

// // // // // </head>

// // // // // <body>

// // // // // <div class="login-container">

// // // // // <div class="login-card">

// // // // // <h2>Add Doctor</h2>

// // // // // <form
// // // // // action="/admin/add-doctor"
// // // // // method="POST"
// // // // // enctype="multipart/form-data"
// // // // // >

// // // // // <input
// // // // // type="text"
// // // // // name="name"
// // // // // placeholder="Doctor Name"
// // // // // required
// // // // // >

// // // // // <input
// // // // // type="text"
// // // // // name="qualification"
// // // // // placeholder="Qualification (MBBS, MD...)"
// // // // // required
// // // // // >

// // // // // <input
// // // // // type="text"
// // // // // name="speciality"
// // // // // placeholder="Specialization"
// // // // // required
// // // // // >

// // // // // <input
// // // // // type="number"
// // // // // name="experience"
// // // // // placeholder="Experience (Years)"
// // // // // required
// // // // // >

// // // // // <input
// // // // // type="text"
// // // // // name="clinic"
// // // // // placeholder="Hospital / Clinic"
// // // // // required
// // // // // >

// // // // // <input
// // // // // type="text"
// // // // // name="phone"
// // // // // placeholder="Phone Number"
// // // // // required
// // // // // >

// // // // // <input
// // // // // type="email"
// // // // // name="email"
// // // // // placeholder="Email Address"
// // // // // >

// // // // // <input
// // // // // type="password"
// // // // // name="password"
// // // // // placeholder="Login Password"
// // // // // required
// // // // // >

// // // // // <textarea
// // // // // name="description"
// // // // // placeholder="Doctor Description"
// // // // // rows="4"
// // // // // ></textarea>

// // // // // <input
// // // // // type="text"
// // // // // name="address"
// // // // // placeholder="Clinic Address"
// // // // // required
// // // // // >

// // // // // <!-- ================= DOCTOR TIMING ================= -->

// // // // // <h3>Available Timing</h3>

// // // // // <label>Available Day</label>

// // // // // <select
// // // // // name="availableDay"
// // // // // required
// // // // // >

// // // // // <option value="">Select Day</option>

// // // // // <option>Monday</option>
// // // // // <option>Tuesday</option>
// // // // // <option>Wednesday</option>
// // // // // <option>Thursday</option>
// // // // // <option>Friday</option>
// // // // // <option>Saturday</option>
// // // // // <option>Sunday</option>

// // // // // </select>

// // // // // <label>Available From</label>

// // // // // <input
// // // // // type="time"
// // // // // name="timeFrom"
// // // // // required
// // // // // >

// // // // // <label>Available To</label>

// // // // // <input
// // // // // type="time"
// // // // // name="timeTo"
// // // // // required
// // // // // >

// // // // // <!-- ================= APPOINTMENT SETTINGS ================= -->

// // // // // <h3>Appointment Settings</h3>

// // // // // <label>Approx Time Per Patient</label>

// // // // // <select
// // // // // name="slotDuration"
// // // // // required
// // // // // >

// // // // // <option value="">
// // // // // Select Time
// // // // // </option>

// // // // // <option value="5">
// // // // // 5 Minutes
// // // // // </option>

// // // // // <option value="10" selected>
// // // // // 10 Minutes
// // // // // </option>

// // // // // <option value="15">
// // // // // 15 Minutes
// // // // // </option>

// // // // // <option value="20">
// // // // // 20 Minutes
// // // // // </option>

// // // // // <option value="25">
// // // // // 25 Minutes
// // // // // </option>

// // // // // <option value="30">
// // // // // 30 Minutes
// // // // // </option>

// // // // // <option value="45">
// // // // // 45 Minutes
// // // // // </option>

// // // // // <option value="60">
// // // // // 60 Minutes
// // // // // </option>

// // // // // </select>

// // // // // <small
// // // // // style="
// // // // // display:block;
// // // // // margin:8px 0 20px;
// // // // // color:#64748b;
// // // // // font-size:13px;
// // // // // "
// // // // // >

// // // // // Appointment time slots will be generated automatically according to this value.

// // // // // </small>

// // // // // <!-- ================= CONSULTATION FEE ================= -->

// // // // // <h3>Consultation Fee</h3>

// // // // // <input
// // // // // type="number"
// // // // // name="fee"
// // // // // placeholder="Consultation Fee (₹)"
// // // // // required
// // // // // >

// // // // // <select
// // // // // name="feeType"
// // // // // required
// // // // // >

// // // // // <option value="">
// // // // // Select Fee Type
// // // // // </option>

// // // // // <option value="per_visit">
// // // // // Per Visit
// // // // // </option>

// // // // // <option value="per_hour">
// // // // // Per Hour
// // // // // </option>

// // // // // <option value="per_day">
// // // // // Per Day
// // // // // </option>

// // // // // <option value="per_week">
// // // // // Per Week
// // // // // </option>

// // // // // <option value="half_month">
// // // // // Half Month (15 Days)
// // // // // </option>

// // // // // <option value="per_month">
// // // // // Per Month
// // // // // </option>

// // // // // </select>

// // // // // <!-- ================= IMAGE ================= -->

// // // // // <h3>Doctor Photo</h3>

// // // // // <input
// // // // // type="file"
// // // // // name="image"
// // // // // accept="image/*"
// // // // // required
// // // // // >

// // // // // <br><br>

// // // // // <button type="submit">
// // // // // Save Doctor
// // // // // </button>

// // // // // </form>

// // // // // <br>

// // // // // <a href="/admin/manage-doctors">
// // // // // Manage Doctors
// // // // // </a>

// // // // // </div>

// // // // // </div>

// // // // // </body>

// // // // // </html>
// // // // // `;
// // // // // }

// // // // // module.exports = AddDoctor;

// // // // function AddDoctor() {
// // // //     return `

// // // //     <div class="form-group">
// // // //         <label>Doctor Name</label>
// // // //         <input
// // // //             type="text"
// // // //             name="name"
// // // //             placeholder="Doctor Name"
// // // //             required
// // // //         >
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Qualification</label>
// // // //         <input
// // // //             type="text"
// // // //             name="qualification"
// // // //             placeholder="Qualification (MBBS, MD...)"
// // // //             required
// // // //         >
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Specialization</label>
// // // //         <input
// // // //             type="text"
// // // //             name="speciality"
// // // //             placeholder="Specialization"
// // // //             required
// // // //         >
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Experience</label>
// // // //         <input
// // // //             type="number"
// // // //             name="experience"
// // // //             placeholder="Experience (Years)"
// // // //             min="0"
// // // //             required
// // // //         >
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Clinic / Hospital</label>
// // // //         <input
// // // //             type="text"
// // // //             name="clinic"
// // // //             placeholder="Hospital / Clinic"
// // // //             required
// // // //         >
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Phone Number</label>
// // // //         <input
// // // //             type="text"
// // // //             name="phone"
// // // //             placeholder="Phone Number"
// // // //             required
// // // //         >
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Email Address</label>
// // // //         <input
// // // //             type="email"
// // // //             name="email"
// // // //             placeholder="Email Address"
// // // //         >
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Login Password</label>
// // // //         <input
// // // //             type="password"
// // // //             name="password"
// // // //             placeholder="Login Password"
// // // //             required
// // // //         >
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Clinic Address</label>
// // // //         <input
// // // //             type="text"
// // // //             name="address"
// // // //             placeholder="Clinic Address"
// // // //             required
// // // //         >
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Doctor Description</label>
// // // //         <textarea
// // // //             name="description"
// // // //             placeholder="Doctor Description"
// // // //             rows="4"
// // // //         ></textarea>
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Available Day</label>

// // // //         <select
// // // //             name="availableDay"
// // // //             required
// // // //         >
// // // //             <option value="">Select Day</option>
// // // //             <option value="Every Day">Every Day</option>
// // // //             <option value="Monday">Monday</option>
// // // //             <option value="Tuesday">Tuesday</option>
// // // //             <option value="Wednesday">Wednesday</option>
// // // //             <option value="Thursday">Thursday</option>
// // // //             <option value="Friday">Friday</option>
// // // //             <option value="Saturday">Saturday</option>
// // // //             <option value="Sunday">Sunday</option>
// // // //         </select>
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Available From</label>

// // // //         <input
// // // //             type="time"
// // // //             name="timeFrom"
// // // //             required
// // // //         >
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Available To</label>

// // // //         <input
// // // //             type="time"
// // // //             name="timeTo"
// // // //             required
// // // //         >
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Approx Time Per Patient</label>

// // // //         <select
// // // //             name="slotDuration"
// // // //             required
// // // //         >
// // // //             <option value="">Select Duration</option>
// // // //             <option value="5">5 Minutes</option>
// // // //             <option value="10">10 Minutes</option>
// // // //             <option value="15">15 Minutes</option>
// // // //             <option value="20">20 Minutes</option>
// // // //             <option value="30">30 Minutes</option>
// // // //             <option value="45">45 Minutes</option>
// // // //             <option value="60">60 Minutes</option>
// // // //         </select>

// // // //         <small
// // // //             style="
// // // //                 display:block;
// // // //                 margin:8px 0 20px;
// // // //                 color:#64748b;
// // // //                 font-size:13px;
// // // //             "
// // // //         >
// // // //             Appointment time slots will be generated automatically according to this value.
// // // //         </small>
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Consultation Fee</label>

// // // //         <input
// // // //             type="number"
// // // //             name="fee"
// // // //             placeholder="Consultation Fee (₹)"
// // // //             min="0"
// // // //             required
// // // //         >
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Fee Type</label>

// // // //         <select
// // // //             name="feeType"
// // // //             required
// // // //         >
// // // //             <option value="">Select Fee Type</option>
// // // //             <option value="Per Visit">Per Visit</option>
// // // //             <option value="Per Month">Per Month</option>
// // // //             <option value="Per Hour">Per Hour</option>
// // // //         </select>
// // // //     </div>

// // // //     <div class="form-group">
// // // //         <label>Doctor Image</label>

// // // //         <input
// // // //             type="file"
// // // //             name="image"
// // // //             accept="image/*"
// // // //             required
// // // //         >
// // // //     </div>

// // // //     <button type="submit">
// // // //         Save Doctor
// // // //     </button>

// // // //     `;
// // // // }

// // // // module.exports = AddDoctor;


// // // function AddDoctor() {
// // //     return `

// // // <style>

// // // .add-doctor-form {
// // //     width: 100%;
// // //     max-width: 850px;
// // //     margin: 20px auto;
// // //     padding: 30px;
// // //     background: #ffffff;
// // //     border-radius: 18px;
// // //     box-shadow: 0 10px 35px rgba(0,0,0,0.08);
// // //     border: 1px solid #e5e7eb;
// // // }

// // // .add-doctor-title {
// // //     margin-bottom: 25px;
// // //     text-align: center;
// // // }

// // // .add-doctor-title h2 {
// // //     margin: 0;
// // //     font-size: 28px;
// // //     color: #0f172a;
// // // }

// // // .add-doctor-title p {
// // //     margin-top: 8px;
// // //     color: #64748b;
// // //     font-size: 14px;
// // // }

// // // .doctor-form-grid {
// // //     display: grid;
// // //     grid-template-columns: repeat(2, 1fr);
// // //     gap: 18px;
// // // }

// // // .form-group {
// // //     display: flex;
// // //     flex-direction: column;
// // // }

// // // .form-group.full {
// // //     grid-column: 1 / -1;
// // // }

// // // .form-group label {
// // //     margin-bottom: 7px;
// // //     font-size: 14px;
// // //     font-weight: 600;
// // //     color: #334155;
// // // }

// // // .form-group input,
// // // .form-group select,
// // // .form-group textarea {
// // //     width: 100%;
// // //     box-sizing: border-box;
// // //     padding: 12px 14px;
// // //     border: 1px solid #cbd5e1;
// // //     border-radius: 10px;
// // //     outline: none;
// // //     background: #f8fafc;
// // //     color: #0f172a;
// // //     font-size: 14px;
// // //     transition: 0.2s ease;
// // // }

// // // .form-group input:focus,
// // // .form-group select:focus,
// // // .form-group textarea:focus {
// // //     border-color: #2563eb;
// // //     background: #ffffff;
// // //     box-shadow: 0 0 0 3px rgba(37,99,235,0.10);
// // // }

// // // .form-group textarea {
// // //     resize: vertical;
// // //     min-height: 110px;
// // // }

// // // .form-help {
// // //     display: block;
// // //     margin-top: 7px;
// // //     color: #64748b;
// // //     font-size: 12px;
// // //     line-height: 1.5;
// // // }

// // // .time-section {
// // //     grid-column: 1 / -1;
// // //     margin-top: 5px;
// // //     padding: 20px;
// // //     background: #f8fafc;
// // //     border: 1px solid #e2e8f0;
// // //     border-radius: 14px;
// // // }

// // // .time-section-title {
// // //     margin: 0 0 18px;
// // //     font-size: 17px;
// // //     color: #0f172a;
// // // }

// // // .time-grid {
// // //     display: grid;
// // //     grid-template-columns: repeat(3, 1fr);
// // //     gap: 15px;
// // // }

// // // .fee-section {
// // //     grid-column: 1 / -1;
// // //     padding: 20px;
// // //     background: #f8fafc;
// // //     border: 1px solid #e2e8f0;
// // //     border-radius: 14px;
// // // }

// // // .fee-grid {
// // //     display: grid;
// // //     grid-template-columns: 1fr 1fr;
// // //     gap: 15px;
// // // }

// // // .image-box {
// // //     grid-column: 1 / -1;
// // // }

// // // .image-box input[type="file"] {
// // //     padding: 10px;
// // //     background: #ffffff;
// // //     cursor: pointer;
// // // }

// // // .save-doctor-btn {
// // //     grid-column: 1 / -1;
// // //     width: 100%;
// // //     padding: 14px;
// // //     margin-top: 5px;
// // //     border: none;
// // //     border-radius: 11px;
// // //     background: linear-gradient(135deg, #2563eb, #1d4ed8);
// // //     color: white;
// // //     font-size: 16px;
// // //     font-weight: 700;
// // //     cursor: pointer;
// // //     transition: 0.2s ease;
// // // }

// // // .save-doctor-btn:hover {
// // //     transform: translateY(-1px);
// // //     box-shadow: 0 8px 20px rgba(37,99,235,0.25);
// // // }

// // // @media (max-width: 700px) {

// // //     .add-doctor-form {
// // //         padding: 20px;
// // //         margin: 10px;
// // //         border-radius: 14px;
// // //     }

// // //     .doctor-form-grid {
// // //         grid-template-columns: 1fr;
// // //     }

// // //     .form-group.full,
// // //     .time-section,
// // //     .fee-section,
// // //     .image-box,
// // //     .save-doctor-btn {
// // //         grid-column: 1;
// // //     }

// // //     .time-grid,
// // //     .fee-grid {
// // //         grid-template-columns: 1fr;
// // //     }

// // //     .add-doctor-title h2 {
// // //         font-size: 23px;
// // //     }

// // // }

// // // </style>


// // // <form
// // //     class="add-doctor-form"
// // //     action="/admin/add-doctor"
// // //     method="POST"
// // //     enctype="multipart/form-data"
// // // >

// // //     <div class="add-doctor-title">
// // //         <h2>👨‍⚕️ Add Doctor</h2>
// // //         <p>Add doctor profile and appointment details</p>
// // //     </div>


// // //     <div class="doctor-form-grid">

// // //         <!-- Doctor Name -->

// // //         <div class="form-group">
// // //             <label>Doctor Name</label>

// // //             <input
// // //                 type="text"
// // //                 name="name"
// // //                 placeholder="Dr. Md Akhlak Ahmad"
// // //                 required
// // //             >
// // //         </div>


// // //         <!-- Qualification -->

// // //         <div class="form-group">
// // //             <label>Qualification</label>

// // //             <input
// // //                 type="text"
// // //                 name="qualification"
// // //                 placeholder="MBBS, MD..."
// // //                 required
// // //             >
// // //         </div>


// // //         <!-- Specialization -->

// // //         <div class="form-group">
// // //             <label>Specialization</label>

// // //             <input
// // //                 type="text"
// // //                 name="speciality"
// // //                 placeholder="General Physician"
// // //                 required
// // //             >
// // //         </div>


// // //         <!-- Experience -->

// // //         <div class="form-group">
// // //             <label>Experience</label>

// // //             <input
// // //                 type="number"
// // //                 name="experience"
// // //                 placeholder="Experience (Years)"
// // //                 min="0"
// // //                 required
// // //             >
// // //         </div>


// // //         <!-- Clinic -->

// // //         <div class="form-group">
// // //             <label>Clinic / Hospital</label>

// // //             <input
// // //                 type="text"
// // //                 name="clinic"
// // //                 placeholder="Clinic Name"
// // //                 required
// // //             >
// // //         </div>


// // //         <!-- Phone -->

// // //         <div class="form-group">
// // //             <label>Phone Number</label>

// // //             <input
// // //                 type="text"
// // //                 name="phone"
// // //                 placeholder="Phone Number"
// // //                 required
// // //             >
// // //         </div>


// // //         <!-- Email -->

// // //         <div class="form-group">
// // //             <label>Email Address</label>

// // //             <input
// // //                 type="email"
// // //                 name="email"
// // //                 placeholder="Email Address"
// // //             >
// // //         </div>


// // //         <!-- Password -->

// // //         <div class="form-group">
// // //             <label>Login Password</label>

// // //             <input
// // //                 type="password"
// // //                 name="password"
// // //                 placeholder="Login Password"
// // //                 required
// // //             >
// // //         </div>


// // //         <!-- Address -->

// // //         <div class="form-group full">
// // //             <label>Clinic Address</label>

// // //             <input
// // //                 type="text"
// // //                 name="address"
// // //                 placeholder="Full Clinic Address"
// // //                 required
// // //             >
// // //         </div>


// // //         <!-- Description -->

// // //         <div class="form-group full">
// // //             <label>Doctor Description</label>

// // //             <textarea
// // //                 name="description"
// // //                 placeholder="Doctor Description"
// // //                 rows="4"
// // //             ></textarea>
// // //         </div>


// // //         <!-- Timing -->

// // //         <div class="time-section">

// // //             <h3 class="time-section-title">
// // //                 🕐 Available Timing
// // //             </h3>

// // //             <div class="time-grid">


// // //                 <!-- Available Day -->

// // //                 <div class="form-group">

// // //                     <label>Available Day</label>

// // //                     <select
// // //                         name="availableDay"
// // //                         required
// // //                     >

// // //                         <option value="">
// // //                             Select Day
// // //                         </option>

// // //                         <option value="Every Day">
// // //                             Every Day
// // //                         </option>

// // //                         <option value="Monday">
// // //                             Monday
// // //                         </option>

// // //                         <option value="Tuesday">
// // //                             Tuesday
// // //                         </option>

// // //                         <option value="Wednesday">
// // //                             Wednesday
// // //                         </option>

// // //                         <option value="Thursday">
// // //                             Thursday
// // //                         </option>

// // //                         <option value="Friday">
// // //                             Friday
// // //                         </option>

// // //                         <option value="Saturday">
// // //                             Saturday
// // //                         </option>

// // //                         <option value="Sunday">
// // //                             Sunday
// // //                         </option>

// // //                     </select>

// // //                 </div>


// // //                 <!-- From -->

// // //                 <div class="form-group">

// // //                     <label>Available From</label>

// // //                     <input
// // //                         type="time"
// // //                         name="timeFrom"
// // //                         required
// // //                     >

// // //                 </div>


// // //                 <!-- To -->

// // //                 <div class="form-group">

// // //                     <label>Available To</label>

// // //                     <input
// // //                         type="time"
// // //                         name="timeTo"
// // //                         required
// // //                     >

// // //                 </div>


// // //             </div>


// // //             <small class="form-help">

// // //                 Appointment time slots will be generated
// // //                 automatically according to the selected duration.

// // //             </small>

// // //         </div>


// // //         <!-- Slot Duration -->

// // //         <div class="form-group">

// // //             <label>
// // //                 Approx Time Per Patient
// // //             </label>

// // //             <select
// // //                 name="slotDuration"
// // //                 required
// // //             >

// // //                 <option value="">
// // //                     Select Duration
// // //                 </option>

// // //                 <option value="5">
// // //                     5 Minutes
// // //                 </option>

// // //                 <option value="10">
// // //                     10 Minutes
// // //                 </option>

// // //                 <option value="15">
// // //                     15 Minutes
// // //                 </option>

// // //                 <option value="20">
// // //                     20 Minutes
// // //                 </option>

// // //                 <option value="30">
// // //                     30 Minutes
// // //                 </option>

// // //                 <option value="45">
// // //                     45 Minutes
// // //                 </option>

// // //                 <option value="60">
// // //                     60 Minutes
// // //                 </option>

// // //             </select>

// // //         </div>


// // //         <!-- Consultation Fee -->

// // // <div class="fee-section">

// // //     <div class="fee-grid">

// // //         <!-- Fee -->

// // //         <div class="form-group">

// // //             <label>
// // //                 Consultation Fee
// // //             </label>

// // //             <input
// // //                 type="number"
// // //                 name="fee"
// // //                 placeholder="Consultation Fee (₹)"
// // //                 min="0"
// // //                 required
// // //             >

// // //         </div>


// // //         <!-- Fee Type -->

// // //         <div class="form-group">

// // //             <label>
// // //                 Fee Type
// // //             </label>

// // //             <select
// // //                 name="feeType"
// // //                 required
// // //             >

// // //                 <option value="">
// // //                     Select Fee Type
// // //                 </option>

// // //                 <option value="per_visit">
// // //                     Per Visit
// // //                 </option>

// // //                 <option value="per_month">
// // //                     Per Month
// // //                 </option>

// // //                 <option value="per_hour">
// // //                     Per Hour
// // //                 </option>

// // //                 <option value="per_day">
// // //                     Per Day
// // //                 </option>

// // //                 <option value="per_week">
// // //                     Per Week
// // //                 </option>

// // //                 <option value="half_month">
// // //                     Half Month (15 Days)
// // //                 </option>

// // //             </select>

// // //         </div>

// // //     </div>

// // // </div>


// // //         <!-- Doctor Image -->

// // //         <div class="form-group image-box">

// // //             <label>
// // //                 Doctor Profile Image
// // //             </label>

// // //             <input
// // //                 type="file"
// // //                 name="image"
// // //                 accept="image/*"
// // //                 required
// // //             >

// // //         </div>


// // //         <!-- Save -->

// // //         <button
// // //             type="submit"
// // //             class="save-doctor-btn"
// // //         >
// // //             💾 Save Doctor
// // //         </button>

// // //     </div>

// // // </form>

// // // `;
// // // }

// // // module.exports = AddDoctor;


// // function AddDoctor() {
// //     return `

// // <div class="add-doctor-title">
// //     <h2>👨‍⚕️ Add Doctor</h2>
// //     <p>Add doctor profile and appointment details</p>
// // </div>


// // <div class="doctor-form-grid">

// //     <!-- Doctor Name -->
// //     <div class="form-group">
// //         <label>Doctor Name</label>
// //         <input
// //             type="text"
// //             name="name"
// //             placeholder="Dr. Md Akhlak Ahmad"
// //             required
// //         >
// //     </div>


// //     <!-- Qualification -->
// //     <div class="form-group">
// //         <label>Qualification</label>
// //         <input
// //             type="text"
// //             name="qualification"
// //             placeholder="MBBS, MD..."
// //             required
// //         >
// //     </div>


// //     <!-- Specialization -->
// //     <div class="form-group">
// //         <label>Specialization</label>
// //         <input
// //             type="text"
// //             name="speciality"
// //             placeholder="General Physician"
// //             required
// //         >
// //     </div>


// //     <!-- Experience -->
// //     <div class="form-group">
// //         <label>Experience</label>
// //         <input
// //             type="number"
// //             name="experience"
// //             placeholder="Experience (Years)"
// //             min="0"
// //             required
// //         >
// //     </div>


// //     <!-- Clinic -->
// //     <div class="form-group">
// //         <label>Clinic / Hospital</label>
// //         <input
// //             type="text"
// //             name="clinic"
// //             placeholder="Clinic Name"
// //             required
// //         >
// //     </div>


// //     <!-- Phone -->
// //     <div class="form-group">
// //         <label>Phone Number</label>
// //         <input
// //             type="text"
// //             name="phone"
// //             placeholder="Phone Number"
// //             required
// //         >
// //     </div>


// //     <!-- Email -->
// //     <div class="form-group">
// //         <label>Email Address</label>
// //         <input
// //             type="email"
// //             name="email"
// //             placeholder="Email Address"
// //         >
// //     </div>


// //     <!-- Password -->
// //     <div class="form-group">
// //         <label>Login Password</label>
// //         <input
// //             type="password"
// //             name="password"
// //             placeholder="Login Password"
// //             required
// //         >
// //     </div>


// //     <!-- Address -->
// //     <div class="form-group full">
// //         <label>Clinic Address</label>

// //         <input
// //             type="text"
// //             name="address"
// //             placeholder="Full Clinic Address"
// //             required
// //         >
// //     </div>


// //     <!-- Description -->
// //     <div class="form-group full">
// //         <label>Doctor Description</label>

// //         <textarea
// //             name="description"
// //             placeholder="Doctor Description"
// //             rows="4"
// //         ></textarea>
// //     </div>


// //     <!-- Available Timing -->
// //     <div class="time-section">

// //         <h3 class="time-section-title">
// //             🕐 Available Timing
// //         </h3>


// //         <div class="time-grid">

// //             <!-- Available Day -->
// //             <div class="form-group">

// //                 <label>Available Day</label>

// //                 <select
// //                     name="availableDay"
// //                     required
// //                 >

// //                     <option value="">
// //                         Select Day
// //                     </option>

// //                     <option value="Every Day">
// //                         Every Day
// //                     </option>

// //                     <option value="Monday">
// //                         Monday
// //                     </option>

// //                     <option value="Tuesday">
// //                         Tuesday
// //                     </option>

// //                     <option value="Wednesday">
// //                         Wednesday
// //                     </option>

// //                     <option value="Thursday">
// //                         Thursday
// //                     </option>

// //                     <option value="Friday">
// //                         Friday
// //                     </option>

// //                     <option value="Saturday">
// //                         Saturday
// //                     </option>

// //                     <option value="Sunday">
// //                         Sunday
// //                     </option>

// //                 </select>

// //             </div>


// //             <!-- Available From -->
// //             <div class="form-group">

// //                 <label>Available From</label>

// //                 <input
// //                     type="time"
// //                     name="timeFrom"
// //                     required
// //                 >

// //             </div>


// //             <!-- Available To -->
// //             <div class="form-group">

// //                 <label>Available To</label>

// //                 <input
// //                     type="time"
// //                     name="timeTo"
// //                     required
// //                 >

// //             </div>

// //         </div>


// //         <small class="form-help">
// //             Appointment time slots will be generated
// //             automatically according to the selected duration.
// //         </small>

// //     </div>


// //     <!-- Slot Duration -->
// //     <div class="form-group">

// //         <label>
// //             Approx Time Per Patient
// //         </label>

// //         <select
// //             name="slotDuration"
// //             required
// //         >

// //             <option value="">
// //                 Select Duration
// //             </option>

// //             <option value="5">
// //                 5 Minutes
// //             </option>

// //             <option value="10">
// //                 10 Minutes
// //             </option>

// //             <option value="15">
// //                 15 Minutes
// //             </option>

// //             <option value="20">
// //                 20 Minutes
// //             </option>

// //             <option value="30">
// //                 30 Minutes
// //             </option>

// //             <option value="45">
// //                 45 Minutes
// //             </option>

// //             <option value="60">
// //                 60 Minutes
// //             </option>

// //         </select>

// //     </div>


// //     <!-- Consultation Fee -->
// //     <div class="fee-section">

// //         <div class="fee-grid">

// //             <!-- Fee -->
// //             <div class="form-group">

// //                 <label>
// //                     Consultation Fee
// //                 </label>

// //                 <input
// //                     type="number"
// //                     name="fee"
// //                     placeholder="Consultation Fee (₹)"
// //                     min="0"
// //                     required
// //                 >

// //             </div>


// //             <!-- Fee Type -->
// //             <div class="form-group">

// //                 <label>
// //                     Fee Type
// //                 </label>

// //                 <select
// //                     name="feeType"
// //                     required
// //                 >

// //                     <option value="">
// //                         Select Fee Type
// //                     </option>

// //                     <option value="per_visit">
// //                         Per Visit
// //                     </option>

// //                     <option value="per_month">
// //                         Per Month
// //                     </option>

// //                     <option value="per_hour">
// //                         Per Hour
// //                     </option>

// //                     <option value="per_day">
// //                         Per Day
// //                     </option>

// //                     <option value="per_week">
// //                         Per Week
// //                     </option>

// //                     <option value="half_month">
// //                         Half Month (15 Days)
// //                     </option>

// //                 </select>

// //             </div>

// //         </div>

// //     </div>


// //     <!-- Doctor Image -->
// //     <div class="form-group image-box">

// //         <label>
// //             Doctor Profile Image
// //         </label>

// //         <input
// //             type="file"
// //             name="image"
// //             accept="image/*"
// //             required
// //         >

// //     </div>


// //     <!-- Save -->
// //     <button
// //         type="submit"
// //         class="save-doctor-btn"
// //     >
// //         💾 Save Doctor
// //     </button>

// // </div>

// // `;
// // }

// // module.exports = AddDoctor;

// function AddDoctor() {
//     return `

// <style>

// /* ================================
//    ADD DOCTOR PAGE
// ================================ */

// .add-doctor-wrapper {
//     width: 100%;
//     max-width: 1100px;
//     margin: 30px auto;
//     padding: 0 20px 40px;
//     box-sizing: border-box;
// }


// /* ================================
//    HEADER
// ================================ */

// .add-doctor-title {
//     background: linear-gradient(
//         135deg,
//         #0f3d91,
//         #2563eb
//     );

//     color: #ffffff;

//     padding: 28px 30px;

//     border-radius: 20px;

//     margin-bottom: 25px;

//     box-shadow:
//         0 12px 30px rgba(37, 99, 235, 0.20);
// }

// .add-doctor-title h2 {
//     margin: 0;

//     font-size: 28px;

//     font-weight: 800;
// }

// .add-doctor-title p {
//     margin: 8px 0 0;

//     font-size: 14px;

//     opacity: 0.90;
// }


// /* ================================
//    FORM CONTAINER
// ================================ */

// .doctor-form-container {
//     background: #ffffff;

//     padding: 30px;

//     border-radius: 22px;

//     box-shadow:
//         0 10px 35px rgba(15, 23, 42, 0.10);

//     border: 1px solid #e2e8f0;
// }


// /* ================================
//    GRID
// ================================ */

// .doctor-form-grid {
//     display: grid;

//     grid-template-columns:
//         repeat(2, minmax(0, 1fr));

//     gap: 20px;
// }


// /* ================================
//    FORM GROUP
// ================================ */

// .form-group {
//     display: flex;

//     flex-direction: column;

//     gap: 7px;

//     min-width: 0;
// }

// .form-group.full {
//     grid-column: 1 / -1;
// }

// .form-group label {
//     font-size: 14px;

//     font-weight: 700;

//     color: #1e293b;
// }


// /* ================================
//    INPUT / SELECT / TEXTAREA
// ================================ */

// .form-group input,
// .form-group select,
// .form-group textarea {

//     width: 100%;

//     box-sizing: border-box;

//     border: 1px solid #cbd5e1;

//     background: #f8fafc;

//     color: #0f172a;

//     border-radius: 12px;

//     padding: 13px 15px;

//     font-size: 15px;

//     outline: none;

//     transition: all 0.25s ease;

//     font-family: inherit;
// }


// .form-group input::placeholder,
// .form-group textarea::placeholder {
//     color: #94a3b8;
// }


// .form-group input:focus,
// .form-group select:focus,
// .form-group textarea:focus {

//     background: #ffffff;

//     border-color: #2563eb;

//     box-shadow:
//         0 0 0 4px rgba(37, 99, 235, 0.10);
// }


// .form-group textarea {

//     resize: vertical;

//     min-height: 110px;
// }


// /* ================================
//    TIMING SECTION
// ================================ */

// .time-section {

//     grid-column: 1 / -1;

//     background:
//         linear-gradient(
//             135deg,
//             #eff6ff,
//             #f8fafc
//         );

//     border: 1px solid #dbeafe;

//     border-radius: 18px;

//     padding: 22px;

//     margin-top: 5px;
// }


// .time-section-title {

//     margin: 0 0 18px;

//     font-size: 18px;

//     font-weight: 800;

//     color: #0f3d91;
// }


// .time-grid {

//     display: grid;

//     grid-template-columns:
//         repeat(3, minmax(0, 1fr));

//     gap: 18px;
// }


// .form-help {

//     display: block;

//     margin-top: 15px;

//     color: #64748b;

//     font-size: 13px;

//     line-height: 1.5;
// }


// /* ================================
//    FEE SECTION
// ================================ */

// .fee-section {

//     grid-column: 1 / -1;

//     background:
//         linear-gradient(
//             135deg,
//             #f0fdf4,
//             #f8fafc
//         );

//     border: 1px solid #bbf7d0;

//     border-radius: 18px;

//     padding: 22px;
// }


// .fee-grid {

//     display: grid;

//     grid-template-columns:
//         repeat(2, minmax(0, 1fr));

//     gap: 20px;
// }


// /* ================================
//    IMAGE UPLOAD
// ================================ */

// .image-box {

//     grid-column: 1 / -1;

//     background: #f8fafc;

//     border: 2px dashed #cbd5e1;

//     border-radius: 16px;

//     padding: 20px;

//     transition: 0.25s ease;
// }


// .image-box:hover {

//     border-color: #2563eb;

//     background: #eff6ff;
// }


// .image-box input[type="file"] {

//     padding: 12px;

//     background: #ffffff;

//     cursor: pointer;
// }


// /* ================================
//    SAVE BUTTON
// ================================ */

// .save-doctor-btn {

//     grid-column: 1 / -1;

//     width: 100%;

//     border: none;

//     border-radius: 14px;

//     padding: 15px 20px;

//     background:
//         linear-gradient(
//             135deg,
//             #2563eb,
//             #1d4ed8
//         );

//     color: #ffffff;

//     font-size: 16px;

//     font-weight: 800;

//     cursor: pointer;

//     box-shadow:
//         0 10px 25px rgba(37, 99, 235, 0.25);

//     transition: all 0.25s ease;
// }


// .save-doctor-btn:hover {

//     transform: translateY(-2px);

//     box-shadow:
//         0 15px 30px rgba(37, 99, 235, 0.30);
// }


// .save-doctor-btn:active {

//     transform: scale(0.98);
// }


// /* ================================
//    REQUIRED FIELD
// ================================ */

// .form-group label::after {

//     content: "";
// }


// /* ================================
//    MOBILE
// ================================ */

// @media (max-width: 768px) {

//     .add-doctor-wrapper {

//         margin: 15px auto;

//         padding:
//             0 12px 30px;
//     }


//     .add-doctor-title {

//         padding: 22px 20px;

//         border-radius: 16px;
//     }


//     .add-doctor-title h2 {

//         font-size: 23px;
//     }


//     .doctor-form-container {

//         padding: 18px;

//         border-radius: 17px;
//     }


//     .doctor-form-grid {

//         grid-template-columns: 1fr;

//         gap: 17px;
//     }


//     .form-group.full {

//         grid-column: auto;
//     }


//     .time-section {

//         grid-column: auto;

//         padding: 17px;
//     }


//     .time-grid {

//         grid-template-columns: 1fr;

//         gap: 15px;
//     }


//     .fee-section {

//         grid-column: auto;

//         padding: 17px;
//     }


//     .fee-grid {

//         grid-template-columns: 1fr;

//         gap: 15px;
//     }


//     .image-box {

//         grid-column: auto;

//         padding: 16px;
//     }


//     .save-doctor-btn {

//         grid-column: auto;
//     }

// }


// /* ================================
//    SMALL MOBILE
// ================================ */

// @media (max-width: 480px) {

//     .add-doctor-title h2 {

//         font-size: 20px;
//     }


//     .add-doctor-title p {

//         font-size: 13px;
//     }


//     .doctor-form-container {

//         padding: 14px;
//     }


//     .form-group input,
//     .form-group select,
//     .form-group textarea {

//         font-size: 14px;

//         padding: 12px;
//     }


//     .time-section-title {

//         font-size: 16px;
//     }

// }

// </style>


// <div class="add-doctor-wrapper">


//     <!-- ============================
//          HEADER
//     ============================= -->

//     <div class="add-doctor-title">

//         <h2>
//             👨‍⚕️ Add Doctor
//         </h2>

//         <p>
//             Add doctor profile and appointment details
//         </p>

//     </div>


//     <!-- ============================
//          FORM
//     ============================= -->

//     <div class="doctor-form-container">

//         <div class="doctor-form-grid">


//             <!-- Doctor Name -->

//             <div class="form-group">

//                 <label>
//                     Doctor Name
//                 </label>

//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Dr. Md Akhlak Ahmad"
//                     required
//                 >

//             </div>


//             <!-- Qualification -->

//             <div class="form-group">

//                 <label>
//                     Qualification
//                 </label>

//                 <input
//                     type="text"
//                     name="qualification"
//                     placeholder="MBBS, MD..."
//                     required
//                 >

//             </div>


//             <!-- Specialization -->

//             <div class="form-group">

//                 <label>
//                     Specialization
//                 </label>

//                 <input
//                     type="text"
//                     name="speciality"
//                     placeholder="General Physician"
//                     required
//                 >

//             </div>


//             <!-- Experience -->

//             <div class="form-group">

//                 <label>
//                     Experience
//                 </label>

//                 <input
//                     type="number"
//                     name="experience"
//                     placeholder="Experience (Years)"
//                     min="0"
//                     required
//                 >

//             </div>


//             <!-- Clinic -->

//             <div class="form-group">

//                 <label>
//                     Clinic / Hospital
//                 </label>

//                 <input
//                     type="text"
//                     name="clinic"
//                     placeholder="Clinic Name"
//                     required
//                 >

//             </div>


//             <!-- Phone -->

//             <div class="form-group">

//                 <label>
//                     Phone Number
//                 </label>

//                 <input
//                     type="text"
//                     name="phone"
//                     placeholder="Phone Number"
//                     required
//                 >

//             </div>


//             <!-- Email -->

//             <div class="form-group">

//                 <label>
//                     Email Address
//                 </label>

//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email Address"
//                 >

//             </div>


//             <!-- Password -->

//             <div class="form-group">

//                 <label>
//                     Login Password
//                 </label>

//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Login Password"
//                     required
//                 >

//             </div>


//             <!-- Address -->

//             <div class="form-group full">

//                 <label>
//                     Clinic Address
//                 </label>

//                 <input
//                     type="text"
//                     name="address"
//                     placeholder="Full Clinic Address"
//                     required
//                 >

//             </div>


//             <!-- Description -->

//             <div class="form-group full">

//                 <label>
//                     Doctor Description
//                 </label>

//                 <textarea
//                     name="description"
//                     placeholder="Doctor Description"
//                     rows="4"
//                 ></textarea>

//             </div>


//             <!-- ============================
//                  TIMING
//             ============================= -->

//             <div class="time-section">

//                 <h3 class="time-section-title">
//                     🕐 Available Timing
//                 </h3>


//                 <div class="time-grid">


//                     <!-- Day -->

//                     <div class="form-group">

//                         <label>
//                             Available Day
//                         </label>

//                         <select
//                             name="availableDay"
//                             required
//                         >

//                             <option value="">
//                                 Select Day
//                             </option>

//                             <option value="Every Day">
//                                 Every Day
//                             </option>

//                             <option value="Monday">
//                                 Monday
//                             </option>

//                             <option value="Tuesday">
//                                 Tuesday
//                             </option>

//                             <option value="Wednesday">
//                                 Wednesday
//                             </option>

//                             <option value="Thursday">
//                                 Thursday
//                             </option>

//                             <option value="Friday">
//                                 Friday
//                             </option>

//                             <option value="Saturday">
//                                 Saturday
//                             </option>

//                             <option value="Sunday">
//                                 Sunday
//                             </option>

//                         </select>

//                     </div>


//                     <!-- From -->

//                     <div class="form-group">

//                         <label>
//                             Available From
//                         </label>

//                         <input
//                             type="time"
//                             name="timeFrom"
//                             required
//                         >

//                     </div>


//                     <!-- To -->

//                     <div class="form-group">

//                         <label>
//                             Available To
//                         </label>

//                         <input
//                             type="time"
//                             name="timeTo"
//                             required
//                         >

//                     </div>

//                 </div>


//                 <small class="form-help">

//                     Appointment time slots will be generated
//                     automatically according to the selected duration.

//                 </small>

//             </div>


//             <!-- ============================
//                  SLOT DURATION
//             ============================= -->

//             <div class="form-group">

//                 <label>
//                     Approx Time Per Patient
//                 </label>

//                 <select
//                     name="slotDuration"
//                     required
//                 >

//                     <option value="">
//                         Select Duration
//                     </option>

//                     <option value="5">
//                         5 Minutes
//                     </option>

//                     <option value="10">
//                         10 Minutes
//                     </option>

//                     <option value="15">
//                         15 Minutes
//                     </option>

//                     <option value="20">
//                         20 Minutes
//                     </option>

//                     <option value="30">
//                         30 Minutes
//                     </option>

//                     <option value="45">
//                         45 Minutes
//                     </option>

//                     <option value="60">
//                         60 Minutes
//                     </option>

//                 </select>

//             </div>


//             <!-- ============================
//                  FEE
//             ============================= -->

//             <div class="fee-section">

//                 <div class="fee-grid">


//                     <!-- Fee -->

//                     <div class="form-group">

//                         <label>
//                             Consultation Fee
//                         </label>

//                         <input
//                             type="number"
//                             name="fee"
//                             placeholder="Consultation Fee (₹)"
//                             min="0"
//                             required
//                         >

//                     </div>


//                     <!-- Fee Type -->

//                     <div class="form-group">

//                         <label>
//                             Fee Type
//                         </label>

//                         <select
//                             name="feeType"
//                             required
//                         >

//                             <option value="">
//                                 Select Fee Type
//                             </option>

//                             <option value="per_visit">
//                                 Per Visit
//                             </option>

//                             <option value="per_month">
//                                 Per Month
//                             </option>

//                             <option value="per_hour">
//                                 Per Hour
//                             </option>

//                             <option value="per_day">
//                                 Per Day
//                             </option>

//                             <option value="per_week">
//                                 Per Week
//                             </option>

//                             <option value="half_month">
//                                 Half Month (15 Days)
//                             </option>

//                         </select>

//                     </div>

//                 </div>

//             </div>


//             <!-- ============================
//                  IMAGE
//             ============================= -->

//             <div class="form-group image-box">

//                 <label>
//                     Doctor Profile Image
//                 </label>

//                 <input
//                     type="file"
//                     name="image"
//                     accept="image/*"
//                     required
//                 >

//             </div>


//             <!-- ============================
//                  SAVE
//             ============================= -->

//             <button
//                 type="submit"
//                 class="save-doctor-btn"
//             >
//                 💾 Save Doctor
//             </button>


//         </div>

//     </div>

// </div>

// `;
// }

// module.exports = AddDoctor;

function AddDoctor() {

    return `

    <style>

/* =========================
   ADD DOCTOR CSS
========================= */


.add-doctor-title{
    display:flex;
    align-items:center;
    gap:18px;
    margin-bottom:30px;
    padding:22px;
    background:linear-gradient(135deg,#2563eb,#06b6d4);
    border-radius:18px;
    color:white;
}


.doctor-title-icon{
    width:60px;
    height:60px;
    background:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:32px;
}


.doctor-form-grid{

    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:22px;

    background:#fff;
    padding:30px;
    border-radius:20px;

    box-shadow:0 10px 30px rgba(0,0,0,.08);

}



.form-group{

    display:flex;
    flex-direction:column;
    gap:8px;

}


.form-group.full{

    grid-column:1/-1;

}



.form-group label{

    font-weight:600;
    color:#334155;

}



.form-group input,
.form-group select,
.form-group textarea{

    padding:14px;

    border-radius:12px;

    border:1px solid #dbeafe;

    background:#f8fafc;

    font-size:15px;

    outline:none;

}



.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus{

    border-color:#2563eb;

    background:white;

}



.time-section,
.fee-section{

    grid-column:1/-1;

    background:#f8fafc;

    padding:25px;

    border-radius:18px;

}



.section-heading{

    display:flex;

    gap:15px;

    align-items:center;

    margin-bottom:20px;

}



.section-icon{

    width:45px;
    height:45px;

    border-radius:12px;

    background:#2563eb;

    color:white;

    display:flex;

    align-items:center;
    justify-content:center;

}



.time-grid{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:20px;

}



.fee-grid{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:20px;

}



.form-actions{

    grid-column:1/-1;

    display:flex;

    justify-content:flex-end;

    gap:15px;

}



.reset-doctor-btn,
.save-doctor-btn{

    padding:14px 30px;

    border:none;

    border-radius:12px;

    font-size:16px;

    cursor:pointer;

}



.reset-doctor-btn{

    background:#e2e8f0;

}



.save-doctor-btn{

    background:linear-gradient(135deg,#2563eb,#06b6d4);

    color:white;

}



@media(max-width:900px){


.doctor-form-grid{

    grid-template-columns:1fr;

}


.time-grid,
.fee-grid{

    grid-template-columns:1fr;

}


.form-actions{

    flex-direction:column;

}


}



</style>

<form
    class="add-doctor-form"
    action="/admin/add-doctor"
    method="POST"
    enctype="multipart/form-data"
>

    <!-- =========================
         HEADER
    ========================== -->

    <div class="add-doctor-title">

        <div class="doctor-title-icon">
            👨‍⚕️
        </div>

        <div>
            <h2>Add Doctor</h2>

            <p>
                Add doctor profile and appointment details
            </p>
        </div>

    </div>


    <!-- =========================
         FORM GRID
    ========================== -->

    <div class="doctor-form-grid">


        <!-- Doctor Name -->

        <div class="form-group">

            <label for="doctorName">
                Doctor Name
            </label>

            <input
                id="doctorName"
                type="text"
                name="name"
                placeholder="Dr. Ram Karan Sah"
                required
            >

        </div>


        <!-- Qualification -->

        <div class="form-group">

    <label for="qualification">
        Qualification

        <span style="
            color:#64748b;
            font-size:12px;
            font-weight:500;
        ">
            (Optional)
        </span>
    </label>

    <input
        id="qualification"
        type="text"
        name="qualification"
        placeholder="MBBS, MD... (Optional)"
    >

</div>


        <!-- Specialization -->

        <div class="form-group">

            <label for="speciality">
                Specialization
            </label>

            <input
                id="speciality"
                type="text"
                name="speciality"
                placeholder="General Physician"
                required
            >

        </div>


        <!-- Experience -->

        <div class="form-group">

            <label for="experience">
                Experience
            </label>

            <div class="input-with-text">

                <input
                    id="experience"
                    type="number"
                    name="experience"
                    placeholder="10"
                    min="0"
                    required
                >

                <span>Years</span>

            </div>

        </div>


        <!-- Clinic -->

        <div class="form-group">

            <label for="clinic">
                Clinic / Hospital
            </label>

            <input
                id="clinic"
                type="text"
                name="clinic"
                placeholder="Clinic / Hospital Name"
                required
            >

        </div>


        <!-- Phone -->

        <div class="form-group">

            <label for="phone">
                Phone Number
            </label>

            <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="9876543210"
                maxlength="10"
                pattern="[0-9]{10}"
                required
            >

        </div>


        <!-- Email -->

        <div class="form-group">

            <label for="email">
                Email Address
            </label>

            <input
                id="email"
                type="email"
                name="email"
                placeholder="doctor@example.com"
            >

        </div>


        <!-- Password -->

        <div class="form-group">

            <label for="password">
                Login Password
            </label>

            <input
                id="password"
                type="password"
                name="password"
                placeholder="Login Password"
                minlength="4"
                required
            >

        </div>


        <!-- Address -->

        <div class="form-group full">

            <label for="address">
                Clinic Address
            </label>

            <input
                id="address"
                type="text"
                name="address"
                placeholder="Full Clinic Address"
                required
            >

        </div>


        <!-- Description -->

        <div class="form-group full">

            <label for="description">
                Doctor Description
            </label>

            <textarea
                id="description"
                name="description"
                placeholder="Dr. Ram Karan Sah is an experienced physician providing quality healthcare and personalized treatment to patients."
                rows="5"
            ></textarea>

        </div>


        <!-- =========================
             AVAILABLE TIMING
        ========================== -->

        <div class="time-section full">

            <div class="section-heading">

                <div class="section-icon">
                    🕐
                </div>

                <div>

                    <h3>
                        Available Timing
                    </h3>

                    <p>
                        Set doctor's consultation availability
                    </p>

                </div>

            </div>


            <div class="time-grid">


                <!-- Day -->

                <div class="form-group">

                    <label for="availableDay">
                        Available Day
                    </label>

                    <select
                        id="availableDay"
                        name="availableDay"
                        required
                    >

                        <option value="">
                            Select Day
                        </option>

                        <option value="Every Day">
                            Every Day
                        </option>

                        <option value="Monday">
                            Monday
                        </option>

                        <option value="Tuesday">
                            Tuesday
                        </option>

                        <option value="Wednesday">
                            Wednesday
                        </option>

                        <option value="Thursday">
                            Thursday
                        </option>

                        <option value="Friday">
                            Friday
                        </option>

                        <option value="Saturday">
                            Saturday
                        </option>

                        <option value="Sunday">
                            Sunday
                        </option>

                    </select>

                </div>


                <!-- From -->

                <div class="form-group">

                    <label for="timeFrom">
                        Available From
                    </label>

                    <input
                        id="timeFrom"
                        type="time"
                        name="timeFrom"
                        required
                    >

                </div>


                <!-- To -->

                <div class="form-group">

                    <label for="timeTo">
                        Available To
                    </label>

                    <input
                        id="timeTo"
                        type="time"
                        name="timeTo"
                        required
                    >

                </div>


            </div>


            <div class="form-help">

                💡 Appointment slots will be generated automatically
                according to the selected patient duration.

            </div>

        </div>


        <!-- =========================
             SLOT DURATION
        ========================== -->

        <div class="form-group">

            <label for="slotDuration">
                Approx Time Per Patient
            </label>

            <select
                id="slotDuration"
                name="slotDuration"
                required
            >

                <option value="">
                    Select Duration
                </option>

                <option value="5">
                    5 Minutes
                </option>

                <option value="10">
                    10 Minutes
                </option>

                <option value="15">
                    15 Minutes
                </option>

                <option value="20">
                    20 Minutes
                </option>

                <option value="30">
                    30 Minutes
                </option>

                <option value="45">
                    45 Minutes
                </option>

                <option value="60">
                    60 Minutes
                </option>

            </select>

        </div>


        <!-- =========================
             CONSULTATION FEE
        ========================== -->

        <div class="fee-section full">

            <div class="section-heading">

                <div class="section-icon">
                    💰
                </div>

                <div>

                    <h3>
                        Consultation Fee
                    </h3>

                    <p>
                        Set consultation charges
                    </p>

                </div>

            </div>


            <div class="fee-grid">


                <!-- Fee -->

                <div class="form-group">

                    <label for="fee">
                        Consultation Fee
                    </label>

                    <div class="fee-input">

                        <span>₹</span>

                        <input
                            id="fee"
                            type="number"
                            name="fee"
                            placeholder="500"
                            min="0"
                            required
                        >

                    </div>

                </div>


                <!-- Fee Type -->

                <div class="form-group">

                    <label for="feeType">
                        Fee Type
                    </label>

                    <select
                        id="feeType"
                        name="feeType"
                        required
                    >

                        <option value="">
                            Select Fee Type
                        </option>

                        <option value="per_visit">
                            Per Visit
                        </option>

                        <option value="per_hour">
                            Per Hour
                        </option>

                        <option value="per_day">
                            Per Day
                        </option>

                        <option value="per_week">
                            Per Week
                        </option>

                        <option value="half_month">
                            Half Month (15 Days)
                        </option>

                        <option value="per_month">
                            Per Month
                        </option>

                    </select>

                </div>


            </div>

        </div>


        <!-- =========================
             DOCTOR IMAGE
        ========================== -->

        <div class="form-group image-box full">

            <label for="doctorImage">
                Doctor Profile Image
            </label>

            <input
                id="doctorImage"
                type="file"
                name="image"
                accept="image/jpeg,image/png,image/webp,image/jpg"
                required
            >

            <small>
                JPG, PNG or WEBP image recommended.
            </small>

        </div>


        <!-- =========================
             SAVE BUTTON
        ========================== -->

        <div class="form-actions full">

            <button
                type="reset"
                class="reset-doctor-btn"
            >
                ↻ Reset
            </button>


            <button
                type="submit"
                class="save-doctor-btn"
            >
                💾 Save Doctor
            </button>

        </div>


    </div>

</form>

`;
}

module.exports = AddDoctor;
