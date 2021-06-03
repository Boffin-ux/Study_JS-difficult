'use strict';

const startGame = () => {

   //проверка значения на число
   const isNumber = n => {
      return !isNaN(parseFloat(n)) && isFinite(n);
   };

   //Получение случайного целого числа в заданном интервале, включительно
   const randomNumber = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   };

   const getRandomNumber = randomNumber(1, 100); // получить рандомное число от 1 до 100

   let attemptNum = 10;

   const isTrue = () => {
      if (attemptNum > 0) {
         const getUserNumber = prompt('Угадай число от 1 до 100');
         if (isNumber(getUserNumber) || getUserNumber === null) {
            if (getRandomNumber < getUserNumber && getUserNumber < 101) {
               attemptNum--;
               alert(`Загаданное число меньше, осталось ${attemptNum} попыток`);
               return isTrue();
            } else if (getRandomNumber > getUserNumber && getUserNumber > 0) {
               attemptNum--;
               alert(`Загаданное число больше, осталось ${attemptNum} попыток`);
               return isTrue();
            } else if (!getUserNumber) {
               return alert('Игра окончена');
            } else if (getRandomNumber === +getUserNumber) {
               const newGame = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
               attemptNum = 10;
               if (newGame) {
                  return startGame();
               }
            } else {
               alert('Введите число от 1 до 100');
               return isTrue();
            }
         } else {
            alert('Введи число!');
            return isTrue();
         }
      } else {
         const newGame = confirm('Попытки закончились, хотите сыграть еще?');
         attemptNum = 10;
         if (newGame) {
            return startGame();
         }
      }
   };
   isTrue();
};
startGame();