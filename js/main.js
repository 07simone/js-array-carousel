 // a) scorrimento delle immagini
      //inserire i bottoni per cambiare l'immagini
      //trovare un  modo per far si che quando premo i bottoni l'immagine sparirà e comparirà quella nuova
    
 const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

  /*  <div class="item active">

                                <img src="img/01.jpg" alt="">
                                <div class="descrizione text-white px-3">
                                    <h1>Lorem</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ut enim nisi cupiditate, nam, quae sequi nostrum numquam, mollitia magni in aliquam ullam est facilis dolor quia laborum tempora quisquam.</p>
                                </div>
                                
                        </div> 



   <div class="list-img active">
                                <img src="img/02.jpg" alt="">
                            </div>
 */




    let itemsContent = "";      
    let thumsContent =  "";

    for (let i = 0 ; i < images.length; i++){
        itemsContent +=`
        <div class="item ">
        <img src="${images[i]}" alt=""${title[i]}"">
        <div class="descrizione text-white px-3">
            <h1>"${title[i]}"</h1>
            <p>"${text[i]}"</p>
        </div>
    </div>`
    thumsContent += `
    <div class="list-img">
    <img src="${images[i]}" alt="${title[i]}">
    </div>
    `
    }


    const itemsElement = document.querySelector(".jumbotron .items")
    itemsElement.innerHTML = itemsContent;


    const thumsElement = document.querySelector(".jumbotron .thums")
    thumsElement.innerHTML += thumsContent;

    let activeElement = 1;

    document.getElementsByClassName("item")[activeElement].classList.add("active");
    document.getElementsByClassName("thums")[activeElement].classList.add("active"); 
    

const prev = document.querySelector(".previus");
prev.addEventListener("click", function(){
    document.getElementsByClassName("item")[activeElement].classList.remove("active");
    document.getElementsByClassName("thums")[activeElement].classList.remove("active");

    
    if (activeElement === 0){
        activeElement = images.length - 1;
    } else {
        activeElement --;
    }

    document.getElementsByClassName("item")[activeElement].classList.add("active");
    document.getElementsByClassName("thums")[activeElement].classList.add("active");
})


const successiva = document.querySelector(".following")
successiva.addEventListener("click", function(){
    document.getElementsByClassName("item")[activeElement].classList.remove("active");
    document.getElementsByClassName("thums")[activeElement].classList.remove("active");

    
    if (activeElement === images.length - 1){
        activeElement = 0
    } else {
        activeElement ++;
    }
    
    document.getElementsByClassName("item")[activeElement].classList.add("active");
    document.getElementsByClassName("thums")[activeElement].classList.add("active");
})





















/* let caroselloContent="";
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

const elementsContenuto = document.querySelector(".contenuto");
elementsContenuto .appendChild(immagine); 

const carosellosWrapper = document.querySelector(".lista-immagini");
carosellosWrapper.innerHTML += caroselloContent;     


/* const immaginiElements = document.getElementsByClassName("lista-immagini");
immaginiElements[0].classList.add("active") */
/* console.log(immaginiElements); */ 


/* const followingBottom = document.getElementsByClassName(".following");

let contatore = 0;

followingBottom.addEventListener("click", function() { 

    elementsContenuto[contatore].classList.remove(`active`);
    
    contatore++;

    elementsContenuto[contatore].classList.add(`active`);
 */ 

  /* console.log("ciao")  */ 
/*  });  */

/* const previousOneBottom = document.querySelector(".previousOne");

previousOneBottom.addEventListener("click", function() {
    
    caroselloWrapper[contatore].classList.remove('active');
    
    contatore--;

    caroselloWrapper[contatore].classList.add('active'); 


  console.log("ciao")  
}); */