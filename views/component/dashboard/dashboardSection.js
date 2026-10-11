// // // // // function DashboardSection(data = {}) {

// // // // // return `
// // // // // <style>
// // // // //    /* ===================================
// // // // //    DASHBOARD CONTENT
// // // // // =================================== */

// // // // // .dashboard-content{
// // // // //     padding:25px;
// // // // //     background:#f5f7fb;
// // // // //     min-height:100vh;
// // // // // }

// // // // // /* ===================================
// // // // //    STATUS CARDS
// // // // // =================================== */

// // // // // .status-cards{
// // // // //     display:grid;
// // // // //     grid-template-columns:repeat(4,1fr);
// // // // //     gap:20px;
// // // // //     margin-bottom:30px;
// // // // // }

// // // // // .status-card{
// // // // //     background:#fff;
// // // // //     border-radius:15px;
// // // // //     padding:20px;
// // // // //     display:flex;
// // // // //     align-items:center;
// // // // //     gap:18px;
// // // // //     box-shadow:0 8px 20px rgba(0,0,0,.08);
// // // // //     transition:.3s;
// // // // // }

// // // // // .status-card:hover{
// // // // //     transform:translateY(-5px);
// // // // // }

// // // // // .status-card i{
// // // // //     width:65px;
// // // // //     height:65px;
// // // // //     border-radius:50%;
// // // // //     display:flex;
// // // // //     justify-content:center;
// // // // //     align-items:center;
// // // // //     font-size:28px;
// // // // //     color:#fff;
// // // // // }

// // // // // .status-card h3{
// // // // //     font-size:15px;
// // // // //     color:#666;
// // // // //     margin-bottom:5px;
// // // // // }

// // // // // .status-card h2{
// // // // //     font-size:30px;
// // // // //     color:#222;
// // // // // }

// // // // // /* Colors */

// // // // // .doctors i{
// // // // //     background:#0d6efd;
// // // // // }

// // // // // .students i{
// // // // //     background:#198754;
// // // // // }

// // // // // .services i{
// // // // //     background:#6f42c1;
// // // // // }

// // // // // .banners i{
// // // // //     background:#fd7e14;
// // // // // }

// // // // // /* ===================================
// // // // //    PAGE HEADER
// // // // // =================================== */

// // // // // .page-header{
// // // // //     display:flex;
// // // // //     justify-content:space-between;
// // // // //     align-items:center;
// // // // //     margin-bottom:15px;
// // // // // }

// // // // // .page-header h2{
// // // // //     font-size:28px;
// // // // //     color:#0d6efd;
// // // // // }

// // // // // /* ===================================
// // // // //    BUTTONS
// // // // // =================================== */

// // // // // .header-actions{
// // // // //     display:flex;
// // // // //     gap:10px;
// // // // // }

// // // // // .btn{
// // // // //     border:none;
// // // // //     padding:10px 18px;
// // // // //     border-radius:8px;
// // // // //     cursor:pointer;
// // // // //     font-size:14px;
// // // // //     color:#fff;
// // // // //     transition:.3s;
// // // // // }

// // // // // .btn:hover{
// // // // //     transform:translateY(-2px);
// // // // // }

// // // // // .add{
// // // // //     background:#198754;
// // // // // }

// // // // // .search{
// // // // //     background:#0d6efd;
// // // // // }

// // // // // .refresh{
// // // // //     background:#fd7e14;
// // // // // }

// // // // // /* ===================================
// // // // //    TOTAL
// // // // // =================================== */

// // // // // .total-count{
// // // // //     margin-bottom:15px;
// // // // //     font-size:16px;
// // // // //     font-weight:600;
// // // // //     color:#555;
// // // // // }

// // // // // /* ===================================
// // // // //    TABLE
// // // // // =================================== */

// // // // // .table-wrapper{
// // // // //     background:#fff;
// // // // //     border-radius:15px;
// // // // //     overflow:auto;
// // // // //     box-shadow:0 8px 20px rgba(0,0,0,.08);
// // // // // }

// // // // // table{
// // // // //     width:100%;
// // // // //     border-collapse:collapse;
// // // // //     min-width:700px;
// // // // // }

// // // // // thead{
// // // // //     background:#0d6efd;
// // // // //     color:#fff;
// // // // // }

// // // // // th,
// // // // // td{
// // // // //     padding:15px;
// // // // //     text-align:center;
// // // // //     border-bottom:1px solid #eee;
// // // // // }

// // // // // tbody tr:hover{
// // // // //     background:#f8f9fa;
// // // // // }

// // // // // .banner-img{
// // // // //     width:90px;
// // // // //     height:55px;
// // // // //     object-fit:cover;
// // // // //     border-radius:8px;
// // // // // }

// // // // // /* Status */

// // // // // .active{
// // // // //     background:#198754;
// // // // //     color:#fff;
// // // // //     padding:5px 12px;
// // // // //     border-radius:20px;
// // // // //     font-size:13px;
// // // // // }

// // // // // /* Actions */

// // // // // td button{
// // // // //     border:none;
// // // // //     background:#eef3ff;
// // // // //     padding:8px 10px;
// // // // //     border-radius:8px;
// // // // //     cursor:pointer;
// // // // //     margin:0 3px;
// // // // //     transition:.3s;
// // // // // }

// // // // // td button:hover{
// // // // //     background:#0d6efd;
// // // // //     color:#fff;
// // // // // }

// // // // // /* ===================================
// // // // //    RESPONSIVE
// // // // // =================================== */

// // // // // @media(max-width:992px){

// // // // // .status-cards{
// // // // //     grid-template-columns:repeat(2,1fr);
// // // // // }

// // // // // .page-header{
// // // // //     flex-direction:column;
// // // // //     align-items:flex-start;
// // // // //     gap:15px;
// // // // // }

// // // // // .header-actions{
// // // // //     flex-wrap:wrap;
// // // // // }

// // // // // }

// // // // // @media(max-width:768px){

// // // // // .dashboard-content{
// // // // //     padding:15px;
// // // // // }

// // // // // .status-cards{
// // // // //     grid-template-columns:1fr;
// // // // // }

// // // // // .status-card{
// // // // //     padding:18px;
// // // // // }

// // // // // .status-card h2{
// // // // //     font-size:26px;
// // // // // }

// // // // // .page-header h2{
// // // // //     font-size:22px;
// // // // // }

// // // // // .header-actions{
// // // // //     width:100%;
// // // // // }

// // // // // .header-actions .btn{
// // // // //     flex:1;
// // // // // }

// // // // // .table-wrapper{
// // // // //     overflow-x:auto;
// // // // // }

// // // // // }

// // // // // @media(max-width:480px){

// // // // // .page-header h2{
// // // // //     font-size:20px;
// // // // // }

// // // // // .status-card{
// // // // //     gap:12px;
// // // // // }

// // // // // .status-card i{
// // // // //     width:55px;
// // // // //     height:55px;
// // // // //     font-size:22px;
// // // // // }

// // // // // .status-card h2{
// // // // //     font-size:22px;
// // // // // }

// // // // // .btn{
// // // // //     font-size:13px;
// // // // //     padding:10px;
// // // // // }

// // // // // th,
// // // // // td{
// // // // //     padding:10px;
// // // // //     font-size:13px;
// // // // // }

// // // // // .banner-img{
// // // // //     width:70px;
// // // // //     height:45px;
// // // // // }

// // // // // }
// // // // // </style>

// // // // // <section class="dashboard-content">

// // // // // <div class="status-cards">

// // // // // <div class="status-card doctors">
// // // // //     <i class="fa-solid fa-user-doctor"></i>
// // // // //     <div>
// // // // //         <h3>Doctors</h3>
// // // // //         <h2>${data.doctorCount || 12}</h2>
// // // // //     </div>
// // // // // </div>

// // // // // <div class="status-card students">
// // // // //     <i class="fa-solid fa-user-graduate"></i>
// // // // //     <div>
// // // // //         <h3>Students</h3>
// // // // //         <h2>${data.studentCount || 45}</h2>
// // // // //     </div>
// // // // // </div>

// // // // // <div class="status-card services">
// // // // //     <i class="fa-solid fa-stethoscope"></i>
// // // // //     <div>
// // // // //         <h3>Services</h3>
// // // // //         <h2>${data.serviceCount || 8}</h2>
// // // // //     </div>
// // // // // </div>

// // // // // <div class="status-card banners">
// // // // //     <i class="fa-solid fa-image"></i>
// // // // //     <div>
// // // // //         <h3>Banners</h3>
// // // // //         <h2>${data.bannerCount || 6}</h2>
// // // // //     </div>
// // // // // </div>

// // // // // </div>

// // // // // <div class="page-header">

// // // // // <h2>🖼️ Manage Banners</h2>

// // // // // <div class="header-actions">
// // // // // <button class="btn add">➕ Add Banner</button>
// // // // // <button class="btn search">🔍 Search</button>
// // // // // <button class="btn refresh">🔄 Refresh</button>
// // // // // </div>

// // // // // </div>

// // // // // <p class="total-count">Total Banners : 6</p>

// // // // // <div class="table-wrapper">

// // // // // <table>

// // // // // <thead>
// // // // // <tr>
// // // // // <th>Banner</th>
// // // // // <th>Title</th>
// // // // // <th>Link</th>
// // // // // <th>Status</th>
// // // // // <th>Actions</th>
// // // // // </tr>
// // // // // </thead>

// // // // // <tbody>

// // // // // <tr>
// // // // // <td><img src="/uploads/banner1.jpg" class="banner-img"></td>
// // // // // <td>Home</td>
// // // // // <td>###</td>
// // // // // <td><span class="active">Active</span></td>
// // // // // <td>
// // // // // <button>✏️</button>
// // // // // <button>🗑️</button>
// // // // // <button>🚫</button>
// // // // // </td>
// // // // // </tr>

// // // // // </tbody>

// // // // // </table>

// // // // // </div>

// // // // // </section>
// // // // // `;

// // // // // }

// // // // // module.exports = DashboardSection;


// // // // function DashboardSection(data = {}) {

// // // // return `

// // // // <style>

// // // // .dashboard-content{

// // // // width:100%;

// // // // padding:100px 25px 30px;

// // // // background:#f5f7fb;

// // // // min-height:100vh;

// // // // overflow-x:hidden;

// // // // }


// // // // /* ================= STATUS CARDS ================= */


// // // // .status-cards{

// // // // display:grid;

// // // // grid-template-columns:repeat(auto-fit,minmax(240px,1fr));

// // // // gap:20px;

// // // // margin-bottom:30px;

// // // // }


// // // // .status-card{

// // // // background:#fff;

// // // // padding:22px;

// // // // border-radius:18px;

// // // // display:flex;

// // // // align-items:center;

// // // // gap:18px;

// // // // box-shadow:0 10px 30px rgba(0,0,0,.08);

// // // // transition:.3s;

// // // // border:1px solid #eee;

// // // // }


// // // // .status-card:hover{

// // // // transform:translateY(-6px);

// // // // box-shadow:0 15px 35px rgba(0,0,0,.12);

// // // // }


// // // // .status-card i{

// // // // width:65px;

// // // // height:65px;

// // // // border-radius:18px;

// // // // display:flex;

// // // // align-items:center;

// // // // justify-content:center;

// // // // font-size:28px;

// // // // color:white;

// // // // }


// // // // .status-card h3{

// // // // font-size:14px;

// // // // color:#64748b;

// // // // margin-bottom:5px;

// // // // }


// // // // .status-card h2{

// // // // font-size:32px;

// // // // color:#0f172a;

// // // // }



// // // // .doctors i{

// // // // background:#2563eb;

// // // // }


// // // // .students i{

// // // // background:#16a34a;

// // // // }


// // // // .services i{

// // // // background:#9333ea;

// // // // }


// // // // .banners i{

// // // // background:#f97316;

// // // // }



// // // // /* ================= HEADER ================= */


// // // // .page-header{

// // // // display:flex;

// // // // justify-content:space-between;

// // // // align-items:center;

// // // // flex-wrap:wrap;

// // // // gap:15px;

// // // // margin-bottom:20px;

// // // // }


// // // // .page-header h2{

// // // // font-size:25px;

// // // // color:#0f172a;

// // // // }


// // // // /* ================= BUTTONS ================= */


// // // // .header-actions{

// // // // display:flex;

// // // // gap:10px;

// // // // flex-wrap:wrap;

// // // // }


// // // // .btn{

// // // // border:none;

// // // // padding:11px 18px;

// // // // border-radius:12px;

// // // // color:white;

// // // // cursor:pointer;

// // // // font-weight:600;

// // // // transition:.3s;

// // // // }


// // // // .btn:hover{

// // // // transform:translateY(-3px);

// // // // }


// // // // .add{

// // // // background:#16a34a;

// // // // }


// // // // .search{

// // // // background:#2563eb;

// // // // }


// // // // .refresh{

// // // // background:#f97316;

// // // // }



// // // // /* ================= TABLE ================= */


// // // // .total-count{

// // // // font-weight:600;

// // // // color:#475569;

// // // // margin-bottom:15px;

// // // // }



// // // // .table-wrapper{

// // // // width:100%;

// // // // background:#fff;

// // // // border-radius:18px;

// // // // overflow-x:auto;

// // // // box-shadow:0 10px 30px rgba(0,0,0,.08);

// // // // }



// // // // table{

// // // // width:100%;

// // // // min-width:750px;

// // // // border-collapse:collapse;

// // // // }



// // // // thead{

// // // // background:#2563eb;

// // // // color:white;

// // // // }



// // // // th{

// // // // padding:15px;

// // // // font-size:14px;

// // // // }



// // // // td{

// // // // padding:15px;

// // // // text-align:center;

// // // // border-bottom:1px solid #eee;

// // // // }



// // // // tbody tr:hover{

// // // // background:#f8fafc;

// // // // }



// // // // .banner-img{

// // // // width:90px;

// // // // height:55px;

// // // // object-fit:cover;

// // // // border-radius:10px;

// // // // }



// // // // .active{

// // // // background:#16a34a;

// // // // color:white;

// // // // padding:6px 14px;

// // // // border-radius:20px;

// // // // font-size:13px;

// // // // }



// // // // td button{

// // // // border:none;

// // // // padding:8px 12px;

// // // // border-radius:8px;

// // // // cursor:pointer;

// // // // background:#eef2ff;

// // // // margin:2px;

// // // // }


// // // // td button:hover{

// // // // background:#2563eb;

// // // // color:white;

// // // // }



// // // // /* ================= DESKTOP SIDEBAR FIX ================= */


// // // // @media(min-width:992px){


// // // // .dashboard-content{

// // // // margin-left:270px;

// // // // width:calc(100% - 270px);

// // // // }


// // // // }



// // // // /* ================= TABLET ================= */


// // // // @media(max-width:991px){


// // // // .dashboard-content{

// // // // padding:95px 20px 20px;

// // // // }


// // // // }



// // // // /* ================= MOBILE ================= */


// // // // @media(max-width:768px){


// // // // .dashboard-content{

// // // // padding:90px 15px 20px;

// // // // margin-left:0;

// // // // width:100%;

// // // // }


// // // // .status-card{

// // // // padding:18px;

// // // // }


// // // // .status-card i{

// // // // width:55px;

// // // // height:55px;

// // // // font-size:22px;

// // // // }


// // // // .status-card h2{

// // // // font-size:26px;

// // // // }


// // // // .page-header h2{

// // // // font-size:20px;

// // // // }


// // // // .header-actions{

// // // // width:100%;

// // // // }


// // // // .btn{

// // // // flex:1;

// // // // font-size:13px;

// // // // padding:10px;

// // // // }


// // // // }



// // // // </style>



// // // // <section class="dashboard-content">



// // // // <div class="status-cards">


// // // // <div class="status-card doctors">

// // // // <i class="fa-solid fa-user-doctor"></i>

// // // // <div>

// // // // <h3>Total Doctors</h3>

// // // // <h2>${data.doctorCount || 12}</h2>

// // // // </div>

// // // // </div>



// // // // <div class="status-card students">

// // // // <i class="fa-solid fa-user-graduate"></i>

// // // // <div>

// // // // <h3>Total Students</h3>

// // // // <h2>${data.studentCount || 45}</h2>

// // // // </div>

// // // // </div>



// // // // <div class="status-card services">

// // // // <i class="fa-solid fa-stethoscope"></i>

// // // // <div>

// // // // <h3>Total Services</h3>

// // // // <h2>${data.serviceCount || 8}</h2>

// // // // </div>

// // // // </div>



// // // // <div class="status-card banners">

// // // // <i class="fa-solid fa-image"></i>

// // // // <div>

// // // // <h3>Total Banners</h3>

// // // // <h2>${data.bannerCount || 6}</h2>

// // // // </div>

// // // // </div>


// // // // </div>




// // // // <div class="page-header">


// // // // <h2>
// // // // 🖼️ Manage Banners
// // // // </h2>



// // // // <div class="header-actions">

// // // // <button class="btn add">
// // // // ➕ Add Banner
// // // // </button>


// // // // <button class="btn search">
// // // // 🔍 Search
// // // // </button>


// // // // <button class="btn refresh">
// // // // 🔄 Refresh
// // // // </button>


// // // // </div>


// // // // </div>




// // // // <p class="total-count">

// // // // Total Banners : ${data.bannerCount || 6}

// // // // </p>




// // // // <div class="table-wrapper">


// // // // <table>


// // // // <thead>

// // // // <tr>

// // // // <th>Banner</th>

// // // // <th>Title</th>

// // // // <th>Link</th>

// // // // <th>Status</th>

// // // // <th>Action</th>

// // // // </tr>

// // // // </thead>



// // // // <tbody>


// // // // <tr>


// // // // <td>

// // // // <img src="/uploads/banner1.jpg" class="banner-img">

// // // // </td>


// // // // <td>

// // // // Home Banner

// // // // </td>


// // // // <td>

// // // // /

// // // // </td>


// // // // <td>

// // // // <span class="active">
// // // // Active
// // // // </span>

// // // // </td>


// // // // <td>

// // // // <button>
// // // // ✏️
// // // // </button>


// // // // <button>
// // // // 🗑️
// // // // </button>


// // // // <button>
// // // // 🚫
// // // // </button>


// // // // </td>


// // // // </tr>


// // // // </tbody>


// // // // </table>


// // // // </div>



// // // // </section>


// // // // `;

// // // // }


// // // // module.exports = DashboardSection;

// // // function DashboardSection(data = {}) {

// // // return `

// // // <style>

// // // .dashboard-section{

// // // width:100%;

// // // background:#fff;

// // // padding:25px;

// // // border-radius:18px;

// // // box-shadow:0 10px 30px rgba(0,0,0,.08);

// // // margin-top:25px;

// // // }



// // // .page-header{

// // // display:flex;

// // // justify-content:space-between;

// // // align-items:center;

// // // gap:15px;

// // // flex-wrap:wrap;

// // // margin-bottom:20px;

// // // }



// // // .page-header h2{

// // // font-size:24px;

// // // color:#0f172a;

// // // }



// // // .header-actions{

// // // display:flex;

// // // gap:10px;

// // // flex-wrap:wrap;

// // // }



// // // .btn{

// // // border:none;

// // // padding:10px 18px;

// // // border-radius:10px;

// // // color:white;

// // // cursor:pointer;

// // // font-weight:600;

// // // }



// // // .add{

// // // background:#16a34a;

// // // }


// // // .search{

// // // background:#2563eb;

// // // }


// // // .refresh{

// // // background:#f97316;

// // // }



// // // .total-count{

// // // margin-bottom:15px;

// // // font-weight:600;

// // // color:#475569;

// // // }



// // // .table-wrapper{

// // // overflow-x:auto;

// // // }



// // // table{

// // // width:100%;

// // // border-collapse:collapse;

// // // min-width:700px;

// // // }



// // // thead{

// // // background:#2563eb;

// // // color:white;

// // // }



// // // th,td{

// // // padding:14px;

// // // text-align:center;

// // // border-bottom:1px solid #eee;

// // // }



// // // tbody tr:hover{

// // // background:#f8fafc;

// // // }



// // // .banner-img{

// // // width:90px;

// // // height:55px;

// // // object-fit:cover;

// // // border-radius:8px;

// // // }



// // // .active{

// // // background:#16a34a;

// // // color:white;

// // // padding:6px 12px;

// // // border-radius:20px;

// // // font-size:13px;

// // // }



// // // td button{

// // // border:none;

// // // padding:8px 10px;

// // // border-radius:8px;

// // // cursor:pointer;

// // // }



// // // @media(max-width:768px){

// // // .dashboard-section{

// // // padding:15px;

// // // }


// // // .page-header h2{

// // // font-size:20px;

// // // }


// // // .btn{

// // // padding:9px 12px;

// // // font-size:13px;

// // // }

// // // }

// // // </style>



// // // <div class="dashboard-section">


// // // <div class="page-header">


// // // <h2>
// // // 🖼️ Manage Banners
// // // </h2>



// // // <div class="header-actions">


// // // <button class="btn add">
// // // ➕ Add Banner
// // // </button>


// // // <button class="btn search">
// // // 🔍 Search
// // // </button>


// // // <button class="btn refresh">
// // // 🔄 Refresh
// // // </button>


// // // </div>


// // // </div>



// // // <p class="total-count">

// // // Total Banners : ${data.bannerCount || 0}

// // // </p>




// // // <div class="table-wrapper">


// // // <table>


// // // <thead>

// // // <tr>

// // // <th>Banner</th>

// // // <th>Title</th>

// // // <th>Link</th>

// // // <th>Status</th>

// // // <th>Action</th>

// // // </tr>

// // // </thead>


// // // <tbody>


// // // <tr>


// // // <td>

// // // <img src="/uploads/banner1.jpg" class="banner-img">

// // // </td>


// // // <td>
// // // Home Banner
// // // </td>


// // // <td>
// // // /
// // // </td>


// // // <td>

// // // <span class="active">
// // // Active
// // // </span>

// // // </td>


// // // <td>

// // // <button>✏️</button>

// // // <button>🗑️</button>

// // // <button>🚫</button>


// // // </td>


// // // </tr>


// // // </tbody>


// // // </table>


// // // </div>


// // // </div>


// // // `;

// // // }


// // // module.exports = DashboardSection;

// // function DashboardSection(data = {}) {

// // return `

// // <style>

// // .dashboard-section{

// // width:100%;

// // background:#ffffff;

// // padding:25px;

// // border-radius:16px;

// // box-shadow:0 8px 25px rgba(0,0,0,.08);

// // margin-top:20px;

// // box-sizing:border-box;

// // }



// // /* HEADER */

// // .page-header{

// // display:flex;

// // justify-content:space-between;

// // align-items:center;

// // flex-wrap:wrap;

// // gap:15px;

// // margin-bottom:15px;

// // }


// // .page-header h2{

// // font-size:22px;

// // color:#0f172a;

// // margin:0;

// // }



// // /* BUTTON */

// // .header-actions{

// // display:flex;

// // gap:10px;

// // flex-wrap:wrap;

// // }


// // .btn{

// // border:none;

// // padding:10px 15px;

// // border-radius:8px;

// // color:#fff;

// // cursor:pointer;

// // font-size:14px;

// // }


// // .add{

// // background:#16a34a;

// // }

// // .search{

// // background:#2563eb;

// // }

// // .refresh{

// // background:#f97316;

// // }



// // /* COUNT */

// // .total-count{

// // font-size:15px;

// // font-weight:600;

// // color:#475569;

// // margin:15px 0;

// // }



// // /* TABLE */

// // .table-wrapper{

// // width:100%;

// // overflow-x:auto;

// // }


// // table{

// // width:100%;

// // border-collapse:collapse;

// // min-width:650px;

// // }


// // thead{

// // background:#2563eb;

// // color:white;

// // }


// // th,td{

// // padding:12px;

// // text-align:center;

// // border-bottom:1px solid #eee;

// // }



// // .banner-img{

// // width:80px;

// // height:50px;

// // object-fit:cover;

// // border-radius:8px;

// // }



// // .active{

// // background:#16a34a;

// // color:white;

// // padding:5px 12px;

// // border-radius:20px;

// // font-size:12px;

// // }



// // td button{

// // border:none;

// // background:#f1f5f9;

// // padding:7px 10px;

// // border-radius:7px;

// // cursor:pointer;

// // }



// // /* MOBILE */

// // @media(max-width:768px){


// // .dashboard-section{

// // padding:15px;

// // margin-top:15px;

// // }


// // .page-header{

// // align-items:flex-start;

// // }


// // .page-header h2{

// // font-size:18px;

// // }


// // .header-actions{

// // width:100%;

// // }


// // .btn{

// // flex:1;

// // font-size:12px;

// // }


// // }

// // </style>



// // <div class="dashboard-section">


// // <div class="page-header">

// // <h2>
// // 🖼️ Manage Banners
// // </h2>


// // <div class="header-actions">

// // <button class="btn add">
// // ➕ Add
// // </button>

// // <button class="btn search">
// // 🔍 Search
// // </button>

// // <button class="btn refresh">
// // 🔄 Refresh
// // </button>

// // </div>


// // </div>



// // <p class="total-count">
// // Total Banners : ${data.bannerCount || 0}
// // </p>



// // <div class="table-wrapper">


// // <table>

// // <thead>

// // <tr>

// // <th>Banner</th>
// // <th>Title</th>
// // <th>Link</th>
// // <th>Status</th>
// // <th>Action</th>

// // </tr>

// // </thead>


// // <tbody>


// // <tr>

// // <td>
// // <img src="/uploads/banner1.jpg" class="banner-img">
// // </td>


// // <td>
// // Home Banner
// // </td>


// // <td>
// // /
// // </td>


// // <td>
// // <span class="active">
// // Active
// // </span>
// // </td>


// // <td>

// // <button>✏️</button>
// // <button>🗑️</button>
// // <button>🚫</button>

// // </td>


// // </tr>


// // </tbody>


// // </table>


// // </div>


// // </div>


// // `;

// // }


// // module.exports = DashboardSection;

// function DashboardSection(){

// return `

// <style>

// .dashboard-section{

// width:100%;

// min-height:200px;

// background:#16a34a;

// border-radius:16px;

// margin-top:20px;

// padding:20px;

// box-sizing:border-box;

// overflow:hidden;

// }


// /* Mobile */

// @media(max-width:768px){

// .dashboard-section{

// width:100%;

// min-height:150px;

// margin-top:15px;

// }

// }

// </style>


// <div class="dashboard-section">

// </div>


// `;

// }


// module.exports = DashboardSection;


function DashboardSection(data = {}) {

return `

<style>


/* ================= DASHBOARD SECTION ================= */


.dashboard-section{


    width:100%;


    margin-top:20px;


    display:grid;


    grid-template-columns:repeat(2, minmax(0,1fr));


    gap:20px;


}





/* BOX */


.dashboard-box{


    background:#ffffff;


    border-radius:15px;


    padding:20px;


    box-shadow:

    0 5px 20px rgba(0,0,0,.08);


    border:1px solid #e5e7eb;


    min-width:0;


    overflow:hidden;


}





.dashboard-box h3{


    margin:0 0 15px;


    font-size:18px;


    color:#0f172a;


    font-weight:700;


}





.dashboard-box p{


    color:#64748b;


    font-size:14px;


    line-height:1.6;


}





/* LIST */


.dashboard-list{


    display:flex;


    flex-direction:column;


    gap:12px;


}



.dashboard-list-item{


    display:flex;


    align-items:center;


    justify-content:space-between;


    padding:12px;


    background:#f8fafc;


    border-radius:10px;


    font-size:14px;


}





.dashboard-list-item span{


    font-weight:600;


    color:#2563eb;


}






/* ================= TABLET ================= */


@media(max-width:900px){


.dashboard-section{


    grid-template-columns:1fr;


}


}





/* ================= MOBILE ================= */


@media(max-width:600px){


.dashboard-section{


    gap:12px;


    margin-top:15px;


}



.dashboard-box{


    padding:15px;


}



.dashboard-box h3{


    font-size:16px;


}



.dashboard-box p{


    font-size:13px;


}



}



</style>





<section class="dashboard-section">





<div class="dashboard-box">


<h3>
Welcome Admin
</h3>


<p>
Manage your HHGS website data from this dashboard.
</p>


</div>





<div class="dashboard-box">


<h3>
Quick Overview
</h3>


<div class="dashboard-list">


<div class="dashboard-list-item">

Doctors

<span>
${data.doctorCount || 0}
</span>

</div>



<div class="dashboard-list-item">

Students

<span>
${data.studentCount || 0}
</span>

</div>



<div class="dashboard-list-item">

Services

<span>
${data.serviceCount || 0}
</span>

</div>



<div class="dashboard-list-item">

Banners

<span>
${data.bannerCount || 0}
</span>

</div>



</div>


</div>





</section>


`;

}


module.exports = DashboardSection;
