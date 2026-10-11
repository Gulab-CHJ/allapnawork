// // // function EditService(service = {}) {

// // // return `

// // // <!DOCTYPE html>
// // // <html>

// // // <head>

// // // <title>Edit Service</title>

// // // <meta name="viewport" content="width=device-width, initial-scale=1">

// // // <style>

// // // body{
// // // background:linear-gradient(135deg,#0f172a,#2563eb);
// // // font-family:Poppins,sans-serif;
// // // min-height:100vh;
// // // display:flex;
// // // justify-content:center;
// // // align-items:center;
// // // }

// // // .card{

// // // width:90%;
// // // max-width:600px;
// // // background:white;
// // // padding:30px;
// // // border-radius:20px;
// // // box-shadow:0 20px 40px #0005;

// // // }


// // // h1{
// // // text-align:center;
// // // }


// // // input,textarea{

// // // width:100%;
// // // padding:14px;
// // // margin:10px 0;
// // // border-radius:10px;
// // // border:1px solid #ddd;

// // // }


// // // textarea{

// // // height:120px;

// // // }


// // // img{

// // // width:150px;
// // // height:150px;
// // // object-fit:cover;
// // // border-radius:15px;

// // // }


// // // button{

// // // width:100%;
// // // padding:15px;
// // // background:#2563eb;
// // // color:white;
// // // border:0;
// // // border-radius:10px;
// // // font-size:18px;

// // // }


// // // a{

// // // display:block;
// // // text-align:center;
// // // margin-top:15px;

// // // }


// // // </style>

// // // </head>


// // // <body>


// // // <div class="card">


// // // <h1>Edit Service</h1>


// // // <form action="/admin/edit-service/${service._id}" method="POST">


// // // <label>
// // // Service Name
// // // </label>


// // // <input

// // // name="title"

// // // value="${service.title || ''}"

// // // required>



// // // <label>
// // // Image
// // // </label>


// // // <input

// // // name="image"

// // // id="image"

// // // value="${service.image || ''}">


// // // <br>


// // // <img

// // // id="preview"

// // // src="${service.image || '/images/no-image.png'}">


// // // <label>
// // // Description
// // // </label>


// // // <textarea name="description">

// // // ${service.description || ''}

// // // </textarea>



// // // <button>

// // // Update Service

// // // </button>


// // // <a href="/admin/manage-services">

// // // Cancel

// // // </a>



// // // </form>


// // // </div>



// // // <script>

// // // let image=document.getElementById("image");

// // // let preview=document.getElementById("preview");


// // // image.addEventListener("input",()=>{

// // // preview.src=image.value;

// // // });


// // // </script>


// // // </body>

// // // </html>


// // // `;

// // // }


// // // module.exports = EditService;

// // function EditService(service = {}) {

// // return `

// // <!DOCTYPE html>
// // <html>

// // <head>

// // <title>Edit Service</title>

// // <meta name="viewport" content="width=device-width, initial-scale=1">


// // <style>

// // body{

// // background:linear-gradient(135deg,#0f172a,#2563eb);

// // font-family:Arial;

// // min-height:100vh;

// // display:flex;

// // justify-content:center;

// // align-items:center;

// // padding:20px;

// // }


// // .card{

// // width:100%;

// // max-width:600px;

// // background:white;

// // padding:30px;

// // border-radius:20px;

// // box-shadow:0 20px 40px #0005;

// // }


// // h1{

// // text-align:center;

// // }


// // input,textarea{

// // width:100%;

// // padding:14px;

// // margin:10px 0;

// // border-radius:10px;

// // border:1px solid #ddd;

// // }



// // textarea{

// // height:120px;

// // }



// // img{

// // width:150px;

// // height:150px;

// // object-fit:cover;

// // border-radius:15px;

// // }



// // .feature-row{

// // display:flex;

// // gap:10px;

// // margin-bottom:10px;

// // }



// // .feature-row input{

// // flex:1;

// // }



// // .remove{

// // width:45px;

// // background:red;

// // color:white;

// // border:none;

// // border-radius:8px;

// // }



// // .add{

// // background:orange;

// // color:white;

// // border:none;

// // padding:10px;

// // border-radius:8px;

// // cursor:pointer;

// // }



// // button{

// // width:100%;

// // padding:15px;

// // background:#2563eb;

// // color:white;

// // border:0;

// // border-radius:10px;

// // font-size:18px;

// // margin-top:20px;

// // }



// // a{

// // display:block;

// // text-align:center;

// // margin-top:15px;

// // }



// // </style>


// // </head>


// // <body>


// // <div class="card">


// // <h1>
// // Edit Service
// // </h1>



// // <form action="/admin/edit-service/${service._id}" method="POST">



// // <label>
// // Service Name
// // </label>


// // <input

// // name="title"

// // value="${service.title || ''}"

// // required>



// // <label>
// // Image URL
// // </label>


// // <input

// // name="image"

// // id="image"

// // value="${service.image || ''}">


// // <img

// // id="preview"

// // src="${service.image || '/images/no-image.png'}">





// // <label>
// // Description
// // </label>


// // <textarea

// // name="description">

// // ${service.description || ''}

// // </textarea>





// // <label>
// // Service Features
// // </label>



// // <div id="featuresBox">


// // ${
// // (service.features || [])
// // .map(feature=>`

// // <div class="feature-row">


// // <input

// // type="text"

// // name="features[]"

// // value="${feature}"

// // >


// // <button

// // type="button"

// // class="remove"

// // onclick="removeFeature(this)">

// // ❌

// // </button>


// // </div>

// // `).join("")
// // }



// // </div>



// // <button

// // type="button"

// // class="add"

// // onclick="addFeature()">

// // ➕ Add Feature

// // </button>




// // <button type="submit">

// // Update Service

// // </button>



// // <a href="/admin/manage-services">

// // Cancel

// // </a>



// // </form>



// // </div>




// // <script>


// // let image=document.getElementById("image");

// // let preview=document.getElementById("preview");



// // image.addEventListener("input",()=>{

// // preview.src=image.value;

// // });




// // // Add Feature

// // function addFeature(){


// // let box=document.getElementById("featuresBox");


// // let div=document.createElement("div");


// // div.className="feature-row";


// // div.innerHTML =

// // '<input type="text" name="features[]" placeholder="Enter Feature">'+

// // '<button type="button" class="remove" onclick="removeFeature(this)">❌</button>';


// // box.appendChild(div);


// // }




// // function removeFeature(btn){

// // btn.parentElement.remove();

// // }



// // </script>



// // </body>

// // </html>


// // `;

// // }


// // module.exports = EditService;



// function EditService(service = {}) {

// return `

// <!DOCTYPE html>
// <html lang="en">

// <head>

// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">

// <title>Edit Service</title>

// <style>

// *{
// margin:0;
// padding:0;
// box-sizing:border-box;
// font-family:Arial,sans-serif;
// }

// body{

// background:linear-gradient(135deg,#0f172a,#2563eb);

// display:flex;
// justify-content:center;
// align-items:center;

// min-height:100vh;

// padding:20px;

// }

// .card{

// width:100%;
// max-width:650px;

// background:#fff;

// padding:30px;

// border-radius:20px;

// box-shadow:0 20px 40px rgba(0,0,0,.25);

// }

// h1{

// text-align:center;

// margin-bottom:25px;

// color:#2563eb;

// }

// label{

// display:block;

// margin-top:15px;

// margin-bottom:6px;

// font-weight:bold;

// }

// input,
// textarea{

// width:100%;

// padding:12px;

// border:1px solid #ddd;

// border-radius:10px;

// outline:none;

// font-size:15px;

// }

// textarea{

// height:120px;

// resize:none;

// }

// img{

// margin-top:15px;

// width:180px;

// height:180px;

// object-fit:cover;

// border-radius:15px;

// border:2px solid #ddd;

// }

// .feature-row{

// display:flex;

// gap:10px;

// margin-top:10px;

// }

// .feature-row input{

// flex:1;

// }

// .remove{

// width:45px;

// border:none;

// background:red;

// color:#fff;

// border-radius:8px;

// cursor:pointer;

// font-size:18px;

// }

// .add{

// margin-top:15px;

// background:orange;

// color:#fff;

// padding:12px;

// border:none;

// border-radius:10px;

// cursor:pointer;

// width:100%;

// font-size:16px;

// }

// .submit{

// margin-top:20px;

// background:#2563eb;

// color:white;

// border:none;

// padding:15px;

// border-radius:10px;

// font-size:18px;

// cursor:pointer;

// width:100%;

// }

// .cancel{

// display:block;

// margin-top:15px;

// text-align:center;

// text-decoration:none;

// color:#2563eb;

// font-weight:bold;

// }

// </style>

// </head>

// <body>

// <div class="card">

// <h1>Edit Service</h1>

// <form
// action="/admin/edit-service/${service._id}"
// method="POST"
// enctype="multipart/form-data">

// <label>
// Service Name
// </label>

// <input
// type="text"
// name="title"
// value="${service.title || ""}"
// required>

// <label>
// Service Image
// </label>

// <input
// type="file"
// name="image"
// id="image"
// accept="image/*">

// <br>

// <img
// id="preview"
// src="${service.image || "/images/no-image.png"}">

// <label>
// Description
// </label>

// <textarea
// name="description">${service.description || ""}</textarea>

// <label>
// Features
// </label>

// <div id="featuresBox">

// ${
// (service.features || []).map(feature=>`

// <div class="feature-row">

// <input
// type="text"
// name="features[]"
// value="${feature}">

// <button
// type="button"
// class="remove"
// onclick="removeFeature(this)">
// ❌
// </button>

// </div>

// `).join("")
// }

// </div>

// <button
// type="button"
// class="add"
// onclick="addFeature()">

// ➕ Add Feature

// </button>

// <button
// type="submit"
// class="submit">

// Update Service

// </button>

// <a
// href="/admin/manage-services"
// class="cancel">

// Cancel

// </a>

// </form>

// </div>

// <script>

// const image=document.getElementById("image");

// const preview=document.getElementById("preview");

// image.addEventListener("change",function(){

// if(this.files && this.files[0]){

// preview.src=URL.createObjectURL(this.files[0]);

// }

// });

// function addFeature(){

// const box=document.getElementById("featuresBox");

// const div=document.createElement("div");

// div.className="feature-row";

// div.innerHTML=\`
// <input
// type="text"
// name="features[]"
// placeholder="Enter Feature">

// <button
// type="button"
// class="remove"
// onclick="removeFeature(this)">
// ❌
// </button>
// \`;

// box.appendChild(div);

// }

// function removeFeature(btn){

// btn.parentElement.remove();

// }

// </script>

// </body>

// </html>

// `;

// }

// module.exports = EditService;


function EditService(service = {}) {

return `

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Edit Service</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,sans-serif;
}

body{

    background:
    linear-gradient(
        135deg,
        #0f172a,
        #2563eb
    );

    display:flex;

    justify-content:center;

    align-items:center;

    min-height:100vh;

    padding:20px;

}

.card{

    width:100%;

    max-width:650px;

    background:#fff;

    padding:30px;

    border-radius:20px;

    box-shadow:
    0 20px 40px
    rgba(0,0,0,.25);

}

h1{

    text-align:center;

    margin-bottom:25px;

    color:#2563eb;

}

label{

    display:block;

    margin-top:15px;

    margin-bottom:6px;

    font-weight:bold;

}

input,
textarea{

    width:100%;

    padding:12px;

    border:1px solid #ddd;

    border-radius:10px;

    outline:none;

    font-size:15px;

}

textarea{

    height:120px;

    resize:none;

}

.preview-box{

    margin-top:15px;

    text-align:center;

}

.preview-box img{

    width:180px;

    height:180px;

    object-fit:cover;

    border-radius:15px;

    border:2px solid #ddd;

}

.feature-row{

    display:flex;

    gap:10px;

    margin-top:10px;

}

.feature-row input{

    flex:1;

}

.remove{

    width:45px;

    border:none;

    background:#ef4444;

    color:#fff;

    border-radius:8px;

    cursor:pointer;

    font-size:18px;

}

.add{

    margin-top:15px;

    background:#f59e0b;

    color:#fff;

    padding:12px;

    border:none;

    border-radius:10px;

    cursor:pointer;

    width:100%;

    font-size:16px;

}

.submit{

    margin-top:20px;

    background:#2563eb;

    color:white;

    border:none;

    padding:15px;

    border-radius:10px;

    font-size:18px;

    cursor:pointer;

    width:100%;

}

.submit:hover{

    background:#1d4ed8;

}

.cancel{

    display:block;

    margin-top:15px;

    text-align:center;

    text-decoration:none;

    color:#2563eb;

    font-weight:bold;

}

.help{

    font-size:12px;

    color:#64748b;

    margin-top:5px;

}

</style>

</head>

<body>

<div class="card">

<h1>
✏️ Edit Service
</h1>


<form

action="/admin/edit-service/${service._id}"

method="POST"

enctype="multipart/form-data"

>


<label>
Service Name
</label>

<input

type="text"

name="title"

value="${service.title || ""}"

required

>


<label>
Service Image
</label>

<input

type="file"

name="image"

id="image"

accept=".jpg,.jpeg,.png,.webp"

>


<div class="preview-box">

<img

id="preview"

src="${
    service.image
        ? service.image
        : "/images/no-image.png"
}"

onerror="
this.onerror=null;
this.src='/images/no-image.png';
"

>

</div>


<label>
Description
</label>

<textarea
name="description"
required
>${service.description || ""}</textarea>


<label>
Image Click Link
</label>

<input

type="url"

name="link"

value="${service.link || ""}"

placeholder="https://example.com"

>

<div class="help">

Optional: agar link blank rahega to image normal service details page kholega.

</div>


<label>
Features
</label>


<div id="featuresBox">

${
    Array.isArray(service.features) &&
    service.features.length

    ?

    service.features.map(feature => `

    <div class="feature-row">

        <input

        type="text"

        name="features[]"

        value="${feature || ""}"

        placeholder="Enter Feature"

        >

        <button

        type="button"

        class="remove"

        onclick="removeFeature(this)"

        >
        ❌
        </button>

    </div>

    `).join("")

    :

    `

    <div class="feature-row">

        <input

        type="text"

        name="features[]"

        placeholder="Enter Feature"

        >

        <button

        type="button"

        class="remove"

        onclick="removeFeature(this)"

        >
        ❌
        </button>

    </div>

    `
}

</div>


<button

type="button"

class="add"

onclick="addFeature()"

>

➕ Add Feature

</button>


<button

type="submit"

class="submit"

>

Update Service

</button>


<a

href="/admin/manage-services"

class="cancel"

>

← Cancel

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
function(){

    if(
        this.files &&
        this.files[0]
    ){

        preview.src =
        URL.createObjectURL(
            this.files[0]
        );

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

    '<input ' +
    'type="text" ' +
    'name="features[]" ' +
    'placeholder="Enter Feature">' +

    '<button ' +
    'type="button" ' +
    'class="remove" ' +
    'onclick="removeFeature(this)">' +
    '❌' +
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

module.exports = EditService;
