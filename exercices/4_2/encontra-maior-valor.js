let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero;
for (let i = 0; i < numbers.length; i += 1) {
  if(i > maiorNumero || i == 0){
    maiorNumero = numbers[i];
  }
}

console.log(maiorNumero);