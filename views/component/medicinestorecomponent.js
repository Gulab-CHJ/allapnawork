// // // ======================================
// // // MEDICINE STORE COMPONENT
// // // ======================================

// // function escapeHTML(value) {

// //     return String(value ?? "")
// //         .replace(/&/g, "&amp;")
// //         .replace(/</g, "&lt;")
// //         .replace(/>/g, "&gt;")
// //         .replace(/"/g, "&quot;")
// //         .replace(/'/g, "&#039;");

// // }


// // function MedicineStoreSection(
// //     products = []
// // ) {

// //     const medicineProducts =
// //         Array.isArray(products)
// //             ? products
// //                 .filter(function (product) {

// //                     return (
// //                         product &&
// //                         product.isActive !== false
// //                     );

// //                 })
// //                 .slice(0, 8)
// //             : [];


// //     const productsHTML =
// //         medicineProducts.length
// //             ? medicineProducts
// //                 .map(function (product) {

// //                     const productId =
// //                         String(
// //                             product._id ||
// //                             product.id ||
// //                             ""
// //                         );


// //                     const productName =
// //                         product.name ||
// //                         product.productName ||
// //                         "Medicine";


// //                     const category =
// //                         product.category ||
// //                         "Medicine";


// //                     const brand =
// //                         product.brandName ||
// //                         product.brand ||
// //                         product.company ||
// //                         product.manufacturer ||
// //                         "";


// //                     const composition =
// //                         product.composition ||
// //                         product.description ||
// //                         "Composition details available";


// //                     const packSize =
// //                         product.packSize ||
// //                         product.pack ||
// //                         product.size ||
// //                         product.unit ||
// //                         "";


// //                     const images =
// //                         Array.isArray(product.images)
// //                             ? product.images
// //                             : [];


// //                     const firstImage =
// //                         images.length
// //                             ? images[0]
// //                             : "";


// //                     const productImage =
// //                         product.image ||
// //                         product.imageUrl ||
// //                         product.productImage ||
// //                         (
// //                             typeof firstImage === "string"
// //                                 ? firstImage
// //                                 : firstImage?.url ||
// //                                   firstImage?.secure_url ||
// //                                   ""
// //                         );


// //                     const mrp =
// //                         Number(
// //                             product.mrp ||
// //                             product.MRP ||
// //                             0
// //                         );


// //                     const sellingPrice =
// //                         Number(
// //                             product.sellingPrice ??
// //                             product.price ??
// //                             product.salePrice ??
// //                             0
// //                         );


// //                     const hasStockField =
// //                         product.stockQuantity !==
// //                             undefined ||

// //                         product.stock !==
// //                             undefined ||

// //                         product.quantity !==
// //                             undefined;


// //                     const stock =
// //                         Number(
// //                             product.stockQuantity ??
// //                             product.stock ??
// //                             product.quantity ??
// //                             0
// //                         );


// //                     const inStock =
// //                         product.isInStock !== false &&
// //                         (
// //                             !hasStockField ||
// //                             stock > 0
// //                         );


// //                     const discount =
// //                         mrp > sellingPrice &&
// //                         sellingPrice > 0
// //                             ? Math.round(
// //                                 (
// //                                     (
// //                                         mrp -
// //                                         sellingPrice
// //                                     ) /
// //                                     mrp
// //                                 ) * 100
// //                             )
// //                             : 0;


// //                     const productURL =
// //                         productId
// //                             ? "/doctor/product/" +
// //                               encodeURIComponent(
// //                                   productId
// //                               )
// //                             : "/doctor/store";


// //                     return `

// // <article class="medicine-store-card">

// //     <a
// //         href="${productURL}"
// //         class="medicine-store-image"
// //     >

// //         ${
// //             productImage
// //                 ? `

// //                     <img
// //                         src="${escapeHTML(
// //                             productImage
// //                         )}"
// //                         alt="${escapeHTML(
// //                             productName
// //                         )}"
// //                         loading="lazy"
// //                         onerror="
// //                             this.style.display='none';
// //                             this.nextElementSibling
// //                                 .classList.add('show');
// //                         "
// //                     >

// //                     <div class="medicine-placeholder">
// //                         💊
// //                     </div>

// //                 `
// //                 : `

// //                     <div class="
// //                         medicine-placeholder
// //                         show
// //                     ">
// //                         💊
// //                     </div>

// //                 `
// //         }


// //         <span class="
// //             medicine-stock
// //             ${
// //                 inStock
// //                     ? "in-stock"
// //                     : "out-stock"
// //             }
// //         ">

// //             ${
// //                 inStock
// //                     ? "IN STOCK"
// //                     : "OUT OF STOCK"
// //             }

// //         </span>


// //         ${
// //             discount > 0
// //                 ? `

// //                     <span class="medicine-discount">
// //                         ${discount}% OFF
// //                     </span>

// //                 `
// //                 : ""
// //         }

// //     </a>


// //     <div class="medicine-store-body">

// //         <div class="medicine-store-meta">

// //             <span>
// //                 ${escapeHTML(category)}
// //             </span>

// //             <b>
// //                 ★ 5.0
// //             </b>

// //         </div>


// //         <a
// //             href="${productURL}"
// //             class="medicine-store-name"
// //         >

// //             ${escapeHTML(productName)}

// //             ${
// //                 packSize
// //                     ? `

// //                         <small>
// //                             (${escapeHTML(packSize)})
// //                         </small>

// //                     `
// //                     : ""
// //             }

// //         </a>


// //         ${
// //             brand
// //                 ? `

// //                     <div class="medicine-store-brand">
// //                         ${escapeHTML(brand)}
// //                     </div>

// //                 `
// //                 : ""
// //         }


// //         <p class="medicine-composition">
// //             ${escapeHTML(composition)}
// //         </p>


// //         <div class="medicine-store-footer">

// //             <div class="medicine-store-price">

// //                 <strong>

// //                     ${
// //                         sellingPrice > 0
// //                             ? "₹" +
// //                               sellingPrice.toFixed(2)
// //                             : "Ask Price"
// //                     }

// //                 </strong>


// //                 ${
// //                     mrp > sellingPrice &&
// //                     sellingPrice > 0
// //                         ? `

// //                             <del>
// //                                 ₹${mrp.toFixed(2)}
// //                             </del>

// //                         `
// //                         : ""
// //                 }

// //             </div>


// //             <a
// //                 href="${
// //                     inStock
// //                         ? productURL
// //                         : "javascript:void(0)"
// //                 }"
// //                 class="
// //                     medicine-view-button
// //                     ${
// //                         inStock
// //                             ? ""
// //                             : "disabled"
// //                     }
// //                 "
// //             >

// //                 ${
// //                     inStock
// //                         ? "View"
// //                         : "Sold"
// //                 }

// //             </a>

// //         </div>

// //     </div>

// // </article>

// //                     `;

// //                 })
// //                 .join("")
// //             : `

// // <div class="medicine-store-empty">

// //     <div>
// //         💊
// //     </div>

// //     <strong>
// //         अभी कोई Medicine उपलब्ध नहीं है।
// //     </strong>

// //     <span>
// //         Admin Panel से Product add करें।
// //     </span>

// // </div>

// //             `;


// //     return `

// // <style>

// // .medicine-store-section {
// //     width: calc(100% - 30px);
// //     max-width: 1180px;

// //     margin: 35px auto;
// //     padding: 26px;

// //     font-family:
// //         Arial,
// //         sans-serif;

// //     background:
// //         linear-gradient(
// //             180deg,
// //             #effcf5,
// //             #ffffff 210px
// //         );

// //     border: 1px solid #d8eee2;
// //     border-radius: 25px;

// //     box-shadow:
// //         0 18px 50px
// //         rgba(21, 100, 60, 0.10);
// // }


// // .medicine-store-heading {
// //     display: flex;
// //     align-items: center;
// //     justify-content: space-between;
// //     gap: 15px;

// //     margin-bottom: 22px;
// // }


// // .medicine-store-heading small {
// //     display: block;

// //     margin-bottom: 6px;

// //     color: #15803d;

// //     font-size: 10px;
// //     font-weight: 900;
// //     letter-spacing: 1.5px;
// // }


// // .medicine-store-heading h2 {
// //     margin: 0;

// //     color: #123d2b;

// //     font-size: 30px;
// // }


// // .medicine-store-heading p {
// //     margin: 7px 0 0;

// //     color: #64748b;

// //     font-size: 14px;
// // }


// // .medicine-store-all {
// //     flex-shrink: 0;

// //     padding: 11px 17px;

// //     color: #ffffff;
// //     background: #15803d;

// //     border-radius: 11px;

// //     text-decoration: none;

// //     font-size: 13px;
// //     font-weight: 800;
// // }


// // .medicine-store-grid {
// //     display: grid;

// //     grid-template-columns:
// //         repeat(
// //             4,
// //             minmax(0, 1fr)
// //         );

// //     gap: 15px;
// // }


// // .medicine-store-card {
// //     min-width: 0;

// //     overflow: hidden;

// //     background: #ffffff;

// //     border: 1px solid #dfebe4;
// //     border-radius: 17px;

// //     box-shadow:
// //         0 8px 25px
// //         rgba(15, 73, 42, 0.08);

// //     transition: 0.25s;
// // }


// // .medicine-store-card:hover {
// //     transform:
// //         translateY(-4px);

// //     box-shadow:
// //         0 14px 32px
// //         rgba(15, 73, 42, 0.14);
// // }


// // .medicine-store-image {
// //     width: 100%;
// //     height: 190px;

// //     display: block;

// //     position: relative;

// //     overflow: hidden;

// //     background: #f8fafc;
// // }


// // .medicine-store-image img {
// //     width: 100%;
// //     height: 100%;

// //     display: block;

// //     padding: 8px;

// //     object-fit: contain;
// // }


// // .medicine-placeholder {
// //     width: 100%;
// //     height: 100%;

// //     display: none;
// //     align-items: center;
// //     justify-content: center;

// //     color: #16a34a;
// //     background: #effcf5;

// //     font-size: 55px;
// // }


// // .medicine-placeholder.show {
// //     display: flex;
// // }


// // .medicine-stock,
// // .medicine-discount {
// //     position: absolute;
// //     top: 9px;

// //     padding: 5px 8px;

// //     border-radius: 20px;

// //     font-size: 9px;
// //     font-weight: 900;
// // }


// // .medicine-stock {
// //     left: 8px;
// // }


// // .medicine-stock.in-stock {
// //     color: #166534;
// //     background: #dcfce7;
// // }


// // .medicine-stock.out-stock {
// //     color: #991b1b;
// //     background: #fee2e2;
// // }


// // .medicine-discount {
// //     right: 8px;

// //     color: #ffffff;
// //     background: #ef4444;
// // }


// // .medicine-store-body {
// //     padding: 13px;
// // }


// // .medicine-store-meta {
// //     display: flex;
// //     justify-content: space-between;
// //     gap: 6px;

// //     margin-bottom: 8px;

// //     color: #64748b;

// //     font-size: 10px;
// //     font-weight: 700;
// // }


// // .medicine-store-meta b {
// //     color: #e5a000;
// // }


// // .medicine-store-name {
// //     min-height: 39px;

// //     display: -webkit-box;

// //     overflow: hidden;

// //     color: #173e2c;

// //     text-decoration: none;

// //     font-size: 16px;
// //     font-weight: 900;
// //     line-height: 1.25;

// //     -webkit-line-clamp: 2;
// //     -webkit-box-orient: vertical;
// // }


// // .medicine-store-name small {
// //     color: #475569;

// //     font-size: 11px;
// // }


// // .medicine-store-brand {
// //     margin-top: 5px;

// //     overflow: hidden;

// //     color: #16804a;

// //     font-size: 10px;
// //     font-weight: 800;

// //     white-space: nowrap;
// //     text-overflow: ellipsis;
// // }


// // .medicine-composition {
// //     min-height: 32px;

// //     display: -webkit-box;

// //     margin: 8px 0 12px;

// //     overflow: hidden;

// //     color: #64748b;

// //     font-size: 11px;
// //     line-height: 1.45;

// //     -webkit-line-clamp: 2;
// //     -webkit-box-orient: vertical;
// // }


// // .medicine-store-footer {
// //     display: flex;
// //     align-items: flex-end;
// //     justify-content: space-between;
// //     gap: 8px;
// // }


// // .medicine-store-price strong,
// // .medicine-store-price del {
// //     display: block;
// // }


// // .medicine-store-price strong {
// //     color: #123d2b;

// //     font-size: 16px;
// // }


// // .medicine-store-price del {
// //     margin-top: 2px;

// //     color: #94a3b8;

// //     font-size: 10px;
// // }


// // .medicine-view-button {
// //     flex-shrink: 0;

// //     padding: 9px 13px;

// //     color: #ffffff;
// //     background: #16a34a;

// //     border-radius: 9px;

// //     text-decoration: none;

// //     font-size: 11px;
// //     font-weight: 900;
// // }


// // .medicine-view-button.disabled {
// //     color: #94a3b8;
// //     background: #e2e8f0;

// //     pointer-events: none;
// // }


// // .medicine-store-empty {
// //     grid-column: 1 / -1;

// //     padding: 35px 15px;

// //     text-align: center;

// //     color: #64748b;
// //     background: #f7fcf9;

// //     border-radius: 15px;
// // }


// // .medicine-store-empty div {
// //     font-size: 36px;
// // }


// // .medicine-store-empty strong,
// // .medicine-store-empty span {
// //     display: block;

// //     margin-top: 7px;
// // }


// // @media(max-width: 900px) {

// //     .medicine-store-grid {
// //         grid-template-columns:
// //             repeat(
// //                 3,
// //                 minmax(0, 1fr)
// //             );
// //     }

// // }


// // @media(max-width: 700px) {

// //     .medicine-store-section {
// //         width: calc(100% - 18px);

// //         margin: 22px auto;
// //         padding: 17px 10px;

// //         border-radius: 18px;
// //     }


// //     .medicine-store-heading {
// //         align-items: flex-end;
// //         gap: 8px;
// //     }


// //     .medicine-store-heading h2 {
// //         font-size: 23px;
// //     }


// //     .medicine-store-heading p {
// //         font-size: 11px;
// //     }


// //     .medicine-store-all {
// //         padding: 9px 10px;

// //         font-size: 10px;
// //     }


// //     .medicine-store-grid {
// //         grid-template-columns:
// //             repeat(
// //                 2,
// //                 minmax(0, 1fr)
// //             );

// //         gap: 9px;
// //     }


// //     .medicine-store-card {
// //         border-radius: 13px;
// //     }


// //     .medicine-store-image {
// //         height: 135px;
// //     }


// //     .medicine-store-body {
// //         padding: 10px 8px;
// //     }


// //     .medicine-store-name {
// //         min-height: 34px;

// //         font-size: 13px;
// //     }


// //     .medicine-composition {
// //         font-size: 10px;
// //     }


// //     .medicine-store-price strong {
// //         font-size: 13px;
// //     }


// //     .medicine-view-button {
// //         padding: 8px 9px;

// //         font-size: 10px;
// //     }

// // }

// // </style>


// // <section class="medicine-store-section">

// //     <div class="medicine-store-heading">

// //         <div>

// //             <small>
// //                 GLOBAL HEALTHCARE
// //             </small>

// //             <h2>
// //                 💊 Medicine Store
// //             </h2>

// //             <p>
// //                 Trusted healthcare products
// //                 at the best price
// //             </p>

// //         </div>


// //         <a
// //             href="/doctor/store"
// //             class="medicine-store-all"
// //         >
// //             View All →
// //         </a>

// //     </div>


// //     <div class="medicine-store-grid">

// //         ${productsHTML}

// //     </div>

// // </section>

// //     `;

// // }


// // module.exports =
// //     MedicineStoreSection;


// // ======================================
// // MEDICINE STORE COMPONENT
// // ======================================

// function escapeHTML(value) {
//     return String(value ?? "")
//         .replace(/&/g, "&amp;")
//         .replace(/</g, "&lt;")
//         .replace(/>/g, "&gt;")
//         .replace(/"/g, "&quot;")
//         .replace(/'/g, "&#039;");
// }


// function MedicineStoreSection(products = []) {

//     const medicineProducts =
//         Array.isArray(products)
//             ? products
//                 .filter(function (product) {
//                     return (
//                         product &&
//                         product.isActive !== false
//                     );
//                 })
//                 .slice(0, 8)
//             : [];


//     const productsHTML =
//         medicineProducts.length
//             ? medicineProducts
//                 .map(function (product) {

//                     const productId = String(
//                         product._id ||
//                         product.id ||
//                         ""
//                     );


//                     const productName =
//                         product.name ||
//                         product.productName ||
//                         "Medicine";


//                     const category =
//                         product.category ||
//                         "Medicine";


//                     const brand =
//                         product.brandName ||
//                         product.brand ||
//                         product.company ||
//                         product.manufacturer ||
//                         "";


//                     const composition =
//                         product.composition ||
//                         product.description ||
//                         "Composition details available";


//                     const packSize =
//                         product.packSize ||
//                         product.pack ||
//                         product.size ||
//                         product.unit ||
//                         "";


//                     const images =
//                         Array.isArray(product.images)
//                             ? product.images
//                             : [];


//                     const firstImage =
//                         images.length
//                             ? images[0]
//                             : "";


//                     const productImage =
//                         product.image ||
//                         product.imageUrl ||
//                         product.productImage ||
//                         (
//                             typeof firstImage === "string"
//                                 ? firstImage
//                                 : firstImage?.url ||
//                                   firstImage?.secure_url ||
//                                   ""
//                         );


//                     const mrp = Number(
//                         product.mrp ||
//                         product.MRP ||
//                         0
//                     );


//                     const sellingPrice = Number(
//                         product.sellingPrice ??
//                         product.price ??
//                         product.salePrice ??
//                         0
//                     );


//                     const hasStockField =
//                         product.stockQuantity !== undefined ||
//                         product.stock !== undefined ||
//                         product.quantity !== undefined;


//                     const stock = Number(
//                         product.stockQuantity ??
//                         product.stock ??
//                         product.quantity ??
//                         0
//                     );


//                     const inStock =
//                         product.isInStock !== false &&
//                         (
//                             !hasStockField ||
//                             stock > 0
//                         );


//                     const discount =
//                         mrp > sellingPrice &&
//                         sellingPrice > 0
//                             ? Math.round(
//                                 (
//                                     (
//                                         mrp -
//                                         sellingPrice
//                                     ) /
//                                     mrp
//                                 ) * 100
//                             )
//                             : 0;


//                     const productURL =
//                         productId
//                             ? "/doctor/product/" +
//                               encodeURIComponent(productId)
//                             : "/doctor/store";


//                     return `

// <article class="medicine-store-card">

//     <a
//         href="${productURL}"
//         class="medicine-store-image"
//     >

//         ${
//             productImage
//                 ? `

//                     <img
//                         src="${escapeHTML(productImage)}"
//                         alt="${escapeHTML(productName)}"
//                         loading="lazy"
//                         onerror="
//                             this.style.display='none';
//                             this.nextElementSibling
//                                 .classList.add('show');
//                         "
//                     >

//                     <div class="medicine-placeholder">
//                         💊
//                     </div>

//                 `
//                 : `

//                     <div class="
//                         medicine-placeholder
//                         show
//                     ">
//                         💊
//                     </div>

//                 `
//         }


//         <span class="
//             medicine-stock
//             ${
//                 inStock
//                     ? "in-stock"
//                     : "out-stock"
//             }
//         ">

//             ${
//                 inStock
//                     ? "IN STOCK"
//                     : "OUT OF STOCK"
//             }

//         </span>


//         ${
//             discount > 0
//                 ? `

//                     <span class="medicine-discount">
//                         ${discount}% OFF
//                     </span>

//                 `
//                 : ""
//         }

//     </a>


//     <div class="medicine-store-body">

//         <div class="medicine-store-meta">

//             <span>
//                 ${escapeHTML(category)}
//             </span>

//             <b>
//                 ★ 5.0
//             </b>

//         </div>


//         <a
//             href="${productURL}"
//             class="medicine-store-name"
//         >

//             ${escapeHTML(productName)}

//             ${
//                 packSize
//                     ? `

//                         <small>
//                             (${escapeHTML(packSize)})
//                         </small>

//                     `
//                     : ""
//             }

//         </a>


//         ${
//             brand
//                 ? `

//                     <div class="medicine-store-brand">
//                         ${escapeHTML(brand)}
//                     </div>

//                 `
//                 : ""
//         }


//         <p class="medicine-composition">
//             ${escapeHTML(composition)}
//         </p>


//         <div class="medicine-store-footer">

//             <div class="medicine-store-price">

//                 <strong>

//                     ${
//                         sellingPrice > 0
//                             ? "₹" +
//                               sellingPrice.toFixed(2)
//                             : "Ask Price"
//                     }

//                 </strong>


//                 ${
//                     mrp > sellingPrice &&
//                     sellingPrice > 0
//                         ? `

//                             <del>
//                                 ₹${mrp.toFixed(2)}
//                             </del>

//                         `
//                         : ""
//                 }

//             </div>


//             <a
//                 href="${
//                     inStock
//                         ? productURL
//                         : "javascript:void(0)"
//                 }"
//                 class="
//                     medicine-view-button
//                     ${
//                         inStock
//                             ? ""
//                             : "disabled"
//                     }
//                 "
//             >

//                 ${
//                     inStock
//                         ? "View Product"
//                         : "Sold"
//                 }

//             </a>

//         </div>

//     </div>

// </article>

//                     `;

//                 })
//                 .join("")
//             : `

// <div class="medicine-store-empty">

//     <div>
//         💊
//     </div>

//     <strong>
//         अभी कोई Medicine उपलब्ध नहीं है।
//     </strong>

//     <span>
//         Admin Panel से Product add करें।
//     </span>

// </div>

//             `;


//     return `

// <style>

// .medicine-store-section {
//     width: calc(100% - 30px);
//     max-width: 1250px;

//     margin: 35px auto;
//     padding: 26px;

//     font-family:
//         "Segoe UI",
//         Arial,
//         sans-serif;

//     background:
//         linear-gradient(
//             180deg,
//             #f8fbff,
//             #ffffff 210px
//         );

//     border: 1px solid #dbeafe;
//     border-radius: 25px;

//     box-shadow:
//         0 18px 50px
//         rgba(30, 64, 175, 0.10);
// }


// .medicine-store-heading {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: 15px;

//     margin-bottom: 22px;
// }


// .medicine-store-heading small {
//     display: block;

//     margin-bottom: 6px;

//     color: #2563eb;

//     font-size: 10px;
//     font-weight: 900;
//     letter-spacing: 1.5px;
// }


// .medicine-store-heading h2 {
//     margin: 0;

//     color: #1e3a8a;

//     font-size: 30px;
// }


// .medicine-store-heading p {
//     margin: 7px 0 0;

//     color: #64748b;

//     font-size: 14px;
// }


// .medicine-store-all {
//     flex-shrink: 0;

//     padding: 11px 17px;

//     color: #ffffff;

//     background:
//         linear-gradient(
//             135deg,
//             #2563eb,
//             #1d4ed8
//         );

//     border-radius: 11px;

//     text-decoration: none;

//     font-size: 13px;
//     font-weight: 800;

//     box-shadow:
//         0 5px 15px
//         rgba(37, 99, 235, 0.20);

//     transition: 0.2s;
// }


// .medicine-store-all:hover {
//     transform: translateY(-2px);

//     box-shadow:
//         0 9px 20px
//         rgba(37, 99, 235, 0.25);
// }


// .medicine-store-grid {
//     display: grid;

//     grid-template-columns:
//         repeat(
//             4,
//             minmax(0, 1fr)
//         );

//     gap: 18px;
// }


// .medicine-store-card {
//     min-width: 0;

//     overflow: hidden;

//     background: #ffffff;

//     border: 1px solid #e2e8f0;
//     border-radius: 18px;

//     box-shadow:
//         0 8px 25px
//         rgba(15, 23, 42, 0.05);

//     transition: 0.25s;
// }


// .medicine-store-card:hover {
//     transform: translateY(-4px);

//     box-shadow:
//         0 18px 40px
//         rgba(30, 64, 175, 0.13);
// }


// .medicine-store-image {
//     width: 100%;
//     height: 190px;

//     display: block;
//     position: relative;

//     overflow: hidden;

//     background:
//         linear-gradient(
//             145deg,
//             #eff6ff,
//             #f8fafc
//         );
// }


// .medicine-store-image img {
//     width: 100%;
//     height: 100%;

//     display: block;

//     padding: 8px;

//     object-fit: contain;
// }


// .medicine-placeholder {
//     width: 100%;
//     height: 100%;

//     display: none;
//     align-items: center;
//     justify-content: center;

//     color: #2563eb;

//     background:
//         linear-gradient(
//             145deg,
//             #eff6ff,
//             #f8fafc
//         );

//     font-size: 55px;
// }


// .medicine-placeholder.show {
//     display: flex;
// }


// .medicine-stock,
// .medicine-discount {
//     position: absolute;
//     top: 9px;

//     padding: 5px 8px;

//     border-radius: 20px;

//     font-size: 9px;
//     font-weight: 900;
// }


// .medicine-stock {
//     left: 8px;
// }


// .medicine-stock.in-stock {
//     color: #166534;
//     background: #dcfce7;
// }


// .medicine-stock.out-stock {
//     color: #991b1b;
//     background: #fee2e2;
// }


// .medicine-discount {
//     right: 8px;

//     color: #ffffff;
//     background: #ef4444;
// }


// .medicine-store-body {
//     padding: 13px;
// }


// .medicine-store-meta {
//     display: flex;
//     justify-content: space-between;
//     gap: 6px;

//     margin-bottom: 8px;

//     color: #64748b;

//     font-size: 10px;
//     font-weight: 700;
// }


// .medicine-store-meta b {
//     color: #e5a000;
// }


// .medicine-store-name {
//     min-height: 39px;

//     display: -webkit-box;

//     overflow: hidden;

//     color: #0f172a;

//     text-decoration: none;

//     font-size: 16px;
//     font-weight: 900;
//     line-height: 1.25;

//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
// }


// .medicine-store-name small {
//     color: #475569;

//     font-size: 11px;
// }


// .medicine-store-brand {
//     margin-top: 5px;

//     overflow: hidden;

//     color: #475569;

//     font-size: 10px;
//     font-weight: 800;

//     white-space: nowrap;
//     text-overflow: ellipsis;
// }


// .medicine-composition {
//     min-height: 32px;

//     display: -webkit-box;

//     margin: 8px 0 12px;

//     overflow: hidden;

//     color: #64748b;

//     font-size: 11px;
//     line-height: 1.45;

//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
// }


// .medicine-store-footer {
//     display: flex;
//     align-items: flex-end;
//     justify-content: space-between;
//     gap: 8px;
// }


// .medicine-store-price strong,
// .medicine-store-price del {
//     display: block;
// }


// .medicine-store-price strong {
//     color: #1e3a8a;

//     font-size: 16px;
// }


// .medicine-store-price del {
//     margin-top: 2px;

//     color: #94a3b8;

//     font-size: 10px;
// }


// .medicine-view-button {
//     flex-shrink: 0;

//     padding: 9px 13px;

//     color: #ffffff;

//     background:
//         linear-gradient(
//             135deg,
//             #2563eb,
//             #1d4ed8
//         );

//     border-radius: 9px;

//     text-decoration: none;

//     font-size: 11px;
//     font-weight: 900;

//     box-shadow:
//         0 5px 12px
//         rgba(37, 99, 235, 0.18);

//     transition: 0.2s;
// }


// .medicine-view-button:not(.disabled):hover {
//     transform: translateY(-1px);

//     box-shadow:
//         0 8px 16px
//         rgba(37, 99, 235, 0.25);
// }


// .medicine-view-button.disabled {
//     color: #94a3b8;
//     background: #e2e8f0;

//     pointer-events: none;
// }


// .medicine-store-empty {
//     grid-column: 1 / -1;

//     padding: 35px 15px;

//     text-align: center;

//     color: #64748b;
//     background: #f8fbff;

//     border-radius: 15px;
// }


// .medicine-store-empty div {
//     font-size: 36px;
// }


// .medicine-store-empty strong,
// .medicine-store-empty span {
//     display: block;

//     margin-top: 7px;
// }


// @media(max-width: 900px) {

//     .medicine-store-grid {
//         grid-template-columns:
//             repeat(
//                 3,
//                 minmax(0, 1fr)
//             );
//     }

// }


// @media(max-width: 700px) {

//     .medicine-store-section {
//         width: calc(100% - 18px);

//         margin: 22px auto;
//         padding: 17px 10px;

//         border-radius: 18px;
//     }


//     .medicine-store-heading {
//         align-items: flex-end;
//         gap: 8px;
//     }


//     .medicine-store-heading h2 {
//         font-size: 23px;
//     }


//     .medicine-store-heading p {
//         font-size: 11px;
//     }


//     .medicine-store-all {
//         padding: 9px 10px;

//         font-size: 10px;
//     }


//     .medicine-store-grid {
//         grid-template-columns:
//             repeat(
//                 2,
//                 minmax(0, 1fr)
//             );

//         gap: 10px;
//     }


//     .medicine-store-card {
//         border-radius: 13px;
//     }


//     .medicine-store-image {
//         height: 145px;
//     }


//     .medicine-store-body {
//         padding: 10px 8px;
//     }


//     .medicine-store-name {
//         min-height: 34px;

//         font-size: 13px;
//     }


//     .medicine-composition {
//         font-size: 10px;
//     }


//     .medicine-store-price strong {
//         font-size: 13px;
//     }


//     .medicine-view-button {
//         padding: 8px 7px;

//         font-size: 9px;
//     }

// }


// @media(max-width: 380px) {

//     .medicine-store-image {
//         height: 125px;
//     }

// }

// </style>


// <section class="medicine-store-section">

//     <div class="medicine-store-heading">

//         <div>

//             <small>
//                 GLOBAL HEALTHCARE
//             </small>

//             <h2>
//                 💊 Medicine Store
//             </h2>

//             <p>
//                 Trusted healthcare products
//                 at the best price
//             </p>

//         </div>


//         <a
//             href="/doctor/store"
//             class="medicine-store-all"
//         >
//             View All →
//         </a>

//     </div>


//     <div class="medicine-store-grid">

//         ${productsHTML}

//     </div>

// </section>

//     `;

// }


// module.exports =
//     MedicineStoreSection;



function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function MedicineStoreSection(products = []) {

    const medicineProducts =
        Array.isArray(products)
            ? products
                .filter(function (product) {
                    return (
                        product &&
                        product.isActive !== false
                    );
                })
                .slice(0, 8)
            : [];


    const productsHTML =
        medicineProducts.length
            ? medicineProducts
                .map(function (product) {

                    const productId = String(
                        product._id ||
                        product.id ||
                        ""
                    );


                    const productName =
                        product.name ||
                        product.productName ||
                        "Medicine";


                    const category =
                        product.category ||
                        "Medicine";


                    const brand =
                        product.brandName ||
                        product.brand ||
                        product.company ||
                        product.manufacturer ||
                        "";


                    const composition =
                        product.composition ||
                        product.description ||
                        "Composition details available";


                    const packSize =
                        product.packSize ||
                        product.pack ||
                        product.size ||
                        product.unit ||
                        "";


                    const images =
                        Array.isArray(product.images)
                            ? product.images
                            : [];


                    const firstImage =
                        images.length
                            ? images[0]
                            : "";


                    const productImage =
                        product.mainImage ||
                        product.image ||
                        product.imageUrl ||
                        product.productImage ||
                        (
                            typeof firstImage === "string"
                                ? firstImage
                                : firstImage?.url ||
                                  firstImage?.secure_url ||
                                  ""
                        );


                    const hasStockField =
                        product.stockQuantity !== undefined ||
                        product.stock !== undefined ||
                        product.quantity !== undefined;


                    const stockValue = Number(
                        product.stockQuantity ??
                        product.stock ??
                        product.quantity ??
                        0
                    );


                    const stock =
                        Number.isFinite(stockValue)
                            ? stockValue
                            : 0;


                    const inStock =
                        product.isInStock !== false &&
                        (
                            !hasStockField ||
                            stock > 0
                        );


                    const productURL =
                        productId
                            ? "/doctor/store?product=" +
                              encodeURIComponent(productId)
                            : "/doctor/store";


                    return `

<article class="medicine-store-card">

    <a
        href="${productURL}"
        class="medicine-store-image"
    >

        ${
            productImage
                ? `

                    <img
                        src="${escapeHTML(productImage)}"
                        alt="${escapeHTML(productName)}"
                        loading="lazy"
                        onerror="
                            this.style.display='none';
                            this.nextElementSibling
                                .classList.add('show');
                        "
                    >

                    <div class="medicine-placeholder">
                        💊
                    </div>

                `
                : `

                    <div class="
                        medicine-placeholder
                        show
                    ">
                        💊
                    </div>

                `
        }

    </a>


    <div class="medicine-store-body">

        <div class="medicine-store-category">
            ${escapeHTML(category)}
        </div>


        <a
            href="${productURL}"
            class="medicine-store-name"
        >

            ${escapeHTML(productName)}

            ${
                packSize
                    ? `

                        <small>
                            (${escapeHTML(packSize)})
                        </small>

                    `
                    : ""
            }

        </a>


        <p class="medicine-composition">
            ${escapeHTML(composition)}
        </p>


        ${
            brand
                ? `

                    <div class="medicine-store-brand">

                        🏭 Brand:

                        <strong>
                            ${escapeHTML(brand)}
                        </strong>

                    </div>

                `
                : ""
        }


        <span class="
            medicine-store-stock
            ${
                inStock
                    ? "in-stock"
                    : "out-stock"
            }
        ">

            ${
                inStock
                    ? stock > 0
                        ? `● In Stock (${stock})`
                        : "● In Stock"
                    : "● Out of Stock"
            }

        </span>


        <a
            href="${productURL}"
            class="medicine-view-button"
        >
            View Product
        </a>

    </div>

</article>

                    `;

                })
                .join("")
            : `

<div class="medicine-store-empty">

    <div>
        💊
    </div>

    <strong>
        अभी कोई Medicine उपलब्ध नहीं है।
    </strong>

    <span>
        Admin Panel से Product add करें।
    </span>

</div>

            `;


    return `

<style>

.medicine-store-section {
    width: calc(100% - 30px);
    max-width: 1250px;

    margin: 35px auto;
    padding: 26px;

    font-family:
        "Segoe UI",
        Arial,
        sans-serif;

    background:
        linear-gradient(
            180deg,
            #f8fbff,
            #ffffff 210px
        );

    border: 1px solid #dbeafe;
    border-radius: 25px;

    box-shadow:
        0 18px 50px
        rgba(30, 64, 175, 0.10);
}


.medicine-store-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 15px;

    margin-bottom: 22px;
}


.medicine-store-heading small {
    display: block;

    margin-bottom: 6px;

    color: #2563eb;

    font-size: 10px;
    font-weight: 900;
    letter-spacing: 1.5px;
}


.medicine-store-heading h2 {
    margin: 0;

    color: #1e3a8a;

    font-size: 30px;
}


.medicine-store-heading p {
    margin: 7px 0 0;

    color: #64748b;

    font-size: 14px;
}


.medicine-store-all {
    flex-shrink: 0;

    padding: 11px 17px;

    color: #ffffff;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #1d4ed8
        );

    border-radius: 11px;

    text-decoration: none;

    font-size: 13px;
    font-weight: 800;

    box-shadow:
        0 5px 15px
        rgba(37, 99, 235, 0.20);

    transition: 0.2s;
}


.medicine-store-all:hover {
    transform: translateY(-2px);

    box-shadow:
        0 9px 20px
        rgba(37, 99, 235, 0.25);
}


.medicine-store-grid {
    display: grid;

    grid-template-columns:
        repeat(
            4,
            minmax(0, 1fr)
        );

    gap: 18px;
}

.medicine-store-card {
    min-width: 0;
    padding: 0;
    overflow: hidden;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 18px;
    box-shadow:
        0 8px 25px
        rgba(15, 23, 42, 0.05);
    transition: 0.25s;
}

.medicine-store-card:hover {
    transform: translateY(-4px);
    box-shadow:
        0 18px 40px
        rgba(30, 64, 175, 0.13);
}

.medicine-store-image {
    width: 100%;
    height: 250px;
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: #f8fafc;
    border-radius: 0;
}

.medicine-store-image img {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0;
    padding: 0;
    object-fit: cover;
    object-position: center;
}

.medicine-store-body {
    padding: 20px;
}


/* TABLET */

@media (max-width: 900px) {
    .medicine-store-grid {
        grid-template-columns:
            repeat(3, minmax(0, 1fr));
    }

    .medicine-store-image {
        height: 220px;
    }
}


/* MOBILE */

@media (max-width: 700px) {
    .medicine-store-section {
        width: calc(100% - 18px);
        margin: 22px auto;
        padding: 17px 10px;
        border-radius: 18px;
    }

    .medicine-store-grid {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));
        gap: 10px;
    }

    .medicine-store-card {
        padding: 0;
        border-radius: 13px;
    }

    .medicine-store-image {
        height: 145px;
    }

    .medicine-store-body {
        padding: 11px;
    }

    .medicine-store-name {
        min-height: 34px;
        font-size: 13px;
    }

    .medicine-composition {
        font-size: 10px;
    }

    .medicine-view-button {
        padding: 10px 7px;
        font-size: 10px;
    }
}


/* SMALL PHONE */

@media (max-width: 380px) {
    .medicine-store-image {
        height: 125px;
    }

    .medicine-store-body {
        padding: 9px;
    }
}

</style>


<section class="medicine-store-section">

    <div class="medicine-store-heading">

        <div>

            <small>
                GLOBAL HEALTHCARE
            </small>

            <h2>
                💊 Medicine Store
            </h2>

            <p>
                Trusted healthcare products
                at the best price
            </p>

        </div>


        <a
            href="/doctor/store"
            class="medicine-store-all"
        >
            View All →
        </a>

    </div>


    <div class="medicine-store-grid">

        ${productsHTML}

    </div>

</section>

    `;
}


module.exports =
    MedicineStoreSection;
