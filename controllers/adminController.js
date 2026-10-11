// const ManageBanners = require("../pages/ManageBanner");
// const AddBanner = require("../pages/addpages/addBanner");
// const Banner = require("../models/Banner");

// // Add Banner Page
// exports.addBannerPage = (req, res) => {
//     res.send(AddBanner());
// };

// // Save Banner
// exports.saveBanner = async (req, res) => {
//     try {

//         if (!req.file) {
//             return res.status(400).send("Please upload a banner image.");
//         }

//         const banner = new Banner({
//             title: req.body.title,
//             image: "/storage/uploads/" + req.file.filename,
//             link: req.body.link,
//             active: true
//         });

//         await banner.save();

//         res.redirect("/admin/manage-banner");

//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err.message);
//     }
// };

// // Manage Banner Page
// exports.manageBanners = async (req, res) => {
//     try {

//         const banners = await Banner.find().sort({ createdAt: -1 });

//         res.send(ManageBanners(banners));

//     } catch (err) {
//         console.log(err);
//         res.status(500).send("Error Loading Banners");
//     }
// };


// exports.deleteBanner = async (req, res) => {

//     try {

//         await Banner.findByIdAndDelete(req.params.id);

//         res.redirect("/admin/manage-banner");

//     } catch (err) {

//         console.log(err);
//         res.status(500).send("Delete Banner Failed");

//     }

// };

const ManageBanners = require("../pages/ManageBanner");
const AddBanner = require("../pages/addpages/addBanner");
const Banner = require("../models/Banner");


// Add Banner Page
exports.addBannerPage = (req, res) => {
    res.send(AddBanner());
};


// Save Banner
// exports.saveBanner = async (req, res) => {

//     try {

//         console.log("BODY:", req.body);
//         console.log("FILE:", req.file);


//         if (!req.file) {
//             return res.status(400).send("Please upload a banner image.");
//         }


//         const banner = new Banner({

//             title: req.body.title,

//             image: req.file.path,

//             link: req.body.link,

//             active: true

//         });


//         await banner.save();


//         res.redirect("/admin/manage-banner");


//     } catch (err) {

//         console.log("SAVE BANNER ERROR:", err.message);

//         res.status(500).send(err.message);

//     }

// };


exports.saveBanner = async (req,res)=>{

    try{

        console.log("BODY => ", req.body);
        console.log("FILE => ", req.file);


        if(!req.file){

            return res.status(400).send(
                "Image file not received"
            );

        }


        const banner = new Banner({

            title:req.body.title,

            image:req.file.path,

            link:req.body.link,

            active:true

        });


        await banner.save();


        res.redirect("/admin/manage-banner");


    }
    catch(err){

        console.log("SAVE ERROR => ",err);

        res.status(500).send(`
            <h2>Server Error</h2>
            <pre>${err.stack}</pre>
        `);

    }

};

// Manage Banner Page
exports.manageBanners = async (req, res) => {

    try {


        const banners = await Banner
        .find()
        .sort({ createdAt: -1 });



        res.send(ManageBanners(banners));



    } catch (err) {


        console.log(err);


        res.status(500)
        .send("Error Loading Banners");


    }

};



// Delete Banner
exports.deleteBanner = async (req, res) => {

    try {


        await Banner.findByIdAndDelete(req.params.id);


        res.redirect("/admin/manage-banner");



    } catch (err) {


        console.log(err);


        res.status(500)
        .send("Delete Banner Failed");


    }

};
