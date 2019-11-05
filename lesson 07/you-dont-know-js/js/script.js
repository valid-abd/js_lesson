"use strict";
/*jshint esversion: 6 */

let delet = document.querySelector('.adv'); // находим родителя с классом 'adv' 


// console.log(delet);
delet.remove();		 // удаляем его (рекламу )
let ava = document.querySelector('body'); //поиск тега 
// ava.setAttribute('style', 'background-image: url(./image/fon.jpg)'); // добавления атрибута и
ava.style.cssText =`
background-image: url(./image/fon.jpg);
`;	// добавляем или изменяем стили 
// ava.setAttribute('src', '');
let collect = document.querySelectorAll('ul');
// let elem = document.querySelectorAll('li');
let elem = collect[2].querySelectorAll('li');
let elem0 = collect[0].querySelectorAll('li');
let elem5 = collect[5].querySelectorAll('li');

// изменение порядка глав книг
let itemBooks = document.querySelectorAll('.books');
let chapterBooks = document.querySelectorAll('.book');
itemBooks[0].appendChild(chapterBooks[1]);
itemBooks[0].appendChild(chapterBooks[0]);
itemBooks[0].appendChild(chapterBooks[4]);
itemBooks[0].appendChild(chapterBooks[3]);
itemBooks[0].appendChild(chapterBooks[5]);
itemBooks[0].appendChild(chapterBooks[2]);
// console.log(elem);

let title = document.querySelectorAll('a');
title[2].innerHTML = "Книга 3. this и Прототипы Объектов"; // изменение наименование главы

let liFirst = document.createElement('li');
liFirst.textContent = 'Глава 8: За пределами ES6';
collect[2].appendChild(liFirst);	
collect[2].append(elem[9]);
// console.log(elem);

collect[0].insertBefore(elem0[3], elem0[2]);
collect[0].insertBefore(elem0[6], elem0[2]);
collect[0].insertBefore(elem0[8], elem0[2]);
collect[0].append(elem0[2]);
collect[0].append(elem0[10]);

collect[5].insertBefore(elem5[2], elem5[6]);
collect[5].insertBefore(elem5[9], elem5[3]);
collect[5].insertBefore(elem5[5], elem5[8]);

// console.log(collect[2]);
