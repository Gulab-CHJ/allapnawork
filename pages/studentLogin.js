// // function StudentLogin(){

// // return `

// // <!DOCTYPE html>
// // <html lang="en">

// // <head>

// // <meta charset="UTF-8">
// // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // <title>Student Login</title>

// // <style>

// // *{
// //     margin:0;
// //     padding:0;
// //     box-sizing:border-box;
// //     font-family:'Segoe UI',Arial,sans-serif;
// // }


// // body{

// //     min-height:100vh;

// //     background:
// //     linear-gradient(
// //     135deg,
// //     #2563eb,
// //     #06b6d4
// //     );

// //     display:flex;
// //     justify-content:center;
// //     align-items:center;

// // }


// // .login-card{

// //     width:380px;

// //     background:
// //     rgba(255,255,255,0.95);

// //     padding:35px;

// //     border-radius:25px;

// //     box-shadow:
// //     0 20px 50px rgba(0,0,0,0.25);

// //     animation:show 0.6s ease;

// // }



// // @keyframes show{

// // from{
// //     opacity:0;
// //     transform:translateY(40px);
// // }

// // to{
// //     opacity:1;
// //     transform:translateY(0);
// // }

// // }



// // .logo{

// //     width:80px;
// //     height:80px;

// //     margin:auto;

// //     border-radius:50%;

// //     overflow:hidden;

// //     background:white;

// //     display:flex;
// //     justify-content:center;
// //     align-items:center;

// //     box-shadow:0 5px 15px rgba(0,0,0,.2);

// // }


// // .logo img{

// //     width:100%;
// //     height:100%;

// //     object-fit:cover;

// // }

// //     color:white;

// //     display:flex;
// //     justify-content:center;
// //     align-items:center;

// //     font-size:32px;
// //     font-weight:bold;

// // }



// // h2{

// //     text-align:center;

// //     margin-top:20px;

// //     color:#1e3a8a;

// // }



// // p{

// //     text-align:center;

// //     color:#64748b;

// //     margin:10px 0 25px;

// // }



// // .input-box{

// //     position:relative;

// // }



// // input{

// //     width:100%;

// //     padding:14px 15px;

// //     margin-bottom:18px;

// //     border-radius:12px;

// //     border:1px solid #cbd5e1;

// //     outline:none;

// //     font-size:15px;

// //     transition:.3s;

// // }



// // input:focus{

// //     border-color:#2563eb;

// //     box-shadow:
// //     0 0 10px rgba(37,99,235,.3);

// // }



// // button{

// //     width:100%;

// //     padding:14px;

// //     border:none;

// //     border-radius:12px;

// //     background:

// //     linear-gradient(
// //     135deg,
// //     #2563eb,
// //     #06b6d4
// //     );

// //     color:white;

// //     font-size:17px;

// //     font-weight:600;

// //     cursor:pointer;

// //     transition:.3s;

// // }



// // button:hover{

// //     transform:translateY(-3px);

// //     box-shadow:
// //     0 10px 25px rgba(37,99,235,.4);

// // }



// // .footer{

// //     text-align:center;

// //     margin-top:20px;

// //     font-size:13px;

// //     color:#64748b;

// // }


// // </style>


// // </head>


// // <body>


// // <div class="login-card">


// // <div class="logo">
// //     <img src="/images/GS LOGO.png" alt="Logo">
// // </div>


// // <h2>
// // Student Login
// // </h2>


// // <p>
// // Welcome back! Login to continue
// // </p>



// // <form method="POST" 
// 



// // <input 
// // type="text"
// // name="roll"
// // placeholder="Enter Roll Number"
// // required
// // >



// // <input 
// // type="password"
// // name="password"
// // placeholder="Enter Password"
// // required
// // >



// // <button>
// // Login Now
// // </button>


// // </form>


// // <div class="footer">

// // © 2026 Gulab Service Institute

// // </div>


// // </div>


// // </body>

// // </html>


// // `;

// // }


// // module.exports = StudentLogin;


// function StudentLogin() {

//     return `

// <!DOCTYPE html>
// <html lang="en">

// <head>

//     <meta charset="UTF-8">

//     <meta
//         name="viewport"
//         content="width=device-width, initial-scale=1.0"
//     >

//     <title>Student Login</title>

//     <style>

//         * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//             font-family: "Segoe UI", Arial, sans-serif;
//         }

//         body {
//             min-height: 100vh;
//             padding: 20px;
//             background: linear-gradient(135deg, #2563eb, #06b6d4);
//             display: flex;
//             justify-content: center;
//             align-items: center;
//         }

//         .login-card {
//             width: 100%;
//             max-width: 380px;
//             background: rgba(255, 255, 255, 0.95);
//             padding: 35px;
//             border-radius: 25px;
//             box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
//             animation: show 0.6s ease;
//         }

//         @keyframes show {

//             from {
//                 opacity: 0;
//                 transform: translateY(40px);
//             }

//             to {
//                 opacity: 1;
//                 transform: translateY(0);
//             }

//         }

//         .logo {
//             width: 80px;
//             height: 80px;
//             margin: auto;
//             overflow: hidden;
//             border-radius: 50%;
//             background: #ffffff;
//             box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//         }

//         .logo img {
//             width: 100%;
//             height: 100%;
//             display: block;
//             object-fit: cover;
//         }

//         h2 {
//             margin-top: 20px;
//             color: #1e3a8a;
//             text-align: center;
//         }

//         .subtitle {
//             margin: 10px 0 25px;
//             color: #64748b;
//             text-align: center;
//         }

//         input {
//             width: 100%;
//             margin-bottom: 18px;
//             padding: 14px 15px;
//             border: 1px solid #cbd5e1;
//             border-radius: 12px;
//             outline: none;
//             font-size: 15px;
//             transition: 0.3s;
//         }

//         input:focus {
//             border-color: #2563eb;
//             box-shadow: 0 0 10px rgba(37, 99, 235, 0.3);
//         }

//         .login-btn {
//             width: 100%;
//             padding: 14px;
//             border: none;
//             border-radius: 12px;
//             background: linear-gradient(135deg, #2563eb, #06b6d4);
//             color: #ffffff;
//             font-size: 17px;
//             font-weight: 600;
//             cursor: pointer;
//             transition: 0.3s;
//         }

//         .login-btn:hover {
//             transform: translateY(-3px);
//             box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4);
//         }

//         .register-btn {
//             width: 100%;
//             display: block;
//             margin-top: 12px;
//             padding: 13px;
//             border: 2px solid #2563eb;
//             border-radius: 12px;
//             color: #2563eb;
//             background: #ffffff;
//             text-align: center;
//             text-decoration: none;
//             font-size: 16px;
//             font-weight: 600;
//             transition: 0.3s;
//         }

//         .register-btn:hover {
//             color: #ffffff;
//             background: #2563eb;
//             transform: translateY(-3px);
//             box-shadow: 0 10px 25px rgba(37, 99, 235, 0.25);
//         }

//         .footer {
//             margin-top: 20px;
//             color: #64748b;
//             text-align: center;
//             font-size: 13px;
//         }

//     </style>

// </head>

// <body>

//     <div class="login-card">

//         <div class="logo">
//             <img
//                 src="/images/GS LOGO.png"
//                 alt="Gulab Service Institute Logo"
//             >
//         </div>

//         <h2>Student Login</h2>

//         <p class="subtitle">
//             Welcome back! Login to continue
//         </p>

//        <form method="POST" action="/admin/student-registration">

//             <input
//                 type="text"
//                 name="roll"
//                 placeholder="Enter Roll Number"
//                 required
//             >

//             <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter Password"
//                 required
//             >

//             <button
//                 type="submit"
//                 class="login-btn"
//             >
//                 Login Now
//             </button>

//         </form>

//         <a
//     href="/admin/student-registration"
//     class="register-btn"
// >
//     New Student Registration
// </a>

//         <div class="footer">
//             © 2026 Gulab Service Institute
//         </div>

//     </div>

// </body>

// </html>

// `;

// }

// module.exports = StudentLogin;

function StudentLogin(message = "") {

    return `
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Student Login</title>

    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            min-height: 100vh;
            padding: 20px;
            background: linear-gradient(135deg, #2563eb, #06b6d4);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .card {
            width: 100%;
            max-width: 380px;
            padding: 32px;
            border-radius: 22px;
            background: #ffffff;
            box-shadow: 0 20px 45px rgba(0, 0, 0, .22);
        }

        h1 {
            color: #1e3a8a;
            text-align: center;
            font-size: 27px;
        }

        p {
            margin: 10px 0 22px;
            color: #64748b;
            text-align: center;
        }

        .message {
            margin-bottom: 15px;
            padding: 10px;
            border-radius: 8px;
            color: #b91c1c;
            background: #fee2e2;
            text-align: center;
        }

        label {
            display: block;
            margin: 15px 0 7px;
            color: #1e3a8a;
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: 13px;
            border: 1px solid #cbd5e1;
            border-radius: 9px;
            outline: none;
            font-size: 15px;
        }

        input:focus {
            border-color: #2563eb;
        }

        button {
            width: 100%;
            margin-top: 22px;
            padding: 13px;
            border: 0;
            border-radius: 9px;
            color: #ffffff;
            background: linear-gradient(135deg, #2563eb, #06b6d4);
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }

        .register {
            display: block;
            margin-top: 18px;
            color: #2563eb;
            text-align: center;
            text-decoration: none;
            font-weight: bold;
        }

    </style>

</head>

<body>

    <main class="card">

        <h1>Student Login</h1>

        <p>Login with your Roll Number and Password</p>

        ${
            message
                ? `<div class="message">${message}</div>`
                : ""
        }

        <form method="POST" action="/admin/student-login">

    <label>Roll Number</label>

    <input
        type="text"
        name="rollNo"
        placeholder="Example: GSI1001"
        required
    >

    <label>Password</label>

    <input
        type="password"
        name="password"
        placeholder="Enter password"
        required
    >

    <button type="submit">
        Login Now
    </button>

</form>

        <a
            href="/admin/student-registration"
            class="register"
        >
            New Student Registration
        </a>

    </main>

</body>

</html>
`;

}

module.exports = StudentLogin;
