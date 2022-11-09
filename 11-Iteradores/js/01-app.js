/* for (let i = 0; i <= 20; i += 1) {
  console.log(`Numero: ${i}`);
} */

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`El numero ${i} es fizzbuzz`);
  } else if (i % 2 === 0) {
    console.log(`el numero ${i} es fizz`);
  } else if (i % 3 === 0) {
    console.log(`el numero ${i} es buzz`);
  }
}

/* const carrito = [
  {
    nombre: 'Monitor 27 pulgadas',
    precio: 500,
  },
  {
    nombre: 'Celular',
    precio: 2500,
  },
  {
    nombre: 'Computador',
    precio: 5500,
  },
  {
    nombre: 'Reloj',
    precio: 100,
  },
  {
    nombre: 'Reloj',
    precio: 100,
  },
  {
    nombre: 'Reloj',
    precio: 100,
  },
  {
    nombre: 'Tenis',
    precio: 200,
  },
];

console.log(carrito[0]);
console.log(carrito.length);

for(let i = 0; i < carrito.length; i++){
  console.log(`Estoy en el indice ${i} y soy un ${carrito[i].nombre}`);
} */