const usuario = true;
const puedePagar = true;

if(usuario && puedePagar){
  console.log('Si puedes comprar');
}else if(usuario){
  console.log('No tienes saldo en tu cuenta');
}else{
  console.log('Debes ser un usuario registrado para comprar');
}