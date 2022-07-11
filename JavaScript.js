const Fizz =3;
const Buzz =5;

for (let i = 1; i <= 99; i++) {
  if (i % (Fizz*Buzz) === 0) {
    console.log("FizzBuzz\t" + i);
  } else if (i % Buzz === 0) {
    console.log("Buzz\t" + i);
  } else if (i % Fizz === 0) {
    console.log("Fizz\t" + i);
  } 
}
