// function DoctorLogin(error = "") {

// return `
// <!DOCTYPE html>
// <html lang="en">

// <head>

// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">

// <title>Doctor Login</title>

// <link rel="stylesheet" href="/css/admin.css">

// <style>

// .error-message{
//     background:#ffe5e5;
//     color:#d8000c;
//     border:1px solid #ffb3b3;
//     padding:10px;
//     border-radius:8px;
//     margin-bottom:15px;
//     text-align:center;
//     font-weight:bold;
// }

// </style>

// </head>

// <body>

// <div class="login-container">

// <div class="login-card">

// <img src="/images/GS LOGO.png" alt="Logo">

// <h2>Doctor Login</h2>

// <p>Sign in to continue</p>

// ${error ? `<div class="error-message">${error}</div>` : ""}

// <form action="/admin/doctor/login" method="POST">

// <input
// type="text"
// name="doctorId"
// placeholder="Doctor ID (DOC1001)"
// required
// >

// <input
// type="password"
// name="password"
// placeholder="Password"
// required
// >

// <button type="submit">
// Login
// </button>

// </form>

// <a href="/">← Back Home</a>

// </div>

// </div>

// <script>

// setTimeout(()=>{
// const box=document.querySelector(".error-message");
// if(box){
// box.style.display="none";
// }
// },3000);

// </script>

// </body>
// </html>
// `;

// }

// module.exports = DoctorLogin;

function DoctorLogin(error = "", productId = "") {

return `
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Doctor Login</title>

<link rel="stylesheet" href="/css/admin.css">


<style>

.error-message{

background:#ffe5e5;

color:#d8000c;

border:1px solid #ffb3b3;

padding:10px;

border-radius:8px;

margin-bottom:15px;

text-align:center;

font-weight:bold;

}


</style>


</head>


<body>


<div class="login-container">


<div class="login-card">


<img src="/images/GS LOGO.png" alt="Logo">


<h2>
Doctor Login
</h2>


<p>
Sign in to continue
</p>



${error ? `<div class="error-message">${error}</div>` : ""}




<form action="/admin/doctor/login" method="POST">


    <!-- Product ID Store -->
    <input
        type="hidden"
        name="productId"
        value="${productId || ''}"
    >


    <input
        type="text"
        name="doctorId"
        placeholder="Doctor ID (DOC1001)"
        required
    >


    <input
        type="password"
        name="password"
        placeholder="Password"
        required
    >


    <button type="submit">
        Login
    </button>


</form>




<a href="/">

← Back Home

</a>



</div>


</div>




<script>


setTimeout(()=>{

const box=document.querySelector(".error-message");

if(box){

box.style.display="none";

}

},3000);


</script>



</body>

</html>

`;

}


module.exports = DoctorLogin;
