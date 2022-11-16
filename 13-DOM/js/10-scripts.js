const enlace = document.createElement('A');

// Agregandole el texto
enlace.textContent = 'Nuevo Enlace';

//Añadiendo href
enlace.href = '/nuevo-enlace';

enlace.target = '_blank';

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('nueva-clase');

enlace.onclick = miFuncion;

//Seleccionar la navegación
const navegación = document.querySelector('.navegacion');
navegación.insertBefore(enlace, navegación.children[1]);

function miFuncion() {
  alert('Diste click');
}

// Crear un card de forma dinamica

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Música Rock 2022';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$1.300 por persona';
parrafo3.classList.add('precio');

//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//Crear el card
const card = document.createElement('div');
card.classList.add('card');

//Asginar la imagen
card.appendChild(imagen);

//Asignar la info
card.appendChild(info);

//Insertar en el HTML

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);
