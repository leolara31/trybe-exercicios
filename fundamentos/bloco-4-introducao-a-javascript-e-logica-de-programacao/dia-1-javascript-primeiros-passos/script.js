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

if(num1 > num2) {
    console.log('num1 é o maior')
}else if(num2 > num1) {
    console.log('num2 é o maior')
}else{
    console.log('num1 é igual a num2')
}

//exercicio 3

const number1 = 20
const number2 = 90
const number3 = 100

if(number1 > number2 && number1 > number3) {
    console.log('number1 é o maior')
}else if(number2 > number1 && number2 > number3) {
    console.log('number2 é o maior')
} else if(number3 > number1 && number3 > number2) {
    console.log('number3 é o maior')
}else {
    console.log('nao tem maior numero entre os 3')
}