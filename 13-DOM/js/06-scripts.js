const encabezado = document.querySelector('.contenido-hero h1').textContent;

console.log(encabezado);


/* console.log(encabezado.innerText); //Si en el CSS visivility: hidden; no lo va a encontrar
console.log(encabezado.textContent); //Si lo va a encontrar
console.log(encabezado.innerHTML);  //se trae el HTML */

/* const nuevoHeading = 'Nuevo Heading variable'


document.querySelector('.contenido-hero h1').textContent = nuevoHeading; */


const imagen = document.querySelector('.card img')
imagen.src = 'img/hacer2.jpg'