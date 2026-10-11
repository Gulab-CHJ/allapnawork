function AIPresenterVideo() {

    return `
<!DOCTYPE html>
<html lang="hi">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>HHGS Free AI Presenter</title>

<style>

* {
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    margin: 0;
    padding: 0;
}

body {
    min-height: 100vh;

    font-family:
        Arial,
        sans-serif;

    color: #172033;

    background: #eef4ff;
}


/* ==============================
   HEADER
============================== */

.header {

    padding: 20px 15px;

    text-align: center;

    color: #ffffff;

    background:
        linear-gradient(
            135deg,
            #075985,
            #2563eb
        );

}

.header h1 {

    margin: 0;

    font-size: 27px;

}

.header p {

    margin: 8px 0 0;

    font-size: 14px;

    opacity: .9;

}


/* ==============================
   MAIN
============================== */

.main {

    width:
        min(
            1250px,
            95%
        );

    margin:
        24px auto;

    display: grid;

    grid-template-columns:
        390px
        minmax(
            0,
            1fr
        );

    gap: 22px;

}


/* ==============================
   PANEL
============================== */

.panel {

    padding: 20px;

    background: #ffffff;

    border-radius: 18px;

    box-shadow:
        0 10px 35px
        rgba(
            0,
            0,
            0,
            .08
        );

}

.panel h2 {

    margin:
        0 0 5px;

    color: #123c77;

}

label {

    display: block;

    margin-top: 17px;
    margin-bottom: 7px;

    color: #27364c;

    font-size: 14px;
    font-weight: 800;

}


/* ==============================
   INPUTS
============================== */

input,
textarea,
select {

    width: 100%;

    padding: 12px;

    border:
        1px solid
        #cbd5e1;

    border-radius: 10px;

    font-family: inherit;

    font-size: 14px;

    outline: none;

    background: #ffffff;

}

textarea {

    min-height: 230px;

    line-height: 1.6;

    resize: vertical;

}

input:focus,
textarea:focus,
select:focus {

    border-color: #2563eb;

}


/* ==============================
   FILE
============================== */

.file-box {

    padding: 15px;

    background: #f8fafc;

    border:
        2px dashed
        #94a3b8;

    border-radius: 12px;

}


/* ==============================
   BUTTONS
============================== */

button {

    width: 100%;

    margin-top: 12px;

    padding: 14px;

    border: 0;

    border-radius: 11px;

    font-size: 15px;

    font-weight: 800;

    cursor: pointer;

}

button:disabled {

    opacity: .5;

    cursor: not-allowed;

}

.btn-start {

    color: #ffffff;

    background:
        linear-gradient(
            135deg,
            #16a34a,
            #15803d
        );

}

.btn-pause {

    color: #ffffff;

    background: #f59e0b;

}

.btn-resume {

    color: #ffffff;

    background: #2563eb;

}

.btn-stop {

    color: #ffffff;

    background: #dc2626;

}

.btn-test {

    color: #ffffff;

    background: #7c3aed;

}


/* ==============================
   STATUS
============================== */

.status {

    margin-top: 15px;

    padding: 12px;

    color: #334155;

    background: #f1f5f9;

    border-radius: 10px;

    font-size: 13px;

    line-height: 1.5;

}

.free-badge {

    display: inline-block;

    margin-top: 10px;

    padding:
        5px 10px;

    color: #166534;

    background: #dcfce7;

    border-radius: 20px;

    font-size: 11px;

    font-weight: 900;

}


/* ==============================
   PROGRESS
============================== */

.progress-wrap {

    width: 100%;

    height: 11px;

    margin-top: 10px;

    overflow: hidden;

    background: #e2e8f0;

    border-radius: 20px;

}

.progress {

    width: 0%;

    height: 100%;

    background:
        linear-gradient(
            90deg,
            #16a34a,
            #22c55e
        );

    transition:
        width .25s linear;

}


/* ==============================
   PREVIEW
============================== */

.preview {

    min-width: 0;

    padding: 14px;

    background: #101827;

    border-radius: 18px;

}

.canvas-box {

    width: 100%;

    aspect-ratio: 16 / 9;

    overflow: hidden;

    background: #000000;

    border-radius: 13px;

}

canvas {

    display: block;

    width: 100%;

    height: 100%;

}


/* ==============================
   MOBILE
============================== */

@media(
    max-width: 850px
) {

    .main {

        width:
            calc(
                100% - 18px
            );

        margin:
            10px auto;

        grid-template-columns:
            1fr;

    }

    .panel {

        padding: 15px;

    }

    .preview {

        padding: 7px;

    }

    .header h1 {

        font-size: 21px;

    }

}

</style>

</head>


<body>


<header class="header">

    <h1>
        🎬 HHGS Free AI Presenter
    </h1>

    <p>
        Photo + Script → Free Hindi Voice
    </p>

</header>



<main class="main">


<div class="panel">


    <h2>
        Presenter Settings
    </h2>


    <span class="free-badge">
        ✓ No API Key • Free Browser Voice
    </span>



    <label
        for="photoInput"
    >
        👨 Presenter Photo
    </label>


    <div class="file-box">

        <input
            type="file"
            id="photoInput"
            accept="
                image/png,
                image/jpeg,
                image/webp
            "
        >

    </div>



    <label
        for="scriptInput"
    >
        📝 Presenter Script
    </label>


    <textarea
        id="scriptInput"
    >नमस्कार! आज मैं आपको ELECTROWEL ORS के बारे में बताने वाला हूँ।

दस्त, उल्टी या ज्यादा पसीना आने पर शरीर से पानी और जरूरी इलेक्ट्रोलाइट्स की कमी हो सकती है।

ELECTROWEL ORS का एक पूरा सैशे एक लीटर साफ पानी में अच्छी तरह घोलें।

तैयार ओ आर एस को छोटे-छोटे घूंट में धीरे-धीरे पिएँ।

तैयार घोल को 24 घंटे के अंदर इस्तेमाल करें।</textarea>



    <label
        for="titleInput"
    >
        🏷 Video Title
    </label>


    <input
        type="text"
        id="titleInput"
        value="ELECTROWEL ORS"
    >



    <label
        for="voiceSelect"
    >
        🗣 Hindi Voice
    </label>


    <select id="voiceSelect">

        <option value="">
            Hindi Voice Loading...
        </option>

    </select>



    <label
        for="rateInput"
    >
        ⏱ Voice Speed
    </label>


    <select id="rateInput">

        <option value="0.75">
            Slow
        </option>

        <option
            value="0.9"
            selected
        >
            Normal
        </option>

        <option value="1">
            Normal Fast
        </option>

        <option value="1.1">
            Fast
        </option>

    </select>



    <button
        type="button"
        id="testVoiceButton"
        class="btn-test"
    >
        🔊 Test Hindi Voice
    </button>



    <button
        type="button"
        id="startButton"
        class="btn-start"
    >
        ▶ Start Presenter
    </button>



    <button
        type="button"
        id="pauseButton"
        class="btn-pause"
        disabled
    >
        ⏸ Pause
    </button>



    <button
        type="button"
        id="resumeButton"
        class="btn-resume"
        disabled
    >
        ▶ Resume
    </button>



    <button
        type="button"
        id="stopButton"
        class="btn-stop"
        disabled
    >
        ⏹ Stop
    </button>



    <div
        class="status"
        id="statusBox"
    >
        Photo upload करें और Presenter Script लिखें।
    </div>



    <div class="progress-wrap">

        <div
            id="progressBar"
            class="progress"
        ></div>

    </div>


</div>



<div class="preview">


    <div class="canvas-box">

        <canvas
            id="canvas"
            width="1280"
            height="720"
        ></canvas>

    </div>


</div>


</main>



<script>

(function () {


/* ==============================
   ELEMENTS
============================== */

const canvas =
    document.getElementById(
        "canvas"
    );


const ctx =
    canvas.getContext(
        "2d"
    );


const photoInput =
    document.getElementById(
        "photoInput"
    );


const scriptInput =
    document.getElementById(
        "scriptInput"
    );


const titleInput =
    document.getElementById(
        "titleInput"
    );


const voiceSelect =
    document.getElementById(
        "voiceSelect"
    );


const rateInput =
    document.getElementById(
        "rateInput"
    );


const testVoiceButton =
    document.getElementById(
        "testVoiceButton"
    );


const startButton =
    document.getElementById(
        "startButton"
    );


const pauseButton =
    document.getElementById(
        "pauseButton"
    );


const resumeButton =
    document.getElementById(
        "resumeButton"
    );


const stopButton =
    document.getElementById(
        "stopButton"
    );


const statusBox =
    document.getElementById(
        "statusBox"
    );


const progressBar =
    document.getElementById(
        "progressBar"
    );



/* ==============================
   VARIABLES
============================== */

let presenterImage =
    null;


let presenterImageURL =
    null;


let voices =
    [];


let scriptParts =
    [];


let currentPartIndex =
    0;


let animationFrameID =
    null;


let animationStartTime =
    0;


let presenterRunning =
    false;



/* ==============================
   ROUND RECTANGLE
============================== */

function makeRoundRect(
    x,
    y,
    width,
    height,
    radius
) {

    ctx.beginPath();


    if (
        typeof ctx.roundRect ===
        "function"
    ) {

        ctx.roundRect(
            x,
            y,
            width,
            height,
            radius
        );


        return;

    }


    ctx.moveTo(
        x + radius,
        y
    );


    ctx.lineTo(
        x + width - radius,
        y
    );


    ctx.quadraticCurveTo(
        x + width,
        y,
        x + width,
        y + radius
    );


    ctx.lineTo(
        x + width,
        y + height - radius
    );


    ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
    );


    ctx.lineTo(
        x + radius,
        y + height
    );


    ctx.quadraticCurveTo(
        x,
        y + height,
        x,
        y + height - radius
    );


    ctx.lineTo(
        x,
        y + radius
    );


    ctx.quadraticCurveTo(
        x,
        y,
        x + radius,
        y
    );


    ctx.closePath();

}



/* ==============================
   DEFAULT SCREEN
============================== */

function drawDefault() {

    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            1280,
            720
        );


    gradient.addColorStop(
        0,
        "#06172f"
    );


    gradient.addColorStop(
        1,
        "#075985"
    );


    ctx.fillStyle =
        gradient;


    ctx.fillRect(
        0,
        0,
        1280,
        720
    );


    ctx.textAlign =
        "center";


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "bold 50px Arial";


    ctx.fillText(
        "HHGS Free AI Presenter",
        640,
        310
    );


    ctx.fillStyle =
        "#bfdbfe";


    ctx.font =
        "25px Arial";


    ctx.fillText(
        "Upload Photo + Write Presenter Script",
        640,
        370
    );


    ctx.font =
        "bold 18px Arial";


    ctx.fillStyle =
        "#86efac";


    ctx.fillText(
        "No API Key Required",
        640,
        420
    );

}


drawDefault();



/* ==============================
   LOAD PHOTO
============================== */

photoInput.addEventListener(
    "change",
    function () {

        const file =
            photoInput.files[0];


        if (!file) {

            return;

        }


        if (
            presenterImageURL
        ) {

            URL.revokeObjectURL(
                presenterImageURL
            );

        }


        presenterImageURL =
            URL.createObjectURL(
                file
            );


        const image =
            new Image();


        image.onload =
            function () {

                presenterImage =
                    image;


                drawPresenterFrame(
                    "",
                    0,
                    0
                );


                statusBox.textContent =
                    "✅ Presenter Photo Ready";

            };


        image.onerror =
            function () {

                alert(
                    "Photo load नहीं हुआ।"
                );

            };


        image.src =
            presenterImageURL;

    }
);



/* ==============================
   LOAD VOICES
============================== */

function loadVoices() {

    voices =
        window.speechSynthesis
            .getVoices();


    voiceSelect.innerHTML =
        "";


    const hindiVoices =
        voices.filter(
            function (
                voice
            ) {

                return (
                    String(
                        voice.lang
                    )
                        .toLowerCase()
                        .startsWith(
                            "hi"
                        )
                );

            }
        );


    const finalVoices =
        hindiVoices.length
            ? hindiVoices
            : voices;


    if (
        !finalVoices.length
    ) {

        const option =
            document.createElement(
                "option"
            );


        option.value =
            "";


        option.textContent =
            "Default Browser Voice";


        voiceSelect.appendChild(
            option
        );


        return;

    }


    finalVoices.forEach(
        function (
            voice
        ) {

            const originalIndex =
                voices.indexOf(
                    voice
                );


            const option =
                document.createElement(
                    "option"
                );


            option.value =
                String(
                    originalIndex
                );


            option.textContent =
                voice.name +
                " (" +
                voice.lang +
                ")";


            voiceSelect.appendChild(
                option
            );

        }
    );

}


loadVoices();


if (
    "onvoiceschanged" in
    window.speechSynthesis
) {

    window.speechSynthesis
        .onvoiceschanged =
        loadVoices;

}



/* ==============================
   GET SELECTED VOICE
============================== */

function getSelectedVoice() {

    const index =
        Number(
            voiceSelect.value
        );


    if (
        Number.isInteger(
            index
        ) &&
        voices[index]
    ) {

        return voices[index];

    }


    const hindi =
        voices.find(
            function (
                voice
            ) {

                return String(
                    voice.lang
                )
                    .toLowerCase()
                    .startsWith(
                        "hi"
                    );

            }
        );


    return (
        hindi ||
        null
    );

}



/* ==============================
   TEST VOICE
============================== */

testVoiceButton.addEventListener(
    "click",
    function () {

        window.speechSynthesis
            .cancel();


        const utterance =
            new SpeechSynthesisUtterance(
                "नमस्कार। यह एच एच जी एस हिंदी प्रेजेंटर वॉइस टेस्ट है।"
            );


        utterance.lang =
            "hi-IN";


        utterance.rate =
            Number(
                rateInput.value
            ) || .9;


        const selectedVoice =
            getSelectedVoice();


        if (
            selectedVoice
        ) {

            utterance.voice =
                selectedVoice;

        }


        window.speechSynthesis
            .speak(
                utterance
            );

    }
);



/* ==============================
   SCRIPT PARTS
============================== */

function getScriptParts() {

    const script =
        scriptInput.value
            .trim();


    if (!script) {

        return [];

    }


    let parts =
        script
            .replace(
                /\\r/g,
                ""
            )
            .split(
                /(?:\\n\\s*\\n)|(?<=[।.!?])\\s+/
            )
            .map(
                function (
                    part
                ) {

                    return part.trim();

                }
            )
            .filter(
                Boolean
            );


    if (
        !parts.length
    ) {

        parts =
            [script];

    }


    return parts;

}


/* ==============================
   GENERATE FREE AI VOICE
============================== */

async function generateAIVoice(text) {

    statusBox.textContent =
        "🎤 Free Hindi Voice बन रही है...";


    const response =
        await fetch(
            "/api/free-presenter-voice",
            {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify({
                        text: text
                    })

            }
        );


    if (!response.ok) {

        let message =
            "Voice Generation Failed";


        try {

            const errorData =
                await response.json();


            message =
                errorData.message ||
                message;

        }
        catch (error) {}


        throw new Error(
            message
        );

    }


    return await response.blob();

}



/* ==============================
   WRAP TEXT
============================== */

function wrapText(
    text,
    maxWidth
) {

    const words =
        String(
            text
        ).split(
            /\\s+/
        );


    const lines =
        [];


    let line =
        "";


    for (
        let i = 0;
        i < words.length;
        i++
    ) {

        const testLine =
            line +
            words[i] +
            " ";


        if (
            ctx.measureText(
                testLine
            ).width >
                maxWidth &&
            line
        ) {

            lines.push(
                line.trim()
            );


            line =
                words[i] +
                " ";

        }
        else {

            line =
                testLine;

        }

    }


    if (
        line.trim()
    ) {

        lines.push(
            line.trim()
        );

    }


    return lines;

}



/* ==============================
   DRAW COVER IMAGE
============================== */

function drawCoverImage(
    image,
    x,
    y,
    width,
    height,
    zoom
) {

    const imageRatio =
        image.width /
        image.height;


    const boxRatio =
        width /
        height;


    let sourceWidth =
        image.width;


    let sourceHeight =
        image.height;


    if (
        imageRatio >
        boxRatio
    ) {

        sourceWidth =
            image.height *
            boxRatio;

    }
    else {

        sourceHeight =
            image.width /
            boxRatio;

    }


    const sourceX =
        (
            image.width -
            sourceWidth
        ) / 2;


    const sourceY =
        (
            image.height -
            sourceHeight
        ) / 2;


    const finalWidth =
        width *
        zoom;


    const finalHeight =
        height *
        zoom;


    ctx.drawImage(

        image,

        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,

        x -
        (
            finalWidth -
            width
        ) / 2,

        y -
        (
            finalHeight -
            height
        ) / 2,

        finalWidth,
        finalHeight

    );

}



/* ==============================
   DRAW FRAME
============================== */

function drawPresenterFrame(
    caption,
    elapsed,
    progress
) {

    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            1280,
            720
        );


    gradient.addColorStop(
        0,
        "#06172f"
    );


    gradient.addColorStop(
        .55,
        "#075985"
    );


    gradient.addColorStop(
        1,
        "#0284c7"
    );


    ctx.fillStyle =
        gradient;


    ctx.fillRect(
        0,
        0,
        1280,
        720
    );



    /* BACKGROUND CIRCLE */

    ctx.save();


    ctx.globalAlpha =
        .1;


    ctx.fillStyle =
        "#ffffff";


    ctx.beginPath();


    ctx.arc(
        1080,
        100,
        190,
        0,
        Math.PI * 2
    );


    ctx.fill();


    ctx.beginPath();


    ctx.arc(
        1180,
        620,
        250,
        0,
        Math.PI * 2
    );


    ctx.fill();


    ctx.restore();



    /* PHOTO */

    if (
        presenterImage
    ) {

        const zoom =
            1 +
            (
                Math.sin(
                    elapsed *
                    1.5
                ) *
                .012
            );


        ctx.save();


        makeRoundRect(
            45,
            55,
            510,
            610,
            28
        );


        ctx.clip();


        drawCoverImage(
            presenterImage,
            45,
            55,
            510,
            610,
            zoom
        );


        ctx.restore();



        ctx.save();


        makeRoundRect(
            45,
            55,
            510,
            610,
            28
        );


        ctx.strokeStyle =
            "rgba(255,255,255,.7)";


        ctx.lineWidth =
            4;


        ctx.stroke();


        ctx.restore();

    }



    /* TITLE */

    ctx.textAlign =
        "left";


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "bold 47px Arial";


    ctx.fillText(
        titleInput.value ||
            "AI Presenter",
        610,
        110
    );


    ctx.fillStyle =
        "#bfdbfe";


    ctx.font =
        "23px Arial";


    ctx.fillText(
        "Hindi Explanation",
        612,
        150
    );



    /* CAPTION BOX */

    ctx.fillStyle =
        "rgba(0,0,0,.45)";


    makeRoundRect(
        590,
        220,
        635,
        315,
        22
    );


    ctx.fill();



    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "bold 31px Arial";


    const lines =
        wrapText(
            caption ||
            "Presenter Script यहाँ दिखाई देगा।",
            550
        );


    let y =
        285;


    lines
        .slice(
            0,
            6
        )
        .forEach(
            function (
                line
            ) {

                ctx.fillText(
                    line,
                    625,
                    y
                );


                y +=
                    48;

            }
        );



    /* LABEL */

    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "bold 21px Arial";


    ctx.fillText(
        "🎤 Free Hindi Presenter",
        615,
        600
    );



    /* PROGRESS */

    ctx.fillStyle =
        "rgba(255,255,255,.2)";


    ctx.fillRect(
        610,
        650,
        550,
        9
    );


    ctx.fillStyle =
        "#ffffff";


    ctx.fillRect(
        610,
        650,
        550 *
        Math.max(
            0,
            Math.min(
                1,
                progress
            )
        ),
        9
    );



    ctx.textAlign =
        "right";


    ctx.fillStyle =
        "rgba(255,255,255,.75)";


    ctx.font =
        "bold 14px Arial";


    ctx.fillText(
        "HHGS • Human Healthy Global Services",
        1215,
        695
    );


    ctx.textAlign =
        "left";

}



/* ==============================
   ANIMATION
============================== */

function startAnimation() {

    cancelAnimationFrame(
        animationFrameID
    );


    animationStartTime =
        performance.now();


    function animate() {

        if (
            !presenterRunning
        ) {

            return;

        }


        const elapsed =
            (
                performance.now() -
                animationStartTime
            ) / 1000;


        const progress =
            scriptParts.length
                ? (
                    currentPartIndex /
                    scriptParts.length
                )
                : 0;


        drawPresenterFrame(
            scriptParts[
                currentPartIndex
            ] ||
            "",
            elapsed,
            progress
        );


        animationFrameID =
            requestAnimationFrame(
                animate
            );

    }


    animate();

}



/* ==============================
   SPEAK ONE PART
============================== */

function speakCurrentPart() {

    if (
        !presenterRunning
    ) {

        return;

    }


    if (
        currentPartIndex >=
        scriptParts.length
    ) {

        finishPresenter();


        return;

    }


    const text =
        scriptParts[
            currentPartIndex
        ];


    const utterance =
        new SpeechSynthesisUtterance(
            text
        );


    utterance.lang =
        "hi-IN";


    utterance.rate =
        Number(
            rateInput.value
        ) || .9;


    utterance.pitch =
        1;


    utterance.volume =
        1;


    const voice =
        getSelectedVoice();


    if (
        voice
    ) {

        utterance.voice =
            voice;

    }


    const percentage =
        (
            currentPartIndex /
            scriptParts.length
        ) *
        100;


    progressBar.style.width =
        percentage +
        "%";


    statusBox.textContent =
        "🎤 बोल रहा है: " +
        (
            currentPartIndex +
            1
        ) +
        " / " +
        scriptParts.length;


    drawPresenterFrame(
        text,
        0,
        currentPartIndex /
            scriptParts.length
    );


    utterance.onend =
        function () {

            if (
                !presenterRunning
            ) {

                return;

            }


            currentPartIndex++;


            setTimeout(
                function () {

                    speakCurrentPart();

                },
                250
            );

        };


    utterance.onerror =
        function (
            event
        ) {

            console.error(
                "Speech error:",
                event
            );


            statusBox.textContent =
                "❌ Voice Error";


            presenterRunning =
                false;


            updateButtons();

        };


    window.speechSynthesis
        .speak(
            utterance
        );

}



/* ==============================
   START
============================== */

startButton.addEventListener(
    "click",
    function () {

        if (
            !(
                "speechSynthesis" in
                window
            )
        ) {

            alert(
                "इस browser में Speech Voice support नहीं है। Chrome या Edge इस्तेमाल करें।"
            );


            return;

        }


        if (
            !presenterImage
        ) {

            alert(
                "पहले Presenter Photo upload करें।"
            );


            return;

        }


        scriptParts =
            getScriptParts();


        if (
            !scriptParts.length
        ) {

            alert(
                "Presenter Script लिखें।"
            );


            return;

        }


        window.speechSynthesis
            .cancel();


        currentPartIndex =
            0;


        presenterRunning =
            true;


        progressBar.style.width =
            "0%";


        updateButtons();


        startAnimation();


        speakCurrentPart();

    }
);



/* ==============================
   PAUSE
============================== */

pauseButton.addEventListener(
    "click",
    function () {

        if (
            window.speechSynthesis
                .speaking &&
            !window.speechSynthesis
                .paused
        ) {

            window.speechSynthesis
                .pause();


            statusBox.textContent =
                "⏸ Presenter Paused";


            pauseButton.disabled =
                true;


            resumeButton.disabled =
                false;

        }

    }
);



/* ==============================
   RESUME
============================== */

resumeButton.addEventListener(
    "click",
    function () {

        if (
            window.speechSynthesis
                .paused
        ) {

            window.speechSynthesis
                .resume();


            statusBox.textContent =
                "▶ Presenter बोल रहा है...";


            pauseButton.disabled =
                false;


            resumeButton.disabled =
                true;

        }

    }
);



/* ==============================
   STOP
============================== */

stopButton.addEventListener(
    "click",
    function () {

        presenterRunning =
            false;


        window.speechSynthesis
            .cancel();


        cancelAnimationFrame(
            animationFrameID
        );


        progressBar.style.width =
            "0%";


        statusBox.textContent =
            "⏹ Presenter Stopped";


        updateButtons();

    }
);



/* ==============================
   FINISH
============================== */

function finishPresenter() {

    presenterRunning =
        false;


    cancelAnimationFrame(
        animationFrameID
    );


    progressBar.style.width =
        "100%";


    statusBox.textContent =
        "✅ Explanation Complete";


    drawPresenterFrame(
        "धन्यवाद",
        0,
        1
    );


    updateButtons();

}



/* ==============================
   BUTTON STATUS
============================== */

function updateButtons() {

    startButton.disabled =
        presenterRunning;


    stopButton.disabled =
        !presenterRunning;


    pauseButton.disabled =
        !presenterRunning;


    resumeButton.disabled =
        true;

}



/* ==============================
   LIVE PREVIEW
============================== */

titleInput.addEventListener(
    "input",
    function () {

        if (
            presenterImage &&
            !presenterRunning
        ) {

            drawPresenterFrame(
                getScriptParts()[0] ||
                "",
                0,
                0
            );

        }

    }
);


scriptInput.addEventListener(
    "input",
    function () {

        if (
            presenterImage &&
            !presenterRunning
        ) {

            drawPresenterFrame(
                getScriptParts()[0] ||
                "",
                0,
                0
            );

        }

    }
);



/* ==============================
   CLEAN
============================== */

window.addEventListener(
    "beforeunload",
    function () {

        window.speechSynthesis
            .cancel();


        if (
            presenterImageURL
        ) {

            URL.revokeObjectURL(
                presenterImageURL
            );

        }

    }
);


})();

</script>


</body>

</html>
    `;

}


module.exports =
    AIPresenterVideo;
