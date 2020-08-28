let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaTotal = 0;

for (let i = 0; i < numbers.length; i += 1){
  somaTotal += numbers[i];
}

let maiorOuMenorQue20 = somaTotal / numbers.length > 20?
console.log("Valor maior que 20"):console.log("Valor menor ou igual a 20");