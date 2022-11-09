const pendientes = ['tarea', 'comer', 'proyecto', 'Estudiar JavaScript'];


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

for(let pendiente of pendientes){
  console.log(pendiente);
}

for(let car of carrito){
  console.log(`${car.nombre} : ${car.precio}`);
}