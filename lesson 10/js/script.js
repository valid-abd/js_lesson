'use strict';

// Получить кнопку "Рассчитать" через id
let start = document.getElementById('start');
start.disabled = true;
let cancel = document.getElementById('cancel');

// Получить кнопки“ + ”(плюс) через Tag, каждую в своей переменной.
let buttonPlusIncome = document.getElementsByTagName('button')[0];
let buttonPlusExpenses = document.getElementsByTagName('button')[1];

// получить чекбокс по id через querySelector
let checkboxForId = document.querySelector('#deposit-check');

// Получить поля для ввода возможных доходов(additional_income-item) при помощи querySelectorAll
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');

/* Получить все блоки в правой части программы 
через классы(которые имеют класс название - value, 
начиная с class="budget_day-value" и заканчивая class="target_month-value" > )*/
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];

/* Получить оставшиеся поля через querySelector 
каждый в отдельную переменную(Инпуты с левой стороны не забудьте про range)*/
let monthlyIncome = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let incomeItem = document.querySelectorAll('.income-items');
let period = document.querySelector('.period');
let periodSelect = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');

// let appData = {
//   income: {},
//   addIncome: [],
//   incomeMonth: 0,
//   expenses: {},
//   addExpenses: [],
//   deposit: false,
//   percentDeposit: 0,
//   moneyDeposit: 0,
//   budget: 0,
//   budgetDay: 0,
//   budgetMonth: 0,
//   expensesMonth: 0,
//   start: function () {        

//     this.budget = +monthlyIncome.value;
//     this.getExpenses(); 
//     this.getIncome();
//     this.getExpensesMonth();
//     this.getAddExpenses();    
//     this.getAddIncome();
//     this.getBudget();  
//     this.showChangePeriod();
//     this.showChangeIncomePeriodValue();
//     this.disabledInputText();
//     this.changeButtonId();

//     this.showResult();    
//   },
//   showResult: function(){
//     budgetMonthValue.value = this.budgetMonth;
//     budgetDayValue.value = this.budgetDay;
//     expensesMonthValue.value = this.expensesMonth;
//     additionalExpensesValue.value = this.addExpenses.join(', ');
//     additionalIncomeValue.value = this.addIncome.join(', ');
//     targetMonthValue.value = Math.ceil(this.getTargetMonth());
//     incomePeriodValue.value = this.calcSavedMoney();
//   },  
//   addExpensesBlock: function(){      
//     let cloneExpensesItem = expensesItems[0].cloneNode(true);
//     expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlusExpenses);
//     expensesItems = document.querySelectorAll('.expenses-items');
//     if(expensesItems.length === 3){
//       buttonPlusExpenses.style.display = 'none';
//     }
//   },
//   addIncomeBlock: function(){
//     let cloneIncomeItem = incomeItem[0].cloneNode(true);
//     incomeItem[0].parentNode.insertBefore(cloneIncomeItem, buttonPlusIncome);
//     incomeItem = document.querySelectorAll('.income-items');
//     if(incomeItem.length === 3){
//       buttonPlusIncome.style.display = 'none';
//     }
//   },
//   // онлайн изменение числа под бегунком изменения периода
//   showChangePeriod: function(){
//     periodAmount.textContent = periodSelect.value;    
//   },
//   getExpenses: function(){
//     expensesItems.forEach(function(item){
//       let itemExpenses = item.querySelector('.expenses-title').value;
//       let cashExpenses = item.querySelector('.expenses-amount').value;
//       if (itemExpenses !== '' && cashExpenses !== ''){
//         this.expenses[itemExpenses] = cashExpenses;
//       }
//     }, this);
//   },
//   getIncome: function(){
//     incomeItem.forEach(function(item){
//       let itemIncomeTitle = item.querySelector('.income-title').value;
//       let incomeAmount = item.querySelector('.income-amount').value;

//       if (itemIncomeTitle !== '' && incomeAmount !== '') {
//         this.income[itemIncomeTitle] = incomeAmount;
//       }
//     }, this); 

//     for (let key in this.income) {
//       this.incomeMonth = +this.income[key];
//     }
//   },
//   getAddExpenses: function(){
//     let addExpenses = additionalExpensesItem.value.split(',');
//     addExpenses.forEach(function(item){
//       item = item.trim();
//       if(item !== ''){
//         this.addExpenses.push(item);
//       }
//     }, this);
//   },
//   getAddIncome: function(){
//     additionalIncomeItem.forEach(function(item){
//       let itemValue = item.value.trim();
//       if(itemValue !== ''){
//         this.addIncome.push(itemValue);
//       }
//     }, this);
//   },
//   // Функция возвращает сумму всех расходов за месяц
//   getExpensesMonth: function () {
//     for (let key in this.expenses) {
//       this.expensesMonth += +this.expenses[key];
//     }
//     return this.expensesMonth;
//   },
//   // Функция возвращает Накопления за месяц(Доходы минус расходы)
//   getBudget: function () {
//     this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
//     this.budgetDay = Math.floor(this.budgetMonth / 30);
//     return this.budgetMonth;
//   },
//   getStatusIncome: function () {
//     if (this.budgetDay >= 800) {
//       return ('Высокий уровень дохода');
//     } else if (300 <= this.budgetDay && this.budgetDay < 800) {
//       return ('Средний уровень дохода');
//     } else if (0 <= this.budgetDay && this.budgetDay < 300) {
//       return ('Низкий уровень дохода');
//     } else {
//       return ('Что то пошло не так');
//     }
//   },
//   /* Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления и возвращает результат */
//   getTargetMonth: function () {
//     return targetAmount.value / this.budgetMonth;
//   },
//   getInfoDeposit: function () {
//     if (this.deposit) {
//       this.percentDeposit = +prompt('Какой годовой процент?', '10');

//       while (!this.percentDeposit) {
//         this.percentDeposit = +prompt('Какой годовой процент?', '10');
//       }

//       this.moneyDeposit = +prompt('Какая сумма на депозите?', 10000);

//       while (!this.moneyDeposit) {
//         this.moneyDeposit = +prompt('Какая сумма на депозите?', 10000);
//       }
//     }
//   },
//   calcSavedMoney: function () {
//     return this.budgetMonth * periodSelect.value;
//   },
//   // онлайн замена значения "Накопления за период" при изменении периода
//   showChangeIncomePeriodValue: function(){
//     incomePeriodValue.value = this.budgetMonth * periodSelect.value;
//   },
//   // запрет на ввод информации в инпуты левого блока после нажатия на кнопку старт
//   disabledInputText: function(){
//     for (let i = 0; i < document.querySelectorAll('.data input[type=text]').length; i++){
//       if (monthlyIncome.value !== '') {
//         document.querySelectorAll('.data input[type=text]')[i].setAttribute('disabled', '');
//       }
//     }
//   },
//   // замена кнопки Расчитать на кнопку Сбросить
//   changeButtonId: function(){
//     start = document.getElementById('start');
//     cancel = document.getElementById('cancel');
//     if (monthlyIncome.value !== ''){
//       start.style.display = 'none';
//       cancel.style.display = 'block';
//     }
//     cancel.addEventListener('click', this.reset);   
//   },
//   reset(){
//     this.income = {};
//     this.addIncome = [];
//     this.incomeMonth = 0;
//     this.expenses = {};
//     this.addExpenses = [];
//     this.deposit = false;
//     this.percentDeposit = 0;
//     this.moneyDeposit = 0;
//     this.budget = 0;
//     this.budgetDay = 0;
//     this.budgetMonth = 0;
//     this.expensesMonth = 0;
    
//     document.querySelectorAll('.data input[type=text]').forEach(function(item){
//       item.removeAttribute('disabled');
//     });
      
//     document.querySelectorAll('input[type=text]').forEach(function(item){
//       item.value = '';
//     });
      
//     start.style.display = 'block';
//     cancel.style.display = 'none';
//   },
//   eventListiners(){
//     start.addEventListener('click', function () {
//       appData.start();
//       appData.disabledInputText();
//       appData.changeButtonId();
//     });

//     monthlyIncome.addEventListener('change', function () {
//       if (monthlyIncome.value !== '') {
//         start.disabled = false;
//       } else {
//         start.disabled = true;
//       }
//     });

//     buttonPlusExpenses.addEventListener('click', appData.addExpensesBlock);
//     buttonPlusIncome.addEventListener('click', appData.addIncomeBlock);

//     periodSelect.addEventListener('change', function () {
//       appData.showChangePeriod();
//       appData.showChangeIncomePeriodValue();
//     });
//   }
// };

const AppData = function(){
  this.income = {};
  this.addIncome = [];
  this.incomeMonth = 0;
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
};

AppData.prototype.start = function () {

  this.budget = +monthlyIncome.value;
  this.getExpenses(); 
  this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();    
  this.getAddIncome();
  this.getBudget();  
  this.showChangePeriod();
  this.showChangeIncomePeriodValue();
  this.disabledInputText();
  this.changeButtonId();

  this.showResult();    
};
AppData.prototype.showResult = function(){
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
  incomePeriodValue.value = this.calcSavedMoney();
};  
AppData.prototype.addExpensesBlock = function(){      
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlusExpenses);
  expensesItems = document.querySelectorAll('.expenses-items');
  if(expensesItems.length === 3){
    buttonPlusExpenses.style.display = 'none';
  }
};
AppData.prototype.addIncomeBlock = function(){
  let cloneIncomeItem = incomeItem[0].cloneNode(true);
  incomeItem[0].parentNode.insertBefore(cloneIncomeItem, buttonPlusIncome);
  incomeItem = document.querySelectorAll('.income-items');
  if(incomeItem.length === 3){
    buttonPlusIncome.style.display = 'none';
  }
};
// онлайн изменение числа под бегунком изменения периода
AppData.prototype.showChangePeriod = function(){
  periodAmount.textContent = periodSelect.value;    
};
AppData.prototype.getExpenses = function(){
  const _this = this;
  expensesItems.forEach(function(item){    
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if (itemExpenses !== '' && cashExpenses !== ''){
      _this.expenses[itemExpenses] = cashExpenses;
    }
  });
};
AppData.prototype.getIncome = function(){
  const _this = this;
  incomeItem.forEach(function(item){    
    let itemIncomeTitle = item.querySelector('.income-title').value;
    let incomeAmount = item.querySelector('.income-amount').value;

    if (itemIncomeTitle !== '' && incomeAmount !== '') {
      _this.income[itemIncomeTitle] = incomeAmount;
    }
  }); 

  for (let key in this.income) {
    this.incomeMonth = +this.income[key];
  }
};
AppData.prototype.getAddExpenses = function(){
  const _this = this;
  let addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach(function(item){
    item = item.trim();
    if(item !== ''){
      _this.addExpenses.push(item);
    }
  });
};
AppData.prototype.getAddIncome = function(){
  const _this = this;
  additionalIncomeItem.forEach(function(item){
    let itemValue = item.value.trim();
    if(itemValue !== ''){
      _this.addIncome.push(itemValue);
    }
  });
};
// Функция возвращает сумму всех расходов за месяц
AppData.prototype.getExpensesMonth = function () {
  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }
  return this.expensesMonth;
};
// Функция возвращает Накопления за месяц(Доходы минус расходы)
AppData.prototype.getBudget = function () {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  this.budgetDay = Math.floor(this.budgetMonth / 30);
  return this.budgetMonth;
};
AppData.prototype.getStatusIncome = function () {
  if (this.budgetDay >= 800) {
    return ('Высокий уровень дохода');
  } else if (300 <= this.budgetDay && this.budgetDay < 800) {
    return ('Средний уровень дохода');
  } else if (0 <= this.budgetDay && this.budgetDay < 300) {
    return ('Низкий уровень дохода');
  } else {
    return ('Что то пошло не так');
  }
};
/* Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления и возвращает результат */
AppData.prototype.getTargetMonth = function () {
  return targetAmount.value / this.budgetMonth;
};
AppData.prototype.getInfoDeposit = function () {
  if (this.deposit) {
    this.percentDeposit = +prompt('Какой годовой процент?', '10');

    while (!this.percentDeposit) {
      this.percentDeposit = +prompt('Какой годовой процент?', '10');
    }

    this.moneyDeposit = +prompt('Какая сумма на депозите?', 10000);

    while (!this.moneyDeposit) {
      this.moneyDeposit = +prompt('Какая сумма на депозите?', 10000);
    }
  }
};
AppData.prototype.calcSavedMoney = function () {
  return this.budgetMonth * periodSelect.value;
};
// онлайн замена значения "Накопления за период" при изменении периода
AppData.prototype.showChangeIncomePeriodValue = function(){
  incomePeriodValue.value = this.budgetMonth * periodSelect.value;
};
// запрет на ввод информации в инпуты левого блока после нажатия на кнопку старт
AppData.prototype.disabledInputText = function(){
  for (let i = 0; i < document.querySelectorAll('.data input[type=text]').length; i++){
    if (monthlyIncome.value !== '') {
      document.querySelectorAll('.data input[type=text]')[i].setAttribute('disabled', '');
    }
  }
};
// замена кнопки Расчитать на кнопку Сбросить
AppData.prototype.changeButtonId = function(){
  start = document.getElementById('start');
  cancel = document.getElementById('cancel');
  if (monthlyIncome.value !== ''){
    start.style.display = 'none';
    cancel.style.display = 'block';
  }  
};
AppData.prototype.reset = function(){
  this.income = {};
  this.addIncome = [];
  this.incomeMonth = 0;
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;

  document.querySelectorAll('.data input[type=text]').forEach(function(item){
    item.removeAttribute('disabled');
  });

  document.querySelectorAll('input[type=text]').forEach(function(item){
    item.value = '';
  });

  start.style.display = 'block';
  cancel.style.display = 'none';
  start.disabled = true;
  document.querySelector('#deposit-check').checked = false;
};
AppData.prototype.eventListiners = function () {
  let _this = this;
  start.addEventListener('click', function () {       
    _this.start();
    _this.disabledInputText();
    _this.changeButtonId();
  });

  monthlyIncome.addEventListener('change', function () {
    if (monthlyIncome.value !== '') {
      start.disabled = false;
    } else {
      start.disabled = true;
    }
  });

  buttonPlusExpenses.addEventListener('click', appData.addExpensesBlock);
  buttonPlusIncome.addEventListener('click', appData.addIncomeBlock);

  periodSelect.addEventListener('change', function () {    
    _this.showChangePeriod();
    _this.showChangeIncomePeriodValue();
  });

  cancel.addEventListener('click', function () {
    appData.reset();
  });
};

const appData = new AppData();

appData.eventListiners();
