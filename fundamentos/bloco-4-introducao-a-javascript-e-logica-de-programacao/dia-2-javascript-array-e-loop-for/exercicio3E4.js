let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numero = 0;

for (index = 0; index < numbers.length; index += 1) {
  numero += numbers[index];
}
console.log(numero / 10);

if (numero > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}
