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

const producto4 = {
  nombre: 'Celular 2',
  precio: 800,
};

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  nombre: 'Teclado',
  precio: 50,
};

carrito.unshift(producto3);
carrito.push(producto4);

console.table(carrito);
/* 


//Eliminar ultimo elemento de un arreglo

carrito.pop()

console.table(carrito);


//Eliminar primer elemento de un arreglo
carrito.shift()

console.table(carrito); */

carrito.splice(2, 1);

console.table(carrito);
