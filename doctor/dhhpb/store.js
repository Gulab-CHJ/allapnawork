const express = require("express");
const path = require("path");

const router = express.Router();

const Product = require("../../models/Product");
const Doctor = require("../../models/Doctor");


// ======================================================
// DOCTOR STORE
// URL: /doctor/store
// ======================================================

router.get("/store", async (req, res) => {

    try {

        // -----------------------------------------------
        // DOCTOR LOGIN CHECK
        // -----------------------------------------------

        let doctor = null;

        if (req.session && req.session.doctor) {

            doctor = req.session.doctor;

        }


        // -----------------------------------------------
        // DOCTOR NAME
        // -----------------------------------------------

        let doctorName = "Doctor";

        if (doctor && doctor.name) {

            doctorName = doctor.name;

        }


        // -----------------------------------------------
        // PRODUCTS FETCH
        // -----------------------------------------------

        const products = await Product
            .find({})
            .sort({
                createdAt: -1
            })
            .lean();


        // -----------------------------------------------
        // PRODUCT DATA CLEAN
        // -----------------------------------------------

        const productData = products.map(product => {

            return {

                _id: product._id
                    ? product._id.toString()
                    : "",

                name:
                    product.name || "",

                category:
                    product.category || "",

                brand:
                    product.brand || "",

                manufacturer:
                    product.manufacturer || "",

                description:
                    product.description || "",

                stock:
                    Number(product.stock || 0),

                batch:
                    product.batch ||
                    product.batchNo ||
                    product.batchNumber ||
                    "",

                expiry:
                    product.expiry ||
                    product.expiryDate ||
                    "",

                use:
                    product.use ||
                    product.uses ||
                    product.usage ||
                    "",

                image:
                    product.image ||
                    product.mainImage ||
                    "",

                mainImage:
                    product.mainImage ||
                    product.image ||
                    "",

                images:
                    Array.isArray(product.images)
                        ? product.images
                        : [],

                video:
                    product.video || ""

            };

        });


        // -----------------------------------------------
        // STORE HTML
        // -----------------------------------------------

        const htmlPath = path.join(
            __dirname,
            "../pages/store.html"
        );


        // -----------------------------------------------
        // READ HTML
        // -----------------------------------------------

        const fs = require("fs");

        let html =
            fs.readFileSync(
                htmlPath,
                "utf8"
            );


        // -----------------------------------------------
        // DOCTOR NAME
        // -----------------------------------------------

        html = html.replace(
            "__DOCTOR_NAME__",
            escapeHTML(doctorName)
        );


        // -----------------------------------------------
        // PRODUCT COUNT
        // -----------------------------------------------

        html = html.replace(
            "__PRODUCT_COUNT__",
            productData.length
        );


        // -----------------------------------------------
        // PRODUCT JSON
        // -----------------------------------------------

        html = html.replace(
            "__PRODUCTS_JSON__",
            JSON.stringify(productData)
                .replace(/</g, "\\u003c")
                .replace(/>/g, "\\u003e")
                .replace(/&/g, "\\u0026")
        );


        // -----------------------------------------------
        // SEND
        // -----------------------------------------------

        res.send(html);

    }

    catch (error) {

        console.error(
            "STORE ERROR:",
            error
        );

        res.status(500).send(`
            <h2>Store Error</h2>
            <pre>${escapeHTML(
                error.message
            )}</pre>
        `);

    }

});


// ======================================================
// ESCAPE HTML
// ======================================================

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}

// ======================================
// MEDICINE PRODUCT DETAIL
// ======================================

router.get(
    "/doctor/product/:id",
    async function (req, res) {

        try {

            const product =
                await Product
                    .findById(
                        req.params.id
                    )
                    .lean();


            if (!product) {

                return res
                    .status(404)
                    .send(
                        "Medicine Product Not Found"
                    );

            }


            function escapeHTML(value) {

                return String(value ?? "")
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");

            }


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
                "-";


            const composition =
                product.composition ||
                product.description ||
                "Composition information not available.";


            const packSize =
                product.packSize ||
                product.pack ||
                product.size ||
                product.unit ||
                "";


            const images =
                Array.isArray(
                    product.images
                )
                    ? product.images
                    : [];


            const firstImage =
                images.length
                    ? images[0]
                    : "";


            const productImage =
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


            const mrp =
                Number(
                    product.mrp ||
                    product.MRP ||
                    0
                );


            const sellingPrice =
                Number(
                    product.sellingPrice ??
                    product.price ??
                    product.salePrice ??
                    0
                );


            const discount =
                mrp > sellingPrice &&
                sellingPrice > 0
                    ? Math.round(
                        (
                            (
                                mrp -
                                sellingPrice
                            ) /
                            mrp
                        ) * 100
                    )
                    : 0;


            const stock =
                Number(
                    product.stockQuantity ??
                    product.stock ??
                    product.quantity ??
                    0
                );


            const hasStockField =
                product.stockQuantity !==
                    undefined ||

                product.stock !==
                    undefined ||

                product.quantity !==
                    undefined;


            const inStock =
                product.isInStock !== false &&
                (
                    !hasStockField ||
                    stock > 0
                );


            return res.send(`

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        ${escapeHTML(productName)} | GLOBAL HEALTHCARE
    </title>


    <style>

        * {
            box-sizing: border-box;
        }


        body {
            margin: 0;
            padding: 20px;

            font-family:
                Arial,
                sans-serif;

            color: #0f172a;

            background:
                linear-gradient(
                    135deg,
                    #ecfdf5,
                    #f8fafc
                );
        }


        .product-container {
            width: 100%;
            max-width: 1050px;

            display: grid;

            grid-template-columns:
                minmax(0, 1fr)
                minmax(0, 1fr);

            gap: 30px;

            margin: 25px auto;
            padding: 28px;

            background: #ffffff;

            border: 1px solid #dcebe3;
            border-radius: 25px;

            box-shadow:
                0 20px 55px
                rgba(15, 73, 42, 0.13);
        }


        .product-image {
            min-height: 420px;

            display: flex;
            align-items: center;
            justify-content: center;

            position: relative;

            overflow: hidden;

            background: #f8fafc;

            border-radius: 20px;
        }


        .product-image img {
            width: 100%;
            height: 420px;


            object-fit: contain;
        }


        .image-placeholder {
            color: #16a34a;

            font-size: 90px;
        }


        .discount {
            position: absolute;
            top: 15px;
            right: 15px;

            padding: 8px 12px;

            color: #ffffff;
            background: #ef4444;

            border-radius: 30px;

            font-size: 12px;
            font-weight: 900;
        }


        .category {
            display: inline-block;

            padding: 7px 12px;

            color: #166534;
            background: #dcfce7;

            border-radius: 25px;

            font-size: 11px;
            font-weight: 900;
        }


        h1 {
            margin: 15px 0 8px;

            color: #123d2b;

            font-size: 32px;
            line-height: 1.2;
        }


        .brand {
            color: #15803d;

            font-size: 14px;
            font-weight: 800;
        }


        .rating {
            margin-top: 12px;

            color: #e5a000;

            font-weight: 800;
        }


        .composition {
            margin-top: 20px;
            padding: 16px;

            color: #475569;
            background: #f8fafc;

            border-left: 4px solid #16a34a;
            border-radius: 12px;

            line-height: 1.6;
        }


        .composition strong {
            display: block;

            margin-bottom: 5px;

            color: #123d2b;
        }


        .price-box {
            display: flex;
            align-items: center;
            gap: 12px;

            margin-top: 22px;
        }


        .price {
            color: #123d2b;

            font-size: 30px;
            font-weight: 900;
        }


        .mrp {
            color: #94a3b8;

            font-size: 16px;
        }


        .stock {
            display: inline-block;

            margin-top: 16px;
            padding: 8px 13px;

            border-radius: 25px;

            font-size: 12px;
            font-weight: 900;
        }


        .in-stock {
            color: #166534;
            background: #dcfce7;
        }


        .out-stock {
            color: #991b1b;
            background: #fee2e2;
        }


        .buttons {
            display: flex;
            gap: 10px;

            margin-top: 25px;
        }


        .button {
            flex: 1;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 14px;

            border-radius: 12px;

            text-decoration: none;

            font-weight: 800;
        }


        .store-button {
            color: #ffffff;
            background: #16a34a;
        }


        .login-button {
            color: #15803d;
            background: #dcfce7;
        }


        @media(max-width: 700px) {

            body {
                padding: 10px;
            }


            .product-container {
                grid-template-columns: 1fr;

                gap: 18px;

                margin: 10px auto;
                padding: 15px;

                border-radius: 18px;
            }


            .product-image {
                min-height: 300px;
            }


            .product-image img {
                height: 300px;
            }


            h1 {
                font-size: 25px;
            }


            .buttons {
                flex-direction: column;
            }

        }

    </style>

</head>


<body>

    <main class="product-container">

        <div class="product-image">

            ${
                productImage
                    ? `

                        <img
                            src="${escapeHTML(productImage)}"
                            alt="${escapeHTML(productName)}"
                        >

                    `
                    : `

                        <div class="image-placeholder">
                            💊
                        </div>

                    `
            }


            ${
                discount > 0
                    ? `

                        <span class="discount">
                            ${discount}% OFF
                        </span>

                    `
                    : ""
            }

        </div>


        <div class="product-details">

            <span class="category">
                ${escapeHTML(category)}
            </span>


            <h1>

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

            </h1>


            <div class="brand">
                ${escapeHTML(brand)}
            </div>


            <div class="rating">
                ★★★★★ 5.0
            </div>


            <div class="composition">

                <strong>
                    Composition
                </strong>

                ${escapeHTML(composition)}

            </div>


            <div class="price-box">

                <span class="price">

                    ${
                        sellingPrice > 0
                            ? "₹" +
                              sellingPrice.toFixed(2)
                            : "Ask Price"
                    }

                </span>


                ${
                    mrp > sellingPrice &&
                    sellingPrice > 0
                        ? `

                            <del class="mrp">
                                ₹${mrp.toFixed(2)}
                            </del>

                        `
                        : ""
                }

            </div>


            <span class="
                stock
                ${
                    inStock
                        ? "in-stock"
                        : "out-stock"
                }
            ">

                ${
                    inStock
                        ? "✓ In Stock"
                        : "Out of Stock"
                }

            </span>


            <div class="buttons">

                <a
                    href="/doctor/store"
                    class="
                        button
                        store-button
                    "
                >
                    ← View Medicine Store
                </a>


                <a
                    href="/admin/doctor-login"
                    class="
                        button
                        login-button
                    "
                >
                    Doctor Login
                </a>

            </div>

        </div>

    </main>

</body>

</html>

            `);

        } catch (error) {

            console.error(
                "PRODUCT DETAIL ERROR:",
                error
            );

            return res
                .status(404)
                .send(
                    "Invalid Medicine Product"
                );

        }

    }
);


module.exports = router;
