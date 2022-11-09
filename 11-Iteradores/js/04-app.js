let i = 0; //Inicializar While

/* while (i < 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FizzBuzz!!!`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz!!!`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz!!!`);
  }
  i++; //incrementador
} */

while (i < 100) {
  if (i % 2 == 0) {
    console.log(`${i} es par`);
  }else{
    console.log(`${i} es impar`);
  }
  i++;
}
