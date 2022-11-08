const autenticado = true;

if (autenticado) {
  console.log('El usuario esta autenticado');
}

const puntaje = 300;

function revisarPuntaje() {
  if (puntaje > 500) {
    console.log('Excelente');
    return;
  }

  if (puntaje > 300) {
    console.log('Buen puntaje... Felicidades');
    return;
    
  }
}

revisarPuntaje();
