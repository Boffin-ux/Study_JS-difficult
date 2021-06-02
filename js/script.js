'use strict';

// Задание №1
let arr = ['77', '21', '123', '95', '324', '489', '6578'];

arr.forEach(item => {
   if (item.slice(0, 1) === '2' || item.slice(0, 1) === '4') {
      console.log(item);
   }
});

// Задание №2
const isPrime = num => {
   for (let i = 2; i < num; i++) {
      if (num % i === 0) {
         return false;
      }
   }
   return num > 1;
};

for (let i = 1; i <= 100; i++) {
   if (isPrime(i) === true) {
      console.log(`${i} - Делители этого числа: 1 и ${i}`);
   }
}


