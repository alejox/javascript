/* const encabezado = document.querySelector('h1');
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'arial';
encabezado.style.textTransform = 'uppercase'; */


const card = document.querySelector('.card')
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('nueva-clase', 'segunda-clase')
console.log(card.classList);
