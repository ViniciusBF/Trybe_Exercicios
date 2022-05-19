const sum = (...rest) => rest.reduce((acc, curr) => acc + curr);

console.log(sum(1,2,3,4,5))