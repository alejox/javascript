const login = false
const tarjeta = false

if(login || tarjeta){
  console.log('puede realizar la transaccion');
}else{
  console.log('Necesitas tarjeta o loguearte al sistema');
}