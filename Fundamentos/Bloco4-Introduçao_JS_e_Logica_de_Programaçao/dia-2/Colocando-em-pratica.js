let array =[31, 5, -1, 76, 24, 13, 674, 89, 12, 781, 241, 70, 9, 842, 17, 49, 801, -27, -28, -35]
let nTermos = array.length;

for(let i = nTermos - 1; i > 0; i -= 1) {
  for(let n = 0; n < i; n += 1) {
    if(array[n] > array[n + 1]) {
      let trocar = array[n];
      array[n] = array[n + 1];
      array[n + 1] = trocar;
    }
  }
}

console.log(array)