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
    caroselloContent +=
    `<img class="img-dimension"src="${items[i]}" alt="">`
    
}

//1)creo elemento img
//2)imposto src
//3)la inserisco nell'html 

let immagine = document.createElement("img");
immagine.src = items[3]; 
immagine.id = ("immaginePrincipale"); 

const elementContenuto = document.querySelector(".contenuto");
elementContenuto .appendChild(immagine); 

const caroselloWrapper = document.querySelector(".lista-immagini");
caroselloWrapper.innerHTML += caroselloContent;     


/* const immaginiElements = document.getElementsByClassName("lista-immagini");
immaginiElements[0].classList.add("active") */
/* console.log(immaginiElements); */ 


const followingBottom = document.querySelector(".following");

let contatore = 0;

followingBottom.addEventListener("click", function() { 

    caroselloWrapper [contatore] .classList.remove('active');
    
    contatore++;

    caroselloWrapper [contatore] .classList.add('active');


  /* console.log("ciao")  */ 
 }); 

/* const previousOneBottom = document.querySelector(".previousOne");

previousOneBottom.addEventListener("click", function() {
    
    caroselloWrapper[contatore].classList.remove('active');
    
    contatore--;

    caroselloWrapper[contatore].classList.add('active'); 


  console.log("ciao")  
}); */