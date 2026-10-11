// // // // // // // const DashboardHeader = require("../views/component/dashboard/dashboardHeader");
// // // // // // // const DashboardSidebar = require("../views/component/dashboard/dashboardSidebar");
// // // // // // // const DashboardSearch = require("../views/component/dashboard/dashboardSearch");
// // // // // // // const DashboardStats = require("../views/component/dashboard/dashboardStats");
// // // // // // // const DashboardSection = require("../views/component/dashboard/dashboardSection");

// // // // // // // function AdminDashboard(data = {}) {

// // // // // // // return `
// // // // // // // <!DOCTYPE html>
// // // // // // // <html lang="en">

// // // // // // // <head>

// // // // // // // <meta charset="UTF-8">
// // // // // // // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // // // // // // <title>HHGS Admin Dashboard</title>

// // // // // // // <link rel="stylesheet" href="/css/admin-dashboard.css">
// // // // // // // <link rel="stylesheet" href="/css/dashboard-card.css">
// // // // // // // <link rel="stylesheet" href="/css/dashboard-responsive.css">

// // // // // // // <link rel="stylesheet"
// // // // // // // href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

// // // // // // // </head>

// // // // // // // <body>

// // // // // // // ${DashboardHeader()}

// // // // // // // <div class="admin-layout">

// // // // // // //     ${DashboardSidebar()}

// // // // // // //     <main class="admin-content">

// // // // // // //         ${DashboardSearch()}

// // // // // // //         ${DashboardStats(data)}

// // // // // // //         ${DashboardSection()}

// // // // // // //     </main>

// // // // // // // </div>

// // // // // // // <script src="/js/admin-dashboard.js"></script>

// // // // // // // </body>

// // // // // // // </html>
// // // // // // // `;

// // // // // // // }

// // // // // // // module.exports = AdminDashboard;

// // // // // // // const DashboardSidebar = require("../views/component/dashboard/dashboardSidebar");
// // // // // // // const DashboardSection = require("../views/component/dashboard/dashboardSection");

// // // // // // // function AdminDashboard() {

// // // // // // // return `
// // // // // // // <!DOCTYPE html>
// // // // // // // <html lang="en">

// // // // // // // <head>

// // // // // // // <meta charset="UTF-8">
// // // // // // // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // // // // // // <title>HHGS Admin</title>



// // // // // // // <link rel="stylesheet"
// // // // // // // href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

// // // // // // // </head>

// // // // // // // <body>

// // // // // // // <div class="admin-layout">

// // // // // // //     ${DashboardSidebar()}

// // // // // // //     <main class="admin-content">

// // // // // // //         ${DashboardSection()}

// // // // // // //     </main>

// // // // // // // </div>

// // // // // // // <script src="/js/admin-dashboard.js"></script>

// // // // // // // </body>

// // // // // // // </html>
// // // // // // // `;

// // // // // // // }

// // // // // // // module.exports = AdminDashboard;



// // // // // // // const DashboardHeader = require("../views/component/dashboard/dashboardHeader");
// // // // // // // const DashboardSidebar = require("../views/component/dashboard/dashboardSidebar");
// // // // // // // const DashboardSearch = require("../views/component/dashboard/dashboardSearch");
// // // // // // // const DashboardStats = require("../views/component/dashboard/dashboardStats");
// // // // // // // const DashboardSection = require("../views/component/dashboard/dashboardSection");

// // // // // // // function AdminDashboard(data = {}) {
// // // // // // //   return `
// // // // // // // <!DOCTYPE html>
// // // // // // // <html lang="en">
// // // // // // // <head>
// // // // // // //   <meta charset="UTF-8">
// // // // // // //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
// // // // // // //   <title>HHGS Admin Dashboard</title>
  
// // // // // // //   <!-- FontAwesome -->
// // // // // // //   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
// // // // // // //   <!-- Google Fonts -->
// // // // // // //   <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

// // // // // // //   <style>
// // // // // // //     :root {
// // // // // // //       --primary: #3b82f6;
// // // // // // //       --primary-hover: #2563eb;
// // // // // // //       --bg-main: #f0f4f9;
// // // // // // //       --sidebar-bg: #0f172a;
// // // // // // //       --sidebar-hover: #1e293b;
// // // // // // //       --text-dark: #1e293b;
// // // // // // //       --text-muted: #64748b;
// // // // // // //       --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
// // // // // // //     }

// // // // // // //     * {
// // // // // // //       margin: 0;
// // // // // // //       padding: 0;
// // // // // // //       box-sizing: border-box;
// // // // // // //       font-family: 'Plus Jakarta Sans', sans-serif;
// // // // // // //     }

// // // // // // //     body {
// // // // // // //       background: var(--bg-main);
// // // // // // //       color: var(--text-dark);
// // // // // // //       overflow-x: hidden;
// // // // // // //     }

// // // // // // //     .admin {
// // // // // // //       display: flex;
// // // // // // //       min-height: 100vh;
// // // // // // //       position: relative;
// // // // // // //     }

// // // // // // //     /* ================= Sidebar ================= */
// // // // // // //     .sidebar {
// // // // // // //       width: 270px;
// // // // // // //       background: var(--sidebar-bg);
// // // // // // //       color: #fff;
// // // // // // //       display: flex;
// // // // // // //       flex-direction: column;
// // // // // // //       transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // // //       z-index: 1000;
// // // // // // //     }

// // // // // // //     .logo {
// // // // // // //       padding: 22px 25px;
// // // // // // //       font-size: 22px;
// // // // // // //       font-weight: 700;
// // // // // // //       background: #1e293b;
// // // // // // //       display: flex;
// // // // // // //       align-items: center;
// // // // // // //       justify-content: space-between;
// // // // // // //       letter-spacing: 0.5px;
// // // // // // //       color: #38bdf8;
// // // // // // //     }

// // // // // // //     .menu {
// // // // // // //       padding: 15px 12px;
// // // // // // //       flex: 1;
// // // // // // //       overflow-y: auto;
// // // // // // //     }

// // // // // // //     .menu a {
// // // // // // //       display: flex;
// // // // // // //       align-items: center;
// // // // // // //       gap: 14px;
// // // // // // //       padding: 12px 18px;
// // // // // // //       margin-bottom: 6px;
// // // // // // //       border-radius: 10px;
// // // // // // //       color: #94a3b8;
// // // // // // //       text-decoration: none;
// // // // // // //       font-size: 15px;
// // // // // // //       font-weight: 500;
// // // // // // //       transition: all 0.25s ease;
// // // // // // //     }

// // // // // // //     .menu a:hover, .menu a.active {
// // // // // // //       background: var(--primary);
// // // // // // //       color: #ffffff;
// // // // // // //       box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
// // // // // // //       transform: translateX(4px);
// // // // // // //     }

// // // // // // //     .menu a i {
// // // // // // //       font-size: 18px;
// // // // // // //       width: 20px;
// // // // // // //     }

// // // // // // //     /* ================= Main ================= */
// // // // // // //     .main {
// // // // // // //       flex: 1;
// // // // // // //       display: flex;
// // // // // // //       flex-direction: column;
// // // // // // //       min-width: 0;
// // // // // // //     }

// // // // // // //     /* Header */
// // // // // // //     .header {
// // // // // // //       height: 75px;
// // // // // // //       background: rgba(255, 255, 255, 0.85);
// // // // // // //       backdrop-filter: blur(10px);
// // // // // // //       display: flex;
// // // // // // //       justify-content: space-between;
// // // // // // //       align-items: center;
// // // // // // //       padding: 0 30px;
// // // // // // //       box-shadow: 0 2px 10px rgba(0,0,0,0.03);
// // // // // // //       position: sticky;
// // // // // // //       top: 0;
// // // // // // //       z-index: 900;
// // // // // // //     }

// // // // // // //     .header-left {
// // // // // // //       display: flex;
// // // // // // //       align-items: center;
// // // // // // //       gap: 15px;
// // // // // // //     }

// // // // // // //     .menu-toggle {
// // // // // // //       display: none;
// // // // // // //       font-size: 20px;
// // // // // // //       cursor: pointer;
// // // // // // //       background: #e2e8f0;
// // // // // // //       padding: 8px 12px;
// // // // // // //       border-radius: 8px;
// // // // // // //     }

// // // // // // //     .search-box {
// // // // // // //       position: relative;
// // // // // // //     }

// // // // // // //     .search-box i {
// // // // // // //       position: absolute;
// // // // // // //       left: 15px;
// // // // // // //       top: 50%;
// // // // // // //       transform: translateY(-50%);
// // // // // // //       color: var(--text-muted);
// // // // // // //     }

// // // // // // //     .search {
// // // // // // //       width: 350px;
// // // // // // //       padding: 10px 15px 10px 42px;
// // // // // // //       border: 1px solid #e2e8f0;
// // // // // // //       background: #f8fafc;
// // // // // // //       border-radius: 30px;
// // // // // // //       outline: none;
// // // // // // //       font-size: 14px;
// // // // // // //       transition: all 0.3s ease;
// // // // // // //     }

// // // // // // //     .search:focus {
// // // // // // //       background: #fff;
// // // // // // //       border-color: var(--primary);
// // // // // // //       box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
// // // // // // //     }

// // // // // // //     .right {
// // // // // // //       display: flex;
// // // // // // //       align-items: center;
// // // // // // //       gap: 20px;
// // // // // // //     }

// // // // // // //     .icon-btn {
// // // // // // //       position: relative;
// // // // // // //       background: #f1f5f9;
// // // // // // //       width: 40px;
// // // // // // //       height: 40px;
// // // // // // //       border-radius: 50%;
// // // // // // //       display: flex;
// // // // // // //       justify-content: center;
// // // // // // //       align-items: center;
// // // // // // //       cursor: pointer;
// // // // // // //       color: var(--text-dark);
// // // // // // //       transition: 0.2s;
// // // // // // //     }

// // // // // // //     .icon-btn:hover {
// // // // // // //       background: #e2e8f0;
// // // // // // //     }

// // // // // // //     .badge {
// // // // // // //       position: absolute;
// // // // // // //       top: 2px;
// // // // // // //       right: 2px;
// // // // // // //       width: 8px;
// // // // // // //       height: 8px;
// // // // // // //       background: #ef4444;
// // // // // // //       border-radius: 50%;
// // // // // // //     }

// // // // // // //     .profile {
// // // // // // //       display: flex;
// // // // // // //       align-items: center;
// // // // // // //       gap: 10px;
// // // // // // //       font-size: 15px;
// // // // // // //       font-weight: 600;
// // // // // // //       cursor: pointer;
// // // // // // //     }

// // // // // // //     .profile i {
// // // // // // //       font-size: 32px;
// // // // // // //       color: var(--primary);
// // // // // // //     }

// // // // // // //     /* Content Area */
// // // // // // //     .content {
// // // // // // //       padding: 30px;
// // // // // // //       flex: 1;
// // // // // // //     }

// // // // // // //     /* Cards Grid */
// // // // // // //     .cards {
// // // // // // //       display: grid;
// // // // // // //       grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
// // // // // // //       gap: 20px;
// // // // // // //       margin-bottom: 25px;
// // // // // // //     }

// // // // // // //     .card {
// // // // // // //       background: white;
// // // // // // //       padding: 22px;
// // // // // // //       border-radius: 16px;
// // // // // // //       box-shadow: var(--card-shadow);
// // // // // // //       display: flex;
// // // // // // //       align-items: center;
// // // // // // //       justify-content: space-between;
// // // // // // //       transition: all 0.3s ease;
// // // // // // //       border: 1px solid rgba(226, 232, 240, 0.8);
// // // // // // //     }

// // // // // // //     .card:hover {
// // // // // // //       transform: translateY(-50px);
// // // // // // //       transform: translateY(-5px);
// // // // // // //       box-shadow: 0 15px 30px rgba(0,0,0,0.08);
// // // // // // //     }

// // // // // // //     .card-info p {
// // // // // // //       color: var(--text-muted);
// // // // // // //       font-size: 14px;
// // // // // // //       font-weight: 500;
// // // // // // //       margin-bottom: 5px;
// // // // // // //     }

// // // // // // //     .card-info h2 {
// // // // // // //       font-size: 32px;
// // // // // // //       font-weight: 700;
// // // // // // //       color: var(--text-dark);
// // // // // // //     }

// // // // // // //     .card-icon {
// // // // // // //       width: 55px;
// // // // // // //       height: 55px;
// // // // // // //       border-radius: 14px;
// // // // // // //       display: flex;
// // // // // // //       align-items: center;
// // // // // // //       justify-content: center;
// // // // // // //       font-size: 24px;
// // // // // // //     }

// // // // // // //     .card-1 .card-icon { background: #dbeafe; color: #2563eb; }
// // // // // // //     .card-2 .card-icon { background: #fce7f3; color: #ec4899; }
// // // // // // //     .card-3 .card-icon { background: #dcfce7; color: #16a34a; }
// // // // // // //     .card-4 .card-icon { background: #fef3c7; color: #d97706; }

// // // // // // //     /* Bottom Grid */
// // // // // // //     .bottom {
// // // // // // //       display: grid;
// // // // // // //       grid-template-columns: 2fr 1fr;
// // // // // // //       gap: 20px;
// // // // // // //       margin-bottom: 25px;
// // // // // // //     }

// // // // // // //     .analytics, .quick {
// // // // // // //       background: white;
// // // // // // //       padding: 24px;
// // // // // // //       border-radius: 16px;
// // // // // // //       box-shadow: var(--card-shadow);
// // // // // // //       border: 1px solid rgba(226, 232, 240, 0.8);
// // // // // // //     }

// // // // // // //     .analytics h2, .quick h2, .orders h2 {
// // // // // // //       font-size: 18px;
// // // // // // //       font-weight: 700;
// // // // // // //       color: var(--text-dark);
// // // // // // //       margin-bottom: 18px;
// // // // // // //     }

// // // // // // //     .graph {
// // // // // // //       height: 250px;
// // // // // // //       border-radius: 12px;
// // // // // // //       background: linear-gradient(135deg, #3b82f6, #6366f1);
// // // // // // //       display: flex;
// // // // // // //       flex-direction: column;
// // // // // // //       justify-content: center;
// // // // // // //       align-items: center;
// // // // // // //       color: white;
// // // // // // //       gap: 10px;
// // // // // // //       box-shadow: inset 0 0 20px rgba(0,0,0,0.1);
// // // // // // //     }

// // // // // // //     .graph i {
// // // // // // //       font-size: 48px;
// // // // // // //       opacity: 0.8;
// // // // // // //     }

// // // // // // //     .quick-actions-grid {
// // // // // // //       display: flex;
// // // // // // //       flex-direction: column;
// // // // // // //       gap: 12px;
// // // // // // //     }

// // // // // // //     .btn-action {
// // // // // // //       width: 100%;
// // // // // // //       padding: 12px 18px;
// // // // // // //       border: none;
// // // // // // //       border-radius: 10px;
// // // // // // //       background: #f8fafc;
// // // // // // //       color: var(--text-dark);
// // // // // // //       font-size: 14px;
// // // // // // //       font-weight: 600;
// // // // // // //       cursor: pointer;
// // // // // // //       display: flex;
// // // // // // //       align-items: center;
// // // // // // //       gap: 12px;
// // // // // // //       border: 1px solid #e2e8f0;
// // // // // // //       transition: all 0.25s ease;
// // // // // // //     }

// // // // // // //     .btn-action:hover {
// // // // // // //       background: var(--primary);
// // // // // // //       color: white;
// // // // // // //       border-color: var(--primary);
// // // // // // //       transform: translateX(3px);
// // // // // // //     }

// // // // // // //     /* Orders Table */
// // // // // // //     .orders {
// // // // // // //       background: white;
// // // // // // //       padding: 24px;
// // // // // // //       border-radius: 16px;
// // // // // // //       box-shadow: var(--card-shadow);
// // // // // // //       border: 1px solid rgba(226, 232, 240, 0.8);
// // // // // // //     }

// // // // // // //     .table-responsive {
// // // // // // //       width: 100%;
// // // // // // //       overflow-x: auto;
// // // // // // //     }

// // // // // // //     table {
// // // // // // //       width: 100%;
// // // // // // //       border-collapse: collapse;
// // // // // // //       text-align: left;
// // // // // // //     }

// // // // // // //     th {
// // // // // // //       background: #f8fafc;
// // // // // // //       color: var(--text-muted);
// // // // // // //       padding: 14px 16px;
// // // // // // //       font-size: 13px;
// // // // // // //       font-weight: 600;
// // // // // // //       text-transform: uppercase;
// // // // // // //       letter-spacing: 0.5px;
// // // // // // //       border-bottom: 2px solid #e2e8f0;
// // // // // // //     }

// // // // // // //     td {
// // // // // // //       padding: 16px;
// // // // // // //       border-bottom: 1px solid #f1f5f9;
// // // // // // //       font-size: 14px;
// // // // // // //       color: var(--text-dark);
// // // // // // //     }

// // // // // // //     tr:hover td {
// // // // // // //       background: #f8fafc;
// // // // // // //     }

// // // // // // //     .status {
// // // // // // //       padding: 6px 12px;
// // // // // // //       border-radius: 20px;
// // // // // // //       font-size: 12px;
// // // // // // //       font-weight: 600;
// // // // // // //       display: inline-block;
// // // // // // //     }

// // // // // // //     .status.completed {
// // // // // // //       background: #dcfce7;
// // // // // // //       color: #15803d;
// // // // // // //     }

// // // // // // //     .status.pending {
// // // // // // //       background: #fef3c7;
// // // // // // //       color: #b45309;
// // // // // // //     }

// // // // // // //     .view-btn {
// // // // // // //       background: #f1f5f9;
// // // // // // //       color: var(--text-dark);
// // // // // // //       padding: 6px 14px;
// // // // // // //       border-radius: 8px;
// // // // // // //       text-decoration: none;
// // // // // // //       font-size: 13px;
// // // // // // //       font-weight: 600;
// // // // // // //       transition: 0.2s;
// // // // // // //       border: none;
// // // // // // //       cursor: pointer;
// // // // // // //     }

// // // // // // //     .view-btn:hover {
// // // // // // //       background: var(--primary);
// // // // // // //       color: white;
// // // // // // //     }

// // // // // // //     /* Overlay for Mobile Sidebar */
// // // // // // //     .overlay {
// // // // // // //       display: none;
// // // // // // //       position: fixed;
// // // // // // //       top: 0;
// // // // // // //       left: 0;
// // // // // // //       width: 100%;
// // // // // // //       height: 100%;
// // // // // // //       background: rgba(0,0,0,0.5);
// // // // // // //       z-index: 950;
// // // // // // //     }

// // // // // // //     /* ================= Mobile & Responsive Styles ================= */
// // // // // // //     @media (max-width: 992px) {
// // // // // // //       .bottom {
// // // // // // //         grid-template-columns: 1fr;
// // // // // // //       }
// // // // // // //     }

// // // // // // //     @media (max-width: 768px) {
// // // // // // //       .menu-toggle {
// // // // // // //         display: block;
// // // // // // //       }

// // // // // // //       .sidebar {
// // // // // // //         position: fixed;
// // // // // // //         left: -270px;
// // // // // // //         top: 0;
// // // // // // //         bottom: 0;
// // // // // // //         height: 100vh;
// // // // // // //       }

// // // // // // //       .sidebar.active {
// // // // // // //         left: 0;
// // // // // // //       }

// // // // // // //       .overlay.active {
// // // // // // //         display: block;
// // // // // // //       }

// // // // // // //       .search {
// // // // // // //         width: 180px;
// // // // // // //       }

// // // // // // //       .content {
// // // // // // //         padding: 15px;
// // // // // // //       }

// // // // // // //       .header {
// // // // // // //         padding: 0 15px;
// // // // // // //       }

// // // // // // //       .profile span {
// // // // // // //         display: none;
// // // // // // //       }
// // // // // // //     }
// // // // // // //   </style>
// // // // // // // </head>

// // // // // // // <body>

// // // // // // // <div class="overlay" id="overlay"></div>

// // // // // // // <div class="admin">

// // // // // // //   <!-- Sidebar -->
// // // // // // //   <aside class="sidebar" id="sidebar">
// // // // // // //     <div class="logo">
// // // // // // //       <span>HHGS Admin</span>
// // // // // // //       <i class="fa fa-times" id="closeSidebar" style="cursor:pointer; display:none;"></i>
// // // // // // //     </div>

// // // // // // //     <nav class="menu">
// // // // // // //       <a href="#" class="active"><i class="fa fa-chart-line"></i><span>Dashboard</span></a>
// // // // // // //       <a href="#"><i class="fa fa-globe"></i><span>Website</span></a>
// // // // // // //       <a href="#"><i class="fa fa-user-doctor"></i><span>Doctors</span></a>
// // // // // // //       <a href="#"><i class="fa fa-user-graduate"></i><span>Students</span></a>
// // // // // // //       <a href="#"><i class="fa fa-screwdriver-wrench"></i><span>Services</span></a>
// // // // // // //       <a href="#"><i class="fa fa-image"></i><span>Banners</span></a>
// // // // // // //       <a href="#"><i class="fa fa-box"></i><span>Products</span></a>
// // // // // // //       <a href="#"><i class="fa fa-building-columns"></i><span>Government</span></a>
// // // // // // //       <a href="#"><i class="fa fa-cart-shopping"></i><span>Orders</span></a>
// // // // // // //       <a href="#"><i class="fa fa-user"></i><span>Profile</span></a>
// // // // // // //       <a href="#"><i class="fa fa-right-from-bracket"></i><span>Logout</span></a>
// // // // // // //     </nav>
// // // // // // //   </aside>

// // // // // // //   <!-- Main Content -->
// // // // // // //   <div class="main">

// // // // // // //     <!-- Top Header -->
// // // // // // //     <header class="header">
// // // // // // //       <div class="header-left">
// // // // // // //         <div class="menu-toggle" id="menuToggle">
// // // // // // //           <i class="fa fa-bars"></i>
// // // // // // //         </div>
// // // // // // //         <div class="search-box">
// // // // // // //           <i class="fa fa-search"></i>
// // // // // // //           <input type="text" class="search" placeholder="Search anything...">
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div class="right">
// // // // // // //         <div class="icon-btn">
// // // // // // //           <i class="fa fa-bell"></i>
// // // // // // //           <span class="badge"></span>
// // // // // // //         </div>

// // // // // // //         <div class="profile">
// // // // // // //           <i class="fa-solid fa-circle-user"></i>
// // // // // // //           <span>Admin</span>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </header>

// // // // // // //     <!-- Main Content Area -->
// // // // // // //     <main class="content">

// // // // // // //       <!-- KPI Cards -->
// // // // // // //       <div class="cards">
// // // // // // //         <div class="card card-1">
// // // // // // //           <div class="card-info">
// // // // // // //             <p>Students</p>
// // // // // // //             <h2>45</h2>
// // // // // // //           </div>
// // // // // // //           <div class="card-icon">
// // // // // // //             <i class="fa fa-user-graduate"></i>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div class="card card-2">
// // // // // // //           <div class="card-info">
// // // // // // //             <p>Doctors</p>
// // // // // // //             <h2>12</h2>
// // // // // // //           </div>
// // // // // // //           <div class="card-icon">
// // // // // // //             <i class="fa fa-user-doctor"></i>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div class="card card-3">
// // // // // // //           <div class="card-info">
// // // // // // //             <p>Services</p>
// // // // // // //             <h2>8</h2>
// // // // // // //           </div>
// // // // // // //           <div class="card-icon">
// // // // // // //             <i class="fa fa-screwdriver-wrench"></i>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div class="card card-4">
// // // // // // //           <div class="card-info">
// // // // // // //             <p>Banners</p>
// // // // // // //             <h2>6</h2>
// // // // // // //           </div>
// // // // // // //           <div class="card-icon">
// // // // // // //             <i class="fa fa-image"></i>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <!-- Analytics & Quick Actions Section -->
// // // // // // //       <div class="bottom">
// // // // // // //         <div class="analytics">
// // // // // // //           <h2>📈 Enrollment & Order Analytics</h2>
// // // // // // //           <div class="graph">
// // // // // // //             <i class="fa-solid fa-chart-column"></i>
// // // // // // //             <span>Interactive Chart Component</span>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div class="quick">
// // // // // // //           <h2>⚡ Quick Actions</h2>
// // // // // // //           <div class="quick-actions-grid">
// // // // // // //             <button class="btn-action" onclick="handleAction('Add Government Entry')">
// // // // // // //               <i class="fa fa-plus-circle" style="color:#2563eb;"></i> Add Govt Entry
// // // // // // //             </button>
// // // // // // //             <button class="btn-action" onclick="handleAction('Upload Banner')">
// // // // // // //               <i class="fa fa-upload" style="color:#ec4899;"></i> Upload Banner
// // // // // // //             </button>
// // // // // // //             <button class="btn-action" onclick="handleAction('Add Doctor')">
// // // // // // //               <i class="fa fa-user-md" style="color:#16a34a;"></i> Add Doctor
// // // // // // //             </button>
// // // // // // //             <button class="btn-action" onclick="handleAction('Add Product')">
// // // // // // //               <i class="fa fa-box-open" style="color:#d97706;"></i> Add Product
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <!-- Recent Orders Table -->
// // // // // // //       <div class="orders">
// // // // // // //         <h2>📦 Recent Orders</h2>
// // // // // // //         <div class="table-responsive">
// // // // // // //           <table>
// // // // // // //             <thead>
// // // // // // //               <tr>
// // // // // // //                 <th>Order ID</th>
// // // // // // //                 <th>Client Name</th>
// // // // // // //                 <th>Status</th>
// // // // // // //                 <th>Action</th>
// // // // // // //               </tr>
// // // // // // //             </thead>
// // // // // // //             <tbody>
// // // // // // //               <tr>
// // // // // // //                 <td>#1001</td>
// // // // // // //                 <td>Rahul Kumar</td>
// // // // // // //                 <td><span class="status completed">Completed</span></td>
// // // // // // //                 <td><button class="view-btn" onclick="handleAction('View Order #1001')">View</button></td>
// // // // // // //               </tr>
// // // // // // //               <tr>
// // // // // // //                 <td>#1002</td>
// // // // // // //                 <td>Amit Sharma</td>
// // // // // // //                 <td><span class="status pending">Pending</span></td>
// // // // // // //                 <td><button class="view-btn" onclick="handleAction('View Order #1002')">View</button></td>
// // // // // // //               </tr>
// // // // // // //               <tr>
// // // // // // //                 <td>#1003</td>
// // // // // // //                 <td>Rohan Singh</td>
// // // // // // //                 <td><span class="status completed">Completed</span></td>
// // // // // // //                 <td><button class="view-btn" onclick="handleAction('View Order #1003')">View</button></td>
// // // // // // //               </tr>
// // // // // // //             </tbody>
// // // // // // //           </table>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //     </main>

// // // // // // //   </div>

// // // // // // // </div>

// // // // // // // <script>
// // // // // // //   // Mobile Sidebar Toggle JS
// // // // // // //   const menuToggle = document.getElementById('menuToggle');
// // // // // // //   const sidebar = document.getElementById('sidebar');
// // // // // // //   const overlay = document.getElementById('overlay');

// // // // // // //   function toggleSidebar() {
// // // // // // //     sidebar.classList.toggle('active');
// // // // // // //     overlay.classList.toggle('active');
// // // // // // //   }

// // // // // // //   if(menuToggle) {
// // // // // // //     menuToggle.addEventListener('click', toggleSidebar);
// // // // // // //   }
// // // // // // //   if(overlay) {
// // // // // // //     overlay.addEventListener('click', toggleSidebar);
// // // // // // //   }

// // // // // // //   // Active Menu Highlight
// // // // // // //   const menuLinks = document.querySelectorAll('.menu a');
// // // // // // //   menuLinks.forEach(link => {
// // // // // // //     link.addEventListener('click', function() {
// // // // // // //       menuLinks.forEach(l => l.classList.remove('active'));
// // // // // // //       this.classList.add('active');
// // // // // // //     });
// // // // // // //   });

// // // // // // //   // Action Click Handler (Functional Working Buttons)
// // // // // // //   function handleAction(actionName) {
// // // // // // //     alert(actionName + " clicked successfully!");
// // // // // // //   }
// // // // // // // </script>

// // // // // // // </body>
// // // // // // // </html>
// // // // // // // `;
// // // // // // // }

// // // // // // // module.exports = AdminDashboard;




// // // // // // // const DashboardHeader = require("../views/component/dashboard/dashboardHeader");
// // // // // // // const DashboardSidebar = require("../views/component/dashboard/dashboardSidebar");
// // // // // // // const DashboardSearch = require("../views/component/dashboard/dashboardSearch");
// // // // // // // const DashboardStats = require("../views/component/dashboard/dashboardStats");
// // // // // // // const DashboardSection = require("../views/component/dashboard/dashboardSection");

// // // // // // // function AdminDashboard(data = {}) {

// // // // // // // return `
// // // // // // // <!DOCTYPE html>

// // // // // // // <html lang="en">

// // // // // // // <head>

// // // // // // // <meta charset="UTF-8">

// // // // // // // <meta name="viewport"
// // // // // // // content="width=device-width, initial-scale=1.0">

// // // // // // // <title>HHGS Admin Dashboard</title>

// // // // // // // <link rel="stylesheet"
// // // // // // // href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

// // // // // // // <link rel="stylesheet"
// // // // // // // href="/css/admin-dashboard.css">

// // // // // // // </head>

// // // // // // // <body>

// // // // // // // <div class="overlay" id="overlay"></div>

// // // // // // // <div class="admin">

// // // // // // // ${DashboardSidebar()}

// // // // // // // <div class="main">

// // // // // // // ${DashboardHeader()}

// // // // // // // <div class="content">

// // // // // // // ${DashboardStats(data)}

// // // // // // // <div class="bottom">

// // // // // // // ${DashboardSection()}

// // // // // // // </div>

// // // // // // // </div>

// // // // // // // </div>

// // // // // // // </div>

// // // // // // // <script src="/js/admin-dashboard.js"></script>

// // // // // // // </body>

// // // // // // // </html>
// // // // // // // `;

// // // // // // // }

// // // // // // // module.exports = AdminDashboard;

// // // // // // const DashboardHeader = require("../views/component/dashboard/dashboardHeader");
// // // // // // const DashboardSidebar = require("../views/component/dashboard/dashboardSidebar");
// // // // // // const DashboardStats = require("../views/component/dashboard/dashboardStats");
// // // // // // const DashboardSection = require("../views/component/dashboard/dashboardSection");


// // // // // // function AdminDashboard(data = {}) {

// // // // // // return `

// // // // // // <!DOCTYPE html>

// // // // // // <html lang="en">

// // // // // // <head>

// // // // // // <meta charset="UTF-8">

// // // // // // <meta name="viewport"
// // // // // // content="width=device-width, initial-scale=1.0">

// // // // // // <title>HHGS Admin Dashboard</title>


// // // // // // <link rel="stylesheet"
// // // // // // href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">


// // // // // // <link rel="stylesheet"
// // // // // // href="/css/admin-dashboard.css">


// // // // // // </head>


// // // // // // <body>


// // // // // // <div class="overlay" id="overlay"></div>


// // // // // // <div class="admin">


// // // // // //     ${DashboardSidebar()}


// // // // // //     <div class="main">


// // // // // //         ${DashboardHeader()}


// // // // // //         <main class="content">


// // // // // //             ${DashboardStats(data)}


// // // // // //             ${DashboardSection(data)}


// // // // // //         </main>


// // // // // //     </div>


// // // // // // </div>



// // // // // // <script src="/js/admin-dashboard.js"></script>


// // // // // // </body>

// // // // // // </html>

// // // // // // `;

// // // // // // }


// // // // // // module.exports = AdminDashboard;


// // // // // // const DashboardHeader = require("../views/component/dashboard/dashboardHeader");
// // // // // // const DashboardSidebar = require("../views/component/dashboard/dashboardSidebar");
// // // // // // const DashboardStats = require("../views/component/dashboard/dashboardStats");
// // // // // // const DashboardSection = require("../views/component/dashboard/dashboardSection");


// // // // // // function AdminDashboard(data = {}) {

// // // // // // return `

// // // // // // <!DOCTYPE html>

// // // // // // <html lang="en">

// // // // // // <head>

// // // // // // <meta charset="UTF-8">

// // // // // // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // // // // // <title>HHGS Admin Dashboard</title>


// // // // // // <link rel="stylesheet"
// // // // // // href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">


// // // // // // <link rel="stylesheet" href="/css/admin-dashboard.css">


// // // // // // </head>


// // // // // // <body>


// // // // // // <div class="admin">


// // // // // //     ${DashboardSidebar()}


// // // // // //     <div class="main">


// // // // // //         ${DashboardHeader()}


// // // // // //         <main class="content">


// // // // // //             <div class="dashboard-container">


// // // // // //                 ${DashboardStats(data)}


// // // // // //                 ${DashboardSection(data)}


// // // // // //             </div>


// // // // // //         </main>


// // // // // //     </div>


// // // // // // </div>



// // // // // // <script src="/js/admin-dashboard.js"></script>


// // // // // // </body>

// // // // // // </html>

// // // // // // `;

// // // // // // }


// // // // // // module.exports = AdminDashboard;

// // // // // const DashboardHeader = require("../views/component/dashboard/dashboardHeader");
// // // // // const DashboardSidebar = require("../views/component/dashboard/dashboardSidebar");
// // // // // const DashboardStats = require("../views/component/dashboard/dashboardStats");
// // // // // const DashboardSection = require("../views/component/dashboard/dashboardSection");

// // // // // function AdminDashboard(data = {}) {
// // // // // return `
// // // // // <!DOCTYPE html>
// // // // // <html lang="en">
// // // // // <head>
// // // // // <meta charset="UTF-8">
// // // // // <meta name="viewport" content="width=device-width, initial-scale=1.0">
// // // // // <title>HHGS Admin Dashboard</title>

// // // // // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
// // // // // <link rel="stylesheet" href="/css/admin-dashboard.css">

// // // // // <style>
// // // // //   /* Base Reset */
// // // // //   * {
// // // // //     margin: 0;
// // // // //     padding: 0;
// // // // //     box-sizing: border-box;
// // // // //   }

// // // // //   body {
// // // // //     background-color: #f8fafc;
// // // // //     font-family: system-ui, -apple-system, sans-serif;
// // // // //   }

// // // // //   .admin {
// // // // //     display: flex;
// // // // //     width: 100%;
// // // // //     min-height: 100vh;
// // // // //   }

// // // // //   /* MAIN RIGHT CONTAINER FIX */
// // // // //   .main {
// // // // //     margin-left: 270px; /* Sidebar ki exact width */
// // // // //     width: calc(100% - 270px); /* Bacha hua saara horizontal space */
// // // // //     min-height: 100vh;
// // // // //     display: flex;
// // // // //     flex-direction: column;
// // // // //     transition: all 0.3s ease;
// // // // //   }

// // // // //   .content {
// // // // //     padding: 20px;
// // // // //     width: 100%;
// // // // //   }

// // // // //   .dashboard-container {
// // // // //     display: flex;
// // // // //     flex-direction: column;
// // // // //     gap: 20px;
// // // // //     width: 100%;
// // // // //   }

// // // // //   /* TABLET RESPONSIVE */
// // // // //   @media (max-width: 1000px) {
// // // // //     .main {
// // // // //       margin-left: 85px;
// // // // //       width: calc(100% - 85px);
// // // // //     }
// // // // //   }

// // // // //   /* MOBILE RESPONSIVE */
// // // // //   @media (max-width: 600px) {
// // // // //     .main {
// // // // //       margin-left: 70px;
// // // // //       width: calc(100% - 70px);
// // // // //       padding: 10px;
// // // // //     }
// // // // //     .content {
// // // // //       padding: 10px 5px;
// // // // //     }
// // // // //   }
// // // // // </style>

// // // // // </head>

// // // // // <body>

// // // // // <div class="admin">

// // // // //     ${DashboardSidebar()}

// // // // //     <div class="main">

// // // // //         ${DashboardHeader()}

// // // // //         <main class="content">

// // // // //             <div class="dashboard-container">

// // // // //                 ${DashboardStats(data)}

// // // // //                 ${DashboardSection(data)}

// // // // //             </div>

// // // // //         </main>

// // // // //     </div>

// // // // // </div>

// // // // // <script src="/js/admin-dashboard.js"></script>

// // // // // </body>
// // // // // </html>
// // // // // `;
// // // // // }

// // // // // module.exports = AdminDashboard;

// // // // const DashboardHeader = require("../views/component/dashboard/dashboardHeader");
// // // // const DashboardSidebar = require("../views/component/dashboard/dashboardSidebar");
// // // // const DashboardStats = require("../views/component/dashboard/dashboardStats");
// // // // const DashboardSection = require("../views/component/dashboard/dashboardSection");

// // // // function dashboard(data = {}) {
// // // //   return `
// // // // <!DOCTYPE html>
// // // // <html lang="en">
// // // // <head>
// // // //   <meta charset="UTF-8">
// // // //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
// // // //   <title>HHGS Admin Dashboard</title>

// // // //   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
// // // //   <link rel="stylesheet" href="/css/admin-dashboard.css">

// // // //   <style>
// // // //     * {
// // // //       margin: 0;
// // // //       padding: 0;
// // // //       box-sizing: border-box;
// // // //     }

// // // //     body {
// // // //       background-color: #f8fafc;
// // // //       font-family: system-ui, -apple-system, sans-serif;
// // // //     }

// // // //     .admin {
// // // //       display: flex;
// // // //       width: 100%;
// // // //       min-height: 100vh;
// // // //     }

// // // //     /* MAIN RIGHT AREA FIX */
// // // //     .main {
// // // //       margin-left: 270px;
// // // //       width: calc(100% - 270px);
// // // //       min-height: 100vh;
// // // //       display: flex;
// // // //       flex-direction: column;
// // // //       transition: all 0.3s ease;
// // // //     }

// // // //     .content {
// // // //       padding: 20px;
// // // //       width: 100%;
// // // //     }

// // // //     .dashboard-container {
// // // //       display: flex;
// // // //       flex-direction: column;
// // // //       gap: 20px;
// // // //       width: 100%;
// // // //     }

// // // //     @media (max-width: 1000px) {
// // // //       .main {
// // // //         margin-left: 85px;
// // // //         width: calc(100% - 85px);
// // // //       }
// // // //     }

// // // //     @media (max-width: 600px) {
// // // //       .main {
// // // //         margin-left: 70px;
// // // //         width: calc(100% - 70px);
// // // //         padding: 10px;
// // // //       }
// // // //       .content {
// // // //         padding: 10px 5px;
// // // //       }
// // // //     }
// // // //   </style>
// // // // </head>
// // // // <body>

// // // // <div class="admin">

// // // //     ${DashboardSidebar()}

// // // //     <div class="main">

// // // //         ${DashboardHeader()}

// // // //         <main class="content">

// // // //             <div class="dashboard-container">

// // // //                 <!-- MAIN FIX HERE: data pass kar diya gaya hai -->
// // // //                 ${DashboardStats(data)}

// // // //                 ${DashboardSection(data)}

// // // //             </div>

// // // //         </main>

// // // //     </div>

// // // // </div>

// // // // <script src="/js/admin-dashboard.js"></script>

// // // // </body>
// // // // </html>
// // // // `;
// // // // }

// // // // module.exports = dashboard;


// // // // const DashboardHeader = require("../views/component/dashboard/dashboardHeader");
// // // // const DashboardSidebar = require("../views/component/dashboard/dashboardSidebar");
// // // // const DashboardStats = require("../views/component/dashboard/dashboardStats");
// // // // const DashboardSection = require("../views/component/dashboard/dashboardSection");


// // // // function dashboard(data = {}) {

// // // //     console.log("=== DASHBOARD PAGE DATA ===");
// // // //     console.log(data);

// // // //     return `
// // // // <!DOCTYPE html>
// // // // <html lang="en">

// // // // <head>
// // // // <meta charset="UTF-8">
// // // // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // // // <title>HHGS Admin Dashboard</title>

// // // // <link rel="stylesheet" href="/css/admin-dashboard.css">

// // // // </head>

// // // // <body>

// // // // <div class="admin">

// // // // ${DashboardSidebar()}

// // // // <div class="main">

// // // // ${DashboardHeader()}

// // // // <main class="content">

// // // // <div class="dashboard-container">

// // // // ${DashboardStats(data)}

// // // // ${DashboardSection(data)}

// // // // </div>

// // // // </main>

// // // // </div>

// // // // </div>


// // // // <script src="/js/admin-dashboard.js"></script>

// // // // </body>

// // // // </html>
// // // // `;
// // // // }


// // // // module.exports = dashboard;


// // // const DashboardHeader = require("../views/component/dashboard/dashboardHeader");
// // // const DashboardSidebar = require("../views/component/dashboard/dashboardSidebar");
// // // const DashboardStats = require("../views/component/dashboard/dashboardStats");
// // // const DashboardSection = require("../views/component/dashboard/dashboardSection");


// // // function dashboard(data = {}) {

// // //     console.log("=== DASHBOARD PAGE DATA ===");
// // //     console.log(data);

// // //     return `
// // // <!DOCTYPE html>
// // // <html lang="en">

// // // <head>
// // // <meta charset="UTF-8">
// // // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // // <title>HHGS Admin Dashboard</title>

// // // <link rel="stylesheet" href="/css/admin-dashboard.css">

// // // </head>

// // // <body>

// // // <div class="admin">

// // // ${DashboardSidebar()}

// // // <div class="main">

// // // ${DashboardHeader()}

// // // <main class="content">

// // // ${DashboardStats(data)}

// // // ${DashboardSection(data)}

// // // </main>

// // // </div>

// // // </div>


// // // <script src="/js/admin-dashboard.js"></script>

// // // </body>

// // // </html>
// // // `;
// // // }


// // // module.exports = dashboard;

// // // const DashboardHeader = require("../views/component/dashboard/dashboardHeader");
// // // const DashboardSidebar = require("../views/component/dashboard/dashboardSidebar");
// // // const DashboardStats = require("../views/component/dashboard/dashboardStats");
// // // const DashboardSection = require("../views/component/dashboard/dashboardSection");


// // // function dashboard(data = {}) {

// // //     console.log("=== DASHBOARD PAGE DATA ===");
// // //     console.log(data);


// // //     return `
// // // <!DOCTYPE html>
// // // <html lang="en">

// // // <head>

// // // <meta charset="UTF-8">

// // // <meta name="viewport" content="width=device-width, initial-scale=1.0">


// // // <title>HHGS Admin Dashboard</title>


// // // <link rel="stylesheet" href="/css/admin-dashboard.css">


// // // </head>


// // // <body>


// // // <div class="admin-layout">


// // // ${DashboardSidebar()}



// // // <div class="admin-main">


// // // ${DashboardHeader()}



// // // <main class="dashboard-content">


// // // ${DashboardStats(data)}


// // // ${DashboardSection(data)}


// // // </main>


// // // </div>


// // // </div>




// // // <script src="/js/admin-dashboard.js"></script>


// // // </body>


// // // </html>

// // // `;

// // // }


// // // module.exports = dashboard;

// // const DashboardHeader = require("../views/component/dashboard/dashboardHeader");
// // const DashboardSidebar = require("../views/component/dashboard/dashboardSidebar");
// // const DashboardStats = require("../views/component/dashboard/dashboardStats");
// // const DashboardSection = require("../views/component/dashboard/dashboardSection");


// // function dashboard(data = {}) {

// //     console.log("=== DASHBOARD PAGE DATA ===");
// //     console.log(data);


// //     return `
// // <!DOCTYPE html>
// // <html lang="en">

// // <head>

// // <meta charset="UTF-8">

// // <meta name="viewport" content="width=device-width, initial-scale=1.0">


// // <title>HHGS Admin Dashboard</title>


// // <link rel="stylesheet" href="/css/admin-dashboard.css">


// // <style>

// // /* ================= MAIN LAYOUT ================= */


// // *{
// //     box-sizing:border-box;
// // }



// // body{

// //     margin:0;

// //     padding:0;

// //     overflow-x:hidden;

// // }




// // .admin-layout{

// //     width:100%;

// //     min-height:100vh;

// // }




// // /* ================= SIDEBAR FIX ================= */


// // .dashboard-sidebar{

// //     position:fixed;

// //     top:0;

// //     left:0;

// //     width:270px;

// //     height:100vh;

// //     z-index:1000;

// //     overflow-y:auto;

// // }



// // .dashboard-sidebar::-webkit-scrollbar{

// //     display:none;

// // }


// // .dashboard-sidebar{

// //     scrollbar-width:none;

// // }





// // /* ================= MAIN AREA ================= */


// // .admin-main{


// //     margin-left:270px;


// //     width:calc(100% - 270px);


// //     min-height:100vh;


// //     display:flex;


// //     flex-direction:column;


// // }





// // /* ================= CONTENT ================= */


// // .dashboard-content{


// //     width:100%;


// //     padding:25px;


// //     margin-top:80px;


// //     overflow:hidden;


// // }





// // /* ================= TABLET ================= */


// // @media(max-width:1000px){


// // .dashboard-sidebar{

// //     width:85px;

// // }



// // .admin-main{


// //     margin-left:85px;


// //     width:calc(100% - 85px);


// // }



// // }




// // /* ================= MOBILE ================= */


// // @media(max-width:600px){


// // .dashboard-sidebar{

// //     width:70px;

// // }



// // .admin-main{


// //     margin-left:70px;


// //     width:calc(100% - 70px);


// // }



// // .dashboard-content{


// //     padding:15px;


// //     margin-top:70px;


// // }



// // }



// // </style>


// // </head>


// // <body>



// // <div class="admin-layout">



// // ${DashboardSidebar()}



// // <div class="admin-main">



// // ${DashboardHeader()}




// // <main class="dashboard-content">



// // ${DashboardStats(data)}



// // ${DashboardSection(data)}



// // </main>



// // </div>



// // </div>




// // <script src="/js/admin-dashboard.js"></script>



// // </body>


// // </html>

// // `;

// // }


// // module.exports = dashboard;


// const DashboardHeader = require("../views/component/dashboard/dashboardHeader");
// const DashboardSidebar = require("../views/component/dashboard/dashboardSidebar");
// const DashboardStats = require("../views/component/dashboard/dashboardStats");
// const DashboardSection = require("../views/component/dashboard/dashboardSection");

// function dashboard(data = {}) {
//     console.log("=== DASHBOARD PAGE DATA ===");
//     console.log(data);

//     return `
// <!DOCTYPE html>
// <html lang="en">

// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">

// <title>HHGS Admin Dashboard</title>

// <!-- Font Awesome Icons -->
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
// <link rel="stylesheet" href="/css/admin-dashboard.css">

// <style>

// /* ================= MAIN LAYOUT & RESET ================= */
// * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
// }

// body {
//     overflow-x: hidden;
//     background-color: #f8fafc;
//     font-family: system-ui, -apple-system, sans-serif;
// }

// .admin-layout {
//     width: 100%;
//     min-height: 100vh;
//     position: relative;
// }

// /* ================= DESKTOP SIDEBAR ================= */
// .dashboard-sidebar {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 270px;
//     height: 100vh;
//     z-index: 1000;
//     overflow-y: auto;
//     transition: left 0.3s ease-in-out;
// }

// .dashboard-sidebar::-webkit-scrollbar {
//     display: none;
// }

// .dashboard-sidebar {
//     scrollbar-width: none;
// }

// /* ================= MAIN AREA ================= */
// .admin-main {
//     margin-left: 270px;
//     width: calc(100% - 270px);
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
// }

// /* ================= CONTENT AREA ================= */
// .dashboard-content {
//     width: 100%;
//     padding: 25px;
//     margin-top: 80px;
//     overflow: hidden;
// }

// /* ================= MOBILE OVERLAY ================= */
// .sidebar-overlay {
//     display: none;
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     background: rgba(15, 23, 42, 0.6);
//     backdrop-filter: blur(2px);
//     z-index: 999;
// }

// .sidebar-overlay.active {
//     display: block;
// }

// /* ================= TABLET RESPONSIVE ================= */
// @media(max-width: 1000px) {
//     .dashboard-sidebar {
//         width: 85px;
//     }

//     .admin-main {
//         margin-left: 85px;
//         width: calc(100% - 85px);
//     }
// }

// /* ================= MOBILE RESPONSIVE (SLIDE-IN SIDEBAR) ================= */
// @media(max-width: 600px) {
//     /* Mobile par sidebar ko hidden (off-screen) set kiya */
//     .dashboard-sidebar {
//         position: fixed;
//         left: -280px; /* Fully Hidden */
//         width: 270px !important; /* Full width taaki text aur icon sahi dikhe */
//         height: 100vh;
//         z-index: 1050;
//         box-shadow: 4px 0 15px rgba(0, 0, 0, 0.15);
//     }

//     /* Menu Button click karne par yeh class active hogi */
//     .dashboard-sidebar.active {
//         left: 0 !important;
//     }

//     /* Main Content area mobile par 100% width lega */
//     .admin-main {
//         margin-left: 0 !important;
//         width: 100% !important;
//     }

//     .dashboard-content {
//         padding: 15px;
//         margin-top: 70px;
//     }
// }


// .manage-vegetable-box {
//     width: 100%;
//     margin-bottom: 20px;
//     display: flex;
//     justify-content: flex-end;
// }

// .manage-vegetable-btn {
//     display: inline-flex;
//     align-items: center;
//     gap: 9px;

//     padding: 12px 18px;

//     background: linear-gradient(
//         135deg,
//         #16a34a,
//         #15803d
//     );

//     color: #ffffff;
//     text-decoration: none;

//     font-size: 14px;
//     font-weight: 700;

//     border-radius: 11px;

//     box-shadow:
//         0 7px 18px
//         rgba(22, 163, 74, 0.25);

//     transition: 0.2s;
// }

// .manage-vegetable-btn:hover {
//     background: #166534;
//     transform: translateY(-2px);
// }

// @media(max-width:600px) {

//     .manage-vegetable-box {
//         justify-content: stretch;
//     }

//     .manage-vegetable-btn {
//         width: 100%;
//         justify-content: center;
//     }
// }

// .sabji-admin-buttons {
//     width: 100%;
//     margin-bottom: 22px;

//     display: flex;
//     justify-content: flex-end;
//     flex-wrap: wrap;

//     gap: 12px;
// }

// .sabji-admin-btn {
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;

//     gap: 8px;
//     padding: 12px 17px;

//     color: #ffffff;
//     text-decoration: none;

//     font-size: 14px;
//     font-weight: 700;

//     border-radius: 11px;

//     box-shadow:
//         0 7px 18px
//         rgba(15, 23, 42, 0.15);

//     transition: 0.2s;
// }

// .sabji-admin-btn:hover {
//     color: #ffffff;
//     transform: translateY(-2px);
// }

// .manage-btn {
//     background: #16a34a;
// }

// .manage-btn:hover {
//     background: #15803d;
// }

// .shop-btn {
//     background: #ea580c;
// }

// .shop-btn:hover {
//     background: #c2410c;
// }

// .order-btn {
//     background: #2563eb;
// }

// .order-btn:hover {
//     background: #1d4ed8;
// }

// @media(max-width:600px) {

//     .sabji-admin-buttons {
//         display: grid;
//         grid-template-columns: 1fr;
//     }

//     .sabji-admin-btn {
//         width: 100%;
//     }
// }

// </style>
// </head>

// <body>

// <!-- Background Overlay (Jab mobile me menu khulega) -->
// <div class="sidebar-overlay" id="sidebarOverlay"></div>

// <div class="admin-layout">

//     ${DashboardSidebar()}

//     <div class="admin-main">

//         ${DashboardHeader()}

//        <main class="dashboard-content">

//     <div class="sabji-admin-buttons">

//     <a
//         href="/admin/sabji/products"
//         class="sabji-admin-btn manage-btn"
//     >
//         <i class="fa-solid fa-carrot"></i>
//         Manage Vegetables
//     </a>


//     <a
//         href="/admin/sabji/shop-status"
//         class="sabji-admin-btn shop-btn"
//     >
//         <i class="fa-solid fa-store"></i>
//         Shop Open / Close
//     </a>


//     <a
//         href="/admin/sabji/orders"
//         class="sabji-admin-btn order-btn"
//     >
//         <i class="fa-solid fa-bell"></i>
//         Sabji Orders
//     </a>

// </div>

//     ${DashboardStats(data)}

//     ${DashboardSection(data)}

// </main>

//     </div>

// </div>

// <!-- External JS File -->
// <script src="/js/admin-dashboard.js"></script>

// <!-- Inline Toggle Logic for Instant Setup -->
// <script>
// document.addEventListener("DOMContentLoaded", () => {
//     // Top bar me jo menu toggle button hai uski ID ya class select karein
//     const menuToggle = document.getElementById("menuToggle") || document.querySelector(".menu-toggle");
//     const sidebar = document.querySelector(".dashboard-sidebar");
//     const overlay = document.getElementById("sidebarOverlay");

//     function toggleSidebar() {
//         if (sidebar && overlay) {
//             sidebar.classList.toggle("active");
//             overlay.classList.toggle("active");
//         }
//     }

//     if (menuToggle) {
//         menuToggle.addEventListener("click", toggleSidebar);
//     }

//     if (overlay) {
//         overlay.addEventListener("click", toggleSidebar);
//     }
// });
// </script>

// </body>
// </html>
// `;
// }

// module.exports = dashboard;

const DashboardHeader =
    require("../views/component/dashboard/dashboardHeader");

const DashboardSidebar =
    require("../views/component/dashboard/dashboardSidebar");

const DashboardStats =
    require("../views/component/dashboard/dashboardStats");

const DashboardSection =
    require("../views/component/dashboard/dashboardSection");


function dashboard(data = {}) {

    return `
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
>

<meta name="theme-color" content="#071a34">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">

<link rel="manifest" href="/manifest.json">

<link
    rel="icon"
    type="image/png"
    href="/images/hhgs-icon-192.png"
>

<link
    rel="apple-touch-icon"
    href="/images/hhgs-icon-192.png"
>

<title>HHGS Ultra Admin Dashboard</title>

<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
>

<link
    rel="stylesheet"
    href="/css/admin-dashboard.css"
>

<style>

:root {
    --sidebar-width: 270px;
    --header-height: 78px;
    --navy: #071a34;
    --navy-light: #123c77;
    --blue: #2563eb;
    --green: #16a34a;
    --orange: #ea580c;
}

* {
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

body {
    color: #0f172a;

    background:
        radial-gradient(
            circle at 10% 5%,
            rgba(59, 130, 246, 0.15),
            transparent 30%
        ),
        radial-gradient(
            circle at 94% 10%,
            rgba(22, 163, 74, 0.10),
            transparent 28%
        ),
        #f5f8fc;

    font-family:
        Inter,
        system-ui,
        -apple-system,
        "Segoe UI",
        sans-serif;
}

body.sidebar-open {
    overflow: hidden;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

.admin-layout {
    width: 100%;
    min-height: 100vh;
}


/* SIDEBAR */

.dashboard-sidebar {
    position: fixed !important;

    top: 0;
    bottom: 0;
    left: 0;

    z-index: 1100;

    width: var(--sidebar-width) !important;
    height: 100dvh !important;

    overflow-y: auto;

    background:
        linear-gradient(
            180deg,
            #071a34,
            #0b2447
        );

    border-right:
        1px solid
        rgba(255, 255, 255, 0.08);

    box-shadow:
        18px 0 45px
        rgba(2, 8, 23, 0.13);

    transition:
        transform 0.3s ease;

    scrollbar-width: none;
}

.dashboard-sidebar::-webkit-scrollbar {
    display: none;
}


/* MAIN CONTENT */

.admin-main {
    width:
        calc(
            100% - var(--sidebar-width)
        );

    min-height: 100vh;

    margin-left:
        var(--sidebar-width);

    transition:
        width 0.3s ease,
        margin-left 0.3s ease;
}

.dashboard-content {
    width: 100%;
    max-width: 1600px;

    margin: 0 auto;

    padding:
        calc(
            var(--header-height) + 25px
        )
        28px
        34px;
}

.dashboard-content > * {
    min-width: 0;
}


/* SIDEBAR OVERLAY */

.sidebar-overlay {
    position: fixed;
    inset: 0;

    z-index: 1050;

    visibility: hidden;
    opacity: 0;

    background:
        rgba(2, 8, 23, 0.68);

    backdrop-filter:
        blur(5px);

    transition:
        opacity 0.25s ease,
        visibility 0.25s ease;
}

.sidebar-overlay.active {
    visibility: visible;
    opacity: 1;
}


/* WELCOME CARD */

.dashboard-welcome {
    position: relative;

    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    margin-bottom: 20px;
    padding: 22px 24px;

    color: #ffffff;

    background:
        linear-gradient(
            135deg,
            #071a34,
            #123c77 58%,
            #2563eb
        );

    border:
        1px solid
        rgba(255, 255, 255, 0.16);

    border-radius: 22px;

    box-shadow:
        0 20px 45px
        rgba(30, 64, 175, 0.20);
}

.dashboard-welcome::after {
    content: "";

    position: absolute;

    top: -75px;
    right: -40px;

    width: 210px;
    height: 210px;

    border-radius: 50%;

    background:
        rgba(255, 255, 255, 0.09);
}

.welcome-copy,
.welcome-logo {
    position: relative;
    z-index: 1;
}

.welcome-copy small {
    display: block;

    margin-bottom: 5px;

    color: #bfdbfe;

    font-size: 12px;
    font-weight: 800;

    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.welcome-copy h1 {
    margin: 0;

    font-size:
        clamp(
            21px,
            2.4vw,
            32px
        );

    line-height: 1.15;
}

.welcome-copy p {
    margin: 8px 0 0;

    color: #dbeafe;

    font-size: 13px;
}

.welcome-logo {
    width: 70px;
    height: 70px;

    padding: 10px;

    object-fit: contain;

    background: #ffffff;

    border-radius: 20px;

    box-shadow:
        0 14px 30px
        rgba(2, 8, 23, 0.25);
}


/* QUICK ACTIONS */

.sabji-admin-buttons {
    display: grid;

    grid-template-columns:
        repeat(
            3,
            minmax(0, 1fr)
        );

    gap: 14px;

    width: 100%;

    margin-bottom: 22px;
}

.sabji-admin-btn {
    min-height: 72px;

    display: flex;
    align-items: center;

    gap: 13px;

    position: relative;

    overflow: hidden;

    padding: 15px 17px;

    color: #ffffff;

    text-decoration: none;

    border:
        1px solid
        rgba(255, 255, 255, 0.18);

    border-radius: 18px;

    box-shadow:
        0 18px 45px
        rgba(15, 23, 42, 0.11);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.sabji-admin-btn::after {
    content: "";

    position: absolute;

    right: -25px;
    bottom: -42px;

    width: 100px;
    height: 100px;

    border-radius: 50%;

    background:
        rgba(255, 255, 255, 0.12);
}

.sabji-admin-btn:hover {
    color: #ffffff;

    transform:
        translateY(-3px);

    box-shadow:
        0 20px 38px
        rgba(15, 23, 42, 0.18);
}

.sabji-admin-btn:active {
    transform:
        scale(0.98);
}

.sabji-admin-btn i {
    position: relative;
    z-index: 1;

    width: 43px;
    height: 43px;

    display: grid;
    place-items: center;

    flex: 0 0 43px;

    background:
        rgba(255, 255, 255, 0.17);

    border-radius: 13px;

    font-size: 19px;
}

.action-copy {
    position: relative;
    z-index: 1;

    min-width: 0;
}

.action-copy strong,
.action-copy small {
    display: block;
}

.action-copy strong {
    font-size: 14px;
    line-height: 1.25;
}

.action-copy small {
    margin-top: 4px;

    color:
        rgba(255, 255, 255, 0.78);

    font-size: 10px;
}

.manage-btn {
    background:
        linear-gradient(
            135deg,
            #16a34a,
            #047857
        );
}

.shop-btn {
    background:
        linear-gradient(
            135deg,
            #f97316,
            #c2410c
        );
}

.order-btn {
    background:
        linear-gradient(
            135deg,
            #3b82f6,
            #1d4ed8
        );
}


/* TABLET */

@media (max-width: 1000px) {

    .dashboard-sidebar {
        transform:
            translateX(-105%);
    }

    .dashboard-sidebar.active {
        transform:
            translateX(0);
    }

    .admin-main {
        width: 100%;
        margin-left: 0;
    }

    .dashboard-content {
        padding:
            calc(
                var(--header-height) + 20px
            )
            18px
            28px;
    }

}


/* PHONE APP RESPONSIVE */

@media screen and (pointer: coarse) and (max-width: 1200px),
       screen and (max-device-width: 768px),
       screen and (max-width: 700px) {

    :root {
        --header-height: 68px;
    }

    .dashboard-sidebar {
        width: 270px !important;

        transform:
            translateX(-105%);
    }

    .dashboard-sidebar.active {
        transform:
            translateX(0);
    }

    .admin-main {
        width: 100% !important;
        margin-left: 0 !important;
    }

    .dashboard-content {
        padding:
            calc(
                var(--header-height) +
                env(safe-area-inset-top) +
                14px
            )
            12px
            calc(
                24px +
                env(safe-area-inset-bottom)
            );
    }

    .dashboard-welcome {
        align-items: flex-start;

        margin-bottom: 14px;
        padding: 18px;

        border-radius: 19px;
    }

    .welcome-copy h1 {
        font-size: 22px;
    }

    .welcome-copy p {
        max-width: 230px;

        font-size: 11px;
    }

    .welcome-logo {
        width: 54px;
        height: 54px;

        padding: 7px;

        border-radius: 16px;
    }

    .sabji-admin-buttons {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );

        gap: 10px;

        margin-bottom: 16px;
    }

    .sabji-admin-btn {
        min-height: 104px;

        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        padding: 13px;

        border-radius: 17px;
    }

    .sabji-admin-btn i {
        width: 38px;
        height: 38px;

        flex-basis: 38px;

        border-radius: 12px;

        font-size: 17px;
    }

    .action-copy strong {
        font-size: 12px;
    }

    .action-copy small {
        display: none;
    }

}


/* SMALL PHONE */

@media (max-width: 380px) {

    .dashboard-welcome {
        padding: 15px;
    }

    .welcome-logo {
        width: 48px;
        height: 48px;
    }

    .sabji-admin-buttons {
        gap: 8px;
    }

}

/* =====================================
   FINAL PHONE HEADER + SIDEBAR FIX
===================================== */

@media screen and (max-width: 1000px),
       screen and (pointer: coarse) {

    :root {
        --header-height: 68px;
    }


    /* MAIN LAYOUT FULL WIDTH */

    .admin-layout,
    .admin-main {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;

        margin-left: 0 !important;
        margin-right: 0 !important;

        padding-left: 0 !important;
        padding-right: 0 !important;
    }


    /* FULL-WIDTH PHONE HEADER */

    .dashboard-header,
    .dashboard-topbar,
    .admin-header,
    .top-header,
    .topbar {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;

        position: fixed !important;

        top: 0 !important;
        left: 0 !important;
        right: 0 !important;

        margin: 0 !important;

        padding:
            env(safe-area-inset-top)
            12px
            0 !important;

        z-index: 1000 !important;

        min-height:
            calc(
                68px +
                env(safe-area-inset-top)
            ) !important;

        background:
            rgba(
                255,
                255,
                255,
                0.96
            ) !important;

        backdrop-filter:
            blur(15px);

        border-bottom:
            1px solid
            rgba(
                148,
                163,
                184,
                0.22
            );

        box-shadow:
            0 5px 20px
            rgba(
                15,
                23,
                42,
                0.10
            );
    }


    /* HEADER INNER CONTAINER */

    .dashboard-header > div,
    .dashboard-topbar > div,
    .admin-header > div,
    .top-header > div,
    .topbar > div,
    .dashboard-header .container,
    .dashboard-topbar .container,
    .admin-header .container,
    .top-header .container,
    .topbar .container {
        width: 100% !important;
        max-width: 100% !important;

        margin: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
    }


    /* HAMBURGER BUTTON */

    #menuToggle,
    #sidebarToggle,
    #openSidebar,
    #hamburgerButton,
    .menu-toggle,
    .menu-btn,
    .hamburger,
    .hamburger-btn,
    .mobile-menu-btn,
    .mobile-menu-toggle,
    [data-sidebar-toggle] {
        width: 44px !important;
        height: 44px !important;

        min-width: 44px !important;
        min-height: 44px !important;

        display: flex !important;
        align-items: center !important;
        justify-content: center !important;

        position: relative !important;

        z-index: 1200 !important;

        padding: 0 !important;

        border: 0 !important;
        border-radius: 13px !important;

        color: #ffffff !important;

        background:
            linear-gradient(
                135deg,
                #2563eb,
                #1d4ed8
            ) !important;

        box-shadow:
            0 8px 20px
            rgba(
                37,
                99,
                235,
                0.24
            ) !important;

        cursor: pointer !important;

        pointer-events: auto !important;
    }


    /* SIDEBAR HIDDEN BY DEFAULT */

    .dashboard-sidebar,
    #dashboardSidebar,
    #sidebar,
    .admin-sidebar {
        width: 270px !important;
        height: 100dvh !important;

        position: fixed !important;

        top: 0 !important;
        bottom: 0 !important;
        left: 0 !important;

        z-index: 1300 !important;

        margin: 0 !important;

        transform:
            translateX(-105%) !important;

        transition:
            transform
            0.3s ease !important;
    }


    /* SIDEBAR OPEN */

    .dashboard-sidebar.active,
    #dashboardSidebar.active,
    #sidebar.active,
    .admin-sidebar.active {
        transform:
            translateX(0) !important;
    }


    /* OVERLAY */

    .sidebar-overlay {
        position: fixed !important;

        inset: 0 !important;

        z-index: 1250 !important;

        visibility: hidden;
        opacity: 0;

        pointer-events: none;

        background:
            rgba(
                2,
                8,
                23,
                0.68
            );

        backdrop-filter:
            blur(5px);

        transition:
            opacity
            0.25s ease,
            visibility
            0.25s ease;
    }

    .sidebar-overlay.active {
        visibility: visible !important;
        opacity: 1 !important;

        pointer-events: auto !important;
    }


    /* DASHBOARD CONTENT BELOW HEADER */

    .dashboard-content {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;

        margin: 0 !important;

        padding:
            calc(
                82px +
                env(safe-area-inset-top)
            )
            12px
            calc(
                24px +
                env(safe-area-inset-bottom)
            ) !important;
    }


    /* PREMIUM WELCOME CARD */

    .dashboard-welcome {
        width: 100% !important;

        align-items: flex-start;

        gap: 10px;

        margin-bottom: 14px;
        padding: 17px;

        border-radius: 19px;
    }

    .welcome-copy {
        min-width: 0;
    }

    .welcome-copy h1 {
        font-size: 21px;
        line-height: 1.2;
    }

    .welcome-copy p {
        max-width: 220px;

        font-size: 11px;
        line-height: 1.5;
    }

    .welcome-logo {
        width: 52px;
        height: 52px;

        flex: 0 0 52px;

        padding: 7px;

        border-radius: 15px;
    }


    /* TWO ACTION CARDS */

    .sabji-admin-buttons {
        width: 100% !important;

        display: grid !important;

        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            ) !important;

        gap: 10px !important;

        margin-bottom: 16px;
    }

    .sabji-admin-btn {
        width: 100% !important;
        min-width: 0 !important;
        min-height: 104px;

        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        padding: 13px;

        border-radius: 17px;
    }

    .sabji-admin-btn i {
        width: 38px;
        height: 38px;

        flex: 0 0 38px;

        border-radius: 12px;

        font-size: 17px;
    }

    .action-copy strong {
        font-size: 12px;
    }

    .action-copy small {
        display: none;
    }


    /* ALL CONTENT RESPONSIVE */

    img,
    video,
    iframe,
    table {
        max-width: 100% !important;
    }

}


/* VERY SMALL PHONE */

@media screen and (max-width: 380px) {

    .dashboard-content {
        padding-left: 9px !important;
        padding-right: 9px !important;
    }

    .dashboard-welcome {
        padding: 14px;
    }

    .welcome-logo {
        width: 46px;
        height: 46px;

        flex-basis: 46px;
    }

    .sabji-admin-buttons {
        gap: 8px !important;
    }

}

.rapido-btn {
    background:
        linear-gradient(
            135deg,
            #7c3aed,
            #4f46e5
        );
}

.rapido-btn:hover {
    background:
        linear-gradient(
            135deg,
            #6d28d9,
            #4338ca
        );

    transform:
        translateY(-2px);
}

</style>

</head>

<body>

<div
    class="sidebar-overlay"
    id="sidebarOverlay"
    aria-hidden="true"
></div>


<div class="admin-layout">

    ${DashboardSidebar()}

    <div class="admin-main">

        ${DashboardHeader()}

        <main class="dashboard-content">


            <section class="dashboard-welcome">

                <div class="welcome-copy">

                    <small>
                        HHGS Control Center
                    </small>

                    <h1>
                        Welcome back, Admin
                    </h1>

                    <p>
                        Manage services, shop and orders
                        from one secure dashboard.
                    </p>

                </div>

                <img
                    class="welcome-logo"
                    src="/images/hhgs-icon-192.png"
                    alt="HHGS"
                >

            </section>


            

            <nav
    class="sabji-admin-buttons"
    aria-label="Management actions"
>

    <a
        href="/admin/sabji/products"
        class="sabji-admin-btn manage-btn"
    >

        <i class="fa-solid fa-carrot"></i>

        <span class="action-copy">

            <strong>
                Manage Vegetables
            </strong>

            <small>
                Products, stock and prices
            </small>

        </span>

    </a>


    <a
        href="/admin/sabji/orders"
        class="sabji-admin-btn order-btn"
    >

        <i class="fa-solid fa-bell"></i>

        <span class="action-copy">

            <strong>
                Sabji Orders
            </strong>

            <small>
                View and update orders
            </small>

        </span>

    </a>


    
<a href="/admin/ration-card-maker"
   class="btn-action"
   style="text-decoration:none;">

  <i class="fa-solid fa-id-card"
     style="color:#16a34a;"></i>

  <span>Ration Card PVC Maker</span>

</a>



<!-- CUSTOMER BAKAYA MANAGEMENT -->
<a
    href="/admin/bakaya/customer"
    class="sabji-admin-btn bakaya-btn"
>
    <i class="fa-solid fa-wallet"></i>

    <span class="action-copy">
        <strong>
            Customer Bakaya Management
        </strong>

        <small>
            Add Customer, Due, Paid & Payment History
        </small>
    </span>
</a>



    <!-- GLOBAL QUICK SERVICES ADMIN -->

<a
    href="/admin/quick-service/shop-status"
    class="sabji-admin-btn shop-btn"
>

    <i class="fa-solid fa-bolt"></i>

    <span class="action-copy">

        <strong>
            Quick Service Admin
        </strong>

        <small>
            Shop, services & orders manage करें
        </small>

    </span>

</a>

    <!-- RAPIDO MANAGEMENT -->

    <a
        href="/rapido-tracker"
        class="sabji-admin-btn rapido-btn"
    >

        <i class="fa-solid fa-motorcycle"></i>

        <span class="action-copy">

            <strong>
                Rapido Management
            </strong>

            <small>
                KM, earning, petrol & profit
            </small>

        </span>

    </a>

</nav>


            ${DashboardStats(data)}

            ${DashboardSection(data)}

        </main>

    </div>

</div>





<script>

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const sidebar =
            document.querySelector(
                ".dashboard-sidebar, #dashboardSidebar, #sidebar, .admin-sidebar"
            );

        const overlay =
            document.getElementById(
                "sidebarOverlay"
            );

        const menuButtonSelector = [
            "#menuToggle",
            "#sidebarToggle",
            "#openSidebar",
            "#hamburgerButton",
            ".menu-toggle",
            ".menu-btn",
            ".hamburger",
            ".hamburger-btn",
            ".mobile-menu-btn",
            ".mobile-menu-toggle",
            "[data-sidebar-toggle]"
        ].join(",");


        if (!sidebar) {

            console.log(
                "Dashboard sidebar not found"
            );

            return;
        }


        function isMobileView() {

            return (
                window.innerWidth <= 1000 ||

                window.matchMedia(
                    "(pointer: coarse)"
                ).matches
            );

        }


        function setSidebar(open) {

            sidebar.classList.toggle(
                "active",
                open
            );

            if (isMobileView()) {

                sidebar.style.transform =
                    open
                        ? "translateX(0)"
                        : "translateX(-105%)";

            } else {

                sidebar.style.transform =
                    "";

            }


            if (overlay) {

                overlay.classList.toggle(
                    "active",
                    open
                );

                overlay.setAttribute(
                    "aria-hidden",
                    String(!open)
                );

            }


            document.body.classList.toggle(
                "sidebar-open",
                open
            );

        }


        function toggleSidebar() {

            const isOpen =
                sidebar.classList.contains(
                    "active"
                );

            setSidebar(!isOpen);

        }


        // Event delegation:
        // किसी भी matching hamburger button पर काम करेगा

        document.addEventListener(
            "click",
            function (event) {

                const menuButton =
                    event.target.closest(
                        menuButtonSelector
                    );

                if (menuButton) {

                    event.preventDefault();

                    event.stopPropagation();

                    toggleSidebar();

                    return;
                }


                const sidebarLink =
                    event.target.closest(
                        ".dashboard-sidebar a, #sidebar a, .admin-sidebar a"
                    );

                if (
                    sidebarLink &&
                    isMobileView()
                ) {

                    setSidebar(false);

                }

            },
            true
        );


        // Overlay click पर sidebar बंद

        if (overlay) {

            overlay.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    setSidebar(false);

                }
            );

        }


        // Escape key पर sidebar बंद

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "Escape"
                ) {

                    setSidebar(false);

                }

            }
        );


        // Screen resize handling

        window.addEventListener(
            "resize",
            function () {

                if (isMobileView()) {

                    if (
                        !sidebar.classList.contains(
                            "active"
                        )
                    ) {

                        sidebar.style.transform =
                            "translateX(-105%)";

                    }

                } else {

                    sidebar.classList.remove(
                        "active"
                    );

                    sidebar.style.transform =
                        "";

                    if (overlay) {

                        overlay.classList.remove(
                            "active"
                        );

                    }

                    document.body.classList.remove(
                        "sidebar-open"
                    );

                }

            }
        );


        // Initial mobile state

        if (isMobileView()) {

            setSidebar(false);

        }

    }
);


// SERVICE WORKER

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        function () {

            navigator.serviceWorker
                .register(
                    "/service-worker.js"
                )
                .catch(
                    function (error) {

                        console.log(
                            "Service Worker Error:",
                            error
                        );

                    }
                );

        },
        {
            once: true
        }
    );

}

</script>

</body>

</html>
`;

}


module.exports = dashboard;
