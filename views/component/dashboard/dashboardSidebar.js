// // // // // function DashboardHeader() {

// // // // // return `

// // // // // <style>

// // // // // .dashboard-header{

// // // // // width:100%;
// // // // // height:70px;

// // // // // background:#ffffff;

// // // // // display:flex;
// // // // // align-items:center;
// // // // // justify-content:space-between;

// // // // // padding:0 25px;

// // // // // position:fixed;

// // // // // top:0;
// // // // // left:0;

// // // // // z-index:9999;

// // // // // box-shadow:0 5px 20px rgba(0,0,0,.08);

// // // // // }


// // // // // /* LOGO */

// // // // // .header-logo h2{

// // // // // font-size:24px;

// // // // // color:#2563eb;

// // // // // margin:0;

// // // // // font-weight:700;

// // // // // }



// // // // // /* MENU */

// // // // // .header-menu{

// // // // // display:flex;

// // // // // align-items:center;

// // // // // gap:8px;

// // // // // overflow-x:auto;

// // // // // }



// // // // // .header-menu a{

// // // // // display:flex;

// // // // // align-items:center;

// // // // // gap:7px;

// // // // // padding:10px 14px;

// // // // // border-radius:10px;

// // // // // text-decoration:none;

// // // // // color:#475569;

// // // // // font-size:14px;

// // // // // font-weight:600;

// // // // // white-space:nowrap;

// // // // // transition:.3s;

// // // // // }


// // // // // .header-menu a i{

// // // // // font-size:16px;

// // // // // color:#2563eb;

// // // // // }



// // // // // .header-menu a:hover{

// // // // // background:#2563eb;

// // // // // color:#fff;

// // // // // }


// // // // // .header-menu a:hover i{

// // // // // color:#fff;

// // // // // }



// // // // // .header-menu .active{

// // // // // background:#2563eb;

// // // // // color:#fff;

// // // // // }


// // // // // .header-menu .active i{

// // // // // color:#fff;

// // // // // }



// // // // // .logout{

// // // // // background:#fee2e2;

// // // // // color:#dc2626 !important;

// // // // // }


// // // // // .logout i{

// // // // // color:#dc2626 !important;

// // // // // }



// // // // // /* TABLET */

// // // // // @media(max-width:1100px){


// // // // // .dashboard-header{

// // // // // height:auto;

// // // // // padding:15px;

// // // // // flex-direction:column;

// // // // // gap:15px;

// // // // // }


// // // // // .header-menu{

// // // // // width:100%;

// // // // // justify-content:flex-start;

// // // // // }


// // // // // }



// // // // // /* MOBILE */

// // // // // @media(max-width:768px){


// // // // // .dashboard-header{

// // // // // position:relative;

// // // // // padding:15px;

// // // // // }


// // // // // .header-logo h2{

// // // // // font-size:20px;

// // // // // }


// // // // // .header-menu{

// // // // // display:grid;

// // // // // grid-template-columns:repeat(2,1fr);

// // // // // width:100%;

// // // // // gap:10px;

// // // // // }


// // // // // .header-menu a{

// // // // // justify-content:center;

// // // // // font-size:13px;

// // // // // padding:12px 8px;

// // // // // }


// // // // // }



// // // // // /* SMALL MOBILE */

// // // // // @media(max-width:450px){


// // // // // .header-menu{

// // // // // grid-template-columns:1fr;

// // // // // }


// // // // // }

// // // // // </style>



// // // // // <header class="dashboard-header">


// // // // // <div class="header-logo">

// // // // // <h2>
// // // // // HHGS Admin
// // // // // </h2>

// // // // // </div>



// // // // // <nav class="header-menu">


// // // // // <a href="/admin/admindashboard" class="active">

// // // // // <i class="fa-solid fa-gauge-high"></i>

// // // // // <span>Dashboard</span>

// // // // // </a>



// // // // // <a href="/">

// // // // // <i class="fa-solid fa-globe"></i>

// // // // // <span>Website</span>

// // // // // </a>



// // // // // <a href="/admin/profile">

// // // // // <i class="fa-solid fa-user"></i>

// // // // // <span>Profile</span>

// // // // // </a>



// // // // // <a href="/admin/manage-doctors">

// // // // // <i class="fa-solid fa-user-doctor"></i>

// // // // // <span>Doctors</span>

// // // // // </a>



// // // // // <a href="/admin/manage-students">

// // // // // <i class="fa-solid fa-user-graduate"></i>

// // // // // <span>Students</span>

// // // // // </a>



// // // // // <a href="/admin/manage-services">

// // // // // <i class="fa-solid fa-stethoscope"></i>

// // // // // <span>Services</span>

// // // // // </a>



// // // // // <a href="/admin/manage-banners">

// // // // // <i class="fa-solid fa-image"></i>

// // // // // <span>Banners</span>

// // // // // </a>



// // // // // <a href="/admin/manage-products">

// // // // // <i class="fa-solid fa-capsules"></i>

// // // // // <span>Products</span>

// // // // // </a>



// // // // // <a href="/admin/manage-government">

// // // // // <i class="fa-solid fa-landmark"></i>

// // // // // <span>Government</span>

// // // // // </a>



// // // // // <a href="/admin/add-government">

// // // // // <i class="fa-solid fa-user-plus"></i>

// // // // // <span>Add Government</span>

// // // // // </a>



// // // // // <a href="/admin/manage-orders">

// // // // // <i class="fa-solid fa-cart-shopping"></i>

// // // // // <span>Orders</span>

// // // // // </a>



// // // // // <a href="/admin/logout" class="logout">

// // // // // <i class="fa-solid fa-right-from-bracket"></i>

// // // // // <span>Logout</span>

// // // // // </a>



// // // // // </nav>


// // // // // </header>


// // // // // `;

// // // // // }


// // // // // module.exports = DashboardHeader;

// // // // function DashboardSidebar(){

// // // // return `

// // // // <aside class="dashboard-sidebar">

// // // // <div class="sidebar-logo">
// // // //     <h2>HHGS Admin</h2>
// // // // </div>


// // // // <nav class="sidebar-menu">


// // // // <a href="/admin/admindashboard">
// // // // <i class="fa-solid fa-gauge"></i>
// // // // Dashboard
// // // // </a>


// // // // <a href="/">
// // // // <i class="fa-solid fa-globe"></i>
// // // // Website
// // // // </a>


// // // // <a href="/admin/profile">
// // // // <i class="fa-solid fa-user"></i>
// // // // Profile
// // // // </a>


// // // // <a href="/admin/manage-doctors">
// // // // <i class="fa-solid fa-user-doctor"></i>
// // // // Doctors
// // // // </a>


// // // // <a href="/admin/manage-students">
// // // // <i class="fa-solid fa-user-graduate"></i>
// // // // Students
// // // // </a>


// // // // <a href="/admin/manage-services">
// // // // <i class="fa-solid fa-stethoscope"></i>
// // // // Services
// // // // </a>


// // // // <a href="/admin/manage-banners">
// // // // <i class="fa-solid fa-image"></i>
// // // // Banners
// // // // </a>


// // // // <a href="/admin/manage-products">
// // // // <i class="fa-solid fa-capsules"></i>
// // // // Products
// // // // </a>


// // // // <a href="/admin/manage-government">
// // // // <i class="fa-solid fa-landmark"></i>
// // // // Government
// // // // </a>


// // // // <a href="/admin/add-government">
// // // // <i class="fa-solid fa-user-plus"></i>
// // // // Add Government
// // // // </a>


// // // // <a href="/admin/manage-orders">
// // // // <i class="fa-solid fa-cart-shopping"></i>
// // // // Orders
// // // // </a>


// // // // <a href="/admin/logout" class="logout">
// // // // <i class="fa-solid fa-right-from-bracket"></i>
// // // // Logout
// // // // </a>


// // // // </nav>

// // // // </aside>

// // // // `;

// // // // }


// // // // module.exports = DashboardSidebar;



// // // function DashboardSidebar(){

// // // return `

// // // <style>


// // // *{
// // //     box-sizing:border-box;
// // // }


// // // /* ===============================
// // //    SIDEBAR MAIN
// // // ================================ */


// // // .dashboard-sidebar{

// // //     position:fixed;

// // //     top:0;
// // //     left:0;

// // //     width:270px;

// // //     height:100vh;

// // //     background:
// // //     linear-gradient(
// // //         180deg,
// // //         #0f172a,
// // //         #1e40af
// // //     );


// // //     padding:20px 15px;

// // //     z-index:9999;


// // //     overflow-y:auto;


// // //     box-shadow:
// // //     10px 0 35px rgba(0,0,0,.25);


// // //     transition:.3s;

// // // }



// // // /* ===============================
// // //    LOGO
// // // ================================ */


// // // .sidebar-logo{


// // //     padding:20px 10px;

// // //     margin-bottom:25px;


// // //     text-align:center;


// // //     background:

// // //     rgba(255,255,255,.12);


// // //     border-radius:18px;


// // //     backdrop-filter:blur(10px);


// // //     border:

// // //     1px solid rgba(255,255,255,.2);

// // // }



// // // .sidebar-logo h2{


// // //     margin:0;


// // //     color:white;


// // //     font-size:24px;


// // //     font-weight:800;


// // //     letter-spacing:.5px;


// // // }





// // // /* ===============================
// // //    MENU
// // // ================================ */


// // // .sidebar-menu{


// // //     display:flex;


// // //     flex-direction:column;


// // //     gap:10px;


// // // }



// // // .sidebar-menu a{


// // //     display:flex;


// // //     align-items:center;


// // //     gap:15px;


// // //     padding:14px 16px;


// // //     color:#e2e8f0;


// // //     text-decoration:none;


// // //     border-radius:14px;


// // //     font-size:15px;


// // //     font-weight:600;


// // //     transition:.3s;


// // //     position:relative;


// // // }




// // // .sidebar-menu a i{


// // //     width:22px;


// // //     font-size:18px;


// // //     color:#93c5fd;


// // //     transition:.3s;


// // // }




// // // /* HOVER */


// // // .sidebar-menu a:hover{


// // //     background:

// // //     rgba(255,255,255,.15);


// // //     transform:translateX(8px);


// // //     color:white;


// // // }




// // // .sidebar-menu a:hover i{


// // //     color:white;

// // // }



// // // /* ACTIVE */


// // // .sidebar-menu a.active{


// // //     background:#2563eb;


// // //     color:white;


// // //     box-shadow:

// // //     0 8px 25px rgba(37,99,235,.5);


// // // }



// // // .sidebar-menu a.active i{


// // //     color:white;

// // // }





// // // /* ===============================
// // //    LOGOUT
// // // ================================ */



// // // .sidebar-menu .logout{


// // //     margin-top:20px;


// // //     background:#fee2e2;


// // //     color:#dc2626;


// // // }



// // // .sidebar-menu .logout i{


// // //     color:#dc2626;


// // // }



// // // .sidebar-menu .logout:hover{


// // //     background:#dc2626;


// // //     color:white;


// // // }



// // // .sidebar-menu .logout:hover i{


// // //     color:white;


// // // }




// // // /* ===============================
// // //    SCROLL BAR
// // // ================================ */


// // // .dashboard-sidebar::-webkit-scrollbar{


// // //     width:6px;


// // // }


// // // .dashboard-sidebar::-webkit-scrollbar-thumb{


// // //     background:#60a5fa;


// // //     border-radius:20px;


// // // }




// // // /* ===============================
// // //    PAGE CONTENT
// // // ================================ */


// // // .dashboard-content{


// // //     margin-left:270px;


// // //     padding:30px;


// // //     min-height:100vh;


// // // }





// // // /* ===============================
// // //    TABLET
// // // ================================ */


// // // @media(max-width:1000px){



// // // .dashboard-sidebar{


// // //     width:85px;


// // //     padding:20px 10px;


// // // }



// // // .sidebar-logo h2{


// // //     font-size:0;


// // // }



// // // .sidebar-logo h2:after{


// // //     content:"H";


// // //     font-size:30px;


// // //     color:white;


// // // }



// // // .sidebar-menu a{


// // //     justify-content:center;


// // // }



// // // .sidebar-menu a span{


// // //     display:none;


// // // }



// // // .sidebar-menu a i{


// // //     font-size:21px;


// // // }



// // // .dashboard-content{


// // //     margin-left:85px;


// // // }



// // // }







// // // /* ===============================
// // //    MOBILE
// // // ================================ */


// // // @media(max-width:600px){



// // // .dashboard-sidebar{


// // //     width:230px;


// // // }



// // // .sidebar-logo h2{


// // //     font-size:22px;


// // // }



// // // .sidebar-logo h2:after{


// // //     display:none;


// // // }



// // // .sidebar-menu a{


// // //     justify-content:flex-start;


// // // }



// // // .sidebar-menu a span{


// // //     display:block;


// // // }



// // // .dashboard-content{


// // //     margin-left:230px;


// // // }



// // // }




// // // </style>



// // // <aside class="dashboard-sidebar">


// // // <div class="sidebar-logo">

// // // <h2>
// // // HHGS Admin
// // // </h2>

// // // </div>



// // // <nav class="sidebar-menu">


// // // <a href="/admin/admindashboard" class="active">
// // // <i class="fa-solid fa-gauge-high"></i>
// // // <span>Dashboard</span>
// // // </a>



// // // <a href="/">
// // // <i class="fa-solid fa-globe"></i>
// // // <span>Website</span>
// // // </a>



// // // <a href="/admin/profile">
// // // <i class="fa-solid fa-user"></i>
// // // <span>Profile</span>
// // // </a>



// // // <a href="/admin/manage-doctors">
// // // <i class="fa-solid fa-user-doctor"></i>
// // // <span>Doctors</span>
// // // </a>



// // // <a href="/admin/manage-students">
// // // <i class="fa-solid fa-user-graduate"></i>
// // // <span>Students</span>
// // // </a>



// // // <a href="/admin/manage-services">
// // // <i class="fa-solid fa-stethoscope"></i>
// // // <span>Services</span>
// // // </a>



// // // <a href="/admin/manage-banners">
// // // <i class="fa-solid fa-image"></i>
// // // <span>Banners</span>
// // // </a>



// // // <a href="/admin/manage-products">
// // // <i class="fa-solid fa-capsules"></i>
// // // <span>Products</span>
// // // </a>



// // // <a href="/admin/manage-government">
// // // <i class="fa-solid fa-landmark"></i>
// // // <span>Government</span>
// // // </a>



// // // <a href="/admin/add-government">
// // // <i class="fa-solid fa-user-plus"></i>
// // // <span>Add Government</span>
// // // </a>



// // // <a href="/admin/manage-orders">
// // // <i class="fa-solid fa-cart-shopping"></i>
// // // <span>Orders</span>
// // // </a>



// // // <a href="/admin/logout" class="logout">

// // // <i class="fa-solid fa-right-from-bracket"></i>

// // // <span>Logout</span>

// // // </a>



// // // </nav>


// // // </aside>


// // // `;

// // // }


// // // module.exports = DashboardSidebar;

// // // // function DashboardSidebar() {
// // // //   return `
// // // // <style>
// // // // /* ===============================
// // // //    SIDEBAR MAIN
// // // // ================================ */
// // // // .dashboard-sidebar {
// // // //   position: fixed;
// // // //   top: 0;
// // // //   left: 0;
// // // //   width: 270px;
// // // //   height: 100vh;
// // // //   background: linear-gradient(180deg, #0f172a, #1e40af);
// // // //   padding: 20px 15px;
// // // //   z-index: 9999;
// // // //   overflow-y: auto;
// // // //   box-shadow: 10px 0 35px rgba(0, 0, 0, 0.25);
// // // //   transition: all 0.3s ease;
// // // //   box-sizing: border-box;
// // // // }

// // // // .dashboard-sidebar * {
// // // //   box-sizing: border-box;
// // // // }

// // // // /* ===============================
// // // //    LOGO
// // // // ================================ */
// // // // .sidebar-logo {
// // // //   padding: 20px 10px;
// // // //   margin-bottom: 25px;
// // // //   text-align: center;
// // // //   background: rgba(255, 255, 255, 0.12);
// // // //   border-radius: 18px;
// // // //   backdrop-filter: blur(10px);
// // // //   border: 1px solid rgba(255, 255, 255, 0.2);
// // // // }

// // // // .sidebar-logo h2 {
// // // //   margin: 0;
// // // //   color: white;
// // // //   font-size: 24px;
// // // //   font-weight: 800;
// // // //   letter-spacing: 0.5px;
// // // // }

// // // // /* ===============================
// // // //    MENU
// // // // ================================ */
// // // // .sidebar-menu {
// // // //   display: flex;
// // // //   flex-direction: column;
// // // //   gap: 10px;
// // // // }

// // // // .sidebar-menu a {
// // // //   display: flex;
// // // //   align-items: center;
// // // //   gap: 15px;
// // // //   padding: 14px 16px;
// // // //   color: #e2e8f0;
// // // //   text-decoration: none;
// // // //   border-radius: 14px;
// // // //   font-size: 15px;
// // // //   font-weight: 600;
// // // //   transition: 0.3s;
// // // //   position: relative;
// // // // }

// // // // .sidebar-menu a i {
// // // //   width: 22px;
// // // //   font-size: 18px;
// // // //   color: #93c5fd;
// // // //   transition: 0.3s;
// // // // }

// // // // /* HOVER */
// // // // .sidebar-menu a:hover {
// // // //   background: rgba(255, 255, 255, 0.15);
// // // //   transform: translateX(8px);
// // // //   color: white;
// // // // }

// // // // .sidebar-menu a:hover i {
// // // //   color: white;
// // // // }

// // // // /* ACTIVE */
// // // // .sidebar-menu a.active {
// // // //   background: #2563eb;
// // // //   color: white;
// // // //   box-shadow: 0 8px 25px rgba(37, 99, 235, 0.5);
// // // // }

// // // // .sidebar-menu a.active i {
// // // //   color: white;
// // // // }

// // // // /* ===============================
// // // //    LOGOUT
// // // // ================================ */
// // // // .sidebar-menu .logout {
// // // //   margin-top: 20px;
// // // //   background: #fee2e2;
// // // //   color: #dc2626;
// // // // }

// // // // .sidebar-menu .logout i {
// // // //   color: #dc2626;
// // // // }

// // // // .sidebar-menu .logout:hover {
// // // //   background: #dc2626;
// // // //   color: white;
// // // // }

// // // // .sidebar-menu .logout:hover i {
// // // //   color: white;
// // // // }

// // // // /* ===============================
// // // //    SCROLL BAR
// // // // ================================ */
// // // // .dashboard-sidebar::-webkit-scrollbar {
// // // //   width: 6px;
// // // // }

// // // // .dashboard-sidebar::-webkit-scrollbar-thumb {
// // // //   background: #60a5fa;
// // // //   border-radius: 20px;
// // // // }

// // // // /* ===============================
// // // //    TABLET RESPONSIVE
// // // // ================================ */
// // // // @media(max-width: 1000px) {
// // // //   .dashboard-sidebar {
// // // //     width: 85px;
// // // //     padding: 20px 10px;
// // // //   }

// // // //   .sidebar-logo h2 {
// // // //     font-size: 0;
// // // //   }

// // // //   .sidebar-logo h2:after {
// // // //     content: "H";
// // // //     font-size: 30px;
// // // //     color: white;
// // // //   }

// // // //   .sidebar-menu a {
// // // //     justify-content: center;
// // // //   }

// // // //   .sidebar-menu a span {
// // // //     display: none;
// // // //   }

// // // //   .sidebar-menu a i {
// // // //     font-size: 21px;
// // // //   }
// // // // }

// // // // /* ===============================
// // // //    MOBILE RESPONSIVE
// // // // ================================ */
// // // // @media(max-width: 600px) {
// // // //   .dashboard-sidebar {
// // // //     width: 70px; /* Mobile par screen crash hone se bachata hai */
// // // //   }

// // // //   .sidebar-logo h2 {
// // // //     font-size: 0;
// // // //   }

// // // //   .sidebar-logo h2:after {
// // // //     display: block;
// // // //     content: "H";
// // // //     font-size: 24px;
// // // //   }

// // // //   .sidebar-menu a span {
// // // //     display: none;
// // // //   }
// // // // }
// // // // </style>

// // // // <aside class="dashboard-sidebar">
// // // //   <div class="sidebar-logo">
// // // //     <h2>HHGS Admin</h2>
// // // //   </div>

// // // //   <nav class="sidebar-menu">
// // // //     <a href="/admin/admindashboard" class="active">
// // // //       <i class="fa-solid fa-gauge-high"></i>
// // // //       <span>Dashboard</span>
// // // //     </a>

// // // //     <a href="/">
// // // //       <i class="fa-solid fa-globe"></i>
// // // //       <span>Website</span>
// // // //     </a>

// // // //     <a href="/admin/profile">
// // // //       <i class="fa-solid fa-user"></i>
// // // //       <span>Profile</span>
// // // //     </a>

// // // //     <a href="/admin/manage-doctors">
// // // //       <i class="fa-solid fa-user-doctor"></i>
// // // //       <span>Doctors</span>
// // // //     </a>

// // // //     <a href="/admin/manage-students">
// // // //       <i class="fa-solid fa-user-graduate"></i>
// // // //       <span>Students</span>
// // // //     </a>

// // // //     <a href="/admin/manage-services">
// // // //       <i class="fa-solid fa-stethoscope"></i>
// // // //       <span>Services</span>
// // // //     </a>

// // // //     <a href="/admin/manage-banners">
// // // //       <i class="fa-solid fa-image"></i>
// // // //       <span>Banners</span>
// // // //     </a>

// // // //     <a href="/admin/manage-products">
// // // //       <i class="fa-solid fa-capsules"></i>
// // // //       <span>Products</span>
// // // //     </a>

// // // //     <a href="/admin/manage-government">
// // // //       <i class="fa-solid fa-landmark"></i>
// // // //       <span>Government</span>
// // // //     </a>

// // // //     <a href="/admin/add-government">
// // // //       <i class="fa-solid fa-user-plus"></i>
// // // //       <span>Add Government</span>
// // // //     </a>

// // // //     <a href="/admin/manage-orders">
// // // //       <i class="fa-solid fa-cart-shopping"></i>
// // // //       <span>Orders</span>
// // // //     </a>

// // // //     <a href="/admin/logout" class="logout">
// // // //       <i class="fa-solid fa-right-from-bracket"></i>
// // // //       <span>Logout</span>
// // // //     </a>
// // // //   </nav>
// // // // </aside>
// // // // `;
// // // // }

// // // // module.exports = DashboardSidebar;

// // function DashboardSidebar(){

// // return `

// // <style>

// // *{
// //     box-sizing:border-box;
// // }


// // /* SIDEBAR */

// // .dashboard-sidebar{

// //     position:fixed;

// //     top:0;
// //     left:0;

// //     width:270px;

// //     height:100vh;

// //     background:linear-gradient(
// //         180deg,
// //         #0f172a,
// //         #1e40af
// //     );

// //     padding:20px 15px;

// //     z-index:9999;

// //     overflow-y:auto;

// //     flex-shrink:0;

// //     box-shadow:
// //     10px 0 35px rgba(0,0,0,.25);
// // }


// // /* LOGO */

// // .sidebar-logo{

// //     padding:20px 10px;

// //     margin-bottom:25px;

// //     text-align:center;

// //     background:rgba(255,255,255,.12);

// //     border-radius:18px;

// // }


// // .sidebar-logo h2{

// //     margin:0;

// //     color:white;

// //     font-size:24px;

// //     font-weight:800;

// // }



// // /* MENU */

// // .sidebar-menu{

// //     display:flex;

// //     flex-direction:column;

// //     gap:10px;

// // }


// // .sidebar-menu a{

// //     display:flex;

// //     align-items:center;

// //     gap:15px;

// //     padding:14px 16px;

// //     color:#e2e8f0;

// //     text-decoration:none;

// //     border-radius:14px;

// //     font-size:15px;

// //     font-weight:600;

// //     transition:.3s;

// // }


// // .sidebar-menu a i{

// //     width:22px;

// //     font-size:18px;

// //     color:#93c5fd;

// // }



// // .sidebar-menu a:hover{

// //     background:rgba(255,255,255,.15);

// //     transform:translateX(8px);

// //     color:white;

// // }



// // .sidebar-menu .active{

// //     background:#2563eb;

// //     color:white;

// // }



// // .sidebar-menu .active i{

// //     color:white;

// // }


// // /* LOGOUT */

// // .logout{

// //     margin-top:20px;

// //     background:#fee2e2;

// //     color:#dc2626 !important;

// // }


// // .logout i{

// //     color:#dc2626 !important;

// // }



// // /* MOBILE */

// // @media(max-width:1000px){

// // .dashboard-sidebar{

// //     width:85px;

// // }


// // .sidebar-logo h2{

// //     font-size:0;

// // }


// // .sidebar-logo h2:after{

// //     content:"H";

// //     font-size:30px;

// // }


// // .sidebar-menu a{

// //     justify-content:center;

// // }


// // .sidebar-menu span{

// //     display:none;

// // }

// // }


// // </style>



// // <aside class="dashboard-sidebar">


// // <div class="sidebar-logo">

// // <h2>
// // HHGS Admin
// // </h2>

// // </div>



// // <nav class="sidebar-menu">


// // <a href="/admin/admindashboard" class="active">
// // <i class="fa-solid fa-gauge-high"></i>
// // <span>Dashboard</span>
// // </a>


// // <a href="/">
// // <i class="fa-solid fa-globe"></i>
// // <span>Website</span>
// // </a>


// // <a href="/admin/profile">
// // <i class="fa-solid fa-user"></i>
// // <span>Profile</span>
// // </a>


// // <a href="/admin/manage-doctors">
// // <i class="fa-solid fa-user-doctor"></i>
// // <span>Doctors</span>
// // </a>


// // <a href="/admin/manage-students">
// // <i class="fa-solid fa-user-graduate"></i>
// // <span>Students</span>
// // </a>


// // <a href="/admin/manage-services">
// // <i class="fa-solid fa-stethoscope"></i>
// // <span>Services</span>
// // </a>


// // <a href="/admin/manage-banners">
// // <i class="fa-solid fa-image"></i>
// // <span>Banners</span>
// // </a>


// // <a href="/admin/manage-products">
// // <i class="fa-solid fa-capsules"></i>
// // <span>Products</span>
// // </a>


// // <a href="/admin/manage-government">
// // <i class="fa-solid fa-landmark"></i>
// // <span>Government</span>
// // </a>


// // <a href="/admin/add-government">
// // <i class="fa-solid fa-user-plus"></i>
// // <span>Add Government</span>
// // </a>


// // <a href="/admin/logout" class="logout">

// // <i class="fa-solid fa-right-from-bracket"></i>

// // <span>Logout</span>

// // </a>


// // </nav>


// // </aside>


// // `;

// // }


// // module.exports = DashboardSidebar;

// function DashboardSidebar(){

// return `

// <style>

// .dashboard-sidebar{

//     position:fixed;

//     top:0;
//     left:0;

//     width:270px;

//     height:100vh;

//     background:linear-gradient(
//         180deg,
//         #0f172a,
//         #1e40af
//     );

//     padding:20px 15px;

//     z-index:9999;

//     overflow-y:auto;

//     box-shadow:10px 0 35px rgba(0,0,0,.25);

//     transition:.3s;

// }


// /* LOGO */

// .sidebar-logo{

//     padding:20px 10px;

//     margin-bottom:25px;

//     text-align:center;

//     background:rgba(255,255,255,.12);

//     border-radius:18px;

// }


// .sidebar-logo h2{

//     margin:0;

//     color:white;

//     font-size:24px;

//     font-weight:800;

// }



// /* MENU */

// .sidebar-menu{

//     display:flex;

//     flex-direction:column;

//     gap:10px;

// }



// .sidebar-menu a{

//     display:flex;

//     align-items:center;

//     gap:15px;

//     padding:14px 16px;

//     color:#e2e8f0;

//     text-decoration:none;

//     border-radius:14px;

//     font-size:15px;

//     font-weight:600;

//     transition:.3s;

// }



// .sidebar-menu a i{

//     width:22px;

//     font-size:18px;

//     color:#93c5fd;

// }



// .sidebar-menu a:hover{

//     background:rgba(255,255,255,.15);

//     color:white;

// }



// .sidebar-menu .active{

//     background:#2563eb;

//     color:white;

// }



// .logout{

//     margin-top:20px;

//     background:#fee2e2;

//     color:#dc2626 !important;

// }



// .logout i{

//     color:#dc2626 !important;

// }



// /* TABLET */

// @media(max-width:1000px){


// .dashboard-sidebar{

//     width:80px;

//     padding:20px 10px;

// }



// .sidebar-logo h2{

//     font-size:0;

// }



// .sidebar-logo h2:after{

//     content:"H";

//     font-size:30px;

// }



// .sidebar-menu a{

//     justify-content:center;

//     padding:14px 10px;

// }



// .sidebar-menu span{

//     display:none;

// }



// .sidebar-menu a i{

//     width:auto;

// }

// }



// /* MOBILE */

// @media(max-width:600px){


// .dashboard-sidebar{

//     width:70px;

//     padding:15px 8px;

// }



// .sidebar-logo{

//     padding:15px 5px;

// }



// .sidebar-logo h2:after{

//     font-size:25px;

// }



// .sidebar-menu{

//     gap:8px;

// }



// .sidebar-menu a{

//     padding:12px 8px;

// }



// .sidebar-menu a i{

//     font-size:16px;

// }

// }



// </style>



// <aside class="dashboard-sidebar">


// <div class="sidebar-logo">

// <h2>HHGS Admin</h2>

// </div>



// <nav class="sidebar-menu">


// <a href="/admin/admindashboard" class="active">

// <i class="fa-solid fa-gauge-high"></i>

// <span>Dashboard</span>

// </a>



// <a href="/">

// <i class="fa-solid fa-globe"></i>

// <span>Website</span>

// </a>



// <a href="/admin/profile">

// <i class="fa-solid fa-user"></i>

// <span>Profile</span>

// </a>



// <a href="/admin/manage-doctors">

// <i class="fa-solid fa-user-doctor"></i>

// <span>Doctors</span>

// </a>



// <a href="/admin/manage-students">

// <i class="fa-solid fa-user-graduate"></i>

// <span>Students</span>

// </a>



// <a href="/admin/manage-services">

// <i class="fa-solid fa-stethoscope"></i>

// <span>Services</span>

// </a>



// <a href="/admin/manage-banners">

// <i class="fa-solid fa-image"></i>

// <span>Banners</span>

// </a>



// <a href="/admin/manage-products">

// <i class="fa-solid fa-capsules"></i>

// <span>Products</span>

// </a>



// <a href="/admin/manage-government">

// <i class="fa-solid fa-landmark"></i>

// <span>Government</span>

// </a>



// <a href="/admin/add-government">

// <i class="fa-solid fa-user-plus"></i>

// <span>Add Government</span>

// </a>



// <a href="/admin/logout" class="logout">

// <i class="fa-solid fa-right-from-bracket"></i>

// <span>Logout</span>

// </a>



// </nav>


// </aside>


// `;

// }


// module.exports = DashboardSidebar;



function DashboardSidebar(){

return `

<style>


/* ================= SIDEBAR ================= */


.dashboard-sidebar{


    position:fixed;

    top:0;

    left:0;


    width:270px;

    height:100vh;


    background:linear-gradient(
        180deg,
        #0f172a,
        #1e40af
    );


    padding:20px 15px;


    z-index:1000;


    overflow-y:auto;


    box-shadow:
    10px 0 35px rgba(0,0,0,.25);


    transition:.3s;

}



/* LOGO */


.sidebar-logo{


    padding:20px 10px;


    margin-bottom:25px;


    text-align:center;


    background:rgba(255,255,255,.12);


    border-radius:18px;


}



.sidebar-logo h2{


    margin:0;


    color:white;


    font-size:24px;


    font-weight:800;


}




/* MENU */


.sidebar-menu{


    display:flex;


    flex-direction:column;


    gap:10px;


}



.sidebar-menu a{


    display:flex;


    align-items:center;


    gap:15px;


    padding:14px 16px;


    color:#e2e8f0;


    text-decoration:none;


    border-radius:14px;


    font-size:15px;


    font-weight:600;


    transition:.3s;


}



.sidebar-menu a i{


    width:22px;


    font-size:18px;


    color:#93c5fd;


}



.sidebar-menu a:hover{


    background:rgba(255,255,255,.15);


    color:white;


}



.sidebar-menu .active{


    background:#2563eb;


    color:white;


}



.sidebar-menu .active i{


    color:white;


}



/* LOGOUT */


.logout{


    margin-top:20px;


    background:#fee2e2;


    color:#dc2626 !important;


}



.logout i{


    color:#dc2626 !important;


}





/* ================= TABLET ================= */


@media(max-width:1000px){


.dashboard-sidebar{


    width:85px;


    padding:20px 10px;


}



.sidebar-logo h2{


    font-size:0;


}



.sidebar-logo h2::after{


    content:"H";


    font-size:30px;


    color:white;


}



.sidebar-menu a{


    justify-content:center;


    padding:14px 10px;


}



.sidebar-menu span{


    display:none;


}



.sidebar-menu a i{


    width:auto;


}



}






/* ================= MOBILE ================= */


@media(max-width:600px){



.dashboard-sidebar{


    width:70px;


    padding:15px 8px;


}



.sidebar-logo{


    padding:15px 5px;


}



.sidebar-logo h2::after{


    font-size:25px;


}



.sidebar-menu{


    gap:8px;


}



.sidebar-menu a{


    padding:12px 8px;


}



.sidebar-menu a i{


    font-size:16px;


}



}




</style>





<aside class="dashboard-sidebar">


<div class="sidebar-logo">

<h2>HHGS Admin</h2>

</div>




<nav class="sidebar-menu">



<a href="/admin/admindashboard" class="active">

<i class="fa-solid fa-gauge-high"></i>

<span>Dashboard</span>

</a>




<a href="/">

<i class="fa-solid fa-globe"></i>

<span>Website</span>

</a>




<a href="/admin/profile">

<i class="fa-solid fa-user"></i>

<span>Profile</span>

</a>




<a href="/admin/manage-doctors">

<i class="fa-solid fa-user-doctor"></i>

<span>Doctors</span>

</a>




<a href="/admin/manage-students">

<i class="fa-solid fa-user-graduate"></i>

<span>Students</span>

</a>




<a href="/admin/manage-services">

<i class="fa-solid fa-stethoscope"></i>

<span>Services</span>

</a>




<a href="/admin/manage-banners">

<i class="fa-solid fa-image"></i>

<span>Banners</span>

</a>




<a href="/admin/manage-products">

<i class="fa-solid fa-capsules"></i>

<span>Products</span>

</a>




<a href="/admin/manage-government">

<i class="fa-solid fa-landmark"></i>

<span>Government</span>

</a>




<a href="/admin/add-government">

<i class="fa-solid fa-user-plus"></i>

<span>Add Government</span>

</a>




<a href="/admin/logout" class="logout">

<i class="fa-solid fa-right-from-bracket"></i>

<span>Logout</span>

</a>



</nav>



</aside>


`;

}


module.exports = DashboardSidebar;
