const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 100 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
];

let result = carrito.filter(producto => producto.precio > 400);
console.log(result);

result = carrito.filter(producto => producto.precio < 600);
console.log(result);

result = carrito.filter(producto => producto.nombre != 'Audifonos');
result = carrito.filter(producto => producto.nombre === 'Audifonos');
console.log(result);
