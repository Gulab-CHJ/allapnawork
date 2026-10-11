// // // // function DashboardHeader(){

// // // // return `


// // // // <div class="admin-logo">

// // // // <img src="/images/GS LOGO.png">

// // // // <div>

// // // // <h2>HHGS Admin</h2>

// // // // <span>Human Healthy Global Services</span>

// // // // </div>

// // // // </div>

// // // // <div class="admin-profile">

// // // // <i class="fa-solid fa-bell"></i>

// // // // <i class="fa-solid fa-user"></i>

// // // // </div>

// // // // </header>

// // // // `;

// // // // }

// // // // module.exports = DashboardHeader;




// // // const DashboardSearch = require("./dashboardSearch");

// // // function DashboardHeader() {

// // // return `

// // // <header class="header">

// // // <div class="header-left">

// // // <div class="menu-toggle" id="menuToggle">

// // // <i class="fa-solid fa-bars"></i>

// // // </div>

// // // ${DashboardSearch()}

// // // </div>


// // // <div class="right">

// // // <div class="icon-btn">

// // // <i class="fa-solid fa-bell"></i>

// // // <span class="badge"></span>

// // // </div>


// // // <div class="profile">

// // // <i class="fa-solid fa-circle-user"></i>

// // // <span>Admin</span>

// // // </div>

// // // </div>

// // // </header>

// // // `;

// // // }

// // // module.exports = DashboardHeader;

// // function DashboardHeader() {

// // return `

// // <style>

// // *{
// // margin:0;
// // padding:0;
// // box-sizing:border-box;
// // font-family:'Poppins',sans-serif;
// // }


// // /* ================= HEADER ================= */

// // .header{

// // position:fixed;

// // top:0;
// // left:0;

// // width:100%;

// // height:80px;

// // display:flex;

// // align-items:center;

// // justify-content:space-between;

// // padding:0 25px;

// // background:#ffffff;

// // box-shadow:0 10px 30px rgba(0,0,0,.10);

// // z-index:999999;

// // isolation:isolate;

// // }


// // /* Header ke andar sab upar */

// // .header *{

// // position:relative;

// // z-index:1000000;

// // }



// // /* ================= LOGO ================= */


// // .logo{

// // display:flex;

// // align-items:center;

// // gap:12px;

// // text-decoration:none;

// // }


// // .logo img{

// // width:55px;

// // height:55px;

// // object-fit:contain;

// // border-radius:50%;

// // background:#fff;

// // box-shadow:0 5px 15px rgba(0,0,0,.15);

// // }



// // .logo-text h2{

// // font-size:22px;

// // font-weight:700;

// // color:#111827;

// // }



// // .logo-text span{

// // font-size:12px;

// // color:#2563eb;

// // font-weight:600;

// // }



// // /* ================= MENU ================= */


// // .navbar{

// // display:flex;

// // align-items:center;

// // gap:15px;

// // }



// // .navbar a{

// // display:flex;

// // align-items:center;

// // gap:8px;

// // padding:10px 18px;

// // border-radius:30px;

// // text-decoration:none;

// // font-size:14px;

// // font-weight:600;

// // color:#334155;

// // transition:.3s;

// // }



// // .navbar a i{

// // font-size:16px;

// // }



// // .navbar a:hover{

// // background:#2563eb;

// // color:white;

// // transform:translateY(-2px);

// // }



// // .navbar a:hover i{

// // color:white;

// // }



// // .profile-btn{

// // background:#f1f5f9;

// // }



// // .logout-btn{

// // background:#ef4444;

// // color:white !important;

// // }



// // .logout-btn i{

// // color:white !important;

// // }



// // /* ================= MOBILE BUTTON ================= */


// // .menu-btn{

// // display:none;

// // align-items:center;
// // justify-content:center;

// // width:45px;
// // height:45px;

// // border:none;

// // border-radius:10px;

// // background:#2563eb;

// // color:#fff;

// // font-size:22px;

// // cursor:pointer;

// // z-index:1000001;

// // }


// // @media(max-width:768px){

// // .menu-btn{

// // display:flex;

// // }

// // }



// // /* ================= OVERLAY ================= */


// // .menu-overlay{

// // position:fixed;

// // top:0;

// // left:0;

// // width:100%;

// // height:100%;

// // background:rgba(0,0,0,.45);

// // display:none;

// // z-index:999998;

// // }


// // .menu-overlay.active{

// // display:block;

// // }



// // /* ================= CONTENT FIX ================= */


// // body{

// // padding-top:80px;

// // }



// // .dashboard-content,
// // .stats-wrapper,
// // .dashboard-section{

// // position:relative;

// // z-index:1;

// // }



// // /* ================= MOBILE ================= */


// // @media(max-width:768px){


// // .header{

// // height:70px;

// // padding:0 15px;

// // }



// // body{

// // padding-top:70px;

// // }



// // .logo img{

// // width:45px;

// // height:45px;

// // }



// // .logo-text h2{

// // font-size:18px;

// // }



// // .logo-text span{

// // display:none;

// // }



// // .menu-btn{

// // display:flex;

// // align-items:center;

// // justify-content:center;

// // }



// // /* Mobile Menu */


// // .navbar{

// // position:fixed;

// // top:70px;

// // right:-280px;

// // width:260px;

// // height:calc(100vh - 70px);

// // background:white;

// // display:flex;

// // flex-direction:column;

// // align-items:flex-start;

// // padding:25px;

// // gap:15px;

// // box-shadow:-10px 0 30px rgba(0,0,0,.15);

// // transition:.35s;

// // }



// // .navbar.active{

// // right:0;

// // }



// // .navbar a{

// // width:100%;

// // padding:12px 15px;

// // }



// // }



// // /* ================= SMALL MOBILE ================= */


// // @media(max-width:480px){


// // .logo img{

// // width:40px;

// // height:40px;

// // }



// // .logo-text h2{

// // font-size:16px;

// // }



// // .header{

// // padding:0 10px;

// // }



// // .navbar{

// // width:240px;

// // }


// // }



// // </style>

// // <header class="header">

// // <a href="/admin/admindashboard" class="logo">

// // <img src="/images/GS LOGO.png">

// // <div class="logo-text">

// // <h2>HHGS Admin</h2>

// // <span>Human Healthy Global Services</span>

// // </div>

// // </a>

// // <nav class="navbar" id="navbar">

// // <a href="/admin/profile" class="profile-btn">
// // <i class="fa-solid fa-user"></i>
// // Profile
// // </a>

// // <a href="/admin/logout" class="logout-btn">
// // <i class="fa-solid fa-right-from-bracket"></i>
// // Logout
// // </a>

// // </nav>

// // <button class="menu-btn" id="menuBtn">
// // <i class="fa-solid fa-bars"></i>
// // </button>

// // </header>

// // <div class="menu-overlay" id="overlay"></div>

// // <script>

// // document.addEventListener("DOMContentLoaded",function(){

// // const menuBtn = document.getElementById("menuBtn");
// // const navbar = document.getElementById("navbar");
// // const overlay = document.getElementById("overlay");


// // if(menuBtn){

// // menuBtn.addEventListener("click",function(){

// // navbar.classList.toggle("active");

// // if(overlay){
// // overlay.classList.toggle("active");
// // }

// // });

// // }


// // if(overlay){

// // overlay.addEventListener("click",function(){

// // navbar.classList.remove("active");

// // overlay.classList.remove("active");

// // });

// // }


// // });


// // </script>

// // `;

// // }

// // module.exports = DashboardHeader;

// function DashboardHeader() {

// return `

// <style>

// *{
//     margin:0;
//     padding:0;
//     box-sizing:border-box;
//     font-family:'Poppins',sans-serif;
// }


// /* ================= HEADER ================= */

// .header{

//     position:fixed;

//     top:0;
//     left:0;

//     width:100%;

//     height:80px;

//     display:flex;

//     align-items:center;

//     justify-content:space-between;

//     padding:0 25px;

//     background:#ffffff;

//     box-shadow:0 10px 30px rgba(0,0,0,.10);

//     z-index:999999;

// }


// /* ================= LOGO ================= */

// .logo{

//     display:flex;

//     align-items:center;

//     gap:12px;

//     text-decoration:none;

// }


// .logo img{

//     width:55px;

//     height:55px;

//     object-fit:contain;

//     border-radius:50%;

//     background:#fff;

//     box-shadow:0 5px 15px rgba(0,0,0,.15);

// }



// .logo-text h2{

//     font-size:22px;

//     font-weight:700;

//     color:#111827;

// }



// .logo-text span{

//     font-size:12px;

//     color:#2563eb;

//     font-weight:600;

// }



// /* ================= NAV ================= */

// .navbar{

//     display:flex;

//     align-items:center;

//     gap:15px;

// }



// .navbar a{

//     display:flex;

//     align-items:center;

//     gap:8px;

//     padding:10px 18px;

//     border-radius:30px;

//     text-decoration:none;

//     font-size:14px;

//     font-weight:600;

//     color:#334155;

//     transition:.3s;

// }



// .navbar a:hover{

//     background:#2563eb;

//     color:white;

// }



// .profile-btn{

//     background:#f1f5f9;

// }



// .logout-btn{

//     background:#ef4444;

//     color:white !important;

// }



// .logout-btn i{

//     color:white !important;

// }



// /* ================= MENU BUTTON ================= */

// .menu-btn{

//     display:none;

//     align-items:center;

//     justify-content:center;

//     width:45px;

//     height:45px;

//     border:none;

//     border-radius:10px;

//     background:#2563eb;

//     color:white;

//     font-size:22px;

//     cursor:pointer;

// }


// /* ================= CONTENT ================= */

// .content{

//     margin-top:80px;

// }


// /* ================= MOBILE ================= */

// @media(max-width:768px){


// .header{

//     height:70px;

//     padding:0 15px;

// }



// .content{

//     margin-top:70px;

// }



// .logo img{

//     width:45px;

//     height:45px;

// }



// .logo-text h2{

//     font-size:18px;

// }



// .logo-text span{

//     display:none;

// }



// .menu-btn{

//     display:flex;

// }



// .navbar{

//     position:fixed;

//     top:70px;

//     right:-280px;

//     width:260px;

//     height:calc(100vh - 70px);

//     background:white;

//     display:flex;

//     flex-direction:column;

//     align-items:flex-start;

//     padding:25px;

//     gap:15px;

//     box-shadow:-10px 0 30px rgba(0,0,0,.15);

//     transition:.35s;

// }



// .navbar.active{

//     right:0;

// }



// .navbar a{

//     width:100%;

// }


// }



// /* ================= SMALL MOBILE ================= */

// @media(max-width:480px){


// .header{

//     padding:0 10px;

// }


// .logo img{

//     width:40px;

//     height:40px;

// }


// .logo-text h2{

//     font-size:16px;

// }


// .navbar{

//     width:240px;

// }


// }


// </style>




// <header class="header">


// <a href="/admin/admindashboard" class="logo">


// <img src="/images/GS LOGO.png">


// <div class="logo-text">

// <h2>HHGS Admin</h2>

// <span>Human Healthy Global Services</span>

// </div>


// </a>



// <nav class="navbar" id="navbar">


// <a href="/admin/profile" class="profile-btn">

// <i class="fa-solid fa-user"></i>

// Profile

// </a>



// <a href="/admin/logout" class="logout-btn">

// <i class="fa-solid fa-right-from-bracket"></i>

// Logout

// </a>


// </nav>



// <button class="menu-btn" id="menuBtn">

// <i class="fa-solid fa-bars"></i>

// </button>



// </header>



// <script>

// document.addEventListener("DOMContentLoaded",function(){


// const menuBtn = document.getElementById("menuBtn");

// const navbar = document.getElementById("navbar");



// if(menuBtn){

// menuBtn.addEventListener("click",function(){

// navbar.classList.toggle("active");

// });

// }


// });

// </script>


// `;

// }


// module.exports = DashboardHeader;



function DashboardHeader(){

return `

<style>


/* ================= HEADER ================= */


.header{


    position:fixed;


    top:0;


    left:270px;


    width:calc(100% - 270px);


    height:80px;


    background:#ffffff;


    display:flex;


    align-items:center;


    justify-content:space-between;


    padding:0 25px;


    box-shadow:0 5px 20px rgba(0,0,0,.10);


    z-index:999;



}





/* LOGO */


.header-logo{


    display:flex;


    align-items:center;


    gap:12px;


}



.header-logo img{


    width:50px;


    height:50px;


    border-radius:50%;


    object-fit:contain;


}



.header-logo h2{


    font-size:22px;


    color:#111827;


    margin:0;


}



.header-logo span{


    display:block;


    font-size:12px;


    color:#2563eb;


}





/* RIGHT MENU */


.header-right{


    display:flex;


    align-items:center;


    gap:15px;


}



.header-btn{


    display:flex;


    align-items:center;


    gap:8px;


    padding:10px 18px;


    border-radius:30px;


    text-decoration:none;


    font-size:14px;


    font-weight:600;


    color:#334155;


    background:#f1f5f9;


}



.logout-btn{


    background:#ef4444;


    color:white;


}



.logout-btn i{


    color:white;


}



/* MOBILE BUTTON */


.menu-btn{


    display:none;


    width:42px;


    height:42px;


    border:none;


    border-radius:10px;


    background:#2563eb;


    color:white;


    font-size:20px;


}




/* ================= TABLET ================= */


@media(max-width:1000px){


.header{


    left:85px;


    width:calc(100% - 85px);


}



.header-logo h2{


    font-size:18px;


}



}





/* ================= MOBILE ================= */


@media(max-width:600px){


.header{


    left:70px;


    width:calc(100% - 70px);


    height:70px;


    padding:0 12px;


}



.header-logo img{


    width:40px;


    height:40px;


}



.header-logo span{


    display:none;


}



.header-logo h2{


    font-size:16px;


}



.header-btn span{


    display:none;


}



.menu-btn{


    display:block;


}



}



</style>





<header class="header">



<div class="header-logo">


<img src="/images/GS LOGO.png">



<div>

<h2>HHGS Admin</h2>

<span>
Human Healthy Global Services
</span>


</div>


</div>





<div class="header-right">



<a href="/admin/profile" class="header-btn">

<i class="fa-solid fa-user"></i>

<span>Profile</span>

</a>





<a href="/admin/logout" class="header-btn logout-btn">

<i class="fa-solid fa-right-from-bracket"></i>

<span>Logout</span>

</a>




</div>




<button class="menu-btn">

<i class="fa-solid fa-bars"></i>

</button>




</header>


`;

}


module.exports = DashboardHeader;
