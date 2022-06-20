// Prendo tutte le immagini figlie di carousel-image-container
//le salvo in un array (o come se lo fosse)

// devo aggiungere l'event listener:
//al bottone next, sul click, viene aggiunta la classe active sull'immagine successiva
//dobbiamo rimuovere l'active su quella precedente

let activeElementIndex=1;

const imgsWrapper = document.querySelector('carousel-wrapper .carousel-image-container');
const imgList = imgsWrapper.children;

imgList[activeElementIndex].classList.add('active');

//quando premo un bottone, prendo l'immagine attuale e la nascondo e mostro la successiva

const btnNext = document.getElementById('next-button');

btnNext.addEventListener('click', function(){
    //rimuovo l'immagine attuale
imgList[activeElementIndex].classList.remove('active');
//scorro di un posto l'elemento attivo
activeElementIndex++;

if(activeElementIndex ==imgList.length){
    activeElementIndex=0;
}

//aggiungo la classe active al nuovo elemento attivo
// imgList[activeElementIndex].classList.add('active');

document.querySelectorAll('.carousel-image-container img')[activeElementIndex].classlist.add('active');
console.log('L\'elemento adesso attivo è in posizione: ' + activeElementIndex);
});
