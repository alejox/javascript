const carrito = [];

//Definir un producto

const producto = {
  nombre: 'Monitor 32 Pulgadas',
  precio: 400,
};

const producto2 = {
  nombre: 'Celular',
  precio: 800,
};

const producto3 = {
  nombre: 'Teclado',
  precio: 50,
};

let resultado;

resultado = [...carrito, producto, producto3]

resultado = [...resultado, producto2]
resultado = [ producto2,...resultado]

console.table(resultado);

