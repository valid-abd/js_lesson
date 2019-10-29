"use strict";
/*jshint esversion: 6 */

let money = +prompt('Ваш месячный доход?', 20000),
		addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', " аренда, питание").split(','),
		deposit = confirm('Есть ли у вас депозит в банке?'),
		mission = 50000,
		period = 3;
		// budgetDayTwo = (money % 30);

let questions1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Интеренет, вкусняшки'),
		questions2 = +prompt('Во сколько это обойдется?', 2500),
		questions3 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Интеренет, вкусняшки'),
		questions4 = +prompt('Во сколько это обойдется?', 2500);

let showTypeOf = function (data) {
	console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(addExpenses);
showTypeOf(deposit);


let getExpensesMonth = function() {
	return questions2 + questions4;
};

let getAccumulatedMonth = function(){
	return money - getExpensesMonth();
};

let accumulatedMonth = getAccumulatedMonth();

let budgetDay = Math.ceil(getAccumulatedMonth() / 30); 

function getTargetMonth(mission, budget){
	return ' Цель будет достигнута месяцев ' + Math.ceil(mission / budget);
}

let timeReach = period * accumulatedMonth;
console.log(timeReach);


function getStatusIncome(){
let option = (budgetDay >= 800) ? ' Высокий уровень дохода ' :
	(budgetDay >= 300) ? ' Средний уровень дохода ' :
	(budgetDay >= 0) ? 'Низкий уровень дохода' :
	' Что то пошло не так ';
console.log(option);
}
getStatusIncome();

// console.log(questions1.split(','));
// console.log(questions3.split(','));

// console.log(' Расходы за месяц : ' + getExpensesMonth());
console.log('Накопления за месяц с чистой приболью : ' + getAccumulatedMonth());
console.log('чистая прибыль в день: ' + budgetDay);
console.log(getTargetMonth(mission, getAccumulatedMonth()));