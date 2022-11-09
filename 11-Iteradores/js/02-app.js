/* for (let i = 0; i <= 10; i += 1) {
  if (i === 5) {
    console.log('CINCO');
    continue;
  }
  
  console.log(`Numero: ${i}`);
} */

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
    descuento: true,
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

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`El producto ${carrito[i].nombre} tiene descuento`);
    continue;
  }
  console.log(carrito[i].nombre);
}
