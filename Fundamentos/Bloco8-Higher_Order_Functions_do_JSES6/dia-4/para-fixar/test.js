const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

console.log(numbers.reduce( (result, crr) => crr % 2 === 0 ? result + crr : result));// test

console.log(numbers.filter((number) => number % 2 === 0).reduce((currentValue, number) => currentValue + number));// resoluçao no exercicio