const num = 266219;

const arr = String(num).split('');

let sum = 1;

arr.forEach((index) => {
   sum *= index;
});

console.log(sum);

const degree = sum ** 3;

console.log(String(degree).substr(0, 2));
