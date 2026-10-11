

require("dotenv").config();

const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();

// Trust Hostinger reverse proxy
app.set("trust proxy", 1);


// ===============================
// DATABASE
// ===============================

require("./config/database");



// ===============================
// BODY PARSER
// ===============================

app.use(
    express.urlencoded({
        extended:true
    })
);


app.use(
    express.json()
);



// ===============================
// SESSION
// ===============================

app.use(
session({

    secret:"GLOBAL_HEALTHCARE_SECRET",

    resave:false,

    saveUninitialized:false,

    cookie:{

        maxAge:
        1000 * 60 * 60 * 24

    }

})
);



// ===============================
// STATIC FILES
// ===============================


app.use(
"/storage",
express.static(
path.join(__dirname,"storage")
)
);



app.use(
"/uploads",
express.static(
path.join(__dirname,"uploads")
)
);



app.use(
express.static(
path.join(__dirname,"public")
)
);



// ===============================
// ROUTES
// ===============================


// Home

const indexRoutes =
require("./routes/index");

app.use(
"/",
indexRoutes
);




// Admin

const adminRoutes =
require("./routes/admin");

app.use(
"/admin",
adminRoutes
);




// Doctor

const doctorRoutes =
require("./routes/doctor");

app.use(
"/doctor",
doctorRoutes
);




// Appointment

const appointmentRoute =
require("./routes/appointment");

console.log(
"Appointment Route Loaded"
);


app.use(
"/appointment",
appointmentRoute
);




// Service

const serviceRoutes =
require("./routes/service");


app.use(
"/",
serviceRoutes
);




// Auth

const authRoutes =
require("./routes/auth");


app.use(
"/",
authRoutes
);




const storeRouter = require("./doctor/dhhpb/store");

app.use(
    "/doctor/public",
    express.static(
        path.join(
            __dirname,
            "doctor",
            "public"
        )
    )
);
app.use(
    "/doctor",
    storeRouter
);


// ===============================
// VIEW ENGINE
// ===============================


app.set(
"view engine",
"ejs"
);


app.set(
"views",
path.join(
__dirname,
"views"
)
);





// ===============================
// ERROR HANDLER
// ===============================


app.use(
(err,req,res,next)=>{


console.log(err);


res.status(500).send(`

<h2>
Server Error
</h2>

<pre>
${err.stack || err.message}
</pre>

`);


});





// ===============================
// SERVER START
// ===============================


// const PORT =
// process.env.PORT || 3000;



// app.listen(
// PORT,
// ()=>{

// console.log(
// `Server Running on Port ${PORT}`
// );

// }
// );

// Cart
const cartRoutes = require("./routes/cart");

app.use(
    "/api/cart",
    cartRoutes
);


const rapidoRouter =
    require("./routes/rapido");

app.use(
    "/api/rapido",
    rapidoRouter
);

// ===============================
// MINI SABJI SHOP
// ===============================

const vegetableRoutes =
    require("./routes/vegetable");

app.use(
    "/",
    vegetableRoutes
);

const RapidoTracker =
    require("./views/RapidoTracker");

app.get(
    "/rapido-tracker",
    (req, res) => {

        try {

            return res.send(
                RapidoTracker()
            );

        }
        catch (error) {

            console.error(
                "RAPIDO TRACKER PAGE ERROR:",
                error
            );

            return res
                .status(500)
                .send(
                    "Rapido Tracker Page Error"
                );
        }

    }
);

const AIPresenterVideo =
    require("./views/AIPresenterVideo");

app.get(
    "/ai-video",
    function(req, res) {

        res.send(
            AIPresenterVideo()
        );

    }
);


app.use(
    express.json({
        limit: "2mb"
    })
);


// ======================================
// AI TEXT TO SPEECH
// ======================================

app.post(
    "/api/free-presenter-voice",
    async function (req, res) {

        try {

            const text =
                String(
                    req.body.text || ""
                ).trim();


            if (!text) {

                return res.status(400).json({
                    success: false,
                    message:
                        "Presenter Script required."
                });

            }


            if (text.length > 4000) {

                return res.status(400).json({
                    success: false,
                    message:
                        "Script बहुत लंबा है।"
                });

            }


            if (!process.env.OPENAI_API_KEY) {

                return res.status(500).json({
                    success: false,
                    message:
                        "OPENAI_API_KEY missing."
                });

            }


            const aiResponse =
                await fetch(
                    "https://api.openai.com/v1/audio/speech",
                    {
                        method: "POST",

                        headers: {

                            "Authorization":
                                "Bearer " +
                                process.env.OPENAI_API_KEY,

                            "Content-Type":
                                "application/json"

                        },

                        body: JSON.stringify({

                            model:
                                "gpt-4o-mini-tts",

                            voice:
                                "onyx",

                            input:
                                text,

                            instructions:
                                "Speak in natural, clear Hindi. Use a professional Indian male presenter style. Speak calmly and clearly like a healthcare explainer. Correctly pronounce Hindi and English product names."

                        })

                    }
                );


            if (!aiResponse.ok) {

                const errorText =
                    await aiResponse.text();


                console.error(
                    "AI VOICE ERROR:",
                    errorText
                );


                return res.status(500).json({
                    success: false,
                    message:
                        "AI voice generate नहीं हुई।"
                });

            }


            const arrayBuffer =
                await aiResponse.arrayBuffer();


            const audioBuffer =
                Buffer.from(
                    arrayBuffer
                );


            res.setHeader(
                "Content-Type",
                "audio/mpeg"
            );


            res.setHeader(
                "Content-Length",
                audioBuffer.length
            );


            res.send(
                audioBuffer
            );

        }
        catch (error) {

            console.error(
                "AI PRESENTER VOICE ERROR:",
                error
            );


            res.status(500).json({
                success: false,
                message:
                    "AI Voice Generation Failed"
            });

        }

    }
);


const fs = require("fs");

const os = require("os");
const crypto = require("crypto");

const { EdgeTTS } = require("node-edge-tts");


app.use(
    express.json({
        limit: "2mb"
    })
);


app.post(
    "/api/free-presenter-voice",
    async function(req, res) {

        let audioPath = null;

        try {

            const text =
                String(
                    req.body.text || ""
                ).trim();


            if (!text) {

                return res.status(400).json({
                    success: false,
                    message: "Presenter Script required"
                });

            }


            audioPath =
                path.join(
                    os.tmpdir(),
                    "hhgs-" +
                    crypto.randomUUID() +
                    ".mp3"
                );


            const tts =
                new EdgeTTS({

                    voice:
                        "hi-IN-MadhurNeural",

                    lang:
                        "hi-IN",

                    outputFormat:
                        "audio-24khz-96kbitrate-mono-mp3",

                    rate:
                        "+0%",

                    pitch:
                        "+0Hz",

                    volume:
                        "+0%",

                    timeout:
                        30000

                });


            await tts.ttsPromise(
                text,
                audioPath
            );


            res.setHeader(
                "Content-Type",
                "audio/mpeg"
            );


            const stream =
                fs.createReadStream(
                    audioPath
                );


            stream.pipe(res);


            stream.on(
                "close",
                function() {

                    fs.unlink(
                        audioPath,
                        function() {}
                    );

                }
            );

        }
        catch(error) {

            console.error(
                "FREE TTS ERROR:",
                error
            );


            if (
                audioPath &&
                fs.existsSync(audioPath)
            ) {

                fs.unlink(
                    audioPath,
                    function() {}
                );

            }


            res.status(500).json({
                success: false,
                message:
                    "Free Hindi voice generate नहीं हुई"
            });

        }

    });


const StudentProfile =
    require("./pages/studentProfile");

const Student =
    require("./models/Student");


app.get(
    "/student/:id",

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
                        "Student Not Found"
                    );

            }


            return res.send(
                StudentProfile(student)
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

    }
);


const StudentIdCard =
    require("./pages/studentIdCard");


app.get(
    "/student-id-card/:id",

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
                        "Student Not Found"
                    );

            }


            return res.send(
                StudentIdCard(student)
            );


        } catch (error) {

            console.error(
                "STUDENT ID CARD ERROR:",
                error
            );


            return res
                .status(500)
                .send(
                    "Student ID Card Error: " +
                    error.message
                );

        }

    }
);

// Government

const governmentRoutes =
    require("./routes/government");

app.use(
    "/government",
    governmentRoutes
);

// const quickServiceRoutes =
//     require("./routes/quickService");

// app.use(
//     "/",
//     quickServiceRoutes
// );

const quickServiceRoutes =
    require("./routes/quickService");

app.use(
    "/",
    quickServiceRoutes
);


const customerBakayaRoutes = require("./routes/customerBakaya");

app.use(customerBakayaRoutes);


// ===============================
// SERVER START
// ===============================

const PORT = process.env.PORT || 3000;

app.listen(
    PORT,
    "0.0.0.0",
    () => {
        console.log(`Server Running on Port ${PORT}`);
    }
);
