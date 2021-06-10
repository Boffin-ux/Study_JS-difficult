'use strict';

let getheading = document.querySelector('.color'),
   getButton = document.querySelector('.change');

document.body.style.backgroundColor = getheading.textContent;
getButton.style.color = getheading.textContent;

getButton.addEventListener('click', () => {
   let addColor = `#${Math.random().toString(16).slice(3, 9)}`;
   document.body.style.backgroundColor = addColor;
   getButton.style.color = addColor;
   getheading.textContent = addColor;
});