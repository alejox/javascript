const usuario = false;
const puedesPagar = false;

if (usuario && puedesPagar) {
  console.log('Si puedes comprar');
} else if (!puedesPagar && !usuario) {
  console.log('No puedes comprar');
} else if (!usuario) {
  console.log('Inicia sesión o saca una cuenta');
} else if (!puedesPagar) {
  console.log('Fondos insuficientes');
}
