let i = 1;

do {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`${i} FizzBuzz!!!`);
  } else if (i % 5 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Buzz`);
  }
  i++;
} while (i <= 100);
