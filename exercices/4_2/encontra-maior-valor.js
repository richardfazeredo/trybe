let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber;
for (let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] > higherNumber || i == 0){
    higherNumber = numbers[i];
  }
}

console.log(higherNumber);