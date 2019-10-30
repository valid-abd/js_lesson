"use strict";
/*jshint esversion: 6 */

let money,
		addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', " аренда, питание").split(','),
		deposit = confirm('Есть ли у вас депозит в банке?'),
		mission = 50000,
		period = 3;


let start = function () {
	do{
		money = prompt('Ваш месячный доход?', 20000);
	}
	while (isNaN(money) || money === null || money.trim() === '');
};

start();

let questions1,
		questions3;

let getExpensesMonth = function() {
	let sum = 0, que;
	for (let i = 0; i < 2 ; i++) {
		if (i === 0) {
			questions1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Интеренет, вкусняшки');
		}
		if (i === 1) {
			questions3 = prompt(' Введите обязательную статью расходов?', ' дорога, коммуналки');
	}
	do{
		que = prompt(' Во сколько это обойдется?', 2500);
	}
	while (isNaN(que) || que === null || que.trim() === '');
	sum += +que;
}
return sum;
};

let getAccumulatedMonth = function () {
	return money - exensesAmoun;
};

let exensesAmoun = getExpensesMonth();
let accumulatedMonth = getAccumulatedMonth();
let timeReach = period * accumulatedMonth;
console.log(timeReach);


console.log('Накопления за месяц:', getAccumulatedMonth());

let budgetDay = Math.ceil(getAccumulatedMonth() / 30); 

let getTargetMonth = function() {
	let myIncome = Math.ceil(mission / getAccumulatedMonth());

	if (myIncome > 0) {
		return(' моя цель будет достигаться ' + myIncome + ' месяц');
	} else {
		return(' цель не будет доcтигаться');
	}
};


console.log(getTargetMonth());


function getStatusIncome(){
let option = (budgetDay >= 800) ? ' Высокий уровень дохода ' :
	(budgetDay >= 300) ? ' Средний уровень дохода ' :
	(budgetDay >= 0) ? 'Низкий уровень дохода' :
	' Что то пошло не так ';
console.log(option);
}
getStatusIncome();


// console.log(' Расходы за месяц : ' + exensesAmoun );

// console.log('Накопления за месяц с чистой приболью : ' + getAccumulatedMonth());
// console.log('чистая прибыль в день: ' + budgetDay);
// console.log(getTargetMonth(mission, getAccumulatedMonth()));