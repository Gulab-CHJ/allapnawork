function RapidoTracker() {

    return `
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>Rapido Daily Tracker</title>

<style>

*{
    box-sizing:border-box;
}

body{
    margin:0;
    padding:20px;
    font-family:Arial,sans-serif;
    background:#f3f4f6;
    color:#111827;
}

.container{
    max-width:1200px;
    margin:auto;
}

.header{
    background:linear-gradient(
        135deg,
        #15803d,
        #22c55e
    );

    color:#fff;
    padding:24px;
    border-radius:18px;
    margin-bottom:20px;
}

.header h1{
    margin:0 0 7px;
}

.header p{
    margin:0;
}

.card{
    background:#fff;
    padding:20px;
    border-radius:18px;
    margin-bottom:20px;

    box-shadow:
        0 8px 25px
        rgba(0,0,0,0.08);
}

.form-grid{
    display:grid;

    grid-template-columns:
        repeat(
            4,
            minmax(0,1fr)
        );

    gap:15px;
}

.field label{
    display:block;
    margin-bottom:7px;
    font-size:13px;
    font-weight:700;
}

.field input{
    width:100%;
    height:44px;

    padding:9px 11px;

    border:
        1px solid
        #d1d5db;

    border-radius:9px;

    outline:none;
}

.field input:focus{
    border-color:#22c55e;
}

.readonly{
    background:#f9fafb;
}

.summary-grid{
    display:grid;

    grid-template-columns:
        repeat(
            4,
            minmax(0,1fr)
        );

    gap:12px;

    margin-top:20px;
}

.summary-box{
    padding:16px;

    background:#f9fafb;

    border:
        1px solid
        #e5e7eb;

    border-radius:13px;
}

.summary-box small{
    display:block;

    color:#6b7280;

    margin-bottom:6px;
}

.summary-box strong{
    font-size:21px;
}

.profit{
    background:#dcfce7;
    color:#166534;
}

.loss{
    background:#fee2e2;
    color:#b91c1c;
}

.buttons{
    display:flex;
    gap:10px;
    margin-top:20px;
}

button{
    border:none;
    padding:12px 17px;
    border-radius:9px;
    cursor:pointer;
    font-weight:700;
}

.btn-save{
    background:#16a34a;
    color:white;
}

.btn-reset{
    background:#111827;
    color:white;
}

.btn-delete{
    background:#dc2626;
    color:white;
    padding:7px 10px;
}

.table-wrapper{
    overflow-x:auto;
}

table{
    width:100%;
    min-width:1400px;
    border-collapse:collapse;
}

th,
td{
    padding:11px 9px;

    border-bottom:
        1px solid
        #e5e7eb;

    text-align:center;

    font-size:13px;
}

th{
    background:#111827;
    color:white;
}

.profit-text{
    color:#15803d;
    font-weight:700;
}

.loss-text{
    color:#dc2626;
    font-weight:700;
}

.empty{
    padding:30px;
    color:#6b7280;
}

@media(max-width:900px){

    .form-grid{
        grid-template-columns:
            repeat(
                2,
                minmax(0,1fr)
            );
    }

    .summary-grid{
        grid-template-columns:
            repeat(
                2,
                minmax(0,1fr)
            );
    }

}

@media(max-width:550px){

    body{
        padding:10px;
    }

    .form-grid{
        grid-template-columns:1fr;
    }

    .summary-grid{
        grid-template-columns:1fr 1fr;
    }

}

</style>

</head>


<body>

<div class="container">


    <div class="header">

        <h1>
            🏍️ Rapido Daily Tracker
        </h1>

        <p>
            KM, Petrol, Earning और Profit / Loss
        </p>

    </div>


    <div class="card">


        <div class="form-grid">


            <div class="field">

                <label>Date</label>

                <input
                    type="date"
                    id="date"
                >

            </div>


            <div class="field">

                <label>Start KM</label>

                <input
                    type="number"
                    id="startKm"
                    step="0.1"
                    oninput="calculate()"
                >

            </div>


            <div class="field">

                <label>End KM</label>

                <input
                    type="number"
                    id="endKm"
                    step="0.1"
                    oninput="calculate()"
                >

            </div>


            <div class="field">

                <label>Total KM</label>

                <input
                    type="text"
                    id="totalKm"
                    class="readonly"
                    readonly
                >

            </div>


            <div class="field">

                <label>Ride Earning ₹</label>

                <input
                    type="number"
                    id="rideEarning"
                    step="0.01"
                    oninput="calculate()"
                >

            </div>


            <div class="field">

                <label>Bonus ₹</label>

                <input
                    type="number"
                    id="bonus"
                    step="0.01"
                    oninput="calculate()"
                >

            </div>


            <div class="field">

                <label>Petrol Rate ₹ / L</label>

                <input
                    type="number"
                    id="petrolRate"
                    step="0.01"
                    oninput="calculate()"
                >

            </div>


            <div class="field">

                <label>Bike Mileage KM / L</label>

                <input
                    type="number"
                    id="mileage"
                    step="0.1"
                    oninput="calculate()"
                >

            </div>


            <div class="field">

                <label>Petrol Used</label>

                <input
                    type="text"
                    id="petrolUsed"
                    class="readonly"
                    readonly
                >

            </div>


            <div class="field">

                <label>Petrol Cost ₹</label>

                <input
                    type="text"
                    id="petrolCost"
                    class="readonly"
                    readonly
                >

            </div>


            <div class="field">

                <label>Other Expense ₹</label>

                <input
                    type="number"
                    id="otherExpense"
                    step="0.01"
                    oninput="calculate()"
                >

            </div>


            <div class="field">

                <label>Total Expense ₹</label>

                <input
                    type="text"
                    id="totalExpense"
                    class="readonly"
                    readonly
                >

            </div>


        </div>


        <div class="summary-grid">


            <div class="summary-box">

                <small>Total KM</small>

                <strong id="showTotalKm">
                    0 KM
                </strong>

            </div>


            <div class="summary-box">

                <small>Petrol Used</small>

                <strong id="showPetrolUsed">
                    0 L
                </strong>

            </div>


            <div class="summary-box">

                <small>Total Earning</small>

                <strong id="showTotalEarning">
                    ₹0.00
                </strong>

            </div>


            <div
                class="summary-box"
                id="profitBox"
            >

                <small>
                    Net Profit / Loss
                </small>

                <strong id="showProfit">
                    ₹0.00
                </strong>

            </div>


            <div class="summary-box">

                <small>Petrol Cost</small>

                <strong id="showPetrolCost">
                    ₹0.00
                </strong>

            </div>


            <div class="summary-box">

                <small>Total Expense</small>

                <strong id="showTotalExpense">
                    ₹0.00
                </strong>

            </div>


            <div class="summary-box">

                <small>Earning / KM</small>

                <strong id="showEarningKm">
                    ₹0.00
                </strong>

            </div>


            <div class="summary-box">

                <small>Profit / KM</small>

                <strong id="showProfitKm">
                    ₹0.00
                </strong>

            </div>


        </div>


        <div class="buttons">

            <button
                type="button"
                class="btn-save"
                id="saveButton"
                onclick="saveEntry()"
            >
                💾 Save Today Entry
            </button>


            <button
                type="button"
                class="btn-reset"
                onclick="resetForm()"
            >
                🔄 Reset
            </button>

        </div>


    </div>



    <div class="card">


        <h2>
            📊 Daily History
        </h2>


        <div class="table-wrapper">


            <table>


                <thead>

                <tr>

                    <th>Date</th>
                    <th>Start KM</th>
                    <th>End KM</th>
                    <th>Total KM</th>

                    <th>Ride ₹</th>
                    <th>Bonus ₹</th>
                    <th>Total Earning ₹</th>

                    <th>Petrol Rate</th>
                    <th>Mileage</th>

                    <th>Petrol Used</th>
                    <th>Petrol Cost</th>

                    <th>Other Expense</th>
                    <th>Total Expense</th>

                    <th>Profit / Loss</th>

                    <th>Earning / KM</th>
                    <th>Profit / KM</th>

                    <th>Action</th>

                </tr>

                </thead>


                <tbody id="historyBody">

                    <tr>

                        <td
                            colspan="17"
                            class="empty"
                        >
                            Loading...
                        </td>

                    </tr>

                </tbody>


            </table>


        </div>


    </div>


</div>



<script>


function numberValue(id){

    var element =
        document.getElementById(id);

    if(!element){
        return 0;
    }

    return Number(
        element.value
    ) || 0;

}



function money(value){

    var amount =
        Number(value || 0);


    if(amount < 0){

        return "-₹" +
            Math.abs(amount)
                .toFixed(2);

    }


    return "₹" +
        amount.toFixed(2);

}



function getLocalDate(){

    var now =
        new Date();

    var year =
        now.getFullYear();

    var month =
        String(
            now.getMonth() + 1
        ).padStart(
            2,
            "0"
        );

    var day =
        String(
            now.getDate()
        ).padStart(
            2,
            "0"
        );


    return (
        year +
        "-" +
        month +
        "-" +
        day
    );

}



function calculate(){


    var startKm =
        numberValue(
            "startKm"
        );


    var endKm =
        numberValue(
            "endKm"
        );


    var rideEarning =
        numberValue(
            "rideEarning"
        );


    var bonus =
        numberValue(
            "bonus"
        );


    var petrolRate =
        numberValue(
            "petrolRate"
        );


    var mileage =
        numberValue(
            "mileage"
        );


    var otherExpense =
        numberValue(
            "otherExpense"
        );


    var totalKm = 0;


    if(
        startKm > 0 &&
        endKm >= startKm
    ){

        totalKm =
            endKm -
            startKm;

    }


    var totalEarning =
        rideEarning +
        bonus;


    var petrolUsed = 0;


    if(
        totalKm > 0 &&
        mileage > 0
    ){

        petrolUsed =
            totalKm /
            mileage;

    }


    var petrolCost =
        petrolUsed *
        petrolRate;


    var totalExpense =
        petrolCost +
        otherExpense;


    var netProfit =
        totalEarning -
        totalExpense;


    var earningPerKm = 0;

    var profitPerKm = 0;


    if(totalKm > 0){

        earningPerKm =
            totalEarning /
            totalKm;

        profitPerKm =
            netProfit /
            totalKm;

    }


    document
        .getElementById(
            "totalKm"
        )
        .value =
            totalKm.toFixed(1);


    document
        .getElementById(
            "petrolUsed"
        )
        .value =
            petrolUsed.toFixed(2) +
            " L";


    document
        .getElementById(
            "petrolCost"
        )
        .value =
            petrolCost.toFixed(2);


    document
        .getElementById(
            "totalExpense"
        )
        .value =
            totalExpense.toFixed(2);


    document
        .getElementById(
            "showTotalKm"
        )
        .textContent =
            totalKm.toFixed(1) +
            " KM";


    document
        .getElementById(
            "showPetrolUsed"
        )
        .textContent =
            petrolUsed.toFixed(2) +
            " L";


    document
        .getElementById(
            "showTotalEarning"
        )
        .textContent =
            money(
                totalEarning
            );


    document
        .getElementById(
            "showPetrolCost"
        )
        .textContent =
            money(
                petrolCost
            );


    document
        .getElementById(
            "showTotalExpense"
        )
        .textContent =
            money(
                totalExpense
            );


    document
        .getElementById(
            "showEarningKm"
        )
        .textContent =
            money(
                earningPerKm
            );


    document
        .getElementById(
            "showProfitKm"
        )
        .textContent =
            money(
                profitPerKm
            );


    var profitBox =
        document.getElementById(
            "profitBox"
        );


    profitBox.classList.remove(
        "profit",
        "loss"
    );


    document
        .getElementById(
            "showProfit"
        )
        .textContent =
            money(
                netProfit
            );


    if(netProfit > 0){

        profitBox.classList.add(
            "profit"
        );

    }
    else if(netProfit < 0){

        profitBox.classList.add(
            "loss"
        );

    }

}



async function saveEntry(){


    var saveButton =
        document.getElementById(
            "saveButton"
        );


    var startKm =
        numberValue(
            "startKm"
        );


    var endKm =
        numberValue(
            "endKm"
        );


    if(startKm <= 0){

        alert(
            "Start KM डालें।"
        );

        return;

    }


    if(endKm <= 0){

        alert(
            "End KM डालें।"
        );

        return;

    }


    if(endKm < startKm){

        alert(
            "End KM Start KM से कम नहीं हो सकता।"
        );

        return;

    }


    if(
        numberValue(
            "petrolRate"
        ) <= 0
    ){

        alert(
            "Petrol Rate डालें।"
        );

        return;

    }


    if(
        numberValue(
            "mileage"
        ) <= 0
    ){

        alert(
            "Bike Mileage डालें।"
        );

        return;

    }


    var data = {

        date:
            document
                .getElementById(
                    "date"
                )
                .value,

        startKm:
            startKm,

        endKm:
            endKm,

        rideEarning:
            numberValue(
                "rideEarning"
            ),

        bonus:
            numberValue(
                "bonus"
            ),

        petrolRate:
            numberValue(
                "petrolRate"
            ),

        mileage:
            numberValue(
                "mileage"
            ),

        otherExpense:
            numberValue(
                "otherExpense"
            )

    };


    try{


        saveButton.disabled =
            true;


        saveButton.textContent =
            "⏳ Saving...";


        var response =
            await fetch(
                "/api/rapido",
                {

                    method:
                        "POST",

                    headers:{
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(
                            data
                        )

                }
            );


        var result =
            await response.json();


        if(
            !response.ok ||
            !result.success
        ){

            throw new Error(
                result.message ||
                "Save failed"
            );

        }


        alert(
            "✅ Entry saved successfully."
        );


        resetForm();

        await loadHistory();


    }
    catch(error){


        console.error(
            "SAVE ERROR:",
            error
        );


        alert(
            "❌ " +
            error.message
        );


    }
    finally{


        saveButton.disabled =
            false;


        saveButton.textContent =
            "💾 Save Today Entry";


    }

}



async function loadHistory(){


    var body =
        document.getElementById(
            "historyBody"
        );


    if(!body){
        return;
    }


    body.innerHTML =
        "<tr>" +
            "<td colspan='17' class='empty'>" +
                "⏳ Loading..." +
            "</td>" +
        "</tr>";


    try{


        var response =
            await fetch(
                "/api/rapido"
            );


        var result =
            await response.json();


        if(
            !response.ok ||
            !result.success
        ){

            throw new Error(
                result.message ||
                "History load failed"
            );

        }


        var data =
            Array.isArray(
                result.data
            )
                ? result.data
                : [];


        if(data.length === 0){


            body.innerHTML =
                "<tr>" +
                    "<td colspan='17' class='empty'>" +
                        "अभी कोई saved entry नहीं है।" +
                    "</td>" +
                "</tr>";


            return;

        }


        body.innerHTML =
            data.map(
                function(item){


                    var netProfit =
                        Number(
                            item.netProfit ||
                            0
                        );


                    var profitClass =
                        netProfit >= 0
                            ? "profit-text"
                            : "loss-text";


                    var itemId =
                        String(
                            item._id ||
                            ""
                        );


                    return (

                        "<tr>" +

                        "<td>" +
                            (item.date || "-") +
                        "</td>" +

                        "<td>" +
                            Number(
                                item.startKm || 0
                            ).toFixed(1) +
                        "</td>" +

                        "<td>" +
                            Number(
                                item.endKm || 0
                            ).toFixed(1) +
                        "</td>" +

                        "<td>" +
                            Number(
                                item.totalKm || 0
                            ).toFixed(1) +
                            " KM" +
                        "</td>" +

                        "<td>₹" +
                            Number(
                                item.rideEarning || 0
                            ).toFixed(2) +
                        "</td>" +

                        "<td>₹" +
                            Number(
                                item.bonus || 0
                            ).toFixed(2) +
                        "</td>" +

                        "<td>₹" +
                            Number(
                                item.totalEarning || 0
                            ).toFixed(2) +
                        "</td>" +

                        "<td>₹" +
                            Number(
                                item.petrolRate || 0
                            ).toFixed(2) +
                            "/L" +
                        "</td>" +

                        "<td>" +
                            Number(
                                item.mileage || 0
                            ).toFixed(1) +
                            " KM/L" +
                        "</td>" +

                        "<td>" +
                            Number(
                                item.petrolUsed || 0
                            ).toFixed(2) +
                            " L" +
                        "</td>" +

                        "<td>₹" +
                            Number(
                                item.petrolCost || 0
                            ).toFixed(2) +
                        "</td>" +

                        "<td>₹" +
                            Number(
                                item.otherExpense || 0
                            ).toFixed(2) +
                        "</td>" +

                        "<td>₹" +
                            Number(
                                item.totalExpense || 0
                            ).toFixed(2) +
                        "</td>" +

                        "<td class='" +
                            profitClass +
                        "'>" +
                            money(
                                netProfit
                            ) +
                        "</td>" +

                        "<td>₹" +
                            Number(
                                item.earningPerKm || 0
                            ).toFixed(2) +
                        "</td>" +

                        "<td class='" +
                            profitClass +
                        "'>" +
                            money(
                                Number(
                                    item.profitPerKm ||
                                    0
                                )
                            ) +
                        "</td>" +

                        "<td>" +

                            "<button " +

                                "type='button' " +

                                "class='btn-delete' " +

                                "data-id='" +
                                    itemId +
                                "' " +

                                "onclick='deleteEntry(this.dataset.id)'" +

                            ">" +

                                "🗑 Delete" +

                            "</button>" +

                        "</td>" +

                        "</tr>"

                    );

                }

            ).join("");


    }
    catch(error){


        console.error(
            "HISTORY ERROR:",
            error
        );


        body.innerHTML =
            "<tr>" +
                "<td colspan='17' class='empty'>" +
                    "❌ History load नहीं हुआ। " +
                    error.message +
                "</td>" +
            "</tr>";


    }

}



async function deleteEntry(id){


    if(!id){

        alert(
            "Entry ID नहीं मिला।"
        );

        return;

    }


    var yes =
        confirm(
            "क्या यह entry delete करना चाहते हैं?"
        );


    if(!yes){
        return;
    }


    try{


        var response =
            await fetch(
                "/api/rapido/" +
                id,
                {
                    method:
                        "DELETE"
                }
            );


        var result =
            await response.json();


        if(
            !response.ok ||
            !result.success
        ){

            throw new Error(
                result.message ||
                "Delete failed"
            );

        }


        alert(
            "✅ Entry deleted."
        );


        await loadHistory();


    }
    catch(error){


        console.error(
            "DELETE ERROR:",
            error
        );


        alert(
            "❌ " +
            error.message
        );


    }

}



function resetForm(){


    document
        .getElementById(
            "startKm"
        )
        .value = "";


    document
        .getElementById(
            "endKm"
        )
        .value = "";


    document
        .getElementById(
            "rideEarning"
        )
        .value = "";


    document
        .getElementById(
            "bonus"
        )
        .value = "";


    document
        .getElementById(
            "otherExpense"
        )
        .value = "";


    document
        .getElementById(
            "date"
        )
        .value =
            getLocalDate();


    calculate();

}



document
    .getElementById(
        "date"
    )
    .value =
        getLocalDate();


calculate();

loadHistory();


</script>

</body>

</html>
`;

}


module.exports =
    RapidoTracker;
