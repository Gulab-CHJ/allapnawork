function GovernmentSection(persons = []) {

let cards = "";


if(persons.length === 0){

cards = `
<div class="no-person">
<h3>No Government Person Available</h3>
</div>
`;

}
else{


persons.forEach((person)=>{


cards += `

<div 
class="person-card"

onclick="window.location.href='/government/person/${person._id}'"

data-search="
${person.name || ""}
${person.position || ""}
${person.address || ""}
">


<div class="person-img">

<img 
src="${person.image || "/images/default-person.png"}"
alt="${person.name || "Person"}">

</div>



<div class="person-body">


<h3>
NAME : ${person.name || ""}
</h3>


<p class="position">
POST : ${person.position || ""}
</p>


<p class="department">
DEPARTMENT : ${person.department || ""}
</p>


<p class="address">
ADDRESS : ${person.address || ""}
</p>


</div>


</div>

`;

});


}



return `


<style>


.government-section{

width:100%;
max-width:1400px;
margin:60px auto;
padding:30px 20px;

}



.government-title{

text-align:center;
font-size:38px;
font-weight:800;
color:#0f3d91;

}


.government-title::after{

content:"";
width:90px;
height:4px;
background:#16a34a;
display:block;
margin:12px auto;
border-radius:20px;

}




.person-search{

max-width:520px;
margin:30px auto;

}



.person-search input{

width:100%;
padding:16px 25px;

border-radius:50px;

border:2px solid #dbeafe;

font-size:16px;

outline:none;

box-shadow:
0 10px 30px rgba(0,0,0,.10);

}





.person-grid{


display:grid;

grid-template-columns:
repeat(auto-fill,minmax(280px,320px));

gap:30px;

justify-content:start;

}





.person-card{


background:
linear-gradient(
145deg,
#ffffff,
#f1f7ff
);


border-radius:25px;

overflow:hidden;

cursor:pointer;


box-shadow:

0 15px 35px rgba(0,0,0,.12);


transition:.4s;


border:1px solid rgba(37,99,235,.15);


}




.person-card:hover{


transform:
translateY(-12px)
scale(1.03);


box-shadow:
0 25px 50px rgba(37,99,235,.25);


}





.person-img{

height:270px;
width:100%;
overflow:hidden;

}



.person-img img{

height:100%;
width:100%;

object-fit:cover;

transition:.5s;

}



.person-card:hover img{

transform:scale(1.08);

}





.person-body{

padding:25px;
text-align:center;

}



.person-body h3{

font-size:22px;

font-weight:800;

color:#0f172a;

}




.position{

color:#2563eb;

font-weight:700;

}



.department{

color:#475569;

}



.address{

font-size:14px;

color:#64748b;

}





.no-person{


padding:50px;

text-align:center;

background:white;

border-radius:20px;

box-shadow:
0 10px 30px rgba(0,0,0,.1);


}






@media(max-width:768px){


.government-title{

font-size:30px;

}



.person-grid{

grid-template-columns:repeat(2,1fr);

gap:15px;

}


.person-img{

height:190px;

}


.person-body{

padding:15px;

}



}



@media(max-width:480px){


.person-grid{

grid-template-columns:1fr;

}


}



</style>




<section class="government-section">


<h2 class="government-title">

Government & Public Representatives

</h2>



<div class="person-search">

<input 

type="text"

id="personSearch"

placeholder="Search Government Person"

onkeyup="searchPerson()"

/>

</div>




<div class="person-grid">


${cards}


</div>


</section>




<script>


function searchPerson(){


let value =

document
.getElementById("personSearch")
.value
.toLowerCase();



let cards =

document.querySelectorAll(".person-card");



cards.forEach(card=>{


let data =

card
.getAttribute("data-search")
.toLowerCase();



if(data.includes(value)){


card.style.display="block";


}

else{


card.style.display="none";


}


});


}



</script>


`;

}


module.exports = GovernmentSection;
