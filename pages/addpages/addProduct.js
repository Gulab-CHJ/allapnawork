// // // function AddProduct() {
// // // return `

// // // <style>
// // // *{
// // //     box-sizing:border-box;
// // // }

// // // .add-product-page{
// // //     max-width:1100px;
// // //     margin:20px auto;
// // //     padding:20px;
// // //     font-family:Segoe UI,sans-serif;
// // // }

// // // .product-form{
// // //     background:#fff;
// // //     padding:25px;
// // //     border-radius:18px;
// // //     box-shadow:0 10px 30px rgba(0,0,0,.08);
// // // }

// // // .product-title{
// // //     font-size:28px;
// // //     font-weight:700;
// // //     margin-bottom:25px;
// // //     color:#1e3a8a;
// // // }

// // // .form-grid{
// // //     display:grid;
// // //     grid-template-columns:repeat(2,1fr);
// // //     gap:18px;
// // // }

// // // .form-group{
// // //     display:flex;
// // //     flex-direction:column;
// // //     gap:7px;
// // // }

// // // .form-group.full{
// // //     grid-column:1/-1;
// // // }

// // // .form-group label{
// // //     font-weight:600;
// // //     color:#374151;
// // // }

// // // .form-group input,
// // // .form-group textarea,
// // // .form-group select{
// // //     width:100%;
// // //     padding:12px 14px;
// // //     border:1px solid #d1d5db;
// // //     border-radius:10px;
// // //     font-size:15px;
// // //     outline:none;
// // // }

// // // .form-group input:focus,
// // // .form-group textarea:focus,
// // // .form-group select:focus{
// // //     border-color:#2563eb;
// // //     box-shadow:0 0 0 3px rgba(37,99,235,.1);
// // // }

// // // textarea{
// // //     min-height:100px;
// // //     resize:vertical;
// // // }

// // // .section-title{
// // //     margin-top:28px;
// // //     margin-bottom:15px;
// // //     padding-bottom:8px;
// // //     border-bottom:2px solid #e5e7eb;
// // //     color:#111827;
// // // }

// // // .composition-row{
// // //     display:grid;
// // //     grid-template-columns:1fr 1fr auto;
// // //     gap:10px;
// // //     margin-bottom:10px;
// // // }

// // // .composition-row button{
// // //     border:none;
// // //     background:#dc2626;
// // //     color:white;
// // //     border-radius:8px;
// // //     padding:0 15px;
// // //     cursor:pointer;
// // // }

// // // .add-btn{
// // //     border:none;
// // //     background:#2563eb;
// // //     color:white;
// // //     padding:11px 18px;
// // //     border-radius:9px;
// // //     cursor:pointer;
// // //     font-weight:600;
// // // }

// // // .image-preview{
// // //     display:flex;
// // //     flex-wrap:wrap;
// // //     gap:10px;
// // //     margin-top:10px;
// // // }

// // // .submit-btn{
// // //     width:100%;
// // //     margin-top:30px;
// // //     padding:15px;
// // //     border:none;
// // //     border-radius:12px;
// // //     background:linear-gradient(135deg,#2563eb,#1d4ed8);
// // //     color:white;
// // //     font-size:17px;
// // //     font-weight:700;
// // //     cursor:pointer;
// // // }

// // // @media(max-width:700px){
// // //     .add-product-page{
// // //         padding:10px;
// // //     }

// // //     .product-form{
// // //         padding:16px;
// // //     }

// // //     .form-grid{
// // //         grid-template-columns:1fr;
// // //     }

// // //     .form-group.full{
// // //         grid-column:auto;
// // //     }

// // //     .composition-row{
// // //         grid-template-columns:1fr;
// // //     }

// // //     .composition-row button{
// // //         padding:10px;
// // //     }
// // // }
// // // </style>


// // // <div class="add-product-page">

// // // <form
// // //     class="product-form"
// // //     action="/admin/add-product"
// // //     method="POST"
// // //     enctype="multipart/form-data"
// // // >

// // // <h1 class="product-title">💊 Add Product</h1>


// // // <h3 class="section-title">Basic Product Information</h3>

// // // <div class="form-grid">

// // //     <div class="form-group">
// // //         <label>Product Name *</label>
// // //         <input
// // //             type="text"
// // //             name="name"
// // //             placeholder="Enter product name"
// // //             required
// // //         >
// // //     </div>

// // //     <div class="form-group">
// // //         <label>Brand</label>
// // //         <input
// // //             type="text"
// // //             name="brand"
// // //             placeholder="Enter brand"
// // //         >
// // //     </div>

// // //     <div class="form-group">
// // //         <label>Category</label>
// // //         <input
// // //             type="text"
// // //             name="category"
// // //             placeholder="e.g. Liver Tonic"
// // //         >
// // //     </div>

// // //     <div class="form-group">
// // //         <label>Manufacturer</label>
// // //         <input
// // //             type="text"
// // //             name="manufacturer"
// // //             placeholder="Enter manufacturer"
// // //         >
// // //     </div>

// // //     <div class="form-group">
// // //         <label>MRP ₹</label>
// // //         <input
// // //             type="number"
// // //             name="mrp"
// // //             min="0"
// // //             placeholder="Enter MRP"
// // //         >
// // //     </div>

// // //     <div class="form-group">
// // //         <label>Selling Price ₹ *</label>
// // //         <input
// // //             type="number"
// // //             name="price"
// // //             min="0"
// // //             placeholder="Enter selling price"
// // //             required
// // //         >
// // //     </div>

// // //     <div class="form-group">
// // //         <label>Stock</label>
// // //         <input
// // //             type="number"
// // //             name="stock"
// // //             min="0"
// // //             value="0"
// // //         >
// // //     </div>

// // //     <div class="form-group">
// // //         <label>Pack Size</label>
// // //         <input
// // //             type="text"
// // //             name="packSize"
// // //             placeholder="e.g. 200 ml"
// // //         >
// // //     </div>

// // //     <div class="form-group">
// // //         <label>Batch No.</label>
// // //         <input
// // //             type="text"
// // //             name="batchNo"
// // //             placeholder="Enter batch number"
// // //         >
// // //     </div>

// // //     <div class="form-group">
// // //         <label>MFG Date</label>
// // //         <input
// // //             type="date"
// // //             name="mfgDate"
// // //         >
// // //     </div>

// // //     <div class="form-group">
// // //         <label>EXP Date</label>
// // //         <input
// // //             type="date"
// // //             name="expDate"
// // //         >
// // //     </div>

// // // </div>


// // // <h3 class="section-title">💊 Composition</h3>

// // // <div id="compositionContainer">

// // //     <div class="composition-row">

// // //         <input
// // //             type="text"
// // //             name="compositionName[]"
// // //             placeholder="Composition name"
// // //         >

// // //         <input
// // //             type="text"
// // //             name="compositionStrength[]"
// // //             placeholder="Strength e.g. 275 mg"
// // //         >

// // //         <button
// // //             type="button"
// // //             onclick="removeComposition(this)"
// // //         >
// // //             ✕
// // //         </button>

// // //     </div>

// // // </div>

// // // <button
// // //     type="button"
// // //     class="add-btn"
// // //     onclick="addComposition()"
// // // >
// // //     ➕ Add Composition
// // // </button>


// // // <h3 class="section-title">🖼 Product Images</h3>

// // // <div class="form-grid">

// // //     <div class="form-group full">
// // //         <label>Main Product Image</label>

// // //         <input
// // //             type="file"
// // //             name="image"
// // //             accept="image/*"
// // //         >
// // //     </div>

// // //     <div class="form-group full">
// // //         <label>More Images</label>

// // //         <input
// // //             type="file"
// // //             name="images"
// // //             accept="image/*"
// // //             multiple
// // //         >
// // //     </div>

// // // </div>


// // // <h3 class="section-title">📝 Product Details</h3>

// // // <div class="form-grid">

// // //     <div class="form-group full">
// // //         <label>Description</label>

// // //         <textarea
// // //             name="description"
// // //             placeholder="Enter product description"
// // //         ></textarea>
// // //     </div>

// // //     <div class="form-group full">
// // //         <label>Uses</label>

// // //         <textarea
// // //             name="uses"
// // //             placeholder="Enter uses"
// // //         ></textarea>
// // //     </div>

// // //     <div class="form-group full">
// // //         <label>Benefits</label>

// // //         <textarea
// // //             name="benefits"
// // //             placeholder="Enter benefits"
// // //         ></textarea>
// // //     </div>

// // //     <div class="form-group full">
// // //         <label>Dosage</label>

// // //         <textarea
// // //             name="dosage"
// // //             placeholder="Enter dosage"
// // //         ></textarea>
// // //     </div>

// // //     <div class="form-group full">
// // //         <label>Side Effects</label>

// // //         <textarea
// // //             name="sideEffects"
// // //             placeholder="Enter side effects"
// // //         ></textarea>
// // //     </div>

// // //     <div class="form-group full">
// // //         <label>Storage</label>

// // //         <textarea
// // //             name="storage"
// // //             placeholder="Enter storage instructions"
// // //         ></textarea>
// // //     </div>

// // // </div>


// // // <button
// // //     type="submit"
// // //     class="submit-btn"
// // // >
// // //     💾 Save Product
// // // </button>

// // // </form>

// // // </div>


// // // <script>

// // // function addComposition(){

// // //     const container =
// // //         document.getElementById("compositionContainer");

// // //     const row =
// // //         document.createElement("div");

// // //     row.className = "composition-row";

// // //     row.innerHTML = \`
// // //         <input
// // //             type="text"
// // //             name="compositionName[]"
// // //             placeholder="Composition name"
// // //         >

// // //         <input
// // //             type="text"
// // //             name="compositionStrength[]"
// // //             placeholder="Strength e.g. 275 mg"
// // //         >

// // //         <button
// // //             type="button"
// // //             onclick="removeComposition(this)"
// // //         >
// // //             ✕
// // //         </button>
// // //     \`;

// // //     container.appendChild(row);
// // // }


// // // function removeComposition(button){

// // //     const rows =
// // //         document.querySelectorAll(".composition-row");

// // //     if(rows.length > 1){
// // //         button.parentElement.remove();
// // //     }

// // // }

// // // </script>

// // // `;
// // // }

// // // module.exports = AddProduct;

// // function AddProduct() {

// // return `

// // <meta
// //     name="viewport"
// //     content="width=device-width, initial-scale=1.0"
// // >

// // <div class="header">

// //     <h2>➕ Add Pharma Product</h2>

// //     <p>
// //         Add complete product information
// //     </p>

// // </div>


// // <form
// //     action="/admin/add-product"
// //     method="POST"
// //     enctype="multipart/form-data"
// // >


// //     <!-- =========================
// //          BASIC INFORMATION
// //     ========================== -->

// //     <div class="form-grid">


// //         <div class="form-group">

// //             <label>
// //                 Product Name *
// //             </label>

// //             <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Enter product name"
// //                 required
// //             >

// //         </div>


// //         <div class="form-group">

// //             <label>
// //                 Brand
// //             </label>

// //             <input
// //                 type="text"
// //                 name="brand"
// //                 placeholder="Enter brand"
// //             >

// //         </div>


// //         <div class="form-group">

// //             <label>
// //                 Category
// //             </label>

// //             <input
// //                 type="text"
// //                 name="category"
// //                 placeholder="e.g. Liver Tonic"
// //             >

// //         </div>


// //         <div class="form-group">

// //             <label>
// //                 Manufacturer
// //             </label>

// //             <input
// //                 type="text"
// //                 name="manufacturer"
// //                 placeholder="Enter manufacturer"
// //             >

// //         </div>


// //         <div class="form-group">

// //             <label>
// //                 MRP ₹
// //             </label>

// //             <input
// //                 type="number"
// //                 name="mrp"
// //                 min="0"
// //                 step="0.01"
// //                 placeholder="Enter MRP"
// //             >

// //         </div>


// //         <div class="form-group">

// //             <label>
// //                 Selling Price ₹ *
// //             </label>

// //             <input
// //                 type="number"
// //                 name="price"
// //                 min="0"
// //                 step="0.01"
// //                 placeholder="Enter selling price"
// //                 required
// //             >

// //         </div>


// //         <div class="form-group">

// //             <label>
// //                 Stock
// //             </label>

// //             <input
// //                 type="number"
// //                 name="stock"
// //                 min="0"
// //                 value="0"
// //             >

// //         </div>


// //         <div class="form-group">

// //             <label>
// //                 Pack Size
// //             </label>

// //             <input
// //                 type="text"
// //                 name="packSize"
// //                 placeholder="e.g. 200 ml"
// //             >

// //         </div>


// //         <div class="form-group">

// //             <label>
// //                 Batch No.
// //             </label>

// //             <input
// //                 type="text"
// //                 name="batchNo"
// //                 placeholder="Enter batch number"
// //             >

// //         </div>


// //         <div class="form-group">

// //             <label>
// //                 MFG Date
// //             </label>

// //             <input
// //                 type="date"
// //                 name="mfgDate"
// //             >

// //         </div>


// //         <div class="form-group">

// //             <label>
// //                 EXP Date
// //             </label>

// //             <input
// //                 type="date"
// //                 name="expDate"
// //             >

// //         </div>


// //     </div>


// //     <!-- =========================
// //          COMPOSITION
// //     ========================== -->

// //     <div class="section">

// //         <div class="section-title">
// //             💊 Composition
// //         </div>


// //         <div id="compositionBox">


// //             <div class="composition-row">

// //                 <input
// //                     type="text"
// //                     name="compositionName[]"
// //                     placeholder="Composition name"
// //                 >


// //                 <input
// //                     type="text"
// //                     name="compositionStrength[]"
// //                     placeholder="Strength e.g. 275 mg"
// //                 >


// //                 <button
// //                     type="button"
// //                     onclick="removeComposition(this)"
// //                 >
// //                     ✕
// //                 </button>

// //             </div>


// //         </div>


// //         <button
// //             type="button"
// //             class="add-btn"
// //             onclick="addComposition()"
// //         >
// //             ➕ Add Composition
// //         </button>


// //     </div>


// //     <!-- =========================
// //          IMAGES
// //     ========================== -->

// //     <div class="section">

// //         <div class="section-title">
// //             🖼 Product Images
// //         </div>


// //         <div class="form-group full">

// //             <label>
// //                 Main Product Image
// //             </label>

// //             <input
// //                 type="file"
// //                 name="image"
// //                 accept="image/*"
// //             >

// //         </div>


// //         <div class="form-group full">

// //             <label>
// //                 More Product Images
// //             </label>

// //             <input
// //                 type="file"
// //                 name="images"
// //                 accept="image/*"
// //                 multiple
// //             >

// //         </div>


// //     </div>


// //     <!-- =========================
// //          PRODUCT VIDEO
// //     ========================== -->

// //     <div class="section">

// //         <div class="section-title">
// //             🎥 Product Video
// //         </div>


// //         <div class="form-group full">

// //             <label>
// //                 Upload Product Video
// //             </label>

// //             <input
// //                 type="file"
// //                 name="video"
// //                 accept="video/mp4,video/webm,video/ogg"
// //             >

// //             <p
// //                 style="
// //                     margin-top:8px;
// //                     color:#64748b;
// //                     font-size:13px;
// //                 "
// //             >
// //                 Recommended format: MP4
// //             </p>

// //         </div>

// //     </div>


// //     <!-- =========================
// //          PRODUCT DETAILS
// //     ========================== -->

// //     <div class="section">

// //         <div class="section-title">
// //             📋 Product Details
// //         </div>


// //         <div class="form-group full">

// //             <label>
// //                 Description
// //             </label>

// //             <textarea
// //                 name="description"
// //                 placeholder="Enter product description"
// //             ></textarea>

// //         </div>


// //         <div class="form-group full">

// //             <label>
// //                 Uses
// //             </label>

// //             <textarea
// //                 name="uses"
// //                 placeholder="Enter uses"
// //             ></textarea>

// //         </div>


// //         <div class="form-group full">

// //             <label>
// //                 Benefits
// //             </label>

// //             <textarea
// //                 name="benefits"
// //                 placeholder="Enter benefits"
// //             ></textarea>

// //         </div>


// //         <div class="form-group full">

// //             <label>
// //                 Dosage
// //             </label>

// //             <textarea
// //                 name="dosage"
// //                 placeholder="Enter dosage"
// //             ></textarea>

// //         </div>


// //         <div class="form-group full">

// //             <label>
// //                 Side Effects
// //             </label>

// //             <textarea
// //                 name="sideEffects"
// //                 placeholder="Enter side effects"
// //             ></textarea>

// //         </div>


// //         <div class="form-group full">

// //             <label>
// //                 Storage
// //             </label>

// //             <textarea
// //                 name="storage"
// //                 placeholder="Enter storage instructions"
// //             ></textarea>

// //         </div>


// //     </div>


// //     <!-- =========================
// //          SAVE
// //     ========================== -->

// //     <button
// //         type="submit"
// //         class="submit-btn"
// //     >

// //         💾 Save Product

// //     </button>


// // </form>


// // <script>

// // function addComposition() {

// //     const box =
// //         document.getElementById("compositionBox");


// //     const row =
// //         document.createElement("div");


// //     row.className =
// //         "composition-row";


// //     row.innerHTML = \`

// //         <input
// //             type="text"
// //             name="compositionName[]"
// //             placeholder="Composition name"
// //         >

// //         <input
// //             type="text"
// //             name="compositionStrength[]"
// //             placeholder="Strength e.g. 275 mg"
// //         >

// //         <button
// //             type="button"
// //             onclick="removeComposition(this)"
// //         >
// //             ✕
// //         </button>

// //     \`;


// //     box.appendChild(row);

// // }


// // function removeComposition(button) {

// //     const row =
// //         button.parentElement;


// //     row.remove();

// // }

// // </script>

// // `;

// // }

// // module.exports = AddProduct;



// function AddProduct() {

// return `

// <meta
//     name="viewport"
//     content="width=device-width, initial-scale=1.0"
// >

// <style>

// *{
//     box-sizing:border-box;
// }

// .add-product-page{
//     max-width:1100px;
//     margin:20px auto;
//     padding:20px;
//     font-family:Segoe UI,sans-serif;
// }

// .product-form{
//     background:#fff;
//     padding:25px;
//     border-radius:18px;
//     box-shadow:0 10px 30px rgba(0,0,0,.08);
// }

// .product-title{
//     font-size:28px;
//     font-weight:700;
//     color:#1e3a8a;
//     margin-bottom:5px;
// }

// .product-subtitle{
//     color:#64748b;
//     margin-bottom:25px;
// }

// .form-grid{
//     display:grid;
//     grid-template-columns:repeat(2,1fr);
//     gap:18px;
// }

// .form-group{
//     display:flex;
//     flex-direction:column;
//     gap:7px;
// }

// .form-group.full{
//     grid-column:1/-1;
// }

// .form-group label{
//     font-weight:600;
//     color:#374151;
// }

// .form-group input,
// .form-group textarea,
// .form-group select{
//     width:100%;
//     padding:12px 14px;
//     border:1px solid #d1d5db;
//     border-radius:10px;
//     font-size:15px;
//     outline:none;
//     background:#fff;
// }

// .form-group input:focus,
// .form-group textarea:focus,
// .form-group select:focus{
//     border-color:#2563eb;
//     box-shadow:0 0 0 3px rgba(37,99,235,.1);
// }

// textarea{
//     min-height:110px;
//     resize:vertical;
// }

// .section{
//     margin-top:30px;
// }

// .section-title{
//     font-size:20px;
//     font-weight:700;
//     margin-bottom:15px;
//     padding-bottom:10px;
//     border-bottom:2px solid #e5e7eb;
//     color:#111827;
// }

// .composition-row{
//     display:grid;
//     grid-template-columns:1fr 1fr auto;
//     gap:10px;
//     margin-bottom:10px;
// }

// .composition-row input{
//     width:100%;
//     padding:12px;
//     border:1px solid #d1d5db;
//     border-radius:10px;
//     font-size:15px;
//     outline:none;
// }

// .composition-row input:focus{
//     border-color:#2563eb;
// }

// .remove-btn{
//     border:none;
//     background:#dc2626;
//     color:white;
//     border-radius:8px;
//     padding:0 15px;
//     cursor:pointer;
//     font-size:18px;
// }

// .add-btn{
//     border:none;
//     background:#2563eb;
//     color:white;
//     padding:11px 18px;
//     border-radius:9px;
//     cursor:pointer;
//     font-weight:600;
//     margin-top:5px;
// }

// .add-btn:hover{
//     background:#1d4ed8;
// }

// .file-box{
//     border:2px dashed #cbd5e1;
//     padding:18px;
//     border-radius:12px;
//     background:#f8fafc;
// }

// .file-box input{
//     background:#fff;
// }

// .file-help{
//     margin-top:8px;
//     color:#64748b;
//     font-size:13px;
// }

// .submit-btn{
//     width:100%;
//     margin-top:30px;
//     padding:15px;
//     border:none;
//     border-radius:12px;
//     background:linear-gradient(
//         135deg,
//         #2563eb,
//         #1d4ed8
//     );
//     color:white;
//     font-size:17px;
//     font-weight:700;
//     cursor:pointer;
// }

// .submit-btn:hover{
//     opacity:.95;
// }

// @media(max-width:700px){

//     .add-product-page{
//         padding:10px;
//         margin:10px auto;
//     }

//     .product-form{
//         padding:16px;
//         border-radius:14px;
//     }

//     .product-title{
//         font-size:23px;
//     }

//     .form-grid{
//         grid-template-columns:1fr;
//     }

//     .form-group.full{
//         grid-column:auto;
//     }

//     .composition-row{
//         grid-template-columns:1fr;
//     }

//     .remove-btn{
//         padding:10px;
//     }

// }

// </style>


// <div class="add-product-page">

// <form
//     class="product-form"
//     action="/admin/add-product"
//     method="POST"
//     enctype="multipart/form-data"
// >


// <!-- =========================
//      HEADER
// ========================== -->

// <div class="product-title">
//     ➕ Add Pharma Product
// </div>

// <div class="product-subtitle">
//     Add complete product information
// </div>


// <!-- =========================
//      BASIC INFORMATION
// ========================== -->

// <div class="section">

//     <div class="section-title">
//         📦 Basic Product Information
//     </div>

//     <div class="form-grid">


//         <div class="form-group">

//             <label>
//                 Product Name *
//             </label>

//             <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter product name"
//                 required
//             >

//         </div>


//         <div class="form-group">

//             <label>
//                 Brand
//             </label>

//             <input
//                 type="text"
//                 name="brand"
//                 placeholder="Enter brand"
//             >

//         </div>


//         <div class="form-group">

//             <label>
//                 Category
//             </label>

//             <input
//                 type="text"
//                 name="category"
//                 placeholder="e.g. Liver Tonic"
//             >

//         </div>


//         <div class="form-group">

//             <label>
//                 Manufacturer
//             </label>

//             <input
//                 type="text"
//                 name="manufacturer"
//                 placeholder="Enter manufacturer"
//             >

//         </div>


//         <div class="form-group">

//             <label>
//                 MRP ₹
//             </label>

//             <input
//                 type="number"
//                 name="mrp"
//                 min="0"
//                 step="0.01"
//                 placeholder="Enter MRP"
//             >

//         </div>


//         <div class="form-group">

//             <label>
//                 Selling Price ₹ *
//             </label>

//             <input
//                 type="number"
//                 name="price"
//                 min="0"
//                 step="0.01"
//                 placeholder="Enter selling price"
//                 required
//             >

//         </div>


//         <div class="form-group">

//             <label>
//                 Stock
//             </label>

//             <input
//                 type="number"
//                 name="stock"
//                 min="0"
//                 value="0"
//             >

//         </div>


//         <div class="form-group">

//             <label>
//                 Pack Size
//             </label>

//             <input
//                 type="text"
//                 name="packSize"
//                 placeholder="e.g. 200 ml"
//             >

//         </div>


//         <div class="form-group">

//             <label>
//                 Batch No.
//             </label>

//             <input
//                 type="text"
//                 name="batchNo"
//                 placeholder="Enter batch number"
//             >

//         </div>


//         <div class="form-group">

//             <label>
//                 MFG Date
//             </label>

//             <input
//                 type="date"
//                 name="mfgDate"
//             >

//         </div>


//         <div class="form-group">

//             <label>
//                 EXP Date
//             </label>

//             <input
//                 type="date"
//                 name="expDate"
//             >

//         </div>


//     </div>

// </div>


// <!-- =========================
//      COMPOSITION
// ========================== -->

// <div class="section">

//     <div class="section-title">
//         💊 Composition
//     </div>


//     <div id="compositionBox">


//         <div class="composition-row">

//             <input
//                 type="text"
//                 name="compositionName[]"
//                 placeholder="Composition name"
//             >


//             <input
//                 type="text"
//                 name="compositionStrength[]"
//                 placeholder="Strength e.g. 275 mg"
//             >


//             <button
//                 type="button"
//                 class="remove-btn"
//                 onclick="removeComposition(this)"
//             >
//                 ✕
//             </button>

//         </div>


//     </div>


//     <button
//         type="button"
//         class="add-btn"
//         onclick="addComposition()"
//     >
//         ➕ Add Composition
//     </button>

// </div>


// <!-- =========================
//      PRODUCT IMAGES
// ========================== -->

// <div class="section">

//     <div class="section-title">
//         🖼 Product Images
//     </div>


//     <div class="form-group full file-box">

//         <label>
//             Main Product Image
//         </label>

//         <input
//             type="file"
//             name="image"
//             accept="image/*"
//         >

//         <div class="file-help">
//             Select the main product image.
//         </div>

//     </div>


//     <br>


//     <div class="form-group full file-box">

//         <label>
//             More Product Images
//         </label>

//         <input
//             type="file"
//             name="images"
//             accept="image/*"
//             multiple
//         >

//         <div class="file-help">
//             You can select multiple product images.
//         </div>

//     </div>

// </div>


// <!-- =========================
//      PRODUCT VIDEO
// ========================== -->

// <div class="section">

//     <div class="section-title">
//         🎥 Product Video
//     </div>


//     <div class="form-group full file-box">

//         <label>
//             Upload Product Video
//         </label>

//         <input
//             type="file"
//             name="video"
//             accept="video/mp4,video/webm,video/ogg"
//         >

//         <div class="file-help">
//             Recommended format: MP4, WebM or OGG.
//         </div>

//     </div>

// </div>


// <!-- =========================
//      PRODUCT DETAILS
// ========================== -->

// <div class="section">

//     <div class="section-title">
//         📋 Product Details
//     </div>


//     <div class="form-grid">


//         <div class="form-group full">

//             <label>
//                 Description
//             </label>

//             <textarea
//                 name="description"
//                 placeholder="Enter product description"
//             ></textarea>

//         </div>


//         <div class="form-group full">

//             <label>
//                 Uses
//             </label>

//             <textarea
//                 name="uses"
//                 placeholder="Enter uses"
//             ></textarea>

//         </div>


//         <div class="form-group full">

//             <label>
//                 Benefits
//             </label>

//             <textarea
//                 name="benefits"
//                 placeholder="Enter benefits"
//             ></textarea>

//         </div>


//         <div class="form-group full">

//             <label>
//                 Dosage
//             </label>

//             <textarea
//                 name="dosage"
//                 placeholder="Enter dosage"
//             ></textarea>

//         </div>


//         <div class="form-group full">

//             <label>
//                 Side Effects
//             </label>

//             <textarea
//                 name="sideEffects"
//                 placeholder="Enter side effects"
//             ></textarea>

//         </div>


//         <div class="form-group full">

//             <label>
//                 Storage
//             </label>

//             <textarea
//                 name="storage"
//                 placeholder="Enter storage instructions"
//             ></textarea>

//         </div>


//     </div>

// </div>


// <!-- =========================
//      SAVE PRODUCT
// ========================== -->

// <button
//     type="submit"
//     class="submit-btn"
// >
//     💾 Save Product
// </button>


// </form>

// </div>


// <script>

// function addComposition(){

//     const container =
//         document.getElementById("compositionBox");


//     const row =
//         document.createElement("div");


//     row.className =
//         "composition-row";


//     row.innerHTML = \`

//         <input
//             type="text"
//             name="compositionName[]"
//             placeholder="Composition name"
//         >

//         <input
//             type="text"
//             name="compositionStrength[]"
//             placeholder="Strength e.g. 275 mg"
//         >

//         <button
//             type="button"
//             class="remove-btn"
//             onclick="removeComposition(this)"
//         >
//             ✕
//         </button>

//     \`;


//     container.appendChild(row);

// }


// function removeComposition(button){

//     const rows =
//         document.querySelectorAll(
//             ".composition-row"
//         );


//     if(rows.length > 1){

//         button
//             .parentElement
//             .remove();

//     }

// }

// </script>

// `;

// }

// module.exports = AddProduct;



function AddProduct() {
    return `

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

*{
    box-sizing:border-box;
}

.add-product-page{
    max-width:1100px;
    margin:20px auto;
    padding:20px;
    font-family:Segoe UI,sans-serif;
}

.product-form{
    background:#fff;
    padding:25px;
    border-radius:18px;
    box-shadow:0 10px 30px rgba(0,0,0,.08);
}

.product-title{
    font-size:28px;
    font-weight:700;
    color:#1e3a8a;
    margin-bottom:5px;
}

.product-subtitle{
    color:#64748b;
    margin-bottom:25px;
}

.form-grid{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:18px;
}

.form-group{
    display:flex;
    flex-direction:column;
    gap:7px;
}

.form-group.full{
    grid-column:1/-1;
}

.form-group label{
    font-weight:600;
    color:#374151;
}

.form-group input,
.form-group textarea,
.form-group select{
    width:100%;
    padding:12px 14px;
    border:1px solid #d1d5db;
    border-radius:10px;
    font-size:15px;
    outline:none;
    background:#fff;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus{
    border-color:#2563eb;
    box-shadow:0 0 0 3px rgba(37,99,235,.1);
}

.form-group input[readonly]{
    background:#eff6ff;
    color:#1e3a8a;
    font-weight:700;
}

textarea{
    min-height:110px;
    resize:vertical;
}

.section{
    margin-top:30px;
}

.section-title{
    font-size:20px;
    font-weight:700;
    margin-bottom:15px;
    padding-bottom:10px;
    border-bottom:2px solid #e5e7eb;
    color:#111827;
}

.composition-row{
    display:grid;
    grid-template-columns:1fr 1fr auto;
    gap:10px;
    margin-bottom:10px;
}

.composition-row input{
    width:100%;
    padding:12px;
    border:1px solid #d1d5db;
    border-radius:10px;
    font-size:15px;
    outline:none;
}

.remove-btn{
    border:none;
    background:#dc2626;
    color:white;
    border-radius:8px;
    padding:0 15px;
    cursor:pointer;
    font-size:18px;
}

.add-btn{
    border:none;
    background:#2563eb;
    color:white;
    padding:11px 18px;
    border-radius:9px;
    cursor:pointer;
    font-weight:600;
    margin-top:5px;
}

.file-box{
    border:2px dashed #cbd5e1;
    padding:18px;
    border-radius:12px;
    background:#f8fafc;
}

.file-help{
    margin-top:8px;
    color:#64748b;
    font-size:13px;
}

.submit-btn{
    width:100%;
    margin-top:30px;
    padding:15px;
    border:none;
    border-radius:12px;
    background:linear-gradient(135deg,#2563eb,#1d4ed8);
    color:white;
    font-size:17px;
    font-weight:700;
    cursor:pointer;
}

@media(max-width:700px){

    .add-product-page{
        padding:10px;
        margin:10px auto;
    }

    .product-form{
        padding:16px;
    }

    .form-grid,
    .composition-row{
        grid-template-columns:1fr;
    }

    .form-group.full{
        grid-column:auto;
    }

    .remove-btn{
        padding:10px;
    }
}

</style>

<div class="add-product-page">

<form
    class="product-form"
    action="/admin/add-product"
    method="POST"
    enctype="multipart/form-data"
>

    <div class="product-title">
        ➕ Add Pharma Product
    </div>

    <div class="product-subtitle">
        Add complete product information
    </div>

    <div class="section">

        <div class="section-title">
            📦 Basic Product Information
        </div>

        <div class="form-grid">

            <div class="form-group">
                <label>Product Name *</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter product name"
                    required
                >
            </div>

            <div class="form-group">
                <label>Brand</label>
                <input
                    type="text"
                    name="brand"
                    placeholder="Enter brand"
                >
            </div>

            <div class="form-group">
                <label>Category</label>
                <input
                    type="text"
                    name="category"
                    placeholder="e.g. Liver Tonic"
                >
            </div>

            <div class="form-group">
                <label>Manufacturer</label>
                <input
                    type="text"
                    name="manufacturer"
                    placeholder="Enter manufacturer"
                >
            </div>

            <div class="form-group">
                <label>MRP ₹ *</label>
                <input
                    type="number"
                    id="mrp"
                    name="mrp"
                    min="0"
                    step="0.01"
                    placeholder="Enter MRP"
                    required
                    oninput="calculateSellingPrice()"
                >
            </div>

            <div class="form-group">
                <label>Discount %</label>
                <input
                    type="number"
                    id="discountPercentage"
                    name="discountPercentage"
                    min="0"
                    max="100"
                    step="0.01"
                    value="0"
                    placeholder="e.g. 10"
                    oninput="calculateSellingPrice()"
                >
            </div>

            <div class="form-group">
                <label>Selling Price ₹ * (Auto Calculated)</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    min="0"
                    step="0.01"
                    placeholder="Auto calculated price"
                    required
                    readonly
                >
            </div>

            <div class="form-group">
                <label>Stock</label>
                <input
                    type="number"
                    name="stock"
                    min="0"
                    value="0"
                >
            </div>

            <div class="form-group">
                <label>Pack Size</label>
                <input
                    type="text"
                    name="packSize"
                    placeholder="e.g. 200 ml"
                >
            </div>

            <div class="form-group">
                <label>Batch No.</label>
                <input
                    type="text"
                    name="batchNo"
                    placeholder="Enter batch number"
                >
            </div>

            <div class="form-group">
                <label>MFG Date</label>
                <input type="date" name="mfgDate">
            </div>

            <div class="form-group">
                <label>EXP Date</label>
                <input type="date" name="expDate">
            </div>

        </div>
    </div>

    <div class="section">

        <div class="section-title">
            💊 Composition
        </div>

        <div id="compositionBox">

            <div class="composition-row">

                <input
                    type="text"
                    name="compositionName[]"
                    placeholder="Composition name"
                >

                <input
                    type="text"
                    name="compositionStrength[]"
                    placeholder="Strength e.g. 275 mg"
                >

                <button
                    type="button"
                    class="remove-btn"
                    onclick="removeComposition(this)"
                >
                    ✕
                </button>

            </div>

        </div>

        <button
            type="button"
            class="add-btn"
            onclick="addComposition()"
        >
            ➕ Add Composition
        </button>

    </div>

    <div class="section">

        <div class="section-title">
            🖼 Product Images
        </div>

        <div class="form-group full file-box">

            <label>Main Product Image</label>

            <input
                type="file"
                name="image"
                accept="image/*"
            >

            <div class="file-help">
                Select the main product image.
            </div>

        </div>

        <br>

        <div class="form-group full file-box">

            <label>More Product Images</label>

            <input
                type="file"
                name="images"
                accept="image/*"
                multiple
            >

            <div class="file-help">
                You can select multiple product images.
            </div>

        </div>

    </div>

    <div class="section">

        <div class="section-title">
            🎥 Product Video
        </div>

        <div class="form-group full file-box">

            <label>Upload Product Video</label>

            <input
                type="file"
                name="video"
                accept="video/mp4,video/webm,video/ogg"
            >

            <div class="file-help">
                Recommended format: MP4, WebM or OGG.
            </div>

        </div>

    </div>

    <div class="section">

        <div class="section-title">
            📋 Product Details
        </div>

        <div class="form-grid">

            <div class="form-group full">
                <label>Description</label>
                <textarea
                    name="description"
                    placeholder="Enter product description"
                ></textarea>
            </div>

            <div class="form-group full">
                <label>Uses</label>
                <textarea
                    name="uses"
                    placeholder="Enter uses"
                ></textarea>
            </div>

            <div class="form-group full">
                <label>Benefits</label>
                <textarea
                    name="benefits"
                    placeholder="Enter benefits"
                ></textarea>
            </div>

            <div class="form-group full">
                <label>Dosage</label>
                <textarea
                    name="dosage"
                    placeholder="Enter dosage"
                ></textarea>
            </div>

            <div class="form-group full">
                <label>Side Effects</label>
                <textarea
                    name="sideEffects"
                    placeholder="Enter side effects"
                ></textarea>
            </div>

            <div class="form-group full">
                <label>Storage</label>
                <textarea
                    name="storage"
                    placeholder="Enter storage instructions"
                ></textarea>
            </div>

        </div>
    </div>

    <button type="submit" class="submit-btn">
        💾 Save Product
    </button>

</form>

</div>

<script>

function calculateSellingPrice(){

    const mrp = Number(
        document.getElementById("mrp").value || 0
    );

    let discount = Number(
        document.getElementById("discountPercentage").value || 0
    );

    discount = Math.min(
        100,
        Math.max(0, discount)
    );

    const sellingPrice =
        mrp - (mrp * discount / 100);

    document.getElementById("price").value =
        mrp > 0
            ? sellingPrice.toFixed(2)
            : "";
}

function addComposition(){

    const container =
        document.getElementById("compositionBox");

    const row =
        document.createElement("div");

    row.className =
        "composition-row";

    row.innerHTML = \`

        <input
            type="text"
            name="compositionName[]"
            placeholder="Composition name"
        >

        <input
            type="text"
            name="compositionStrength[]"
            placeholder="Strength e.g. 275 mg"
        >

        <button
            type="button"
            class="remove-btn"
            onclick="removeComposition(this)"
        >
            ✕
        </button>
    \`;

    container.appendChild(row);
}

function removeComposition(button){

    const rows =
        document.querySelectorAll(".composition-row");

    if(rows.length > 1){
        button.parentElement.remove();
    }
}

</script>

`;
}

module.exports = AddProduct;
