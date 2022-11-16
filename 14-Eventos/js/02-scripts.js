const nav = document.querySelector('.navegacion');

//Registrar un evento
nav.addEventListener('mouseout', () => {
  console.log('saliendo del nav');
  nav.style.backgroundColor = 'transparent';
});
nav.addEventListener('dblclick', () => {
  console.log('entrando al nav');
  nav.style.backgroundColor = 'red';
});


//mousedown - simila al click
// click
//dblclick = double click
//mouseup = cuando sueltas el mosue