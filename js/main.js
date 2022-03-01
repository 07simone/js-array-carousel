 // a) scorrimento delle immagini
      //inserire i bottoni per cambiare l'immagini
      //trovare un  modo per far si che quando premo i bottoni l'immagine sparirà e comparirà quella nuova
    
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

let caroselloContent="";
for(let i = 0; i < items.length; i++){
    caroselloContent+=
    `${items[i]}`
}


const caroselloWrapper = document.querySelector("carosello");
caroselloWrapper.innerHTML += immaginiElements;   


const immaginiElements = document.getElementsByClassName("lista-immagini");
immaginiElements[0].classList.add("active")
console.log(immaginiElements);


/* const followingBottom = document.querySelector("following");
followingBottom.addEventListener("click", function(){

}) */