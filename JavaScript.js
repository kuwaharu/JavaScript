for (let i = 1; i <= 99; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz\t" + i);
  } else if (i % 5 === 0) {
    console.log("Buzz\t" + i);
  } else if (i % 3 === 0) {
    console.log("Fizz\t" + i);
  } else {
    console.log();
  }
}
