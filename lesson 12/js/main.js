window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  //таймер на сайте
  let times = function () {
    let now = new Date();
    let hour = 24 - now.getHours();
    hour = ((hour + '').length == 1 ? hour = '0' + hour : hour) + '';
    let minutes = 60 - now.getMinutes();
    minutes = ((minutes + '').length == 1 ? minutes = '0' + minutes : minutes) + '';
    let seconds = 60 - now.getSeconds();
    seconds = ((seconds + '').length == 1 ? seconds = '0' + seconds : seconds) + '';
    document.querySelector('#timer-hours').textContent = hour;
    document.querySelector('#timer-minutes').textContent = minutes;
    document.querySelector('#timer-seconds').textContent = seconds;
  };
  times();
  setInterval(times, 1000);

  //плавная прокрутка по якорям на сайте
  const goTo = function () {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  };
  goTo();
});



