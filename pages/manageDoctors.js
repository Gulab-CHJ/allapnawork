// // function ManageDoctors(doctors = []) {

// // let rows = "";

// // doctors.forEach((doctor, index) => {

// // rows += `
// // <tr>

// // <td>${index + 1}</td>

// // <td>
// // ${
// //     doctor.image
// //     ?
// //     `<img src="${doctor.image}" class="doctor-img">`
// //     :
// //     `<img src="/images/default-doctor.png" class="doctor-img">`
// // }
// // </td>

// // <td>${doctor.doctorId || "-"}</td>

// // <td>${doctor.name || "-"}</td>

// // <td>${doctor.degree || "-"}</td>

// // <td>${doctor.specialization || "-"}</td>

// // <td>${doctor.experience || "-"}</td>

// // <td>${doctor.hospital || "-"}</td>

// // <td>${doctor.phone || "-"}</td>

// // <td>${doctor.password || "-"}</td>

// // <td>${doctor.email || "-"}</td>

// // <td>

// // <a href="/admin/edit-doctor/${doctor._id}" class="edit-btn">
// // Edit
// // </a>

// // <a href="/admin/delete-doctor/${doctor._id}"
// // class="delete-btn"
// // onclick="return confirm('Delete Doctor?')">
// // Delete
// // </a>

// // </td>

// // </tr>
// // `;

// // });

// // return `
// // <!DOCTYPE html>
// // <html lang="en">

// // <head>

// // <meta charset="UTF-8">
// // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // <title>Manage Doctors</title>

// // <link rel="stylesheet" href="/css/admin.css">

// // <style>

// // .container{
// // width:98%;
// // margin:30px auto;
// // }

// // .top-bar{
// // display:flex;
// // justify-content:space-between;
// // align-items:center;
// // margin-bottom:20px;
// // }

// // .add-btn{
// // background:#0d6efd;
// // color:#fff;
// // padding:10px 18px;
// // border-radius:8px;
// // text-decoration:none;
// // font-weight:bold;
// // }

// // table{
// // width:100%;
// // border-collapse:collapse;
// // background:#fff;
// // }

// // th,td{
// // border:1px solid #ddd;
// // padding:10px;
// // text-align:center;
// // font-size:14px;
// // }

// // th{
// // background:#0d6efd;
// // color:#fff;
// // }

// // .doctor-img{
// // width:60px;
// // height:60px;
// // border-radius:50%;
// // object-fit:cover;
// // }

// // .edit-btn{
// // background:#28a745;
// // color:#fff;
// // padding:6px 12px;
// // border-radius:6px;
// // text-decoration:none;
// // margin-right:5px;
// // }

// // .delete-btn{
// // background:#dc3545;
// // color:#fff;
// // padding:6px 12px;
// // border-radius:6px;
// // text-decoration:none;
// // }

// // </style>

// // </head>

// // <body>

// // <div class="container">

// // <div class="top-bar">

// // <h2>Manage Doctors (${doctors.length})</h2>

// // <a href="/admin/add-doctor" class="add-btn">
// // + Add Doctor
// // </a>

// // </div>

// // <table>

// // <thead>

// // <tr>

// // <th>#</th>
// // <th>Photo</th>
// // <th>Doctor ID</th>
// // <th>Name</th>
// // <th>Degree</th>
// // <th>Specialization</th>
// // <th>Experience</th>
// // <th>Hospital</th>
// // <th>Phone</th>
// // <th>Password</th>
// // <th>Email</th>
// // <th>Action</th>

// // </tr>

// // </thead>

// // <tbody>

// // ${rows || `
// // <tr>
// // <td colspan="12">
// // No Doctors Found
// // </td>
// // </tr>
// // `}

// // </tbody>

// // </table>

// // </div>

// // </body>

// // </html>
// // `;

// // }

// // module.exports = ManageDoctors;


// function ManageDoctors(doctors = []) {


// let rows = "";


// doctors.forEach((doctor, index) => {


// rows += `

// <tr>


// <td>${index + 1}</td>


// <td>

// ${
// doctor.image
// ?
// `<img src="${doctor.image}" class="doctor-img">`
// :
// `<img src="/images/default-doctor.png" class="doctor-img">`
// }

// </td>



// <td>${doctor.doctorId || "-"}</td>


// <td>${doctor.name || "-"}</td>


// <td>${doctor.degree || "-"}</td>


// <td>${doctor.specialization || "-"}</td>


// <td>${doctor.experience || "-"} Year</td>


// <td>${doctor.hospital || "-"}</td>


// <td>${doctor.phone || "-"}</td>


// <td>${doctor.email || "-"}</td>



// <td>

// ${doctor.availableDay || "-"}

// <br>

// ${doctor.timeFrom || "-"} 
// -
// ${doctor.timeTo || "-"}

// </td>



// <td>

// ${
// doctor.fee
// ?
// `₹ ${doctor.fee} (${doctor.feeType || "Visit"})`
// :
// "-"
// }

// </td>



// <td>


// <a href="/admin/edit-doctor/${doctor._id}" 
// class="edit-btn">

// Edit

// </a>



// <a href="/admin/delete-doctor/${doctor._id}"

// class="delete-btn"

// onclick="return confirm('Delete Doctor?')">

// Delete

// </a>


// </td>



// </tr>

// `;

// });




// return `

// <!DOCTYPE html>

// <html lang="en">


// <head>


// <meta charset="UTF-8">


// <meta name="viewport" content="width=device-width, initial-scale=1.0">


// <title>Manage Doctors</title>


// <link rel="stylesheet" href="/css/admin.css">



// <style>


// .container{


// width:98%;


// margin:30px auto;


// }




// .top-bar{


// display:flex;


// justify-content:space-between;


// align-items:center;


// margin-bottom:20px;


// }



// .add-btn{


// background:#0d6efd;


// color:white;


// padding:10px 18px;


// border-radius:8px;


// text-decoration:none;


// font-weight:bold;


// }



// .table-box{


// width:100%;


// overflow-x:auto;


// }



// table{


// width:100%;


// border-collapse:collapse;


// background:white;


// min-width:1200px;


// }



// th,td{


// border:1px solid #ddd;


// padding:10px;


// text-align:center;


// font-size:14px;


// }



// th{


// background:#0d6efd;


// color:white;


// }



// .doctor-img{


// width:60px;


// height:60px;


// border-radius:50%;


// object-fit:cover;


// }




// .edit-btn{


// background:#198754;


// color:white;


// padding:6px 12px;


// border-radius:6px;


// text-decoration:none;


// display:inline-block;


// margin-bottom:5px;


// }



// .delete-btn{


// background:#dc3545;


// color:white;


// padding:6px 12px;


// border-radius:6px;


// text-decoration:none;


// display:inline-block;


// }




// @media(max-width:600px){


// .container{


// width:95%;


// }



// .top-bar{


// flex-direction:column;


// gap:15px;


// align-items:flex-start;


// }



// }


// </style>



// </head>



// <body>



// <div class="container">



// <div class="top-bar">


// <h2>
// Manage Doctors (${doctors.length})
// </h2>



// <a href="/admin/add-doctor" class="add-btn">

// + Add Doctor

// </a>


// </div>





// <div class="table-box">


// <table>



// <thead>


// <tr>


// <th>#</th>

// <th>Photo</th>

// <th>Doctor ID</th>

// <th>Name</th>

// <th>Degree</th>

// <th>Specialization</th>

// <th>Experience</th>

// <th>Hospital</th>

// <th>Phone</th>

// <th>Email</th>

// <th>Timing</th>

// <th>Fee</th>

// <th>Action</th>


// </tr>


// </thead>



// <tbody>



// ${
// rows ||

// `
// <tr>

// <td colspan="13">

// No Doctors Found

// </td>

// </tr>

// `

// }



// </tbody>



// </table>


// </div>



// </div>



// </body>


// </html>

// `;

// }



// module.exports = ManageDoctors;


function ManageDoctors(doctors = []) {

    let rows = "";

    doctors.forEach((doctor, index) => {

        rows += `
        <tr>

            <td>${index + 1}</td>

            <td>
                ${
                    doctor.image
                        ? `<img src="${doctor.image}" class="doctor-img" alt="Doctor Photo">`
                        : `<img src="/images/default-doctor.png" class="doctor-img" alt="Default Doctor">`
                }
            </td>

            <td>${doctor.doctorId || "-"}</td>
            <td>${doctor.name || "-"}</td>
            <td>${doctor.degree || "-"}</td>
            <td>${doctor.specialization || "-"}</td>
            <td>${doctor.experience || "-"} Year</td>
            <td>${doctor.hospital || "-"}</td>
            <td>${doctor.phone || "-"}</td>
            <td>${doctor.email || "-"}</td>

            <td>
                ${doctor.availableDay || "-"}<br>
                ${doctor.timeFrom || "-"} - ${doctor.timeTo || "-"}
            </td>

            <td>
                ${
                    doctor.fee !== undefined && doctor.fee !== null && doctor.fee !== ""
                        ? `₹ ${doctor.fee} (${doctor.feeType || "Visit"})`
                        : "-"
                }
            </td>

            <td class="action-box">

                <a href="/admin/edit-doctor/${doctor._id}" class="edit-btn">
                    Edit
                </a>

                <a href="/admin/doctor/${doctor._id}/orders" class="orders-btn">
                    📦 Orders
                </a>

                <a href="/admin/delete-doctor/${doctor._id}"
                   class="delete-btn"
                   onclick="return confirm('Delete Doctor?')">
                    Delete
                </a>

            </td>

        </tr>
        `;
    });

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Manage Doctors</title>

        <link rel="stylesheet" href="/css/admin.css">

        <style>

            *{
                box-sizing:border-box;
            }

            body{
                margin:0;
                background:#f4f7fb;
                font-family:Arial, sans-serif;
            }

            .container{
                width:98%;
                margin:30px auto;
            }

            .top-bar{
                display:flex;
                justify-content:space-between;
                align-items:center;
                margin-bottom:20px;
            }

            .top-bar h2{
                margin:0;
                color:#1d2939;
            }

            .add-btn{
                background:#0d6efd;
                color:white;
                padding:10px 18px;
                border-radius:8px;
                text-decoration:none;
                font-weight:bold;
            }

            .table-box{
                width:100%;
                overflow-x:auto;
                background:white;
                border-radius:10px;
                box-shadow:0 2px 10px rgba(0,0,0,.08);
            }

            table{
                width:100%;
                min-width:1250px;
                border-collapse:collapse;
                background:white;
            }

            th, td{
                border:1px solid #e5e7eb;
                padding:10px;
                text-align:center;
                font-size:14px;
            }

            th{
                background:#0d6efd;
                color:white;
                white-space:nowrap;
            }

            td{
                color:#344054;
            }

            .doctor-img{
                width:60px;
                height:60px;
                border-radius:50%;
                object-fit:cover;
                border:2px solid #e5e7eb;
            }

            .action-box{
                min-width:110px;
            }

            .edit-btn,
            .orders-btn,
            .delete-btn{
                color:white;
                padding:7px 10px;
                border-radius:6px;
                text-decoration:none;
                display:inline-block;
                margin:3px;
                font-size:13px;
                font-weight:bold;
            }

            .edit-btn{
                background:#198754;
            }

            .orders-btn{
                background:#0d6efd;
            }

            .delete-btn{
                background:#dc3545;
            }

            .edit-btn:hover,
            .orders-btn:hover,
            .delete-btn:hover,
            .add-btn:hover{
                opacity:.88;
            }

            @media(max-width:600px){

                .container{
                    width:95%;
                    margin:20px auto;
                }

                .top-bar{
                    flex-direction:column;
                    gap:15px;
                    align-items:flex-start;
                }

            }

        </style>
    </head>

    <body>

        <div class="container">

            <div class="top-bar">
                <h2>Manage Doctors (${doctors.length})</h2>

                <a href="/admin/add-doctor" class="add-btn">
                    + Add Doctor
                </a>
            </div>

            <div class="table-box">

                <table>

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Doctor ID</th>
                            <th>Name</th>
                            <th>Degree</th>
                            <th>Specialization</th>
                            <th>Experience</th>
                            <th>Hospital</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Timing</th>
                            <th>Fee</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${
                            rows ||
                            `
                            <tr>
                                <td colspan="13">No Doctors Found</td>
                            </tr>
                            `
                        }
                    </tbody>

                </table>

            </div>

        </div>

    </body>
    </html>
    `;
}

module.exports = ManageDoctors;
