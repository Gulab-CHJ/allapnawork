// // ======================================================
// // EDIT GOVERNMENT PERSON PAGE
// // pages/editpages/EditGovernment.js
// // ======================================================


// // ======================================================
// // SAFE HTML
// // ======================================================

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



// // ======================================================
// // EDIT GOVERNMENT PAGE
// // ======================================================

// function EditGovernment(person = {}) {


//     // ==================================================
//     // PERSON DETAILS
//     // ==================================================

//     const id =
//         escapeHTML(
//             person._id || ""
//         );


//     const name =
//         escapeHTML(
//             person.name || ""
//         );


//     const position =
//         escapeHTML(
//             person.position || ""
//         );


//     const department =
//         escapeHTML(
//             person.department || ""
//         );


//     const phone =
//         escapeHTML(
//             person.phone || ""
//         );


//     const address =
//         escapeHTML(
//             person.address || ""
//         );


//     const image =
//         escapeHTML(
//             person.image || ""
//         );



//     // ==================================================
//     // HTML
//     // ==================================================

//     return `

// <!DOCTYPE html>

// <html lang="en">

// <head>

// <meta charset="UTF-8">

// <meta
//     name="viewport"
//     content="width=device-width, initial-scale=1.0"
// >

// <title>Edit Government Person</title>


// <style>

// *{

//     margin:0;
//     padding:0;
//     box-sizing:border-box;

// }


// body{

//     font-family:
//         Arial,
//         Helvetica,
//         sans-serif;

//     background:
//         #f1f5f9;

//     min-height:100vh;

//     padding:30px 15px;

//     color:#0f172a;

// }


// /* =====================================================
// MAIN CONTAINER
// ===================================================== */

// .container{

//     width:100%;
//     max-width:750px;

//     margin:auto;

//     background:#ffffff;

//     border-radius:20px;

//     overflow:hidden;

//     box-shadow:
//         0 15px 45px
//         rgba(15,23,42,.12);

// }



// /* =====================================================
// HEADER
// ===================================================== */

// .header{

//     position:relative;

//     background:
//         linear-gradient(
//             135deg,
//             #1e3a8a,
//             #2563eb,
//             #3b82f6
//         );

//     padding:32px 25px;

//     color:#ffffff;

//     text-align:center;

// }


// .header h1{

//     font-size:27px;

//     margin-bottom:8px;

// }


// .header p{

//     font-size:14px;

//     opacity:.9;

// }



// /* =====================================================
// FORM AREA
// ===================================================== */

// .form-area{

//     padding:30px;

// }



// /* =====================================================
// PHOTO
// ===================================================== */

// .photo-section{

//     display:flex;

//     flex-direction:column;

//     align-items:center;

//     justify-content:center;

//     margin-bottom:28px;

// }


// .photo-wrapper{

//     width:130px;
//     height:130px;

//     border-radius:50%;

//     padding:5px;

//     background:
//         linear-gradient(
//             135deg,
//             #2563eb,
//             #60a5fa
//         );

//     box-shadow:
//         0 8px 25px
//         rgba(37,99,235,.25);

// }


// .photo-wrapper img{

//     width:100%;
//     height:100%;

//     border-radius:50%;

//     object-fit:cover;

//     background:#e2e8f0;

//     border:4px solid #ffffff;

// }


// .photo-title{

//     margin-top:12px;

//     font-size:13px;

//     color:#64748b;

// }



// /* =====================================================
// GRID
// ===================================================== */

// .form-grid{

//     display:grid;

//     grid-template-columns:
//         repeat(2,1fr);

//     gap:18px;

// }


// .full-width{

//     grid-column:
//         1 / -1;

// }



// /* =====================================================
// FORM GROUP
// ===================================================== */

// .form-group{

//     width:100%;

// }


// .form-group label{

//     display:block;

//     margin-bottom:7px;

//     font-size:14px;

//     color:#334155;

//     font-weight:700;

// }


// .form-group input,
// .form-group textarea{

//     width:100%;

//     padding:13px 14px;

//     border:
//         1px solid #cbd5e1;

//     border-radius:10px;

//     background:#ffffff;

//     font-size:15px;

//     color:#0f172a;

//     outline:none;

//     transition:.2s;

// }


// .form-group input:focus,
// .form-group textarea:focus{

//     border-color:#2563eb;

//     box-shadow:
//         0 0 0 3px
//         rgba(37,99,235,.10);

// }


// .form-group textarea{

//     min-height:105px;

//     resize:vertical;

// }



// /* =====================================================
// BUTTONS
// ===================================================== */

// .actions{

//     display:flex;

//     gap:12px;

//     margin-top:27px;

// }


// .update-btn{

//     flex:1;

//     border:none;

//     outline:none;

//     padding:14px 18px;

//     border-radius:10px;

//     background:
//         linear-gradient(
//             135deg,
//             #16a34a,
//             #22c55e
//         );

//     color:#ffffff;

//     font-size:15px;

//     font-weight:700;

//     cursor:pointer;

//     transition:.2s;

// }


// .update-btn:hover{

//     transform:
//         translateY(-1px);

//     box-shadow:
//         0 8px 20px
//         rgba(22,163,74,.25);

// }


// .cancel-btn{

//     flex:1;

//     display:flex;

//     align-items:center;

//     justify-content:center;

//     padding:14px 18px;

//     border-radius:10px;

//     background:#475569;

//     color:#ffffff;

//     text-decoration:none;

//     font-size:15px;

//     font-weight:700;

//     transition:.2s;

// }


// .cancel-btn:hover{

//     background:#334155;

// }



// /* =====================================================
// PERSON ID
// ===================================================== */

// .person-id{

//     background:#f8fafc;

//     border:
//         1px solid #e2e8f0;

//     padding:11px 14px;

//     border-radius:9px;

//     margin-bottom:22px;

//     color:#64748b;

//     font-size:13px;

//     text-align:center;

// }


// .person-id strong{

//     color:#2563eb;

// }



// /* =====================================================
// MOBILE
// ===================================================== */

// @media(max-width:650px){

//     body{

//         padding:12px;

//     }


//     .container{

//         border-radius:15px;

//     }


//     .header{

//         padding:25px 15px;

//     }


//     .header h1{

//         font-size:22px;

//     }


//     .form-area{

//         padding:20px;

//     }


//     .form-grid{

//         grid-template-columns:1fr;

//     }


//     .full-width{

//         grid-column:auto;

//     }


//     .actions{

//         flex-direction:column;

//     }


//     .photo-wrapper{

//         width:110px;
//         height:110px;

//     }

// }

// </style>

// </head>


// <body>


// <div class="container">


//     <!-- ==============================================
//     HEADER
//     =============================================== -->

//     <div class="header">

//         <h1>
//             ✏️ Edit Government Person
//         </h1>

//         <p>
//             Update Government Person Information
//         </p>

//     </div>



//     <!-- ==============================================
//     FORM
//     =============================================== -->

//     <div class="form-area">


//         <div class="person-id">

//             Record ID:

//             <strong>
//                 ${id}
//             </strong>

//         </div>



//         <!-- PHOTO -->

//         <div class="photo-section">

//             <div class="photo-wrapper">

//                 <img
//                     src="${image || "/images/default.png"}"
//                     id="previewImage"
//                     alt="Government Person"
//                     onerror="this.onerror=null;this.src='/images/default.png';"
//                 >

//             </div>


//             <div class="photo-title">
//                 Government Person Photo
//             </div>

//         </div>



//         <form
//             action="/admin/edit-government/${id}"
//             method="POST"
//         >


//             <div class="form-grid">


//                 <!-- NAME -->

//                 <div class="form-group">

//                     <label>
//                         Person Name *
//                     </label>

//                     <input
//                         type="text"
//                         name="name"
//                         value="${name}"
//                         placeholder="Enter full name"
//                         required
//                     >

//                 </div>



//                 <!-- POSITION -->

//                 <div class="form-group">

//                     <label>
//                         Position *
//                     </label>

//                     <input
//                         type="text"
//                         name="position"
//                         value="${position}"
//                         placeholder="Example: Karamchari"
//                         required
//                     >

//                 </div>



//                 <!-- DEPARTMENT -->

//                 <div class="form-group">

//                     <label>
//                         Department
//                     </label>

//                     <input
//                         type="text"
//                         name="department"
//                         value="${department}"
//                         placeholder="Enter department"
//                     >

//                 </div>



//                 <!-- PHONE -->

//                 <div class="form-group">

//                     <label>
//                         Phone Number
//                     </label>

//                     <input
//                         type="text"
//                         name="phone"
//                         value="${phone}"
//                         placeholder="Enter phone number"
//                     >

//                 </div>



//                 <!-- ADDRESS -->

//                 <div class="form-group full-width">

//                     <label>
//                         Address
//                     </label>

//                     <textarea
//                         name="address"
//                         placeholder="Enter complete address"
//                     >${address}</textarea>

//                 </div>



//                 <!-- IMAGE -->

//                 <div class="form-group full-width">

//                     <label>
//                         Photo URL
//                     </label>

//                     <input
//                         type="text"
//                         name="image"
//                         id="imageInput"
//                         value="${image}"
//                         placeholder="/uploads/government/photo.jpg"
//                     >

//                 </div>


//             </div>



//             <!-- ======================================
//             BUTTONS
//             ======================================= -->

//             <div class="actions">


//                 <button
//                     type="submit"
//                     class="update-btn"
//                 >
//                     💾 Update Government Person
//                 </button>


//                 <a
//                     href="/admin/manage-government"
//                     class="cancel-btn"
//                 >
//                     ← Cancel
//                 </a>


//             </div>


//         </form>


//     </div>


// </div>



// <script>

// // ======================================================
// // IMAGE PREVIEW
// // ======================================================

// const imageInput =
//     document.getElementById(
//         "imageInput"
//     );


// const previewImage =
//     document.getElementById(
//         "previewImage"
//     );


// imageInput.addEventListener(
//     "input",
//     function(){

//         const value =
//             this.value.trim();


//         if(value){

//             previewImage.src =
//                 value;

//         }else{

//             previewImage.src =
//                 "/images/default.png";

//         }

//     }
// );

// </script>


// </body>

// </html>

// `;

// }



// // ======================================================
// // EXPORT
// // ======================================================

// module.exports = EditGovernment;


// ======================================================
// EDIT GOVERNMENT PERSON PAGE
// pages/editpages/EditGovernment.js
// ======================================================


// ======================================================
// SAFE HTML
// ======================================================

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



// ======================================================
// EDIT GOVERNMENT PAGE
// ======================================================

function EditGovernment(person = {}) {


    const id =
        escapeHTML(
            person._id || ""
        );


    const name =
        escapeHTML(
            person.name || ""
        );


    const position =
        escapeHTML(
            person.position || ""
        );


    const department =
        escapeHTML(
            person.department || ""
        );


    const phone =
        escapeHTML(
            person.phone || ""
        );


    const address =
        escapeHTML(
            person.address || ""
        );


    const image =
        escapeHTML(
            person.image || ""
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

<title>Edit Government Person</title>


<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}


body{

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    background:#f1f5f9;

    min-height:100vh;

    padding:30px 15px;

    color:#0f172a;
}



/* =====================================================
MAIN CONTAINER
===================================================== */

.container{

    width:100%;

    max-width:750px;

    margin:auto;

    background:#ffffff;

    border-radius:20px;

    overflow:hidden;

    box-shadow:
        0 15px 45px
        rgba(15,23,42,.12);
}



/* =====================================================
HEADER
===================================================== */

.header{

    background:
        linear-gradient(
            135deg,
            #1e3a8a,
            #2563eb,
            #3b82f6
        );

    padding:32px 25px;

    color:#ffffff;

    text-align:center;
}


.header h1{

    font-size:27px;

    margin-bottom:8px;
}


.header p{

    font-size:14px;

    opacity:.9;
}



/* =====================================================
FORM
===================================================== */

.form-area{

    padding:30px;
}



/* =====================================================
PERSON ID
===================================================== */

.person-id{

    background:#f8fafc;

    border:
        1px solid #e2e8f0;

    padding:11px 14px;

    border-radius:9px;

    margin-bottom:24px;

    color:#64748b;

    font-size:13px;

    text-align:center;
}


.person-id strong{

    color:#2563eb;
}



/* =====================================================
PHOTO
===================================================== */

.photo-section{

    display:flex;

    flex-direction:column;

    align-items:center;

    justify-content:center;

    margin-bottom:25px;
}


.photo-wrapper{

    width:130px;
    height:130px;

    border-radius:50%;

    padding:5px;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #60a5fa
        );

    box-shadow:
        0 8px 25px
        rgba(37,99,235,.25);
}


.photo-wrapper img{

    width:100%;
    height:100%;

    border-radius:50%;

    object-fit:cover;

    background:#e2e8f0;

    border:4px solid white;
}


.photo-title{

    margin-top:10px;

    font-size:13px;

    font-weight:600;

    color:#64748b;
}



/* =====================================================
GRID
===================================================== */

.form-grid{

    display:grid;

    grid-template-columns:
        repeat(2,1fr);

    gap:18px;
}


.full-width{

    grid-column:
        1 / -1;
}



/* =====================================================
FORM GROUP
===================================================== */

.form-group{

    width:100%;
}


.form-group label{

    display:block;

    margin-bottom:7px;

    font-size:14px;

    color:#334155;

    font-weight:700;
}


.form-group input,
.form-group textarea{

    width:100%;

    padding:13px 14px;

    border:
        1px solid #cbd5e1;

    border-radius:10px;

    background:#ffffff;

    font-size:15px;

    color:#0f172a;

    outline:none;

    transition:.2s;
}


.form-group input:focus,
.form-group textarea:focus{

    border-color:#2563eb;

    box-shadow:
        0 0 0 3px
        rgba(37,99,235,.10);
}


.form-group textarea{

    min-height:105px;

    resize:vertical;
}



/* =====================================================
FILE INPUT
===================================================== */

.file-upload-box{

    border:
        2px dashed #93c5fd;

    background:#eff6ff;

    border-radius:12px;

    padding:18px;
}


.file-upload-box input[type="file"]{

    background:white;

    cursor:pointer;
}


.file-help{

    display:block;

    margin-top:8px;

    font-size:12px;

    color:#64748b;
}



/* =====================================================
BUTTONS
===================================================== */

.actions{

    display:flex;

    gap:12px;

    margin-top:27px;
}


.update-btn{

    flex:1;

    border:none;

    outline:none;

    padding:14px 18px;

    border-radius:10px;

    background:
        linear-gradient(
            135deg,
            #16a34a,
            #22c55e
        );

    color:#ffffff;

    font-size:15px;

    font-weight:700;

    cursor:pointer;
}


.update-btn:hover{

    box-shadow:
        0 8px 20px
        rgba(22,163,74,.25);
}


.cancel-btn{

    flex:1;

    display:flex;

    align-items:center;

    justify-content:center;

    padding:14px 18px;

    border-radius:10px;

    background:#475569;

    color:#ffffff;

    text-decoration:none;

    font-size:15px;

    font-weight:700;
}


.cancel-btn:hover{

    background:#334155;
}



/* =====================================================
MOBILE
===================================================== */

@media(max-width:650px){

    body{
        padding:12px;
    }


    .container{
        border-radius:15px;
    }


    .header{
        padding:25px 15px;
    }


    .header h1{
        font-size:22px;
    }


    .form-area{
        padding:20px;
    }


    .form-grid{
        grid-template-columns:1fr;
    }


    .full-width{
        grid-column:auto;
    }


    .actions{
        flex-direction:column;
    }


    .photo-wrapper{
        width:110px;
        height:110px;
    }

}

</style>

</head>


<body>


<div class="container">


    <div class="header">

        <h1>
            ✏️ Edit Government Person
        </h1>

        <p>
            Update Government Person Information
        </p>

    </div>



    <div class="form-area">


        <div class="person-id">

            Record ID:

            <strong>
                ${id}
            </strong>

        </div>



        <!-- CURRENT PHOTO -->

        <div class="photo-section">

            <div class="photo-wrapper">

                <img
                    src="${image || "/images/default.png"}"
                    id="previewImage"
                    alt="Government Person"
                    onerror="
                        this.onerror=null;
                        this.src='/images/default.png';
                    "
                >

            </div>


            <div class="photo-title">
                Current / Selected Photo
            </div>

        </div>



        <!-- ============================================
        IMPORTANT:
        enctype required for local file upload
        ============================================= -->

        <form
            action="/admin/edit-government/${id}"
            method="POST"
            enctype="multipart/form-data"
        >


            <div class="form-grid">


                <!-- NAME -->

                <div class="form-group">

                    <label>
                        Person Name *
                    </label>

                    <input
                        type="text"
                        name="name"
                        value="${name}"
                        placeholder="Enter full name"
                        required
                    >

                </div>



                <!-- POSITION -->

                <div class="form-group">

                    <label>
                        Position *
                    </label>

                    <input
                        type="text"
                        name="position"
                        value="${position}"
                        placeholder="Example: Karamchari"
                        required
                    >

                </div>



                <!-- DEPARTMENT -->

                <div class="form-group">

                    <label>
                        Department
                    </label>

                    <input
                        type="text"
                        name="department"
                        value="${department}"
                        placeholder="Enter department"
                    >

                </div>



                <!-- PHONE -->

                <div class="form-group">

                    <label>
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        name="phone"
                        value="${phone}"
                        placeholder="Enter phone number"
                    >

                </div>



                <!-- ADDRESS -->

                <div class="form-group full-width">

                    <label>
                        Address
                    </label>

                    <textarea
                        name="address"
                        placeholder="Enter complete address"
                    >${address}</textarea>

                </div>



                <!-- LOCAL DEVICE PHOTO -->

                <div
                    class="
                        form-group
                        full-width
                        file-upload-box
                    "
                >

                    <label>
                        📷 Change Photo
                    </label>

                    <input
                        type="file"
                        name="image"
                        id="imageInput"
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                    >

                    <span class="file-help">
                        Mobile Gallery / Camera / Computer se
                        JPG, PNG ya WEBP photo select karein.
                        Photo select nahi karenge to purani photo
                        same rahegi.
                    </span>

                </div>


            </div>



            <div class="actions">


                <button
                    type="submit"
                    class="update-btn"
                >
                    💾 Update Government Person
                </button>


                <a
                    href="/admin/manage-government"
                    class="cancel-btn"
                >
                    ← Cancel
                </a>


            </div>


        </form>


    </div>


</div>



<script>

// ======================================================
// LOCAL IMAGE PREVIEW
// ======================================================

const imageInput =
    document.getElementById(
        "imageInput"
    );


const previewImage =
    document.getElementById(
        "previewImage"
    );


imageInput.addEventListener(
    "change",
    function () {

        const file =
            this.files &&
            this.files[0];


        if (!file) {
            return;
        }


        // IMAGE CHECK

        if (
            !file.type.startsWith(
                "image/"
            )
        ) {

            alert(
                "Please select an image file."
            );

            this.value = "";

            return;
        }


        // PREVIEW

        const reader =
            new FileReader();


        reader.onload =
            function (event) {

                previewImage.src =
                    event.target.result;

            };


        reader.readAsDataURL(
            file
        );

    }
);

</script>


</body>

</html>

`;

}



// ======================================================
// EXPORT
// ======================================================

module.exports = EditGovernment;
