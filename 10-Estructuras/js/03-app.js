//Operador mayor que y menor que

const dinero = 900;
const tarjeta = 300;
const totalAPagar = 1500;
const cheque = 1200;

if (dinero >= totalAPagar) {
  console.log("Puedes pagar");
} else if (tarjeta + dinero >= totalAPagar) {
  console.log("Puedes pagar con la tarjeta y el efectivo");
} else if (tarjeta + dinero + cheque >= totalAPagar) {
  console.log("Puedes pagar con la tarjeta, el efectivo y el cheque");
} else {
  console.log("Fondos insuficientes");
}
