function ManageServices(services = []) {
return `
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Manage Services</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:linear-gradient(135deg,#0f172a,#1e293b,#2563eb);
min-height:100vh;
padding:30px;
}

.container{
max-width:1400px;
margin:auto;
}

.header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:25px;
flex-wrap:wrap;
gap:15px;
}

.header h1{
color:#fff;
font-size:34px;
font-weight:700;
}

.addBtn{
background:#22c55e;
color:#fff;
padding:12px 24px;
border-radius:12px;
text-decoration:none;
font-weight:600;
transition:.3s;
}

.addBtn:hover{
transform:translateY(-3px);
box-shadow:0 15px 30px rgba(34,197,94,.4);
}

.tableBox{
background:rgba(255,255,255,.08);
backdrop-filter:blur(18px);
border:1px solid rgba(255,255,255,.15);
border-radius:20px;
overflow:hidden;
box-shadow:0 20px 50px rgba(0,0,0,.35);
}

table{
width:100%;
border-collapse:collapse;
}

thead{
background:rgba(255,255,255,.1);
}

thead th{
padding:18px;
color:#fff;
font-size:15px;
font-weight:600;
text-align:left;
}

tbody tr{
transition:.3s;
border-top:1px solid rgba(255,255,255,.08);
}

tbody tr:hover{
background:rgba(255,255,255,.08);
}

td{
padding:16px;
color:#fff;
vertical-align:middle;
}

.serviceImg{
width:70px;
height:70px;
border-radius:14px;
object-fit:cover;
border:2px solid rgba(255,255,255,.2);
}

.desc{
max-width:400px;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
color:#d1d5db;
}

.action{
display:flex;
gap:10px;
}

.btn{
padding:10px 18px;
border-radius:10px;
text-decoration:none;
font-size:14px;
font-weight:600;
display:flex;
align-items:center;
gap:8px;
transition:.3s;
}

.edit{
background:#2563eb;
color:#fff;
}

.edit:hover{
background:#1d4ed8;
transform:translateY(-2px);
}

.delete{
background:#ef4444;
color:#fff;
}

.delete:hover{
background:#dc2626;
transform:translateY(-2px);
}

.empty{
padding:60px;
text-align:center;
color:#fff;
font-size:20px;
}

@media(max-width:900px){

table,
thead,
tbody,
th,
td,
tr{
display:block;
}

thead{
display:none;
}

tbody tr{
margin:15px;
border-radius:18px;
padding:15px;
background:rgba(255,255,255,.08);
}

td{
display:flex;
justify-content:space-between;
align-items:center;
padding:10px 0;
border:none;
}

td::before{
font-weight:700;
margin-right:20px;
color:#93c5fd;
}

td:nth-child(1)::before{
content:"Image";
}

td:nth-child(2)::before{
content:"Name";
}

td:nth-child(3)::before{
content:"Description";
}

td:nth-child(4)::before{
content:"Action";
}

.action{
justify-content:flex-end;
}

}

.serviceImg{

width:80px;
height:80px;
object-fit:cover;
border-radius:12px;
border:2px solid #ddd;

}

</style>

</head>

<body>

<div class="container">

<div class="header">

<h1><i class="fa-solid fa-layer-group"></i> Manage Services</h1>

<a href="/admin/add-service" class="addBtn">

<i class="fa-solid fa-plus"></i>

Add Service

</a>

</div>

<div class="tableBox">

${
services.length ?

`<table>

<thead>

<tr>

<th>Image</th>

<th>Service Name</th>

<th>Description</th>

<th>Action</th>

</tr>

</thead>

<tbody>

${services.map(service=>`

<tr>

<td>

<img 
src="${service.image || '/images/no-image.png'}"
class="serviceImg"
>

</td>

<td>

<strong>${service.title}</strong>

</td>

<td class="desc">

${service.description || "No Description"}

</td>

<td>

<div class="action">

<a href="/admin/edit-service/${service._id}" class="btn edit">

<i class="fa-solid fa-pen"></i>

Edit

</a>

<a href="/admin/delete-service/${service._id}"

onclick="return confirm('Delete this service?')"

class="btn delete">

<i class="fa-solid fa-trash"></i>

Delete

</a>

</div>

</td>

</tr>

`).join("")}

</tbody>

</table>`

:

`<div class="empty">

<i class="fa-solid fa-box-open" style="font-size:70px;margin-bottom:20px;"></i>

<h2>No Services Found</h2>

</div>`

}

</div>

</div>

</body>

</html>
`;
}

module.exports = ManageServices;
