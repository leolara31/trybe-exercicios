let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var maiorValor = 0;

for (var index = 0; index < numbers.length; index++) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index];
  }
}
console.log("o maior valor é:", maiorValor);
