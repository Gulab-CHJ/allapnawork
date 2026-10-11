// function AddBanner() {
//     return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Add Banner</title>
// </head>
// <body>

// <h1>Add Banner</h1>

// <form action="/admin/add-banner" method="POST" enctype="multipart/form-data">

//     <input type="file" name="image" accept="image/*" required><br><br>

//     <input type="text" name="link" placeholder="Banner Link"><br><br>

//     <button type="submit">Save Banner</button>

// </form>

// </body>
// </html>
// `;
// }

// module.exports = AddBanner;

function AddBanner(){

return `

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Add Banner | Admin</title>


<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}


body{

    background:#f1f5f9;

    min-height:100vh;

    padding:30px;

}



.container{

    max-width:600px;

    margin:auto;

}



.card{

    background:white;

    border-radius:15px;

    padding:30px;

    box-shadow:0 10px 30px rgba(0,0,0,.08);

}



.header{

    background:linear-gradient(135deg,#2563eb,#1e40af);

    color:white;

    padding:20px;

    border-radius:12px;

    margin-bottom:25px;

}


.header h1{

    font-size:26px;

}


.header p{

    margin-top:8px;

    opacity:.9;

}




.form-group{

    margin-bottom:20px;

}



label{

    display:block;

    margin-bottom:8px;

    font-weight:600;

    color:#334155;

}



input[type="file"],
input[type="text"]{

    width:100%;

    padding:12px;

    border:1px solid #cbd5e1;

    border-radius:8px;

    outline:none;

    font-size:15px;

}



input:focus{

    border-color:#2563eb;

}




.preview{

    margin-top:15px;

}



.preview img{

    width:100%;

    max-height:220px;

    object-fit:cover;

    border-radius:10px;

    display:none;

    border:1px solid #ddd;

}



button{

    width:100%;

    padding:14px;

    border:none;

    border-radius:10px;

    background:#2563eb;

    color:white;

    font-size:16px;

    font-weight:bold;

    cursor:pointer;

    transition:.3s;

}



button:hover{

    background:#1d4ed8;

    transform:translateY(-2px);

}



.back{

    display:block;

    text-align:center;

    margin-top:20px;

    color:#2563eb;

    text-decoration:none;

}



@media(max-width:600px){

body{

    padding:15px;

}


.card{

    padding:20px;

}


.header h1{

    font-size:22px;

}

}



</style>


</head>


<body>


<div class="container">


<div class="card">


<div class="header">

<h1>
<i>➕</i> Add New Banner
</h1>

<p>
Upload banner image and add redirect link
</p>

</div>


<form 
action="/admin/add-banner" 
method="POST" 
enctype="multipart/form-data">

<input 
type="file"
name="image"
accept="image/*"
required>

<input 
type="text"
name="link"
placeholder="https://example.com">

<button type="submit">
Save Banner
</button>

</form>


<a class="back" href="/admin/manage-banners">

← Back To Banners

</a>


</div>


</div>





<script>


function previewImage(event){

let img=document.getElementById("preview");


img.src=URL.createObjectURL(event.target.files[0]);


img.style.display="block";


}


</script>



</body>

</html>


`;

}


module.exports = AddBanner;
