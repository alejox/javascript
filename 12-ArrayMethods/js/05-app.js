const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 100 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
];

//Con un foreach

let result = '';
carrito.forEach((producto, index) => {
  if (producto.nombre === 'Tablet') {
    result = carrito[index];
  }
});

console.log(result);


//Con find

const resultado = carrito.find(car => car.nombre === 'Celular')
console.log(resultado);