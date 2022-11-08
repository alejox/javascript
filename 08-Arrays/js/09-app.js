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

for (let i = 0; i < carrito.length; i++) {
  console.log(`${carrito[i].nombre} - ${carrito[i].precio}`);
}


carrito.forEach(function(producto){
  console.log(`${producto.nombre} - ${producto.precio}`);
})