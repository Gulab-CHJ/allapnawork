function ManageStudents(){

return `

<!DOCTYPE html>
<html>

<head>

<title>Manage Students</title>

<style>

body{

font-family:'Segoe UI';
background:#f1f5f9;
padding:30px;

}


.card{

background:white;
padding:25px;
border-radius:20px;

box-shadow:
0 10px 30px rgba(0,0,0,.15);

}


h1{

color:#2563eb;

}


table{

width:100%;
border-collapse:collapse;
margin-top:20px;

}


th{

background:#2563eb;
color:white;
padding:12px;

}


td{

padding:12px;
border-bottom:1px solid #ddd;

}


button{

padding:8px 15px;
border:none;
border-radius:8px;
background:#06b6d4;
color:white;

}


</style>

</head>


<body>


<div class="card">

<h1>
Manage Students
</h1>


<table>

<tr>

<th>
Name
</th>

<th>
Roll
</th>

<th>
Payment
</th>

<th>
Action
</th>

</tr>


<tr>

<td>
Student Name
</td>

<td>
12345
</td>

<td>
Paid
</td>

<td>

<button>
Edit
</button>

<button>
Delete
</button>

</td>

</tr>


</table>


</div>


</body>

</html>

`;

}


module.exports = ManageStudents;
