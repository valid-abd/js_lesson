"use strict";
/*jshint esversion: 6 */

let money;

let start = function () {
	do {
		money = +prompt('Ваш месячный доход?' );
	}
	while (!money);
};

start();

let appData = {
		income: {},
		addIncome: [],
		expenses: {},
		addExpenses: [],
		deposit: false,
		mission: 50000,
		period: 3,
		budget: money,
		budgetDay: 0,
		budgetMonth: 0,
		expensesMonth: 0,
		asking: function () {
			appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'аренда, питание');
			appData.deposit = confirm('Есть ли у вас депозит в банке?');
			for (let i = 0; i < 2; i++) {
				let questions1 = prompt(' Введите обязательную статью расходов?', ' Коммуналка');
				let questions2 = +prompt(' Во сколько это обойдется?' );
			

				while (!questions2){
					questions2 = +prompt(' Во сколько это обойдется?' );
				}
				appData.expenses[questions1] = questions2;
			}
		},

			getExpensesMonth: function () {
				for (let key in appData.expenses) {
					appData.expensesMonth += appData.expenses[key];
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
				let myIncome = appData.mission / appData.budgetMonth;

				if (myIncome > 0) {
					return (' моя цель будет достигаться ' + Math.floor(myIncome) + ' месяц');
				} else {
					return (' цель не будет доcтигаться');
				}
			},
	};

console.log( appData.asking());
console.log('Cумма всех расходов за месяц:', appData.getExpensesMonth());
console.log('Накопления за месяц:', appData.getBudget(appData.budgetMonth));
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

for (let key in appData) {
	console.log(' Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
};
