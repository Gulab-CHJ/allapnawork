


// function EditProduct(product = {}) {

//     const escapeHTML = (value) => {
//         if (value === null || value === undefined) {
//             return "";
//         }

//         return String(value)
//             .replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;")
//             .replace(/"/g, "&quot;")
//             .replace(/'/g, "&#039;");
//     };


//     const formatDate = (value) => {
//         if (!value) {
//             return ""        }

//         const date = new Date(value);

//         if (isNaN(date.getTime())) {
//             return "";
//         }

//         return date.toISOString().split("T")[0];
//     };


//     let compositions = [];

//     if (Array.isArray(product.composition)) {

//         compositions = product.composition
//             .filter(Boolean)
//             .map((item) => {

//                 if (typeof item === "object") {
//                     return [
//                         item.name || "",
//                         item.strength || ""
//                     ].filter(Boolean).join(" ");
//                 }

//                 return String(item);
//             });

//     } else if (product.composition) {
//         compositions = [String(product.composition)];
//     }

//     if (!compositions.length) {
//         compositions = [""];
//     }


//     const getMediaURL = (media) => {

//         if (!media) {
//             return "";
//         }

//         if (typeof media === "object") {
//             return String(
//                 media.url ||
//                 media.secure_url ||
//                 media.path ||
//                 ""
//             ).trim();
//         }

//         return String(media).trim();
//     };


//     let images = Array.isArray(product.images)
//         ? product.images
//             .map(getMediaURL)
//             .filter(Boolean)
//         : [];

//     const mainImage = getMediaURL(product.image);

//     if (mainImage && !images.includes(mainImage)) {
//         images.unshift(mainImage);
//     }

//     images = [...new Set(images)];


//     let videos = Array.isArray(product.videos)
//         ? product.videos.filter(Boolean)
//         : [];

//     if (product.video && !videos.includes(product.video)) {
//         videos.unshift(product.video);
//     }

//     if (product.videoUrl && !videos.includes(product.videoUrl)) {
//         videos.unshift(product.videoUrl);
//     }

//     videos = [...new Set(videos)];


//     const mrp = Number(product.mrp) || 0;
//     const price = Number(product.price) || 0;

//     const savedDiscount = Number(product.discountPercentage);

//     const discountPercentage = Number.isFinite(savedDiscount)
//         ? Math.min(100, Math.max(0, savedDiscount))
//         : (
//             mrp > 0
//                 ? Math.min(
//                     100,
//                     Math.max(
//                         0,
//                         ((mrp - price) / mrp) * 100
//                     )
//                 )
//                 : 0
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

//     <title>Edit Pharma Product</title>

//     <style>

//         *{
//             box-sizing:border-box;
//             font-family:"Segoe UI",Arial,s-serif;
//         }

//         body{
//             margin:0;
//             min-height:100vh;
//             padding:25px 12px;
//             background:linear-gradient(135deg,#2563eb,#06b6d4);
//         }

//         .container{
//             width:100%;
//             max-width:1050px;
//             margin:auto;
//             padding:28px;
//             border-radius:20px;
//             background:#fff;
//             box-shadow:0 20px 50px rgba(0,0,0,.2);
//         }

//         .header{
//             margin-bottom:25px;
//             padding-bottom:16px;
//             border-bottom:1px solid #e5e7eb;
//         }

//         .header h2{
//             margin:0 0 7px;
//             color:#1e3a8a;
//         }

//         .header p{
//             margin:0;
//             color:#64748b;
//         }

//         .section{
//             margin-top:28px;
//         }

//         .section-title{
//             margin-bottom:14px;
//             padding-bottom:10px;
//             color:#1e3a8a;
//             font-size:19px;
//             font-weight:700;
//             border-bottom:2px solid #dbeafe;
//         }

//         .form-grid{
//             display:grid;
//             grid-template-columns:repeat(2,minmax(0,1fr));
//             gap:16px;
//         }

//         .form-group{
//             display:flex;
//             flex-direction:column;
//             gap:7px;
//         }

//         .form-group.full{
//             grid-column:1/-1;
//         }

//         label{
//             color:#374151;
//             font-weight:650;
//         }

//         input,
//         textarea,
//         select{
//             width:100%;
//             padding:12px 13px;
//             font-size:15px;
//             color:#111827;
//             border:1px solid #cbd5e1;
//             border-radius:10px;
//             outline:none;
//         }

//         input:focus,
//         textarea:focus,
//         select:focus{
//             border-color:#2563eb;
//             box-shadow:0 0 0 3px rgba(37,99,235,.12);
//         }

//         input[readonly]{
//             color:#1d4ed8;
//             font-weight:700;
//             background:#eff6ff;
//         }

//         textarea{
//             min-height:100px;
//             resize:vertical;
//         }

//         .composition-row{
//             display:grid;
//             grid-template-columns:1fr auto;
//             gap:10px;
//             margin-bottom:10px;
//         }

//         .add-btn,
//         .remove-btn,
//         .update-btn{
//             border:0;
//             cursor:pointer;
//             font-weight:700;
//             border-radius:9px;
//         }

//         .add-btn{
//             padding:11px 16px;
//             color:#fff;
//             background:#2563eb;
//         }

//         .remove-btn{
//             min-width:46px;
//             color:#fff;
//             background:#dc2626;
//             font-size:20px;
//         }

//         .update-btn{
//             width:100%;
//             margin-top:30px;
//             padding:15px;
//             color:#fff;
//             font-size:17px;
//             background:linear-gradient(135deg,#2563eb,#1d4ed8);
//         }

//         .update-btn:disabled{
//             opacity:.7;
//             cursor:not-allowed;
//         }

//         .back{
//             display:block;
//             width:max-content;
//             margin:20px auto 0;
//             color:#1d4ed8;
//             font-weight:700;
//             text-decoration:none;
//         }

//         .image-grid,
//         .video-grid{
//             display:grid;
//             grid-template-columns:repeat(auto-fill,minmax(170px,1fr));
//             gap:14px;
//         }

//         .media-card{
//             overflow:hidden;
//             border:1px solid #e2e8f0;
//             border-radius:12px;
//             background:#f8fafc;
//             transition:.2s ease;
//         }

//         .media-card img,
//         .media-card video{
//             display:block;
//             width:100%;
//             height:150px;
//             object-fit:cover;
//             background:#e2e8f0;
//         }

//         .media-name{
//             padding:9px;
//             color:#475569;
//             font-size:13px;
//             text-align:center;
//         }

//         .image-remove-control{
//             display:flex;
//             align-items:center;
//             justify-content:center;
//             gap:7px;
//             margin:0 9px 10px;
//             padding:9px 10px;
//             color:#b91c1c;
//             font-size:13px;
//             font-weight:800;
//             border:1px solid #fecaca;
//             border-radius:9px;
//             background:#fef2f2;
//             cursor:pointer;
//             user-select:none;
//         }

//         .image-remove-control input{
//             width:17px;
//             height:17px;
//             margin:0;
//             accent-color:#dc2626;
//             cursor:pointer;
//         }

//         .media-card.image-marked-remove{
//             border-color:#ef4444;
//             background:#fff1f2;
//             box-shadow:0 0 0 3px rgba(239,68,68,.12);
//         }

//         .media-card.image-marked-remove img{
//             opacity:.28;
//             filter:grayscale(1);
//         }

//         .media-card.image-marked-remove .media-name{
//             color:#b91c1c;
//             font-weight:800;
//             text-decoration:line-through;
//         }

//         .remove-help{
//             margin:12px 0 0;
//             color:#64748b;
//             font-size:13px;
//         }

//         .empty-box{
//             padding:16px;
//             color:#64748b;
//             border:1px dashed #cbd5e1;
//             border-radius:10px;
//             background:#f8fafc;
//         }

//         .help{
//             margin:0;
//             color:#64748b;
//             font-size:13px;
//         }

//         @media(max-width:700px){

//             body{
//                 padding:10px;
//             }

//             .container{
//                 padding:17px;
//                 border-radius:14px;
//             }

//             .form-grid,
//             .composition-row{
//                 grid-template-columns:1fr;
//             }

//             .form-group.full{
//                 grid-column:auto;
//             }

//             .remove-btn{
//                 min-height:42px;
//             }

//             .image-grid,
//             .video-grid{
//                 grid-template-columns:repeat(2,minmax(0,1fr));
//             }
//         }

//     </style>

// </head>

// <body>

// <div class="container">

//     <div class="header">
//         <h2>✏️ Edit Pharma Product</h2>
//         <p>Update product information, images and videos</p>
//     </div>

//     <form
//         action="/admin/edit-product/${escapeHTML(product._id)}"
//         method="POST"
//         enctype="multipart/form-data"
//     >

//         <div class="section">

//             <div class="section-title">
//                 📦 Basic Product Information
//             </div>

//             <div class="form-grid">

//                 <div class="form-group">
//                     <label>Product Name *</label>

//                     <input
//                         type="text"
//                         name="name"
//                         value="${escapeHTML(product.name)}"
//                         required
//                     >
//                 </div>

//                 <div class="form-group">
//                     <label>Brand Name</label>

//                     <input
//                         type="text"
//                         name="brand"
//                         value="${escapeHTML(product.brand)}"
//                     >
//                 </div>

//                 <div class="form-group">
//                     <label>Category</label>

//                     <select name="category">

//                         <option value="">
//                             Select Category
//                         </option>

//                         <option
//                             value="Tablet"
//                             ${product.category === "Tablet" ? "selected" : ""}
//                         >
//                             Tablet
//                         </option>

//                         <option
//                             value="Capsule"
//                             ${product.category === "Capsule" ? "selected" : ""}
//                         >
//                             Capsule
//                         </option>

//                         <option
//                             value="Syrup"
//                             ${product.category === "Syrup" ? "selected" : ""}
//                         >
//                             Syrup
//                         </option>

//                         <option
//                             value="Drops"
//                             ${product.category === "Drops" ? "selected" : ""}
//                         >
//                             Drops
//                         </option>

//                         <option
//                             value="Injection"
//                             ${product.category === "Injection" ? "selected" : ""}
//                         >
//                             Injection
//                         </option>

//                         <option
//                             value="Cream"
//                             ${product.category === "Cream" ? "selected" : ""}
//                         >
//                             Cream
//                         </option>

//                         <option
//                             value="Soap"
//                             ${product.category === "Soap" ? "selected" : ""}
//                         >
//                             Soap
//                         </option>

//                         <option
//                             value="Other"
//                             ${product.category === "Other" ? "selected" : ""}
//                         >
//                             Other
//                         </option>

//                     </select>
//                 </div>

//                 <div class="form-group">
//                     <label>Manufacturer</label>

//                     <input
//                         type="text"
//                         name="manufacturer"
//                         value="${escapeHTML(product.manufacturer)}"
//                     >
//                 </div>

//                 <div class="form-group">
//                     <label>MRP ₹ *</label>

//                     <input
//                         type="number"
//                         id="mrp"
//                         name="mrp"
//                         value="${product.mrp ?? ""}"
//                         min="0"
//                         step="0.01"
//                         required
//                         oninput="calculateSellingPrice()"
//                     >
//                 </div>

//                 <div class="form-group">
//                     <label>Discount %</label>

//                     <input
//                         type="number"
//                         id="discountPercentage"
//                         name="discountPercentage"
//                         value="${discountPercentage.toFixed(2)}"
//                         min="0"
//                         max="100"
//                         step="0.01"
//                         placeholder="e.g. 10"
//                         oninput="calculateSellingPrice()"
//                     >
//                 </div>

//                 <div class="form-group">
//                     <label>Selling Price ₹ * (Auto Calculated)</label>

//                     <input
//                         type="number"
//                         id="price"
//                         name="price"
//                         value="${product.price ?? ""}"
//                         min="0"
//                         step="0.01"
//                         readonly
//                         required
//                     >
//                 </div>

//                 <div class="form-group">
//                     <label>Stock Quantity</label>

//                     <input
//                         type="number"
//                         name="stock"
//                         value="${product.stock ?? 0}"
//                         min="0"
//                     >
//                 </div>

//                 <div class="form-group">
//                     <label>Pack Size</label>

//                     <input
//                         type="text"
//                         name="packSize"
//                         value="${escapeHTML(product.packSize)}"
//                         placeholder="e.g. 200 ml"
//                     >
//                 </div>

//                 <div class="form-group">
//                     <label>Batch Number</label>

//                     <input
//                         type="text"
//                         name="batchNo"
//                         value="${escapeHTML(product.batchNo)}"
//                     >
//                 </div>

//                 <div class="form-group">
//                     <label>Manufacturing Date</label>

//                     <input
//                         type="date"
//                         name="mfgDate"
//                         value="${formatDate(product.mfgDate)}"
//                     >
//                 </div>

//                 <div class="form-group">
//                     <label>Expiry Date</label>

//                     <input
//                         type="date"
//                         name="expDate"
//                         value="${formatDate(product.expDate)}"
//                     >
//                 </div>

//             </div>
//         </div>


//         <div class="section">

//             <div class="section-title">
//                 💊 Composition
//             </div>

//             <div id="compositionBox">

//                 ${compositions.map((item, index) => `

//                     <div class="composition-row">

//                         <input
//                             type="text"
//                             name="composition[]"
//                             value="${escapeHTML(item)}"
//                             placeholder="Composition ${index + 1}"
//                         >

//                         <button
//                             type="button"
//                             class="remove-btn"
//                             onclick="removeComposition(this)"
//                         >
//                             ×
//                         </button>

//                     </div>

//                 `).join("")}

//             </div>

//             <button
//                 type="button"
//                 class="add-btn"
//                 onclick="addComposition()"
//             >
//                 + Add Composition
//             </button>

//         </div>


//         <div class="section">

//             <div class="section-title">
//                 📋 Product Details
//             </div>

//             <div class="form-grid">

//                 <div class="form-group full">
//                     <label>Uses</label>

//                     <textarea
//                         name="uses"
//                         placeholder="Enter product uses"
//                     >${escapeHTML(product.uses)}</textarea>
//                 </div>

//                 <div class="form-group full">
//                     <label>Benefits</label>

//                     <textarea
//                         name="benefits"
//                         placeholder="Enter product benefits"
//                     >${escapeHTML(product.benefits)}</textarea>
//                 </div>

//                 <div class="form-group full">
//                     <label>Dosage</label>

//                     <textarea
//                         name="dosage"
//                         placeholder="Enter dosage"
//                     >${escapeHTML(product.dosage)}</textarea>
//                 </div>

//                 <div class="form-group full">
//                     <label>Side Effects</label>

//                     <textarea
//                         name="sideEffects"
//                         placeholder="Enter side effects"
//                     >${escapeHTML(product.sideEffects)}</textarea>
//                 </div>

//                 <div class="form-group full">
//                     <label>Storage Instructions</label>

//                     <textarea
//                         name="storage"
//                         placeholder="Enter storage instructions"
//                     >${escapeHTML(product.storage)}</textarea>
//                 </div>

//                 <div class="form-group full">
//                     <label>Full Description</label>

//                     <textarea
//                         name="description"
//                         placeholder="Enter full product description"
//                     >${escapeHTML(product.description)}</textarea>
//                 </div>

//             </div>
//         </div>


//         <div class="section">

//             <div class="section-title">
//                 🖼 Existing Product Images
//             </div>

//             ${
//                 images.length
//                     ? `

//                         <div class="image-grid">

//                             ${images.map((image, index) => `

//                                 <div
//                                     class="media-card"
//                                     data-image-card
//                                 >

//                                     <img
//                                         src="${escapeHTML(image)}"
//                                         alt="Product Image ${index + 1}"
//                                         onerror="this.style.display='none'"
//                                     >

//                                     <div class="media-name">
//                                         Image ${index + 1}
//                                     </div>

//                                     <label class="image-remove-control">

//                                         <input
//                                             type="checkbox"
//                                             name="removeImages"
//                                             value="${escapeHTML(image)}"
//                                             onchange="toggleImageRemoval(this)"
//                                         >

//                                         <span>
//                                             🗑 Remove Image
//                                         </span>

//                                     </label>

//                                 </div>

//                             `).join("")}

//                         </div>

//                         <p class="remove-help">
//                             जिस image को हटाना है, उसके नीचे
//                             <strong>Remove Image</strong> select करें और फिर
//                             <strong>Update Product</strong> दबाएँ।
//                         </p>

//                     `
//                     : `

//                         <div class="empty-box">
//                             No existing product image.
//                         </div>

//                     `
//             }

//         </div>


//         <div class="section">

//             <div class="section-title">
//                 📷 Add New Product Images
//             </div>

//             <div class="form-group">

//                 <label>Select New Images</label>

//                 <input
//                     type="file"
//                     name="images"
//                     accept="image/*"
//                     multiple
//                 >

//                 <p class="help">
//                     You can select multiple new images.
//                 </p>

//             </div>

//         </div>


//         <div class="section">

//             <div class="section-title">
//                 🎥 Existing Product Videos
//             </div>

//             ${
//                 videos.length
//                     ? `

//                         <div class="video-grid">

//                             ${videos.map((video, index) => `

//                                 <div class="media-card">

//                                     <video controls preload="metadata">

//                                         <source
//                                             src="${escapeHTML(video)}"
//                                         >

//                                         Your browser does not support video.

//                                     </video>

//                                     <div class="media-name">
//                                         Video ${index + 1}
//                                     </div>

//                                 </div>

//                             `).join("")}

//                         </div>

//                     `
//                     : `

//                         <div class="empty-box">
//                             No existing product video.
//                         </div>

//                     `
//             }

//         </div>


//         <div class="section">

//             <div class="section-title">
//                 🔗 Add Video URL
//             </div>

//             <div class="form-group">

//                 <label>Product Video URL</label>

//                 <input
//                     type="url"
//                     name="videoUrl"
//                     value="${escapeHTML(product.videoUrl || "")}"
//                     placeholder="https://example.com/product-video.mp4"
//                 >

//                 <p class="help">
//                     You can add a direct video URL.
//                 </p>

//             </div>

//         </div>


//         <div class="section">

//             <div class="section-title">
//                 🎬 Upload New Product Video
//             </div>

//             <div class="form-group">

//                 <label>Select Video</label>

//                 <input
//                     type="file"
//                     name="videos"
//                     accept="video/*"
//                     multiple
//                 >

//                 <p class="help">
//                     You can select one or multiple product videos.
//                 </p>

//             </div>

//         </div>


//         <button
//             type="submit"
//             class="update-btn"
//         >
//             💾 Update Product
//         </button>

//     </form>

//     <a
//         href="/admin/manage-products"
//         class="back"
//     >
//         ⬅ Back to Manage Products
//     </a>

// </div>


// <script>

// function calculateSellingPrice() {

//     const mrp = Number(
//         document.getElementById("mrp").value || 0
//     );

//     let discount = Number(
//         document.getElementById("discountPercentage").value || 0
//     );

//     if (discount < 0) {
//         discount = 0;
//     }

//     if (discount > 100) {
//         discount = 100;
//     }

//     const sellingPrice =
//         mrp - (mrp * discount / 100);

//     document.getElementById("price").value =
//         mrp > 0
//             ? sellingPrice.toFixed(2)
//             : "";
// }


// function addComposition() {

//     const box =
//         document.getElementById("compositionBox");

//     const row =
//         document.createElement("div");

//     row.className =
//         "composition-row";

//     row.innerHTML = \`

//         <input
//             type="text"
//             name="composition[]"
//             placeholder="Composition name"
//         >

//         <button
//             type="button"
//             class="remove-btn"
//             onclick="removeComposition(this)"
//         >
//             ×
//         </button>

//     \`;

//     box.appendChild(row);
// }


// function removeComposition(button) {

//     const rows =
//         document.querySelectorAll(".composition-row");

//     if (rows.length > 1) {
//         button.parentElement.remove();
//     }
// }


// function toggleImageRemoval(checkbox) {

//     const card = checkbox.closest(
//         "[data-image-card]"
//     );

//     if (!card) {
//         return;
//     }

//     card.classList.toggle(
//         "image-marked-remove",
//         checkbox.checked
//     );

//     const text = card.querySelector(
//         ".image-remove-control span"
//     );

//     if (text) {

//         text.textContent = checkbox.checked
//             ? "✓ Image Will Be Removed"
//             : "🗑 Remove Image";
//     }
// }


// document.querySelector("form").addEventListener(
//     "submit",
//     function(event) {

//         const selectedImages =
//             document.querySelectorAll(
//                 'input[name="removeImages"]:checked'
//             );

//         if (selectedImages.length > 0) {

//             const confirmed = window.confirm(
//                 selectedImages.length +
//                 " image(s) remove होंगी। क्या आप Update करना चाहते हैं?"
//             );

//             if (!confirmed) {
//                 event.preventDefault();
//                 return;
//             }
//         }

//         const button =
//             document.querySelector(".update-btn");

//         button.disabled = true;
//         button.innerHTML = "⏳ Updating Product...";
//     }
// );

// </script>

// </body>
// </html>

// `;
// }

// module.exports = EditProduct;

function EditProduct(product = {}) {

    /* =====================================================
       SAFE HTML
    ===================================================== */

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


    /* =====================================================
       DATE FORMAT
    ===================================================== */

    const formatDate = (value) => {

        if (!value) {
            return "";
        }

        const date = new Date(value);

        if (isNaN(date.getTime())) {
            return "";
        }

        return date
            .toISOString()
            .split("T")[0];
    };


    /* =====================================================
       COMPOSITION
    ===================================================== */

    let compositions = [];

    if (
        Array.isArray(product.composition)
    ) {

        compositions =
            product.composition
                .filter(Boolean)
                .map(item => {

                    if (
                        typeof item === "object"
                    ) {

                        return [
                            item.name || "",
                            item.strength || ""
                        ]
                            .filter(Boolean)
                            .join(" ");
                    }

                    return String(item);

                });

    }
    else if (product.composition) {

        compositions = [
            String(product.composition)
        ];

    }

    if (!compositions.length) {
        compositions = [""];
    }


    /* =====================================================
       MEDIA URL
    ===================================================== */

    const getMediaURL = (media) => {

        if (!media) {
            return "";
        }

        if (
            typeof media === "object"
        ) {

            return String(
                media.url ||
                media.secure_url ||
                media.path ||
                ""
            ).trim();

        }

        return String(media).trim();

    };


    /* =====================================================
       IMAGES
    ===================================================== */

    let images =
        Array.isArray(product.images)

            ? product.images
                .map(getMediaURL)
                .filter(Boolean)

            : [];


    const mainImage =
        getMediaURL(product.image);


    if (
        mainImage &&
        !images.includes(mainImage)
    ) {

        images.unshift(mainImage);

    }


    images = [
        ...new Set(images)
    ];


    /* =====================================================
       VIDEOS
    ===================================================== */

    let videos = [];


    if (
        Array.isArray(product.videos)
    ) {

        videos.push(
            ...product.videos
                .map(getMediaURL)
                .filter(Boolean)
        );

    }


    const singleVideo =
        getMediaURL(product.video);


    if (
        singleVideo &&
        !videos.includes(singleVideo)
    ) {

        videos.unshift(singleVideo);

    }


    const videoURL =
        getMediaURL(product.videoUrl);


    if (
        videoURL &&
        !videos.includes(videoURL)
    ) {

        videos.push(videoURL);

    }


    videos = [
        ...new Set(videos)
    ];


    /* =====================================================
       PRICE / DISCOUNT
    ===================================================== */

    const mrp =
        Number(product.mrp) || 0;

    const price =
        Number(product.price) || 0;


    const savedDiscount =
        Number(
            product.discountPercentage
        );


    const discountPercentage =
        Number.isFinite(savedDiscount)

            ? Math.min(
                100,
                Math.max(
                    0,
                    savedDiscount
                )
            )

            : (
                mrp > 0

                    ? Math.min(
                        100,
                        Math.max(
                            0,
                            (
                                (mrp - price) /
                                mrp
                            ) * 100
                        )
                    )

                    : 0
            );


    /* =====================================================
       PAGE
    ===================================================== */

    return `

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>Edit Pharma Product</title>


<style>

*{
    box-sizing:border-box;
    font-family:
        "Segoe UI",
        Arial,
        sans-serif;
}


body{

    margin:0;

    min-height:100vh;

    padding:
        25px
        12px;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #06b6d4
        );

}


.container{

    width:100%;

    max-width:1050px;

    margin:auto;

    padding:28px;

    border-radius:20px;

    background:#ffffff;

    box-shadow:
        0 20px 50px
        rgba(0,0,0,.20);

}


.header{

    margin-bottom:25px;

    padding-bottom:16px;

    border-bottom:
        1px solid #e5e7eb;

}


.header h2{

    margin:
        0
        0
        7px;

    color:#1e3a8a;

}


.header p{

    margin:0;

    color:#64748b;

}


.section{

    margin-top:28px;

}


.section-title{

    margin-bottom:14px;

    padding-bottom:10px;

    color:#1e3a8a;

    font-size:19px;

    font-weight:700;

    border-bottom:
        2px solid #dbeafe;

}


.form-grid{

    display:grid;

    grid-template-columns:
        repeat(
            2,
            minmax(0,1fr)
        );

    gap:16px;

}


.form-group{

    display:flex;

    flex-direction:column;

    gap:7px;

}


.form-group.full{

    grid-column:1/-1;

}


label{

    color:#374151;

    font-weight:650;

}


input,
textarea,
select{

    width:100%;

    padding:
        12px
        13px;

    font-size:15px;

    color:#111827;

    border:
        1px solid #cbd5e1;

    border-radius:10px;

    outline:none;

}


input:focus,
textarea:focus,
select:focus{

    border-color:#2563eb;

    box-shadow:
        0 0 0 3px
        rgba(37,99,235,.12);

}


input[readonly]{

    color:#1d4ed8;

    font-weight:700;

    background:#eff6ff;

}


textarea{

    min-height:100px;

    resize:vertical;

}


/* =====================================================
   COMPOSITION
===================================================== */

.composition-row{

    display:grid;

    grid-template-columns:
        1fr
        auto;

    gap:10px;

    margin-bottom:10px;

}


.add-btn,
.remove-btn,
.update-btn{

    border:0;

    cursor:pointer;

    font-weight:700;

    border-radius:9px;

}


.add-btn{

    padding:
        11px
        16px;

    color:#fff;

    background:#2563eb;

}


.add-btn:hover{

    background:#1d4ed8;

}


.remove-btn{

    min-width:46px;

    color:#fff;

    background:#dc2626;

    font-size:20px;

}


/* =====================================================
   MEDIA
===================================================== */

.image-grid,
.video-grid{

    display:grid;

    grid-template-columns:
        repeat(
            auto-fill,
            minmax(170px,1fr)
        );

    gap:14px;

}


.media-card{

    overflow:hidden;

    border:
        1px solid #e2e8f0;

    border-radius:12px;

    background:#f8fafc;

    transition:.2s ease;

}


.media-card img,
.media-card video{

    display:block;

    width:100%;

    height:150px;

    object-fit:cover;

    background:#e2e8f0;

}


.media-name{

    padding:9px;

    color:#475569;

    font-size:13px;

    text-align:center;

}


/* =====================================================
   IMAGE REMOVE
===================================================== */

.image-remove-control{

    display:flex;

    align-items:center;

    justify-content:center;

    gap:7px;

    margin:
        0
        9px
        10px;

    padding:
        9px
        10px;

    color:#b91c1c;

    font-size:13px;

    font-weight:800;

    border:
        1px solid #fecaca;

    border-radius:9px;

    background:#fef2f2;

    cursor:pointer;

    user-select:none;

}


.image-remove-control input{

    width:17px;

    height:17px;

    margin:0;

    accent-color:#dc2626;

    cursor:pointer;

}


.media-card.image-marked-remove{

    border-color:#ef4444;

    background:#fff1f2;

    box-shadow:
        0 0 0 3px
        rgba(239,68,68,.12);

}


.media-card.image-marked-remove img{

    opacity:.28;

    filter:grayscale(1);

}


.media-card.image-marked-remove
.media-name{

    color:#b91c1c;

    font-weight:800;

    text-decoration:
        line-through;

}


.remove-help{

    margin:
        12px
        0
        0;

    color:#64748b;

    font-size:13px;

}


.empty-box{

    padding:16px;

    color:#64748b;

    border:
        1px dashed #cbd5e1;

    border-radius:10px;

    background:#f8fafc;

}


.help{

    margin:0;

    color:#64748b;

    font-size:13px;

}


/* =====================================================
   UPDATE BUTTON
===================================================== */

.update-btn{

    width:100%;

    margin-top:30px;

    padding:15px;

    color:#fff;

    font-size:17px;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #1d4ed8
        );

}


.update-btn:hover{

    opacity:.96;

}


.update-btn:disabled{

    opacity:.7;

    cursor:not-allowed;

}


.back{

    display:block;

    width:max-content;

    margin:
        20px
        auto
        0;

    color:#1d4ed8;

    font-weight:700;

    text-decoration:none;

}


/* =====================================================
   MOBILE
===================================================== */

@media(max-width:700px){

    body{

        padding:10px;

    }


    .container{

        padding:17px;

        border-radius:14px;

    }


    .form-grid,
    .composition-row{

        grid-template-columns:1fr;

    }


    .form-group.full{

        grid-column:auto;

    }


    .remove-btn{

        min-height:42px;

    }


    .image-grid,
    .video-grid{

        grid-template-columns:
            repeat(
                2,
                minmax(0,1fr)
            );

    }


    .media-card img,
    .media-card video{

        height:130px;

    }

}

</style>

</head>


<body>


<div class="container">


    <div class="header">

        <h2>
            ✏️ Edit Pharma Product
        </h2>

        <p>
            Update product information,
            images and video
        </p>

    </div>


    <form

        action="/admin/edit-product/${escapeHTML(product._id)}"

        method="POST"

        enctype="multipart/form-data"

    >


        <!-- =========================================
             BASIC PRODUCT INFORMATION
        ========================================== -->

        <div class="section">


            <div class="section-title">
                📦 Basic Product Information
            </div>


            <div class="form-grid">


                <div class="form-group">

                    <label>
                        Product Name *
                    </label>

                    <input
                        type="text"
                        name="name"
                        value="${escapeHTML(product.name)}"
                        required
                    >

                </div>


                <div class="form-group">

                    <label>
                        Brand Name
                    </label>

                    <input
                        type="text"
                        name="brand"
                        value="${escapeHTML(product.brand)}"
                    >

                </div>


                <div class="form-group">

                    <label>
                        Category
                    </label>


                    <select name="category">


                        <option value="">
                            Select Category
                        </option>


                        <option
                            value="Tablet"
                            ${product.category === "Tablet" ? "selected" : ""}
                        >
                            Tablet
                        </option>


                        <option
                            value="Capsule"
                            ${product.category === "Capsule" ? "selected" : ""}
                        >
                            Capsule
                        </option>


                        <option
                            value="Syrup"
                            ${product.category === "Syrup" ? "selected" : ""}
                        >
                            Syrup
                        </option>


                        <option
                            value="Drops"
                            ${product.category === "Drops" ? "selected" : ""}
                        >
                            Drops
                        </option>


                        <option
                            value="Injection"
                            ${product.category === "Injection" ? "selected" : ""}
                        >
                            Injection
                        </option>


                        <option
                            value="Cream"
                            ${product.category === "Cream" ? "selected" : ""}
                        >
                            Cream
                        </option>


                        <option
                            value="Soap"
                            ${product.category === "Soap" ? "selected" : ""}
                        >
                            Soap
                        </option>


                        <option
                            value="Gel"
                            ${product.category === "Gel" ? "selected" : ""}
                        >
                            Gel
                        </option>


                        <option
                            value="Other"
                            ${product.category === "Other" ? "selected" : ""}
                        >
                            Other
                        </option>


                    </select>

                </div>


                <div class="form-group">

                    <label>
                        Manufacturer
                    </label>

                    <input
                        type="text"
                        name="manufacturer"
                        value="${escapeHTML(product.manufacturer)}"
                    >

                </div>


                <!-- MRP -->

                <div class="form-group">

                    <label>
                        MRP ₹ *
                    </label>

                    <input
                        type="number"
                        id="mrp"
                        name="mrp"
                        value="${product.mrp ?? ""}"
                        min="0"
                        step="0.01"
                        required
                        oninput="calculateSellingPrice()"
                    >

                </div>


                <!-- DISCOUNT -->

                <div class="form-group">

                    <label>
                        Discount %
                    </label>

                    <input
                        type="number"
                        id="discountPercentage"
                        name="discountPercentage"
                        value="${discountPercentage.toFixed(2)}"
                        min="0"
                        max="100"
                        step="0.01"
                        placeholder="e.g. 10"
                        oninput="calculateSellingPrice()"
                    >

                </div>


                <!-- SELLING PRICE -->

                <div class="form-group">

                    <label>
                        Selling Price ₹ *
                        (Auto Calculated)
                    </label>

                    <input
                        type="number"
                        id="price"
                        name="price"
                        value="${product.price ?? ""}"
                        min="0"
                        step="0.01"
                        readonly
                        required
                    >

                </div>


                <!-- STOCK -->

                <div class="form-group">

                    <label>
                        Stock Quantity
                    </label>

                    <input
                        type="number"
                        name="stock"
                        value="${product.stock ?? 0}"
                        min="0"
                    >

                </div>


                <div class="form-group">

                    <label>
                        Pack Size
                    </label>

                    <input
                        type="text"
                        name="packSize"
                        value="${escapeHTML(product.packSize)}"
                        placeholder="e.g. 200 ml"
                    >

                </div>


                <div class="form-group">

                    <label>
                        Batch Number
                    </label>

                    <input
                        type="text"
                        name="batchNo"
                        value="${escapeHTML(product.batchNo)}"
                    >

                </div>


                <div class="form-group">

                    <label>
                        Manufacturing Date
                    </label>

                    <input
                        type="date"
                        name="mfgDate"
                        value="${formatDate(product.mfgDate)}"
                    >

                </div>


                <div class="form-group">

                    <label>
                        Expiry Date
                    </label>

                    <input
                        type="date"
                        name="expDate"
                        value="${formatDate(product.expDate)}"
                    >

                </div>


            </div>

        </div>


        <!-- =========================================
             COMPOSITION
        ========================================== -->

        <div class="section">


            <div class="section-title">
                💊 Composition
            </div>


            <div id="compositionBox">


                ${compositions.map(
                    (item, index) => `

                    <div class="composition-row">

                        <input
                            type="text"
                            name="composition[]"
                            value="${escapeHTML(item)}"
                            placeholder="Composition ${index + 1}"
                        >

                        <button
                            type="button"
                            class="remove-btn"
                            onclick="removeComposition(this)"
                        >
                            ×
                        </button>

                    </div>

                `
                ).join("")}


            </div>


            <button
                type="button"
                class="add-btn"
                onclick="addComposition()"
            >
                ➕ Add Composition
            </button>


        </div>


        <!-- =========================================
             PRODUCT DETAILS
        ========================================== -->

        <div class="section">


            <div class="section-title">
                📋 Product Details
            </div>


            <div class="form-grid">


                <div class="form-group full">

                    <label>
                        Uses
                    </label>

                    <textarea
                        name="uses"
                        placeholder="Enter product uses"
                    >${escapeHTML(product.uses)}</textarea>

                </div>


                <div class="form-group full">

                    <label>
                        Benefits
                    </label>

                    <textarea
                        name="benefits"
                        placeholder="Enter product benefits"
                    >${escapeHTML(product.benefits)}</textarea>

                </div>


                <div class="form-group full">

                    <label>
                        Dosage
                    </label>

                    <textarea
                        name="dosage"
                        placeholder="Enter dosage"
                    >${escapeHTML(product.dosage)}</textarea>

                </div>


                <div class="form-group full">

                    <label>
                        Side Effects
                    </label>

                    <textarea
                        name="sideEffects"
                        placeholder="Enter side effects"
                    >${escapeHTML(product.sideEffects)}</textarea>

                </div>


                <div class="form-group full">

                    <label>
                        Storage Instructions
                    </label>

                    <textarea
                        name="storage"
                        placeholder="Enter storage instructions"
                    >${escapeHTML(product.storage)}</textarea>

                </div>


                <div class="form-group full">

                    <label>
                        Full Description
                    </label>

                    <textarea
                        name="description"
                        placeholder="Enter full product description"
                    >${escapeHTML(product.description)}</textarea>

                </div>


            </div>

        </div>


        <!-- =========================================
             EXISTING IMAGES
        ========================================== -->

        <div class="section">


            <div class="section-title">
                🖼 Existing Product Images
            </div>


            ${
                images.length

                    ? `

                    <div class="image-grid">

                        ${images.map(
                            (image, index) => `

                            <div
                                class="media-card"
                                data-image-card
                            >

                                <img
                                    src="${escapeHTML(image)}"
                                    alt="Product Image ${index + 1}"
                                    onerror="this.style.display='none'"
                                >

                                <div class="media-name">
                                    Image ${index + 1}
                                </div>


                                <label
                                    class="image-remove-control"
                                >

                                    <input
                                        type="checkbox"
                                        name="removeImages"
                                        value="${escapeHTML(image)}"
                                        onchange="toggleImageRemoval(this)"
                                    >

                                    <span>
                                        🗑 Remove Image
                                    </span>

                                </label>

                            </div>

                        `
                        ).join("")}

                    </div>


                    <p class="remove-help">

                        जिस image को हटाना है,
                        उसके नीचे
                        <strong>
                            Remove Image
                        </strong>
                        select करें और फिर
                        <strong>
                            Update Product
                        </strong>
                        दबाएँ।

                    </p>

                    `

                    : `

                    <div class="empty-box">
                        No existing product image.
                    </div>

                    `
            }


        </div>


        <!-- =========================================
             NEW IMAGES
        ========================================== -->

        <div class="section">


            <div class="section-title">
                📷 Add New Product Images
            </div>


            <div class="form-group">


                <label>
                    Select New Images
                </label>


                <input
                    type="file"
                    name="images"
                    accept="image/*"
                    multiple
                >


                <p class="help">
                    You can select multiple new images.
                </p>


            </div>


        </div>


        <!-- =========================================
             EXISTING VIDEOS
        ========================================== -->

        <div class="section">


            <div class="section-title">
                🎥 Existing Product Video
            </div>


            ${
                videos.length

                    ? `

                    <div class="video-grid">


                        ${videos.map(
                            (video, index) => `


                            <div class="media-card">


                                <video
                                    controls
                                    preload="metadata"
                                >

                                    <source
                                        src="${escapeHTML(video)}"
                                    >

                                    Your browser
                                    does not support video.

                                </video>


                                <div class="media-name">
                                    Video ${index + 1}
                                </div>


                            </div>


                        `
                        ).join("")}


                    </div>

                    `

                    : `

                    <div class="empty-box">
                        No existing product video.
                    </div>

                    `
            }


        </div>


        <!-- =========================================
             VIDEO URL
        ========================================== -->

        <div class="section">


            <div class="section-title">
                🔗 Product Video URL
            </div>


            <div class="form-group">


                <label>
                    Video URL
                </label>


                <input
                    type="url"
                    name="videoUrl"
                    value="${escapeHTML(product.videoUrl || "")}"
                    placeholder="https://example.com/video.mp4"
                >


                <p class="help">
                    Optional direct MP4/video URL.
                </p>


            </div>


        </div>


        <!-- =========================================
             IMPORTANT FIX:
             NEW VIDEO UPLOAD

             FIELD NAME = video
        ========================================== -->

        <div class="section">


            <div class="section-title">
                🎬 Upload New Product Video
            </div>


            <div class="form-group">


                <label>
                    Select New Video
                </label>


                <input
                    type="file"
                    id="productVideo"
                    name="video"
                    accept="video/mp4,video/webm,video/ogg"
                >


                <p class="help">

                    Recommended:
                    MP4, WebM or OGG.

                    New video select करने पर
                    वही backend में
                    <strong>video</strong>
                    field से जाएगा.

                </p>


            </div>


        </div>


        <!-- =========================================
             SUBMIT
        ========================================== -->

        <button
            type="submit"
            class="update-btn"
        >
            💾 Update Product
        </button>


    </form>


    <a
        href="/admin/manage-products"
        class="back"
    >
        ⬅ Back to Manage Products
    </a>


</div>


<script>


/* =====================================================
   PRICE CALCULATION
===================================================== */

function calculateSellingPrice() {


    const mrp = Number(

        document
            .getElementById("mrp")
            .value || 0

    );


    let discount = Number(

        document
            .getElementById(
                "discountPercentage"
            )
            .value || 0

    );


    if (discount < 0) {
        discount = 0;
    }


    if (discount > 100) {
        discount = 100;
    }


    const sellingPrice =
        mrp -
        (
            mrp *
            discount /
            100
        );


    document
        .getElementById("price")
        .value =

            mrp > 0

                ? sellingPrice
                    .toFixed(2)

                : "";

}


/* =====================================================
   ADD COMPOSITION
===================================================== */

function addComposition() {


    const box =
        document.getElementById(
            "compositionBox"
        );


    const row =
        document.createElement(
            "div"
        );


    row.className =
        "composition-row";


    const input =
        document.createElement(
            "input"
        );


    input.type = "text";

    input.name =
        "composition[]";

    input.placeholder =
        "Composition";


    const button =
        document.createElement(
            "button"
        );


    button.type =
        "button";

    button.className =
        "remove-btn";

    button.textContent =
        "×";


    button.addEventListener(
        "click",
        function() {

            removeComposition(
                button
            );

        }
    );


    row.appendChild(
        input
    );


    row.appendChild(
        button
    );


    box.appendChild(
        row
    );

}


/* =====================================================
   REMOVE COMPOSITION
===================================================== */

function removeComposition(button) {


    const rows =
        document.querySelectorAll(
            ".composition-row"
        );


    if (
        rows.length > 1
    ) {

        button
            .parentElement
            .remove();

    }
    else {

        const input =
            button
                .parentElement
                .querySelector(
                    'input[name="composition[]"]'
                );


        if (input) {

            input.value = "";

        }

    }

}


/* =====================================================
   IMAGE REMOVE UI
===================================================== */

function toggleImageRemoval(
    checkbox
) {


    const card =
        checkbox.closest(
            "[data-image-card]"
        );


    if (!card) {
        return;
    }


    card.classList.toggle(

        "image-marked-remove",

        checkbox.checked

    );


    const text =
        card.querySelector(
            ".image-remove-control span"
        );


    if (text) {


        text.textContent =

            checkbox.checked

                ? "✓ Image Will Be Removed"

                : "🗑 Remove Image";

    }

}


/* =====================================================
   VIDEO VALIDATION
===================================================== */

const videoInput =
    document.getElementById(
        "productVideo"
    );


if (videoInput) {


    videoInput.addEventListener(
        "change",
        function() {


            const file =
                this.files &&
                this.files[0];


            if (!file) {
                return;
            }


            const allowedTypes = [

                "video/mp4",

                "video/webm",

                "video/ogg"

            ];


            if (
                !allowedTypes.includes(
                    file.type
                )
            ) {


                alert(
                    "Please select MP4, WebM or OGG video."
                );


                this.value = "";

                return;

            }


        }
    );

}


/* =====================================================
   SUBMIT
===================================================== */

const productForm =
    document.querySelector(
        "form"
    );


productForm.addEventListener(
    "submit",
    function(event) {


        const selectedImages =
            document.querySelectorAll(

                'input[name="removeImages"]:checked'

            );


        if (
            selectedImages.length > 0
        ) {


            const confirmed =
                window.confirm(

                    selectedImages.length +

                    " image(s) remove होंगी। क्या आप Update करना चाहते हैं?"

                );


            if (!confirmed) {


                event.preventDefault();

                return;

            }

        }


        const button =
            document.querySelector(
                ".update-btn"
            );


        button.disabled =
            true;


        button.innerHTML =
            "⏳ Updating Product...";

    }
);


</script>


</body>

</html>

`;

}


module.exports = EditProduct;
