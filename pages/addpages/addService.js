// // function AddService(){

// // return `
// // <!DOCTYPE html>
// // <html lang="en">

// // <head>

// // <meta charset="UTF-8">

// // <meta name="viewport" content="width=device-width, initial-scale=1.0">

// // <title>Add Service</title>


// // <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">


// // <style>

// // *{
// // margin:0;
// // padding:0;
// // box-sizing:border-box;
// // font-family:'Poppins',sans-serif;
// // }


// // body{

// // min-height:100vh;

// // background:linear-gradient(135deg,#0f172a,#2563eb);

// // display:flex;

// // justify-content:center;

// // align-items:center;

// // padding:20px;

// // }


// // .card{

// // width:100%;

// // max-width:650px;

// // background:rgba(255,255,255,.12);

// // backdrop-filter:blur(20px);

// // border:1px solid rgba(255,255,255,.2);

// // border-radius:25px;

// // padding:35px;

// // box-shadow:0 20px 50px rgba(0,0,0,.4);

// // }



// // h1{

// // text-align:center;

// // color:white;

// // margin-bottom:30px;

// // }



// // label{

// // display:block;

// // color:white;

// // font-weight:600;

// // margin:15px 0 8px;

// // }



// // input,
// // textarea{

// // width:100%;

// // padding:14px;

// // border:none;

// // outline:none;

// // border-radius:12px;

// // font-size:15px;

// // }



// // textarea{

// // height:130px;

// // resize:none;

// // }



// // .preview{

// // text-align:center;

// // margin:20px 0;

// // }



// // .preview img{

// // width:160px;

// // height:160px;

// // object-fit:cover;

// // border-radius:20px;

// // border:3px solid white;

// // display:none;

// // }



// // button{

// // width:100%;

// // margin-top:25px;

// // padding:15px;

// // border:none;

// // border-radius:12px;

// // background:#22c55e;

// // color:white;

// // font-size:17px;

// // font-weight:700;

// // cursor:pointer;

// // }



// // button:hover{

// // background:#16a34a;

// // }



// // .back{

// // display:block;

// // text-align:center;

// // margin-top:15px;

// // color:white;

// // text-decoration:none;

// // }


// // </style>


// // </head>


// // <body>


// // <div class="card">


// // <h1>
// // ➕ Add Service
// // </h1>



// // <form 
// // action="/admin/add-service" 
// // method="POST"
// // enctype="multipart/form-data"
// // >



// // <label>
// // Service Name
// // </label>


// // <input

// // type="text"

// // name="title"

// // placeholder="Enter Service Name"

// // required

// // >



// // <label>
// // Service Image
// // </label>


// // <input
// // type="file"
// // name="image"
// // accept=".jpg,.jpeg"
// // id="image"
// // required
// // >



// // <div class="preview">

// // <img id="preview">

// // </div>




// // <label>
// // Description
// // </label>


// // <textarea

// // name="description"

// // placeholder="Enter Service Description"

// // required>

// // </textarea>




// // <button type="submit">

// // Save Service

// // </button>



// // <a href="/admin/manage-services" class="back">

// // ← Back To Services

// // </a>



// // </form>


// // </div>




// // <script>


// // const image=document.getElementById("image");

// // const preview=document.getElementById("preview");



// // image.addEventListener("change",()=>{


// // const file=image.files[0];


// // if(file){


// // preview.src=URL.createObjectURL(file);


// // preview.style.display="block";


// // }


// // });


// // </script>



// // </body>

// // </html>

// // `;

// // }


// // module.exports = AddService;

// function AddService(){

// return `
// <!DOCTYPE html>
// <html lang="en">

// <head>

// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">

// <title>Add Service</title>

// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">


// <style>

// *{
// margin:0;
// padding:0;
// box-sizing:border-box;
// font-family:'Poppins',sans-serif;
// }


// body{

// min-height:100vh;
// background:linear-gradient(135deg,#0f172a,#2563eb);

// display:flex;
// justify-content:center;
// align-items:center;

// padding:20px;

// }



// .card{

// width:100%;
// max-width:650px;

// background:rgba(255,255,255,.12);

// backdrop-filter:blur(20px);

// border:1px solid rgba(255,255,255,.2);

// border-radius:25px;

// padding:35px;

// box-shadow:0 20px 50px rgba(0,0,0,.4);

// }



// h1{

// text-align:center;
// color:white;
// margin-bottom:30px;

// }



// label{

// display:block;
// color:white;
// font-weight:600;
// margin:15px 0 8px;

// }



// input,
// textarea{

// width:100%;
// padding:14px;

// border:none;
// outline:none;

// border-radius:12px;

// font-size:15px;

// }



// textarea{

// height:120px;
// resize:none;

// }



// /* Image */

// .preview{

// text-align:center;
// margin:20px 0;

// }


// .preview img{

// width:160px;
// height:160px;

// object-fit:cover;

// border-radius:20px;

// border:3px solid white;

// display:none;

// }



// /* Features */

// .feature-box{

// background:rgba(255,255,255,.15);

// padding:15px;

// border-radius:15px;

// }



// .feature-row{

// display:flex;

// gap:10px;

// margin-bottom:10px;

// }



// .feature-row input{

// flex:1;

// }



// .remove{

// width:45px;

// background:#ef4444;

// color:white;

// border:none;

// border-radius:10px;

// cursor:pointer;

// }



// .add-btn{

// background:#f59e0b;

// margin-top:10px;

// padding:10px 15px;

// width:auto;

// font-size:14px;

// }



// button{

// width:100%;

// margin-top:25px;

// padding:15px;

// border:none;

// border-radius:12px;

// background:#22c55e;

// color:white;

// font-size:17px;

// font-weight:700;

// cursor:pointer;

// }



// button:hover{

// opacity:.9;

// }



// .back{

// display:block;

// text-align:center;

// margin-top:15px;

// color:white;

// text-decoration:none;

// }



// </style>


// </head>


// <body>



// <div class="card">


// <h1>
// ➕ Add Service
// </h1>



// <form 

// action="/admin/add-service"

// method="POST"

// enctype="multipart/form-data"

// >


// <label>
// Service Name
// </label>


// <input

// type="text"

// name="title"

// placeholder="Enter Service Name"

// required

// >




// <label>
// Service Image
// </label>


// <input

// type="file"

// name="image"

// accept=".jpg,.jpeg,.png"

// id="image"

// required

// >



// <div class="preview">

// <img id="preview">

// </div>





// <label>
// Description
// </label>


// <textarea

// name="description"

// placeholder="Enter Service Description"

// required>

// </textarea>





// <label>
// Service Features
// </label>



// <div class="feature-box" id="featuresBox">


// <div class="feature-row">


// <input

// type="text"

// name="features[]"

// placeholder="Enter Feature"

// required

// >


// <button

// type="button"

// class="remove"

// onclick="removeFeature(this)">

// ❌

// </button>


// </div>


// </div>




// <button

// type="button"

// class="add-btn"

// onclick="addFeature()">

// ➕ Add Feature

// </button>





// <button type="submit">

// Save Service

// </button>




// <a href="/admin/manage-services" class="back">

// ← Back To Services

// </a>



// </form>


// </div>





// <script>


// // Image Preview

// const image=document.getElementById("image");

// const preview=document.getElementById("preview");



// image.addEventListener("change",()=>{


// const file=image.files[0];


// if(file){

// preview.src=URL.createObjectURL(file);

// preview.style.display="block";

// }

// });





// // Add Feature

// // Add Feature

// function addFeature(){


// const box=document.getElementById("featuresBox");


// const div=document.createElement("div");


// div.className="feature-row";


// div.innerHTML =

// '<input '+
// 'type="text" '+
// 'name="features[]" '+
// 'placeholder="Enter Feature" '+
// 'required>' +


// '<button '+
// 'type="button" '+
// 'class="remove" '+
// 'onclick="removeFeature(this)">'+
// '❌'+
// '</button>';


// box.appendChild(div);


// }





// // Remove Feature
// function removeFeature(btn){

// const box=document.getElementById("featuresBox");


// if(box.children.length > 1){

// btn.parentElement.remove();

// }
// else{

// alert("At least one feature required");

// }

// }


// </script>



// </body>

// </html>

// `;

// }


// module.exports = AddService;


function AddService(){

return `
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Add Service</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{

min-height:100vh;

background:linear-gradient(
135deg,
#0f172a,
#2563eb
);

display:flex;
justify-content:center;
align-items:center;

padding:20px;

}

.card{

width:100%;
max-width:650px;

background:rgba(255,255,255,.12);

backdrop-filter:blur(20px);

border:1px solid rgba(255,255,255,.2);

border-radius:25px;

padding:35px;

box-shadow:0 20px 50px rgba(0,0,0,.4);

}

h1{

text-align:center;

color:white;

margin-bottom:30px;

}

label{

display:block;

color:white;

font-weight:600;

margin:15px 0 8px;

}

input,
textarea{

width:100%;

padding:14px;

border:none;

outline:none;

border-radius:12px;

font-size:15px;

}

textarea{

height:120px;

resize:none;

}

.preview{

text-align:center;

margin:20px 0;

}

.preview img{

width:160px;

height:160px;

object-fit:cover;

border-radius:20px;

border:3px solid white;

display:none;

}

.feature-box{

background:rgba(255,255,255,.15);

padding:15px;

border-radius:15px;

}

.feature-row{

display:flex;

gap:10px;

margin-bottom:10px;

}

.feature-row input{

flex:1;

}

.remove{

width:45px;

background:#ef4444;

color:white;

border:none;

border-radius:10px;

cursor:pointer;

}

.add-btn{

background:#f59e0b;

margin-top:10px;

padding:10px 15px;

width:auto;

font-size:14px;

}

button{

width:100%;

margin-top:25px;

padding:15px;

border:none;

border-radius:12px;

background:#22c55e;

color:white;

font-size:17px;

font-weight:700;

cursor:pointer;

}

button:hover{

opacity:.9;

}

.back{

display:block;

text-align:center;

margin-top:15px;

color:white;

text-decoration:none;

}

.help{

font-size:12px;

color:#dbeafe;

margin-top:6px;

line-height:1.5;

}

</style>

</head>

<body>

<div class="card">

<h1>
➕ Add Service
</h1>

<form
action="/admin/add-service"
method="POST"
enctype="multipart/form-data"
>

<label>
Service Name
</label>

<input
type="text"
name="title"
placeholder="Enter Service Name"
required
>

<label>
Service Image
</label>

<input
type="file"
name="image"
accept=".jpg,.jpeg,.png,.webp"
id="image"
required
>

<div class="preview">
<img id="preview">
</div>

<label>
Description
</label>

<textarea
name="description"
placeholder="Enter Service Description"
required
></textarea>

<label>
Image Click Link
</label>

<input
type="url"
name="link"
placeholder="https://example.com"
>

<div class="help">
Optional: agar link blank chhodenge to image service detail page open karega.
</div>

<label>
Service Features
</label>

<div
class="feature-box"
id="featuresBox"
>

<div class="feature-row">

<input
type="text"
name="features[]"
placeholder="Enter Feature"
required
>

<button
type="button"
class="remove"
onclick="removeFeature(this)"
>
❌
</button>

</div>

</div>

<button
type="button"
class="add-btn"
onclick="addFeature()"
>
➕ Add Feature
</button>

<button type="submit">
Save Service
</button>

<a
href="/admin/manage-services"
class="back"
>
← Back To Services
</a>

</form>

</div>

<script>

const image =
document.getElementById("image");

const preview =
document.getElementById("preview");

image.addEventListener(
"change",
()=>{

const file =
image.files[0];

if(file){

preview.src =
URL.createObjectURL(file);

preview.style.display =
"inline-block";

}

}
);

function addFeature(){

const box =
document.getElementById(
"featuresBox"
);

const div =
document.createElement(
"div"
);

div.className =
"feature-row";

div.innerHTML =

'<input '+
'type="text" '+
'name="features[]" '+
'placeholder="Enter Feature" '+
'required>' +

'<button '+
'type="button" '+
'class="remove" '+
'onclick="removeFeature(this)">'+
'❌'+
'</button>';

box.appendChild(div);

}

function removeFeature(btn){

const box =
document.getElementById(
"featuresBox"
);

if(
box.children.length > 1
){

btn.parentElement.remove();

}
else{

alert(
"At least one feature required"
);

}

}

</script>

</body>
</html>
`;

}

module.exports = AddService;
