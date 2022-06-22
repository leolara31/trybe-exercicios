//exercicio 1
const a = 10;
const b = 15;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//exercicio 2
const num1 = 20;
const num2 = 90;

if (num1 > num2) {
  console.log("num1 é o maior");
} else if (num2 > num1) {
  console.log("num2 é o maior");
} else {
  console.log("num1 é igual a num2");
}

//exercicio 3

const number1 = 20;
const number2 = 90;
const number3 = 100;

if (number1 > number2 && number1 > number3) {
  console.log("number1 é o maior");
} else if (number2 > number1 && number2 > number3) {
  console.log("number2 é o maior");
} else if (number3 > number1 && number3 > number2) {
  console.log("number3 é o maior");
} else {
  console.log("nao tem maior numero entre os 3");
}

//exercicio 4

const unicoValor = 900;

if (unicoValor > 0) {
  console.log('positive');
} else if (unicoValor < 0) {
  console.log('negative');
} else {
  console.log('zero');
};

//exercicio 5

const angulo1 = 120;
const angulo2 = 30;
const angulo3 = 30;

if (angulo1 + angulo2 + angulo3 === 180) {
  console.log("true");
} else if (angulo1 + angulo2 + angulo3 !== 180) {
  console.log("false");
} else {
  console.log("erro");
}

//exercicio 6

let pecaDeXadrez = "Bispo";

if (pecaDeXadrez.toLowerCase() === "bispo") {
  console.log("diagonais");
} else {
  console.log("erro");
}
