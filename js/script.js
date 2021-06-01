'use strict';

let getValue = ` Lorem ipsum dolor sit amet, consectetur adipisicing 
elit. Qui dicta minus molestiae vel beatae natus eveniet ratione `;

const getStr = str => {
   if (typeof str !== 'string') {
      return 'в качестве аргумента передана не строка';
   } else if (str.length > 30) {
      return str.trim().substring(0, 29) + '...';
   } else {
      return str.trim();
   }
};

console.log(getStr(getValue));
