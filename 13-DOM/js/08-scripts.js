const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes); //Los espacios en blanco son consideradosa los elementos 
// console.log(navegacion.children[1].nodeName); 
// console.log(navegacion.children[1].nodeType); 

const card = document.querySelector('.card')

/* card.children[0].src = 'img/hacer2.jpg'
card.children[1].children[1].textContent = 'Nuevo Heading desde traversing de DOM'

console.log(card.children[1].children[1].textContent); */


//traversing de hijo al padre

// console.log(card.parentElement.parentElement.parentElement);

// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)')
console.log(ultimoCard.previousElementSibling);

