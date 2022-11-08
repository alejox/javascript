const producto = {
  nombre: 'Monitor de 20 pulgadas',
  precio: 300,
  disponible: true,
};

//Destructurin
const { nombre } = producto;

console.log(nombre);

//Destructurin con Arreglos

const numeros = [10, 20, 30, 40, 50];

const [, , ...tercero] = numeros;

console.log(tercero);
