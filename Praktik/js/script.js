"use strict";
/*jshint esversion: 6 */

let money;

let start = function () {
	do {
		money = prompt('Ваш месячный доход?', 10000);
	}
	while (isNaN(money) || money === null || money.trim() === '');
};
start();

let appData = {
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	mission: 50000,
	period: 3,
	budget: money,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	
	asking: function () {
		if (confirm(' Есть ли у вас дополнительны источник заработка?')) {
			let itemIncome;
			let cashIncome;
			do {
				itemIncome = prompt(' Какокй у вас дополнительный заработобок?', 'Таксую');
			}
			while (!isNaN(itemIncome) || itemIncome === null || itemIncome.trim() === '');
			do {
				cashIncome = prompt(' Сколько в месяц зарабатываете на этом? ');
			}
			while (isNaN(cashIncome) || cashIncome === null || cashIncome.trim() === '');
			appData.income[cashIncome] = cashIncome;
			appData.income[itemIncome] = itemIncome;
		}

		let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'аренда, питание');
		appData.addExpenses = addExpenses.toLowerCase().split(',').map(function (item) {
			return item.trim()
		});
		appData.deposit = confirm('Есть ли у вас депозит в банке?');
		for (let i = 0; i < 2; i++) {
			let questions1;
			let question2;
			do {
				questions1 = prompt(' Введите обязательную ежемесячную статью расходов?', ' Коммуналка');
			}
			while (!isNaN(questions1) || questions1 === null || questions1.trim() === '');

			do {
				question2 = prompt(' Во сколько это обойдется?');
			}
			while (isNaN(question2) || question2 === null || question2.trim() === '');

			appData.expenses[questions1] = question2;

		}
	},
	getExpensesMonth: function () {
		for (let key in appData.expenses) {
			appData.expensesMonth += +appData.expenses[key];
		}
		return appData.expensesMonth;
	},
	getBudget: function () {
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budgetMonth / 30); // 
		return appData.budgetMonth;
	},


	getStatusIncome: function () {
		let option = (appData.budgetDay >= 800) ? ' Высокий уровень дохода ' :
			(appData.budgetDay >= 300) ? ' Средний уровень дохода ' :
			(appData.budgetDay >= 0) ? 'Низкий уровень дохода' :
			' Что то пошло не так ';
		console.log(option);
	},
		getTargetMonth: function () {
			 let result = appData.mission / appData.budgetMonth;
			 if (result > 0) {
			 	return ('Цель будет достигнута за период: ' + Math.floor(result));
			 } else {
			 	return ('Цель не будет достигнута');
			 }
		},
	getInfoDeposit: function () {
		if (appData.deposit) {
			appData.percentDeposit;
			appData.moneyDeposit;
		}
		do {
			appData.moneyDeposit = prompt('Какая сумма заложена? ');
		}
		while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === null || appData.moneyDeposit.trim() === '');
		do {
			appData.percentDeposit = prompt(' Какой Годовой процент?', '10');

		}
		while (isNaN(appData.percentDeposit) || appData.percentDeposit === null || appData.percentDeposit.trim() === '');
	},

	calcSavedMoney: function () {
		return appData.budgetMonth * appData.period;
	}
};

console.log(appData.asking());
console.log('Cумма всех расходов за месяц:', appData.getExpensesMonth());
console.log('Накопления за месяц:', appData.getBudget());
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
console.log(appData.getInfoDeposit());
console.log('Доходы по депозиту: ', appData.calcSavedMoney());

console.log(appData.addExpenses.map(function (item) {
	return item[0].toUpperCase() + item.slice(1).toLowerCase();
}).join(','));

for (let key in appData) {
	console.log('Наша программа включает в себя данные: ' + key + ':' + appData[key]);
};
