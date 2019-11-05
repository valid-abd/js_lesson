
"use strict";
/*jshint esversion: 6 */


let startButton = document.querySelector('#start');

let MaxButton = document.getElementsByTagName('button')[0];
let MaxButton2 = document.querySelectorAll('button')[1];
let cancel = document.getElementById('cancel');
let checkbox = document.querySelector('#deposit-check');
let entryField = document.querySelectorAll('.additional_income-item');
let BudgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let BudgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let ExpensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let AdditionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let AdditionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let IncomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let TargetMonthValue = document.getElementsByClassName('target_month-value')[0];

let expensesPlus = document.querySelector('.expenses_add'); // добавления пункта возможных расходов
let incomeAdd = document.querySelector('.income_add'); // добавления пункста возможных доходов 
let SalaryAmount = document.querySelector('.salary-amount');
let IncomeTitle = document.querySelectorAll('.income-title')[1];
let IncomeAmount = document.querySelector('.income-amount');
let ExpensesTitle = document.querySelector('.expenses-title');
let expensesItem = document.querySelectorAll('.expenses-items');
let DepositAmount = document.querySelector('.deposit-amount');
let DepositPercent = document.querySelector('.deposit-percent');
let TargetAmount = document.querySelector('.target-amount');
let PeriodSelect = document.querySelector('.period-select');
// console.log('PeriodSelect: ', PeriodSelect);
let AdditionalExpensesItem = document.querySelector('.additional_expenses-item');
let incomeItems = document.querySelectorAll('.income-items');




let appData = {
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	percentDeposit: 0,
	moneyDeposit: 0,
	deposit: false,
	budget: 0,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	incomeMonth: 0,
	start: function () {

		appData.budget = +SalaryAmount.value;
		appData.getExpenses();
		appData.getIncome();

		appData.getExpensesMonth();
		// appData.showResult();
		appData.getAddExpenses();
		appData.getAddIncome();
		appData.getBudget();
		appData.showResult();
		appData.noneInput();

	},
	showResult: function(){
		BudgetMonthValue.value = appData.budgetMonth;
		BudgetDayValue.value = appData.budgetDay;
		ExpensesMonthValue.value = appData.expensesMonth;
		AdditionalExpensesValue.value = appData.addExpenses.join(', ');
		AdditionalIncomeValue.value = appData.addIncome.join(', ');
		TargetMonthValue.value = Math.ceil(appData.getTargetMonth());
		IncomePeriodValue.value = appData.calcPeriod();

		
		PeriodSelect.addEventListener('input', function () {
					IncomePeriodValue.value = appData.calcPeriod();
		});


	},

	addExpensesBlock: function(){
		let cloneExpensesItem = expensesItem[0].cloneNode(true);
		expensesItem[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
		expensesItem = document.querySelectorAll('.expenses-items');
		if (expensesItem.length === 3) {
			expensesPlus.style.display= 'none';
		}
		cloneExpensesItem.querySelectorAll('input').forEach(function(item){
			item.value='';
		});
	},

	getExpenses: function (){
		expensesItem.forEach(function(item){
			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;
			if (itemExpenses !== '' && cashExpenses !=='') {
				appData.expenses[itemExpenses] = cashExpenses;				
			}
		});
	},

	addIncomeBlock: function(){
		let cloneIncomeItems = incomeItems[0].cloneNode(true);
		incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomeAdd);
		incomeItems = document.querySelectorAll('.income-items');
		if (incomeItems.length === 3) {
			incomeAdd.style.display = 'none';
		}
		cloneIncomeItems.querySelectorAll('input').forEach(function (item) {
			item.value = '';
		});
	},

	getIncome: function(){

			incomeItems.forEach(function (item) {
				let IncomeTitle = item.querySelector('.income-title').value;
				let IncomeAmount = item.querySelector('.income-amount').value;
				if (IncomeTitle !== '' && IncomeAmount !== '') {	
					appData.income[IncomeTitle] = IncomeAmount;
				}
			});
			for(let key in appData.income){
				appData.incomeMonth += +appData.income[key];
			}

	},

	getAddExpenses: function(){
		let addExpenses = AdditionalExpensesItem.value.split(',');
		addExpenses.forEach(function(item){
			item = item.trim();
			if(item !== ''){
				appData.addExpenses.push(item);
			}
		});
	},

	getAddIncome: function(){
		entryField.forEach(function(item){
			let itemValue = item.value.trim();
			if (itemValue !== ''){
				appData.addIncome.push(itemValue);
			}
		});
	},

	getExpensesMonth: function () {
		for (let key in appData.expenses) {
			appData.expensesMonth += +appData.expenses[key];
		}
	},

	getBudget: function () {
		appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budgetMonth / 30); // 
	},

	getTargetMonth: function () {
		return TargetAmount.value / appData.budgetMonth;
		// return appData.mission / appData.budgetMonth;
	},
	getStatusIncome: function () {
		let cmd = (appData.budgetDay >= 800) ? ' Высокий уровень дохода ' :
			(appData.budgetDay >= 300) ? ' Средний уровень дохода ' :
			(appData.budgetDay >= 0) ? 'Низкий уровень дохода' :
			' Что то пошло не так ';
		console.log(cmd);
	},
	calcPeriod: function(){
		return appData.budgetMonth * PeriodSelect.value;
	},
	noneInput() {
			document.querySelectorAll('.data input[type=text]').forEach(function (item) {
				item.disabled = true;
			});
			start.style.display = 'none';
			cancel.style.display = 'block';
		},
};

// calcPeriod
// console.log('calcPeriod: ', appData.calcPeriod());

MaxButton.addEventListener('click', appData.addIncomeBlock);
MaxButton2.addEventListener('click', appData.addExpensesBlock);
startButton.addEventListener('click', appData.start);

PeriodSelect.addEventListener('input', function(){
	document.querySelector('.period-amount').textContent=PeriodSelect.value;
});

startButton.disabled= true;
SalaryAmount.addEventListener('input', function(){
	if (SalaryAmount.value.trim()=== '') {
		startButton.disabled=true;
	} else {
		startButton.disabled = false;
	}
});
console.log();



