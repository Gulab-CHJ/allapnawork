// function StudentRegistration() {

//     return `
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">

//     <meta
//         name="viewport"
//         content="width=device-width, initial-scale=1.0"
//     >

//     <title>Student Registration</title>
// </head>

// <body>

//     <h1>New Student Registration</h1>

//     <form method="POST" action="/student-registration">

//         <input
//             type="text"
//             name="name"
//             placeholder="Student Name"
//             required
//         >

//         <br><br>

//         <input
//             type="text"
//             name="roll"
//             placeholder="Roll Number"
//             required
//         >

//         <br><br>

//         <input
//             type="text"
//             name="course"
//             placeholder="Course Name"
//             required
//         >

//         <br><br>

//         <input
//             type="password"
//             name="password"
//             placeholder="Create Password"
//             required
//         >

//         <br><br>

//         <button type="submit">
//             Register Student
//         </button>

//     </form>

// </body>

// </html>
// `;
// }

// module.exports = StudentRegistration;


function StudentRegistration() {

    return `
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>New Student Registration</title>

    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Segoe UI", Arial, sans-serif;
        }

        body {
            min-height: 100vh;
            padding: 25px 15px;
            background: linear-gradient(135deg, #2563eb, #06b6d4);
        }

        .registration-card {
            width: 100%;
            max-width: 560px;
            margin: auto;
            padding: 30px;
            border-radius: 22px;
            background: #ffffff;
            box-shadow: 0 20px 50px rgba(0, 0, 0, .22);
        }

        h1 {
            color: #1e3a8a;
            font-size: 27px;
            text-align: center;
        }

        .subtitle {
            margin: 9px 0 25px;
            color: #64748b;
            text-align: center;
        }

        label {
            display: block;
            margin: 15px 0 7px;
            color: #1e3a8a;
            font-weight: 600;
        }

        input,
        select {
            width: 100%;
            padding: 13px;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            outline: none;
            font-size: 15px;
        }

        input:focus,
        select:focus {
            border-color: #2563eb;
            box-shadow: 0 0 8px rgba(37, 99, 235, .25);
        }

        .roll-box {
            margin-top: 16px;
            padding: 13px;
            border-radius: 10px;
            color: #166534;
            background: #dcfce7;
            font-size: 14px;
            text-align: center;
        }

        .plans {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 8px;
        }

        .plan {
            padding: 15px 10px;
            border: 2px solid #cbd5e1;
            border-radius: 12px;
            cursor: pointer;
            text-align: center;
        }

        .plan:has(input:checked) {
            border-color: #2563eb;
            color: #1d4ed8;
            background: #eff6ff;
        }

        .plan input {
            width: auto;
            margin-right: 5px;
        }

        .amount-box {
            margin-top: 15px;
            padding: 14px;
            border-radius: 10px;
            color: #ffffff;
            background: #1e3a8a;
            text-align: center;
            font-size: 18px;
            font-weight: 700;
        }

        button {
            width: 100%;
            margin-top: 22px;
            padding: 14px;
            border: none;
            border-radius: 11px;
            color: #ffffff;
            background: linear-gradient(135deg, #2563eb, #06b6d4);
            font-size: 17px;
            font-weight: 700;
            cursor: pointer;
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 22px rgba(37, 99, 235, .35);
        }

        .back {
            display: block;
            margin-top: 18px;
            color: #2563eb;
            text-align: center;
            text-decoration: none;
        }

        @media (max-width: 450px) {

            .registration-card {
                padding: 22px;
            }

            .plans {
                grid-template-columns: 1fr;
            }

        }

    </style>

</head>

<body>

    <main class="registration-card">

        <h1>New Student Registration</h1>

        <p class="subtitle">
            Fill student details and select your course plan
        </p>

        <form method="POST" action="/admin/student-registration">

            <label>Student Name</label>

            <input
                type="text"
                name="name"
                placeholder="Enter student name"
                required
            >

            <label>Phone Number</label>

            <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                pattern="[0-9]{10}"
                required
            >

            <label>Age</label>

            <input
                type="number"
                name="age"
                placeholder="Enter age"
                min="3"
                max="100"
                required
            >

            <label>Class / Course</label>

            <input
                type="text"
                name="className"
                placeholder="Example: Class 10 / DCA"
                required
            >

            <div class="roll-box">
                ✓ Unique Roll Number will be generated automatically.
            </div>

            <label>Create Password</label>

            <input
                type="password"
                name="password"
                placeholder="Create login password"
                minlength="4"
                required
            >

            <label>Select Payment Plan</label>

            <div class="plans">

                <label class="plan">

                    <input
                        type="radio"
                        name="plan"
                        value="1 Month"
                        data-amount="500"
                        checked
                    >

                    1 Month<br>
                    <b>₹500</b>

                </label>

                <label class="plan">

                    <input
                        type="radio"
                        name="plan"
                        value="6 Months"
                        data-amount="2500"
                    >

                    6 Months<br>
                    <b>₹2,500</b>

                </label>

            </div>

            <input
                type="hidden"
                name="amount"
                id="amount"
                value="500"
            >

            <div
                class="amount-box"
                id="amountBox"
            >
                Total Payment: ₹500
            </div>

            <button type="submit">
                Register & Continue to Payment
            </button>

        </form>

        <a
            href="/student-login"
            class="back"
        >
            ← Back to Student Login
        </a>

    </main>

    <script>

        const plans =
            document.querySelectorAll(
                'input[name="plan"]'
            );

        const amountInput =
            document.getElementById("amount");

        const amountBox =
            document.getElementById("amountBox");

        plans.forEach((plan) => {

            plan.addEventListener("change", () => {

                const amount =
                    plan.dataset.amount;

                amountInput.value = amount;

                amountBox.textContent =
                    "Total Payment: ₹" +
                    Number(amount).toLocaleString("en-IN");

            });

        });

    </script>

</body>

</html>
`;

}

module.exports = StudentRegistration;
