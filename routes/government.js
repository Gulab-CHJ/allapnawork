const express = require("express");
const router = express.Router();

const GovernmentPerson =
    require("../models/GovernmentPerson");


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

<title>
    ${person.name || "Government Person"}
</title>

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

    color:#ffffff;

    padding:30px 20px;

    text-align:center;
}

.photo{

    width:120px;
    height:120px;

    border-radius:50%;

    object-fit:cover;

    border:4px solid #ffffff;

    background:#e2e8f0;

    margin-bottom:12px;
}

.header h1{

    margin:5px 0;

    font-size:26px;
}

.position{

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

    margin-bottom:5px;

    color:#64748b;

    font-size:12px;
}

.detail strong{

    color:#0f172a;

    font-size:16px;
}

.phone-link{

    color:#2563eb;

    text-decoration:none;
}

.back-btn{

    display:block;

    margin-top:22px;

    padding:13px;

    border-radius:9px;

    background:#2563eb;

    color:#ffffff;

    text-decoration:none;

    text-align:center;

    font-weight:700;
}

@media(max-width:600px){

    body{
        padding:10px;
    }

    .details{
        padding:20px;
    }

    .photo{
        width:105px;
        height:105px;
    }

}

</style>

</head>


<body>

<div class="container">


    <div class="header">

        <img
            src="${person.image || "/images/default.png"}"
            class="photo"
            alt="${person.name || "Person"}"
            onerror="
                this.onerror=null;
                this.src='/images/default.png';
            "
        >

        <h1>
            ${person.name || "-"}
        </h1>

        <div class="position">
            ${person.position || "-"}
        </div>

    </div>



    <div class="details">


        <div class="detail">

            <small>
                DEPARTMENT
            </small>

            <strong>
                ${person.department || "-"}
            </strong>

        </div>


        <div class="detail">

            <small>
                PHONE NUMBER
            </small>

            <strong>

                ${
                    person.phone
                    ? `
                        <a
                            href="tel:${person.phone}"
                            class="phone-link"
                        >
                            ${person.phone}
                        </a>
                    `
                    : "-"
                }

            </strong>

        </div>


        <div class="detail">

            <small>
                ADDRESS
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


module.exports = router;
