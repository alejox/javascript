function sumar(a, b) {
  return a + b;
}

const result = sumar(2, 3);

console.log(result);

//Ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return total * 1.19;
}

function iva(totalPagar) {
  return totalPagar / 1.19;
}

function ivaResult(total, iva){
  return total - iva
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);
const impuesto = Math.floor(iva(totalPagar));
const resultIva = Math.floor(ivaResult(totalPagar, impuesto))

console.log(
  `El total a pagar es de $${totalPagar} y el valor antes de iva es de $${impuesto}, y su iva es igual a $${resultIva} para una suma de $${impuesto + resultIva}`
);

console.log(total);
