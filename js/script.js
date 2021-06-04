'use strict';
const date = new Date();
const div = document.createElement('div');
document.body.append(div);

const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'];
week.forEach((item, index) => {
   const p = document.createElement('p');
   if (index + 1 === date.getDay()) {
      p.innerText = item;
      p.style.fontWeight = 'bold';
      div.append(p);
      console.log(`%c${item}`, 'font-weight: bold');
   } else if (index === 5 || index === 6) {
      p.innerText = item;
      p.style.fontStyle = 'italic';
      div.append(p);
      console.log(`%c${item}`, 'font-style:italic');
   } else {
      p.innerText = item;
      div.append(p);
      console.log(item);
   }
});