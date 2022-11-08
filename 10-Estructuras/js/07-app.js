const efectivo = 900;
const credito = 1000;
const disponible = efectivo + credito;

const totalPagar = 1600;

if (
  efectivo > totalPagar ||
  credito > totalPagar ||
  disponible > totalPagar
) {
  console.log('Si podemos pagar');
} else {
  console.log('Fondos insuficientes');
}
