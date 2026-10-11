// // // // const express = require("express");
// // // // const router = express.Router();

// // // // const Banner = require("../models/Banner");
// // // // const Home = require("../pages/Homepages");


// // // // router.get("/", async(req,res)=>{

// // // //     try{

// // // //         const banners = await Banner.find({
// // // //             active:true
// // // //         });
// // // //         res.send(Home(banners));

// // // //     }catch(err){

// // // //         console.log(err);
// // // //         res.status(500).send(err.message);

// // // //     }

// // // // });


// // // // module.exports = router;






// // // // const express = require("express");
// // // // const router = express.Router();

// // // // const Banner = require("../models/Banner");
// // // // const Doctor = require("../models/Doctor"); // Add this
// // // // const Home = require("../pages/Homepages");

// // // // const GovernmentPerson = require("../models/GovernmentPerson");

// // // // router.get("/", async (req, res) => {

// // // //     try {

// // // //         const banners = await Banner.find({
// // // //             active: true
// // // //         });

// // // //         const doctors = await Doctor.find().sort({ createdAt: -1 });

// // // //         res.send(Home(banners, doctors));

// // // //     } catch (err) {

// // // //         console.log(err);

// // // //         res.status(500).send(err.message);

// // // //     }

// // // // });

// // // // module.exports = router;




// // // const express = require("express");
// // // const router = express.Router();

// // // const Banner = require("../models/Banner");
// // // const Doctor = require("../models/Doctor");
// // // const GovernmentPerson = require("../models/GovernmentPerson");

// // // const Home = require("../pages/Homepages");


// // // router.get("/", async (req, res) => {

// // //     try {


// // //         // Get Active Banners
// // //         const banners = await Banner.find({
// // //             active:true
// // //         })
// // //         .sort({
// // //             createdAt:-1
// // //         });



// // //         // Get Doctors
// // //         const doctors = await Doctor.find()
// // //         .sort({
// // //             createdAt:-1
// // //         });



// // //         // Get Government Persons
// // //         const governmentPersons = await GovernmentPerson.find()
// // //         .sort({
// // //             createdAt:-1
// // //         });



// // //         // Send all data to Home Page
// // //         res.send(
// // //             Home(
// // //                 banners,
// // //                 doctors,
// // //                 governmentPersons
// // //             )
// // //         );


// // //     } catch(err) {


// // //         console.log("HOME ERROR:", err);

// // //         res.status(500)
// // //         .send(err.message);


// // //     }

// // // });






// // // module.exports = router;



// // const express = require("express");
// // const router = express.Router();


// // const Banner = require("../models/Banner");
// // const Doctor = require("../models/Doctor");
// // const GovernmentPerson = require("../models/GovernmentPerson");

// // const Home = require("../pages/Homepages");



// // // ================= HOME PAGE =================

// // router.get("/", async (req, res) => {

// //     try {


// //         const banners = await Banner.find({
// //             active:true
// //         })
// //         .sort({
// //             createdAt:-1
// //         });



// //         const doctors = await Doctor.find()
// //         .sort({
// //             createdAt:-1
// //         });



// //         const governmentPersons = await GovernmentPerson.find()
// //         .sort({
// //             createdAt:-1
// //         });



// //         res.send(
// //             Home(
// //                 banners,
// //                 doctors,
// //                 governmentPersons
// //             )
// //         );


// //     } catch(err) {

// //         console.log("HOME ERROR:",err);

// //         res.status(500)
// //         .send(err.message);

// //     }

// // });




// // // ================= CONTACT PAGE =================


// // router.get("/contact",(req,res)=>{


// // res.send(`


// // <!DOCTYPE html>
// // <html>

// // <head>

// // <title>Contact Us</title>

// // <meta name="viewport" content="width=device-width, initial-scale=1">


// // <style>


// // body{

// // font-family:Arial;

// // background:
// // linear-gradient(135deg,#eef6ff,#dbeafe);

// // padding:20px;

// // }



// // .card{

// // max-width:500px;

// // margin:auto;

// // background:white;

// // padding:30px;

// // border-radius:25px;

// // box-shadow:0 20px 50px #0003;

// // }



// // h1{

// // text-align:center;

// // color:#2563eb;

// // }



// // input,textarea{

// // width:100%;

// // padding:14px;

// // margin:10px 0;

// // border-radius:12px;

// // border:1px solid #ddd;

// // font-size:15px;

// // }



// // textarea{

// // height:120px;

// // }



// // button{

// // width:100%;

// // padding:15px;

// // border:none;

// // border-radius:50px;

// // background:
// // linear-gradient(135deg,#2563eb,#06b6d4);

// // color:white;

// // font-size:18px;

// // font-weight:bold;

// // }


// // </style>


// // </head>


// // <body>


// // <div class="card">

// // <h1>
// // Contact Us
// // </h1>


// // <form action="/contact" method="POST">


// // <input 
// // type="text"
// // name="name"
// // placeholder="Your Name"
// // required>



// // <input 
// // type="number"
// // name="mobile"
// // placeholder="Mobile Number"
// // required>



// // <textarea 
// // name="message"
// // placeholder="Your Service Requirement"
// // required></textarea>



// // <button type="submit">
// // Submit Request
// // </button>


// // </form>


// // </div>


// // </body>


// // </html>


// // `);


// // // ================= CONTACT POST =================

// // router.post("/contact",(req,res)=>{


// // const {
// //     name,
// //     mobile,
// //     message
// // }=req.body;



// // console.log("CONTACT DATA:",{

// //     name,
// //     mobile,
// //     message

// // });



// // res.send(`

// // <!DOCTYPE html>
// // <html>

// // <head>

// // <title>Success</title>

// // <style>

// // body{

// // font-family:Arial;

// // background:#eef6ff;

// // text-align:center;

// // padding:50px;

// // }


// // .box{

// // background:white;

// // padding:30px;

// // border-radius:20px;

// // max-width:400px;

// // margin:auto;

// // box-shadow:0 10px 30px #0003;

// // }


// // h1{

// // color:#16a34a;

// // }

// // a{

// // display:inline-block;

// // margin-top:20px;

// // padding:12px 25px;

// // background:#2563eb;

// // color:white;

// // text-decoration:none;

// // border-radius:30px;

// // }

// // </style>

// // </head>


// // <body>


// // <div class="box">

// // <h1>
// // ✅ Request Submitted
// // </h1>

// // <p>
// // Thank You ${name}
// // </p>

// // <p>
// // We will contact you soon.
// // </p>


// // <a href="/">
// // Go Home
// // </a>


// // </div>


// // </body>

// // </html>


// // `);


// // });





// // module.exports = router;



// const express = require("express");
// const router = express.Router();


// const Contact = require("../models/Contact");
// const Banner = require("../models/Banner");
// const Doctor = require("../models/Doctor");
// const GovernmentPerson = require("../models/GovernmentPerson");
// const Service = require("../models/Service");

// const Student =
//     require("../models/Student");


// const Home = require("../pages/Homepages");




// // ================= HOME PAGE =================


// router.get("/", async (req,res)=>{

//     try{


//         const banners = await Banner.find({
//             active:true
//         })
//         .sort({
//             createdAt:-1
//         });



//         const doctors = await Doctor.find()
//         .sort({
//             createdAt:-1
//         });



//         const governmentPersons = await GovernmentPerson.find()
//         .sort({
//             createdAt:-1
//         });

//         const services = await Service.find().sort({
//     createdAt: -1
// });



//         res.send(
//             Home(
//                 banners,
//                 doctors,
//                 governmentPersons,
//                 services
//             )
//         );


//     }
//     catch(err){

//         console.log("HOME ERROR:",err);

//         res.status(500)
//         .send(err.message);

//     }

// });






// // ================= CONTACT GET =================


// router.get("/contact",(req,res)=>{


// res.send(`

// <!DOCTYPE html>
// <html>

// <head>

// <title>Contact Us</title>

// <meta name="viewport" content="width=device-width, initial-scale=1">


// <style>


// *{
// margin:0;
// padding:0;
// box-sizing:border-box;
// font-family:'Segoe UI',Arial;
// }


// body{

// min-height:100vh;

// background:
// linear-gradient(135deg,#e0f2fe,#dbeafe);

// padding:20px;

// }



// .card{

// max-width:500px;

// margin:auto;

// background:white;

// padding:30px;

// border-radius:25px;

// box-shadow:
// 0 20px 50px rgba(0,0,0,.15);

// }



// h1{

// text-align:center;

// color:#2563eb;

// margin-bottom:20px;

// }



// input,
// textarea{


// width:100%;

// padding:14px;

// margin:10px 0;

// border-radius:12px;

// border:1px solid #ddd;

// font-size:15px;

// }



// textarea{

// height:120px;

// resize:none;

// }



// button{


// width:100%;

// padding:15px;

// border:none;

// border-radius:50px;

// background:
// linear-gradient(135deg,#2563eb,#06b6d4);

// color:white;

// font-size:18px;

// font-weight:700;

// cursor:pointer;

// }



// button:hover{

// transform:translateY(-3px);

// }



// </style>


// </head>


// <body>


// <div class="card">


// <h1>
// Contact Us
// </h1>



// <form action="/contact" method="POST">


// <input

// type="text"

// name="name"

// placeholder="Your Name"

// required>



// <input

// type="number"

// name="mobile"

// placeholder="Mobile Number"

// required>




// <textarea

// name="message"

// placeholder="Your Service Requirement"

// required></textarea>



// <button type="submit">

// Submit Request

// </button>



// </form>



// </div>



// </body>

// </html>


// `);


// });







// // ================= CONTACT POST =================





// router.post("/contact", async (req,res)=>{


// const {

// name,
// mobile,
// message

// }=req.body;



// try{


// const newContact = new Contact({

//     name:name,

//     mobile:mobile,

//     message:message

// });



// await newContact.save();



// console.log("CONTACT SAVED:", newContact);



// res.send(`

// <!DOCTYPE html>

// <html>

// <head>

// <title>Success</title>

// <style>

// body{

// font-family:Arial;
// background:#eef6ff;
// text-align:center;
// padding:50px;

// }


// .box{

// background:white;
// padding:30px;
// border-radius:20px;
// max-width:400px;
// margin:auto;
// box-shadow:0 10px 30px #0003;

// }


// h1{

// color:#16a34a;

// }


// </style>

// </head>


// <body>


// <div class="box">

// <h1>
// ✅ Request Submitted
// </h1>


// <p>
// Thank You ${name}
// </p>


// <p>
// We will contact you soon.
// </p>


// </div>


// </body>

// </html>

// `);


// }

// catch(err){

// console.log("CONTACT ERROR:",err);

// res.status(500)
// .send(err.message);

// }


// });





// module.exports = router;


const express = require("express");
const router = express.Router();


const Contact =
    require("../models/Contact");

const Banner =
    require("../models/Banner");

const Doctor =
    require("../models/Doctor");

const GovernmentPerson =
    require("../models/GovernmentPerson");

const Service =
    require("../models/Service");

const Student =
    require("../models/Student");

const Product =
    require("../models/Product");

const Home =
    require("../pages/Homepages");


// ======================================
// HOME PAGE
// ======================================

router.get(
    "/",
    async function (req, res) {

        try {

            // GET ACTIVE BANNERS

            const banners =
                await Banner
                    .find({
                        active: true
                    })
                    .sort({
                        createdAt: -1
                    })
                    .lean();


            // GET DOCTORS

            const doctors =
                await Doctor
                    .find({})
                    .sort({
                        createdAt: -1
                    })
                    .lean();


            // GET GOVERNMENT PERSONS

            const governmentPersons =
                await GovernmentPerson
                    .find({})
                    .sort({
                        createdAt: -1
                    })
                    .lean();


            // GET SERVICES

            const services =
                await Service
                    .find({})
                    .sort({
                        createdAt: -1
                    })
                    .lean();


            // GET STUDENTS

            const students =
                await Student
                    .find({})
                    .sort({
                        createdAt: -1
                    })
                    .lean();


            // GET MEDICINE PRODUCTS

            const products =
                await Product
                    .find({
                        isActive: {
                            $ne: false
                        }
                    })
                    .sort({
                        createdAt: -1
                    })
                    .limit(8)
                    .lean();


            // SEND ALL DATA TO HOME PAGE

            return res.send(
                Home(
                    banners,
                    doctors,
                    governmentPersons,
                    services,
                    students,
                    products
                )
            );

        } catch (error) {

            console.error(
                "HOME PAGE ERROR:",
                error
            );

            return res
                .status(500)
                .send(
                    "Home Page Load Failed: " +
                    error.message
                );

        }

    }
);


// ======================================
// CONTACT GET PAGE
// ======================================

router.get(
    "/contact",
    function (req, res) {

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
        Contact Us
    </title>


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
            min-height: 100vh;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 20px;

            background:
                linear-gradient(
                    135deg,
                    #e0f2fe,
                    #dbeafe
                );
        }


        .card {
            width: 100%;
            max-width: 500px;

            margin: auto;
            padding: 30px;

            background: #ffffff;

            border-radius: 25px;

            box-shadow:
                0 20px 50px
                rgba(0, 0, 0, 0.15);
        }


        h1 {
            margin-bottom: 10px;

            text-align: center;

            color: #2563eb;
        }


        .subtitle {
            margin-bottom: 20px;

            text-align: center;

            color: #64748b;

            font-size: 14px;
            line-height: 1.5;
        }


        label {
            display: block;

            margin-top: 13px;
            margin-bottom: 5px;

            color: #334155;

            font-size: 13px;
            font-weight: 700;
        }


        input,
        textarea {
            width: 100%;

            padding: 14px;

            border: 1px solid #dbe2ea;
            border-radius: 12px;

            outline: none;

            background: #ffffff;

            font-size: 15px;

            transition: 0.2s;
        }


        input:focus,
        textarea:focus {
            border-color: #2563eb;

            box-shadow:
                0 0 0 3px
                rgba(37, 99, 235, 0.12);
        }


        textarea {
            height: 120px;

            resize: vertical;
        }


        button {
            width: 100%;

            margin-top: 20px;
            padding: 15px;

            border: none;
            border-radius: 50px;

            color: #ffffff;

            background:
                linear-gradient(
                    135deg,
                    #2563eb,
                    #06b6d4
                );

            font-size: 18px;
            font-weight: 700;

            cursor: pointer;

            box-shadow:
                0 9px 22px
                rgba(37, 99, 235, 0.22);

            transition: 0.2s;
        }


        button:hover {
            transform:
                translateY(-2px);
        }


        button:active {
            transform:
                translateY(0);
        }


        .home-link {
            display: block;

            margin-top: 16px;

            text-align: center;

            color: #2563eb;

            text-decoration: none;

            font-size: 14px;
            font-weight: 700;
        }


        @media(max-width: 600px) {

            body {
                padding: 12px;
            }

            .card {
                padding: 24px 18px;

                border-radius: 20px;
            }

            h1 {
                font-size: 25px;
            }

        }

    </style>

</head>


<body>

    <div class="card">

        <h1>
            Contact Us
        </h1>

        <p class="subtitle">
            अपनी Service Requirement भेजें।
            हमारी Team आपसे संपर्क करेगी।
        </p>


        <form
            action="/contact"
            method="POST"
        >

            <label for="name">
                Your Name
            </label>

            <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
            >


            <label for="mobile">
                Mobile Number
            </label>

            <input
                id="mobile"
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                inputmode="numeric"
                pattern="[0-9]{10}"
                maxlength="10"
                required
            >


            <label for="message">
                Service Requirement
            </label>

            <textarea
                id="message"
                name="message"
                placeholder="अपनी Service Requirement लिखें"
                required
            ></textarea>


            <button type="submit">
                Submit Request
            </button>

        </form>


        <a
            href="/"
            class="home-link"
        >
            ← Go Back Home
        </a>

    </div>

</body>

</html>

        `);

    }
);


// ======================================
// CONTACT POST
// ======================================

router.post(
    "/contact",
    async function (req, res) {

        try {

            const body =
                req.body || {};


            const name =
                String(
                    body.name || ""
                ).trim();


            const mobile =
                String(
                    body.mobile || ""
                )
                    .replace(/\D/g, "")
                    .trim();


            const message =
                String(
                    body.message || ""
                ).trim();


            if (
                !name ||
                !mobile ||
                !message
            ) {

                return res
                    .status(400)
                    .send(
                        "Name, Mobile and Message are required."
                    );

            }


            if (
                mobile.length !== 10
            ) {

                return res
                    .status(400)
                    .send(
                        "Please enter a valid 10-digit mobile number."
                    );

            }


            const newContact =
                new Contact({

                    name: name,

                    mobile: mobile,

                    message: message

                });


            await newContact.save();


            console.log(
                "CONTACT SAVED:",
                newContact._id
            );


            const safeName =
                name
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");


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
        Request Submitted
    </title>


    <style>

        * {
            box-sizing: border-box;
        }


        body {
            min-height: 100vh;

            display: flex;
            align-items: center;
            justify-content: center;

            margin: 0;
            padding: 20px;

            font-family:
                Arial,
                sans-serif;

            background:
                linear-gradient(
                    135deg,
                    #eef6ff,
                    #dcfce7
                );
        }


        .box {
            width: 100%;
            max-width: 420px;

            padding: 35px 25px;

            text-align: center;

            background: #ffffff;

            border-radius: 22px;

            box-shadow:
                0 15px 40px
                rgba(0, 0, 0, 0.14);
        }


        .success-icon {
            width: 75px;
            height: 75px;

            display: flex;
            align-items: center;
            justify-content: center;

            margin: 0 auto 18px;

            color: #ffffff;
            background: #16a34a;

            border-radius: 50%;

            font-size: 38px;
        }


        h1 {
            margin: 0 0 15px;

            color: #16a34a;

            font-size: 27px;
        }


        p {
            margin: 8px 0;

            color: #475569;

            line-height: 1.5;
        }


        strong {
            color: #0f172a;
        }


        a {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            margin-top: 20px;
            padding: 12px 22px;

            color: #ffffff;
            background: #2563eb;

            border-radius: 30px;

            text-decoration: none;

            font-weight: 700;
        }

    </style>

</head>


<body>

    <div class="box">

        <div class="success-icon">
            ✓
        </div>

        <h1>
            Request Submitted
        </h1>

        <p>
            Thank You,
            <strong>
                ${safeName}
            </strong>
        </p>

        <p>
            आपकी Request सफलतापूर्वक मिल गई है।
            हमारी Team आपसे जल्द संपर्क करेगी।
        </p>

        <a href="/">
            Go Home
        </a>

    </div>

</body>

</html>

            `);

        } catch (error) {

            console.error(
                "CONTACT ERROR:",
                error
            );

            return res
                .status(500)
                .send(
                    "Contact request failed: " +
                    error.message
                );

        }

    }
);


module.exports = router;
