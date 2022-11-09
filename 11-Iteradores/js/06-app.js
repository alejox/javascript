const pendientes = ['tarea', 'comer', 'proyecto', 'Estudiar JavaScript'];

pendientes.forEach((pendiente, indice) => {
  console.log(`${indice} : ${pendiente}`);
});

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

carrito.forEach((car, i) => {
  console.log(`ref ${i} : ${car.nombre} y cuesta $${car.precio} USD`);
})
