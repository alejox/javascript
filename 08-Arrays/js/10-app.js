const carrito = [
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
    nombre: 'Tenis',
    precio: 200,
  },
];

const nuevoArreglo = carrito.map(function (producto) {
  console.log(`${producto.nombre} - ${producto.precio}`);
});

const nuevoArreglo2 = carrito.forEach(function (producto) {
  console.log(`${producto.nombre} - ${producto.precio}`);
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
