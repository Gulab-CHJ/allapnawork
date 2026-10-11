module.exports = function StudentIdCard(student) {

    const name =
        student?.name || "Student";

    const roll =
        student?.roll ||
        student?.rollNo ||
        "N/A";

    const course =
        student?.className ||
        student?.course ||
        "N/A";

    const mobile =
        student?.mobile ||
        student?.phone ||
        "N/A";

        const maskedMobile = (() => {

    const number =
        String(mobile || "")
            .replace(/\D/g, "");

    if (number.length >= 10) {

        return (
            number.slice(0, 4) +
            "****" +
            number.slice(-2)
        );

    }

    if (number.length > 4) {

        return (
            number.slice(0, 2) +
            "****" +
            number.slice(-2)
        );

    }

    return "****";

})();

    const image =
        student?.image || "";

    const photo = image
        ? `
            <img
                src="${image}"
                class="student-photo"
                onerror="this.src='/images/default.png'"
            >
        `
        : `
            <div class="default-photo">
                ${name.charAt(0).toUpperCase()}
            </div>
        `;


    return `
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        ${name} - Student ID Card
    </title>


    <style>

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 30px 15px;
            font-family: Arial, sans-serif;
            background: #eef2f7;
        }

        .id-card {

            width: 360px;
            max-width: 100%;
            margin: auto;

            background: white;

            border-radius: 18px;

            overflow: hidden;

            box-shadow:
                0 8px 30px
                rgba(0,0,0,0.15);

            border:
                2px solid #16a34a;

        }

        .header {

            background:
                linear-gradient(
                    135deg,
                    #0f766e,
                    #16a34a
                );

            color: white;

            text-align: center;

            padding: 16px 10px;

        }

        .header h1 {

            margin: 0;

            font-size: 22px;

        }

        .header p {

            margin:
                5px 0 0;

            font-size:
                12px;

        }

        .student-section {

            text-align: center;

            padding:
                20px;

        }

        .student-photo {

            width:
                100px;

            height:
                100px;

            object-fit:
                cover;

            border-radius:
                50%;

            border:
                4px solid #16a34a;

        }

        .default-photo {

            width:
                100px;

            height:
                100px;

            margin:
                auto;

            border-radius:
                50%;

            background:
                #16a34a;

            color:
                white;

            display:
                flex;

            align-items:
                center;

            justify-content:
                center;

            font-size:
                40px;

            font-weight:
                bold;

        }

        .student-name {

            margin-top:
                12px;

            font-size:
                21px;

            font-weight:
                bold;

            color:
                #111827;

        }

        .roll {

            display:
                inline-block;

            margin-top:
                6px;

            background:
                #dcfce7;

            color:
                #15803d;

            padding:
                5px 12px;

            border-radius:
                20px;

            font-weight:
                bold;

        }

        .details {

            margin-top:
                18px;

            text-align:
                left;

        }

        .row {

            display:
                flex;

            justify-content:
                space-between;

            gap:
                15px;

            padding:
                10px 0;

            border-bottom:
                1px solid #eee;

        }

        .label {

            color:
                #6b7280;

            font-size:
                13px;

        }

        .value {

            font-weight:
                bold;

            font-size:
                14px;

            text-align:
                right;

        }

        .footer {

            background:
                #f0fdf4;

            text-align:
                center;

            padding:
                12px;

            color:
                #166534;

            font-size:
                12px;

            font-weight:
                bold;

        }

        .actions {

            width:
                360px;

            max-width:
                100%;

            margin:
                15px auto;

            display:
                grid;

            grid-template-columns:
                1fr 1fr;

            gap:
                10px;

        }

        .btn {

            border:
                none;

            padding:
                12px;

            border-radius:
                8px;

            font-weight:
                bold;

            cursor:
                pointer;

            text-decoration:
                none;

            text-align:
                center;

        }

        .print {

            background:
                #2563eb;

            color:
                white;

        }

        .back {

            background:
                #16a34a;

            color:
                white;

        }

        @media print {

            body {
                background: white;
                padding: 0;
            }

            .actions {
                display: none;
            }

            .id-card {
                box-shadow: none;
            }

        }

    </style>

</head>


<body>


<div class="id-card">


    <div class="header">

        <h1>
            GLOBAL SMART STUDY
        </h1>

        <p>
            STUDENT IDENTITY CARD
        </p>

    </div>


    <div class="student-section">

        ${photo}

        <div class="student-name">
            ${name}
        </div>

        <div class="roll">
            ${roll}
        </div>


        <div class="details">


            <div class="row">

                <span class="label">
                    Class / Course
                </span>

                <span class="value">
                    ${course}
                </span>

            </div>


            ${
                student?.age
                    ? `
                        <div class="row">

                            <span class="label">
                                Age
                            </span>

                            <span class="value">
                                ${student.age} Years
                            </span>

                        </div>
                    `
                    : ""
            }


            <div class="row">

                <span class="label">
                    Mobile
                </span>

                <span class="value">
                    ${maskedMobile}
                </span>

            </div>


            <div class="row">

                <span class="label">
                    Plan
                </span>

                <span class="value">
                    ${student?.plan || "N/A"}
                </span>

            </div>


        </div>

    </div>


    <div class="footer">
        Global Smart Study • Student ID Card
    </div>


</div>


<div class="actions">

    <button
        onclick="window.print()"
        class="btn print"
    >
        🖨 Print / Save PDF
    </button>


    <a
        href="/student/${student._id}"
        class="btn back"
    >
        ← Back Profile
    </a>

</div>


</body>

</html>
    `;

};
