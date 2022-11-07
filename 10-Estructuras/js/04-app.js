//Switch case

const metodoDePago = "cheque";

switch (metodoDePago) {
  case "efectivo":
    console.log(`Pagaste con ${metodoDePago}`);
    break;
  case "tarjeta":
    console.log(`Pagaste con ${metodoDePago}`);
    break;
  case "cheque":
    console.log(`Pagaste con ${metodoDePago}`);
    break;
  default:
    console.log('pago desconocido');
    break;
}


const pagando = () => console.log('pagando ...');

pagando();