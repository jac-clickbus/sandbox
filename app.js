// É par?

let number = prompt("Insira um número:");

if(number % 2 == 0) {
    console.log("Esse número é par")
} else {
    console.log("Esse número é ímpar")
};

// Calcular IMC 

let weight = prompt("Qual é o peso em kg?");
let height = prompt("Qual é a altura em metros? Use o ponto como separador de decimais, ex.: 1.65");

let imc = weight / height ** 2

console.log(`O IMC é ${imc}.`);

if (imc < 18.5) {
    console.log("Esse IMC é classificado como magreza.")
} else if (imc <= 24.9) {
    console.log("Esse IMC é classificado como normal.")
} else if (imc <= 29.9) {
    console.log("Esse IMC é classificado como sobrepeso.")
} else if (imc <= 34.9) {
    console.log("Esse IMC é classificado como grau I de obesidade.")
} else if (imc <= 39.9) {
    console.log("Esse IMC é classificado como grau II de obesidade.")
} else {
    console.log("Esse IMC é classificado como grau III de obesidade.")
}

// Array

let array = [
    1, 2, 3, 4, 5, 6, 8, 9, 234, 45, 56, 1324, 56, 14, 56, 13445, 34646
];

var max = 0;

// Vendo qual é o maior número: 
for (var index = 0; index < array.length; index ++) {
    if (array[index] > max) {
        max = array[index];
    };
}

console.log(`${max} é o maior número no conjunto.`)

// Calculando a média: 
var sum = 0
for (var i of array) {
    sum += i;
}

var avg = sum / array.length

console.log(`A média do conjunto é ${avg}`)