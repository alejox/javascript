const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 100 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
];

const result = carrito.every(car => car.precio < 500);
console.log(result);


const result2 = carrito.some(car => car.precio < 500);
console.log(result2);
