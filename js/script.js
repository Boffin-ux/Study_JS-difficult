'use strict';

const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
   fMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

const div = document.createElement('div'),
   addPOne = document.createElement('p'),
   addPTwo = document.createElement('p');
document.body.append(div);
div.append(addPOne);
div.append(addPTwo);
addPOne.style.color = 'red';
addPOne.style.fontWeight = 'bold';
addPTwo.style.color = 'green';
addPTwo.style.fontWeight = 'bold';

// функция для добавления 0 перед значениями
const addZero = (num) => {
   if (num >= 0 && num <= 9) {
      return '0' + num;
   } else {
      return num;
   }
};
// функция для склонения слов
const addDeclension = (value, arr) => {
   if (value % 10 === 1 && value !== 11) {
      return arr[0];
   } else if (value % 10 > 1 && value % 10 < 5 && (value < 10 || value >= 20)) {
      return arr[2];
   } else {
      return arr[1];
   }
};

setInterval(() => {
   const data = new Date(),
      years = data.getFullYear(),
      days = data.getDay(),
      date = data.getDate(),
      months = data.getMonth(),
      hours = data.getHours(),
      minutes = data.getMinutes(),
      seconds = data.getSeconds(),
      today = `${week[days - 1].slice(0, 1).toUpperCase()}${week[days - 1].slice(1)}`;

   addPOne.textContent = `a) Сегодня ${today}, ${date} ${fMonth[months]} ${years} года,
      ${hours} ${addDeclension(hours, ['час', 'часов', 'часа'])} 
      ${minutes} ${addDeclension(minutes, ['минута', 'минут', 'минуты'])} 
      ${seconds} ${addDeclension(seconds, ['секунда', 'секунд', 'секунды'])}`;

   addPTwo.textContent = `б) ${addZero(date)}.${addZero(months)}.${years}
   - ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}, 1000);
