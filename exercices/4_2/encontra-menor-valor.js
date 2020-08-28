let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let lowerNumber;
for (let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] < lowerNumber || i == 0){
    lowerNumber = numbers[i];
  }
}

console.log(lowerNumber);