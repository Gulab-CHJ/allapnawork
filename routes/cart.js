// // const express = require("express");
// // const router = express.Router();

// // const Cart = require("../models/Cart");


// // // ======================================================
// // // GET CART
// // // GET /api/cart
// // // ======================================================

// // router.get("/", async (req, res) => {

// //     try {

// //         const doctorId =
// //             req.session?.doctor?.doctorId ||
// //             req.session?.doctorId ||
// //             "";

// //         console.log("================================");
// //         console.log("GET CART");
// //         console.log("SESSION DOCTOR ID:", doctorId);
// //         console.log("================================");


// //         if (!doctorId) {

// //             return res.status(401).json({
// //                 success: false,
// //                 message: "Doctor not logged in",
// //                 cart: []
// //             });
// //         }


// //         const cart =
// //             await Cart.findOne({
// //                 doctorId: String(doctorId)
// //             }).lean();


// //         console.log(
// //             "CART FROM DATABASE:",
// //             cart
// //         );


// //         if (!cart) {

// //             return res.json({
// //                 success: true,
// //                 cart: []
// //             });
// //         }


// //         const items =
// //             Array.isArray(cart.items)
// //                 ? cart.items
// //                 : [];


// //         const formattedCart =
// //             items.map(item => {

// //                 const quantity =
// //                     Number(
// //                         item.quantity ??
// //                         item.qty ??
// //                         1
// //                     );


// //                 return {

// //                     id:
// //                         String(
// //                             item.productId ||
// //                             ""
// //                         ),

// //                     productId:
// //                         String(
// //                             item.productId ||
// //                             ""
// //                         ),

// //                     name:
// //                         item.name ||
// //                         "Product",

// //                     price:
// //                         Number(
// //                             item.price
// //                         ) || 0,

// //                     image:
// //                         item.image ||
// //                         "",

// //                     quantity:
// //                         quantity > 0
// //                             ? quantity
// //                             : 1,

// //                     qty:
// //                         quantity > 0
// //                             ? quantity
// //                             : 1
// //                 };

// //             });


// //         return res.json({

// //             success: true,

// //             cart:
// //                 formattedCart
// //         });


// //     } catch (error) {

// //         console.error(
// //             "GET CART ERROR:",
// //             error
// //         );


// //         return res.status(500).json({

// //             success: false,

// //             message:
// //                 "Failed to load cart",

// //             cart: [],

// //             error:
// //                 error.message
// //         });
// //     }
// // });



// // // ======================================================
// // // ADD TO CART
// // // POST /api/cart
// // // ======================================================

// // router.post("/", async (req, res) => {

// //     try {

// //         const doctorId =
// //             req.session?.doctor?.doctorId ||
// //             req.session?.doctorId ||
// //             req.body?.doctorId ||
// //             "";


// //         console.log("================================");
// //         console.log("ADD TO CART");
// //         console.log("DOCTOR ID:", doctorId);
// //         console.log("BODY:", req.body);
// //         console.log("================================");


// //         if (!doctorId) {

// //             return res.status(401).json({

// //                 success: false,

// //                 message:
// //                     "Doctor not logged in"
// //             });
// //         }


// //         const {
// //             productId,
// //             name,
// //             price,
// //             quantity,
// //             qty,
// //             image
// //         } = req.body;


// //         if (!productId) {

// //             return res.status(400).json({

// //                 success: false,

// //                 message:
// //                     "Product ID is required"
// //             });
// //         }


// //         let itemQuantity =
// //             Number(
// //                 quantity ??
// //                 qty ??
// //                 1
// //             );


// //         if (
// //             !Number.isFinite(
// //                 itemQuantity
// //             ) ||
// //             itemQuantity < 1
// //         ) {

// //             itemQuantity = 1;
// //         }


// //         itemQuantity =
// //             Math.floor(
// //                 itemQuantity
// //             );


// //         let cart =
// //             await Cart.findOne({

// //                 doctorId:
// //                     String(doctorId)

// //             });


// //         // ==================================================
// //         // CREATE NEW CART
// //         // ==================================================

// //         if (!cart) {

// //             cart =
// //                 new Cart({

// //                     doctorId:
// //                         String(doctorId),

// //                     items: [

// //                         {

// //                             productId:
// //                                 String(
// //                                     productId
// //                                 ),

// //                             name:
// //                                 name ||
// //                                 "Product",

// //                             price:
// //                                 Number(
// //                                     price
// //                                 ) || 0,

// //                             quantity:
// //                                 itemQuantity,

// //                             image:
// //                                 image ||
// //                                 ""
// //                         }

// //                     ]
// //                 });
// //         }


// //         // ==================================================
// //         // EXISTING CART
// //         // ==================================================

// //         else {

// //             if (
// //                 !Array.isArray(
// //                     cart.items
// //                 )
// //             ) {

// //                 cart.items = [];
// //             }


// //             const existingItem =
// //                 cart.items.find(
// //                     item =>
// //                         String(
// //                             item.productId
// //                         ) ===
// //                         String(
// //                             productId
// //                         )
// //                 );


// //             // ==================================================
// //             // PRODUCT ALREADY EXISTS
// //             // ==================================================

// //             if (existingItem) {

// //                 const oldQuantity =
// //                     Number(
// //                         existingItem.quantity ??
// //                         existingItem.qty ??
// //                         0
// //                     );


// //                 existingItem.quantity =
// //                     (
// //                         Number.isFinite(
// //                             oldQuantity
// //                         )
// //                             ? oldQuantity
// //                             : 0
// //                     ) +
// //                     itemQuantity;


// //                 /*
// //                  * Update product information
// //                  * if new information is available
// //                  */

// //                 if (name) {

// //                     existingItem.name =
// //                         name;
// //                 }


// //                 if (
// //                     price !== undefined &&
// //                     price !== null &&
// //                     price !== ""
// //                 ) {

// //                     existingItem.price =
// //                         Number(price) || 0;
// //                 }


// //                 if (image) {

// //                     existingItem.image =
// //                         image;
// //                 }
// //             }


// //             // ==================================================
// //             // NEW PRODUCT
// //             // ==================================================

// //             else {

// //                 cart.items.push({

// //                     productId:
// //                         String(
// //                             productId
// //                         ),

// //                     name:
// //                         name ||
// //                         "Product",

// //                     price:
// //                         Number(
// //                             price
// //                         ) || 0,

// //                     quantity:
// //                         itemQuantity,

// //                     image:
// //                         image ||
// //                         ""
// //                 });
// //             }
// //         }


// //         await cart.save();


// //         console.log(
// //             "CART SAVED SUCCESSFULLY:"
// //         );

// //         console.log(cart);


// //         return res.json({

// //             success: true,

// //             message:
// //                 "Product added to cart",

// //             cart:
// //                 cart.items
// //         });


// //     } catch (error) {

// //         console.error(
// //             "ADD TO CART ERROR:",
// //             error
// //         );


// //         return res.status(500).json({

// //             success: false,

// //             message:
// //                 "Unable to add product to cart",

// //             error:
// //                 error.message
// //         });
// //     }
// // });



// // // ======================================================
// // // UPDATE CART ITEM
// // // PUT /api/cart/:productId
// // // ======================================================

// // router.put("/:productId", async (req, res) => {

// //     try {

// //         const doctorId =
// //             req.session?.doctor?.doctorId ||
// //             req.session?.doctorId ||
// //             "";


// //         const productId =
// //             req.params.productId;


// //         let quantity =
// //             Number(
// //                 req.body.quantity ??
// //                 req.body.qty
// //             );


// //         console.log("================================");
// //         console.log("UPDATE CART");
// //         console.log("DOCTOR ID:", doctorId);
// //         console.log("PRODUCT ID:", productId);
// //         console.log("NEW QUANTITY:", quantity);
// //         console.log("================================");


// //         if (!doctorId) {

// //             return res.status(401).json({

// //                 success: false,

// //                 message:
// //                     "Doctor not logged in"
// //             });
// //         }


// //         if (
// //             !Number.isFinite(
// //                 quantity
// //             ) ||
// //             quantity < 1
// //         ) {

// //             return res.status(400).json({

// //                 success: false,

// //                 message:
// //                     "Quantity must be at least 1"
// //             });
// //         }


// //         quantity =
// //             Math.floor(
// //                 quantity
// //             );


// //         const cart =
// //             await Cart.findOne({

// //                 doctorId:
// //                     String(doctorId)

// //             });


// //         if (!cart) {

// //             return res.status(404).json({

// //                 success: false,

// //                 message:
// //                     "Cart not found"
// //             });
// //         }


// //         if (
// //             !Array.isArray(
// //                 cart.items
// //             )
// //         ) {

// //             return res.status(404).json({

// //                 success: false,

// //                 message:
// //                     "Cart is empty"
// //             });
// //         }


// //         const item =
// //             cart.items.find(
// //                 item =>
// //                     String(
// //                         item.productId
// //                     ) ===
// //                     String(
// //                         productId
// //                     )
// //             );


// //         if (!item) {

// //             return res.status(404).json({

// //                 success: false,

// //                 message:
// //                     "Product not found in cart"
// //             });
// //         }


// //         // ==================================================
// //         // UPDATE QUANTITY
// //         // ==================================================

// //         item.quantity =
// //             quantity;


// //         await cart.save();


// //         console.log(
// //             "QUANTITY UPDATED:",
// //             quantity
// //         );


// //         return res.json({

// //             success: true,

// //             message:
// //                 "Cart updated",

// //             cart:
// //                 cart.items
// //         });


// //     } catch (error) {

// //         console.error(
// //             "UPDATE CART ERROR:",
// //             error
// //         );


// //         return res.status(500).json({

// //             success: false,

// //             message:
// //                 "Unable to update cart",

// //             error:
// //                 error.message
// //         });
// //     }
// // });



// // // ======================================================
// // // CLEAR CART
// // // DELETE /api/cart/clear
// // //
// // // IMPORTANT:
// // // This route MUST be BEFORE /:productId
// // // ======================================================

// // router.delete("/clear", async (req, res) => {

// //     try {

// //         const doctorId =
// //             req.session?.doctor?.doctorId ||
// //             req.session?.doctorId ||
// //             "";


// //         console.log("================================");
// //         console.log("CLEAR CART");
// //         console.log("DOCTOR ID:", doctorId);
// //         console.log("================================");


// //         if (!doctorId) {

// //             return res.status(401).json({

// //                 success: false,

// //                 message:
// //                     "Doctor not logged in"
// //             });
// //         }


// //         await Cart.findOneAndDelete({

// //             doctorId:
// //                 String(doctorId)

// //         });


// //         return res.json({

// //             success: true,

// //             message:
// //                 "Cart cleared",

// //             cart: []
// //         });


// //     } catch (error) {

// //         console.error(
// //             "CLEAR CART ERROR:",
// //             error
// //         );


// //         return res.status(500).json({

// //             success: false,

// //             message:
// //                 "Unable to clear cart",

// //             error:
// //                 error.message
// //         });
// //     }
// // });



// // // ======================================================
// // // REMOVE ITEM
// // // DELETE /api/cart/:productId
// // // ======================================================

// // router.delete("/:productId", async (req, res) => {

// //     try {

// //         const doctorId =
// //             req.session?.doctor?.doctorId ||
// //             req.session?.doctorId ||
// //             "";


// //         const productId =
// //             req.params.productId;


// //         console.log("================================");
// //         console.log("REMOVE CART ITEM");
// //         console.log("DOCTOR ID:", doctorId);
// //         console.log("PRODUCT ID:", productId);
// //         console.log("================================");


// //         if (!doctorId) {

// //             return res.status(401).json({

// //                 success: false,

// //                 message:
// //                     "Doctor not logged in"
// //             });
// //         }


// //         const cart =
// //             await Cart.findOne({

// //                 doctorId:
// //                     String(doctorId)

// //             });


// //         if (!cart) {

// //             return res.status(404).json({

// //                 success: false,

// //                 message:
// //                     "Cart not found"
// //             });
// //         }


// //         if (
// //             !Array.isArray(
// //                 cart.items
// //             )
// //         ) {

// //             cart.items = [];
// //         }


// //         const oldLength =
// //             cart.items.length;


// //         cart.items =
// //             cart.items.filter(
// //                 item =>
// //                     String(
// //                         item.productId
// //                     ) !==
// //                     String(
// //                         productId
// //                     )
// //             );


// //         if (
// //             cart.items.length ===
// //             oldLength
// //         ) {

// //             return res.status(404).json({

// //                 success: false,

// //                 message:
// //                     "Product not found in cart",

// //                 cart:
// //                     cart.items
// //             });
// //         }


// //         await cart.save();


// //         console.log(
// //             "PRODUCT REMOVED:",
// //             productId
// //         );


// //         return res.json({

// //             success: true,

// //             message:
// //                 "Product removed",

// //             cart:
// //                 cart.items
// //         });


// //     } catch (error) {

// //         console.error(
// //             "REMOVE CART ERROR:",
// //             error
// //         );


// //         return res.status(500).json({

// //             success: false,

// //             message:
// //                 "Unable to remove product",

// //             error:
// //                 error.message
// //         });
// //     }
// // });



// // // ======================================================
// // // EXPORT ROUTER
// // // ======================================================

// // module.exports = router;

// const express = require("express");
// const router = express.Router();

// const Cart = require("../models/Cart");

// // ======================================================
// // DOCTOR ID HELPER
// // ======================================================

// function getDoctorId(req) {

//     const doctor = req.session?.doctor;

//     if (!doctor) {
//         return "";
//     }

//     /*
//      * IMPORTANT:
//      * पहले custom doctorId को preference दी गई है
//      * क्योंकि आपके existing Cart documents इसी ID
//      * से बने हो सकते हैं।
//      */

//     return String(
//         doctor.doctorId ||
//         doctor._id ||
//         doctor.id ||
//         req.session?.doctorId ||
//         ""
//     ).trim();
// }


// // ======================================================
// // FORMAT CART
// // ======================================================

// function formatCart(cart) {

//     if (!cart || !Array.isArray(cart.items)) {
//         return [];
//     }

//     return cart.items.map(item => {

//         const quantity = Number(
//             item.quantity ??
//             item.qty ??
//             1
//         );

//         const safeQuantity =
//             Number.isFinite(quantity) && quantity > 0
//                 ? Math.floor(quantity)
//                 : 1;

//         return {

//             id: String(
//                 item.productId || ""
//             ),

//             productId: String(
//                 item.productId || ""
//             ),

//             name:
//                 item.name ||
//                 "Product",

//             price:
//                 Number(item.price) || 0,

//             image:
//                 item.image ||
//                 "",

//             quantity:
//                 safeQuantity,

//             qty:
//                 safeQuantity

//         };

//     });

// }


// // ======================================================
// // GET CART
// // GET /api/cart
// // ======================================================

// router.get("/", async (req, res) => {

//     try {

//         const doctorId =
//             getDoctorId(req);


//         console.log("================================");
//         console.log("GET CART");
//         console.log("DOCTOR ID:", doctorId);
//         console.log("SESSION DOCTOR:", req.session?.doctor);
//         console.log("================================");


//         // ==================================================
//         // LOGIN CHECK
//         // ==================================================

//         if (!doctorId) {

//             return res.status(401).json({

//                 success: false,

//                 message:
//                     "Doctor not logged in",

//                 cart: []

//             });

//         }


//         // ==================================================
//         // FIND CART
//         // ==================================================

//         const cart =
//             await Cart.findOne({

//                 doctorId:
//                     String(doctorId)

//             }).lean();


//         console.log(
//             "CART FROM DATABASE:",
//             cart
//         );


//         // ==================================================
//         // CART NOT FOUND
//         // ==================================================

//         if (!cart) {

//             return res.json({

//                 success: true,

//                 cart: []

//             });

//         }


//         // ==================================================
//         // FORMAT CART
//         // ==================================================

//         const formattedCart =
//             formatCart(cart);


//         return res.json({

//             success: true,

//             cart:
//                 formattedCart

//         });

//     }

//     catch (error) {

//         console.error(
//             "GET CART ERROR:",
//             error
//         );


//         return res.status(500).json({

//             success: false,

//             message:
//                 "Failed to load cart",

//             cart: [],

//             error:
//                 error.message

//         });

//     }

// });


// // ======================================================
// // ADD PRODUCT TO CART
// // POST /api/cart
// // ======================================================

// router.post("/", async (req, res) => {

//     try {

//         const doctorId =
//             getDoctorId(req);


//         console.log("================================");
//         console.log("ADD TO CART");
//         console.log("DOCTOR ID:", doctorId);
//         console.log("BODY:", req.body);
//         console.log("================================");


//         // ==================================================
//         // LOGIN CHECK
//         // ==================================================

//         if (!doctorId) {

//             return res.status(401).json({

//                 success: false,

//                 message:
//                     "Doctor not logged in"

//             });

//         }


//         // ==================================================
//         // REQUEST DATA
//         // ==================================================

//         const {

//             productId,

//             name,

//             price,

//             quantity,

//             qty,

//             image

//         } = req.body;


//         // ==================================================
//         // PRODUCT ID CHECK
//         // ==================================================

//         if (!productId) {

//             return res.status(400).json({

//                 success: false,

//                 message:
//                     "Product ID is required"

//             });

//         }


//         // ==================================================
//         // QUANTITY
//         // ==================================================

//         let itemQuantity =
//             Number(
//                 quantity ??
//                 qty ??
//                 1
//             );


//         if (
//             !Number.isFinite(
//                 itemQuantity
//             ) ||
//             itemQuantity < 1
//         ) {

//             itemQuantity = 1;

//         }


//         itemQuantity =
//             Math.floor(
//                 itemQuantity
//             );


//         // ==================================================
//         // PRICE
//         // ==================================================

//         const itemPrice =
//             Number(price) || 0;


//         // ==================================================
//         // FIND CART
//         // ==================================================

//         let cart =
//             await Cart.findOne({

//                 doctorId:
//                     String(doctorId)

//             });


//         // ==================================================
//         // CREATE CART
//         // ==================================================

//         if (!cart) {

//             cart =
//                 new Cart({

//                     doctorId:
//                         String(doctorId),

//                     items: [

//                         {

//                             productId:
//                                 String(
//                                     productId
//                                 ),

//                             name:
//                                 name ||
//                                 "Product",

//                             price:
//                                 itemPrice,

//                             quantity:
//                                 itemQuantity,

//                             image:
//                                 image ||
//                                 ""

//                         }

//                     ]

//                 });

//         }


//         // ==================================================
//         // EXISTING CART
//         // ==================================================

//         else {

//             if (
//                 !Array.isArray(
//                     cart.items
//                 )
//             ) {

//                 cart.items = [];

//             }


//             // ==================================================
//             // FIND EXISTING PRODUCT
//             // ==================================================

//             const existingItem =
//                 cart.items.find(
//                     item =>
//                         String(
//                             item.productId
//                         ) ===
//                         String(
//                             productId
//                         )
//                 );


//             // ==================================================
//             // PRODUCT ALREADY IN CART
//             // ==================================================

//             if (existingItem) {

//                 const oldQuantity =
//                     Number(
//                         existingItem.quantity ??
//                         existingItem.qty ??
//                         0
//                     );


//                 const safeOldQuantity =
//                     Number.isFinite(
//                         oldQuantity
//                     ) &&
//                     oldQuantity > 0
//                         ? oldQuantity
//                         : 0;


//                 existingItem.quantity =
//                     safeOldQuantity +
//                     itemQuantity;


//                 // Update latest information

//                 if (name) {

//                     existingItem.name =
//                         name;

//                 }


//                 if (
//                     price !== undefined &&
//                     price !== null &&
//                     price !== ""
//                 ) {

//                     existingItem.price =
//                         itemPrice;

//                 }


//                 if (image) {

//                     existingItem.image =
//                         image;

//                 }

//             }


//             // ==================================================
//             // NEW PRODUCT
//             // ==================================================

//             else {

//                 cart.items.push({

//                     productId:
//                         String(
//                             productId
//                         ),

//                     name:
//                         name ||
//                         "Product",

//                     price:
//                         itemPrice,

//                     quantity:
//                         itemQuantity,

//                     image:
//                         image ||
//                         ""

//                 });

//             }

//         }


//         // ==================================================
//         // SAVE
//         // ==================================================

//         await cart.save();


//         console.log(
//             "CART SAVED SUCCESSFULLY"
//         );


//         const formattedCart =
//             formatCart(cart);


//         return res.status(200).json({

//             success: true,

//             message:
//                 "Product added to cart",

//             cart:
//                 formattedCart

//         });

//     }

//     catch (error) {

//         console.error(
//             "ADD TO CART ERROR:",
//             error
//         );


//         return res.status(500).json({

//             success: false,

//             message:
//                 "Unable to add product to cart",

//             error:
//                 error.message

//         });

//     }

// });


// // ======================================================
// // UPDATE CART ITEM
// // PUT /api/cart/:productId
// // ======================================================

// router.put("/:productId", async (req, res) => {

//     try {

//         const doctorId =
//             getDoctorId(req);


//         const productId =
//             String(
//                 req.params.productId || ""
//             ).trim();


//         let quantity =
//             Number(
//                 req.body.quantity ??
//                 req.body.qty
//             );


//         console.log("================================");
//         console.log("UPDATE CART");
//         console.log("DOCTOR ID:", doctorId);
//         console.log("PRODUCT ID:", productId);
//         console.log("NEW QUANTITY:", quantity);
//         console.log("================================");


//         // ==================================================
//         // LOGIN
//         // ==================================================

//         if (!doctorId) {

//             return res.status(401).json({

//                 success: false,

//                 message:
//                     "Doctor not logged in"

//             });

//         }


//         // ==================================================
//         // PRODUCT ID
//         // ==================================================

//         if (!productId) {

//             return res.status(400).json({

//                 success: false,

//                 message:
//                     "Product ID is required"

//             });

//         }


//         // ==================================================
//         // QUANTITY
//         // ==================================================

//         if (
//             !Number.isFinite(
//                 quantity
//             ) ||
//             quantity < 1
//         ) {

//             return res.status(400).json({

//                 success: false,

//                 message:
//                     "Quantity must be at least 1"

//             });

//         }


//         quantity =
//             Math.floor(
//                 quantity
//             );


//         // ==================================================
//         // FIND CART
//         // ==================================================

//         const cart =
//             await Cart.findOne({

//                 doctorId:
//                     String(doctorId)

//             });


//         if (!cart) {

//             return res.status(404).json({

//                 success: false,

//                 message:
//                     "Cart not found",

//                 cart: []

//             });

//         }


//         if (
//             !Array.isArray(
//                 cart.items
//             )
//         ) {

//             return res.status(404).json({

//                 success: false,

//                 message:
//                     "Cart is empty",

//                 cart: []

//             });

//         }


//         // ==================================================
//         // FIND PRODUCT
//         // ==================================================

//         const item =
//             cart.items.find(
//                 item =>
//                     String(
//                         item.productId
//                     ) ===
//                     productId
//             );


//         if (!item) {

//             return res.status(404).json({

//                 success: false,

//                 message:
//                     "Product not found in cart",

//                 cart:
//                     formatCart(cart)

//             });

//         }


//         // ==================================================
//         // UPDATE
//         // ==================================================

//         item.quantity =
//             quantity;


//         await cart.save();


//         console.log(
//             "QUANTITY UPDATED:",
//             quantity
//         );


//         return res.json({

//             success: true,

//             message:
//                 "Cart updated",

//             cart:
//                 formatCart(cart)

//         });

//     }

//     catch (error) {

//         console.error(
//             "UPDATE CART ERROR:",
//             error
//         );


//         return res.status(500).json({

//             success: false,

//             message:
//                 "Unable to update cart",

//             error:
//                 error.message

//         });

//     }

// });


// // ======================================================
// // CLEAR CART
// // DELETE /api/cart/clear
// //
// // IMPORTANT:
// // MUST BE BEFORE /:productId
// // ======================================================

// router.delete("/clear", async (req, res) => {

//     try {

//         const doctorId =
//             getDoctorId(req);


//         console.log("================================");
//         console.log("CLEAR CART");
//         console.log("DOCTOR ID:", doctorId);
//         console.log("================================");


//         // ==================================================
//         // LOGIN
//         // ==================================================

//         if (!doctorId) {

//             return res.status(401).json({

//                 success: false,

//                 message:
//                     "Doctor not logged in",

//                 cart: []

//             });

//         }


//         // ==================================================
//         // DELETE CART
//         // ==================================================

//         const deletedCart =
//             await Cart.findOneAndDelete({

//                 doctorId:
//                     String(doctorId)

//             });


//         console.log(
//             "DELETED CART:",
//             deletedCart
//         );


//         return res.json({

//             success: true,

//             message:
//                 "Cart cleared successfully",

//             cart: []

//         });

//     }

//     catch (error) {

//         console.error(
//             "CLEAR CART ERROR:",
//             error
//         );


//         return res.status(500).json({

//             success: false,

//             message:
//                 "Unable to clear cart",

//             cart: [],

//             error:
//                 error.message

//         });

//     }

// });


// // ======================================================
// // REMOVE SINGLE PRODUCT
// // DELETE /api/cart/:productId
// // ======================================================

// router.delete("/:productId", async (req, res) => {

//     try {

//         const doctorId =
//             getDoctorId(req);


//         const productId =
//             String(
//                 req.params.productId || ""
//             ).trim();


//         console.log("================================");
//         console.log("REMOVE CART ITEM");
//         console.log("DOCTOR ID:", doctorId);
//         console.log("PRODUCT ID:", productId);
//         console.log("================================");


//         // ==================================================
//         // LOGIN
//         // ==================================================

//         if (!doctorId) {

//             return res.status(401).json({

//                 success: false,

//                 message:
//                     "Doctor not logged in",

//                 cart: []

//             });

//         }


//         // ==================================================
//         // PRODUCT ID
//         // ==================================================

//         if (!productId) {

//             return res.status(400).json({

//                 success: false,

//                 message:
//                     "Product ID is required"

//             });

//         }


//         // ==================================================
//         // FIND CART
//         // ==================================================

//         const cart =
//             await Cart.findOne({

//                 doctorId:
//                     String(doctorId)

//             });


//         if (!cart) {

//             return res.status(404).json({

//                 success: false,

//                 message:
//                     "Cart not found",

//                 cart: []

//             });

//         }


//         if (
//             !Array.isArray(
//                 cart.items
//             )
//         ) {

//             cart.items = [];

//         }


//         const oldLength =
//             cart.items.length;


//         // ==================================================
//         // REMOVE
//         // ==================================================

//         cart.items =
//             cart.items.filter(
//                 item =>
//                     String(
//                         item.productId
//                     ) !==
//                     productId
//             );


//         // ==================================================
//         // NOT FOUND
//         // ==================================================

//         if (
//             cart.items.length ===
//             oldLength
//         ) {

//             return res.status(404).json({

//                 success: false,

//                 message:
//                     "Product not found in cart",

//                 cart:
//                     formatCart(cart)

//             });

//         }


//         // ==================================================
//         // IF EMPTY DELETE CART DOCUMENT
//         // ==================================================

//         if (
//             cart.items.length ===
//             0
//         ) {

//             await Cart.deleteOne({

//                 _id:
//                     cart._id

//             });


//             return res.json({

//                 success: true,

//                 message:
//                     "Product removed and cart is now empty",

//                 cart: []

//             });

//         }


//         // ==================================================
//         // SAVE
//         // ==================================================

//         await cart.save();


//         console.log(
//             "PRODUCT REMOVED:",
//             productId
//         );


//         return res.json({

//             success: true,

//             message:
//                 "Product removed",

//             cart:
//                 formatCart(cart)

//         });

//     }

//     catch (error) {

//         console.error(
//             "REMOVE CART ERROR:",
//             error
//         );


//         return res.status(500).json({

//             success: false,

//             message:
//                 "Unable to remove product",

//             cart: [],

//             error:
//                 error.message

//         });

//     }

// });


// // ======================================================
// // EXPORT
// // ======================================================

// module.exports = router;


const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const Cart = require("../models/Cart");
const Product = require("../models/Product");


// ======================================================
// DOCTOR ID
// ======================================================

function getDoctorId(req) {

    const doctor = req.session?.doctor;

    return String(
        doctor?.doctorId ||
        doctor?._id ||
        doctor?.id ||
        req.session?.doctorId ||
        ""
    ).trim();
}


// ======================================================
// SAFE TEXT
// ======================================================

function firstText(...values) {

    for (const value of values) {

        if (
            value !== undefined &&
            value !== null &&
            String(value).trim() !== ""
        ) {
            return String(value).trim();
        }
    }

    return "";
}


// ======================================================
// PRICE CONVERTER
// ======================================================

function toPrice(value) {

    if (
        value === undefined ||
        value === null ||
        value === ""
    ) {
        return null;
    }

    const cleaned = String(value)
        .replace(/,/g, "")
        .replace(/[^0-9.-]/g, "");

    if (!cleaned) {
        return null;
    }

    const number = Number(cleaned);

    if (
        !Number.isFinite(number) ||
        number < 0
    ) {
        return null;
    }

    return number;
}


// ======================================================
// GET PRODUCT PRICE
// ======================================================

function getProductPrice(product) {

    const possiblePrices = [

        product.price,
        product.doctorPrice,
        product.netPrice,
        product.sellingPrice,
        product.salePrice,
        product.tradePrice,
        product.mrp

    ];

    for (const value of possiblePrices) {

        const price = toPrice(value);

        if (price !== null) {
            return price;
        }
    }

    return 0;
}


// ======================================================
// GET PRODUCT IMAGE
// ======================================================

function getImage(value) {

    if (!value) {
        return "";
    }

    if (typeof value === "string") {
        return value.trim();
    }

    if (typeof value === "object") {

        return firstText(
            value.url,
            value.secure_url,
            value.path,
            value.src
        );
    }

    return "";
}


// ======================================================
// FORMAT PRODUCT DETAILS
// ======================================================

function getProductDetails(product) {

    const firstImage =
        Array.isArray(product.images) &&
        product.images.length > 0
            ? product.images[0]
            : "";

    return {

        name: firstText(
            product.name,
            product.productName,
            product.medicineName,
            product.title,
            product.brandName
        ) || "Product",

        price: getProductPrice(product),

        image:
            getImage(product.image) ||
            getImage(product.productImage) ||
            getImage(product.imageUrl) ||
            getImage(product.thumbnail) ||
            getImage(firstImage)

    };
}


// ======================================================
// FIND PRODUCT FROM DATABASE
// ======================================================

async function findProductDetails(productId) {

    const id = String(productId || "").trim();

    if (
        !id ||
        !mongoose.Types.ObjectId.isValid(id)
    ) {
        return null;
    }

    const product =
        await Product.findById(id).lean();

    if (!product) {
        return null;
    }

    return getProductDetails(product);
}


// ======================================================
// FORMAT CART FOR FRONTEND
// ======================================================

function formatCart(cart) {

    if (
        !cart ||
        !Array.isArray(cart.items)
    ) {
        return [];
    }

    return cart.items.map(item => {

        const quantity = Number(
            item.quantity ??
            item.qty ??
            1
        );

        const safeQuantity =
            Number.isFinite(quantity) &&
            quantity > 0
                ? Math.floor(quantity)
                : 1;

        return {

            id: String(
                item.productId || ""
            ),

            productId: String(
                item.productId || ""
            ),

            name:
                item.name ||
                "Product",

            price:
                Number(item.price) || 0,

            image:
                item.image || "",

            quantity:
                safeQuantity,

            qty:
                safeQuantity

        };
    });
}


// ======================================================
// REPAIR OLD CART PRODUCTS
// ======================================================

async function refreshCartProducts(cart) {

    if (
        !cart ||
        !Array.isArray(cart.items)
    ) {
        return;
    }

    let changed = false;

    for (const item of cart.items) {

        const productDetails =
            await findProductDetails(
                item.productId
            );

        if (!productDetails) {
            continue;
        }

        if (
            item.name !== productDetails.name ||
            Number(item.price) !== productDetails.price ||
            String(item.image || "") !== productDetails.image
        ) {

            item.name =
                productDetails.name;

            item.price =
                productDetails.price;

            item.image =
                productDetails.image;

            changed = true;
        }
    }

    if (changed) {
        await cart.save();
    }
}


// ======================================================
// GET CART
// GET /api/cart
// ======================================================

router.get("/", async (req, res) => {

    try {

        const doctorId =
            getDoctorId(req);

        console.log("================================");
        console.log("GET CART");
        console.log("DOCTOR ID:", doctorId);
        console.log("================================");

        if (!doctorId) {

            return res.status(401).json({

                success: false,
                message: "Doctor not logged in",
                cart: []

            });
        }

        const cart =
            await Cart.findOne({

                doctorId:
                    String(doctorId)

            });

        console.log(
            "CART FROM DATABASE:",
            cart
        );

        if (!cart) {

            return res.json({

                success: true,
                cart: []

            });
        }

        /*
         * पुराने Product / ₹0.00 वाले cart को
         * database के product से ठीक करेगा।
         */

        await refreshCartProducts(cart);

        return res.json({

            success: true,
            cart: formatCart(cart)

        });

    } catch (error) {

        console.error(
            "GET CART ERROR:",
            error
        );

        return res.status(500).json({

            success: false,
            message: "Failed to load cart",
            cart: [],
            error: error.message

        });
    }
});


// ======================================================
// ADD TO CART
// POST /api/cart
// ======================================================

router.post("/", async (req, res) => {

    try {

        const doctorId =
            getDoctorId(req);

        const productId =
            String(
                req.body?.productId || ""
            ).trim();

        let quantity =
            Number(
                req.body?.quantity ??
                req.body?.qty ??
                1
            );

        console.log("================================");
        console.log("ADD TO CART");
        console.log("DOCTOR ID:", doctorId);
        console.log("BODY:", req.body);
        console.log("================================");

        if (!doctorId) {

            return res.status(401).json({

                success: false,
                message: "Doctor not logged in"

            });
        }

        if (!productId) {

            return res.status(400).json({

                success: false,
                message: "Product ID is required"

            });
        }

        if (
            !Number.isFinite(quantity) ||
            quantity < 1
        ) {
            quantity = 1;
        }

        quantity =
            Math.floor(quantity);

        /*
         * Product का सही नाम और price
         * MongoDB से लिया जाएगा।
         */

        const productDetails =
            await findProductDetails(
                productId
            );

        if (!productDetails) {

            return res.status(404).json({

                success: false,
                message: "Product not found"

            });
        }

        let cart =
            await Cart.findOne({

                doctorId:
                    String(doctorId)

            });

        if (!cart) {

            cart = new Cart({

                doctorId:
                    String(doctorId),

                items: [

                    {
                        productId:
                            productId,

                        name:
                            productDetails.name,

                        price:
                            productDetails.price,

                        quantity:
                            quantity,

                        image:
                            productDetails.image
                    }

                ]

            });

        } else {

            if (!Array.isArray(cart.items)) {
                cart.items = [];
            }

            const existingItem =
                cart.items.find(item =>

                    String(item.productId) ===
                    productId

                );

            if (existingItem) {

                const oldQuantity =
                    Number(
                        existingItem.quantity ??
                        existingItem.qty ??
                        0
                    );

                existingItem.quantity =
                    (
                        Number.isFinite(oldQuantity) &&
                        oldQuantity > 0
                            ? oldQuantity
                            : 0
                    ) + quantity;

                existingItem.name =
                    productDetails.name;

                existingItem.price =
                    productDetails.price;

                existingItem.image =
                    productDetails.image;

            } else {

                cart.items.push({

                    productId:
                        productId,

                    name:
                        productDetails.name,

                    price:
                        productDetails.price,

                    quantity:
                        quantity,

                    image:
                        productDetails.image

                });
            }
        }

        await cart.save();

        console.log(
            "CART SAVED SUCCESSFULLY:",
            formatCart(cart)
        );

        return res.json({

            success: true,
            message: "Product added to cart",
            cart: formatCart(cart)

        });

    } catch (error) {

        console.error(
            "ADD TO CART ERROR:",
            error
        );

        return res.status(500).json({

            success: false,
            message: "Unable to add product to cart",
            error: error.message

        });
    }
});


// ======================================================
// UPDATE QUANTITY
// PUT /api/cart/:productId
// ======================================================

router.put("/:productId", async (req, res) => {

    try {

        const doctorId =
            getDoctorId(req);

        const productId =
            String(
                req.params.productId || ""
            ).trim();

        let quantity =
            Number(
                req.body?.quantity ??
                req.body?.qty
            );

        console.log("================================");
        console.log("UPDATE CART");
        console.log("DOCTOR ID:", doctorId);
        console.log("PRODUCT ID:", productId);
        console.log("NEW QUANTITY:", quantity);
        console.log("================================");

        if (!doctorId) {

            return res.status(401).json({

                success: false,
                message: "Doctor not logged in",
                cart: []

            });
        }

        if (!productId) {

            return res.status(400).json({

                success: false,
                message: "Product ID is required"

            });
        }

        if (
            !Number.isFinite(quantity) ||
            quantity < 1
        ) {

            return res.status(400).json({

                success: false,
                message: "Quantity must be at least 1"

            });
        }

        quantity =
            Math.floor(quantity);

        const cart =
            await Cart.findOne({

                doctorId:
                    String(doctorId)

            });

        if (!cart) {

            return res.status(404).json({

                success: false,
                message: "Cart not found",
                cart: []

            });
        }

        const item =
            cart.items.find(item =>

                String(item.productId) ===
                productId

            );

        if (!item) {

            return res.status(404).json({

                success: false,
                message: "Product not found in cart",
                cart: formatCart(cart)

            });
        }

        item.quantity =
            quantity;

        /*
         * Quantity update करते समय भी
         * product का latest price update होगा।
         */

        const productDetails =
            await findProductDetails(
                productId
            );

        if (productDetails) {

            item.name =
                productDetails.name;

            item.price =
                productDetails.price;

            item.image =
                productDetails.image;
        }

        await cart.save();

        return res.json({

            success: true,
            message: "Cart updated",
            cart: formatCart(cart)

        });

    } catch (error) {

        console.error(
            "UPDATE CART ERROR:",
            error
        );

        return res.status(500).json({

            success: false,
            message: "Unable to update cart",
            error: error.message

        });
    }
});


// ======================================================
// CLEAR CART
// DELETE /api/cart/clear
//
// यह route /:productId से पहले रहना चाहिए
// ======================================================

router.delete("/clear", async (req, res) => {

    try {

        const doctorId =
            getDoctorId(req);

        if (!doctorId) {

            return res.status(401).json({

                success: false,
                message: "Doctor not logged in",
                cart: []

            });
        }

        await Cart.findOneAndDelete({

            doctorId:
                String(doctorId)

        });

        return res.json({

            success: true,
            message: "Cart cleared successfully",
            cart: []

        });

    } catch (error) {

        console.error(
            "CLEAR CART ERROR:",
            error
        );

        return res.status(500).json({

            success: false,
            message: "Unable to clear cart",
            cart: [],
            error: error.message

        });
    }
});


// ======================================================
// REMOVE SINGLE PRODUCT
// DELETE /api/cart/:productId
// ======================================================

router.delete("/:productId", async (req, res) => {

    try {

        const doctorId =
            getDoctorId(req);

        const productId =
            String(
                req.params.productId || ""
            ).trim();

        console.log("================================");
        console.log("REMOVE CART ITEM");
        console.log("DOCTOR ID:", doctorId);
        console.log("PRODUCT ID:", productId);
        console.log("================================");

        if (!doctorId) {

            return res.status(401).json({

                success: false,
                message: "Doctor not logged in",
                cart: []

            });
        }

        if (!productId) {

            return res.status(400).json({

                success: false,
                message: "Product ID is required"

            });
        }

        const cart =
            await Cart.findOne({

                doctorId:
                    String(doctorId)

            });

        if (!cart) {

            return res.status(404).json({

                success: false,
                message: "Cart not found",
                cart: []

            });
        }

        const oldLength =
            cart.items.length;

        cart.items =
            cart.items.filter(item =>

                String(item.productId) !==
                productId

            );

        if (
            cart.items.length ===
            oldLength
        ) {

            return res.status(404).json({

                success: false,
                message: "Product not found in cart",
                cart: formatCart(cart)

            });
        }

        if (cart.items.length === 0) {

            await Cart.deleteOne({

                _id:
                    cart._id

            });

            return res.json({

                success: true,
                message:
                    "Product removed and cart is now empty",

                cart: []

            });
        }

        await cart.save();

        return res.json({

            success: true,
            message: "Product removed",
            cart: formatCart(cart)

        });

    } catch (error) {

        console.error(
            "REMOVE CART ERROR:",
            error
        );

        return res.status(500).json({

            success: false,
            message: "Unable to remove product",
            cart: [],
            error: error.message

        });
    }
});


// ======================================================
// EXPORT
// ======================================================

module.exports = router;
