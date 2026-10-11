// // require("dotenv").config();
// // const crypto = require("crypto");

// // const Razorpay = require("razorpay");

// // const razorpay = new Razorpay({
// //     key_id: process.env.RAZORPAY_KEY_ID,
// //     key_secret: process.env.RAZORPAY_KEY_SECRET
// // });


// // const express = require("express");
// // const router = express.Router();

// // const dashboard = require("../pages/dashboard");
// // const AdminLogin = require("../pages/adminLogin");
// // const DoctorLogin = require("../pages/doctorLogin");
// // const ManageDoctors = require("../pages/manageDoctors");
// // const AddDoctor = require("../pages/addpages/addDoctor");

// // const { login } = require("../controllers/adminAuth");
// // const AdminController = require("../controllers/adminController");
// // const DoctorDashboard = require("../pages/doctorDashboard");

// // const AddGovernment = require("../views/component/dashboard/addGovernment");

// // const Banner = require("../models/Banner");
// // const Student = require("../models/Student");
// // const Service = require("../models/Service");
// // const Doctor = require("../models/Doctor");
// // const Product = require("../models/Product");

// // const upload = require("../config/upload");


// // // =============================
// // // Admin Login
// // // =============================

// // router.get("/", (req, res) => {
// //     res.send(AdminLogin());
// // });

// // router.post("/login", login);


// // // =============================
// // // Dashboard (FIXED HERE)
// // // =============================

// // // =============================
// // // Dashboard
// // // =============================

// // router.get("/admindashboard", async (req, res) => {
// //     try {

// //         const doctorCount = await Doctor.countDocuments();
// //         const studentCount = await Student.countDocuments();
// //         const serviceCount = await Service.countDocuments();
// //         const bannerCount = await Banner.countDocuments();

// //         console.log("DOCTOR COUNT:", doctorCount);
// //         console.log("STUDENT COUNT:", studentCount);
// //         console.log("SERVICE COUNT:", serviceCount);
// //         console.log("BANNER COUNT:", bannerCount);


// //         const data = {
// //             doctorCount,
// //             studentCount,
// //             serviceCount,
// //             bannerCount
// //         };


// //         console.log("=== ADMIN ROUTE DATA ===");
// //         console.log(data);


// //         return res.send(dashboard(data));


// //     } catch (err) {

// //         console.log("DASHBOARD ERROR:", err);
// //         return res.status(500).send(err.message);

// //     }
// // });

// // // =============================
// // // Banner
// // // =============================

// // router.get("/manage-banners", AdminController.manageBanners);
// // router.get("/manage-banner", AdminController.manageBanners);

// // router.get("/add-banner", AdminController.addBannerPage);

// // router.post(
// //     "/add-banner",
// //     upload.single("image"),
// //     AdminController.saveBanner
// // );

// // router.get("/delete-banner/:id", AdminController.deleteBanner);


// // // =============================
// // // Doctor Login
// // // =============================

// // router.get("/doctor-login", (req, res) => {
// //     res.send(DoctorLogin());
// // });

// // router.post("/doctor/login", async(req,res)=>{

// //     try{

// //         const {doctorId,password} = req.body;


// //         const doctor = await Doctor.findOne({
// //             doctorId: doctorId
// //         });


// //         if(!doctor){

// //             return res.send(
// //                 DoctorLogin("Doctor Not Found")
// //             );

// //         }


// //         if(doctor.password !== password){

// //             return res.send(
// //                 DoctorLogin("Wrong Password")
// //             );

// //         }



// //         // ⭐ IMPORTANT LINE ⭐
// //         req.session.doctor = doctor;



// //         console.log("Doctor Session Saved:");
// //         console.log(req.session.doctor);



// //         res.redirect("/doctor/dashboard");


// //     }
// //     catch(err){

// //         console.log(err);

// //         res.send(
// //             "Login Error"
// //         );

// //     }

// // });


// // // =============================
// // // Manage Doctors
// // // =============================

// // router.get("/manage-doctors", async (req, res) => {
// //     try {
// //         const doctors = await Doctor.find().sort({ createdAt: -1 });
// //         res.send(ManageDoctors(doctors));
// //     } catch (err) {
// //         console.log(err);
// //         res.status(500).send(err.message);
// //     }
// // });





// // router.post(
// //     "/add-doctor",
// //     upload.single("image"),
// //     async (req,res)=>{

// //     try{


// //         console.log("BODY:",req.body);
// //         console.log("FILE:",req.file);



// //         const existDoctor = await Doctor.findOne({
// //             phone:req.body.phone
// //         });


// //         if(existDoctor){

// //             return res.send(
// //                 "Phone Number Already Registered"
// //             );

// //         }



// //         const lastDoctor = await Doctor.findOne()
// //         .sort({createdAt:-1});


// //         let nextNumber = 1001;


// //         if(lastDoctor && lastDoctor.doctorId){

// //             nextNumber =
// //             parseInt(
// //                 lastDoctor.doctorId.replace("DOC","")
// //             ) + 1;

// //         }


// //         const doctorId = "DOC" + nextNumber;



// //         const doctor = new Doctor({


// //             doctorId,


// //             name:req.body.name,


// //             degree:req.body.qualification,


// //             specialization:req.body.speciality,


// //             experience:req.body.experience,


// //             hospital:req.body.clinic,


// //             phone:req.body.phone,


// //             email:req.body.email,


// //             password:req.body.password,


// //             address:req.body.address,


// //             description:req.body.description,



// //             // ======================
// //             // DOCTOR AVAILABILITY
// //             // ======================


// //             availableDay:req.body.availableDay,


// //             timeFrom:req.body.timeFrom,


// //             timeTo:req.body.timeTo,



// //             // ======================
// //             // APPOINTMENT SLOT
// //             // ======================


// //             slotDuration:req.body.slotDuration,



// //             // ======================
// //             // FEE
// //             // ======================


// //             fee:req.body.fee,


// //             feeType:req.body.feeType,



// //             image:req.file
// //             ? req.file.path
// //             :""

// //         });



// //         await doctor.save();



// //         console.log(
// //             "Doctor Saved:",
// //             doctor
// //         );



// //         res.redirect(
// //             "/admin/manage-doctors"
// //         );



// //     }
// //     catch(err){


// //         console.log(
// //             "ADD DOCTOR ERROR:",
// //             err
// //         );


// //         res.status(500)
// //         .send(err.message);


// //     }

// // });

// // // =============================
// // // Delete Doctor
// // // =============================

// // router.get("/delete-doctor/:id", async (req, res) => {
// //     try {
// //         await Doctor.findByIdAndDelete(req.params.id);
// //         res.redirect("/admin/manage-doctors");
// //     } catch (err) {
// //         console.log(err);
// //         res.status(500).send(err.message);
// //     }
// // });

// // const EditDoctor = require("../pages/editpages/editDoctor");


// // // =============================
// // // Edit Doctor Page
// // // =============================

// // router.get("/edit-doctor/:id", async (req, res) => {

// //     try {

// //         const doctor = await Doctor.findById(req.params.id);

// //         if (!doctor) {
// //             return res.send("Doctor Not Found");
// //         }

// //         res.send(EditDoctor(doctor));


// //     } catch (err) {

// //         console.log(err);

// //         res.status(500).send(err.message);

// //     }

// // });





// // // =============================
// // // UPDATE PRODUCT
// // // =============================

// // router.post(
// //     "/edit-product/:id",

// //     upload.fields([
// //         {
// //             name: "images",
// //             maxCount: 10
// //         },
// //         {
// //             name: "videos",
// //             maxCount: 1
// //         }
// //     ]),

// //     async (req, res) => {

// //         try {

// //             console.log("\n========== EDIT PRODUCT ==========");

// //             console.log(
// //                 "PRODUCT ID:",
// //                 req.params.id
// //             );

// //             console.log(
// //                 "BODY:",
// //                 req.body
// //             );

// //             console.log(
// //                 "FILES:",
// //                 req.files
// //             );


// //             // ==========================================
// //             // FIND PRODUCT
// //             // ==========================================

// //             const product =
// //                 await Product.findById(req.params.id);


// //             if (!product) {

// //                 return res
// //                     .status(404)
// //                     .send("Product Not Found");

// //             }


// //             // ==========================================
// //             // BASIC DETAILS
// //             // ==========================================

// //             product.name =
// //                 req.body.name || "";

// //             product.brand =
// //                 req.body.brand || "";

// //             product.category =
// //                 req.body.category || "";

// //             product.manufacturer =
// //                 req.body.manufacturer || "";


// //             // ==========================================
// //             // PRICE
// //             // ==========================================

// //             product.mrp =
// //                 req.body.mrp !== undefined &&
// //                 req.body.mrp !== ""
// //                     ? Number(req.body.mrp)
// //                     : 0;


// //             product.price =
// //                 req.body.price !== undefined &&
// //                 req.body.price !== ""
// //                     ? Number(req.body.price)
// //                     : 0;


// //             product.stock =
// //                 req.body.stock !== undefined &&
// //                 req.body.stock !== ""
// //                     ? Number(req.body.stock)
// //                     : 0;


// //             // ==========================================
// //             // MEDICINE DETAILS
// //             // ==========================================

// //             product.packSize =
// //                 req.body.packSize || "";

// //             product.batchNo =
// //                 req.body.batchNo || "";

// //             product.mfgDate =
// //                 req.body.mfgDate || "";

// //             product.expDate =
// //                 req.body.expDate || "";


// //             // ==========================================
// //             // COMPOSITION
// //             // ==========================================

// //             let composition = [];


// //             if (Array.isArray(req.body.composition)) {

// //                 composition =
// //                     req.body.composition
// //                         .map(item =>
// //                             String(item).trim()
// //                         )
// //                         .filter(Boolean);

// //             }

// //             else if (req.body.composition) {

// //                 composition = [
// //                     String(
// //                         req.body.composition
// //                     ).trim()
// //                 ];

// //             }


// //             product.composition =
// //                 composition;


// //             // ==========================================
// //             // PRODUCT DETAILS
// //             // ==========================================

// //             product.description =
// //                 req.body.description || "";

// //             product.uses =
// //                 req.body.uses || "";

// //             product.benefits =
// //                 req.body.benefits || "";

// //             product.dosage =
// //                 req.body.dosage || "";

// //             product.sideEffects =
// //                 req.body.sideEffects || "";

// //             product.storage =
// //                 req.body.storage || "";


// //             // ==========================================
// //             // IMAGES
// //             // ==========================================

// //             const imageFiles =
// //                 req.files?.images || [];


// //             if (imageFiles.length > 0) {

// //                 console.log(
// //                     "NEW IMAGE COUNT:",
// //                     imageFiles.length
// //                 );


// //                 const newImages =
// //                     imageFiles
// //                         .map(file =>
// //                             file.path ||
// //                             file.secure_url ||
// //                             file.url
// //                         )
// //                         .filter(Boolean);


// //                 let existingImages = [];


// //                 if (Array.isArray(product.images)) {

// //                     existingImages =
// //                         product.images
// //                             .filter(Boolean);

// //                 }


// //                 // पुराने main image को भी preserve करें

// //                 if (
// //                     product.image &&
// //                     !existingImages.includes(
// //                         product.image
// //                     )
// //                 ) {

// //                     existingImages.push(
// //                         product.image
// //                     );

// //                 }


// //                 // पुराने + नए images

// //                 product.images = [
// //                     ...existingImages,
// //                     ...newImages
// //                 ];


// //                 // अगर main image नहीं है

// //                 if (
// //                     !product.image &&
// //                     newImages.length > 0
// //                 ) {

// //                     product.image =
// //                         newImages[0];

// //                 }

// //             }


// //             // ==========================================
// //             // VIDEO
// //             // ==========================================

// //             const videoFiles =
// //                 req.files?.videos || [];


// //             if (videoFiles.length > 0) {

// //                 console.log(
// //                     "NEW VIDEO COUNT:",
// //                     videoFiles.length
// //                 );


// //                 const newVideoUrl =
// //                     videoFiles[0].path ||
// //                     videoFiles[0].secure_url ||
// //                     videoFiles[0].url;


// //                 console.log(
// //                     "NEW VIDEO URL:",
// //                     newVideoUrl
// //                 );


// //                 if (newVideoUrl) {

// //                     // IMPORTANT:
// //                     // Schema field is "video"
// //                     // NOT "videos"

// //                     product.video =
// //                         newVideoUrl;

// //                 }

// //             }

// //             else {

// //                 console.log(
// //                     "NO NEW VIDEO - OLD VIDEO KEPT"
// //                 );

// //             }


// //             // ==========================================
// //             // SAVE PRODUCT
// //             // ==========================================

// //             await product.save();


// //             // ==========================================
// //             // FINAL LOG
// //             // ==========================================

// //             console.log(
// //                 "================================="
// //             );

// //             console.log(
// //                 "PRODUCT UPDATED:",
// //                 product._id
// //             );

// //             console.log(
// //                 "TOTAL IMAGES:",
// //                 product.images?.length || 0
// //             );

// //             console.log(
// //                 "SAVED VIDEO:",
// //                 product.video
// //             );

// //             console.log(
// //                 "================================="
// //             );


// //             // ==========================================
// //             // REDIRECT
// //             // ==========================================

// //             return res.redirect(
// //                 "/admin/manage-products"
// //             );


// //         }

// //         catch (err) {

// //             console.error(
// //                 "UPDATE PRODUCT ERROR:",
// //                 err
// //             );


// //             return res
// //                 .status(500)
// //                 .send(
// //                     "Product Update Error: " +
// //                     err.message
// //                 );

// //         }

// //     }
// // );

// // const ManageProducts = require("../pages/manageProducts");

// // router.get("/manage-products", async (req, res) => {
// //     try {
// //         const products = await Product.find().sort({ createdAt: -1 });
// //         res.send(ManageProducts(products));
// //     } catch (err) {
// //         console.log(err);
// //         res.status(500).send(err.message);
// //     }
// // });

// // const AddProduct = require("../pages/addpages/addProduct");

// // router.get("/add-product", (req, res) => {
// //     res.send(AddProduct());
// // });


// // router.post(
// //     "/add-product",

// //     upload.fields([
// //         {
// //             name: "image",
// //             maxCount: 1
// //         },
// //         {
// //             name: "images",
// //             maxCount: 10
// //         },
// //         {
// //             name: "video",
// //             maxCount: 1
// //         }
// //     ]),

// //     async (req, res) => {

// //         try {

// //             console.log("========== ADD PRODUCT ==========");
// //             console.log("BODY:", req.body);
// //             console.log("FILES:", req.files);


// //             // =============================
// //             // COMPOSITION
// //             // =============================

// //             let composition = [];

// //             if (Array.isArray(req.body.composition)) {

// //                 composition = req.body.composition
// //                     .map(item => String(item).trim())
// //                     .filter(Boolean);

// //             } else if (req.body.composition) {

// //                 composition = [
// //                     String(req.body.composition).trim()
// //                 ];

// //             }


// //             // =============================
// //             // MORE IMAGES
// //             // =============================

// //             let images = [];

// //             if (
// //                 req.files &&
// //                 req.files.images
// //             ) {

// //                 images = req.files.images
// //                     .map(file => file.path)
// //                     .filter(Boolean);

// //             }


// //             // =============================
// //             // MAIN IMAGE
// //             // =============================

// //             let mainImage = "";

// //             if (
// //                 req.files &&
// //                 req.files.image &&
// //                 req.files.image.length > 0
// //             ) {

// //                 mainImage =
// //                     req.files.image[0].path;

// //             }


// //             // =============================
// //             // VIDEO
// //             // =============================

// //             let video = "";

// //             if (
// //                 req.files &&
// //                 req.files.video &&
// //                 req.files.video.length > 0
// //             ) {

// //                 video =
// //                     req.files.video[0].path;

// //             }


// //             // =============================
// //             // PRODUCT
// //             // =============================

// //             const product = new Product({

// //                 name: req.body.name || "",

// //                 brand: req.body.brand || "",

// //                 category: req.body.category || "",

// //                 manufacturer: req.body.manufacturer || "",

// //                 mrp:
// //                     req.body.mrp !== ""
// //                         ? Number(req.body.mrp)
// //                         : 0,

// //                 price:
// //                     req.body.price !== ""
// //                         ? Number(req.body.price)
// //                         : 0,

// //                 stock:
// //                     req.body.stock !== ""
// //                         ? Number(req.body.stock)
// //                         : 0,

// //                 packSize:
// //                     req.body.packSize || "",

// //                 batchNo:
// //                     req.body.batchNo || "",

// //                 mfgDate:
// //                     req.body.mfgDate || "",

// //                 expDate:
// //                     req.body.expDate || "",

// //                 composition,

// //                 images,

// //                 image: mainImage,

// //                 description:
// //                     req.body.description || "",

// //                 uses:
// //                     req.body.uses || "",

// //                 benefits:
// //                     req.body.benefits || "",

// //                 dosage:
// //                     req.body.dosage || "",

// //                 sideEffects:
// //                     req.body.sideEffects || "",

// //                 storage:
// //                     req.body.storage || "",

// //                 video

// //             });


// //             await product.save();


// //             console.log(
// //                 "PRODUCT SAVED:",
// //                 product._id
// //             );


// //             res.redirect(
// //                 "/admin/manage-products"
// //             );


// //         } catch (err) {

// //             console.error(
// //                 "ADD PRODUCT ERROR:",
// //                 err
// //             );

// //             res.status(500).send(
// //                 err.message
// //             );

// //         }

// //     }
// // );





// // // =============================
// // // UPDATE PRODUCT
// // // =============================

// // // router.post(
// // //     "/edit-product/:id",
// // //     upload.array("images", 10),
// // //     async (req, res) => {

// // //         try {

// // //             console.log("================================");
// // //             console.log("EDIT PRODUCT REQUEST");
// // //             console.log("PRODUCT ID:", req.params.id);
// // //             console.log("BODY:", req.body);
// // //             console.log("FILES:", req.files);
// // //             console.log("================================");


// // //             // =============================
// // //             // FIND PRODUCT
// // //             // =============================

// // //             const product = await Product.findById(
// // //                 req.params.id
// // //             );


// // //             if (!product) {

// // //                 return res.status(404).send(
// // //                     "Product Not Found"
// // //                 );

// // //             }


// // //             // =============================
// // //             // COMPOSITION
// // //             // =============================

// // //             let composition = [];

// // //             if (Array.isArray(req.body.composition)) {

// // //                 composition = req.body.composition
// // //                     .map(item => String(item).trim())
// // //                     .filter(item => item !== "");

// // //             } else if (req.body.composition) {

// // //                 composition = [
// // //                     String(req.body.composition).trim()
// // //                 ];

// // //             }


// // //             // =============================
// // //             // UPDATE BASIC INFORMATION
// // //             // =============================

// // //             product.name =
// // //                 req.body.name || "";

// // //             product.brand =
// // //                 req.body.brand || "";

// // //             product.category =
// // //                 req.body.category || "";

// // //             product.manufacturer =
// // //                 req.body.manufacturer || "";


// // //             // =============================
// // //             // PRICE
// // //             // =============================

// // //             product.mrp =
// // //                 req.body.mrp !== ""
// // //                     ? Number(req.body.mrp)
// // //                     : 0;


// // //             product.price =
// // //                 req.body.price !== ""
// // //                     ? Number(req.body.price)
// // //                     : 0;


// // //             // =============================
// // //             // STOCK
// // //             // =============================

// // //             product.stock =
// // //                 req.body.stock !== ""
// // //                     ? Number(req.body.stock)
// // //                     : 0;


// // //             // =============================
// // //             // PACK / BATCH
// // //             // =============================

// // //             product.packSize =
// // //                 req.body.packSize || "";

// // //             product.batchNo =
// // //                 req.body.batchNo || "";


// // //             // =============================
// // //             // DATES
// // //             // =============================

// // //             product.mfgDate =
// // //                 req.body.mfgDate || "";

// // //             product.expDate =
// // //                 req.body.expDate || "";


// // //             // =============================
// // //             // COMPOSITION
// // //             // =============================

// // //             product.composition =
// // //                 composition;


// // //             // =============================
// // //             // PRODUCT DETAILS
// // //             // =============================

// // //             product.description =
// // //                 req.body.description || "";

// // //             product.uses =
// // //                 req.body.uses || "";

// // //             product.benefits =
// // //                 req.body.benefits || "";

// // //             product.dosage =
// // //                 req.body.dosage || "";

// // //             product.sideEffects =
// // //                 req.body.sideEffects || "";

// // //             product.storage =
// // //                 req.body.storage || "";


// // //             // =============================
// // //             // NEW IMAGES
// // //             // =============================

// // //             if (
// // //                 req.files &&
// // //                 req.files.length > 0
// // //             ) {

// // //                 const newImages =
// // //                     req.files
// // //                         .map(file => file.path)
// // //                         .filter(Boolean);


// // //                 // Existing images
// // //                 let existingImages = [];


// // //                 if (
// // //                     Array.isArray(product.images)
// // //                 ) {

// // //                     existingImages =
// // //                         product.images.filter(Boolean);

// // //                 }


// // //                 // Old single image
// // //                 if (
// // //                     product.image &&
// // //                     !existingImages.includes(product.image)
// // //                 ) {

// // //                     existingImages.push(
// // //                         product.image
// // //                     );

// // //                 }


// // //                 // Add new images
// // //                 product.images = [
// // //                     ...existingImages,
// // //                     ...newImages
// // //                 ];


// // //                 // Main image
// // //                 if (!product.image) {

// // //                     product.image =
// // //                         newImages[0] || "";

// // //                 }

// // //             }


// // //             // =============================
// // //             // SAVE PRODUCT
// // //             // =============================

// // //             await product.save();


// // //             console.log(
// // //                 "PRODUCT UPDATED SUCCESSFULLY:"
// // //             );

// // //             console.log(product);


// // //             // =============================
// // //             // REDIRECT
// // //             // =============================

// // //             res.redirect(
// // //                 "/admin/manage-products"
// // //             );


// // //         } catch (err) {

// // //             console.error(
// // //                 "UPDATE PRODUCT ERROR:",
// // //                 err
// // //             );

// // //             res.status(500).send(
// // //                 err.message
// // //             );

// // //         }

// // //     }
// // // );

// // // Delete Product
// // router.get("/delete-product/:id", async (req, res) => {
// //     try {
// //         await Product.findByIdAndDelete(req.params.id);
// //         res.redirect("/admin/manage-products");
// //     } catch (err) {
// //         console.log(err);
// //         res.status(500).send(err.message);
// //     }
// // });


// // // =============================
// // // Doctor Profile Page
// // // =============================

// // const DoctorProfile = require("../pages/doctorProfile");

// // router.get("/doctor/:id", async (req, res) => {
// //     try {
// //         const doctor = await Doctor.findById(req.params.id);
// //         if (!doctor) {
// //             return res.send("Doctor Not Found");
// //         }
// //         res.send(DoctorProfile(doctor));
// //     } catch (err) {
// //         console.log(err);
// //         res.status(500).send(err.message);
// //     }
// // });

// // router.post("/create-phone-payment", async (req, res) => {
// //     try {
// //         const order = await razorpay.orders.create({
// //             amount: 100,
// //             currency: "INR",
// //             receipt: "phone_unlock"
// //         });
// //         res.json(order);
// //     } catch (err) {
// //         console.log(err);
// //         res.status(500).json({ error: err.message });
// //     }
// // });

// // router.post("/verify-phone-payment", async (req, res) => {
// //     const { paymentId, orderId, signature, doctorId } = req.body;
// //     const body = orderId + "|" + paymentId;

// //     const expectedSignature = crypto
// //         .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
// //         .update(body)
// //         .digest("hex");

// //     if (expectedSignature !== signature) {
// //         return res.json({ success: false });
// //     }

// //     const doctor = await Doctor.findByIdAndUpdate(
// //         doctorId,
// //         { phoneUnlocked: true },
// //         { new: true }
// //     );

// //     return res.json({
// //         success: true,
// //         phone: doctor.phone
// //     });
// // });

// // const Consultation = require("../pages/consultation");

// // router.get("/consultation/:id", Consultation);

// // router.get("/add-government", (req, res) => {
// //     res.send(AddGovernment());
// // });

// // const GovernmentPerson = require("../models/GovernmentPerson");

// // router.post(
// //     "/add-government",
// //     upload.single("image"),
// //     async (req, res) => {
// //         try {
// //             const person = new GovernmentPerson({
// //                 name: req.body.name,
// //                 position: req.body.position,
// //                 department: req.body.department,
// //                 phone: req.body.phone,
// //                 address: req.body.address,
// //                 description: req.body.description,
// //                 image: req.file ? req.file.path : ""
// //             });

// //             await person.save();
// //             console.log("Government Person Saved:", person);
// //             res.redirect("/admin/add-government");

// //         } catch (err) {
// //             console.log("ADD GOVERNMENT ERROR:", err);
// //             res.status(500).send(err.message);
// //         }
// //     }
// // );

// // const ManageGovernment = require("../pages/manageGovernment");

// // router.get("/manage-government", async (req, res) => {
// //     try {
// //         const persons = await GovernmentPerson.find().sort({ createdAt: -1 });
// //         res.send(ManageGovernment(persons));
// //     } catch (err) {
// //         console.log("MANAGE GOVERNMENT ERROR:", err);
// //         res.status(500).send(err.message);
// //     }
// // });


// // const ManageServices = require("../pages/services");
// // // =============================
// // // Manage Services
// // // =============================

// // router.get("/manage-services", async (req, res) => {
// //     try {
// //         const services = await Service.find().sort({ createdAt: -1 });
// //         res.send(ManageServices(services));
// //     } catch (err) {
// //         console.log(err);
// //         res.status(500).send(err.message);
// //     }
// // });

// // // Add Service Page
// // router.get("/add-service", (req, res) => {
// //     res.send(AddService());
// // });

// // // Save Service
// // router.post(
// //     "/add-service",
// //     upload.single("image"),
// //     async (req, res) => {
// //         try {

// //             const features = req.body.features
// //                 ? req.body.features.split("\n").filter(f => f.trim())
// //                 : [];

// //             const service = new Service({
// //                 title: req.body.title,
// //                 description: req.body.description,
// //                 features,
// //                 image: req.file ? req.file.path : ""
// //             });

// //             await service.save();

// //             res.redirect("/admin/manage-services");

// //         } catch (err) {
// //             console.log(err);
// //             res.status(500).send(err.message);
// //         }
// //     }
// // );

// // // Edit Service Page
// // router.get("/edit-service/:id", async (req, res) => {
// //     try {
// //         const service = await Service.findById(req.params.id);

// //         if (!service) {
// //             return res.send("Service Not Found");
// //         }

// //         res.send(EditService(service));

// //     } catch (err) {
// //         console.log(err);
// //         res.status(500).send(err.message);
// //     }
// // });

// // // Update Service
// // router.post(
// //     "/edit-service/:id",
// //     upload.single("image"),
// //     async (req, res) => {
// //         try {

// //             const updateData = {
// //                 title: req.body.title,
// //                 description: req.body.description,
// //                 features: req.body.features
// //                     ? req.body.features.split("\n").filter(f => f.trim())
// //                     : []
// //             };

// //             if (req.file) {
// //                 updateData.image = req.file.path;
// //             }

// //             await Service.findByIdAndUpdate(req.params.id, updateData);

// //             res.redirect("/admin/manage-services");

// //         } catch (err) {
// //             console.log(err);
// //             res.status(500).send(err.message);
// //         }
// //     }
// // );

// // // Delete Service
// // router.get("/delete-service/:id", async (req, res) => {
// //     try {
// //         await Service.findByIdAndDelete(req.params.id);
// //         res.redirect("/admin/manage-services");
// //     } catch (err) {
// //         console.log(err);
// //         res.status(500).send(err.message);
// //     }
// // });

// // const EditProduct = require("../pages/editpages/EditProduct");
// // router.get("/edit-product/:id", async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id);

// //     if (!product) {
// //       return res.status(404).send("Product not found");
// //     }

// //     res.send(EditProduct(product)); // या res.render("admin/edit-product", { product })
// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).send(err.message);
// //   }
// // });

// // // =============================
// // // UPDATE PRODUCT
// // // =============================

// // // router.post(
// // //     "/edit-product/:id",
// // //     upload.array("images", 10),
// // //     async (req, res) => {

// // //         try {

// // //             console.log("========== EDIT PRODUCT ==========");
// // //             console.log("PRODUCT ID:", req.params.id);
// // //             console.log("BODY:", req.body);
// // //             console.log("FILES:", req.files);


// // //             // =============================
// // //             // FIND PRODUCT
// // //             // =============================

// // //             const product = await Product.findById(
// // //                 req.params.id
// // //             );

// // //             if (!product) {

// // //                 return res.status(404).send(
// // //                     "Product Not Found"
// // //                 );

// // //             }


// // //             // =============================
// // //             // COMPOSITION
// // //             // =============================

// // //             let composition = [];

// // //             if (Array.isArray(req.body.composition)) {

// // //                 composition = req.body.composition
// // //                     .map(item => String(item).trim())
// // //                     .filter(item => item !== "");

// // //             } else if (req.body.composition) {

// // //                 composition = [
// // //                     String(req.body.composition).trim()
// // //                 ];

// // //             }


// // //             // =============================
// // //             // BASIC INFORMATION
// // //             // =============================

// // //             product.name =
// // //                 req.body.name || "";

// // //             product.brand =
// // //                 req.body.brand || "";

// // //             product.category =
// // //                 req.body.category || "";

// // //             product.manufacturer =
// // //                 req.body.manufacturer || "";


// // //             // =============================
// // //             // PRICE
// // //             // =============================

// // //             product.mrp =
// // //                 req.body.mrp !== undefined &&
// // //                 req.body.mrp !== ""
// // //                     ? Number(req.body.mrp)
// // //                     : 0;

// // //             product.price =
// // //                 req.body.price !== undefined &&
// // //                 req.body.price !== ""
// // //                     ? Number(req.body.price)
// // //                     : 0;


// // //             // =============================
// // //             // STOCK
// // //             // =============================

// // //             product.stock =
// // //                 req.body.stock !== undefined &&
// // //                 req.body.stock !== ""
// // //                     ? Number(req.body.stock)
// // //                     : 0;


// // //             // =============================
// // //             // PACK / BATCH
// // //             // =============================

// // //             product.packSize =
// // //                 req.body.packSize || "";

// // //             product.batchNo =
// // //                 req.body.batchNo || "";


// // //             // =============================
// // //             // DATES
// // //             // =============================

// // //             product.mfgDate =
// // //                 req.body.mfgDate || "";

// // //             product.expDate =
// // //                 req.body.expDate || "";


// // //             // =============================
// // //             // COMPOSITION
// // //             // =============================

// // //             product.composition =
// // //                 composition;


// // //             // =============================
// // //             // PRODUCT DETAILS
// // //             // =============================

// // //             product.description =
// // //                 req.body.description || "";

// // //             product.uses =
// // //                 req.body.uses || "";

// // //             product.benefits =
// // //                 req.body.benefits || "";

// // //             product.dosage =
// // //                 req.body.dosage || "";

// // //             product.sideEffects =
// // //                 req.body.sideEffects || "";

// // //             product.storage =
// // //                 req.body.storage || "";


// // //             // =============================
// // //             // NEW IMAGES
// // //             // =============================

// // //             if (
// // //                 req.files &&
// // //                 req.files.length > 0
// // //             ) {

// // //                 const newImages =
// // //                     req.files
// // //                         .map(file => file.path)
// // //                         .filter(Boolean);


// // //                 // Existing images
// // //                 let existingImages = [];

// // //                 if (
// // //                     Array.isArray(product.images)
// // //                 ) {

// // //                     existingImages =
// // //                         product.images.filter(Boolean);

// // //                 }


// // //                 // Old single image को भी preserve करें
// // //                 if (
// // //                     product.image &&
// // //                     !existingImages.includes(product.image)
// // //                 ) {

// // //                     existingImages.push(
// // //                         product.image
// // //                     );

// // //                 }


// // //                 // Existing + New Images
// // //                 product.images = [
// // //                     ...existingImages,
// // //                     ...newImages
// // //                 ];


// // //                 // अगर main image नहीं है
// // //                 if (!product.image) {

// // //                     product.image =
// // //                         newImages[0] || "";

// // //                 }

// // //             }


// // //             // =============================
// // //             // SAVE
// // //             // =============================

// // //             await product.save();


// // //             console.log(
// // //                 "PRODUCT UPDATED:",
// // //                 product._id
// // //             );


// // //             // =============================
// // //             // REDIRECT
// // //             // =============================

// // //             res.redirect(
// // //                 "/admin/manage-products"
// // //             );


// // //         } catch (err) {

// // //             console.error(
// // //                 "UPDATE PRODUCT ERROR:",
// // //                 err
// // //             );

// // //             res.status(500).send(
// // //                 err.message
// // //             );

// // //         }

// // //     }
// // // );




// // // =============================
// // // UPDATE PRODUCT
// // // =============================

// // router.post(
// //     "/edit-product/:id",

// //     upload.fields([
// //         {
// //             name: "images",
// //             maxCount: 10
// //         },
// //         {
// //             name: "videos",
// //             maxCount: 5
// //         }
// //     ]),

// //     async (req, res) => {

// //         try {

// //             console.log("========== EDIT PRODUCT ==========");
// //             console.log("PRODUCT ID:", req.params.id);
// //             console.log("BODY:", req.body);
// //             console.log("FILES:", req.files);


// //             // =============================
// //             // FIND PRODUCT
// //             // =============================

// //             const product =
// //                 await Product.findById(req.params.id);

// //             if (!product) {

// //                 return res
// //                     .status(404)
// //                     .send("Product Not Found");

// //             }


// //             // =============================
// //             // COMPOSITION
// //             // =============================

// //             let composition = [];

// //             if (Array.isArray(req.body.composition)) {

// //                 composition =
// //                     req.body.composition
// //                         .map(item =>
// //                             String(item).trim()
// //                         )
// //                         .filter(Boolean);

// //             } else if (req.body.composition) {

// //                 composition = [
// //                     String(
// //                         req.body.composition
// //                     ).trim()
// //                 ];

// //             }


// //             // =============================
// //             // BASIC INFORMATION
// //             // =============================

// //             product.name =
// //                 req.body.name || "";

// //             product.brand =
// //                 req.body.brand || "";

// //             product.category =
// //                 req.body.category || "";

// //             product.manufacturer =
// //                 req.body.manufacturer || "";


// //             // =============================
// //             // PRICE
// //             // =============================

// //             product.mrp =
// //                 req.body.mrp !== undefined &&
// //                 req.body.mrp !== ""
// //                     ? Number(req.body.mrp)
// //                     : 0;

// //             product.price =
// //                 req.body.price !== undefined &&
// //                 req.body.price !== ""
// //                     ? Number(req.body.price)
// //                     : 0;


// //             // =============================
// //             // STOCK
// //             // =============================

// //             product.stock =
// //                 req.body.stock !== undefined &&
// //                 req.body.stock !== ""
// //                     ? Number(req.body.stock)
// //                     : 0;


// //             // =============================
// //             // PACK / BATCH
// //             // =============================

// //             product.packSize =
// //                 req.body.packSize || "";

// //             product.batchNo =
// //                 req.body.batchNo || "";


// //             // =============================
// //             // DATES
// //             // =============================

// //             product.mfgDate =
// //                 req.body.mfgDate || "";

// //             product.expDate =
// //                 req.body.expDate || "";


// //             // =============================
// //             // COMPOSITION
// //             // =============================

// //             product.composition =
// //                 composition;


// //             // =============================
// //             // PRODUCT DETAILS
// //             // =============================

// //             product.description =
// //                 req.body.description || "";

// //             product.uses =
// //                 req.body.uses || "";

// //             product.benefits =
// //                 req.body.benefits || "";

// //             product.dosage =
// //                 req.body.dosage || "";

// //             product.sideEffects =
// //                 req.body.sideEffects || "";

// //             product.storage =
// //                 req.body.storage || "";


// //             // =================================================
// //             // NEW IMAGES
// //             // =================================================

// //             const imageFiles =
// //                 req.files?.images || [];


// //             if (imageFiles.length > 0) {

// //                 console.log(
// //                     "NEW IMAGE COUNT:",
// //                     imageFiles.length
// //                 );


// //                 const newImages =
// //                     imageFiles
// //                         .map(file =>
// //                             file.path ||
// //                             file.secure_url ||
// //                             file.url
// //                         )
// //                         .filter(Boolean);


// //                 // Existing images

// //                 let existingImages = [];


// //                 if (
// //                     Array.isArray(product.images)
// //                 ) {

// //                     existingImages =
// //                         product.images
// //                             .filter(Boolean);

// //                 }


// //                 // Old single image preserve

// //                 if (
// //                     product.image &&
// //                     !existingImages.includes(
// //                         product.image
// //                     )
// //                 ) {

// //                     existingImages.push(
// //                         product.image
// //                     );

// //                 }


// //                 // Existing + New

// //                 product.images = [
// //                     ...existingImages,
// //                     ...newImages
// //                 ];


// //                 // Main image

// //                 if (
// //                     !product.image &&
// //                     newImages.length
// //                 ) {

// //                     product.image =
// //                         newImages[0];

// //                 }

// //             }


// //             // =================================================
// //             // NEW VIDEOS
// //             // =================================================

// //             const videoFiles =
// //                 req.files?.videos || [];


// //             if (videoFiles.length > 0) {

// //                 console.log(
// //                     "NEW VIDEO COUNT:",
// //                     videoFiles.length
// //                 );


// //                 const newVideos =
// //                     videoFiles
// //                         .map(file =>
// //                             file.path ||
// //                             file.secure_url ||
// //                             file.url
// //                         )
// //                         .filter(Boolean);


// //                 // Existing videos

// //                 let existingVideos = [];


// //                 if (
// //                     Array.isArray(product.videos)
// //                 ) {

// //                     existingVideos =
// //                         product.videos
// //                             .filter(Boolean);

// //                 }


// //                 // Existing + New

// //                 product.videos = [
// //                     ...existingVideos,
// //                     ...newVideos
// //                 ];

// //             }


// //             // =============================
// //             // SAVE
// //             // =============================

// //             await product.save();


// //             console.log(
// //                 "PRODUCT UPDATED:",
// //                 product._id
// //             );


// //             console.log(
// //                 "TOTAL IMAGES:",
// //                 product.images?.length || 0
// //             );

// //             console.log(
// //                 "TOTAL VIDEOS:",
// //                 product.videos?.length || 0
// //             );


// //             // =============================
// //             // REDIRECT
// //             // =============================

// //             return res.redirect(
// //                 "/admin/manage-products"
// //             );


// //         } catch (err) {

// //             console.error(
// //                 "UPDATE PRODUCT ERROR:",
// //                 err
// //             );


// //             return res
// //                 .status(500)
// //                 .send(
// //                     "Product Update Error: " +
// //                     err.message
// //                 );

// //         }

// //     }
// // );

// // module.exports = router;


// require("dotenv").config();

// const crypto = require("crypto");
// const express = require("express");
// const Razorpay = require("razorpay");

// const router = express.Router();


// // ======================================================
// // RAZORPAY
// // ======================================================

// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET
// });


// // ======================================================
// // PAGES
// // ======================================================

// const dashboard = require("../pages/dashboard");
// const AdminLogin = require("../pages/adminLogin");
// const DoctorLogin = require("../pages/doctorLogin");
// const ManageDoctors = require("../pages/manageDoctors");
// const AddDoctor = require("../pages/addpages/addDoctor");
// const DoctorDashboard = require("../pages/doctorDashboard");

// const ManageProducts = require("../pages/manageProducts");
// const AddProduct = require("../pages/addpages/addProduct");
// const EditProduct = require("../pages/editpages/EditProduct");

// const DoctorProfile = require("../pages/doctorProfile");

// const Consultation = require("../pages/consultation");

// const ManageGovernment = require("../pages/manageGovernment");

// const ManageServices = require("../pages/services");


// // ======================================================
// // CONTROLLERS
// // ======================================================

// const { login } = require("../controllers/adminAuth");
// const AdminController = require("../controllers/adminController");


// // ======================================================
// // COMPONENTS
// // ======================================================

// const AddGovernment =
//     require("../views/component/dashboard/addGovernment");


// // ======================================================
// // MODELS
// // ======================================================

// const Banner = require("../models/Banner");
// const Student = require("../models/Student");
// const Service = require("../models/Service");
// const Doctor = require("../models/Doctor");
// const Product = require("../models/Product");
// const GovernmentPerson =
//     require("../models/GovernmentPerson");


// // ======================================================
// // UPLOAD
// // ======================================================

// const upload = require("../config/upload");


// // ======================================================
// // ADMIN LOGIN
// // ======================================================

// router.get("/", (req, res) => {

//     res.send(
//         AdminLogin()
//     );

// });


// router.post(
//     "/login",
//     login
// );


// // ======================================================
// // ADMIN DASHBOARD
// // ======================================================

// router.get(
//     "/admindashboard",
//     async (req, res) => {

//         try {

//             const doctorCount =
//                 await Doctor.countDocuments();

//             const studentCount =
//                 await Student.countDocuments();

//             const serviceCount =
//                 await Service.countDocuments();

//             const bannerCount =
//                 await Banner.countDocuments();


//             console.log(
//                 "DOCTOR COUNT:",
//                 doctorCount
//             );

//             console.log(
//                 "STUDENT COUNT:",
//                 studentCount
//             );

//             console.log(
//                 "SERVICE COUNT:",
//                 serviceCount
//             );

//             console.log(
//                 "BANNER COUNT:",
//                 bannerCount
//             );


//             const data = {

//                 doctorCount,

//                 studentCount,

//                 serviceCount,

//                 bannerCount

//             };


//             console.log(
//                 "=== ADMIN ROUTE DATA ==="
//             );

//             console.log(data);


//             return res.send(
//                 dashboard(data)
//             );


//         } catch (err) {

//             console.error(
//                 "DASHBOARD ERROR:",
//                 err
//             );

//             return res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // BANNER
// // ======================================================

// router.get(
//     "/manage-banners",
//     AdminController.manageBanners
// );


// router.get(
//     "/manage-banner",
//     AdminController.manageBanners
// );


// router.get(
//     "/add-banner",
//     AdminController.addBannerPage
// );


// router.post(
//     "/add-banner",
//     upload.single("image"),
//     AdminController.saveBanner
// );


// router.get(
//     "/delete-banner/:id",
//     AdminController.deleteBanner
// );


// // ======================================================
// // DOCTOR LOGIN PAGE
// // ======================================================

// router.get(
//     "/doctor-login",
//     (req, res) => {

//         res.send(
//             DoctorLogin()
//         );

//     }
// );


// // ======================================================
// // DOCTOR LOGIN
// // ======================================================

// router.post(
//     "/doctor/login",
//     async (req, res) => {

//         try {

//             const {
//                 doctorId,
//                 password
//             } = req.body;


//             const doctor =
//                 await Doctor.findOne({
//                     doctorId: doctorId
//                 });


//             if (!doctor) {

//                 return res.send(
//                     DoctorLogin(
//                         "Doctor Not Found"
//                     )
//                 );

//             }


//             if (
//                 doctor.password !== password
//             ) {

//                 return res.send(
//                     DoctorLogin(
//                         "Wrong Password"
//                     )
//                 );

//             }


//             // Doctor session

//             req.session.doctor =
//                 doctor;


//             console.log(
//                 "Doctor Session Saved:"
//             );

//             console.log(
//                 req.session.doctor
//             );


//             return res.redirect(
//                 "/doctor/dashboard"
//             );


//         } catch (err) {

//             console.error(
//                 "DOCTOR LOGIN ERROR:",
//                 err
//             );


//             return res.send(
//                 "Login Error"
//             );

//         }

//     }
// );


// // ======================================================
// // MANAGE DOCTORS
// // ======================================================

// router.get(
//     "/manage-doctors",
//     async (req, res) => {

//         try {

//             const doctors =
//                 await Doctor
//                     .find()
//                     .sort({
//                         createdAt: -1
//                     });


//             res.send(
//                 ManageDoctors(doctors)
//             );


//         } catch (err) {

//             console.error(err);

//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // ADD DOCTOR
// // ======================================================

// router.post(
//     "/add-doctor",

//     upload.single("image"),

//     async (req, res) => {

//         try {

//             console.log(
//                 "BODY:",
//                 req.body
//             );

//             console.log(
//                 "FILE:",
//                 req.file
//             );


//             // ------------------------------------------
//             // CHECK PHONE
//             // ------------------------------------------

//             const existDoctor =
//                 await Doctor.findOne({
//                     phone: req.body.phone
//                 });


//             if (existDoctor) {

//                 return res.send(
//                     "Phone Number Already Registered"
//                 );

//             }


//             // ------------------------------------------
//             // GENERATE DOCTOR ID
//             // ------------------------------------------

//             const lastDoctor =
//                 await Doctor
//                     .findOne()
//                     .sort({
//                         createdAt: -1
//                     });


//             let nextNumber = 1001;


//             if (
//                 lastDoctor &&
//                 lastDoctor.doctorId
//             ) {

//                 const oldNumber =
//                     parseInt(
//                         lastDoctor.doctorId
//                             .replace("DOC", "")
//                     );


//                 if (!isNaN(oldNumber)) {

//                     nextNumber =
//                         oldNumber + 1;

//                 }

//             }


//             const doctorId =
//                 "DOC" + nextNumber;


//             // ------------------------------------------
//             // CREATE DOCTOR
//             // ------------------------------------------

//             const doctor =
//                 new Doctor({

//                     doctorId,

//                     name:
//                         req.body.name,

//                     degree:
//                         req.body.qualification,

//                     specialization:
//                         req.body.speciality,

//                     experience:
//                         req.body.experience,

//                     hospital:
//                         req.body.clinic,

//                     phone:
//                         req.body.phone,

//                     email:
//                         req.body.email,

//                     password:
//                         req.body.password,

//                     address:
//                         req.body.address,

//                     description:
//                         req.body.description,


//                     // Availability

//                     availableDay:
//                         req.body.availableDay,

//                     timeFrom:
//                         req.body.timeFrom,

//                     timeTo:
//                         req.body.timeTo,


//                     // Appointment

//                     slotDuration:
//                         req.body.slotDuration,


//                     // Fee

//                     fee:
//                         req.body.fee,

//                     feeType:
//                         req.body.feeType,


//                     // Image

//                     image:
//                         req.file
//                             ? req.file.path
//                             : ""

//                 });


//             await doctor.save();


//             console.log(
//                 "Doctor Saved:",
//                 doctor
//             );


//             return res.redirect(
//                 "/admin/manage-doctors"
//             );


//         } catch (err) {

//             console.error(
//                 "ADD DOCTOR ERROR:",
//                 err
//             );


//             return res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // DELETE DOCTOR
// // ======================================================

// router.get(
//     "/delete-doctor/:id",
//     async (req, res) => {

//         try {

//             await Doctor.findByIdAndDelete(
//                 req.params.id
//             );


//             res.redirect(
//                 "/admin/manage-doctors"
//             );


//         } catch (err) {

//             console.error(err);

//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // EDIT DOCTOR
// // ======================================================

// const EditDoctor =
//     require("../pages/editpages/editDoctor");


// router.get(
//     "/edit-doctor/:id",
//     async (req, res) => {

//         try {

//             const doctor =
//                 await Doctor.findById(
//                     req.params.id
//                 );


//             if (!doctor) {

//                 return res.send(
//                     "Doctor Not Found"
//                 );

//             }


//             res.send(
//                 EditDoctor(doctor)
//             );


//         } catch (err) {

//             console.error(err);

//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // MANAGE PRODUCTS
// // ======================================================

// router.get(
//     "/manage-products",
//     async (req, res) => {

//         try {

//             const products =
//                 await Product
//                     .find()
//                     .sort({
//                         createdAt: -1
//                     });


//             res.send(
//                 ManageProducts(products)
//             );


//         } catch (err) {

//             console.error(
//                 "MANAGE PRODUCTS ERROR:",
//                 err
//             );


//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // ADD PRODUCT PAGE
// // ======================================================

// router.get(
//     "/add-product",
//     (req, res) => {

//         res.send(
//             AddProduct()
//         );

//     }
// );


// // ======================================================
// // ADD PRODUCT
// // ======================================================

// router.post(
//     "/add-product",

//     upload.fields([

//         {
//             name: "image",
//             maxCount: 1
//         },

//         {
//             name: "images",
//             maxCount: 10
//         },

//         {
//             name: "video",
//             maxCount: 1
//         }

//     ]),

//     async (req, res) => {

//         try {

//             console.log(
//                 "========== ADD PRODUCT =========="
//             );

//             console.log(
//                 "BODY:",
//                 req.body
//             );

//             console.log(
//                 "FILES:",
//                 req.files
//             );


//             // ------------------------------------------
//             // COMPOSITION
//             // ------------------------------------------

//             let composition = [];


//             if (
//                 Array.isArray(
//                     req.body.composition
//                 )
//             ) {

//                 composition =
//                     req.body.composition
//                         .map(item =>
//                             String(item).trim()
//                         )
//                         .filter(Boolean);

//             }

//             else if (
//                 req.body.composition
//             ) {

//                 composition = [

//                     String(
//                         req.body.composition
//                     ).trim()

//                 ];

//             }


//             // ------------------------------------------
//             // MAIN IMAGE
//             // ------------------------------------------

//             let mainImage = "";


//             if (
//                 req.files &&
//                 req.files.image &&
//                 req.files.image.length > 0
//             ) {

//                 mainImage =
//                     req.files.image[0].path ||
//                     req.files.image[0].secure_url ||
//                     req.files.image[0].url ||
//                     "";

//             }


//             // ------------------------------------------
//             // MORE IMAGES
//             // ------------------------------------------

//             let images = [];


//             if (
//                 req.files &&
//                 req.files.images
//             ) {

//                 images =
//                     req.files.images
//                         .map(file =>
//                             file.path ||
//                             file.secure_url ||
//                             file.url
//                         )
//                         .filter(Boolean);

//             }


//             // ------------------------------------------
//             // VIDEO
//             // ------------------------------------------

//             let video = "";


//             if (
//                 req.files &&
//                 req.files.video &&
//                 req.files.video.length > 0
//             ) {

//                 video =
//                     req.files.video[0].path ||
//                     req.files.video[0].secure_url ||
//                     req.files.video[0].url ||
//                     "";

//             }


//             // ------------------------------------------
//             // CREATE PRODUCT
//             // ------------------------------------------

//             const product =
//                 new Product({

//                     name:
//                         req.body.name || "",

//                     brand:
//                         req.body.brand || "",

//                     category:
//                         req.body.category || "",

//                     manufacturer:
//                         req.body.manufacturer || "",


//                     mrp:
//                         req.body.mrp !== undefined &&
//                         req.body.mrp !== ""
//                             ? Number(req.body.mrp)
//                             : 0,


//                     price:
//                         req.body.price !== undefined &&
//                         req.body.price !== ""
//                             ? Number(req.body.price)
//                             : 0,


//                     stock:
//                         req.body.stock !== undefined &&
//                         req.body.stock !== ""
//                             ? Number(req.body.stock)
//                             : 0,


//                     packSize:
//                         req.body.packSize || "",

//                     batchNo:
//                         req.body.batchNo || "",

//                     mfgDate:
//                         req.body.mfgDate || "",

//                     expDate:
//                         req.body.expDate || "",


//                     composition,

//                     images,

//                     image:
//                         mainImage,


//                     description:
//                         req.body.description || "",

//                     uses:
//                         req.body.uses || "",

//                     benefits:
//                         req.body.benefits || "",

//                     dosage:
//                         req.body.dosage || "",

//                     sideEffects:
//                         req.body.sideEffects || "",

//                     storage:
//                         req.body.storage || "",


//                     // IMPORTANT
//                     // Single video field

//                     video

//                 });


//             await product.save();


//             console.log(
//                 "PRODUCT SAVED:",
//                 product._id
//             );

//             console.log(
//                 "VIDEO:",
//                 product.video
//             );


//             return res.redirect(
//                 "/admin/manage-products"
//             );


//         } catch (err) {

//             console.error(
//                 "ADD PRODUCT ERROR:",
//                 err
//             );


//             return res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // EDIT PRODUCT PAGE
// // ======================================================

// router.get(
//     "/edit-product/:id",
//     async (req, res) => {

//         try {

//             const product =
//                 await Product.findById(
//                     req.params.id
//                 );


//             if (!product) {

//                 return res
//                     .status(404)
//                     .send(
//                         "Product Not Found"
//                     );

//             }


//             res.send(
//                 EditProduct(product)
//             );


//         } catch (err) {

//             console.error(
//                 "EDIT PRODUCT PAGE ERROR:",
//                 err
//             );


//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // UPDATE PRODUCT
// // ======================================================

// // router.post(
// //     "/edit-product/:id",

// //     upload.fields([

// //         {
// //             name: "images",
// //             maxCount: 10
// //         },

// //         {
// //             name: "video",
// //             maxCount: 1
// //         }

// //     ]),

// //     async (req, res) => {

// //         try {

// //             console.log(
// //                 "\n========== EDIT PRODUCT =========="
// //             );

// //             console.log(
// //                 "PRODUCT ID:",
// //                 req.params.id
// //             );

// //             console.log(
// //                 "BODY:",
// //                 req.body
// //             );

// //             console.log(
// //                 "FILES:",
// //                 req.files
// //             );


// //             // ------------------------------------------
// //             // FIND PRODUCT
// //             // ------------------------------------------

// //             const product =
// //                 await Product.findById(
// //                     req.params.id
// //                 );


// //             if (!product) {

// //                 return res
// //                     .status(404)
// //                     .send(
// //                         "Product Not Found"
// //                     );

// //             }


// //             // ------------------------------------------
// //             // BASIC DETAILS
// //             // ------------------------------------------

// //             product.name =
// //                 req.body.name || "";

// //             product.brand =
// //                 req.body.brand || "";

// //             product.category =
// //                 req.body.category || "";

// //             product.manufacturer =
// //                 req.body.manufacturer || "";


// //             // ------------------------------------------
// //             // PRICE
// //             // ------------------------------------------

// //             product.mrp =
// //                 req.body.mrp !== undefined &&
// //                 req.body.mrp !== ""
// //                     ? Number(req.body.mrp)
// //                     : 0;


// //             product.price =
// //                 req.body.price !== undefined &&
// //                 req.body.price !== ""
// //                     ? Number(req.body.price)
// //                     : 0;


// //             product.stock =
// //                 req.body.stock !== undefined &&
// //                 req.body.stock !== ""
// //                     ? Number(req.body.stock)
// //                     : 0;


// //             // ------------------------------------------
// //             // MEDICINE DETAILS
// //             // ------------------------------------------

// //             product.packSize =
// //                 req.body.packSize || "";

// //             product.batchNo =
// //                 req.body.batchNo || "";

// //             product.mfgDate =
// //                 req.body.mfgDate || "";

// //             product.expDate =
// //                 req.body.expDate || "";


// //             // ------------------------------------------
// //             // COMPOSITION
// //             // ------------------------------------------

// //             let composition = [];


// //             if (
// //                 Array.isArray(
// //                     req.body.composition
// //                 )
// //             ) {

// //                 composition =
// //                     req.body.composition
// //                         .map(item =>
// //                             String(item).trim()
// //                         )
// //                         .filter(Boolean);

// //             }

// //             else if (
// //                 req.body.composition
// //             ) {

// //                 composition = [

// //                     String(
// //                         req.body.composition
// //                     ).trim()

// //                 ];

// //             }


// //             product.composition =
// //                 composition;


// //             // ------------------------------------------
// //             // PRODUCT DETAILS
// //             // ------------------------------------------

// //             product.description =
// //                 req.body.description || "";

// //             product.uses =
// //                 req.body.uses || "";

// //             product.benefits =
// //                 req.body.benefits || "";

// //             product.dosage =
// //                 req.body.dosage || "";

// //             product.sideEffects =
// //                 req.body.sideEffects || "";

// //             product.storage =
// //                 req.body.storage || "";


// //             // =================================================
// //             // NEW IMAGES
// //             // =================================================

// //             const imageFiles =
// //                 req.files?.images || [];


// //             if (
// //                 imageFiles.length > 0
// //             ) {

// //                 console.log(
// //                     "NEW IMAGE COUNT:",
// //                     imageFiles.length
// //                 );


// //                 const newImages =
// //                     imageFiles
// //                         .map(file =>
// //                             file.path ||
// //                             file.secure_url ||
// //                             file.url
// //                         )
// //                         .filter(Boolean);


// //                 let existingImages = [];


// //                 if (
// //                     Array.isArray(
// //                         product.images
// //                     )
// //                 ) {

// //                     existingImages =
// //                         product.images
// //                             .filter(Boolean);

// //                 }


// //                 // Old main image preserve

// //                 if (
// //                     product.image &&
// //                     !existingImages.includes(
// //                         product.image
// //                     )
// //                 ) {

// //                     existingImages.push(
// //                         product.image
// //                     );

// //                 }


// //                 // Existing + New

// //                 product.images = [

// //                     ...existingImages,

// //                     ...newImages

// //                 ];


// //                 // Main image

// //                 if (
// //                     !product.image &&
// //                     newImages.length > 0
// //                 ) {

// //                     product.image =
// //                         newImages[0];

// //                 }

// //             }


// //             // =================================================
// //             // NEW VIDEO
// //             // =================================================

// //             const videoFiles =
// //                 req.files?.video || [];


// //             if (
// //                 videoFiles.length > 0
// //             ) {

// //                 console.log(
// //                     "NEW VIDEO COUNT:",
// //                     videoFiles.length
// //                 );


// //                 const newVideo =
// //                     videoFiles[0].path ||
// //                     videoFiles[0].secure_url ||
// //                     videoFiles[0].url;


// //                 console.log(
// //                     "NEW VIDEO URL:",
// //                     newVideo
// //                 );


// //                 if (newVideo) {

// //                     // IMPORTANT:
// //                     // Schema field = video

// //                     product.video =
// //                         newVideo;

// //                 }

// //             }

// //             else {

// //                 console.log(
// //                     "NO NEW VIDEO - OLD VIDEO KEPT"
// //                 );

// //             }


// //             // =================================================
// //             // SAVE
// //             // =================================================

// //             await product.save();


// //             // =================================================
// //             // FINAL LOG
// //             // =================================================

// //             console.log(
// //                 "================================="
// //             );

// //             console.log(
// //                 "PRODUCT UPDATED:",
// //                 product._id
// //             );

// //             console.log(
// //                 "TOTAL IMAGES:",
// //                 product.images?.length || 0
// //             );

// //             console.log(
// //                 "SAVED VIDEO:",
// //                 product.video
// //             );

// //             console.log(
// //                 "================================="
// //             );


// //             return res.redirect(
// //                 "/admin/manage-products"
// //             );


// //         } catch (err) {

// //             console.error(
// //                 "UPDATE PRODUCT ERROR:",
// //                 err
// //             );


// //             return res
// //                 .status(500)
// //                 .send(
// //                     "Product Update Error: " +
// //                     err.message
// //                 );

// //         }

// //     }
// // );


// router.post(
//     "/edit-product/:id",
//     upload.fields([
//         {
//             name: "images",
//             maxCount: 10
//         },
//         {
//             name: "videos",
//             maxCount: 5
//         }
//     ]),
//     async (req, res) => {

//         try {

//             const product =
//                 await Product.findById(
//                     req.params.id
//                 );

//             if (!product) {

//                 return res
//                     .status(404)
//                     .send("Product not found");
//             }


//             // ==========================================
//             // BASIC DETAILS
//             // ==========================================

//             product.name =
//                 req.body.name || product.name;

//             product.brand =
//                 req.body.brand || "";

//             product.category =
//                 req.body.category || "";

//             product.manufacturer =
//                 req.body.manufacturer || "";

//             product.mrp =
//                 Number(req.body.mrp || 0);

//             product.price =
//                 Number(req.body.price || 0);

//             product.discountPercentage =
//                 Number(
//                     req.body.discountPercentage || 0
//                 );

//             product.stock =
//                 Number(req.body.stock || 0);

//             product.packSize =
//                 req.body.packSize || "";

//             product.batchNumber =
//                 req.body.batchNumber || "";

//             product.manufacturingDate =
//                 req.body.manufacturingDate || null;

//             product.expiryDate =
//                 req.body.expiryDate || null;


//             // ==========================================
//             // COMPOSITION
//             // ==========================================

//             let composition =
//                 req.body.composition || [];

//             if (!Array.isArray(composition)) {
//                 composition = [composition];
//             }

//             product.composition =
//                 composition
//                     .map(item =>
//                         String(item || "").trim()
//                     )
//                     .filter(Boolean);


//             // ==========================================
//             // PRODUCT DETAILS
//             // ==========================================

//             product.uses =
//                 req.body.uses || "";

//             product.benefits =
//                 req.body.benefits || "";

//             product.dosage =
//                 req.body.dosage || "";

//             product.sideEffects =
//                 req.body.sideEffects || "";

//             product.storage =
//                 req.body.storage || "";

//             product.description =
//                 req.body.description || "";


//             // ==========================================
//             // REMOVE SELECTED IMAGES
//             // ==========================================

//             let removeImages =
//                 req.body.removeImages || [];

//             if (!Array.isArray(removeImages)) {
//                 removeImages = [removeImages];
//             }

//             const removeImageSet =
//                 new Set(
//                     removeImages
//                         .map(image =>
//                             String(image || "").trim()
//                         )
//                         .filter(Boolean)
//                 );


//             const getImageURL = image => {

//                 if (!image) {
//                     return "";
//                 }

//                 if (typeof image === "object") {

//                     return String(
//                         image.url ||
//                         image.secure_url ||
//                         image.path ||
//                         ""
//                     ).trim();
//                 }

//                 return String(image).trim();
//             };


//             const existingImages =
//                 Array.isArray(product.images)
//                     ? product.images
//                     : [];


//             product.images =
//                 existingImages.filter(image => {

//                     return !removeImageSet.has(
//                         getImageURL(image)
//                     );
//                 });


//             const currentMainImage =
//                 getImageURL(product.image);


//             if (
//                 currentMainImage &&
//                 removeImageSet.has(
//                     currentMainImage
//                 )
//             ) {

//                 product.image =
//                     product.images.length
//                         ? getImageURL(
//                             product.images[0]
//                         )
//                         : "";
//             }


//             // ==========================================
//             // ADD NEW UPLOADED IMAGES
//             // ==========================================

//             const newImageFiles =
//                 req.files?.images || [];

//             const newImages =
//                 newImageFiles
//                     .map(file =>
//                         file.path ||
//                         file.secure_url ||
//                         file.location ||
//                         ""
//                     )
//                     .filter(Boolean);


//             product.images = [
//                 ...product.images,
//                 ...newImages
//             ];


//             if (
//                 !product.image &&
//                 product.images.length
//             ) {

//                 product.image =
//                     getImageURL(
//                         product.images[0]
//                     );
//             }


//             // ==========================================
//             // VIDEO URL
//             // ==========================================

//             product.videoUrl =
//                 req.body.videoUrl || "";


//             // ==========================================
//             // SAVE
//             // ==========================================

//             await product.save();

//             return res.redirect(
//                 "/admin/manage-products"
//             );

//         }
//         catch (error) {

//             console.error(
//                 "EDIT PRODUCT ERROR:",
//                 error
//             );

//             return res
//                 .status(500)
//                 .send(
//                     "Unable to update product: " +
//                     error.message
//                 );
//         }
//     }
// );


// // ======================================================
// // DELETE PRODUCT
// // ======================================================

// router.get(
//     "/delete-product/:id",
//     async (req, res) => {

//         try {

//             await Product.findByIdAndDelete(
//                 req.params.id
//             );


//             res.redirect(
//                 "/admin/manage-products"
//             );


//         } catch (err) {

//             console.error(err);

//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // DOCTOR PROFILE
// // ======================================================

// router.get(
//     "/doctor/:id",
//     async (req, res) => {

//         try {

//             const doctor =
//                 await Doctor.findById(
//                     req.params.id
//                 );


//             if (!doctor) {

//                 return res.send(
//                     "Doctor Not Found"
//                 );

//             }


//             res.send(
//                 DoctorProfile(doctor)
//             );


//         } catch (err) {

//             console.error(err);

//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // CREATE PHONE PAYMENT
// // ======================================================

// router.post(
//     "/create-phone-payment",
//     async (req, res) => {

//         try {

//             const order =
//                 await razorpay.orders.create({

//                     amount: 100,

//                     currency: "INR",

//                     receipt:
//                         "phone_unlock_" +
//                         Date.now()

//                 });


//             res.json(order);


//         } catch (err) {

//             console.error(
//                 "RAZORPAY ERROR:",
//                 err
//             );


//             res
//                 .status(500)
//                 .json({
//                     error: err.message
//                 });

//         }

//     }
// );


// // ======================================================
// // VERIFY PHONE PAYMENT
// // ======================================================

// router.post(
//     "/verify-phone-payment",
//     async (req, res) => {

//         try {

//             const {
//                 paymentId,
//                 orderId,
//                 signature,
//                 doctorId
//             } = req.body;


//             const body =
//                 orderId +
//                 "|" +
//                 paymentId;


//             const expectedSignature =
//                 crypto
//                     .createHmac(
//                         "sha256",
//                         process.env.RAZORPAY_KEY_SECRET
//                     )
//                     .update(body)
//                     .digest("hex");


//             if (
//                 expectedSignature !==
//                 signature
//             ) {

//                 return res.json({
//                     success: false,
//                     message:
//                         "Invalid Payment Signature"
//                 });

//             }


//             const doctor =
//                 await Doctor.findByIdAndUpdate(

//                     doctorId,

//                     {
//                         phoneUnlocked:
//                             true
//                     },

//                     {
//                         new: true
//                     }

//                 );


//             if (!doctor) {

//                 return res.json({

//                     success: false,

//                     message:
//                         "Doctor Not Found"

//                 });

//             }


//             return res.json({

//                 success: true,

//                 phone:
//                     doctor.phone

//             });


//         } catch (err) {

//             console.error(
//                 "VERIFY PAYMENT ERROR:",
//                 err
//             );


//             return res.status(500).json({

//                 success: false,

//                 message:
//                     err.message

//             });

//         }

//     }
// );


// // ======================================================
// // CONSULTATION
// // ======================================================

// router.get(
//     "/consultation/:id",
//     Consultation
// );


// // ======================================================
// // ADD GOVERNMENT
// // ======================================================

// router.get(
//     "/add-government",
//     (req, res) => {

//         res.send(
//             AddGovernment()
//         );

//     }
// );


// router.post(
//     "/add-government",

//     upload.single("image"),

//     async (req, res) => {

//         try {

//             const person =
//                 new GovernmentPerson({

//                     name:
//                         req.body.name,

//                     position:
//                         req.body.position,

//                     department:
//                         req.body.department,

//                     phone:
//                         req.body.phone,

//                     address:
//                         req.body.address,

//                     description:
//                         req.body.description,

//                     image:
//                         req.file
//                             ? req.file.path
//                             : ""

//                 });


//             await person.save();


//             console.log(
//                 "Government Person Saved:",
//                 person
//             );


//             res.redirect(
//                 "/admin/add-government"
//             );


//         } catch (err) {

//             console.error(
//                 "ADD GOVERNMENT ERROR:",
//                 err
//             );


//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // MANAGE GOVERNMENT
// // ======================================================

// // router.get(
// //     "/manage-government",
// //     async (req, res) => {

// //         try {

// //             const persons =
// //                 await GovernmentPerson
// //                     .find()
// //                     .sort({
// //                         createdAt: -1
// //                     });


// //             res.send(
// //                 ManageGovernment(persons)
// //             );


// //         } catch (err) {

// //             console.error(
// //                 "MANAGE GOVERNMENT ERROR:",
// //                 err
// //             );


// //             res
// //                 .status(500)
// //                 .send(err.message);

// //         }

// //     }
// // );

// router.get(
//     "/manage-government",
//     async (req, res) => {

//         try {

//             const data =
//                 await GovernmentPerson
//                     .find()
//                     .sort({
//                         createdAt: -1
//                     })
//                     .lean();


//             // ==========================================
//             // ADD EDIT + DELETE URL
//             // ==========================================

//             const persons = data.map(person => {

//                 return {
//                     ...person,

//                     editUrl:
//                         `/admin/edit-government/${person._id}`,

//                     deleteUrl:
//                         `/admin/delete-government/${person._id}`
//                 };

//             });


//             res.send(
//                 ManageGovernment(persons)
//             );


//         } catch (err) {

//             console.error(
//                 "MANAGE GOVERNMENT ERROR:",
//                 err
//             );


//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // MANAGE SERVICES
// // ======================================================

// router.get(
//     "/manage-services",
//     async (req, res) => {

//         try {

//             const services =
//                 await Service
//                     .find()
//                     .sort({
//                         createdAt: -1
//                     });


//             res.send(
//                 ManageServices(services)
//             );


//         } catch (err) {

//             console.error(err);

//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // ADD SERVICE
// // ======================================================

// router.get(
//     "/add-service",
//     (req, res) => {

//         res.send(
//             AddService()
//         );

//     }
// );


// // ======================================================
// // SAVE SERVICE
// // ======================================================

// router.post(
//     "/add-service",

//     upload.single("image"),

//     async (req, res) => {

//         try {

//             const features =
//                 req.body.features
//                     ? req.body.features
//                         .split("\n")
//                         .map(f => f.trim())
//                         .filter(Boolean)
//                     : [];


//             const service =
//                 new Service({

//                     title:
//                         req.body.title,

//                     description:
//                         req.body.description,

//                     features,

//                     image:
//                         req.file
//                             ? req.file.path
//                             : ""

//                 });


//             await service.save();


//             res.redirect(
//                 "/admin/manage-services"
//             );


//         } catch (err) {

//             console.error(
//                 "ADD SERVICE ERROR:",
//                 err
//             );


//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // EDIT SERVICE
// // ======================================================

// router.get(
//     "/edit-service/:id",
//     async (req, res) => {

//         try {

//             const service =
//                 await Service.findById(
//                     req.params.id
//                 );


//             if (!service) {

//                 return res.send(
//                     "Service Not Found"
//                 );

//             }


//             res.send(
//                 EditService(service)
//             );


//         } catch (err) {

//             console.error(err);

//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // UPDATE SERVICE
// // ======================================================

// router.post(
//     "/edit-service/:id",

//     upload.single("image"),

//     async (req, res) => {

//         try {

//             const updateData = {

//                 title:
//                     req.body.title,

//                 description:
//                     req.body.description,

//                 features:
//                     req.body.features
//                         ? req.body.features
//                             .split("\n")
//                             .map(f => f.trim())
//                             .filter(Boolean)
//                         : []

//             };


//             if (req.file) {

//                 updateData.image =
//                     req.file.path;

//             }


//             await Service.findByIdAndUpdate(

//                 req.params.id,

//                 updateData,

//                 {
//                     new: true
//                 }

//             );


//             res.redirect(
//                 "/admin/manage-services"
//             );


//         } catch (err) {

//             console.error(
//                 "UPDATE SERVICE ERROR:",
//                 err
//             );


//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );


// // ======================================================
// // DELETE SERVICE
// // ======================================================

// router.get(
//     "/delete-service/:id",
//     async (req, res) => {

//         try {

//             await Service.findByIdAndDelete(
//                 req.params.id
//             );


//             res.redirect(
//                 "/admin/manage-services"
//             );


//         } catch (err) {

//             console.error(err);

//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );

// const StudentRegistration = require("../pages/StudentRegistration");

// router.get("/student-registration", (req, res) => {
//     res.send(
//         StudentRegistration()
//     );
// });


// router.post(
//     "/student-registration",
//     async (req, res) => {

//         try {

//             const {
//                 name,
//                 phone,
//                 age,
//                 className,
//                 password,
//                 plan,
//                 amount
//             } = req.body;


//             const mobile =
//                 String(phone || "").trim();


//             const existingStudent =
//                 await Student.findOne({
//                     mobile: mobile
//                 });


//             if (existingStudent) {

//                 return res.send(`
//                     <h2>
//                         This phone number is already registered.
//                     </h2>

//                     <a href="/admin/student-registration">
//                         ← Back to Registration
//                     </a>
//                 `);

//             }


//             let nextNumber = 1001;
//             let rollNo = "";
//             let rollExists = true;


//             while (rollExists) {

//                 rollNo = "GSI" + nextNumber;

//                 const foundStudent =
//                     await Student.findOne({
//                         rollNo: rollNo
//                     });

//                 if (!foundStudent) {
//                     rollExists = false;
//                 } else {
//                     nextNumber++;
//                 }

//             }


//             const student = new Student({

//                 name: String(name || "").trim(),

//                 mobile: mobile,

//                 age: Number(age),

//                 course: String(className || "").trim(),

//                 rollNo: rollNo,

//                 password: password,

//                 plan: plan,

//                 amount: Number(amount),

//                 paymentStatus: "Pending"

//             });


//             await student.save();


//             res.send(`
//                 <!DOCTYPE html>
//                 <html lang="en">

//                 <head>
//                     <meta charset="UTF-8">

//                     <meta
//                         name="viewport"
//                         content="width=device-width, initial-scale=1.0"
//                     >

//                     <title>Registration Successful</title>
//                 </head>

//                 <body style="
//                     font-family:Arial;
//                     text-align:center;
//                     padding:50px;
//                     background:#f0fdf4;
//                 ">

//                     <h1 style="color:#166534;">
//                         Registration Successful ✓
//                     </h1>

//                     <h2>
//                         Welcome, ${student.name}
//                     </h2>

//                     <p>
//                         Your unique Roll Number is:
//                     </p>

//                     <h1 style="color:#1d4ed8;">
//                         ${student.rollNo}
//                     </h1>

//                     <p>
//                         Selected Plan: ${student.plan}
//                     </p>

//                     <p>
//                         Amount: ₹${student.amount}
//                     </p>

//                     <p>
//                         Payment Status: ${student.paymentStatus}
//                     </p>

//                     <a
//                         href="/student-login"
//                         style="
//                             display:inline-block;
//                             margin-top:20px;
//                             padding:12px 20px;
//                             border-radius:8px;
//                             color:white;
//                             background:#2563eb;
//                             text-decoration:none;
//                         "
//                     >
//                         Go to Student Login
//                     </a>

//                 </body>

//                 </html>
//             `);

//         } catch (error) {

//             console.error(
//                 "STUDENT REGISTRATION ERROR:",
//                 error
//             );

//             res.status(500).send(
//                 "Student registration failed: " +
//                 error.message
//             );

//         }

//     }
// );


// const ManageStudents = require("../pages/manageStudents");

// router.get(
//     "/manage-students",
//     async (req, res) => {

//         try {

//             const students =
//                 await Student.find()
//                     .sort({
//                         createdAt: -1
//                     })
//                     .lean();

//             res.send(
//                 ManageStudents(students)
//             );

//         } catch (error) {

//             console.error(
//                 "MANAGE STUDENTS ERROR:",
//                 error
//             );

//             res.status(500).send(
//                 error.message
//             );

//         }

//     }
// );


// router.post(
//     "/delete-student/:id",
//     async (req, res) => {

//         try {

//             await Student.findByIdAndDelete(
//                 req.params.id
//             );

//             res.redirect(
//                 "/admin/manage-students"
//             );

//         } catch (error) {

//             res.status(500).send(
//                 error.message
//             );

//         }

//     }
// );

// const EditStudent = require("../pages/editpages/editStudent");
// router.get(
//     "/edit-student/:id",
//     async (req, res) => {

//         try {

//             const student =
//                 await Student.findById(
//                     req.params.id
//                 ).lean();

//             if (!student) {
//                 return res.send(
//                     "Student not found"
//                 );
//             }

//             res.send(
//                 EditStudent(student)
//             );

//         } catch (error) {

//             console.error(
//                 "EDIT STUDENT PAGE ERROR:",
//                 error
//             );

//             res.status(500).send(
//                 error.message
//             );

//         }

//     }
// );


// router.post(
//     "/edit-student/:id",
//     async (req, res) => {

//         try {

//             const updateData = {

//                 name: String(
//                     req.body.name || ""
//                 ).trim(),

//                 mobile: String(
//                     req.body.mobile || ""
//                 ).trim(),

//                 age: Number(
//                     req.body.age || 0
//                 ),

//                 course: String(
//                     req.body.course || ""
//                 ).trim(),

//                 plan: req.body.plan,

//                 amount: Number(
//                     req.body.amount || 0
//                 ),

//                 paymentStatus:
//                     req.body.paymentStatus

//             };


//             if (
//                 req.body.password &&
//                 req.body.password.trim() !== ""
//             ) {

//                 updateData.password =
//                     req.body.password.trim();

//             }


//             await Student.findByIdAndUpdate(
//                 req.params.id,
//                 updateData,
//                 {
//                     new: true
//                 }
//             );


//             res.redirect(
//                 "/admin/manage-students"
//             );

//         } catch (error) {

//             console.error(
//                 "UPDATE STUDENT ERROR:",
//                 error
//             );

//             res.status(500).send(
//                 error.message
//             );

//         }

//     }
// );

// router.post(
//     "/update-student-payment/:id",
//     async (req, res) => {

//         try {

//             const paymentStatus =
//                 req.body.paymentStatus === "Success"
//                     ? "Success"
//                     : "Pending";


//             await Student.findByIdAndUpdate(
//                 req.params.id,
//                 {
//                     paymentStatus: paymentStatus
//                 }
//             );


//             res.redirect(
//                 "/admin/manage-students"
//             );

//         } catch (error) {

//             console.error(
//                 "PAYMENT STATUS UPDATE ERROR:",
//                 error
//             );

//             res.status(500).send(
//                 error.message
//             );

//         }

//     }
// );


// const StudentLogin = require("../pages/studentLogin");
// const StudentInformation = require("../pages/studentInformation");
// router.post(
//     "/student-login",
//     async (req, res) => {

//         const rollNo =
//             String(req.body.rollNo || "")
//                 .trim()
//                 .toUpperCase();

//         const student =
//             await Student.findOne({
//                 rollNo: rollNo
//             });

//         if (!student) {
//             return res.send(
//                 StudentLogin("Roll Number not found.")
//             );
//         }

//         if (student.password !== req.body.password) {
//             return res.send(
//                 StudentLogin("Wrong password.")
//             );
//         }

//         res.send(
//     StudentInformation(student)
// );

//     }
// );





// router.get(
//     "/student-logout",
//     (req, res) => {

//         if (req.session) {
//             req.session.destroy(() => {
//                 res.redirect(
//                     "/student-login"
//                 );
//             });

//             return;
//         }

//         res.redirect(
//             "/student-login"
//         );

//     }
// );



// const DoctorOrder = require("../models/DoctorOrder");
// const DoctorOrders = require("../pages/admin/DoctorOrders");




// // ======================================================
// // PREMIUM DOCTOR ORDERS
// // ======================================================
// // ======================================================
// // INVOICE PDF
// // ======================================================
// router.get("/doctor-order/:orderId/invoice", async (req, res) => {
//     try {
//         const order = await DoctorOrder.findById(
//             req.params.orderId
//         ).lean();

//         if (!order) {
//             return res.status(404).send("Order not found");
//         }

//         const doctor = await Doctor.findById(
//             order.doctorId
//         ).lean();

//         const items = Array.isArray(order.items)
//             ? order.items
//             : [];

//         // Product database से packSize: 5ml, 100gm, 200ml आदि
//         const productIds = items
//             .map((item) => item.productId)
//             .filter(Boolean);

//         const products = productIds.length
//             ? await Product.find({
//                 _id: { $in: productIds }
//             }).lean()
//             : [];

//         const productMap = new Map(
//             products.map((product) => [
//                 String(product._id),
//                 product
//             ])
//         );

//         const billNo = "D" + String(
//             order.orderId || order._id
//         )
//             .slice(-6)
//             .toUpperCase();

//         const totalQuantity = items.reduce((sum, item) => {
//             return sum + (
//                 Number(item.quantity ?? item.qty ?? 1) || 1
//             );
//         }, 0);

//         const grandTotal = Number(
//             order.totalAmount || order.total || 0
//         );

//         const date = order.createdAt
//             ? new Date(order.createdAt)
//                 .toLocaleDateString("en-GB")
//             : "-";

//         const doctorName = String(
//             doctor?.name || "Doctor"
//         )
//             .replace(/^Dr\.?\s*/i, "")
//             .trim();

//         res.setHeader("Content-Type", "application/pdf");

//         res.setHeader(
//             "Content-Disposition",
//             `attachment; filename=Estimate-${billNo}.pdf`
//         );

//         const pdf = new PDFDocument({
//             size: "A5",
//             layout: "landscape",
//             margin: 0
//         });

//         pdf.pipe(res);

//         const pageWidth = pdf.page.width;
//         const pageHeight = pdf.page.height;

//         const left = 20;
//         const right = pageWidth - 20;
//         const rightColumn = 310;

//         pdf.lineWidth(1)
//             .strokeColor("#000")
//             .rect(5, 5, pageWidth - 10, pageHeight - 10)
//             .stroke();

//         function borderLine() {
//             pdf.strokeColor("#000")
//                 .lineWidth(0.6)
//                 .moveTo(left, pdf.y)
//                 .lineTo(right, pdf.y)
//                 .stroke();

//             pdf.y += 5;
//         }

//         pdf.y = 16;

//         pdf.font("Helvetica-Bold")
//             .fontSize(16)
//             .fillColor("#0d6efd")
//             .text("GLOBAL HEALTHCARE", {
//                 align: "center"
//             });

//         pdf.font("Helvetica-Bold")
//             .fontSize(8)
//             .fillColor("#198754")
//             .text("SAFE & SECURE Healthcare", {
//                 align: "center"
//             });

//         pdf.font("Helvetica-Bold")
//             .fontSize(10)
//             .fillColor("#000")
//             .text("ROUGH ESTIMATE", {
//                 align: "center"
//             });

//         pdf.y += 7;
//         borderLine();

//         const detailsY = pdf.y + 3;

//         pdf.font("Helvetica-Bold")
//             .fontSize(8.5)
//             .fillColor("#000");

//         pdf.text(
//             `DOCTOR : Dr. ${doctorName}`,
//             left,
//             detailsY
//         );

//         pdf.text(
//             `SPECIALIZATION : ${doctor?.specialization || "-"}`,
//             left,
//             detailsY + 13
//         );

//         pdf.text(
//             `DOCTOR ID : ${doctor?.doctorId || "-"}`,
//             left,
//             detailsY + 26
//         );

//         pdf.text(
//             `PHONE : ${doctor?.phone || "-"}`,
//             left,
//             detailsY + 39
//         );

//         pdf.text(
//             `BILL NO : ${billNo}`,
//             rightColumn,
//             detailsY
//         );

//         pdf.text(
//             `DATE : ${date}`,
//             rightColumn,
//             detailsY + 13
//         );

//         pdf.text(
//             "TYPE : CREDIT",
//             rightColumn,
//             detailsY + 26
//         );

//         pdf.text(
//             `PAYMENT : ${String(
//                 order.paymentMethod || "COD"
//             ).toUpperCase()}`,
//             rightColumn,
//             detailsY + 39
//         );

//         pdf.y = detailsY + 56;
//         borderLine();

//         const xSL = 25;
//         const xProduct = 50;
//         const xQty = 330;
//         const xRate = 380;
//         const xAmount = 470;

//         const tableY = pdf.y + 2;

//         pdf.font("Helvetica-Bold")
//             .fontSize(8)
//             .fillColor("#000");

//         pdf.text("SL", xSL, tableY);
//         pdf.text("PRODUCT DESCRIPTION", xProduct, tableY);
//         pdf.text("QTY", xQty, tableY);
//         pdf.text("RATE", xRate, tableY);
//         pdf.text("AMOUNT", xAmount, tableY);

//         pdf.y = tableY + 14;
//         borderLine();

//         pdf.font("Helvetica")
//             .fontSize(8)
//             .fillColor("#000");

//         items.forEach((item, index) => {
//             const quantity = Number(
//                 item.quantity ?? item.qty ?? 1
//             ) || 1;

//             const rate = Number(
//                 item.price || item.rate || 0
//             );

//             const amount = quantity * rate;

//             const product = productMap.get(
//                 String(item.productId || "")
//             );

//             const productName = String(
//                 item.name ||
//                 item.productName ||
//                 product?.name ||
//                 "Product"
//             ).trim();

//             const packSize = String(
//                 item.packSize ||
//                 item.size ||
//                 item.unit ||
//                 product?.packSize ||
//                 product?.size ||
//                 product?.unit ||
//                 ""
//             ).trim();

//             // Moxifit Eye Drops (5ml)
//             const displayName = packSize
//                 ? `${productName} (${packSize})`
//                 : productName;

//             const productY = pdf.y + 2;

//             pdf.text(`${index + 1}`, xSL, productY);

//             pdf.text(
//                 displayName,
//                 xProduct,
//                 productY,
//                 {
//                     width: 250,
//                     lineBreak: false
//                 }
//             );

//             pdf.text(`${quantity}`, xQty, productY);
//             pdf.text(`Rs.${rate.toFixed(2)}`, xRate, productY);
//             pdf.text(`Rs.${amount.toFixed(2)}`, xAmount, productY);

//             pdf.y = productY + 14;
//         });

//         borderLine();

//         const totalY = pdf.y + 3;

//         pdf.font("Helvetica-Bold")
//             .fontSize(8.5)
//             .fillColor("#000");

//         pdf.text(
//             `NO OF ITEMS : ${items.length}`,
//             left,
//             totalY
//         );

//         pdf.text(
//             `TOTAL QUANTITY : ${totalQuantity}`,
//             left,
//             totalY + 13
//         );

//         pdf.text(
//             `CURRENT BILL AMOUNT : Rs.${grandTotal.toFixed(2)}`,
//             left,
//             totalY + 26
//         );

//         pdf.text(
//             `GRAND TOTAL : Rs.${grandTotal.toFixed(2)}`,
//             rightColumn,
//             totalY
//         );

//         pdf.text(
//             "BACK DUES AMOUNT : Rs.0.00",
//             rightColumn,
//             totalY + 13
//         );

//         pdf.text(
//             `TOTAL BALANCE : Rs.${grandTotal.toFixed(2)}`,
//             rightColumn,
//             totalY + 26
//         );

//         const footerY = pageHeight - 58;

//         pdf.font("Helvetica")
//             .fontSize(8)
//             .fillColor("#000")
//             .text(
//                 "Import Purchase ONLINE : No",
//                 left,
//                 footerY
//             );

//         pdf.font("Helvetica-Bold")
//             .fontSize(10)
//             .fillColor("#0d6efd")
//             .text(
//                 "GLOBAL HEALTHCARE",
//                 left,
//                 footerY,
//                 {
//                     width: right - left,
//                     align: "center"
//                 }
//             );

//         pdf.font("Helvetica")
//             .fontSize(8)
//             .fillColor("#555")
//             .text(
//                 "Powered by Osium Biogenix",
//                 left,
//                 footerY + 14,
//                 {
//                     width: right - left,
//                     align: "center"
//                 }
//             );

//         pdf.text(
//             "Call : 9142264714",
//             left,
//             footerY + 26,
//             {
//                 width: right - left,
//                 align: "center"
//             }
//         );

//         pdf.end();

//     } catch (error) {
//         console.log("Invoice error:", error);

//         return res.status(500).send(
//             "Invoice generate nahi hua: " + error.message
//         );
//     }
// });

// // ======================================================
// // UPDATE ORDER STATUS
// // ======================================================
// router.post("/doctor-order/:orderId/status", async (req, res) => {
//     try {
//         const allowedStatuses = [
//             "Pending",
//             "Processing",
//             "Delivered",
//             "Success",
//             "Cancelled"
//         ];

//         const status = String(
//             req.body.status || "Pending"
//         ).trim();

//         if (!allowedStatuses.includes(status)) {
//             return res.status(400).send(
//                 "Invalid order status"
//             );
//         }

//         const order = await DoctorOrder.findByIdAndUpdate(
//             req.params.orderId,
//             {
//                 $set: {
//                     status: status
//                 }
//             },
//             {
//                 new: true
//             }
//         );

//         if (!order) {
//             return res.status(404).send("Order not found");
//         }

//         return res.redirect(
//             `/admin/doctor/${order.doctorId}/orders`
//         );

//     } catch (error) {
//         console.log("Order status update error:", error);

//         return res.status(500).send(
//             "Unable to update order status: " + error.message
//         );
//     }
// });








// const PDFDocument = require("pdfkit");


// // ======================================================
// // INVOICE PDF ROUTE
// // URL: /admin/doctor-order/:orderId/invoice
// // ======================================================
// router.get("/doctor-order/:orderId/invoice", async (req, res) => {
//     try {
//         const order = await DoctorOrder.findById(
//             req.params.orderId
//         ).lean();

//         if (!order) {
//             return res.status(404).send("Order not found");
//         }

//         const doctor = await Doctor.findById(
//             order.doctorId
//         ).lean();

//         const items = Array.isArray(order.items)
//             ? order.items
//             : [];

//         const billNo = "D" + String(
//             order.orderId || order._id
//         )
//             .slice(-6)
//             .toUpperCase();

//         const totalQuantity = items.reduce((sum, item) => {
//             const qty = Number(
//                 item.quantity ?? item.qty ?? 1
//             ) || 1;

//             return sum + qty;
//         }, 0);

//         const grandTotal = Number(
//             order.totalAmount || order.total || 0
//         );

//         const date = order.createdAt
//             ? new Date(order.createdAt).toLocaleDateString("en-GB")
//             : "-";

//         const doctorName = String(doctor?.name || "Doctor")
//             .replace(/^Dr\.?\s*/i, "")
//             .trim();

//         res.setHeader("Content-Type", "application/pdf");

//         res.setHeader(
//             "Content-Disposition",
//             `attachment; filename=Estimate-${billNo}.pdf`
//         );

//         const pdf = new PDFDocument({
//             size: "A5",
//             layout: "landscape",
//             margin: 0
//         });

//         pdf.pipe(res);

//         const pageWidth = pdf.page.width;
//         const pageHeight = pdf.page.height;

//         const left = 20;
//         const right = pageWidth - 20;
//         const rightColumn = 310;

//         pdf.lineWidth(1)
//             .strokeColor("#000")
//             .rect(5, 5, pageWidth - 10, pageHeight - 10)
//             .stroke();

//         function borderLine() {
//             pdf.strokeColor("#000")
//                 .lineWidth(0.6)
//                 .moveTo(left, pdf.y)
//                 .lineTo(right, pdf.y)
//                 .stroke();

//             pdf.y += 5;
//         }

//         pdf.y = 16;

//         pdf.font("Helvetica-Bold")
//             .fontSize(16)
//             .fillColor("#0d6efd")
//             .text("GLOBAL HEALTHCARE", {
//                 align: "center"
//             });

//         pdf.font("Helvetica-Bold")
//             .fontSize(8)
//             .fillColor("#198754")
//             .text("SAFE & SECURE Healthcare", {
//                 align: "center"
//             });

//         pdf.font("Helvetica-Bold")
//             .fontSize(10)
//             .fillColor("#000")
//             .text("ROUGH ESTIMATE", {
//                 align: "center"
//             });

//         pdf.y += 7;
//         borderLine();

//         const detailsY = pdf.y + 3;

//         pdf.font("Helvetica-Bold")
//             .fontSize(8.5)
//             .fillColor("#000");

//         pdf.text(
//             `DOCTOR : Dr. ${doctorName}`,
//             left,
//             detailsY
//         );

//         pdf.text(
//             `SPECIALIZATION : ${doctor?.specialization || "-"}`,
//             left,
//             detailsY + 13
//         );

//         pdf.text(
//             `DOCTOR ID : ${doctor?.doctorId || "-"}`,
//             left,
//             detailsY + 26
//         );

//         pdf.text(
//             `PHONE : ${doctor?.phone || "-"}`,
//             left,
//             detailsY + 39
//         );

//         pdf.text(
//             `BILL NO : ${billNo}`,
//             rightColumn,
//             detailsY
//         );

//         pdf.text(
//             `DATE : ${date}`,
//             rightColumn,
//             detailsY + 13
//         );

//         pdf.text(
//             "TYPE : CREDIT",
//             rightColumn,
//             detailsY + 26
//         );

//         pdf.text(
//             `PAYMENT : ${String(
//                 order.paymentMethod || "COD"
//             ).toUpperCase()}`,
//             rightColumn,
//             detailsY + 39
//         );

//         pdf.y = detailsY + 56;
//         borderLine();

//         const xSL = 25;
//         const xProduct = 50;
//         const xQty = 330;
//         const xRate = 380;
//         const xAmount = 470;

//         const headerY = pdf.y + 2;

//         pdf.font("Helvetica-Bold")
//             .fontSize(8)
//             .fillColor("#000");

//         pdf.text("SL", xSL, headerY);
//         pdf.text("PRODUCT DESCRIPTION", xProduct, headerY);
//         pdf.text("QTY", xQty, headerY);
//         pdf.text("RATE", xRate, headerY);
//         pdf.text("AMOUNT", xAmount, headerY);

//         pdf.y = headerY + 14;
//         borderLine();

//         pdf.font("Helvetica")
//             .fontSize(8)
//             .fillColor("#000");

//         items.forEach((item, index) => {
//             const quantity = Number(
//                 item.quantity ?? item.qty ?? 1
//             ) || 1;

//             const rate = Number(
//                 item.price || item.rate || 0
//             );

//             const amount = quantity * rate;

//             const productName = String(
//                 item.name ||
//                 item.productName ||
//                 "Product"
//             );

//             const packSize = String(
//                 item.packSize ||
//                 item.size ||
//                 item.unit ||
//                 ""
//             ).trim();

//             const displayName = packSize
//                 ? `${productName} (${packSize})`
//                 : productName;

//             const y = pdf.y + 2;

//             pdf.text(`${index + 1}`, xSL, y);

//             pdf.text(
//                 displayName,
//                 xProduct,
//                 y,
//                 {
//                     width: 250,
//                     lineBreak: false
//                 }
//             );

//             pdf.text(`${quantity}`, xQty, y);
//             pdf.text(`Rs.${rate.toFixed(2)}`, xRate, y);
//             pdf.text(`Rs.${amount.toFixed(2)}`, xAmount, y);

//             pdf.y = y + 14;
//         });

//         borderLine();

//         const totalY = pdf.y + 3;

//         pdf.font("Helvetica-Bold")
//             .fontSize(8.5)
//             .fillColor("#000");

//         pdf.text(
//             `NO OF ITEMS : ${items.length}`,
//             left,
//             totalY
//         );

//         pdf.text(
//             `TOTAL QUANTITY : ${totalQuantity}`,
//             left,
//             totalY + 13
//         );

//         pdf.text(
//             `CURRENT BILL AMOUNT : Rs.${grandTotal.toFixed(2)}`,
//             left,
//             totalY + 26
//         );

//         pdf.text(
//             `GRAND TOTAL : Rs.${grandTotal.toFixed(2)}`,
//             rightColumn,
//             totalY
//         );

//         pdf.text(
//             "BACK DUES AMOUNT : Rs.0.00",
//             rightColumn,
//             totalY + 13
//         );

//         pdf.text(
//             `TOTAL BALANCE : Rs.${grandTotal.toFixed(2)}`,
//             rightColumn,
//             totalY + 26
//         );

//         const footerY = pageHeight - 58;

//         pdf.font("Helvetica")
//             .fontSize(8)
//             .fillColor("#000")
//             .text(
//                 "Import Purchase ONLINE : No",
//                 left,
//                 footerY
//             );

//         pdf.font("Helvetica-Bold")
//             .fontSize(10)
//             .fillColor("#0d6efd")
//             .text(
//                 "GLOBAL HEALTHCARE",
//                 left,
//                 footerY,
//                 {
//                     width: right - left,
//                     align: "center"
//                 }
//             );

//         pdf.font("Helvetica")
//             .fontSize(8)
//             .fillColor("#555")
//             .text(
//                 "Powered by Osium Biogenix",
//                 left,
//                 footerY + 14,
//                 {
//                     width: right - left,
//                     align: "center"
//                 }
//             );

//         pdf.text(
//             "Call : 9142264714",
//             left,
//             footerY + 26,
//             {
//                 width: right - left,
//                 align: "center"
//             }
//         );

//         pdf.end();

//     } catch (error) {
//         console.log("Invoice error:", error);

//         return res.status(500).send(
//             "Invoice generate nahi hua: " + error.message
//         );
//     }
// });
// // ======================================================
// // PREMIUM DOCTOR ORDERS PAGE
// // ======================================================
// // ======================================================
// // FINAL PREMIUM DOCTOR ORDERS + ALL STATUS COUNTS
// // ======================================================
// router.get("/doctor/:id/orders", async (req, res) => {
//     try {
//         const doctor = await Doctor.findById(req.params.id).lean();

//         if (!doctor) {
//             return res.status(404).send("Doctor not found");
//         }

//         const orders = await DoctorOrder.find({
//             doctorId: doctor._id
//         })
//             .sort({ createdAt: -1 })
//             .lean();

//         const safe = (value) => String(value ?? "")
//             .replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;")
//             .replace(/"/g, "&quot;")
//             .replace(/'/g, "&#039;");

//         const date = (value) => value
//             ? new Date(value).toLocaleDateString("en-GB")
//             : "-";

//         const countStatus = (status) => {
//             return orders.filter((order) => {
//                 return String(order.status || "Pending")
//                     .toLowerCase() === status;
//             }).length;
//         };

//         const pendingCount = countStatus("pending");
//         const processingCount = countStatus("processing");
//         const deliveredCount = countStatus("delivered");
//         const successCount = countStatus("success");
//         const cancelledCount = countStatus("cancelled");

//         const totalAmount = orders.reduce((sum, order) => {
//             return sum + Number(
//                 order.totalAmount || order.total || 0
//             );
//         }, 0);

//         const doctorName = String(doctor.name || "Doctor")
//             .replace(/^(dr\.?\s*)+/i, "")
//             .trim();

//         const getStatusClass = (status) => {
//             const value = String(status || "Pending").toLowerCase();

//             if (value === "processing") return "processing";
//             if (value === "delivered") return "delivered";
//             if (value === "success") return "success";
//             if (value === "cancelled") return "cancelled";

//             return "pending";
//         };

//         const rows = orders.length
//             ? orders.map((order, index) => {
//                 const items = Array.isArray(order.items)
//                     ? order.items
//                     : [];

//                 const billNo = "D" + String(
//                     order.orderId || order._id
//                 )
//                     .slice(-6)
//                     .toUpperCase();

//                 const status = String(order.status || "Pending");

//                 const amount = Number(
//                     order.totalAmount || order.total || 0
//                 );

//                 const productList = items.length
//                     ? items.map((item) => {
//                         const qty = Number(
//                             item.quantity ?? item.qty ?? 1
//                         ) || 1;

//                         return `
//                             <div class="product">
//                                 ${safe(
//                                     item.name ||
//                                     item.productName ||
//                                     "Product"
//                                 )}
//                                 <b>× ${qty}</b>
//                             </div>
//                         `;
//                     }).join("")
//                     : "No product";

//                 return `
//                     <tr>
//                         <td><span class="sl">${index + 1}</span></td>

//                         <td>
//                             <b class="bill">${billNo}</b>
//                             <small>${date(order.createdAt)}</small>
//                         </td>

//                         <td>${productList}</td>

//                         <td>
//                             <b class="amount">
//                                 ₹${amount.toFixed(2)}
//                             </b>
//                         </td>

//                         <td>
//                             <span class="status ${getStatusClass(status)}">
//                                 ${safe(status)}
//                             </span>
//                         </td>

//                         <td>
//                             <form
//                                 action="/admin/doctor-order/${order._id}/status"
//                                 method="POST"
//                                 class="update-form"
//                             >
//                                 <input
//                                     type="hidden"
//                                     name="doctorId"
//                                     value="${doctor._id}"
//                                 >

//                                 <select name="status">
//                                     <option value="Pending"
//                                         ${status === "Pending" ? "selected" : ""}>
//                                         Pending
//                                     </option>

//                                     <option value="Processing"
//                                         ${status === "Processing" ? "selected" : ""}>
//                                         Processing
//                                     </option>

//                                     <option value="Delivered"
//                                         ${status === "Delivered" ? "selected" : ""}>
//                                         Delivered
//                                     </option>

//                                     <option value="Success"
//                                         ${status === "Success" ? "selected" : ""}>
//                                         Success
//                                     </option>

//                                     <option value="Cancelled"
//                                         ${status === "Cancelled" ? "selected" : ""}>
//                                         Cancelled
//                                     </option>
//                                 </select>

//                                 <button type="submit">Update</button>
//                             </form>

//                             <a
//                                 class="invoice"
//                                 target="_blank"
//                                 href="/admin/doctor-order/${order._id}/invoice"
//                             >
//                                 📄 Invoice
//                             </a>
//                         </td>
//                     </tr>
//                 `;
//             }).join("")
//             : `
//                 <tr>
//                     <td colspan="6" class="empty">
//                         📦<br>No orders found for this doctor.
//                     </td>
//                 </tr>
//             `;

//         return res.send(`
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Doctor Orders</title>

// <style>
// *{box-sizing:border-box}
// body{margin:0;padding:22px;font-family:Arial,sans-serif;color:#162338;background:linear-gradient(135deg,#eaf2ff,#f8fbff,#e9fff5)}
// .container{max-width:1250px;margin:auto}
// .top{display:flex;align-items:center;justify-content:space-between;gap:15px;margin-bottom:20px}
// .brand{color:#0d4ca2;font-size:22px;font-weight:bold}
// .brand small{display:block;margin-top:4px;color:#718096;font-size:10px;letter-spacing:1px}
// .back{padding:10px 14px;border-radius:8px;color:#fff;background:#1c3c64;text-decoration:none;font-size:13px;font-weight:bold}
// .doctor-card{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:25px;margin-bottom:20px;border-radius:18px;color:#fff;background:linear-gradient(130deg,#073b82,#1263c9);box-shadow:0 14px 35px rgba(18,99,201,.24)}
// .doctor-left{display:flex;align-items:center;gap:15px}
// .icon{display:grid;width:60px;height:60px;border:2px solid rgba(255,255,255,.3);border-radius:50%;place-items:center;background:rgba(255,255,255,.14);font-size:28px}
// h1{margin:0 0 6px;font-size:24px}
// .doctor-card p{margin:4px 0;color:#e4efff;font-size:13px}
// .doctor-id{display:inline-block;padding:5px 8px;margin-top:6px;border-radius:6px;background:rgba(0,0,0,.17);font-size:11px}
// .stats{display:flex;gap:9px;flex-wrap:wrap;justify-content:flex-end}
// .stat{min-width:92px;padding:10px;border-radius:11px;color:#172033;background:#fff;text-align:center}
// .stat b{display:block;color:#0c56b5;font-size:19px}
// .stat span{color:#718096;font-size:9px;font-weight:bold}
// .card{overflow:hidden;border:1px solid #e4ebf5;border-radius:16px;background:#fff;box-shadow:0 8px 25px rgba(32,61,101,.08)}
// .heading{padding:18px 20px;border-bottom:1px solid #edf1f6;color:#164782;font-size:17px;font-weight:bold}
// .table-wrap{overflow-x:auto}
// table{width:100%;min-width:980px;border-collapse:collapse}
// th,td{padding:14px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #edf1f6}
// th{color:#536780;background:#f7faff;font-size:11px}
// .sl{display:grid;width:27px;height:27px;border-radius:50%;place-items:center;color:#0e56b0;background:#e8f1ff;font-size:12px;font-weight:bold}
// .bill{display:block;color:#0c56b5;font-size:13px}
// td small{display:block;margin-top:5px;color:#7d8a9d;font-size:11px}
// .product{padding:3px 0;color:#27364c;font-size:12px}
// .product b{color:#687a91;font-size:11px}
// .amount{color:#07854a;font-size:15px}
// .status{display:inline-block;padding:6px 10px;border-radius:20px;font-size:11px;font-weight:bold}
// .pending{color:#966300;background:#fff2c6}
// .processing{color:#075bab;background:#dcecff}
// .delivered,.success{color:#08724b;background:#d9f8e8}
// .cancelled{color:#b42318;background:#ffe1df}
// .update-form{display:flex;gap:7px;margin-bottom:8px}
// select{min-width:105px;padding:8px;border:1px solid #cbd7e6;border-radius:7px;background:#fff;font-size:12px}
// button{padding:8px 10px;border:0;border-radius:7px;color:#fff;background:#07854a;cursor:pointer;font-size:12px;font-weight:bold}
// .invoice{display:inline-block;padding:8px 11px;border-radius:7px;color:#0c56b5;background:#e8f1ff;text-decoration:none;font-size:12px;font-weight:bold}
// .empty{padding:50px;color:#718096;text-align:center}
// @media(max-width:700px){body{padding:12px}.top,.doctor-card{align-items:flex-start;flex-direction:column}.doctor-card{padding:18px}h1{font-size:19px}}
// </style>
// </head>

// <body>
// <div class="container">

//     <div class="top">
//         <div class="brand">
//             GLOBAL HEALTHCARE
//             <small>SAFE & SECURE HEALTHCARE</small>
//         </div>

//         <a href="/admin/manage-doctors" class="back">
//             ← Back to Doctors
//         </a>
//     </div>

//     <div class="doctor-card">
//         <div class="doctor-left">
//             <div class="icon">👨‍⚕️</div>

//             <div>
//                 <h1>Dr. ${safe(doctorName)}</h1>

//                 <p>
//                     ${safe(
//                         doctor.specialization ||
//                         "General Physician"
//                     )}
//                 </p>

//                 <p>
//                     ${safe(
//                         doctor.hospital ||
//                         "Healthcare Partner"
//                     )}
//                 </p>

//                 <span class="doctor-id">
//                     Doctor ID: ${safe(doctor.doctorId || "-")}
//                 </span>
//             </div>
//         </div>

//         <div class="stats">
//             <div class="stat">
//                 <b>${orders.length}</b>
//                 <span>TOTAL ORDERS</span>
//             </div>

//             <div class="stat">
//                 <b>${pendingCount}</b>
//                 <span>PENDING</span>
//             </div>

//             <div class="stat">
//                 <b>${processingCount}</b>
//                 <span>PROCESSING</span>
//             </div>

//             <div class="stat">
//                 <b>${deliveredCount}</b>
//                 <span>DELIVERED</span>
//             </div>

//             <div class="stat">
//                 <b>${successCount}</b>
//                 <span>SUCCESS</span>
//             </div>

//             <div class="stat">
//                 <b>${cancelledCount}</b>
//                 <span>CANCELLED</span>
//             </div>

//             <div class="stat">
//                 <b>₹${totalAmount.toFixed(0)}</b>
//                 <span>ORDER VALUE</span>
//             </div>
//         </div>
//     </div>

//     <div class="card">
//         <div class="heading">
//             📦 Doctor Order History
//         </div>

//         <div class="table-wrap">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>SL</th>
//                         <th>BILL / DATE</th>
//                         <th>PRODUCTS</th>
//                         <th>AMOUNT</th>
//                         <th>STATUS</th>
//                         <th>UPDATE / INVOICE</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     ${rows}
//                 </tbody>
//             </table>
//         </div>
//     </div>

// </div>
// </body>
// </html>
//         `);

//     } catch (error) {
//         console.log("Doctor orders error:", error);

//         return res.status(500).send(
//             "Unable to load doctor orders: " + error.message
//         );
//     }
// });


// // ======================================================
// // FINAL STATUS UPDATE ROUTE
// // ======================================================
// router.post("/doctor-order/:orderId/status", async (req, res) => {
//     try {
//         const allowedStatuses = [
//             "Pending",
//             "Processing",
//             "Delivered",
//             "Success",
//             "Cancelled"
//         ];

//         const status = String(
//             req.body.status || "Pending"
//         ).trim();

//         if (!allowedStatuses.includes(status)) {
//             return res.status(400).send("Invalid order status");
//         }

//         const order = await DoctorOrder.findByIdAndUpdate(
//             req.params.orderId,
//             {
//                 $set: {
//                     status: status
//                 }
//             },
//             {
//                 new: true
//             }
//         );

//         if (!order) {
//             return res.status(404).send("Order not found");
//         }

//         return res.redirect(
//             `/admin/doctor/${order.doctorId}/orders`
//         );

//     } catch (error) {
//         console.log("Status update error:", error);

//         return res.status(500).send(
//             "Unable to update status: " + error.message
//         );
//     }
// });



// // ======================================================
// // STUDENT RECEIPT PDF
// // ======================================================

// const path = require("path");
// const fs = require("fs");

// router.get("/student-receipt/:id", async (req, res) => {
//     try {
//         const student = await Student.findById(
//             req.params.id
//         ).lean();

//         if (!student) {
//             return res.status(404).send("Student not found");
//         }

//         const rollNumber =
//             student.roll ||
//             student.rollNo ||
//             "-";

//         const mobile =
//             student.mobile ||
//             student.phone ||
//             "-";

//         const course =
//             student.className ||
//             student.course ||
//             "-";

//         const receiptNo = "GSR" + String(student._id)
//             .slice(-6)
//             .toUpperCase();

//         const date = student.createdAt
//             ? new Date(student.createdAt)
//                 .toLocaleDateString("en-GB")
//             : new Date().toLocaleDateString("en-GB");

//         res.setHeader("Content-Type", "application/pdf");

//         res.setHeader(
//             "Content-Disposition",
//             `attachment; filename=Receipt-${rollNumber}.pdf`
//         );

//         const pdf = new PDFDocument({
//             size: [595, 425],
//             margin: 0
//         });

//         pdf.pipe(res);

//         const width = pdf.page.width;
//         const height = pdf.page.height;

//         // अपने logo को public/images/logo.png में रखें
//         const logoPath = path.join(
//             process.cwd(),
//             "public",
//             "images",
//             "GS LOGO.png"
//         );

//         pdf.lineWidth(1)
//             .strokeColor("#0d6efd")
//             .rect(8, 8, width - 16, height - 16)
//             .stroke();

//         // ==================================================
//         // WEBSITE LOGO
//         // ==================================================
//         if (fs.existsSync(logoPath)) {
//             pdf.image(
//                 logoPath,
//                 42,
//                 18,
//                 {
//                     fit: [60, 60]
//                 }
//             );
//         }

//         // ==================================================
//         // HEADER
//         // ==================================================
//         pdf.font("Helvetica-Bold")
//             .fontSize(20)
//             .fillColor("#0d6efd")
//             .text(
//                 "GLOBAL SERVICES",
//                 110,
//                 26,
//                 {
//                     width: 435,
//                     align: "center"
//                 }
//             );

//         pdf.font("Helvetica-Bold")
//             .fontSize(9)
//             .fillColor("#198754")
//             .text(
//                 "SAFE & SECURE Services",
//                 110,
//                 52,
//                 {
//                     width: 435,
//                     align: "center"
//                 }
//             );

//         pdf.font("Helvetica-Bold")
//             .fontSize(13)
//             .fillColor("#000")
//             .text(
//                 "STUDENT REGISTRATION RECEIPT",
//                 25,
//                 75,
//                 {
//                     width: width - 50,
//                     align: "center"
//                 }
//             );

//         pdf.lineWidth(0.7)
//             .strokeColor("#999")
//             .moveTo(28, 99)
//             .lineTo(width - 28, 99)
//             .stroke();

//         const left = 45;
//         const labelX = 45;
//         const valueX = 220;
//         let y = 116;

//         const details = [
//             ["Receipt No.", receiptNo],
//             ["Date", date],
//             ["Student Name", student.name || "-"],
//             ["Roll Number", rollNumber],
//             ["Mobile Number", mobile],
//             ["Class / Course", course],
//             ["Selected Plan", student.plan || "-"],
//             [
//                 "Amount",
//                 `Rs.${Number(student.amount || 0).toFixed(2)}`
//             ],
//             [
//                 "Payment Status",
//                 student.paymentStatus || "Pending"
//             ]
//         ];

//         details.forEach(([label, value]) => {
//             pdf.font("Helvetica-Bold")
//                 .fontSize(10)
//                 .fillColor("#123b85")
//                 .text(`${label} :`, labelX, y);

//             pdf.font("Helvetica")
//                 .fontSize(10)
//                 .fillColor("#000")
//                 .text(String(value), valueX, y);

//             pdf.strokeColor("#e5e7eb")
//                 .lineWidth(0.4)
//                 .moveTo(left, y + 18)
//                 .lineTo(width - 45, y + 18)
//                 .stroke();

//             y += 25;
//         });

//         pdf.lineWidth(0.7)
//             .strokeColor("#999")
//             .moveTo(28, 348)
//             .lineTo(width - 28, 348)
//             .stroke();

//         pdf.font("Helvetica-Bold")
//             .fontSize(11)
//             .fillColor("#0d6efd")
//             .text(
//                 "GLOBAL SERVICES",
//                 25,
//                 363,
//                 {
//                     width: width - 50,
//                     align: "center"
//                 }
//             );

//         pdf.font("Helvetica")
//             .fontSize(8)
//             .fillColor("#555")
//             .text(
//                 "This is a computer generated registration receipt.",
//                 25,
//                 380,
//                 {
//                     width: width - 50,
//                     align: "center"
//                 }
//             );

//         pdf.end();

//     } catch (error) {
//         console.log("Student receipt error:", error);

//         return res.status(500).send(
//             "Receipt download failed: " + error.message
//         );
//     }
// });



// const EditGovernment =
//     require("../pages/editpages/EditGovernment");


//     // ======================================================
// // EDIT GOVERNMENT PERSON PAGE
// // GET /admin/edit-government/:id
// // ======================================================

// router.get(
//     "/edit-government/:id",
//     async (req, res) => {

//         try {

//             const person =
//                 await GovernmentPerson
//                     .findById(req.params.id)
//                     .lean();


//             if (!person) {

//                 return res
//                     .status(404)
//                     .send("Government Person Not Found");

//             }


//             return res.send(
//                 EditGovernment(person)
//             );


//         } catch (err) {

//             console.error(
//                 "EDIT GOVERNMENT GET ERROR:",
//                 err
//             );


//             return res
//                 .status(500)
//                 .send(
//                     "Failed to load Government Person: " +
//                     err.message
//                 );

//         }

//     }
// );



// // ======================================================
// // UPDATE GOVERNMENT PERSON
// // POST /admin/edit-government/:id
// // ======================================================

// const multer = require("multer");








// // ======================================================
// // GOVERNMENT PHOTO UPLOAD FOLDER
// // ======================================================

// const governmentUploadDir =
//     path.join(
//         process.cwd(),
//         "public",
//         "uploads",
//         "government"
//     );


// // Folder automatic create
// if (!fs.existsSync(governmentUploadDir)) {

//     fs.mkdirSync(
//         governmentUploadDir,
//         {
//             recursive: true
//         }
//     );

// }



// // ======================================================
// // MULTER STORAGE
// // ======================================================

// const governmentStorage =
//     multer.diskStorage({

//         destination: function (
//             req,
//             file,
//             cb
//         ) {

//             cb(
//                 null,
//                 governmentUploadDir
//             );

//         },


//         filename: function (
//             req,
//             file,
//             cb
//         ) {

//             const ext =
//                 path
//                     .extname(file.originalname)
//                     .toLowerCase();


//             const fileName =
//                 "government-" +
//                 Date.now() +
//                 "-" +
//                 Math.round(
//                     Math.random() * 1E9
//                 ) +
//                 ext;


//             cb(
//                 null,
//                 fileName
//             );

//         }

//     });



// // ======================================================
// // MULTER
// // ======================================================

// const uploadGovernment =
//     multer({

//         storage:
//             governmentStorage,

//         limits: {

//             fileSize:
//                 5 * 1024 * 1024

//         },

//         fileFilter: function (
//             req,
//             file,
//             cb
//         ) {

//             const allowedTypes = [

//                 "image/jpeg",
//                 "image/png",
//                 "image/webp"

//             ];


//             if (
//                 allowedTypes.includes(
//                     file.mimetype
//                 )
//             ) {

//                 return cb(
//                     null,
//                     true
//                 );

//             }


//             return cb(
//                 new Error(
//                     "Only JPG, JPEG, PNG and WEBP images are allowed"
//                 )
//             );

//         }

//     });



// // ======================================================
// // EDIT GOVERNMENT PERSON PAGE
// // GET /admin/edit-government/:id
// // ======================================================

// router.get(
//     "/edit-government/:id",
//     async (req, res) => {

//         try {

//             const person =
//                 await GovernmentPerson
//                     .findById(
//                         req.params.id
//                     )
//                     .lean();


//             if (!person) {

//                 return res
//                     .status(404)
//                     .send(
//                         "Government Person Not Found"
//                     );

//             }


//             return res.send(
//                 EditGovernment(person)
//             );


//         } catch (err) {

//             console.error(
//                 "EDIT GOVERNMENT GET ERROR:",
//                 err
//             );


//             return res
//                 .status(500)
//                 .send(
//                     "Failed to load Government Person: " +
//                     err.message
//                 );

//         }

//     }
// );



// // ======================================================
// // UPDATE GOVERNMENT PERSON
// // POST /admin/edit-government/:id
// // ======================================================

// router.post(
//     "/edit-government/:id",

//     // ==============================================
//     // VERY IMPORTANT
//     // Ye multipart form ko parse karega
//     // ==============================================

//     uploadGovernment.single("image"),

//     async (req, res) => {

//         try {

//             console.log(
//                 "=================================="
//             );

//             console.log(
//                 "EDIT GOVERNMENT POST"
//             );

//             console.log(
//                 "BODY:",
//                 req.body
//             );

//             console.log(
//                 "FILE:",
//                 req.file
//             );

//             console.log(
//                 "=================================="
//             );



//             // ==================================================
//             // OLD PERSON
//             // ==================================================

//             const oldPerson =
//                 await GovernmentPerson
//                     .findById(
//                         req.params.id
//                     );


//             if (!oldPerson) {

//                 return res
//                     .status(404)
//                     .send(
//                         "Government Person Not Found"
//                     );

//             }



//             // ==================================================
//             // SAFE BODY
//             // ==================================================

//             const body =
//                 req.body || {};



//             const name =
//                 String(
//                     body.name || ""
//                 ).trim();


//             const position =
//                 String(
//                     body.position || ""
//                 ).trim();


//             const department =
//                 String(
//                     body.department || ""
//                 ).trim();


//             const phone =
//                 String(
//                     body.phone || ""
//                 ).trim();


//             const address =
//                 String(
//                     body.address || ""
//                 ).trim();



//             // ==================================================
//             // VALIDATION
//             // ==================================================

//             if (!name) {

//                 return res
//                     .status(400)
//                     .send(
//                         "Person Name is required"
//                     );

//             }


//             if (!position) {

//                 return res
//                     .status(400)
//                     .send(
//                         "Position is required"
//                     );

//             }



//             // ==================================================
//             // UPDATE DATA
//             // ==================================================

//             const updateData = {

//                 name,

//                 position,

//                 department,

//                 phone,

//                 address

//             };



//             // ==================================================
//             // PHOTO
//             // ==================================================

//             if (req.file) {

//                 // New photo uploaded

//                 updateData.image =
//                     "/uploads/government/" +
//                     req.file.filename;

//             } else {

//                 // No new photo
//                 // Keep old photo

//                 updateData.image =
//                     oldPerson.image || "";

//             }



//             // ==================================================
//             // UPDATE DATABASE
//             // ==================================================

//             const updatedPerson =
//                 await GovernmentPerson
//                     .findByIdAndUpdate(

//                         req.params.id,

//                         {
//                             $set:
//                                 updateData
//                         },

//                         {
//                             new: true,
//                             runValidators: true
//                         }

//                     );



//             if (!updatedPerson) {

//                 return res
//                     .status(404)
//                     .send(
//                         "Government Person Not Found"
//                     );

//             }



//             console.log(
//                 "✅ GOVERNMENT PERSON UPDATED:",
//                 updatedPerson._id
//             );


//             console.log(
//                 "✅ PHOTO:",
//                 updatedPerson.image
//             );



//             // ==================================================
//             // REDIRECT
//             // ==================================================

//             return res.redirect(
//                 "/admin/manage-government"
//             );


//         } catch (err) {

//             console.error(
//                 "EDIT GOVERNMENT POST ERROR:",
//                 err
//             );


//             return res
//                 .status(500)
//                 .send(
//                     "Government Person Update Failed: " +
//                     err.message
//                 );

//         }

//     }
// );



// // ======================================================
// // GOVERNMENT PERSON DETAILS
// // GET /government/person/:id
// // ======================================================

// router.get(
//     "/person/:id",
//     async (req, res) => {

//         try {

//             const person =
//                 await GovernmentPerson
//                     .findById(req.params.id)
//                     .lean();


//             if (!person) {

//                 return res
//                     .status(404)
//                     .send(
//                         "Government Person Not Found"
//                     );

//             }


//             return res.send(`
// <!DOCTYPE html>

// <html lang="en">

// <head>

// <meta charset="UTF-8">

// <meta
//     name="viewport"
//     content="width=device-width, initial-scale=1.0"
// >

// <title>${person.name || "Government Person"}</title>

// <style>

// *{
//     box-sizing:border-box;
// }

// body{

//     margin:0;
//     padding:20px;

//     font-family:
//         Arial,
//         sans-serif;

//     background:#f1f5f9;

//     color:#0f172a;
// }

// .container{

//     max-width:650px;

//     margin:auto;

//     background:#ffffff;

//     border-radius:20px;

//     overflow:hidden;

//     box-shadow:
//         0 10px 35px
//         rgba(0,0,0,.10);
// }

// .header{

//     background:
//         linear-gradient(
//             135deg,
//             #1e3a8a,
//             #2563eb
//         );

//     color:white;

//     padding:28px 20px;

//     text-align:center;
// }

// .photo{

//     width:120px;
//     height:120px;

//     border-radius:50%;

//     object-fit:cover;

//     border:4px solid white;

//     margin-bottom:12px;

//     background:#e2e8f0;
// }

// .header h1{

//     margin:5px 0;

//     font-size:26px;
// }

// .header p{

//     margin:5px 0;

//     opacity:.9;
// }

// .details{

//     padding:25px;
// }

// .detail{

//     padding:14px 0;

//     border-bottom:
//         1px solid #e2e8f0;
// }

// .detail small{

//     display:block;

//     color:#64748b;

//     margin-bottom:5px;
// }

// .detail strong{

//     font-size:16px;

//     color:#0f172a;
// }

// .back-btn{

//     display:block;

//     margin-top:22px;

//     padding:13px;

//     background:#2563eb;

//     color:white;

//     text-decoration:none;

//     text-align:center;

//     border-radius:9px;

//     font-weight:bold;
// }

// </style>

// </head>


// <body>

// <div class="container">


//     <div class="header">

//         <img
//             src="${person.image || "/images/default.png"}"
//             class="photo"
//             onerror="
//                 this.onerror=null;
//                 this.src='/images/default.png';
//             "
//         >

//         <h1>
//             ${person.name || "-"}
//         </h1>

//         <p>
//             ${person.position || "-"}
//         </p>

//     </div>


//     <div class="details">


//         <div class="detail">

//             <small>
//                 Department
//             </small>

//             <strong>
//                 ${person.department || "-"}
//             </strong>

//         </div>


//         <div class="detail">

//             <small>
//                 Phone Number
//             </small>

//             <strong>
//                 ${person.phone || "-"}
//             </strong>

//         </div>


//         <div class="detail">

//             <small>
//                 Address
//             </small>

//             <strong>
//                 ${person.address || "-"}
//             </strong>

//         </div>


//         <a
//             href="/"
//             class="back-btn"
//         >
//             ← Back
//         </a>


//     </div>


// </div>

// </body>

// </html>
//             `);


//         } catch (err) {

//             console.error(
//                 "GOVERNMENT PERSON DETAILS ERROR:",
//                 err
//             );


//             return res
//                 .status(500)
//                 .send(
//                     "Failed to load Government Person: " +
//                     err.message
//                 );

//         }

//     }
// );
// // ======================================================
// // EXPORT
// // ======================================================

// module.exports = router;

// require("dotenv").config();
// const crypto = require("crypto");

// const Razorpay = require("razorpay");

// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET
// });


// const express = require("express");
// const router = express.Router();

// const dashboard = require("../pages/dashboard");
// const AdminLogin = require("../pages/adminLogin");
// const DoctorLogin = require("../pages/doctorLogin");
// const ManageDoctors = require("../pages/manageDoctors");
// const AddDoctor = require("../pages/addpages/addDoctor");

// const { login } = require("../controllers/adminAuth");
// const AdminController = require("../controllers/adminController");
// const DoctorDashboard = require("../pages/doctorDashboard");

// const AddGovernment = require("../views/component/dashboard/addGovernment");

// const Banner = require("../models/Banner");
// const Student = require("../models/Student");
// const Service = require("../models/Service");
// const Doctor = require("../models/Doctor");
// const Product = require("../models/Product");

// const upload = require("../config/upload");


// // =============================
// // Admin Login
// // =============================

// router.get("/", (req, res) => {
//     res.send(AdminLogin());
// });

// router.post("/login", login);


// // =============================
// // Dashboard (FIXED HERE)
// // =============================

// // =============================
// // Dashboard
// // =============================

// router.get("/admindashboard", async (req, res) => {
//     try {

//         const doctorCount = await Doctor.countDocuments();
//         const studentCount = await Student.countDocuments();
//         const serviceCount = await Service.countDocuments();
//         const bannerCount = await Banner.countDocuments();

//         console.log("DOCTOR COUNT:", doctorCount);
//         console.log("STUDENT COUNT:", studentCount);
//         console.log("SERVICE COUNT:", serviceCount);
//         console.log("BANNER COUNT:", bannerCount);


//         const data = {
//             doctorCount,
//             studentCount,
//             serviceCount,
//             bannerCount
//         };


//         console.log("=== ADMIN ROUTE DATA ===");
//         console.log(data);


//         return res.send(dashboard(data));


//     } catch (err) {

//         console.log("DASHBOARD ERROR:", err);
//         return res.status(500).send(err.message);

//     }
// });

// // =============================
// // Banner
// // =============================

// router.get("/manage-banners", AdminController.manageBanners);
// router.get("/manage-banner", AdminController.manageBanners);

// router.get("/add-banner", AdminController.addBannerPage);

// router.post(
//     "/add-banner",
//     upload.single("image"),
//     AdminController.saveBanner
// );

// router.get("/delete-banner/:id", AdminController.deleteBanner);


// // =============================
// // Doctor Login
// // =============================

// router.get("/doctor-login", (req, res) => {
//     res.send(DoctorLogin());
// });

// router.post("/doctor/login", async(req,res)=>{

//     try{

//         const {doctorId,password} = req.body;


//         const doctor = await Doctor.findOne({
//             doctorId: doctorId
//         });


//         if(!doctor){

//             return res.send(
//                 DoctorLogin("Doctor Not Found")
//             );

//         }


//         if(doctor.password !== password){

//             return res.send(
//                 DoctorLogin("Wrong Password")
//             );

//         }



//         // ⭐ IMPORTANT LINE ⭐
//         req.session.doctor = doctor;



//         console.log("Doctor Session Saved:");
//         console.log(req.session.doctor);



//         res.redirect("/doctor/dashboard");


//     }
//     catch(err){

//         console.log(err);

//         res.send(
//             "Login Error"
//         );

//     }

// });


// // =============================
// // Manage Doctors
// // =============================

// router.get("/manage-doctors", async (req, res) => {
//     try {
//         const doctors = await Doctor.find().sort({ createdAt: -1 });
//         res.send(ManageDoctors(doctors));
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err.message);
//     }
// });





// router.post(
//     "/add-doctor",
//     upload.single("image"),
//     async (req,res)=>{

//     try{


//         console.log("BODY:",req.body);
//         console.log("FILE:",req.file);



//         const existDoctor = await Doctor.findOne({
//             phone:req.body.phone
//         });


//         if(existDoctor){

//             return res.send(
//                 "Phone Number Already Registered"
//             );

//         }



//         const lastDoctor = await Doctor.findOne()
//         .sort({createdAt:-1});


//         let nextNumber = 1001;


//         if(lastDoctor && lastDoctor.doctorId){

//             nextNumber =
//             parseInt(
//                 lastDoctor.doctorId.replace("DOC","")
//             ) + 1;

//         }


//         const doctorId = "DOC" + nextNumber;



//         const doctor = new Doctor({


//             doctorId,


//             name:req.body.name,


//             degree:req.body.qualification,


//             specialization:req.body.speciality,


//             experience:req.body.experience,


//             hospital:req.body.clinic,


//             phone:req.body.phone,


//             email:req.body.email,


//             password:req.body.password,


//             address:req.body.address,


//             description:req.body.description,



//             // ======================
//             // DOCTOR AVAILABILITY
//             // ======================


//             availableDay:req.body.availableDay,


//             timeFrom:req.body.timeFrom,


//             timeTo:req.body.timeTo,



//             // ======================
//             // APPOINTMENT SLOT
//             // ======================


//             slotDuration:req.body.slotDuration,



//             // ======================
//             // FEE
//             // ======================


//             fee:req.body.fee,


//             feeType:req.body.feeType,



//             image:req.file
//             ? req.file.path
//             :""

//         });



//         await doctor.save();



//         console.log(
//             "Doctor Saved:",
//             doctor
//         );



//         res.redirect(
//             "/admin/manage-doctors"
//         );



//     }
//     catch(err){


//         console.log(
//             "ADD DOCTOR ERROR:",
//             err
//         );


//         res.status(500)
//         .send(err.message);


//     }

// });

// // =============================
// // Delete Doctor
// // =============================

// router.get("/delete-doctor/:id", async (req, res) => {
//     try {
//         await Doctor.findByIdAndDelete(req.params.id);
//         res.redirect("/admin/manage-doctors");
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err.message);
//     }
// });

// const EditDoctor = require("../pages/editpages/editDoctor");


// // =============================
// // Edit Doctor Page
// // =============================

// router.get("/edit-doctor/:id", async (req, res) => {

//     try {

//         const doctor = await Doctor.findById(req.params.id);

//         if (!doctor) {
//             return res.send("Doctor Not Found");
//         }

//         res.send(EditDoctor(doctor));


//     } catch (err) {

//         console.log(err);

//         res.status(500).send(err.message);

//     }

// });





// // =============================
// // UPDATE PRODUCT
// // =============================

// router.post(
//     "/edit-product/:id",

//     upload.fields([
//         {
//             name: "images",
//             maxCount: 10
//         },
//         {
//             name: "videos",
//             maxCount: 1
//         }
//     ]),

//     async (req, res) => {

//         try {

//             console.log("\n========== EDIT PRODUCT ==========");

//             console.log(
//                 "PRODUCT ID:",
//                 req.params.id
//             );

//             console.log(
//                 "BODY:",
//                 req.body
//             );

//             console.log(
//                 "FILES:",
//                 req.files
//             );


//             // ==========================================
//             // FIND PRODUCT
//             // ==========================================

//             const product =
//                 await Product.findById(req.params.id);


//             if (!product) {

//                 return res
//                     .status(404)
//                     .send("Product Not Found");

//             }


//             // ==========================================
//             // BASIC DETAILS
//             // ==========================================

//             product.name =
//                 req.body.name || "";

//             product.brand =
//                 req.body.brand || "";

//             product.category =
//                 req.body.category || "";

//             product.manufacturer =
//                 req.body.manufacturer || "";


//             // ==========================================
//             // PRICE
//             // ==========================================

//             product.mrp =
//                 req.body.mrp !== undefined &&
//                 req.body.mrp !== ""
//                     ? Number(req.body.mrp)
//                     : 0;


//             product.price =
//                 req.body.price !== undefined &&
//                 req.body.price !== ""
//                     ? Number(req.body.price)
//                     : 0;


//             product.stock =
//                 req.body.stock !== undefined &&
//                 req.body.stock !== ""
//                     ? Number(req.body.stock)
//                     : 0;


//             // ==========================================
//             // MEDICINE DETAILS
//             // ==========================================

//             product.packSize =
//                 req.body.packSize || "";

//             product.batchNo =
//                 req.body.batchNo || "";

//             product.mfgDate =
//                 req.body.mfgDate || "";

//             product.expDate =
//                 req.body.expDate || "";


//             // ==========================================
//             // COMPOSITION
//             // ==========================================

//             let composition = [];


//             if (Array.isArray(req.body.composition)) {

//                 composition =
//                     req.body.composition
//                         .map(item =>
//                             String(item).trim()
//                         )
//                         .filter(Boolean);

//             }

//             else if (req.body.composition) {

//                 composition = [
//                     String(
//                         req.body.composition
//                     ).trim()
//                 ];

//             }


//             product.composition =
//                 composition;


//             // ==========================================
//             // PRODUCT DETAILS
//             // ==========================================

//             product.description =
//                 req.body.description || "";

//             product.uses =
//                 req.body.uses || "";

//             product.benefits =
//                 req.body.benefits || "";

//             product.dosage =
//                 req.body.dosage || "";

//             product.sideEffects =
//                 req.body.sideEffects || "";

//             product.storage =
//                 req.body.storage || "";


//             // ==========================================
//             // IMAGES
//             // ==========================================

//             const imageFiles =
//                 req.files?.images || [];


//             if (imageFiles.length > 0) {

//                 console.log(
//                     "NEW IMAGE COUNT:",
//                     imageFiles.length
//                 );


//                 const newImages =
//                     imageFiles
//                         .map(file =>
//                             file.path ||
//                             file.secure_url ||
//                             file.url
//                         )
//                         .filter(Boolean);


//                 let existingImages = [];


//                 if (Array.isArray(product.images)) {

//                     existingImages =
//                         product.images
//                             .filter(Boolean);

//                 }


//                 // पुराने main image को भी preserve करें

//                 if (
//                     product.image &&
//                     !existingImages.includes(
//                         product.image
//                     )
//                 ) {

//                     existingImages.push(
//                         product.image
//                     );

//                 }


//                 // पुराने + नए images

//                 product.images = [
//                     ...existingImages,
//                     ...newImages
//                 ];


//                 // अगर main image नहीं है

//                 if (
//                     !product.image &&
//                     newImages.length > 0
//                 ) {

//                     product.image =
//                         newImages[0];

//                 }

//             }


//             // ==========================================
//             // VIDEO
//             // ==========================================

//             const videoFiles =
//                 req.files?.videos || [];


//             if (videoFiles.length > 0) {

//                 console.log(
//                     "NEW VIDEO COUNT:",
//                     videoFiles.length
//                 );


//                 const newVideoUrl =
//                     videoFiles[0].path ||
//                     videoFiles[0].secure_url ||
//                     videoFiles[0].url;


//                 console.log(
//                     "NEW VIDEO URL:",
//                     newVideoUrl
//                 );


//                 if (newVideoUrl) {

//                     // IMPORTANT:
//                     // Schema field is "video"
//                     // NOT "videos"

//                     product.video =
//                         newVideoUrl;

//                 }

//             }

//             else {

//                 console.log(
//                     "NO NEW VIDEO - OLD VIDEO KEPT"
//                 );

//             }


//             // ==========================================
//             // SAVE PRODUCT
//             // ==========================================

//             await product.save();


//             // ==========================================
//             // FINAL LOG
//             // ==========================================

//             console.log(
//                 "================================="
//             );

//             console.log(
//                 "PRODUCT UPDATED:",
//                 product._id
//             );

//             console.log(
//                 "TOTAL IMAGES:",
//                 product.images?.length || 0
//             );

//             console.log(
//                 "SAVED VIDEO:",
//                 product.video
//             );

//             console.log(
//                 "================================="
//             );


//             // ==========================================
//             // REDIRECT
//             // ==========================================

//             return res.redirect(
//                 "/admin/manage-products"
//             );


//         }

//         catch (err) {

//             console.error(
//                 "UPDATE PRODUCT ERROR:",
//                 err
//             );


//             return res
//                 .status(500)
//                 .send(
//                     "Product Update Error: " +
//                     err.message
//                 );

//         }

//     }
// );

// const ManageProducts = require("../pages/manageProducts");

// router.get("/manage-products", async (req, res) => {
//     try {
//         const products = await Product.find().sort({ createdAt: -1 });
//         res.send(ManageProducts(products));
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err.message);
//     }
// });

// const AddProduct = require("../pages/addpages/addProduct");

// router.get("/add-product", (req, res) => {
//     res.send(AddProduct());
// });


// router.post(
//     "/add-product",

//     upload.fields([
//         {
//             name: "image",
//             maxCount: 1
//         },
//         {
//             name: "images",
//             maxCount: 10
//         },
//         {
//             name: "video",
//             maxCount: 1
//         }
//     ]),

//     async (req, res) => {

//         try {

//             console.log("========== ADD PRODUCT ==========");
//             console.log("BODY:", req.body);
//             console.log("FILES:", req.files);


//             // =============================
//             // COMPOSITION
//             // =============================

//             let composition = [];

//             if (Array.isArray(req.body.composition)) {

//                 composition = req.body.composition
//                     .map(item => String(item).trim())
//                     .filter(Boolean);

//             } else if (req.body.composition) {

//                 composition = [
//                     String(req.body.composition).trim()
//                 ];

//             }


//             // =============================
//             // MORE IMAGES
//             // =============================

//             let images = [];

//             if (
//                 req.files &&
//                 req.files.images
//             ) {

//                 images = req.files.images
//                     .map(file => file.path)
//                     .filter(Boolean);

//             }


//             // =============================
//             // MAIN IMAGE
//             // =============================

//             let mainImage = "";

//             if (
//                 req.files &&
//                 req.files.image &&
//                 req.files.image.length > 0
//             ) {

//                 mainImage =
//                     req.files.image[0].path;

//             }


//             // =============================
//             // VIDEO
//             // =============================

//             let video = "";

//             if (
//                 req.files &&
//                 req.files.video &&
//                 req.files.video.length > 0
//             ) {

//                 video =
//                     req.files.video[0].path;

//             }


//             // =============================
//             // PRODUCT
//             // =============================

//             const product = new Product({

//                 name: req.body.name || "",

//                 brand: req.body.brand || "",

//                 category: req.body.category || "",

//                 manufacturer: req.body.manufacturer || "",

//                 mrp:
//                     req.body.mrp !== ""
//                         ? Number(req.body.mrp)
//                         : 0,

//                 price:
//                     req.body.price !== ""
//                         ? Number(req.body.price)
//                         : 0,

//                 stock:
//                     req.body.stock !== ""
//                         ? Number(req.body.stock)
//                         : 0,

//                 packSize:
//                     req.body.packSize || "",

//                 batchNo:
//                     req.body.batchNo || "",

//                 mfgDate:
//                     req.body.mfgDate || "",

//                 expDate:
//                     req.body.expDate || "",

//                 composition,

//                 images,

//                 image: mainImage,

//                 description:
//                     req.body.description || "",

//                 uses:
//                     req.body.uses || "",

//                 benefits:
//                     req.body.benefits || "",

//                 dosage:
//                     req.body.dosage || "",

//                 sideEffects:
//                     req.body.sideEffects || "",

//                 storage:
//                     req.body.storage || "",

//                 video

//             });


//             await product.save();


//             console.log(
//                 "PRODUCT SAVED:",
//                 product._id
//             );


//             res.redirect(
//                 "/admin/manage-products"
//             );


//         } catch (err) {

//             console.error(
//                 "ADD PRODUCT ERROR:",
//                 err
//             );

//             res.status(500).send(
//                 err.message
//             );

//         }

//     }
// );





// // =============================
// // UPDATE PRODUCT
// // =============================

// // router.post(
// //     "/edit-product/:id",
// //     upload.array("images", 10),
// //     async (req, res) => {

// //         try {

// //             console.log("================================");
// //             console.log("EDIT PRODUCT REQUEST");
// //             console.log("PRODUCT ID:", req.params.id);
// //             console.log("BODY:", req.body);
// //             console.log("FILES:", req.files);
// //             console.log("================================");


// //             // =============================
// //             // FIND PRODUCT
// //             // =============================

// //             const product = await Product.findById(
// //                 req.params.id
// //             );


// //             if (!product) {

// //                 return res.status(404).send(
// //                     "Product Not Found"
// //                 );

// //             }


// //             // =============================
// //             // COMPOSITION
// //             // =============================

// //             let composition = [];

// //             if (Array.isArray(req.body.composition)) {

// //                 composition = req.body.composition
// //                     .map(item => String(item).trim())
// //                     .filter(item => item !== "");

// //             } else if (req.body.composition) {

// //                 composition = [
// //                     String(req.body.composition).trim()
// //                 ];

// //             }


// //             // =============================
// //             // UPDATE BASIC INFORMATION
// //             // =============================

// //             product.name =
// //                 req.body.name || "";

// //             product.brand =
// //                 req.body.brand || "";

// //             product.category =
// //                 req.body.category || "";

// //             product.manufacturer =
// //                 req.body.manufacturer || "";


// //             // =============================
// //             // PRICE
// //             // =============================

// //             product.mrp =
// //                 req.body.mrp !== ""
// //                     ? Number(req.body.mrp)
// //                     : 0;


// //             product.price =
// //                 req.body.price !== ""
// //                     ? Number(req.body.price)
// //                     : 0;


// //             // =============================
// //             // STOCK
// //             // =============================

// //             product.stock =
// //                 req.body.stock !== ""
// //                     ? Number(req.body.stock)
// //                     : 0;


// //             // =============================
// //             // PACK / BATCH
// //             // =============================

// //             product.packSize =
// //                 req.body.packSize || "";

// //             product.batchNo =
// //                 req.body.batchNo || "";


// //             // =============================
// //             // DATES
// //             // =============================

// //             product.mfgDate =
// //                 req.body.mfgDate || "";

// //             product.expDate =
// //                 req.body.expDate || "";


// //             // =============================
// //             // COMPOSITION
// //             // =============================

// //             product.composition =
// //                 composition;


// //             // =============================
// //             // PRODUCT DETAILS
// //             // =============================

// //             product.description =
// //                 req.body.description || "";

// //             product.uses =
// //                 req.body.uses || "";

// //             product.benefits =
// //                 req.body.benefits || "";

// //             product.dosage =
// //                 req.body.dosage || "";

// //             product.sideEffects =
// //                 req.body.sideEffects || "";

// //             product.storage =
// //                 req.body.storage || "";


// //             // =============================
// //             // NEW IMAGES
// //             // =============================

// //             if (
// //                 req.files &&
// //                 req.files.length > 0
// //             ) {

// //                 const newImages =
// //                     req.files
// //                         .map(file => file.path)
// //                         .filter(Boolean);


// //                 // Existing images
// //                 let existingImages = [];


// //                 if (
// //                     Array.isArray(product.images)
// //                 ) {

// //                     existingImages =
// //                         product.images.filter(Boolean);

// //                 }


// //                 // Old single image
// //                 if (
// //                     product.image &&
// //                     !existingImages.includes(product.image)
// //                 ) {

// //                     existingImages.push(
// //                         product.image
// //                     );

// //                 }


// //                 // Add new images
// //                 product.images = [
// //                     ...existingImages,
// //                     ...newImages
// //                 ];


// //                 // Main image
// //                 if (!product.image) {

// //                     product.image =
// //                         newImages[0] || "";

// //                 }

// //             }


// //             // =============================
// //             // SAVE PRODUCT
// //             // =============================

// //             await product.save();


// //             console.log(
// //                 "PRODUCT UPDATED SUCCESSFULLY:"
// //             );

// //             console.log(product);


// //             // =============================
// //             // REDIRECT
// //             // =============================

// //             res.redirect(
// //                 "/admin/manage-products"
// //             );


// //         } catch (err) {

// //             console.error(
// //                 "UPDATE PRODUCT ERROR:",
// //                 err
// //             );

// //             res.status(500).send(
// //                 err.message
// //             );

// //         }

// //     }
// // );

// // Delete Product
// router.get("/delete-product/:id", async (req, res) => {
//     try {
//         await Product.findByIdAndDelete(req.params.id);
//         res.redirect("/admin/manage-products");
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err.message);
//     }
// });


// // =============================
// // Doctor Profile Page
// // =============================

// const DoctorProfile = require("../pages/doctorProfile");

// router.get("/doctor/:id", async (req, res) => {
//     try {
//         const doctor = await Doctor.findById(req.params.id);
//         if (!doctor) {
//             return res.send("Doctor Not Found");
//         }
//         res.send(DoctorProfile(doctor));
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err.message);
//     }
// });

// router.post("/create-phone-payment", async (req, res) => {
//     try {
//         const order = await razorpay.orders.create({
//             amount: 100,
//             currency: "INR",
//             receipt: "phone_unlock"
//         });
//         res.json(order);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: err.message });
//     }
// });

// router.post("/verify-phone-payment", async (req, res) => {
//     const { paymentId, orderId, signature, doctorId } = req.body;
//     const body = orderId + "|" + paymentId;

//     const expectedSignature = crypto
//         .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//         .update(body)
//         .digest("hex");

//     if (expectedSignature !== signature) {
//         return res.json({ success: false });
//     }

//     const doctor = await Doctor.findByIdAndUpdate(
//         doctorId,
//         { phoneUnlocked: true },
//         { new: true }
//     );

//     return res.json({
//         success: true,
//         phone: doctor.phone
//     });
// });

// const Consultation = require("../pages/consultation");

// router.get("/consultation/:id", Consultation);

// router.get("/add-government", (req, res) => {
//     res.send(AddGovernment());
// });

// const GovernmentPerson = require("../models/GovernmentPerson");

// router.post(
//     "/add-government",
//     upload.single("image"),
//     async (req, res) => {
//         try {
//             const person = new GovernmentPerson({
//                 name: req.body.name,
//                 position: req.body.position,
//                 department: req.body.department,
//                 phone: req.body.phone,
//                 address: req.body.address,
//                 description: req.body.description,
//                 image: req.file ? req.file.path : ""
//             });

//             await person.save();
//             console.log("Government Person Saved:", person);
//             res.redirect("/admin/add-government");

//         } catch (err) {
//             console.log("ADD GOVERNMENT ERROR:", err);
//             res.status(500).send(err.message);
//         }
//     }
// );

// const ManageGovernment = require("../pages/manageGovernment");

// router.get("/manage-government", async (req, res) => {
//     try {
//         const persons = await GovernmentPerson.find().sort({ createdAt: -1 });
//         res.send(ManageGovernment(persons));
//     } catch (err) {
//         console.log("MANAGE GOVERNMENT ERROR:", err);
//         res.status(500).send(err.message);
//     }
// });


// const ManageServices = require("../pages/services");
// // =============================
// // Manage Services
// // =============================

// router.get("/manage-services", async (req, res) => {
//     try {
//         const services = await Service.find().sort({ createdAt: -1 });
//         res.send(ManageServices(services));
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err.message);
//     }
// });

// // Add Service Page
// router.get("/add-service", (req, res) => {
//     res.send(AddService());
// });

// // Save Service
// router.post(
//     "/add-service",
//     upload.single("image"),
//     async (req, res) => {
//         try {

//             const features = req.body.features
//                 ? req.body.features.split("\n").filter(f => f.trim())
//                 : [];

//             const service = new Service({
//                 title: req.body.title,
//                 description: req.body.description,
//                 features,
//                 image: req.file ? req.file.path : ""
//             });

//             await service.save();

//             res.redirect("/admin/manage-services");

//         } catch (err) {
//             console.log(err);
//             res.status(500).send(err.message);
//         }
//     }
// );

// // Edit Service Page
// router.get("/edit-service/:id", async (req, res) => {
//     try {
//         const service = await Service.findById(req.params.id);

//         if (!service) {
//             return res.send("Service Not Found");
//         }

//         res.send(EditService(service));

//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err.message);
//     }
// });

// // Update Service
// router.post(
//     "/edit-service/:id",
//     upload.single("image"),
//     async (req, res) => {
//         try {

//             const updateData = {
//                 title: req.body.title,
//                 description: req.body.description,
//                 features: req.body.features
//                     ? req.body.features.split("\n").filter(f => f.trim())
//                     : []
//             };

//             if (req.file) {
//                 updateData.image = req.file.path;
//             }

//             await Service.findByIdAndUpdate(req.params.id, updateData);

//             res.redirect("/admin/manage-services");

//         } catch (err) {
//             console.log(err);
//             res.status(500).send(err.message);
//         }
//     }
// );

// // Delete Service
// router.get("/delete-service/:id", async (req, res) => {
//     try {
//         await Service.findByIdAndDelete(req.params.id);
//         res.redirect("/admin/manage-services");
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err.message);
//     }
// });

// const EditProduct = require("../pages/editpages/EditProduct");
// router.get("/edit-product/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).send("Product not found");
//     }

//     res.send(EditProduct(product)); // या res.render("admin/edit-product", { product })
//   } catch (err) {
//     console.log(err);
//     res.status(500).send(err.message);
//   }
// });

// // =============================
// // UPDATE PRODUCT
// // =============================

// // router.post(
// //     "/edit-product/:id",
// //     upload.array("images", 10),
// //     async (req, res) => {

// //         try {

// //             console.log("========== EDIT PRODUCT ==========");
// //             console.log("PRODUCT ID:", req.params.id);
// //             console.log("BODY:", req.body);
// //             console.log("FILES:", req.files);


// //             // =============================
// //             // FIND PRODUCT
// //             // =============================

// //             const product = await Product.findById(
// //                 req.params.id
// //             );

// //             if (!product) {

// //                 return res.status(404).send(
// //                     "Product Not Found"
// //                 );

// //             }


// //             // =============================
// //             // COMPOSITION
// //             // =============================

// //             let composition = [];

// //             if (Array.isArray(req.body.composition)) {

// //                 composition = req.body.composition
// //                     .map(item => String(item).trim())
// //                     .filter(item => item !== "");

// //             } else if (req.body.composition) {

// //                 composition = [
// //                     String(req.body.composition).trim()
// //                 ];

// //             }


// //             // =============================
// //             // BASIC INFORMATION
// //             // =============================

// //             product.name =
// //                 req.body.name || "";

// //             product.brand =
// //                 req.body.brand || "";

// //             product.category =
// //                 req.body.category || "";

// //             product.manufacturer =
// //                 req.body.manufacturer || "";


// //             // =============================
// //             // PRICE
// //             // =============================

// //             product.mrp =
// //                 req.body.mrp !== undefined &&
// //                 req.body.mrp !== ""
// //                     ? Number(req.body.mrp)
// //                     : 0;

// //             product.price =
// //                 req.body.price !== undefined &&
// //                 req.body.price !== ""
// //                     ? Number(req.body.price)
// //                     : 0;


// //             // =============================
// //             // STOCK
// //             // =============================

// //             product.stock =
// //                 req.body.stock !== undefined &&
// //                 req.body.stock !== ""
// //                     ? Number(req.body.stock)
// //                     : 0;


// //             // =============================
// //             // PACK / BATCH
// //             // =============================

// //             product.packSize =
// //                 req.body.packSize || "";

// //             product.batchNo =
// //                 req.body.batchNo || "";


// //             // =============================
// //             // DATES
// //             // =============================

// //             product.mfgDate =
// //                 req.body.mfgDate || "";

// //             product.expDate =
// //                 req.body.expDate || "";


// //             // =============================
// //             // COMPOSITION
// //             // =============================

// //             product.composition =
// //                 composition;


// //             // =============================
// //             // PRODUCT DETAILS
// //             // =============================

// //             product.description =
// //                 req.body.description || "";

// //             product.uses =
// //                 req.body.uses || "";

// //             product.benefits =
// //                 req.body.benefits || "";

// //             product.dosage =
// //                 req.body.dosage || "";

// //             product.sideEffects =
// //                 req.body.sideEffects || "";

// //             product.storage =
// //                 req.body.storage || "";


// //             // =============================
// //             // NEW IMAGES
// //             // =============================

// //             if (
// //                 req.files &&
// //                 req.files.length > 0
// //             ) {

// //                 const newImages =
// //                     req.files
// //                         .map(file => file.path)
// //                         .filter(Boolean);


// //                 // Existing images
// //                 let existingImages = [];

// //                 if (
// //                     Array.isArray(product.images)
// //                 ) {

// //                     existingImages =
// //                         product.images.filter(Boolean);

// //                 }


// //                 // Old single image को भी preserve करें
// //                 if (
// //                     product.image &&
// //                     !existingImages.includes(product.image)
// //                 ) {

// //                     existingImages.push(
// //                         product.image
// //                     );

// //                 }


// //                 // Existing + New Images
// //                 product.images = [
// //                     ...existingImages,
// //                     ...newImages
// //                 ];


// //                 // अगर main image नहीं है
// //                 if (!product.image) {

// //                     product.image =
// //                         newImages[0] || "";

// //                 }

// //             }


// //             // =============================
// //             // SAVE
// //             // =============================

// //             await product.save();


// //             console.log(
// //                 "PRODUCT UPDATED:",
// //                 product._id
// //             );


// //             // =============================
// //             // REDIRECT
// //             // =============================

// //             res.redirect(
// //                 "/admin/manage-products"
// //             );


// //         } catch (err) {

// //             console.error(
// //                 "UPDATE PRODUCT ERROR:",
// //                 err
// //             );

// //             res.status(500).send(
// //                 err.message
// //             );

// //         }

// //     }
// // );




// // =============================
// // UPDATE PRODUCT
// // =============================

// router.post(
//     "/edit-product/:id",

//     upload.fields([
//         {
//             name: "images",
//             maxCount: 10
//         },
//         {
//             name: "videos",
//             maxCount: 5
//         }
//     ]),

//     async (req, res) => {

//         try {

//             console.log("========== EDIT PRODUCT ==========");
//             console.log("PRODUCT ID:", req.params.id);
//             console.log("BODY:", req.body);
//             console.log("FILES:", req.files);


//             // =============================
//             // FIND PRODUCT
//             // =============================

//             const product =
//                 await Product.findById(req.params.id);

//             if (!product) {

//                 return res
//                     .status(404)
//                     .send("Product Not Found");

//             }


//             // =============================
//             // COMPOSITION
//             // =============================

//             let composition = [];

//             if (Array.isArray(req.body.composition)) {

//                 composition =
//                     req.body.composition
//                         .map(item =>
//                             String(item).trim()
//                         )
//                         .filter(Boolean);

//             } else if (req.body.composition) {

//                 composition = [
//                     String(
//                         req.body.composition
//                     ).trim()
//                 ];

//             }


//             // =============================
//             // BASIC INFORMATION
//             // =============================

//             product.name =
//                 req.body.name || "";

//             product.brand =
//                 req.body.brand || "";

//             product.category =
//                 req.body.category || "";

//             product.manufacturer =
//                 req.body.manufacturer || "";


//             // =============================
//             // PRICE
//             // =============================

//             product.mrp =
//                 req.body.mrp !== undefined &&
//                 req.body.mrp !== ""
//                     ? Number(req.body.mrp)
//                     : 0;

//             product.price =
//                 req.body.price !== undefined &&
//                 req.body.price !== ""
//                     ? Number(req.body.price)
//                     : 0;


//             // =============================
//             // STOCK
//             // =============================

//             product.stock =
//                 req.body.stock !== undefined &&
//                 req.body.stock !== ""
//                     ? Number(req.body.stock)
//                     : 0;


//             // =============================
//             // PACK / BATCH
//             // =============================

//             product.packSize =
//                 req.body.packSize || "";

//             product.batchNo =
//                 req.body.batchNo || "";


//             // =============================
//             // DATES
//             // =============================

//             product.mfgDate =
//                 req.body.mfgDate || "";

//             product.expDate =
//                 req.body.expDate || "";


//             // =============================
//             // COMPOSITION
//             // =============================

//             product.composition =
//                 composition;


//             // =============================
//             // PRODUCT DETAILS
//             // =============================

//             product.description =
//                 req.body.description || "";

//             product.uses =
//                 req.body.uses || "";

//             product.benefits =
//                 req.body.benefits || "";

//             product.dosage =
//                 req.body.dosage || "";

//             product.sideEffects =
//                 req.body.sideEffects || "";

//             product.storage =
//                 req.body.storage || "";


//             // =================================================
//             // NEW IMAGES
//             // =================================================

//             const imageFiles =
//                 req.files?.images || [];


//             if (imageFiles.length > 0) {

//                 console.log(
//                     "NEW IMAGE COUNT:",
//                     imageFiles.length
//                 );


//                 const newImages =
//                     imageFiles
//                         .map(file =>
//                             file.path ||
//                             file.secure_url ||
//                             file.url
//                         )
//                         .filter(Boolean);


//                 // Existing images

//                 let existingImages = [];


//                 if (
//                     Array.isArray(product.images)
//                 ) {

//                     existingImages =
//                         product.images
//                             .filter(Boolean);

//                 }


//                 // Old single image preserve

//                 if (
//                     product.image &&
//                     !existingImages.includes(
//                         product.image
//                     )
//                 ) {

//                     existingImages.push(
//                         product.image
//                     );

//                 }


//                 // Existing + New

//                 product.images = [
//                     ...existingImages,
//                     ...newImages
//                 ];


//                 // Main image

//                 if (
//                     !product.image &&
//                     newImages.length
//                 ) {

//                     product.image =
//                         newImages[0];

//                 }

//             }


//             // =================================================
//             // NEW VIDEOS
//             // =================================================

//             const videoFiles =
//                 req.files?.videos || [];


//             if (videoFiles.length > 0) {

//                 console.log(
//                     "NEW VIDEO COUNT:",
//                     videoFiles.length
//                 );


//                 const newVideos =
//                     videoFiles
//                         .map(file =>
//                             file.path ||
//                             file.secure_url ||
//                             file.url
//                         )
//                         .filter(Boolean);


//                 // Existing videos

//                 let existingVideos = [];


//                 if (
//                     Array.isArray(product.videos)
//                 ) {

//                     existingVideos =
//                         product.videos
//                             .filter(Boolean);

//                 }


//                 // Existing + New

//                 product.videos = [
//                     ...existingVideos,
//                     ...newVideos
//                 ];

//             }


//             // =============================
//             // SAVE
//             // =============================

//             await product.save();


//             console.log(
//                 "PRODUCT UPDATED:",
//                 product._id
//             );


//             console.log(
//                 "TOTAL IMAGES:",
//                 product.images?.length || 0
//             );

//             console.log(
//                 "TOTAL VIDEOS:",
//                 product.videos?.length || 0
//             );


//             // =============================
//             // REDIRECT
//             // =============================

//             return res.redirect(
//                 "/admin/manage-products"
//             );


//         } catch (err) {

//             console.error(
//                 "UPDATE PRODUCT ERROR:",
//                 err
//             );


//             return res
//                 .status(500)
//                 .send(
//                     "Product Update Error: " +
//                     err.message
//                 );

//         }

//     }
// );

// module.exports = router;


require("dotenv").config();

const crypto = require("crypto");
const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();


// ======================================================
// RAZORPAY
// ======================================================

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});


// ======================================================
// PAGES
// ======================================================

const dashboard = require("../pages/dashboard");
const AdminLogin = require("../pages/adminLogin");
const DoctorLogin = require("../pages/doctorLogin");
const ManageDoctors = require("../pages/manageDoctors");
const AddDoctor = require("../pages/addpages/addDoctor");
const DoctorDashboard = require("../pages/doctorDashboard");

const ManageProducts = require("../pages/manageProducts");
const AddProduct = require("../pages/addpages/addProduct");
const EditProduct = require("../pages/editpages/EditProduct");

const DoctorProfile = require("../pages/doctorProfile");

const Consultation = require("../pages/consultation");

const ManageGovernment = require("../pages/manageGovernment");

const ManageServices = require("../pages/manageServices");

const AddService =
    require("../pages/addpages/addService");

const EditService =
    require("../pages/editpages/editService");


// ======================================================
// CONTROLLERS
// ======================================================

const { login } = require("../controllers/adminAuth");
const AdminController = require("../controllers/adminController");


// ======================================================
// COMPONENTS
// ======================================================

const AddGovernment =
    require("../views/component/dashboard/addGovernment");


// ======================================================
// MODELS
// ======================================================

const Banner = require("../models/Banner");
const Student = require("../models/Student");
const Service = require("../models/Service");
const Doctor = require("../models/Doctor");
const Product = require("../models/Product");
const GovernmentPerson =
    require("../models/GovernmentPerson");


// ======================================================
// UPLOAD
// ======================================================

const upload = require("../config/upload");


// ======================================================
// ADMIN LOGIN
// ======================================================

router.get("/", (req, res) => {

    res.send(
        AdminLogin()
    );

});


router.post(
    "/login",
    login
);


// ======================================================
// ADMIN DASHBOARD
// ======================================================

router.get(
    "/admindashboard",
    async (req, res) => {

        try {

            const doctorCount =
                await Doctor.countDocuments();

            const studentCount =
                await Student.countDocuments();

            const serviceCount =
                await Service.countDocuments();

            const bannerCount =
                await Banner.countDocuments();


            console.log(
                "DOCTOR COUNT:",
                doctorCount
            );

            console.log(
                "STUDENT COUNT:",
                studentCount
            );

            console.log(
                "SERVICE COUNT:",
                serviceCount
            );

            console.log(
                "BANNER COUNT:",
                bannerCount
            );


            const data = {

                doctorCount,

                studentCount,

                serviceCount,

                bannerCount

            };


            console.log(
                "=== ADMIN ROUTE DATA ==="
            );

            console.log(data);


            return res.send(
                dashboard(data)
            );


        } catch (err) {

            console.error(
                "DASHBOARD ERROR:",
                err
            );

            return res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// BANNER
// ======================================================

router.get(
    "/manage-banners",
    AdminController.manageBanners
);


router.get(
    "/manage-banner",
    AdminController.manageBanners
);


router.get(
    "/add-banner",
    AdminController.addBannerPage
);


router.post(
    "/add-banner",
    upload.single("image"),
    AdminController.saveBanner
);


router.get(
    "/delete-banner/:id",
    AdminController.deleteBanner
);


// ======================================================
// DOCTOR LOGIN PAGE
// ======================================================

router.get(
    "/doctor-login",
    (req, res) => {

        res.send(
            DoctorLogin()
        );

    }
);


// ======================================================
// DOCTOR LOGIN
// ======================================================

router.post(
    "/doctor/login",
    async (req, res) => {

        try {

            const {
                doctorId,
                password
            } = req.body;


            const doctor =
                await Doctor.findOne({
                    doctorId: doctorId
                });


            if (!doctor) {

                return res.send(
                    DoctorLogin(
                        "Doctor Not Found"
                    )
                );

            }


            if (
                doctor.password !== password
            ) {

                return res.send(
                    DoctorLogin(
                        "Wrong Password"
                    )
                );

            }


            // Doctor session

            req.session.doctor =
                doctor;


            console.log(
                "Doctor Session Saved:"
            );

            console.log(
                req.session.doctor
            );


            return res.redirect(
                "/doctor/dashboard"
            );


        } catch (err) {

            console.error(
                "DOCTOR LOGIN ERROR:",
                err
            );


            return res.send(
                "Login Error"
            );

        }

    }
);


// ======================================================
// MANAGE DOCTORS
// ======================================================

router.get(
    "/manage-doctors",
    async (req, res) => {

        try {

            const doctors =
                await Doctor
                    .find()
                    .sort({
                        createdAt: -1
                    });


            res.send(
                ManageDoctors(doctors)
            );


        } catch (err) {

            console.error(err);

            res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// ADD DOCTOR
// ======================================================

router.post(
    "/add-doctor",

    upload.single("image"),

    async (req, res) => {

        try {

            console.log(
                "BODY:",
                req.body
            );

            console.log(
                "FILE:",
                req.file
            );


            // ------------------------------------------
            // CHECK PHONE
            // ------------------------------------------

            const existDoctor =
                await Doctor.findOne({
                    phone: req.body.phone
                });


            if (existDoctor) {

                return res.send(
                    "Phone Number Already Registered"
                );

            }


            // ------------------------------------------
            // GENERATE DOCTOR ID
            // ------------------------------------------

            const lastDoctor =
                await Doctor
                    .findOne()
                    .sort({
                        createdAt: -1
                    });


            let nextNumber = 1001;


            if (
                lastDoctor &&
                lastDoctor.doctorId
            ) {

                const oldNumber =
                    parseInt(
                        lastDoctor.doctorId
                            .replace("DOC", "")
                    );


                if (!isNaN(oldNumber)) {

                    nextNumber =
                        oldNumber + 1;

                }

            }


            const doctorId =
                "DOC" + nextNumber;


            // ------------------------------------------
            // CREATE DOCTOR
            // ------------------------------------------

            const doctor =
                new Doctor({

                    doctorId,

                    name:
                        req.body.name,

                    degree:
                        req.body.qualification,

                    specialization:
                        req.body.speciality,

                    experience:
                        req.body.experience,

                    hospital:
                        req.body.clinic,

                    phone:
                        req.body.phone,

                    email:
                        req.body.email,

                    password:
                        req.body.password,

                    address:
                        req.body.address,

                    description:
                        req.body.description,


                    // Availability

                    availableDay:
                        req.body.availableDay,

                    timeFrom:
                        req.body.timeFrom,

                    timeTo:
                        req.body.timeTo,


                    // Appointment

                    slotDuration:
                        req.body.slotDuration,


                    // Fee

                    fee:
                        req.body.fee,

                    feeType:
                        req.body.feeType,


                    // Image

                    image:
                        req.file
                            ? req.file.path
                            : ""

                });


            await doctor.save();


            console.log(
                "Doctor Saved:",
                doctor
            );


            return res.redirect(
                "/admin/manage-doctors"
            );


        } catch (err) {

            console.error(
                "ADD DOCTOR ERROR:",
                err
            );


            return res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// DELETE DOCTOR
// ======================================================

router.get(
    "/delete-doctor/:id",
    async (req, res) => {

        try {

            await Doctor.findByIdAndDelete(
                req.params.id
            );


            res.redirect(
                "/admin/manage-doctors"
            );


        } catch (err) {

            console.error(err);

            res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// EDIT DOCTOR
// ======================================================

const EditDoctor =
    require("../pages/editpages/editDoctor");


router.get(
    "/edit-doctor/:id",
    async (req, res) => {

        try {

            const doctor =
                await Doctor.findById(
                    req.params.id
                );


            if (!doctor) {

                return res.send(
                    "Doctor Not Found"
                );

            }


            res.send(
                EditDoctor(doctor)
            );


        } catch (err) {

            console.error(err);

            res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// MANAGE PRODUCTS
// ======================================================

router.get(
    "/manage-products",
    async (req, res) => {

        try {

            const products =
                await Product
                    .find()
                    .sort({
                        createdAt: -1
                    });


            res.send(
                ManageProducts(products)
            );


        } catch (err) {

            console.error(
                "MANAGE PRODUCTS ERROR:",
                err
            );


            res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// ADD PRODUCT PAGE
// ======================================================

router.get(
    "/add-product",
    (req, res) => {

        res.send(
            AddProduct()
        );

    }
);


// ======================================================
// ADD PRODUCT
// ======================================================

router.post(
    "/add-product",

    upload.fields([

        {
            name: "image",
            maxCount: 1
        },

        {
            name: "images",
            maxCount: 10
        },

        {
            name: "video",
            maxCount: 1
        }

    ]),

    async (req, res) => {

        try {

            console.log(
                "========== ADD PRODUCT =========="
            );

            console.log(
                "BODY:",
                req.body
            );

            console.log(
                "FILES:",
                req.files
            );


            // ------------------------------------------
            // COMPOSITION
            // ------------------------------------------

            let composition = [];


            if (
                Array.isArray(
                    req.body.composition
                )
            ) {

                composition =
                    req.body.composition
                        .map(item =>
                            String(item).trim()
                        )
                        .filter(Boolean);

            }

            else if (
                req.body.composition
            ) {

                composition = [

                    String(
                        req.body.composition
                    ).trim()

                ];

            }


            // ------------------------------------------
            // MAIN IMAGE
            // ------------------------------------------

            let mainImage = "";


            if (
                req.files &&
                req.files.image &&
                req.files.image.length > 0
            ) {

                mainImage =
                    req.files.image[0].path ||
                    req.files.image[0].secure_url ||
                    req.files.image[0].url ||
                    "";

            }


            // ------------------------------------------
            // MORE IMAGES
            // ------------------------------------------

            let images = [];


            if (
                req.files &&
                req.files.images
            ) {

                images =
                    req.files.images
                        .map(file =>
                            file.path ||
                            file.secure_url ||
                            file.url
                        )
                        .filter(Boolean);

            }


            // ------------------------------------------
            // VIDEO
            // ------------------------------------------

            let video = "";


            if (
                req.files &&
                req.files.video &&
                req.files.video.length > 0
            ) {

                video =
                    req.files.video[0].path ||
                    req.files.video[0].secure_url ||
                    req.files.video[0].url ||
                    "";

            }


            // ------------------------------------------
            // CREATE PRODUCT
            // ------------------------------------------

            const product =
                new Product({

                    name:
                        req.body.name || "",

                    brand:
                        req.body.brand || "",

                    category:
                        req.body.category || "",

                    manufacturer:
                        req.body.manufacturer || "",


                    mrp:
                        req.body.mrp !== undefined &&
                        req.body.mrp !== ""
                            ? Number(req.body.mrp)
                            : 0,


                    price:
                        req.body.price !== undefined &&
                        req.body.price !== ""
                            ? Number(req.body.price)
                            : 0,


                    stock:
                        req.body.stock !== undefined &&
                        req.body.stock !== ""
                            ? Number(req.body.stock)
                            : 0,


                    packSize:
                        req.body.packSize || "",

                    batchNo:
                        req.body.batchNo || "",

                    mfgDate:
                        req.body.mfgDate || "",

                    expDate:
                        req.body.expDate || "",


                    composition,

                    images,

                    image:
                        mainImage,


                    description:
                        req.body.description || "",

                    uses:
                        req.body.uses || "",

                    benefits:
                        req.body.benefits || "",

                    dosage:
                        req.body.dosage || "",

                    sideEffects:
                        req.body.sideEffects || "",

                    storage:
                        req.body.storage || "",


                    // IMPORTANT
                    // Single video field

                    video

                });


            await product.save();


            console.log(
                "PRODUCT SAVED:",
                product._id
            );

            console.log(
                "VIDEO:",
                product.video
            );


            return res.redirect(
                "/admin/manage-products"
            );


        } catch (err) {

            console.error(
                "ADD PRODUCT ERROR:",
                err
            );


            return res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// EDIT PRODUCT PAGE
// ======================================================

router.get(
    "/edit-product/:id",
    async (req, res) => {

        try {

            const product =
                await Product.findById(
                    req.params.id
                );


            if (!product) {

                return res
                    .status(404)
                    .send(
                        "Product Not Found"
                    );

            }


            res.send(
                EditProduct(product)
            );


        } catch (err) {

            console.error(
                "EDIT PRODUCT PAGE ERROR:",
                err
            );


            res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// UPDATE PRODUCT
// ======================================================

// router.post(
//     "/edit-product/:id",

//     upload.fields([

//         {
//             name: "images",
//             maxCount: 10
//         },

//         {
//             name: "video",
//             maxCount: 1
//         }

//     ]),

//     async (req, res) => {

//         try {

//             console.log(
//                 "\n========== EDIT PRODUCT =========="
//             );

//             console.log(
//                 "PRODUCT ID:",
//                 req.params.id
//             );

//             console.log(
//                 "BODY:",
//                 req.body
//             );

//             console.log(
//                 "FILES:",
//                 req.files
//             );


//             // ------------------------------------------
//             // FIND PRODUCT
//             // ------------------------------------------

//             const product =
//                 await Product.findById(
//                     req.params.id
//                 );


//             if (!product) {

//                 return res
//                     .status(404)
//                     .send(
//                         "Product Not Found"
//                     );

//             }


//             // ------------------------------------------
//             // BASIC DETAILS
//             // ------------------------------------------

//             product.name =
//                 req.body.name || "";

//             product.brand =
//                 req.body.brand || "";

//             product.category =
//                 req.body.category || "";

//             product.manufacturer =
//                 req.body.manufacturer || "";


//             // ------------------------------------------
//             // PRICE
//             // ------------------------------------------

//             product.mrp =
//                 req.body.mrp !== undefined &&
//                 req.body.mrp !== ""
//                     ? Number(req.body.mrp)
//                     : 0;


//             product.price =
//                 req.body.price !== undefined &&
//                 req.body.price !== ""
//                     ? Number(req.body.price)
//                     : 0;


//             product.stock =
//                 req.body.stock !== undefined &&
//                 req.body.stock !== ""
//                     ? Number(req.body.stock)
//                     : 0;


//             // ------------------------------------------
//             // MEDICINE DETAILS
//             // ------------------------------------------

//             product.packSize =
//                 req.body.packSize || "";

//             product.batchNo =
//                 req.body.batchNo || "";

//             product.mfgDate =
//                 req.body.mfgDate || "";

//             product.expDate =
//                 req.body.expDate || "";


//             // ------------------------------------------
//             // COMPOSITION
//             // ------------------------------------------

//             let composition = [];


//             if (
//                 Array.isArray(
//                     req.body.composition
//                 )
//             ) {

//                 composition =
//                     req.body.composition
//                         .map(item =>
//                             String(item).trim()
//                         )
//                         .filter(Boolean);

//             }

//             else if (
//                 req.body.composition
//             ) {

//                 composition = [

//                     String(
//                         req.body.composition
//                     ).trim()

//                 ];

//             }


//             product.composition =
//                 composition;


//             // ------------------------------------------
//             // PRODUCT DETAILS
//             // ------------------------------------------

//             product.description =
//                 req.body.description || "";

//             product.uses =
//                 req.body.uses || "";

//             product.benefits =
//                 req.body.benefits || "";

//             product.dosage =
//                 req.body.dosage || "";

//             product.sideEffects =
//                 req.body.sideEffects || "";

//             product.storage =
//                 req.body.storage || "";


//             // =================================================
//             // NEW IMAGES
//             // =================================================

//             const imageFiles =
//                 req.files?.images || [];


//             if (
//                 imageFiles.length > 0
//             ) {

//                 console.log(
//                     "NEW IMAGE COUNT:",
//                     imageFiles.length
//                 );


//                 const newImages =
//                     imageFiles
//                         .map(file =>
//                             file.path ||
//                             file.secure_url ||
//                             file.url
//                         )
//                         .filter(Boolean);


//                 let existingImages = [];


//                 if (
//                     Array.isArray(
//                         product.images
//                     )
//                 ) {

//                     existingImages =
//                         product.images
//                             .filter(Boolean);

//                 }


//                 // Old main image preserve

//                 if (
//                     product.image &&
//                     !existingImages.includes(
//                         product.image
//                     )
//                 ) {

//                     existingImages.push(
//                         product.image
//                     );

//                 }


//                 // Existing + New

//                 product.images = [

//                     ...existingImages,

//                     ...newImages

//                 ];


//                 // Main image

//                 if (
//                     !product.image &&
//                     newImages.length > 0
//                 ) {

//                     product.image =
//                         newImages[0];

//                 }

//             }


//             // =================================================
//             // NEW VIDEO
//             // =================================================

//             const videoFiles =
//                 req.files?.video || [];


//             if (
//                 videoFiles.length > 0
//             ) {

//                 console.log(
//                     "NEW VIDEO COUNT:",
//                     videoFiles.length
//                 );


//                 const newVideo =
//                     videoFiles[0].path ||
//                     videoFiles[0].secure_url ||
//                     videoFiles[0].url;


//                 console.log(
//                     "NEW VIDEO URL:",
//                     newVideo
//                 );


//                 if (newVideo) {

//                     // IMPORTANT:
//                     // Schema field = video

//                     product.video =
//                         newVideo;

//                 }

//             }

//             else {

//                 console.log(
//                     "NO NEW VIDEO - OLD VIDEO KEPT"
//                 );

//             }


//             // =================================================
//             // SAVE
//             // =================================================

//             await product.save();


//             // =================================================
//             // FINAL LOG
//             // =================================================

//             console.log(
//                 "================================="
//             );

//             console.log(
//                 "PRODUCT UPDATED:",
//                 product._id
//             );

//             console.log(
//                 "TOTAL IMAGES:",
//                 product.images?.length || 0
//             );

//             console.log(
//                 "SAVED VIDEO:",
//                 product.video
//             );

//             console.log(
//                 "================================="
//             );


//             return res.redirect(
//                 "/admin/manage-products"
//             );


//         } catch (err) {

//             console.error(
//                 "UPDATE PRODUCT ERROR:",
//                 err
//             );


//             return res
//                 .status(500)
//                 .send(
//                     "Product Update Error: " +
//                     err.message
//                 );

//         }

//     }
// );


router.post(
    "/edit-product/:id",
    upload.fields([
        {
            name: "images",
            maxCount: 10
        },
        {
            name: "videos",
            maxCount: 5
        }
    ]),
    async (req, res) => {

        try {

            const product =
                await Product.findById(
                    req.params.id
                );

            if (!product) {

                return res
                    .status(404)
                    .send("Product not found");
            }


            // ==========================================
            // BASIC DETAILS
            // ==========================================

            product.name =
                req.body.name || product.name;

            product.brand =
                req.body.brand || "";

            product.category =
                req.body.category || "";

            product.manufacturer =
                req.body.manufacturer || "";

            product.mrp =
                Number(req.body.mrp || 0);

            product.price =
                Number(req.body.price || 0);

            product.discountPercentage =
                Number(
                    req.body.discountPercentage || 0
                );

            product.stock =
                Number(req.body.stock || 0);

            product.packSize =
                req.body.packSize || "";

            product.batchNumber =
                req.body.batchNumber || "";

            product.manufacturingDate =
                req.body.manufacturingDate || null;

            product.expiryDate =
                req.body.expiryDate || null;


            // ==========================================
            // COMPOSITION
            // ==========================================

            let composition =
                req.body.composition || [];

            if (!Array.isArray(composition)) {
                composition = [composition];
            }

            product.composition =
                composition
                    .map(item =>
                        String(item || "").trim()
                    )
                    .filter(Boolean);


            // ==========================================
            // PRODUCT DETAILS
            // ==========================================

            product.uses =
                req.body.uses || "";

            product.benefits =
                req.body.benefits || "";

            product.dosage =
                req.body.dosage || "";

            product.sideEffects =
                req.body.sideEffects || "";

            product.storage =
                req.body.storage || "";

            product.description =
                req.body.description || "";


            // ==========================================
            // REMOVE SELECTED IMAGES
            // ==========================================

            let removeImages =
                req.body.removeImages || [];

            if (!Array.isArray(removeImages)) {
                removeImages = [removeImages];
            }

            const removeImageSet =
                new Set(
                    removeImages
                        .map(image =>
                            String(image || "").trim()
                        )
                        .filter(Boolean)
                );


            const getImageURL = image => {

                if (!image) {
                    return "";
                }

                if (typeof image === "object") {

                    return String(
                        image.url ||
                        image.secure_url ||
                        image.path ||
                        ""
                    ).trim();
                }

                return String(image).trim();
            };


            const existingImages =
                Array.isArray(product.images)
                    ? product.images
                    : [];


            product.images =
                existingImages.filter(image => {

                    return !removeImageSet.has(
                        getImageURL(image)
                    );
                });


            const currentMainImage =
                getImageURL(product.image);


            if (
                currentMainImage &&
                removeImageSet.has(
                    currentMainImage
                )
            ) {

                product.image =
                    product.images.length
                        ? getImageURL(
                            product.images[0]
                        )
                        : "";
            }


            // ==========================================
            // ADD NEW UPLOADED IMAGES
            // ==========================================

            const newImageFiles =
                req.files?.images || [];

            const newImages =
                newImageFiles
                    .map(file =>
                        file.path ||
                        file.secure_url ||
                        file.location ||
                        ""
                    )
                    .filter(Boolean);


            product.images = [
                ...product.images,
                ...newImages
            ];


            if (
                !product.image &&
                product.images.length
            ) {

                product.image =
                    getImageURL(
                        product.images[0]
                    );
            }


            // ==========================================
            // VIDEO URL
            // ==========================================

            product.videoUrl =
                req.body.videoUrl || "";


            // ==========================================
            // SAVE
            // ==========================================

            await product.save();

            return res.redirect(
                "/admin/manage-products"
            );

        }
        catch (error) {

            console.error(
                "EDIT PRODUCT ERROR:",
                error
            );

            return res
                .status(500)
                .send(
                    "Unable to update product: " +
                    error.message
                );
        }
    }
);


// ======================================================
// DELETE PRODUCT
// ======================================================

router.get(
    "/delete-product/:id",
    async (req, res) => {

        try {

            await Product.findByIdAndDelete(
                req.params.id
            );


            res.redirect(
                "/admin/manage-products"
            );


        } catch (err) {

            console.error(err);

            res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// DOCTOR PROFILE
// ======================================================

router.get(
    "/doctor/:id",
    async (req, res) => {

        try {

            const doctor =
                await Doctor.findById(
                    req.params.id
                );


            if (!doctor) {

                return res.send(
                    "Doctor Not Found"
                );

            }


            res.send(
                DoctorProfile(doctor)
            );


        } catch (err) {

            console.error(err);

            res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// CREATE PHONE PAYMENT
// ======================================================

router.post(
    "/create-phone-payment",
    async (req, res) => {

        try {

            const order =
                await razorpay.orders.create({

                    amount: 100,

                    currency: "INR",

                    receipt:
                        "phone_unlock_" +
                        Date.now()

                });


            res.json(order);


        } catch (err) {

            console.error(
                "RAZORPAY ERROR:",
                err
            );


            res
                .status(500)
                .json({
                    error: err.message
                });

        }

    }
);


// ======================================================
// VERIFY PHONE PAYMENT
// ======================================================

router.post(
    "/verify-phone-payment",
    async (req, res) => {

        try {

            const {
                paymentId,
                orderId,
                signature,
                doctorId
            } = req.body;


            const body =
                orderId +
                "|" +
                paymentId;


            const expectedSignature =
                crypto
                    .createHmac(
                        "sha256",
                        process.env.RAZORPAY_KEY_SECRET
                    )
                    .update(body)
                    .digest("hex");


            if (
                expectedSignature !==
                signature
            ) {

                return res.json({
                    success: false,
                    message:
                        "Invalid Payment Signature"
                });

            }


            const doctor =
                await Doctor.findByIdAndUpdate(

                    doctorId,

                    {
                        phoneUnlocked:
                            true
                    },

                    {
                        new: true
                    }

                );


            if (!doctor) {

                return res.json({

                    success: false,

                    message:
                        "Doctor Not Found"

                });

            }


            return res.json({

                success: true,

                phone:
                    doctor.phone

            });


        } catch (err) {

            console.error(
                "VERIFY PAYMENT ERROR:",
                err
            );


            return res.status(500).json({

                success: false,

                message:
                    err.message

            });

        }

    }
);


// ======================================================
// CONSULTATION
// ======================================================

router.get(
    "/consultation/:id",
    Consultation
);


// ======================================================
// ADD GOVERNMENT
// ======================================================

router.get(
    "/add-government",
    (req, res) => {

        res.send(
            AddGovernment()
        );

    }
);


router.post(
    "/add-government",

    upload.single("image"),

    async (req, res) => {

        try {

            const person =
                new GovernmentPerson({

                    name:
                        req.body.name,

                    position:
                        req.body.position,

                    department:
                        req.body.department,

                    phone:
                        req.body.phone,

                    address:
                        req.body.address,

                    description:
                        req.body.description,

                    image:
                        req.file
                            ? req.file.path
                            : ""

                });


            await person.save();


            console.log(
                "Government Person Saved:",
                person
            );


            res.redirect(
                "/admin/add-government"
            );


        } catch (err) {

            console.error(
                "ADD GOVERNMENT ERROR:",
                err
            );


            res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// MANAGE GOVERNMENT
// ======================================================

// router.get(
//     "/manage-government",
//     async (req, res) => {

//         try {

//             const persons =
//                 await GovernmentPerson
//                     .find()
//                     .sort({
//                         createdAt: -1
//                     });


//             res.send(
//                 ManageGovernment(persons)
//             );


//         } catch (err) {

//             console.error(
//                 "MANAGE GOVERNMENT ERROR:",
//                 err
//             );


//             res
//                 .status(500)
//                 .send(err.message);

//         }

//     }
// );

router.get(
    "/manage-government",
    async (req, res) => {

        try {

            const data =
                await GovernmentPerson
                    .find()
                    .sort({
                        createdAt: -1
                    })
                    .lean();


            // ==========================================
            // ADD EDIT + DELETE URL
            // ==========================================

            const persons = data.map(person => {

                return {
                    ...person,

                    editUrl:
                        `/admin/edit-government/${person._id}`,

                    deleteUrl:
                        `/admin/delete-government/${person._id}`
                };

            });


            res.send(
                ManageGovernment(persons)
            );


        } catch (err) {

            console.error(
                "MANAGE GOVERNMENT ERROR:",
                err
            );


            res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// MANAGE SERVICES
// ======================================================

router.get(
    "/manage-services",
    async (req, res) => {

        try {

            const services =
                await Service
                    .find()
                    .sort({
                        createdAt: -1
                    });


            res.send(
                ManageServices(services)
            );


        } catch (err) {

            console.error(err);

            res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// ADD SERVICE
// ======================================================

router.get(
    "/add-service",
    (req, res) => {

        res.send(
            AddService()
        );

    }
);


// ======================================================
// SAVE SERVICE
// ======================================================

router.post(
    "/add-service",

    upload.single("image"),

    async (req, res) => {

        try {

            let features = [];

            if (Array.isArray(req.body.features)) {

                features = req.body.features
                    .map(f => String(f).trim())
                    .filter(Boolean);

            } else if (req.body.features) {

                features = [
                    String(req.body.features).trim()
                ];

            }


            const service =
                new Service({

                    title:
                        req.body.title,

                    description:
                        req.body.description,

                    link:
                        String(req.body.link || "").trim(),

                    features,

                    image:
                        req.file
                            ? req.file.path
                            : ""

                });


            await service.save();


            res.redirect(
                "/admin/manage-services"
            );


        } catch (err) {

            console.error(
                "ADD SERVICE ERROR:",
                err
            );


            res
                .status(500)
                .send(err.message);

        }

    }
);






// ======================================================
// EDIT SERVICE
// ======================================================

router.get(
    "/edit-service/:id",
    async (req, res) => {

        try {

            const service =
                await Service.findById(
                    req.params.id
                );


            if (!service) {

                return res.send(
                    "Service Not Found"
                );

            }


            res.send(
                EditService(service)
            );


        } catch (err) {

            console.error(err);

            res
                .status(500)
                .send(err.message);

        }

    }
);


// ======================================================
// UPDATE SERVICE
// ======================================================

router.post(
    "/edit-service/:id",

    upload.single("image"),

    async (req, res) => {

        try {

            let features = [];

            if (Array.isArray(req.body.features)) {

                features = req.body.features
                    .map(f => String(f).trim())
                    .filter(Boolean);

            } else if (req.body.features) {

                features = [
                    String(req.body.features).trim()
                ];

            }


            const updateData = {

                title:
                    req.body.title,

                description:
                    req.body.description,

                link:
                    String(req.body.link || "").trim(),

                features

            };


            if (req.file) {

                updateData.image =
                    req.file.path;

            }


            await Service.findByIdAndUpdate(

                req.params.id,

                updateData,

                {
                    new: true
                }

            );


            res.redirect(
                "/admin/manage-services"
            );


        } catch (err) {

            console.error(
                "UPDATE SERVICE ERROR:",
                err
            );


            res
                .status(500)
                .send(err.message);

        }

    }
);

// ======================================================
// DELETE SERVICE
// ======================================================

router.get(
    "/delete-service/:id",
    async (req, res) => {

        try {

            await Service.findByIdAndDelete(
                req.params.id
            );


            res.redirect(
                "/admin/manage-services"
            );


        } catch (err) {

            console.error(err);

            res
                .status(500)
                .send(err.message);

        }

    }
);

const StudentRegistration = require("../pages/StudentRegistration");

router.get("/student-registration", (req, res) => {
    res.send(
        StudentRegistration()
    );
});





router.post(
    "/student-registration",
    async (req, res) => {

        try {
             const body = req.body || {};   // ✅ ADD THIS
            const {
                name,
                phone,
                age,
                className,
                password,
                plan,
                amount
            } = req.body;


            const mobile =
                String(phone || "").trim();


            const existingStudent =
                await Student.findOne({
                    mobile: mobile
                });


            if (existingStudent) {

                return res.send(`
                    <h2>
                        This phone number is already registered.
                    </h2>

                    <a href="/admin/student-registration">
                        ← Back to Registration
                    </a>
                `);

            }


            let nextNumber = 1001;
            let rollNo = "";
            let rollExists = true;


            while (rollExists) {

                rollNo = "GSI" + nextNumber;

                const foundStudent =
                    await Student.findOne({
                        rollNo: rollNo
                    });

                if (!foundStudent) {
                    rollExists = false;
                } else {
                    nextNumber++;
                }

            }


            const student = new Student({

                name: String(name || "").trim(),

                mobile: mobile,

                age: Number(age),

                course: String(className || "").trim(),

                rollNo: rollNo,

                password: password,

                plan: plan,

                amount: Number(amount),

                paymentStatus: "Pending"

            });

            // =======================================
// ADD STUDENT PAYMENT HISTORY
// =======================================

const paymentMonthRaw =
    String(
        body.paymentMonth || ""
    ).trim();


const paymentAmount =
    Number(
        body.paymentAmount || 0
    );


const paymentNote =
    String(
        body.paymentNote || ""
    ).trim();


let paymentMonth =
    "";


if (paymentMonthRaw) {

    const parts =
        paymentMonthRaw.split("-");

    const year =
        Number(parts[0]);

    const monthNumber =
        Number(parts[1]);


    if (
        year &&
        monthNumber >= 1 &&
        monthNumber <= 12
    ) {

        const monthNames = [

            "January",

            "February",

            "March",

            "April",

            "May",

            "June",

            "July",

            "August",

            "September",

            "October",

            "November",

            "December"

        ];


        paymentMonth =
            monthNames[
                monthNumber - 1
            ] +
            " " +
            year;

    }

}


let paidDate =
    new Date();


if (body.paidDate) {

    const selectedDate =
        new Date(
            body.paidDate +
            "T00:00:00"
        );


    if (
        !Number.isNaN(
            selectedDate.getTime()
        )
    ) {

        paidDate =
            selectedDate;

    }

}


// Add only when month + amount entered
if (
    paymentMonth &&
    paymentAmount > 0
) {


    if (
        !Array.isArray(
            student.paymentHistory
        )
    ) {

        student.paymentHistory =
            [];

    }


    student.paymentHistory.push({

        month:
            paymentMonth,

        amount:
            paymentAmount,

        paidDate:
            paidDate,

        note:
            paymentNote

    });


    // Latest payment successful
    student.paymentStatus =
        "Success";


    console.log(
        "✅ STUDENT PAYMENT ADDED:",
        {
            student:
                student.name,

            month:
                paymentMonth,

            amount:
                paymentAmount,

            paidDate:
                paidDate
        }
    );

}


            await student.save();


            res.send(`
                <!DOCTYPE html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">

                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    >

                    <title>Registration Successful</title>
                </head>

                <body style="
                    font-family:Arial;
                    text-align:center;
                    padding:50px;
                    background:#f0fdf4;
                ">

                    <h1 style="color:#166534;">
                        Registration Successful ✓
                    </h1>

                    <h2>
                        Welcome, ${student.name}
                    </h2>

                    <p>
                        Your unique Roll Number is:
                    </p>

                    <h1 style="color:#1d4ed8;">
                        ${student.rollNo}
                    </h1>

                    <p>
                        Selected Plan: ${student.plan}
                    </p>

                    <p>
                        Amount: ₹${student.amount}
                    </p>

                    <p>
                        Payment Status: ${student.paymentStatus}
                    </p>

                    <a
                        href="/student-login"
                        style="
                            display:inline-block;
                            margin-top:20px;
                            padding:12px 20px;
                            border-radius:8px;
                            color:white;
                            background:#2563eb;
                            text-decoration:none;
                        "
                    >
                        Go to Student Login
                    </a>

                </body>

                </html>
            `);

        } catch (error) {

            console.error(
                "STUDENT REGISTRATION ERROR:",
                error
            );

            res.status(500).send(
                "Student registration failed: " +
                error.message
            );

        }

    }
);


const ManageStudents = require("../pages/manageStudents");

router.get(
    "/manage-students",
    async (req, res) => {

        try {

            const students =
                await Student.find()
                    .sort({
                        createdAt: -1
                    })
                    .lean();

            res.send(
                ManageStudents(students)
            );

        } catch (error) {

            console.error(
                "MANAGE STUDENTS ERROR:",
                error
            );

            res.status(500).send(
                error.message
            );

        }

    }
);


router.post(
    "/delete-student/:id",
    async (req, res) => {

        try {

            await Student.findByIdAndDelete(
                req.params.id
            );

            res.redirect(
                "/admin/manage-students"
            );

        } catch (error) {

            res.status(500).send(
                error.message
            );

        }

    }
);

const EditStudent = require("../pages/editpages/editStudent");
router.get(
    "/edit-student/:id",
    async (req, res) => {

        try {

            const student =
                await Student.findById(
                    req.params.id
                ).lean();

            if (!student) {
                return res.send(
                    "Student not found"
                );
            }

            res.send(
                EditStudent(student)
            );

        } catch (error) {

            console.error(
                "EDIT STUDENT PAGE ERROR:",
                error
            );

            res.status(500).send(
                error.message
            );

        }

    }
);


//    router.post(
//     "/edit-student/:id",

//     // Multipart form और image दोनों parse होंगे
//     upload.single("image"),

//     async (req, res) => {

//         try {

//             const body =
//                 req.body || {};


//             console.log(
//                 "STUDENT UPDATE BODY:",
//                 body
//             );

//             console.log(
//                 "STUDENT UPDATE IMAGE:",
//                 req.file || "No new image"
//             );


//             const student =
//                 await Student.findById(
//                     req.params.id
//                 );


//             if (!student) {

//                 return res
//                     .status(404)
//                     .send(
//                         "Student not found."
//                     );

//             }


//             const name =
//                 String(
//                     body.name || ""
//                 ).trim();

//             const mobile =
//                 String(
//                     body.mobile || ""
//                 ).trim();

//             const course =
//                 String(
//                     body.course || ""
//                 ).trim();

//             const password =
//                 String(
//                     body.password || ""
//                 ).trim();


//             if (!name) {

//                 return res
//                     .status(400)
//                     .send(
//                         "Student name is required."
//                     );

//             }


//             if (!mobile) {

//                 return res
//                     .status(400)
//                     .send(
//                         "Mobile number is required."
//                     );

//             }


//             if (!course) {

//                 return res
//                     .status(400)
//                     .send(
//                         "Class or course is required."
//                     );

//             }


//             student.name = name;
//             student.mobile = mobile;
//             student.course = course;


//             if (
//                 body.age !== undefined &&
//                 body.age !== ""
//             ) {

//                 const age =
//                     Number(body.age);

//                 if (!Number.isNaN(age)) {
//                     student.age = age;
//                 }

//             }


//             if (body.plan) {

//                 student.plan =
//                     String(body.plan).trim();

//             }


//             if (
//                 body.amount !== undefined &&
//                 body.amount !== ""
//             ) {

//                 const amount =
//                     Number(body.amount);

//                 if (!Number.isNaN(amount)) {
//                     student.amount = amount;
//                 }

//             }


//             if (body.paymentStatus) {

//                 student.paymentStatus =
//                     body.paymentStatus === "Success"
//                         ? "Success"
//                         : "Pending";

//             }


//             // खाली password भेजने पर पुराना password रहेगा
//             if (password) {

//                 student.password =
//                     password;

//             }


//             // नई image चुनी गई हो तभी image बदलेगी
//             if (req.file) {

//     student.image =
//         req.file.path ||
//         (
//             "/uploads/students/" +
//             req.file.filename
//         );

// }


//             await student.save();


//             console.log(
//                 "✅ STUDENT UPDATED:",
//                 student._id
//             );


//             return res.redirect(
//                 "/admin/manage-students"
//             );

//         } catch (error) {

//             console.error(
//                 "UPDATE STUDENT ERROR:",
//                 error
//             );

//             return res
//                 .status(500)
//                 .send(
//                     "Student update failed: " +
//                     error.message
//                 );

//         }

//     }
// );


router.post(
    "/edit-student/:id",

    upload.single("image"),

    async (req, res) => {

        try {

            const body =
                req.body || {};


            console.log(
                "STUDENT UPDATE BODY:",
                body
            );


            const student =
                await Student.findById(
                    req.params.id
                );


            if (!student) {

                return res
                    .status(404)
                    .send(
                        "Student not found."
                    );

            }


            // =====================================
            // BASIC INFORMATION
            // =====================================

            const name =
                String(
                    body.name || ""
                ).trim();


            const mobile =
                String(
                    body.mobile || ""
                ).trim();


            const course =
                String(
                    body.course || ""
                ).trim();


            const password =
                String(
                    body.password || ""
                ).trim();


            if (!name) {

                return res
                    .status(400)
                    .send(
                        "Student name is required."
                    );

            }


            if (!mobile) {

                return res
                    .status(400)
                    .send(
                        "Mobile number is required."
                    );

            }


            if (!course) {

                return res
                    .status(400)
                    .send(
                        "Class or course is required."
                    );

            }


            student.name =
                name;

            student.mobile =
                mobile;

            student.course =
                course;


            // =====================================
            // AGE
            // =====================================

            if (
                body.age !== undefined &&
                body.age !== ""
            ) {

                const age =
                    Number(
                        body.age
                    );

                if (
                    !Number.isNaN(
                        age
                    )
                ) {

                    student.age =
                        age;

                }

            }


            // =====================================
            // PLAN
            // =====================================

            if (body.plan) {

                student.plan =
                    String(
                        body.plan
                    ).trim();

            }


            // =====================================
            // PLAN AMOUNT
            // =====================================

            if (
                body.amount !== undefined &&
                body.amount !== ""
            ) {

                const amount =
                    Number(
                        body.amount
                    );

                if (
                    !Number.isNaN(
                        amount
                    )
                ) {

                    student.amount =
                        amount;

                }

            }


            // =====================================
            // PAYMENT STATUS
            // =====================================

            if (
                body.paymentStatus
            ) {

                student.paymentStatus =
                    body.paymentStatus ===
                    "Success"
                        ? "Success"
                        : "Pending";

            }


            // =====================================
            // PASSWORD
            // =====================================

            if (password) {

                student.password =
                    password;

            }


            // =====================================
            // IMAGE
            // =====================================

            if (req.file) {

                student.image =
                    req.file.path ||
                    (
                        "/uploads/students/" +
                        req.file.filename
                    );

            }


            // =====================================
            // PAYMENT HISTORY
            // =====================================

            const paymentMonthRaw =
                String(
                    body.paymentMonth || ""
                ).trim();


            const paymentAmount =
                Number(
                    body.paymentAmount || 0
                );


            const paymentNote =
                String(
                    body.paymentNote || ""
                ).trim();


            let paymentMonth =
                "";


            if (
                paymentMonthRaw
            ) {

                const parts =
                    paymentMonthRaw
                        .split("-");


                const year =
                    Number(
                        parts[0]
                    );


                const monthNumber =
                    Number(
                        parts[1]
                    );


                const monthNames = [

                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"

                ];


                if (
                    year &&
                    monthNumber >= 1 &&
                    monthNumber <= 12
                ) {

                    paymentMonth =
                        monthNames[
                            monthNumber - 1
                        ] +
                        " " +
                        year;

                }

            }


            let paidDate =
                new Date();


            if (
                body.paidDate
            ) {

                const selectedDate =
                    new Date(
                        body.paidDate +
                        "T00:00:00"
                    );


                if (
                    !Number.isNaN(
                        selectedDate.getTime()
                    )
                ) {

                    paidDate =
                        selectedDate;

                }

            }


            // =====================================
            // ADD PAYMENT ONLY IF ENTERED
            // =====================================

            if (
                paymentMonth &&
                paymentAmount > 0
            ) {

                if (
                    !Array.isArray(
                        student.paymentHistory
                    )
                ) {

                    student.paymentHistory =
                        [];

                }


                student.paymentHistory.push({

                    month:
                        paymentMonth,

                    amount:
                        paymentAmount,

                    paidDate:
                        paidDate,

                    note:
                        paymentNote

                });


                student.paymentStatus =
                    "Success";


                console.log(
                    "✅ STUDENT PAYMENT ADDED:",
                    {
                        student:
                            student.name,

                        month:
                            paymentMonth,

                        amount:
                            paymentAmount,

                        paidDate:
                            paidDate
                    }
                );

            }


            // =====================================
            // SAVE STUDENT
            // =====================================

            await student.save();


            console.log(
                "✅ STUDENT UPDATED:",
                student._id
            );


            return res.redirect(
                "/admin/manage-students"
            );


        } catch (error) {

            console.error(
                "UPDATE STUDENT ERROR:",
                error
            );


            return res
                .status(500)
                .send(
                    "Student update failed: " +
                    error.message
                );

        }

    }
);

router.post(
    "/update-student-payment/:id",
    async (req, res) => {

        try {

            const paymentStatus =
                req.body.paymentStatus === "Success"
                    ? "Success"
                    : "Pending";


            await Student.findByIdAndUpdate(
                req.params.id,
                {
                    paymentStatus: paymentStatus
                }
            );


            res.redirect(
                "/admin/manage-students"
            );

        } catch (error) {

            console.error(
                "PAYMENT STATUS UPDATE ERROR:",
                error
            );

            res.status(500).send(
                error.message
            );

        }

    }
);


const StudentLogin = require("../pages/studentLogin");
const StudentInformation = require("../pages/studentInformation");

router.get(
    "/student-login",
    (req, res) => {

        return res.send(
            StudentLogin()
        );

    }
);

// router.post(
//     "/student-login",
//     async (req, res) => {

//         const rollNo =
//             String(req.body.rollNo || "")
//                 .trim()
//                 .toUpperCase();

//         const student =
//             await Student.findOne({
//                 rollNo: rollNo
//             });

//         if (!student) {
//             return res.send(
//                 StudentLogin("Roll Number not found.")
//             );
//         }

//         if (student.password !== req.body.password) {
//             return res.send(
//                 StudentLogin("Wrong password.")
//             );
//         }

//         res.send(
//     StudentInformation(student)
// );

//     }
// );

router.post(
    "/student-login",
    async (req, res) => {

        try {

            const rollNo =
                String(
                    req.body.rollNo || ""
                )
                .trim()
                .toUpperCase();


            const password =
                String(
                    req.body.password || ""
                ).trim();


            const student =
                await Student.findOne({
                    rollNo: rollNo
                });


            if (!student) {

                return res.send(
                    StudentLogin(
                        "Roll Number not found."
                    )
                );

            }


            if (
                String(student.password || "") !==
                password
            ) {

                return res.send(
                    StudentLogin(
                        "Wrong password."
                    )
                );

            }


            req.session.studentId =
                String(student._id);


            return res.send(
                StudentInformation(
                    student
                )
            );


        } catch (error) {

            console.error(
                "STUDENT LOGIN ERROR:",
                error
            );


            return res
                .status(500)
                .send(
                    "Student Login Error: " +
                    error.message
                );

        }

    }
);



router.get(
    "/student-logout",
    (req, res) => {

        if (req.session) {

            req.session.destroy(
                () => {

                    return res.redirect(
                        "/admin/student-login"
                    );

                }
            );

            return;

        }

        return res.redirect(
            "/admin/student-login"
        );

    }
);



const DoctorOrder = require("../models/DoctorOrder");
const DoctorOrders = require("../pages/admin/DoctorOrders");




// ======================================================
// PREMIUM DOCTOR ORDERS
// ======================================================
// ======================================================
// INVOICE PDF
// ======================================================
router.get("/doctor-order/:orderId/invoice", async (req, res) => {
    try {
        const order = await DoctorOrder.findById(
            req.params.orderId
        ).lean();

        if (!order) {
            return res.status(404).send("Order not found");
        }

        const doctor = await Doctor.findById(
            order.doctorId
        ).lean();

        const items = Array.isArray(order.items)
            ? order.items
            : [];

        // Product database से packSize: 5ml, 100gm, 200ml आदि
        const productIds = items
            .map((item) => item.productId)
            .filter(Boolean);

        const products = productIds.length
            ? await Product.find({
                _id: { $in: productIds }
            }).lean()
            : [];

        const productMap = new Map(
            products.map((product) => [
                String(product._id),
                product
            ])
        );

        const billNo = "D" + String(
            order.orderId || order._id
        )
            .slice(-6)
            .toUpperCase();

        const totalQuantity = items.reduce((sum, item) => {
            return sum + (
                Number(item.quantity ?? item.qty ?? 1) || 1
            );
        }, 0);

        const grandTotal = Number(
            order.totalAmount || order.total || 0
        );

        const date = order.createdAt
            ? new Date(order.createdAt)
                .toLocaleDateString("en-GB")
            : "-";

        const doctorName = String(
            doctor?.name || "Doctor"
        )
            .replace(/^Dr\.?\s*/i, "")
            .trim();

        res.setHeader("Content-Type", "application/pdf");

        res.setHeader(
            "Content-Disposition",
            `attachment; filename=Estimate-${billNo}.pdf`
        );

        const pdf = new PDFDocument({
            size: "A5",
            layout: "landscape",
            margin: 0
        });

        pdf.pipe(res);

        const pageWidth = pdf.page.width;
        const pageHeight = pdf.page.height;

        const left = 20;
        const right = pageWidth - 20;
        const rightColumn = 310;

        pdf.lineWidth(1)
            .strokeColor("#000")
            .rect(5, 5, pageWidth - 10, pageHeight - 10)
            .stroke();

        function borderLine() {
            pdf.strokeColor("#000")
                .lineWidth(0.6)
                .moveTo(left, pdf.y)
                .lineTo(right, pdf.y)
                .stroke();

            pdf.y += 5;
        }

        pdf.y = 16;

        pdf.font("Helvetica-Bold")
            .fontSize(16)
            .fillColor("#0d6efd")
            .text("GLOBAL HEALTHCARE", {
                align: "center"
            });

        pdf.font("Helvetica-Bold")
            .fontSize(8)
            .fillColor("#198754")
            .text("SAFE & SECURE Healthcare", {
                align: "center"
            });

        pdf.font("Helvetica-Bold")
            .fontSize(10)
            .fillColor("#000")
            .text("ROUGH ESTIMATE", {
                align: "center"
            });

        pdf.y += 7;
        borderLine();

        const detailsY = pdf.y + 3;

        pdf.font("Helvetica-Bold")
            .fontSize(8.5)
            .fillColor("#000");

        pdf.text(
            `DOCTOR : Dr. ${doctorName}`,
            left,
            detailsY
        );

        pdf.text(
            `SPECIALIZATION : ${doctor?.specialization || "-"}`,
            left,
            detailsY + 13
        );

        pdf.text(
            `DOCTOR ID : ${doctor?.doctorId || "-"}`,
            left,
            detailsY + 26
        );

        pdf.text(
            `PHONE : ${doctor?.phone || "-"}`,
            left,
            detailsY + 39
        );

        pdf.text(
            `BILL NO : ${billNo}`,
            rightColumn,
            detailsY
        );

        pdf.text(
            `DATE : ${date}`,
            rightColumn,
            detailsY + 13
        );

        pdf.text(
            "TYPE : CREDIT",
            rightColumn,
            detailsY + 26
        );

        pdf.text(
            `PAYMENT : ${String(
                order.paymentMethod || "COD"
            ).toUpperCase()}`,
            rightColumn,
            detailsY + 39
        );

        pdf.y = detailsY + 56;
        borderLine();

        const xSL = 25;
        const xProduct = 50;
        const xQty = 330;
        const xRate = 380;
        const xAmount = 470;

        const tableY = pdf.y + 2;

        pdf.font("Helvetica-Bold")
            .fontSize(8)
            .fillColor("#000");

        pdf.text("SL", xSL, tableY);
        pdf.text("PRODUCT DESCRIPTION", xProduct, tableY);
        pdf.text("QTY", xQty, tableY);
        pdf.text("RATE", xRate, tableY);
        pdf.text("AMOUNT", xAmount, tableY);

        pdf.y = tableY + 14;
        borderLine();

        pdf.font("Helvetica")
            .fontSize(8)
            .fillColor("#000");

        items.forEach((item, index) => {
            const quantity = Number(
                item.quantity ?? item.qty ?? 1
            ) || 1;

            const rate = Number(
                item.price || item.rate || 0
            );

            const amount = quantity * rate;

            const product = productMap.get(
                String(item.productId || "")
            );

            const productName = String(
                item.name ||
                item.productName ||
                product?.name ||
                "Product"
            ).trim();

            const packSize = String(
                item.packSize ||
                item.size ||
                item.unit ||
                product?.packSize ||
                product?.size ||
                product?.unit ||
                ""
            ).trim();

            // Moxifit Eye Drops (5ml)
            const displayName = packSize
                ? `${productName} (${packSize})`
                : productName;

            const productY = pdf.y + 2;

            pdf.text(`${index + 1}`, xSL, productY);

            pdf.text(
                displayName,
                xProduct,
                productY,
                {
                    width: 250,
                    lineBreak: false
                }
            );

            pdf.text(`${quantity}`, xQty, productY);
            pdf.text(`Rs.${rate.toFixed(2)}`, xRate, productY);
            pdf.text(`Rs.${amount.toFixed(2)}`, xAmount, productY);

            pdf.y = productY + 14;
        });

        borderLine();

        const totalY = pdf.y + 3;

        pdf.font("Helvetica-Bold")
            .fontSize(8.5)
            .fillColor("#000");

        pdf.text(
            `NO OF ITEMS : ${items.length}`,
            left,
            totalY
        );

        pdf.text(
            `TOTAL QUANTITY : ${totalQuantity}`,
            left,
            totalY + 13
        );

        pdf.text(
            `CURRENT BILL AMOUNT : Rs.${grandTotal.toFixed(2)}`,
            left,
            totalY + 26
        );

        pdf.text(
            `GRAND TOTAL : Rs.${grandTotal.toFixed(2)}`,
            rightColumn,
            totalY
        );

        pdf.text(
            "BACK DUES AMOUNT : Rs.0.00",
            rightColumn,
            totalY + 13
        );

        pdf.text(
            `TOTAL BALANCE : Rs.${grandTotal.toFixed(2)}`,
            rightColumn,
            totalY + 26
        );

        const footerY = pageHeight - 58;

        pdf.font("Helvetica")
            .fontSize(8)
            .fillColor("#000")
            .text(
                "Import Purchase ONLINE : No",
                left,
                footerY
            );

        pdf.font("Helvetica-Bold")
            .fontSize(10)
            .fillColor("#0d6efd")
            .text(
                "GLOBAL HEALTHCARE",
                left,
                footerY,
                {
                    width: right - left,
                    align: "center"
                }
            );

        pdf.font("Helvetica")
            .fontSize(8)
            .fillColor("#555")
            .text(
                "Powered by Osium Biogenix",
                left,
                footerY + 14,
                {
                    width: right - left,
                    align: "center"
                }
            );

        pdf.text(
            "Call : 9142264714",
            left,
            footerY + 26,
            {
                width: right - left,
                align: "center"
            }
        );

        pdf.end();

    } catch (error) {
        console.log("Invoice error:", error);

        return res.status(500).send(
            "Invoice generate nahi hua: " + error.message
        );
    }
});

// ======================================================
// UPDATE ORDER STATUS
// ======================================================
router.post("/doctor-order/:orderId/status", async (req, res) => {
    try {
        const allowedStatuses = [
            "Pending",
            "Processing",
            "Delivered",
            "Success",
            "Cancelled"
        ];

        const status = String(
            req.body.status || "Pending"
        ).trim();

        if (!allowedStatuses.includes(status)) {
            return res.status(400).send(
                "Invalid order status"
            );
        }

        const order = await DoctorOrder.findByIdAndUpdate(
            req.params.orderId,
            {
                $set: {
                    status: status
                }
            },
            {
                new: true
            }
        );

        if (!order) {
            return res.status(404).send("Order not found");
        }

        return res.redirect(
            `/admin/doctor/${order.doctorId}/orders`
        );

    } catch (error) {
        console.log("Order status update error:", error);

        return res.status(500).send(
            "Unable to update order status: " + error.message
        );
    }
});








const PDFDocument = require("pdfkit");


// ======================================================
// INVOICE PDF ROUTE
// URL: /admin/doctor-order/:orderId/invoice
// ======================================================
router.get("/doctor-order/:orderId/invoice", async (req, res) => {
    try {
        const order = await DoctorOrder.findById(
            req.params.orderId
        ).lean();

        if (!order) {
            return res.status(404).send("Order not found");
        }

        const doctor = await Doctor.findById(
            order.doctorId
        ).lean();

        const items = Array.isArray(order.items)
            ? order.items
            : [];

        const billNo = "D" + String(
            order.orderId || order._id
        )
            .slice(-6)
            .toUpperCase();

        const totalQuantity = items.reduce((sum, item) => {
            const qty = Number(
                item.quantity ?? item.qty ?? 1
            ) || 1;

            return sum + qty;
        }, 0);

        const grandTotal = Number(
            order.totalAmount || order.total || 0
        );

        const date = order.createdAt
            ? new Date(order.createdAt).toLocaleDateString("en-GB")
            : "-";

        const doctorName = String(doctor?.name || "Doctor")
            .replace(/^Dr\.?\s*/i, "")
            .trim();

        res.setHeader("Content-Type", "application/pdf");

        res.setHeader(
            "Content-Disposition",
            `attachment; filename=Estimate-${billNo}.pdf`
        );

        const pdf = new PDFDocument({
            size: "A5",
            layout: "landscape",
            margin: 0
        });

        pdf.pipe(res);

        const pageWidth = pdf.page.width;
        const pageHeight = pdf.page.height;

        const left = 20;
        const right = pageWidth - 20;
        const rightColumn = 310;

        pdf.lineWidth(1)
            .strokeColor("#000")
            .rect(5, 5, pageWidth - 10, pageHeight - 10)
            .stroke();

        function borderLine() {
            pdf.strokeColor("#000")
                .lineWidth(0.6)
                .moveTo(left, pdf.y)
                .lineTo(right, pdf.y)
                .stroke();

            pdf.y += 5;
        }

        pdf.y = 16;

        pdf.font("Helvetica-Bold")
            .fontSize(16)
            .fillColor("#0d6efd")
            .text("GLOBAL HEALTHCARE", {
                align: "center"
            });

        pdf.font("Helvetica-Bold")
            .fontSize(8)
            .fillColor("#198754")
            .text("SAFE & SECURE Healthcare", {
                align: "center"
            });

        pdf.font("Helvetica-Bold")
            .fontSize(10)
            .fillColor("#000")
            .text("ROUGH ESTIMATE", {
                align: "center"
            });

        pdf.y += 7;
        borderLine();

        const detailsY = pdf.y + 3;

        pdf.font("Helvetica-Bold")
            .fontSize(8.5)
            .fillColor("#000");

        pdf.text(
            `DOCTOR : Dr. ${doctorName}`,
            left,
            detailsY
        );

        pdf.text(
            `SPECIALIZATION : ${doctor?.specialization || "-"}`,
            left,
            detailsY + 13
        );

        pdf.text(
            `DOCTOR ID : ${doctor?.doctorId || "-"}`,
            left,
            detailsY + 26
        );

        pdf.text(
            `PHONE : ${doctor?.phone || "-"}`,
            left,
            detailsY + 39
        );

        pdf.text(
            `BILL NO : ${billNo}`,
            rightColumn,
            detailsY
        );

        pdf.text(
            `DATE : ${date}`,
            rightColumn,
            detailsY + 13
        );

        pdf.text(
            "TYPE : CREDIT",
            rightColumn,
            detailsY + 26
        );

        pdf.text(
            `PAYMENT : ${String(
                order.paymentMethod || "COD"
            ).toUpperCase()}`,
            rightColumn,
            detailsY + 39
        );

        pdf.y = detailsY + 56;
        borderLine();

        const xSL = 25;
        const xProduct = 50;
        const xQty = 330;
        const xRate = 380;
        const xAmount = 470;

        const headerY = pdf.y + 2;

        pdf.font("Helvetica-Bold")
            .fontSize(8)
            .fillColor("#000");

        pdf.text("SL", xSL, headerY);
        pdf.text("PRODUCT DESCRIPTION", xProduct, headerY);
        pdf.text("QTY", xQty, headerY);
        pdf.text("RATE", xRate, headerY);
        pdf.text("AMOUNT", xAmount, headerY);

        pdf.y = headerY + 14;
        borderLine();

        pdf.font("Helvetica")
            .fontSize(8)
            .fillColor("#000");

        items.forEach((item, index) => {
            const quantity = Number(
                item.quantity ?? item.qty ?? 1
            ) || 1;

            const rate = Number(
                item.price || item.rate || 0
            );

            const amount = quantity * rate;

            const productName = String(
                item.name ||
                item.productName ||
                "Product"
            );

            const packSize = String(
                item.packSize ||
                item.size ||
                item.unit ||
                ""
            ).trim();

            const displayName = packSize
                ? `${productName} (${packSize})`
                : productName;

            const y = pdf.y + 2;

            pdf.text(`${index + 1}`, xSL, y);

            pdf.text(
                displayName,
                xProduct,
                y,
                {
                    width: 250,
                    lineBreak: false
                }
            );

            pdf.text(`${quantity}`, xQty, y);
            pdf.text(`Rs.${rate.toFixed(2)}`, xRate, y);
            pdf.text(`Rs.${amount.toFixed(2)}`, xAmount, y);

            pdf.y = y + 14;
        });

        borderLine();

        const totalY = pdf.y + 3;

        pdf.font("Helvetica-Bold")
            .fontSize(8.5)
            .fillColor("#000");

        pdf.text(
            `NO OF ITEMS : ${items.length}`,
            left,
            totalY
        );

        pdf.text(
            `TOTAL QUANTITY : ${totalQuantity}`,
            left,
            totalY + 13
        );

        pdf.text(
            `CURRENT BILL AMOUNT : Rs.${grandTotal.toFixed(2)}`,
            left,
            totalY + 26
        );

        pdf.text(
            `GRAND TOTAL : Rs.${grandTotal.toFixed(2)}`,
            rightColumn,
            totalY
        );

        pdf.text(
            "BACK DUES AMOUNT : Rs.0.00",
            rightColumn,
            totalY + 13
        );

        pdf.text(
            `TOTAL BALANCE : Rs.${grandTotal.toFixed(2)}`,
            rightColumn,
            totalY + 26
        );

        const footerY = pageHeight - 58;

        pdf.font("Helvetica")
            .fontSize(8)
            .fillColor("#000")
            .text(
                "Import Purchase ONLINE : No",
                left,
                footerY
            );

        pdf.font("Helvetica-Bold")
            .fontSize(10)
            .fillColor("#0d6efd")
            .text(
                "GLOBAL HEALTHCARE",
                left,
                footerY,
                {
                    width: right - left,
                    align: "center"
                }
            );

        pdf.font("Helvetica")
            .fontSize(8)
            .fillColor("#555")
            .text(
                "Powered by Osium Biogenix",
                left,
                footerY + 14,
                {
                    width: right - left,
                    align: "center"
                }
            );

        pdf.text(
            "Call : 9142264714",
            left,
            footerY + 26,
            {
                width: right - left,
                align: "center"
            }
        );

        pdf.end();

    } catch (error) {
        console.log("Invoice error:", error);

        return res.status(500).send(
            "Invoice generate nahi hua: " + error.message
        );
    }
});
// ======================================================
// PREMIUM DOCTOR ORDERS PAGE
// ======================================================
// ======================================================
// FINAL PREMIUM DOCTOR ORDERS + ALL STATUS COUNTS
// ======================================================
router.get("/doctor/:id/orders", async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id).lean();

        if (!doctor) {
            return res.status(404).send("Doctor not found");
        }

        const orders = await DoctorOrder.find({
            doctorId: doctor._id
        })
            .sort({ createdAt: -1 })
            .lean();

        const safe = (value) => String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

        const date = (value) => value
            ? new Date(value).toLocaleDateString("en-GB")
            : "-";

        const countStatus = (status) => {
            return orders.filter((order) => {
                return String(order.status || "Pending")
                    .toLowerCase() === status;
            }).length;
        };

        const pendingCount = countStatus("pending");
        const processingCount = countStatus("processing");
        const deliveredCount = countStatus("delivered");
        const successCount = countStatus("success");
        const cancelledCount = countStatus("cancelled");

        const totalAmount = orders.reduce((sum, order) => {
            return sum + Number(
                order.totalAmount || order.total || 0
            );
        }, 0);

        const doctorName = String(doctor.name || "Doctor")
            .replace(/^(dr\.?\s*)+/i, "")
            .trim();

        const getStatusClass = (status) => {
            const value = String(status || "Pending").toLowerCase();

            if (value === "processing") return "processing";
            if (value === "delivered") return "delivered";
            if (value === "success") return "success";
            if (value === "cancelled") return "cancelled";

            return "pending";
        };

        const rows = orders.length
            ? orders.map((order, index) => {
                const items = Array.isArray(order.items)
                    ? order.items
                    : [];

                const billNo = "D" + String(
                    order.orderId || order._id
                )
                    .slice(-6)
                    .toUpperCase();

                const status = String(order.status || "Pending");

                const amount = Number(
                    order.totalAmount || order.total || 0
                );

                const productList = items.length
                    ? items.map((item) => {
                        const qty = Number(
                            item.quantity ?? item.qty ?? 1
                        ) || 1;

                        return `
                            <div class="product">
                                ${safe(
                                    item.name ||
                                    item.productName ||
                                    "Product"
                                )}
                                <b>× ${qty}</b>
                            </div>
                        `;
                    }).join("")
                    : "No product";

                return `
                    <tr>
                        <td><span class="sl">${index + 1}</span></td>

                        <td>
                            <b class="bill">${billNo}</b>
                            <small>${date(order.createdAt)}</small>
                        </td>

                        <td>${productList}</td>

                        <td>
                            <b class="amount">
                                ₹${amount.toFixed(2)}
                            </b>
                        </td>

                        <td>
                            <span class="status ${getStatusClass(status)}">
                                ${safe(status)}
                            </span>
                        </td>

                        <td>
                            <form
                                action="/admin/doctor-order/${order._id}/status"
                                method="POST"
                                class="update-form"
                            >
                                <input
                                    type="hidden"
                                    name="doctorId"
                                    value="${doctor._id}"
                                >

                                <select name="status">
                                    <option value="Pending"
                                        ${status === "Pending" ? "selected" : ""}>
                                        Pending
                                    </option>

                                    <option value="Processing"
                                        ${status === "Processing" ? "selected" : ""}>
                                        Processing
                                    </option>

                                    <option value="Delivered"
                                        ${status === "Delivered" ? "selected" : ""}>
                                        Delivered
                                    </option>

                                    <option value="Success"
                                        ${status === "Success" ? "selected" : ""}>
                                        Success
                                    </option>

                                    <option value="Cancelled"
                                        ${status === "Cancelled" ? "selected" : ""}>
                                        Cancelled
                                    </option>
                                </select>

                                <button type="submit">Update</button>
                            </form>

                            <a
                                class="invoice"
                                target="_blank"
                                href="/admin/doctor-order/${order._id}/invoice"
                            >
                                📄 Invoice
                            </a>

                            <form
                                action="/admin/doctor-order/${order._id}/delete"
                                method="POST"
                                class="delete-form"
                                onsubmit="
                                    return confirm(
                                        'क्या आप ${safe(billNo)} order को हमेशा के लिए delete करना चाहते हैं?'
                                    );
                                "
                            >
                                <input
                                    type="hidden"
                                    name="doctorId"
                                    value="${doctor._id}"
                                >

                                <button
                                    type="submit"
                                    class="delete-btn"
                                >
                                    🗑 Delete
                                </button>
                            </form>
                        </td>
                    </tr>
                `;
            }).join("")
            : `
                <tr>
                    <td colspan="6" class="empty">
                        📦<br>No orders found for this doctor.
                    </td>
                </tr>
            `;

        return res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Doctor Orders</title>

<style>
*{box-sizing:border-box}
body{margin:0;padding:22px;font-family:Arial,sans-serif;color:#162338;background:linear-gradient(135deg,#eaf2ff,#f8fbff,#e9fff5)}
.container{max-width:1250px;margin:auto}
.top{display:flex;align-items:center;justify-content:space-between;gap:15px;margin-bottom:20px}
.brand{color:#0d4ca2;font-size:22px;font-weight:bold}
.brand small{display:block;margin-top:4px;color:#718096;font-size:10px;letter-spacing:1px}
.back{padding:10px 14px;border-radius:8px;color:#fff;background:#1c3c64;text-decoration:none;font-size:13px;font-weight:bold}
.doctor-card{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:25px;margin-bottom:20px;border-radius:18px;color:#fff;background:linear-gradient(130deg,#073b82,#1263c9);box-shadow:0 14px 35px rgba(18,99,201,.24)}
.doctor-left{display:flex;align-items:center;gap:15px}
.icon{display:grid;width:60px;height:60px;border:2px solid rgba(255,255,255,.3);border-radius:50%;place-items:center;background:rgba(255,255,255,.14);font-size:28px}
h1{margin:0 0 6px;font-size:24px}
.doctor-card p{margin:4px 0;color:#e4efff;font-size:13px}
.doctor-id{display:inline-block;padding:5px 8px;margin-top:6px;border-radius:6px;background:rgba(0,0,0,.17);font-size:11px}
.stats{display:flex;gap:9px;flex-wrap:wrap;justify-content:flex-end}
.stat{min-width:92px;padding:10px;border-radius:11px;color:#172033;background:#fff;text-align:center}
.stat b{display:block;color:#0c56b5;font-size:19px}
.stat span{color:#718096;font-size:9px;font-weight:bold}
.card{overflow:hidden;border:1px solid #e4ebf5;border-radius:16px;background:#fff;box-shadow:0 8px 25px rgba(32,61,101,.08)}
.heading{padding:18px 20px;border-bottom:1px solid #edf1f6;color:#164782;font-size:17px;font-weight:bold}
.table-wrap{overflow-x:auto}
table{width:100%;min-width:980px;border-collapse:collapse}
th,td{padding:14px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #edf1f6}
th{color:#536780;background:#f7faff;font-size:11px}
.sl{display:grid;width:27px;height:27px;border-radius:50%;place-items:center;color:#0e56b0;background:#e8f1ff;font-size:12px;font-weight:bold}
.bill{display:block;color:#0c56b5;font-size:13px}
td small{display:block;margin-top:5px;color:#7d8a9d;font-size:11px}
.product{padding:3px 0;color:#27364c;font-size:12px}
.product b{color:#687a91;font-size:11px}
.amount{color:#07854a;font-size:15px}
.status{display:inline-block;padding:6px 10px;border-radius:20px;font-size:11px;font-weight:bold}
.pending{color:#966300;background:#fff2c6}
.processing{color:#075bab;background:#dcecff}
.delivered,.success{color:#08724b;background:#d9f8e8}
.cancelled{color:#b42318;background:#ffe1df}
.update-form{display:flex;gap:7px;margin-bottom:8px}
select{min-width:105px;padding:8px;border:1px solid #cbd7e6;border-radius:7px;background:#fff;font-size:12px}
button{padding:8px 10px;border:0;border-radius:7px;color:#fff;background:#07854a;cursor:pointer;font-size:12px;font-weight:bold}
.invoice{display:inline-block;padding:8px 11px;border-radius:7px;color:#0c56b5;background:#e8f1ff;text-decoration:none;font-size:12px;font-weight:bold}
.delete-form{display:inline-block;margin:0 0 0 6px}
.delete-btn{background:#dc2626}
.delete-btn:hover{background:#b91c1c}
.empty{padding:50px;color:#718096;text-align:center}
@media(max-width:700px){body{padding:12px}.top,.doctor-card{align-items:flex-start;flex-direction:column}.doctor-card{padding:18px}h1{font-size:19px}}
</style>
</head>

<body>
<div class="container">

    <div class="top">
        <div class="brand">
            GLOBAL HEALTHCARE
            <small>SAFE & SECURE HEALTHCARE</small>
        </div>

        <a href="/admin/manage-doctors" class="back">
            ← Back to Doctors
        </a>
    </div>

    <div class="doctor-card">
        <div class="doctor-left">
            <div class="icon">👨‍⚕️</div>

            <div>
                <h1>Dr. ${safe(doctorName)}</h1>

                <p>
                    ${safe(
                        doctor.specialization ||
                        "General Physician"
                    )}
                </p>

                <p>
                    ${safe(
                        doctor.hospital ||
                        "Healthcare Partner"
                    )}
                </p>

                <span class="doctor-id">
                    Doctor ID: ${safe(doctor.doctorId || "-")}
                </span>
            </div>
        </div>

        <div class="stats">
            <div class="stat">
                <b>${orders.length}</b>
                <span>TOTAL ORDERS</span>
            </div>

            <div class="stat">
                <b>${pendingCount}</b>
                <span>PENDING</span>
            </div>

            <div class="stat">
                <b>${processingCount}</b>
                <span>PROCESSING</span>
            </div>

            <div class="stat">
                <b>${deliveredCount}</b>
                <span>DELIVERED</span>
            </div>

            <div class="stat">
                <b>${successCount}</b>
                <span>SUCCESS</span>
            </div>

            <div class="stat">
                <b>${cancelledCount}</b>
                <span>CANCELLED</span>
            </div>

            <div class="stat">
                <b>₹${totalAmount.toFixed(0)}</b>
                <span>ORDER VALUE</span>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="heading">
            📦 Doctor Order History
        </div>

        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>BILL / DATE</th>
                        <th>PRODUCTS</th>
                        <th>AMOUNT</th>
                        <th>STATUS</th>
                        <th>UPDATE / INVOICE / DELETE</th>
                    </tr>
                </thead>

                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    </div>

</div>
</body>
</html>
        `);

    } catch (error) {
        console.log("Doctor orders error:", error);

        return res.status(500).send(
            "Unable to load doctor orders: " + error.message
        );
    }
});


// ======================================================
// FINAL STATUS UPDATE ROUTE
// ======================================================
router.post("/doctor-order/:orderId/status", async (req, res) => {
    try {
        const allowedStatuses = [
            "Pending",
            "Processing",
            "Delivered",
            "Success",
            "Cancelled"
        ];

        const status = String(
            req.body.status || "Pending"
        ).trim();

        if (!allowedStatuses.includes(status)) {
            return res.status(400).send("Invalid order status");
        }

        const order = await DoctorOrder.findByIdAndUpdate(
            req.params.orderId,
            {
                $set: {
                    status: status
                }
            },
            {
                new: true
            }
        );

        if (!order) {
            return res.status(404).send("Order not found");
        }

        return res.redirect(
            `/admin/doctor/${order.doctorId}/orders`
        );

    } catch (error) {
        console.log("Status update error:", error);

        return res.status(500).send(
            "Unable to update status: " + error.message
        );
    }
});


// ======================================================
// DELETE DOCTOR ORDER
// POST /admin/doctor-order/:orderId/delete
// ======================================================

router.post(
    "/doctor-order/:orderId/delete",
    async (req, res) => {

        try {

            const order =
                await DoctorOrder.findById(
                    req.params.orderId
                );


            if (!order) {

                return res
                    .status(404)
                    .send("Order not found");

            }


            const doctorId = String(
                order.doctorId ||
                req.body.doctorId ||
                ""
            ).trim();


            await DoctorOrder.deleteOne({
                _id: order._id
            });


            if (doctorId) {

                return res.redirect(
                    `/admin/doctor/${doctorId}/orders`
                );

            }


            return res.redirect(
                "/admin/doctor-orders"
            );

        }
        catch (error) {

            console.log(
                "Delete doctor order error:",
                error
            );


            return res
                .status(500)
                .send(
                    "Unable to delete order: " +
                    error.message
                );

        }

    }
);



// ======================================================
// STUDENT RECEIPT PDF
// ======================================================

const path = require("path");
const fs = require("fs");

// router.get("/student-receipt/:id", async (req, res) => {
//     try {
//         const student = await Student.findById(
//             req.params.id
//         ).lean();

//         if (!student) {
//             return res.status(404).send("Student not found");
//         }

//         const rollNumber =
//             student.roll ||
//             student.rollNo ||
//             "-";

//         const mobile =
//             student.mobile ||
//             student.phone ||
//             "-";

//         const course =
//             student.className ||
//             student.course ||
//             "-";

//         const receiptNo = "GSR" + String(student._id)
//             .slice(-6)
//             .toUpperCase();

//         const date = student.createdAt
//             ? new Date(student.createdAt)
//                 .toLocaleDateString("en-GB")
//             : new Date().toLocaleDateString("en-GB");

//         res.setHeader("Content-Type", "application/pdf");

//         res.setHeader(
//             "Content-Disposition",
//             `attachment; filename=Receipt-${rollNumber}.pdf`
//         );

//         const pdf = new PDFDocument({
//             size: [595, 425],
//             margin: 0
//         });

//         pdf.pipe(res);

//         const width = pdf.page.width;
//         const height = pdf.page.height;

//         // अपने logo को public/images/logo.png में रखें
//         const logoPath = path.join(
//             process.cwd(),
//             "public",
//             "images",
//             "GS LOGO.png"
//         );

//         pdf.lineWidth(1)
//             .strokeColor("#0d6efd")
//             .rect(8, 8, width - 16, height - 16)
//             .stroke();

//         // ==================================================
//         // WEBSITE LOGO
//         // ==================================================
//         if (fs.existsSync(logoPath)) {
//             pdf.image(
//                 logoPath,
//                 42,
//                 18,
//                 {
//                     fit: [60, 60]
//                 }
//             );
//         }

//         // ==================================================
//         // HEADER
//         // ==================================================
//         pdf.font("Helvetica-Bold")
//             .fontSize(20)
//             .fillColor("#0d6efd")
//             .text(
//                 "GLOBAL SERVICES",
//                 110,
//                 26,
//                 {
//                     width: 435,
//                     align: "center"
//                 }
//             );

//         pdf.font("Helvetica-Bold")
//             .fontSize(9)
//             .fillColor("#198754")
//             .text(
//                 "SAFE & SECURE Services",
//                 110,
//                 52,
//                 {
//                     width: 435,
//                     align: "center"
//                 }
//             );

//         pdf.font("Helvetica-Bold")
//             .fontSize(13)
//             .fillColor("#000")
//             .text(
//                 "STUDENT REGISTRATION RECEIPT",
//                 25,
//                 75,
//                 {
//                     width: width - 50,
//                     align: "center"
//                 }
//             );

//         pdf.lineWidth(0.7)
//             .strokeColor("#999")
//             .moveTo(28, 99)
//             .lineTo(width - 28, 99)
//             .stroke();

//         const left = 45;
//         const labelX = 45;
//         const valueX = 220;
//         let y = 116;

//         const details = [
//             ["Receipt No.", receiptNo],
//             ["Date", date],
//             ["Student Name", student.name || "-"],
//             ["Roll Number", rollNumber],
//             ["Mobile Number", mobile],
//             ["Class / Course", course],
//             ["Selected Plan", student.plan || "-"],
//             [
//                 "Amount",
//                 `Rs.${Number(student.amount || 0).toFixed(2)}`
//             ],
//             [
//                 "Payment Status",
//                 student.paymentStatus || "Pending"
//             ]
//         ];

//         details.forEach(([label, value]) => {
//             pdf.font("Helvetica-Bold")
//                 .fontSize(10)
//                 .fillColor("#123b85")
//                 .text(`${label} :`, labelX, y);

//             pdf.font("Helvetica")
//                 .fontSize(10)
//                 .fillColor("#000")
//                 .text(String(value), valueX, y);

//             pdf.strokeColor("#e5e7eb")
//                 .lineWidth(0.4)
//                 .moveTo(left, y + 18)
//                 .lineTo(width - 45, y + 18)
//                 .stroke();

//             y += 25;
//         });

//         pdf.lineWidth(0.7)
//             .strokeColor("#999")
//             .moveTo(28, 348)
//             .lineTo(width - 28, 348)
//             .stroke();

//         pdf.font("Helvetica-Bold")
//             .fontSize(11)
//             .fillColor("#0d6efd")
//             .text(
//                 "GLOBAL SERVICES",
//                 25,
//                 363,
//                 {
//                     width: width - 50,
//                     align: "center"
//                 }
//             );

//         pdf.font("Helvetica")
//             .fontSize(8)
//             .fillColor("#555")
//             .text(
//                 "This is a computer generated registration receipt.",
//                 25,
//                 380,
//                 {
//                     width: width - 50,
//                     align: "center"
//                 }
//             );

//         pdf.end();

//     } catch (error) {
//         console.log("Student receipt error:", error);

//         return res.status(500).send(
//             "Receipt download failed: " + error.message
//         );
//     }
// });


// router.get(
//     "/student-receipt/:id",
//     async (req, res) => {

//         try {

//             const student =
//                 await Student.findById(
//                     req.params.id
//                 ).lean();


//             if (!student) {
//                 return res
//                     .status(404)
//                     .send("Student not found");
//             }


//             const rollNumber =
//                 student.roll ||
//                 student.rollNo ||
//                 "-";


//             const mobile =
//                 student.mobile ||
//                 student.phone ||
//                 "-";


//             const course =
//                 student.className ||
//                 student.course ||
//                 "-";


//             // =============================
//             // PAYMENT HISTORY
//             // =============================

//             const paymentHistory =
//                 Array.isArray(
//                     student.paymentHistory
//                 )
//                     ? student.paymentHistory
//                     : [];


//             const sortedPayments =
//                 paymentHistory
//                     .slice()
//                     .sort(
//                         (a, b) =>
//                             new Date(
//                                 b.paidDate || 0
//                             ) -
//                             new Date(
//                                 a.paidDate || 0
//                             )
//                     );


//             const latestPayment =
//                 sortedPayments[0] ||
//                 null;


//             const totalPaid =
//                 paymentHistory.reduce(
//                     (
//                         total,
//                         payment
//                     ) => {

//                         return (
//                             total +
//                             Number(
//                                 payment.amount || 0
//                             )
//                         );

//                     },
//                     0
//                 );


//             const paymentMonth =
//                 latestPayment
//                     ? latestPayment.month || "-"
//                     : "-";


//             const paymentAmount =
//                 latestPayment
//                     ? Number(
//                         latestPayment.amount || 0
//                     )
//                     : 0;


//             const paymentDate =
//                 latestPayment &&
//                 latestPayment.paidDate

//                     ? new Date(
//                         latestPayment.paidDate
//                     ).toLocaleDateString(
//                         "en-GB"
//                     )

//                     : "-";


//             const paymentNote =
//                 latestPayment
//                     ? latestPayment.note || "-"
//                     : "-";


//             const receiptNo =
//                 "GSR" +
//                 String(
//                     latestPayment?._id ||
//                     student._id
//                 )
//                     .slice(-6)
//                     .toUpperCase();


//             // =============================
//             // RESPONSE
//             // =============================

//             res.setHeader(
//                 "Content-Type",
//                 "application/pdf"
//             );


//             res.setHeader(
//                 "Content-Disposition",
//                 `attachment; filename=Receipt-${rollNumber}.pdf`
//             );


//             const pdf =
//                 new PDFDocument({

//                     size:
//                         [595, 500],

//                     margin:
//                         0

//                 });


//             pdf.pipe(res);


//             const width =
//                 pdf.page.width;


//             const height =
//                 pdf.page.height;


//             // =============================
//             // LOGO
//             // =============================

//             const logoPath =
//                 path.join(
//                     process.cwd(),
//                     "public",
//                     "images",
//                     "GS LOGO.png"
//                 );


//             // =============================
//             // BORDER
//             // =============================

//             pdf
//                 .lineWidth(1)
//                 .strokeColor("#16a34a")
//                 .rect(
//                     8,
//                     8,
//                     width - 16,
//                     height - 16
//                 )
//                 .stroke();


//             if (
//                 fs.existsSync(
//                     logoPath
//                 )
//             ) {

//                 pdf.image(
//                     logoPath,
//                     42,
//                     18,
//                     {
//                         fit: [60, 60]
//                     }
//                 );

//             }


//             // =============================
//             // HEADER
//             // =============================

//             pdf
//                 .font("Helvetica-Bold")
//                 .fontSize(20)
//                 .fillColor("#15803d")
//                 .text(
//                     "GLOBAL SMART STUDY",
//                     110,
//                     26,
//                     {
//                         width: 435,
//                         align: "center"
//                     }
//                 );


//             pdf
//                 .font("Helvetica-Bold")
//                 .fontSize(9)
//                 .fillColor("#198754")
//                 .text(
//                     "SAFE & SECURE",
//                     110,
//                     52,
//                     {
//                         width: 435,
//                         align: "center"
//                     }
//                 );


//             pdf
//                 .font("Helvetica-Bold")
//                 .fontSize(13)
//                 .fillColor("#000")
//                 .text(
//                     "STUDENT PAYMENT RECEIPT",
//                     25,
//                     78,
//                     {
//                         width: width - 50,
//                         align: "center"
//                     }
//                 );


//             pdf
//                 .lineWidth(0.7)
//                 .strokeColor("#999")
//                 .moveTo(28, 103)
//                 .lineTo(width - 28, 103)
//                 .stroke();


//             // =============================
//             // DETAILS
//             // =============================

//             const left =
//                 45;

//             const labelX =
//                 45;

//             const valueX =
//                 220;

//             let y =
//                 120;


//             const details = [

//                 [
//                     "Receipt No.",
//                     receiptNo
//                 ],

//                 [
//                     "Student Name",
//                     student.name || "-"
//                 ],

//                 [
//                     "Roll Number",
//                     rollNumber
//                 ],

//                 [
//                     "Mobile Number",
//                     mobile
//                 ],

//                 [
//                     "Class / Course",
//                     course
//                 ],

//                 [
//                     "Selected Plan",
//                     student.plan || "-"
//                 ],

//                 [
//                     "Plan Fee",
//                     `Rs. ${Number(
//                         student.amount || 0
//                     ).toFixed(2)}`
//                 ],

//                 [
//                     "Payment Month",
//                     paymentMonth
//                 ],

//                 [
//                     "Payment Date",
//                     paymentDate
//                 ],

//                 [
//                     "Paid Amount",
//                     `Rs. ${paymentAmount.toFixed(2)}`
//                 ],

//                 [
//                     "Total Paid",
//                     `Rs. ${totalPaid.toFixed(2)}`
//                 ],

//                 [
//                     "Payment Note",
//                     paymentNote
//                 ],

//                 [
//                     "Payment Status",
//                     student.paymentStatus ||
//                     "Pending"
//                 ]

//             ];


//             details.forEach(
//                 (
//                     [
//                         label,
//                         value
//                     ]
//                 ) => {

//                     pdf
//                         .font("Helvetica-Bold")
//                         .fontSize(9.5)
//                         .fillColor("#123b85")
//                         .text(
//                             `${label} :`,
//                             labelX,
//                             y
//                         );


//                     pdf
//                         .font("Helvetica")
//                         .fontSize(9.5)
//                         .fillColor("#000")
//                         .text(
//                             String(value),
//                             valueX,
//                             y,
//                             {
//                                 width:
//                                     width -
//                                     valueX -
//                                     45
//                             }
//                         );


//                     pdf
//                         .strokeColor("#e5e7eb")
//                         .lineWidth(0.4)
//                         .moveTo(
//                             left,
//                             y + 17
//                         )
//                         .lineTo(
//                             width - 45,
//                             y + 17
//                         )
//                         .stroke();


//                     y +=
//                         23;

//                 }
//             );


//             // =============================
//             // PAYMENT MESSAGE
//             // =============================

//             y +=
//                 8;


//             if (
//                 latestPayment
//             ) {

//                 pdf
//                     .roundedRect(
//                         45,
//                         y,
//                         width - 90,
//                         43,
//                         6
//                     )
//                     .fillAndStroke(
//                         "#dcfce7",
//                         "#16a34a"
//                     );


//                 pdf
//                     .font("Helvetica-Bold")
//                     .fontSize(12)
//                     .fillColor("#15803d")
//                     .text(
//                         `PAYMENT RECEIVED - Rs. ${paymentAmount.toFixed(2)}`,
//                         45,
//                         y + 14,
//                         {
//                             width:
//                                 width - 90,

//                             align:
//                                 "center"
//                         }
//                     );

//             }
//             else {

//                 pdf
//                     .roundedRect(
//                         45,
//                         y,
//                         width - 90,
//                         43,
//                         6
//                     )
//                     .fillAndStroke(
//                         "#fef3c7",
//                         "#f59e0b"
//                     );


//                 pdf
//                     .font("Helvetica-Bold")
//                     .fontSize(12)
//                     .fillColor("#92400e")
//                     .text(
//                         "NO PAYMENT RECORD FOUND",
//                         45,
//                         y + 14,
//                         {
//                             width:
//                                 width - 90,

//                             align:
//                                 "center"
//                         }
//                     );

//             }


//             // =============================
//             // FOOTER
//             // =============================

//             pdf
//                 .font("Helvetica-Bold")
//                 .fontSize(11)
//                 .fillColor("#15803d")
//                 .text(
//                     "GLOBAL SMART STUDY",
//                     25,
//                     height - 55,
//                     {
//                         width:
//                             width - 50,

//                         align:
//                             "center"
//                     }
//                 );


//             pdf
//                 .font("Helvetica")
//                 .fontSize(8)
//                 .fillColor("#555")
//                 .text(
//                     "This is a computer generated payment receipt.",
//                     25,
//                     height - 38,
//                     {
//                         width:
//                             width - 50,

//                         align:
//                             "center"
//                     }
//                 );


//             pdf.end();


//         } catch (error) {

//             console.log(
//                 "Student receipt error:",
//                 error
//             );


//             if (
//                 !res.headersSent
//             ) {

//                 return res
//                     .status(500)
//                     .send(
//                         "Receipt download failed: " +
//                         error.message
//                     );

//             }

//         }

//     }
// );



router.get(
    "/student-receipt/:id",
    async (req, res) => {

        try {

            const student =
                await Student.findById(
                    req.params.id
                ).lean();


            if (!student) {

                return res
                    .status(404)
                    .send(
                        "Student not found"
                    );

            }


            const rollNumber =
                student.roll ||
                student.rollNo ||
                "-";


            const mobile =
                student.mobile ||
                student.phone ||
                "-";


            // =====================================
            // HIDE 4 DIGITS OF MOBILE
            // Example: 7667164673 -> 7667****73
            // =====================================

            const maskedMobile = (() => {

                const number =
                    String(mobile || "")
                        .replace(/\D/g, "");


                if (
                    number.length >= 10
                ) {

                    return (
                        number.slice(0, 4) +
                        "****" +
                        number.slice(-2)
                    );

                }


                if (
                    number.length > 4
                ) {

                    return (
                        number.slice(0, 2) +
                        "****" +
                        number.slice(-2)
                    );

                }


                return "****";

            })();


            const course =
                student.className ||
                student.course ||
                "-";


            // =====================================
            // PAYMENT HISTORY
            // =====================================

            const paymentHistory =
                Array.isArray(
                    student.paymentHistory
                )
                    ? student.paymentHistory
                    : [];


            const sortedPayments =
                paymentHistory
                    .slice()
                    .sort(
                        (a, b) => {

                            return (
                                new Date(
                                    b.paidDate || 0
                                ) -
                                new Date(
                                    a.paidDate || 0
                                )
                            );

                        }
                    );


            const latestPayment =
                sortedPayments[0] ||
                null;


            const totalPaid =
                paymentHistory.reduce(
                    (
                        total,
                        payment
                    ) => {

                        return (
                            total +
                            Number(
                                payment.amount || 0
                            )
                        );

                    },
                    0
                );


            const paymentMonth =
                latestPayment
                    ? latestPayment.month || "-"
                    : "-";


            const paymentAmount =
                latestPayment
                    ? Number(
                        latestPayment.amount || 0
                    )
                    : 0;


            const paymentDate =
                latestPayment &&
                latestPayment.paidDate

                    ? new Date(
                        latestPayment.paidDate
                    ).toLocaleDateString(
                        "en-GB"
                    )

                    : "-";


            const paymentNote =
                latestPayment
                    ? latestPayment.note || "-"
                    : "-";


            const receiptNo =
                "GSR" +
                String(
                    latestPayment?._id ||
                    student._id
                )
                    .slice(-6)
                    .toUpperCase();


            // =====================================
            // PDF RESPONSE
            // =====================================

            res.setHeader(
                "Content-Type",
                "application/pdf"
            );


            res.setHeader(
                "Content-Disposition",
                `attachment; filename=Receipt-${rollNumber}.pdf`
            );


            const pdf =
                new PDFDocument({

                    size:
                        "A4",

                    margin:
                        0

                });


            pdf.pipe(res);


            const width =
                pdf.page.width;


            const height =
                pdf.page.height;


            // =====================================
            // BORDER
            // =====================================

            pdf
                .lineWidth(1.2)
                .strokeColor("#16a34a")
                .rect(
                    15,
                    15,
                    width - 30,
                    height - 30
                )
                .stroke();


            // =====================================
            // LOGO
            // =====================================

            const logoPath =
                path.join(
                    process.cwd(),
                    "public",
                    "images",
                    "GS LOGO.png"
                );


            if (
                fs.existsSync(
                    logoPath
                )
            ) {

                pdf.image(
                    logoPath,
                    40,
                    32,
                    {
                        fit: [
                            65,
                            65
                        ]
                    }
                );

            }


            // =====================================
            // HEADER
            // =====================================

            pdf
                .font(
                    "Helvetica-Bold"
                )
                .fontSize(20)
                .fillColor(
                    "#15803d"
                )
                .text(
                    "GLOBAL SMART STUDY",
                    115,
                    38,
                    {
                        width:
                            width - 155,

                        align:
                            "center"
                    }
                );


            pdf
                .font(
                    "Helvetica-Bold"
                )
                .fontSize(9)
                .fillColor(
                    "#64748b"
                )
                .text(
                    "SAFE & SECURE",
                    115,
                    66,
                    {
                        width:
                            width - 155,

                        align:
                            "center"
                    }
                );


            pdf
                .font(
                    "Helvetica-Bold"
                )
                .fontSize(13)
                .fillColor(
                    "#111827"
                )
                .text(
                    "STUDENT PAYMENT RECEIPT",
                    40,
                    100,
                    {
                        width:
                            width - 80,

                        align:
                            "center"
                    }
                );


            pdf
                .strokeColor(
                    "#cbd5e1"
                )
                .lineWidth(0.7)
                .moveTo(
                    35,
                    126
                )
                .lineTo(
                    width - 35,
                    126
                )
                .stroke();


            // =====================================
            // STUDENT DETAILS
            // =====================================

            const labelX =
                55;


            const valueX =
                215;


            const valueWidth =
                width -
                valueX -
                55;


            let y =
                145;


            function addRow(
                label,
                value
            ) {

                const safeValue =
                    value === null ||
                    value === undefined
                        ? "-"
                        : String(value);


                const labelHeight =
                    pdf.heightOfString(
                        label + " :",
                        {
                            width:
                                140
                        }
                    );


                const valueHeight =
                    pdf.heightOfString(
                        safeValue,
                        {
                            width:
                                valueWidth
                        }
                    );


                const rowHeight =
                    Math.max(
                        labelHeight,
                        valueHeight,
                        14
                    ) + 14;


                pdf
                    .font(
                        "Helvetica-Bold"
                    )
                    .fontSize(10)
                    .fillColor(
                        "#1e3a8a"
                    )
                    .text(
                        label + " :",
                        labelX,
                        y,
                        {
                            width:
                                140
                        }
                    );


                pdf
                    .font(
                        "Helvetica"
                    )
                    .fontSize(10)
                    .fillColor(
                        "#111827"
                    )
                    .text(
                        safeValue,
                        valueX,
                        y,
                        {
                            width:
                                valueWidth,

                            lineGap:
                                2
                        }
                    );


                pdf
                    .strokeColor(
                        "#e5e7eb"
                    )
                    .lineWidth(
                        0.4
                    )
                    .moveTo(
                        labelX,
                        y +
                        rowHeight -
                        4
                    )
                    .lineTo(
                        width - 55,
                        y +
                        rowHeight -
                        4
                    )
                    .stroke();


                y +=
                    rowHeight;

            }


            addRow(
                "Receipt No.",
                receiptNo
            );


            addRow(
                "Student Name",
                student.name ||
                "-"
            );


            addRow(
                "Roll Number",
                rollNumber
            );


            addRow(
                "Mobile Number",
                maskedMobile
            );


            addRow(
                "Class / Course",
                course
            );


            addRow(
                "Selected Plan",
                student.plan ||
                "-"
            );


            addRow(
                "Plan Fee",
                "Rs. " +
                Number(
                    student.amount || 0
                ).toFixed(
                    2
                )
            );


            addRow(
                "Payment Month",
                paymentMonth
            );


            addRow(
                "Payment Date",
                paymentDate
            );


            addRow(
                "Paid Amount",
                "Rs. " +
                paymentAmount.toFixed(
                    2
                )
            );


            addRow(
                "Total Paid",
                "Rs. " +
                totalPaid.toFixed(
                    2
                )
            );


            addRow(
                "Payment Note",
                paymentNote
            );


            addRow(
                "Payment Status",
                student.paymentStatus ||
                "Pending"
            );


            // =====================================
            // PAYMENT BOX
            // =====================================

            y +=
                18;


            if (
                latestPayment
            ) {

                pdf
                    .roundedRect(
                        55,
                        y,
                        width - 110,
                        55,
                        7
                    )
                    .fillAndStroke(
                        "#dcfce7",
                        "#16a34a"
                    );


                pdf
                    .font(
                        "Helvetica-Bold"
                    )
                    .fontSize(14)
                    .fillColor(
                        "#15803d"
                    )
                    .text(
                        "PAYMENT RECEIVED",
                        55,
                        y + 11,
                        {
                            width:
                                width - 110,

                            align:
                                "center"
                        }
                    );


                pdf
                    .font(
                        "Helvetica"
                    )
                    .fontSize(10)
                    .fillColor(
                        "#166534"
                    )
                    .text(
                        "Rs. " +
                        paymentAmount.toFixed(
                            2
                        ) +
                        " received successfully",
                        55,
                        y + 31,
                        {
                            width:
                                width - 110,

                            align:
                                "center"
                        }
                    );

            }
            else {

                pdf
                    .roundedRect(
                        55,
                        y,
                        width - 110,
                        50,
                        7
                    )
                    .fillAndStroke(
                        "#fef3c7",
                        "#f59e0b"
                    );


                pdf
                    .font(
                        "Helvetica-Bold"
                    )
                    .fontSize(12)
                    .fillColor(
                        "#92400e"
                    )
                    .text(
                        "NO PAYMENT RECORD FOUND",
                        55,
                        y + 17,
                        {
                            width:
                                width - 110,

                            align:
                                "center"
                        }
                    );

            }


            // =====================================
            // FOOTER
            // =====================================

            pdf
                .font(
                    "Helvetica-Bold"
                )
                .fontSize(11)
                .fillColor(
                    "#15803d"
                )
                .text(
                    "GLOBAL SMART STUDY",
                    40,
                    height - 70,
                    {
                        width:
                            width - 80,

                        align:
                            "center"
                    }
                );


            pdf
                .font(
                    "Helvetica"
                )
                .fontSize(8)
                .fillColor(
                    "#64748b"
                )
                .text(
                    "This is a computer generated payment receipt.",
                    40,
                    height - 52,
                    {
                        width:
                            width - 80,

                        align:
                            "center"
                    }
                );


            pdf.end();


        } catch (error) {


            console.error(
                "STUDENT RECEIPT ERROR:",
                error
            );


            if (
                !res.headersSent
            ) {

                return res
                    .status(500)
                    .send(
                        "Receipt download failed: " +
                        error.message
                    );

            }


        }

    }
);



const EditGovernment =
    require("../pages/editpages/EditGovernment");


    // ======================================================
// EDIT GOVERNMENT PERSON PAGE
// GET /admin/edit-government/:id
// ======================================================

router.get(
    "/edit-government/:id",
    async (req, res) => {

        try {

            const person =
                await GovernmentPerson
                    .findById(req.params.id)
                    .lean();


            if (!person) {

                return res
                    .status(404)
                    .send("Government Person Not Found");

            }


            return res.send(
                EditGovernment(person)
            );


        } catch (err) {

            console.error(
                "EDIT GOVERNMENT GET ERROR:",
                err
            );


            return res
                .status(500)
                .send(
                    "Failed to load Government Person: " +
                    err.message
                );

        }

    }
);



// ======================================================
// UPDATE GOVERNMENT PERSON
// POST /admin/edit-government/:id
// ======================================================

const multer = require("multer");








// ======================================================
// GOVERNMENT PHOTO UPLOAD FOLDER
// ======================================================

const governmentUploadDir =
    path.join(
        process.cwd(),
        "public",
        "uploads",
        "government"
    );


// Folder automatic create
if (!fs.existsSync(governmentUploadDir)) {

    fs.mkdirSync(
        governmentUploadDir,
        {
            recursive: true
        }
    );

}



// ======================================================
// MULTER STORAGE
// ======================================================

const governmentStorage =
    multer.diskStorage({

        destination: function (
            req,
            file,
            cb
        ) {

            cb(
                null,
                governmentUploadDir
            );

        },


        filename: function (
            req,
            file,
            cb
        ) {

            const ext =
                path
                    .extname(file.originalname)
                    .toLowerCase();


            const fileName =
                "government-" +
                Date.now() +
                "-" +
                Math.round(
                    Math.random() * 1E9
                ) +
                ext;


            cb(
                null,
                fileName
            );

        }

    });



// ======================================================
// MULTER
// ======================================================

const uploadGovernment =
    multer({

        storage:
            governmentStorage,

        limits: {

            fileSize:
                5 * 1024 * 1024

        },

        fileFilter: function (
            req,
            file,
            cb
        ) {

            const allowedTypes = [

                "image/jpeg",
                "image/png",
                "image/webp"

            ];


            if (
                allowedTypes.includes(
                    file.mimetype
                )
            ) {

                return cb(
                    null,
                    true
                );

            }


            return cb(
                new Error(
                    "Only JPG, JPEG, PNG and WEBP images are allowed"
                )
            );

        }

    });



// ======================================================
// EDIT GOVERNMENT PERSON PAGE
// GET /admin/edit-government/:id
// ======================================================

router.get(
    "/edit-government/:id",
    async (req, res) => {

        try {

            const person =
                await GovernmentPerson
                    .findById(
                        req.params.id
                    )
                    .lean();


            if (!person) {

                return res
                    .status(404)
                    .send(
                        "Government Person Not Found"
                    );

            }


            return res.send(
                EditGovernment(person)
            );


        } catch (err) {

            console.error(
                "EDIT GOVERNMENT GET ERROR:",
                err
            );


            return res
                .status(500)
                .send(
                    "Failed to load Government Person: " +
                    err.message
                );

        }

    }
);



// ======================================================
// UPDATE GOVERNMENT PERSON
// POST /admin/edit-government/:id
// ======================================================

router.post(
    "/edit-government/:id",

    // ==============================================
    // VERY IMPORTANT
    // Ye multipart form ko parse karega
    // ==============================================

    uploadGovernment.single("image"),

    async (req, res) => {

        try {

            console.log(
                "=================================="
            );

            console.log(
                "EDIT GOVERNMENT POST"
            );

            console.log(
                "BODY:",
                req.body
            );

            console.log(
                "FILE:",
                req.file
            );

            console.log(
                "=================================="
            );



            // ==================================================
            // OLD PERSON
            // ==================================================

            const oldPerson =
                await GovernmentPerson
                    .findById(
                        req.params.id
                    );


            if (!oldPerson) {

                return res
                    .status(404)
                    .send(
                        "Government Person Not Found"
                    );

            }



            // ==================================================
            // SAFE BODY
            // ==================================================

            const body =
                req.body || {};



            const name =
                String(
                    body.name || ""
                ).trim();


            const position =
                String(
                    body.position || ""
                ).trim();


            const department =
                String(
                    body.department || ""
                ).trim();


            const phone =
                String(
                    body.phone || ""
                ).trim();


            const address =
                String(
                    body.address || ""
                ).trim();



            // ==================================================
            // VALIDATION
            // ==================================================

            if (!name) {

                return res
                    .status(400)
                    .send(
                        "Person Name is required"
                    );

            }


            if (!position) {

                return res
                    .status(400)
                    .send(
                        "Position is required"
                    );

            }



            // ==================================================
            // UPDATE DATA
            // ==================================================

            const updateData = {

                name,

                position,

                department,

                phone,

                address

            };



            // ==================================================
            // PHOTO
            // ==================================================

            if (req.file) {

                // New photo uploaded

                updateData.image =
                    "/uploads/government/" +
                    req.file.filename;

            } else {

                // No new photo
                // Keep old photo

                updateData.image =
                    oldPerson.image || "";

            }



            // ==================================================
            // UPDATE DATABASE
            // ==================================================

            const updatedPerson =
                await GovernmentPerson
                    .findByIdAndUpdate(

                        req.params.id,

                        {
                            $set:
                                updateData
                        },

                        {
                            new: true,
                            runValidators: true
                        }

                    );



            if (!updatedPerson) {

                return res
                    .status(404)
                    .send(
                        "Government Person Not Found"
                    );

            }



            console.log(
                "✅ GOVERNMENT PERSON UPDATED:",
                updatedPerson._id
            );


            console.log(
                "✅ PHOTO:",
                updatedPerson.image
            );



            // ==================================================
            // REDIRECT
            // ==================================================

            return res.redirect(
                "/admin/manage-government"
            );


        } catch (err) {

            console.error(
                "EDIT GOVERNMENT POST ERROR:",
                err
            );


            return res
                .status(500)
                .send(
                    "Government Person Update Failed: " +
                    err.message
                );

        }

    }
);



// ======================================================
// GOVERNMENT PERSON DETAILS
// GET /government/person/:id
// ======================================================

router.get(
    "/person/:id",
    async (req, res) => {

        try {

            const person =
                await GovernmentPerson
                    .findById(req.params.id)
                    .lean();


            if (!person) {

                return res
                    .status(404)
                    .send(
                        "Government Person Not Found"
                    );

            }


            return res.send(`
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>${person.name || "Government Person"}</title>

<style>

*{
    box-sizing:border-box;
}

body{

    margin:0;
    padding:20px;

    font-family:
        Arial,
        sans-serif;

    background:#f1f5f9;

    color:#0f172a;
}

.container{

    max-width:650px;

    margin:auto;

    background:#ffffff;

    border-radius:20px;

    overflow:hidden;

    box-shadow:
        0 10px 35px
        rgba(0,0,0,.10);
}

.header{

    background:
        linear-gradient(
            135deg,
            #1e3a8a,
            #2563eb
        );

    color:white;

    padding:28px 20px;

    text-align:center;
}

.photo{

    width:120px;
    height:120px;

    border-radius:50%;

    object-fit:cover;

    border:4px solid white;

    margin-bottom:12px;

    background:#e2e8f0;
}

.header h1{

    margin:5px 0;

    font-size:26px;
}

.header p{

    margin:5px 0;

    opacity:.9;
}

.details{

    padding:25px;
}

.detail{

    padding:14px 0;

    border-bottom:
        1px solid #e2e8f0;
}

.detail small{

    display:block;

    color:#64748b;

    margin-bottom:5px;
}

.detail strong{

    font-size:16px;

    color:#0f172a;
}

.back-btn{

    display:block;

    margin-top:22px;

    padding:13px;

    background:#2563eb;

    color:white;

    text-decoration:none;

    text-align:center;

    border-radius:9px;

    font-weight:bold;
}

</style>

</head>


<body>

<div class="container">


    <div class="header">

        <img
            src="${person.image || "/images/default.png"}"
            class="photo"
            onerror="
                this.onerror=null;
                this.src='/images/default.png';
            "
        >

        <h1>
            ${person.name || "-"}
        </h1>

        <p>
            ${person.position || "-"}
        </p>

    </div>


    <div class="details">


        <div class="detail">

            <small>
                Department
            </small>

            <strong>
                ${person.department || "-"}
            </strong>

        </div>


        <div class="detail">

            <small>
                Phone Number
            </small>

            <strong>
                ${person.phone || "-"}
            </strong>

        </div>


        <div class="detail">

            <small>
                Address
            </small>

            <strong>
                ${person.address || "-"}
            </strong>

        </div>


        <a
            href="/"
            class="back-btn"
        >
            ← Back
        </a>


    </div>


</div>

</body>

</html>
            `);


        } catch (err) {

            console.error(
                "GOVERNMENT PERSON DETAILS ERROR:",
                err
            );


            return res
                .status(500)
                .send(
                    "Failed to load Government Person: " +
                    err.message
                );

        }

    }
);

const addDoctorPage = require("../pages/addpages/addDoctor");

router.get("/add-doctor", async (req, res) => {
    try {

        res.send(
            addDoctorPage()
        );

    } catch (error) {

        console.error("ADD DOCTOR PAGE ERROR:", error);

        res.status(500).send(`
            <h2>Server Error</h2>
            <pre>${error.message}</pre>
        `);
    }
});

router.get("/student/:id", async (req, res) => {
    try {

        const student = await Student.findById(
            req.params.id
        ).lean();

        if (!student) {
            return res
                .status(404)
                .send("Student Not Found");
        }

        return res.render(
            "studentProfile",
            {
                student: student
            }
        );

    } catch (error) {

        console.error(
            "STUDENT PROFILE ERROR:",
            error
        );

        return res
            .status(500)
            .send(
                "Student Profile Error: " +
                error.message
            );
    }
});



// =======================================
// DELETE STUDENT PAYMENT
// =======================================

router.post(
    "/delete-student-payment/:studentId/:paymentId",
    async (req, res) => {

        try {

            const {
                studentId,
                paymentId
            } = req.params;


            const student =
                await Student.findById(
                    studentId
                );


            if (!student) {

                return res
                    .status(404)
                    .send(
                        "Student not found."
                    );

            }


            if (
                !Array.isArray(
                    student.paymentHistory
                )
            ) {

                student.paymentHistory =
                    [];

            }


            const oldLength =
                student.paymentHistory.length;


            student.paymentHistory =
                student.paymentHistory.filter(
                    (payment) => {

                        return (
                            String(
                                payment._id
                            ) !==
                            String(
                                paymentId
                            )
                        );

                    }
                );


            if (
                student.paymentHistory.length ===
                oldLength
            ) {

                return res
                    .status(404)
                    .send(
                        "Payment not found."
                    );

            }


            // अगर कोई payment नहीं बचा
            if (
                student.paymentHistory.length === 0
            ) {

                student.paymentStatus =
                    "Pending";

            }
            else {

                student.paymentStatus =
                    "Success";

            }


            await student.save();


            console.log(
                "✅ STUDENT PAYMENT DELETED:",
                {
                    student:
                        student.name,

                    paymentId:
                        paymentId
                }
            );


            return res.redirect(
                "/admin/edit-student/" +
                studentId
            );


        } catch (error) {

            console.error(
                "DELETE STUDENT PAYMENT ERROR:",
                error
            );


            return res
                .status(500)
                .send(
                    "Payment delete failed: " +
                    error.message
                );

        }

    }
);


// ==========================================
// ADMIN CHANGE PASSWORD PAGE
// ==========================================

router.get("/change-password", async (req, res) => {

    try {

        // Admin login check
        if (!req.session.adminId) {
            return res.redirect("/admin");
        }

        res.send(`
<!DOCTYPE html>
<html>
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Change Password</title>

    <style>

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f5f7fa;
        }

        .container {
            max-width: 450px;
            margin: 60px auto;
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        h2 {
            text-align: center;
            margin-bottom: 25px;
        }

        label {
            display: block;
            margin-top: 15px;
            margin-bottom: 6px;
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
        }

        button {
            width: 100%;
            margin-top: 25px;
            padding: 13px;
            border: none;
            border-radius: 8px;
            background: #16a34a;
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }

        button:hover {
            background: #15803d;
        }

        .back {
            display: block;
            text-align: center;
            margin-top: 20px;
            text-decoration: none;
            color: #333;
        }

    </style>

</head>

<body>

<div class="container">

    <h2>🔐 Change Admin Password</h2>

    <form
        method="POST"
        action="/admin/change-password"
    >

        <label>Old Password</label>

        <input
            type="password"
            name="oldPassword"
            required
        >


        <label>New Password</label>

        <input
            type="password"
            name="newPassword"
            minlength="6"
            required
        >


        <label>Confirm New Password</label>

        <input
            type="password"
            name="confirmPassword"
            minlength="6"
            required
        >


        <button type="submit">
            Change Password
        </button>

    </form>

    <a
        href="/admin/dashboard"
        class="back"
    >
        ← Back to Dashboard
    </a>

</div>

</body>
</html>
        `);

    } catch (error) {

        console.error(
            "CHANGE PASSWORD PAGE ERROR:",
            error
        );

        res.status(500).send(
            "Something went wrong"
        );
    }

});


const RationCardMaker = require("../views/rationCardMaker");

router.get("/ration-card-maker", (req, res) => {
    if (!req.session?.adminId) {
        return res.redirect("/admin/login");
    }

    res.send(RationCardMaker());
});







// ======================================================
// EXPORT
// ======================================================

module.exports = router;
