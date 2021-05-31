// усложненное задание п.1
let lang = 'en';

const rusDaysName = [
   'Воскресенье',
   'Понедельник',
   'Вторник',
   'Среда',
   'Четверг',
   'Пятница',
   'Суббота'
];
const engDaysName = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday '
];

if (lang === 'ru') {
   console.log(rusDaysName);
} else if (lang === 'en') {
   console.log(engDaysName);
} else {
   console.log('Ошибка ввода');
}

switch (lang) {
   case 'ru':
      console.log(rusDaysName);
      break;
   case 'en':
      console.log(engDaysName);
      break;
   default:
      console.log('Ошибка ввода');
}

const daysName = [rusDaysName, engDaysName, 'Ошибка ввода'];
console.log((lang === 'ru') ? daysName[0] :
   (lang === 'en') ? daysName[1] :
      daysName[2]);

// усложненное задание п.2
let namePerson = 'кто-то';
let message = (namePerson === 'Артем') ? 'директор' :
   (namePerson === 'Максим') ? 'преподаватель' :
      'Студент';

console.log(message);
