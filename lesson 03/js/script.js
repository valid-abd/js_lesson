"use strict";
/*jshint esversion: 6 */

let money = +prompt('Ваш месячный доход?'),
		addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split((',')),
		deposit = confirm('Есть ли у вас депозит в банке?'),
		mission = 50000;
		// budgetDayTwo = (money % 30);

let questions1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
		questions2 = +prompt('Во сколько это обойдется?'),
		questions3 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
		questions4 = +prompt('Во сколько это обойдется?');

// alert ('Привет первому занятию' );
console.log(money);
console.log(addExpenses);
console.log(deposit);



console.log('questions1: ', questions1);
console.log('questions2: ', questions2);
console.log('questions3: ', questions3);
console.log('questions4: ', questions4);

let budgetMonth = money - (questions2 + questions4)  // доход за месяц
console.log('budgetMonth: ', budgetMonth); 

let period = mission / budgetMonth;
console.log(Math.ceil(period));

let budgetDay = (budgetMonth / 30);
console.log(Math.floor(budgetDay));

let option = (budgetDay >= 800) ? ' Высокий уровень дохода ' :
	(budgetDay >= 300) ? ' Средний уровень дохода ' :
	(budgetDay >= 0) ? 'Низкий уровень дохода' :
	' Что то пошло не так ';

console.log(option);