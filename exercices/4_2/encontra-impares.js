let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let conta_impares = 0;

for (let i = 0; i < numbers.length; i += 1) {
  conta_impares = numbers[i] % 2 !== 0 ? 
  conta_impares += 1 : conta_impares += 0;
}

let resultado = conta_impares === 0 ? "Nenhum valor ímpar encontrado":
`O array possui ${conta_impares} números ímpares`

console.log(resultado);
  