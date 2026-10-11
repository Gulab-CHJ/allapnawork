function AddGovernment(){

return `

<!DOCTYPE html>
<html>
<head>
<title>Add Government Person</title>

<link rel="stylesheet" href="/css/admin.css">

</head>

<body>

<div class="login-container">

<div class="login-card">

<h2>Add Government Person</h2>


<form action="/admin/add-government" 
method="POST"
enctype="multipart/form-data">


<input 
type="text"
name="name"
placeholder="Name"
required>


<input 
type="text"
name="position"
placeholder="Position">


<input 
type="text"
name="department"
placeholder="Department">


<input 
type="text"
name="phone"
placeholder="Phone">


<textarea 
name="address"
placeholder="Address"></textarea>


<textarea 
name="description"
placeholder="Description"></textarea>


<input 
type="file"
name="image">


<button type="submit">
Save
</button>


</form>


</div>

</div>


</body>
</html>

`;

}


module.exports = AddGovernment;
