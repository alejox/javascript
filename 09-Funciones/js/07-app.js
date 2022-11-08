iniciarApp();

function iniciarApp() {
  console.log('Iniciando App...');

  segundaFuncion();
}

function segundaFuncion() {
  console.log('Desde la segunda función');

  usuarioAutenticado('Alejandro', 'Grajales');
}

function usuarioAutenticado(usuario, loquesea) {
  console.log('Autenticando usuario... espere');
  console.log(`usuario ${usuario} ${loquesea} autenticado exitosamente`);
}
