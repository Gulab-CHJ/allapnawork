// function ManageGovernment(persons = []) {

// let rows = "";


// persons.forEach((person,index)=>{

// rows += `

// <tr>

// <td>${index + 1}</td>


// <td>

// <img src="${person.image || "/images/default.png"}"
// style="
// width:60px;
// height:60px;
// border-radius:50%;
// object-fit:cover;
// ">

// </td>


// <td>${person.name}</td>


// <td>${person.position}</td>


// <td>${person.department || "-"}</td>


// <td>${person.phone || "-"}</td>


// <td>${person.address || "-"}</td>


// <td>

// <a href="/admin/delete-government/${person._id}"
// onclick="return confirm('Delete this person?')"
// style="
// background:#dc2626;
// color:white;
// padding:8px 12px;
// border-radius:6px;
// text-decoration:none;
// ">

// Delete

// </a>

// </td>


// </tr>

// `;

// });



// return `

// <!DOCTYPE html>

// <html>

// <head>

// <title>Manage Government Person</title>


// <style>


// body{

// font-family:Arial;
// background:#f1f5f9;
// padding:20px;

// }


// .container{

// background:white;
// padding:20px;
// border-radius:12px;
// box-shadow:0 5px 20px #ddd;

// }


// h2{

// text-align:center;
// color:#2563eb;

// }



// table{

// width:100%;
// border-collapse:collapse;

// }


// th{

// background:#2563eb;
// color:white;
// padding:12px;

// }


// td{

// padding:12px;
// border-bottom:1px solid #ddd;
// text-align:center;

// }


// tr:hover{

// background:#f8fafc;

// }



// .add-btn{

// display:inline-block;
// background:#16a34a;
// color:white;
// padding:10px 15px;
// border-radius:8px;
// text-decoration:none;
// margin-bottom:15px;

// }



// @media(max-width:700px){

// table{

// font-size:12px;

// }


// td,th{

// padding:8px;

// }


// }

// </style>


// </head>


// <body>


// <div class="container">


// <h2>
// Manage Government Person
// </h2>


// <a href="/admin/add-government"
// class="add-btn">

// + Add Government Person

// </a>



// <table>


// <thead>

// <tr>

// <th>#</th>

// <th>Photo</th>

// <th>Name</th>

// <th>Position</th>

// <th>Department</th>

// <th>Phone</th>

// <th>Address</th>

// <th>Action</th>


// </tr>

// </thead>


// <tbody>


// ${rows || 

// `
// <tr>

// <td colspan="8">

// No Government Person Found

// </td>

// </tr>
// `

// }


// </tbody>


// </table>


// </div>


// </body>

// </html>


// `;

// }


// module.exports = ManageGovernment;

function ManageGovernment(persons = []) {

    let rows = "";


    persons.forEach((person, index) => {

        rows += `

        <tr>

            <td>${index + 1}</td>


            <td>

                <img
                    src="${person.image || "/images/default.png"}"
                    style="
                        width:60px;
                        height:60px;
                        border-radius:50%;
                        object-fit:cover;
                        border:2px solid #e5e7eb;
                    "
                >

            </td>


            <td>${person.name || "-"}</td>


            <td>${person.position || "-"}</td>


            <td>${person.department || "-"}</td>


            <td>${person.phone || "-"}</td>


            <td>${person.address || "-"}</td>


            <td>

                <div class="action-buttons">

                    <!-- EDIT BUTTON -->

                    <a
                        href="/admin/edit-government/${person._id}"
                        class="edit-btn"
                    >
                        ✏️ Edit
                    </a>


                    <!-- DELETE BUTTON -->

                    <a
                        href="/admin/delete-government/${person._id}"
                        onclick="return confirm('Delete this person?')"
                        class="delete-btn"
                    >
                        🗑 Delete
                    </a>

                </div>

            </td>


        </tr>

        `;

    });



    return `

    <!DOCTYPE html>

    <html>

    <head>

        <meta charset="UTF-8">

        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        >

        <title>Manage Government Person</title>


        <style>


            * {
                box-sizing: border-box;
            }


            body {

                margin: 0;

                font-family:
                    Arial,
                    sans-serif;

                background: #f1f5f9;

                padding: 20px;

            }


            .container {

                max-width: 1400px;

                margin: auto;

                background: white;

                padding: 20px;

                border-radius: 12px;

                box-shadow:
                    0 5px 20px
                    rgba(0,0,0,.08);

            }


            h2 {

                text-align: center;

                color: #2563eb;

                margin-top: 5px;

            }


            table {

                width: 100%;

                border-collapse: collapse;

            }


            th {

                background: #2563eb;

                color: white;

                padding: 12px;

                white-space: nowrap;

            }


            td {

                padding: 12px;

                border-bottom:
                    1px solid #ddd;

                text-align: center;

                vertical-align: middle;

            }


            tr:hover {

                background: #f8fafc;

            }



            /* ==============================
               ADD BUTTON
            ============================== */

            .add-btn {

                display: inline-block;

                background: #16a34a;

                color: white;

                padding: 10px 15px;

                border-radius: 8px;

                text-decoration: none;

                margin-bottom: 15px;

                font-weight: 600;

            }


            .add-btn:hover {

                background: #15803d;

            }



            /* ==============================
               ACTION BUTTONS
            ============================== */

            .action-buttons {

                display: flex;

                justify-content: center;

                align-items: center;

                gap: 7px;

                flex-wrap: wrap;

            }


            .edit-btn,
            .delete-btn {

                display: inline-block;

                padding: 8px 12px;

                border-radius: 6px;

                text-decoration: none;

                color: white;

                font-size: 13px;

                font-weight: 600;

                white-space: nowrap;

            }


            /* EDIT */

            .edit-btn {

                background: #2563eb;

            }


            .edit-btn:hover {

                background: #1d4ed8;

            }


            /* DELETE */

            .delete-btn {

                background: #dc2626;

            }


            .delete-btn:hover {

                background: #b91c1c;

            }



            /* ==============================
               MOBILE
            ============================== */

            @media(max-width:700px) {

                body {

                    padding: 8px;

                }


                .container {

                    padding: 10px;

                    overflow-x: auto;

                }


                table {

                    min-width: 850px;

                    font-size: 12px;

                }


                td,
                th {

                    padding: 8px;

                }


                .edit-btn,
                .delete-btn {

                    padding: 7px 10px;

                    font-size: 11px;

                }

            }


        </style>


    </head>


    <body>


        <div class="container">


            <h2>
                Manage Government Person
            </h2>


            <a
                href="/admin/add-government"
                class="add-btn"
            >
                + Add Government Person
            </a>



            <table>


                <thead>

                    <tr>

                        <th>#</th>

                        <th>Photo</th>

                        <th>Name</th>

                        <th>Position</th>

                        <th>Department</th>

                        <th>Phone</th>

                        <th>Address</th>

                        <th>Action</th>

                    </tr>

                </thead>


                <tbody>


                    ${rows ||

                    `
                    <tr>

                        <td colspan="8">

                            No Government Person Found

                        </td>

                    </tr>
                    `

                    }


                </tbody>


            </table>


        </div>


    </body>

    </html>


    `;

}


module.exports = ManageGovernment;
