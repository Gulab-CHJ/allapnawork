// // function ManageProducts(products = []) {

// // let rows = "";

// // products.forEach((product, index) => {

// // rows += `
// // <tr>
// //     <td>${index + 1}</td>
// //     <td><img src="${product.image}" width="60"></td>
// //     <td>${product.name}</td>
// //     <td>₹ ${product.price}</td>
// // </tr>
// // `;

// // });

// // return `
// // <!DOCTYPE html>
// // <html>
// // <head>
// // <title>Manage Products</title>
// // </head>
// // <body>

// // <h2>Manage Products</h2>

// // <a href="/admin/add-product">Add Product</a>

// // <table border="1" cellpadding="10">
// // <tr>
// // <th>#</th>
// // <th>Image</th>
// // <th>Name</th>
// // <th>Price</th>
// // </tr>

// // ${rows}

// // </table>

// // </body>
// // </html>
// // `;
// // }

// // module.exports = ManageProducts;

// function ManageProducts(products = []) {

// let rows = "";

// products.forEach((product, index) => {

// rows += `

// <tr>

// <td>${index + 1}</td>


// <td>
// <img 
// src="${product.image}" 
// class="product-img">
// </td>


// <td>
// <strong>${product.name}</strong>
// </td>


// <td>
// ₹ ${product.price}
// </td>



// <td>

// <a 
// href="/admin/edit-product/${product._id}"
// class="edit-btn">
// ✏️ Edit
// </a>



// <a 
// href="/admin/delete-product/${product._id}"
// class="delete-btn"
// onclick="return confirm('Delete this product?')">
// 🗑 Delete
// </a>


// </td>


// </tr>

// `;

// });


// return `

// <!DOCTYPE html>

// <html>

// <head>

// <title>Manage Products</title>


// <meta name="viewport" content="width=device-width, initial-scale=1.0">


// <style>


// *{

// box-sizing:border-box;
// font-family:Arial,sans-serif;

// }



// body{

// background:#f1f5f9;

// padding:20px;

// }



// .container{

// max-width:1100px;

// margin:auto;

// background:white;

// padding:25px;

// border-radius:15px;

// box-shadow:0 10px 25px rgba(0,0,0,.08);

// }



// .header{

// display:flex;

// justify-content:space-between;

// align-items:center;

// margin-bottom:25px;

// }



// h2{

// color:#1e3a8a;

// }



// .add-btn{

// background:#2563eb;

// color:white;

// padding:12px 20px;

// border-radius:8px;

// text-decoration:none;

// font-weight:bold;

// }



// table{

// width:100%;

// border-collapse:collapse;

// }



// th{

// background:#1e3a8a;

// color:white;

// padding:14px;

// }



// td{

// padding:12px;

// border-bottom:1px solid #ddd;

// text-align:center;

// }



// tr:hover{

// background:#f8fafc;

// }



// .product-img{

// width:70px;

// height:70px;

// object-fit:cover;

// border-radius:10px;

// border:1px solid #ddd;

// }



// .edit-btn,
// .delete-btn{

// padding:8px 12px;

// border-radius:6px;

// color:white;

// text-decoration:none;

// font-size:14px;

// margin:3px;

// display:inline-block;

// }



// .edit-btn{

// background:#16a34a;

// }



// .delete-btn{

// background:#dc2626;

// }




// @media(max-width:700px){


// body{

// padding:10px;

// }


// .container{

// padding:15px;

// overflow-x:auto;

// }


// table{

// min-width:700px;

// }



// .header{

// flex-direction:column;

// gap:15px;

// align-items:flex-start;

// }


// }



// </style>


// </head>


// <body>



// <div class="container">


// <div class="header">


// <h2>
// 📦 Manage Products
// </h2>


// <a 
// href="/admin/add-product"
// class="add-btn">

// ➕ Add Product

// </a>


// </div>



// <table>


// <tr>

// <th>#</th>

// <th>Image</th>

// <th>Name</th>

// <th>Price</th>

// <th>Action</th>

// </tr>


// ${rows}


// </table>


// </div>



// </body>

// </html>


// `;

// }


// module.exports = ManageProducts;



function ManageProducts(products = []) {

    // =========================================
    // SAFE HTML ESCAPE
    // =========================================

    const escapeHTML = (value) => {

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
    };


    // =========================================
    // IMAGE URL
    // =========================================

    const getImage = (product) => {

        if (
            product.image &&
            String(product.image).trim()
        ) {
            return String(product.image).trim();
        }

        if (
            Array.isArray(product.images) &&
            product.images.length
        ) {
            return String(product.images[0]).trim();
        }

        return "";
    };


    // =========================================
    // VIDEO
    // =========================================

    const getVideo = (product) => {

        if (
            Array.isArray(product.videos) &&
            product.videos.length
        ) {
            return String(product.videos[0]).trim();
        }

        return "";
    };


    // =========================================
    // PRODUCT ROWS
    // =========================================

    let rows = "";


    products.forEach((product, index) => {

        const image =
            getImage(product);

        const video =
            getVideo(product);


        // =====================================
        // IMAGE HTML
        // =====================================

        const imageHTML = image

            ? `

                <img
                    src="${escapeHTML(image)}"
                    class="product-image"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

            `

            :

            `

                <div class="no-image">
                    📦
                </div>

            `;


        // =====================================
        // VIDEO HTML
        // =====================================

        const videoHTML = video

            ? `

                <div class="video-preview">

                    🎥 Video Available

                </div>

            `

            :

            `

                <div class="no-video">
                    No Video
                </div>

            `;


        // =====================================
        // ROW
        // =====================================

        rows += `

            <tr>

                <td>
                    ${index + 1}
                </td>


                <!-- IMAGE -->

                <td>

                    <div class="media-box">

                        ${imageHTML}

                        ${videoHTML}

                    </div>

                </td>


                <!-- NAME -->

                <td>

                    <div class="product-name">

                        ${escapeHTML(product.name)}

                    </div>

                    <div class="product-category">

                        ${escapeHTML(
                            product.category || "N/A"
                        )}

                    </div>

                </td>


                <!-- BRAND -->

                <td>

                    ${escapeHTML(
                        product.brand || "N/A"
                    )}

                </td>


                <!-- PRICE -->

                <td>

                    ₹ ${escapeHTML(
                        product.price ?? 0
                    )}

                </td>


                <!-- STOCK -->

                <td>

                    ${escapeHTML(
                        product.stock ?? 0
                    )}

                </td>


                <!-- ACTIONS -->

                <td>

                    <div class="actions">

                        <a
                            href="/admin/edit-product/${escapeHTML(product._id)}"
                            class="edit-btn"
                        >
                            ✏️ Edit
                        </a>


                        <form
                            action="/admin/delete-product/${escapeHTML(product._id)}"
                            method="POST"
                            onsubmit="return confirm('Are you sure you want to delete this product?')"
                            style="display:inline;"
                        >

                            <button
                                type="submit"
                                class="delete-btn"
                            >
                                🗑 Delete
                            </button>

                        </form>

                    </div>

                </td>

            </tr>

        `;

    });


    // =========================================
    // RETURN PAGE
    // =========================================

    return `

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>Manage Products</title>


<style>

* {

    margin: 0;

    padding: 0;

    box-sizing: border-box;

    font-family:
        "Segoe UI",
        Arial,
        sans-serif;

}


body {

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #06b6d4
        );

    min-height: 100vh;

    padding: 25px 15px;

}


.container {

    width: 100%;

    max-width: 1250px;

    margin: auto;

    background: #ffffff;

    border-radius: 20px;

    padding: 25px;

    box-shadow:
        0 20px 50px
        rgba(0,0,0,.18);

}


.header {

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 15px;

    margin-bottom: 25px;

}


.header h1 {

    color: #1e40af;

    font-size: 27px;

}


.add-product {

    display: inline-block;

    padding: 12px 18px;

    background:
        linear-gradient(
            135deg,
            #16a34a,
            #15803d
        );

    color: white;

    text-decoration: none;

    border-radius: 10px;

    font-weight: 700;

    white-space: nowrap;

}


.add-product:hover {

    transform: translateY(-1px);

    box-shadow:
        0 8px 20px
        rgba(22,163,74,.25);

}


/* =========================================
   TABLE
========================================= */

.table-wrapper {

    width: 100%;

    overflow-x: auto;

    border-radius: 12px;

}


table {

    width: 100%;

    min-width: 950px;

    border-collapse: collapse;

}


thead {

    background: #1e40af;

    color: white;

}


th {

    padding: 14px 12px;

    text-align: left;

    font-size: 14px;

    white-space: nowrap;

}


td {

    padding: 13px 12px;

    border-bottom:
        1px solid #e5e7eb;

    vertical-align: middle;

}


tbody tr:hover {

    background: #f8fafc;

}


/* =========================================
   PRODUCT IMAGE
========================================= */

.media-box {

    width: 90px;

}


.product-image {

    width: 75px;

    height: 75px;

    object-fit: cover;

    border-radius: 10px;

    border:
        1px solid #e5e7eb;

    display: block;

}


.no-image {

    width: 75px;

    height: 75px;

    display: flex;

    align-items: center;

    justify-content: center;

    background: #f1f5f9;

    border-radius: 10px;

    font-size: 28px;

}


.video-preview {

    margin-top: 5px;

    font-size: 10px;

    color: #2563eb;

    font-weight: 700;

    white-space: nowrap;

}


.no-video {

    margin-top: 5px;

    font-size: 10px;

    color: #94a3b8;

}


/* =========================================
   PRODUCT NAME
========================================= */

.product-name {

    font-weight: 700;

    color: #111827;

}


.product-category {

    margin-top: 4px;

    font-size: 12px;

    color: #64748b;

}


/* =========================================
   ACTIONS
========================================= */

.actions {

    display: flex;

    align-items: center;

    gap: 7px;

}


.edit-btn,
.delete-btn {

    padding: 8px 11px;

    border-radius: 8px;

    border: none;

    text-decoration: none;

    font-size: 13px;

    font-weight: 700;

    cursor: pointer;

}


.edit-btn {

    background: #dbeafe;

    color: #1d4ed8;

}


.edit-btn:hover {

    background: #bfdbfe;

}


.delete-btn {

    background: #fee2e2;

    color: #dc2626;

}


.delete-btn:hover {

    background: #fecaca;

}


/* =========================================
   EMPTY
========================================= */

.empty {

    text-align: center;

    padding: 50px 20px;

    color: #64748b;

}


.empty-icon {

    font-size: 45px;

    margin-bottom: 10px;

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {

    body {

        padding: 10px;

    }


    .container {

        padding: 15px;

        border-radius: 15px;

    }


    .header {

        flex-direction: column;

        align-items: stretch;

        text-align: center;

    }


    .header h1 {

        font-size: 22px;

    }


    .add-product {

        text-align: center;

    }


    .table-wrapper {

        margin-top: 10px;

    }

}

</style>

</head>


<body>


<div class="container">


    <!-- HEADER -->

    <div class="header">

        <h1>
            📦 Manage Products
        </h1>


        <a
            href="/admin/add-product"
            class="add-product"
        >
            ➕ Add Product
        </a>

    </div>


    ${
        products.length

        ?

        `

        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>

                        <th>
                            #
                        </th>

                        <th>
                            Media
                        </th>

                        <th>
                            Product
                        </th>

                        <th>
                            Brand
                        </th>

                        <th>
                            Price
                        </th>

                        <th>
                            Stock
                        </th>

                        <th>
                            Actions
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </div>

        `

        :

        `

        <div class="empty">

            <div class="empty-icon">
                📦
            </div>

            <h3>
                No Products Found
            </h3>

            <p>
                Add your first pharma product.
            </p>

        </div>

        `
    }


</div>


</body>

</html>

`;

}


module.exports = ManageProducts;
