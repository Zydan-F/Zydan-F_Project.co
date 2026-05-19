let buku = JSON.parse(
localStorage.getItem("buku")
) || [

{
judul:"Koala Kumal",
kategori:"Novel",

gambar:
"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1417492522i/23645640.jpg",

link:
"https://www.goodreads.com/book/show/23645640-koala-kumal"
},

{
judul:"Sabar Lagi Bikin",
kategori:"Indie",

gambar:
"https://via.placeholder.com/200x300",

link:"#"
}

];

function tampilBuku(data){

const list =
document.getElementById(
"listBuku"
);

if(!list) return;

list.innerHTML = "";

data.forEach((b)=>{

list.innerHTML += `

<div
class="book-card"
onclick="bukaLink('${b.link}')"
>

<img src="${b.gambar}">

<div class="book-info">

<h3>${b.judul}</h3>

<p>${b.kategori}</p>

</div>

</div>

`;

});

}

function bukaLink(url){

window.open(url,"_blank");

}

function filterBuku(){

const filter =
document.getElementById(
"filter"
).value;

if(filter==="all"){

tampilBuku(buku);

}else{

tampilBuku(

buku.filter(
b=>b.kategori===filter
)

);

}

}

function searchBuku(){

const keyword =
document.getElementById(
"search"
).value.toLowerCase();

const hasil =
buku.filter(

b=>b.judul
.toLowerCase()
.includes(keyword)

);

tampilBuku(hasil);

}

tampilBuku(buku);